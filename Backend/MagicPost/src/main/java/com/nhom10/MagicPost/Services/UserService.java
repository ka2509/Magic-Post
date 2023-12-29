package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Role;
import com.nhom10.MagicPost.Model.User;
import com.nhom10.MagicPost.utils.LeaderAccountResponse;
import com.nhom10.MagicPost.utils.LeaderUpdateRequest;
import com.nhom10.MagicPost.utils.StaffAccountResponse;
import com.nhom10.MagicPost.utils.StaffAccountRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nhom10.MagicPost.Repository.UserRepository;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Do Quang Anh
 */

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
        if (isUserExisted) {
            throw new IllegalStateException("Username already existed!");
        }
        userRepository.save(user);
        String token = confirmationTokenService.createConfirmationToken(user);
        //Send email

        return token;
    }

    public User provideStaffAccount(User leader, StaffAccountRequest request) {
        User user = new User();
        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setDob(request.getBirthday());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.staff);
        user.setShipmentsPoints(leader.getShipmentsPoints());
        boolean isUserExisted = userRepository.findByUsername(user.getUsername()).isPresent();
        if (isUserExisted) {
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

//    public  List<AccountResponse> getAllUsers(Integer idShipment) {
//            List<User> userList = userRepository.getAllUser(idShipment);
//            List<AccountResponse> accountResponses = new ArrayList<>(userList.size());
//            for(User u : userList) {
//                AccountResponse accountResponse = new AccountResponse(
//                        u.getFirstname(),
//                        u.getLastname(),
//                        u.getEmail(),
//                        u.getRole(),
//                        u.getAddress(),
//                        u.getDob()
//                );
//                accountResponses.add(accountResponse);
//            }
//            return accountResponses;
//    }

    public List<StaffAccountResponse> getAllStaff(Integer idShipment) {
        List<User> userList = userRepository.getAllStaffFromShipment(idShipment);
        List<StaffAccountResponse> staffAccountRespons = new ArrayList<>(userList.size());
        for (User u : userList) {
            StaffAccountResponse staffAccountResponse = new StaffAccountResponse(
                    u.getFirstname(),
                    u.getLastname(),
                    u.getEmail(),
                    u.getRole(),
                    u.getAddress(),
                    u.getDob(),
                    u.getIdUser(),
                    u.getShipmentsPoints().getPoint_name()
            );
            staffAccountRespons.add(staffAccountResponse);
        }
        return staffAccountRespons;
    }

    public List<LeaderAccountResponse> getLeadersOfGats() {
        List<User> userList = userRepository.getAllLeaderFromAllGat();
        List<LeaderAccountResponse> leaderAccountResponses = new ArrayList<>(userList.size());
        for (User u : userList) {
            LeaderAccountResponse leaderAccountResponse = new LeaderAccountResponse(
                    u.getFirstname(),
                    u.getLastname(),
                    u.getEmail(),
                    u.getRole(),
                    u.getAddress(),
                    u.getDob(),
                    u.getShipmentsPoints().getPoint_name(),
                    u.getIsVerified(),
                    u.getIdUser()
            );
            leaderAccountResponses.add(leaderAccountResponse);
        }
        return leaderAccountResponses;
    }

    public List<LeaderAccountResponse> getLeadersOfTrans() {
        List<User> userList = userRepository.getAllLeaderFromAllTran();
        List<LeaderAccountResponse> leaderAccountResponses = new ArrayList<>(userList.size());
        for (User u : userList) {
            LeaderAccountResponse leaderAccountResponse = new LeaderAccountResponse(
                    u.getFirstname(),
                    u.getLastname(),
                    u.getEmail(),
                    u.getRole(),
                    u.getAddress(),
                    u.getDob(),
                    u.getShipmentsPoints().getPoint_name(),
                    u.getIsVerified(),
                    u.getIdUser()
            );
            leaderAccountResponses.add(leaderAccountResponse);
        }
        return leaderAccountResponses;
    }

    public void deleteUserById(Integer idUser) {
        userRepository.deleteUserById(idUser);
    }

    public void unActivateLeader(Integer idUser) {
        userRepository.unActivateLeader(idUser);
    }

    public void activateLeader(Integer idUser) {
        userRepository.activateLeader(idUser);
    }

    public void updateLeader(Integer idUser, LeaderUpdateRequest updateRequest) {
        userRepository.updateLeader(idUser, updateRequest.getFirstName(), updateRequest.getLastName(), updateRequest.getEmail(), updateRequest.getBirthday());
    }
}
