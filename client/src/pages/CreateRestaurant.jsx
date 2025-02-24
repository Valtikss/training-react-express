import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// SERVICES
import { createRestaurant } from '../services/restaurantsService';

const CreateRestaurant = () => {
    const navigate = useNavigate();
  
    // States pour chaque champ du formulaire
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [image, setImage] = useState('');

    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construire l’objet restaurant
        const newRestaurant = {
            name,
            address,
            cuisine,
            phone,
            website,
            image
        };

        try {
            await createRestaurant(newRestaurant);
            navigate('/'); // Rediriger vers la page d’accueil
        } catch (err) {
            console.error('Erreur lors de la création du restaurant :', err);
            setError('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-6 rounded shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-4">Créer un nouveau restaurant</h2>

                {error && (
                    <p className="text-red-500 mb-4">{error}</p>
                )}

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="name">
                        Nom
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Horizon Mediterranean"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="address">
                        Adresse
                    </label>
                    <input
                        id="address"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="88 Blue Bay Road, Santorini, Grèce"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="cuisine">
                        Cuisine
                    </label>
                    <input
                        id="cuisine"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                        placeholder="Méditerranéenne"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="phone">
                        Téléphone
                    </label>
                    <input
                        id="phone"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+30 21 9876 5432"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 font-semibold" htmlFor="website">
                        Site web
                    </label>
                    <input
                        id="website"
                        type="url"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://horizonmediterranean.gr"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 font-semibold" htmlFor="image">
                        URL de l'image
                    </label>
                    <input
                        id="image"
                        type="url"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="https://images.pexels.com/photos/...etc."
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer"
                >
                    Créer
                </button>
            </form>
        </div>
    );
};

export default CreateRestaurant;