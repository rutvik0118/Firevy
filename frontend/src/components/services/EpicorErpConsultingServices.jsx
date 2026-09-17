import React, { useRef } from 'react';
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
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import CustomItServicesSection from './CustomItServicesSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import AppDevelopmentRecentBlogsSection from './AppDevelopmentRecentBlogsSection';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Check,
  ChevronRight,
  ArrowLeft,
  Layers,
  Sparkles,
  Code2,
  Cloud,
  Lock,
  Cpu,
  RefreshCw,
  BarChart3,
  Globe,
  Database,
  Server,
  Settings,
  Briefcase,
  TrendingUp,
  FileCheck,
  CheckSquare
} from 'lucide-react';

export const EpicorErpConsultingServices = () => {

  const epicorDevelopersTechStack = [
    {
      category: "Frontend",
      pills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Angular",
        "React",
        "Vue.js",
        "Bootstrap",
        "Typescript",
        "Backbone.js"
      ]
    },
    {
      category: "Full-stack Frameworks",
      pills: [
        "NestJS",
        "Koa.js",
        "Nuxt.js",
        "MeteorJS",
        "Next.js"
      ]
    },
    {
      category: "Backend Frameworks",
      pills: [
        "Node.js",
        "Express.js",
        "PHP",
        "Laravel",
        "Python",
        "Django",
        "Flask",
        "FastAPI"
      ]
    },
    {
      category: "Monitoring and Logging Tools",
      pills: [
        "rometheus",
        "Grafana",
        "Elasticsearch",
        "Logstash",
        "Kibana"
      ]
    },
    {
      category: "Code Management",
      pills: [
        "Bitbucket",
        "GitHub",
        "GitLab",
        "SonarQube",
        "maven",
        "gradle"
      ]
    },
    {
      category: "Database",
      pills: [
        "Firebase",
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "DynamoDB",
        "SQLite"
      ]
    },
    {
      category: "Cloud",
      pills: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)"
      ]
    }
  ];

  // 2. Benefits of Epicor ERP Consulting Services (6 cards in 3x2 grid matching theme)
  const epicorBenefitsData = [
    {
      title: 'Tailored ERP Strategy & Architecture',
      desc: 'We evaluate your end-to-end manufacturing and distribution operations to design an Epicor deployment roadmap that minimizes customization debt while maximizing standard module efficiency.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      title: 'Faster Time-to-Value & Lower TCO',
      desc: 'Our proven agile implementation framework accelerates deployment timelines by up to 35%, cutting operational disruption and significantly reducing total cost of software ownership (TCO).',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Flawless Data Migration & Reconciliation',
      desc: 'Safely extract, transform, clean, and validate decades of historical enterprise data from legacy systems into Epicor Kinetic with zero duplicate records and automated trial balance reconciliations.',
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
      title: 'Automated Shop Floor Workflows',
      desc: 'Eliminate manual paper-based bottlenecks across inventory, job routings, machine scheduling, and shipping with automated Epicor BPM triggers, barcode scanning, and IoT telemetry.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      title: 'Regulatory & Compliance Assurance',
      desc: 'Maintain stringent industry compliance standards—including ISO 9001, AS9100 for aerospace, FDA 21 CFR Part 11 for medical devices, and ITAR—through automated audit trails.',
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
      title: 'Post-Go-Live Managed Support & SLAs',
      desc: 'Protect operational continuity with 24/7 dedicated Epicor administrator support, monthly patch testing, database tuning, user training workshops, and guaranteed SLA response times.',
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

  // 3. FAQ List tailored specifically for Epicor ERP Consulting Services
  const epicorConsultingFaqList = [
    {
      id: 1,
      question: 'Why should manufacturers engage an independent Epicor ERP consulting partner?',
      answer: 'Independent Epicor consultants provide objective guidance tailored to your specific plant workflows without software sales quota bias. We ensure high user adoption, prevent costly over-customization, and manage data migration accurately.'
    },
    {
      id: 2,
      question: 'What is the difference between Epicor Kinetic and Epicor Prophet 21 (P21)?',
      answer: 'Epicor Kinetic is architected primarily for discrete, make-to-order, and engineer-to-order manufacturers with complex bill of materials (BOM) and shop floor execution. Prophet 21 (P21) is specifically engineered for wholesale distributors focused on inventory management, warehouse shipping, and multi-channel order fulfilment.'
    },
    {
      id: 3,
      question: 'How do you handle migrations from older versions like Epicor 9 or 10 to Kinetic?',
      answer: 'Our consultants execute a phased migration methodology: conducting pre-migration database audits, refactoring classic UI customizations to Kinetic Application Studio, testing custom C# code and BPM directives in sandbox environments, and executing parallel trial runs before final cutover.'
    },
    {
      id: 4,
      question: 'Can Epicor ERP integrate with our existing Salesforce CRM and e-commerce stores?',
      answer: 'Yes. We utilize Epicor REST v2 APIs, Epicor Service Connect (ESC), and webhook middleware to establish bidirectional, real-time data sync for customer records, quote-to-order workflows, product catalogs, pricing tiers, and inventory availability.'
    },
    {
      id: 5,
      question: 'What ongoing support models do you offer following ERP go-live?',
      answer: 'We provide comprehensive managed services retainers, including Tier 1 to Tier 3 technical support, monthly kinetic cloud release validation, custom SSRS / Crystal report authoring, user training, and fractional Epicor database administration.'
    }
  ];

  const advancedErpTechnologies = [
    {
      id: 'nodejs',
      title: 'Node Js Development',
      icon: '/images/cuttingedge/nodejsdevelopment.svg',
      description: "For the purpose of developing scalable and quick online apps, we provide Node.js development services. We can handle complicated jobs and heavy traffic quickly by using JavaScript's event-driven nature for efficient real-time applications and a single JavaScript codebase for both the server and client sides."
    },
    {
      id: 'mern',
      title: 'MERN Stack App Development',
      icon: '/images/cuttingedge/mernstackappdevelopment.svg',
      description: 'Select our first-rate development services using the MERN Stack (Node.js, MongoDB, Express, and React). Our expertise is in developing intuitive web apps that meet user demands while delivering exceptional performance.'
    },
    {
      id: 'mean',
      title: 'MEAN Stack App Development',
      icon: '/images/cuttingedge/meanstackappdevelopment.svg',
      description: 'When it comes to MEAN Stack development services, we are a reliable partner. Our team is skilled in using frameworks like AngularJS and Mongoose to create web apps that have several features and perform very well.'
    },
    {
      id: 'fastapi',
      title: 'Fast API Development',
      icon: '/images/cuttingedge/fastapidevelopment.svg',
      description: 'Our group specializes in creating dynamic, high-performing online apps by using the FastAPI framework. Utilizing the newest Python frameworks, we guarantee that your project shines in terms of functionality, user experience, and smooth integration thanks to our knowledge of tools like Pydantic and Starlette.'
    },
    {
      id: 'django',
      title: 'Django App Development',
      icon: '/images/cuttingedge/djangoappdevelopment.svg',
      description: 'View our Django development services, where we create robust, effective online applications using the Django framework. Our services are made to improve your online solutions, making them more dependable and speedier from the ground up.'
    },
    {
      id: 'laravel',
      title: 'Laravel Development',
      icon: '/images/cuttingedge/laraveldevelopment.svg',
      description: 'With Laravel development expertise dating back to 2011, we use Composer and Blade, among other technologies, to build scalable, effective, and powerful online apps. Together, we can use our Laravel knowledge to turn your concept into a high-performing product.'
    }
  ];

  const comprehensiveEpicorServices = [
    {
      id: 1,
      title: "Epicor ERP Implementation",
      desc: "We complete full-cycle ERP implementation - from initial planning, configuration, and testing to go-live, and user adoption for seamless transition onto Epicor ERP."
    },
    {
      id: 2,
      title: "Custom Module Development",
      desc: "Expand the possibilities of your ERP by developing custom modules and functionality to support your specific workflows and reporting requirements."
    },
    {
      id: 3,
      title: "Data Migration & Integration",
      desc: "Securely migrate legacy data and connect your Epicor ERP with your CRMs, finance systems, inventory system, and any other 3rd party systems."
    },
    {
      id: 4,
      title: "System Upgrade & Optimization",
      desc: "If you current ERP system is outdated, we can modernize your current system through version upgrades, performance tuning, custom workflows and optimization of processes."
    },
    {
      id: 5,
      title: "ERP Training & Change Management",
      desc: "We are a partner in your success; we will provide full training, change management expertise, and end user support to foster full ERP utilization."
    },
    {
      id: 6,
      title: "Ongoing Support & Maintenance",
      desc: "Provide proactive monitoring, troubleshooting, and expert support to ensure continued reliability of your ERP system."
    }
  ];

  const comprehensiveSliderRef = useRef(null);

  const scrollComprehensiveSlider = (direction) => {
    if (comprehensiveSliderRef.current) {
      const scrollAmount = 400;
      comprehensiveSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const techSliderRef = useRef(null);

  const scrollTechSlider = (direction) => {
    if (techSliderRef.current) {
      const scrollAmount = 400;
      techSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Epicor ERP Consulting Services | Kinetic, P21 & Custom Integrations | Firevy.co"
        description="Maximize enterprise efficiency with Firevy's certified Epicor ERP Consulting Services. Specializing in Epicor Kinetic cloud migrations, Prophet 21 distribution, custom BPM workflows, and REST API integrations."
        keywords="epicor erp consulting services, epicor kinetic consulting, prophet 21 consulting, epicor erp implementation, epicor customization, epicor bpm, epicor integration partner"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-12 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2]"
              >
                Real-Time Insight Control with Epicor ERP Consulting Services
              </h1>

              <p
                className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal"
              >
                Transform your enterprise with tailored Epicor ERP consulting services, designed for groups of every size. We supply scalable, affordable, and industry-specific solutions that enhance method performance, reduce operational fees, and power sustainable growth. Hire Epicor ERP consultant specialists that offers complete cease-to-quit ERP services, from implementation and customization to integration and ongoing support. Whether you're constructing a brand-new Epicor ERP tool or improving an existing one, we make certain seamless deployment aligned with your business desires. Contact us these days to start your virtual transformation with a free session and quote. Reliable Epicor ERP Consultants for Integration, Strategy, And Performance
              </p>

              {/* 4 Stats Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 pb-1">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">100+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">Software Developers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">Fortunes 500 Companies</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">Project Completed in Software</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">5-Star Clutch Reviews</div>
                </div>
              </div>

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

            {/* Right Hero Meeting / ERP Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[520px] flex justify-center">
                <img
                  src="/images/epicor_erp_banner.svg"
                  alt="Real-Time Insight Control with Epicor ERP Consulting Services"
                  className="w-full h-auto object-contain max-h-[420px]"
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
      {/* 2. LEADING EPICOR ERP CONSULTING COMPANY SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/leading_mobile_app_consulting.jpg"
                  alt="Leading Epicor ERP Consulting Company"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Leading Epicor ERP <br />
                Consulting & Integration <br />
                Company
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our certified Epicor ERP consulting specialists combine deep manufacturing domain knowledge, technical development prowess, and business workflow analysis to help enterprises unlock the full power of Epicor. From blueprint architecture to post-launch optimization, we partner with your team to eliminate operational silos, automate manual entry, and elevate manufacturing throughput.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                To provide Enterprise Epicor ERP Consulting Services with a primary emphasis on shop floor efficiency and supply chain visibility, we conduct in-depth assessments of your job scheduling, inventory management, cost accounting, and compliance mandates before writing a single line of code.
              </p>
            </div>
          </div>
        </Container>
      </section>


      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP-RATED BANNER */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. GET 100% CUSTOMIZABLE EPICOR ERP CONSULTING EXPERTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Epicor ERP Consulting & Development Experts
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
                Modernize, Integrate, And Automate Core Operations
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Implementing or upgrading an ERP platform like Epicor is one of the most critical digital investments an enterprise will make. Without seasoned technical leadership and domain-specific advisory, companies risk prolonged downtime, failed data conversions, and user friction. Our <strong className="text-[#005F96] font-semibold">Epicor ERP Consulting Services</strong> provide comprehensive guidance to identify risks early, architect clean customizations, and secure total alignment with industry best practices.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Utilize our specialized Epicor consulting capabilities for Kinetic, Prophet 21, and third-party cloud integrations to automate shop floor data collection, streamline multi-entity financial consolidations, and elevate customer satisfaction. Whether you are an industrial manufacturer or wholesale distributor, partnering with our Epicor specialists ensures maximum return on your ERP investment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5B. ADVANCED TECHNOLOGIES FOR TOP-TIER EPICOR ERP SOFTWARE SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans overflow-hidden border-b border-slate-100">
        <Container>
          {/* Centered Section Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Advanced Technologies Firevy Uses for Top-Tier Epicor ERP Software Solutions
            </h2>
          </div>

          {/* Cards Carousel Slider */}
          <div className="relative">
            <div
              ref={techSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-1 no-scrollbar select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {advancedErpTechnologies.map((tech) => (
                <div
                  key={tech.id}
                  className="w-[280px] sm:w-[330px] lg:w-[360px] flex-shrink-0 bg-[#E5F3FC] rounded-xl p-6 sm:p-7 flex flex-col justify-start text-left transition-all duration-200 hover:shadow-md border border-sky-100/60"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mb-4 flex items-center justify-start">
                    <img
                      src={tech.icon}
                      alt={tech.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-2 tracking-tight">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-[13px] sm:text-[13.5px] leading-[1.65] font-normal">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Centered Below) */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => scrollTechSlider('left')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Previous technologies"
              >
                <ArrowLeft className="w-5 h-5 text-slate-800" />
              </button>
              <button
                type="button"
                onClick={() => scrollTechSlider('right')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Next technologies"
              >
                <ArrowRight className="w-5 h-5 text-slate-800" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 7. MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (IMAGE 1) */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 8. INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS (IMAGE 2) */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Mobile App Development" />

      {/* ========================================================================= */}
      {/* 9. ABOUT US STATS (IMAGE 3) */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Sapphire" />

      {/* ========================================================================= */}
      {/* 10. IMPACT OF EPICOR ERP CONSULTING SERVICES FOR BUSINESS SUCCESS (IMAGE 4) */}
      {/* ========================================================================= */}
      <TransformativeImpactSection
        title="Impact Of Epicor ERP Consulting Services for Business Success"
      />

      {/* ========================================================================= */}
      {/* 11. SAPPHIRE CUSTOM SOFTWARE DEVELOPMENT SERVICES (IMAGE 5) */}
      {/* ========================================================================= */}
      <CustomItServicesSection
        title="Sapphire Custom Software Development Services"
        subtitle="Sapphire developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Sapphire provides full-service mobile app development customized to meet your requirements."
      />

      {/* ========================================================================= */}
      {/* 12. SECTORS THRIVING SAPPHIRE'S TOP EPICOR ERP SOFTWARE DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <SectorsThrivingSection
        title="Sectors Thriving Sapphire’s Top Epicor ERP Software Development Services"
      />

      {/* ========================================================================= */}
      {/* 13. SUCCESS STORIES + 4 STAT BOXES (MATCHING SCREENSHOT) */}
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
            {/* Card 1: Document Quality Analyzer Website Development */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#E0F2FE] text-[#0284C7] text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/success_stories/redetect.svg"
                  alt="Document Quality Analyzer Website Development"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Document Quality Analyzer Website Development
              </h3>
            </div>

            {/* Card 2: File Sharing App Development */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/file_sharing_application.svg"
                  alt="File Sharing App Development"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                File Sharing App Development
              </h3>
            </div>

            {/* Card 3: Data Analytics Website Development */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/data_analytics.svg"
                  alt="Data Analytics Website Development"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Data Analytics Website Development
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
      {/* 14. TECHNOLOGY STACK THAT SAPPHIRE SOFTWARE DEVELOPERS USE PROFICIENTLY */}
      {/* ========================================================================= */}
      <TechStackProficientGrid
        title="Technology Stack That Sapphire Software Developers Use Proficiently"
        rows={epicorDevelopersTechStack}
      />

      {/* ========================================================================= */}
      {/* 9. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF EPICOR ERP CONSULTING SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of Epicor ERP Consulting Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our Epicor ERP Consulting Services streamline manufacturing lifecycles, eliminate manual errors, and empower real-time operational decision-making:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {epicorBenefitsData.map((card, idx) => (
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
      {/* 10B. COMPREHENSIVE EPICOR ERP CONSULTING SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans overflow-hidden border-b border-slate-100">
        <Container>
          {/* Centered Section Title & Subtitle */}
          <div className="text-center w-full max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Comprehensive Epicor ERP Consulting Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
              We have a complete catalog of Epicor ERP consulting services meant to improve your business processes
            </p>
          </div>

          {/* Cards Carousel Slider */}
          <div className="relative">
            <div
              ref={comprehensiveSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-1 no-scrollbar select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {comprehensiveEpicorServices.map((service) => (
                <div
                  key={service.id}
                  className="w-[290px] sm:w-[340px] lg:w-[370px] flex-shrink-0 bg-[#E5F3FC] rounded-2xl p-7 sm:p-8 flex flex-col justify-start text-left transition-all duration-200 hover:shadow-md border border-sky-100/60"
                >
                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-[13.5px] sm:text-[14px] leading-[1.7] font-normal">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Centered Below) */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => scrollComprehensiveSlider('left')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Previous services"
              >
                <ArrowLeft className="w-5 h-5 text-slate-800" />
              </button>
              <button
                type="button"
                onClick={() => scrollComprehensiveSlider('right')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Next services"
              >
                <ArrowRight className="w-5 h-5 text-slate-800" />
              </button>
            </div>
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
      {/* 14. OUR STORY, THEIR WORDS (HOME PAGE MULTI-CARD VIDEO CAROUSEL) */}
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
      <SapphireTechStackGrid domainName="Epicor ERP consulting" />

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
        faqList={epicorConsultingFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART AS EPICOR ERP CONSULTING? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Epicor ERP Consulting?"
        subtitle="Being unique is our quality! Firevy Solutions believe in the things that give manufacturers and distributors an edge over competitors. We are renowned enterprise software and ERP organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire ERP implementation process stands us one level up the competitors."
      />

      {/* ========================================================================= */}
      {/* 23. GET ACCESS TO TOP EPICOR ERP CONSULTING (CTA BANNER) */}
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
            Get access to top Epicor ERP consulting to streamline and transform your enterprise operations.
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

export default EpicorErpConsultingServices;
