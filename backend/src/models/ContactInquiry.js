import mongoose from 'mongoose';

const contactInquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, trim: true },
  company: { type: String, trim: true },
  service: { type: String, trim: true },
  budget: { type: String, trim: true },
  message: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['New', 'In Review', 'Contacted', 'Archived'], 
    default: 'New' 
  }
}, {
  timestamps: true
});

export default mongoose.model('ContactInquiry', contactInquirySchema);
