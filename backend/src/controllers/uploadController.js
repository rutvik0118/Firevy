import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { fileURLToPath } from 'url';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { removeMediaUrlFromHomeData } from './homePageController.js';

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

/**
 * @desc Delete uploaded file from storage and database
 * @route DELETE /api/v1/upload or DELETE /api/v1/upload/:filename
 */
export const handleDeleteFile = asyncHandler(async (req, res) => {
  const fileUrl = req.body?.fileUrl || req.body?.url || req.query?.fileUrl || req.query?.url || req.params?.filename;

  if (!fileUrl) {
    return errorResponse(res, 'File URL or filename is required for deletion', 400);
  }

  // Sanitize path to prevent directory traversal
  let relativePath = fileUrl;
  if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
    try {
      const parsedUrl = new URL(relativePath);
      relativePath = parsedUrl.pathname;
    } catch {
      // keep relativePath as is
    }
  }

  // Strip leading '/uploads/' or 'uploads/'
  let cleanedPath = relativePath.replace(/^[\/\\]?uploads[\/\\]?/, '');
  // Prevent directory traversal
  cleanedPath = path.normalize(cleanedPath).replace(/^(\.\.[\/\\])+/, '');

  let fileDeletedFromDisk = false;

  // Check direct path or in subfolders
  const potentialPaths = [
    path.join(uploadsDir, cleanedPath),
    path.join(uploadsDir, 'images', path.basename(cleanedPath)),
    path.join(uploadsDir, 'videos', path.basename(cleanedPath)),
    path.join(uploadsDir, 'brochures', path.basename(cleanedPath)),
    path.join(uploadsDir, 'misc', path.basename(cleanedPath))
  ];

  for (const candidate of potentialPaths) {
    if (candidate.startsWith(uploadsDir) && fs.existsSync(candidate) && fs.lstatSync(candidate).isFile()) {
      try {
        fs.unlinkSync(candidate);
        fileDeletedFromDisk = true;
        break;
      } catch (err) {
        console.error('Error unlinking file:', candidate, err);
      }
    }
  }

  // Clean up references across Home Page database & memory cache
  await removeMediaUrlFromHomeData(fileUrl);

  return successResponse(res, 'Media asset deleted successfully.', {
    fileUrl,
    deleted: true,
    fileDeletedFromDisk
  });
});
