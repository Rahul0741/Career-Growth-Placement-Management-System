package com.placement.demo.service;

import com.placement.demo.model.StudentProxy;
import com.placement.demo.repository.StudentProxyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

import java.io.IOException;

@Service
public class Studentproxyservice {

    @Autowired
    private StudentProxyRepository studentProxyRepository;

    public void saveStudent(Long studentId, String name, String collegeName, String usn, 
                            String qualification, String course, int year, 
                            MultipartFile certi) throws IOException {
        StudentProxy student = new StudentProxy();
        student.setStudentId(studentId);
        student.setName(name);
        student.setCollegeName(collegeName);
        student.setUsn(usn);
        student.setQualification(qualification);
        student.setCourse(course);
        student.setYear(year);
        
        if (certi != null && !certi.isEmpty()) {
            student.setCerti(certi.getBytes());  // Convert file to bytes and store
            student.setCertiFileName(certi.getOriginalFilename()); 
        }

        studentProxyRepository.save(student);  // Save student to DB
    }
    
    //Retrieve a student by id
    public Optional<StudentProxy> getStudentById(Long studentId){
    	return studentProxyRepository.findById(studentId);
    }
    
 // Update an existing student
    public Optional<StudentProxy> updateStudent(Long studentId, String name, String collegeName, String usn, 
                                                String qualification, String course, int year, 
                                                MultipartFile certi) throws IOException {
        Optional<StudentProxy> existingStudentOpt = studentProxyRepository.findById(studentId);

        if (existingStudentOpt.isPresent()) {
            StudentProxy existingStudent = existingStudentOpt.get();
            existingStudent.setName(name);
            existingStudent.setCollegeName(collegeName);
            existingStudent.setUsn(usn);
            existingStudent.setQualification(qualification);
            existingStudent.setCourse(course);
            existingStudent.setYear(year);

            if (certi != null && !certi.isEmpty()) {
                existingStudent.setCerti(certi.getBytes());
                existingStudent.setCertiFileName(certi.getOriginalFilename());
            }

            studentProxyRepository.save(existingStudent);  // Save updated student
            return Optional.of(existingStudent);
        }
        return Optional.empty();
    }
    
    // Delete a student by ID
    public boolean deleteStudentById(Long studentId) {
        if (studentProxyRepository.existsById(studentId)) {
            studentProxyRepository.deleteById(studentId);
            return true;
        }
        return false;
    }

	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}
}
