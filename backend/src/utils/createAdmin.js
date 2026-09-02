import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';
import config from '../config/env.js';

const createAdmin = async () => {
  try {
    await mongoose.connect(config.mongoUri);

    const email = (process.argv[2] || 'admin@firevy.co').trim().toLowerCase();
    const password = process.argv[3];

    if (!password) {
      console.error('Usage: node createAdmin.js <email> <password>');
      process.exit(1);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      existingAdmin.password = hashedPassword;
      existingAdmin.role = 'admin';

      await existingAdmin.save();

      console.log(`Admin password reset successfully: ${email}`);
      process.exit(0);
    }

    await Admin.create({
      name: 'Firevy Admin',
      email,
      password: hashedPassword,
      role: 'admin'
    });

    console.log(`Admin created successfully: ${email}`);
    process.exit(0);

  } catch (error) {
    console.error('Create admin error:', error.message);
    process.exit(1);
  }
};

createAdmin();