import "./OverlayMenu.css";
import M from "materialize-css";

import React, { useEffect } from "react";

const OverlayMenu = ({ menuActive, toggleActive }) => {
  useEffect(() => {
    const introPage = document.getElementById("intro");
    const portfolio = document.getElementById("portfolio");
    const pages = M.Carousel.init(portfolio, {
      fullWidth: true,
    });

    const handleClick =
      (idx) =>
      ({ target: { dataset } }) => {
        const targetPage = document.getElementById(dataset.page);
        targetPage.scrollTo({ top: 0, behavior: "smooth" });
        introPage.classList.add("hide-intro");
        portfolio.classList.add("show-carousel");
        pages.set(idx);
      };

    const handleMainClick = () => {
      introPage.classList.add("hide-intro");
      portfolio.classList.add("show-carousel");
      pages.set(0);
    };

    const mainBtn = document.getElementById("portfolio-btn");
    mainBtn.addEventListener("click", handleMainClick);

    const navBtns = document.querySelectorAll(".my-nav-btn");
    navBtns.forEach((btn, idx) =>
      btn.addEventListener("click", handleClick(idx))
    );

    return () => {
      pages.destroy();
      navBtns.forEach((btn, idx) =>
        btn.removeEventListener("click", handleClick(idx))
      );
      mainBtn.removeEventListener("click", handleMainClick);
    };
  }, []);

  return (
    <div
      id="overlay-menu"
      className={menuActive ? "overlay overlay-active" : "overlay"}
    >
      <button
        data-page="projects"
        className="btn-flat my-nav-btn"
        onClick={toggleActive}
      >
        Projects
      </button>
      <button
        data-page="about"
        className="btn-flat my-nav-btn"
        onClick={toggleActive}
      >
        About
      </button>
      <button
        data-page="contact"
        className="btn-flat my-nav-btn"
        onClick={toggleActive}
      >
        Contact
      </button>
    </div>
  );
};

export default OverlayMenu;
