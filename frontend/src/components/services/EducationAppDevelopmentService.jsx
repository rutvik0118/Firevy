import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import WorkProcessGrid from '../home/WorkProcessGrid';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import ClientStoryVideoSlider from '../common/ClientStoryVideoSlider';
import FeaturedInMedia from '../common/FeaturedInMedia';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection, { educationFaqList } from '../common/SapphireFaqSection';
import RecentBlogsSection from '../common/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import HealthcareChallengeCtaBanner from '../common/HealthcareChallengeCtaBanner';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import EducationQuoteOverview from '../common/EducationQuoteOverview';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import WhyChooseEducationShowcase from '../common/WhyChooseEducationShowcase';
import {
  GraduationCap,
  BookOpen,
  Video,
  Award,
  Users,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Lock,
  Star,
  Headphones,
  Check,
  Brain,
  FileText,
  Clock,
  BookMarked,
  Gamepad2,
  Laptop,
  Flame,
  Layers,
  Search,
  MessageSquare
} from 'lucide-react';

export const EducationAppDevelopmentService = () => {
  const [activeTechTab, setActiveTechTab] = useState('backend');
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'eLearning Platform / LMS',
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

// 1:1 Reference Match Education Expertise SVG Icons
const InteractiveEbooksIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="12" y="9" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M 14 12 H 22 M 14 15 H 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 12 23 H 24 M 12 26 H 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PuzzleAppsIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M 14 12 H 17 C 17 10.5 19 10.5 19 12 H 22 V 15 C 23.5 15 23.5 17 22 17 V 20 H 14 V 17 C 12.5 17 12.5 15 14 15 V 12 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <circle cx="18" cy="25" r="2" fill="currentColor" />
  </svg>
);

const WorksheetAppsIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M 13 10 H 23 M 13 14 H 23 M 13 18 H 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="21" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 23.5 24.5 L 27 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ClassroomAppsIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="12" y="9" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M 14 13 H 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 13 28 C 13 25 23 25 23 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

const SkillBoostingIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="18" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 18 11 V 9 M 18 19 V 20 M 14 15 H 12 M 24 15 H 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 13 25 L 18 22 L 23 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EducationalAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M 11 13 L 18 9 L 25 13 L 18 17 L 11 13 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <path d="M 13 14.5 V 19 C 13 21 23 21 23 19 V 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M 25 13 V 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 1:1 Reference Match Benefits Section Blue Outline SVG Icon Components
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

  // Sapphire Solutions - Education Expertise Cards (Exact 1:1 Reference Match)
  const expertiseList = [
    {
      title: 'Interactive EBooks',
      icon: InteractiveEbooksIcon,
      bgColor: 'bg-[#F3E8FF] text-purple-600',
      desc: 'In the eBooks app, you may see many instructive videos and photos, read motivational tales or themes, and explore their area of interest by taking quizzes or playing mental games.'
    },
    {
      title: 'Puzzle-Solving Apps',
      icon: PuzzleAppsIcon,
      bgColor: 'bg-[#DCFCE7] text-emerald-600',
      desc: 'Users may download and play games on their smartphones to enhance their memory, grammar, and vocabulary skills, among other vital abilities.'
    },
    {
      title: 'Worksheet Apps',
      icon: WorksheetAppsIcon,
      bgColor: 'bg-[#FFEDD5] text-orange-500',
      desc: 'Worksheet applications designed specifically for children on the brink of adulthood allow students to practice formulae, macros, etc., in the comfort of their homes.'
    },
    {
      title: 'Classroom Apps',
      icon: ClassroomAppsIcon,
      bgColor: 'bg-[#FEF9C3] text-amber-600',
      desc: 'Classroom applications are designed for all students, who may use them throughout the class to acquire new knowledge.'
    },
    {
      title: 'Skill Boosting Applications',
      icon: SkillBoostingIcon,
      bgColor: 'bg-[#FCE7F3] text-[#DB2777]',
      desc: 'Powered by AR/VR and IoT, our skill enhancement applications are focused on increasing learner\'s abilities via gamification.'
    },
    {
      title: 'Educational Application',
      icon: EducationalAppIcon,
      bgColor: 'bg-[#E0F2FE] text-cyan-600',
      desc: 'Our tuition app development services are intended to make education accessible in real-time and regardless of location.'
    }
  ];

  // Advantages of Hiring Education App Developers
  const advantagesList = [
    {
      title: 'Enhanced Student Engagement',
      icon: CareEngagementIcon,
      desc: 'Professional education app development produces user-friendly apps that improve student engagement and learning. Course scheduling, virtual classrooms, and learning material access allow students to manage their education using these applications.'
    },
    {
      title: 'Automated School Operations',
      icon: OptimizedOperationsIcon,
      desc: 'Apps can automate student enrollment, tuition fee management, and examination schedule administration. Operational efficiency frees up educators to concentrate on interactive teaching.'
    },
    {
      title: 'Secure Data Management',
      icon: SecureDataIcon,
      desc: 'Due to FERPA/GDPR compliance and superior encryption, these applications manage sensitive student records. Student privacy and data breach prevention promote trust and reliability.'
    },
    {
      title: 'Customized Adaptive Learning',
      icon: CustomizedCareIcon,
      desc: 'EdTech applications let teachers tailor student learning. Customized study recommendations, adaptive learning paths, and interactive feedback improve student achievement.'
    },
    {
      title: 'High-Tech Resources',
      icon: HighTechResourcesIcon,
      desc: 'AI, ML, and AR/VR interactive tools are available in education app development. It enhances online labs, automated grading, and personalized study insights in educational applications.'
    },
    {
      title: 'Updates and Support',
      icon: UpdatesSupportIcon,
      desc: 'Professional education app development includes bug fixes, feature additions, and security compliance updates. The app stays dependable, secure, and up-to-date with modern tech.'
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

  // Technology Stack Categories with Detailed Descriptions
  const techCategories = {
    backend: [
      { name: '.NET', desc: 'Enterprise-grade backend framework building secure school ERPs, student gradebooks, and high-volume administrative microservices.' },
      { name: 'Node.js', desc: 'High-concurrency asynchronous runtime powering real-time live video classrooms, instant messaging, and interactive web sockets.' },
      { name: 'Java', desc: 'Robust enterprise backend technology with multithreading capabilities for processing high-volume automated online examination scoring.' },
      { name: 'Python', desc: 'Powering AI tutor bots, Natural Language Processing (NLP) speech recognition, automated essay grading, and student analytics.' },
      { name: 'Ruby on Rails', desc: 'Rapid MVP prototyping framework with clean MVC architecture for e-learning platforms and online course portals.' },
      { name: 'PHP', desc: 'Reliable server-side framework for educational Content Management Systems (CMS), student admission portals, and scheduling engines.' }
    ],
    frontend: [
      { name: 'React.js', desc: 'High-performance component-driven web UI library for interactive student dashboards, live whiteboards, and tutor portals.' },
      { name: 'Next.js', desc: 'Fullstack React framework with SSR and ISR, delivering sub-second page loads and SEO optimization for educational course catalogs.' },
      { name: 'TypeScript', desc: 'Static typing layer preventing runtime errors in complex grading algorithms, exam timer logic, and student progress data.' },
      { name: 'Kotlin (Android)', desc: 'Native Android app development enabling offline study materials storage and smooth PDF textbook rendering.' },
      { name: 'RxJava', desc: 'Reactive programming library for smooth async data stream handling in mobile educational applications.' },
      { name: 'RxKotlin', desc: 'Functional reactive extensions for Kotlin, enabling responsive mobile UI states during live virtual class sessions.' },
      { name: 'Vue.js', desc: 'Lightweight progressive frontend framework for intuitive school administration and parent notification dashboards.' }
    ],
    database: [
      { name: 'PostgreSQL', desc: 'ACID-compliant relational database ideal for structured student transcripts, fee ledgers, and institutional records.' },
      { name: 'MongoDB', desc: 'Flexible NoSQL document database storing unstructured course syllabus content, quiz questions, and video metadata.' },
      { name: 'SQLite', desc: 'Lightweight embedded local database for offline study mode, allowing students to access textbooks without internet.' },
      { name: 'CoreData', desc: 'Apple iOS framework for persistent local storage of assignment files and quiz progress on iPads and iPhones.' },
      { name: 'Realm', desc: 'Ultra-fast mobile database providing real-time data sync across mobile devices during live gamified quizzes.' },
      { name: 'Firebase', desc: 'Real-time cloud database and push notification service for instant exam results, assignment alerts, and live class triggers.' }
    ],
    devops: [
      { name: 'CI/CD Pipelines', desc: 'Automated deployment pipelines ensuring zero-downtime releases and instant feature rollouts before academic terms.' },
      { name: 'GitHub Actions', desc: 'Continuous integration workflows conducting automated linting, security scanning, and unit test execution.' },
      { name: 'Docker', desc: 'Containerization technology providing identical dev-to-production environments and LMS microservice isolation.' },
      { name: 'Kubernetes', desc: 'Container orchestration platform auto-scaling cloud compute during peak online exam submission surges.' },
      { name: 'AWS EdTech', desc: 'High-availability AWS infrastructure (S3 video storage, CloudFront CDN streaming, RDS) with bank-grade security.' },
      { name: 'Azure Cloud', desc: 'Microsoft enterprise cloud with native Active Directory authentication and zero-trust university cloud security.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile test automation framework verifying student workflows on real iOS & Android tablets and phones.' },
      { name: 'BrowserStack', desc: 'Physical device cloud matrix testing across 500+ mobile devices, browsers, and OS versions.' },
      { name: 'Katalon Studio', desc: 'End-to-end automated testing tool for web, mobile, and API security validation of online exam portals.' },
      { name: 'Cypress', desc: 'Modern frontend test framework simulating end-to-end student course enrollment and video playback.' },
      { name: 'Playwright', desc: 'Reliable cross-browser automation suite performing regression testing on school ERP admin portals.' },
      { name: 'Jest', desc: 'Fast JavaScript unit testing framework ensuring high code coverage across core grading and GPA calculation logic.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management platform tracking project backlogs, developer tasks, and EdTech feature tickets.' },
      { name: 'Slack', desc: 'Instant team collaboration channel connecting clients, project managers, and senior developers in real time.' },
      { name: 'Microsoft Teams', desc: 'Enterprise video conferencing and document collaboration platform for weekly client sprint demos.' },
      { name: 'Trello', desc: 'Visual Kanban board system for intuitive milestone tracking and UI/UX design asset handoffs.' }
    ]
  };

  // Official Sapphire Education FAQs
  const sapphireFaqs = [
    {
      q: '1. What characteristics should a mobile app for education possess?',
      a: 'Online live sessions, a responsive video player, a repository for session recordings, event calendars, online exams & automated results, interactive quizzes, and instant chat are the essential aspects of any modern learning and education app.'
    },
    {
      q: '2. How long does it take to design a mobile app for education?',
      a: 'The time required for education app development depends on the complexity of features, third-party integrations (video, payment gateways), and UI/UX requirements. Typical projects take 6 to 12 weeks. We offer agile 2-week sprint iterations for fast time-to-market.'
    },
    {
      q: '3. How much does an educational app cost to develop?',
      a: 'Developing an educational app depends on the tech stack, features (live video, AI tutor, offline mode), and engagement model. Project estimates range from $15,000 for specialized MVPs to $50,000+ for enterprise multi-institution LMS portals. Send us your project brief for an exact quote.'
    },
    {
      q: '4. Why should I choose your team for education app development?',
      a: 'We provide 24/7 technical support, deep EdTech domain expertise, 100% transparency, and flexible engagement models. Furthermore, our senior developers align with your timezone to eliminate communication delays.'
    },
    {
      q: '5. What types of education apps do you develop?',
      a: 'We build a comprehensive suite of EdTech apps including eLearning portals, Learning Management Systems (LMS), virtual classrooms, tutor finder marketplaces, school management ERPs, interactive eBook apps, and AI language apps.'
    },
    {
      q: '6. Do you provide custom Education App Development Services?',
      a: 'Yes, our services are 100% customizable to meet your specific requirements—whether you need an eLearning mobile app for students, a teaching tool for tutors, or an enterprise-level LMS for universities.'
    },
    {
      q: '7. How do Education Apps benefit schools and universities?',
      a: 'Educational apps improve student engagement through gamification, simplify administrative attendance and fee collection, enable remote teaching, track student progress in real time, and reduce operational overhead.'
    },
    {
      q: '8. Can startups hire dedicated developers for education app development?',
      a: 'Absolutely! We offer flexible hiring models (Fixed Price, Dedicated Team, Time & Material, Buckets Approach) allowing startups and EdTech companies to hire dedicated senior developers cost-effectively.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Education App Development Company | Custom EdTech & LMS Solutions"
        description="Top Education App Development Company. We build custom eLearning apps, virtual classrooms, Learning Management Systems (LMS), interactive eBooks, and tutor finder applications."
        canonical="/services/education-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Education App Development Services in USA"
        subtitle="As a best educational app development company, we deliver affordable education app development services. We are an experienced educational app development agency with a team of professional mobile app developers."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="education"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* White Label Custom Education App Development Services Quote Section (Exact 1:1 Reference Match) */}
      <EducationQuoteOverview />

      {/* Our Premium Services - 10 White Pill Cards Grid Section (Exact 1:1 Reference Match) */}
      <PremiumServicesGrid />

      {/* Success Stories - 3 Education Showcase Cards Section (Exact 1:1 Reference Match) */}
      <SuccessStoriesSection category="education" />

      {/* The Expertise Of Our Education App Developers (6 Cards 1:1 Reference Match) */}
      <section id="expertise-section" className="py-14 sm:py-16 bg-[#F4F8FA] border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2
              className="text-slate-900 tracking-tight section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: '34px',
                lineHeight: '41px'
              }}
            >
              The Expertise Of Our Education App Developers
            </h2>
            <p
              className="text-slate-600 section-content-desc max-w-3xl mx-auto"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '26px'
              }}
            >
              Our comprehensive set of products makes us one of the world's top education app development firms.
            </p>
          </div>

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

          {/* Bottom CTA Button */}
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="#quote-form"
              className="inline-block px-9 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004b78] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-sans"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* Why Choose Sapphire for? Education App Development Service (18 Circular Feature Orbit Ring 1:1 Match) */}
      <WhyChooseEducationShowcase />

      {/* Proud To Have Picked These Up Along The Way Banner (Clutch Top Rated Banner) */}
      <ClutchTopRatedBanner />

      {/* Business Friendly Hiring Models Section (Exact 1:1 Reference Match) */}
      <section className="py-16 md:py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {hiringModels.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex flex-col items-center">
                    <div className={`mb-4 flex items-center justify-center ${item.iconColor}`}>
                      <IconComp className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-sans text-center mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-[1.65] font-normal font-sans text-center mb-6">
                      {item.desc}
                    </p>
                    <ul className="w-full space-y-2.5 text-xs sm:text-[13px] text-slate-700 font-normal font-sans text-left mb-6">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2">
                          <span className="text-[#005F96] font-bold text-sm shrink-0">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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

      {/* Unveiling Our Innovative Solution - Auto Moving Video Slider Section */}
      <InnovativeVideoSlider />

      {/* Process We Follow - Home Page Version */}
      <WorkProcessGrid />

      {/* Our Story, Their Words - Client Video Testimonials Slider Section */}
      <ClientStoryVideoSlider />

      {/* Trusted By The World's Leading Brands - 24 White Cards Logo Grid Section */}
      <TrustedBrandsGrid />

      {/* Success Matrix - Home Page Version */}
      <SuccessMatrixGrid />

      {/* Technology Stack We Use For Education App Development Section */}
      <SapphireTechStackGrid domainName="education" richTechCategories={techCategories} />

      {/* We Have Been Featured In - Media Recognition Logo Cards Section */}
      <FeaturedInMedia />

      {/* Digital Transformation Through Innovation - Case Study Banner Slider Section */}
      <DigitalTransformationSlider />

      {/* Frequently Asked Questions - Sapphire Signature 2-Column FAQ Section */}
      <SapphireFaqSection faqList={educationFaqList} />

      {/* Our Recent Blogs - 3 Card Grid Section */}
      <RecentBlogsSection />

      {/* What Sets Us Apart As Education App Development Company */}
      <WhatSetsUsApartSection />

      {/* Have Education App Development Challenge To Address CTA Banner Section */}
      <HealthcareChallengeCtaBanner
        title="Have Education App Development Challenge To Address ?"
        subtitle="Get access to top Education app developers to transform your ideas into a robust application."
        buttonText="Hire Now"
      />

      {/* Subscribe us and Get the latest updates and news */}
      <NewsletterSubscribeBanner />

    </div>
  );
};

export default EducationAppDevelopmentService;

