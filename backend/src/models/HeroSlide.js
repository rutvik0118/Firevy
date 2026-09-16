import mongoose from 'mongoose';

const heroSlideSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
      required: [true, 'Slide category tag is required'],
      trim: true,
      default: 'AI Innovation'
    },
    titleLine1: {
      type: String,
      required: [true, 'Title Line 1 is required'],
      trim: true,
      default: 'Your Vision,'
    },
    titleLine2: {
      type: String,
      required: [true, 'Title Line 2 is required'],
      trim: true,
      default: 'Our Technology'
    },
    subTag: {
      type: String,
      trim: true,
      default: '(Limitless Possibilities)'
    },
    bullets: {
      type: [String],
      default: [
        'Recognized as #1 Web Development Company in India and USA.',
        'Trusted by 20+ Fortune 500 Companies and a Clutch Leader.',
        "We've been Redefining Excellence for over Two Decades."
      ]
    },
    rightBoxTitle: {
      type: String,
      trim: true,
      default: 'Redefined Learning Experiences'
    },
    rightBoxSub: {
      type: String,
      trim: true,
      default: 'With Intelligent AI Innovation'
    },
    primaryCtaText: {
      type: String,
      trim: true,
      default: "Let's Talk"
    },
    primaryCtaLink: {
      type: String,
      trim: true,
      default: '/contact'
    },
    secondaryCtaText: {
      type: String,
      trim: true,
      default: 'Get in Touch'
    },
    secondaryCtaLink: {
      type: String,
      trim: true,
      default: '/contact'
    },
    backgroundVideoUrl: {
      type: String,
      trim: true,
      default: '/Best Software Development Company in USA - Sapphire Software Sol.mp4'
    },
    order: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('HeroSlide', heroSlideSchema);
