import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Items } from "./Data";
import { CartContext } from "../context/CartContext";
import "../Styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = Items.find((item) => item.id === parseInt(id));

  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>; // Early return for invalid product
  }

  // Handlers
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const increaseQuantity = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  return (
    <div className="product-detail">
      <div className="product-content">
        <div className="product-image">
          <img src={product.img} alt={product.description} />
        </div>
        <div className="product-info">
          <h1>{product.description}</h1>
          <p className="product-specs">{product.specs}</p>
          <p className="product-sizes">Available Sizes: {product.size}</p>
          <p className="product-price">{product.price}$</p>

          <div className="quantity-control">
            <button onClick={decreaseQuantity}>-</button>
            <span className="quantity"> {quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
