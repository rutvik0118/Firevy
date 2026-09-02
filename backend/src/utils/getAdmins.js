import mongoose from 'mongoose';
import Admin from '../models/Admin.js';
import config from '../config/env.js';

const fetchAdmins = async () => {
  try {
    console.log(`Connecting to MongoDB at: ${config.mongoUri}...`);
    await mongoose.connect(config.mongoUri, { serverSelectionTimeoutMS: 5000 });
    console.log('Connected to MongoDB successfully.\n');

    const admins = await Admin.find({}, '-password').lean();

    if (admins.length === 0) {
      console.log('No admin records found in the database collection "admins".');
    } else {
      console.log(`Found ${admins.length} Admin account(s) in DB:`);
      console.log(JSON.stringify(admins, null, 2));
    }
  } catch (error) {
    console.error('Error fetching admins from DB:', error.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

fetchAdmins();
