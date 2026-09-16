import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  department: { type: String, required: true },
  location: { type: String, required: true }, // e.g. 'San Francisco, CA / Remote'
  type: { type: String, required: true, default: 'Full-time' }, // 'Full-time', 'Contract', 'Hybrid'
  experience: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [{ type: String }],
  responsibilities: [{ type: String }],
  openings: { type: Number, default: 1 },
  urgent: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Job', jobSchema);
