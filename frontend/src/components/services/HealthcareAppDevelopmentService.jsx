import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import WorkProcessGrid from '../home/WorkProcessGrid';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import BRAND from '../../constants/brand';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import ClientStoryVideoSlider from '../common/ClientStoryVideoSlider';
import FeaturedInMedia from '../common/FeaturedInMedia';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection, { healthcareFaqList } from '../common/SapphireFaqSection';
import RecentBlogsSection from '../common/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import HealthcareChallengeCtaBanner from '../common/HealthcareChallengeCtaBanner';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Video,
  Calendar,
  Activity,
  Pill,
  Cpu,
  Lock,
  Smartphone,
  Globe,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  UserCheck,
  Hospital,
  FileText,
  Zap,
  Award,
  Users,
  Star,
  MessageSquare,
  Clock,
  Phone,
  Mail,
  Sparkles,
  Building,
  Database,
  Server,
  RefreshCw,
  BarChart3,
  Radio,
  FileCode,
  Shield,
  Check,
  Flame,
  Bot,
  Compass,
  Headphones,
  CheckSquare,
  TrendingUp,
  Layers,
  Search,
  ExternalLink,
  Quote
} from 'lucide-react';

// Exact Reference 1:1 SVG Icon Vector Components
const FitnessAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M 14 8 H 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="12" y="12" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M 18 16 C 16.5 14.5, 14 16, 15.5 18 L 18 21.5 L 20.5 18 C 22 16, 19.5 14.5, 18 16 Z" fill="currentColor" />
  </svg>
);

const MeditationAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="18" cy="14" r="2.5" fill="currentColor" />
    <path d="M 14 22 C 14 18 22 18 22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M 12 24 C 15 22 21 22 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const ExerciseAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="12" y="16" width="3" height="6" rx="1" fill="currentColor" />
    <rect x="21" y="16" width="3" height="6" rx="1" fill="currentColor" />
    <line x1="14" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const QuickCareAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="18" height="26" rx="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="15" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 10 22 C 10 18 20 18 20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="25" cy="23" r="6" fill="currentColor" />
    <path d="M 25 20 V 26 M 22 23 H 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MonitoringPatientsIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="24" height="22" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="10" y="12" width="6" height="7" rx="1" fill="currentColor" opacity="0.8" />
    <line x1="18" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M 13 24 V 27 M 11.5 25.5 H 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DiagnosticTestIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="12" y="11" width="5" height="5" rx="1" fill="currentColor" />
    <rect x="19" y="11" width="5" height="5" rx="1" fill="currentColor" />
    <rect x="12" y="18" width="5" height="5" rx="1" fill="currentColor" />
    <rect x="19" y="18" width="5" height="5" rx="1" fill="currentColor" />
  </svg>
);

// Exact Reference 1:1 Benefits Section Blue Outline SVG Icon Components
const CareEngagementIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 14 26 C 14 20, 20 16, 24 16 C 28 16, 34 20, 34 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="11" r="4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M 10 32 L 18 28 L 24 34 L 30 28 L 38 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 16 38 C 20 42, 28 42, 32 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const OptimizedOperationsIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
    <path d="M 24 8 V 12 M 24 36 V 40 M 8 24 H 12 M 36 24 H 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 18 18 L 30 30 M 30 18 L 18 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="4" fill="currentColor" />
  </svg>
);

const SecureDataIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 24 6 L 38 12 V 24 C 38 33 24 40 24 40 C 24 40 10 33 10 24 V 12 L 24 6 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    <rect x="18" y="20" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M 21 20 V 16 C 21 14 27 14 27 16 V 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const CustomizedCareIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 34 C 14 28, 24 28, 28 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="19" cy="21" r="3.5" stroke="currentColor" strokeWidth="2.5" />
    <path d="M 32 12 V 20 M 28 16 H 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 8 38 C 16 42, 32 42, 40 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const HighTechResourcesIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 18 16 C 18 12, 30 12, 30 16 C 30 20, 26 21, 26 24 H 22 C 22 21, 18 20, 18 16 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    <path d="M 21 28 H 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M 10 34 C 18 30, 30 30, 38 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const UpdatesSupportIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
    <path d="M 24 16 V 24 L 29 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 36 14 L 40 18 L 36 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 12 34 L 8 30 L 12 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 1:1 Reference Match Hiring Models SVG Icon Components
const FixedPriceIcon = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 10 C 20 8, 28 8, 28 10 L 30 15 H 18 L 20 10 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M 17 15 H 31" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 14 19 C 12 28, 14 40, 24 40 C 34 40, 36 28, 34 19 C 34 16, 14 16, 14 19 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <text x="24" y="32" textAnchor="middle" fontSize="15" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">$</text>
  </svg>
);

