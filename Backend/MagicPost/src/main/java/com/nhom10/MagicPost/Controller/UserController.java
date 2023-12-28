package com.nhom10.MagicPost.Controller;


import com.nhom10.MagicPost.Model.Role;
import com.nhom10.MagicPost.Model.User;
import com.nhom10.MagicPost.Services.UserService;
import com.nhom10.MagicPost.configuration.JwtAuthenticationFilter;
import com.nhom10.MagicPost.utils.JwtService;
import com.nhom10.MagicPost.utils.StaffAccountRequest;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author Do Quang Anh
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("api/users")
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    //manager provide account for a leader or leader provide account for a staff
    @PostMapping("/admin/createAccount")
    public ResponseEntity<?> provideStaffAccount(@RequestBody StaffAccountRequest newStaff, HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User leader = userService.loadUserByUsername(username);
        if (leader.getRole() == Role.leader && leader.getIsVerified()) {
            return ResponseEntity.ok(userService.provideStaffAccount(leader, newStaff));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }
    //get all user's information that work at the same gathering point with the leader of that gathering point
//    @GetMapping("/getAllUsers")
//    public ResponseEntity<?> getAllUsers(HttpServletRequest request) {
//        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
//        String username = jwtService.getUsernameFromToken(token);
//        User user = userService.loadUserByUsername(username);
//        if(user.getRole() == Role.leader && user.getShipmentsPoints().getIdShipments_point() <= 3) {
//            return ResponseEntity.ok(userService.getAllUsers(user.getShipmentsPoints().getIdShipments_point()));
//        }
//        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
//    }


    //Leader get all the staff at their workplace
    @GetMapping("/getAllStaff")
    public ResponseEntity<?> getAllStaff(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.leader && user.getIsVerified()) {
            return ResponseEntity.ok(userService.getAllStaff(user.getShipmentsPoints().getIdShipments_point()));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Manager get information of all the leader of every gathering point include workplace's name
    @GetMapping("/getLeadersOfGats")
    public ResponseEntity<?> getLeadersOfGats(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(userService.getLeadersOfGats());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Manager get information of all the leader of every transaction point include workplace's name
    @GetMapping("/getLeadersOfTrans")
    public ResponseEntity<?> getLeadersOfTrans(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(userService.getLeadersOfTrans());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

   //leader delete account of a staff
    @DeleteMapping("/delete/{idUser}")
    public void deleteStaffById(@PathVariable("idUser") Integer idUser, HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);

        if (user.getRole() == Role.leader && user.getIsVerified()) {
            userService.deleteUserById(idUser);
        }
    }

   //manager inactivate an account of a leader
    @GetMapping("/unActivate/{idUser}")
    public void unActivateLeader(@PathVariable("idUser") Integer idUser, HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            userService.unActivateLeader(idUser);
        }
    }

   //manager activate an account for leader
    @GetMapping("/activate/{idUser}")
    public void activateLeader(@PathVariable("idUser") Integer idUser, HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            userService.activateLeader(idUser);
        }
    }
}
