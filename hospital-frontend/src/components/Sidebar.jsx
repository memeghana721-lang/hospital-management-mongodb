import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import {
    FaHospital,
    FaUserMd,
    FaUserInjured,
    FaCalendarCheck,
    FaBed,
    FaFileInvoiceDollar,
    FaTachometerAlt
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {

    return (

        <div className="sidebar">

            <h2 className="hospital-logo">
                <FaHospital />
                MediCare
            </h2>

            <ul>

                <li>
                    <Link to="/dashboard">
                        <FaTachometerAlt />
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/doctors">
                        <FaUserMd />
                        Doctors
                    </Link>
                </li>

                <li>
                    <Link to="/patients">
                        <FaUserInjured />
                        Patients
                    </Link>
                </li>

                <li>
                    <Link to="/appointments">
                        <FaCalendarCheck />
                        Appointments
                    </Link>
                </li>

                <li>
                    <Link to="/beds">
                        <FaBed />
                        Beds
                    </Link>
                </li>

                <li>
                    <Link to="/billings">
                        <FaFileInvoiceDollar />
                        Billing
                    </Link>
                </li>

            </ul>

        </div>

    );
};

export default Sidebar;