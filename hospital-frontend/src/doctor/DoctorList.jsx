import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorService from "../services/DoctorService";
import "./Doctor.css";

const DoctorList = () => {

    const [doctors, setDoctors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllDoctors();
    }, []);

    const getAllDoctors = () => {
        DoctorService.getAllDoctors()
            .then((response) => {
                setDoctors(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteDoctor = (id) => {

        if (window.confirm("Are you sure you want to delete this doctor?")) {

            DoctorService.deleteDoctor(id)
                .then(() => {
                    getAllDoctors();
                })
                .catch((error) => {
                    console.log(error);
                });

        }

    };

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h2>Doctor List</h2>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/add-doctor")}
                >
                    Add Doctor
                </button>

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Specialization</th>
                        <th>Qualification</th>
                        <th>Experience</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        doctors.map((doctor) => (

                            <tr key={doctor.doctorId}>

                                <td>{doctor.doctorName}</td>
                                <td>{doctor.gender}</td>
                                <td>{doctor.age}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.qualification}</td>
                                <td>{doctor.experience}</td>
                                <td>{doctor.phoneNumber}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.status}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() =>
                                            navigate(`/update-doctor/${doctor.doctorId}`)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            deleteDoctor(doctor.doctorId)
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

};

export default DoctorList;