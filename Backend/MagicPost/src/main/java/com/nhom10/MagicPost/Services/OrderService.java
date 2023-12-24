package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Model.ShipmentsPoints;
import com.nhom10.MagicPost.Repository.OrderRepository;
import com.nhom10.MagicPost.Repository.OrderStatusRepository;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final UserService userService;
    private final ShipmentspointsService shipmentspointsService;
    private final OrderStatusService orderStatusService;
    public Order addOrder(String username, Order order) {
        order.setUser(userService.loadUserByUsername(username));
        ShipmentsPoints senderPoint = shipmentspointsService.findByDistrict(order.getSender_district());
        ShipmentsPoints receivePoint = shipmentspointsService.findByDistrict(order.getReceiver_district());
        order.setSenderPoint(senderPoint);
        order.setReceiverPoint(receivePoint);
        Order newOrder = orderRepository.save(order);
        orderStatusService.generateStatus(newOrder);
        return newOrder;
    }
    public Optional<Order> findById(Integer idOrder) {
        return orderRepository.findById(idOrder);
    }
}
