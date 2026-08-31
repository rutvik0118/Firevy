import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }, // Lucide icon name or image URL
  image: { type: String, required: true },
  technologies: [{ type: String }],
  features: [{ type: String }],
  benefits: [{ type: String }],
  process: [{
    step: Number,
    title: String,
    description: String
  }],
  faq: [faqSchema],
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Service', serviceSchema);
