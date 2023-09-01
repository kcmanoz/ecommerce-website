import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h3 className="navbar-brand">Fashion House</h3>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
