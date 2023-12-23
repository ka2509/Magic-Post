package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DistrictRepository extends JpaRepository<District, String> {
}
