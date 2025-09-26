import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (food) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === food.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === food.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...prevCart, { ...food, qty: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
