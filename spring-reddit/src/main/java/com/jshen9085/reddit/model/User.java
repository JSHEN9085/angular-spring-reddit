package com.jshen9085.reddit.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.time.Instant;


@Data
@Entity
@AllArgsConstructor //@AllArgsConstructor generates a constructor with 1 parameter for each field in your class.
@NoArgsConstructor //@NoArgsConstructor will generate a constructor with no parameters
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(unique = true)
    @NotBlank(message = "Username is required")
    private String username;

    @NotBlank(message = "Password is required")
    private String password;

    @Email
    @NotEmpty(message = "Email is required")
    @Column(unique = true)
    private String email;

    private Instant created;

    private boolean enable;

}
