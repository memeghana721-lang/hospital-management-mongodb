import React, { useEffect, useState } from "react";
import PatientService from "../services/PatientService";
import { useNavigate, useParams } from "react-router-dom";

import "./Patient.css";


const UpdatePatient = () => {


    const { id } = useParams();

    const navigate = useNavigate();



    const [patient, setPatient] = useState({

        patientName: "",
        age: "",
        gender: "",
        bloodGroup: "",
        phoneNumber: "",
        email: "",
        address: "",
        disease: "",
        doctorName: "",
        admissionDate: "",
        dischargeDate: "",
        status: ""

    });




    useEffect(() => {

        getPatient();

    }, []);





    const getPatient = () => {


        PatientService.getPatientById(id)

        .then((response) => {


            const data = response.data;



            setPatient({

                patientName: data.patientName || "",

                age: data.age || "",

                gender: data.gender || "",

                bloodGroup: data.bloodGroup || "",

                phoneNumber: data.phoneNumber || "",

                email: data.email || "",

                address: data.address || "",

                disease: data.disease || "",

                doctorName: data.doctorName || "",


                admissionDate: data.admissionDate
                    ? data.admissionDate.substring(0,10)
                    : "",


                dischargeDate: data.dischargeDate
                    ? data.dischargeDate.substring(0,10)
                    : "",


                status: data.status || ""

            });


        })


        .catch((error)=>{

            console.log(error);

        });


    };







    const handleChange = (e)=>{


        setPatient({

            ...patient,

            [e.target.name]: e.target.value

        });


    };







    const updatePatient = (e)=>{


        e.preventDefault();



        PatientService.updatePatient(id, patient)


        .then((response)=>{


            console.log(response.data);


            alert("Patient Updated Successfully");


            navigate("/patients");


        })


        .catch((error)=>{


            console.log(error);


            alert("Patient Update Failed");


        });


    };








    return (



        <div className="patient-form-container">



            <h2>
                Update Patient
            </h2>





            <form onSubmit={updatePatient}>


                <input

                    type="text"

                    name="patientName"

                    value={patient.patientName}

                    placeholder="Patient Name"

                    onChange={handleChange}

                />





                <input

                    type="number"

                    name="age"

                    value={patient.age}

                    placeholder="Age"

                    onChange={handleChange}

                />






                <select

                    name="gender"

                    value={patient.gender}

                    onChange={handleChange}

                >

                    <option value="">
                        Select Gender
                    </option>


                    <option value="Male">
                        Male
                    </option>


                    <option value="Female">
                        Female
                    </option>


                </select>








                <input

                    type="text"

                    name="bloodGroup"

                    value={patient.bloodGroup}

                    placeholder="Blood Group"

                    onChange={handleChange}

                />







                <input

                    type="text"

                    name="phoneNumber"

                    value={patient.phoneNumber}

                    placeholder="Phone Number"

                    onChange={handleChange}

                />







                <input

                    type="email"

                    name="email"

                    value={patient.email}

                    placeholder="Email"

                    onChange={handleChange}

                />







                <input

                    type="text"

                    name="address"

                    value={patient.address}

                    placeholder="Address"

                    onChange={handleChange}

                />







                <input

                    type="text"

                    name="disease"

                    value={patient.disease}

                    placeholder="Disease"

                    onChange={handleChange}

                />







                <input

                    type="text"

                    name="doctorName"

                    value={patient.doctorName}

                    placeholder="Doctor Name"

                    onChange={handleChange}

                />








                <label>
                    Admission Date
                </label>



                <input

                    type="date"

                    name="admissionDate"

                    value={patient.admissionDate}

                    onChange={handleChange}

                />







                <label>
                    Discharge Date
                </label>



                <input

                    type="date"

                    name="dischargeDate"

                    value={patient.dischargeDate}

                    onChange={handleChange}

                />







                <select

                    name="status"

                    value={patient.status}

                    onChange={handleChange}

                >


                    <option value="">
                        Select Status
                    </option>


                    <option value="Admitted">
                        Admitted
                    </option>


                    <option value="Discharged">
                        Discharged
                    </option>


                </select>








                <button type="submit">

                    Update Patient

                </button>





            </form>




        </div>



    );



};



export default UpdatePatient;