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

export const CloudDevOpsService = () => {
  // Carousel State for Cutting-Edge Technologies Section
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);

  // 6 Cutting-Edge Technologies tailored to Cloud & DevOps
  const cloudDevOpsTechnologies = [
    {
      id: 1,
      title: 'CI/CD Pipeline Automation',
      desc: 'Build continuous integration and deployment workflows using Jenkins, GitHub Actions, GitLab CI, and ArgoCD. Eliminate manual build bottlenecks and enable automated, zero-downtime releases.',
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
      title: 'Kubernetes & Container Orchestration',
      desc: 'Package, deploy, and scale enterprise microservices across hybrid and multi-cloud clusters using Docker, Kubernetes (K8s), Helm, Amazon EKS, Google GKE, and Azure AKS.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="14" />
          <path d="M12 20h16M20 12v16" strokeLinecap="round" />
          <circle cx="20" cy="20" r="4" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Infrastructure as Code (Terraform & IaC)',
      desc: 'Define, version control, and provision repeatable cloud infrastructure using Terraform, Pulumi, and CloudFormation. Prevent configuration drift and deploy entire cloud environments in minutes.',
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
      title: 'Multi-Cloud Architecture (AWS, Azure, GCP)',
      desc: 'Architect resilient, vendor-neutral cloud computing ecosystems across Amazon Web Services, Microsoft Azure, and Google Cloud Platform for maximum fault tolerance and disaster recovery.',
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
      title: 'DevSecOps & Automated Security',
      desc: 'Integrate automated static code analysis (SAST), container image audits (Trivy), secrets rotation (HashiCorp Vault), and compliance-as-code directly into developer commit cycles.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 4 L34 10 L34 22 C34 30 20 36 20 36 C20 36 6 30 6 22 L6 10 Z" />
          <path d="M14 20l4 4 8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'SRE Observability & Cloud FinOps',
      desc: 'Implement full-stack metrics, distributed tracing, and centralized log aggregation with Prometheus, Grafana, and Datadog, paired with continuous cloud cost governance and rightsizing.',
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

  const maxTechIndex = Math.max(0, cloudDevOpsTechnologies.length - 3);

  // 6 Benefits Cards Grid (Exact 1:1 Match to Reference Layout)
  const cloudDevOpsBenefits = [
    {
      title: 'Seasoned Cloud & DevOps Architects',
      desc: 'Multi-cloud architecture, automated CI/CD pipelines, and Kubernetes containerization are among the subjects our certified engineers are well familiar with, ensuring peak availability and speed.',
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
      title: 'Mastery of Leading Tools & Platforms',
      desc: 'To execute exact and rapid software releases, our team makes use of modern technologies like Terraform, Docker, Kubernetes, Jenkins, AWS, Azure, Google Cloud, and GitOps.',
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
      title: 'Agile Collaboration & Continuous Delivery',
      desc: 'Working directly with your team, we use an agile approach to identify deployment bottlenecks and build automated pipelines tailored to your release frequency goals.',
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
      title: 'Testing for Quality & Zero-Downtime Releases',
      desc: 'To guarantee resilience and reliability, every cloud deployment undergoes automated canary verification, blue-green cutovers, and instant automated rollback safeguards.',
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
      title: 'Future-Ready, Scalable Infrastructure',
      desc: 'Our developers provide scalable cloud infrastructure designed to grow with your business, smoothly handling horizontal container scaling, global CDN traffic, and database replication.',
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
      title: '24/7 SRE Support & FinOps Optimization',
      desc: 'We provide continuous site reliability engineering (SRE) support to maintain 99.99% availability, proactively resolve incidents, and continuously optimize monthly cloud spending.',
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

  const cloudDevOpsExpertiseCards = [
    {
      title: 'Continuous Delivery & GitOps',
      desc: 'Our Cloud & DevOps engineers build declarative GitOps pipelines with ArgoCD and GitHub Actions, delivering automated, auditable software updates directly into production.'
    },
    {
      title: 'Enterprise DevSecOps Governance',
      desc: 'Security is embedded at every pipeline stage; we protect your cloud perimeters using policy-as-code, automated vulnerability scanning, and centralized secrets vaults.'
    },
    {
      title: 'Multi-Cloud Architecture (AWS/Azure/GCP)',
      desc: 'We architect vendor-neutral, highly available cloud systems that balance workloads across AWS, Microsoft Azure, and Google Cloud with zero single points of failure.'
    },
    {
      title: 'Automated Microservices Scaling',
      desc: 'Your applications scale seamlessly with Kubernetes auto-scaling and serverless compute, responding in real-time to sudden traffic spikes without manual intervention.'
    },
    {
      title: 'Infrastructure as Code (Terraform)',
      desc: 'We replace manual cloud provisioning with modular, version-controlled Terraform modules, enabling immutable infrastructure and rapid disaster recovery.'
    },
    {
      title: '24/7 SRE & Real-Time Observability',
      desc: 'Ensure 99.99% uptime with automated self-healing, low mean time to recovery (MTTR), and full observability using Prometheus, Grafana, and cloud-native monitoring.'
    }
  ];

  useEffect(() => {
    if (isExpertiseHovered) return;
    const interval = setInterval(() => {
      setExpertiseIndex((prev) => (prev + 1) % cloudDevOpsExpertiseCards.length);
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

  // Success Stories tailored to Cloud & DevOps
  const cloudDevOpsSuccessCards = [
    {
      id: 1,
      title: 'Enterprise Multi-Cloud CI/CD & Kubernetes Pipeline',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'Zero-Downtime Blue-Green Microservices Architecture',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Real-Time Cloud Infrastructure & SRE Monitoring Platform',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // 9 Complete FAQs (Tailored to Cloud & DevOps Services & Firevy.co)
  const cloudDevOpsFaqs = [
    {
      question: '1. What are Cloud & DevOps Services, and why are they essential?',
      answer: 'Cloud & DevOps Services unite modern cloud computing architecture with automated DevOps release engineering. They combine scalable cloud hosting (AWS, Azure, GCP), continuous integration and deployment (CI/CD), Kubernetes container orchestration, and proactive Site Reliability Engineering (SRE) to accelerate software delivery and eliminate downtime.'
    },
    {
      question: '2. How do your Cloud & DevOps services accelerate development velocity?',
      answer: 'By automating manual build, test, security scanning, and deployment stages into declarative CI/CD pipelines, we reduce software release cycles from weeks to minutes, allowing engineering teams to ship updates up to 10x faster.'
    },
    {
      question: '3. What cloud platforms and DevOps tools do your engineers support?',
      answer: 'We support all major cloud providers (Amazon Web Services, Microsoft Azure, Google Cloud Platform) and top-tier DevOps technologies including Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, GitLab CI, Ansible, ArgoCD, Prometheus, and Grafana.'
    },
    {
      question: '4. Do you provide Cloud & DevOps services tailored to our sector?',
      answer: 'Yes, we serve diverse industries including Fintech, Healthcare, eCommerce, Logistics, and Enterprise SaaS, ensuring complete regulatory compliance with HIPAA, SOC 2, ISO 27001, and GDPR standards.'
    },
    {
      question: '5. How do you ensure zero downtime during production cloud deployments?',
      answer: 'We architect blue-green deployments, canary releases, and rolling Kubernetes pod updates with real-time health checks. If an anomaly is detected, traffic is immediately rerouted with automated zero-impact rollbacks.'
    },
    {
      question: '6. How does DevSecOps protect our cloud workloads?',
      answer: 'Through proactive DevSecOps, we embed static application security testing (SAST), dynamic vulnerability scanning (DAST), container image audits (Trivy), and centralized secrets management (HashiCorp Vault) directly into every code commit.'
    },
    {
      question: '7. Why should businesses choose Firevy.co for Cloud & DevOps services?',
      answer: 'With certified multi-cloud architects and 500+ successfully automated cloud environments, Firevy.co is trusted by global enterprises to eliminate infrastructure bottlenecks, improve system reliability, and reduce operational waste.'
    },
    {
      question: '8. What deliverables will we receive from a Cloud & DevOps engagement?',
      answer: 'Deliverables include modular Infrastructure as Code (IaC) repositories, fully automated multi-branch CI/CD pipelines, containerized Kubernetes manifests, centralized monitoring dashboards, and comprehensive disaster recovery documentation.'
    },
    {
      question: '9. Does Firevy.co provide continuous Cloud FinOps cost governance?',
      answer: 'Yes, we implement proactive Cloud FinOps practices, including compute rightsizing, spot instance scheduling, reserved capacity planning, and automated billing alerts to lower monthly cloud infrastructure expenditures by up to 50%.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white">
      {/* SEO Metadata */}
      <SEO
        title="Cloud & DevOps Services | Enterprise Cloud Infrastructure & CI/CD | Firevy.co"
        description="Unify cloud computing and DevOps automation with Firevy's Cloud & DevOps Services. Multi-cloud architecture (AWS, Azure, GCP), CI/CD pipelines, Kubernetes, Terraform, and 24/7 SRE."
        keywords="Cloud & DevOps Services, Cloud and DevOps, Cloud Infrastructure, CI/CD Automation, Kubernetes Orchestration, Terraform IaC, DevSecOps, SRE, Firevy.co"
        url="https://firevy.co/services/cloud-devops"
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
                Cloud & DevOps <br />
                Services
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.75] max-w-2xl font-sans">
                Go that extra mile with best Cloud & DevOps Services, an epitome in advancement and cost-effective services designed for altogether different products and sizes. We build cloud-native multi-cloud infrastructure and automated CI/CD pipelines that scale and secure the handling of your business. Flexibility and speed are neatly integrated into our made to fit solutions so that your deployment bottlenecks will be eliminated. Transform your delivery lifecycle today! Enjoy the reliability of an Affordable Cloud & DevOps consulting and engineering services provider that has store for you from here until eternity.
              </p>

              {/* 4 Stats (Exact layout from First Image - clean text without card borders) */}
              <div className="flex flex-wrap items-start gap-8 sm:gap-11 pt-2">
                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">150+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Cloud & DevOps<br />Engineers
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">25+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Fortunes 500<br />Companies
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">1200+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Deployments<br />Automated
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">5-Star</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Clutch Rating
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

            {/* Right Column: Exact Matching 2D Vector Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center">
                <img
                  src="/images/cloud_devops_hero.jpg"
                  alt="Cloud & DevOps Services"
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
      {/* 3. SAFEST BEST CLOUD & DEVOPS COMPANY (Image Left + Narrative Right)      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/cloud_devops_pipeline_solutions.jpg"
                  alt="Automated Cloud & DevOps Delivery Pipeline"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for the Safest Best Cloud & DevOps Company
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Modern digital enterprises handle enormous software complexity with continuous feature releases. Disconnected development and IT operations often lead to manual handoff delays, configuration drift, and production outages that disrupt user satisfaction.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By unifying Cloud computing and DevOps engineering, our specialist architects enable organizations to leverage repeatable Infrastructure as Code, Kubernetes microservice clusters, and automated CI/CD pipelines across AWS, Azure, and Google Cloud with guaranteed 99.99% uptime.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. BRIEF ABOUT CLOUD & DEVOPS SERVICES (Content Left + Image Right)       */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] text-slate-900 font-sans text-left overflow-hidden border-y border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Brief About Cloud & DevOps Services
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By means of an integrated Cloud & DevOps architecture, companies can drastically increase release velocity, eliminate infrastructure guesswork, and achieve continuous software delivery. Professional Cloud & DevOps Services ensure operational resilience and sustainable engineering velocity.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Gain complete control over multi-cloud resource provisioning, zero-downtime rolling updates, and proactive site reliability engineering. As a core part of our Cloud & DevOps Services, we help you eliminate deployment bottlenecks, enforce DevSecOps security, and optimize cloud infrastructure ROI.
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

            {/* Right Column: Cloud & DevOps Team Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/cloud_devops_enterprise_team.jpg"
                  alt="Cloud & DevOps Engineering Architecture Team"
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
      {/* 6. 100% CUSTOMIZABLE CLOUD & DEVOPS SERVICES (Quote Card + Narrative)     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading Matching Reference Layout */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Cloud & DevOps Services
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
                Automated, scalable,<br />and resilient cloud<br />guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Operating with agility in the competitive software landscape requires robust cloud foundations and seamless deployment pipelines. Legacy setups often suffer from slow deployment cycles, high manual error rates, and escalating cloud waste. As an enterprise Cloud & DevOps Company, our customizable services deliver immediate reliability.
              </p>
              <p>
                Our 100% personalized Cloud & DevOps Solutions are tailored to your unique architectural requirements. Whether your priority is multi-cloud migration, Kubernetes containerization, automated CI/CD delivery, or proactive SRE observability, our experienced team delivers engineering solutions that elevate deployment speed, safeguard system integrity, and optimize operational costs.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION (MATCHING REFERENCE LAYOUT)          */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F4F8FA] font-sans text-left border-y border-slate-100">
        <Container className="max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-12">
            <div>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
                Cutting-Edge Technologies We Use For Development
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] max-w-2xl font-normal leading-relaxed">
                As a leading Cloud & DevOps engineering organization, Firevy.co leverages state-of-the-art cloud platforms, container orchestration, and continuous delivery tools.
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
            {cloudDevOpsTechnologies.slice(techCarouselIndex, techCarouselIndex + 3).map((tech) => (
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
        cards={cloudDevOpsSuccessCards}
        subtitle="Know Firevy.co journey from concept to cloud success. Explore how we've engineered resilient Cloud & DevOps ecosystems and achieved remarkable velocity for our enterprise clients."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER (PROUD TO HAVE PICKED THESE UP ALONG THE WAY)     */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR CLOUD & DEVOPS SERVICES (EXACT 1:1 MATCH)             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Cloud & DevOps Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Years of multi-cloud engineering, CI/CD pipeline automation, and site reliability engineering have made our dedicated Cloud & DevOps developers exceptionally talented professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cloudDevOpsBenefits.map((benefit, i) => (
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
      {/* 12. OUR EXPERTISE IN DEDICATED CLOUD & DEVOPS SERVICES                    */}
      {/* ========================================================================= */}
      <section
        className="py-14 sm:py-18 bg-white font-sans w-full overflow-hidden border-t border-slate-100 text-left"
        onMouseEnter={() => setIsExpertiseHovered(true)}
        onMouseLeave={() => setIsExpertiseHovered(false)}
      >
        {/* Header Container */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-10">
          <h2 className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 text-[26px] sm:text-[32px] lg:text-[36px]">
            Our Expertise in Dedicated Cloud & DevOps Services
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            Our Cloud & DevOps Company specializes in creating and managing reliable cloud infrastructure and deployment automation for organizations of all sizes.
          </p>
        </div>

        {/* Edge-to-edge Full-width Carousel */}
        <div className="w-full relative">
          <div
            ref={expertiseScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cloudDevOpsExpertiseCards.map((card, idx) => (
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
        title="Cloud & DevOps Process We Follow"
        subtitle="Our systematic engineering pipeline from initial infrastructure audit and containerization to automated CI/CD delivery, multi-cloud deployment, and 24/7 SRE monitoring."
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
        faqs={cloudDevOpsFaqs}
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
          title="Have Cloud & DevOps Challenge To Address ?"
          subtitle="Get access to top Cloud & DevOps Certified Architects at Firevy.co to transform your deployment pipelines into a high-speed, automated cloud ecosystem."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default CloudDevOpsService;
