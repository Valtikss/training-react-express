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
    } else {
        console.error('Message:', error.message);
        alert('Something went wrong! Try again.');
    }
};

export default apiClient;