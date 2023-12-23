package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.OrderStatus;
import com.nhom10.MagicPost.modelkey.OrderStatusKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderStatusRepository extends JpaRepository<OrderStatus, OrderStatusKey> {

}
