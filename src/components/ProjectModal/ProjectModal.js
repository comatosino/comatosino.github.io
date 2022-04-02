import "./ProjectModal.css";
import M from "materialize-css";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const ProjectModal = (props) => {
  useEffect(() => {
    const modals = document.querySelectorAll(".modal");
    M.Modal.init(modals, {
      opacity: 1,
      endingTop: "15vh",
    });
  }, []);

  // use createPortal to render modals centered in doc body not parent
  return ReactDOM.createPortal(
    <div id={props.id} className="modal modal-close">
      <img className="responsive-img" src={props.imgsrc} alt="" />
      <div className="modal-content">
        <h4>{props.name}</h4>
        <p className="">{props.desc}</p>
        <div className="divider"></div>
        <h6>Role</h6>
        <p>{props.role}</p>
        <div className="divider"></div>
        <h6>Tech</h6>
        <p>{props.tech}</p>
        <div className="divider"></div>
      </div>
    </div>,
    document.getElementById("modals")
  );
};

export default ProjectModal;
