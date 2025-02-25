import apiClient from './api';

export const fetchRestaurants = async () => {
    try {
        const response = await apiClient.get('/restaurants');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des restaurants :", error);
        throw error;
    }
};

export const fetchRestaurantById = async (id) => {
    try {
        const response = await apiClient.get(`/restaurants/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération du restaurant :", error);
        throw error;
    }
};