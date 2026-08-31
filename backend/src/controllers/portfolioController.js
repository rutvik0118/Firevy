import Portfolio from '../models/Portfolio.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { initialPortfolio } from '../utils/initialData.js';

export const getPortfolio = asyncHandler(async (req, res) => {
  const { category, industry, featured } = req.query;
  const filter = { isActive: true };

  if (category && category !== 'All') {
    filter.category = category;
  }
  if (industry) {
    filter.industry = industry;
  }
  if (featured === 'true') {
    filter.isFeatured = true;
  }

  let projects = await Portfolio.find(filter).sort({ isFeatured: -1, createdAt: -1 });

  if (!projects || projects.length === 0) {
    projects = initialPortfolio.filter(p => {
      if (category && category !== 'All' && p.category !== category) return false;
      if (industry && p.industry !== industry) return false;
      if (featured === 'true' && !p.isFeatured) return false;
      return true;
    });
  }

  return successResponse(res, 'Portfolio items fetched successfully', projects);
});

export const getPortfolioBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  let project = await Portfolio.findOne({ slug: slug.toLowerCase(), isActive: true });

  if (!project) {
    project = initialPortfolio.find(p => p.slug === slug.toLowerCase());
  }

  if (!project) {
    return errorResponse(res, `Portfolio project not found with slug: ${slug}`, null, 404);
  }

  return successResponse(res, 'Case study details fetched successfully', project);
});
