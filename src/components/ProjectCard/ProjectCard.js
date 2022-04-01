import "./ProjectCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import ProjectModal from "../ProjectModal/ProjectModal";

const ProjectCard = (props) => {
  return (
    <>
      <div className="card my-card">
        <div className="card-image hoverable">
          <img
            className="modal-trigger"
            data-target={props.id}
            src="https://placekitten.com/g/1920/1080"
            alt=""
          />
        </div>

        <div className="card-stuff">
          <span className="card-title">{props.name}</span>
          <div className="card-icons card-title">
            <a href={props.appUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>

            <a href={props.repoUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>

      <ProjectModal key={props.id} id={props.id} name={props.nameyyy} />
    </>
  );
};

export default ProjectCard;
