import React, { useState, useEffect } from "react";
import "./Spacer.css"; // Your CSS for spacer layout

const Spacer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the listener
    };
  }, []);

  // Function to calculate the parallax effect speed, increasing as you scroll
  const getSpacerSpeed = (index) => {
    // The faster the scroll position, the greater the speed of each spacer
    const speedFactor = scrollPosition * -0.01; // Adjust multiplier to control speed
    return `${speedFactor * (index + 1)}px`; // Increase the movement with each spacer
  };

  return (
    <div className="spacer-container">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="spacer"
            style={{
              transform: `translateY(${getSpacerSpeed(index)})`, // Apply dynamic transform
            }}
          ></div>
        ))}
    </div>
  );
};

export default Spacer;
