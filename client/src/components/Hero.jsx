import React from "react";
import { Routes, Route } from "react-router-dom";
// import  from "../pages/";LandingPage
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Services from "../pages/Services";
import LandingPage from "./LandingPage";

const Hero = () => {
  return (
    <div className="hero">
      <Routes>
        <Route path="/" element={< LandingPage/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default Hero;
