import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import TrustMarquee from '../components/home/TrustMarquee';
import AboutKeyMetrics from '../components/home/AboutKeyMetrics';
import BrandLogoGrid from '../components/home/BrandLogoGrid';
import ServicesSection from '../components/home/ServicesSection';
import ConversionCalloutBanner from '../components/home/ConversionCalloutBanner';
import PortfolioShowcase from '../components/home/PortfolioShowcase';
import TrustRecognitionBanner from '../components/home/TrustRecognitionBanner';
import WorkProcessGrid from '../components/home/WorkProcessGrid';
import EngagementModelsSection from '../components/home/EngagementModelsSection';
import TechShowcaseTabbed from '../components/home/TechShowcaseTabbed';
import PremiumServicesGrid from '../components/home/PremiumServicesGrid';
import SuccessMatrixGrid from '../components/home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../components/home/InnovativeSolutionVideo';
import RecentPodcastsSection from '../components/home/RecentPodcastsSection';
import DownloadBrochureSection from '../components/home/DownloadBrochureSection';
import DigitalTransformationCaseStudies from '../components/home/DigitalTransformationCaseStudies';
import VideoTestimonialsStory from '../components/home/VideoTestimonialsStory';
import RecentBlogsSection from '../components/home/RecentBlogsSection';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import FeaturedInLogosGrid from '../components/home/FeaturedInLogosGrid';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import FloatingElements from '../components/common/FloatingElements';

export const Home = () => {
  return (
    <>
      <SEO
        title="Firevy.co | Enterprise IT & AI Software Solutions"
        description="We design and develop scalable web, mobile, cloud, AI, and enterprise software solutions that transform ambitious ideas into measurable business outcomes."
      />

      {/* 1. Hero Banner & Sub-Header Ribbon */}
      <Hero />

      {/* 2. Auto-Scrolling Brand Logos Marquee (Between Hero & About Us) */}
      <TrustMarquee />

      {/* 3. About Us & Key Metrics (Grid of 8 Cards) */}
      <AboutKeyMetrics />

      {/* 4. World's Leading Brands (Logo Wall Grid) */}
      <BrandLogoGrid />

      {/* 5. Our Services Grid (Interactive Vertical Cards) */}
      <ServicesSection />

      {/* 6. Dark Teal Conversion Callout Banner */}
      <ConversionCalloutBanner />

      {/* 7. Our Recent Projects (Portfolio Cards) */}
      <PortfolioShowcase />

      {/* 8. Trust & Recognition Banner */}
      <TrustRecognitionBanner />

      {/* 9. Work Process (Two-Row Step Cards with Arrow Connectors) */}
      <WorkProcessGrid />

      {/* 10. Engagement Models Section */}
      <EngagementModelsSection />

      {/* 11. Technologies We Work With (Interactive Tabbed Showcase) */}
      <TechShowcaseTabbed />

      {/* 12. Our Premium Services (Pill Grid) */}
      <PremiumServicesGrid />

      {/* Sapphire Template Sections (Images 10 through 19) */}

      {/* 1. Success Matrix Section (Image 10) */}
      <SuccessMatrixGrid />

      {/* 2. Unveiling Our Innovative Solution Video Section (Image 11) */}
      <InnovativeSolutionVideo />

      {/* 3. Our Recent Podcasts Section (Image 12, 13) */}
      <RecentPodcastsSection />

      {/* 4. Download Our Brochure Form Section (Image 13, 14) */}
      <DownloadBrochureSection />

      {/* 5. Digital Transformation & Case Studies Section (Image 14, 15) */}
      <DigitalTransformationCaseStudies />

      {/* 6. Our Story, Their Words Testimonial Section (Image 15, 16) */}
      <VideoTestimonialsStory />

      {/* 7. Our Recent Blogs Section (Image 16, 17) */}
      <RecentBlogsSection />

      {/* 8. What Our Clients Say Section (Image 17, 18) */}
      <ClientReviewsDarkSection />

      {/* 9. We Have Been Featured In Logo Grid (Image 18) */}
      <FeaturedInLogosGrid />

      {/* 10. Let's Work Together & Newsletter Subscription Banners (Image 19) */}
      <WorkTogetherNewsletterSection />

      {/* Fixed Floating UI Elements */}
      <FloatingElements />
    </>
  );
};

export default Home;
