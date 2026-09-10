import mongoose from 'mongoose';

const companyEventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, default: 'Tech & Culture' }, // e.g. Hackathon, Summit, Celebration, Community
  eventDate: { type: String, default: '' },
  image: { type: String, required: true },
  gallery: [{ type: String }],
  shortDescription: { type: String, default: '' },
  content: { type: String, default: '' },
  location: { type: String, default: 'Global / Headquarters' },
  order: { type: Number, default: 0 },
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('CompanyEvent', companyEventSchema);
