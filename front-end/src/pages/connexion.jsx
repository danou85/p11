import React from "react";
import './pages.css'
import NavBar from "../composant/Navbar";
import SignIn from "../composant/signin";



const Login = () => {
  return (
    <div>
     <NavBar/>
    <SignIn/>
    </div>
  );
};

export default Login;