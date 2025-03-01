import apiClient from './api';

export const getRestaurants = () => apiClient.get("/restaurants");

export const getRestaurantById = (id) => apiClient.get(`/restaurants/${id}`);

export const createRestaurant = (restaurant) => apiClient.post("/restaurants", restaurant);

export const updateRestaurant = (id, restaurant) => apiClient.put(`/restaurants/${id}`, restaurant);

export const deleteRestaurant = (id) => apiClient.delete(`/restaurants/${id}`);
