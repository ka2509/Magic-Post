package com.nhom10.MagicPost.Controller;


import com.nhom10.MagicPost.Services.DistrictService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Do Quang Anh
 */

@RestController
@RequestMapping("/api/district")
@RequiredArgsConstructor
public class DistrictController {
    private final DistrictService districtService;

    // get all districts from province name_en
    @GetMapping("/getDistricts")
    public ResponseEntity<?> getDistrictFromProvince(@RequestParam String province) {

        return ResponseEntity.ok(districtService.getDistrictFromProvince(province));
    }

}
