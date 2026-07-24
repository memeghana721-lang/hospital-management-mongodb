package com.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.model.Bed;
import com.hospital.service.BedService;

@RestController
@RequestMapping("/bed")
@CrossOrigin(origins = "http://localhost:3000")
public class BedController {

    @Autowired
    private BedService bedService;

    @PostMapping("/save")
    public Bed saveBed(@RequestBody Bed bed) {
        return bedService.addBed(bed);
    }

    @GetMapping("/all")
    public List<Bed> getAllBeds() {
        return bedService.getAllBeds();
    }

    @GetMapping("/{id}")
    public Bed getBed(@PathVariable String id) {
        return bedService.getBedById(id);
    }

    @PutMapping("/update/{id}")
    public Bed updateBed(@PathVariable String id, @RequestBody Bed bed) {
        return bedService.updateBed(id, bed);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteBed(@PathVariable String id) {
        bedService.deleteBed(id);
        return "Bed Deleted Successfully";
    }
}