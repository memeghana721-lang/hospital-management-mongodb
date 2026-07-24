package com.hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.Billing;
import com.hospital.repository.BillingRepository;


@Service
public class BillingService {


    @Autowired
    private BillingRepository billingRepository;



    // Add Billing
    public Billing saveBilling(Billing billing) {

        return billingRepository.save(billing);
    }



    // Get All Billing Records
    public List<Billing> getAllBillings() {

        return billingRepository.findAll();
    }



    // Get Billing By ID
    public Billing getBillingById(String id) {

        return billingRepository.findById(id).orElse(null);
    }



    // Update Billing
    public Billing updateBilling(String id, Billing billing) {

        Billing existingBilling = billingRepository.findById(id).orElse(null);


        if(existingBilling != null) {

            existingBilling.setPatientId(billing.getPatientId());
            existingBilling.setPatientName(billing.getPatientName());
            existingBilling.setAppointmentId(billing.getAppointmentId());
            existingBilling.setDoctorName(billing.getDoctorName());

            existingBilling.setConsultationFee(
                    billing.getConsultationFee()
            );

            existingBilling.setMedicineCharge(
                    billing.getMedicineCharge()
            );

            existingBilling.setRoomCharge(
                    billing.getRoomCharge()
            );

            existingBilling.setTotalAmount(
                    billing.getTotalAmount()
            );

            existingBilling.setPaymentStatus(
                    billing.getPaymentStatus()
            );

            existingBilling.setPaymentDate(
                    billing.getPaymentDate()
            );


            return billingRepository.save(existingBilling);
        }


        return null;
    }




    // Delete Billing
    public void deleteBilling(String id) {

        billingRepository.deleteById(id);
    }

}