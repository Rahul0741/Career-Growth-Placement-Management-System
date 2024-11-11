package com.placement.demo.signupapp;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserId(Long userId); 
    User findByUserIdAndPasswordAndType(Long userId, String password, UserType type);
}
