import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
            <NavLink to="/home" className='hover:text-green-300 transition-colors delay-100'>
                <h1 className="text-2xl font-medium">
                    Uber <strong className="font-bold">Eats</strong>
                </h1>
            </NavLink>            
            
            <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-full">
                <button className="px-3 py-1 font-medium text-black bg-white rounded-full shadow-sm hover:bg-gray-50">
                    Livraison
                </button>
                <button className="px-3 py-1 font-medium text-gray-500 rounded-full hover:bg-white hover:shadow-sm">
                    À emporter
                </button>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100">
                <p className="font-medium">10 Rue Méridienne</p>
                <span className="text-gray-500">•</span>
                <p className="text-gray-500">Maintenant</p>
            </div>

            <div className="flex-1 max-w-md">
                <div className="flex items-center px-4 py-2 bg-gray-50 rounded-full hover:bg-gray-100">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Rechercher dans Uber Eats"
                        className="w-full px-3 py-1 bg-transparent outline-none"
                    />
                </div>
            </div>

            <div className="order_cart">
                <button className="px-4 py-2 font-medium text-white bg-black rounded-full hover:bg-gray-800">
                    Panier • 0
                </button>
            </div>
        </header>
    );
}

export default Header;