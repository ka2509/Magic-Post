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
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * @author Do Quang Anh
 */

@RestController
@RequestMapping(path = "/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final JwtService jwtService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final UserService userService;

    // create order by a staff then insert statuses for that order to database
    @PostMapping("/createOrder")
    ResponseEntity<?> createOrder(@RequestBody Order order, HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        if (userService.userHasRole(username, Role.staff)) {
            return ResponseEntity.ok(orderService.addOrder(username, order));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //get receive orders at workplace of leader
    @GetMapping("/getReceiveOrders")
    private ResponseEntity<?> getReceiveOrders(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.leader && user.getIsVerified() || user.getRole() == Role.staff) {
            return ResponseEntity.ok(orderService.getReceiveOrders(user.getShipmentsPoints().getIdShipments_point()));
        }
        if (user.getRole() == Role.manager) {
            //manager want to get all orders
            return ResponseEntity.ok(orderService.getAllReceiveOrder());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Manager want to check receive orders at a specific shipment point
    @GetMapping("/getReceiveOrders/{idShipment}")
    private ResponseEntity<?> getReceiveOrders(@PathVariable("idShipment") Integer idShipment, HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(orderService.getReceiveOrders(idShipment));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //get all send orders at the workplace of leader
    @GetMapping("/getSendOrders")
    private ResponseEntity<?> getSendOrders(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.leader && user.getIsVerified() || user.getRole() == Role.staff) {
            return ResponseEntity.ok(orderService.getSendOrders(user.getShipmentsPoints().getIdShipments_point()));
        }
        if (user.getRole() == Role.manager) {
            //manager want to get all orders
            return ResponseEntity.ok(orderService.getAllSendOrder());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Manager want to check send orders at a specific shipment point
    @GetMapping("/getSendOrders/{idShipment}")
    private ResponseEntity<?> getSendOrders(@PathVariable("idShipment") Integer idShipment, HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(orderService.getSendOrders(idShipment));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //user want to search for a specific order
    @GetMapping("/view/{idOrder}")
    public Order findById(@PathVariable("idOrder") Integer idOrder) {
        return orderService.findById(idOrder).orElseThrow();
    }

    //Get all order that delivered
    @GetMapping("/getDeliveredOrders")
    public ResponseEntity<?> getDeliveredOrders(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        Integer idPoint = user.getShipmentsPoints().getIdShipments_point();
        if (user.getRole() == Role.staff && idPoint > 3) {
            return ResponseEntity.ok(orderService.getDeliveredOrders(idPoint));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Get all order that canceled
    @GetMapping("/getCanceledOrders")
    public ResponseEntity<?> getCanceledOrders(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        Integer idPoint = user.getShipmentsPoints().getIdShipments_point();
        if (user.getRole() == Role.staff && idPoint > 3) {
            return ResponseEntity.ok(orderService.getCanceledOrders(idPoint));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Get all receive orders at north side for statistic
    @GetMapping("/getReceiveOrdersAtNorth")
    public ResponseEntity<?> getReceiveOrdersAtNorth(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(orderService.getReceiveOrdersAtNorth());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Get all receive orders at middle side for statistic
    @GetMapping("/getReceiveOrdersAtMiddle")
    public ResponseEntity<?> getReceiveOrdersAtMiddle(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(orderService.getReceiveOrdersAtMiddle());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Get all receive orders at south side for statistic
    @GetMapping("/getReceiveOrdersAtSouth")
    public ResponseEntity<?> getReceiveOrdersAtSouth(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(orderService.getReceiveOrdersAtSouth());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Get all send orders at north side for statistic
    @GetMapping("/getSendOrdersAtNorth")
    public ResponseEntity<?> getSendOrdersAtNorth(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(orderService.getSendOrdersAtNorth());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Get all send orders at middle side for statistic
    @GetMapping("/getSendOrdersAtMiddle")
    public ResponseEntity<?> getSendOrdersAtMiddle(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(orderService.getSendOrdersAtMiddle());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    //Get all send orders at south side for statistic
    @GetMapping("/getSendOrdersAtSouth")
    public ResponseEntity<?> getSendOrdersAtSouth(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        if (user.getRole() == Role.manager) {
            return ResponseEntity.ok(orderService.getSendOrdersAtSouth());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }
}
