package com.hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.Bed;
import com.hospital.repository.BedRepository;

@Service
public class BedService {

    @Autowired
    private BedRepository bedRepository;

    // Save Bed
    public Bed addBed(Bed bed) {
        return bedRepository.save(bed);
    }

    // Get All Beds
    public List<Bed> getAllBeds() {
        return bedRepository.findAll();
    }

    // Get Bed By Id
    public Bed getBedById(String id) {
        return bedRepository.findById(id).orElse(null);
    }

    // Update Bed
    public Bed updateBed(String id, Bed bed) {

        Bed existingBed = bedRepository.findById(id).orElse(null);

        if (existingBed != null) {

            existingBed.setBedNumber(bed.getBedNumber());
            existingBed.setWard(bed.getWard());
            existingBed.setRoomNumber(bed.getRoomNumber());
            existingBed.setBedType(bed.getBedType());
            existingBed.setStatus(bed.getStatus());
            existingBed.setPatientName(bed.getPatientName());

            return bedRepository.save(existingBed);
        }

        return null;
    }

    // Delete Bed
    public void deleteBed(String id) {
        bedRepository.deleteById(id);
    }

}