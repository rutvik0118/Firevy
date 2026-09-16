import express from 'express';
import {
  getHeroSlides,
  getAllHeroSlides,
  getHeroSlideById,
  createHeroSlide,
  updateHeroSlide,
  deleteHeroSlide,
  toggleHeroSlideStatus,
  resetHeroSlides
} from '../controllers/heroController.js';

const router = express.Router();

// Public routes
router.get('/', getHeroSlides);
router.get('/all', getAllHeroSlides);
router.get('/:id', getHeroSlideById);

// Admin / Management routes
router.post('/', createHeroSlide);
router.put('/:id', updateHeroSlide);
router.delete('/:id', deleteHeroSlide);
router.patch('/:id/toggle', toggleHeroSlideStatus);
router.post('/reset', resetHeroSlides);

export default router;
