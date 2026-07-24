package com.hospital.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hospital.model.Billing;

public interface BillingRepository extends MongoRepository<Billing, String> {

}