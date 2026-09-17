import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import AppDevelopmentRecentBlogsSection from './AppDevelopmentRecentBlogsSection';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import { ArrowRight } from 'lucide-react';

export const DigitalMarketingService = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // 1. Key Benefits of Digital Marketing Services (6 cards)
  const digitalMarketingBenefits = [
    {
      title: 'Increased Online Visibility',
      desc: 'Customized, integrated digital marketing plans continuously improve search rankings, amplify brand awareness, and help businesses boost web traffic and customer acquisition.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <svg className="w-6 h-6 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      title: 'Enhanced Brand Recognition',
      desc: 'Develop deep trust with your audience via tailored omnichannel messaging across search and social channels, elevating customer retention and brand equity.',
      bg: 'bg-[#DCFCE7]',
      icon: (
        <svg className="w-6 h-6 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      )
    },
    {
      title: 'Cost Effectiveness',
      desc: 'Cost-effective performance marketing tactics optimize your ad spend, eliminate budget wastage, and generate high-intent inbound leads with superior ROI over traditional media.',
      bg: 'bg-[#FFEDD5]',
      icon: (
        <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Drives Targeted Traffic',
      desc: 'Harness hyper-segmented PPC, programmatic display, and organic search strategies to target in-market buyers, ensuring a consistent stream of sales-qualified conversions.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <svg className="w-6 h-6 text-[#CA8A04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      title: 'Increased Marketing ROI',
      desc: 'Continuous conversion rate optimization (CRO), A/B testing, and full-funnel remarketing maximize lifetime customer value and dramatically lower customer acquisition cost (CAC).',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <svg className="w-6 h-6 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      )
    },
    {
      title: 'Easily Measurable & Transparent',
      desc: 'Real-time BI dashboards, multi-touch attribution, and Google Analytics 4 tracking give you granular insights into every dollar spent and every conversion gained.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" x2="18" y1="20" y2="10" />
          <line x1="12" x2="12" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="14" />
        </svg>
      )
    }
  ];

  // 2. FAQ List tailored specifically for Digital Marketing Services
  const digitalMarketingFaqs = [
    {
      id: 1,
      question: '1. What is Digital Marketing?',
      answer: 'To promote goods, services, and brands, digital marketers use search engines, social media, email, and websites. As a Top Digital Marketing Agency, our strategies include SEO, content marketing, social media marketing, email marketing, and online advertising. These strategies try to engage a target audience. Online and other digital channels allow firms to reach new clients, develop brand recognition, and boost revenue.'
    },
    {
      id: 2,
      question: '2. How Digital Marketing Can Grow Your Business?',
      answer: 'By enhancing online exposure, targeting advertising, cost-effectiveness, quantifiable outcomes, and client interaction, digital marketing may boost your company. By optimizing your website and content for search engines, prospective buyers may discover you more easily. Targeting demographics ensures your adverts reach the right audience. Digital marketing has a larger ROI than conventional techniques because it is cheaper. Data-driven campaign modifications are possible using Google Analytics and social media analytics. Direct engagement with clients via social media and email marketing builds loyalty.'
    },
    {
      id: 3,
      question: '3. Why Choose Firevy.co for Digital Marketing Services in USA?',
      answer: 'Due to its skilled staff, unique tactics, established track record, clear reporting, complete services, and client-centric approach, Firevy.co is a premier digital marketing firm. We use competent digital marketers to oversee your campaigns. We customize digital marketing strategies for your company and audience. We produce results with our effective campaigns and delighted customers. You can track your marketing success with our frequent, thorough campaign reports. All your digital marketing demands are met by our services, from SEO to social media marketing. To integrate our tactics with your vision, we stress knowing your company and open communication.'
    },
    {
      id: 4,
      question: '4. What makes Firevy.co a top Digital Marketing Services provider in USA?',
      answer: 'Firevy.co stands out as a leading Digital Marketing Services provider in USA by delivering customized SEO, PPC, social media, and content marketing strategies tailored to each business’s goals.'
    },
    {
      id: 5,
      question: '5. Which Digital Marketing Services do you offer in USA?',
      answer: 'We provide end-to-end Digital Marketing Services in USA, including SEO, SEM, PPC, Social Media Marketing, Content Marketing, Email Marketing, and Conversion Rate Optimization.'
    },
    {
      id: 6,
      question: '6. Why should businesses in USA invest in Digital Marketing Services?',
      answer: 'Businesses benefit from Digital Marketing Services by increasing online visibility, attracting qualified leads, improving brand awareness, and maximizing ROI with data-driven strategies.'
    },
    {
      id: 7,
      question: '7. Do your Digital Marketing Services in USA work for small businesses and startups?',
      answer: 'Yes, our services are tailored for all business sizes. We help startups, SMEs, and enterprises grow online by offering scalable and affordable digital marketing solutions.'
    },
    {
      id: 8,
      question: '8. How do you ensure results from Digital Marketing campaigns in USA?',
      answer: 'We focus on performance-driven campaigns using analytics, AI-powered insights, and proven strategies to deliver measurable results such as traffic growth, lead generation, and higher conversions.'
    },
    {
      id: 9,
      question: '9. What industries do you serve with your Digital Marketing Services in USA?',
      answer: 'We serve a wide range of industries including healthcare, e-commerce, real estate, education, IT, and professional services with tailored digital marketing strategies.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Top Digital Marketing Services in USA | Best Digital Marketing Agency in USA | Firevy.co"
        description="Looking for top-notch digital marketing services in USA? Enhance your online presence, drive traffic, and increase conversions with our expert strategies. Boost your brand's visibility today."
        keywords="digital marketing services, digital marketing company usa, seo agency, ppc marketing, performance marketing, social media marketing, content marketing"
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-14 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[41px] leading-[1.2]"
              >
                #1 Digital Marketing Services in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Digital marketing is a type of marketing where digital platforms are used to connect with potential customers. AI-powered digital marketing company to increase leads and sales and promoting a purchase is the ultimate purpose of digital marketing for a buyer or customer. Methods like email, social media, and web-based advertising are used to connect with potential customers and increase brand visibility online. Contact us now to know how to achieve success through our digital marketing services.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#005F96] text-white font-bold text-sm sm:text-base hover:bg-[#004A75] transition-all shadow-md hover:shadow-lg transform active:scale-95 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Hero Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[580px] flex justify-center">
                <img
                  src="/images/digital_marketing_usa/1.svg"
                  alt="#1 Digital Marketing Services in USA"
                  className="w-full h-auto object-contain max-h-[380px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGO MARQUEE */}
      {/* ========================================================================= */}
      <div className="bg-white py-6 border-b border-slate-200/80">
        <Container>
          <BrandLogoMarquee />
        </Container>
      </div>

      {/* ========================================================================= */}
      {/* 2. GET 360-DEGREE ECOMMERCE DIGITAL MARKETING SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/digital_marketing_usa/2.svg"
                  alt="Get 360-Degree Ecommerce Digital Marketing Services"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Get 360-Degree Ecommerce <br />
                Digital Marketing <br />
                Services
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Best digital marketing agency in USA for business growth provide 360-degree digital marketing services to help you put your company online and enhance your online visibility. We increase lead creation and business with a high customer acquisition rate and quality and focused lead creation. As an affordable digital marketing company, we use keyword research, competitive analysis, sponsored listings, and other search engine services to increase website traffic. Construct pay-per-click (PPC) search engine advertising campaigns to target a particular audience seeking products or services. Our Full-Service Digital Marketing Agency helps you reach new customers and improve visibility.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. HIRE CUSTOM DIGITAL MARKETING SOLUTIONS FOR BEST RESULTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Hire Custom Digital <br />
                Marketing Solutions <br />
                for Best Results
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our digital marketing company in USA can assist in increasing organic reach and organic website traffic, which fosters active consumer interaction. To market their goods and services and establish a more direct line of communication with their customers, our clients use websites, Facebook, Instagram, Snapchat, LinkedIn, Twitter, and other social media platforms, along with social media app development services.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our knowledgeable team of marketers identifies the interests of our target audience and creates affordable digital marketing services in USA. Looking for digital marketing experts in USA, our team of knowledgeable digital marketers use cutting-edge strategies to keep your brand in the good graces of your consumers.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/digital_marketing_usa/3.svg"
                  alt="Hire Custom Digital Marketing Solutions for Best Results"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP-RATED BANNER */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. DIGITAL MARKETING AGENCY FOR GUARANTEED RESULTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Digital Marketing Agency for Guaranteed Results
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[12px] p-8 sm:p-9 flex flex-col justify-start relative shadow-xs border border-sky-100/80 min-h-[300px]">
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20 60 Q 60 120, 140 40 T 300 80 T 450 30" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 120 Q 80 180, 160 100 T 320 140 T 450 90" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 180 Q 100 240, 180 160 T 340 200 T 450 150" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 240 Q 120 300, 200 220 T 360 260 T 450 210" fill="none" stroke="#005F96" strokeWidth="1" />
              </svg>

              <div className="hidden lg:block absolute -right-3 top-12 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#F0F8FC] z-10" />

              <div className="w-12 h-10 mb-4 text-[#005F96]">
                <svg className="w-full h-full fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
                “Customer Satisfaction Is Our Ultimate Goal and that Makes us Best”
              </h3>
            </div>

            {/* Right Detailed Copy */}
            <div className="lg:col-span-8 space-y-5 text-left text-slate-600 leading-relaxed font-normal text-sm sm:text-base">
              <p>
                As a Best Performance Marketing Agency, we have many satisfied customers. We put much effort into maintaining an increasing clientele because we think that happy clients are our most significant asset. We are one of the select few digital marketing firms that guarantee adjustments to your internet visibility. For businesses of all sizes, from startups to multinationals, our digital marketing expert provides scalable and excellent digital marketing services.
              </p>
              <p>
                From website design and development to search engine marketing and online brand reputation management, we are the top digital marketing agency that provides top-notch services. We have competent and diligent teams for digital transformation services. As a leading digital marketing agency, we take care of almost all client-related matters, including social media, PPC, and SEO.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid />

      {/* ========================================================================= */}
      {/* 7. SUCCESS STORIES (MATCHING SECOND IMAGE) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#DDF1FB] text-center font-sans border-t border-cyan-100">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-[34px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Success Stories
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-slate-700 leading-relaxed font-sans">
              Know Sapphire journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Card 1: Healthcare Mobile App Development Company */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#005F96] text-white text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/adani.webp"
                  alt="Healthcare Mobile App Development Company"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Healthcare Mobile App Development Company
              </h3>
            </div>

            {/* Card 2: Federal Forecasting App */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/federal_forecasting_app.jpg"
                  alt="Federal Forecasting App"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Federal Forecasting App
              </h3>
            </div>

            {/* Card 3: Stress Management App */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/stress_management_app.jpg"
                  alt="Stress Management App"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Stress Management App
              </h3>
            </div>
          </div>

          {/* Centered "View All Portfolio" Button */}
          <div className="mb-14">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-9 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md font-sans"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Colorful Highlight Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Box 1: Purple (23+ Years Experience) */}
            <div className="bg-[#D8C7FF] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                23+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Years Experience
              </div>
            </div>

            {/* Box 2: Mint Green (250+ 5-Star Clutch Reviews) */}
            <div className="bg-[#A3E8D2] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                250+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Box 3: Peach/Coral (2800+ Satisfied Clients) */}
            <div className="bg-[#FFBCB0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                2800+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Satisfied Clients
              </div>
            </div>

            {/* Box 4: Deep Blue (Want to start Projects -> Get Estimation) */}
            <div className="bg-[#005E82] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-md">
              <div className="text-[18px] sm:text-[19px] font-[800] text-white tracking-tight leading-tight mb-3 font-sans">
                Want to start Projects
              </div>
              <Link
                to="/contact-us"
                className="bg-white text-[#005E82] hover:bg-slate-100 px-6 py-2 rounded-[6px] font-[800] text-[13.5px] transition-all shadow-sm font-sans"
              >
                Get Estimation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. SEO SERVICES VIDEO SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Soft decorative background circles */}
        <div className="absolute top-12 -left-20 w-72 h-72 rounded-full bg-[#E0F2FE]/70 blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-6 -right-20 w-72 h-72 rounded-full bg-[#FFE4E6]/60 blur-3xl pointer-events-none -z-10" />

        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight">
              SEO Services
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative flex justify-center">
            {/* The Video Card Container */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative group cursor-pointer w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-slate-100 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,95,150,0.22)] hover:-translate-y-1"
            >
              <img
                src="/images/seo_services_firevy.png"
                alt="SEO Services - The Power of SEO - Firevy.co"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#005F96]/90 group-hover:bg-[#005F96] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-active:scale-95 pl-1 backdrop-blur-xs">
                  <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-current" viewBox="0 0 24 24">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Video Modal Popup */}
        {isVideoModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 bg-slate-800 text-white border-b border-slate-700">
                <h3 className="font-bold text-base sm:text-lg">SEO Services - The Power of SEO | Firevy.co</h3>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center font-bold text-sm cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  src="https://www.youtube.com/embed/SDT4Amkqj_A?autoplay=1"
                  title="SEO Services - The Power of SEO | Firevy.co"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 9. KEY BENEFITS OF DIGITAL MARKETING SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Key Benefits of Digital Marketing Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To guarantee that every one of our digital marketing initiatives yields successful outcomes, our digital marketing agency employs a methodical, data-driven technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalMarketingBenefits.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all text-left space-y-3"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bg}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#005F96] text-white font-bold text-sm sm:text-base hover:bg-[#004A75] transition-all shadow-md hover:shadow-lg"
            >
              Connect Now
            </a>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. HIRING MODELS (FIXED PRICE, TIME & MATERIAL, DEDICATED TEAM, BUCKETS) */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 10. INNOVATIVE VIDEO SLIDER */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 11. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 12. VIDEO TESTIMONIALS STORY */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 13. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 14. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 15. TECHNOLOGY STACK GRID */}
      {/* ========================================================================= */}
      <SapphireTechStackGrid />

      {/* ========================================================================= */}
      {/* 16. DIGITAL TRANSFORMATION SLIDER (CASE STUDIES) */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 17. TRUST RECOGNITION BANNER */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 18. FAQ SECTION */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to your queries and provide transparent answers. Feel free to contact us for any additional consultation."
        faqs={digitalMarketingFaqs}
      />

      {/* ========================================================================= */}
      {/* 19. RECENT BLOGS SECTION */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 20. WHAT SETS US APART (CONSULTATION FORM) */}
      {/* ========================================================================= */}
      <div id="consultation-form">
        <WhatSetsUsApartSection />
      </div>

      {/* ========================================================================= */}
      {/* 21. NEWSLETTER SUBSCRIBE BANNER */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default DigitalMarketingService;
