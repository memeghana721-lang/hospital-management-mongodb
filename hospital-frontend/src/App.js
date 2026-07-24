import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


// Components
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


// Doctor Module
import DoctorList from "./doctor/DoctorList";
import AddDoctor from "./doctor/AddDoctor";
import UpdateDoctor from "./doctor/UpdateDoctor";


// Patient Module
import PatientList from "./patient/PatientList";
import AddPatient from "./patient/AddPatient";
import UpdatePatient from "./patient/UpdatePatient";


// Appointment Module
import AppointmentList from "./appointment/AppointmentList";
import AddAppointment from "./appointment/AddAppointment";
import UpdateAppointment from "./appointment/UpdateAppointment";


// Bed Module
import BedList from "./bed/BedList";
import AddBed from "./bed/AddBed";
import UpdateBed from "./bed/UpdateBed";


// Billing Module
import BillingList from "./billing/BillingList";
import AddBilling from "./billing/AddBilling";
import UpdateBilling from "./billing/UpdateBilling";





function Layout({children}){

    return(

        <div className="app-layout">

            <Sidebar/>

            <div className="main-content">

                <Navbar/>

                <div className="page-container">

                    {children}

                </div>

            </div>

        </div>

    );

}







function App(){

return(

<Router>


<Routes>



{/* LOGIN */}

<Route

path="/"

element={<Login/>}

/>






{/* DASHBOARD */}

<Route

path="/dashboard"

element={

<ProtectedRoute>

<Layout>

<Dashboard/>

</Layout>

</ProtectedRoute>

}

/>







{/* ================= DOCTOR ================= */}



<Route path="/doctors"

element={

<ProtectedRoute>

<Layout>

<DoctorList/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/add-doctor"

element={

<ProtectedRoute>

<Layout>

<AddDoctor/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/update-doctor/:id"

element={

<ProtectedRoute>

<Layout>

<UpdateDoctor/>

</Layout>

</ProtectedRoute>

}

/>







{/* ================= PATIENT ================= */}



<Route path="/patients"

element={

<ProtectedRoute>

<Layout>

<PatientList/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/add-patient"

element={

<ProtectedRoute>

<Layout>

<AddPatient/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/update-patient/:id"

element={

<ProtectedRoute>

<Layout>

<UpdatePatient/>

</Layout>

</ProtectedRoute>

}

/>







{/* ================= APPOINTMENT ================= */}



<Route path="/appointments"

element={

<ProtectedRoute>

<Layout>

<AppointmentList/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/add-appointment"

element={

<ProtectedRoute>

<Layout>

<AddAppointment/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/update-appointment/:id"

element={

<ProtectedRoute>

<Layout>

<UpdateAppointment/>

</Layout>

</ProtectedRoute>

}

/>








{/* ================= BED ================= */}



<Route path="/beds"

element={

<ProtectedRoute>

<Layout>

<BedList/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/add-bed"

element={

<ProtectedRoute>

<Layout>

<AddBed/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/update-bed/:id"

element={

<ProtectedRoute>

<Layout>

<UpdateBed/>

</Layout>

</ProtectedRoute>

}

/>








{/* ================= BILLING ================= */}



<Route path="/billings"

element={

<ProtectedRoute>

<Layout>

<BillingList/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/add-billing"

element={

<ProtectedRoute>

<Layout>

<AddBilling/>

</Layout>

</ProtectedRoute>

}

/>




<Route path="/update-billing/:id"

element={

<ProtectedRoute>

<Layout>

<UpdateBilling/>

</Layout>

</ProtectedRoute>

}

/>







{/* INVALID URL */}

<Route

path="*"

element={

<h2 style={{textAlign:"center",marginTop:"100px"}}>

Page Not Found

</h2>

}

/>





</Routes>


</Router>


);

}


export default App;