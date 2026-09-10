const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const companyPublicService = {
  getSection: async (slug, isPreview = false) => {
    try {
      const res = await fetch(`${API_BASE}/company/sections/${slug}${isPreview ? '?preview=true' : ''}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  },

  getTeam: async () => {
    try {
      const res = await fetch(`${API_BASE}/company/team`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  },

  getEvents: async () => {
    try {
      const res = await fetch(`${API_BASE}/company/events`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  },

  getBrochures: async () => {
    try {
      const res = await fetch(`${API_BASE}/company/brochures`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  },

  getAwards: async () => {
    try {
      const res = await fetch(`${API_BASE}/company/awards`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  },

  getVideos: async () => {
    try {
      const res = await fetch(`${API_BASE}/company/videos`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  },

  getBlogs: async (params = {}) => {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${API_BASE}/company/blogs${query ? `?${query}` : ''}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  },

  getPodcasts: async () => {
    try {
      const res = await fetch(`${API_BASE}/company/podcasts`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  },

  getVideoTestimonials: async () => {
    try {
      const res = await fetch(`${API_BASE}/company/video-testimonials`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  },

  getClutchReviews: async () => {
    try {
      const res = await fetch(`${API_BASE}/company/clutch-reviews`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.data;
    } catch {
      return null;
    }
  }
};

export default companyPublicService;
