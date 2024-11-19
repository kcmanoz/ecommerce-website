import React, { useContext } from "react";
import "../Styles/Cart.css";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeItem, updateQuantity, getTotalPrice } =
    useContext(CartContext);

  const discount = 0.15; // discount of 15%
  const subtotal = getTotalPrice();
  const discountAmount = subtotal * discount;
  const grandTotal = subtotal - discountAmount;

  return (
    <div className="cart-container">
      <div className="cart-items-section">
        <h2 className="cart-title">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is currently empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.img} alt={item.description} />
                </div>
                <div className="cart-item-details">
                  <h3 className="item-description">{item.description}</h3>
                  <p className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="cart-item-options">
                    <span className="item-size">Size: {item.size}</span>
                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Summary Section */}
      {cartItems.length > 0 && (
        <div className="cart-summary-section">
          <h2 className="summary-title">Cart Summary</h2>
          <div className="summary-details">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-discount">
              <span>Discount (15%)</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
            <div className="summary-item grand-total">
              <span>Grand Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
