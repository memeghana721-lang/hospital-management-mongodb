import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DoctorService from "../services/DoctorService";
import "./Doctor.css";

const UpdateDoctor = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [doctor, setDoctor] = useState({
        doctorName: "",
        gender: "",
        age: "",
        specialization: "",
        qualification: "",
        experience: "",
        phoneNumber: "",
        email: "",
        status: ""
    });

    useEffect(() => {
        DoctorService.getDoctorById(id)
            .then((response) => {
                setDoctor(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleChange = (e) => {
        setDoctor({
            ...doctor,
            [e.target.name]: e.target.value
        });
    };

    const updateDoctor = (e) => {

        e.preventDefault();

        DoctorService.updateDoctor(id, doctor)
            .then(() => {
                navigate("/doctors");
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Update Doctor
                </h2>

                <form onSubmit={updateDoctor}>

                    <div className="mb-3">
                        <label>Doctor Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="doctorName"
                            value={doctor.doctorName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Gender</label>
                        <select
                            className="form-control"
                            name="gender"
                            value={doctor.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label>Age</label>
                        <input
                            type="number"
                            className="form-control"
                            name="age"
                            value={doctor.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Specialization</label>
                        <input
                            type="text"
                            className="form-control"
                            name="specialization"
                            value={doctor.specialization}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Qualification</label>
                        <input
                            type="text"
                            className="form-control"
                            name="qualification"
                            value={doctor.qualification}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Experience</label>
                        <input
                            type="number"
                            className="form-control"
                            name="experience"
                            value={doctor.experience}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            value={doctor.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={doctor.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Status</label>
                        <select
                            className="form-control"
                            name="status"
                            value={doctor.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Status</option>
                            <option>Available</option>
                            <option>Unavailable</option>
                        </select>
                    </div>

                    <button className="btn btn-success">
                        Update Doctor
                    </button>

                </form>

            </div>

        </div>

    );

};

export default UpdateDoctor;