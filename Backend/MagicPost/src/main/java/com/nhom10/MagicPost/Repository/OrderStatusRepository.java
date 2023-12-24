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

@Repository
public interface OrderStatusRepository extends JpaRepository<OrderStatus, OrderStatusKey> {

    @Transactional
    @Modifying
    @Query(value = "UPDATE `order_status` o \n"
           +"SET o.state = :state, o.confirmedAt = :now \n"
           +"WHERE o.order_id = :idOrder AND o.point_id = :idPoint AND o.no = :no", nativeQuery = true)
    void updateStatusThisPoint(Integer idOrder, Integer idPoint, int no, String state, LocalDateTime now);

   @Transactional
   @Modifying
   @Query(value = "UPDATE `order_status` o \n"
            +"SET o.state = :state \n"
            +"WHERE o.order_id = :idOrder AND o.no = :no", nativeQuery = true)
    void updateStatusNextPoint(Integer idOrder, int no, String state);
}