const TimeMaterialIcon = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="27" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M 26 20 V 27 L 31 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 23 8 H 29 M 26 8 V 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M 10 14 L 14 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M 7 21 H 11 M 7 28 H 11 M 9 35 L 13 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const DedicatedTeamIcon = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="14" r="4.5" stroke="currentColor" strokeWidth="2" />
    <path d="M 16 32 C 16 25, 32 25, 32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="13" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M 7 33 C 7 28, 17 28, 17 33" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <circle cx="35" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M 31 33 C 31 28, 41 28, 41 33" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

const BucketsApproachIcon = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="19" cy="19" r="6.5" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M 19 10 V 12.5 M 19 25.5 V 28 M 10 19 H 12.5 M 25.5 19 H 28 M 12.5 12.5 L 14.5 14.5 M 23.5 23.5 L 25.5 25.5 M 25.5 12.5 L 23.5 14.5 M 14.5 23.5 L 12.5 25.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    
    <circle cx="32" cy="30" r="5" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <circle cx="32" cy="30" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M 32 23.5 V 25 M 32 35 V 36.5 M 25.5 30 H 27 M 37 30 H 38.5 M 27.5 25.5 L 28.5 26.5 M 35.5 33.5 L 36.5 34.5 M 36.5 25.5 L 35.5 26.5 M 28.5 33.5 L 27.5 34.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const HealthcareAppDevelopmentService = () => {
  const [activeTechTab, setActiveTechTab] = useState('backend');
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Healthcare Mobile App',
    budget: '$25,000 - $50,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Sapphire Solutions - Healthcare Expertise Cards (1:1 Reference Match)
  const expertiseList = [
    {
      title: 'Fitness App',
      icon: FitnessAppIcon,
      bgColor: 'bg-[#F3E8FF] text-[#9333EA]',
      desc: 'Fitness Apps By developing fitness healthcare apps, you can do away with expensive equipment-based training and give your users the ease of remote access to a fitness trainer.'
    },
    {
      title: 'Meditation Healthcare App',
      icon: MeditationAppIcon,
      bgColor: 'bg-[#DCFCE7] text-[#16A34A]',
      desc: 'By enabling customers to contact qualified professionals from the comfort of their own homes with our mobile app development services for meditation healthcare, you may promote spiritual well-being.'
    },
    {
      title: 'Exercise App',
      icon: ExerciseAppIcon,
      bgColor: 'bg-[#FFEDD5] text-[#EA580C]',
      desc: 'With our personal nutrition custom healthcare app development services, you may get guidance from health professionals wherever you are.'
    },
    {
      title: 'Quick Care App',
      icon: QuickCareAppIcon,
      bgColor: 'bg-[#FEF9C3] text-[#CA8A04]',
      desc: 'With the help of our urgent healthcare app development services, we can direct people in the event of a medical emergency and provide real-time updates on ER occupancy and journey time.'
    },
    {
      title: 'Monitoring Patients',
      icon: MonitoringPatientsIcon,
      bgColor: 'bg-[#FCE7F3] text-[#DB2777]',
      desc: 'Our remote patient monitoring healthcare app developers will let patients and doctors make appointments, communicate digitally, and exchange care from a distance.'
    },
    {
      title: 'Diagnostic Test Apps',
      icon: DiagnosticTestIcon,
      bgColor: 'bg-[#E0F2FE] text-[#0284C7]',
      desc: 'The app allows for remote sample collection, report generation, communication with doctors, and real-time lab test updates.'
    }
  ];

  // Benefits of Healthcare App Development Services (Verbatim Reference Match)
  const advantagesList = [
    {
      title: 'Improved Care and Engagement',
      icon: CareEngagementIcon,
      desc: 'Professional healthcare app development produces user-friendly apps that improve patient engagement and care. Appointment scheduling, telemedicine consultations, and medical record access allow people to manage their health using these applications.'
    },
    {
      title: 'Optimized Operations',
      icon: OptimizedOperationsIcon,
      desc: 'Apps can automate patient registration, invoicing, and appointment administration in healthcare. Effectiveness frees up healthcare workers to concentrate on patient care. Operating efficiency reduces costs and improves service.'
    },
    {
      title: 'Secure Data Management',
      icon: SecureDataIcon,
      desc: 'Due to HIPAA compliance and superior encryption, these applications manage sensitive patient data. Patient confidentiality and data breach prevention promote confidence and dependability in your healthcare services.'
    },
    {
      title: 'Customized Patient Care',
      icon: CustomizedCareIcon,
      desc: 'Health applications let clinicians tailor patient treatment. Customized health suggestions, treatment plans, and communication improve patient experiences. Personalized care enhances treatment adherence and patient-provider relationships.'
    },
    {
      title: 'High-Tech Resources',
      icon: HighTechResourcesIcon,
      desc: 'AI, ML, and data analytics are available in healthcare app development. It increases diagnostics, predictive analytics, and customized health insights in healthcare applications. This modern technology may transform clinical decision-making and patient care.'
    },
    {
      title: 'Updates and Support',
      icon: UpdatesSupportIcon,
      desc: 'Professional healthcare app development includes bug patches, feature additions, and compliance updates. The app stays dependable, secure, and up-to-date with healthcare standards and technology with this regular maintenance.'
    }
  ];

  // Business Friendly Hiring Models (1:1 Reference Match)
  const hiringModels = [
    {
      title: 'Fixed Price',
      icon: FixedPriceIcon,
      iconColor: 'text-[#9333EA]',
      desc: 'If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It\'s a pay-as-you-go monthly rolling contract.',
      features: [
        'Optimal flexibility',
        'Agile team',
        'Small projects',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time Material',
      icon: TimeMaterialIcon,
      iconColor: 'text-[#16A34A]',
      desc: 'If you are represent a company with undefined projects and need ongoing work, ask about hourly. It\'s a pay-as-you-go hour-wise rolling contract.',
      features: [
        'No hidden costs',
        'Working based hours',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Dedicated Team',
      icon: DedicatedTeamIcon,
      iconColor: 'text-[#EA580C]',
      desc: 'If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It\'s a pay-as-you-go monthly rolling contract.',
      features: [
        'No hidden costs',
        '160 hours of assured work',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Buckets Approach',
      icon: BucketsApproachIcon,
      iconColor: 'text-[#0284C7]',
      desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
      features: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Less budget',
        'Pay only for measurable work'
      ]
    }
  ];

  // Real Enterprise Healthcare Case Studies (Exact Sapphire Case Studies)
  const caseStudies = [
    {
      client: 'Adani Group Medical Division',
      title: 'Adani EmCare – Web & Mobile Healthcare Platform',
      desc: 'Web + Mobile App used by Adani Group’s medical officers to capture, analyze, and manage the health data of employees and workers for preventive healthcare.',
      stats: [
        '98% Employee satisfaction ratio',
        '91% reduction in appointment scheduling time',
        '24/7 real-time health monitoring',
        'Serving over 60,000 healthcare professionals'
      ],
      badge: 'Healthcare Enterprise'
    },
    {
      client: 'MG Motor Corporation',
      title: 'MG Motor Employee Health Tracker App',
      desc: 'Secure digital vault and health analytics portal protecting employee OPD and annual medical examination records for audit compliance.',
      stats: [
        'Real-time health data analytics',
        '100% HIPAA-compliant data security',
        '24/7 access to health resources & support',
        '98% improvement in employee health monitoring'
      ],
      badge: 'Corporate Telehealth'
    },
    {
      client: 'Larsen & Toubro (L&T)',
      title: 'Health and Safety Management System',
      desc: 'Enterprise safety improvement application collecting observations from organizational staff, automating safety reminders and audit closures.',
      stats: [
        '99% compliance with health and safety regulations',
        'Automated safety audits and inspections',
        '24/7 access to health & safety training',
        '97% reduction in safety incidents'
      ],
      badge: 'Health & Safety'
    }
  ];

  // Technology Stack Categories with Detailed Descriptions
  const techCategories = {
    backend: [
      { name: '.NET', desc: 'Enterprise-grade framework for building HIPAA-compliant RESTful APIs, patient health record management, and secure hospital microservices.' },
      { name: 'Node.js', desc: 'High-concurrency asynchronous runtime powering real-time WebRTC video consultation sessions and instant Messaging.' },
      { name: 'Java', desc: 'Robust enterprise backend technology with multithreading capabilities for high-volume clinical data processing.' },
      { name: 'Python', desc: 'Powering AI diagnostic models, symptom triage bots, medical image analysis, and predictive healthcare analytics.' },
      { name: 'Ruby on Rails', desc: 'Rapid MVP prototyping framework with clean MVC architecture for telemedicine patient portals.' },
      { name: 'PHP', desc: 'Reliable server-side framework for medical content management, appointment booking, and clinic scheduling systems.' }
    ],
    frontend: [
      { name: 'React.js', desc: 'High-performance component-driven web UI library for interactive doctor dashboards and patient health portals.' },
      { name: 'Next.js', desc: 'Fullstack React framework with SSR and ISR, delivering sub-second page loads and SEO optimization for medical websites.' },
      { name: 'TypeScript', desc: 'Static typing layer preventing runtime errors in critical healthcare logic and complex medical data structures.' },
      { name: 'Kotlin (Android)', desc: 'Native Android app development using Health Connect API for seamless wearable vitals synchronization.' },
      { name: 'RxJava', desc: 'Reactive programming library for smooth async data stream handling in mobile healthcare applications.' },
      { name: 'RxKotlin', desc: 'Functional reactive extensions for Kotlin, enabling responsive mobile UI states during live video calls.' },
      { name: 'Vue.js', desc: 'Lightweight progressive frontend framework for intuitive clinic administration and patient scheduling panels.' }
    ],
    database: [
      { name: 'PostgreSQL', desc: 'ACID-compliant relational database ideal for complex health records, billing data, and HIPAA compliance logs.' },
      { name: 'MongoDB', desc: 'Flexible NoSQL document database storing unstructured clinical records, doctor notes, and diagnostic image metadata.' },
      { name: 'SQLite', desc: 'Lightweight embedded local database for offline-first patient mobile app data synchronization.' },
      { name: 'CoreData', desc: 'Apple iOS framework for persistent local storage of patient biometric vitals on iPhones and Apple Watches.' },
      { name: 'Realm', desc: 'Ultra-fast mobile database providing real-time data sync across iOS and Android health applications.' },
      { name: 'Firebase', desc: 'Real-time cloud database and push notification service for instant doctor-patient appointment alerts.' },
      { name: 'Redis', desc: 'Ultra-fast in-memory cache for quick session management, WebRTC signaling, and rate limiting.' }
    ],
    devops: [
      { name: 'CI/CD Pipelines', desc: 'Automated deployment pipelines ensuring zero-downtime releases and instant security patch rollouts.' },
      { name: 'GitHub Actions', desc: 'Continuous integration workflows conducting automated linting, security scanning, and unit test suites.' },
      { name: 'Docker', desc: 'Containerization technology providing identical dev-to-production environments and microservice isolation.' },
      { name: 'Kubernetes', desc: 'Container orchestration platform auto-scaling cloud compute during high-traffic telehealth consultation surges.' },
      { name: 'AWS MedTech', desc: 'HIPAA-eligible cloud infrastructure (S3, ECS, RDS, CloudWatch) with bank-grade encryption at rest and in transit.' },
      { name: 'Azure Health', desc: 'Microsoft enterprise health cloud with native HL7/FHIR API services and zero-trust cloud security.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile test automation framework verifying patient flows on real iOS & Android devices.' },
      { name: 'BrowserStack', desc: 'Physical device cloud matrix testing across 500+ mobile devices, browsers, and OS versions.' },
      { name: 'Katalon Studio', desc: 'End-to-end automated testing tool for web, mobile, and API security validation.' },
      { name: 'Cypress', desc: 'Modern frontend test framework simulating end-to-end patient booking and telehealth call flows.' },
      { name: 'Playwright', desc: 'Reliable cross-browser automation suite performing regression testing on clinic admin dashboards.' },
      { name: 'Jest', desc: 'Fast JavaScript unit testing framework ensuring high code coverage across core medical calculations.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management platform tracking project backlogs, developer tasks, and HIPAA compliance tickets.' },
      { name: 'Slack', desc: 'Instant team collaboration channel connecting clients, project managers, and senior developers in real time.' },
      { name: 'Microsoft Teams', desc: 'Enterprise video conferencing and document collaboration platform for weekly client sprint demos.' },
      { name: 'Trello', desc: 'Visual Kanban board system for intuitive milestone tracking and UI/UX design asset handoffs.' },
      { name: 'Confluence', desc: 'Comprehensive documentation wiki storing architectural blueprints, API specs, and security protocols.' }
    ]
  };

  // 8-Step Development Lifecycle
  const developmentLifecycle = [
    { step: '01', title: 'Requirement Gathering', desc: 'Focus on documentation first for clarity and alignment between both client and engineering teams.' },
    { step: '02', title: 'Designs, Wireframes & Mockups', desc: 'Craft interactive, user-friendly UI designs and wireframe flows for intuitive navigation.' },
    { step: '03', title: 'Prototype Demo', desc: 'Build an interactive demo prototype so clients can experience the look and feel of the platform before coding.' },
    { step: '04', title: 'Changes & Scope Confirmation', desc: 'Review client feedback, refine requirements, and freeze final technical scope for sprint development.' },
    { step: '05', title: 'Agile Development', desc: 'Execute bi-weekly sprints with clean code standards, microservices, and HIPAA security integrations.' },
    { step: '06', title: 'QA & Compliance Audit', desc: 'Execute end-to-end automated testing, load stress tests, OWASP vulnerability scans, and HIPAA audit sign-off.' },
    { step: '07', title: 'Production Deployment', desc: 'Perform zero-downtime final deployment, UAT verification, and store publication to Google Play & App Store.' },
    { step: '08', title: 'Support, Maintenance & SEO', desc: 'Provide 24/7 technical maintenance, continuous SLA monitoring, and complimentary product growth advisory.' }
  ];

  // Why Choose Us Pillars
  const whyChooseUs = [
    { title: 'Flexible Engagement Models', desc: 'Customized engagement models facilitating hourly, fixed rate, or dedicated team hiring.' },
    { title: '100% Transparency', desc: 'Transparent communication policy ensuring client and dev team remain on the exact same page.' },
    { title: 'Experienced Healthcare Engineers', desc: 'Seasoned developers with deep domain experience in HIPAA, HL7/FHIR, and medical IoT.' },
    { title: 'Timely Sprint Delivery', desc: 'Rigorous adherence to sprint timelines backed by continuous integration and automated deployments.' },
    { title: '24/7 Dedicated Technical Support', desc: 'Immediate resolution of technical queries with 24/7 SLA infrastructure support staff.' }
  ];

  // Official Sapphire FAQs
  const sapphireFaqs = [
    {
      q: '1. Should the development of a medical app for healthcare professionals begin on iOS or Android?',
      a: 'It fully depends on the purpose of your medical mobile app development procedure. If you are searching for a platform to facilitate staff communication and have a large crew, an Android application offers flexibility. However, if you require a platform for communicating encrypted medical data, EHR records, and high security, iOS is naturally suited due to its strict sandbox security model. We often recommend cross-platform (React Native or Flutter) to cover both seamlessly.'
    },
    {
      q: '2. How much do medical applications for healthcare professionals cost to develop?',
      a: 'Obtaining a cost estimate for constructing a healthcare application depends on a thorough understanding of the app features, EHR integration requirements, and compliance standards. Typically, projects range from $15,000 for specialized MVPs to $50,000+ for enterprise multi-clinic telehealth portals. We provide transparent fixed-price or dedicated team estimates after initial requirement analysis.'
    },
    {
      q: '3. What makes a health app effective?',
      a: 'A variety of factors contribute to the success of a health app. The app must be simple to use, deliver meaningful real-time information, and adhere strictly to HIPAA privacy standards. In addition, the application must integrate modern technologies like AI for symptom analysis, WebRTC for video calls, and BLE for wearable sync.'
    },
    {
      q: '4. What are Healthcare App Development Services?',
      a: 'Healthcare app development services involve building mobile and web apps for hospitals, clinics, medtech startups, and patients to streamline medical operations, enhance patient care, enable telemedicine, and automate medical billing.'
    },
    {
      q: '5. Why should businesses choose us for Healthcare App Development?',
      a: 'We are a leading IT company delivering secure, 100% HIPAA-compliant healthcare apps with advanced features like WebRTC video consultations, HL7/FHIR EHR integration, AI predictive analytics, and 24/7 SLA support.'
    },
    {
      q: '6. How do Healthcare Apps benefit hospitals and patients?',
      a: 'Healthcare apps improve patient engagement, reduce appointment waiting times by over 90%, enable instant online doctor consultations, automate medical records management, and provide 24/7 real-time health monitoring.'
    },
    {
      q: '7. Are Healthcare Apps developed by our team compliant with regulations?',
      a: 'Yes, we guarantee strict compliance with HIPAA, HITECH, HL7/FHIR, FDA SaMD guidelines, and GDPR standards, using AES-256 encryption at rest and TLS 1.3 in transit to safeguard sensitive PHI data.'
    },
    {
      q: '8. Can Healthcare Apps integrate AI and wearable devices?',
      a: 'Absolutely. We build health apps that connect directly with Apple HealthKit, Google Fit, and Bluetooth Low Energy (BLE) medical hardware to track real-time heart rate, SpO2, glucose levels, and AI predictive readmission alerts.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Healthcare App Development Services | Top Medical & Telemedicine App Company"
        description="On-Demand Healthcare App Development Services in USA. We build HIPAA-compliant telemedicine apps, doctor appointment booking systems, EHR/EMR portals, and remote patient monitoring software."
        canonical="/services/health-care-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Healthcare App Development Services in USA"
        subtitle="Rapidly becoming an important component of the business, Custom healthcare mobile app development services is now a vital industry element. The Healthcare Consultation App Development of mobile applications is now a crucial aspect of increasing patient happiness and earnings. Contact us to know more!"
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="healthcare"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* On-Demand Healthcare App Development Services Showcase (1:1 Reference Match) */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200 text-left overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Visual Vector Graphic (Exact Reference Image Asset Match) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/images/services/healthcare-ondemand-illustration.jpg"
                  alt="On-Demand Healthcare App Development Services Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Text Content (Exact Reference Font Styling & Text) */}
            <div className="lg:col-span-6 space-y-4">
              <h2
                className="text-slate-900 tracking-tight section-content-title"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 800,
                  fontSize: '34px',
                  lineHeight: '41px'
                }}
              >
                On-Demand Healthcare App Development Services
              </h2>

              <p
                className="text-slate-600 section-content-desc"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '26px'
                }}
              >
                Our AI-powered healthcare mobile application development streamlines clinical, administrative, and financial processes. As a Best healthcare app development company, we provide healthcare application development services that assist startups, hospitals, medtech companies, private clinics, and pharmacies in designing, developing, and marketing mobile and online Health solutions. Our bespoke healthcare app solutions enable customers to provide safer, more efficient, and effective care while also adhering to stringent industry regulations like HIPAA.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Brief About Healthcare App Development Section (Exact 1:1 Match with Reference Screenshot) */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200 text-left overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Title & Text */}
            <div className="lg:col-span-6 space-y-5">
              <h2
                className="text-slate-900 tracking-tight section-content-title"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 800,
                  fontSize: '34px',
                  lineHeight: '41px'
                }}
              >
                Brief About Healthcare App Development
              </h2>

              <p
                className="text-slate-600 section-content-desc"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '26px'
                }}
              >
                As a Top medical app development company, we include the best features while developing a healthcare app. Patients and physicians will be able to quickly access and modify their medical records and the user profiles are the most effective approach to managing this information. A patient application that allows patients to provide feedback on any part of medical treatment or other procedures inspires confidence.
              </p>

              <p
                className="text-slate-600 section-content-desc"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '26px'
                }}
              >
                Chat becomes an integral component of the app development process for healthcare due to the ability to send photographs and documents that aid the physician in better understanding the patient. A push notification function in mobile healthcare applications for patients is greatly sought after and significantly promotes doctor-patient connection.
              </p>
            </div>

            {/* Right Column: Exact Vector Graphic Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[580px]">
                <img
                  src="/images/services/brief-healthcare-app-development.png"
                  alt="Brief About Healthcare App Development Illustration"
                  className="w-full h-auto object-contain drop-shadow-sm hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* World Wide Top Rated IT Company on Clutch Banner (Exact Reference Match) */}
      <ClutchTopRatedBanner />

      {/* What Exactly Is Healthcare App Development Section (Exact 1:1 Compact Reference Match) */}
      <section className="py-10 md:py-14 bg-white border-b border-slate-200 text-left">
        <Container>
          {/* Centered Heading */}
          <div className="text-center mb-8 sm:mb-10">
            <h2
              className="text-slate-900 tracking-tight section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '34px',
                lineHeight: '41px'
              }}
            >
              What Exactly Is Healthcare App Development?
            </h2>
          </div>

          {/* 2-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center max-w-6xl mx-auto">
            {/* Left Quote Card (100% Exact 1:1 Match with Sapphire Solutions Reference Graphic) */}
            <div className="lg:col-span-5 relative flex items-center">
              <div className="w-full bg-[#ECF5FC] border border-[#D0E5F8] rounded-2xl p-7 sm:p-9 shadow-sm relative space-y-4">
                {/* Wavy S-Curves & Concentric Oval Background SVG Pattern */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <svg
                    className="absolute inset-0 w-full h-full opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 240"
                    preserveAspectRatio="none"
                  >
                    <path d="M -20 40 C 100 10, 200 60, 420 30" fill="none" stroke="#CBE3F8" strokeWidth="1.5" />
                    <path d="M -20 80 C 100 50, 200 100, 420 70" fill="none" stroke="#CBE3F8" strokeWidth="1.5" />
                    <path d="M -20 120 C 100 90, 200 140, 420 110" fill="none" stroke="#CBE3F8" strokeWidth="1.5" />
                    <path d="M -20 160 C 100 130, 200 180, 420 150" fill="none" stroke="#CBE3F8" strokeWidth="1.5" />
                    <path d="M -20 200 C 100 170, 200 220, 420 190" fill="none" stroke="#CBE3F8" strokeWidth="1.5" />
                    
                    <ellipse cx="290" cy="140" rx="100" ry="70" fill="none" stroke="#D8EBFC" strokeWidth="1.5" />
                    <ellipse cx="290" cy="140" rx="75" ry="50" fill="none" stroke="#D8EBFC" strokeWidth="1.5" />
                    <ellipse cx="290" cy="140" rx="50" ry="30" fill="none" stroke="#D8EBFC" strokeWidth="1.5" />
                    <ellipse cx="290" cy="140" rx="25" ry="15" fill="none" stroke="#D8EBFC" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Double Slanted Quote Parallelograms (Exact Match with Reference Image Quote) */}
                <div className="relative z-10 text-[#005F96]">
                  <svg viewBox="0 0 32 22" fill="none" className="w-8 h-6 shrink-0 drop-shadow-sm">
                    <path d="M 0 22 L 7 0 H 14 L 7 22 H 0 Z M 17 22 L 24 0 H 31 L 24 22 H 17 Z" fill="#005F96" />
                  </svg>
                </div>

                {/* Card Title */}
                <h3 className="relative z-10 text-2xl sm:text-[28px] lg:text-[30px] font-black text-[#005F96] leading-[1.2] font-sans tracking-tight">
                  Healthcare App Development Services
                </h3>

                {/* Speech Bubble Arrow Pointer Notch on Right Edge */}
                <div className="hidden lg:block absolute -right-[11px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[11px] border-l-[#ECF5FC] z-30" />
              </div>
            </div>

            {/* Right Detailed Text Paragraphs */}
            <div className="lg:col-span-7 space-y-4">
              <p
                className="text-[#555555] section-content-desc"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '26px'
                }}
              >
                Healthcare App Development Services include features like telemedicine, medical coding, and billing to improve the operational management of healthcare professionals. These might assist a person in better managing their illness or guide health enthusiasts toward their wellness objectives. Moreover, these apps may also be designed for healthcare professionals in addition to patients. A nice interface is a key criterion that substantially influences an app's popularity. It is not sufficient for mobile apps to be helpful; they must also be simple.
              </p>

              <p
                className="text-[#555555] section-content-desc"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '26px'
                }}
              >
                As a Healthcare Development Company in the USA, we know what it take to create a healthcare app using the latest technologies. Health Care Mobile App streamlines medical procedures and has the potential to enhance the patient experience dramatically. With, Healthcare App Development, the data accessibility is better, remote health care is expanded, medical mistakes are decreased, costs are lowered, and communication is enhanced, to name a few benefits.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Premium Services Section (Placed Right Below What Exactly Is Healthcare App Development) */}
      <PremiumServicesGrid />

      {/* The Expertise Of Our Healthcare App Development (Exact 1:1 Reference Match & Reduced Bottom Space) */}
      <section id="expertise-section" className="pt-14 pb-8 sm:pb-10 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          {/* Centered Title & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2
              className="text-slate-900 tracking-tight section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '34px',
                lineHeight: '41px'
              }}
            >
              The Expertise Of Our Healthcare App Development
            </h2>
            <p
              className="text-slate-600 section-content-desc max-w-3xl mx-auto"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '26px'
              }}
            >
              We use the latest technology and methods to develop healthcare app for business of different types and sizes.
            </p>
          </div>

          {/* 6 White Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {expertiseList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-start group"
                >
                  {/* Pastel Rounded Icon Box */}
                  <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-sans group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  {/* Verbatim Description */}
                  <p className="text-xs sm:text-[14px] text-slate-600 leading-[1.7] font-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Centered CTA Button (Get A Free Quote For Your Project) */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href="#quote-form"
              className="px-7 sm:px-9 py-3 sm:py-3.5 bg-[#005F96] hover:bg-[#004b78] text-white font-extrabold text-sm sm:text-base rounded-md shadow-md hover:shadow-lg transition-all duration-300 inline-block font-sans cursor-pointer transform hover:-translate-y-0.5"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* Proud To Have Picked These Up Along The Way Banner (Exact Original Badge Images) */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#005F96] text-white overflow-hidden relative border-t border-b border-blue-900/30">
        {/* Background Wavy Contour Lines Accent */}
        <svg className="absolute -left-24 -top-24 w-96 h-96 opacity-15 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <path d="M 10 80 Q 90 20 180 120 T 250 200" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 20 120 Q 100 60 190 160 T 260 240" stroke="white" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute -right-24 -bottom-24 w-96 h-96 opacity-15 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <path d="M 10 80 Q 90 20 180 120 T 250 200" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 20 120 Q 100 60 190 160 T 260 240" stroke="white" strokeWidth="2" fill="none" />
        </svg>

        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 max-w-6xl mx-auto text-left relative z-10">
            {/* Left Section Heading */}
            <div className="lg:w-4/12 text-center lg:text-left">
              <h2
                className="text-white tracking-tight section-content-title"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 800,
                  fontSize: '34px',
                  lineHeight: '41px',
                  color: '#FFFFFF'
                }}
              >
                Proud To Have Picked These Up Along The Way
              </h2>
            </div>

            {/* Right 4 White Square Award Badge Cards (Exact Original Badge Images) */}
            <div className="lg:w-8/12 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5 justify-center items-center w-full">
              {/* Clutch Badge Image */}
              <div className="bg-white rounded-2xl p-3 shadow-md flex items-center justify-center h-28 sm:h-32 lg:h-[130px] hover:scale-105 transition-transform duration-300 border border-white/20">
                <img
                  src="/images/clutch.png"
                  alt="Clutch Award Badge"
                  className="max-h-20 sm:max-h-24 w-auto object-contain"
                />
              </div>

              {/* Upwork Badge Image */}
              <div className="bg-white rounded-2xl p-3 shadow-md flex items-center justify-center h-28 sm:h-32 lg:h-[130px] hover:scale-105 transition-transform duration-300 border border-white/20">
                <img
                  src="/images/9_upwork.png"
                  alt="Upwork Top Rated Badge"
                  className="max-h-20 sm:max-h-24 w-auto object-contain"
                />
              </div>

              {/* Freelancer Badge Image */}
              <div className="bg-white rounded-2xl p-3 shadow-md flex items-center justify-center h-28 sm:h-32 lg:h-[130px] hover:scale-105 transition-transform duration-300 border border-white/20">
                <img
                  src="/images/10_freelancer.png"
                  alt="Freelancer Preferred Badge"
                  className="max-h-20 sm:max-h-24 w-auto object-contain"
                />
              </div>

              {/* GoodFirms Badge Image */}
              <div className="bg-white rounded-2xl p-3 shadow-md flex items-center justify-center h-28 sm:h-32 lg:h-[130px] hover:scale-105 transition-transform duration-300 border border-white/20">
                <img
                  src="/images/goodfirms.png"
                  alt="GoodFirms Award Badge"
                  className="max-h-20 sm:max-h-24 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits of Healthcare App Development Services (Exact 1:1 Reference Match) */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          {/* Centered Title & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2
              className="text-slate-900 tracking-tight section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '34px',
                lineHeight: '41px'
              }}
            >
              Benefits of Healthcare App Development Services
            </h2>
            <p
              className="text-slate-600 section-content-desc max-w-3xl mx-auto"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '26px'
              }}
            >
              Use Healthcare App Development Services to transform medical treatment and operations. Here are the advantages of hiring a healthcare app developer:
            </p>
          </div>

          {/* 6 White Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {advantagesList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-100/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-start group"
                >
                  {/* Blue Outline SVG Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#EFF7FE] border border-blue-100/80 flex items-center justify-center mb-5 text-[#005F96] shrink-0 group-hover:scale-105 group-hover:bg-[#005F96] group-hover:text-white transition-all duration-300">
                    <IconComp className="w-7 h-7 text-[#005F96] group-hover:text-white transition-colors" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-sans group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  {/* Verbatim Description */}
                  <p className="text-xs sm:text-[14px] text-slate-600 leading-[1.75] font-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Business Friendly Hiring Models Section (Exact 1:1 Reference Match) */}
      <section className="py-16 md:py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2
              className="text-slate-900 tracking-tight section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '34px',
                lineHeight: '41px'
              }}
            >
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p
              className="text-slate-600 section-content-desc max-w-3xl mx-auto"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '26px'
              }}
            >
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </div>

          {/* 4 White Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {hiringModels.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex flex-col items-center">
                    {/* Standalone Outline Icon (No background pastel box) */}
                    <div className={`mb-4 flex items-center justify-center ${item.iconColor}`}>
                      <IconComp className="w-12 h-12" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-sans text-center mb-3">
                      {item.title}
                    </h3>

                    {/* Verbatim Description */}
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-[1.65] font-normal font-sans text-center mb-6">
                      {item.desc}
                    </p>

                    {/* Features List with Blue Checkmarks */}
                    <ul className="w-full space-y-2.5 text-xs sm:text-[13px] text-slate-700 font-normal font-sans text-left mb-6">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2">
                          <span className="text-[#005F96] font-bold text-sm shrink-0">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hire Now Button */}
                  <div className="text-center pt-2">
                    <a
                      href="#quote-form"
                      className="px-8 py-2.5 bg-[#005F96] hover:bg-[#004b78] text-white font-bold text-xs sm:text-sm rounded-md shadow-sm hover:shadow-md transition-all duration-300 inline-block font-sans cursor-pointer"
                    >
                      Hire Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Unveiling Our Innovative Solution - Auto Moving Video Slider Section (Exact 1:1 Reference Match) */}
      <InnovativeVideoSlider />

      {/* Process We Follow - Home Page Version */}
      <WorkProcessGrid />

      {/* Our Story, Their Words - Client Video Testimonials Slider Section (Exact 1:1 Reference Match) */}
      <ClientStoryVideoSlider />

      {/* Trusted By The World's Leading Brands - 24 White Cards Logo Grid Section (Exact 1:1 Reference Match) */}
      <TrustedBrandsGrid />

      {/* Success Matrix - Home Page Version */}
      <SuccessMatrixGrid />

      {/* Technology Stack We Use For Healthcare App Development Section (Exact 1:1 Reference Match) */}
      <SapphireTechStackGrid domainName="healthcare" richTechCategories={techCategories} />

      {/* We Have Been Featured In - 18 Media Recognition Logo Cards Section (Exact 1:1 Reference Match) */}
      <FeaturedInMedia />

      {/* Digital Transformation Through Innovation - Case Study Banner Slider Section (Exact 1:1 Reference Match) */}
      <DigitalTransformationSlider />

      {/* Frequently Asked Questions - Sapphire Signature 2-Column FAQ Section (Exact 1:1 Reference Match) */}
      <SapphireFaqSection faqList={healthcareFaqList} />

      {/* Our Recent Blogs - 3 Card Grid Section (Exact 1:1 Reference Match) */}
      <RecentBlogsSection />

      {/* What Sets Us Apart As Healthcare App Development Company - 5 Pillars & Contact Form Section (Exact 1:1 Reference Match) */}
      <WhatSetsUsApartSection />

      {/* Have Healthcare App Development Challenge To Address CTA Banner Section (Exact 1:1 Reference Match) */}
      <HealthcareChallengeCtaBanner />

      {/* Subscribe us and Get the latest updates and news - 5 Element Horizontal Inline Form Section (Exact 1:1 Reference Match) */}
      <NewsletterSubscribeBanner />

    </div>
  );
};

export default HealthcareAppDevelopmentService;
