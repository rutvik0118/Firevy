import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import MobileAppMarketStatsSection from './MobileAppMarketStatsSection';
import DeliveringImpactfulMobileServices from './DeliveringImpactfulMobileServices';
import MobileAppAwardsMarqueeBanner from './MobileAppAwardsMarqueeBanner';
import CreatingExcellentMobileAppsSection from './CreatingExcellentMobileAppsSection';
import MobileAppCuttingEdgeTechnologiesSection from './MobileAppCuttingEdgeTechnologiesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import MobileAppExpertiseServices from './MobileAppExpertiseServices';
import BestMobileAppCompanyShowcase from './BestMobileAppCompanyShowcase';
import MobileAppProficientTechStackSection from './MobileAppProficientTechStackSection';
import OurMobileAppExpertiseServices from './OurMobileAppExpertiseServices';
import ProudAwardsBanner from './ProudAwardsBanner';
import MobileAppCompanyBenefits from './MobileAppCompanyBenefits';
import AndroidHiringModels from './AndroidHiringModels';
import MobileAppComparativeAnalysis from './MobileAppComparativeAnalysis';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import MobileAppWhatSetsUsApartSection from './MobileAppWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import {
  Smartphone,
  Repeat,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  Code2,
  CheckCircle2,
  Cpu,
  RefreshCw,
  Sparkles
} from 'lucide-react';

