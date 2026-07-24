package com.hospital.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "billings")
public class Billing {

    @Id
    private String billingId;

    private String patientId;

    private String patientName;

    private String appointmentId;

    private String doctorName;

    private double consultationFee;

    private double medicineCharge;

    private double roomCharge;

    private double totalAmount;

    private String paymentStatus; 
    // Paid / Pending

    private LocalDate paymentDate;


    public Billing() {
    }


    public Billing(String billingId, String patientId, String patientName,
                   String appointmentId, String doctorName,
                   double consultationFee, double medicineCharge,
                   double roomCharge, double totalAmount,
                   String paymentStatus, LocalDate paymentDate) {

        this.billingId = billingId;
        this.patientId = patientId;
        this.patientName = patientName;
        this.appointmentId = appointmentId;
        this.doctorName = doctorName;
        this.consultationFee = consultationFee;
        this.medicineCharge = medicineCharge;
        this.roomCharge = roomCharge;
        this.totalAmount = totalAmount;
        this.paymentStatus = paymentStatus;
        this.paymentDate = paymentDate;
    }


    public String getBillingId() {
        return billingId;
    }

    public void setBillingId(String billingId) {
        this.billingId = billingId;
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


    public String getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
    }


    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }


    public double getConsultationFee() {
        return consultationFee;
    }

    public void setConsultationFee(double consultationFee) {
        this.consultationFee = consultationFee;
    }


    public double getMedicineCharge() {
        return medicineCharge;
    }

    public void setMedicineCharge(double medicineCharge) {
        this.medicineCharge = medicineCharge;
    }


    public double getRoomCharge() {
        return roomCharge;
    }

    public void setRoomCharge(double roomCharge) {
        this.roomCharge = roomCharge;
    }


    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }


    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }


    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }
}