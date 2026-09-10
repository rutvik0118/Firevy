import apiClient from './api';

export const companyService = {
  // ============================================================
  // COLLECTION CRUD ENDPOINTS
  // ============================================================
  getItems: async (collectionType, params = {}) => {
    return apiClient.get(`/company/${collectionType}/admin`, { params });
  },

  getPublicItems: async (collectionType, params = {}) => {
    return apiClient.get(`/company/${collectionType}`, { params });
  },

  getItemById: async (collectionType, id) => {
    return apiClient.get(`/company/${collectionType}/${id}`);
  },

  createItem: async (collectionType, data) => {
    return apiClient.post(`/company/${collectionType}`, data);
  },

  updateItem: async (collectionType, id, data) => {
    return apiClient.put(`/company/${collectionType}/${id}`, data);
  },

  deleteItem: async (collectionType, id) => {
    return apiClient.delete(`/company/${collectionType}/${id}`);
  },

  toggleItemStatus: async (collectionType, id) => {
    return apiClient.patch(`/company/${collectionType}/${id}/toggle`);
  },

  // ============================================================
  // SINGLETON SECTION CMS ENDPOINTS
  // ============================================================
  getSection: async (slug, isPreview = false) => {
    return apiClient.get(`/company/sections/${slug}${isPreview ? '?preview=true' : '?admin=true'}`);
  },

  updateSection: async (slug, data) => {
    return apiClient.put(`/company/sections/${slug}`, data);
  },

  saveDraftSection: async (slug, data) => {
    return apiClient.put(`/company/sections/${slug}/draft`, data);
  },

  publishSection: async (slug, data = null) => {
    return apiClient.post(`/company/sections/${slug}/publish`, data || {});
  },

  unpublishSection: async (slug) => {
    return apiClient.post(`/company/sections/${slug}/unpublish`);
  },

  resetSection: async (slug) => {
    return apiClient.post(`/company/sections/${slug}/reset`);
  },

  getAllSectionsSummary: async () => {
    return apiClient.get('/company/sections');
  }
};

export default companyService;
