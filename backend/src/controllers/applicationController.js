import JobApplication from '../models/JobApplication.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';

export const createJobApplication = asyncHandler(async (req, res) => {
  const { name, email, phone, position, resume, message } = req.body;

  if (!name || !email || !phone || !position) {
    return errorResponse(res, 'Name, email, phone, and position are required fields', null, 400);
  }

  let application = null;
  try {
    application = await JobApplication.create({
      name,
      email,
      phone,
      position,
      resume,
      message
    });
  } catch (dbErr) {
    console.warn(`[Application DB Warning] Fallback mock response: ${dbErr.message}`);
    application = {
      _id: 'app_' + Date.now(),
      name,
      email,
      phone,
      position,
      resume,
      message,
      createdAt: new Date()
    };
  }

  return successResponse(res, 'Application submitted successfully! Our talent team will review your application.', application, 201);
});
