import React, { useState } from 'react';
import { addDish } from '../services/dishesService';

const AddDishForm = ({ restaurantId, onDishAdded }) => {
    const [formData, setFormData] = useState({ name: '', price: '', description: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addDish(restaurantId, formData);
        if (result) {
            onDishAdded(); // Rafraîchir la liste des plats
            setFormData({ name: '', price: '', description: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-2 border rounded">
            <h3 className="text-lg font-bold mb-2">Ajouter un plat</h3>
            <input type="text" name="name" placeholder="Nom du plat" value={formData.name} onChange={handleChange} className="border p-2 w-full mb-2" required />
            <input type="number" name="price" placeholder="Prix (€)" value={formData.price} onChange={handleChange} className="border p-2 w-full mb-2" required />
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-2 w-full mb-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Ajouter</button>
        </form>
    );
};

export default AddDishForm;
