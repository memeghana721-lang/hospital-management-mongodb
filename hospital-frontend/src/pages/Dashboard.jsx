import React, { useEffect, useState } from "react";

import {
    FaUserMd,
    FaUserInjured,
    FaCalendarCheck,
    FaBed,
    FaFileInvoiceDollar
} from "react-icons/fa";


import DoctorService from "../services/DoctorService";
import PatientService from "../services/PatientService";
import AppointmentService from "../services/AppointmentService";
import BedService from "../services/BedService";
import BillingService from "../services/BillingService";

import "./Dashboard.css";



const Dashboard = () => {


    const [totalDoctors,setTotalDoctors] = useState(0);

    const [totalPatients,setTotalPatients] = useState(0);

    const [totalAppointments,setTotalAppointments] = useState(0);

    const [availableBeds,setAvailableBeds] = useState(0);

    const [totalBills,setTotalBills] = useState(0);





    useEffect(()=>{

        loadDashboard();

    },[]);





    const loadDashboard = () => {



        DoctorService.getAllDoctors()

        .then(res=>{

            setTotalDoctors(res.data.length);

        })

        .catch(err=>console.log(err));





        PatientService.getAllPatients()

        .then(res=>{

            setTotalPatients(res.data.length);

        })

        .catch(err=>console.log(err));






        AppointmentService.getAllAppointments()

        .then(res=>{

            setTotalAppointments(res.data.length);

        })

        .catch(err=>console.log(err));







        BedService.getAllBeds()

        .then(res=>{


            const available = res.data.filter(

                bed => bed.status === "Available"

            );


            setAvailableBeds(available.length);


        })

        .catch(err=>console.log(err));








        BillingService.getAllBillings()

        .then(res=>{

            setTotalBills(res.data.length);

        })

        .catch(err=>console.log(err));



    };






    const cards=[


        {

            title:"Total Doctors",

            count:totalDoctors,

            icon:<FaUserMd/>,

            className:"doctor"

        },



        {

            title:"Total Patients",

            count:totalPatients,

            icon:<FaUserInjured/>,

            className:"patient"

        },



        {

            title:"Appointments",

            count:totalAppointments,

            icon:<FaCalendarCheck/>,

            className:"appointment"

        },



        {

            title:"Available Beds",

            count:availableBeds,

            icon:<FaBed/>,

            className:"bed"

        },



        {

            title:"Total Bills",

            count:totalBills,

            icon:<FaFileInvoiceDollar/>,

            className:"bill"

        }


    ];







    return (

        <div className="dashboard">


            <h1>
                Hospital Dashboard
            </h1>


            <p className="welcome">
                Welcome Admin, manage hospital activities efficiently
            </p>




            <div className="dashboard-cards">


                {
                    cards.map((card,index)=>(


                        <div 
                            className={`dashboard-card ${card.className}`}
                            key={index}
                        >


                            <div className="card-icon">

                                {card.icon}

                            </div>



                            <div>


                                <h3>
                                    {card.count}
                                </h3>


                                <p>
                                    {card.title}
                                </p>


                            </div>


                        </div>


                    ))
                }



            </div>



        </div>

    );


};


export default Dashboard;