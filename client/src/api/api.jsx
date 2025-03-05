import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        apiError(error);
        return Promise.reject(error);
    }
);

const apiError = (error) => {
    if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        console.error('Headers:', error.response.headers);
        console.error('Config:', error.config);
    } else if (error.request) {
        console.error('Request was made but no response received:', error.request);
    } else {
        console.error('Error setting up request:', error.message);
    }
    console.error('Full error:', error);
};

export default apiClient;