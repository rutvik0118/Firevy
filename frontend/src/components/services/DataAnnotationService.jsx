import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import DataAnnotationCuttingEdgeTechSection from './DataAnnotationCuttingEdgeTechSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import DataAnnotationExpertiseServices from './DataAnnotationExpertiseServices';
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
  Tag,
  Box,
  Eye,
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

export const DataAnnotationService = () => {
  // 6 Benefits Cards Grid (Exact 1:1 Match to Image 2 with Outline SVG Icons)
  const dataAnnotationBenefits = [
    {
      title: 'Seasoned Data Annotators',
      desc: 'Our certified annotators and domain specialists hold deep expertise across computer vision, NLP, and medical labeling, guaranteeing exceptional training data accuracy and consistency.',
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
      title: 'Mastery of Leading Tooling & Platforms',
      desc: 'We operate proficiently across premier industry labeling tooling including CVAT, Label Studio, Roboflow, Prodigy, and custom in-house automated micro-labeling pipelines.',
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
      title: 'Agile & Collaborative Approach',
      desc: 'Working directly with your machine learning engineers, we establish continuous feedback loops, edge-case triage, and iterative guideline calibration to match your evolving models.',
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
      desc: 'Multi-pass consensus scoring, golden dataset benchmarks, and senior reviewer validation guarantee over 99.5% annotation precision for mission-critical production deployment.',
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
      title: 'Future-Ready, Scalable Solutions',
      desc: 'Whether your model requires thousands of pilot images or millions of multi-modal video frames, our scalable workforce and automation adapt effortlessly to high throughput demands.',
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
      title: 'Enterprise Security & Compliance',
      desc: 'Our annotation facilities and cloud platforms adhere to strict GDPR, HIPAA, and SOC 2 security protocols. Sensitive proprietary datasets are protected under stringent NDAs.',
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

  // Success Stories (Exact 1:1 Match to Reference Portfolio)
  const dataAnnotationSuccessCards = [
    {
      id: 1,
      title: 'Enterprise Microservices & Cloud-Native Data Annotation Pipeline',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'Automated Real-Time Sensor Data Annotation Application',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Data.Analytics Website & AI Model Ground Truth Platform',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // 9 Complete FAQs (Firevy.co Branded)
  const annotationFaqs = [
    {
      question: '1. What is data annotation and why is it crucial for AI?',
      answer: 'Data annotation is the categorization and labeling of raw data (such as images, videos, audio, text, and 3D point clouds) to make it readable and interpretable for machine learning algorithms. High-quality annotated training data determines how accurately AI models learn, predict, and make decisions in real-world scenarios.'
    },
    {
      question: '2. Which types of data annotation services does Firevy.co offer?',
      answer: 'We provide end-to-end data annotation across all modalities: 2D Bounding Boxes, Polygon Segmentation, 3D LiDAR Point Clouds, Keypoint Annotation, Named Entity Recognition (NER), Text Classification, Multilingual Audio Diarization, and Human-in-the-Loop RLHF for Large Language Models.'
    },
    {
      question: '3. How do you guarantee high annotation accuracy and quality?',
      answer: 'We enforce a multi-tier quality assurance framework featuring automated pre-labeling checks, consensus scoring between multiple human annotators, golden set benchmarking, and final validation by senior domain-specific quality leads to achieve >99.5% accuracy.'
    },
    {
      question: '4. Can you work with our proprietary labeling tools and guidelines?',
      answer: 'Yes. Our annotation team integrates directly with your existing infrastructure, whether you use CVAT, Label Studio, Roboflow, Prodigy, or custom in-house web-based labeling platforms via secure API integrations or VPN access.'
    },
    {
      question: '5. How secure is our sensitive training data?',
      answer: 'Data confidentiality is paramount. All team members operate under rigorous NDAs, and our workstations enforce strict access controls. We maintain compliance with GDPR, HIPAA, and SOC 2 standards, ensuring your intellectual property is never compromised.'
    },
    {
      question: '6. Do you support specialized domain annotation like Healthcare and Autonomous Driving?',
      answer: 'Yes. We maintain dedicated cohorts of specialized annotators, including medical professionals for radiology/pathology scans and certified computer vision specialists for multi-sensor autonomous vehicle LiDAR and 3D cuboids.'
    },
    {
      question: '7. How do you handle large-scale dataset projects and tight deadlines?',
      answer: 'With a scalable team of 500+ trained annotators and automated quality tooling, we easily accommodate batch volumes ranging from tens of thousands of frames to millions of data points with rapid turnaround times.'
    },
    {
      question: '8. What is the difference between automated labeling and human-in-the-loop?',
      answer: 'Automated labeling uses pre-trained AI models to generate initial draft annotations rapidly. Human-in-the-loop (HITL) incorporates human experts who inspect, correct edge cases, and refine the labels, combining the speed of AI with human precision.'
    },
    {
      question: '9. How can we get started with a pilot annotation project?',
      answer: 'Simply share a sample dataset, annotation guidelines, and your required output format. We will execute a proof-of-concept pilot to demonstrate our speed, precision, and quality metrics before scaling to full production.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <SEO
        title="#1 Data Annotation Company Worldwide | AI & ML Data Labeling"
        description="Firevy.co delivers top-rated data annotation and labeling services. Computer vision, 3D LiDAR point clouds, NLP text, and LLM RLHF labeled datasets by expert annotators."
        keywords="data annotation company, data labeling services, computer vision annotation, AI training data, LiDAR 3D labeling, NLP annotation, RLHF human feedback"
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
                #1 Data Annotation Company Worldwide
              </h1>

              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                Accelerate your artificial intelligence and machine learning models with human-in-the-loop data annotation services. From bounding boxes and 3D LiDAR point clouds to LLM RLHF and NLP, we deliver high-accuracy labeled training datasets.
              </p>

              {/* 4 Stats Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">50M+</div>
                  <div className="text-xs text-slate-600 font-medium">Labels Generated</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">99.5%</div>
                  <div className="text-xs text-slate-600 font-medium">Accuracy Rate</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">500+</div>
                  <div className="text-xs text-slate-600 font-medium">AI Models Trained</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">24/7</div>
                  <div className="text-xs text-slate-600 font-medium">Turnaround Delivery</div>
                </div>
              </div>

              {/* Single "Let's Talk" CTA */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/data_annotation_hero.jpg"
                  alt="AI Data Annotation & Labeling Platform"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
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
      {/* 3. HIGH-PRECISION ANNOTATION SOLUTIONS (Image Left + Content Right)       */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/data_annotation_pipeline.jpg"
                  alt="Computer Vision & 3D LiDAR Annotation Pipeline"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for High-Precision AI Data Annotation Solutions
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Artificial intelligence and machine learning models are only as capable as the quality of the datasets they are trained upon. Raw sensor data, video frames, and unstructured text often feature ambiguities and noise that hinder neural network convergence. Our specialist data annotation company delivers pixel-precise, verified ground-truth training datasets.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By combining automated tool assistance with expert human verification, our data annotation services provide enterprise AI teams with flawless 2D/3D bounding boxes, polygon segmentations, LiDAR point clouds, and multi-lingual NLP annotations.
              </p>
            </div>
          </div>
        </Container>
      </section>


      {/* ========================================================================= */}
      {/* 5. AWARDS & TRUST RECOGNITION CLUTCH BANNER                               */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* ========================================================================= */}
      {/* 6. 100% CUSTOMIZABLE DATA ANNOTATION SERVICES (Quote Card + Narrative)    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Data Annotation Services
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
                Clean and<br />accurate training<br />data guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Building reliable AI models in the data-driven world of today depends on high-quality, accurately annotated ground truth datasets. Raw multi-modal sensor streams and unstructured datasets may contain edge cases, occlusions, and labelling inconsistencies that cause biased predictions and degraded model performance. As a premier Data Annotation Company, we offer fully customized data labeling solutions that address your precise technical guidelines.
              </p>
              <p>
                Our 100% personalized Data Annotation Solutions are engineered for your specific computer vision, NLP, or LLM requirements. Our services ensure that datasets are accurately tagged, categorized, and formatted for direct training pipeline ingestion. Our experienced annotation leads and quality assurance engineers deliver solutions that strengthen model accuracy, minimize training cycles, and optimize production performance for enterprises across healthcare, automotive, retail, and tech.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION (MATCHING REFERENCE CAROUSEL)         */}
      {/* ========================================================================= */}
      <DataAnnotationCuttingEdgeTechSection companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 8. OUR PREMIUM SERVICES (MATCHING REFERENCE SCREENSHOT)                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES (MATCHING REFERENCE SCREENSHOT)                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={dataAnnotationSuccessCards}
        subtitle="Know Firevy.co journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER (PROUD TO HAVE PICKED THESE UP ALONG THE WAY)     */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR DATA ANNOTATION SERVICES (EXACT 1:1 OUTLINE SVG ICONS) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Data Annotation Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Years of multi-modal dataset labeling, computer vision training, and LLM reinforcement feedback have made our committed data annotation specialists exceptionally skilled partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {dataAnnotationBenefits.map((benefit, i) => (
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
      {/* 12. OUR EXPERTISE IN DEDICATED DATA ANNOTATION SERVICES                   */}
      {/* ========================================================================= */}
      <DataAnnotationExpertiseServices />

      {/* ========================================================================= */}
      {/* 13. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 14. INNOVATIVE VIDEO SOLUTIONS SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 15. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Data Annotation Process We Follow"
        subtitle="Our systematic data pipeline from initial schema calibration and edge-case benchmarking to automated pre-labeling, human verification, and consensus scoring."
      />

      {/* ========================================================================= */}
      {/* 16. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 17. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 18. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 19. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 20. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 21. FREQUENTLY ASKED QUESTIONS (9 Complete Reference FAQs)                */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below."
        faqs={annotationFaqs}
        companyName="Firevy.co"
      />

      {/* ========================================================================= */}
      {/* 22. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 23. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 24. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <IWatchChallengeCtaBanner />
    </div>
  );
};

export default DataAnnotationService;
