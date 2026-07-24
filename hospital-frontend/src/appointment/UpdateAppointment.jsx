import React,{useEffect,useState} from "react";
import {useNavigate,useParams} from "react-router-dom";
import AppointmentService from "../services/AppointmentService";


const UpdateAppointment=()=>{


const {id}=useParams();

const navigate=useNavigate();



const [appointment,setAppointment]=useState({

patientId:"",
patientName:"",
doctorId:"",
doctorName:"",
appointmentDate:"",
appointmentTime:"",
disease:"",
status:""


});





useEffect(()=>{


AppointmentService.getAppointmentById(id)

.then((response)=>{


setAppointment(response.data);


})


.catch((error)=>{

console.log(error);

});


},[id]);







const handleChange=(e)=>{


setAppointment({

...appointment,

[e.target.name]:e.target.value


});


};








const updateAppointment=(e)=>{


e.preventDefault();



AppointmentService.updateAppointment(
id,
appointment
)


.then(()=>{


alert(
"Appointment Updated Successfully"
);


navigate("/appointments");


})


.catch((error)=>{


console.log(error);


alert(
"Appointment Update Failed"
);


});


};






return(


<div className="container mt-4">


<div className="card shadow p-4">



<h2 className="text-center mb-4">

Update Appointment

</h2>





<form onSubmit={updateAppointment}>


<div className="mb-3">

<label>Patient Name</label>

<input

className="form-control"

name="patientName"

value={appointment.patientName}

onChange={handleChange}

/>

</div>





<div className="mb-3">

<label>Doctor Name</label>


<input

className="form-control"

name="doctorName"

value={appointment.doctorName}

onChange={handleChange}

/>


</div>








<div className="mb-3">

<label>Appointment Date</label>


<input

type="date"

className="form-control"

name="appointmentDate"

value={appointment.appointmentDate}

onChange={handleChange}

/>


</div>








<div className="mb-3">

<label>Appointment Time</label>


<input

type="time"

className="form-control"

name="appointmentTime"

value={appointment.appointmentTime}

onChange={handleChange}

/>


</div>







<div className="mb-3">

<label>Disease</label>


<input

className="form-control"

name="disease"

value={appointment.disease}

onChange={handleChange}

/>


</div>









<div className="mb-3">

<label>Status</label>


<select

className="form-control"

name="status"

value={appointment.status}

onChange={handleChange}

>


<option value="">
Select Status
</option>


<option>
Scheduled
</option>


<option>
Completed
</option>


<option>
Cancelled
</option>


</select>


</div>







<button className="btn btn-success">

Update Appointment

</button>





</form>


</div>


</div>


);


};


export default UpdateAppointment;