package com.nhom10.MagicPost.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Do Quang Anh
 */

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderUpdateLastStatusRequest {
    private Integer idOrder;
    private Integer idPoint;
    private boolean success;
}
