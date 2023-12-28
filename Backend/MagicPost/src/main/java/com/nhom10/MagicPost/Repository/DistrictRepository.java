package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Do Quang Anh
 */

@Repository
public interface DistrictRepository extends JpaRepository<District, String> {
    @Query(value = "SELECT d.* \n"
            + "FROM \n"
            + "`districts` d INNER JOIN `provinces` p \n"
            + "ON d.province_code = p.code \n"
            + "WHERE p.name_en = :province", nativeQuery = true)
    List<District> getDistricts(String province);

    @Query(value = "SELECT d.name_en FROM `districts` d WHERE d.code = :districtCode", nativeQuery = true)
    String getDistrictFromCode(String districtCode);
}
