import apiClient from './api';

export const getRestaurants = async () => {
    const response = await apiClient.get("/restaurants");
    return response;
};