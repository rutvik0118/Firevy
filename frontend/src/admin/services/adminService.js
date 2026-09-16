import apiClient from './api';

export const adminService = {
  // System Health
  getHealth: async () => {
    return apiClient.get('/health');
  },

  // Admin Profile / Token Verification
  getProfile: async () => {
    return apiClient.get('/admin/me');
  },

  // ============================================================
  // HOME PAGE CMS MANAGEMENT APIS (All 22 Sections)
  // ============================================================
  getHomePageAdmin: async () => {
    try {
      return await apiClient.get('/home-page/admin');
    } catch {
      return await apiClient.get('/home-page');
    }
  },

  getHomePageSection: async (key) => {
    return apiClient.get(`/home-page/section/${key}`);
  },

  updateHomePageSection: async (key, sectionData) => {
    return apiClient.put(`/home-page/section/${key}`, sectionData);
  },

  toggleHomePageSection: async (key) => {
    return apiClient.patch(`/home-page/section/${key}/toggle`);
  },

  reorderHomePageSections: async (sectionsOrder) => {
    return apiClient.patch('/home-page/reorder', { sectionsOrder });
  },

  resetHomePageSection: async (key) => {
    return apiClient.post(`/home-page/reset/${key}`);
  },

  resetHomePage: async () => {
    return apiClient.post('/home-page/reset');
  },

  // ============================================================
  // FILE / MEDIA UPLOAD APIS
  // ============================================================
  uploadMedia: async (file, type = 'image') => {
    const formData = new FormData();
    formData.append('file', file);
    if (type) {
      formData.append('type', type);
    }
    return apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  uploadFile: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  deleteMedia: async (fileUrl) => {
    return apiClient.delete('/upload', {
      data: { fileUrl }
    });
  },

  // ============================================================
  // OTHER DOMAIN APIS
  // ============================================================
  getServices: async () => {
    return apiClient.get('/services');
  },
  getServiceBySlug: async (slug) => {
    return apiClient.get(`/services/${slug}`);
  },

  getPortfolio: async (params = {}) => {
    return apiClient.get('/portfolio', { params });
  },
  getPortfolioBySlug: async (slug) => {
    return apiClient.get(`/portfolio/${slug}`);
  },

  // ============================================================
  // CAREERS CMS & JOBS MANAGEMENT APIS
  // ============================================================
  getCareerPageAdmin: async () => {
    return apiClient.get('/careers/admin');
  },
  updateCareerPage: async (data) => {
    return apiClient.put('/careers', data);
  },
  resetCareerPage: async () => {
    return apiClient.post('/careers/reset');
  },

  getJobs: async () => {
    return apiClient.get('/jobs');
  },
  getAdminJobs: async () => {
    return apiClient.get('/jobs/admin/all');
  },
  getJobById: async (id) => {
    return apiClient.get(`/jobs/${id}`);
  },
  createJob: async (data) => {
    return apiClient.post('/jobs', data);
  },
  updateJob: async (id, data) => {
    return apiClient.put(`/jobs/${id}`, data);
  },
  deleteJob: async (id) => {
    return apiClient.delete(`/jobs/${id}`);
  },
  toggleJobStatus: async (id) => {
    return apiClient.patch(`/jobs/${id}/toggle`);
  },
  reorderJobs: async (jobsOrder) => {
    return apiClient.patch('/jobs/reorder', { jobsOrder });
  },
  submitApplication: async (data) => {
    return apiClient.post('/applications', data);
  },

  submitContactInquiry: async (data) => {
    return apiClient.post('/contact', data);
  },

  getIndustries: async () => {
    return apiClient.get('/industries');
  },

  getTechnologies: async () => {
    return apiClient.get('/technologies');
  },

  getTestimonials: async () => {
    return apiClient.get('/testimonials');
  },

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
