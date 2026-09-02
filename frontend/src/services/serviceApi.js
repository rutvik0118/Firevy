import apiClient from './api';

export const serviceApi = {
  getAllServices: () => apiClient.get('/services'),
  getServiceBySlug: (slug) => apiClient.get(`/services/${slug}`)
};

export default serviceApi;
