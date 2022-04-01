import "./HamburgerMenu.css";

import React from "react";

const HamburgerMenu = ({ menuActive, toggleActive }) => {
  return (
    <div
      className={menuActive ? "hamburger-menu menu-active" : "hamburger-menu"}
      onClick={() => toggleActive()}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default HamburgerMenu;
