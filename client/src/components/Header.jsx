import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-yellow-400 border-b-4 border-black p-5 flex justify-between items-center 
                           shadow-[8px_8px_0px_#000] z-50">
            {/* Titre animé */}
            <h1 className="text-4xl font-extrabold text-white drop-shadow-[4px_4px_0px_#000] animate-wiggle">
                🍢 KEBABZ
            </h1>

            {/* Navigation */}
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <a href="/" 
                           className="bg-red-500 text-white px-4 py-2 rounded-xl border-4 border-black 
                                      shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] 
                                      hover:shadow-[2px_2px_0px_#000] transition-all duration-200">
                            🏠 Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" 
                           className="bg-blue-500 text-white px-4 py-2 rounded-xl border-4 border-black 
                                      shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] 
                                      hover:shadow-[2px_2px_0px_#000] transition-all duration-200">
                            ℹ️ About
                        </a>
                    </li>
                    <li>
                        <a href="/restaurants" 
                           className="bg-green-500 text-white px-4 py-2 rounded-xl border-4 border-black 
                                      shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] 
                                      hover:shadow-[2px_2px_0px_#000] transition-all duration-200">
                            🌍 Kebabiers
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

