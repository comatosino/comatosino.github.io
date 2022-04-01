import "./Footer.css";

import React from "react";

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="page-footer my-footer z-depth-5">
      <div id="copyright" className="container">
        © {thisYear} Robert Adams
      </div>
    </footer>
  );
};

export default Footer;
