import mongoose from 'mongoose';
import config from '../config/env.js';
import Service from '../models/Service.js';
import Portfolio from '../models/Portfolio.js';
import Testimonial from '../models/Testimonial.js';
import Industry from '../models/Industry.js';
import Technology from '../models/Technology.js';
import Job from '../models/Job.js';

import {
  initialServices,
  initialPortfolio,
  initialTestimonials,
  initialIndustries,
  initialTechnologies,
  initialJobs
} from './initialData.js';

const seedDatabase = async () => {
  try {
    console.log('[Seeder] Connecting to MongoDB at:', config.mongoUri);
    await mongoose.connect(config.mongoUri);

    console.log('[Seeder] Clearing existing collections...');
    await Service.deleteMany({});
    await Portfolio.deleteMany({});
    await Testimonial.deleteMany({});
    await Industry.deleteMany({});
    await Technology.deleteMany({});
    await Job.deleteMany({});

    console.log('[Seeder] Inserting Services...');
    await Service.insertMany(initialServices);

    console.log('[Seeder] Inserting Portfolio projects...');
    await Portfolio.insertMany(initialPortfolio);

    console.log('[Seeder] Inserting Testimonials...');
    await Testimonial.insertMany(initialTestimonials);

    console.log('[Seeder] Inserting Industries...');
    await Industry.insertMany(initialIndustries);

    console.log('[Seeder] Inserting Technologies...');
    await Technology.insertMany(initialTechnologies);

    console.log('[Seeder] Inserting Job openings...');
    // Strip string ids before insert
    const jobsToInsert = initialJobs.map(({ _id, ...rest }) => rest);
    await Job.insertMany(jobsToInsert);

    console.log('✅ [Seeder] Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ [Seeder Error] Failed to seed database:', error.message);
    process.exit(1);
  }
};

seedDatabase();