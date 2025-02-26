import axios from 'axios';

// Crée une instance axios avec des configurations par défaut
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
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