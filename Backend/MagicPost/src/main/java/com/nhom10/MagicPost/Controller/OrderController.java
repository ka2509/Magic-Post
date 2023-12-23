package com.nhom10.MagicPost.Controller;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Model.Role;
import com.nhom10.MagicPost.Model.User;
import com.nhom10.MagicPost.Repository.OrderRepository;
import com.nhom10.MagicPost.Services.OrderService;
import com.nhom10.MagicPost.Services.OrderStatusService;
import com.nhom10.MagicPost.Services.UserService;
import com.nhom10.MagicPost.configuration.JwtAuthenticationFilter;
import com.nhom10.MagicPost.utils.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/Orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final OrderStatusService orderStatusService;
    private final JwtService jwtService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final UserService userService;
    @PostMapping("/create-order")
    ResponseEntity<?> createOrder(@RequestBody Order order, HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        if(userService.userHasRole(username, Role.customer)) {
            System.out.println("hello");
            Order newOrder = orderService.addOrder(username, order);
            return ResponseEntity.ok(newOrder);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }
    @PostMapping("/status")
    ResponseEntity<?> generateStatus(@RequestParam Integer idOrder) {
       Order order = orderService.findById(idOrder).orElse(null);
        orderStatusService.generateStatus(order);
       return ResponseEntity.ok("DONE");
    }
    @GetMapping("/view/{idOrder}")
    public Order findById(@PathVariable("idOrder")Integer idOrder) {
        System.out.println(idOrder);
        return orderService.findById(idOrder).orElse(null);
    }
}
