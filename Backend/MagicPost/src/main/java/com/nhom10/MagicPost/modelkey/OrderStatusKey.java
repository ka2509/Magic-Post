package com.nhom10.MagicPost.modelkey;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class OrderStatusKey implements Serializable {
    private int order_id;
    private int point_id;
    private int no;
}
