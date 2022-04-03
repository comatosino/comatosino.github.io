import "./Projects.css";
import projectData from "./projectData";

import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

console.log(projectData);

const Projects = () => {
  return (
    <section className="container">
      <h1 className="page-header">Projects</h1>
      <div className="divider z-depth-1"></div>
      <div className="card-container">
        {projectData.map((project, idx) => (
          <ProjectCard
            key={project.name}
            id={idx}
            name={project.name}
            desc={project.desc}
            role={project.role}
            tech={project.tech}
            appURL={project.appURL}
            repoURL={project.repoURL}
            imgsrc={project.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
