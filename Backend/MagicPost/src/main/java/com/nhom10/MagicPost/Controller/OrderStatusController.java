package com.nhom10.MagicPost.Controller;

import com.nhom10.MagicPost.Services.OrderStatusService;
import com.nhom10.MagicPost.utils.OrderUpdateStatusRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/orderStatus")
@RequiredArgsConstructor
public class OrderStatusController {
    private final OrderStatusService orderStatusService;

    //when staff at a workplace have received an order and sent it they need to click at update button and then status
    //of that id can be updated
    @PostMapping("/updateStatus")
    public ResponseEntity<?> updateStatus(@RequestBody OrderUpdateStatusRequest request) {
        if(orderStatusService.updateStatus(request.getIdOrder(),request.getIdPoint())) {
            return ResponseEntity.ok("Updated!");
        }
        else {
            return ResponseEntity.status(500).build();
        }
    }
}
