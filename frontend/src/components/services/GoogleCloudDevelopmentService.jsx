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

export const GoogleCloudDevelopmentService = () => {
  // Carousel State for Cutting-Edge Technologies Section
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);

  // 6 Cutting-Edge Technologies tailored to Google Cloud Platform
  const googleCloudTechnologies = [
    {
      id: 1,
      title: 'Google Kubernetes Engine (GKE)',
      desc: 'Deploy, manage, and scale enterprise containerized applications using GKE with automated multi-zone clustering, Autopilot mode, and seamless zero-downtime rolling upgrades.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="3" />
          <path d="M12 21l-3 3 3 3M20 21l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="20" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'BigQuery Data Warehousing',
      desc: 'Analyze petabytes of structured and unstructured business intelligence data at lightning speed using serverless, highly scalable BigQuery SQL queries and built-in ML modeling.',
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
      id: 3,
      title: 'Cloud Run Serverless Containers',
      desc: 'Run stateless containers instantly invocable via web requests or Pub/Sub events. Pay solely for resources consumed while automatically scaling down to zero when idle.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="20 4 34 12 34 28 20 36 6 28 6 12 20 4" />
          <line x1="20" y1="4" x2="20" y2="36" />
          <circle cx="20" cy="20" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Vertex AI & Machine Learning',
      desc: 'Build, train, and deploy advanced generative AI and machine learning models leveraging Google Cloud Vertex AI, Gemini models, AutoML, and customized neural network pipelines.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="14" />
          <path d="M12 20h16M20 12v16" strokeLinecap="round" />
          <circle cx="20" cy="20" r="4" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Cloud Spanner & Global Cloud SQL',
      desc: 'Architect fully managed relational databases with five-nines (99.999%) availability, strongly consistent global transactions, and automatic database replication across continents.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="6" width="26" height="12" rx="3" />
          <rect x="7" y="22" width="26" height="12" rx="3" />
          <circle cx="13" cy="12" r="1.5" fill="#0084D1" />
          <circle cx="13" cy="28" r="1.5" fill="#0084D1" />
          <line x1="20" y1="18" x2="20" y2="22" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Terraform & GCP Cloud DevOps',
      desc: 'Automate Google Cloud infrastructure provisioning with Infrastructure as Code (IaC), Cloud Build CI/CD pipelines, artifact registries, and proactive Cloud Monitoring observability.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="28" height="24" rx="3" />
          <line x1="6" y1="24" x2="34" y2="24" />
          <circle cx="14" cy="16" r="3.5" />
          <path d="M23 13l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const maxTechIndex = Math.max(0, googleCloudTechnologies.length - 3);

  // 6 Benefits Cards Grid (Exact 1:1 Match to Reference Screenshot)
  const googleCloudBenefits = [
    {
      title: 'Seasoned GCP Certified Architects',
      desc: 'Google Cloud Platform architecture, security governance, and multi-region deployment are among the subjects our certified engineers are well familiar with, ensuring peak scalability.',
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
      title: 'Mastery of Leading Tools & AI Services',
      desc: 'To execute exact and reliable cloud solutions, our team makes use of modern Google Cloud technologies like GKE, BigQuery, Cloud Run, Vertex AI, and Terraform IaC software.',
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
      title: 'Agile and Group Cloud Migration',
      desc: 'Working directly with your team, we use an agile approach to identify your application challenges and provide tailored Google Cloud migration solutions fit for your company goals.',
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
      title: 'Testing for Quality & High Availability',
      desc: 'To guarantee resilience and speed, every Google Cloud deployment goes through thorough chaos testing and performance validation under real-time global traffic loads.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="9" width="26" height="32" rx="3" />
          <path d="M18 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M16 19l2 2 4-4" />
          <line x1="25" y1="19" x2="31" y2="19" />
          <path d="M16 27l2 2 4-4" />
          <line x1="25" y1="27" x2="31" y2="27" />
          <circle cx="37" cy="11" r="3" />
        </svg>
      )
    },
    {
      title: 'Future-Ready, Scalable Solutions',
      desc: 'Our developers provide scalable Google Cloud architectures meant to expand with your company, effortlessly managing microservices scaling, event streaming, and analytics.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="8" width="12" height="12" rx="2" />
          <circle cx="24" cy="14" r="2" fill="#0084D1" />
          <line x1="24" y1="4" x2="24" y2="8" />
          <line x1="14" y1="14" x2="18" y2="14" />
          <line x1="30" y1="14" x2="34" y2="14" />
          <path d="M9 34c4-2 9-2 13-2h4a6 6 0 0 1 6 6v3H7v-3a4 4 0 0 1 2-4z" />
          <path d="M22 32l3-5a2 2 0 0 1 3 2l-2 3" />
        </svg>
      )
    },
    {
      title: 'Constant Support & FinOps Optimization',
      desc: 'We provide ongoing assistance for Google Cloud services to maintain the current and optimal state of your infrastructure, offering 24/7 SRE monitoring, right-sizing, and cost optimization.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 26V20a10 10 0 0 1 20 0v6" />
          <rect x="11" y="24" width="6" height="10" rx="2" />
          <rect x="31" y="24" width="6" height="10" rx="2" />
          <path d="M34 32v2a4 4 0 0 1-4 4h-6" />
          <circle cx="21" cy="38" r="2" fill="#0084D1" />
        </svg>
      )
    }
  ];

  // Carousel State for Our Expertise Section
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const [isExpertiseHovered, setIsExpertiseHovered] = useState(false);
  const expertiseScrollRef = useRef(null);

  const googleCloudExpertiseCards = [
    {
      title: 'GKE Microservices Orchestration',
      desc: 'Our Google Cloud solutions seamlessly deploy, manage, and scale containerized microservices across hybrid and multi-cloud clusters using Google Kubernetes Engine (GKE).'
    },
    {
      title: 'Compliance and Zero-Trust Security',
      desc: 'Security is our first focus; we safeguard your GCP perimeter using Google Cloud Armor, IAM least-privilege, Key Management Service (KMS), and automated compliance audits.'
    },
    {
      title: 'BigQuery Data Analytics Pipelines',
      desc: 'We clean, transform, and analyze enterprise data at scale using Google Cloud Dataflow, Pub/Sub, and serverless BigQuery data warehousing.'
    },
    {
      title: 'Flexible and Scalable Cloud Run',
      desc: 'Your applications grow frictionlessly with serverless Cloud Run, automatically scaling from zero to thousands of instances in response to real-time user traffic spikes.'
    },
    {
      title: 'Vertex AI & Generative Intelligence',
      desc: 'We integrate Google Cloud Vertex AI, custom foundation models, and predictive algorithms into modern enterprise applications to unlock automated business value.'
    },
    {
      title: 'Hybrid Cloud with Google Anthos',
      desc: 'Deploy and manage unified Kubernetes applications across Google Cloud, on-premises datacenters, and other major clouds with Google Distributed Cloud and Anthos.'
    }
  ];

  useEffect(() => {
    if (isExpertiseHovered) return;
    const interval = setInterval(() => {
      setExpertiseIndex((prev) => (prev + 1) % googleCloudExpertiseCards.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isExpertiseHovered]);

  useEffect(() => {
    if (expertiseScrollRef.current) {
      const cardStep = 390;
      expertiseScrollRef.current.scrollTo({
        left: expertiseIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [expertiseIndex]);

  // Success Stories tailored to Google Cloud
  const googleCloudSuccessCards = [
    {
      id: 1,
      title: 'Enterprise Microservices & Cloud-Native GKE Cluster',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'Real-Time BigQuery Streaming Analytics Platform',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Vertex AI Recommendation & Machine Learning Engine',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // 9 Complete FAQs (Tailored to Google Cloud Platform & Firevy.co)
  const googleCloudFaqs = [
    {
      question: '1. What are Google Cloud Development Services, and why are they essential?',
      answer: 'Google Cloud Development Services encompass cloud architecture design, application migration, container orchestration (GKE), serverless compute (Cloud Run), and data analytics (BigQuery) on Google Cloud Platform. They ensure high operational availability, global speed, and built-in AI innovations for enterprises.'
    },
    {
      question: '2. How do your Google Cloud migration services work?',
      answer: 'Our process includes legacy infrastructure auditing, workload readiness evaluation, automated database replication with GCP Database Migration Service, containerization with GKE, validation testing, and cutover with zero downtime.'
    },
    {
      question: '3. What makes Google Kubernetes Engine (GKE) superior for container management?',
      answer: 'GKE is the industry-leading managed Kubernetes service developed by Google. It offers four-way auto-scaling, integrated Google Cloud monitoring, automated node repairs, and GKE Autopilot for automated cluster infrastructure management.'
    },
    {
      question: '4. Do you provide Google Cloud development services tailored to our sector?',
      answer: 'Yes, we serve diverse industries including Fintech, Healthcare, eCommerce, Logistics, and SaaS, ensuring full regulatory compliance with HIPAA, SOC 2, and GDPR standards.'
    },
    {
      question: '5. How secure is our enterprise infrastructure on Google Cloud?',
      answer: 'Google Cloud infrastructure is built with security-by-design principles. We enforce IAM least privilege, Google Cloud Armor DDoS protection, VPC Service Controls, Customer-Managed Encryption Keys (CMEK), and continuous vulnerability scanning.'
    },
    {
      question: '6. How does BigQuery accelerate enterprise data intelligence?',
      answer: 'BigQuery is a serverless, multi-cloud enterprise data warehouse that executes complex SQL queries over petabytes of data in seconds, offering built-in machine learning (BigQuery ML) and direct integration with business intelligence dashboards.'
    },
    {
      question: '7. Why should businesses choose Firevy.co for Google Cloud development services?',
      answer: 'With certified Google Cloud Professional Architects and 500+ successful cloud deliveries, Firevy.co is trusted by global companies to modernize workloads, prevent downtime, and unlock unmatched performance.'
    },
    {
      question: '8. What types of Google Cloud services does Firevy.co offer?',
      answer: 'We offer end-to-end GCP services including GKE Kubernetes deployment, serverless Cloud Run development, BigQuery analytics pipelines, Vertex AI integration, Cloud Spanner database architecture, and 24/7 SRE managed operations.'
    },
    {
      question: '9. Does Firevy.co offer continuous Google Cloud cost optimization (FinOps)?',
      answer: 'Yes, we implement proactive GCP FinOps practices, including committed use discounts (CUDs), instance rightsizing, preemptible VM scheduling, and automated Cloud Billing alerts to lower ongoing cloud expenses by up to 50%.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white">
      {/* SEO Metadata */}
      <SEO
        title="Google Cloud Development Services | GCP Consulting & Architecture | Firevy.co"
        description="Accelerate your enterprise digital transformation with Firevy's Google Cloud Development Services. GKE Kubernetes, BigQuery analytics, Cloud Run serverless, and Vertex AI solutions."
        keywords="Google Cloud Development Services, GCP Consulting, Google Cloud Platform, Google Kubernetes Engine GKE, BigQuery Data Warehouse, Cloud Run, Vertex AI, Firevy.co"
        url="https://firevy.co/services/google-cloud-development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (EXACT 1:1 MATCH TO REFERENCE FIRST IMAGE)               */}
      {/* ========================================================================= */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Title + Paragraph + 4 Stats + CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.18] font-sans">
                Google Cloud Development <br />
                Services
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.75] max-w-2xl font-sans">
                Go that extra mile with best Google Cloud Development Services, an epitome in advancement and cost-effective services designed for altogether different products and sizes. I am more than a startup trying to grow or an enterprise in need of modernizing. We build cloud-native web and mobile apps that scale and secure the handling of their business. Flexibility and speed are neatly integrated into our made to fit software so that your charges will be minimal. Conduct your app development today! Enjoy the deals by Affordable Google Cloud consulting and development services provider that has store for you from here until eternity.
              </p>

              {/* 4 Stats (Exact layout from First Image - clean text without card borders) */}
              <div className="flex flex-wrap items-start gap-8 sm:gap-11 pt-2">
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
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Action Button (Exact from First Image) */}
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

            {/* Right Column: Exact Matching 2D Vector Illustration from First Image */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center">
                <img
                  src="/images/google_cloud_dev_hero.jpg"
                  alt="Google Cloud Development Services"
                  className="w-full h-auto object-contain drop-shadow-md transition-transform duration-500 ease-out hover:scale-105 cursor-pointer"
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
      {/* 3. SAFEST BEST GOOGLE CLOUD COMPANY (Image Left + Narrative Right)        */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Cloud Data Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/google_cloud_pipeline_solutions.jpg"
                  alt="Automated Google Cloud Pipelines"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for the Safest Best Google Cloud Development Company
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Enterprises handle enormous volumes of data from numerous touchpoints in the digital age. Monolithic on-premise servers may, however, be rife with scaling bottlenecks, single points of failure, and excessive operational costs, causing business slowdowns and missed opportunities.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By migrating to Google Cloud Platform, our specialist cloud engineers enable organizations to leverage resilient GKE Kubernetes orchestration, serverless Cloud Run microservices, and secure VPC multi-zone networks to guarantee high availability and continuous uptime.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. BRIEF ABOUT GOOGLE CLOUD DEVELOPMENT (Content Left + Image Right)       */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] text-slate-900 font-sans text-left overflow-hidden border-y border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Brief About Google Cloud Development Services
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By means of a well-organized Google Cloud infrastructure, businesses can drastically increase developer velocity, eliminate hardware management, and make educated decisions powered by real-time analytics. Professional GCP Development Services guarantee long-term operational excellence and scalability.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Acquire a comprehensive architecture built on global infrastructure, low-latency networking, and advanced Vertex AI integration. As a core part of our Google Cloud Development Services, we help you modernize legacy applications, streamline DevOps CI/CD, and maximize cloud ROI.
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

            {/* Right Column: Google Cloud Team Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/google_cloud_enterprise_team.jpg"
                  alt="Google Cloud Development & Architecture Team"
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
      {/* 6. 100% CUSTOMIZABLE GOOGLE CLOUD SERVICES (Quote Card + Narrative)       */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading Matching Reference Screenshot */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Google Cloud Development Services
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
                Scalable and<br />intelligent cloud<br />guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative (Exact 1:1 Match to Reference Layout) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Operating with peak velocity in the data-driven world of today depends on resilient and hyper-scalable infrastructure. Legacy monoliths may, however, suffer from resource lock-in, unbudgeted downtime, and sluggish release cycles. As a Google Cloud Development Company, our customizable cloud solutions provide immediate agility and resilience.
              </p>
              <p>
                Our 100% personalized Google Cloud Solutions are designed for your unique enterprise workloads. Whether your needs are for GKE Kubernetes clustering, BigQuery petabyte data analysis, serverless Cloud Run backends, or enterprise security hardening with Google Cloud Armor, our certified team provides architectures that strengthen system uptime, advance analytics, and maximize business growth.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION (MATCHING REFERENCE SCREENSHOT)      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F4F8FA] font-sans text-left border-y border-slate-100">
        <Container className="max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-12">
            <div>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
                Cutting-Edge Technologies We Use For Development
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] max-w-2xl font-normal leading-relaxed">
                As a leading Google Cloud development organization, Firevy.co leverages state-of-the-art GCP services and DevOps tooling to craft world-class cloud infrastructure.
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
            {googleCloudTechnologies.slice(techCarouselIndex, techCarouselIndex + 3).map((tech) => (
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
      {/* 8. OUR PREMIUM SERVICES (MATCHING REFERENCE SCREENSHOT)                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES (MATCHING REFERENCE SCREENSHOT)                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={googleCloudSuccessCards}
        subtitle="Know Firevy.co journey from concept to cloud success. Explore how we've deployed resilient Google Cloud architectures and achieved remarkable results for our enterprise clients."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER (PROUD TO HAVE PICKED THESE UP ALONG THE WAY)     */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR GOOGLE CLOUD SERVICES (EXACT 1:1 MATCH TO REFERENCE)  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Google Cloud Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Years of enterprise cloud engineering, GKE orchestration, and BigQuery analytics have made our certified Google Cloud developers very talented individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {googleCloudBenefits.map((benefit, i) => (
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
      {/* 12. OUR EXPERTISE IN DEDICATED GOOGLE CLOUD SERVICES                      */}
      {/* ========================================================================= */}
      <section
        className="py-14 sm:py-18 bg-white font-sans w-full overflow-hidden border-t border-slate-100 text-left"
        onMouseEnter={() => setIsExpertiseHovered(true)}
        onMouseLeave={() => setIsExpertiseHovered(false)}
      >
        {/* Header Container */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-10">
          <h2 className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 text-[26px] sm:text-[32px] lg:text-[36px]">
            Our Expertise in Dedicated Google Cloud Development
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            Our Google Cloud Development Company specializes in creating and deploying focused cloud infrastructure solutions for companies of all sizes.
          </p>
        </div>

        {/* Edge-to-edge Full-width Carousel */}
        <div className="w-full relative">
          <div
            ref={expertiseScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {googleCloudExpertiseCards.map((card, idx) => (
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
        title="Google Cloud Development Process We Follow"
        subtitle="Our systematic cloud pipeline from initial architecture auditing and workload assessment to automated GKE deployment, BigQuery integration, and 24/7 SRE monitoring."
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
      {/* 21. FREQUENTLY ASKED QUESTIONS (Exact 9 Reference FAQs)                   */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={googleCloudFaqs}
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
          title="Have Google Cloud Development Challenge To Address ?"
          subtitle="Get access to top Google Cloud Certified Architects & SRE Specialists at Firevy.co to transform your computing into a secure, hyper-scalable cloud ecosystem."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default GoogleCloudDevelopmentService;
