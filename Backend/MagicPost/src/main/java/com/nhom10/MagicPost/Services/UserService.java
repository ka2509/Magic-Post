package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nhom10.MagicPost.Repository.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final ConfirmationTokenService confirmationTokenService;
    public List<User> getUsers() {
        return userRepository.findAll();
    }


    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public String signUpUser(User user) {
        boolean isUserExisted = userRepository.findByUsername(user.getUsername()).isPresent();
        if(isUserExisted) {
            throw new IllegalStateException("Username already existed!");
        }
        userRepository.save(user);
        String token = confirmationTokenService.createConfirmationToken(user);
        //Send email

        return token;
    }
    public void verifyUser(String email) {
        userRepository.verifyUser(email);
    }

}
