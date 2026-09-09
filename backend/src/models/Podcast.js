import mongoose from 'mongoose';

const podcastSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  thumbnail: { type: String, required: true },
  episodeNumber: { type: Number, default: 1 },
  audioUrl: { type: String, default: '' },
  videoUrl: { type: String, default: '' },
  duration: { type: String, default: '35:20 Min' },
  description: { type: String, default: '' },
  host: { type: String, default: 'firevy.co Tech Spotlight' },
  publishDate: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Podcast', podcastSchema);
