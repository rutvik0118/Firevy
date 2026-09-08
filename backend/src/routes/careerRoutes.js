import express from 'express';
import {
  getCareerPageData,
  getCareerPageAdmin,
  updateCareerPage,
  resetCareerPage
} from '../controllers/careerController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route: returns active Career Page CMS data
router.get('/', getCareerPageData);

// Admin route: returns full Career Page CMS config
router.get('/admin', protectAdmin, getCareerPageAdmin);

// Admin route: update Career Page CMS config
router.put('/', protectAdmin, updateCareerPage);

// Admin route: reset Career Page CMS config
router.post('/reset', protectAdmin, resetCareerPage);

export default router;
