import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {

    const navigate = useNavigate();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    const login=(e)=>{

        e.preventDefault();


        if(username==="admin" && password==="admin123"){

            localStorage.setItem("login","true");

            navigate("/dashboard");

        }

        else{

            alert("Invalid Username or Password");

        }

    };


    return(

        <div className="login-page">


            <div className="login-card">


                <div className="hospital-icon">
                    🏥
                </div>


                <h2 className="login-title">

                    Hospital Management System

                </h2>



                <form onSubmit={login}>


                    <label className="login-label">
                        Username
                    </label>


                    <input

                        type="text"

                        className="login-input"

                        value={username}

                        onChange={(e)=>setUsername(e.target.value)}

                    />



                    <br/>


                    <label className="login-label">
                        Password
                    </label>


                    <input

                        type="password"

                        className="login-input"

                        value={password}

                        onChange={(e)=>setPassword(e.target.value)}

                    />



                    <button className="login-btn">

                        Login

                    </button>


                </form>


            </div>


        </div>

    );

};


export default Login;