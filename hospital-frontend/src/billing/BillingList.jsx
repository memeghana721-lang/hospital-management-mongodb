import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BillingService from "../services/BillingService";

const BillingList = () => {

    const [billings, setBillings] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllBillings();
    }, []);

    const getAllBillings = () => {
        BillingService.getAllBillings()
            .then((response) => {
                setBillings(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteBilling = (id) => {
        if (window.confirm("Are you sure you want to delete this billing?")) {
            BillingService.deleteBilling(id)
                .then(() => {
                    getAllBillings();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Billing List</h2>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/add-billing")}
                >
                    Add Billing
                </button>
            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Appointment ID</th>
                        <th>Doctor Name</th>
                        <th>Consultation Fee</th>
                        <th>Medicine Charge</th>
                        <th>Room Charge</th>
                        <th>Total Amount</th>
                        <th>Payment Status</th>
                        <th>Payment Date</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        billings.map((billing) => (

                            <tr key={billing.billingId}>

                                <td>{billing.patientId}</td>
                                <td>{billing.patientName}</td>
                                <td>{billing.appointmentId}</td>
                                <td>{billing.doctorName}</td>
                                <td>{billing.consultationFee}</td>
                                <td>{billing.medicineCharge}</td>
                                <td>{billing.roomCharge}</td>
                                <td>{billing.totalAmount}</td>
                                <td>{billing.paymentStatus}</td>
                                <td>{billing.paymentDate}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() =>
                                            navigate(`/update-billing/${billing.billingId}`)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            deleteBilling(billing.billingId)
                                        }
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

export default BillingList;