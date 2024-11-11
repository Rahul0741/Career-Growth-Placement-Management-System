package com.placement.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placement.demo.model.UserProxy;

public interface UserProxyRepository extends JpaRepository<UserProxy, Long> {
	
}
