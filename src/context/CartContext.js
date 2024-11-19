import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                toast.info(`Updated quantity for ${item.description}.`, { theme: "colored" });
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
                );
            } else {
                toast.success(`${item.description} added to cart!`, { theme: "colored" });
                return [...prevItems, { ...item, quantity }];
            }
        });
    };

    const removeItem = (id) => {
        const item = cartItems.find((cartItem) => cartItem.id === id);
        if (item) {
            toast.error(`${item.description} removed from cart.`, { theme: "colored" });
        }
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
            )
        );
    };

    function getTotalPrice() {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, updateQuantity, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
