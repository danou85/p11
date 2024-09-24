import React from "react";
import Hero from "../composant/hero";
import Features from "../composant/featuer";
import NavBar from "../composant/Navbar";
import Footer from "../composant/footer";
import Logo from "../composant/logo";
import Banner from "../composant/banner";
import FeatureItem from "../composant/featureItem";


const Home = () => {
  return (
    <div>
      <Logo/>
      <NavBar/>
      <Banner/>
      <Hero/>
      <Features/>
      <FeatureItem/>
      <Footer/>
    </div>
  );
};

export default Home;