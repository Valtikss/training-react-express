import myImage from '../assets/image.png';
import { useEffect, useState } from 'react';
import { getTest } from '../services/testService';

const HomePage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await getTest();
                setMessage(response.data.status);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchMessage();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center animated-bg text-white p-6">
            {/* Logo */}
            <img 
                src={myImage} 
                alt="Logo Kebabz" 
                className="rounded-full h-40 w-40 shadow-lg border-4 border-yellow-500"
            />

            {/* Titre */}
            <h1 className="text-4xl font-extrabold text-white mt-6">
                Bienvenue sur <span className="text-yellow-300">Kebabz</span>
            </h1>

            {/* Date */}
            <p className="text-white mt-2">On est le {new Date().toLocaleDateString()}</p>

            {/* Message de l'API */}
            <div className="bg-black shadow-lg p-4 rounded-lg text-center mt-4">
                <p className="text-lg font-medium">API Response :</p>
                <span className="text-red-500 font-semibold">{message}</span>
            </div>

            {/* Bouton d'Action */}
            <a 
                href="/restaurants" 
                className="mt-6 px-6 py-3 bg-red-500 text-white font-bold text-lg rounded-lg border-4 border-black 
                           shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] 
                           hover:shadow-[2px_2px_0px_#000] transition-all duration-200"
            >
                🍢 Trouver les meilleurs kebabs !
            </a>
        </div>
    );
};

export default HomePage;
