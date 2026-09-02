import jwt from 'jsonwebtoken';
import config from '../config/env.js';

export const protectAdmin = (req, res, next) => {
  let token = null;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Authentication token missing or malformed'
    });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);

    // Verify admin / superadmin role
    if (!['admin', 'superadmin'].includes(decoded.role)) {
      return res.status(403).json({
        success: false,
        message: 'Access forbidden: Admin privilege required'
      });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired authentication token'
    });
  }
};

export default protectAdmin;
