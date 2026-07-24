import axios from "axios";

const BASE_URL = "http://localhost:8094/bed";

const getAllBeds = () => {
    return axios.get(`${BASE_URL}/all`);
};

const saveBed = (bed) => {
    return axios.post(`${BASE_URL}/save`, bed);
};

const getBedById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

const updateBed = (id, bed) => {
    return axios.put(`${BASE_URL}/update/${id}`, bed);
};

const deleteBed = (id) => {
    return axios.delete(`${BASE_URL}/delete/${id}`);
};

const BedService = {
    getAllBeds,
    saveBed,
    getBedById,
    updateBed,
    deleteBed
};

export default BedService;