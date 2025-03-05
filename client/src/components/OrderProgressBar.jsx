import React from 'react';

const OrderProgressBar = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Panier' },
    { id: 2, label: 'Confirmation' },
    { id: 3, label: 'Paiement' },
    { id: 4, label: 'Terminé' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 my-8">
      <div className="relative">
        <div className="w-full h-1 bg-gray-200">
          <div 
            className="h-full bg-green-600 transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
        <div className="flex justify-between relative -mt-4">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center relative z-10`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-colors duration-200
                ${currentStep >= step.id 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-600'}`}
              >
                {step.id}
              </div>
              <span className={`text-sm font-medium transition-colors duration-200
                ${currentStep >= step.id ? 'text-green-600' : 'text-gray-500'}`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderProgressBar;
