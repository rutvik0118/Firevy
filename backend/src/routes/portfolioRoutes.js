import express from 'express';
import { getPortfolio, getPortfolioBySlug } from '../controllers/portfolioController.js';

const router = express.Router();

router.get('/', getPortfolio);
router.get('/:slug', getPortfolioBySlug);

export default router;
