import mongoose from 'mongoose';

const homePageSchema = new mongoose.Schema(
  {
    sectionsOrder: {
      type: [String],
      default: [
        'hero',
        'trustMarquee',
        'aboutKeyMetrics',
        'brandLogoGrid',
        'servicesSection',
        'conversionCalloutBanner',
        'portfolioShowcase',
        'trustRecognitionBanner',
        'workProcessGrid',
        'engagementModelsSection',
        'techShowcaseTabbed',
        'premiumServicesGrid',
        'successMatrixGrid',
        'innovativeSolutionVideo',
        'recentPodcastsSection',
        'downloadBrochureSection',
        'digitalTransformationCaseStudies',
        'videoTestimonialsStory',
        'recentBlogsSection',
        'clientReviewsDarkSection',
        'featuredInLogosGrid',
        'workTogetherNewsletterSection',
        'subscribeNewsletterSection',
        'footerSection'
      ]
    },
    sections: {
      hero: { type: mongoose.Schema.Types.Mixed, default: {} },
      trustMarquee: { type: mongoose.Schema.Types.Mixed, default: {} },
      aboutKeyMetrics: { type: mongoose.Schema.Types.Mixed, default: {} },
      brandLogoGrid: { type: mongoose.Schema.Types.Mixed, default: {} },
      servicesSection: { type: mongoose.Schema.Types.Mixed, default: {} },
      conversionCalloutBanner: { type: mongoose.Schema.Types.Mixed, default: {} },
      portfolioShowcase: { type: mongoose.Schema.Types.Mixed, default: {} },
      trustRecognitionBanner: { type: mongoose.Schema.Types.Mixed, default: {} },
      workProcessGrid: { type: mongoose.Schema.Types.Mixed, default: {} },
      engagementModelsSection: { type: mongoose.Schema.Types.Mixed, default: {} },
      techShowcaseTabbed: { type: mongoose.Schema.Types.Mixed, default: {} },
      premiumServicesGrid: { type: mongoose.Schema.Types.Mixed, default: {} },
      successMatrixGrid: { type: mongoose.Schema.Types.Mixed, default: {} },
      innovativeSolutionVideo: { type: mongoose.Schema.Types.Mixed, default: {} },
      recentPodcastsSection: { type: mongoose.Schema.Types.Mixed, default: {} },
      downloadBrochureSection: { type: mongoose.Schema.Types.Mixed, default: {} },
      digitalTransformationCaseStudies: { type: mongoose.Schema.Types.Mixed, default: {} },
      videoTestimonialsStory: { type: mongoose.Schema.Types.Mixed, default: {} },
      recentBlogsSection: { type: mongoose.Schema.Types.Mixed, default: {} },
      clientReviewsDarkSection: { type: mongoose.Schema.Types.Mixed, default: {} },
      featuredInLogosGrid: { type: mongoose.Schema.Types.Mixed, default: {} },
      workTogetherNewsletterSection: { type: mongoose.Schema.Types.Mixed, default: {} },
      subscribeNewsletterSection: { type: mongoose.Schema.Types.Mixed, default: {} },
      footerSection: { type: mongoose.Schema.Types.Mixed, default: {} }
    }
  },
  {
    timestamps: true,
    minimize: false
  }
);

export default mongoose.model('HomePage', homePageSchema);
