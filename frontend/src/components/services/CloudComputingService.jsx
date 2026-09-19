import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import MobileAppAwardsMarqueeBanner from './MobileAppAwardsMarqueeBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import MobileAppExpertiseServices from './MobileAppExpertiseServices';
import CloudComputingTrendsShowcase from './CloudComputingTrendsShowcase';
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
  Cloud,
  Repeat,
  ShieldCheck,
  Zap,
  ArrowRight,
  ArrowLeft,
  Layers,
  Code2,
  CheckCircle2,
  Cpu,
  RefreshCw,
  Sparkles,
  Server,
  Database,
  Globe,
  Lock
} from 'lucide-react';

export const CloudComputingService = () => {
  const cuttingEdgeSliderRef = useRef(null);

  // Cutting-Edge Technologies Sapphire Use for Cloud Computing Services (Exact 1:1 match to Screenshot)
  const cuttingEdgeCloudTechCards = [
    {
      title: 'MERN Stack App Development',
      desc: 'Select our first-rate development services using the MERN Stack (Node.js, MongoDB, Express, and React). Our expertise is in developing intuitive web apps that meet user demands while delivering exceptional performance.',
      icon: (
        <svg className="w-9 h-9 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
          <path d="M7 8l3 3-3 3" />
          <path d="M13 14h4" />
        </svg>
      )
    },
    {
      title: 'MEAN Stack App Development',
      desc: 'When it comes to MEAN Stack development services, we are a reliable partner. Our team is skilled in using frameworks like AngularJS and Mongoose to create web apps that have several features and perform very well.',
      icon: (
        <svg className="w-9 h-9 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 8h10" />
          <path d="M7 12h4" />
          <circle cx="15" cy="14" r="2" />
          <path d="M15 11v1" />
          <path d="M15 16v1" />
        </svg>
      )
    },
    {
      title: 'Fast API Development',
      desc: 'Our group specializes in creating dynamic, high-performing online apps by using the FastAPI framework. Utilizing the newest Python frameworks, we guarantee that your project shines in terms of functionality, user experience, and smooth integration thanks to our knowledge of tools like Pydantic and Starlette.',
      icon: (
        <svg className="w-9 h-9 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="m10 10 4-4" />
          <path d="m14 14-4-4" />
          <path d="m8 16 8-8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: 'Django App Development',
      desc: 'View our leading development services using Django. We create robust, secure, and rapid enterprise web solutions with the Django Python web framework designed to scale gracefully, improve your development velocity, and provide dependable database-driven backends.',
      icon: (
        <svg className="w-9 h-9 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
          <path d="M6 8h4v8H6z" />
          <path d="M14 8h4v4h-4z" />
        </svg>
      )
    },
    {
      title: 'GoLang Cloud App Development',
      desc: 'Build ultra-fast, concurrent, and high-throughput cloud microservices with Go (Golang). Perfect for Kubernetes orchestration, cloud-native networking, and low-latency distributed systems.',
      icon: (
        <svg className="w-9 h-9 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: 'Serverless & Microservices',
      desc: 'Accelerate feature delivery and reduce infrastructure idle costs with event-driven serverless architectures, AWS Lambda, Google Cloud Functions, and containerized Docker/Kubernetes microservices.',
      icon: (
        <svg className="w-9 h-9 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="m13 10-3 3h4l-2 3" />
        </svg>
      )
    },
    {
      title: 'Python Cloud App Development',
      desc: 'Harness the power of Python for scalable cloud computation, data analytics pipelines, automated DevOps workflows, and enterprise API integrations.',
      icon: (
        <svg className="w-9 h-9 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4v2h8V6a4 4 0 0 0-4-4Z" />
          <path d="M16 8h4a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4h-2v-4a2 2 0 0 0-2-2H8" />
        </svg>
      )
    },
    {
      title: 'Node.js Cloud Solutions',
      desc: 'Develop lightweight, event-driven, and highly scalable cloud backends using Node.js. Our engineers build enterprise real-time applications with asynchronous I/O and microservices.',
      icon: (
        <svg className="w-9 h-9 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
          <path d="M12 12l9-5" />
          <path d="M12 12v10" />
          <path d="M12 12L3 7" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white">
      {/* SEO Metadata */}
      <SEO
        title="Best Cloud Computing Services Company | Hire Cloud Engineers | Firevy.co"
        description="As a leading cloud computing and DevOps engineering company with Good Review and High Rating, we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design scalable cloud infrastructure that surpasses your expectations."
        keywords="Cloud computing service, cloud computing company, cloud development services, hire cloud developers, aws cloud services, azure cloud migration, gcp devops, Firevy.co"
        url="https://firevy.co/services/cloud-computing-service"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Exact 1:1 match to Reference Template)                   */}
      {/* ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading + Description + Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Heading */}
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.12] font-sans"
                style={{ fontSize: 'clamp(32px, 4.2vw, 48px)' }}
              >
                Best Cloud Computing<br />Services Company
              </h1>

              {/* Subtitle / Description */}
              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                As a leading enterprise cloud computing and DevOps engineering company with Good Review and High Rating, we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design cloud architecture that surpasses your expectations and makes you an industry leader. Contact us now!
              </p>

              {/* 2 Dark Blue Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold">→</span>
                </a>

                <Link
                  to="/services/cloud-development"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Hire Cloud Developers</span>
                  <span className="text-base font-bold">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: High Quality Cloud Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] mx-auto flex items-center justify-center">
                <img
                  src="/images/cloud_hero_illustration.jpg"
                  alt="Best Cloud Computing Services Company"
                  className="w-full h-auto object-contain rounded-2xl drop-shadow-xl transition-transform duration-500 ease-out hover:scale-105 cursor-pointer"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE                                                     */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 3. EXPLORE DYNAMIC CLOUD COMPUTING SERVICES                               */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white text-slate-900 font-sans text-left overflow-hidden border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[520px] flex items-center justify-center select-none overflow-hidden rounded-2xl group">
                <img
                  src="/images/dynamic_cloud_services_illustration.jpg"
                  alt="Explore Dynamic Cloud Computing Services"
                  className="w-full h-auto object-contain max-h-[440px] transition-transform duration-500 ease-out group-hover:scale-105 cursor-pointer rounded-2xl drop-shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Title & Detailed Description */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.2]">
                Explore Dynamic Cloud<br />Computing Services
              </h2>

              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.8] text-left">
                Before the beginning of cloud computing, businesses were required to acquire and be responsible for the upkeep of their servers to satisfy their customers' demands. To do this, developing a sufficient quantity of server space was necessary, which necessitated the reduction of potential downtime and outages and the accommodation of peak traffic volumes. Consequently, significant portions of the available server space were left idle most of the time. Today's Top cloud computing service providers make it possible for businesses to cut down on the number of local servers, maintenance staff, and other expensive information technology resources.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. WORLD WIDE TOP RATED CLUTCH AWARDS BAR                                 */}
      {/* ========================================================================= */}
      <MobileAppAwardsMarqueeBanner />

      {/* ========================================================================= */}
      {/* 6. CREATING EXCELLENT SOLUTIONS FOR EVERY BUSINESS                        */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Creating Excellent Cloud Computing Solutions for Every Business
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Soft Blue Topographic Patterned Quote Card */}
            <div className="lg:col-span-5 bg-[#F0F8FF] border border-[#BAE6FD]/80 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden shadow-xs min-h-[340px] group transition-all duration-300 hover:shadow-md">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-transform duration-700 group-hover:scale-105"
                viewBox="0 0 340 340"
                fill="none"
              >
                <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 360 40" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 120 C70 170, 150 90, 230 160 C280 190, 320 120, 360 150" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 180 C80 140, 160 220, 240 170 C290 140, 320 210, 360 180" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 240 C60 290, 140 210, 220 280 C270 310, 310 240, 360 270" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 300 C80 260, 160 340, 240 290 C290 260, 320 330, 360 300" stroke="#005F96" strokeWidth="2" />
              </svg>

              <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
                “
              </div>

              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Smart and Reliable<br />Cloud Architecture
              </h3>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                We empower enterprises to innovate faster and scale without boundaries with modern cloud computing infrastructure. From architecting high-performance containerized microservices to managing hybrid and multi-cloud environments across AWS, Azure, and Google Cloud, we handle the full cloud life cycle.
              </p>
              <p>
                Our team of certified cloud architects, DevOps engineers, and SRE specialists deliver robust zero-downtime solutions designed for enterprise security, automatic auto-scaling, and optimal resource utilization. Partner with us to future-proof your digital operations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING-EDGE TECHNOLOGIES SAPPHIRE USE FOR CLOUD COMPUTING SERVICES    */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-slate-900 font-sans border-b border-slate-100 overflow-hidden">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Cutting-Edge Technologies Sapphire Use for Cloud Computing Services
            </h2>
          </div>

          {/* Cards Carousel Container */}
          <div className="relative">
            <div
              ref={cuttingEdgeSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1 select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cuttingEdgeCloudTechCards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-[290px] sm:w-[330px] lg:w-[360px] shrink-0 bg-[#EAF5FB] rounded-[16px] p-6 sm:p-8 flex flex-col justify-start text-left border border-sky-100/70 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-5 flex items-center">
                    {card.icon}
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0F172A] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-[1.7] font-normal">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows centered below */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => {
                  if (cuttingEdgeSliderRef.current) {
                    cuttingEdgeSliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#005F96] hover:border-[#005F96] transition-all shadow-xs cursor-pointer"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  if (cuttingEdgeSliderRef.current) {
                    cuttingEdgeSliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#005F96] hover:border-[#005F96] transition-all shadow-xs cursor-pointer"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
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
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Cloud Computing & DevOps" />

      {/* ========================================================================= */}
      {/* 12. ABOUT US STATS (8-CARD GRID)                                          */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 13. EXPLORE THE TRANSFORMATIVE IMPACT OF CLOUD COMPUTING                  */}
      {/* ========================================================================= */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Cloud Computing On Your Business Success" />

      {/* ========================================================================= */}
      {/* 14. THE EXPERTISE OF OUR SERVICES (6-CARD BLUE BANNER)                    */}
      {/* ========================================================================= */}
      <MobileAppExpertiseServices />

      {/* ========================================================================= */}
      {/* 15. SECTORS THRIVING THROUGH FIREVY BESPOKE CLOUD SERVICES                */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy.co’s Bespoke Cloud Computing Services" />

      {/* ========================================================================= */}
      {/* 16. SUCCESS STORIES PORTFOLIO & METRICS                                   */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 17. TECHNOLOGY STACK PROFICIENTLY USED                                    */}
      {/* ========================================================================= */}
      <MobileAppProficientTechStackSection />

      {/* ========================================================================= */}
      {/* 18. CLOUD COMPUTING IN 2025: TRENDS & STRATEGIES SHOWCASE (VIDEO)         */}
      {/* ========================================================================= */}
      <CloudComputingTrendsShowcase />

      {/* ========================================================================= */}
      {/* 19. OUR EXPERTISE IN CLOUD SERVICES                                       */}
      {/* ========================================================================= */}
      <OurMobileAppExpertiseServices />

      {/* ========================================================================= */}
      {/* 20. PROUD AWARDS & RECOGNITION BANNER                                     */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 21. BENEFITS OF THE BEST CLOUD COMPUTING COMPANY                          */}
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
        subtitle="Our agile cloud computing life cycle from discovery to multi-cloud deployment and 24/7 monitoring."
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
          title="Have Cloud Computing Challenge To Address ?"
          subtitle="Get access to top Cloud & DevOps Engineers to transform your infrastructure into a robust ecosystem."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default CloudComputingService;
