package com.nhom10.MagicPost.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.awt.datatransfer.StringSelection;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderBetweenTwoPointResponse {
    private String sender_name;
    private String sender_district;
    private String sender_province;
    private String sender_tel;
    private String sender_pos;
    private String sender_address;

    private String receiver_name;
    private String receiver_district;
    private String receiver_province;
    private String receiver_tel;
    private String receiver_pos;
    private String receiver_address;

    private String sendPoint_name;
    private String sendPoint_district;
    private String sendPoint_province;
    private String sendPoint_address;

    private String receivePoint_name;
    private String receivePoint_district;
    private String receivePoint_province;
    private String receivePoint_address;

    private Integer idOrder;
    private LocalDateTime sentAt;

    public OrderBetweenTwoPointResponse(String sender_name
            , String sender_district, String sender_province
            , String sender_tel, String sender_pos
            , String receiver_name
            , String receiver_district, String receiver_province
            , String receiver_tel, String receiver_pos
            , String sendPoint_name
            , String sendPoint_district, String sendPoint_province
            , String receivePoint_name
            , String receivePoint_district, String receivePoint_province
            , Integer idOrder
            , LocalDateTime sentAt) {
        this.sender_name = sender_name;
        this.sender_district = sender_district;
        this.sender_province = sender_province;
        this.sender_tel = sender_tel;
        this.sender_pos = sender_pos;
        this.sender_address = this.sender_district + ", " + this.sender_province;
        this.receiver_name = receiver_name;
        this.receiver_district = receiver_district;
        this.receiver_province = receiver_province;
        this.receiver_tel = receiver_tel;
        this.receiver_pos = receiver_pos;
        this.receiver_address = this.receiver_district + ", " + this.receiver_province;
        this.sendPoint_name = sendPoint_name;
        this.sendPoint_district = sendPoint_district;
        this.sendPoint_province = sendPoint_province;
        this.sendPoint_address = this.sendPoint_district + ", " + this.sendPoint_province;
        this.receivePoint_name = receivePoint_name;
        this.receivePoint_district = receivePoint_district;
        this.receivePoint_province = receivePoint_province;
        this.receivePoint_address = this.receivePoint_district + ", " + this.receivePoint_province;
        this.idOrder = idOrder;
        this.sentAt = sentAt;
    }
}
