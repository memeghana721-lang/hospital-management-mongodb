package com.hospital.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.model.Appointment;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {

}