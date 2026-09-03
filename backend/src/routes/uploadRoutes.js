import express from 'express';
import { uploadMiddleware, handleFileUpload } from '../controllers/uploadController.js';

const router = express.Router();

router.post('/', (req, res, next) => {
  uploadMiddleware(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || 'File upload failed'
      });
    }
    next();
  });
}, handleFileUpload);

export default router;
