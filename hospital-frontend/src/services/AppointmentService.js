import axios from "axios";


const BASE_URL="http://localhost:8094/appointment";



class AppointmentService{


addAppointment(appointment){

return axios.post(
`${BASE_URL}/save`,
appointment
);

}




getAllAppointments(){

return axios.get(
`${BASE_URL}/all`
);

}




getAppointmentById(id){

return axios.get(
`${BASE_URL}/${id}`
);

}




updateAppointment(id,appointment){

return axios.put(
`${BASE_URL}/update/${id}`,
appointment
);

}




deleteAppointment(id){

return axios.delete(
`${BASE_URL}/delete/${id}`
);

}



}


export default new AppointmentService();