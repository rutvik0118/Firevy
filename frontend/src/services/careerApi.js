import apiClient from './api';

export const careerApi = {
  getCareerPage: () => apiClient.get('/careers'),
  getCareerPageAdmin: () => apiClient.get('/careers/admin'),
  updateCareerPage: (data) => apiClient.put('/careers', data),
  resetCareerPage: () => apiClient.post('/careers/reset')
};

export default careerApi;
