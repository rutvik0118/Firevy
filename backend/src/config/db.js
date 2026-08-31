import mongoose from 'mongoose';
import config from './env.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 2000,
      connectTimeoutMS: 2000
    });
    console.log(`[MongoDB Connected] Host: ${conn.connection.host} | DB: ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.warn(`[MongoDB Notice] Local MongoDB instance not reachable at ${config.mongoUri}. Using in-memory fallback enterprise datasets.`);
    return null;
  }
};

export default connectDB;
