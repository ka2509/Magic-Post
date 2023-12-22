package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.ShipmentsPoints;
import com.nhom10.MagicPost.Repository.ShipmentsPointsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ShipmentspointsService {

    private final ShipmentsPointsRepository shipmentsPointsRepository;

    public ShipmentsPoints findByDistrict(String district) {

        return shipmentsPointsRepository.findByDistrict(district);
    }

}
