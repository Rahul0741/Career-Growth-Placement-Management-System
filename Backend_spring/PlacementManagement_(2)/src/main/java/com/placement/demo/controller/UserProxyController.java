package com.placement.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.placement.demo.model.UserProxy;
import com.placement.demo.service.UserProxyService;

@RestController
@RequestMapping("/api")
public class UserProxyController {

    @Autowired
    private UserProxyService userserv;

    // Create a new user
    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(
            @RequestParam("user_id") Long userId,
            @RequestParam("username") String username,
            @RequestParam("user_type") String userType,
            @RequestParam("password") String password) {

        userserv.saveUser(userId, username, userType, password);
        return new ResponseEntity<>("User added successfully!", HttpStatus.CREATED);
    }

    // Retrieve a user by Id
    @GetMapping("/user/{userId}")
    public ResponseEntity<UserProxy> getUserById(@PathVariable Long userId) {
        Optional<UserProxy> user = userserv.getUserById(userId);
        return user.map(ResponseEntity::ok)
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Retrieve all users without exposing passwords
    @GetMapping("/users")
    public ResponseEntity<List<UserProxy>> getAllUsers() {
        List<UserProxy> users = userserv.getAllUsers();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Update a user
    @PutMapping("/updateUser/{userId}")
    public ResponseEntity<Void> updateUser(
            @PathVariable Long userId,
            @RequestParam String username,
            @RequestParam String userType,
            @RequestParam(required = false) String password) {

        userserv.updateUser(userId, username, userType, password);
        return ResponseEntity.ok().build();
    }

    // Delete a user by Id
    @DeleteMapping("/deleteUser/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        boolean isDeleted = userserv.deleteUserById(userId);
        if (isDeleted) {
            return ResponseEntity.ok("User deleted successfully");
        } else {
            return new ResponseEntity<>("User Id not found", HttpStatus.NOT_FOUND);
        }
    }
} 