import Service from '../models/Service.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { initialServices } from '../utils/initialData.js';

export const getServices = asyncHandler(async (req, res) => {
  let services = await Service.find({ isActive: true }).sort({ createdAt: 1 });
  
  // Fallback to initial seed data if DB is empty or disconnected
  if (!services || services.length === 0) {
    services = initialServices;
  }
  
  return successResponse(res, 'Services fetched successfully', services);
});

export const getServiceBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  let service = await Service.findOne({ slug: slug.toLowerCase(), isActive: true });
  
  if (!service) {
    service = initialServices.find(s => s.slug === slug.toLowerCase());
  }
  
  if (!service) {
    return errorResponse(res, `Service not found with slug: ${slug}`, null, 404);
  }
  
  return successResponse(res, 'Service details fetched successfully', service);
});
