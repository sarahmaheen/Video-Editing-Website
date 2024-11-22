import React, { useState } from "react";
import IntroAnimation from "./IntroAnimation";
import "./LandingPage.css";

const LandingPage = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="landing-page">
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <>
          <div className="video-container">
            <video
              className="landing-video"
              src="https://videos.pexels.com/video-files/8244304/8244304-uhd_2560_1440_25fps.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>

          <div className="content-container">
            <div className="showcase">
              <h1 className="showcase-title">Welcome to Our Platform</h1>
              <h2 className="showcase-subtitle">Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. Odio magnam <br /> aspernatur voluptatum omnis </h2>
            </div>

            <div className="button-container">
              <button className="video-button">DELL TECNHO</button>
              <button className="video-button">FIIRA NOV</button>
              <button className="video-button">XMAN.OL</button>
              <button className="video-button">LOREq PARis</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
