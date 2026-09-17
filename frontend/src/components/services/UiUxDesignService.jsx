import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import AppDevelopmentRecentBlogsSection from './AppDevelopmentRecentBlogsSection';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  Palette,
  Layout,
  Eye,
  Smartphone,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Check,
  ChevronRight,
  Users,
  Compass,
  Zap,
  TrendingUp,
  BarChart3,
  Award,
  Globe
} from 'lucide-react';

export const UiUxDesignService = () => {

  // 1. Expertise In Our UI/UX Design Services (6 cards matching layout)
  const uiUxExpertiseCards = [
    {
      title: 'User Research & Persona Mapping',
      desc: 'Conduct qualitative stakeholder interviews, competitor benchmarks, user empathy mapping, and heuristic audits to uncover behavioral pain points and define actionable user personas.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <svg className="w-6 h-6 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 12h.01" />
          <path d="M13 12h2" />
          <path d="M9 16h.01" />
          <path d="M13 16h2" />
        </svg>
      )
    },
    {
      title: 'Information Architecture & Wireframing',
      desc: 'Structure intuitive navigation hierarchies, site maps, and low-fidelity wireframes that organize complex application data and establish clear user journey flows before visual design.',
      bg: 'bg-[#DCFCE7]',
      icon: (
        <svg className="w-6 h-6 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="11.5" cy="14.5" r="2.5" />
          <path d="m13.5 16.5 2.5 2.5" />
        </svg>
      )
    },
    {
      title: 'UI Design & Interactive Prototyping',
      desc: 'Craft pixel-perfect visual interfaces, elegant color palettes, modern typography scales, and clickable high-fidelity prototypes in Figma to simulate genuine product experiences.',
      bg: 'bg-[#FFEDD5]',
      icon: (
        <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 2 10 5-10 5-10-5Z" />
          <path d="m2 12 10 5 10-5" />
          <path d="m2 17 10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Design Systems & Component Libraries',
      desc: 'Develop comprehensive, scalable design systems with atomic component libraries, responsive grids, and design tokens that streamline cross-platform development and maintain consistency.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <svg className="w-6 h-6 text-[#CA8A04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.439 7.85c-.049-.322.059-.648.289-.878l1.568-1.568a1.5 1.5 0 0 0-2.121-2.121l-1.568 1.568a1.002 1.002 0 0 1-.878.29c-.792-.12-1.637-.12-2.428 0a1.002 1.002 0 0 1-.878-.29L11.854 3.28a1.5 1.5 0 0 0-2.121 2.121l1.568 1.568c.23.23.338.556.29.878-.12.791-.12 1.636 0 2.428a1.002 1.002 0 0 1-.29.878l-1.568 1.568a1.5 1.5 0 0 0 2.121 2.121l1.568-1.568c.23-.23.556-.338.878-.29.791.12 1.636.12 2.428 0 .322-.049.648.059.878.289l1.568 1.568a1.5 1.5 0 0 0 2.121-2.121l-1.568-1.568a1.002 1.002 0 0 1-.289-.878c.12-.792.12-1.637 0-2.428z" />
        </svg>
      )
    },
    {
      title: 'Usability Testing & UX Audits',
      desc: 'Perform moderated usability tests, heatmap analysis, task success tracking, and heuristic UX audits to eliminate cognitive friction and enhance conversion rates.',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <svg className="w-6 h-6 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    },
    {
      title: 'Accessibility & WCAG 2.1 Compliance',
      desc: 'Ensure universal digital access through rigorous contrast validation, screen reader optimization, keyboard navigation support, and full ADA & WCAG 2.1 compliance.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      )
    }
  ];

  // 2. Benefits of UI/UX Design Services (6 cards matching layout)
  const uiUxBenefitsData = [
    {
      title: 'Higher Conversion Rates & ROI',
      desc: 'Streamlined user flows, clear calls-to-action, and frictionless checkout/signup paths directly boost conversion rates and maximize digital revenue.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      title: 'Lower Engineering Costs & Fewer Redesigns',
      desc: 'Validating interactive prototypes with real end-users prior to development eliminates costly code rework and accelerates engineering sprint velocities by up to 50%.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Strengthened Brand Loyalty & Trust',
      desc: 'A modern, polished aesthetic combined with effortless usability fosters customer delight, elevating brand perception and establishing long-term customer loyalty.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Intuitive & Frictionless User Journeys',
      desc: 'Users navigate your digital product effortlessly with zero cognitive load, leading to reduced onboarding friction and minimal customer support tickets.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      title: 'Seamless Cross-Platform Consistency',
      desc: 'Deliver a harmonious visual language and responsive design across desktop browsers, smartphones, tablets, and smart wearables.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
          <path d="m9 10 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Effortless Developer Handoff',
      desc: 'Complete design specs, auto-layout tokens, CSS styling values, and organized asset exports empower front-end engineers to implement designs with 100% fidelity.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4.5 16.5-1.5 1.5 3 3 1.5-1.5" />
          <path d="m15 4.5 4.5 4.5" />
          <path d="M9 12l2.5 2.5" />
          <path d="M14.5 3a5.5 5.5 0 0 1 6.5 6.5l-9.5 9.5a2.5 2.5 0 0 1-3.5 0l-3-3a2.5 2.5 0 0 1 0-3.5Z" />
        </svg>
      )
    }
  ];

  // 3. FAQ List tailored specifically for UI/UX Design Services
  const uiUxConsultingFaqList = [
    {
      id: 1,
      question: 'What is the key difference between UI and UX design?',
      answer: 'UX (User Experience) design focuses on the overall feel, structure, user research, navigation architecture, and journey flows. UI (User Interface) design concentrates on the visual elements—typography, color palettes, micro-interactions, icons, and aesthetic appeal.'
    },
    {
      id: 2,
      question: 'Which design tools and platforms does your design team use?',
      answer: 'We primarily design and collaborate in Figma for real-time prototyping, design systems, and developer inspection. We also utilize Adobe Creative Cloud, Sketch, InVision, Zeplin, Miro for journey mapping, and Principle/Framer for advanced micro-interactions.'
    },
    {
      id: 3,
      question: 'How do you ensure designs are fully responsive across all screen sizes?',
      answer: 'We employ fluid grid systems, mobile-first design methodologies, and adaptive layout breakpoints in Figma. Each screen is designed and tested for mobile, tablet, desktop, and ultra-wide viewports.'
    },
    {
      id: 4,
      question: 'Can you redesign and modernize an existing, outdated application?',
      answer: 'Yes. We conduct a thorough UX heuristic audit to identify friction points and drop-off bottlenecks in your current product. We then construct an updated wireframe and modernized design system to elevate usability and conversion.'
    },
    {
      id: 5,
      question: 'What deliverables are included at the end of the design phase?',
      answer: 'Deliverables include user persona documentation, user journey maps, wireframes, interactive Figma prototypes, a production-ready Design System (components, tokens, styles), and comprehensive developer handoff assets.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="UI/UX Design Services | Top UI/UX Design Company in USA | Firevy.co"
        description="Transform your digital products with Firevy's UI/UX Design Services. User research, wireframing, high-fidelity interactive prototyping, and enterprise design systems in Figma."
        keywords="ui ux design services, ui ux design company, user experience design, user interface design, figma prototyping, design system, mobile app design, web design company"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (MATCHING APP CONSULTING BANNER & LAYOUT) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-14 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[41px] leading-[1.2]"
              >
                UI/UX Design Services in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Our UI/UX design services are geared toward creating intuitive, engaging, and human-centric digital experiences. From user research and wireframing to high-fidelity interactive prototypes, we craft interfaces that captivate users and accelerate business growth.
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

            {/* Right Hero Meeting Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[580px] flex justify-center">
                <img
                  src="/images/ui_ux_hero_illustration.jpg"
                  alt="UI/UX Design Services - Wireframes and Prototypes"
                  className="w-full h-auto object-contain max-h-[380px] rounded-2xl shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGO MARQUEE (BELOW HERO) */}
      {/* ========================================================================= */}
      <div className="bg-white py-6 border-b border-slate-200/80">
        <Container>
          <BrandLogoMarquee />
        </Container>
      </div>

      {/* ========================================================================= */}
      {/* 2. AFFORDABLE UI/UX DESIGN SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/ui_ux_design_vector.svg"
                  alt="Affordable UI/UX Design Services"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Affordable UI/UX Design <br />
                Services
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                We consider user requirements and UI/UX Design Experts for Product Development at the center of our efforts focusing on designing usable, pleasant, effective, and pleasurable experiences. From user onboarding to feedback and review, our products consist of an integrated set of experiences working together seamlessly. We follow industry standards and design principals for UI/UX design.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRIEF ABOUT BEST UI/UX DESIGNERS FOR ENTERPRISES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Brief About Best UI/UX <br />
                Designers For Enterprises
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our UI/UX designers analyze user behaviors in-depth, taking into account user demographics, psychological journey maps, usability pain points, and task completion pathways.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                As an Affordable and Enterprise-Grade UI/UX Design Agency, we engineer intuitive wireframes, clickable prototypes, and micro-interactions optimized for maximum user satisfaction and engagement.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/ui_ux_design_vector.svg"
                  alt="Brief About Best UI/UX Designers"
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
      {/* 5. GET 100% CUSTOMIZABLE UI/UX DESIGN EXPERTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable UI/UX Design Experts
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
                Research, Wireframe, Prototype, And Elevate User Experiences
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Even if you have powerful backend architecture, a poor user interface or confusing navigation will drive users away. When evaluating <strong className="text-[#005F96] font-semibold">product design systems</strong> and user retention models, you need the direction and artistic mastery of an expert UI/UX Design Company to avoid high abandonment rates. Our UI/UX Design Services assist clients in establishing user-first interaction paradigms, conducting qualitative usability testing, and selecting modern design systems.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Utilize our design thinking workshops and rapid prototyping sprints to identify friction points, streamline conversion funnels, and formulate an omni-channel design strategy. Whether you run an agile startup or a global enterprise, hiring our senior UI/UX designers ensures your digital products deliver memorable, frictionless experiences.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Sapphire" />

      {/* ========================================================================= */}
      {/* 7. SUCCESS STORIES + 4 STAT BOXES */}
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
            {/* Card 1 */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#005F96] text-white text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/adani.webp"
                  alt="FinTech Dashboard & Mobile Banking UX"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                FinTech Dashboard & Mobile Banking UX
              </h3>
            </div>

            {/* Card 2 */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/federal_forecasting_app.jpg"
                  alt="Healthcare Telehealth Patient Portal UI"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Healthcare Telehealth Patient Portal UI
              </h3>
            </div>

            {/* Card 3 */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/stress_management_app.jpg"
                  alt="E-Commerce Multi-Brand Design System"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                E-Commerce Multi-Brand Design System
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
            {/* Box 1: Purple */}
            <div className="bg-[#D8C7FF] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                23+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Years Experience
              </div>
            </div>

            {/* Box 2: Mint Green */}
            <div className="bg-[#A3E8D2] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                250+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Box 3: Peach/Coral */}
            <div className="bg-[#FFBCB0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                2800+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Satisfied Clients
              </div>
            </div>

            {/* Box 4: Deep Blue */}
            <div className="bg-[#005E82] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-md">
              <div className="text-[18px] sm:text-[19px] font-[800] text-white tracking-tight leading-tight mb-3 font-sans">
                Want to start Projects
              </div>
              <a
                href="#consultation-form"
                className="bg-white text-[#005E82] hover:bg-slate-100 px-6 py-2 rounded-[6px] font-[800] text-[13.5px] transition-all shadow-sm font-sans"
              >
                Get Estimation
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. EXPERTISE IN OUR UI/UX DESIGN SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Expertise In Our UI/UX Design Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
              As a Leading UI/UX Design Company, we have years of experience creating digital experiences. Our expertise include:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {uiUxExpertiseCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-7 text-slate-900 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left border border-slate-100"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-5 shadow-xs`}>
                    {card.icon}
                  </div>
                  <h3 className="font-[800] text-[#0B0F19] text-[18px] sm:text-[19px] leading-[1.3] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#475569] text-[13.5px] sm:text-[14px] leading-[1.7] font-[400]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Button */}
          <div className="text-center">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF UI/UX DESIGN SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of UI/UX Design Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our UI/UX Design Services help companies create engaging digital products and succeed in the modern user-centric market. Benefits include:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {uiUxBenefitsData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-7 text-slate-900 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start text-left border border-slate-100"
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="font-[800] text-[#0B0F19] text-[18px] sm:text-[19px] leading-[1.3] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#475569] text-[13.5px] sm:text-[14px] leading-[1.7] font-[400]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. BUSINESS FRIENDLY HIRING MODELS */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 12. UNVEILING OUR INNOVATIVE SOLUTION */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 13. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 14. OUR STORY, THEIR WORDS */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 15. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 16. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 17. TECHNOLOGY STACK */}
      {/* ========================================================================= */}
      <SapphireTechStackGrid domainName="UI/UX design" />

      {/* ========================================================================= */}
      {/* 18. WE HAVE BEEN FEATURED IN */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 19. DIGITAL TRANSFORMATION THROUGH INNOVATION */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 20. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={uiUxConsultingFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to queries and provide designs that captivate users. Feel free to contact us in case of any query not mentioned below."
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART AS UI/UX DESIGN COMPANY */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As UI/UX Design Company?"
        subtitle="Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned design and software development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire design process stands us one level up the competitors."
      />

      {/* ========================================================================= */}
      {/* 23. GET ACCESS TO TOP UI/UX DESIGNERS (CTA BANNER) */}
      {/* ========================================================================= */}
      <section className="relative w-full max-w-full py-9 sm:py-11 bg-[#005D95] text-white text-center font-sans overflow-hidden border-b border-slate-200">
        {/* Background Floating Geometric Circle & Square Overlay Graphics */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-[16px] border-white/10 opacity-70" />
          <div className="absolute top-8 left-16 w-12 h-12 rounded-full bg-white/10 opacity-40" />
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-3xl border-[20px] border-white/10 opacity-50 transform rotate-12" />
          <div className="absolute bottom-6 right-20 w-16 h-16 rounded-2xl bg-white/10 opacity-30" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 mx-auto text-center space-y-4">
          <p className="text-base sm:text-lg lg:text-[20px] font-[600] text-white leading-relaxed">
            Get access to top UI/UX designers to transform your digital products into intuitive user experiences.
          </p>
          <div>
            <a
              href="#consultation-form"
              className="inline-block bg-white hover:bg-slate-100 text-[#005D95] font-extrabold text-sm sm:text-base px-9 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 24. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default UiUxDesignService;
