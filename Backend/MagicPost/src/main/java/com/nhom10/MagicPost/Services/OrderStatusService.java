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
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderStatusService {
    private final OrderStatusRepository orderStatusRepository;
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

}
