import "./Projects.css";
import projects from "./projects.json";

import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="container">
      <h1 className="page-header">Projects</h1>
      <div className="divider z-depth-1"></div>
      <div className="card-container">
        {projects.map((project, idx) => (
          <ProjectCard key={project.name} id={idx} name={project.name} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
