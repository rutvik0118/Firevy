import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import AboutUsStats from './AboutUsStats';
import TransformativeImpactSection from './TransformativeImpactSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import MobileAppProficientTechStackSection from './MobileAppProficientTechStackSection';
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
  ArrowLeft,
  Cloud,
  Server,
  Layers,
  Cpu,
  ShieldCheck,
  RefreshCw,
  Clock,
  TrendingUp,
  Zap,
  CheckCircle2,
  Users,
  Database,
  Lock,
  Globe,
  Activity
} from 'lucide-react';

export const CloudDevelopmentService = () => {
  const cuttingEdgeSliderRef = useRef(null);
  const cloudServicesSliderRef = useRef(null);

  // Cutting Edge Technologies Sapphire Use For Cloud App Development
  const cuttingEdgeTechCards = [
    {
      title: 'Low-Code No-Code Development Service',
      desc: 'Accelerate app development with Low-Code No-Code Development Services a platform that empowers businesses to create scalable, robust applications quickly without extensive coding.',
      link: '/services/low-code-no-code-development-services',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
        </svg>
      )
    },
    {
      title: 'Super Apps Development Service',
      desc: 'Redefine digital experiences with Super Apps Development Services, Design for seamless user experience, these super apps increase engagement, enhance convenience, and drive revenue growth.',
      link: '/services/super-app-development-company',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="m9 16-2-2 2-2" />
          <path d="m15 12 2 2-2 2" />
        </svg>
      )
    },
    {
      title: 'Progressive Web App Development Service',
      desc: 'Using HTML, CSS, and JavaScript code that runs in web browser engines and is hosted on web servers, we create Progressive Web Apps (PWAs).',
      link: '/services/progressive-web-app-development',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" />
          <path d="M12 18h.01" />
          <circle cx="9" cy="8" r="2" />
          <path d="m10.5 9.5 2 2" />
          <circle cx="14" cy="12" r="1.5" />
        </svg>
      )
    },
    {
      title: 'Blockchain Development Service',
      desc: "We provide blockchain development services that will improve your company's security and transparency while giving you access to a variety of decentralized alternatives.",
      link: '/services/blockchain-development-company',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      )
    },
    {
      title: 'IoT Integration Development Service',
      desc: 'Discover personalized IoT development services that enable intelligent data analytics and remote device administration, tailored to your business needs.',
      link: '/services/iot-app-development-company',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="14" x="5" y="5" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M5 10H2" />
          <path d="M5 14H2" />
          <path d="M19 10h3" />
          <path d="M19 14h3" />
          <path d="M10 5V2" />
          <path d="M14 5V2" />
          <path d="M10 19v3" />
          <path d="M14 19v3" />
        </svg>
      )
    },
    {
      title: 'AI Development Service',
      desc: 'Unlock the power of artificial intelligence with AI Development Services that helps businesses integrate AI into applications to automate processes, enhance decision-making, and deliver personalized user experiences.',
      link: '/services/artificial-intelligence-development-company',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    },
    {
      title: 'Extended Reality Development Service',
      desc: 'Step into the future with Extended Reality Development Services and create immersive experiences that combine augmented reality (AR), virtual reality (VR), and mixed reality (MR) to engage users like never before.',
      link: '/services/virtual-reality-development-services',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
          <path d="M7 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M17 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M10 14h4" />
        </svg>
      )
    },
    {
      title: 'Cross Platform Development Service',
      desc: 'With a few simple changes in code, the cross-platform frameworks enable us to create an app with one time coding and execute it on all platforms, including Windows, iOS, and Android.',
      link: '/services/cross-platform-app-development-services',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="12" x="3" y="3" rx="2" />
          <path d="M7 21h10" />
          <path d="M12 15v6" />
          <rect width="6" height="9" x="15" y="12" rx="1" fill="#E8F4FA" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      )
    },
    {
      title: 'Machine Learning Development Service',
      desc: 'From custom AI applications to enterprise-scale automation, our developers leverage the latest machine learning Development Service and deep learning technologies to solve complex business challenges.',
      link: '/services/machine-learning-development-company',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    },
    {
      title: 'Augmented Reality Development Service',
      desc: 'Engage your audience with Augmented Reality Development Services overlay digital content into real world, creating interactive experiences that boost engagement and learning enhancing customer engagement.',
      link: '/services/it-staff-augmentation-services-company',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
          <path d="M3 8V5a2 2 0 0 1 2-2h3" />
          <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
          <path d="M3 16v3a2 2 0 0 0 2 2h3" />
          <path d="m10 10 4 4" />
          <path d="m14 10-4 4" />
        </svg>
      )
    },
    {
      title: 'Cloud Application Development Service',
      desc: 'We use the newest developments in cloud computing, such as creating hybrid multi-cloud solutions, transferring enterprise data to the cloud, and developing next-generation apps.',
      link: '/services/cloud-application-development',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="m12 11 2 2-2 2" />
        </svg>
      )
    },
    {
      title: 'Cloud-Native App Development Service',
      desc: 'We use latest strategies to build cloud native app, such as creating hybrid multi-cloud solutions, transferring enterprise data to the cloud, and developing next-generation apps.',
      link: '/services/cloud-native-application-development-services',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="8" x="2" y="3" rx="2" />
          <rect width="20" height="8" x="2" y="13" rx="2" />
          <line x1="6" y1="7" x2="6.01" y2="7" />
          <line x1="6" y1="17" x2="6.01" y2="17" />
          <path d="M17 7h1" />
          <path d="M17 17h1" />
        </svg>
      )
    },
    {
      title: 'Voice Search and Voice Assistant',
      desc: 'We use Voice search technology that enables users to search the Internet, a website, or an application using voice commands.',
      link: '/services/ai-voice-assistant-development',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      )
    },
    {
      title: 'Wearable App Integration Service',
      desc: 'Our skilled developers are masters in integrating wearable apps, guaranteeing compatibility across many devices, and providing outstanding user experiences.',
      link: '/services/wearable-app-development-services',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="12" height="12" x="6" y="6" rx="3" />
          <path d="M9 6V2h6v4" />
          <path d="M9 18v4h6v-4" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  // Benefits Of Cloud-Based Solutions
  const cloudBenefitsData = [
    {
      title: 'Increased Efficiency',
      desc: 'As opposed to the traditional ways, cloud services are fast deployed and are rapidly ready for use in a matter of minutes.',
      icon: (
        <svg className="w-11 h-11 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14l3.5-3.5" />
          <circle cx="12" cy="14" r="1.5" fill="currentColor" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
          <path d="M6 12H4" />
          <path d="M20 12h-2" />
          <path d="M7.5 7.5L9 9" />
          <path d="M15 9l1.5-1.5" />
          <path d="M12 4v2" />
        </svg>
      )
    },
    {
      title: 'High Flexibility',
      desc: 'Ability to quickly meet business demands as and when required. It has shortened time to market and cost optimization.',
      icon: (
        <svg className="w-11 h-11 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M2 20h20" />
          <circle cx="12" cy="10" r="2" />
          <path d="M12 7v1" />
          <path d="M12 12v1" />
          <path d="M9.5 8.5l.7.7" />
          <path d="M13.8 12.8l.7.7" />
          <path d="M9 10h1" />
          <path d="M14 10h1" />
          <path d="M9.5 11.5l.7-.7" />
          <path d="M13.8 7.2l.7-.7" />
        </svg>
      )
    },
    {
      title: 'Cost Reduction',
      desc: 'With cloud auto-scaling feature you would be charged for what you do use when it is running or utilizing service.',
      icon: (
        <svg className="w-11 h-11 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="9" r="6" />
          <path d="M12 6.5v5" />
          <path d="M13.5 7.8c0-.7-.6-1.3-1.5-1.3h-.5c-.8 0-1.5.5-1.5 1.2 0 1.5 3.5 1 3.5 2.6 0 .8-.7 1.4-1.5 1.4H11c-.9 0-1.6-.6-1.6-1.3" />
          <path d="M5 18c2-1 4.5-1.5 7-1.5s5 .5 7 1.5l-1 3.5H6z" />
          <path d="M3 21h18" />
        </svg>
      )
    },
    {
      title: 'Faster Disaster Recovery',
      desc: 'Since capacity, location planning and operations are easily managed, it allows enterprises to respond quickly to unexpected business changes.',
      icon: (
        <svg className="w-11 h-11 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18" />
          <rect x="5" y="13" width="3" height="7" rx="0.5" />
          <rect x="10.5" y="10" width="3" height="10" rx="0.5" />
          <rect x="16" y="7" width="3" height="13" rx="0.5" />
          <path d="M4 9l5-5 5 3 6-4" />
          <path d="M17 3h3v3" />
        </svg>
      )
    },
    {
      title: 'Increased Collaboration',
      desc: 'Cloud-managed applications can dramatically enhance staff and client collaboration, reducing stress and the time working on it.',
      icon: (
        <svg className="w-11 h-11 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11v10" />
          <path d="M7 15l4.5-5a1.8 1.8 0 0 1 3 1.2v1.8h4.5a2 2 0 0 1 2 2.3l-1.2 6a2 2 0 0 1-2 1.7H7" />
          <rect x="3" y="11" width="4" height="10" rx="1" />
          <path d="M6 4l.5 1.5H8l-1.2 1 .5 1.5L6 7l-1.3 1 .5-1.5L4 6.5h1.5z" />
          <path d="M12 2l.5 1.5H14l-1.2 1 .5 1.5L12 5l-1.3 1 .5-1.5L10 4.5h1.5z" />
          <path d="M18 4l.5 1.5H20l-1.2 1 .5 1.5L18 7l-1.3 1 .5-1.5L16 6.5h1.5z" />
        </svg>
      )
    },
    {
      title: 'High Availability',
      desc: 'Most of the cloud providers are truly reliable in offering their services, with most of them maintaining an uptime of 99.9%.',
      icon: (
        <svg className="w-11 h-11 text-[#0084B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="9" r="5.5" />
          <path d="M9 15h6" />
          <path d="M10 18h4" />
          <path d="M11 21h2" />
          <path d="M12 1v2" />
          <path d="M4.5 4.5l1.5 1.5" />
          <path d="M19.5 4.5l-1.5 1.5" />
          <path d="M1 9h2" />
          <path d="M21 9h2" />
        </svg>
      )
    }
  ];

  // Cloud App Development Services (Cards Slider)
  const cloudAppDevelopmentServicesData = [
    {
      title: 'Cloud Integration Services',
      desc: 'Boost connectivity by integrating modern cloud technologies, ensuring seamless data flow and syncing across systems while maintaining peak security and enterprise resilience.',
      link: '/contact-us'
    },
    {
      title: 'Cloud Monitoring And Support',
      desc: 'We offer effective cloud performance monitoring and optimization services. Our cloud monitoring and support service gives you complete visibility into the health and availability of the entire cloud...',
      link: '/contact-us'
    },
    {
      title: 'Cloud App Development',
      desc: 'Our cloud team builds solutions that are extremely scalable, highly secure, and efficiently designed to optimize the user experience and maximize your ROI.',
      link: '/contact-us'
    },
    {
      title: 'Cloud-Native Development',
      desc: 'Maximize your productivity with our Cloud-Native services that include, Design, Develop and deploy cloud-native applications to get a competitive advantage and drive your business growth.',
      link: '/contact-us'
    },
    {
      title: 'Cloud Consulting Services',
      desc: 'Assist businesses with comprehensive cloud consultation, resilient architecture design, multi-cloud strategy, system integration, and proactive ongoing lifecycle support.',
      link: '/contact-us'
    },
    {
      title: 'Cloud Migration & Modernization',
      desc: 'Seamlessly migrate legacy workloads, enterprise databases, and business-critical software to AWS, Azure, or GCP with zero downtime and optimized operational costs.',
      link: '/contact-us'
    },
    {
      title: 'Cloud Security & Compliance',
      desc: 'Safeguard your enterprise digital assets with end-to-end cloud security audits, identity governance, data encryption, and regulatory compliance (GDPR, HIPAA, SOC 2).',
      link: '/contact-us'
    },
    {
      title: 'DevOps & Cloud Automation',
      desc: 'Accelerate delivery cycles and continuous integration with automated CI/CD pipelines, infrastructure as code (IaC), containerization, and orchestration.',
      link: '/contact-us'
    }
  ];

  const cloudFaqList = [
    {
      id: 1,
      question: 'Why choose Sapphire Solutions as your cloud application development partner?',
      answer: "Sapphire Software Solutions offers 23+ years' experience with 1,500+ projects across 30+ countries, of expertise in building scalable, secure, and high-performance cloud applications using AWS, Azure, and Google Cloud."
    },
    {
      id: 2,
      question: 'What types of cloud application development services do you provide?',
      answer: 'Our services include cloud-native app development, SaaS solutions, microservices architecture, API development, migration of legacy apps to the cloud, DevOps automation, and multi-cloud deployment to maximize flexibility and reliability.'
    },
    {
      id: 3,
      question: 'How do you ensure security and compliance in your cloud applications?',
      answer: 'We implement industry-standard security protocols including data encryption, identity and access management (IAM), regular vulnerability assessments, and compliance with GDPR, HIPAA, and other regulatory standards to safeguard your data and maintain trust.'
    },
    {
      id: 4,
      question: 'Which language is often used for cloud-based application development?',
      answer: 'Because of how simple it is to learn and work with, PHP has become one of the most popular programming languages in web development and cloud computing. We also build high-throughput microservices using Node.js, Python, Go, and .NET Core, leveraging serverless computing and containerized deployments.'
    },
    {
      id: 5,
      question: 'Can Sapphire Solutions help migrate my existing applications to the cloud?',
      answer: 'Yes, we offer comprehensive cloud migration services that include assessment, planning, re-architecting, and execution. Our goal is to minimize downtime, ensure data integrity, and optimize cloud infrastructure for performance and cost savings.'
    },
    {
      id: 6,
      question: 'What industries does Sapphire Software Solutions serve with cloud application development?',
      answer: 'We serve diverse industries including finance, healthcare, retail, manufacturing, education, and logistics. Our cloud solutions address industry-specific challenges such as scalability, data security, and regulatory compliance.'
    },
    {
      id: 7,
      question: 'How long does it take to develop a custom cloud application?',
      answer: 'Project duration varies depending on complexity and requirements. We follow agile methodologies with iterative delivery, ensuring continuous feedback and transparency throughout the development lifecycle.'
    },
    {
      id: 8,
      question: 'Does Sapphire Software Solutions provide ongoing cloud application support and maintenance?',
      answer: 'Absolutely! We provide 24/7 monitoring, performance tuning, security updates, and technical support to ensure your cloud applications run smoothly and evolve with your business needs.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Cloud Application Development Company in USA | Hire Cloud Developers in USA | Firevy.co"
        description="Sapphire Software Solutions is the best Cloud Application Development Company USA. We deliver scalable and flexible Cloud App Development services from development, migration, and testing to consulting."
        keywords="cloud application development, cloud development services, hire cloud developers, cloud computing company, aws cloud services, azure cloud development, google cloud platform, cloud-native app development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-14 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[41px] leading-[1.2]"
              >
                Cloud Application Development Company in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                We offer custom cloud application development services as per your budget and requirement. Contact us to create apps that run in the cloud and leverage high-throughput cloud features, microservices, and serverless architectures offered by top cloud vendors.
              </p>

              {/* 4 Stats Grid in Hero */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#005F96]">100+</div>
                  <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-tight">Cloud Devs</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#005F96]">Fortune</div>
                  <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-tight">500 Clients</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#005F96]">500+</div>
                  <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-tight">Projects Done</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#005F96]">5-Star</div>
                  <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-tight">Clutch Score</div>
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

            {/* Right Hero Meeting Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[580px] flex justify-center">
                <img
                  src="/images/cloud_hero_illustration.jpg"
                  alt="Cloud Application Development Company in USA"
                  className="w-full h-auto object-contain max-h-[420px] rounded-2xl shadow-sm border border-slate-200/60"
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
      {/* 2. TOP CLOUD APP DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/cloud_solutions_illustration.jpg"
                  alt="Top Cloud App Development Services"
                  className="w-full h-auto object-contain rounded-2xl shadow-sm border border-slate-200/60"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Top Cloud App <br />
                Development Services
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Sapphire tackles issues like scalability and security by offering professional services for developing cloud applications. We use Google Cloud Platform, AWS, and Azure to improve our online visibility and expedite processes. We provide safe, scalable cloud managed solutions that promote expansion. We evaluate your current systems and migrate workloads to enable you to fully utilize these cloud platforms. Because they have practical experience with cutting-edge tools and technologies, our professionals are experts in cloud-native app development and End-to-end cloud development services with the best cloud computing managed services for the requirements of your project.
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
      {/* 5. GET 100% CUSTOMIZABLE CLOUD APPLICATION DEVELOPMENT */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Cloud Application Development
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
                Scalable, High-Performance & Secure Cloud Architecture
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Modern enterprise demands agility, zero-downtime scalability, and fortress-grade data protection. Whether architecting cloud-native microservices, migrating mission-critical relational databases, or orchestrating multi-cloud Kubernetes clusters, our senior cloud architects build resilient infrastructure optimized for performance and cost efficiency.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We empower startups and Fortune 500 enterprises to leverage AWS, Microsoft Azure, and Google Cloud with end-to-end continuous integration and deployment (CI/CD) pipelines. From serverless microservices to hybrid cloud enterprise migrations, hiring our cloud engineers guarantees maximum uptime and substantial operational savings.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CUTTING EDGE TECHNOLOGIES SAPPHIRE USE FOR CLOUD APP DEVELOPMENT */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-slate-900 font-sans border-b border-slate-100 overflow-hidden">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Cutting Edge Technologies Sapphire Use For Cloud App Development
            </h2>
          </div>

          {/* Cards Carousel Container */}
          <div className="relative">
            <div
              ref={cuttingEdgeSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1 select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cuttingEdgeTechCards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-[290px] sm:w-[330px] lg:w-[360px] shrink-0 bg-[#EAF5FB] rounded-[16px] p-6 sm:p-8 flex flex-col justify-start text-left border border-sky-100/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-5 flex items-center">
                    {card.icon}
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0F172A] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-[1.7] font-normal">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows centered below */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => {
                  if (cuttingEdgeSliderRef.current) {
                    cuttingEdgeSliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
                  }
                }}
                aria-label="Previous Slide"
                className="p-2 text-slate-700 hover:text-[#005F96] transition-colors focus:outline-hidden cursor-pointer"
              >
                <ArrowLeft className="w-6 h-6 stroke-[2]" />
              </button>
              <button
                onClick={() => {
                  if (cuttingEdgeSliderRef.current) {
                    cuttingEdgeSliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
                  }
                }}
                aria-label="Next Slide"
                className="p-2 text-slate-700 hover:text-[#005F96] transition-colors focus:outline-hidden cursor-pointer"
              >
                <ArrowRight className="w-6 h-6 stroke-[2]" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Sapphire" />

      {/* ========================================================================= */}
      {/* 8. MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 9. INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection />



      {/* ========================================================================= */}
      {/* 10. ABOUT US STATS GRID */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Sapphire" />

      {/* ========================================================================= */}
      {/* 11. EXPLORE THE TRANSFORMATIVE IMPACT OF CLOUD APP ON YOUR BUSINESS SUCCESS */}
      {/* ========================================================================= */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Cloud App On Your Business Success" />

      {/* ========================================================================= */}
      {/* 12. SAPPHIRE’S COMPREHENSIVE SUITE OF CLOUD APP DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white font-sans text-left overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              Sapphire’s Comprehensive Suite of Cloud App Development Services
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              Sapphire developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Sapphire provides full-service mobile app development customized to meet your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Mobile App UI/UX Design',
                desc: 'By considering market trends and creating best practices that provide an enhanced app user experience, we can help you create a unique, sophisticated, and user-friendly mobile app user interface.'
              },
              {
                title: 'MVP Development',
                desc: 'By creating an MVP with the necessary functionality, we increase your trust in the app idea. This enables you to swiftly release a test app onto the market and attract early users before moving on to complete app development.'
              },
              {
                title: 'Custom App Development',
                desc: "Whether you're developing a mobile app for a business or a community, we can help you realize your unique idea by incorporating cutting-edge features that will make it stand out from the crowd."
              },
              {
                title: 'Startup App Development',
                desc: 'Our world-class app development solutions will help your startup take off by helping startups get the best app solution possible with the use of leading app development frameworks.'
              },
              {
                title: 'Enterprise App Development',
                desc: 'Enhance your business operations through mobility by integrating third-party integrations and industry-leading technologies into your mobile app solutions to increase revenue and business operations.'
              },
              {
                title: 'Embedded IoT App Development',
                desc: 'To control and fully exploit your IoT-enabled environment, get a highly customized embedded software solution built with cloud and AI/ML technology.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white text-slate-900 rounded-2xl p-7 flex flex-col justify-start text-left shadow-md hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] mb-3 leading-snug font-sans">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 13. SECTORS THRIVING THROUGH SAPPHIRE’S BESPOKE CLOUD APP DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Sapphire’s Bespoke Cloud App Development Services" />

      {/* ========================================================================= */}
      {/* 14. TECHNOLOGY STACK THAT SAPPHIRE MOBILE DEVELOPERS USE PROFICIENTLY */}
      {/* ========================================================================= */}
      <MobileAppProficientTechStackSection title="Technology Stack That Sapphire Mobile Developers Use Proficiently" />

      {/* ========================================================================= */}
      {/* 15. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 16. BENEFITS OF CLOUD-BASED SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F4F9FD]">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4">
              Benefits Of Cloud-Based Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-normal">
              Our Cloud computing solutions have enormous benefits to offer:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cloudBenefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-[#E2EEF8] shadow-[0_4px_20px_rgba(0,132,180,0.04)] hover:shadow-[0_10px_30px_rgba(0,132,180,0.1)] transition-all duration-300 flex flex-col items-start text-left"
              >
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 17. CLOUD APP DEVELOPMENT SERVICES (CAROUSEL SLIDER) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-22 bg-white overflow-hidden border-b border-slate-100">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">
              Cloud App Development Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              With over a decade of experience in cloud-based app development, we deliver top cloud computing services solutions that cater for the diverse requirements of our clients. We have gained extensive expertise in providing full-cycle our cloud application development services.
            </p>
          </div>

          {/* Cards Carousel Container */}
          <div className="relative">
            <div
              ref={cloudServicesSliderRef}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1 select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cloudAppDevelopmentServicesData.map((service, index) => (
                <div
                  key={index}
                  className="w-[300px] sm:w-[350px] lg:w-[380px] shrink-0 bg-[#EAF3FA] rounded-[18px] p-7 sm:p-8 flex flex-col justify-between text-left border border-sky-100/70 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-[14.5px] leading-relaxed mb-8">
                      {service.desc}
                    </p>
                  </div>
                  <div>
                    <Link
                      to={service.link}
                      className="inline-block px-7 py-2.5 bg-[#0084B4] hover:bg-[#006E98] text-white font-semibold rounded-[8px] text-sm transition-colors shadow-sm"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  if (cloudServicesSliderRef.current) {
                    cloudServicesSliderRef.current.scrollBy({ left: -380, behavior: 'smooth' });
                  }
                }}
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#0084B4] hover:border-[#0084B4] transition-all shadow-xs cursor-pointer"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  if (cloudServicesSliderRef.current) {
                    cloudServicesSliderRef.current.scrollBy({ left: 380, behavior: 'smooth' });
                  }
                }}
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#0084B4] hover:border-[#0084B4] transition-all shadow-xs cursor-pointer"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 18. BUSINESS FRIENDLY HIRING MODELS */}
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
        faqList={cloudFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART AS CLOUD APPLICATION DEVELOPMENT COMPANY */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Cloud Application Development Company?"
        subtitle="Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* ========================================================================= */}
      {/* 23. GET ACCESS TO TOP CLOUD DEVELOPERS (CTA BANNER) */}
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
            As cloud service providers, we can help grow your business, through the cloud and overcome technology challenges, to the best.
          </p>
          <div>
            <a
              href="#consultation-form"
              className="inline-block bg-white hover:bg-slate-100 text-[#005D95] font-extrabold text-sm sm:text-base px-9 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Hire now
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

export default CloudDevelopmentService;
