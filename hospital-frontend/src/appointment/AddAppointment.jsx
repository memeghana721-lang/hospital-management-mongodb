import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppointmentService from "../services/AppointmentService";

const AddAppointment = () => {

    const navigate = useNavigate();

    const [appointment, setAppointment] = useState({

        patientId: "",
        patientName: "",
        doctorId: "",
        doctorName: "",
        appointmentDate: "",
        appointmentTime: "",
        disease: "",
        status: "Scheduled"

    });


    const handleChange = (e) => {

        setAppointment({

            ...appointment,

            [e.target.name]: e.target.value

        });

    };


    const saveAppointment = (e) => {

        e.preventDefault();


        AppointmentService.addAppointment(appointment)

        .then(() => {

            alert("Appointment Added Successfully");

            navigate("/appointments");

        })

        .catch((error) => {

            console.log(error);

            alert("Failed to add appointment");

        });

    };



    return (

        <div className="container mt-4">


            <div className="card shadow p-4">


                <h2 className="text-center mb-4">
                    Add Appointment
                </h2>



                <form onSubmit={saveAppointment}>


                    <div className="mb-3">

                        <label>
                            Patient Name
                        </label>

                        <input

                            type="text"

                            className="form-control"

                            name="patientName"

                            value={appointment.patientName}

                            onChange={handleChange}

                            required

                        />

                    </div>




                    <div className="mb-3">

                        <label>
                            Doctor Name
                        </label>


                        <input

                            type="text"

                            className="form-control"

                            name="doctorName"

                            value={appointment.doctorName}

                            onChange={handleChange}

                            required

                        />

                    </div>




                    <div className="mb-3">

                        <label>
                            Appointment Date
                        </label>


                        <input

                            type="date"

                            className="form-control"

                            name="appointmentDate"

                            value={appointment.appointmentDate}

                            onChange={handleChange}

                            required

                        />

                    </div>




                    <div className="mb-3">

                        <label>
                            Appointment Time
                        </label>


                        <input

                            type="time"

                            className="form-control"

                            name="appointmentTime"

                            value={appointment.appointmentTime}

                            onChange={handleChange}

                            required

                        />

                    </div>




                    <div className="mb-3">

                        <label>
                            Disease
                        </label>


                        <textarea

                            className="form-control"

                            rows="3"

                            name="disease"

                            value={appointment.disease}

                            onChange={handleChange}

                        >

                        </textarea>


                    </div>




                    <div className="mb-3">

                        <label>
                            Status
                        </label>


                        <select

                            className="form-control"

                            name="status"

                            value={appointment.status}

                            onChange={handleChange}

                        >


                            <option value="Scheduled">
                                Scheduled
                            </option>


                            <option value="Completed">
                                Completed
                            </option>


                            <option value="Cancelled">
                                Cancelled
                            </option>


                        </select>


                    </div>




                    <button

                        type="submit"

                        className="btn btn-success"

                    >

                        Save Appointment

                    </button>



                    <button

                        type="button"

                        className="btn btn-secondary ms-3"

                        onClick={()=>navigate("/appointments")}

                    >

                        Cancel

                    </button>



                </form>



            </div>



        </div>

    );

};


export default AddAppointment;