package com.hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.Doctor;
import com.hospital.repository.DoctorRepository;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    // Save Doctor
    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    // Get All Doctors
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    // Get Doctor By Id
    public Doctor getDoctorById(String doctorId) {
        return doctorRepository.findById(doctorId).orElse(null);
    }

    // Update Doctor
    public Doctor updateDoctor(String doctorId, Doctor doctor) {

        Doctor existingDoctor = doctorRepository.findById(doctorId).orElse(null);

        if (existingDoctor != null) {

            existingDoctor.setDoctorName(doctor.getDoctorName());
            existingDoctor.setGender(doctor.getGender());
            existingDoctor.setAge(doctor.getAge());
            existingDoctor.setSpecialization(doctor.getSpecialization());
            existingDoctor.setQualification(doctor.getQualification());
            existingDoctor.setExperience(doctor.getExperience());
            existingDoctor.setPhoneNumber(doctor.getPhoneNumber());
            existingDoctor.setEmail(doctor.getEmail());
            existingDoctor.setStatus(doctor.getStatus());

            return doctorRepository.save(existingDoctor);
        }

        return null;
    }

    // Delete Doctor
    public String deleteDoctor(String doctorId) {

        doctorRepository.deleteById(doctorId);

        return "Doctor Deleted Successfully";
    }

}