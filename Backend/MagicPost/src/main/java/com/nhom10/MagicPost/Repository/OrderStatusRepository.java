package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.OrderStatus;
import com.nhom10.MagicPost.Model.State;
import com.nhom10.MagicPost.modelkey.OrderStatusKey;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

/**
 * @author Do Quang Anh
 */

@Repository
public interface OrderStatusRepository extends JpaRepository<OrderStatus, OrderStatusKey> {

    @Transactional
    @Modifying
    @Query(value = "UPDATE `order_status` o \n"
            + "SET o.state = :state, o.confirmedAt = :now \n"
            + "WHERE o.order_id = :idOrder AND o.point_id = :idPoint AND o.no = :no", nativeQuery = true)
    void updateStatusThisPoint(Integer idOrder, Integer idPoint, int no, String state, LocalDateTime now);

    @Transactional
    @Modifying
    @Query(value = "UPDATE `order_status` o \n"
            + "SET o.state = :state \n"
            + "WHERE o.order_id = :idOrder AND o.no = :no", nativeQuery = true)
    void updateStatusNextPoint(Integer idOrder, int no, String state);

    @Query(value = "SELECT * FROM `order_status` o WHERE o.order_id = :idOrder AND o.point_id = :idPoint", nativeQuery = true)
    OrderStatus getThisStatus(Integer idOrder, Integer idPoint);

    @Query(value = "SELECT * FROM `order_status` o WHERE o.order_id = :idOrder AND o.no = :no", nativeQuery = true)
    OrderStatus getNextStatus(Integer idOrder, int no);

    @Transactional
    @Modifying
    @Query(value = "UPDATE `order_status` o \n"
            + "SET o.state = :state, o.confirmedAt = :now \n"
            + "WHERE o.order_id = :idOrder AND o.point_id = :idPoint AND o.state = 'dang_den_nguoi_nhan'", nativeQuery = true)
    void updateLastStatus(Integer idOrder, Integer idPoint, String state, LocalDateTime now);
}
