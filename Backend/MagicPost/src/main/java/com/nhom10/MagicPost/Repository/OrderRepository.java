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

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    @Query(value = "SELECT * \n"
            +"FROM \n"
            +"`order` o \n" +
            "WHERE o.idOrder = :idOrder", nativeQuery = true)
    Optional<Order> findById(Integer idOrder);
    @Query(value = "SELECT o.* \n"
            +"FROM \n"
            +"`order` o "
            +"WHERE o.receiver_transaction = :idTran", nativeQuery = true)
    List<Order> getReceiveOrders(Integer idTran);
    @Query(value = "SELECT o.* \n"
            +"FROM \n"
            +"`order` o "
            +"WHERE o.sender_transaction = :idTran", nativeQuery = true)
    List<Order> getSendOrders(Integer idTran);
    @Query(value = "SELECT o.* \n"
            +"FROM \n"
            +"`order` o INNER JOIN `shipments_point` s \n"
            +"ON o.receiver_transaction = s.idShipments_point \n"
            +"WHERE s.gathering_point_id = :idGat", nativeQuery = true)
    List<Order> getReceiveOrdersGat(Integer idGat);
    @Query(value = "SELECT o.* \n"
            +"FROM \n"
            +"`order` o INNER JOIN `shipments_point` s \n"
            +"ON o.sender_transaction = s.idShipments_point \n"
            +"WHERE s.gathering_point_id = :idGat", nativeQuery = true)
    List<Order> getSendOrdersGat(Integer idGat);
    @Query(value = "SELECT o.* \n"
            +"FROM \n"
            +"`order` o INNER JOIN `shipments_point` s \n"
            +"ON o.receiver_transaction = s.idShipments_point", nativeQuery = true)
    List<Order> getAllReceiveOrder();
    @Query(value = "SELECT o.* \n"
            +"FROM \n"
            +"`order` o INNER JOIN `shipments_point` s \n"
            +"ON o.sender_transaction = s.idShipments_point", nativeQuery = true)
    List<Order> getAllSendOrder();
}
