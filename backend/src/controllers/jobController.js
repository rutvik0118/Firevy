import Job from '../models/Job.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { initialJobs } from '../utils/initialData.js';

export const getJobs = asyncHandler(async (req, res) => {
  let jobs = await Job.find({ isActive: true }).sort({ createdAt: -1 });

  if (!jobs || jobs.length === 0) {
    jobs = initialJobs;
  }

  return successResponse(res, 'Jobs fetched successfully', jobs);
});

export const getJobById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let job = null;
  
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    job = await Job.findById(id);
  }
  
  if (!job) {
    job = initialJobs.find(j => j._id === id || j.slug === id);
  }

  if (!job) {
    return errorResponse(res, `Job not found with id/slug: ${id}`, null, 404);
  }

  return successResponse(res, 'Job details fetched successfully', job);
});
