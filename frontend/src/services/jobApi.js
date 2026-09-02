import apiClient from './api';

export const jobApi = {
  getJobs: () => apiClient.get('/jobs'),
  getJobById: (id) => apiClient.get(`/jobs/${id}`),
  submitApplication: (data) => apiClient.post('/applications', data)
};

export default jobApi;
