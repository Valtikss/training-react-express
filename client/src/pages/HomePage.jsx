import { useEffect, useState } from 'react';

// SERVICES
import { getTest } from '../services/testService';

const HomePage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await getTest();
                setMessage(response.data.status);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchMessage();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-primary" >
            <h1 className="text-4xl font-bold mb-4" >Accueil</h1>
            <p className="text-lg bg-white shadow-md p-4 rounded-lg">API Response : <span className="text-red-500">{message}</span></p>
        </div>
    );
};

export default HomePage;