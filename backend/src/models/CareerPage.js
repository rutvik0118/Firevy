import mongoose from 'mongoose';

const paragraphBlockSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
  title: { type: String, default: '' },
  paragraphs: [{ type: String }],
  image: { type: String, default: '' },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const valuePillarSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  quote: { type: String, required: true },
  image: { type: String, default: '' },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const benefitSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
  title: { type: String, required: true },
  icon: { type: String, default: 'Users' },
  description: { type: String, default: '' },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const lifePhotoSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
  title: { type: String, default: '' },
  image: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const hiringStepSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
  stepNumber: { type: Number, default: 1 },
  title: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const visionSlideSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
  title: { type: String, required: true },
  quote: { type: String, required: true },
  image: { type: String, default: '' },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const statMetricSchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
  value: { type: String, required: true },
  label: { type: String, required: true },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const personStorySchema = new mongoose.Schema({
  id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
  name: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String, required: true },
  videoUrl: { type: String, default: '' },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const socialLinkSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String, default: '' },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const tabItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  label: { type: String, required: true },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { _id: false });

const careerPageSchema = new mongoose.Schema({
  pageKey: { type: String, default: 'careers_main', unique: true },
  meta: {
    title: { type: String, default: 'Build your Future with us | Careers at firevy.co' },
    description: { type: String, default: 'Explore open software engineering, mobile development, and UI/UX design positions at firevy.co. Build impactful global products.' },
    canonical: { type: String, default: '/careers' }
  },
  hero: {
    title: { type: String, default: 'Build your Future with us' },
    description: { type: String, default: 'Our team is the heart of everything we do. We are dedicated to empowering them to drive meaningful change and shape a brighter future for all. We believe in fostering fulfilling careers by offering inspiring opportunities, continuous development, and the encouragement to unlock their full potential and thrive both personally and professionally.' },
    image: { type: String, default: '' },
    badge: { type: String, default: '' },
    isActive: { type: Boolean, default: true }
  },
  tabs: [tabItemSchema],
  whoWeAre: [paragraphBlockSchema],
  whyFirevy: [valuePillarSchema],
  benefits: [benefitSchema],
  lifeAtFirevy: [lifePhotoSchema],
  hiringProcess: [hiringStepSchema],
  visionSection: {
    title: { type: String, default: 'Crafting a Vision, Shaping the Future' },
    slides: [visionSlideSchema],
    isActive: { type: Boolean, default: true }
  },
  stats: [statMetricSchema],
  peopleTestimonials: [personStorySchema],
  socialMedia: {
    title: { type: String, default: 'Social Media' },
    subtitle: { type: String, default: 'We follow a very simple, straight forward, and transparent process' },
    links: [socialLinkSchema],
    isActive: { type: Boolean, default: true }
  },
  ctaBanner: {
    title: { type: String, default: 'Ready To Take Challenge?' },
    description: { type: String, default: 'If you have a passion for planning & want to work for a rapidly growing entrepreneurial company, please send your resume to careers@firevy.co' },
    email: { type: String, default: 'careers@firevy.co' },
    buttonText: { type: String, default: 'Apply Here' },
    isActive: { type: Boolean, default: true }
  },
  generalSettings: {
    notFindingJobTitle: { type: String, default: 'Not finding the right opening as per your profile & skillset?' },
    notFindingJobDesc: { type: String, default: 'If you are interested to work with us but are unable to find a suitable opportunity, submit your profile & we will reach out to you!!!' },
    notFindingJobButtonText: { type: String, default: 'Apply here' }
  }
}, {
  timestamps: true
});

export default mongoose.model('CareerPage', careerPageSchema);
