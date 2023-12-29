package com.nhom10.MagicPost.Services;

import com.nhom10.MagicPost.Model.Order;
import com.nhom10.MagicPost.Model.ShipmentsPoints;
import com.nhom10.MagicPost.Repository.ShipmentsPointsRepository;
import com.nhom10.MagicPost.utils.ShipmentsPointsResponse;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author Do Quang Anh
 */

@Service
@RequiredArgsConstructor
public class ShipmentspointsService {

    private final ShipmentsPointsRepository shipmentsPointsRepository;
    private final ProvinceService provinceService;
    private final DistrictService districtService;

    public ShipmentsPoints findByDistrict(String district) {

        return shipmentsPointsRepository.findByDistrict(district);
    }

    public List<ShipmentsPoints> findAllGathering() {
        return shipmentsPointsRepository.findAllGathering();
    }

    public Optional<ShipmentsPoints> findById(Integer idPoint) {
        return shipmentsPointsRepository.findById(idPoint);
    }

    public List<ShipmentsPointsResponse> getShipmentsByProvince(String code) {
        List<ShipmentsPoints> pointsList =  shipmentsPointsRepository.getShipmentsByProvince(code);
        List<ShipmentsPointsResponse> pointsResponseList = new ArrayList<>(pointsList.size());
        for (ShipmentsPoints p : pointsList) {
            ShipmentsPointsResponse shipmentsPointsResponse = new ShipmentsPointsResponse(
                    p.getPoint_name(),
                    provinceService.getProvinceFromCode(p.getPoint_province()),
                    districtService.getDistrictFromCode(p.getPoint_district()),
                    p.getIdShipments_point()
            );
            pointsResponseList.add(shipmentsPointsResponse);
        }
        return pointsResponseList;
    }

    public List<ShipmentsPoints> findAllTransaction() {
        return shipmentsPointsRepository.findAllTransaction();
    }

    public List<ShipmentsPointsResponse> getNorthShipmentPoint() {
        List<ShipmentsPoints> pointsList =  shipmentsPointsRepository.getNorthShipmentPoint();
        List<ShipmentsPointsResponse> pointsResponseList = new ArrayList<>(pointsList.size());
        for (ShipmentsPoints p : pointsList) {
            ShipmentsPointsResponse shipmentsPointsResponse = new ShipmentsPointsResponse(
                    p.getPoint_name(),
                    provinceService.getProvinceFromCode(p.getPoint_province()),
                    districtService.getDistrictFromCode(p.getPoint_district()),
                    p.getIdShipments_point()
            );
            pointsResponseList.add(shipmentsPointsResponse);
        }
        return pointsResponseList;
    }
    public List<ShipmentsPointsResponse> getMiddleShipmentPoint() {
        List<ShipmentsPoints> pointsList =  shipmentsPointsRepository.getMiddleShipmentPoint();
        List<ShipmentsPointsResponse> pointsResponseList = new ArrayList<>(pointsList.size());
        for (ShipmentsPoints p : pointsList) {
            ShipmentsPointsResponse shipmentsPointsResponse = new ShipmentsPointsResponse(
                    p.getPoint_name(),
                    provinceService.getProvinceFromCode(p.getPoint_province()),
                    districtService.getDistrictFromCode(p.getPoint_district()),
                    p.getIdShipments_point()
            );
            pointsResponseList.add(shipmentsPointsResponse);
        }
        return pointsResponseList;

    }
    public List<ShipmentsPointsResponse> getSouthShipmentPoint() {
        List<ShipmentsPoints> pointsList =  shipmentsPointsRepository.getSouthShipmentPoint();
        List<ShipmentsPointsResponse> pointsResponseList = new ArrayList<>(pointsList.size());
        for (ShipmentsPoints p : pointsList) {
            ShipmentsPointsResponse shipmentsPointsResponse = new ShipmentsPointsResponse(
                    p.getPoint_name(),
                    provinceService.getProvinceFromCode(p.getPoint_province()),
                    districtService.getDistrictFromCode(p.getPoint_district()),
                    p.getIdShipments_point()
            );
            pointsResponseList.add(shipmentsPointsResponse);
        }
        return pointsResponseList;

    }

}
