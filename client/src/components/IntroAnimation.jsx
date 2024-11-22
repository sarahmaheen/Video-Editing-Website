import React, { useEffect, useState } from "react";
import { Particles } from "react-tsparticles";
import "./IntroAnimation.css";

const IntroAnimation = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 2000),
      setTimeout(() => setStage(3), 3000),
      setTimeout(() => setStage(4), 4000),
      setTimeout(() => onComplete(), 5000),
    ];
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [onComplete]);

  return (
    <div className="intro-animation">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 50,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
            },
            opacity: {
              value: 0.5,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "random",
            },
          },
        }}
      />
      {stage === 0 && <h1 className="yes">YES</h1>}
      {stage === 1 && (
        <h1 className="ads">
          We made those <span className="ads-highlight">ads</span>
        </h1>
      )}
      {stage === 2 && (
        <div className="everyone-flex">
          {Array(100)
            .fill("EVERYONE")
            .map((word, index) => (
              <span key={index} className="everyone-word">
                {word}
              </span>
            ))}
        </div>
      )}
      {stage === 3 && <div className="everyone-collapsing">EVERYONE</div>}
      {stage === 4 && <h1 className="talking-about">IS TALKING ABOUT</h1>}
    </div>
  );
};

export default IntroAnimation;
