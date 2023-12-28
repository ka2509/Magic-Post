package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.relational.core.sql.In;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * @author Do Quang Anh
 */

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    @Query(value = "SELECT * \n"
            + "FROM \n"
            + "`order` o \n" +
            "WHERE o.idOrder = :idOrder", nativeQuery = true)
    Optional<Order> findById(Integer idOrder);

    @Query(value = "SELECT o.* \n"
            + "FROM \n"
            + "`order` o "
            + "WHERE o.receiver_transaction = :idTran", nativeQuery = true)
    List<Order> getReceiveOrders(Integer idTran);

    @Query(value = "SELECT o.* \n"
            + "FROM \n"
            + "`order` o "
            + "WHERE o.sender_transaction = :idTran", nativeQuery = true)
    List<Order> getSendOrders(Integer idTran);

    @Query(value = "SELECT o.* \n"
            + "FROM \n"
            + "`order` o INNER JOIN `shipments_point` s \n"
            + "ON o.receiver_transaction = s.idShipments_point \n"
            + "WHERE s.gathering_point_id = :idGat", nativeQuery = true)
    List<Order> getReceiveOrdersGat(Integer idGat);

    @Query(value = "SELECT o.* \n"
            + "FROM \n"
            + "`order` o INNER JOIN `shipments_point` s \n"
            + "ON o.sender_transaction = s.idShipments_point \n"
            + "WHERE s.gathering_point_id = :idGat", nativeQuery = true)
    List<Order> getSendOrdersGat(Integer idGat);

    @Query(value = "SELECT o.* \n"
            + "FROM \n"
            + "`order` o INNER JOIN `shipments_point` s \n"
            + "ON o.receiver_transaction = s.idShipments_point", nativeQuery = true)
    List<Order> getAllReceiveOrder();

    @Query(value = "SELECT o.* \n"
            + "FROM \n"
            + "`order` o INNER JOIN `shipments_point` s \n"
            + "ON o.sender_transaction = s.idShipments_point", nativeQuery = true)
    List<Order> getAllSendOrder();

    @Query(value = "SELECT o.* FROM `order` o INNER JOIN `order_status` os ON o.idOrder = os.order_id WHERE os.state = 'da_den_nguoi_nhan' AND os.point_id = :idPoint", nativeQuery = true)
    List<Order> getDeliveredOrders(Integer idPoint);

    @Query(value = "SELECT o.* FROM `order` o INNER JOIN `order_status` os ON o.idOrder = os.order_id WHERE os.state = 'tra_ve' AND os.point_id = :idPoint", nativeQuery = true)
    List<Order> getCanceledOrders(Integer idPoint);

    @Query(value = "SELECT o.* FROM `order` o INNER JOIN `shipments_point` s ON o.receiver_transaction = s.idShipments_point WHERE s.gathering_point_id = 1", nativeQuery = true)
    List<Order> getReceiveOrdersAtNorth();

    @Query(value = "SELECT o.* FROM `order` o INNER JOIN `shipments_point` s ON o.receiver_transaction = s.idShipments_point WHERE s.gathering_point_id = 2", nativeQuery = true)
    List<Order> getReceiveOrdersAtMiddle();

    @Query(value = "SELECT o.* FROM `order` o INNER JOIN `shipments_point` s ON o.receiver_transaction = s.idShipments_point WHERE s.gathering_point_id = 3", nativeQuery = true)
    List<Order> getReceiveOrdersAtSouth();

    @Query(value = "SELECT o.* FROM `order` o INNER JOIN `shipments_point` s ON o.sender_transaction = s.idShipments_point WHERE s.gathering_point_id = 1", nativeQuery = true)
    List<Order> getSendOrdersAtNorth();

    @Query(value = "SELECT o.* FROM `order` o INNER JOIN `shipments_point` s ON o.sender_transaction = s.idShipments_point WHERE s.gathering_point_id = 2", nativeQuery = true)
    List<Order> getSendOrdersAtMiddle();

    @Query(value = "SELECT o.* FROM `order` o INNER JOIN `shipments_point` s ON o.sender_transaction = s.idShipments_point WHERE s.gathering_point_id = 3", nativeQuery = true)
    List<Order> getSendOrdersAtSouth();
}
