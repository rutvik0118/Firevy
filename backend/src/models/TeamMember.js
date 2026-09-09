import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  designation: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  department: { type: String, default: 'Leadership & Engineering' },
  bio: { type: String, default: '' },
  socialLinks: {
    linkedin: { type: String, default: '' },
    twitter: { type: String, default: '' },
    github: { type: String, default: '' },
    email: { type: String, default: '' }
  },
  order: { type: Number, default: 0 },
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model('TeamMember', teamMemberSchema);
