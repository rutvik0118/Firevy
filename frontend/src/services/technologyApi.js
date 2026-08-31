import apiClient from './api';

export const technologyApi = {
  getTechnologies: () => apiClient.get('/technologies')
};

export default technologyApi;
