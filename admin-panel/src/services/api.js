import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 8000,
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorDetails = {
      message: error.response?.data?.message || error.message || 'Network connection to backend failed',
      status: error.response?.status || 0,
      data: error.response?.data || null,
      isNetworkError: !error.response,
    };
    return Promise.reject(errorDetails);
  }
);

export default apiClient;
