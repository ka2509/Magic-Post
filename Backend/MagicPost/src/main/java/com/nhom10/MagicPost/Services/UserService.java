package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Role;
import com.nhom10.MagicPost.Model.User;
import com.nhom10.MagicPost.utils.AccountResponse;
import com.nhom10.MagicPost.utils.StaffAccountRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nhom10.MagicPost.Repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final ConfirmationTokenService confirmationTokenService;
    private final PasswordEncoder passwordEncoder;
    public List<User> getUsers() {
        return userRepository.findAll();
    }


    @Override
    public User loadUserByUsername(String username)
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
    public User provideStaffAccount(User leader,StaffAccountRequest request) {
        User user = new User();
        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.staff);
        user.setShipmentsPoints(leader.getShipmentsPoints());
        boolean isUserExisted = userRepository.findByUsername(user.getUsername()).isPresent();
        if(isUserExisted) {
            throw new IllegalStateException("Username already existed!");
        }
        return userRepository.save(user);
    }

    public boolean userHasRole(String username, Role role) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return user.getRole() == role;
    }

    public void verifyUser(String email) {
        userRepository.verifyUser(email);
    }

    public  List<AccountResponse> getAllUsers(Integer idShipment) {
            List<User> userList = new ArrayList<>(userRepository.getAllUser(idShipment));
            List<AccountResponse> accountResponses = null;
            for(User u : userList) {
                AccountResponse accountResponse = new AccountResponse(
                        u.getFirstname(),
                        u.getLastname(),
                        u.getEmail(),
                        u.getRole(),
                        u.getAddress()
                );
                accountResponses.add(accountResponse);
            }
            return accountResponses;
    }
}
