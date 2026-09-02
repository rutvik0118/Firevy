import apiClient from './api';

export const industryApi = {
  getIndustries: () => apiClient.get('/industries')
};

export default industryApi;
