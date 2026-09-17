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
  // Services We Offer Cards
  const servicesWeOffer = [
    {
      title: 'Nintex Development',
      desc: 'We provide end-to-end Nintex development services that are customized to your specifications. If necessary, our team of specialists can manage and deliver your solution entirely.',
      icon: <Workflow className="w-8 h-8 text-[#005D95]" />
    },
    {
      title: 'Support For Nintex',
      desc: "If you've encountered a roadblock or need more resources to complete your project, we are extremely experienced in all facets of Nintex design, implementation, and training.",
      icon: <ShieldCheck className="w-8 h-8 text-[#005D95]" />
    },
    {
      title: 'Nintex Health Checks',
      desc: 'Our Nintex health check team will evaluate your current Nintex configuration and provide recommendations for enhancements where required in no time.',
      icon: <Zap className="w-8 h-8 text-[#005D95]" />
    },
    {
      title: 'Nintex Training',
      desc: 'By providing expert-led training tailored to your specific needs, we help your team learn best practices and acquire the capacity to execute successful Nintex projects regularly.',
      icon: <GraduationCap className="w-8 h-8 text-[#005D95]" />
    },
    {
      title: 'Nintex Licensing',
      desc: "We assist you in determining the most suitable Nintex license for your business's needs and achieve your process automation objectives in the most cost-effective manner possible.",
      icon: <Award className="w-8 h-8 text-[#005D95]" />
    },
    {
      title: 'Nintex Upgrade',
      desc: 'Our Nintex up-gradation team will assist you with implementing all of the newest Nintex platform updates orderly and seamlessly to help you stay competitive.',
      icon: <RefreshCw className="w-8 h-8 text-[#005D95]" />
    }
  ];

  // Benefits of Nintex Development Services
  const nintexBenefits = [
    {
      title: 'User-Driven',
      desc: 'Everyone, from beginners to seasoned veterans, can profit from the workflow automation capabilities of the system as it does tasks for its users, unlike other systems to learn routine activities.',
      icon: <MousePointerClick className="w-7 h-7 text-[#005D95]" />
    },
    {
      title: 'Drag And Drop',
      desc: 'The drag and drop approach prioritizes streamlining the procedure rather than limiting the available options. It implies that Nintex software services are simple to use and run.',
      icon: <Sliders className="w-7 h-7 text-[#005D95]" />
    },
    {
      title: 'Powerful Automation',
      desc: 'Compared to other automation systems on the market, Nintex enables quicker startup, operation, robust enough to handle large corporate projects, and creation of numerous processes.',
      icon: <Zap className="w-7 h-7 text-[#005D95]" />
    },
    {
      title: 'Price Variability',
      desc: "Nintex's pricing is available on a quotation basis, allowing companies to customize their feature suite depending on their business requirements while keeping their budget in mind.",
      icon: <DollarSign className="w-7 h-7 text-[#005D95]" />
    },
    {
      title: 'Simple Workflows',
      desc: 'Whether it’s a request or approval, anyone can make workflow simpler with Nintex’s workflow automation functionality in the simplest possible way.',
      icon: <Workflow className="w-7 h-7 text-[#005D95]" />
    },
    {
      title: 'Easy Integration',
      desc: 'Whether you need to integrate your social media handles or your CRM, you can easily integrate Nintex workflow with your favorite tools without any coding knowledge.',
      icon: <Share2 className="w-7 h-7 text-[#005D95]" />
    },
    {
      title: 'Dynamic Forms',
      desc: 'Nintex Forms empower IT ops professionals across business departments to automate work by creating simple, no-code forms and customizing them as per their needs.',
      icon: <FileCheck2 className="w-7 h-7 text-[#005D95]" />
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
      {/* 7. SUCCESS STORIES & STATS (IMAGE 4 & 5) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-snug mb-3">
              Success Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1: Appointment Schedule App */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full h-[250px] sm:h-[270px] rounded-2xl overflow-hidden shadow-xs border border-rose-100 bg-gradient-to-br from-[#FFE4E6] via-[#FFD1DC] to-[#FDA4AF] p-4 relative flex flex-col justify-between group-hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start z-10">
                  <div className="text-left">
                    <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block">Booking Solution</span>
                    <span className="text-sm font-extrabold text-slate-900">Eyelash Booking App</span>
                  </div>
                  <span className="bg-[#005D95] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Case Study
                  </span>
                </div>

                <div className="flex justify-center items-center my-auto">
                  <div className="w-[140px] h-[170px] bg-white rounded-xl shadow-lg border-2 border-slate-800 p-2 overflow-hidden transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                    <div className="h-3 bg-rose-500 rounded-t-md mb-2" />
                    <div className="space-y-1.5">
                      <div className="h-2 bg-slate-200 rounded w-3/4" />
                      <div className="h-2 bg-slate-100 rounded w-1/2" />
                      <div className="h-10 bg-rose-50 rounded-lg p-1.5 text-[8px] text-rose-700 font-bold">
                        10:00 AM - Slot Reserved
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-xs rounded-lg p-2 text-center text-xs font-bold text-slate-800 z-10 shadow-xs">
                  91% Reduction in Booking Time
                </div>
              </div>

              <h3 className="font-[800] text-[17px] text-[#0B0F19] mt-3 group-hover:text-[#005D95] transition-colors text-left">
                Appointment Schedule App
              </h3>
            </div>

            {/* Card 2: Safety Application Development */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full h-[250px] sm:h-[270px] rounded-2xl overflow-hidden shadow-xs border border-amber-100 bg-gradient-to-br from-[#FEF3C7] via-[#FDE68A] to-[#F59E0B]/30 p-4 relative flex flex-col justify-between group-hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start z-10">
                  <div className="text-left">
                    <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">Healthcare & Safety</span>
                    <span className="text-sm font-extrabold text-slate-900">L'Oréal SafeWork</span>
                  </div>
                  <span className="bg-[#005D95] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Enterprise
                  </span>
                </div>

                <div className="flex justify-center items-center my-auto">
                  <div className="w-[180px] bg-white rounded-xl shadow-lg border border-amber-200 p-3 text-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center font-black mb-2">
                      ✓
                    </div>
                    <div className="text-xs font-black text-slate-900 leading-tight">SafeWork Incident Tracker</div>
                    <div className="text-[9px] text-slate-500 mt-1">99% Safety Compliance</div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-xs rounded-lg p-2 text-center text-xs font-bold text-slate-800 z-10 shadow-xs">
                  97% Reduction in Safety Incidents
                </div>
              </div>

              <h3 className="font-[800] text-[17px] text-[#0B0F19] mt-3 group-hover:text-[#005D95] transition-colors text-left">
                Safety Application Development
              </h3>
            </div>

            {/* Card 3: Powerapps Development Company */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full h-[250px] sm:h-[270px] rounded-2xl overflow-hidden shadow-xs border border-sky-100 bg-gradient-to-br from-[#032541] via-[#004B78] to-[#005D95] p-4 relative flex flex-col justify-between group-hover:shadow-lg transition-all duration-300 text-white">
                <div className="flex justify-between items-start z-10">
                  <div className="text-left">
                    <span className="text-[11px] font-bold text-sky-200 uppercase tracking-wider block">Power Platform</span>
                    <span className="text-sm font-extrabold text-white">PowerApps Enterprise</span>
                  </div>
                  <span className="bg-white text-[#005D95] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Solutions
                  </span>
                </div>

                <div className="flex justify-center items-center my-auto">
                  <div className="w-[190px] bg-slate-900/90 rounded-lg p-2.5 border border-sky-400/40 shadow-xl">
                    <div className="flex space-x-1.5 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-1 text-[8px] text-sky-200">
                      <div className="flex justify-between border-b border-sky-800/60 pb-0.5">
                        <span>Workflow Matrix</span>
                        <span className="text-green-400">Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Process Intel</span>
                        <span className="text-sky-300">Synchronized</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xs rounded-lg p-2 text-center text-xs font-bold text-white z-10 border border-white/20">
                  Automated Enterprise Workflows
                </div>
              </div>

              <h3 className="font-[800] text-[17px] text-[#0B0F19] mt-3 group-hover:text-[#005D95] transition-colors text-left">
                Powerapps Development Company
              </h3>
            </div>
          </div>

          {/* View All Portfolio Button */}
          <div className="text-center mb-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 bg-[#005D95] hover:bg-[#004874] text-white px-8 py-3 rounded-[6px] font-bold text-[14px] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>View All Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Pastel Highlight Metric Boxes */}
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

            {/* Box 2: Mint Green (320+ 5-Star Clutch Reviews) */}
            <div className="bg-[#A3E8D2] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                320+
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
      {/* 8. SERVICES WE OFFER */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-snug mb-3">
              Services We Offer
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              We have a wide range of Nintex development services that you can avail as per your needs and budget. Take a look at our services range.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesWeOffer.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-[#005D95]/40 transition-all duration-300 flex flex-col text-left group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#EBF6FB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-[800] text-[#0B0F19] mb-3 group-hover:text-[#005D95] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
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
      {/* 9. BENEFITS OF NINTEX DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-snug mb-3">
              Benefits of Nintex Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Nintex's primary advantages include a user-friendly solution, an easy-to-use system, a strong automation platform, and flexible pricing. Here are some of the Nintex benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {nintexBenefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-[#005D95]/40 transition-all duration-300 flex flex-col text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF6FB] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-[800] text-[#0B0F19] mb-2.5 group-hover:text-[#005D95] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center space-x-2 bg-[#005D95] hover:bg-[#004874] text-white px-8 py-3.5 rounded-[6px] font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Connect Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. HIRING MODELS */}
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
