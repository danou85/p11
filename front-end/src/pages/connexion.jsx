import React from "react";
import './pages.css'
import NavBar from "../composant/Navbar";
import SignIn from "../composant/signin";
import Logo from "../composant/logo";


const Login = () => {
  return (
    <div>
      <Logo/>
     <NavBar/>
    <SignIn/>
    </div>
  );
};

export default Login;