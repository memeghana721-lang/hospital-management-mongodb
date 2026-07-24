import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BillingService from "../services/BillingService";

const AddBilling = () => {

    const navigate = useNavigate();

    const [billing, setBilling] = useState({
        patientId: "",
        patientName: "",
        appointmentId: "",
        doctorName: "",
        consultationFee: "",
        medicineCharge: "",
        roomCharge: "",
        totalAmount: "",
        paymentStatus: "",
        paymentDate: ""
    });

    const handleChange = (e) => {
        setBilling({
            ...billing,
            [e.target.name]: e.target.value
        });
    };

    const saveBilling = (e) => {

        e.preventDefault();

        BillingService.saveBilling(billing)
            .then(() => {
                navigate("/billings");
            })
            .catch(error => console.log(error));
    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Add Billing
                </h2>

                <form onSubmit={saveBilling}>

                    <div className="mb-3">
                        <label>Patient ID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="patientId"
                            value={billing.patientId}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Patient Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="patientName"
                            value={billing.patientName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Appointment ID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="appointmentId"
                            value={billing.appointmentId}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Doctor Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="doctorName"
                            value={billing.doctorName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Consultation Fee</label>
                        <input
                            type="number"
                            className="form-control"
                            name="consultationFee"
                            value={billing.consultationFee}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Medicine Charge</label>
                        <input
                            type="number"
                            className="form-control"
                            name="medicineCharge"
                            value={billing.medicineCharge}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Room Charge</label>
                        <input
                            type="number"
                            className="form-control"
                            name="roomCharge"
                            value={billing.roomCharge}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Total Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            name="totalAmount"
                            value={billing.totalAmount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Payment Status</label>

                        <select
                            className="form-control"
                            name="paymentStatus"
                            value={billing.paymentStatus}
                            onChange={handleChange}
                        >
                            <option value="">Select Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                        </select>

                    </div>

                    <div className="mb-3">
                        <label>Payment Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="paymentDate"
                            value={billing.paymentDate}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        className="btn btn-success"
                        type="submit"
                    >
                        Save Billing
                    </button>

                </form>

            </div>

        </div>

    );
};

export default AddBilling;