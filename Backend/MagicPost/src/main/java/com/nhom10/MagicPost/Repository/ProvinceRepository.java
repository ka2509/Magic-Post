package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinceRepository extends JpaRepository<Province, String> {
   @Query(value = "SELECT p.name_en FROM `provinces` p WHERE p.code = :provinceCode", nativeQuery = true)
    String findByCode(String provinceCode);
}
