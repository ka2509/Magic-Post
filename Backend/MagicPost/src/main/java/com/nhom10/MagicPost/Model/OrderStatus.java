package com.nhom10.MagicPost.Model;

import com.nhom10.MagicPost.modelkey.OrderStatusKey;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "`order_status`")
public class OrderStatus implements Serializable {

    // hàng tới 1 điểm nào thì nhân viên tại điểm đó sẽ cập nhật trạng thái đơn hàng tại đây

    @EmbeddedId
    private OrderStatusKey orderStatusKey;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)

    private State state;
    private LocalDateTime confirmedAt;
    private int no;

    @ManyToOne
    @MapsId("order_id")
    @JoinColumn(name = "order_id", referencedColumnName = "idOrder")
    private Order order;

    @ManyToOne
    @MapsId("points_id")
    @JoinColumn(name = "points_id", referencedColumnName = "idShipments_point")
    private ShipmentsPoints shipmentsPoints;

    public OrderStatus(State state, LocalDateTime confirmedAt, int no, Order order, ShipmentsPoints shipmentsPoints) {
        this.state = state;
        this.confirmedAt = confirmedAt;
        this.no = no;
        this.order = order;
        this.shipmentsPoints = shipmentsPoints;
    }
}
