package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Model.ShipmentsPoints;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface ShipmentsPointsRepository extends JpaRepository<ShipmentsPoints, Integer> {
    @Query(value = "SELECT p.* \n"
            +"FROM \n"
            +"`shipments_point` p INNER JOIN `districts` d \n"
            +"ON p.point_district = d.code \n"
            + "Where d.name_en = :district", nativeQuery = true)
     ShipmentsPoints findByDistrict(String district);

    @Query(value = "SELECT o.* \n"
            +"FROM \n"
            +"`order` o INNER JOIN `shipments_point` s \n"
            +"ON o.receiver_transaction = s.idShipments_point \n", nativeQuery = true)
    List<Order> getReceiveOrder(Integer idShipmentsPoint);
    @Query(value = "SELECT o.* \n"
            +"FROM \n"
            +"`order` o INNER JOIN `shipments_point` s \n"
            +"ON o.sender_transaction = s.idShipments_point \n", nativeQuery = true)
    List<Order> getSendOrder(Integer idShipmentsPoint);
}
