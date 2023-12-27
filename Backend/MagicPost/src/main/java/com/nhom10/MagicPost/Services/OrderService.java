package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Model.ShipmentsPoints;
import com.nhom10.MagicPost.Repository.OrderRepository;
import com.nhom10.MagicPost.Repository.OrderStatusRepository;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Service

public class OrderService {
    @Autowired
    private  OrderRepository orderRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private ShipmentspointsService shipmentspointsService;
    @Autowired
    private  OrderStatusService orderStatusService;
    @Autowired
    private ProvinceService provinceService;
    @Autowired
    private  DistrictService districtService;
    public Order addOrder(String username, Order order) {
        order.setUser(userService.loadUserByUsername(username));
        ShipmentsPoints senderPoint = order.getUser().getShipmentsPoints();
        ShipmentsPoints receivePoint = shipmentspointsService.findByDistrict(order.getReceiver_district());
        order.setSenderPoint(senderPoint);
        order.setReceiverPoint(receivePoint);
        order.setMain_charge(10F*1000);
        order.setExtra_charge(order.getOrder_weight()*1000);
        order.setSender_province(provinceService.getProvinceFromCode(senderPoint.getPoint_province()));
        order.setSender_district(districtService.getDistrictFromCode(senderPoint.getPoint_district()));
        order.setSender_pos(String.valueOf(senderPoint.getGatheringPoint().getIdShipments_point()*1111 + senderPoint.getIdShipments_point()));
        order.setReceiver_pos(String.valueOf(receivePoint.getGatheringPoint().getIdShipments_point()*1111 + receivePoint.getIdShipments_point()));
        Order newOrder = orderRepository.save(order);
        orderStatusService.generateStatus(newOrder);
        return newOrder;
    }
    public List<Order> getReceiveOrders(Integer idShipmentsPoint) {
        if(idShipmentsPoint > 3) {
            //trả về các hàng nhận tại điểm giao dịch
            return orderRepository.getReceiveOrders(idShipmentsPoint);
        }
        //trả về các hàng nhận tại điểm tập kết
       return orderRepository.getReceiveOrdersGat(idShipmentsPoint);
    }
    public List<Order> getSendOrders(Integer idShipmentsPoint) {
        if(idShipmentsPoint > 3) {
            //trả về các hàng cần gửi tại điểm giao dịch
            return orderRepository.getSendOrders(idShipmentsPoint);
        }
        //trả về các hàng cần gửi tại điểm tập kết
        return orderRepository.getSendOrdersGat(idShipmentsPoint);
    }
    public List<Order> getAllReceiveOrder() {
        //trả về tất cả các đơn mà khách nhận
        return orderRepository.getAllReceiveOrder();
    }
    public List<Order> getAllSendOrder() {
        //trả về tất cả cá đơn mà khách gửi
        return orderRepository.getAllSendOrder();
    }
    public Optional<Order> findById(Integer idOrder) {
        return orderRepository.findById(idOrder);
    }

    public Order loadOrderById(Integer idOrder) {
        return orderRepository.findById(idOrder).orElseThrow();
    }

    public List<Order> getDeliveredOrders(Integer idPoint) {
        return orderRepository.getDeliveredOrders(idPoint);
    }

    public List<Order> getCanceledOrders(Integer idPoint) {
        return orderRepository.getCanceledOrders(idPoint);
    }

    public List<Order> getReceiveOrdersAtNorth() {
        return orderRepository.getReceiveOrdersAtNorth();
    }

    public List<Order> getReceiveOrdersAtMiddle() {
        return orderRepository.getReceiveOrdersAtMiddle();
    }

    public List<Order> getReceiveOrdersAtSouth() {
        return orderRepository.getReceiveOrdersAtSouth();
    }

    public List<Order> getSendOrdersAtNorth() {
        return orderRepository.getSendOrdersAtNorth();
    }
    public List<Order> getSendOrdersAtMiddle() {
        return orderRepository.getSendOrdersAtMiddle();
    }
    public List<Order> getSendOrdersAtSouth() {
        return orderRepository.getSendOrdersAtSouth();
    }
}
