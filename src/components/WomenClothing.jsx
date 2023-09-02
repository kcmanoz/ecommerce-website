import React from "react";
import "../Styles/MenWomenClothing.css";

const MenClothing = ({ items }) => {
  // Filter items from the "men" category
  const menItems = items.filter((item) => item.category === "women");

  return (
    <div className="men-category">
      <h2>Women's Clothing</h2>
      <div className="men-items">
        {menItems.map((item) => (
          <div key={item.id} className="men-item">
            <img src={item.img} alt={item.description} />
            <div className="item-details">
              <h3>{item.description}</h3>
              <p>{item.specs}</p>
              <p>Price: ${item.price}</p>
              <p>Available Sizes: {item.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenClothing;
