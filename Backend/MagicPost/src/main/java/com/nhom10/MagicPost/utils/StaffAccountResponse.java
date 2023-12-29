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
public class StaffAccountResponse {
    private String fullname;
    private String firstname;
    private String lastname;
    private String email;
    private Role role;
    private String address;
    private Date dob;
    private Integer idUser;
    private String workSpace;

    public StaffAccountResponse(String firstname, String lastname, String email, Role role, String address, Date dob, Integer idUser, String workSpace) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.role = role;
        this.address = address;
        this.fullname = this.firstname + " " + this.lastname;
        this.dob = dob;
        this.idUser = idUser;
        this.workSpace = workSpace;
    }
}
