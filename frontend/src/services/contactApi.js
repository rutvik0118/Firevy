import apiClient from './api';

export const contactApi = {
  submitInquiry: (data) => apiClient.post('/contact', data)
};

export default contactApi;
