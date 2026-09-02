import mongoose from 'mongoose';

const technologySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Frontend', 'Backend', 'Mobile', 'Database', 'Cloud', 'DevOps', 'AI', 'Testing'] 
  },
  icon: { type: String, required: true },
  description: { type: String },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('Technology', technologySchema);
