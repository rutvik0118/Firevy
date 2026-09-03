import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { fileURLToPath } from 'url';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Root uploads folder in backend/uploads
const uploadsDir = path.join(__dirname, '../../uploads');

// Ensure upload folders exist
const ensureDirectories = () => {
  const dirs = [
    uploadsDir,
    path.join(uploadsDir, 'images'),
    path.join(uploadsDir, 'videos'),
    path.join(uploadsDir, 'brochures'),
    path.join(uploadsDir, 'misc')
  ];
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

ensureDirectories();

// Multer Disk Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureDirectories();
    let subfolder = 'misc';
    if (file.mimetype.startsWith('image/')) {
      subfolder = 'images';
    } else if (file.mimetype.startsWith('video/')) {
      subfolder = 'videos';
    } else if (file.mimetype === 'application/pdf') {
      subfolder = 'brochures';
    }
    cb(null, path.join(uploadsDir, subfolder));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const baseName = path
      .basename(file.originalname, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-');
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${baseName}-${uniqueSuffix}${ext}`);
  }
});

// File filter for allowed media types
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/svg+xml',
    'image/gif',
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'application/pdf'
  ];

  if (allowedMimeTypes.includes(file.mimetype) || file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error(`Unsupported file format: ${file.mimetype}`), false);
  }
};

export const uploadMiddleware = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024 // 100 MB max for videos/PDFs
  }
}).single('file');

/**
 * @desc Upload image, video, or PDF file
 * @route POST /api/v1/upload
 */
export const handleFileUpload = asyncHandler(async (req, res) => {
  if (!req.file) {
    return errorResponse(res, 'No file uploaded', 400);
  }

  // Determine relative URL
  let subfolder = 'misc';
  if (req.file.mimetype.startsWith('image/')) {
    subfolder = 'images';
  } else if (req.file.mimetype.startsWith('video/')) {
    subfolder = 'videos';
  } else if (req.file.mimetype === 'application/pdf') {
    subfolder = 'brochures';
  }

  const relativeUrl = `/uploads/${subfolder}/${req.file.filename}`;

  return successResponse(res, 'File uploaded successfully', {
    url: relativeUrl,
    filename: req.file.filename,
    originalName: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size
  }, 201);
});
