package com.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.model.Billing;
import com.hospital.service.BillingService;


@RestController
@RequestMapping("/billing")
@CrossOrigin(origins = "http://localhost:3000")
public class BillingController {


    @Autowired
    private BillingService billingService;



    // Save Billing
    @PostMapping("/save")
    public Billing saveBilling(@RequestBody Billing billing) {

        return billingService.saveBilling(billing);
    }



    // Get All Billings
    @GetMapping("/all")
    public List<Billing> getAllBillings() {

        return billingService.getAllBillings();
    }



    // Get Billing By ID
    @GetMapping("/{id}")
    public Billing getBillingById(@PathVariable String id) {

        return billingService.getBillingById(id);
    }



    // Update Billing
    @PutMapping("/update/{id}")
    public Billing updateBilling(
            @PathVariable String id,
            @RequestBody Billing billing) {

        return billingService.updateBilling(id, billing);
    }



    // Delete Billing
    @DeleteMapping("/delete/{id}")
    public String deleteBilling(@PathVariable String id) {

        billingService.deleteBilling(id);

        return "Billing deleted successfully";
    }

}