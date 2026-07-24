package com.hospital.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.hospital.model.Bed;

public interface BedRepository extends MongoRepository<Bed, String> {

}