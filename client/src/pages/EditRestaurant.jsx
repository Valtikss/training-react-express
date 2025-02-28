import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRestaurantById, editRestaurant } from '../services/restaurantsService';

const EditRestaurant = () => {
    const { id } = useParams();
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

    useEffect(() => {
        const fetchRestaurant = async () => {
            const data = await getRestaurantById(id);
            if (data) {
                setFormData(data);
            } else {
                setError("Restaurant introuvable.");
            }
        };
        fetchRestaurant();
    }, [id]);

    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) errors.name = "Le nom est obligatoire et ne contient pas que des espaces.";
        if (!formData.address.trim()) errors.address = "L'adresse est obligatoire et ne contient pas que des espaces.";
        if (!formData.cuisine.trim()) errors.cuisine = "Le type de cuisine est obligatoire et ne contient pas que des espaces.";
        if (!formData.rating || (formData.rating < 0 || formData.rating > 5)) {
            errors.rating = "La note doit être entre 0 et 5.";
        }
        const phoneRegex = /^\+\d[\d\s]*$/;
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
        
        if (!validateForm()) return;

        try {
            await editRestaurant(id, formData);
            navigate(`/restaurants/${id}`);
        } catch {
            setError("Échec de la mise à jour.");
        }
    };

    if (error) return <p className="text-center text-red-500">{error}</p>;

    if (!formData) return <p className="text-center">Chargement...</p>;

    return (
        <div className="p-5 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Modifier un Restaurant</h2>

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

                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Sauvegarder</button>
            </form>
        </div>
    );
};

export default EditRestaurant;
