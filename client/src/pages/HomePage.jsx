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
                console.error('Error fetching data:', error);
            }
        };
    
        fetchMessage();
    }, []);

    return (
        <div>
            <img src={myImage} alt="image" className="mx-auto d-block rounded-full h-40 w-40" />
            <h1 className="text-center">Bienvenue sur la page daccueil (jarriv pas à mettre dapostrophe sans lever dexception)</h1>
            <p className="text-center">On est le {new Date().toLocaleDateString()}</p>
            <p className="text-lg bg-white shadow-md p-4 rounded-lg text-center">API Response : <span className="text-red-500">{message}</span></p>
            <div style={{ height: '200px' }}></div>
        </div>
    );
};

export default HomePage;