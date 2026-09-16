import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import ProudAwardsBanner from './ProudAwardsBanner';
import CrossPlatformAwardsMarqueeBanner from './CrossPlatformAwardsMarqueeBanner';
import CrossPlatformMusicCaseStudySection from './CrossPlatformMusicCaseStudySection';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection, { iwatchFaqList } from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';
import IWatchWhatSetsUsApartSection from './IWatchWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import {
  Watch,
  HeartPulse,
  Activity,
  Zap,
  Smartphone,
  ShieldCheck,
  Cpu,
  Wifi,
  Radio,
  Clock,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Check,
  Sparkles,
  Layers,
  Award,
  Users,
  Target,
  Play,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const CrossPlatformAppDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Wearable Squad',
    appType: 'Custom WatchOS App Development',
    budget: '$20,000 - $45,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 6 Expertise Items for Cross-Platform App Development
  const expertiseItems = [
    {
      title: 'AI Integrated Cross-Platform Apps',
      desc: 'To improve the features and user experience of our cross-platform applications, we incorporate artificial intelligence. Our developers build flawless applications for our clients.',
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M9 7h6M9 11h6M9 15h4" />
          <circle cx="12" cy="18" r="0.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Wearable Cross-Platform Apps',
      desc: 'We offer Cross-Platform wearable software development services that incorporate sensors and cameras to provide an enhanced user experience.',
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="16" rx="3" />
          <circle cx="12" cy="12" r="3" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3" />
        </svg>
      )
    },
    {
      title: 'Web-Based Cross-Platform Apps',
      desc: "Doesn't want an app that disadvantages users by requiring them to download it? We've got you covered! We will assist you in creating world-class web-based applications.",
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <circle cx="12" cy="10" r="2.5" />
          <path d="M12 6v1.5M12 12.5V14M8 10h1.5M14.5 10H16" />
        </svg>
      )
    },
    {
      title: 'Cross-Platform UI/UX Design Services',
      desc: 'Our cross-platform apps are well-known for their beautiful User Interface (UI/UX) and quick loading time. Our designers understand what works best for your apps.',
      badgeBg: 'bg-[#fef9c3]',
      badgeColor: 'text-[#ca8a04]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
          <circle cx="6" cy="6" r="1" fill="currentColor" />
          <circle cx="12" cy="15" r="2" />
        </svg>
      )
    },
    {
      title: 'Quality Assurance Testing Services',
      desc: 'We make no compromises when it comes to quality assurance. Recurrent quality checks ensure that no bug escapes our notice.',
      badgeBg: 'bg-[#fce7f3]',
      badgeColor: 'text-[#db2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 12l2 2 4-4" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <line x1="8" y1="17" x2="14" y2="17" />
        </svg>
      )
    },
    {
      title: 'Support & Maintenance Services',
      desc: 'We would never leave you hanging. We commit to being there for you even after the project gets completed. Your task is as important to us as it is to you.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a3 3 0 0 0 0-6h-.14A4 4 0 0 0 18 10z" />
          <path d="M13 14h4" />
        </svg>
      )
    }
  ];

  // 6 Benefits of Cross-Platform App Development
  const benefitsItems = [
    {
      title: 'Optimum Audience Exposure',
      desc: 'Since cross-platform applications benefit both the Android and iOS platforms, you get the most audience attention and target several OS markets, your chances of reaching a global audience grow.',
      icon: (
        <svg className="w-10 h-10 text-[#0077b6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Outer Circle with 4 Crosshair Ticks */}
          <circle cx="12" cy="12" r="7.5" />
          <line x1="12" y1="1.5" x2="12" y2="4.5" />
          <line x1="12" y1="19.5" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="4.5" y2="12" />
          <line x1="19.5" y1="12" x2="22.5" y2="12" />
          {/* User Head & Shoulders Inside Target */}
          <circle cx="12" cy="9.2" r="2.2" />
          <path d="M8.2 15.8c0-2 1.7-3 3.8-3s3.8 1 3.8 3" />
        </svg>
      )
    },
    {
      title: 'Decreased Development Overheads',
      desc: 'When you create a cross-platform app, you gain the advantage of re-usability. From the code to the deployment strategy, you can reuse anything and save a significant amount of money.',
      icon: (
        <svg className="w-10 h-10 text-[#0077b6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          {/* Downward Trend Arrow */}
          <line x1="6" y1="5.5" x2="18.5" y2="13.5" strokeWidth="2.4" />
          <path d="M13.5 13.5h5V8.5" strokeWidth="2.4" />
          {/* Horizontal Baseline */}
          <line x1="2" y1="21.5" x2="22" y2="21.5" strokeWidth="2.4" />
          {/* 4 Descending Vertical Bars */}
          <rect x="4" y="11" width="3" height="10.5" strokeWidth="2" rx="0.5" />
          <rect x="9" y="13.2" width="3" height="8.3" strokeWidth="2" rx="0.5" />
          <rect x="14" y="15.8" width="3" height="5.7" strokeWidth="2" rx="0.5" />
          <rect x="19" y="18.2" width="3" height="3.3" strokeWidth="2" rx="0.5" />
        </svg>
      )
    },
    {
      title: 'Simple Handling And Deployment',
      desc: 'Maintenance is simplified because you only need to handle one app that runs through several platforms. Furthermore, the deployment phase is simplified.',
      icon: (
        <svg className="w-10 h-10 text-[#0077b6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Rocket Fuselage */}
          <path d="M12.5 14.5l-3-3a21 21 0 0 1 2-3.8A12.5 12.5 0 0 1 21.5 2.5a12.5 12.5 0 0 1-5.2 10 21 21 0 0 1-3.8 2z" />
          {/* Porthole Window */}
          <circle cx="15.5" cy="8.5" r="1.8" />
          {/* Side Fins */}
          <path d="M9.5 11.5H5.5c-1 0-1.8.8-1.5 1.8l1 3.2 4-1" />
          <path d="M12.5 8.5V4.5c0-1 .8-1.8 1.8-1.5l3.2 1-1 4" />
          {/* Rocket Thrust Exhaust Trails */}
          <line x1="6" y1="18" x2="3" y2="21" />
          <line x1="9" y1="17" x2="6.5" y2="19.5" />
          <line x1="7" y1="15" x2="4.5" y2="17.5" />
        </svg>
      )
    },
    {
      title: 'Easy To Integrate',
      desc: 'Since Cross-Platform apps support several plugins that aid in cloud integration, they are easy to integrate. It significantly increases efficiency and scalability.',
      icon: (
        <svg className="w-10 h-10 text-[#0077b6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3.2" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: 'Quick Marketing And Modification',
      desc: 'Since your production time gets reduced, your marketing time gets reduced as well. Furthermore, its scalability allows you to make as many changes as possible.',
      icon: (
        <svg className="w-10 h-10 text-[#0077b6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6.5" cy="7" r="3" />
          <path d="M2.5 17c0-2.2 2-3.2 4-3.2s4 1 4 3.2" />
          <path d="M12 11l3.5-3.5 4 3.5" />
          <path d="M16.5 7.5h3v3" />
          <rect x="13" y="14" width="2" height="7" rx="0.5" />
          <rect x="16.5" y="12" width="2" height="9" rx="0.5" />
          <rect x="20" y="9.5" width="2" height="11.5" rx="0.5" />
        </svg>
      )
    },
    {
      title: 'Uniformity',
      desc: 'Cross-Platform apps promote uniformity like nothing else. You get to highlight your brand values through all of your products and offer uniformity in design on any device your customers use.',
      icon: (
        <svg className="w-10 h-10 text-[#0077b6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <line x1="3" y1="8" x2="21" y2="8" />
          <circle cx="6" cy="5.5" r="0.75" fill="currentColor" />
          <circle cx="8.5" cy="5.5" r="0.75" fill="currentColor" />
          <circle cx="11" cy="5.5" r="0.75" fill="currentColor" />
          <path d="M12 11.5l3.5 1.5v2.8c0 2-2 3.2-3.5 3.7-1.5-.5-3.5-1.7-3.5-3.7V13l3.5-1.5z" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      points: [
        'Optimal flexibility',
        'Agile team',
        'Small projects',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time Material',
      desc: "If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      points: [
        'No hidden costs',
        'Working based hours',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Dedicated Team',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      points: [
        'No hidden costs',
        '160 hours of assured work',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Buckets Approach',
      desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      points: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Less budget',
        'Pay only for measurable work'
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // 4 Business Advantage Metrics
  const valueMetrics = [
    {
      title: 'Instant User Engagement',
      metric: '95%+',
      desc: 'Wrist push notifications achieve near 100% open rates for time-sensitive alerts and reminders.',
      icon: Target
    },
    {
      title: 'Real-Time Biometrics',
      metric: '24/7',
      desc: 'Continuous HealthKit tracking empowers healthcare, fitness, and wellness organizations.',
      icon: HeartPulse
    },
    {
      title: 'Hands-Free Productivity',
      metric: '3x Faster',
      desc: 'Quick voice commands and 1-tap complications accelerate daily task execution.',
      icon: Zap
    },
    {
      title: 'Competitive Market Advantage',
      metric: 'Top 1%',
      desc: 'Distinguish your digital brand with futuristic, high-performance wearable technology.',
      icon: Award
    }
  ];

  // Tech Categories
  const techCategories = {
    backend: [
      { name: 'SwiftUI & WatchKit', desc: 'Apple official WatchOS frameworks for fluid, responsive 60fps wrist interfaces.' },
      { name: 'HealthKit SDK', desc: 'Secure biometric data access for health, fitness, and medical wearable applications.' },
      { name: 'WatchConnectivity', desc: 'Low-energy background messaging protocol between iPhone and Apple Watch.' }
    ],
    frontend: [
      { name: 'Swift 5.10', desc: 'Modern, high-performance programming language optimized for Apple WatchOS architecture.' },
      { name: 'WidgetKit', desc: 'Custom Glance widgets and interactive watch face complications.' }
    ],
    database: [
      { name: 'CoreData & Realm', desc: 'Ultra-lightweight local encrypted database for offline WatchOS data storage.' }
    ],
    devops: [
      { name: 'AWS Cloud & Firebase', desc: 'High-speed cloud endpoints delivering real-time push notifications and webhook sync.' }
    ],
    testing: [
      { name: 'Apple Watch Hardware Lab', desc: 'Rigorous real-device testing across Apple Watch Series 7/8/9, SE, and Apple Watch Ultra.' }
    ],
    pm: [
      { name: 'Jira & Agile Sprints', desc: 'Transparent bi-weekly sprint reviews and direct communication with senior WatchOS engineers.' }
    ]
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Cross-Platform App Development Company | Multi-Platform Solutions | Firevy.co"
        description="Top Cross-Platform App Development Company. Build custom multi-platform applications, high performance integrations, and scalable cross-platform solutions with Firevy.co."
        canonical="/services/cross-platform-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Best Cross-Platform App Development Company in USA"
        subtitle="At Sapphire Solutions, we provide cross-platform app development services for multiple platforms and devices using programming languages like HTML5, CSS3, and JavaScript."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="cross-platform"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* SECTION: Hire Cross-Platform App Developers For Project (1:1 Reference Screenshot Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Hire Developers Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/cross_platform_hire_developers.jpg"
                  alt="Hire Cross-Platform App Developers For Project"
                  className="w-full h-auto max-w-[460px] object-contain rounded-2xl drop-shadow-sm"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Hire Cross-Platform App Developers For Project
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Regardless of the platform, device, sector, or user base, our Affordable cross-platform app development specializes in developing robust cross-platform applications that stand out and produce outcomes. By utilizing universal code, developing a common user interface, and testing cross-platform mobile apps to make sure all essential functions work with both iOS and Android, we guarantee the same user experience. With their expertise in cross-platform development, Sapphire's developers can design a multiplatform app development experience that fits your needs as a user, business, sector, or vertical.
              </p>
            </div>
          </div>
        </Container>
      </section>


      {/* SECTION 3: World Wide Top Rated IT Company on Clutch (Award Badges Marquee Banner) */}
      <CrossPlatformAwardsMarqueeBanner />

      {/* SECTION: Build High-Quality Hybrid Applications Using Latest Technologies (1:1 Reference Screenshot Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
              Build High-Quality Hybrid Applications Using Latest Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Quote Card Box (Soft Icy Blue Background with Topographical Watermark & Quote Icon) */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-2xl bg-[#EFF7FC] border border-blue-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[300px]">
                {/* Topographical Vector Pattern Overlay */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <path d="M0 100 C100 50, 200 150, 400 100 M0 200 C150 150, 250 250, 400 200 M0 300 C100 250, 300 350, 400 300" stroke="#005F96" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Big Quote Marks Icon */}
                <div className="relative z-10 text-[#005F96] mb-4">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Robust, Scalable, Innovative Headline */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-[800] text-[#005F96] leading-tight">
                    Robust, Scalable, Innovative, And Hybrid Applications
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                The cross-platform app is the future of mobile application development because it is a viable technology that reduces development time and expense while creating truly native applications. We are the leader in providing cross-platform app development services. Custom cross-platform application development company have a well-versed team of cross-platform app development capable of delivering a superior experience to our customers.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                In the cross-platform industry, our products get recognized for their high quality. By using the power of cross-platform technology, we realize unique business needs and design strategies to develop the best solutions. To deliver best-in-class cross-platform applications, Top cross-platform development agency uses cutting-edge technology and specialize in a wide range of cross-platform development languages like Cordova/Ionic/PhoneGap, Sencha, Cocos 2DX, etc. Our skills, experience, and dedication distinguish us as a mobile app development company that stands out from the crowd.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* SECTION: Success Stories (Placed Directly Below Premium Services) */}
      <SuccessStoriesSection category="general" />

      {/* SECTION: Our Range Of Cross-Platform App Development Services Include (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Our Range Of Cross-Platform App Development Services Include
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              We specialize in developing UI/UX design, web-based and AI-enabled creation, and wearable apps. some of our cross-platform application development services include:
            </p>
          </motion.div>

          {/* 6 White Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 sm:mb-12"
          >
            {expertiseItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="relative bg-white rounded-[16px] p-7 sm:p-8 border border-slate-200/80 hover:border-[#93c5fd]/70 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-left space-y-4 group cursor-default overflow-hidden"
              >
                {/* Animated Top Border Accent Line */}
                <span className="absolute top-0 left-0 w-full h-[3.5px] bg-[#0284c7] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-left z-20" />

                {/* Animated Bottom Border Accent Line */}
                <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-[#0284c7] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-right z-20" />

                {/* Animated Hover Fill Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#e4f6ff] via-[#d2f0ff] to-[#bdeaff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 rounded-[15px]" />

                {/* Card Content */}
                <div className="relative z-10 space-y-4">
                  {/* Color Badge Icon */}
                  <div className={`w-12 h-12 rounded-[12px] ${item.badgeBg} ${item.badgeColor} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans group-hover:text-slate-700 transition-colors duration-200">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Centered 'Get A Free Quote For Your Project' Dark Blue Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[8px] bg-[#0b5072] hover:bg-[#084260] text-white font-[800] text-[15px] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 font-sans"
            >
              Get A Free Quote For Your Project
            </a>
          </motion.div>
        </Container>
      </section>

      {/* SECTION: MaDigital BeatSync Video Showcase (1:1 Reference Screenshot Match) */}
      <CrossPlatformMusicCaseStudySection />

      {/* SECTION: Proud To Have Picked These Up Along The Way (1:1 Reference Screenshot Match) */}
      <ProudAwardsBanner />

      {/* SECTION: Benefits Of Cross-Platform App Development (1:1 Reference Screenshot Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight font-sans">
              Benefits Of Cross-Platform App Development
            </h2>
          </motion.div>

          {/* 6 White Benefit Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {benefitsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-start shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SECTION: Business Friendly Hiring Models (1:1 Reference Screenshot Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </motion.div>

          {/* 4 White Hiring Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {hiringModels.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[18px] p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-4">
                  {/* Circle Badge Icon */}
                  <div className={`w-14 h-14 rounded-full ${item.badgeBg} ${item.badgeColor} flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    {item.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-[20px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 font-[400] leading-relaxed font-sans text-center">
                    {item.desc}
                  </p>

                  {/* Bullet Points List with Blue Checkmarks */}
                  <ul className="space-y-2 pt-2 text-left font-sans text-xs sm:text-[13px] text-slate-700 font-[600]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0284c7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 'Hire Now' Dark Blue Button */}
                <a
                  href="#quote-form"
                  className="w-full py-3 rounded-[8px] bg-[#0b5072] hover:bg-[#084260] text-white font-[800] text-sm transition-all shadow-md hover:shadow-lg font-sans inline-block mt-4"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SECTION: Unveiling Our Innovative Solution (1:1 Reference Match) */}
      <InnovativeSolutionsVideoSection />

      {/* SECTION: Process We Follow (Moved Directly Below Unveiling Our Innovative Solution) */}
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from wearable UI wireframes to WatchOS SDK development, UAT, and App Store deployment." />

      {/* SECTION: Our Story, Their Words (1:1 Reference Match) */}
      <OurStoryTheirWordsSection />
      <TrustedBrandsGrid />
      <SuccessMatrix />
      <SapphireTechStackGrid domainName="iwatch app" richTechCategories={techCategories} />
      <FeaturedInBrandsSection />
      <DigitalTransformationSlider />

      {/* SECTION 5: Frequently Asked Questions (1:1 Reference Match) */}
      <SapphireFaqSection faqList={iwatchFaqList} />

      {/* SECTION: Our Recent Blogs (1:1 Reference Match) */}
      <IWatchRecentBlogsSection />

      {/* SECTION: What Sets Us Apart (1:1 Reference Match) */}
      <IWatchWhatSetsUsApartSection />

      {/* SECTION: Challenge CTA Banner (1:1 Reference Match) */}
      <IWatchChallengeCtaBanner />
    </div>
  );
};

export default CrossPlatformAppDevelopmentService;
