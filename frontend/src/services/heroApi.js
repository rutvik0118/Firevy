import apiClient from './api';

export const heroApi = {
  getActiveHeroSlides: () => apiClient.get('/hero')
};

export default heroApi;
