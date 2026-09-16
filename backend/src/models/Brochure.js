import mongoose from 'mongoose';

const brochureSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  thumbnail: { type: String, default: '' },
  pdfUrl: { type: String, required: true },
  fileSize: { type: String, default: '4.8 MB' },
  description: { type: String, default: '' },
  category: { type: String, default: 'Corporate Overview' },
  downloadCount: { type: Number, default: 0 },
  order: { type: Number, default: 0 },
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Brochure', brochureSchema);
