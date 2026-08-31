import apiClient from './api';

export const testimonialApi = {
  getTestimonials: () => apiClient.get('/testimonials')
};

export default testimonialApi;
