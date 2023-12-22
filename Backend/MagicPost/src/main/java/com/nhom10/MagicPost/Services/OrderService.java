package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final UserService userService;
    private final ShipmentspointsService shipmentspointsService;

    public Order addOrder(String username, Order order) {
        order.setUser(userService.loadUserByUsername(username));
        order.setSenderPoint(shipmentspointsService.findByDistrict(order.getSender_district()));
        order.setReceiverPoint(shipmentspointsService.findByDistrict(order.getReceiver_district()));
        return orderRepository.save(order);
    }

    public Optional<Order> findById(Integer idOrder) {
        return orderRepository.findById(idOrder);
    }
}
