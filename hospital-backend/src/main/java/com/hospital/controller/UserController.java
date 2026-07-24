package com.hospital.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.model.User;
import com.hospital.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    // Register User
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    // Login
    @PostMapping("/login")
    public String login(@RequestBody User user) {

        Optional<User> loginUser = userService.login(user.getUsername(), user.getPassword());

        if (loginUser.isPresent()) {
            return "Login Successful";
        } else {
            return "Invalid Username or Password";
        }
    }

    // Get All Users
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}