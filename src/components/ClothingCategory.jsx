import React from "react";
import "../Styles/ClothingCategory.css";
import { Link } from "react-router-dom";
const ClothingCategory = ({ items, category }) => {
  const filteredItems = items.filter((item) => item.category === category);

  return (
    <div className="clothing-category">
      <h2>{category === "men" ? "Men's Clothing" : "Women's Clothing"}</h2>
      <div className="clothing-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="clothing-item">
            <Link to={`/product/${item.id}`}>
              <img src={item.img} alt={item.description} />
              <div className="item-details">
                <h3>{item.description}</h3>
                <p className="item-specs">{item.specs}</p>
                <p className="item-price">Price: ${item.price}</p>
                <p className="item-sizes">Available Sizes: {item.size}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingCategory;
