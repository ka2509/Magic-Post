package com.nhom10.MagicPost.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

/**
 * @author Do Quang Anh
 */

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StaffAccountRequest {
    private String firstname;
    private String lastname;
    private String username;
    private String password;
    private String email;
    private Date birthday;
}
