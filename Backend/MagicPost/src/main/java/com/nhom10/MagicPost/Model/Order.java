package com.nhom10.MagicPost.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Time;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Type;

import java.sql.Timestamp;
import java.util.List;

/**
 * @author Do Quang Anh
 */

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "`order`")
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idOrder;
    @Column(nullable = false)
    private String sender_name;
    @Column(nullable = false)
    private String sender_province;
    @Column(nullable = false)
    private String sender_district;
    @Column(nullable = false)
    private String sender_tel;
    @Column(nullable = false)
    private String sender_pos;
    @Column(nullable = false)
    private String receiver_name;
    @Column(nullable = false)
    private String receiver_province;
    @Column(nullable = false)
    private String receiver_district;
    @Column(nullable = false)
    private String receiver_tel;
    @Column(nullable = false)
    private String receiver_pos;
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
    private Float main_charge;
    @Column(nullable = true)
    private Float extra_charge;
    @Column(nullable = true)
    private Float GTGT_charge;
    @Column(nullable = true)
    private Float other_fees;
    @Column(nullable = true)
    private Float cod;
    @Column(nullable = true)
    private Float order_weight;
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
