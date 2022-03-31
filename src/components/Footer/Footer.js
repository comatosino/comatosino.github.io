import React from "react";

import "./Footer.css";

export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="page-footer black my-footer z-depth-5">
      <div id="copyright" className="container">
        © {thisYear} Robert Adams
      </div>
    </footer>
  );
}
