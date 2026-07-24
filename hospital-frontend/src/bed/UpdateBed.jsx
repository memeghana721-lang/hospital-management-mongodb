import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BedService from "../services/BedService";
import "./Bed.css";

const UpdateBed = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [bed, setBed] = useState({
        bedNumber: "",
        ward: "",
        roomNumber: "",
        bedType: "",
        status: "",
        patientName: ""
    });

    useEffect(() => {
        getBed();
    }, [id]);

    const getBed = () => {
        BedService.getBedById(id)
            .then((response) => {
                setBed({
                    bedNumber: response.data.bedNumber || "",
                    ward: response.data.ward || "",
                    roomNumber: response.data.roomNumber || "",
                    bedType: response.data.bedType || "",
                    status: response.data.status || "",
                    patientName: response.data.patientName || ""
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (e) => {
        setBed({
            ...bed,
            [e.target.name]: e.target.value
        });
    };

    const updateBed = (e) => {
        e.preventDefault();

        BedService.updateBed(id, bed)
            .then(() => {
                alert("Bed Updated Successfully");
                navigate("/beds");
            })
            .catch((error) => {
                console.log(error);
                alert("Bed Update Failed");
            });
    };

    return (
        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Update Bed
                </h2>

                <form onSubmit={updateBed}>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label>Bed Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="bedNumber"
                                value={bed.bedNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Ward</label>
                            <input
                                type="text"
                                className="form-control"
                                name="ward"
                                value={bed.ward}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Room Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="roomNumber"
                                value={bed.roomNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
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

                        <div className="col-md-6 mb-3">
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

                        <div className="col-md-6 mb-3">
                            <label>Patient Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="patientName"
                                value={bed.patientName}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >
                        Update Bed
                    </button>

                </form>

            </div>

        </div>
    );
};

export default UpdateBed;