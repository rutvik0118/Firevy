import React from 'react';

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
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
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
  Smartphone,
  Layers,
  Sparkles,
  Code2,
  Cloud,
  Lock,
  Cpu,
  RefreshCw,
  Compass,
  Award,
  Users,
  DollarSign,
  TrendingUp,
  BarChart3,
  Globe
} from 'lucide-react';

export const DevOpsDevelopmentService = () => {

  // 1. Expertise In Our DevOps Development Services (6 cards matching Image 1 layout)
  const devOpsExpertiseCards = [
    {
      title: 'CI/CD Pipeline Automation',
      desc: 'Build continuous integration and continuous deployment pipelines using Jenkins, GitHub Actions, and GitLab CI. Eliminate manual build bottlenecks and enable zero-downtime automated software releases.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <svg className="w-6 h-6 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
          <path d="M7 8l3 3-3 3" />
          <path d="M13 14h4" />
        </svg>
      )
    },
    {
      title: 'Kubernetes & Container Orchestration',
      desc: 'Manage, scale, and orchestrate microservices across hybrid and multi-cloud clusters using Kubernetes (K8s), Docker, Helm, Amazon EKS, Azure AKS, and Google Cloud GKE.',
      bg: 'bg-[#DCFCE7]',
      icon: (
        <svg className="w-6 h-6 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 8h10" />
          <path d="M7 12h4" />
          <circle cx="15" cy="14" r="2" />
          <path d="M15 11v1" />
          <path d="M15 16v1" />
        </svg>
      )
    },
    {
      title: 'Infrastructure as Code (IaC)',
      desc: 'Define, version control, and provision repeatable cloud infrastructure using Terraform, Pulumi, and CloudFormation. Prevent configuration drift and deploy entire environments within minutes.',
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
      title: 'Cloud Ecosystem Integration',
      desc: 'We assist enterprises in the seamless integration of cloud-native APIs, legacy enterprise software, database synchronization, and hybrid-cloud services across AWS, Azure, and Google Cloud.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <svg className="w-6 h-6 text-[#CA8A04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.439 7.85c-.049-.322.059-.648.289-.878l1.568-1.568a1.5 1.5 0 0 0-2.121-2.121l-1.568 1.568a1.002 1.002 0 0 1-.878.29c-.792-.12-1.637-.12-2.428 0a1.002 1.002 0 0 1-.878-.29L11.854 3.28a1.5 1.5 0 0 0-2.121 2.121l1.568 1.568c.23.23.338.556.29.878-.12.791-.12 1.636 0 2.428a1.002 1.002 0 0 1-.29.878l-1.568 1.568a1.5 1.5 0 0 0 2.121 2.121l1.568-1.568c.23-.23.556-.338.878-.29.791.12 1.636.12 2.428 0 .322-.049.648.059.878.289l1.568 1.568a1.5 1.5 0 0 0 2.121-2.121l-1.568-1.568a1.002 1.002 0 0 1-.289-.878c.12-.792.12-1.637 0-2.428z" />
        </svg>
      )
    },
    {
      title: 'Continuous 24/7 SRE Support',
      desc: 'Your post-deployment cloud infrastructure will be actively monitored by an innovative team of Site Reliability Engineers ensuring 99.99% availability, automated self-healing, and low MTTR.',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <svg className="w-6 h-6 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    },
    {
      title: 'DevSecOps & Compliance',
      desc: 'Integrating proactive automated vulnerability scanning (SAST/DAST), container image audits (Trivy), and centralized secrets management (HashiCorp Vault) into every commit cycle.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  // 4. Benefits of DevOps Development Services (6 cards matching Image 3 layout)
  const devOpsBenefitsData = [
    {
      title: 'Strategy and Infrastructure Roadmap',
      desc: 'We collaborate with you to create a DevOps engineering strategy that meets your business velocity goals. Our consultants analyze current delivery bottlenecks to design a streamlined roadmap from source code to production deployment.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      title: 'Tech Choice and Architecture Design',
      desc: 'Selecting the optimal CI/CD tools, container engines, and cloud providers is critical for operational scalability. Our DevOps Development Services help you architect cost-effective, resilient cloud environments.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Automated CI/CD Pipeline Architecture',
      desc: 'DevOps success relies on seamless automation. Our engineers design declarative, automated pipelines with multi-stage verification, automatic rollbacks, and zero-downtime blue-green or canary release strategies.',
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
      title: 'Agile Collaboration & Continuous Delivery',
      desc: 'Our DevOps consulting methodologies unite software engineering and IT operations into high-velocity sprint cycles, ensuring transparent stakeholder feedback loops and rapid feature delivery.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      title: 'DevSecOps and Proactive Security',
      desc: 'Our dedicated security engineers integrate automated vulnerability scans, policy-as-code enforcement, and secrets rotation directly into CI/CD workflows, protecting your workloads prior to release.',
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
      title: 'Cloud FinOps & High-Availability Scaling',
      desc: 'We assist enterprises with cloud cost governance, server rightsizing, container auto-scaling, and multi-region disaster recovery to maximize resource efficiency across AWS, Azure, and Google Cloud.',
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

  // 5. FAQ List tailored specifically for DevOps Development Services
  const devOpsConsultingFaqList = [
    {
      id: 1,
      question: 'Why should businesses adopt DevOps development services?',
      answer: 'DevOps development services unite development and operations to eliminate manual handoffs, automate testing and deployment pipelines, accelerate release frequency by up to 10x, and dramatically reduce production downtime.'
    },
    {
      id: 2,
      question: 'How do you ensure zero downtime during cloud deployments?',
      answer: 'We architect blue-green deployments, canary releases, and rolling Kubernetes pod updates with health checks. If an anomaly is detected, traffic is immediately rerouted to stable versions with automated rollback.'
    },
    {
      id: 3,
      question: 'Which cloud providers and CI/CD tools do your DevOps engineers support?',
      answer: 'We support all major cloud platforms (AWS, Microsoft Azure, Google Cloud Platform) and CI/CD tools including Jenkins, GitHub Actions, GitLab CI, ArgoCD, Terraform, Helm, Docker, and Kubernetes.'
    },
    {
      id: 4,
      question: 'How do DevOps consultants incorporate security into the CI/CD pipeline?',
      answer: 'Through DevSecOps, we implement automated static code analysis (SAST), dynamic application security testing (DAST), container image vulnerability scans (Trivy), and centralized secrets management with HashiCorp Vault.'
    },
    {
      id: 5,
      question: 'What deliverables will we receive from a DevOps consulting engagement?',
      answer: 'Deliverables include an Infrastructure as Code (IaC) repository, fully automated multi-branch CI/CD pipelines, Kubernetes manifests and Helm charts, observability dashboards (Prometheus/Grafana), and disaster recovery documentation.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="DevOps Development Services | CI/CD & Cloud Infrastructure | Firevy.co"
        description="Accelerate your product delivery lifecycle with Firevy's DevOps Development Services. CI/CD automation, Kubernetes container orchestration, Terraform IaC, and 24/7 site reliability engineering."
        keywords="devops development services, devops consulting, ci cd automation, kubernetes orchestration, terraform iac, devops services in usa, site reliability engineering, Firevy.co"
        url="https://firevy.co/services/devops-development-services"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (EXACT 1:1 REFERENCE MATCH) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-14 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2]"
              >
                DevOps Development Services in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Our DevOps development services are geared toward the business needs of startups, small and medium-sized businesses, and large, well-established enterprise organizations seeking automated release pipelines and cloud resilience.
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

            {/* Right Hero DevOps Pipeline Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[580px] flex justify-center">
                <img
                  src="/images/devops_hero_pipeline.jpg"
                  alt="DevOps Development Services Team"
                  className="w-full h-auto object-contain max-h-[380px] rounded-2xl drop-shadow-md transition-transform duration-500 hover:scale-105 cursor-pointer"
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
      {/* 2. LEADING DEVOPS DEVELOPMENT CONSULTING COMPANY (EXACT 1:1 REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic: DevOps engineers collaborating */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/devops_consulting_team.jpg"
                  alt="Leading DevOps Development Services Team"
                  className="w-full h-auto object-contain max-h-[380px] rounded-2xl drop-shadow-md transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </div>
            </div>

            {/* Right Copy matching reference layout */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Leading DevOps <br />
                Development Services <br />
                Company
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our DevOps strategy and engineering firm use their knowledge of the latest industry trends and cloud-native technology to provide recommendations for infrastructure solutions that are likely to result in the most favorable outcomes for <strong className="text-[#005F96] font-semibold">best enterprise devops company</strong> in the context of competitive growth. All industry practices are included in the finished delivery systems that we create. To provide Enterprise DevOps Development Services with a primary emphasis on deployment velocity and system uptime, we go the additional mile while analyzing your deployment bottlenecks, cloud workloads, security policies, and automation requirements.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRIEF ABOUT BEST DEVOPS CONSULTANTS FOR STARTUPS (IMAGE 1) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy matching layout */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Brief About Best DevOps <br />
                Engineers For Startups
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our DevOps development consultants use the appropriate technologies to analyze your application architecture in-depth, taking into account build dependencies, database migration complexity, microservice topologies, and infrastructure auto-scaling parameters.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                As an Affordable DevOps Development and Consulting Agency, we design an automated continuous delivery pipeline and monitoring framework optimized for high development velocity and guaranteed 99.9% uptime.
              </p>
            </div>

            {/* Right Graphic: Multi-Cloud Infrastructure Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/cloud_solutions_illustration.jpg"
                  alt="Brief About Best DevOps Engineers For Startups"
                  className="w-full h-auto object-contain max-h-[380px] rounded-2xl drop-shadow-md transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP-RATED BANNER (IMAGE 2 TOP) */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. GET 100% CUSTOMIZABLE DEVOPS DEVELOPMENT CONSULTING EXPERTS (IMAGE 2) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable DevOps Development Services Experts
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
                Automate, Scale, And Deploy Continuous Improvements
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Even if you have an excellent software application, it alone will not guarantee that your releases will be stable unless you also have a solid DevOps strategy and automated delivery roadmap. When assessing <strong className="text-[#005F96] font-semibold">cloud infrastructure and containerization</strong> concepts, you need the direction and assistance of an expert Best DevOps Development Services Company to avoid costly downtime traps. Our DevOps Consulting Services assist customers in evaluating current delivery pipelines, developing automated workflows, and outlining security compliances.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Utilize the DevOps development and consulting services we provide for AWS, Azure, Google Cloud, and on-premise clusters to identify deployment bottlenecks, discover automation solutions, and formulate an operational strategy to ensure continuous uptime. If you want the most velocity from your engineering team, you should hire DevOps development engineers through our DevOps Development Services, regardless of whether you run a startup or an enterprise firm.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES (IMAGE 3) */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />



      {/* ========================================================================= */}
      {/* 8. EXPERTISE IN OUR DEVOPS DEVELOPMENT SERVICES (IMAGE 1) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Expertise In Our DevOps Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
              As a Leading Enterprise DevOps Consulting Company, we have years of experience in this field. Our expertise includes:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {devOpsExpertiseCards.map((card, idx) => (
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

          {/* Centered Button (Get A Free Quote For Your Project) */}
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
      {/* 13. PROUD TO HAVE PICKED THESE UP ALONG THE WAY (IMAGE 2) */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 14. BENEFITS OF DEVOPS DEVELOPMENT SERVICES (IMAGE 3) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of DevOps Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our DevOps Development Services help companies automate their continuous delivery workflows and succeed in the digital era. Benefits of DevOps development:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {devOpsBenefitsData.map((card, idx) => (
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
      {/* 15. BUSINESS FRIENDLY HIRING MODELS (IMAGE 4) */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 16. UNVEILING OUR INNOVATIVE SOLUTION (IMAGE 5) */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 17. PROCESS WE FOLLOW (SCREENSHOT 1) */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Our agile DevOps development lifecycle from infrastructure audit to automated CI/CD pipeline deployment and 24/7 site reliability engineering."
      />

      {/* ========================================================================= */}
      {/* 18. OUR STORY, THEIR WORDS (SCREENSHOT 2) */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 19. TRUSTED BY THE WORLD'S LEADING BRANDS (SCREENSHOT 3) */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 20. SUCCESS MATRIX (SCREENSHOT 4) */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 21. TECHNOLOGY STACK (SCREENSHOT 5) */}
      {/* ========================================================================= */}
      <SapphireTechStackGrid domainName="DevOps development" />

      {/* ========================================================================= */}
      {/* 22. WE HAVE BEEN FEATURED IN (SCREENSHOT 1) */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 23. DIGITAL TRANSFORMATION THROUGH INNOVATION (SCREENSHOT 2) */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 24. FREQUENTLY ASKED QUESTIONS (SCREENSHOT 3) */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={devOpsConsultingFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to queries and provide automated DevOps solutions that deliver exceptional reliability. Feel free to contact us in case of any question."
      />

      {/* ========================================================================= */}
      {/* 25. OUR RECENT BLOGS (SCREENSHOT 4) */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 26. WHAT SETS US APART AS DEVOPS DEVELOPMENT SERVICES? (SCREENSHOT 5) */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As DevOps Development Services?"
        subtitle="Being unique is our quality! Firevy.co believes in the engineering principles that give our clients an edge over their competition. We are a renowned cloud infrastructure and DevOps development organization serving global enterprises with end-to-end continuous delivery support. Our automated CI/CD pipelines, Kubernetes container orchestration, and proactive SRE monitoring stand us one level above the rest."
      />

      {/* ========================================================================= */}
      {/* 27. GET ACCESS TO TOP DEVOPS DEVELOPMENT SERVICES (CTA BANNER) */}
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
            Get access to top DevOps development experts to transform your release pipelines into an automated, high-speed ecosystem.
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
      {/* 28. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default DevOpsDevelopmentService;
