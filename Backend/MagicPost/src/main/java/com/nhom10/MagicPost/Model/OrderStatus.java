package com.nhom10.MagicPost.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "order_status")
public class OrderStatus implements Serializable {

    // hàng tới 1 điểm nào thì nhân viên tại điểm đó sẽ cập nhật trạng thái đơn hàng tại đây

    @Id
    private Timestamp date;
    @Column(nullable = false)
    private String status_name;

    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "idOrder")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "points_id", referencedColumnName = "idShipments_point")
    private ShipmentsPoints shipmentsPoints;
}
