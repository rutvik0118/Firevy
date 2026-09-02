import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  position: { type: String, required: true, trim: true },
  resume: { type: String }, // File path or portfolio link
  message: { type: String },
  status: { 
    type: String, 
    enum: ['Submitted', 'Under Review', 'Interview Scheduled', 'Rejected', 'Hired'], 
    default: 'Submitted' 
  }
}, {
  timestamps: true
});

export default mongoose.model('JobApplication', jobApplicationSchema);
