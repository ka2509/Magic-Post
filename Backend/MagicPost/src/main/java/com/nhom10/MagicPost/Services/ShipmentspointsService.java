package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Model.ShipmentsPoints;
import com.nhom10.MagicPost.Repository.ShipmentsPointsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ShipmentspointsService {

    private final ShipmentsPointsRepository shipmentsPointsRepository;
    public ShipmentsPoints findByDistrict(String district) {

        return shipmentsPointsRepository.findByDistrict(district);
    }
    public List<Order> getReceiveOrder(Integer idShipments_point) {
        return shipmentsPointsRepository.getReceiveOrder(idShipments_point);
    }
    public List<Order> getSendOrder(Integer idShipments_point) {
        return shipmentsPointsRepository.getSendOrder(idShipments_point);
    }

}
