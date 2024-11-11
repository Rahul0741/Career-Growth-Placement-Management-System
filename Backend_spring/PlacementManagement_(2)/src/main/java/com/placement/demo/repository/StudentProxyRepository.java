package com.placement.demo.repository;

import com.placement.demo.model.StudentProxy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentProxyRepository extends JpaRepository<StudentProxy, Long> {
}
