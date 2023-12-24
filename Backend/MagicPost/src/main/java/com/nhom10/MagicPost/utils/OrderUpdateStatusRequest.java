package com.nhom10.MagicPost.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderUpdateStatusRequest {
    private Integer idOrder;
    private Integer idPoint;
}
