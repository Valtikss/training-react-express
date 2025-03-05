import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'uber_eats_cart';

const getCartFromStorage = () => {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error('Error reading cart from localStorage:', error);
        return [];
    }
};

const saveCartToStorage = (cart) => {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
    }
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => getCartFromStorage());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        saveCartToStorage(cartItems);
    }, [cartItems]);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: Math.max(0, quantity) }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem(CART_STORAGE_KEY);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const isItemInCart = (itemId) => {
        return cartItems.some(item => item.id === itemId);
    };

    const getItemQuantity = (itemId) => {
        const item = cartItems.find(item => item.id === itemId);
        return item ? item.quantity : 0;
    };

    const debugCart = () => {
        console.log('Current cart state:', cartItems);
        console.log('LocalStorage state:', localStorage.getItem(CART_STORAGE_KEY));
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            isLoading,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getTotalItems,
            getTotalPrice,
            isItemInCart,
            getItemQuantity,
            debugCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}; 