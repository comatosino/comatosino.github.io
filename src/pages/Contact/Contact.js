import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faFilePdf,
  faEnvelope,
  faClipboard,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFileDownload,
  faExternalLinkAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Resume from "./files/robert_adams_resume.pdf";

import React from "react";

const Contact = () => {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText("adamsiii.robert@gmail.com");
      const checkmark = document.getElementById("checkmark");
      const toastMsg = document.getElementById("toast");

      checkmark.classList.add("show");
      toastMsg.classList.add("show");

      setTimeout(() => {
        checkmark.classList.remove("show");
        toastMsg.classList.remove("show");
      }, 2500);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="portfolio-container container">
      <h1 className="page-header">Contact</h1>

      <div className="divider z-depth-1"></div>

      <p className="left-align">
        Contact me for professional opportunities or project collaboration!
      </p>
      <p className="left-align">I look forward to hearing from you!</p>
      <div>
        <table className="highlight">
          <tbody>
            <tr>
              <td className="flow-text">
                <a href="mailto:adamsiii.robert@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </td>
              <td className="flow-text">
                <div className="pos-rel-container">
                  <a href="mailto:adamsiii.robert@gmail.com">
                    adamsiii.robert@gmail.com
                  </a>
                  <span id="toast">E-mail copied to clipboard!</span>
                </div>
              </td>

              <td id="clipboard" className="flow-text" onClick={copyText}>
                <FontAwesomeIcon icon={faClipboard} />
              </td>
              <td id="checkmark">
                <FontAwesomeIcon icon={faCheck} />
              </td>
            </tr>
            <tr>
              <td className="flow-text">
                <a href={Resume} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFilePdf} />
                </a>
              </td>
              <td className="flow-text">
                <a href={Resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </td>
              <td className="flow-text">
                <a href={Resume} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFileDownload} />
                </a>
              </td>
            </tr>
            <tr>
              <td className="flow-text">
                <a
                  href="https://www.linkedin.com/in/robert-adams-comatosino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </td>
              <td className="flow-text">
                <a
                  href="https://www.linkedin.com/in/robert-adams-comatosino"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </td>
              <td className="flow-text">
                <a
                  href="https://www.linkedin.com/in/robert-adams-comatosino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </td>
            </tr>
            <tr>
              <td className="flow-text">
                <a
                  href="https://github.com/comatosino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </td>
              <td className="flow-text">
                <a
                  href="https://github.com/comatosino"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </td>
              <td className="flow-text">
                <a
                  href="https://github.com/comatosino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Contact;
