package com.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.model.Patient;
import com.hospital.service.PatientService;

@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {

    @Autowired
    private PatientService patientService;

    // Save Patient
    @PostMapping("/save")
    public Patient savePatient(@RequestBody Patient patient) {
        return patientService.savePatient(patient);
    }

    // Get All Patients
    @GetMapping("/all")
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    // Get Patient By Id
    @GetMapping("/{patientId}")
    public Patient getPatientById(@PathVariable String patientId) {
        return patientService.getPatientById(patientId);
    }

    // Update Patient
    @PutMapping("/update/{patientId}")
    public Patient updatePatient(@PathVariable String patientId,
                                 @RequestBody Patient patient) {
        return patientService.updatePatient(patientId, patient);
    }

    // Delete Patient
    @DeleteMapping("/delete/{patientId}")
    public String deletePatient(@PathVariable String patientId) {
        return patientService.deletePatient(patientId);
    }
}