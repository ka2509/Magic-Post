package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Model.OrderStatus;
import com.nhom10.MagicPost.Model.ShipmentsPoints;
import com.nhom10.MagicPost.Model.State;
import com.nhom10.MagicPost.Repository.OrderStatusRepository;
import com.nhom10.MagicPost.modelkey.OrderStatusKey;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderStatusService {
    private final OrderStatusRepository orderStatusRepository;
    private final OrderService orderService;
    public void generateStatus(Order order) {
        ShipmentsPoints senderPoint = order.getSenderPoint();
        ShipmentsPoints receivePoint = order.getReceiverPoint();
        if(Objects.equals(senderPoint.getGatheringPoint().getIdShipments_point(), receivePoint.getGatheringPoint().getIdShipments_point())) {
            OrderStatus orderStatus1 = new OrderStatus(
                    order.getIdOrder(),
                    senderPoint.getIdShipments_point(),
                    State.den,
                    LocalDateTime.now(),
                    1,
                    order,
                    senderPoint);
            OrderStatus orderStatus2 = new OrderStatus(
                    order.getIdOrder(),
                    receivePoint.getGatheringPoint().getIdShipments_point(),
                    State.dang_den,
                    null,
                    2,
                    order,
                    senderPoint);
            OrderStatus orderStatus3 = new OrderStatus(
                    order.getIdOrder(),
                    receivePoint.getIdShipments_point(),
                    State.chua_den,
                    null,
                    3,
                    order,
                    senderPoint);
            orderStatusRepository.save(orderStatus1);
            orderStatusRepository.save(orderStatus2);
            orderStatusRepository.save(orderStatus3);
        } else {
            OrderStatus orderStatus1 = new OrderStatus(
                    order.getIdOrder(),
                    senderPoint.getIdShipments_point(),
                    State.den,
                    LocalDateTime.now(),
                    1,
                    order,
                    senderPoint);
            OrderStatus orderStatus2 = new OrderStatus(
                    order.getIdOrder(),
                    senderPoint.getGatheringPoint().getIdShipments_point(),
                    State.dang_den,
                    null,
                    2,
                    order,
                    senderPoint);
            OrderStatus orderStatus3 = new OrderStatus(
                    order.getIdOrder(),
                    receivePoint.getGatheringPoint().getIdShipments_point(),
                    State.chua_den,
                    null,
                    3,
                    order,
                    senderPoint);
            OrderStatus orderStatus4 = new OrderStatus(
                    order.getIdOrder(),
                    receivePoint.getIdShipments_point(),
                    State.chua_den,
                    null,
                    4,
                    order,
                    senderPoint);
            orderStatusRepository.save(orderStatus1);
            orderStatusRepository.save(orderStatus2);
            orderStatusRepository.save(orderStatus3);
            orderStatusRepository.save(orderStatus4);
        }
    }

    //update status of an order when staff clicked update
    public boolean updateStatus(Integer idOrder, Integer idPoint) {
        Order order = orderService.loadOrderById(idOrder);
        //OrderStatus status = orderStatusRepository.getStatus(idOrder,idPoint);
        List<OrderStatus> statuses = order.getStatuses();
        for(OrderStatus status : statuses) {
            if(status.getShipmentsPoints().getIdShipments_point() == idPoint) {
                orderStatusRepository.updateStatusThisPoint(idOrder,idPoint,status.getNo(),  State.den.name(),LocalDateTime.now());
                if(status.getNo() + 1 <= 4) {
                    orderStatusRepository.updateStatusNextPoint(idOrder, status.getNo() + 1, State.dang_den.name());
                }
                return true;

            }
        }
        return false;
    }
}
