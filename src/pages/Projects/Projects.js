import React from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import consolelog from "./webapp-screenshots/consolelog.png";
import pantrimonium from "./webapp-screenshots/pantrimonium.png";
import vedomy from "./webapp-screenshots/vedomy.png";
// import empDir from './webapp-screenshots/emp-dir.gif';
// import empTracker from './webapp-screenshots/emp-tracker.gif';
// import weatherDash from './webapp-screenshots/weather-dashboard.gif';

import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: uuidv4(),
      name: "Console Log",
      desc: "Create, store, and link to guides and walkthroughs for video games.",
      role: "Designed RESTful API with full CRUD functionality, and implemented voice search functionality using a React hook.",
      tech: ["mongodb", "express", "react", "node", "tailwind"],
      appUrl: "https://sar-console-log.herokuapp.com",
      repoUrl: "https://github.com/comatosino/Console-Log",
      imgsrc: consolelog,
    },
    {
      id: uuidv4(),
      name: "Pantrimonium",
      desc: "Manage food inventory, monitor expiration dates, and create a shopping list.",
      role: "Fulfilled project manager and GitHub repository master roles. Built server framework, devised client-side JavaScript CRUD functions, and added email component with Nodemailer.",
      tech: ["express", "mysql", "node", "handlebars", "bootstrap"],
      appUrl: "https://pantrimonium.herokuapp.com",
      repoUrl: "https://github.com/comatosino/Pantrimonium",
      imgsrc: pantrimonium,
    },
    {
      id: uuidv4(),
      name: "Vedomý",
      desc: "Record thoughts and daily health habits with space for self-reflection and health suggestions.",
      role: "Created logic to populate recipe card with Spoonacular API content and wrote algorithm to perform fetch methods once daily.",
      tech: ["html", "css", "js", "jquery", "materialize"],
      appUrl: "https://gushihiro.github.io/Vedomy",
      repoUrl: "https://github.com/Gushihiro/Vedomy",
      imgsrc: vedomy,
    },
    {
      id: uuidv4(),
      name: "Dad Jokes",
      desc: "Combine the hilarity of fatherly humor with the rugged gravitas of facial hair in one simple application!",
      role: "Sole Developer",
      tech: ["react", "typescript"],
      appUrl: "https://comatosino.github.io/weather-dashboard",
      repoUrl: "https://github.com/comatosino/weather-dashboard",
      // imgsrc: weatherDash,
    },

    // {
    //     id: uuidv4(),
    //     name: '',
    //     desc: '',
    //     role: '',
    //     tech: [],
    //     appUrl: '',
    //     repoUrl: '',
    //     imgsrc: '',
    // },
  ];

  return (
    <section className="container">
      <h1 className="page-header">Projects</h1>
      <div className="divider z-depth-1"></div>

      <div className="card-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            desc={project.desc}
            role={project.role}
            tech={project.tech}
            appUrl={project.appUrl}
            repoUrl={project.repoUrl}
            imgsrc={project.imgsrc}
          />
        ))}
      </div>
    </section>
  );
}
