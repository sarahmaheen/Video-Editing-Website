import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      {loading && (
        <div className="loading-overlay">
          <div className="circle-container">
            <div className="circle circle-left"></div>
            <div className="circle circle-right"></div>
          </div>
        </div>
      )}

      {!loading && (
        <>
          {/* Video Section */}
          <div className="video-container">
            <video
              className="landing-video"
              src="video1.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>

          {/* Content Section */}
          <div className="content-container">
            {/* Showcase Section */}
            <div className="showcase">
              <h1 className="showcase-title">Welcome to Our Platform</h1>
              <h2 className="showcase-subtitle">Your journey starts here</h2>
            </div>

            {/* Buttons Section */}
            <div className="button-container">
              <button className="video-button">Video 1</button>
              <button className="video-button">Video 2</button>
              <button className="video-button">Video 3</button>
              <button className="video-button">Video 4</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
