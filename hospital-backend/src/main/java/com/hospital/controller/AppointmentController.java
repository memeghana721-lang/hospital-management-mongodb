package com.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.model.Appointment;
import com.hospital.service.AppointmentService;


@RestController
@RequestMapping("/appointment")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {


    @Autowired
    private AppointmentService appointmentService;



    // Save Appointment
    @PostMapping("/save")
    public Appointment saveAppointment(
            @RequestBody Appointment appointment) {

        return appointmentService.saveAppointment(appointment);
    }





    // Get All Appointments
    @GetMapping("/all")
    public List<Appointment> getAllAppointments(){

        return appointmentService.getAllAppointments();

    }






    // Get Appointment By Id
    @GetMapping("/{appointmentId}")
    public Appointment getAppointmentById(
            @PathVariable String appointmentId){

        return appointmentService.getAppointmentById(appointmentId);

    }







    // Update Appointment
    @PutMapping("/update/{appointmentId}")
    public Appointment updateAppointment(
            @PathVariable String appointmentId,
            @RequestBody Appointment appointment){


        return appointmentService.updateAppointment(
                appointmentId,
                appointment
        );

    }







    // Delete Appointment
    @DeleteMapping("/delete/{appointmentId}")
    public String deleteAppointment(
            @PathVariable String appointmentId){


        return appointmentService.deleteAppointment(
                appointmentId
        );

    }


}