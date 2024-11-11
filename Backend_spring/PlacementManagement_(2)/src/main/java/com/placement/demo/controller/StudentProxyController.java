package com.placement.demo.controller;

import com.placement.demo.*;

import com.placement.demo.model.StudentProxy;
import com.placement.demo.service.Studentproxyservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/api")  // Base path for all requests
//@CrossOrigin(origins = "*")
public class StudentProxyController {

    @Autowired
    private Studentproxyservice studentService;
    
    

    @PostMapping("/addStudent")
    public ResponseEntity<String> addStudent(
            @RequestParam("student_id") Long studentId,
            @RequestParam("name") String name,
            @RequestParam("college_name") String collegeName,
            @RequestParam("usn") String usn,
            @RequestParam("qualification") String qualification,
            @RequestParam("course") String course,
            @RequestParam("year") int year,
            @RequestParam(value = "certi", required = false) MultipartFile certi) {
        try {
            studentService.saveStudent(studentId, name, collegeName, usn, qualification, course, year, certi);
            return new ResponseEntity<>("Student added successfully!", HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>("Error while saving student: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    //Retrieve a student by ID
    @GetMapping("/students/{studentId}")
    public ResponseEntity<StudentProxy> getStudentById(@PathVariable Long studentId) {
        return studentService.getStudentById(studentId)
                .map(student -> ResponseEntity.ok(student))
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/students/{studentId}/certi")
    public ResponseEntity<byte[]> getCerti(@PathVariable Long studentId) {
        Optional<StudentProxy> studentOpt = studentService.getStudentById(studentId);

        if (studentOpt.isPresent() && studentOpt.get().getCerti() != null) {
            StudentProxy student = studentOpt.get();
            return ResponseEntity.ok()
                    .header("Content-Disposition", "attachment; filename=\"" + student.getCertiFileName() + "\"")
                    .body(student.getCerti());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    
 // Update student details
    @PutMapping("/updateStudent/{studentId}")
    public ResponseEntity<Void> updateStudent(
    		@PathVariable Long studentId,
            @RequestParam String name, 
            @RequestParam String college_name, 
            @RequestParam String usn, 
            @RequestParam String qualification, 
            @RequestParam String course, 
            @RequestParam int year,
            @RequestParam MultipartFile certi) throws IOException {
        studentService.updateStudent(studentId, name, college_name, usn, qualification, course, year, certi);
        return ResponseEntity.ok().build();
    }

    // Delete a student by ID
    @DeleteMapping("/deleteStudent/{studentId}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long studentId) {
        Optional<StudentProxy> student = studentService.getStudentById(studentId);
        
        if (student.isPresent()) {
            studentService.deleteStudentById(studentId);
            return ResponseEntity.ok("Student deleted successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student ID not found");
        }
    }

    
	@GetMapping("/searchStudent/{studentId}")
	    public ResponseEntity<StudentProxy> searchStudent(@PathVariable Long studentId) {
            Optional<StudentProxy> student = studentService.getStudentById(studentId);
            if (student.isPresent()) {
                return ResponseEntity.ok(student.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        }
}

    
