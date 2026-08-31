import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  company: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 5, min: 1, max: 5 },
  review: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Testimonial', testimonialSchema);
