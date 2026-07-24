import axios from "axios";


const API_URL = "http://localhost:8094/patient";


class PatientService {


    savePatient(patient){

        return axios.post(
            `${API_URL}/save`,
            patient
        );

    }


    getAllPatients(){

        return axios.get(
            `${API_URL}/all`
        );

    }


    getPatientById(id){

        return axios.get(
            `${API_URL}/${id}`
        );

    }


    updatePatient(id, patient){

        return axios.put(
            `${API_URL}/update/${id}`,
            patient
        );

    }


    deletePatient(id){

        return axios.delete(
            `${API_URL}/delete/${id}`
        );

    }


}


export default new PatientService();