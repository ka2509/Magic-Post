package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.ConfirmationToken;
import com.nhom10.MagicPost.Model.Role;
import com.nhom10.MagicPost.Model.User;
import com.nhom10.MagicPost.Repository.UserRepository;
import com.nhom10.MagicPost.utils.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final ConfirmationTokenService confirmationTokenService;
    private final EmailValidator emailValidator;
    private final UserService userService;
    private final EmailService emailService;
    public String register(RegisterRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());
        if(!isValidEmail) {
            throw new IllegalStateException("Email not valid");
        }
        var userRegister = new User();
        userRegister.setUsername(request.getUsername());
        userRegister.setFirstname(request.getFirstname());
        userRegister.setDob(request.getDob());
        userRegister.setAddress(request.getAddress());
        userRegister.setEmail(request.getEmail());
        userRegister.setLastname(request.getLastname());
        userRegister.setPassword(passwordEncoder.encode(request.getPassword()));
        userRegister.setRole(Role.customer);
        String token = userService.signUpUser(userRegister);
        String link = "http://localhost:9000/api/auth/confirm?token=" + token;
        emailService.send("doquanganhzzz2k3@gmail.com", emailService.buildEmail(request.getFirstname(), link));
        return token;
    }

    @Transactional
    public String confirmToken(String token) {
        ConfirmationToken confirmationToken = confirmationTokenService
                .getToken(token)
                .orElseThrow(() -> new IllegalStateException("token not found"));
        if(confirmationToken.getConfirmedAt() != null) {
            throw new IllegalStateException("Email already confirmed!");
        }
        LocalDateTime expiredAt = confirmationToken.getExpiresAt();
        if(expiredAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("Token is expired!");
        }
        confirmationTokenService.setConfirmedAt(token);
        userService.verifyUser(confirmationToken.getUser().getEmail());
        return "Confirmed!";
    }
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow();
        var jwToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwToken)
                .build();
    }

}
