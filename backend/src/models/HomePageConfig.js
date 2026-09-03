import mongoose from 'mongoose';

const sectionItemSchema = new mongoose.Schema(
  {
    sectionKey: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 0
    },
    isEnabled: {
      type: Boolean,
      default: true
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  { _id: false }
);

const homePageConfigSchema = new mongoose.Schema(
  {
    pageKey: {
      type: String,
      default: 'home',
      unique: true,
      index: true
    },
    sectionsOrder: {
      type: [String],
      default: []
    },
    sections: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    sectionsList: [sectionItemSchema]
  },
  {
    timestamps: true,
    minimize: false
  }
);

export default mongoose.model('HomePageConfig', homePageConfigSchema);
