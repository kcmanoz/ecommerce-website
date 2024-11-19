import React from "react";
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/mens">Men's Fashion</a>
            </li>
            <li>
              <a href="/womens">Women's Fashion</a>
            </li>
            <li>
              <a href="/shoes">Shoes</a>
            </li>
            <li>
              <a href="/trending">Trending</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: support@essencewear.com</p>
          <p>Phone: +358 </p>
          <p>Location: Tampere, Finland</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
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
