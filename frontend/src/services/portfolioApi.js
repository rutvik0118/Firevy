import apiClient from './api';

export const portfolioApi = {
  getPortfolio: (params = {}) => apiClient.get('/portfolio', { params }),
  getPortfolioBySlug: (slug) => apiClient.get(`/portfolio/${slug}`)
};

export default portfolioApi;
