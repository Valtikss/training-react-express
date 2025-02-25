import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

// Crée une instance axios avec des configurations par défaut
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        handleApiError(error);
        return Promise.reject(error);
    }
);

const handleApiError = (error) => {
    if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
    } else {
        console.error('Error Message:', error.message);
        alert('Une erreur s\'est produite. Veuillez réessayer.');
    }
};

export default apiClient;