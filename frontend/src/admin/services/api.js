import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';
const SESSION_KEY = 'firevy_admin_active_session';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Automatically inject JWT Bearer token on requests
apiClient.interceptors.request.use(
  (config) => {
    try {
      const session = localStorage.getItem(SESSION_KEY);
      if (session) {
        const parsed = JSON.parse(session);
        if (parsed?.token) {
          config.headers.Authorization = `Bearer ${parsed.token}`;
        }
      }
    } catch {
      // Ignore JSON parse error
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
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
