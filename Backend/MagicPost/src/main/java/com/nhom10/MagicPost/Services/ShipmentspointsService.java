package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Model.ShipmentsPoints;
import com.nhom10.MagicPost.Repository.ShipmentsPointsRepository;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShipmentspointsService {

    private final ShipmentsPointsRepository shipmentsPointsRepository;
    public ShipmentsPoints findByDistrict(String district) {

        return shipmentsPointsRepository.findByDistrict(district);
    }
    public List<ShipmentsPoints> findAllGathering() {
        return shipmentsPointsRepository.findAllGathering();
    }


    public List<ShipmentsPoints> getShipmentsByProvince(String code) {
        return shipmentsPointsRepository.getShipmentsByProvince(code);
    }
}
