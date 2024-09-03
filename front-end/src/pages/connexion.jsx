import React from "react";
import './pages.css'
import NavBar from "../composant/Navbar";
import SignIn from "../composant/signin";
import Logo from "../composant/logo";
import Footer from "../composant/footer";


const Login = () => {
  return (
    <div>
      <header>
      <Logo/>
     <NavBar/>
     </header>
     <main>
     <SignIn/>
     </main>
    <Footer/>
    </div>
  );
};

export default Login;