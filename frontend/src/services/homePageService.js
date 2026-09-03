import apiClient from './api';
import { initialHomePageData, initialSectionsOrder } from '../constants/initialHomePageData';

export const homePageService = {
  getHomePageData: async () => {
    try {
      const response = await apiClient.get('/home-page');
      if (response && response.data) {
        return {
          sectionsOrder: response.data.sectionsOrder || initialSectionsOrder,
          sections: response.data.sections || initialHomePageData.sections,
          sectionsList: response.data.sectionsList || []
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
