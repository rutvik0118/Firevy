import mongoose from 'mongoose';

const clutchReviewSchema = new mongoose.Schema({
  clientName: { type: String, required: true, trim: true },
  company: { type: String, default: '' },
  designation: { type: String, default: '' },
  location: { type: String, default: '' },
  avatar: { type: String, default: '' },
  rating: { type: Number, default: 5, min: 1, max: 5 },
  headline: { type: String, default: '' },
  review: { type: String, required: true },
  clutchUrl: { type: String, default: 'https://clutch.co' },
  scores: {
    quality: { type: String, default: '5.0' },
    schedule: { type: String, default: '5.0' },
    cost: { type: String, default: '5.0' },
    refer: { type: String, default: '5.0' }
  },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('ClutchReview', clutchReviewSchema);
