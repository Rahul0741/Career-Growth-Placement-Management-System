package com.placement.demo.signupapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            // Log the exception
            throw new RuntimeException("Error saving user: " + e.getMessage());
        }
    }
    public User findByUserIdAndPassword(Long userId, String password, UserType type) {
        return userRepository.findByUserIdAndPasswordAndType(userId, password, type);
    }

}