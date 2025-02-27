import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRestaurant } from '../services/restaurantsService';

const CreateRestaurant = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [image, setImage] = useState('');
    
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !address || !cuisine || !phone || !website || !image) {
            setError('All fields are required');
            return;
        }

        const newRestaurant = {
            name,
            address,
            cuisine,
            phone,
            website,
            image,
        };

        try {
            await createRestaurant(newRestaurant);
            navigate('/home');
        } catch(e) {
            if (e.status === 400 && e.data && e.data.error) {
                setError(e.data.error);
            } else {
                setError('An error occurred while creating the restaurant');
            }
        }
    };
    
    return (
        <div className="bg-gray-100 flex justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full">
                <h2 className="text-2xl font-bold mb-4">Créer un nouveau restaurant</h2>

                {error && (
                    <p className="text-red-500 mb-4">{error}</p>
                )}

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="name">Nom</label>
                    <input id="name" type="text" className="w-full p-2 border border-gray-300 rounded" value={name} onChange={(e) => setName(e.target.value)} placeholder="Au petit coin" required/>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="address">Adresse</label>
                    <input id="address" type="text" className="w-full p-2 border border-gray-300 rounded" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="XX Rue de la ville, Ville" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="cuisine">Cuisine</label>
                    <input id="cuisine" type="text" className="w-full p-2 border border-gray-300 rounded" value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder="Gastronomie" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="phone">Téléphone</label>
                    <input id="phone" type="text" className="w-full p-2 border border-gray-300 rounded" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="02 00 00 00 00" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-semibold" htmlFor="website">Site web</label>
                    <input id="website" type="url" className="w-full p-2 border border-gray-300 rounded" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://www.restaurant.com" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-semibold" htmlFor="image">URL de l'image</label>
                    <input id="image" type="url" className="w-full p-2 border border-gray-300 rounded" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://images.restaurant.com/photos/" required />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors cursor-pointer">Créer</button>
            </form>
        </div>
    );
};

export default CreateRestaurant;