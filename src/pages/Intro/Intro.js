import "./Intro.css";
import Avatar from "./images/avatar.jpg";
import { Typewriter } from "react-simple-typewriter";
import React, { useState } from "react";

const Intro = () => {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <section id="intro">
      <div className="container myContainer">
        <img
          src={Avatar}
          alt="avatar"
          className="my-avatar circle"
          width="200px"
        />
        <h1 className="page-header light">Hi, I'm Robert!</h1>
        <div className="divider z-depth-1"></div>
        <p className="flow-text">
          <Typewriter
            words={[" I'm a web developer based in Seattle!"]}
            cursor={showCursor}
            cursorStyle="|"
            onLoopDone={() => setTimeout(() => setShowCursor(false), 1000)}
          />
        </p>
        <p className="flow-text">Welcome to my portfolio!</p>
        <button id="portfolio-btn" className="btn black z-depth-1">
          View Portfolio
        </button>
      </div>
    </section>
  );
};

export default Intro;
