import React from "react";
import { Link } from "react-router-dom";
import trend from "../Images/Header/trending.jpg";
import shoes from "../Images/Header/footwear.jpg";
import men from "../Images/Header/men-clothing.jpg";
import women from "../Images/Header/women-clothing.jpg";
import "../Styles/Home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="/trending">
                <div id="img1" className="img-overlay"></div>
                <img src={trend} alt="trending cloths" />
                <p className="main-description">Trending Fashion</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="/shoes">
                <div id="img2" className="img-overlay"></div>
                <img src={shoes} alt="shoes" />
                <p className="main-description">Shoes</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="/mens">
                <div id="img3" className="img-overlay"></div>
                <img src={men} alt="men category" />
                <p className="main-description">Men's Clothing</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="/womens">
                <div id="img4" className="img-overlay"></div>
                <img src={women} alt="women category" />
                <p className="main-description">Women's Clothing</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
