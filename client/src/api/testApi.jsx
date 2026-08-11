import apiClient from './api';

export const getTest = () => apiClient.get("/test");