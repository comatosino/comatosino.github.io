import "./ProjectModal.css";
import M from "materialize-css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const ProjectModal = (props) => {
  useEffect(() => {
    const modals = document.querySelectorAll(".modal");
    M.Modal.init(modals, {
      opacity: 0.8,
    });
  }, []);

  // use createPortal to render modals centered in doc body not parent
  return ReactDOM.createPortal(
    <div id={props.id} className="modal modal-close">
      <img
        className="responsive-img"
        src="https://placekitten.com/g/1920/1080"
        alt=""
      />
      <div className="modal-content">
        <div className="modal-title">
          <span>{props.name}</span>

          <div className="links">
            <a href={props.appUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href={props.repoUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        <p className="">a description</p>

        <div className="divider"></div>

        <h6>role</h6>
        <p>what i did</p>

        <div className="divider"></div>

        <h6>tech</h6>
        <div>
          <p>what i used</p>
        </div>
      </div>
    </div>,
    document.getElementById("modals")
  );
};

export default ProjectModal;
