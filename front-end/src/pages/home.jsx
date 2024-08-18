import React from "react";
import Hero from "../composant/hero";
import Features from "../composant/featuer";
import NavBar from "../composant/Navbar";
import Footer from "../composant/footer";
import Logo from "../composant/logo";
import Banner from "../composant/banner";


const Home = () => {
  return (
    <div>
      <Logo/>
      <NavBar/>
      <Banner/>
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  );
};

export default Home;