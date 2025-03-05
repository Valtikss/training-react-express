import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderProgressBar from '../components/OrderProgressBar';
import { useCart } from '../context/CartContext';

const CommandePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReturnHome = () => {
    clearCart();
    navigate('/home');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Commande</h1>
      <OrderProgressBar currentStep={currentStep} />
      
      <div className="mt-12">
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Panier</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">{item.price}€ x {item.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-medium text-gray-800">Total</span>
                <span className="font-bold text-xl text-gray-900">{getTotalPrice().toFixed(2)}€</span>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={handleNextStep}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Continuer
              </button>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Confirmation</h2>
            <p className="text-gray-600 mb-6">Vérifiez vos informations...</p>
            <div className="flex justify-end gap-4">
              <button 
                onClick={handlePreviousStep}
                className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                Retour
              </button>
              <button 
                onClick={handleNextStep}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Continuer
              </button>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Paiement</h2>
            <p className="text-gray-600 mb-6">Informations de paiement...</p>
            <div className="flex justify-end gap-4">
              <button 
                onClick={handlePreviousStep}
                className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                Retour
              </button>
              <button 
                onClick={handleNextStep}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Valider le paiement
              </button>
            </div>
          </div>
        )}
        
        {currentStep === 4 && (
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Terminé</h2>
            <p className="text-gray-600 mb-6">Votre commande a été validée !</p>
            <div className="flex justify-end">
              <button 
                onClick={handleReturnHome}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommandePage; 