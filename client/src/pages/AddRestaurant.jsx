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
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) errors.name = "Le nom est obligatoire et ne contient pas que des espaces.";
        if (!formData.address.trim()) errors.address = "L'adresse est obligatoire et ne contient pas que des espaces.";
        if (!formData.cuisine.trim()) errors.cuisine = "Le type de cuisine est obligatoire et ne contient pas que des espaces.";
        if (!formData.rating || (formData.rating < 0 || formData.rating > 5)) {
            errors.rating = "La note doit être entre 0 et 5.";
        }
        const phoneRegex = /^\+\d+$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            errors.phone = "Le numéro de téléphone doit commencer par '+' suivi uniquement de chiffres.";
        }
        if (formData.website && !formData.website.startsWith("https://")) {
            errors.website = "L'URL du site web doit commencer par 'https://'.";
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!validateForm()) return;

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
                <div>
                    <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} className="border p-2 rounded w-full" />
                    {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                </div>

                <div>
                    <input type="text" name="address" placeholder="Adresse" value={formData.address} onChange={handleChange} className="border p-2 rounded w-full" />
                    {formErrors.address && <p className="text-red-500 text-sm">{formErrors.address}</p>}
                </div>

                <div>
                    <input type="text" name="cuisine" placeholder="Type de cuisine" value={formData.cuisine} onChange={handleChange} className="border p-2 rounded w-full" />
                    {formErrors.cuisine && <p className="text-red-500 text-sm">{formErrors.cuisine}</p>}
                </div>

                <div>
                    <input type="number" name="rating" placeholder="Note (0-5)" value={formData.rating} onChange={handleChange} className="border p-2 rounded w-full" />
                    {formErrors.rating && <p className="text-red-500 text-sm">{formErrors.rating}</p>}
                </div>

                <div>
                    <input type="text" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} className="border p-2 rounded w-full" />
                    {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
                </div>

                <div>
                    <input type="url" name="website" placeholder="Site web" value={formData.website} onChange={handleChange} className="border p-2 rounded w-full" />
                    {formErrors.website && <p className="text-red-500 text-sm">{formErrors.website}</p>}
                </div>

                <input type="url" name="image" placeholder="URL de l'image" value={formData.image} onChange={handleChange} className="border p-2 rounded w-full" />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Ajouter</button>
            </form>
        </div>
    );
};

export default AddRestaurant;