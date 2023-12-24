package com.nhom10.MagicPost.Controller;

import com.nhom10.MagicPost.Services.ShipmentspointsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/shipments")
@RequiredArgsConstructor
public class ShipmentsPointsController {
    private final ShipmentspointsService shipmentspointsService;

    @GetMapping("/getGatherings")
    public ResponseEntity<?> getGatherings() {
        return ResponseEntity.ok(shipmentspointsService.findAllGathering());
    }
}
