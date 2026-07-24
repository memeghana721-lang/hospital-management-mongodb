package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctors")
public class Doctor {

    @Id
    private String doctorId;

    private String doctorName;
    private String gender;
    private int age;
    private String specialization;
    private String qualification;
    private int experience;
    private String phoneNumber;
    private String email;
    private String status;

    public Doctor() {
    }

    public Doctor(String doctorId, String doctorName, String gender, int age,
                  String specialization, String qualification, int experience,
                  String phoneNumber, String email, String status) {
        this.doctorId = doctorId;
        this.doctorName = doctorName;
        this.gender = gender;
        this.age = age;
        this.specialization = specialization;
        this.qualification = qualification;
        this.experience = experience;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.status = status;
    }

    public String getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(String doctorId) {
        this.doctorId = doctorId;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}