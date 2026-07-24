package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="appointments")
public class Appointment {


    @Id
    private String appointmentId;


    private String patientId;

    private String patientName;

    private String doctorId;

    private String doctorName;

    private String appointmentDate;

    private String appointmentTime;

    private String disease;

    private String status;



    public Appointment(){

    }



    public String getAppointmentId() {
        return appointmentId;
    }


    public void setAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
    }


    public String getPatientId() {
        return patientId;
    }


    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }


    public String getPatientName() {
        return patientName;
    }


    public void setPatientName(String patientName) {
        this.patientName = patientName;
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


    public String getAppointmentDate() {
        return appointmentDate;
    }


    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }


    public String getAppointmentTime() {
        return appointmentTime;
    }


    public void setAppointmentTime(String appointmentTime) {
        this.appointmentTime = appointmentTime;
    }


    public String getDisease() {
        return disease;
    }


    public void setDisease(String disease) {
        this.disease = disease;
    }


    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }

}