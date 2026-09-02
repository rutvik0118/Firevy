import apiClient from './api';

export const adminService = {
  // System Health
  getHealth: async () => {
    return apiClient.get('/health');
  },

  // Services API
  getServices: async () => {
    return apiClient.get('/services');
  },
  getServiceBySlug: async (slug) => {
    return apiClient.get(`/services/${slug}`);
  },

  // Portfolio API
  getPortfolio: async (params = {}) => {
    return apiClient.get('/portfolio', { params });
  },
  getPortfolioBySlug: async (slug) => {
    return apiClient.get(`/portfolio/${slug}`);
  },

  // Careers / Jobs API
  getJobs: async () => {
    return apiClient.get('/jobs');
  },
  getJobById: async (id) => {
    return apiClient.get(`/jobs/${id}`);
  },
  submitApplication: async (data) => {
    return apiClient.post('/applications', data);
  },

  // Contact Inquiries API
  submitContactInquiry: async (data) => {
    return apiClient.post('/contact', data);
  },

  // Industries & Sectors API
  getIndustries: async () => {
    return apiClient.get('/industries');
  },

  // Technologies API
  getTechnologies: async () => {
    return apiClient.get('/technologies');
  },

  // Testimonials API
  getTestimonials: async () => {
    return apiClient.get('/testimonials');
  },

  // Settings API
  getSettings: async () => {
    return apiClient.get('/settings');
  },

  // Custom Raw Request Tester (for API Playground)
  executeRawRequest: async ({ method, endpoint, data = null, headers = {} }) => {
    const startTime = performance.now();
    try {
      const response = await apiClient({
        method,
        url: endpoint,
        data: ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) ? data : undefined,
        headers,
      });
      const endTime = performance.now();
      return {
        success: true,
        status: 200,
        statusText: 'OK',
        durationMs: Math.round(endTime - startTime),
        data: response,
      };
    } catch (err) {
      const endTime = performance.now();
      return {
        success: false,
        status: err.status || 500,
        statusText: err.message || 'Request Failed',
        durationMs: Math.round(endTime - startTime),
        error: err.data || err.message,
      };
    }
  }
};

export default adminService;
