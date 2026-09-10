import mongoose from 'mongoose';

const companySectionSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  name: { type: String, default: '' },
  category: { type: String, default: 'Company' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
  heroImage: { type: String, default: '' },
  heroVideo: { type: String, default: '' },
  // Flexible content blocks & section data
  content: { type: mongoose.Schema.Types.Mixed, default: () => ({}) },
  gallery: [{ type: String }],
  highlights: [{ type: String }],
  stats: [{
    label: { type: String },
    value: { type: String }
  }],
  items: { type: mongoose.Schema.Types.Mixed, default: () => [] },
  seo: {
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
    metaKeywords: { type: String, default: '' },
    canonical: { type: String, default: '' }
  },
  // Draft / Publish System Fields
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  publishedAt: { type: Date, default: Date.now },
  publishedData: { type: mongoose.Schema.Types.Mixed, default: null },
  draftData: { type: mongoose.Schema.Types.Mixed, default: null },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('CompanySection', companySectionSchema);
