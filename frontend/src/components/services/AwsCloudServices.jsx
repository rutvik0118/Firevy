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
  Globe,
  Database,
  Server
} from 'lucide-react';

export const AwsCloudServices = () => {

  // 1. Expertise In Our AWS Cloud Services (6 cards matching Image 1 layout)
  const awsCloudExpertiseCards = [
    {
      title: 'AWS Cloud Migration & Modernization',
      desc: 'Seamlessly migrate legacy infrastructure, monolithic applications, and databases to AWS using AWS Application Migration Service (MGN), Database Migration Service (DMS), and re-platforming blueprints with zero business downtime.',
      bg: 'bg-[#FFEDD5]',
      icon: (
        <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <polyline points="12 13 16 9 20 13" />
          <line x1="16" x2="16" y1="9" y2="21" />
        </svg>
      )
    },
    {
      title: 'Serverless Architecture & AWS Lambda',
      desc: 'Build highly scalable, event-driven backends without managing physical servers. Leverage AWS Lambda, Amazon API Gateway, AWS Step Functions, and EventBridge to slash operational overhead and pay only for compute time used.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <svg className="w-6 h-6 text-[#CA8A04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Managed Databases (RDS & DynamoDB)',
      desc: 'Architect high-performance relational and NoSQL storage tiers utilizing Amazon RDS (PostgreSQL/MySQL), Amazon Aurora Multi-Master clusters, and Amazon DynamoDB with millisecond latency at any scale.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    },
    {
      title: 'AWS Containerization (ECS & EKS)',
      desc: 'Package, deploy, and scale enterprise microservices with Amazon Elastic Kubernetes Service (EKS) and Amazon Elastic Container Service (ECS) with AWS Fargate serverless container compute for zero infrastructure management.',
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
      title: 'AWS Cloud Security & IAM DevSecOps',
      desc: 'Fortify your cloud perimeters with AWS Identity and Access Management (IAM), AWS Shield DDoS defense, AWS WAF, AWS Key Management Service (KMS), GuardDuty threat detection, and Well-Architected security reviews.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <svg className="w-6 h-6 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'AWS FinOps & Cost Optimization',
      desc: 'Eliminate idle cloud compute waste and optimize AWS monthly expenditures through automated resource scheduling, AWS Savings Plans, Spot Instance management, and CloudWatch metrics governance.',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <svg className="w-6 h-6 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    }
  ];

  // 2. Benefits of AWS Cloud Services (6 cards matching layout)
  const awsCloudBenefitsData = [
    {
      title: 'Strategic AWS Migration Roadmap',
      desc: 'We collaborate with you to create an AWS cloud adoption framework aligned with your business velocity. Our certified architects analyze legacy workloads to design an agile, zero-downtime transition path to AWS.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      title: 'Multi-AZ High Availability & Scalability',
      desc: 'Leverage AWS global infrastructure across multiple Availability Zones with Auto Scaling groups and Elastic Load Balancing (ALB), ensuring uninterrupted business continuity and seamless fault tolerance.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Serverless Agility & Cost Efficiency',
      desc: 'Eliminate hardware procurement and server maintenance cycles. Serverless AWS architectures enable rapid feature delivery, automated horizontal scaling, and substantial compute cost savings.',
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
      title: 'Enterprise Security & Well-Architected Governance',
      desc: 'Every AWS environment we build complies with the AWS Well-Architected Framework, incorporating granular IAM least-privilege policies, automated security auditing, and end-to-end encryption.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Automated CI/CD with AWS Developer Tools',
      desc: 'Our cloud engineers implement streamlined delivery pipelines using AWS CodePipeline, AWS CodeBuild, and Terraform IaC, enabling your development teams to deploy code changes rapidly and securely.',
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
      title: 'Cloud FinOps & Continuous Cost Optimization',
      desc: 'We assist enterprises with AWS cost governance, EC2 rightsizing, reserved instance planning, and automated storage tiering on Amazon S3 to maximize resource ROI and eliminate unexpected bills.',
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

  // 3. FAQ List tailored specifically for AWS Cloud Services
  const awsCloudFaqList = [
    {
      id: 1,
      question: 'What makes AWS the ideal cloud platform for enterprise applications?',
      answer: 'Amazon Web Services (AWS) offers unmatched global infrastructure, industry-leading security certifications, over 200 fully featured cloud services, and unmatched reliability. It enables organizations to scale compute on demand, deploy serverless architectures, and modernize legacy software with maximum cost predictability.'
    },
    {
      id: 2,
      question: 'How do you migrate existing on-premise or hybrid systems to AWS without downtime?',
      answer: 'We utilize automated data replication tools like AWS DMS (Database Migration Service) and AWS MGN (Application Migration Service) alongside phased blue-green or canary routing. Production traffic is switched only after data consistency and performance benchmarks are 100% verified, ensuring zero user disruption.'
    },
    {
      id: 3,
      question: 'How does AWS serverless architecture (Lambda, DynamoDB, API Gateway) reduce costs?',
      answer: 'Serverless architectures eliminate idle compute expenses because you never pay for provisioned servers running in the background. You only pay for the exact milliseconds your functions execute, which can reduce cloud hosting overhead by 40% to 70% for fluctuating workloads.'
    },
    {
      id: 4,
      question: 'What security measures and compliance standards are implemented in your AWS solutions?',
      answer: 'All AWS environments we configure adhere to the AWS Well-Architected Security Pillar. We enforce IAM least-privilege roles, multi-factor authentication (MFA), VPC subnet segmentation, AWS KMS encryption at rest and in transit, AWS WAF, and automated compliance tracking against SOC 2, HIPAA, and ISO 27001.'
    },
    {
      id: 5,
      question: 'How does Firevy optimize AWS monthly spending and prevent runaway cloud bills?',
      answer: 'Through proactive AWS FinOps practices, we implement automated AWS Budget alerts, right-size over-provisioned EC2 and RDS instances, transition cold data to Amazon S3 Glacier, utilize Spot instances for batch workloads, and recommend AWS Compute Savings Plans to lower ongoing costs by up to 50%.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="AWS Cloud Services | Enterprise Cloud Migration & Architecture | Firevy.co"
        description="Accelerate your cloud journey with Firevy's AWS Cloud Services. AWS certified cloud architects, cloud migration, serverless Lambda, Kubernetes EKS, and 24/7 managed cloud operations."
        keywords="aws cloud services, aws cloud consulting, amazon web services, aws cloud migration, aws serverless lambda, aws well-architected framework, aws cloud devops, aws cost optimization, Firevy.co"
        url="https://firevy.co/services/aws-cloud-services"
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
                AWS Cloud Services in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Our AWS cloud services are geared toward the business needs of startups, small and medium-sized businesses, and large, well-established enterprise organizations seeking resilient cloud infrastructure, cost efficiency, and automated scalability.
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

            {/* Right Hero AWS Cloud Architecture Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[580px] flex justify-center">
                <img
                  src="/images/aws_cloud_hero_architecture.jpg"
                  alt="AWS Cloud Services Architecture"
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
      {/* 2. LEADING AWS CLOUD SERVICES COMPANY (EXACT 1:1 REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic: AWS architects collaborating */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/aws_cloud_architects_team.jpg"
                  alt="Leading AWS Cloud Services Team"
                  className="w-full h-auto object-contain max-h-[380px] rounded-2xl drop-shadow-md transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </div>
            </div>

            {/* Right Copy matching reference layout */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Leading AWS <br />
                Cloud Services <br />
                Company
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our AWS cloud strategy and architecture firm uses deep expertise in Amazon Web Services and cloud-native paradigms to deliver infrastructure solutions that yield the most favorable outcomes for <strong className="text-[#005F96] font-semibold">best enterprise AWS cloud company</strong> in the context of competitive digital growth. Following the AWS Well-Architected Framework, all industry security and resiliency standards are ingrained into the solutions we architect. To provide Enterprise AWS Cloud Services with a primary emphasis on operational excellence, high availability, and performance efficiency, we go the additional mile while analyzing your cloud workloads, migration requirements, serverless opportunities, and compliance standards.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRIEF ABOUT BEST AWS CLOUD ENGINEERS FOR STARTUPS (IMAGE 1) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy matching layout */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Brief About Best AWS <br />
                Cloud Engineers For Startups
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our AWS certified cloud consultants use the appropriate technologies to analyze your application architecture in-depth, taking into account multi-region availability, serverless microservices, managed database clustering, and infrastructure auto-scaling parameters.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                As an Affordable AWS Cloud Consulting and Development Agency, we architect resilient AWS environments and continuous delivery frameworks optimized for high development velocity, seamless scalability, and guaranteed 99.99% uptime.
              </p>
            </div>

            {/* Right Graphic: Startup Scaling & Serverless AWS Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/aws_cloud_startup_scaling.jpg"
                  alt="Brief About Best AWS Cloud Engineers For Startups"
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
      {/* 5. GET 100% CUSTOMIZABLE AWS CLOUD SERVICES EXPERTS (IMAGE 2) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable AWS Cloud Services Experts
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
                Architect, Modernize, And Scale on AWS Cloud
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Even if you have an excellent software application, it alone will not guarantee superior performance unless backed by an enterprise AWS cloud architecture and automated operational roadmap. When assessing <strong className="text-[#005F96] font-semibold">Amazon Web Services infrastructure, containerization, and serverless</strong> concepts, you need the direction and assistance of an expert Best AWS Cloud Services Company to prevent resource bottlenecks and unbudgeted cloud expenditures. Our AWS Cloud Consulting Services assist customers in auditing current workloads, developing migration paths, and establishing robust security compliances.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Utilize the AWS cloud development and consulting services we provide across AWS EC2, S3, RDS, Lambda, DynamoDB, and ECS/EKS clusters to identify infrastructure bottlenecks, implement serverless efficiencies, and formulate an operational governance strategy to ensure continuous uptime. If you want maximum reliability from your engineering operations, you should hire certified AWS cloud engineers through our AWS Cloud Services, regardless of whether you run a startup or an enterprise firm.
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
      {/* 7. EXPERTISE IN OUR AWS CLOUD SERVICES (IMAGE 1) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Expertise In Our AWS Cloud Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
              As a Leading Enterprise AWS Cloud Consulting Company, we have years of experience in this field. Our expertise includes:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {awsCloudExpertiseCards.map((card, idx) => (
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
      {/* 8. PROUD TO HAVE PICKED THESE UP ALONG THE WAY (IMAGE 2) */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 9. BENEFITS OF AWS CLOUD SERVICES (IMAGE 3) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of AWS Cloud Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our AWS Cloud Services help companies harness the full power of Amazon Web Services to build resilient, hyper-scalable digital products. Benefits of AWS cloud adoption:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {awsCloudBenefitsData.map((card, idx) => (
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
      {/* 10. BUSINESS FRIENDLY HIRING MODELS (IMAGE 4) */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 11. UNVEILING OUR INNOVATIVE SOLUTION (IMAGE 5) */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 12. PROCESS WE FOLLOW (SCREENSHOT 1) */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Our agile AWS cloud life cycle from well-architected discovery and migration planning to automated deployment and 24/7 managed cloud monitoring."
      />

      {/* ========================================================================= */}
      {/* 13. OUR STORY, THEIR WORDS (SCREENSHOT 2) */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 14. TRUSTED BY THE WORLD'S LEADING BRANDS (SCREENSHOT 3) */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 15. SUCCESS MATRIX (SCREENSHOT 4) */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 16. TECHNOLOGY STACK (SCREENSHOT 5) */}
      {/* ========================================================================= */}
      <SapphireTechStackGrid domainName="AWS cloud services" />

      {/* ========================================================================= */}
      {/* 17. WE HAVE BEEN FEATURED IN (SCREENSHOT 1) */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 18. DIGITAL TRANSFORMATION THROUGH INNOVATION (SCREENSHOT 2) */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 19. FREQUENTLY ASKED QUESTIONS (SCREENSHOT 3) */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={awsCloudFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to queries and provide tailored AWS cloud solutions that deliver unmatched reliability. Feel free to contact us in case of any question."
      />

      {/* ========================================================================= */}
      {/* 20. OUR RECENT BLOGS (SCREENSHOT 4) */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 21. WHAT SETS US APART AS AWS CLOUD SERVICES PROVIDER? (SCREENSHOT 5) */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As AWS Cloud Services Provider?"
        subtitle="Being unique is our quality! Firevy.co believes in the engineering principles that give our clients an edge over their competition. We are a renowned Amazon Web Services consulting and cloud engineering organization serving global enterprises with end-to-end cloud adoption support. Our AWS Well-Architected Framework compliance, containerized microservices, serverless innovation, and proactive FinOps monitoring stand us one level above the rest."
      />

      {/* ========================================================================= */}
      {/* 22. GET ACCESS TO TOP AWS CLOUD SERVICES (CTA BANNER) */}
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
            Get access to top AWS Certified Cloud Architects to transform your infrastructure into a secure, hyper-scalable cloud ecosystem.
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
      {/* 23. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default AwsCloudServices;
