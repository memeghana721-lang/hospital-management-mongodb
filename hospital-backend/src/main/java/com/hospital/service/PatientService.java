package com.hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.Patient;
import com.hospital.repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    // Save Patient
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // Get All Patients
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // Get Patient By Id
    public Patient getPatientById(String patientId) {
        return patientRepository.findById(patientId).orElse(null);
    }

    // Update Patient
    public Patient updatePatient(String patientId, Patient patient) {

        Patient existingPatient = patientRepository.findById(patientId).orElse(null);

        if (existingPatient != null) {

            existingPatient.setPatientName(patient.getPatientName());
            existingPatient.setAge(patient.getAge());
            existingPatient.setGender(patient.getGender());
            existingPatient.setBloodGroup(patient.getBloodGroup());
            existingPatient.setPhoneNumber(patient.getPhoneNumber());
            existingPatient.setEmail(patient.getEmail());
            existingPatient.setAddress(patient.getAddress());
            existingPatient.setDisease(patient.getDisease());
            existingPatient.setDoctorName(patient.getDoctorName());
            existingPatient.setAdmissionDate(patient.getAdmissionDate());
            existingPatient.setDischargeDate(patient.getDischargeDate());
            existingPatient.setStatus(patient.getStatus());

            return patientRepository.save(existingPatient);
        }

        return null;
    }

    // Delete Patient
    public String deletePatient(String patientId) {

        patientRepository.deleteById(patientId);

        return "Patient Deleted Successfully";
    }

}