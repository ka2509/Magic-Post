package com.nhom10.MagicPost.Controller;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping(path = "/api/v1/Orders")
public class OrderController {
    @GetMapping("")
    List<String> getAllName() {
        return List.of("Quang", "Anh");
    }
}
