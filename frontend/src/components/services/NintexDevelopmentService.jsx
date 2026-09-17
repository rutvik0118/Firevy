import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ItConsultingRecentBlogsSection from './ItConsultingRecentBlogsSection';
import HealthcareChallengeCtaBanner from '../common/HealthcareChallengeCtaBanner';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  ArrowRight,
  CheckCircle2,
  Workflow,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  GraduationCap,
  Award,
  RefreshCw,
  Sliders,
  MousePointerClick,
  Code2,
  DollarSign,
  Share2,
  FileCheck2,
  ChevronRight,
  Quote,
  Tablet,
  ExternalLink
} from 'lucide-react';

export const NintexDevelopmentService = () => {
  // Services We Offer Active Card (defaults to 1 = 'Support For Nintex' matching reference image 1)
  const [activeServiceCard, setActiveServiceCard] = useState(1);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Services We Offer Cards (Matching Image 1: colorful icon boxes & exact styling)
  const servicesWeOffer = [
    {
      title: 'Nintex Development',
      desc: 'We provide end-to-end Nintex development services that are customized to your specifications. If necessary, our team of specialists can manage and deliver your solution entirely.',
      iconBg: 'bg-[#F2EAFF]',
      icon: (
        <svg className="w-6 h-6 text-[#7C3AED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="14" x="3" y="3" rx="2" />
          <path d="m8 10-2 2 2 2" />
          <path d="m12 10 2 2-2 2" />
          <circle cx="17" cy="12" r="1.5" />
        </svg>
      )
    },
    {
      title: 'Support For Nintex',
      desc: "If you've encountered a roadblock or need more resources to complete your project, we are extremely experienced in all facets of Nintex design, implementation, and training.",
      iconBg: 'bg-[#E8F8EE]',
      icon: (
        <svg className="w-6 h-6 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="12" cy="14" r="2.5" />
          <path d="M12 10.5v1M12 16.5v1M8.5 14h1M14.5 14h1" />
        </svg>
      )
    },
    {
      title: 'Nintex Health Checks',
      desc: 'Our Nintex health check team will evaluate your current Nintex configuration and provide recommendations for enhancements where required in no time.',
      iconBg: 'bg-[#FFF0E6]',
      icon: (
        <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <path d="M12 17v4M8 21h8" />
          <path d="M6 10h2.5l2-3 3 6 2-3H18" />
        </svg>
      )
    },
    {
      title: 'Nintex Training',
      desc: 'By providing expert-led training tailored to your specific needs, we help your team learn best practices and acquire the capacity to execute successful Nintex projects regularly.',
      iconBg: 'bg-[#FEF8E7]',
      icon: (
        <svg className="w-6 h-6 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <circle cx="12" cy="16" r="3" />
          <path d="M10 8h4M10 10l2 4M14 10l-2 4" strokeDasharray="1 1" />
        </svg>
      )
    },
    {
      title: 'Nintex Licensing',
      desc: "We assist you in determining the most suitable Nintex license for your business's needs and achieve your process automation objectives in the most cost-effective manner possible.",
      iconBg: 'bg-[#FDF0F5]',
      icon: (
        <svg className="w-6 h-6 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="14" x="3" y="3" rx="2" />
          <path d="M3 7h18" />
          <circle cx="12" cy="12" r="2" />
          <path d="M10.5 13.5 9 16l3-1 3 1-1.5-2.5" />
        </svg>
      )
    },
    {
      title: 'Nintex Upgrade',
      desc: 'Our Nintex up-gradation team will assist you with implementing all of the newest Nintex platform updates orderly and seamlessly to help you stay competitive.',
      iconBg: 'bg-[#EBF7FD]',
      icon: (
        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="14" x="3" y="3" rx="2" />
          <path d="M3 7h18" />
          <path d="M9 13a3 3 0 1 1 5.5 1.5M15 11v3.5h-3.5" />
        </svg>
      )
    }
  ];

  // Benefits of Nintex Development Cards (Matching Reference Images 2 & 3)
  const nintexBenefits = [
    {
      title: 'User-Driven',
      desc: 'Everyone, from beginners to seasoned veterans, can profit from the workflow automation capabilities of the system as it does tasks for its users, unlike other systems to learn routine activities.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="26" height="20" rx="3" />
          <path d="M12 15h14M12 21h8" />
          <path d="M14 36h10M19 28v8" />
          <circle cx="34" cy="30" r="6" />
          <path d="M34 22v3M34 35v3M26 30h3M39 30h3M28.3 24.3l2.2 2.2M37.5 33.5l2.2 2.2M28.3 35.7l2.2-2.2M37.5 26.5l2.2-2.2" />
        </svg>
      )
    },
    {
      title: 'Drag And Drop',
      desc: 'The drag and drop approach prioritizes streamlining the procedure rather than limiting the available options. It implies that Nintex software services are simple to use and run.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="12" r="3" />
          <circle cx="38" cy="12" r="3" />
          <circle cx="38" cy="36" r="3" />
          <path d="M13 12h22M38 15v18" strokeDasharray="3 3" />
          <path d="M24 8v16a3 3 0 0 1-6 0V14a2.5 2.5 0 0 0-5 0v16c0 7 5 12 12 12s12-5 12-12v-8a2.5 2.5 0 0 0-5 0v4" />
        </svg>
      )
    },
    {
      title: 'Powerful Automation',
      desc: 'Compared to other automation systems on the market, Nintex enables quicker startup, operation, robust enough to handle large corporate projects, and creation of numerous processes.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="30" height="20" rx="2" />
          <path d="M4 36h38a2 2 0 0 0 2-2v-1a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v1a2 2 0 0 0 2 2z" />
          <circle cx="31" cy="17" r="4.5" />
          <path d="M31 11v2M31 21v2M25 17h2M35 17h2" />
          <path d="M14 16h6M14 20h4" />
        </svg>
      )
    },
    {
      title: 'Price Variability',
      desc: "Nintex's pricing is available on a quotation basis, allowing companies to customize their feature suite depending on their business requirements while keeping their budget in mind.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="28" cy="15" r="8" />
          <path d="M28 11v8M25.5 13.2h5a1.8 1.8 0 0 1 0 3.6h-5a1.8 1.8 0 0 0 0 3.6h5" />
          <path d="M6 31h10l8-4h12a3 3 0 0 1 3 3c0 2-1.5 3-4 3H27l-5 4H6" />
        </svg>
      )
    },
    {
      title: 'Simple Workflows',
      desc: 'Whether it’s a request or approval, anyone can make workflow simpler with Nintex’s workflow automation functionality in the simplest possible way.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="20" r="7" />
          <path d="M18 10v3M18 27v3M8 20h3M25 20h3M11 13l2.1 2.1M22.9 24.9l2.1 2.1M11 27l2.1-2.1M22.9 15.1l2.1-2.1" />
          <circle cx="32" cy="30" r="6" />
          <path d="M32 21v3M32 36v3M23 30h3M38 30h3" />
        </svg>
      )
    },
    {
      title: 'Easy Integration',
      desc: 'Whether you need to integrate your social media handles or your CRM, you can easily integrate Nintex workflow with your favorite tools without any coding knowledge.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 18a4 4 0 0 1 8 0h6a2 2 0 0 1 2 2v6a4 4 0 1 1 0 8v6a2 2 0 0 1-2 2h-6a4 4 0 0 1-8 0h-4a2 2 0 0 1-2-2v-6a4 4 0 0 0 0-8v-6a2 2 0 0 1 2-2h4z" />
        </svg>
      )
    },
    {
      title: 'Dynamic Forms',
      desc: 'Nintex Forms empower IT ops professionals across business departments to automate work by creating simple, no-code forms and customizing them as per their needs.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="28" height="32" rx="5" />
          <rect x="16" y="15" width="16" height="5" rx="1.5" />
          <rect x="16" y="24" width="5" height="5" rx="1" />
          <line x1="25" y1="26.5" x2="32" y2="26.5" strokeWidth="2.8" />
        </svg>
      )
    }
  ];

  // Nintex Tech Stack
  const nintexTechStack = [
    {
      category: 'Frameworks',
      pills: ['React', 'Node', 'jQuery', 'C#', 'TypeScript']
    },
    {
      category: 'SharePoint',
      pills: ['SharePoint Server', 'Office 365']
    },
    {
      category: 'Database',
      pills: ['SQL Server']
    },
    {
      category: 'Microsoft Azure',
      pills: ['Active Directory', 'Azure Storage', 'Function', 'App Service']
    },
    {
      category: 'Testing',
      pills: ['Selenium', 'Test Rail', 'Postman', 'Apache JMeter', 'BrowserStack', 'OWASP ZAP']
    },
    {
      category: 'Project Management Tool',
      pills: ['Jira', 'MVP', 'MVVM', 'Microservices']
    }
  ];

  // Nintex FAQs
  const nintexFaqs = [
    {
      question: '1. What are Nintex Development Services and how can they benefit my business?',
      answer: 'Nintex Development Services help businesses automate workflows, streamline processes, and improve productivity with customized solutions built on the Nintex platform.'
    },
    {
      question: '2. Why should I choose Firevy for Nintex Development Services?',
      answer: 'As a leading IT company, Firevy provides expert Nintex consulting, custom development, and seamless integration to ensure maximum ROI, zero coding friction, and enterprise efficiency.'
    },
    {
      question: '3. Can Nintex Development Services integrate with my existing business systems?',
      answer: 'Yes, our Nintex experts can integrate Nintex workflows with SharePoint, Office 365, Salesforce, Dynamics 365, and other enterprise cloud or on-prem applications seamlessly.'
    },
    {
      question: '4. What industries can benefit from Nintex Development Services?',
      answer: 'Nintex solutions are ideal for industries like finance, banking, healthcare, manufacturing, event planning, retail, and government where workflow automation and compliance are critical.'
    },
    {
      question: '5. How do Nintex Development Services support digital transformation?',
      answer: 'Nintex automates manual processes, eliminates human error, and accelerates cross-departmental collaboration—helping businesses accelerate their digital transformation journey.'
    },
    {
      question: '6. Do you provide customized Nintex workflows and automation solutions?',
      answer: 'Yes, we specialize in designing and developing custom Nintex workflows and dynamic forms tailored to your unique business needs and operational challenges.'
    },
    {
      question: '7. What is the cost of Nintex Development Services?',
      answer: 'The cost depends on project complexity, integration needs, and customization. We provide flexible pricing models including fixed price and time & material to suit startups, SMEs, and enterprises.'
    },
    {
      question: '8. How long does it take to implement Nintex Development Services?',
      answer: 'Implementation time varies by project scope, but our Nintex experts follow an agile development approach to deliver workflow automation solutions quickly and efficiently.'
    },
    {
      question: '9. Do you offer ongoing support and maintenance for Nintex Development Services?',
      answer: 'Yes, we provide continuous support, health checks, version upgrades, and optimization to ensure your Nintex workflows perform seamlessly and evolve with your business needs.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <SEO
        title="Professional Nintex Development Services in USA | Firevy"
        description="Firevy provides the best Nintex development services in USA that include workflow automation, document automation, and nintex forms."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (IMAGE 1) */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight">
                Nintex Development Services in USA
              </h1>

              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
                Bid farewell to manual designing and deployment of workflows using expensive development resources. Take the advantage of our Cloud-based Nintex development services to reduce coding, increase productivity and streamline processes.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center space-x-3 bg-[#005D95] hover:bg-[#004b78] text-white px-8 py-3.5 rounded-[6px] font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Graphic Mockup */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white group hover:shadow-2xl transition-all duration-500">
                <img
                  src="/images/nintex_hero_illustration.jpg"
                  alt="Nintex Development Services in USA"
                  className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. CLIENT LOGOS MARQUEE */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 3. ENTERPRISE NINTEX DEVELOPMENT & CONSULTING (IMAGE 2) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1">
              <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white group hover:shadow-2xl transition-all duration-500">
                <img
                  src="/images/nintex_enterprise_consulting.jpg"
                  alt="Enterprise Nintex Development and Consulting Services"
                  className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] leading-[1.2] tracking-tight">
                Enterprise Nintex Development And Consulting Services
              </h2>

              <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal">
                Our mission is to use automation and process intelligence to assist enterprises in achieving better results more quickly. For a wide range of sectors, including banking, finance, event planning, government, and many more, we provide Nintex services.
              </p>

              <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal">
                We provide Affordable Nintex workflow automation service and comprehensive range of Custom Nintex workflow development services, instruction, and support materials to assist your company in achieving better business results with the Nintex Process Platform's robust and user-friendly process automation and intelligence features. Take advantage of our professional assistance to change your digital path.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP RATED BANNER (IMAGE 3) */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. QUICK AND AFFORDABLE NINTEX DEVELOPMENT SERVICES (IMAGE 3) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
              Quick And Affordable Nintex Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#EBF6FB] rounded-2xl p-8 sm:p-10 text-left relative overflow-hidden border border-[#D5EBF5]">
                <div className="w-12 h-10 mb-4 text-[#005D95]">
                  <Quote className="w-12 h-12 fill-current opacity-90" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-[800] text-[#005D95] leading-snug tracking-tight">
                  Reliable, Scalable And Powerful Apps
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                Nintex is a workflow automation tool that automates operations on various popular collaboration platforms and corporate content management systems. Nintex can now integrate on-premises, mobile, and cloud processes. This online service, recognized as one of the Best Nintex development company, enables businesses to automate their business operations effortlessly.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                Our Nintex developers provide tailored <Link to="/services/software-development" className="text-[#005D95] font-bold underline hover:text-[#003b60]">software development service</Link> solutions to meet your specific requirements and budget. Our Nintex developers have years of experience in robotic process automation, document automation, Nintex workflow automation, and more. Join hands with the most affordable Nintex service provider with a wide range of Nintex development solutions for every business type and size. Hire Nintex developers that empower businesses to create dynamic, tailored, and engaging online Nintex forms with a wide range of features.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES (IMAGE 4) */}
      {/* ========================================================================= */}
      <PremiumServicesGrid />

      {/* ========================================================================= */}
      {/* 7. SUCCESS STORIES & STATS (MATCHING IMAGE 2) */}
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
      {/* 8. SERVICES WE OFFER (1:1 MATCH WITH REFERENCE IMAGE 1) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Services We Offer
            </h2>
            <p className="text-sm sm:text-[15.5px] text-slate-600 font-normal leading-relaxed font-sans max-w-3xl mx-auto">
              We have a wide range of Nintex development services that you can avail as per your needs and budget. Take a look at our services range.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12">
            {servicesWeOffer.map((item, index) => {
              const isActive = activeServiceCard === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveServiceCard(index)}
                  onClick={() => setActiveServiceCard(index)}
                  className={`rounded-2xl p-7 sm:p-8 text-left transition-all duration-300 flex flex-col cursor-pointer ${
                    isActive
                      ? 'bg-[#E5F5FD] border border-[#38BDF8] border-b-[4px] border-b-[#0284C7] shadow-md'
                      : 'bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-[10px] ${item.iconBg} flex items-center justify-center mb-5 shrink-0 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-[#0B0F19] mb-3 leading-snug font-sans">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-[1.65] font-normal font-sans flex-1">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center space-x-2 bg-[#005D95] hover:bg-[#004874] text-white px-8 py-3.5 rounded-[6px] font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Get A Free Quote for Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. NINTEX PROJECT VIDEO SHOWCASE (1:1 MATCH WITH REFERENCE IMAGE 1) */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden text-center border-t border-slate-100">
        {/* Soft decorative background circles matching image 1 */}
        <div className="absolute top-12 left-4 sm:left-20 w-72 h-72 rounded-full bg-[#E0F2FE]/70 blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-6 right-4 sm:right-20 w-72 h-72 rounded-full bg-[#FFE4E6]/60 blur-3xl pointer-events-none -z-10" />

        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B0F19] tracking-tight font-sans">
              Nintex Project
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative flex justify-center">
            {/* The Nintex Project Dark Blue Video Card */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#032541] shadow-[0_20px_50px_rgba(3,37,65,0.22)] p-6 sm:p-10 lg:p-14 min-h-[360px] sm:min-h-[440px] flex flex-col justify-between items-center group cursor-pointer border border-slate-700/40 hover:shadow-[0_25px_60px_rgba(3,37,65,0.32)] transition-all duration-300"
            >
              {/* Top Right: Firevy.co Branding (Replacing Sapphire name) */}
              <div className="w-full flex justify-end items-center z-10">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-white/20">
                  <span className="text-white font-black text-sm sm:text-base tracking-tight font-sans">
                    firevy<span className="text-sky-400">.co</span>
                  </span>
                </div>
              </div>

              {/* Center: Nintex X Logo with Circular Blue Play Button */}
              <div className="my-auto flex flex-col items-center justify-center relative z-10 py-6">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                  {/* Nintex Cross Vector Graphic: Orange Left Chevron & White Right Chevron */}
                  <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-2xl">
                    {/* Left Chevron (Orange) */}
                    <path
                      d="M 32 24 L 80 72 L 32 120 L 48 136 L 112 72 L 48 8 Z"
                      fill="#FF6600"
                    />
                    {/* Right Chevron (White) */}
                    <path
                      d="M 128 24 L 80 72 L 128 120 L 112 136 L 48 72 L 112 8 Z"
                      fill="#FFFFFF"
                    />
                  </svg>

                  {/* Circular Blue Play Button overlaid in center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-[#1D4ED8] group-hover:bg-[#2563EB] text-white flex items-center justify-center shadow-2xl pl-1 border-2 border-white/30 backdrop-blur-xs transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current text-white" viewBox="0 0 24 24">
                        <polygon points="7 4 20 12 7 20 7 4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* nintex brand text */}
                <div className="text-white font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight lowercase font-sans mt-2">
                  nintex
                </div>
              </div>

              {/* Bottom Text: Top Nintex Development Company */}
              <div className="w-full text-center z-10 pt-2">
                <h3 className="text-[#FF6600] font-[900] text-xl sm:text-2xl lg:text-[32px] tracking-tight font-sans">
                  Top Nintex Development Company
                </h3>
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
                <h3 className="font-bold text-base sm:text-lg">Top Nintex Development Company | Firevy.co</h3>
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
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Top Nintex Development Company"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 10. PROUD TO HAVE PICKED THESE UP ALONG THE WAY (AWARDS & TRUST BANNER) */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF NINTEX DEVELOPMENT */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Benefits Of Nintex Development
            </h2>
            <p className="text-sm sm:text-[15.5px] text-slate-600 font-normal leading-relaxed font-sans max-w-3xl mx-auto">
              Nintex's primary advantages include a user-friendly solution, an easy-to-use system, a strong automation platform, and flexible pricing. Here are some of the Nintex benefits.
            </p>
          </div>

          {/* 7 Benefits Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {nintexBenefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col text-left group"
              >
                <div className="mb-5 flex items-center justify-start group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-[#0B0F19] mb-2.5 group-hover:text-[#0068A8] transition-colors font-sans">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[14px] leading-[1.65] font-normal font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. HIRING MODELS */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 11. INNOVATIVE VIDEO SLIDER */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 12. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 13. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS) */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 14. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 15. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 16. TECHNOLOGY STACK */}
      {/* ========================================================================= */}
      <TechStackProficientGrid
        title="Technology Stack That Firevy Nintex Developers Use Proficiently"
        rows={nintexTechStack}
      />

      {/* ========================================================================= */}
      {/* 17. DIGITAL TRANSFORMATION THROUGH INNOVATION (CASE STUDIES) */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 18. EXPLORE THE TRANSFORMATIVE IMPACT OF SERVICE DEVELOPMENT */}
      {/* ========================================================================= */}
      <TransformativeImpactSection
        title="Explore The Transformative Impact Of Nintex Workflow Automation On Your Business Success"
      />

      {/* ========================================================================= */}
      {/* 19. ABOUT US STATS */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 20. WE HAVE BEEN FEATURED IN */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 21. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below"
        faqs={nintexFaqs}
      />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART IN NINTEX DEVELOPMENT SERVICES? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart In Nintex Development Services?"
        subtitle="Being unique is our quality! Firevy believe in the things that give us an edge over our competitors. We are renowned software and cloud automation organization serving customers with end-to-end workflow intelligence support."
      />

      {/* ========================================================================= */}
      {/* 23. RECENT BLOGS */}
      {/* ========================================================================= */}
      <ItConsultingRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 24. HAVE NINTEX DEVELOPMENT CHALLENGE TO ADDRESS ? */}
      {/* ========================================================================= */}
      <HealthcareChallengeCtaBanner
        title="Have Nintex Development Challenge To Address ?"
        subtitle="Get access to top nintex developers to transform your ideas into a robust application."
        buttonText="Hire Nintex Developers Now"
      />

      {/* ========================================================================= */}
      {/* 25. SUBSCRIBE NEWSLETTER */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />

      {/* ========================================================================= */}
      {/* ANCHOR */}
      {/* ========================================================================= */}
      <div id="consultation-form" />
    </div>
  );
};

export default NintexDevelopmentService;
