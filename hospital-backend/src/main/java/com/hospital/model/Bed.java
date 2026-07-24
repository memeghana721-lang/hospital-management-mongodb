package com.hospital.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "beds")
public class Bed {


    @Id
    private String bedId;


    private String bedNumber;

    private String ward;

    private String roomNumber;

    private String bedType;

    private String status;

    private String patientName;



    public Bed() {

    }



    public Bed(String bedId,
               String bedNumber,
               String ward,
               String roomNumber,
               String bedType,
               String status,
               String patientName) {


        this.bedId = bedId;
        this.bedNumber = bedNumber;
        this.ward = ward;
        this.roomNumber = roomNumber;
        this.bedType = bedType;
        this.status = status;
        this.patientName = patientName;

    }




    public String getBedId() {
        return bedId;
    }


    public void setBedId(String bedId) {
        this.bedId = bedId;
    }




    public String getBedNumber() {
        return bedNumber;
    }


    public void setBedNumber(String bedNumber) {
        this.bedNumber = bedNumber;
    }




    public String getWard() {
        return ward;
    }


    public void setWard(String ward) {
        this.ward = ward;
    }




    public String getRoomNumber() {
        return roomNumber;
    }


    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }





    public String getBedType() {
        return bedType;
    }


    public void setBedType(String bedType) {
        this.bedType = bedType;
    }





    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }





    public String getPatientName() {
        return patientName;
    }


    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

}