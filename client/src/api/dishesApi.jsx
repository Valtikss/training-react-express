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
