import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, X } from 'lucide-react';

const Cart = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice, isLoading } = useCart();

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-40 transition-all duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            <div 
                className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6 overflow-y-auto z-50 transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Votre panier</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-32">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                ) : cartItems.length === 0 ? (
                    <p className="text-gray-500">Votre panier est vide</p>
                ) : (
                    <>
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-gray-500">{item.price}€</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:bg-gray-100 rounded-full"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:bg-gray-100 rounded-full"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-1 hover:bg-gray-100 rounded-full text-red-500"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 border-t pt-4">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-medium">Total</span>
                                <span className="font-bold">{getTotalPrice().toFixed(2)}€</span>
                            </div>
                            <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors">
                                Commander
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart; 