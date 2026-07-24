import React, { useEffect, useState } from "react";
import PatientService from "../services/PatientService";
import { useNavigate } from "react-router-dom";

import "./Patient.css";

const PatientList = () => {

    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadPatients();
    }, []);

    const loadPatients = () => {

        PatientService.getAllPatients()

            .then((response) => {

                setPatients(response.data);

            })

            .catch((error) => {

                console.log(error);
                alert("Unable to fetch patients");

            });

    };

    const deletePatient = (id) => {

        if (window.confirm("Are you sure you want to delete this patient?")) {

            PatientService.deletePatient(id)

                .then(() => {

                    alert("Patient Deleted Successfully");
                    loadPatients();

                })

                .catch((error) => {

                    console.log(error);

                });

        }

    };

    return (

        <div
            className="patient-container"
            style={{
                marginTop: "90px",
                padding: "20px"
            }}
        >

            {/* Header */}

            <div className="patient-header">

                <div>

                    <h1>Patient Management</h1>

                    <p>
                        Manage patient records and medical details
                    </p>

                </div>

                <button
                    className="add-patient-btn"
                    onClick={() => navigate("/add-patient")}
                >
                    + Add Patient
                </button>

            </div>

            {/* Card */}

            <div className="patient-card">

                <div className="table-responsive">

                    <table className="patient-table">

                        <thead>

                            <tr>

                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Blood</th>
                                <th>Phone</th>
                                <th>Disease</th>
                                <th>Doctor</th>
                                <th>Status</th>
                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                patients.length > 0 ?

                                    patients.map((patient) => (

                                        <tr key={patient.patientId}>

                                            <td className="patient-name">
                                                {patient.patientName}
                                            </td>

                                            <td>{patient.age}</td>

                                            <td>{patient.gender}</td>

                                            <td>

                                                <span className="blood">

                                                    {patient.bloodGroup}

                                                </span>

                                            </td>

                                            <td>{patient.phoneNumber}</td>

                                            <td>{patient.disease}</td>

                                            <td>{patient.doctorName}</td>

                                            <td>

                                                <span
                                                    className={
                                                        patient.status === "Admitted"
                                                            ? "status admitted"
                                                            : "status discharged"
                                                    }
                                                >
                                                    {patient.status}
                                                </span>

                                            </td>

                                            <td>

                                                <button
                                                    className="edit-btn"
                                                    onClick={() =>
                                                        navigate(`/update-patient/${patient.patientId}`)
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        deletePatient(patient.patientId)
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                    :

                                    <tr>

                                        <td colSpan="9" style={{ textAlign: "center" }}>

                                            No Patients Available

                                        </td>

                                    </tr>

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

};

export default PatientList;