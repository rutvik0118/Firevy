import express from 'express';
import {
  getHomePageData,
  getHomePageAdmin,
  getSectionByKey,
  updateSectionContent,
  toggleSectionStatus,
  reorderSections,
  resetHomeSections
} from '../controllers/homePageController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route: returns active home page data
router.get('/', getHomePageData);

// Admin route: returns full home page data including hidden sections
router.get('/admin', protectAdmin, getHomePageAdmin);

// Reordering routes (admin only)
router.patch('/reorder', protectAdmin, reorderSections);
router.put('/reorder', protectAdmin, reorderSections);

// Global reset route (admin only)
router.post('/reset', protectAdmin, resetHomeSections);

// Single section reset routes (admin only)
router.post('/reset/:key', protectAdmin, resetHomeSections);
router.post('/section/:key/reset', protectAdmin, resetHomeSections);
router.post('/sections/:key/reset', protectAdmin, resetHomeSections);

// Single section read route (public / admin)
router.get('/section/:key', getSectionByKey);
router.get('/sections/:key', getSectionByKey);

// Single section update route (admin only)
router.put('/section/:key', protectAdmin, updateSectionContent);
router.put('/sections/:key', protectAdmin, updateSectionContent);

// Single section toggle route (admin only)
router.patch('/section/:key/toggle', protectAdmin, toggleSectionStatus);
router.patch('/sections/:key/toggle', protectAdmin, toggleSectionStatus);

export default router;
