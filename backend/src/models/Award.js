import mongoose from 'mongoose';

const awardSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  organization: { type: String, required: true, trim: true }, // e.g. GoodFirms, Clutch, The Manifest, Upwork
  year: { type: String, default: '2026' },
  image: { type: String, required: true },
  category: { type: String, default: 'Web & Mobile App Development' },
  description: { type: String, default: '' },
  badgeUrl: { type: String, default: '' },
  order: { type: Number, default: 0 },
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Award', awardSchema);
