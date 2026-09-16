import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';
import IWatchWhatSetsUsApartSection from './IWatchWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import {
  Smartphone,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Code2,
  Sparkles,
  Award,
  CheckCircle2,
  Globe,
  Lock,
  Boxes
} from 'lucide-react';

export const MobileAppDevelopmentService = () => {
  const techCategories = [
    {
      name: 'Mobile Platforms',
      techs: [
        { name: 'iOS', icon: '/images/first.webp' },
        { name: 'Android', icon: '/images/third.webp' },
        { name: 'Flutter', icon: '/images/fourth.webp' },
        { name: 'React Native', icon: '/images/fifth.webp' },
        { name: 'Kotlin', icon: '/images/sixth.webp' },
        { name: 'Swift', icon: '/images/seventh.webp' }
      ]
    },
    {
      name: 'Backend & Cloud',
      techs: [
        { name: 'Node.js', icon: '/images/first.webp' },
        { name: 'Python', icon: '/images/second.webp' },
        { name: 'AWS Cloud', icon: '/images/third.webp' },
        { name: 'Google Cloud', icon: '/images/fourth.webp' },
        { name: 'Firebase', icon: '/images/fifth.webp' },
        { name: 'PostgreSQL', icon: '/images/sixth.webp' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased text-left selection:bg-sky-500 selection:text-white">
      <SEO
        title="Best Mobile App Development Company | Custom iOS & Android Apps"
        description="As a leading AI mobile app development company with Good Review and High Rating, we strive to offer cutting-edge solutions tailored to our clients' needs."
      />

      {/* =========================================================================
          HERO SECTION (1:1 Reference Match to Screenshot)
          ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#F4F8FA] text-slate-900 text-left font-sans relative overflow-hidden">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Subtitle & 2 Dark Blue Action Buttons */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Main Title */}
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.18] font-sans"
                style={{ fontSize: 'clamp(32px, 4.2vw, 48px)' }}
              >
                Best Mobile App Development Company
              </h1>

              {/* Subtitle / Description */}
              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                As a leading AI mobile app development company with Good Review and High Rating, we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app that surpasses your expectations and makes you an industry leader. Contact us now!
              </p>

              {/* 2 Dark Blue Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold">→</span>
                </a>

                <Link
                  to="/services/hire-mobile-app-developers"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Hire Mobile Developers</span>
                  <span className="text-base font-bold">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Illustration Matching 1:1 */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto flex items-center justify-center">
                <img
                  src="/images/mobile_app_hero_vector.png"
                  alt="Best Mobile App Development Company"
                  className="w-full h-auto object-contain drop-shadow-xl"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee Line */}
      <BrandLogoMarquee />

      {/* SECTION: Proud Awards & Recognition Banner */}
      <ProudAwardsBanner />

      {/* SECTION: Innovative Solutions Video Section */}
      <InnovativeSolutionsVideoSection />

      {/* SECTION: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Our agile mobile app development life cycle from initial concept wireframes to App Store and Google Play deployment." />

      {/* SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* SECTION: Trusted Brands */}
      <TrustedBrandsGrid />

      {/* SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* SECTION: Technology Stack */}
      <SapphireTechStackGrid domainName="mobile app" richTechCategories={techCategories} />

      {/* SECTION: We Have Been Featured In */}
      <FeaturedInBrandsSection />

      {/* SECTION: Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* SECTION: Frequently Asked Questions */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
      />

      {/* SECTION: Our Recent Blogs */}
      <IWatchRecentBlogsSection />

      {/* SECTION: What Sets Us Apart */}
      <IWatchWhatSetsUsApartSection />

      {/* SECTION: Challenge CTA Banner */}
      <IWatchChallengeCtaBanner
        title="Have Mobile App Development Challenge To Address ?"
        subtitle="Get access to top Mobile App Developers to transform your ideas into a robust application."
        buttonText="Hire Now"
      />
    </div>
  );
};

export default MobileAppDevelopmentService;
