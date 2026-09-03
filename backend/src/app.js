import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
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
import adminRoutes from './routes/adminRoutes.js';
import homePageRoutes from './routes/homePageRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security and Logging Middleware
app.use(helmet({ contentSecurityPolicy: false }));

// Permissive CORS Configuration for local frontend ports (5173, 5174, 5175, etc.)
const allowedOrigins = [
  config.clientUrl,
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
  'http://127.0.0.1:5175'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser tools, curl, or mobile
    if (!origin) return callback(null, true);

    if (
      allowedOrigins.includes(origin) ||
      /^http:\/\/localhost:\d+$/.test(origin) ||
      /^http:\/\/127\.0\.0\.1:\d+$/.test(origin) ||
      /^http:\/\/192\.168\.\d+\.\d+:\d+$/.test(origin)
    ) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));

// Handle preflight requests for all routes
app.options('*', cors());

app.use(morgan(config.nodeEnv === 'development' ? 'dev' : 'combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

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
app.use('/api/v1/home-page', homePageRoutes);
app.use('/api/v1/upload', uploadRoutes);
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/portfolio', portfolioRoutes);
app.use('/api/v1/industries', industryRoutes);
app.use('/api/v1/technologies', technologyRoutes);
app.use('/api/v1/testimonials', testimonialRoutes);
app.use('/api/v1/jobs', jobRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/applications', applicationRoutes);
app.use('/api/v1/settings', settingsRoutes);
app.use('/api/v1/admin', adminRoutes);

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
