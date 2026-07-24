import axios from "axios";

const BASE_URL = "http://localhost:8094/billing";

const getAllBillings = () => {
    return axios.get(`${BASE_URL}/all`);
};

const saveBilling = (billing) => {
    return axios.post(`${BASE_URL}/save`, billing);
};

const getBillingById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

const updateBilling = (id, billing) => {
    return axios.put(`${BASE_URL}/update/${id}`, billing);
};

const deleteBilling = (id) => {
    return axios.delete(`${BASE_URL}/delete/${id}`);
};

const BillingService = {
    getAllBillings,
    saveBilling,
    getBillingById,
    updateBilling,
    deleteBilling
};

export default BillingService;