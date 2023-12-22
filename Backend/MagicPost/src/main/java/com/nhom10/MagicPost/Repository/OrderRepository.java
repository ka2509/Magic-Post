package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.relational.core.sql.In;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    @Query(value = "SELECT * \n"
            +"FROM \n"
            +"`order` o \n" +
            "WHERE c.idOrder = :idOrder", nativeQuery = true)
    Optional<Order> findById(Integer idOrder);

}
