import Job from '../models/Job.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { initialJobs } from '../utils/initialData.js';

/**
 * @desc Get public active & published jobs
 * @route GET /api/v1/jobs
 * @access Public
 */
export const getJobs = asyncHandler(async (req, res) => {
  let jobs = await Job.find({ isActive: true, status: 'published' }).sort({ order: 1, createdAt: -1 });

  if (!jobs || jobs.length === 0) {
    // If database is empty, seed initial jobs
    try {
      const jobsCount = await Job.countDocuments();
      if (jobsCount === 0) {
        const jobsToInsert = initialJobs.map(({ _id, ...rest }) => rest);
        jobs = await Job.insertMany(jobsToInsert);
      } else {
        jobs = initialJobs.filter(j => j.isActive && j.status === 'published');
      }
    } catch (err) {
      console.warn('[Jobs Fetch Fallback]', err.message);
      jobs = initialJobs.filter(j => j.isActive && j.status === 'published');
    }
  }

  return successResponse(res, 'Jobs fetched successfully', jobs);
});

/**
 * @desc Get all jobs for Admin Panel (including drafts and inactive)
 * @route GET /api/v1/jobs/admin
 * @access Private/Admin
 */
export const getAdminJobs = asyncHandler(async (req, res) => {
  let jobs = await Job.find().sort({ order: 1, createdAt: -1 });

  if (!jobs || jobs.length === 0) {
    try {
      const jobsToInsert = initialJobs.map(({ _id, ...rest }) => rest);
      jobs = await Job.insertMany(jobsToInsert);
    } catch (err) {
      console.warn('[Jobs Admin Fallback]', err.message);
      jobs = initialJobs;
    }
  }

  return successResponse(res, 'Admin jobs fetched successfully', jobs);
});

/**
 * @desc Get single job by ID or slug
 * @route GET /api/v1/jobs/:id
 * @access Public
 */
export const getJobById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let job = null;
  
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    job = await Job.findById(id);
  }
  
  if (!job) {
    job = await Job.findOne({ slug: id });
  }

  if (!job) {
    job = initialJobs.find(j => j._id === id || j.slug === id);
  }

  if (!job) {
    return errorResponse(res, `Job not found with id/slug: ${id}`, null, 404);
  }

  return successResponse(res, 'Job details fetched successfully', job);
});

/**
 * @desc Create new Job opening
 * @route POST /api/v1/jobs
 * @access Private/Admin
 */
export const createJob = asyncHandler(async (req, res) => {
  const {
    title,
    slug,
    department,
    location,
    type,
    experience,
    openings,
    urgent,
    order,
    status,
    description,
    requirements,
    responsibilities,
    isActive
  } = req.body;

  if (!title) {
    return errorResponse(res, 'Job position title is required', null, 400);
  }

  const generatedSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const newJob = await Job.create({
    title,
    slug: generatedSlug,
    department: department || 'Engineering',
    location: location || 'Remote',
    type: type || 'Full-time',
    experience: experience || '1 - 3 Years',
    openings: openings || 1,
    urgent: !!urgent,
    order: order || 0,
    status: status || 'published',
    description: description || 'Exciting career opportunity at firevy.co.',
    requirements: requirements || [],
    responsibilities: responsibilities || [],
    isActive: isActive !== undefined ? isActive : true
  });

  return successResponse(res, 'Job created successfully', newJob, 201);
});

/**
 * @desc Update existing Job
 * @route PUT /api/v1/jobs/:id
 * @access Private/Admin
 */
export const updateJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let job = await Job.findById(id);

  if (!job) {
    // If not found by ObjectId, try searching slug
    job = await Job.findOne({ slug: id });
  }

  if (!job) {
    return errorResponse(res, `Job not found with id: ${id}`, null, 404);
  }

  const updateFields = [
    'title',
    'slug',
    'department',
    'location',
    'type',
    'experience',
    'openings',
    'urgent',
    'order',
    'status',
    'description',
    'requirements',
    'responsibilities',
    'isActive'
  ];

  updateFields.forEach(field => {
    if (req.body[field] !== undefined) {
      job[field] = req.body[field];
    }
  });

  await job.save();

  return successResponse(res, 'Job updated successfully', job);
});

/**
 * @desc Delete a Job
 * @route DELETE /api/v1/jobs/:id
 * @access Private/Admin
 */
export const deleteJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let job = await Job.findById(id);
  if (!job) {
    job = await Job.findOne({ slug: id });
  }

  if (!job) {
    return errorResponse(res, `Job not found with id: ${id}`, null, 404);
  }

  await job.deleteOne();

  return successResponse(res, 'Job deleted successfully', { id });
});

/**
 * @desc Toggle Job active status
 * @route PATCH /api/v1/jobs/:id/toggle
 * @access Private/Admin
 */
export const toggleJobStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let job = await Job.findById(id);
  if (!job) {
    job = await Job.findOne({ slug: id });
  }

  if (!job) {
    return errorResponse(res, `Job not found with id: ${id}`, null, 404);
  }

  job.isActive = !job.isActive;
  await job.save();

  return successResponse(res, `Job status updated to ${job.isActive ? 'Active' : 'Inactive'}`, job);
});

/**
 * @desc Reorder multiple jobs
 * @route PATCH /api/v1/jobs/reorder
 * @access Private/Admin
 */
export const reorderJobs = asyncHandler(async (req, res) => {
  const { jobsOrder } = req.body; // Array of { id, order }

  if (!Array.isArray(jobsOrder)) {
    return errorResponse(res, 'jobsOrder must be an array of { id, order }', null, 400);
  }

  const updatePromises = jobsOrder.map(item =>
    Job.findByIdAndUpdate(item.id, { order: item.order })
  );

  await Promise.all(updatePromises);

  const updatedJobs = await Job.find().sort({ order: 1, createdAt: -1 });

  return successResponse(res, 'Jobs reordered successfully', updatedJobs);
});
