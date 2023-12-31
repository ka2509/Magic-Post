package com.nhom10.MagicPost.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nhom10.MagicPost.modelkey.OrderStatusKey;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;

/**
 * @author Do Quang Anh
 */

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

    @ManyToOne
    @MapsId("order_id")
    @JoinColumn(name = "order_id", referencedColumnName = "idOrder")
    @JsonIgnore
    private Order order;

    @ManyToOne
    @MapsId("points_id")
    @JoinColumn(name = "point_id", referencedColumnName = "idShipments_point")

    private ShipmentsPoints shipmentsPoints;

    public OrderStatus(int idOrder, int idPoint, State state, LocalDateTime confirmedAt, int no, Order order, ShipmentsPoints shipmentsPoints) {
        this.orderStatusKey = new OrderStatusKey(idOrder, idPoint, no);
        this.state = state;
        this.confirmedAt = confirmedAt;
        this.order = order;
        this.shipmentsPoints = shipmentsPoints;
    }
}
