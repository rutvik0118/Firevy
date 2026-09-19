import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import ProudAwardsBanner from './ProudAwardsBanner';
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
  Award,
  Cloud,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const CloudFoundrySoftwareDevelopmentService = () => {
  // Carousel State for Cutting-Edge Technologies Section
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);

  // 6 Cutting-Edge Technologies tailored to Cloud Foundry PaaS
  const cloudFoundryTechnologies = [
    {
      id: 1,
      title: 'Diego Container Runtime & Orchestration',
      desc: 'Deploy resilient container workloads managed by Diego auctioneers and rep cells. Diego continuously monitors application instance health, rescheduling containers automatically in failure scenarios.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="14" />
          <path d="M12 20h16M20 12v16" strokeLinecap="round" />
          <circle cx="20" cy="20" r="4" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'BOSH Multi-Cloud Lifecycle Management',
      desc: 'Orchestrate infrastructure release engineering, software packaging, and VM provisioning across AWS, Azure, GCP, and vSphere using BOSH manifests for automated self-healing clusters.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="20 4 34 12 34 28 20 36 6 28 6 12 20 4" />
          <line x1="20" y1="4" x2="20" y2="36" />
          <circle cx="20" cy="20" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Cloud-Native Buildpacks (CNB)',
      desc: 'Transform source code directly into production-ready OCI container images without Dockerfiles. Buildpacks standardize runtime versions, patch vulnerabilities, and streamline CI/CD builds.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="3" />
          <path d="M12 21l-3 3 3 3M20 21l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="20" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Open Service Broker API (OSBAPI)',
      desc: 'Seamlessly bind stateful data services, Redis caches, message queues (RabbitMQ, Kafka), and relational databases (PostgreSQL, MySQL) to microservices via automated service instances.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="20" cy="10" rx="14" ry="5" />
          <path d="M6 10v10c0 2.8 6.3 5 14 5s14-2.2 14-5V10" />
          <path d="M6 20v10c0 2.8 6.3 5 14 5s14-2.2 14-5V20" />
          <circle cx="20" cy="25" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Gorouter & Dynamic Traffic Mesh',
      desc: 'Handle high-throughput ingress routing with intelligent session affinity, zero-downtime blue-green deployments, and automatic TLS termination across dynamic container IP endpoints.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="5" />
          <circle cx="28" cy="12" r="5" />
          <circle cx="20" cy="30" r="6" />
          <path d="M15 16l3 8M25 16l-3 8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'VMware Tanzu & Enterprise PaaS Modernization',
      desc: 'Modernize enterprise legacy monoliths into Kubernetes-backed Tanzu Application Service (TAS). Unify developer experiences across hybrid private and public cloud ecosystems.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="7" width="26" height="26" rx="4" />
          <path d="M14 20h12M20 14v12" strokeLinecap="round" />
          <circle cx="20" cy="20" r="8" strokeDasharray="3 3" />
        </svg>
      )
    }
  ];

  const maxTechIndex = Math.max(0, cloudFoundryTechnologies.length - 3);

  // 6 Cloud Foundry Benefits
  const cloudFoundryBenefits = [
    {
      icon: <Zap className="w-7 h-7 text-[#005F96]" />,
      title: 'Instant cf push Velocity',
      desc: 'Developers focus purely on code while Cloud Foundry handles container compilation, dependency resolution, networking, and zero-downtime deployment in seconds.'
    },
    {
      icon: <Layers className="w-7 h-7 text-[#005F96]" />,
      title: 'Multi-Cloud Portability',
      desc: 'Avoid vendor lock-in by executing identical applications across AWS, Microsoft Azure, Google Cloud, and private VMware vSphere without changing single lines of source code.'
    },
    {
      icon: <RefreshCw className="w-7 h-7 text-[#005F96]" />,
      title: 'Self-Healing & Auto-Scaling',
      desc: 'Built-in Diego health management monitors CPU, memory, and HTTP response metrics, automatically restarting crashed instances and dynamically scaling under peak traffic.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#005F96]" />,
      title: 'Zero-Downtime Deployments',
      desc: 'Perform seamless blue-green releases and rolling application updates with instantaneous Gorouter traffic shifting, eliminating scheduled maintenance windows.'
    },
    {
      icon: <Lock className="w-7 h-7 text-[#005F96]" />,
      title: 'Integrated Enterprise Security',
      desc: 'Enforce platform-wide OS patching, isolated application containers (Garden), encrypted TLS communication, and granular role-based identity access controls (UAA).'
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-[#005F96]" />,
      title: 'Optimized Infrastructure TCO',
      desc: 'Maximize physical and virtual resource density through automated container packing, reducing underlying cloud VM costs and cutting sysadmin operational overhead by up to 50%.'
    }
  ];

  // Cloud Foundry Expertise Cards for Horizontal Carousel
  const cloudFoundryExpertiseCards = [
    {
      title: 'Cloud Foundry App Modernization',
      desc: 'Refactor monolithic legacy enterprise apps into 12-factor cloud-native microservices engineered to run natively on Cloud Foundry PaaS.'
    },
    {
      title: 'BOSH Deployment & Cluster Ops',
      desc: 'Architect, configure, and maintain production-grade Cloud Foundry installations with automated health recovery and rolling upgrades via BOSH.'
    },
    {
      title: 'VMware Tanzu Platform Engineering',
      desc: 'Deploy and manage VMware Tanzu Application Service (TAS) and Tanzu Kubernetes Grid (TKG) for mission-critical enterprise environments.'
    },
    {
      title: 'Custom Buildpack Development',
      desc: 'Create secure, enterprise-tailored buildpacks for custom runtimes, proprietary frameworks, and hardened compliance environments.'
    },
    {
      title: 'Open Service Broker Integration',
      desc: 'Develop bespoke OSBAPI brokers to connect custom internal enterprise databases, legacy systems, and external SaaS solutions to Cloud Foundry.'
    },
    {
      title: 'Multi-Cloud PaaS Migration',
      desc: 'Safely migrate on-premise application portfolios to Cloud Foundry hosted across AWS, Google Cloud, or Microsoft Azure with zero business disruption.'
    }
  ];

  // Auto-scroll logic for Expertise Carousel
  const expertiseScrollRef = useRef(null);
  const [isExpertiseHovered, setIsExpertiseHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isExpertiseHovered && expertiseScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = expertiseScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          expertiseScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          expertiseScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isExpertiseHovered]);

  // Success Stories for Cloud Foundry
  const cloudFoundrySuccessCards = [
    {
      id: 1,
      tag: 'FINTECH PLATFORM',
      title: 'Global Bank Achieves 10x Deployment Frequency with Cloud Foundry',
      desc: 'Modernized core transactional banking systems into containerized Spring Boot microservices on Cloud Foundry, cutting deployment cycles from 6 weeks to 4 hours with 99.999% availability.',
      image: '/images/cloud_foundry_pipeline.jpg',
      metric: '10x Faster Releases',
      metricLabel: 'Continuous Delivery'
    },
    {
      id: 2,
      tag: 'ENTERPRISE SAAS',
      title: 'Multi-Tenant SaaS Scaling to 15 Million Users on Tanzu PaaS',
      desc: 'Architected automated autoscaling policies and custom Open Service Brokers for RabbitMQ and PostgreSQL, handling 20,000 requests per second with zero dropped transactions.',
      image: '/images/cloud_foundry_hero.jpg',
      metric: '15M+ Users',
      metricLabel: 'Zero Downtime'
    },
    {
      id: 3,
      tag: 'HEALTHCARE & PHARMA',
      title: 'HIPAA-Compliant Patient Portal on Multi-Cloud Foundry Architecture',
      desc: 'Deployed high-security Cloud Foundry platform across hybrid on-prem and AWS clouds, delivering automated end-to-end TLS encryption, audit logging, and automated OS security patch rollouts.',
      image: '/images/cloud_foundry_team.jpg',
      metric: '100% Compliant',
      metricLabel: 'Automated Patching'
    }
  ];

  // 9 Cloud Foundry FAQs
  const cloudFoundryFaqs = [
    {
      q: 'What is Cloud Foundry Software Development?',
      a: 'Cloud Foundry is the industry-leading open-source Platform as a Service (PaaS) that enables developers to build, test, deploy, and scale cloud-native applications across multi-cloud environments (AWS, Azure, Google Cloud, vSphere) using simple CLI commands like "cf push", abstracting away underlying server infrastructure.'
    },
    {
      q: 'How does Cloud Foundry differ from standard Kubernetes?',
      a: 'Kubernetes is a low-level container orchestrator requiring teams to manage container manifests, ingresses, and cluster networking manually. Cloud Foundry provides a higher-level developer-centric Platform as a Service (PaaS) abstraction where code is automatically packaged into containers via buildpacks, routed through Gorouter, and managed with self-healing features out of the box.'
    },
    {
      q: 'Can Firevy.co help migrate our legacy applications to Cloud Foundry?',
      a: 'Yes. Our Cloud Foundry specialists evaluate your current architecture, modernize codebases into 12-factor cloud-native applications, configure custom buildpacks, bind enterprise data services via Open Service Brokers, and execute zero-downtime blue-green migrations.'
    },
    {
      q: 'What programming languages and frameworks are supported on Cloud Foundry?',
      a: 'Cloud Foundry natively supports Java (Spring Boot), Node.js, Python, Go, Ruby, PHP, .NET Core, and static web apps via official Cloud Native Buildpacks. Additionally, custom buildpacks can be engineered for proprietary runtimes.'
    },
    {
      q: 'What is VMware Tanzu Application Service (TAS)?',
      a: 'VMware Tanzu Application Service (formerly Pivotal Cloud Foundry / PCF) is the commercial enterprise distribution of Cloud Foundry, featuring automated operations, integrated security scanning, enterprise service marketplaces, and multi-cloud management tools.'
    },
    {
      q: 'How does Cloud Foundry handle zero-downtime deployments?',
      a: 'Cloud Foundry utilizes blue-green deployment strategies through its Gorouter component. A new version of the app is deployed side-by-side with the old version. Once the new version passes health checks, traffic is dynamically shifted without interrupting active client requests.'
    },
    {
      q: 'What role does BOSH play in Cloud Foundry ecosystems?',
      a: 'BOSH is an open-source tool chain for release engineering, deployment, lifecycle management, and monitoring of distributed systems. It provisions VMs, installs software packages, performs rolling upgrades, and automatically reboots failed virtual machines across any hypervisor or cloud.'
    },
    {
      q: 'Can we run stateful applications like databases on Cloud Foundry?',
      a: 'Yes. Stateful services (PostgreSQL, MySQL, Redis, RabbitMQ, Kafka) are connected via the Open Service Broker API (OSBAPI). Cloud Foundry provisions dedicated instances and injects secure connection credentials directly into the application environment.'
    },
    {
      q: 'How do I hire dedicated Cloud Foundry developers from Firevy.co?',
      a: 'You can hire experienced Cloud Foundry architects, PaaS engineers, and DevOps specialists on flexible engagement models (dedicated team, time & materials, or project-based). Contact our team today for a free architecture review and consultation.'
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-900 overflow-hidden">
      <SEO
        title="Cloud Foundry Software Development Company | Firevy.co"
        description="Enterprise Cloud Foundry software development, PaaS engineering, BOSH lifecycle automation, and VMware Tanzu architecture by certified experts at Firevy.co."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (EXACT 1:1 REPLICATION OF SAPPHIRE / GOOGLE CLOUD HERO)   */}
      {/* ========================================================================= */}
      <section className="relative bg-white pt-8 sm:pt-14 pb-12 sm:pb-16 border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight font-sans">
                Cloud Foundry Software<br className="hidden sm:inline" /> Development Company
              </h1>

              <p className="text-sm sm:text-[14.5px] text-[#475569] font-normal leading-[1.78] font-sans max-w-2xl">
                Unlock opportunities for scalable, efficient, and customizable digital solutions with Cloud Foundry software development company, designed for large and small businesses alike. If you are a startup in search of agility or an established Enterprise Cloud Foundry solutions provider wanting to streamline your cloud-native deployment, Cloud Foundry consulting and implementation services provide affordable web and application development and application customization supported by Cloud Foundry's PaaS environment. Get a free project quote today to see how we might help build and transform your infrastructure into a high-performing, cloud-first environment.
              </p>

              {/* 4 Stats Grid (Exact 1:1 Match with Reference Image) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-2 pb-2">
                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">100+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Software<br />Developers
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">20+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Fortunes 500<br />Companies
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">1000+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Project Completed in<br />Software
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">320+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    5-Star Clutch<br />Reviews
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Res 2D Vector Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center">
                <img
                  src="/images/cloud_foundry_hero.svg"
                  alt="Cloud Foundry Software Development Services"
                  className="w-full h-auto object-contain transition-transform duration-500 ease-out hover:scale-105 cursor-pointer"
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
      {/* 3. SAFEST BEST CLOUD FOUNDRY COMPANY (Image Left + Narrative Right)       */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                <img
                  src="/images/cloud_foundry_pipeline.svg"
                  alt="Automated Cloud Foundry PaaS Architecture and Diego Cells"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for the Safest Best Cloud Foundry Software Development Company
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Enterprise software teams face increasing overhead managing low-level container infrastructure, custom Kubernetes manifests, and complex CI/CD scripts. By deploying Cloud Foundry PaaS, your engineering teams can shift 100% of their attention to business logic while the platform handles automated container compilation, Diego routing, and self-healing.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                At Firevy.co, our Cloud Foundry certified engineers architect resilient multi-cloud PaaS systems backed by BOSH lifecycle automation, Cloud Native Buildpacks, and custom Open Service Brokers. We empower enterprises to achieve continuous delivery with guaranteed 99.99% uptime.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. BRIEF ABOUT CLOUD FOUNDRY (Content Left + Image Right)                 */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] text-slate-900 font-sans text-left overflow-hidden border-y border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Brief About Cloud Foundry Software Development Services
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Cloud Foundry abstracts complex cloud infrastructure into an intuitive developer experience. With a single command (`cf push`), your application source code is bound to production runtimes, packaged into secure OCI containers, and dynamically routed to live traffic.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Whether you operate on private OpenStack/vSphere clusters or public clouds like AWS, Azure, and Google Cloud, our Cloud Foundry solutions eliminate vendor lock-in. We build automated failover, autoscaling policies, and integrated DevSecOps pipelines to optimize cloud spending and maximize release velocity.
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

            {/* Right Column: Cloud Foundry Architecture Team Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                <img
                  src="/images/cloud_foundry_team.jpg"
                  alt="Cloud Foundry PaaS Engineering Team"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
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
      {/* 6. 100% CUSTOMIZABLE SERVICES (Quote Card + Narrative)                    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Cloud Foundry Software Development Services
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

              {/* Speech pointer */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EFF7FE] z-20" />
              <div className="hidden lg:block absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[14px] border-l-[#BAE6FD] z-10" />

              <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
                “
              </div>

              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Developer-first,<br />zero-downtime PaaS<br />guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Navigating complex multi-cloud deployments without a standardized Platform as a Service leads to configuration drift, security gaps, and sluggish release cycles. As an enterprise Cloud Foundry Software Development Company, Firevy.co provides tailored PaaS architectures that empower developers to ship code rapidly without touching servers.
              </p>
              <p>
                Our 100% personalized Cloud Foundry Services are customized to your specific runtime, database binding, and compliance mandates. From Diego cell tuning to VMware Tanzu Application Service (TAS) enterprise migrations, we deliver scalable infrastructure that cuts operational toil and delivers true multi-cloud agility.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION                                      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F4F8FA] font-sans text-left border-y border-slate-100">
        <Container className="max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-12">
            <div>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
                Cutting-Edge Technologies We Use For Cloud Foundry
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] max-w-2xl font-normal leading-relaxed">
                As a premier Cloud Foundry engineering firm, Firevy.co leverages enterprise-grade PaaS orchestration, lifecycle tooling, and cloud-native frameworks.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2.5 mt-4 md:mt-0">
              <button
                onClick={() => setTechCarouselIndex((prev) => Math.max(0, prev - 1))}
                disabled={techCarouselIndex === 0}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#005F96] hover:border-[#005F96] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
                aria-label="Previous technologies"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTechCarouselIndex((prev) => Math.min(maxTechIndex, prev + 1))}
                disabled={techCarouselIndex >= maxTechIndex}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#005F96] hover:border-[#005F96] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
                aria-label="Next technologies"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3 Visible Cards Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudFoundryTechnologies.slice(techCarouselIndex, techCarouselIndex + 3).map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-[16px] p-7 sm:p-8 shadow-xs border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                    {tech.icon}
                  </div>
                  <h3 className="text-[18px] font-[800] text-[#0B0F19] mb-3 leading-snug tracking-tight">
                    {tech.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.8px] text-[#475569] leading-[1.68] font-normal">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. OUR PREMIUM SERVICES                                                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES                                                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={cloudFoundrySuccessCards}
        subtitle="Explore how Firevy.co has enabled global enterprises to transform software velocity and achieve resilient multi-cloud operations with Cloud Foundry PaaS."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER                                                   */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR CLOUD FOUNDRY SERVICES                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Cloud Foundry Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              A decade of enterprise PaaS engineering, Diego cell optimization, and BOSH automation makes our dedicated Cloud Foundry engineers the ideal technology partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cloudFoundryBenefits.map((benefit, i) => (
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
      {/* 12. OUR EXPERTISE IN CLOUD FOUNDRY SERVICES (Edge-to-edge Carousel)       */}
      {/* ========================================================================= */}
      <section
        className="py-14 sm:py-18 bg-white font-sans w-full overflow-hidden border-t border-slate-100 text-left"
        onMouseEnter={() => setIsExpertiseHovered(true)}
        onMouseLeave={() => setIsExpertiseHovered(false)}
      >
        <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-10">
          <h2 className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 text-[26px] sm:text-[32px] lg:text-[36px]">
            Our Expertise in Dedicated Cloud Foundry Services
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            Our Cloud Foundry team delivers bespoke architecture, deployment automation, and lifecycle operations across hybrid private and public clouds.
          </p>
        </div>

        <div className="w-full relative">
          <div
            ref={expertiseScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cloudFoundryExpertiseCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[310px] sm:w-[350px] lg:w-[370px] shrink-0 bg-[#DDF1FC] rounded-[16px] p-6 sm:p-7 flex flex-col justify-between shadow-2xs border border-[#D0EBFB] select-none h-[220px] sm:h-[230px] transition-all duration-300 hover:shadow-md hover:bg-[#D4EDFA]"
              >
                <div>
                  <h3 className="font-[800] text-[16.5px] sm:text-[18px] text-[#0B0F19] mb-2 text-left leading-snug tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#334155] leading-[1.6] text-left font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 text-left">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-2 rounded-[5px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[12.5px] sm:text-[13px] transition-all shadow-2xs cursor-pointer"
                  >
                    View More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        title="Cloud Foundry Development Process We Follow"
        subtitle="Our structured delivery pipeline: Architecture Assessment -> Buildpack Optimization -> Service Broker Binding -> Automated CI/CD cf push -> 24/7 SRE Monitoring."
      />

      {/* ========================================================================= */}
      {/* 16. OUR STORY, THEIR WORDS                                                */}
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
      {/* 21. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={cloudFoundryFaqs}
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
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Cloud Foundry Challenge To Address ?"
          subtitle="Get access to top Cloud Foundry Certified Architects and Tanzu specialists at Firevy.co to transform your deployment pipeline into an automated PaaS ecosystem."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default CloudFoundrySoftwareDevelopmentService;
