import mongoose from 'mongoose';

const industrySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  image: { type: String, required: true },
  services: [{ type: String }],
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Industry', industrySchema);
