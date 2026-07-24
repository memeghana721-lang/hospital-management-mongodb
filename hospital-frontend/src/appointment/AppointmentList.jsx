import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppointmentService from "../services/AppointmentService";


const AppointmentList = () => {


    const [appointments, setAppointments] = useState([]);

    const navigate = useNavigate();



    useEffect(() => {

        getAllAppointments();

    }, []);





    const getAllAppointments = () => {


        AppointmentService.getAllAppointments()

        .then((response)=>{

            setAppointments(response.data);

        })

        .catch((error)=>{

            console.log(error);

        });


    };







    const deleteAppointment=(id)=>{


        if(window.confirm(
            "Are you sure you want to delete this appointment?"
        )){


            AppointmentService.deleteAppointment(id)

            .then(()=>{

                alert("Appointment Deleted Successfully");

                getAllAppointments();

            })

            .catch((error)=>{

                console.log(error);

            });


        }


    };








return(


<div className="container mt-4">



<div className="d-flex justify-content-between align-items-center mb-3">


<h2>
Appointment List
</h2>



<button

className="btn btn-primary"

onClick={()=>navigate("/add-appointment")}

>

+ Add Appointment

</button>



</div>







<table className="table table-bordered table-hover">


<thead className="table-dark">


<tr>

<th>
Patient Name
</th>


<th>
Doctor Name
</th>


<th>
Appointment Date
</th>


<th>
Appointment Time
</th>


<th>
Disease
</th>


<th>
Status
</th>


<th>
Actions
</th>


</tr>


</thead>







<tbody>


{

appointments.length > 0 ?


appointments.map((appointment)=>(


<tr key={appointment.appointmentId}>


<td>

{appointment.patientName}

</td>




<td>

{appointment.doctorName}

</td>





<td>

{appointment.appointmentDate}

</td>





<td>

{appointment.appointmentTime}

</td>





<td>

{appointment.disease}

</td>





<td>

{appointment.status}

</td>







<td>



<button

className="btn btn-warning btn-sm me-2"

onClick={()=>navigate(
`/update-appointment/${appointment.appointmentId}`
)}

>

Edit

</button>







<button

className="btn btn-danger btn-sm"

onClick={()=>deleteAppointment(
appointment.appointmentId
)}

>

Delete

</button>




</td>





</tr>


))


:


<tr>

<td colSpan="7" className="text-center">

No Appointments Available

</td>

</tr>


}




</tbody>



</table>




</div>



);


};


export default AppointmentList;