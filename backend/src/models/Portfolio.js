import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  industry: { type: String, required: true },
  category: { type: String, required: true }, // e.g. 'Web', 'Mobile', 'AI', 'Cloud', 'E-commerce'
  image: { type: String, required: true },
  gallery: [{ type: String }],
  technologies: [{ type: String }],
  challenge: { type: String, required: true },
  solution: { type: String, required: true },
  results: [{ type: String }],
  features: [{ type: String }],
  isFeatured: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Portfolio', portfolioSchema);
