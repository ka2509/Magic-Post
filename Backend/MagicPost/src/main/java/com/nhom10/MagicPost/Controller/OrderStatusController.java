package com.nhom10.MagicPost.Controller;

import com.nhom10.MagicPost.Model.Role;
import com.nhom10.MagicPost.Model.User;
import com.nhom10.MagicPost.Services.OrderStatusService;
import com.nhom10.MagicPost.Services.UserService;
import com.nhom10.MagicPost.configuration.JwtAuthenticationFilter;
import com.nhom10.MagicPost.utils.JwtService;
import com.nhom10.MagicPost.utils.OrderUpdateLastStatusRequest;
import com.nhom10.MagicPost.utils.OrderUpdateStatusRequest;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/orderStatus")
@RequiredArgsConstructor
public class OrderStatusController {
    private final OrderStatusService orderStatusService;
    private final JwtService jwtService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final UserService userService;
    //when staff at a workplace have received an order and sent it they need to click at update button and then status
    //of that id can be updated
    @PostMapping("/updateStatus")
    public ResponseEntity<?> updateStatus(@RequestBody OrderUpdateStatusRequest request, HttpServletRequest userRequest) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(userRequest);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if(user.getRole() == Role.staff) {
            if(orderStatusService.updateStatus(request.getIdOrder(),request.getIdPoint())) {
                return ResponseEntity.ok(orderStatusService.getOrderStateInformation(request.getIdOrder(),request.getIdPoint()));
            }
            else {
                return ResponseEntity.status(500).build();
            }
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }
    @PostMapping("/lastStatusOfOrder")
    public ResponseEntity<?> updateLastStatus(@RequestBody OrderUpdateLastStatusRequest request, HttpServletRequest userRequest) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(userRequest);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if(user.getRole() == Role.staff) {
            return ResponseEntity.ok(orderStatusService.updateLastStatus(request.getIdOrder(),request.getIdPoint(), request.isSuccess()));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }
    @PostMapping("/printOrderState")
    public ResponseEntity<?> getOrderStateInformation(@RequestBody OrderUpdateStatusRequest request, HttpServletRequest userRequest) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(userRequest);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if(user.getRole() == Role.staff) {
            return ResponseEntity.ok(orderStatusService.getOrderStateInformation(request.getIdOrder(),request.getIdPoint()));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }
}
