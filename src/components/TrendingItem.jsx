import React from "react";
import { Link } from "react-router-dom";
import "../Styles/TrendingSlider.css";
import { Items } from "./Data";

function TrendingItem() {
  // Filter out items with odd IDs
  const filteredItems = Items.filter((item) => item.id % 2 !== 0);

  // Scroll to the top function
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link to={`/product/${item.id}`} onClick={handleClick}>
            <div className="item-header">
              <img src={item.img} alt="product" />
            </div>
            <div className="item-description">
              <p>{item.description}</p>
              <p className="item-price">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
