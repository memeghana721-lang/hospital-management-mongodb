import React,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import BedService from "../services/BedService";
import "./Bed.css";


const BedList=()=>{


const [beds,setBeds]=useState([]);

const navigate=useNavigate();



useEffect(()=>{

loadBeds();

},[]);




const loadBeds=()=>{


BedService.getAllBeds()

.then((response)=>{

setBeds(response.data);

})


.catch((error)=>{

console.log(error);

});


};





const deleteBed=(id)=>{


if(window.confirm("Delete Bed?")){


BedService.deleteBed(id)

.then(()=>{

loadBeds();

});


}


};





return(


<div className="container mt-4">


<div className="d-flex justify-content-between mb-3">


<h2>
Bed List
</h2>



<button

className="btn btn-primary"

onClick={()=>navigate("/add-bed")}

>

+ Add Bed

</button>


</div>





<table className="table table-bordered table-hover">


<thead className="table-dark">


<tr>

<th>Bed Number</th>

<th>Ward</th>

<th>Room Number</th>

<th>Type</th>

<th>Status</th>

<th>Patient</th>

<th>Action</th>


</tr>


</thead>




<tbody>


{

beds.map((bed)=>(


<tr key={bed.bedId}>


<td>
{bed.bedNumber}
</td>



<td>
{bed.ward}
</td>



<td>
{bed.roomNumber}
</td>



<td>
{bed.bedType}
</td>



<td>
{bed.status}
</td>



<td>
{bed.patientName}
</td>




<td>


<button

className="btn btn-warning btn-sm me-2"

onClick={()=>navigate(`/update-bed/${bed.bedId}`)}

>

Edit

</button>




<button

className="btn btn-danger btn-sm"

onClick={()=>deleteBed(bed.bedId)}

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


export default BedList;