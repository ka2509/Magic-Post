package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.ShipmentsPoints;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Do Quang Anh
 */

@Repository
@Transactional
public interface ShipmentsPointsRepository extends JpaRepository<ShipmentsPoints, Integer> {
    @Query(value = "SELECT p.* \n"
            + "FROM \n"
            + "`shipments_point` p INNER JOIN `districts` d \n"
            + "ON p.point_district = d.code \n"
            + "Where d.name_en = :district", nativeQuery = true)
    ShipmentsPoints findByDistrict(String district);

    @Query(value = "SELECT * FROM `shipments_point` s WHERE s.gathering_point_id IS NULL", nativeQuery = true)
    List<ShipmentsPoints> findAllGathering();


    @Query(value = "SELECT * FROM `shipments_point` s WHERE s.point_province = :code", nativeQuery = true)
    List<ShipmentsPoints> getShipmentsByProvince(String code);

   @Query(value = "SELECT * FROM `shipments_point` s WHERE s.gathering_point_id IS NOT NULL",nativeQuery = true)
    List<ShipmentsPoints> findAllTransaction();

   @Query(value = "SELECT * FROM `shipments_point` s WHERE s.gathering_point_id = 1 OR s.idShipments_point = 1",nativeQuery = true)
    List<ShipmentsPoints> getNorthShipmentPoint();

    @Query(value = "SELECT * FROM `shipments_point` s WHERE s.gathering_point_id = 2 OR s.idShipments_point = 2",nativeQuery = true)
    List<ShipmentsPoints> getMiddleShipmentPoint();

    @Query(value = "SELECT * FROM `shipments_point` s WHERE s.gathering_point_id = 3 OR s.idShipments_point = 3",nativeQuery = true)
    List<ShipmentsPoints> getSouthShipmentPoint();
}
