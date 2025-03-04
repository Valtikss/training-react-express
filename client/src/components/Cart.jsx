import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="p-5 border rounded shadow-lg">
            <h3 className="text-xl font-bold mb-3">🛒 Mon Panier</h3>

            {cart.length === 0 ? (
                <p className="text-gray-500">Votre panier est vide.</p>
            ) : (
                <ul className="space-y-2">
                    {cart.map(item => (
                        <li key={item.id} className="border p-3 rounded shadow">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.price} €</p>
                            <p>Quantité : {item.quantity}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white p-2 rounded mt-2"
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
