import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  author: { type: String, default: 'Kumaril Patel' },
  category: { type: String, required: true },
  featuredImage: { type: String, default: '' },
  gradientBg: { type: String, default: 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900' },
  shortDescription: { type: String, required: true },
  content: { type: String, default: '' },
  tags: [{ type: String }],
  readTime: { type: String, default: '5 min read' },
  publishDate: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) },
  isFeatured: { type: Boolean, default: false },
  seoTitle: { type: String, default: '' },
  seoDescription: { type: String, default: '' },
  seoKeywords: { type: String, default: '' },
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('BlogPost', blogPostSchema);
