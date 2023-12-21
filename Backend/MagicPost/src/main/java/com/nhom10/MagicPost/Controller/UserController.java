package com.nhom10.MagicPost.Controller;


import com.nhom10.MagicPost.Model.User;
import com.nhom10.MagicPost.Repository.UserRepository;
import com.nhom10.MagicPost.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/users")
public class UserController {

    private final UserService userService;
    @GetMapping("/check")
    public List<User> findAllUsers() {
        return userService.getUsers();
    }
}
