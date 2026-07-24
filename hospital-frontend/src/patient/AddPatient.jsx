import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import PatientService from "../services/PatientService";
import "./Patient.css";


const AddPatient =()=>{


const navigate = useNavigate();


const [patient,setPatient]=useState({

patientName:"",
age:"",
gender:"",
bloodGroup:"",
phoneNumber:"",
email:"",
address:"",
disease:"",
doctorName:"",
admissionDate:"",
dischargeDate:"",
status:""

});



const handleChange=(e)=>{

setPatient({

...patient,

[e.target.name]:e.target.value

});

};




const savePatient=(e)=>{

e.preventDefault();


console.log(patient);


PatientService.savePatient(patient)

.then((response)=>{


console.log(response.data);


alert("Patient Added Successfully");


navigate("/patients");


})


.catch((error)=>{


console.log(error);


alert("Patient Adding Failed");


});


};




return(

<div className="patient-form-container">


<h2>Add Patient</h2>



<form onSubmit={savePatient}>


<input
name="patientName"
placeholder="Patient Name"
onChange={handleChange}
/>



<input
type="number"
name="age"
placeholder="Age"
onChange={handleChange}
/>




<select
name="gender"
onChange={handleChange}
>

<option value="">Select Gender</option>

<option value="Male">
Male
</option>

<option value="Female">
Female
</option>


</select>




<input
name="bloodGroup"
placeholder="Blood Group"
onChange={handleChange}
/>



<input
name="phoneNumber"
placeholder="Phone Number"
onChange={handleChange}
/>



<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
/>




<input
name="address"
placeholder="Address"
onChange={handleChange}
/>




<input
name="disease"
placeholder="Disease"
onChange={handleChange}
/>




<input
name="doctorName"
placeholder="Doctor Name"
onChange={handleChange}
/>



<label>
Admission Date
</label>


<input

type="date"

name="admissionDate"

onChange={handleChange}

/>




<label>
Discharge Date
</label>


<input

type="date"

name="dischargeDate"

onChange={handleChange}

/>





<select
name="status"
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

Add Patient

</button>


</form>



</div>

);


};


export default AddPatient;