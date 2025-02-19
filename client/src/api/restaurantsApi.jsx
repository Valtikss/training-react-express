import apiClient from './api';

export const getAllRestaurants = () => apiClient.get("/restaurants");