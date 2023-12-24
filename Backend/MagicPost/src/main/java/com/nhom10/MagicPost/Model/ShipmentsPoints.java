package com.nhom10.MagicPost.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "shipments_point")
public class ShipmentsPoints implements Serializable {
    @Id
    @Column(nullable = false)
    private Integer idShipments_point;
    @Column(nullable = false)
    private String point_province;
    @Column(nullable = false)
    private String point_district;
    @Column(nullable = false)
    private String point_pos;
    @Column(nullable = false)
    private String point_name;

    @ManyToOne
    @JoinColumn(name = "gathering_point_id", referencedColumnName = "idShipments_point")
    @JsonIgnore
    private ShipmentsPoints gatheringPoint;

    @OneToMany(mappedBy = "gatheringPoint")
    private List<ShipmentsPoints> transactionPoints;

    @OneToMany(mappedBy = "shipmentsPoints")
    private List<User> employees;

    @OneToMany(mappedBy = "senderPoint")
    @JsonIgnore
    private List<Order> sendOrders;

    @OneToMany(mappedBy = "receiverPoint")
    @JsonIgnore
    private List<Order> receiveOrders;

    @OneToMany(mappedBy = "shipmentsPoints")
    @JsonIgnore
    private List<OrderStatus> statuses;

}
