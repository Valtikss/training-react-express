import { fetchRestaurants } from '../api/restaurantsApi';

export const getRestaurants = async () => {
    try {
        const response = await fetchRestaurants();
        return response;
    } catch (error) {
        console.error('Erreur lors de la récupération des restaurants:', error);
        throw new Error('Erreur lors de la récupération des restaurants');
    }
};