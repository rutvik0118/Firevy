import apiClient from './api';

export const homePageApi = {
  getHomePage: () => apiClient.get('/home-page'),
  getHomePageSections: () => apiClient.get('/home-page')
};

export default homePageApi;
