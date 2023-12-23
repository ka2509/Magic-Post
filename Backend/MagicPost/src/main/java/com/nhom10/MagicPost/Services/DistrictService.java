package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.District;
import com.nhom10.MagicPost.Repository.DistrictRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DistrictService {
    private final DistrictRepository districtRepository;

    public List<District> getDistricts() {
        return districtRepository.findAll();
    }

    public List<District> getDistrictFromProvince(String provinceCode) {
        return districtRepository.getDistricts(provinceCode);
    }
}
