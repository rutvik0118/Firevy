import apiClient from './api';
import { initialHomePageData, initialSectionsOrder } from '../constants/initialHomePageData';

export const homePageService = {
  getHomePageData: async () => {
    try {
      const response = await apiClient.get('/home-page');
      const payload = (response && response.data && (response.data.sections || response.data.sectionsOrder))
        ? response.data
        : (response && (response.sections || response.sectionsOrder))
        ? response
        : (response?.data || response);

      if (payload && (payload.sections || payload.sectionsOrder)) {
        return {
          sectionsOrder: payload.sectionsOrder || initialSectionsOrder,
          sections: payload.sections || initialHomePageData.sections,
          sectionsList: payload.sectionsList || []
        };
      }
      return initialHomePageData;
    } catch (error) {
      console.warn('Backend/MongoDB unavailable for Home Page, using local fallback:', error?.message);
      return initialHomePageData;
    }
  }
};

export default homePageService;
