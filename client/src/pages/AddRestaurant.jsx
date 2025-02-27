import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRestaurant } from '../services/restaurantsService';

const AddRestaurant = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        cuisine: '',
        rating: '',
        phone: '',
        website: '',
        image: ''
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const newRestaurant = await addRestaurant(formData);
            if (newRestaurant) {
                navigate('/'); // Redirige vers la liste des restaurants
            } else {
                setError("Erreur lors de l'ajout du restaurant.");
            }
        } catch (err) {
            setError("Impossible d'ajouter le restaurant.");
        }
    };

    return (
        <div className="p-5 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ajouter un Restaurant</h2>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} className="border p-2 rounded w-full" required />
                <input type="text" name="address" placeholder="Adresse" value={formData.address} onChange={handleChange} className="border p-2 rounded w-full" required />
                <input type="text" name="cuisine" placeholder="Type de cuisine" value={formData.cuisine} onChange={handleChange} className="border p-2 rounded w-full" required />
                <input type="number" name="rating" placeholder="Note (1-5)" value={formData.rating} onChange={handleChange} className="border p-2 rounded w-full" />
                <input type="text" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} className="border p-2 rounded w-full" />
                <input type="url" name="website" placeholder="Site web" value={formData.website} onChange={handleChange} className="border p-2 rounded w-full" />
                <input type="url" name="image" placeholder="URL de l'image" value={formData.image} onChange={handleChange} className="border p-2 rounded w-full" />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Ajouter</button>
            </form>
        </div>
    );
};

export default AddRestaurant;