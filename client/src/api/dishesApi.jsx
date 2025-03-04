import apiClient from './api';

export const fetchDishesByRestaurant = async (id) => {
    try {
        const response = await apiClient.get(`/restaurants/${id}/dishes`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des plats :", error);
        throw error;
    }
};

export const createDish = async (restaurantId, dishData) => {
    try {
        const response = await apiClient.post(`/restaurants/${restaurantId}/dishes`, dishData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout du plat :", error);
        throw error;
    }
};