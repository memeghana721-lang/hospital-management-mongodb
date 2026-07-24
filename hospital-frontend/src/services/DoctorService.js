import axios from "axios";


const BASE_URL = "http://localhost:8094/doctor";

const getAllDoctors = () => {
    return axios.get(`${BASE_URL}/all`);
};

const saveDoctor = (doctor) => {
    return axios.post(`${BASE_URL}/save`, doctor);
};

const getDoctorById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

const updateDoctor = (id, doctor) => {
    return axios.put(`${BASE_URL}/update/${id}`, doctor);
};

const deleteDoctor = (id) => {
    return axios.delete(`${BASE_URL}/delete/${id}`);
};

const DoctorService = {
    getAllDoctors,
    saveDoctor,
    getDoctorById,
    updateDoctor,
    deleteDoctor
};

export default DoctorService;