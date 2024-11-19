import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Your go-to online fashion store. Find the latest trends, quality
            items at unbeatable prices.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mens">Men's Fashion</Link>
            </li>
            <li>
              <Link to="/womens">Women's Fashion</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: support@essencewear.com</p>
          <p>Phone: +358 </p>
          <p>Location: Tampere, Finland</p>
          <div className="social-icons">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 EssenceWear. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
