package com.nhom10.MagicPost.Controller;

import com.nhom10.MagicPost.Model.ShipmentsPoints;
import com.nhom10.MagicPost.Model.User;
import com.nhom10.MagicPost.Services.ShipmentspointsService;
import com.nhom10.MagicPost.Services.UserService;
import com.nhom10.MagicPost.configuration.JwtAuthenticationFilter;
import com.nhom10.MagicPost.utils.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Do Quang Anh
 */

@RestController
@RequestMapping(path = "/api/shipments")
@RequiredArgsConstructor
public class ShipmentsPointsController {
    private final ShipmentspointsService shipmentspointsService;
    private final JwtService jwtService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final UserService userService;

    //get all the gathering point of magicpost
    @GetMapping("/getGatherings")
    public ResponseEntity<?> getGatherings() {
        return ResponseEntity.ok(shipmentspointsService.findAllGathering());
    }

    //get the workplace of user who is logging in
    @GetMapping("/getUserShipments")
    public ShipmentsPoints getUserShipments(HttpServletRequest request) {
        String token = jwtAuthenticationFilter.getJwtFromRequest(request);
        String username = jwtService.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(username);
        return user.getShipmentsPoints();
    }

    //get all the shipment point at a province (include bot transaction point and gathering point)
    @GetMapping("/getShipmentsByProvince")
    public List<ShipmentsPoints> getShipmentsByProvince(@RequestParam String code) {
        return shipmentspointsService.getShipmentsByProvince(code);
    }
}
