import express from 'express';
import { createContactInquiry } from '../controllers/contactController.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 submissions per 15 mins
  message: { success: false, message: 'Too many contact submissions from this IP, please try again later.' }
});

router.post('/', contactLimiter, createContactInquiry);

export default router;
