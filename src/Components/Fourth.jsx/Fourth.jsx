import React, { useEffect, useRef } from "react";
import "./Fourth.css"
const Fourth = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    video.controls = true;
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    video.controls = false;
  };

  return (
    <div className="FourthDiv">
      <video
        ref={videoRef}
        src="https://videos.ctfassets.net/u1nb1km7t5q7/4ca6T0U5D55iXM6mEBl5ZL/eb2c3b8ff8ea750ca33a2dcf6a1b83c3/the-athenaeum-anti-oxidants-video-block.mp4
"
        width={"800"}
        height="360"
        controls
        autoplay
        loop
        muted
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Your browser does not support the video tag.
      </video>
      <div className="FourthDivRight">
        <p className="firstp">The Athenaeum</p>
       <h4 className="title">Lessons from lab</h4>
        <p className="secondp">
        In this instalment of our ‘Under the Microscope’ series: a focus on anti-oxidant-rich skin care and its benefits to city-dwellers.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Fourth;
