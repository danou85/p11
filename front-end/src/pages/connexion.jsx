import React from "react";
import NavBar from "../composant/Navbar";
import './pages.css'


import FormLogin from "../composant/login";
const Login = () => {
  return (
    <div>
      <NavBar />
      <FormLogin />
    </div>
  );
};

export default Login;