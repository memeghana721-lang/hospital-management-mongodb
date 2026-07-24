package com.hospital.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.Appointment;
import com.hospital.repository.AppointmentRepository;



@Service
public class AppointmentService {


    @Autowired
    private AppointmentRepository appointmentRepository;





    // Save

    public Appointment saveAppointment(
            Appointment appointment){

        return appointmentRepository.save(appointment);

    }







    // Get All

    public List<Appointment> getAllAppointments(){

        return appointmentRepository.findAll();

    }








    // Get By Id

    public Appointment getAppointmentById(
            String appointmentId){


        return appointmentRepository
                .findById(appointmentId)
                .orElse(null);

    }










    // Update

    public Appointment updateAppointment(
            String appointmentId,
            Appointment appointment){



        Appointment existingAppointment =
                appointmentRepository
                .findById(appointmentId)
                .orElse(null);




        if(existingAppointment == null){

            throw new RuntimeException(
                    "Appointment not found"
            );

        }




        existingAppointment.setPatientId(
                appointment.getPatientId()
        );


        existingAppointment.setPatientName(
                appointment.getPatientName()
        );



        existingAppointment.setDoctorId(
                appointment.getDoctorId()
        );



        existingAppointment.setDoctorName(
                appointment.getDoctorName()
        );



        existingAppointment.setAppointmentDate(
                appointment.getAppointmentDate()
        );



        existingAppointment.setAppointmentTime(
                appointment.getAppointmentTime()
        );



        existingAppointment.setDisease(
                appointment.getDisease()
        );



        existingAppointment.setStatus(
                appointment.getStatus()
        );




        return appointmentRepository.save(
                existingAppointment
        );


    }










    // Delete

    public String deleteAppointment(
            String appointmentId){


        appointmentRepository.deleteById(
                appointmentId
        );


        return "Appointment Deleted Successfully";

    }



}