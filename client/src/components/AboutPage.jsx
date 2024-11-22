import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import smiley1 from "../assests/ball/ballimg1.png"; 
import smiley2 from "../assests/ball/ballimg2.png";
import smiley3 from "../assests/ball/ballimg3.png";
import smiley4 from "../assests/ball/ballimg4.png";
import smiley5 from "../assests/ball/ballimg5.png";
import smiley6 from "../assests/ball/ballimg6.png";
import smiley7 from "../assests/ball/ballimg7.png";
import smiley8 from "../assests/ball/ballimg8.png";
import smiley9 from "../assests/ball/ballimg9.png";
import smiley10 from "../assests/ball/ballimg10.png";
import Spacer from "./Spacer";

const AboutPage = () => {
  const smileyImages = [
    smiley1,
    smiley2,
    smiley3,
    smiley4,
    smiley5,
    smiley6,
    smiley7,
    smiley8,
    smiley9,
    smiley10,
  ];

  const [positions, setPositions] = useState(
    smileyImages.map(() => ({
      top: Math.random() * 80,
      left: Math.random() * 80,
      directionX: Math.random() > 0.5 ? 1 : -1,
      directionY: Math.random() > 0.5 ? 1 : -1,
      speed: Math.random() * 2 + 0.5,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => {
          let newTop = pos.top + pos.directionY * pos.speed;
          let newLeft = pos.left + pos.directionX * pos.speed;

          if (newTop < 0 || newTop > 80) pos.directionY *= -1;
          if (newLeft < 0 || newLeft > 80) pos.directionX *= -1;

          return {
            ...pos,
            top: Math.max(0, Math.min(newTop, 80)),
            left: Math.max(0, Math.min(newLeft, 80)),
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
        <Spacer/>
      <div className="about-container">
        <div className="upper-section">
          {/* Similies Section */}
          <div className="similies-section">
            {smileyImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Smiley ${index + 1}`}
                className="smiley"
                style={{
                  top: `${positions[index]?.top}%`,
                  left: `${positions[index]?.left}%`,
                }}
              />
            ))}
          </div>

          {/* Content Section */}
          <div className="content-section">
            <p className="above-video-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, minus officiis? Beatae!
            </p>
            <div className="about-video-container">
              <video className="about-video" muted loop autoPlay>
                <source
                  src="https://videos.pexels.com/video-files/8721923/8721923-sd_960_506_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="about-bottom-section">
          <p>Additional information about the About Page can go here.</p>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <video className="inline-video" muted loop autoPlay>
              <source
                src="https://videos.pexels.com/video-files/8721923/8721923-sd_960_506_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            Fugiat, fuga voluptates. Placeat praesentium perferendis porro.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
