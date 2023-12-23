package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistrictRepository extends JpaRepository<District, String> {
    @Query(value = "SELECT * \n"
            +"FROM \n"
            +"`districts` d \n"
            +"WHERE d.province_code = :provinceCode", nativeQuery = true)
    List<District> getDistricts(String provinceCode);
}
