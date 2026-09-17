import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import DataCleansingCuttingEdgeTechSection from './DataCleansingCuttingEdgeTechSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import DataCleansingExpertiseServices from './DataCleansingExpertiseServices';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import {
  Database,
  Filter,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  Sparkles,
  BarChart3,
  RefreshCw,
  Cpu,
  FileCheck2,
  Lock,
  Workflow,
  Server,
  Award
} from 'lucide-react';

export const DataCleansingService = () => {
  // 6 Benefits Cards Grid (Exact 1:1 Match to Reference Screenshot)
  const dataCleansingBenefits = [
    {
      title: 'Seasoned data professionals',
      desc: 'Data processing, analytics, and cleansing techniques are among the subjects our engineers are well familiar with. Working both with organized and unstructured data, they guarantee great dependability and accuracy.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="7" width="32" height="13" rx="2" />
          <line x1="13" y1="13.5" x2="15" y2="13.5" strokeWidth="2.5" />
          <line x1="18" y1="13.5" x2="20" y2="13.5" strokeWidth="2.5" />
          <line x1="23" y1="13.5" x2="25" y2="13.5" strokeWidth="2.5" />
          <circle cx="34" cy="13.5" r="1.3" fill="#0084D1" />
          <circle cx="30" cy="13.5" r="1.3" fill="#0084D1" />
          
          <rect x="8" y="25" width="32" height="13" rx="2" />
          <line x1="13" y1="31.5" x2="15" y2="31.5" strokeWidth="2.5" />
          <line x1="18" y1="31.5" x2="20" y2="31.5" strokeWidth="2.5" />
          <line x1="23" y1="31.5" x2="25" y2="31.5" strokeWidth="2.5" />
          <circle cx="34" cy="31.5" r="1.3" fill="#0084D1" />
          <circle cx="30" cy="31.5" r="1.3" fill="#0084D1" />

          <path d="M14 20v5M34 20v5" />
        </svg>
      )
    },
    {
      title: 'Mastery of Leading Tools & Technologies',
      desc: 'To execute exact and effective data cleaning activities, our team makes use of modern technologies like Python, SQL, Pandas, OpenRefine, and AI-driven automation software.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 16 L38 16 L28 28 L28 38 L20 38 L20 28 Z" />
          <line x1="15" y1="7" x2="15" y2="12" />
          <circle cx="15" cy="6" r="1.8" fill="#0084D1" />
          <line x1="24" y1="4" x2="24" y2="12" />
          <circle cx="24" cy="3" r="1.8" fill="#0084D1" />
          <line x1="33" y1="7" x2="33" y2="12" />
          <circle cx="33" cy="6" r="1.8" fill="#0084D1" />
          <circle cx="24" cy="43" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Agile and group approach',
      desc: 'Working directly with your team, we use an agile approach to identify your data difficulties and provide tailored solutions fit for your company goals.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 7 A 17 17 0 1 1 9 24" />
          <polyline points="5 14 9 24 19 20" />
          <circle cx="24" cy="24" r="5" />
          <path d="M24 16v2M24 30v2M16 24h2M30 24h2M18.5 18.5l1.4 1.4M28.1 28.1l1.4 1.4M18.5 29.5l1.4-1.4M28.1 19.9l1.4-1.4" />
        </svg>
      )
    },
    {
      title: 'Testing for Quality Assurance',
      desc: 'To guarantee accuracy and completeness every data cleaning job goes through thorough testing and validation. Quality control techniques maintain high data integrity.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="9" width="26" height="32" rx="3" />
          <path d="M18 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M16 19l2 2 4-4" />
          <line x1="25" y1="19" x2="31" y2="19" />
          <path d="M16 27l2 2 4-4" />
          <line x1="25" y1="27" x2="31" y2="27" />
          <path d="M16 35l2 2 4-4" />
          <line x1="25" y1="35" x2="31" y2="35" />
          <circle cx="37" cy="11" r="3" />
          <path d="M37 6v2M37 14v2M32 11h2M40 11h2" />
        </svg>
      )
    },
    {
      title: 'Future-ready, scalable solutions',
      desc: 'Our developers provide scalable solutions meant to expand with your company. Our staff guarantees seamless implementation for batch or real-time data streaming.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="8" width="12" height="12" rx="2" />
          <circle cx="24" cy="14" r="2" fill="#0084D1" />
          <line x1="24" y1="4" x2="24" y2="8" />
          <line x1="14" y1="14" x2="18" y2="14" />
          <line x1="30" y1="14" x2="34" y2="14" />
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="28" y1="4" x2="28" y2="8" />
          <path d="M9 34c4-2 9-2 13-2h4a6 6 0 0 1 6 6v3H7v-3a4 4 0 0 1 2-4z" />
          <path d="M22 32l3-5a2 2 0 0 1 3.5 2l-2 3" />
        </svg>
      )
    },
    {
      title: 'Constant Support & Repair',
      desc: 'We provide ongoing assistance for Data Cleansing Services to maintain the current and optimal state of your data. Available for troubleshooting, improvement, and routine audits.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 26V20a10 10 0 0 1 20 0v6" />
          <rect x="11" y="24" width="6" height="10" rx="2" />
          <rect x="31" y="24" width="6" height="10" rx="2" />
          <path d="M34 32v2a4 4 0 0 1-4 4h-6" />
          <circle cx="21" cy="38" r="2" fill="#0084D1" />
          <path d="M21 14l3-3a2 2 0 0 1 3 3l-3 3" />
        </svg>
      )
    }
  ];

  // Success Stories (Exact 1:1 Match to Reference Screenshot)
  const dataCleansingSuccessCards = [
    {
      id: 1,
      title: 'Enterprise Microservices & Cloud-Native Data Cleansing Pipeline',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'Automated Real-Time File Sharing Application',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Data.Analytics Website & Enterprise Intelligence Platform',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // 9 Complete FAQs (Firevy.co Branded)
  const cleansingFaqs = [
    {
      question: '1. What is data cleaning, and why is it important?',
      answer: 'Data cleaning is the method of spotting and fixing data mistakes, discrepancies, redundancies, and errors. It guarantees organizations have consistent, precise, and dependable data for improved operational effectiveness, analytics, and business decision-making.'
    },
    {
      question: '2. How do your data cleaning services work?',
      answer: 'Our services include raw data analysis, problem identification, automatic and human cleaning applications, result validation, and data integration into your systems. We guarantee high accuracy by using sophisticated instruments and verified industry best procedures.'
    },
    {
      question: '3. Is automatic data cleaning possible?',
      answer: 'Indeed, for massive datasets we use artificial intelligence and machine learning-driven automation. To get the best degree of accuracy on complex edge cases, however, we mix automation with expert manual review.'
    },
    {
      question: '4. Do you provide data cleaning services tailored to our sector?',
      answer: 'Indeed, we serve several sectors including retail, finance, eCommerce, healthcare, and SaaS, guaranteeing industry standards and regulatory compliance.'
    },
    {
      question: '5. Over the cleaning procedure, how safe is my data?',
      answer: 'Following strict compliance rules like GDPR and HIPAA helps us prioritize data protection. Every piece of data is handled inside a secure environment under access restrictions and end-to-end encryption.'
    },
    {
      question: '6. How often should companies undertake data cleaning?',
      answer: 'Maintaining accuracy calls for regular data cleaning. We provide one-time deep cleans, monthly rolling cleans, or real-time streaming data cleaning solutions based on your company’s demands.'
    },
    {
      question: '7. Why should businesses choose Firevy.co for data cleansing services?',
      answer: 'With deep engineering experience and 500+ successful data projects, Firevy.co is trusted by global enterprises to eliminate data corruption, improve quality, and accelerate analytics intelligence.'
    },
    {
      question: '8. What types of data cleansing services does Firevy.co offer?',
      answer: 'We offer data deduplication, standardization, validation, enrichment, formatting, normalization, and error correction for structured databases and unstructured document repositories.'
    },
    {
      question: '9. Does Firevy.co offer real-time or scheduled data cleansing services?',
      answer: 'Yes, we provide both real-time data cleansing for continuous data streams and scheduled batch cleansing for periodic database updates.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white">
      {/* SEO Metadata */}
      <SEO
        title="Data Cleansing Services | Database Cleansing Services | Firevy.co"
        description="Transform messy data into valuable insights! Our professional Data Cleansing Services and Database Cleansing Services eliminate redundancies & errors, improving business intelligence."
        keywords="Data Cleansing Services, Database Cleansing Services, Data Scrubbing, CRM Data Cleaning, Data Deduplication, Firevy.co"
        url="https://firevy.co/services/data-cleansing-services"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 Match to Reference Screenshot)                      */}
      {/* ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Heading + Tagline + Metrics + CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.14] font-sans"
                style={{ fontSize: 'clamp(30px, 4vw, 40px)' }}
              >
                #1 Data Cleansing Services Worldwide
              </h1>

              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                We are equipped to help you discover valuable insights with data-cleaning services. Transform messy, redundant records into pristine, structured databases that power enterprise analytics and revenue growth.
              </p>

              {/* 4 Stats Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">500+</div>
                  <div className="text-xs text-slate-600 font-medium">Datasets Cleaned</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">Fortune 500</div>
                  <div className="text-xs text-slate-600 font-medium">Clients Served</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">99.9%</div>
                  <div className="text-xs text-slate-600 font-medium">Data Accuracy</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">5-Star</div>
                  <div className="text-xs text-slate-600 font-medium">Clutch Rating</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Custom Data Cleansing Hero Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[440px] mx-auto flex items-center justify-center">
                <img
                  src="/images/data_cleansing_hero.jpg"
                  alt="Best Data Cleansing Services Company"
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
      {/* 3. SAFEST BEST DATA CLEANSING COMPANY (Image Left + Narrative Right)     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Database Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/data_cleansing_pipeline.jpg"
                  alt="Automated Data Cleansing Pipelines"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for the Safest Best Data cleansing Company
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Companies get enormous volumes of data from many sources in the digital age. Raw data may, however, be rife with mistakes, inconsistencies, and missing numbers, which would cause erroneous conclusions and bad decisions. Refining and organizing data depend much on database cleaning services, which also guarantee that companies run with accurate, high-quality information.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By spotting and fixing duplicate entries, formatting variances, and incomplete information, our specialist data cleansing solutions provider enable companies to keep correct and consistent databases.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. BRIEF ABOUT DATABASE CLEANSING SERVICES (Content Left + Image Right)   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] text-slate-900 font-sans text-left overflow-hidden border-y border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Brief About Database Cleansing Services
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By means of a well-organized data cleaning software, companies can increase client experiences, boost productivity, and make educated choices based on exact data. Professional Database Cleansing Services guarantee operational excellence and long-term data integrity by means of investments.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Acquire a comprehensive understanding of all consumer interactions and identify accounts that are truly prepared to make a purchase. We use a distinctive six-dimensional framework that enables you to identify and target your ideal consumer profiles. As a part of our CRM Data Cleansing Services, we help you clean CRM data for better customer interactions and sales conversion.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <span>Connect With An Expert</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: CRM Data Cleansing Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/data_cleansing_crm.jpg"
                  alt="CRM Data Cleansing & Optimization"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. AWARDS & TRUST RECOGNITION CLUTCH BANNER                               */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* ========================================================================= */}
      {/* 6. 100% CUSTOMIZABLE DATA CLEANING SERVICES (Quote Card + Narrative)      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading Matching Reference Screenshot */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Data Cleaning Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Soft Blue Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-5 bg-[#EFF7FE] border border-[#BAE6FD]/90 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative shadow-xs min-h-[320px] group transition-all duration-300 hover:shadow-md">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-transform duration-700 group-hover:scale-105"
                viewBox="0 0 340 340"
                fill="none"
              >
                <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 360 40" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 180 C80 140, 160 220, 240 170 C290 140, 320 210, 360 180" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 300 C80 260, 160 340, 240 290 C290 260, 320 330, 360 300" stroke="#005F96" strokeWidth="2" />
              </svg>

              {/* Speech bubble pointer arrow pointing right towards narrative */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EFF7FE] z-20" />
              <div className="hidden lg:block absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[14px] border-l-[#BAE6FD] z-10" />

              <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
                “
              </div>

              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Clean and<br />accurate data<br />guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative (Exact 1:1 Match to Screenshot) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Making educated judgments in the data-driven world of today depends on reliable and clean data for companies. Raw data may, however, also include mistakes, inconsistencies, duplication, and missing values that cause inaccurate conclusions and ineffective analysis. As a Data Cleaning Company, we offer customizable data cleaning services then come in really handy.
              </p>
              <p>
                Our 100% personalized Data Cleansing Solutions are meant for your particular company requirements. Our services guarantee that data is clean, orderly, and ready for analysis, whether your needs are for standardizing data, removing duplicates, fixing formatting problems, or filling in missing information. Our knowledgeable staff offers solutions that strengthen data integrity, advance decision-making, and maximize company performance to companies in many different sectors.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION (MATCHING REFERENCE SCREENSHOT)      */}
      {/* ========================================================================= */}
      <DataCleansingCuttingEdgeTechSection companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 8. OUR PREMIUM SERVICES (MATCHING REFERENCE SCREENSHOT)                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES (MATCHING REFERENCE SCREENSHOT)                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={dataCleansingSuccessCards}
        subtitle="Know Firevy.co journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER (PROUD TO HAVE PICKED THESE UP ALONG THE WAY)     */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR DATA CLEANING SERVICES (EXACT 1:1 MATCH TO IMAGE 2)   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Data Cleansing Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Years of data management, cleansing, and transformation have made our committed data cleaning services developers very talented individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {dataCleansingBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100/90 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                  {benefit.icon}
                </div>
                <h3 className="text-[17px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3 leading-snug tracking-tight font-sans">
                  {benefit.title}
                </h3>
                <p className="text-[#475569] text-[13px] sm:text-[13.8px] leading-[1.68] font-normal font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. OUR EXPERTISE IN DEDICATED DATA CLEANING SERVICES (EXACT MATCH)       */}
      {/* ========================================================================= */}
      <DataCleansingExpertiseServices />

      {/* ========================================================================= */}
      {/* 13. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 12. INNOVATIVE VIDEO SOLUTIONS SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 13. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Data Cleansing Process We Follow"
        subtitle="Our systematic data pipeline from initial auditing and profiling to automated deduplication, normalization, and quality validation."
      />

      {/* ========================================================================= */}
      {/* 14. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 15. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 16. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 17. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 19. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 20. FREQUENTLY ASKED QUESTIONS (Exact 9 Reference FAQs)                   */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below."
        faqs={cleansingFaqs}
        companyName="Firevy.co"
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 23. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Data Cleansing Services Challenge To Address ?"
          subtitle="Get access to top Data Cleansing & Database Specialists at Firevy.co to transform your raw data into accurate, reliable insights."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default DataCleansingService;
