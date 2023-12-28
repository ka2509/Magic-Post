package com.nhom10.MagicPost.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

/**
 * @author Do Quang Anh
 */

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "`districts`")
public class District implements Serializable {
    @Id
    private String code;
    @Column(nullable = false)
    private String name;

    private String name_en;
    private String full_name;
    private String full_name_en;
    private String code_name;

    @ManyToOne
    @JoinColumn(name = "province_code", referencedColumnName = "code")
    @JsonIgnore
    private Province province;
}
