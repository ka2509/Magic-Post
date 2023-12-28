package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Province;
import com.nhom10.MagicPost.Repository.ProvinceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Do Quang Anh
 */

@Service
@RequiredArgsConstructor
public class ProvinceService {
    private final ProvinceRepository provinceRepository;

    public List<Province> getAllProvince() {
        return provinceRepository.findAll();
    }

    public String getProvinceFromCode(String provinceCode) {
        return provinceRepository.findByCode(provinceCode);
    }
}
