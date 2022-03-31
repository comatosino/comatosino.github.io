import React from "react";

import "./HamburgerMenu.css";

export default function HamburgerMenu(props) {
  return (
    <div
      className={
        props.menuActive ? "hamburger-menu menu-active" : "hamburger-menu"
      }
      onClick={() => props.toggleActive()}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}