export const MobileAppPortingService = () => {
  // Key Mobile App Porting Offerings
  const portingOfferings = [
    {
      title: 'iOS to Android App Porting',
      desc: 'Seamlessly migrate Swift and Objective-C codebases to modern Kotlin and Java while conforming to Material Design guidelines and Google Play compliance.',
      icon: <Smartphone className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Android to iOS App Porting',
      desc: 'Convert existing Android applications into high-performance iOS apps, adjusting for Human Interface Guidelines, Apple HIG standards, and App Store guidelines.',
      icon: <Repeat className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Cross-Platform App Migration',
      desc: 'Port native apps into unified Flutter or React Native frameworks to achieve unified multi-platform code reuse, lower maintenance costs, and faster release cycles.',
      icon: <Layers className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Legacy App Modernization',
      desc: 'Re-architect outdated architectures, migrate legacy APIs to GraphQL/REST microservices, and refactor codebases for modern 64-bit multi-core processors.',
      icon: <RefreshCw className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Backend & Cloud Porting',
      desc: 'Re-align backend integrations, cloud push notification channels (APNs/FCM), in-app payment processors, and analytics pipelines without downtime.',
      icon: <Cpu className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'QA, Security & Performance Tuning',
      desc: 'Comprehensive regression testing, platform parity validation, device fragmentation coverage, and benchmark battery/memory optimization.',
      icon: <ShieldCheck className="w-8 h-8 text-[#005F96]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white">
      {/* SEO Metadata */}
      <SEO
        title="Best Mobile App Porting Company | Firevy.co"
        description="As a leading AI mobile app development and porting company with Good Review and High Rating, we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app that surpasses your expectations."
        keywords="Mobile app porting, iOS to Android porting, Android to iOS porting, mobile app migration, app development company, Firevy.co"
        url="https://firevy.co/services/mobile-app-porting"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Exact 1:1 match to Screenshot 1)                         */}
      {/* ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading + Description + Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Heading (Image 1 match) */}
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.12] font-sans"
                style={{ fontSize: 'clamp(32px, 4.2vw, 48px)' }}
              >
                Best Mobile App<br />Development Company
              </h1>

              {/* Subtitle / Description (Image 1 match) */}
              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                As a leading AI mobile app development company with Good Review and High Rating, we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app that surpasses your expectations and makes you an industry leader. Contact us now!
              </p>

              {/* 2 Dark Blue Action Buttons (Image 1 match) */}
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

            {/* Right Column: Generated Mobile Porting Hero Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] mx-auto flex items-center justify-center">
                <img
                  src="/images/mobile_porting_hero.jpg"
                  alt="Best Mobile App Development Company"
                  className="w-full h-auto object-contain rounded-2xl drop-shadow-xl transition-transform duration-500 ease-out hover:scale-105 cursor-pointer"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE (Image 2 Top)                                       */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 3. MOBILE APP MARKET STATS & MARKET SIZE (Image 2 & Image 3)              */}
      {/* ========================================================================= */}
      <MobileAppMarketStatsSection />

      {/* ========================================================================= */}
      {/* 4. DELIVERING IMPACTFUL MOBILE APPLICATION SERVICES (Image 4)             */}
      {/* ========================================================================= */}
      <DeliveringImpactfulMobileServices imageSrc="/images/mobile_porting_team.jpg" />

      {/* ========================================================================= */}
      {/* 5. WORLD WIDE TOP RATED CLUTCH AWARDS BAR (Image 5 Top)                   */}
      {/* ========================================================================= */}
      <MobileAppAwardsMarqueeBanner />

      {/* ========================================================================= */}
      {/* 6. CREATING EXCELLENT MOBILE APPS FOR EVERY BUSINESS (Image 5 Bottom)     */}
      {/* ========================================================================= */}
      <CreatingExcellentMobileAppsSection />

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES FIREVY USE (Image 2)                         */}
      {/* ========================================================================= */}
      <MobileAppCuttingEdgeTechnologiesSection companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 8. DEDICATED MOBILE APP PORTING CAPABILITIES                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-100 text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#005F96] uppercase tracking-wider block mb-2 font-sans">
              End-to-End Migration Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Comprehensive Mobile App Porting Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              We bridge operating systems and frameworks with rigorous parity audits, performance benchmarking, and zero-downtime execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portingOfferings.map((offering, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-50/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {offering.icon}
                  </div>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0B0F19] mb-2.5 group-hover:text-[#005F96] transition-colors font-sans">
                    {offering.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                    {offering.desc}
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-6 flex items-center text-xs font-bold text-[#005F96] group-hover:translate-x-1 transition-transform">
                  <span>Explore Migration Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR PREMIUM SERVICES GRID                                              */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 10. MEET FIREVY'S EXCEPTIONAL TEAM OF SEASONED EXPERTS                    */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 11. INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS                    */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Mobile App Porting & Development" />

      {/* ========================================================================= */}
      {/* 12. EXPLORE THE TRANSFORMATIVE IMPACT OF MOBILE APP                       */}
      {/* ========================================================================= */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Mobile App On Your Business Success" />

      {/* ========================================================================= */}
      {/* 13. ABOUT US STATS (8-CARD GRID)                                          */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 14. SECTORS THRIVING THROUGH FIREVY BESPOKE MOBILE SERVICES               */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy.co’s Bespoke Mobile App Porting Services" />

      {/* ========================================================================= */}
      {/* 15. SUCCESS STORIES PORTFOLIO & METRICS                                   */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 16. THE EXPERTISE OF OUR MOBILE APP SERVICES                              */}
      {/* ========================================================================= */}
      <MobileAppExpertiseServices />

      {/* ========================================================================= */}
      {/* 17. BEST MOBILE APP COMPANY SHOWCASE (MOCKUPS & VIDEO)                    */}
      {/* ========================================================================= */}
      <BestMobileAppCompanyShowcase />

      {/* ========================================================================= */}
      {/* 18. TECHNOLOGY STACK PROFICIENTLY USED                                    */}
      {/* ========================================================================= */}
      <MobileAppProficientTechStackSection />

      {/* ========================================================================= */}
      {/* 19. OUR EXPERTISE IN MOBILE APP SERVICES                                  */}
      {/* ========================================================================= */}
      <OurMobileAppExpertiseServices />

      {/* ========================================================================= */}
      {/* 20. PROUD AWARDS & RECOGNITION BANNER                                     */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 21. BENEFITS OF THE BEST MOBILE APP DEVELOPMENT COMPANY                   */}
      {/* ========================================================================= */}
      <MobileAppCompanyBenefits />

      {/* ========================================================================= */}
      {/* 22. BUSINESS FRIENDLY HIRING MODELS                                       */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 23. COMPARATIVE ANALYSIS                                                  */}
      {/* ========================================================================= */}
      <MobileAppComparativeAnalysis />

      {/* ========================================================================= */}
      {/* 24. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 25. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Our agile mobile app porting life cycle from initial concept wireframes to App Store and Google Play deployment."
      />

      {/* ========================================================================= */}
      {/* 26. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 27. TRUSTED BRANDS GRID                                                   */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 28. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 29. WHAT OUR CLIENTS SAY (CLUTCH REVIEWS CAROUSEL)                        */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 30. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 31. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 32. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to queries and provide solutions that captivate users. Feel free to contact us in case of any question."
        companyName="Firevy.co"
      />

      {/* ========================================================================= */}
      {/* 33. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 34. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <MobileAppWhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 35. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Mobile App Development Challenge To Address ?"
          subtitle="Get access to top Mobile App Developers to transform your ideas into a robust application."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default MobileAppPortingService;
