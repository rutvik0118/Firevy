import Industry from '../models/Industry.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse } from '../utils/apiResponse.js';
import { initialIndustries } from '../utils/initialData.js';

export const getIndustries = asyncHandler(async (req, res) => {
  let industries = await Industry.find({ isActive: true }).sort({ name: 1 });

  if (!industries || industries.length === 0) {
    industries = initialIndustries;
  }

  return successResponse(res, 'Industries fetched successfully', industries);
});
