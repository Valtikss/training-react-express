import React, { useState, useContext } from 'react';
import OrderProgressBar from '../components/OrderProgressBar';
import { CartContext } from "../context/CartContext";
import { addOrder } from "../services/ordersService";

const OrderPage = () => {
    const { cart, setCart } = useContext(CartContext);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const handleNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleOrder = async () => {
        if (cart.length === 0) {
            alert("Votre panier est vide !");
            return;
        }

        const orderData = {
            items: cart.map(item => ({
                dishId: item.id,
                quantity: item.quantity,
            })),
            date: new Date().toISOString(),
        };

        const response = await addOrder(orderData);

        if (response) {
            setCart([]); // Vide le panier après validation
            setCurrentStep(4); // Va à l’étape "Terminé"
            alert("Commande validée !");
        } else {
            alert("Erreur lors de la validation de la commande.");
        }
    };

    return (
        <div>
            <div className="p-5 mb-5">
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

                <button
                    onClick={handleOrder}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
                >
                    Valider la commande
                </button>
            </div>


            <div className="max-w-3xl mx-auto p-6">
                <h2 className="text-2xl font-bold mb-3">Progression de la commande</h2>

                <OrderProgressBar currentStep={currentStep} totalSteps={totalSteps} />

                <div className="flex justify-between mt-11">
                    <button
                        onClick={handlePrevStep}
                        disabled={currentStep === 1}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                    >
                        Précédent
                    </button>
                    <button
                        onClick={handleNextStep}
                        disabled={currentStep === totalSteps}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        Suivant
                    </button>
                </div>

                <p className="text-center mt-3 text-gray-700">
                    Étape {currentStep} sur {totalSteps}
                </p>
            </div>
        </div>
    );
};

export default OrderPage;
