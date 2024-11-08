import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavbarStyle.css";

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
            <Link to="/mens">Men's Clothing</Link>
          </li>
          <li className="navbar-item">
            <Link to="/womens">Women's Clothing</Link>
          </li>

          <li className="navbar-item">
            <Link to="/shoes">Shoes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
