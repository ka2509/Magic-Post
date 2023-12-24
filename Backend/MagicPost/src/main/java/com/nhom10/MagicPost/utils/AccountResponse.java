package com.nhom10.MagicPost.utils;

import com.nhom10.MagicPost.Model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountResponse {
    private String firstname;
    private String lastname;
    private String email;
    private Role role;
    private String address;
}
