import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Ecommerce</div>
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
  );
}

export default Navbar;
