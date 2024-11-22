import React, { useState, useEffect } from "react";
import "./Rubbers.css"; // Import CSS for styling

const Rubbers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update scroll position on scroll
    };

    window.addEventListener("scroll", handleScroll); // Attach the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  // Function to calculate the movement of rubbers based on scroll position
  const getRubberPosition = (index) => {
    const movement = scrollPosition * 0.08; // Adjust multiplier to control speed
    return index % 2 === 0
      ? `translateX(-${movement}px)` // For even index, move from left
      : `translateX(${movement}px)`; // For odd index, move from right
  };

  return (
    <div className="rubbers-container">
      <div
        className="rubber"
        style={{
          backgroundColor: "rgb(253, 66, 57)",
          transform: getRubberPosition(0),
        }}
      >
        <h4>Red Rubber</h4>
      </div>
      <div
        className="rubber"
        style={{
          backgroundColor: "#3055ff",
          transform: getRubberPosition(1),
        }}
      >
        <h4>Blue Rubber</h4>
      </div>
      <div
        className="rubber"
        style={{
          backgroundColor: "#ffb701",
          transform: getRubberPosition(2),
        }}
      >
        <h4>Green Rubber</h4>
      </div>
      <div
        className="rubber"
        style={{
          backgroundColor: "#24ce49",
          transform: getRubberPosition(3),
        }}
      >
        <h4>Yellow Rubber</h4>
      </div>
    </div>
  );
};

export default Rubbers;
