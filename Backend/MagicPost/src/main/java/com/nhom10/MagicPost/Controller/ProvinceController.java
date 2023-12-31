package com.nhom10.MagicPost.Controller;

import com.nhom10.MagicPost.Services.ProvinceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Do Quang Anh
 */

@RestController
@RequestMapping("/api/province")
@RequiredArgsConstructor
public class ProvinceController {
    private final ProvinceService provinceService;

    //get all provinces
    @GetMapping("/getProvinces")
    public ResponseEntity<?> getAllProvinces() {
        return ResponseEntity.ok(provinceService.getAllProvince());
    }
}
