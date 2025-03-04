import React from 'react';

const OrderProgressBar = ({ currentStep, totalSteps }) => {
    const progressPercentage = (currentStep / totalSteps) * 100 ;

    return (
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
            ></div>
            <div className="flex justify-between text-sm mt-2">
                <span className={currentStep >= 1 ? "text-blue-500 font-bold" : "text-gray-500"}>Panier</span>
                <span className={currentStep >= 2 ? "text-blue-500 font-bold" : "text-gray-500"}>Confirmation</span>
                <span className={currentStep >= 3 ? "text-blue-500 font-bold" : "text-gray-500"}>Paiement</span>
                <span className={currentStep >= 4 ? "text-blue-500 font-bold" : "text-gray-500"}>Terminé</span>
            </div>
        </div>
    );
};

export default OrderProgressBar;