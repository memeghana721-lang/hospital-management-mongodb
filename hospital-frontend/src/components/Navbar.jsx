import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";


const Navbar = () => {


    const navigate = useNavigate();



    const logout = () => {

        localStorage.removeItem("login");

        navigate("/");

    };



    return (


        <nav className="top-navbar">


            <div className="nav-title">

                Hospital Management System

            </div>



            <div className="nav-profile">


                <div className="admin">

                    <FaUserCircle size={28}/>

                    <span>
                        Admin
                    </span>

                </div>



                <button
                    onClick={logout}
                    className="logout-button"
                >

                    <FaSignOutAlt/>

                    Logout

                </button>


            </div>



        </nav>


    );

};


export default Navbar;