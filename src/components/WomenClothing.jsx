import React from "react";
import "../Styles/MenWomenClothing.css";

const MenClothing = ({ items }) => {
  const menItems = items.filter((item) => item.category === "women");

  return (
    <div className="men-category">
      <h2>Men's Clothing</h2>
      <div className="men-items">
        {menItems.map((item) => (
          <div key={item.id} className="men-item">
            <img src={item.img} alt={item.description} />
            <div className="item-details">
              <h3>{item.description}</h3>
              <p className="item-specs">{item.specs}</p>
              <p className="item-price">Price: ${item.price}</p>
              <p className="item-sizes">Available Sizes: {item.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenClothing;
