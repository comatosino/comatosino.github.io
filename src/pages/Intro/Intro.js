import React from "react";

import "./Intro.css";

import Avatar from "./images/avatar.jpg";

export default function Intro() {
  return (
    <section id="intro">
      <div className="container myContainer">
      <img src={Avatar} alt="avatar" className="circle" width="200px" />
        <h1 className="page-header light">Hi, I'm Robert!</h1>
        <div className="divider z-depth-1"></div>
        <p className="flow-text">I'm a web developer based in Seattle.</p>
        <p className="flow-text">Welcome to my portfolio!</p>
        <button id="portfolio-btn" className="btn black z-depth-1">
          View Portfolio
        </button>
      </div>
    </section>
  );
}
