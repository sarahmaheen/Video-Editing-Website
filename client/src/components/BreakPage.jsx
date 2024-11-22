import React, { useState, useEffect, useRef } from "react";
import "./BreakPage.css";
import Spacer from "./Spacer";

const BreakPage = () => {
  const [isTearing, setIsTearing] = useState(false);
  const breakSectionRef = useRef(null);

  useEffect(() => {
    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the section enters the viewport
          if (entry.isIntersecting) {
            setIsTearing(true); // Trigger the tearing effect
          } else {
            setIsTearing(false); // Reset when out of view
          }
        });
      },
      { threshold: 0.9 } // Trigger when 50% of the element is visible
    );

    // Observe the break section
    if (breakSectionRef.current) {
      observer.observe(breakSectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (breakSectionRef.current) {
        observer.unobserve(breakSectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={breakSectionRef} className="break-section">
      <div className={`break-div left-div ${isTearing ? "tearing" : ""}`}>
        <h1>BRE</h1>
      </div>
      <div className={`break-div right-div ${isTearing ? "tearing" : ""}`}>
        <h1>AK</h1>
      </div>
      <p className={`break-and ${isTearing ? "hidden" : ""}`}>AND</p>

      <div className="next-section">
        {/* Call the Spacer Component */}
        <Spacer />
        <div className="next-section-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            ipsam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreakPage;
