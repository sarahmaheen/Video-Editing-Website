import React from "react";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import Rubbers from "./Rubbers"
import BreakPage from "./BreakPage";
import HorizontalScroll from "./HorizontalScroll";

import "./Hero.css"; // Import the CSS file for Hero styles

const Hero = () => {
  return (
    <div className="hero">
      <LandingPage />
    
      <AboutPage />
      <Rubbers/>
      <BreakPage/>
      <HorizontalScroll/>
    </div>
  );
};

export default Hero;
