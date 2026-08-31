import ContactInquiry from '../models/ContactInquiry.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { sendContactNotification } from '../services/mailerService.js';

export const createContactInquiry = asyncHandler(async (req, res) => {
  const { name, email, phone, company, service, budget, message } = req.body;

  if (!name || !email || !message) {
    return errorResponse(res, 'Name, email, and message are required fields', null, 400);
  }

  let inquiry = null;
  try {
    inquiry = await ContactInquiry.create({
      name,
      email,
      phone,
      company,
      service,
      budget,
      message
    });
  } catch (dbErr) {
    console.warn(`[Contact DB Warning] Could not persist to MongoDB, fallback mock response: ${dbErr.message}`);
    inquiry = {
      _id: 'mock_' + Date.now(),
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
      createdAt: new Date()
    };
  }

  // Trigger email notification in background
  sendContactNotification({ name, email, phone, company, service, budget, message });

  return successResponse(res, 'Thank you! Your project inquiry has been received. Our solutions architect will contact you within 24 hours.', inquiry, 201);
});
