import Testimonial from '../models/Testimonial.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse } from '../utils/apiResponse.js';
import { initialTestimonials } from '../utils/initialData.js';

export const getTestimonials = asyncHandler(async (req, res) => {
  let testimonials = await Testimonial.find({ isActive: true }).sort({ rating: -1, createdAt: -1 });

  if (!testimonials || testimonials.length === 0) {
    testimonials = initialTestimonials;
  }

  return successResponse(res, 'Testimonials fetched successfully', testimonials);
});
