import express from 'express';
import {
  getJobs,
  getAdminJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  toggleJobStatus,
  reorderJobs
} from '../controllers/jobController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getJobs);
router.get('/published', getJobs);
router.get('/:id', getJobById);

// Admin protected routes
router.get('/admin/all', protectAdmin, getAdminJobs);
router.post('/', protectAdmin, createJob);
router.put('/:id', protectAdmin, updateJob);
router.delete('/:id', protectAdmin, deleteJob);
router.patch('/:id/toggle', protectAdmin, toggleJobStatus);
router.patch('/reorder', protectAdmin, reorderJobs);

export default router;
