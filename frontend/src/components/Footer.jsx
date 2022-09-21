import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <header className="footer">
      <ul>
        <li>
          <Link to="/glossary">Glossary</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
      </ul>
    </header>
  );
}

export default Footer;
