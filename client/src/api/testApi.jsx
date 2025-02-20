import apiClient from './api.jsx'; // METTRE LE PUTAIN DE .JSX SINON TU PASSES 2H À CHERCHER POURQUOI ÇA MARCHE PAS
export const getTest = () => apiClient.get("/test");