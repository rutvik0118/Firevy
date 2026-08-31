import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import TrustMarquee from '../components/home/TrustMarquee';
import StatsSection from '../components/home/StatsSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSection from '../components/home/ServicesSection';
import TechEcosystem from '../components/home/TechEcosystem';
import IndustriesGrid from '../components/home/IndustriesGrid';
import PortfolioShowcase from '../components/home/PortfolioShowcase';
import ProcessTimeline from '../components/home/ProcessTimeline';
import EngagementModels from '../components/home/EngagementModels';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import FaqAccordion from '../components/home/FaqAccordion';
import CTASection from '../components/home/CTASection';

export const Home = () => {
  return (
    <>
      <SEO
        title="Building Digital Products That Move Businesses Forward"
        description="We design and develop scalable web, mobile, cloud, AI and enterprise software solutions that transform ambitious ideas into measurable business outcomes."
      />
      <Hero />
      <TrustMarquee />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <TechEcosystem />
      <PortfolioShowcase />
      <ProcessTimeline />
      <IndustriesGrid />
      <EngagementModels />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FaqAccordion />
      <CTASection />
    </>
  );
};

export default Home;
