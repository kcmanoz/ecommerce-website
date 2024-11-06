import React from "react";
import { Link } from "react-router-dom";
import "../Styles/TrendingSlider.css";
import { Items } from "./Data";

function TrendingItem() {
  const filteredItems = Items.filter((item) => item.id % 2 !== 0);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link to={`/product/${item.id}`}>
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
