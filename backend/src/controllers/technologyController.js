import Technology from '../models/Technology.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse } from '../utils/apiResponse.js';
import { initialTechnologies } from '../utils/initialData.js';

export const getTechnologies = asyncHandler(async (req, res) => {
  let technologies = await Technology.find({ isActive: true }).sort({ category: 1, name: 1 });

  if (!technologies || technologies.length === 0) {
    technologies = initialTechnologies;
  }

  return successResponse(res, 'Technologies fetched successfully', technologies);
});
