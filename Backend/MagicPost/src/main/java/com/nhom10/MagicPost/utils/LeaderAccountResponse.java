package com.nhom10.MagicPost.utils;

import com.nhom10.MagicPost.Model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @author Do Quang Anh
 */

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LeaderAccountResponse {
    private String fullname;
    private String firstname;
    private String lastname;
    private String email;
    private Role role;
    private String address;
    private Date dob;
    private String workSpace;
    private Boolean isVerified = true;
    private Integer idUser;

    public LeaderAccountResponse(String firstname, String lastname, String email, Role role, String address, Date dob, String workSpace, Boolean isVerified, Integer idUser) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.role = role;
        this.address = address;
        this.dob = dob;
        this.workSpace = workSpace;
        this.fullname = this.firstname + " " + this.lastname;
        this.isVerified = isVerified;
        this.idUser = idUser;
    }
}
