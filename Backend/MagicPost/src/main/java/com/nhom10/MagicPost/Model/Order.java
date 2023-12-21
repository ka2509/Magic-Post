package com.nhom10.MagicPost.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Time;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Timestamp;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "order")
public class Order implements Serializable {

    @Id
    private Integer idOrder;
    @Column(nullable = false)
    private String sender_name;
    @Column(nullable = false)
    private String sender_province;
    @Column(nullable = false)
    private String sender_district;
    @Column(nullable = false)
    private String sender_phonenumber;
    @Column(nullable = false)
    private String sender_postalcode;
    @Column(nullable = false)
    private String receiver_name;
    @Column(nullable = false)
    private String receiver_province;
    @Column(nullable = false)
    private String receiver_district;
    @Column(nullable = false)
    private String receiver_phonenumber;
    @Column(nullable = false)
    private String receiver_postalcode;
    @Column(nullable = true)
    @Enumerated(EnumType.STRING)
    private typeOrder type_order;
    @Column(nullable = true)
    private String special_services;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private orderInstruction order_instruction;
    @Column(nullable = true)
    private Timestamp receive_date;
    @Column(nullable = true)
    private float main_charge;
    @Column(nullable = true)
    private float extra_charge;
    @Column(nullable = true)
    private float GTGT_charge;
    @Column(nullable = true)
    private float other_fees;
    @Column(nullable = true)
    private float cod;
    @Column(nullable = true)
    private float order_weight;
    @Column(nullable = true)
    private String business_note;


    @ManyToOne
    @JoinColumn(name = "order_created_by", referencedColumnName = "idUser")
    @JsonIgnore
    private User user;

    @ManyToOne
    @JoinColumn(name = "sender_transaction", referencedColumnName = "idShipments_point")
    @JsonIgnore
    private ShipmentsPoints senderPoint;

    @ManyToOne
    @JoinColumn(name = "receiver_transaction", referencedColumnName = "idShipments_point")
    @JsonIgnore
    private ShipmentsPoints receiverPoint;

    @OneToMany(mappedBy = "order", cascade = CascadeType.REMOVE)
    private List<OrderStatus> statuses;
// Còn list order items nữa tính sau

}
