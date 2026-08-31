import express from 'express';
import { createJobApplication } from '../controllers/applicationController.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const applicationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many job applications from this IP, please try again later.' }
});

router.post('/', applicationLimiter, createJobApplication);

export default router;
