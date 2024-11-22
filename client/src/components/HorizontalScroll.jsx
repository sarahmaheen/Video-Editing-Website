import React, { useRef, useEffect } from "react";
import "./HorizontalScroll.css";

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Handle vertical scroll translated to horizontal scroll
    const handleScroll = (event) => {
      if (container) {
        container.scrollLeft += event.deltaY; // Scroll horizontally
        event.preventDefault(); // Prevent default vertical scrolling
      }
    };

    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="horizontal-scroll-root">
      <div ref={containerRef} className="scroll-container">
        <div className="scroll-page">
          <h1>Page 1</h1>
          <p>Welcome to the first page!</p>
        </div>
        <div className="scroll-page">
          <h1>Page 2</h1>
          <p>Here is the second page.</p>
        </div>
        <div className="scroll-page">
          <h1>Page 3</h1>
          <p>This is the third page.</p>
        </div>
        <div className="scroll-page">
          <h1>Page 4</h1>
          <p>Enjoy exploring the last page!</p>
        </div>
        <div className="scroll-page">
          <h1>Page 4</h1>
          <p>Enjoy exploring the last page!</p>
        </div>
        <div className="scroll-page">
          <h1>Page 4</h1>
          <p>Enjoy exploring the last page!</p>
        </div>
        <div className="scroll-page">
          <h1>Page 4</h1>
          <p>Enjoy exploring the last page!</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll
