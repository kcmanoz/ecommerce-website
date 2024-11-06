import React from "react";
import { useParams } from "react-router-dom";
import { Items } from "./Data";
import "../Styles/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = Items.find((item) => item.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

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
          <div className="product-actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
