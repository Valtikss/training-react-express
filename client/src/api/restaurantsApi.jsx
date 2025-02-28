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

export const createRestaurant = async (restaurantData) => {
    try {
        const response = await apiClient.post('/restaurants', restaurantData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout du restaurant :", error);
        throw error;
    }
};

export const updateRestaurant = async (id, restaurantData) => {
    try {
        const response = await apiClient.put(`/restaurants/${id}`, restaurantData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la mise à jour du restaurant :", error);
        throw error;
    }
};

export const deleteRestaurant = async (id) => {
    try {
        const response = await apiClient.delete(`/restaurants/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la suppression du restaurant :", error);
        throw error;
    }
};
