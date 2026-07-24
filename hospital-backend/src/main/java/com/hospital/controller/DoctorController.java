package com.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.model.Doctor;
import com.hospital.service.DoctorService;

@RestController
@RequestMapping("/doctor")
@CrossOrigin(origins = "*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    // Save Doctor
    @PostMapping("/save")
    public Doctor saveDoctor(@RequestBody Doctor doctor) {
        return doctorService.saveDoctor(doctor);
    }

    // Get All Doctors
    @GetMapping("/all")
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    // Get Doctor By Id
    @GetMapping("/{doctorId}")
    public Doctor getDoctorById(@PathVariable String doctorId) {
        return doctorService.getDoctorById(doctorId);
    }

    // Update Doctor
    @PutMapping("/update/{doctorId}")
    public Doctor updateDoctor(@PathVariable String doctorId,
                               @RequestBody Doctor doctor) {
        return doctorService.updateDoctor(doctorId, doctor);
    }

    // Delete Doctor
    @DeleteMapping("/delete/{doctorId}")
    public String deleteDoctor(@PathVariable String doctorId) {
        return doctorService.deleteDoctor(doctorId);
    }

}