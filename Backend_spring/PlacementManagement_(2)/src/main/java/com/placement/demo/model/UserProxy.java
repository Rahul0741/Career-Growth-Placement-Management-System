package com.placement.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name="user")
public class UserProxy {
	
	@Id
	@Column(name="user_id",nullable=false)
	private Long userId;
	
	@Column(name="username",nullable=false)
	private String username;
	
	@Column(name="user_type",nullable=false)
	private String userType;
	
	@JsonIgnore
	@Column(name="password",nullable=false)
	private String password;
	
	//Getters and Setters
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
	
