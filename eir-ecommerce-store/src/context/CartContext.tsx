import React, { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage('cart', []);
    
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === id ? { ...item, quantity } : item
            );
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        // Optional: Any side effects when cart changes
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};