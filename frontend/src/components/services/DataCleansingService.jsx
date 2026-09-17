import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
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
  // 6 Specialized Data Cleansing Capabilities
  const dataCleansingCapabilities = [
    {
      title: 'Modern Data Cleaning Methods',
      desc: 'We effectively clean and arrange your data using cutting-edge technologies like rule-based processing, automation, and machine learning models.',
      icon: <Filter className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Flexible and Scalable Fixes',
      desc: 'Your firm may grow with our data cleaning services. Our solutions can efficiently manage massive volumes of structured and unstructured datasets.',
      icon: <Layers className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Industry-Specific Data Cleansing',
      desc: 'Data architectures and compliance criteria vary throughout sectors. We guarantee data follows industry standards with customized domain cleansing.',
      icon: <Workflow className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Data Scrubbing Services',
      desc: 'We make Data Scrubbing Services effective and easier by automated pipelines; personal developer review guarantees accuracy in mission-critical areas.',
      icon: <FileCheck2 className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Concurrent with Corporate Systems',
      desc: 'Our data cleaning solutions smoothly interact with your CRM, ERP, data warehouses, and BI systems to provide continuous real-time synchronizing.',
      icon: <Server className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Compliance and Data Security',
      desc: 'Our top focus is data security, making sure your private records are safeguarded during the entire cleaning procedure under GDPR & HIPAA standards.',
      icon: <ShieldCheck className="w-8 h-8 text-[#005F96]" />
    }
  ];

  // 6 Benefits Cards Grid
  const dataCleansingBenefits = [
    {
      title: 'Seasoned Data Professionals',
      desc: 'Data processing, analytics, and cleansing techniques are among the subjects our engineers know deeply. Working both with organized and unstructured data, they guarantee great dependability.'
    },
    {
      title: 'Mastery of Leading Tools & Tech',
      desc: 'To execute exact and effective data cleaning activities, our team makes use of modern technologies like Python, SQL, Pandas, OpenRefine, Snowflake, and AI-driven automation.'
    },
    {
      title: 'Agile & Collaborative Approach',
      desc: 'Working directly with your team, we use an agile approach to identify your data difficulties and provide tailored solutions fit for your company goals.'
    },
    {
      title: 'Testing for Quality Assurance',
      desc: 'To guarantee accuracy and completeness, every data cleaning job goes through thorough testing and validation. Quality control techniques maintain high data integrity.'
    },
    {
      title: 'Future-Ready, Scalable Solutions',
      desc: 'Our developers provide scalable solutions meant to expand with your company. We guarantee seamless implementation for batch or real-time data streaming.'
    },
    {
      title: 'Constant Support & Data Audits',
      desc: 'We provide ongoing assistance for Data Cleansing Services to maintain the current and optimal state of your data. Available for troubleshooting, improvement, and routine audits.'
    }
  ];

  // Tech Stack Pills
  const dataTechStack = [
    'Python', 'Pandas & NumPy', 'SQL Server', 'PostgreSQL', 'MongoDB',
    'OpenRefine', 'Apache Spark', 'Snowflake', 'Databricks', 'Power BI',
    'Tableau', 'AWS Glue', 'Azure Data Factory', 'Google BigQuery'
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
      {/* 7. 6 SPECIALIZED DATA CLEANSING CAPABILITIES                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-100 text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#005F96] uppercase tracking-wider block mb-2 font-sans">
              High-Precision Data Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Our Data Cleansing Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Our Data Cleansing Company specializes in creating and putting into use focused data cleaning solutions for companies of all kinds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {dataCleansingCapabilities.map((capability, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-50/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0B0F19] mb-2.5 group-hover:text-[#005F96] transition-colors font-sans">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                    {capability.desc}
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-6 flex items-center text-xs font-bold text-[#005F96] group-hover:translate-x-1 transition-transform">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. DATA ENGINEERING TOOLS & TECH STACK STRIP                              */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#004A75] text-white">
        <Container className="max-w-6xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 font-sans">
            Technologies & Tools That Power Our Data Cleansing
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {dataTechStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold text-white tracking-wide transition-colors select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES SECTION                                                */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF OUR DATA CLEANSING SERVICES (6 Cards Grid)                */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {dataCleansingBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-[#005F96] font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-2 group-hover:text-[#005F96] transition-colors font-sans">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Connect Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. HIRING MODELS                                                         */}
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
      {/* 17. WHAT OUR CLIENTS SAY (CLUTCH REVIEWS CAROUSEL)                        */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 18. WE HAVE BEEN FEATURED IN                                              */}
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
