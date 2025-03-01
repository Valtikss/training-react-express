import apiClient from './api';

export const getPlats = () => apiClient.get("/plats");

export const getPlatById = (id) => apiClient.get(`/plats/${id}`);