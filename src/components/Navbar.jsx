import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="EssenceWearLogo" className="navbar-logo" />
          <h3 className="brand-name">EssenceWear</h3>
        </Link>
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
          <li className="navbar-item">
            <Link to="/cart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              {cartQuantity > 0 && (
                <span className="cart-quantity">{cartQuantity}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
