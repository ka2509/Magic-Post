package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Model.OrderStatus;
import com.nhom10.MagicPost.Model.ShipmentsPoints;
import com.nhom10.MagicPost.Model.State;
import com.nhom10.MagicPost.Repository.OrderStatusRepository;
import com.nhom10.MagicPost.modelkey.OrderStatusKey;
import com.nhom10.MagicPost.utils.OrderBetweenTwoPointResponse;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * @author Do Quang Anh
 */

@Service
@RequiredArgsConstructor
public class OrderStatusService {
    private final OrderStatusRepository orderStatusRepository;
    private final OrderService orderService;
    private final ShipmentspointsService shipmentspointsService;

    public void generateStatus(Order order) {
        ShipmentsPoints senderPoint = order.getSenderPoint();
        ShipmentsPoints receivePoint = order.getReceiverPoint();
        if (Objects.equals(senderPoint.getGatheringPoint().getIdShipments_point(), receivePoint.getGatheringPoint().getIdShipments_point())) {
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
            OrderStatus orderStatus4 = new OrderStatus(
                    order.getIdOrder(),
                    receivePoint.getIdShipments_point(),
                    State.chua_den_nguoi_nhan,
                    null,
                    4,
                    order,
                    senderPoint);
            orderStatusRepository.save(orderStatus1);
            orderStatusRepository.save(orderStatus2);
            orderStatusRepository.save(orderStatus3);
            orderStatusRepository.save(orderStatus4);
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
            OrderStatus orderStatus5 = new OrderStatus(
                    order.getIdOrder(),
                    receivePoint.getIdShipments_point(),
                    State.chua_den_nguoi_nhan,
                    null,
                    5,
                    order,
                    senderPoint);
            orderStatusRepository.save(orderStatus1);
            orderStatusRepository.save(orderStatus2);
            orderStatusRepository.save(orderStatus3);
            orderStatusRepository.save(orderStatus4);
            orderStatusRepository.save(orderStatus5);
        }
    }

    //update status of an order when staff clicked update
    public boolean updateStatus(Integer idOrder, Integer idPoint) {
        Order order = orderService.loadOrderById(idOrder);
        List<OrderStatus> statuses = order.getStatuses();
        if (statuses.size() == 5) {
            for (OrderStatus status : statuses) {
                int no = status.getOrderStatusKey().getNo();
                if (status.getShipmentsPoints().getIdShipments_point() == idPoint && no <= 4) {
                    int nextNo = no + 1;
                    orderStatusRepository.updateStatusThisPoint(idOrder, idPoint, no, State.den.name(), LocalDateTime.now());
                    if (nextNo <= 4) {
                        orderStatusRepository.updateStatusNextPoint(idOrder, nextNo, State.dang_den.name());
                    } else {
                        orderStatusRepository.updateStatusNextPoint(idOrder, nextNo, State.dang_den_nguoi_nhan.name());
                    }
                    return true;
                }
            }
        } else if (statuses.size() == 4) {
            for (OrderStatus status : statuses) {
                int no = status.getOrderStatusKey().getNo();
                if (status.getShipmentsPoints().getIdShipments_point() == idPoint && no <= 3) {
                    int nextNo = no + 1;
                    orderStatusRepository.updateStatusThisPoint(idOrder, idPoint, no, State.den.name(), LocalDateTime.now());
                    if (nextNo <= 3) {
                        orderStatusRepository.updateStatusNextPoint(idOrder, nextNo, State.dang_den.name());
                    } else {
                        orderStatusRepository.updateStatusNextPoint(idOrder, nextNo, State.dang_den_nguoi_nhan.name());
                    }
                    return true;
                }
            }
        }
        return false;
    }

    public String updateLastStatus(Integer idOrder, Integer idPoint, boolean isSuccess) {
        if (isSuccess) {
            orderStatusRepository.updateLastStatus(idOrder, idPoint, State.da_den_nguoi_nhan.name(), LocalDateTime.now());
            return "Delivered!";
        } else {
            orderStatusRepository.updateLastStatus(idOrder, idPoint, State.tra_ve.name(), LocalDateTime.now());
            return "Order sent back!";
        }
    }

    public OrderBetweenTwoPointResponse getOrderStateInformation(Integer idOrder, Integer idPoint) {
        Order order = orderService.findById(idOrder).orElseThrow(null);
        ShipmentsPoints sendPoint = shipmentspointsService.findById(idPoint).orElseThrow(null);
        OrderStatus thisPointStatus = orderStatusRepository.getThisStatus(idOrder, idPoint);
        OrderStatus nextPointStatus = orderStatusRepository.getNextStatus(idOrder, thisPointStatus.getOrderStatusKey().getNo() + 1);
        ShipmentsPoints receivePoint = shipmentspointsService.findById(nextPointStatus.getOrderStatusKey().getPoint_id()).orElseThrow(null);
        return new OrderBetweenTwoPointResponse(
                order.getSender_name(),
                order.getSender_district(),
                order.getSender_province(),
                order.getSender_tel(), order.getSender_pos(),
                order.getReceiver_name(),
                order.getReceiver_district(),
                order.getReceiver_province(),
                order.getReceiver_tel(), order.getReceiver_pos(),
                sendPoint.getPoint_name(),
                sendPoint.getPoint_district(), sendPoint.getPoint_province(),
                receivePoint.getPoint_name(),
                receivePoint.getPoint_district(), receivePoint.getPoint_province(),
                idOrder, thisPointStatus.getConfirmedAt()
        );
    }
}
