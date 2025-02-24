import apiClient from './api';

export const getAllRestaurants = () => apiClient.get("/restaurants");

export const getRestaurantById = (id) => apiClient.get(`/restaurants/${id}`);

export const createRestaurant = (restaurant) => apiClient.post("/restaurants", restaurant);