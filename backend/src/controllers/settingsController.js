import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse } from '../utils/apiResponse.js';

export const getSettings = asyncHandler(async (req, res) => {
  const settings = {
    companyName: 'Firevy.co',
    tagline: 'Engineering Digital Experiences That Create Impact',
    contactEmail: 'contact@firevy.co',
    supportPhone: '+1 (800) 592-7410',
    address: '500 Howard Street, Suite 400, San Francisco, CA 94105',
    activeFeatures: {
      careersPortal: true,
      caseStudies: true,
      clientInquiries: true
    }
  };

  return successResponse(res, 'Settings fetched successfully', settings);
});
