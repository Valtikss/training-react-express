import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPlat } from '../services/platsService';

const CreatePlat = () => {
    const navigate = useNavigate();
    const { restaurantId } = useParams();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !price || !description || !image) {
            setError('All fields are required');
            return;
        }

        const newPlat = {
            restaurant_id: parseInt(restaurantId),
            name,
            price: parseFloat(price),
            description,
            image
        };

        try {
            await createPlat(newPlat);
            navigate(`/restaurants/${restaurantId}`);
        } catch(e) {
            if (e.status === 400 && e.data && e.data.error) {
                setError(e.data.error);
            } else {
                setError('An error occurred while creating the dish');
            }
        }
    };
    
    return (
        <div className="bg-gray-100 flex justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full">
                <h2 className="text-2xl font-bold mb-4">Créer un nouveau plat</h2>

                {error && (
                    <p className="text-red-500 mb-4">{error}</p>
                )}

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="name">Nom</label>
                    <input id="name" type="text" className="w-full p-2 border border-gray-300 rounded" value={name} onChange={(e) => setName(e.target.value)} placeholder="Pâtes carbonara" required/>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="price">Prix</label>
                    <div className="flex items-center">
                        <input id="price" type="number" step="0.01" min="0" className="w-full p-2 border border-gray-300 rounded" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="10" required />
                        <span className="ml-2">€</span>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-semibold" htmlFor="description">Description</label>
                    <textarea id="description" className="w-full p-2 border border-gray-300 rounded" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Un plat simple et rapide" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-semibold" htmlFor="image">URL de l'image</label>
                    <input id="image" type="url" className="w-full p-2 border border-gray-300 rounded" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://images.plat.com/photos/" required />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors cursor-pointer">Créer</button>
            </form>
        </div>
    );
};

export default CreatePlat;