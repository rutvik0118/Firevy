import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 5000,

  nodeEnv: process.env.NODE_ENV || 'development',

  mongoUri: process.env.MONGO_URI,

  jwtSecret: process.env.JWT_SECRET,

  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',

  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',

  smtp: {
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',

    port: parseInt(process.env.SMTP_PORT || '587', 10),

    user: process.env.SMTP_USER || '',

    pass: process.env.SMTP_PASSWORD || '',

    fromEmail: process.env.SMTP_FROM_EMAIL || 'info@firevy.co',

    fromName: process.env.SMTP_FROM_NAME || 'Firevy.co'
  }
};

export default config;