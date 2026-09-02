import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';
import config from '../config/env.js';

const createAdmin = async () => {
    try {
        await mongoose.connect(config.mongoUri);

        const email = 'admin@firevy.co';
        const password = 'firevy_admin_master_2026';

        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            console.log('Admin already exists');
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await Admin.create({
            name: 'Firevy Admin',
            email,
            password: hashedPassword,
            role: 'admin'
        });

        console.log('Admin created successfully');
        console.log('Email:', email);

        process.exit(0);
    } catch (error) {
        console.error('Create admin error:', error.message);
        process.exit(1);
    }
};

createAdmin();