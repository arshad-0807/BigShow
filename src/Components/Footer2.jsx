import React from "react";
import { Link } from "react-router-dom";
import "./footer2.css";

const Footer2 = () => {
  return (
    <footer className="pb-5 h-100">
      <div className="footer2_container pt-4">
        <ul className="footer2_links list-unstyled d-flex justify-content-center align-items-center gap-5">
          <li>
            <Link to="">Help</Link>
          </li>
          <li>
            <Link to="">Conditions of Use</Link>
          </li>
          <li>
            <Link to="">Privacy Notice</Link>
          </li>
        </ul>
        <p className="copyright">© 2024 by BigShow.com, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer2;
