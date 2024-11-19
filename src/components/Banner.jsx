import React from "react";
import "../Styles/Banner.css";

const Banner = () => {
  return (
    <div className="discount-banner">
      <div className="banner-content">
        <p className="banner-text">Enjoy a 15% Discount on All Products!</p>
        <a href="/trending" className="shop-button">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
