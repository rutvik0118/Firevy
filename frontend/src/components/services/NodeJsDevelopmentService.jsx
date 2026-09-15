import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import ProudAwardsBanner from './ProudAwardsBanner';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import NodeJsRecentBlogsSection from './NodeJsRecentBlogsSection';
import AndroidWhatSetsUsApartSection from './AndroidWhatSetsUsApartSection';
import AndroidChallengeCtaBanner from './AndroidChallengeCtaBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import JavaSuccessStoriesSection from './JavaSuccessStoriesSection';
import PioneeringTechnologiesSection from './PioneeringTechnologiesSection';
import NodeJsVideoShowcaseSection from './NodeJsVideoShowcaseSection';
import SapphireTechExpertiseSection from './SapphireTechExpertiseSection';
import OurNodeJsServicesSliderSection from './OurNodeJsServicesSliderSection';
import NodeJsBenefitsSection from './NodeJsBenefitsSection';
import NodeJsComparativeAnalysisSection from './NodeJsComparativeAnalysisSection';
import NodeJsWhatOurClientsSaySection from './NodeJsWhatOurClientsSaySection';
import NodeJsExceptionalProcessSection from './NodeJsExceptionalProcessSection';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import {
  Smartphone,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Tv,
  Tablet,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Check,
  Bot,
  Sparkles,
  Search,
  Globe,
  Lock,
  Boxes,
  Brain,
  Cloud,
  Radio,
  TrendingUp,
  ThumbsUp,
  Award,
  BarChart3,
  Users
} from 'lucide-react';

