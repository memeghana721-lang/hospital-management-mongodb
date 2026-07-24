import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BedService from "../services/BedService";
import "./Bed.css";

const AddBed = () => {

    const navigate = useNavigate();

    const [bed, setBed] = useState({
        bedNumber: "",
        ward: "",
        roomNumber: "",
        bedType: "",
        status: "",
        patientName: ""
    });

    const handleChange = (e) => {
        setBed({
            ...bed,
            [e.target.name]: e.target.value
        });
    };

    const saveBed = (e) => {

        e.preventDefault();

        console.log(bed); // Check data in browser console

        BedService.saveBed(bed)
            .then(() => {
                alert("Bed Added Successfully");
                navigate("/beds");
            })
            .catch((error) => {
                console.log(error);
                alert("Bed Adding Failed");
            });
    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Add Bed
                </h2>

                <form onSubmit={saveBed}>

                    <div className="mb-3">
                        <label>Bed Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="bedNumber"
                            value={bed.bedNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Ward</label>
                        <input
                            type="text"
                            className="form-control"
                            name="ward"
                            value={bed.ward}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Room Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="roomNumber"
                            value={bed.roomNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Bed Type</label>
                        <select
                            className="form-control"
                            name="bedType"
                            value={bed.bedType}
                            onChange={handleChange}
                        >
                            <option value="">Select Type</option>
                            <option value="General">General</option>
                            <option value="ICU">ICU</option>
                            <option value="Emergency">Emergency</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label>Status</label>
                        <select
                            className="form-control"
                            name="status"
                            value={bed.status}
                            onChange={handleChange}
                        >
                            <option value="">Select Status</option>
                            <option value="Available">Available</option>
                            <option value="Occupied">Occupied</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label>Patient Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="patientName"
                            value={bed.patientName}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Save Bed
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary ms-2"
                        onClick={() => navigate("/beds")}
                    >
                        Cancel
                    </button>

                </form>

            </div>

        </div>

    );
};

export default AddBed;