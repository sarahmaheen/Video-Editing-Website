import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import HorizontalScroll from "./components/HorizontalScroll";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* <Navbar /> */}
        <Hero />
        {/* <HorizontalScroll/> */}
      </div>
    </Router>
  );
};

export default App;
