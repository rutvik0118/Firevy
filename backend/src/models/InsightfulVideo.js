import mongoose from 'mongoose';

const insightfulVideoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  thumbnail: { type: String, required: true },
  videoUrl: { type: String, required: true }, // full embed URL or YouTube link
  youtubeId: { type: String, default: 'dQw4w9WgXcQ' },
  industry: { type: String, default: 'Technology' },
  duration: { type: String, default: '4:20 Min' },
  tag: { type: String, default: 'Technology & AI' },
  description: { type: String, default: '' },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('InsightfulVideo', insightfulVideoSchema);
