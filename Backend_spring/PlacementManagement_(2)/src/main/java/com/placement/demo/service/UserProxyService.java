package com.placement.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.placement.demo.model.UserProxy;
import com.placement.demo.repository.UserProxyRepository;

@Service
public class UserProxyService {

    @Autowired
    private UserProxyRepository userproxyrepo;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Save user with encrypted password
    public void saveUser(Long userId, String username, String userType, String password) {
        UserProxy user = new UserProxy();
        user.setUserId(userId);
        user.setUsername(username);
        user.setUserType(userType);
        user.setPassword(passwordEncoder.encode(password));
        userproxyrepo.save(user);
    }

    public Optional<UserProxy> getUserById(Long userId) {
        return userproxyrepo.findById(userId);
    }

    // Retrieve all users without exposing passwords
    public List<UserProxy> getAllUsers() {
        List<UserProxy> users = userproxyrepo.findAll();
        users.forEach(user -> user.setPassword(null)); // Set password to null before returning
        return users;
    }

    // Update user with optional password encryption
    public void updateUser(Long userId, String username, String userType, String password) {
        Optional<UserProxy> userOpt = userproxyrepo.findById(userId);
        if (userOpt.isPresent()) {
            UserProxy user = userOpt.get();
            user.setUsername(username);
            user.setUserType(userType);
            if (password != null && !password.isEmpty()) {
                user.setPassword(passwordEncoder.encode(password));
            }
            userproxyrepo.save(user);
        }
    }

    public boolean deleteUserById(Long userId) {
        if (userproxyrepo.existsById(userId)) {
            userproxyrepo.deleteById(userId);
            return true;
        }
        return false;
    }
} 