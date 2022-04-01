import "./About.css";
import React from "react";

const About = () => {
  return (
    <section className="about-container container">
      <h1 className="page-header">About</h1>
      <div className="divider z-depth-1"></div>
      <div className="section">
        <div className="about-content-container">
          <p className="left-align">
            Hi, I'm Robert!
            <br />
            <br />
            I'm a full-stack web developer who utilizes my applied physics and
            avionics background to implement agile solutions to complex
            problems.
            <br />
            <br />
            I'm an adaptive and communicative team member that emphasizes
            efficient and readable code. I’m eager to contribute my skills to a
            collaborative environment where I can further develop acquired
            skills as well as learn new ones!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