export const NodeJsDevelopmentService = () => {
  const nodeFaqs = [
    {
      q: '1. Why choose Node.js for backend and enterprise application development?',
      a: 'Node.js offers non-blocking event-driven I/O, ultra-fast Google V8 execution, full-stack JavaScript synergy, and a massive NPM ecosystem that allows teams to scale to millions of concurrent requests seamlessly.'
    },
    {
      q: '2. What is the typical development timeline for a custom Node.js web or microservice project?',
      a: 'A focused MVP or microservice backend typically takes 4 to 8 weeks. Comprehensive enterprise architectures with legacy migration, WebSocket streams, and multi-cloud containerization span 10 to 20 weeks.'
    },
    {
      q: '3. Can Firevy assist in migrating legacy monoliths to modern Node.js & TypeScript microservices?',
      a: 'Yes, Firevy specializes in modernizing legacy backend monoliths into scalable, cloud-native microservices running on Node.js 20+ LTS, NestJS, TypeScript, and Docker containerization.'
    },
    {
      q: '4. How do you protect intellectual property and ensure code security?',
      a: 'We sign comprehensive Non-Disclosure Agreements (NDAs) before discovery. 100% of the source code and IP rights belong to you upon milestone delivery, backed by SonarQube static audits and OWASP compliance.'
    },
    {
      q: '5. What hiring engagement models are available for Node.js developers?',
      a: 'We provide versatile engagement models tailored to your roadmap: Dedicated Node.js Squads (Monthly Retainer), Time & Material (T&M) Sprints, and Fixed-Price Project Contracts with strict enterprise SLAs.'
    },
    {
      q: '6. What post-launch support and SLA maintenance do you provide?',
      a: 'Our maintenance services include 24/7/365 infrastructure observability, automated security patching, performance profiling, memory leak monitoring, database query optimization, and rapid incident response.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="No.1 Node.js Development Company in USA | Hire Node.js Developers"
        description="Hire expert Node.js developers from Firevy. We build enterprise-grade, event-driven web applications, microservices, and high-concurrency real-time APIs."
      />

      {/* =========================================================================
          HERO BANNER (EXACT MATCH TO NODE.JS SCREENSHOT WITH REAL LAPTOP IMAGE)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F1F7FA] text-slate-900 py-12 sm:py-16 lg:py-20 border-b border-sky-100/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle, 4 Metric Stats & 2 Action Buttons */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-[900] tracking-tight text-[#0F172A] leading-[1.15]">
                Node JS Development<br />Company
              </h1>

              <p className="text-sm sm:text-base md:text-[15.5px] text-[#475569] leading-relaxed max-w-2xl font-normal">
                As a leading Node JS development company with good review, Firevy creates fast, scalable and real time applications. Hire our dedicated developers for Node JS web development needs.
              </p>

              {/* 4 Stats Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 pb-2">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[32px] font-[900] text-[#005F96] tracking-tight">80+</div>
                  <div className="text-xs sm:text-[13px] text-[#334155] font-semibold leading-snug mt-1">
                    Web<br className="hidden sm:inline" /> Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[32px] font-[900] text-[#005F96] tracking-tight">20+</div>
                  <div className="text-xs sm:text-[13px] text-[#334155] font-semibold leading-snug mt-1">
                    Fortunes 500<br className="hidden sm:inline" /> Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[32px] font-[900] text-[#005F96] tracking-tight">600+</div>
                  <div className="text-xs sm:text-[13px] text-[#334155] font-semibold leading-snug mt-1">
                    Project Completed in<br className="hidden sm:inline" /> Web Technology
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[32px] font-[900] text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] text-[#334155] font-semibold leading-snug mt-1">
                    5-Star Clutch<br className="hidden sm:inline" /> Reviews
                  </div>
                </div>
              </div>

              {/* 2 Dark Blue Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-[6px] bg-[#004D7A] hover:bg-[#003B5C] text-white font-[700] text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-[6px] bg-[#004D7A] hover:bg-[#003B5C] text-white font-[700] text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg group"
                >
                  <span>Hire Nodejs Developers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Real Laptop Mockup Image (Not a HTML coded component) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[540px] relative flex justify-center items-center">
                <img
                  src="/images/nodejs-hero-laptop.jpg"
                  alt="Node JS Development Company - Enterprise Analytics Dashboard Mockup"
                  className="w-full h-auto object-contain max-h-[420px] mix-blend-multiply transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* =========================================================================
          ACQUIRE NODE JS DEVELOPMENT SERVICES SECTION (STATIC 1:1 MATCH)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Vector Illustration of Developer with Desk & Node.js Monitor */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center select-none">
                <img
                  src="/images/nodejs-acquire-services.jpg"
                  alt="Acquire Node JS Development Services - Developer Working"
                  className="w-full h-auto object-contain max-h-[380px] rounded-2xl"
                />
              </div>
            </div>

            {/* Right Column: Exact Copy & Highlighted Links */}
            <div className="lg:col-span-7 space-y-4 lg:pl-4">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[900] text-[#0F172A] leading-[1.2] tracking-tight">
                Acquire Node JS Development Services
              </h2>

              <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                With dynamic and tailored Node JS development services, you can enhance your online apps and meet your business's specific requirements. Want to work with a <strong className="text-[#005F96] font-bold">top NodeJS development company in USA</strong> for a comprehensive variety of node js mobile app development services? With Highly Experienced Node js Development Company, your digital initiatives will be elevated. Our professionals use Node js's capability to create scalable, high-performance solutions.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          WORLD WIDE TOP RATED CLUTCH AWARDS BAR (EXACT 1:1 WITH HD BADGES)
          ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* =========================================================================
          TAILOR-MADE NODE JS APPLICATION DEVELOPMENT SERVICES (STATIC 1:1 MATCH)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center w-full max-w-5xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Tailor-Made Node Js Application Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[12px] p-8 sm:p-9 flex flex-col justify-start relative shadow-xs border border-sky-100/80 min-h-[300px]">
              {/* Subtle Topographic Background Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20 60 Q 60 120, 140 40 T 300 80 T 450 30" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 120 Q 80 180, 160 100 T 320 140 T 450 90" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 180 Q 100 240, 180 160 T 340 200 T 450 150" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 240 Q 120 300, 200 220 T 360 260 T 450 210" fill="none" stroke="#005F96" strokeWidth="1" />
              </svg>

              {/* Speech Bubble Arrow on Right (Desktop Only) */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              {/* Quote Icon */}
              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              {/* Heading Inside Card */}
              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Delivering A Wide Range Of Node .Js Development Services
              </h3>
            </div>

            {/* Right Column: Paragraph Content (Exact 1:1 Copy) */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                As a Top-Rated Node js Development Company, Firevy is the one-stop destination for building feature-rich, high-performance, and scalable web and mobile applications. With our up-to-date knowledge and advanced skill set in NodeJS development, we are always prepared to create NodeJS server-side applications and backend solutions. Whether you need to migrate your existing backend system to NodeJS or want a powerful Node .js API, we are the Award Winning Node js Development Company that crafts Node js application development services to enable efficiency in both server-side and client-side. <strong className="text-[#005F96] font-bold">Hire NodeJS Developer</strong> team to know our Node js development service and plans for your needs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SAPPHIRE EXCEPTIONAL PROCESS IN CREATING CUTTING-EDGE NODE JS APPLICATIONS
          ========================================================================= */}
      <NodeJsExceptionalProcessSection />

      {/* =========================================================================
          OUR PREMIUM SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* =========================================================================
          MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* =========================================================================
          INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <IndustryFocusedInsightsSection />

      {/* =========================================================================
          EXPLORE THE TRANSFORMATIVE IMPACT OF WEB DEVELOPMENT (EXACT 1:1 MATCH)
          ========================================================================= */}
      <TransformativeImpactSection
        title="Explore The Transformative Impact Of Web Development On Your Business Success"
        cards={[
          {
            bgColor: 'bg-[#D1F2EE]',
            iconBg: 'bg-[#1EB1A8]',
            icon: <TrendingUp className="w-5 h-5 text-white" strokeWidth={2} />,
            title: 'Gather Valuable Customer Insights',
            desc: 'You can interact with your customers using mobile apps, meet them where they are, ask them for ratings or feedback and get real-time analytics to act accordingly.'
          },
          {
            bgColor: 'bg-[#F8D3E3]',
            iconBg: 'bg-[#DE5B8F]',
            icon: <ThumbsUp className="w-5 h-5 text-white" strokeWidth={2} />,
            title: 'Competitive Advantage',
            desc: 'Businesses can make a big competitive edge by using mobile apps. Apps offer the opportunity to optimize processes, significant data insights, and more direct and personalized client connections.'
          },
          {
            bgColor: 'bg-[#FCE2CD]',
            iconBg: 'bg-[#E67E3F]',
            icon: <Smartphone className="w-5 h-5 text-white" strokeWidth={2} />,
            title: 'Innovate and Stay Competitive',
            desc: 'Investigating flutter app development services can be a calculated move for companies looking to take advantage of the benefits of mobile applications to boost client engagement and productivity.'
          },
          {
            bgColor: 'bg-[#D9F5E5]',
            iconBg: 'bg-[#10B981]',
            icon: <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2.2} />,
            title: 'Ensure Security and Compliance',
            desc: 'Ensure Security and Compliance Using mobile apps, businesses can ensure that user data is never inadvertently disclosed to hackers or unscrupulous commercial vendors by employing secure analytics providers & executing advertising in ethical manner.'
          },
          {
            bgColor: 'bg-[#D9F5E5]',
            iconBg: 'bg-[#10B981]',
            icon: <Award className="w-5 h-5 text-white" strokeWidth={2} />,
            title: 'Increased Brand Visibility',
            desc: 'By actively interacting with your audience across many channels, you can use social media platforms to raise brand awareness for your mobile application.'
          },
          {
            bgColor: 'bg-[#D7EDFB]',
            iconBg: 'bg-[#0284C7]',
            icon: <Star className="w-5 h-5 text-white" strokeWidth={2} />,
            title: 'Improve Customer Loyalty and Retention',
            desc: 'Mobile apps aid in customer understanding and the creation of pleasurable shopping experiences. Customers are more loyal when they receive personalized recommendations and early access to promotions.'
          },
          {
            bgColor: 'bg-[#E5DAF6]',
            iconBg: 'bg-[#9867E9]',
            icon: <BarChart3 className="w-5 h-5 text-white" strokeWidth={2} />,
            title: 'Data Collection and Analytics',
            desc: 'App analytics can help you learn more about your employer and make decisions that are appropriate, you can gather information on name, age, gender, location, interests, behavior, etc.'
          },
          {
            bgColor: 'bg-[#FEF3C7]',
            iconBg: 'bg-[#D97706]',
            icon: <Users className="w-5 h-5 text-white" strokeWidth={2} />,
            title: 'Enhanced Customer Engagement',
            desc: 'Mobile application give businesses the ability to give their users a more immersive and engaging experience by giving them a direct and personalized communication channel.'
          }
        ]}
      />

      {/* =========================================================================
          ABOUT US STATS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <AboutUsStats companyName="Sapphire" />

      {/* =========================================================================
          SECTORS THRIVING THROUGH SAPPHIRE'S BESPOKE WEB DEVELOPMENT SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Sapphire’s Bespoke Web Development Services" />

      {/* =========================================================================
          SUCCESS STORIES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <JavaSuccessStoriesSection />

      {/* =========================================================================
          PIONEERING TECHNOLOGIES FUELING SAPPHIRE WEB DEVELOPMENT (EXACT 1:1 MATCH)
          ========================================================================= */}
      <PioneeringTechnologiesSection />

      {/* =========================================================================
          NODE JS DEVELOPMENT SERVICES VIDEO SHOWCASE (EXACT 1:1 MATCH)
          ========================================================================= */}
      <NodeJsVideoShowcaseSection />

      {/* =========================================================================
          THE EXCEPTIONAL TECHNOLOGICAL EXPERTISE OF SAPPHIRE WEB DEVELOPMENT TEAM (EXACT 1:1 MATCH)
          ========================================================================= */}
      <SapphireTechExpertiseSection />

      {/* =========================================================================
          OUR NODE.JS DEVELOPMENT SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <OurNodeJsServicesSliderSection />

      {/* =========================================================================
          PROUD TO HAVE PICKED THESE UP ALONG THE WAY (EXACT 1:1 MATCH)
          ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          NODE.JS BENEFITS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <NodeJsBenefitsSection />

      {/* =========================================================================
          BUSINESS FRIENDLY HIRING MODELS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          COMPARATIVE ANALYSIS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <NodeJsComparativeAnalysisSection />

      {/* =========================================================================
          UNVEILING OUR INNOVATIVE SOLUTION (EXACT 1:1 MATCH)
          ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          PROCESS WE FOLLOW (EXACT 1:1 MATCH)
          ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          OUR STORY, THEIR WORDS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          TRUSTED BY THE WORLD'S LEADING BRANDS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SUCCESS MATRIX (EXACT 1:1 MATCH)
          ========================================================================= */}
      <SuccessMatrix />

      {/* =========================================================================
          WHAT OUR CLIENTS SAY (EXACT 1:1 MATCH)
          ========================================================================= */}
      <NodeJsWhatOurClientsSaySection />

      {/* =========================================================================
          WE HAVE BEEN FEATURED IN (EXACT 1:1 MATCH)
          ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          DIGITAL TRANSFORMATION (CASE STUDIES SLIDER 1:1 MATCH)
          ========================================================================= */}
      <DigitalTransformationSlider />

      {/* Remaining Service Components */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our Node.js enterprise application development services."
        faqs={nodeFaqs}
      />
      <NodeJsRecentBlogsSection />
      <AndroidWhatSetsUsApartSection />
      <AndroidChallengeCtaBanner />
    </div>
  );
};

export default NodeJsDevelopmentService;
