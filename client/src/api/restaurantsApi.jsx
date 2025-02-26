import apiClient from './api';

export const getRestaurants = () => apiClient.get("/restaurants");

export const getRestaurantById = (id) => apiClient.get(`/restaurants/${id}`);