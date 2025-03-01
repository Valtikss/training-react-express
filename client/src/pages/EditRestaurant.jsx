import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRestaurantById, updateRestaurant } from '../services/restaurantsService';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loading.json";

const EditRestaurant = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [image, setImage] = useState('');
    
    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await getRestaurantById(id);
                const restaurant = response.data;
                setName(restaurant.name);
                setAddress(restaurant.address);
                setCuisine(restaurant.cuisine);
                setPhone(restaurant.phone);
                setWebsite(restaurant.website);
                setImage(restaurant.image);
            } catch (error) {
                setError('Failed to load restaurant data');
                console.error('Error fetching restaurant:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurant();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !address || !cuisine || !phone || !website || !image) {
            setError('All fields are required');
            return;
        }

        const updatedRestaurant = {
            name,
            address,
            cuisine,
            phone,
            website,
            image,
        };

        try {
            await updateRestaurant(id, updatedRestaurant);
            setShowSuccess(true);
            setError(null);
            // Wait for 2 seconds to show the success message before redirecting
            setTimeout(() => {
                navigate(`/restaurants/${id}`);
            }, 2000);
        } catch(e) {
            if (e.status === 400 && e.data && e.data.error) {
                setError(e.data.error);
            } else {
                setError('An error occurred while updating the restaurant');
            }
            setShowSuccess(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Lottie 
                    animationData={loadingAnimation}
                    loop={true}
                    style={{ width: 200, height: 200 }}
                />
            </div>
        );
    }
    
    return (
        <div className="bg-gray-100 flex justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Modifier le restaurant</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                {showSuccess && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                        Restaurant mis à jour avec succès! Redirection...
                    </div>
                )}

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="name">Nom</label>
                    <input 
                        id="name" 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="address">Adresse</label>
                    <input 
                        id="address" 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="cuisine">Cuisine</label>
                    <input 
                        id="cuisine" 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={cuisine} 
                        onChange={(e) => setCuisine(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="phone">Téléphone</label>
                    <input 
                        id="phone" 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="website">Site web</label>
                    <input 
                        id="website" 
                        type="url" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={website} 
                        onChange={(e) => setWebsite(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 font-semibold" htmlFor="image">URL de l'image</label>
                    <input 
                        id="image" 
                        type="url" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        required 
                    />
                </div>

                <div className="flex gap-4">
                    <button 
                        type="submit" 
                        className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
                    >
                        Sauvegarder
                    </button>
                    <button 
                        type="button" 
                        onClick={() => navigate(`/restaurants/${id}`)}
                        className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors"
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditRestaurant; 