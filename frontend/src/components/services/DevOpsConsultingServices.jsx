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
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const DevOpsConsultingServices = () => {

  // Benefits of DevOps Consulting Services (6 cards in 3x2 grid matching theme)
  const devopsBenefitsData = [
    {
      title: 'Accelerated Time-to-Market',
      desc: 'Automate build, test, and release cadences to cut deployment cycles from months to minutes, enabling rapid experimentation and faster customer feedback loops.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Zero-Downtime Releases',
      desc: 'Implement battle-tested blue-green, rolling, and canary deployment patterns with Kubernetes to deliver seamless updates with 99.99% operational uptime.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Cloud Cost Optimization (FinOps)',
      desc: 'Eliminate over-provisioning and zombie compute resources with automated auto-scaling, spot instances, and Kubernetes rightsizing to slash cloud bills by 30% to 50%.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      title: 'Automated DevSecOps & Compliance',
      desc: 'Shift security left by integrating static code analysis (SAST), secrets detection, and container vulnerability scanning directly into pull requests before production.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      )
    },
    {
      title: 'Resilient Multi-Cloud Scalability',
      desc: 'Architect immutable, vendor-agnostic infrastructure with Terraform and containerized workloads across AWS, Azure, and GCP with automated disaster recovery.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    },
    {
      title: '24/7 SRE & Self-Healing Observability',
      desc: 'Ensure total system visibility with distributed tracing, proactive anomaly alerting via Prometheus/Grafana, and automated self-healing pod restarts.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    }
  ];

  // FAQ List tailored specifically for DevOps Consulting Services
  const devopsConsultingFaqList = [
    {
      id: 1,
      question: 'What is DevOps consulting, and how does it accelerate our business velocity?',
      answer: 'DevOps consulting provides strategic and technical advisory to bridge the gap between software development and IT operations. We design automated CI/CD pipelines, container orchestration, and Infrastructure as Code (IaC) that eliminate manual bottlenecks, improve release reliability, and lower operating costs.'
    },
    {
      id: 2,
      question: 'How do you guarantee zero downtime during high-volume production deployments?',
      answer: 'We leverage Kubernetes container orchestration combined with blue-green, canary, and rolling deployment strategies. Automated health probes verify application readiness before routing live traffic, and instant rollback mechanisms ensure users experience zero disruption.'
    },
    {
      id: 3,
      question: 'Can you help us migrate legacy monolithic applications to Kubernetes and multi-cloud?',
      answer: 'Yes. We conduct a thorough workload audit, decompose tightly coupled services where appropriate, containerize dependencies using Docker, and configure cloud-native Kubernetes clusters across AWS (EKS), Azure (AKS), or Google Cloud (GKE) with minimal cutover interruption.'
    },
    {
      id: 4,
      question: 'How is security integrated into our deployment pipelines (DevSecOps)?',
      answer: 'We embed automated security controls directly into the CI/CD workflow: static application security testing (SAST), software composition analysis (SCA) for vulnerable packages, container image scanning with Trivy, and dynamic secret injection via HashiCorp Vault.'
    },
    {
      id: 5,
      question: 'What ongoing support and SLA models do you provide after initial DevOps implementation?',
      answer: 'We offer flexible managed DevOps and Site Reliability Engineering (SRE) support tiers, including 24/7 incident response, infrastructure monitoring, automated disaster recovery exercises, security patch management, and ongoing cloud cost optimization reviews.'
    }
  ];

  const advancedDevopsTechnologies = [
    {
      id: 'kubernetes',
      title: 'Kubernetes & Container Orchestration',
      icon: '/images/cuttingedge/nodejsdevelopment.svg',
      description: 'We architect enterprise Kubernetes clusters that automate container scaling, load balancing, and self-healing. Seamlessly manage microservices across hybrid and multi-cloud infrastructure with zero manual overhead.'
    },
    {
      id: 'terraform',
      title: 'Terraform & Infrastructure as Code (IaC)',
      icon: '/images/cuttingedge/mernstackappdevelopment.svg',
      description: 'Turn your cloud architecture into declarative, version-controlled code using Terraform and Ansible. Eliminate configuration drift, streamline compliance, and spin up complete staging environments in minutes.'
    },
    {
      id: 'cicd',
      title: 'CI/CD Pipeline Automation',
      icon: '/images/cuttingedge/meanstackappdevelopment.svg',
      description: 'Build lightning-fast automated build and release pipelines using GitHub Actions, GitLab CI, and Jenkins. Accelerate time-to-market with automated testing, static analysis, and zero-downtime deployment triggers.'
    },
    {
      id: 'multicloud',
      title: 'AWS, Azure & GCP Cloud Engineering',
      icon: '/images/cuttingedge/fastapidevelopment.svg',
      description: 'Leverage our certified cloud architects to build highly available multi-cloud architectures. We architect cost-efficient cloud workloads that maximize security, compute density, and global latency performance.'
    },
    {
      id: 'observability',
      title: 'Prometheus & Grafana Observability',
      icon: '/images/cuttingedge/djangoappdevelopment.svg',
      description: 'Gain full-stack visibility across distributed services with Prometheus, Grafana, and OpenTelemetry. We implement proactive alerting, distributed tracing, and comprehensive APM dashboards.'
    },
    {
      id: 'devsecops',
      title: 'DevSecOps & Compliance Hardening',
      icon: '/images/cuttingedge/laraveldevelopment.svg',
      description: 'Shift security left by integrating static analysis, secrets management, and container vulnerability scanning into your build pipelines with SonarQube, HashiCorp Vault, and automated compliance policies.'
    }
  ];

  const comprehensiveDevopsServices = [
    {
      id: 1,
      title: "DevOps Assessment & Strategy Roadmap",
      desc: "We perform a 360-degree audit of your existing delivery pipelines, cloud infrastructure, and team culture to design an actionable DevOps roadmap tailored to your business objectives."
    },
    {
      id: 2,
      title: "CI/CD Pipeline Design & Automation",
      desc: "Architect seamless continuous integration and continuous deployment pipelines that automate testing, container image builds, security audits, and production releases."
    },
    {
      id: 3,
      title: "Cloud Migration & Modernization",
      desc: "Migrate legacy workloads and databases to AWS, Azure, or GCP with zero downtime. We modernize applications for cloud-native scalability and compute efficiency."
    },
    {
      id: 4,
      title: "Kubernetes & Microservices Architecture",
      desc: "Design and implement production-ready Kubernetes (EKS, AKS, GKE) clusters with Helm charts, service meshes (Istio), and GitOps workflows (ArgoCD) for maximum agility."
    },
    {
      id: 5,
      title: "DevSecOps & Security Hardening",
      desc: "Embed security checks into the developer loop with vulnerability scanning, automated license compliance, zero-trust IAM policies, and encrypted secrets management."
    },
    {
      id: 6,
      title: "24/7 Site Reliability Engineering (SRE)",
      desc: "Proactive telemetry monitoring, SLA/SLO tracking, incident management, automated disaster recovery drills, and continuous performance tuning to protect uptime."
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
        title="DevOps Consulting Services | Cloud, CI/CD & Kubernetes Advisory | Firevy.co"
        description="Accelerate software delivery velocity with Firevy's certified DevOps Consulting Services. Specializing in CI/CD automation, Kubernetes container orchestration, Infrastructure as Code, and 24/7 SRE monitoring."
        keywords="devops consulting service, devops consulting services, cloud migration, ci cd pipeline automation, kubernetes consulting, terraform infrastructure as code, devsecops, site reliability engineering"
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
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[41px] leading-[1.2]"
              >
                Real-Time Velocity & Control with DevOps Consulting Services
              </h1>

              <p
                className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal"
              >
                Transform your software delivery lifecycle with tailored DevOps consulting services, designed for organizations of every size. We supply scalable, secure, and cloud-native automation solutions that enhance release frequency, eliminate deployment downtime, and drive sustainable growth. Hire DevOps consultant specialists who offer complete end-to-end DevOps services, from CI/CD pipeline automation and Kubernetes container orchestration to Infrastructure as Code (IaC) and 24/7 SRE monitoring. Whether you're constructing a brand-new cloud architecture or modernizing legacy infrastructure, we make certain seamless deployment aligned with your business desires. Contact us today to start your virtual transformation with a free session and quote. Reliable DevOps Consultants for Automation, Strategy, And Cloud Scalability.
              </p>

              {/* 4 Stats Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 pb-1">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">150+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">DevOps Engineers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">99.99%</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">Deployment Reliability</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">1200+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">Pipelines Automated</div>
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

            {/* Right Hero Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[520px] flex justify-center">
                <img
                  src="/images/epicor_erp_banner.svg"
                  alt="Real-Time Velocity & Control with DevOps Consulting Services"
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
      {/* 2. LEADING DEVOPS CONSULTING COMPANY SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/leading_mobile_app_consulting.jpg"
                  alt="Leading DevOps Consulting Company"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Leading DevOps Consulting <br />
                & Cloud Engineering <br />
                Company
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our certified DevOps consulting specialists combine deep cloud infrastructure knowledge, automated pipeline engineering, and continuous security practices to help enterprises unlock rapid software velocity. From infrastructure audit to post-launch optimization, we partner with your engineering team to eliminate deployment bottlenecks, automate manual handoffs, and elevate release frequency.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                To provide Enterprise DevOps Consulting Services with a primary emphasis on high availability, zero-downtime rollouts, and infrastructure compliance, we conduct comprehensive assessments of your CI/CD workflows, containerization maturity, cloud spend, and governance mandates before designing your scalable pipeline.
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
      {/* 5. GET 100% CUSTOMIZABLE DEVOPS CONSULTING EXPERTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable DevOps Consulting & Automation Experts
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
                Automate, Orchestrate, And Scale Cloud Infrastructure
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Implementing or scaling an automated DevOps and cloud platform is one of the most critical digital investments modern enterprises make. Without seasoned technical leadership and automation expertise, companies risk prolonged deployment cycles, security vulnerabilities, and runaway cloud expenditure. Our <strong className="text-[#005F96] font-semibold">DevOps Consulting Services</strong> provide comprehensive guidance to identify risks early, architect resilient cloud pipelines, and secure total alignment with industry best practices.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Utilize our specialized DevOps consulting capabilities across Kubernetes, Terraform, Docker, and multi-cloud providers (AWS, Azure, GCP) to automate deployment pipelines, enforce DevSecOps governance, and optimize infrastructure costs. Whether you are scaling microservices or migrating legacy workloads, partnering with our DevOps specialists ensures maximum operational agility and return on your cloud investment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5B. ADVANCED TECHNOLOGIES FOR TOP-TIER DEVOPS & CLOUD SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans overflow-hidden border-b border-slate-100">
        <Container>
          {/* Centered Section Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Advanced Technologies Firevy Uses for Top-Tier DevOps Software Solutions
            </h2>
          </div>

          {/* Cards Carousel Slider */}
          <div className="relative">
            <div
              ref={techSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-1 no-scrollbar select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {advancedDevopsTechnologies.map((tech) => (
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
            {/* Card 1: Enterprise Microservices & Cloud-Native Kubernetes Pipeline */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#E0F2FE] text-[#0284C7] text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/success_stories/redetect.svg"
                  alt="Enterprise Microservices & Cloud-Native Kubernetes Pipeline"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Enterprise Microservices & Cloud-Native Kubernetes Pipeline
              </h3>
            </div>

            {/* Card 2: Automated Zero-Downtime Multi-Region Cloud Deployment */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/file_sharing_application.svg"
                  alt="Automated Zero-Downtime Multi-Region Cloud Deployment"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Automated Zero-Downtime Multi-Region Cloud Deployment
              </h3>
            </div>

            {/* Card 3: Full-Stack Observability & DevSecOps Compliance Platform */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/data_analytics.svg"
                  alt="Full-Stack Observability & DevSecOps Compliance Platform"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Full-Stack Observability & DevSecOps Compliance Platform
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
      {/* 9. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF DEVOPS CONSULTING SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of DevOps Consulting Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our DevOps Consulting Services streamline software lifecycles, eliminate deployment bottlenecks, and empower rapid, reliable operational velocity:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {devopsBenefitsData.map((card, idx) => (
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
      {/* 10B. COMPREHENSIVE DEVOPS CONSULTING SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans overflow-hidden border-b border-slate-100">
        <Container>
          {/* Centered Section Title & Subtitle */}
          <div className="text-center w-full max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Comprehensive DevOps Consulting Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
              We provide a complete catalog of DevOps consulting services engineered to modernize and automate your cloud delivery pipeline
            </p>
          </div>

          {/* Cards Carousel Slider */}
          <div className="relative">
            <div
              ref={comprehensiveSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-1 no-scrollbar select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {comprehensiveDevopsServices.map((service) => (
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
      <SapphireTechStackGrid domainName="DevOps consulting" />

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
        faqList={devopsConsultingFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to your query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mentioned below."
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART AS DEVOPS CONSULTING PARTNER? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As DevOps Consulting Partner?"
        subtitle="Being unique is our quality! Firevy Solutions equips digital enterprises with modern DevOps engineering that delivers speed, stability, and security. We are a renowned enterprise software and cloud consultancy serving customers with end-to-end DevOps support. Our automation frameworks and 24/7 reliability engineering stand us one level above the competition."
      />

      {/* ========================================================================= */}
      {/* 23. GET ACCESS TO TOP DEVOPS CONSULTING (CTA BANNER) */}
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
            Get access to top DevOps consulting to streamline deployments and scale cloud operations.
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

export default DevOpsConsultingServices;
