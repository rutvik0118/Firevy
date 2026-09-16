import mongoose from 'mongoose';

const videoTestimonialSchema = new mongoose.Schema({
  clientName: { type: String, required: true, trim: true },
  designation: { type: String, default: '' },
  company: { type: String, required: true, trim: true },
  thumbnail: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String, default: '' },
  rating: { type: Number, default: 5, min: 1, max: 5 },
  order: { type: Number, default: 0 },
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('VideoTestimonial', videoTestimonialSchema);
