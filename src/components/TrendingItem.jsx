import React from "react";
import { Link } from "react-router-dom";
import "../Styles/TrendingSlider.css";
import { Items } from "../Data";

const TrendingItem = () => {
  // Filter out items with odd IDs
  const filteredItems = Items.filter((item) => item.id % 2 !== 0);

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link to={`/product/${item.id}`}>
            <div className="item-header">
              <img src={item.img} alt="product" />
            </div>
            <div className="description">
              <p>{item.description}</p>
              <p className="price">${item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TrendingItem;
