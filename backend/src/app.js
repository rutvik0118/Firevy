import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config/env.js';
import errorHandler from './middleware/errorHandler.js';

// Route imports
import serviceRoutes from './routes/serviceRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import industryRoutes from './routes/industryRoutes.js';
import technologyRoutes from './routes/technologyRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';

const app = express();

// Security and Logging Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({
  origin: [config.clientUrl, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(morgan(config.nodeEnv === 'development' ? 'dev' : 'combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root API Health Check
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'OK',
    app: 'Firevy.co Backend API',
    version: '1.0.0',
    timestamp: new Date()
  });
});

// API v1 Mounting
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/portfolio', portfolioRoutes);
app.use('/api/v1/industries', industryRoutes);
app.use('/api/v1/technologies', technologyRoutes);
app.use('/api/v1/testimonials', testimonialRoutes);
app.use('/api/v1/jobs', jobRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/applications', applicationRoutes);
app.use('/api/v1/settings', settingsRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API Route Not Found - ${req.originalUrl}`
  });
});

// Central Error Handler
app.use(errorHandler);

export default app;
