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