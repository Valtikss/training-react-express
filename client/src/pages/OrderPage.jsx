import React, { useState } from 'react';
import OrderProgressBar from '../components/OrderProgressBar';

const OrderPage = () => {
    const totalSteps = 4;
    const [currentStep, setCurrentStep] = useState(1);

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

    return (
        <div className="max-w-lg mx-auto p-5">
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
    );
};

export default OrderPage;
