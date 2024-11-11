package com.placement.demo.model;

import jakarta.persistence.*;

//import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "students")
public class StudentProxy {

    @Id
    @Column(name = "student_id", nullable = false)
    private Long studentId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "college_name", nullable = false)
    private String collegeName;

    @Column(name = "usn", nullable = false)
    private String usn;

    @Column(name = "qualification", nullable = false)
    private String qualification;

    @Column(name = "course", nullable = false)
    private String course;

    @Column(name = "year", nullable = false)
    private int year;

    @Lob
    private byte[] certi;  //  stores the file in the database
    
    @Column(name = "certi_file_name")//stores original file name
    private String certiFileName; 

    // Getters and Setters...

	public Long getStudentId() {
		return studentId;
	}

	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCollegeName() {
		return collegeName;
	}

	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}

	public String getUsn() {
		return usn;
	}

	public void setUsn(String usn) {
		this.usn = usn;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public byte[] getCerti() {
		return certi;
	}

	public void setCerti(byte[] certi) {
		this.certi = certi;
	}
	
	public String getCertiFileName() {
        return certiFileName;
	}

	public void setCertiFileName(String certiFileName) {
	    this.certiFileName = certiFileName;
	}
    
}
