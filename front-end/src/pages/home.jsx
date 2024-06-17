import React from "react";
import Hero from "../composant/hero";
import Features from "../composant/featuer";
import NavBar from "../composant/Navbar";
import Footer from "../composant/footer";


const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  );
};

export default Home;