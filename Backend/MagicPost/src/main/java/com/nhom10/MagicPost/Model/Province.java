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
@Table(name = "`provinces`")
public class Province implements Serializable {
    @Id
    private String code;
    @Column(nullable = false)
    private String name;

    private String name_en;
    @Column(nullable = false)
    private String full_name;
    private String full_name_en;
    private String code_name;
    private String side;

    @OneToMany(mappedBy = "province")
    @JsonIgnore
    List<District> districts;
}
