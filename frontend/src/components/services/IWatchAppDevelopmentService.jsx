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

export const IWatchAppDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeTestimonialModal, setActiveTestimonialModal] = useState(null);
  const [testimonialCardsPerPage, setTestimonialCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
        setTestimonialCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
        setTestimonialCardsPerPage(2);
      } else {
        setCardsPerPage(3);
        setTestimonialCardsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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

  // 6 Expertise Items for iWatch App Development
  const expertiseItems = [
    {
      title: 'Custom Apple Watch App Development',
      desc: 'Brands can optimize their return on investment and improve their performance in the digital realm with the assistance of bespoke Apple Watch app development. We can tailor an application for the Apple watch to your particular specifications, thanks to our extensive experience in this area',
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="16" rx="3" />
          <circle cx="12" cy="12" r="4" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3" />
        </svg>
      )
    },
    {
      title: 'Apple Watch App Support And Maintenance',
      desc: 'We not only develop high-quality programs for the Apple watch, but we also provide support on a technical level. Our customer service and maintenance departments are accessible at any time of day or night.',
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path d="M15 11a3 3 0 0 0-6 0" />
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      desc: 'Our primary goal is to provide users of Apple watch applications with an attractive and interactive user interface. Our unparalleled applications for the Apple Watch have robust designs that keep customers actively engaged and attached to the brand.',
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Security For The Apple Watch App',
      desc: "We go to great lengths to guarantee that any possible intruders are prevented from accessing our users' private information in any way we can. Authentication, encryption, and back-end network connections are all things we pay attention to when building the code.",
      badgeBg: 'bg-[#fef9c3]',
      badgeColor: 'text-[#ca8a04]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M10 11V9a2 2 0 1 1 4 0v2" />
        </svg>
      )
    },
    {
      title: 'Upgrades To The Apple Watch App',
      desc: 'App upgrades offer greatness for your company. Our team of highly skilled Apple watch app developers will not just create an app for you. They keep an eye on how well the app runs on your Apple watch and make any necessary changes as soon as they become available',
      badgeBg: 'bg-[#fce7f3]',
      badgeColor: 'text-[#db2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Fixing Issues With The Apple Watch App',
      desc: 'We do exhaustive tests to ensure the app for the Apple watch is of the highest possible quality before distributing it. The elimination of technical hiccups and the contribution to uninterrupted performance are both benefits of bug repair.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    }
  ];

  // 6 Benefits of iWatch App Development
  const benefitsItems = [
    {
      title: 'Increased User Engagement',
      desc: 'Users can quickly get alerts, updates, and interactive material with a wrist app. User engagement increases. Fitness applications offer encouraging messages and measure exercise in real-time, keeping users interested all day.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Better Customer Experience',
      desc: "Personalization and context-awareness in iWatch applications improve consumer experience. A travel app may provide flight statuses, gate changes, and boarding times to the user's wrist, making the experience smooth and easy.",
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: 'Tracking fitness and health',
      desc: 'Develop iWatch applications that employ these sensors and health data to provide consumers with extensive insights into their physical activity, heart rate, sleep habits, and more. Get individualized advice, monitor workout goals and detect health concerns early.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="16" rx="3" />
          <path d="M10 10h4M12 8v4" />
        </svg>
      )
    },
    {
      title: 'More Brand Loyalty and Customer Retention',
      desc: 'Companies may improve consumer connections by creating an iWatch app with continuous, valuable interactions. A retail app may give tailored offers, loyalty benefits, and rapid sales alerts, making shopping more fun.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    },
    {
      title: 'New revenue streams',
      desc: 'In-app purchases, subscription models, and Apple Watch-specific premium features may entice consumers ready to pay for convenience and usefulness. Businesses may monetize their applications via partnerships, sponsorships, and targeted advertising.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Competitive edge',
      desc: "As wearable tech grows, a specialized Apple Watch app displays a company's innovation. An Apple Watch financial app that gives real-time stock alerts and portfolio updates may appeal to investors who need crucial information quickly.",
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
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

  // Insightful Video Solutions Showcase Data
  const insightfulVideos = [
    {
      id: 1,
      title: 'Revolutionizing Recruitment with AI/ML-Driven - Top AI Development...',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      category: 'AI / ML Solutions',
      badgeText: 'AI in Recruitment'
    },
    {
      id: 2,
      title: 'National Water Supply Corporation : Ensure reliable water supply with..',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      category: 'Enterprise Mobility',
      badgeText: 'NWSC Mobile App'
    },
    {
      id: 3,
      title: 'NutriPlan: Your Ultimate Meal Planning and Nutrition Guide - NutriPlan..',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
      category: 'Health & Fitness',
      badgeText: 'NutriPlan App'
    },
    {
      id: 4,
      title: 'Smart Wearable iWatch Application - Real-Time Health & Fitness Tracking...',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80',
      category: 'Wearable Tech',
      badgeText: 'iWatch Solution'
    },
    {
      id: 5,
      title: 'Next-Gen FinTech Mobile App Solutions - Secure Real-Time Portfolio...',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      category: 'FinTech Platform',
      badgeText: 'FinTech App'
    },
    {
      id: 6,
      title: 'Terraform Timesheet App with Microsoft Power Apps & Power Automate...',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      category: 'Power Platform',
      badgeText: 'Power Apps'
    }
  ];

  const handlePrevVideo = () => {
    setActiveVideoIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, insightfulVideos.length - cardsPerPage)));
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) => (prev < insightfulVideos.length - cardsPerPage ? prev + 1 : 0));
  };

  // Client Video Testimonials Data ('Our Story, Their Words')
  const clientTestimonialVideos = [
    {
      id: 1,
      clientName: 'Michael Robert',
      clientLocation: 'Canada',
      title: 'Sapphire Successfully Delivered Web & Mobile App Solutions - Leading IT Company in Canada',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      company: 'Enterprise Mobility Client'
    },
    {
      id: 2,
      clientName: 'David Miller',
      clientLocation: 'USA',
      title: 'Sapphire Software Solutions - Top iOS App Development Company in USA!',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      company: 'iOS Application Partner'
    },
    {
      id: 3,
      clientName: 'Christina Vance',
      clientLocation: 'UK',
      title: "Peer into Satisfaction: Christina's Testimonial Video Shines Bright!",
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      company: 'Global Healthcare Client'
    },
    {
      id: 4,
      clientName: 'Jonathan Hayes',
      clientLocation: 'Australia',
      title: 'Exceptional iWatch App Development & Wearable Tech Solutions Partner!',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      company: 'Wearable Tech Client'
    }
  ];

  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, clientTestimonialVideos.length - testimonialCardsPerPage)));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev < clientTestimonialVideos.length - testimonialCardsPerPage ? prev + 1 : 0));
  };

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

  // Official FAQs
  const sapphireFaqs = [
    {
      q: '1. What is iWatch app development?',
      a: 'iWatch app development involves designing and engineering custom applications specifically for Apple Watch hardware using Apple WatchOS SDK, SwiftUI, WatchKit, and HealthKit to deliver wrist-based micro-interactions, fitness tracking, and enterprise alerts.'
    },
    {
      q: '2. Can an Apple Watch app operate independently without an iPhone?',
      a: 'Yes! Since WatchOS 6, Apple supports fully independent standalone WatchOS applications that connect directly to Wi-Fi and cellular networks, browse the App Store, and execute backend tasks without requiring a paired iPhone nearby.'
    },
    {
      q: '3. How do you optimize battery performance in Apple Watch applications?',
      a: 'We strictly optimize battery life by minimizing background polling timers, utilizing efficient WatchKit lifecycle events, offloading heavy computations to paired cloud servers, and avoiding unnecessary continuous GPS activations.'
    },
    {
      q: '4. How do you integrate HealthKit and biometric sensor data?',
      a: 'We utilize Apple official HealthKit API framework with user authorization to record and analyze heart rate, blood oxygen (SpO2), active calories, HRV, and sleep metrics in strict accordance with HIPAA privacy standards.'
    },
    {
      q: '5. Do you assist with the Apple Watch App Store approval process?',
      a: 'Yes! We handle the complete App Store review preparation, human interface guideline (HIG) compliance audits, screenshot generation, and 100% deployment management.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict non-disclosure agreements before initial discovery calls to ensure 100% confidentiality and full source code IP ownership.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="iWatch App Development Company USA | Custom WatchOS Solutions | Firevy.co"
        description="Top iWatch App Development Company. Build custom WatchOS applications, HealthKit integrations, standalone Apple Watch apps, and wearable IoT solutions with Firevy.co."
        canonical="/services/iwatch-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="iWatch App Development Services in USA"
        subtitle="Empowering modern enterprises and healthcare leaders with custom Apple WatchOS applications. We engineer standalone WatchOS apps, HealthKit biometric tracking, interactive complications, and BLE sensor integrations designed for Apple Watch Series & Ultra devices."
        ctaText="Discuss Your Wearable Project"
        ctaLink="#quote-form"
        serviceCategory="mobile"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* SECTION: Tailored Watch Application Development Services (1:1 Reference Screenshot Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Apple Watch Vector Graphic Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-4 flex items-center justify-center">
                {/* SVG Apple Watch Graphic with App Grid & Finance Badge matching Sapphire reference */}
                <svg viewBox="0 0 500 420" className="w-full h-auto drop-shadow-xl overflow-visible">
                  {/* Subtle Background Backdrop Oval */}
                  <ellipse cx="250" cy="260" rx="200" ry="100" fill="#EBF5FB" opacity="0.8" />
                  <ellipse cx="250" cy="350" rx="180" ry="8" fill="#CBD5E1" opacity="0.5" />

                  {/* Left Person Vector Figure */}
                  <g transform="translate(80, 200)">
                    {/* Plant pot next to person */}
                    <path d="M-40 110 L-25 150 L-5 150 L10 110 Z" fill="#64748B" />
                    <path d="M-25 110 Q-35 80 -15 60 Q5 80 -5 110 Z" fill="#38BDF8" />
                    <path d="M-15 110 Q-5 70 15 50 Q30 70 15 110 Z" fill="#0284C7" />
                    {/* Person */}
                    <circle cx="30" cy="-10" r="14" fill="#FDBA74" />
                    <path d="M18 10 L42 10 L48 70 L12 70 Z" fill="#1E293B" />
                    <path d="M12 70 L26 140 L16 140 L4 70 Z" fill="#0284C7" />
                    <path d="M30 70 L44 140 L34 140 L22 70 Z" fill="#0284C7" />
                    <path d="M42 20 L75 35 L70 45 L42 30 Z" fill="#FDBA74" />
                  </g>

                  {/* Center Apple Watch Frame (Blue Strap & Case) */}
                  <g transform="translate(180, 50)">
                    {/* Top Strap */}
                    <path d="M40 0 L100 0 L90 70 L50 70 Z" fill="#0EA5E9" />
                    {/* Bottom Strap */}
                    <path d="M48 250 L92 250 L100 320 L40 320 Z" fill="#0EA5E9" />

                    {/* Outer Blue Watch Body */}
                    <rect x="20" y="60" width="100" height="200" rx="30" fill="#0284C7" stroke="#0369A1" strokeWidth="4" />
                    {/* Crown Dial */}
                    <rect x="120" y="100" width="8" height="30" rx="3" fill="#0369A1" />

                    {/* Black Screen Display */}
                    <rect x="28" y="68" width="84" height="184" rx="22" fill="#0F172A" />

                    {/* App Grid Launcher (WatchOS Honeycomb Icons) */}
                    <g transform="translate(36, 80)">
                      <circle cx="16" cy="16" r="10" fill="#EF4444" />
                      <circle cx="40" cy="16" r="10" fill="#F59E0B" />
                      <circle cx="64" cy="16" r="10" fill="#10B981" />

                      <circle cx="10" cy="40" r="10" fill="#3B82F6" />
                      <circle cx="34" cy="40" r="10" fill="#8B5CF6" />
                      <circle cx="58" cy="40" r="10" fill="#EC4899" />

                      <circle cx="20" cy="64" r="12" fill="#EAB308" />
                      <circle cx="48" cy="64" r="12" fill="#06B6D4" />

                      <circle cx="10" cy="88" r="10" fill="#10B981" />
                      <circle cx="34" cy="88" r="10" fill="#F43F5E" />
                      <circle cx="58" cy="88" r="10" fill="#3B82F6" />

                      <circle cx="16" cy="112" r="10" fill="#8B5CF6" />
                      <circle cx="40" cy="112" r="10" fill="#F59E0B" />
                      <circle cx="64" cy="112" r="10" fill="#06B6D4" />
                    </g>
                  </g>

                  {/* Overlapping Dollar Badge ($ Coin Graphic) */}
                  <g transform="translate(265, 175)">
                    <circle cx="35" cy="35" r="35" fill="#0284C7" stroke="#FFFFFF" strokeWidth="4" />
                    <circle cx="35" cy="35" r="28" fill="#38BDF8" />
                    <text x="35" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="32" fontWeight="900" fontFamily="sans-serif">$</text>
                  </g>

                  {/* Right Person Vector Figure */}
                  <g transform="translate(360, 205)">
                    <circle cx="20" cy="-10" r="14" fill="#FDBA74" />
                    <path d="M8 10 L32 10 L38 70 L2 70 Z" fill="#0F172A" />
                    <path d="M5 70 L18 140 L8 140 L-5 70 Z" fill="#334155" />
                    <path d="M22 70 L35 140 L25 140 L12 70 Z" fill="#334155" />
                    <path d="M8 20 L-25 35 L-20 45 L8 30 Z" fill="#FDBA74" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Column: Tailored Watch Application Development Services Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Tailored Watch Application Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We don't simply make mobile applications but develop custom iWatch Application Development Services groundbreaking experiences to deliver Affordable iWatch App Development Services. Your iWatch application development project's success is our top priority, and we won't settle for anything less than that! Together, we can bring your apple watch design development idea to life and design applications that can enrich your clients' Apple Watch experience in ways you could never have imagined.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Brief On Affordable iwatch App Development Solutions (1:1 Reference Screenshot Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brief Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Brief On Affordable iwatch App Development Solutions
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                The development of applications for the iWatch is essential because it allows the development of applications that make communication easier. Its most recent version adds support for voice-to-text messaging, personalized messages, calling, and many more features. It is now far less difficult to keep in touch with friends and family. Our customers are informed about Apple Watch App Upgrade at every level, beginning with the ideation phase and continuing until deployment. We also focus on building innovative wear apps that enhance user interaction and convenience across wearable devices.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We provide Custom iWatch App Development Solutions and smartwatch apps for the iWatch that simplify managing activities that take place online. Using its technologies, they can better manage their day-to-day tasks. Apple Watch app development agency plan apps for smartwatch download compatible to wearable app design and development with iWatch to assist in expanding its operations through online resources and offer innovative apps for wearables to enhance user productivity.
              </p>
            </div>

            {/* Right Column: Fitness Runner Apple Watch SVG Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-4 flex items-center justify-center">
                <svg viewBox="0 0 500 420" className="w-full h-auto drop-shadow-xl overflow-visible">
                  {/* Backdrop Oval */}
                  <ellipse cx="250" cy="260" rx="200" ry="100" fill="#EBF5FB" opacity="0.8" />
                  <ellipse cx="250" cy="350" rx="180" ry="8" fill="#CBD5E1" opacity="0.5" />

                  {/* Plant Pot at Bottom Left */}
                  <g transform="translate(70, 240)">
                    <path d="M10 70 L25 110 L45 110 L60 70 Z" fill="#334155" />
                    <path d="M25 70 Q10 40 30 20 Q50 40 35 70 Z" fill="#0284C7" />
                    <path d="M35 70 Q45 30 65 15 Q80 35 60 70 Z" fill="#38BDF8" />
                  </g>

                  {/* Center Apple Watch (Blue Case & Strap) */}
                  <g transform="translate(180, 45)">
                    {/* Top Strap */}
                    <path d="M40 0 L100 0 L90 70 L50 70 Z" fill="#0EA5E9" />
                    {/* Bottom Strap */}
                    <path d="M48 250 L92 250 L100 330 L40 330 Z" fill="#0EA5E9" />

                    {/* Blue Outer Watch Body */}
                    <rect x="20" y="60" width="100" height="200" rx="30" fill="#0284C7" stroke="#0369A1" strokeWidth="4" />
                    <rect x="120" y="100" width="8" height="30" rx="3" fill="#0369A1" />

                    {/* Black Display */}
                    <rect x="28" y="68" width="84" height="184" rx="22" fill="#0F172A" />

                    {/* App Grid Launcher */}
                    <g transform="translate(36, 80)">
                      <circle cx="16" cy="16" r="10" fill="#EF4444" />
                      <circle cx="40" cy="16" r="10" fill="#F59E0B" />
                      <circle cx="64" cy="16" r="10" fill="#10B981" />

                      <circle cx="10" cy="40" r="10" fill="#3B82F6" />
                      <circle cx="34" cy="40" r="10" fill="#8B5CF6" />
                      <circle cx="58" cy="40" r="10" fill="#EC4899" />

                      <circle cx="20" cy="64" r="12" fill="#EAB308" />
                      <circle cx="48" cy="64" r="12" fill="#06B6D4" />

                      <circle cx="10" cy="88" r="10" fill="#10B981" />
                      <circle cx="34" cy="88" r="10" fill="#F43F5E" />
                      <circle cx="58" cy="88" r="10" fill="#3B82F6" />

                      <circle cx="16" cy="112" r="10" fill="#8B5CF6" />
                      <circle cx="40" cy="112" r="10" fill="#F59E0B" />
                      <circle cx="64" cy="112" r="10" fill="#06B6D4" />
                    </g>
                  </g>

                  {/* Left Water Drop Hydration Badge */}
                  <g transform="translate(145, 90)">
                    <circle cx="25" cy="25" r="25" fill="#0284C7" stroke="#FFFFFF" strokeWidth="3" />
                    <circle cx="25" cy="25" r="20" fill="#38BDF8" />
                    <path d="M25 14 Q32 25 32 30 A7 7 0 0 1 18 30 Q18 25 25 14 Z" fill="#FFFFFF" />
                  </g>

                  {/* Right Dumbbell Workout Fitness Badge */}
                  <g transform="translate(290, 90)">
                    <circle cx="25" cy="25" r="25" fill="#0284C7" stroke="#FFFFFF" strokeWidth="3" />
                    <circle cx="25" cy="25" r="20" fill="#38BDF8" />
                    {/* Dumbbell Icon */}
                    <rect x="14" y="23" width="22" height="4" fill="#FFFFFF" />
                    <rect x="14" y="18" width="4" height="14" rx="2" fill="#FFFFFF" />
                    <rect x="32" y="18" width="4" height="14" rx="2" fill="#FFFFFF" />
                  </g>

                  {/* Right Running Woman Vector Figure */}
                  <g transform="translate(325, 140)">
                    <path d="M40 20 C40 10 20 0 10 20 C5 30 15 45 25 35 Z" fill="#1E293B" />
                    <circle cx="30" cy="25" r="12" fill="#FDBA74" />
                    <path d="M20 37 L50 37 L45 90 L25 90 Z" fill="#38BDF8" />
                    <path d="M30 90 L60 140 L45 145 L20 95 Z" fill="#1E293B" />
                    <path d="M40 90 L0 125 L-15 115 L25 85 Z" fill="#1E293B" />
                    <path d="M60 140 L75 140 L75 150 L55 150 Z" fill="#38BDF8" />
                    <path d="M-15 115 L-30 130 L-20 135 L-5 120 Z" fill="#38BDF8" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: World Wide Top Rated IT Company on Clutch (Award Badges Marquee Banner) */}
      <section className="py-8 bg-[#005F96] text-white border-y border-blue-900/30 overflow-hidden text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Title */}
            <div className="lg:col-span-4 shrink-0 pr-4 border-r-0 lg:border-r border-blue-400/30">
              <h2 className="text-2xl sm:text-3xl font-[900] text-white tracking-tight leading-tight">
                World Wide Top Rated IT Company on Clutch
              </h2>
            </div>

            {/* Right Column: Animated Scrolling Award Badges Marquee */}
            <div className="lg:col-span-8 overflow-hidden select-none">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Track 1 Badges */}
                <div className="flex items-center space-x-8 pr-8 shrink-0">
                  {/* Badge 1: Gold Trophy Emblem */}
                  <div className="w-24 h-24 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M20 50 Q10 20 50 10 Q90 20 80 50 Q90 80 50 90 Q10 80 20 50 Z" fill="none" stroke="#F59E0B" strokeWidth="3" />
                      <circle cx="50" cy="50" r="35" fill="#FEF3C7" opacity="0.2" />
                      <path d="M35 30 L65 30 L60 55 C60 65 40 65 40 55 Z" fill="#F59E0B" />
                      <path d="M47 62 L53 62 L53 72 L47 72 Z" fill="#D97706" />
                      <rect x="40" y="72" width="20" height="8" rx="2" fill="#B45309" />
                      <path d="M22 45 Q28 35 25 25 Q35 30 32 40 Z" fill="#F59E0B" />
                      <path d="M78 45 Q72 35 75 25 Q65 30 68 40 Z" fill="#F59E0B" />
                    </svg>
                  </div>

                  {/* Badge 2: Reviewed Dedicated Software Companies Ribbon */}
                  <div className="w-20 h-24 bg-white rounded-b-lg border-t-4 border-[#991B1B] shadow-md p-2 flex flex-col items-center justify-between shrink-0 text-slate-900 text-[8px] font-bold text-center">
                    <span className="bg-[#991B1B] text-white px-1.5 py-0.5 rounded-[2px] text-[7px]">REVIEWED</span>
                    <span className="text-[7px] text-slate-700 leading-tight uppercase font-extrabold my-0.5">DEDICATED SOFTWARE DEVELOPMENT</span>
                    <div className="w-full bg-[#991B1B] text-white py-0.5 rounded-[2px] text-[7px]">TOP RATED</div>
                  </div>

                  {/* Badge 3: Most Reviewed Software Developers Ribbon */}
                  <div className="w-20 h-24 bg-white rounded-b-lg border-t-4 border-[#881337] shadow-md p-2 flex flex-col items-center justify-between shrink-0 text-slate-900 text-[8px] font-bold text-center">
                    <span className="bg-[#881337] text-white px-1.5 py-0.5 rounded-[2px] text-[7px]">MOST REVIEWED</span>
                    <span className="text-[8px] text-rose-900 font-extrabold tracking-tighter uppercase my-0.5">SOFTWARE DEVELOPERS</span>
                    <div className="w-full bg-[#881337] text-white py-0.5 rounded-[2px] text-[7px]">VERIFIED</div>
                  </div>

                  {/* Badge 4: GoodFirms Top Dedicated Software Badge */}
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-cyan-400 shadow-md p-2 flex flex-col items-center justify-center shrink-0 text-slate-900 text-[8px] font-bold text-center relative overflow-hidden">
                    <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-black text-[10px] mb-1">G</div>
                    <span className="text-[7px] text-[#005F96] font-extrabold uppercase leading-none">TOP DEDICATED</span>
                    <span className="text-[6px] text-slate-500 font-semibold uppercase">SOFTWARE COMPANY</span>
                    <div className="absolute bottom-0 inset-x-0 bg-[#005F96] text-white text-[6px] py-0.5 font-bold">goodfirms.co</div>
                  </div>

                  {/* Badge 5: Most Reviewed Dedicated Company Ribbon */}
                  <div className="w-20 h-24 bg-white rounded-b-lg border-t-4 border-[#991B1B] shadow-md p-2 flex flex-col items-center justify-between shrink-0 text-slate-900 text-[8px] font-bold text-center">
                    <span className="bg-[#991B1B] text-white px-1.5 py-0.5 rounded-[2px] text-[7px]">MOST REVIEWED</span>
                    <span className="text-[7px] text-slate-700 leading-tight uppercase font-extrabold my-0.5">DEDICATED SOFTWARE COMPANY</span>
                    <div className="w-full bg-[#991B1B] text-white py-0.5 rounded-[2px] text-[7px]">VISIT</div>
                  </div>

                  {/* Badge 6: Clutch Hexagonal Top Dedicated Company 2022 */}
                  <div className="w-24 h-24 bg-slate-900 text-white rounded-lg border-2 border-slate-700 shadow-md p-2 flex flex-col items-center justify-center shrink-0 text-center relative">
                    <span className="text-[6px] text-cyan-400 font-bold uppercase tracking-wider">TOP DEDICATED</span>
                    <span className="text-[6px] text-slate-300 uppercase">SOFTWARE COMPANY</span>
                    <span className="text-sm font-black tracking-tight text-white my-1 font-serif">Clutch</span>
                    <span className="text-[7px] text-slate-400 font-semibold">DEVELOPERS 2022</span>
                  </div>
                </div>

                {/* Track 2 Badges (Duplicate for Seamless Loop) */}
                <div className="flex items-center space-x-8 pr-8 shrink-0" aria-hidden="true">
                  {/* Badge 1: Gold Trophy Emblem */}
                  <div className="w-24 h-24 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M20 50 Q10 20 50 10 Q90 20 80 50 Q90 80 50 90 Q10 80 20 50 Z" fill="none" stroke="#F59E0B" strokeWidth="3" />
                      <circle cx="50" cy="50" r="35" fill="#FEF3C7" opacity="0.2" />
                      <path d="M35 30 L65 30 L60 55 C60 65 40 65 40 55 Z" fill="#F59E0B" />
                      <path d="M47 62 L53 62 L53 72 L47 72 Z" fill="#D97706" />
                      <rect x="40" y="72" width="20" height="8" rx="2" fill="#B45309" />
                      <path d="M22 45 Q28 35 25 25 Q35 30 32 40 Z" fill="#F59E0B" />
                      <path d="M78 45 Q72 35 75 25 Q65 30 68 40 Z" fill="#F59E0B" />
                    </svg>
                  </div>

                  {/* Badge 2: Reviewed Dedicated Software Companies Ribbon */}
                  <div className="w-20 h-24 bg-white rounded-b-lg border-t-4 border-[#991B1B] shadow-md p-2 flex flex-col items-center justify-between shrink-0 text-slate-900 text-[8px] font-bold text-center">
                    <span className="bg-[#991B1B] text-white px-1.5 py-0.5 rounded-[2px] text-[7px]">REVIEWED</span>
                    <span className="text-[7px] text-slate-700 leading-tight uppercase font-extrabold my-0.5">DEDICATED SOFTWARE DEVELOPMENT</span>
                    <div className="w-full bg-[#991B1B] text-white py-0.5 rounded-[2px] text-[7px]">TOP RATED</div>
                  </div>

                  {/* Badge 3: Most Reviewed Software Developers Ribbon */}
                  <div className="w-20 h-24 bg-white rounded-b-lg border-t-4 border-[#881337] shadow-md p-2 flex flex-col items-center justify-between shrink-0 text-slate-900 text-[8px] font-bold text-center">
                    <span className="bg-[#881337] text-white px-1.5 py-0.5 rounded-[2px] text-[7px]">MOST REVIEWED</span>
                    <span className="text-[8px] text-rose-900 font-extrabold tracking-tighter uppercase my-0.5">SOFTWARE DEVELOPERS</span>
                    <div className="w-full bg-[#881337] text-white py-0.5 rounded-[2px] text-[7px]">VERIFIED</div>
                  </div>

                  {/* Badge 4: GoodFirms Top Dedicated Software Badge */}
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-cyan-400 shadow-md p-2 flex flex-col items-center justify-center shrink-0 text-slate-900 text-[8px] font-bold text-center relative overflow-hidden">
                    <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-black text-[10px] mb-1">G</div>
                    <span className="text-[7px] text-[#005F96] font-extrabold uppercase leading-none">TOP DEDICATED</span>
                    <span className="text-[6px] text-slate-500 font-semibold uppercase">SOFTWARE COMPANY</span>
                    <div className="absolute bottom-0 inset-x-0 bg-[#005F96] text-white text-[6px] py-0.5 font-bold">goodfirms.co</div>
                  </div>

                  {/* Badge 5: Most Reviewed Dedicated Company Ribbon */}
                  <div className="w-20 h-24 bg-white rounded-b-lg border-t-4 border-[#991B1B] shadow-md p-2 flex flex-col items-center justify-between shrink-0 text-slate-900 text-[8px] font-bold text-center">
                    <span className="bg-[#991B1B] text-white px-1.5 py-0.5 rounded-[2px] text-[7px]">MOST REVIEWED</span>
                    <span className="text-[7px] text-slate-700 leading-tight uppercase font-extrabold my-0.5">DEDICATED SOFTWARE COMPANY</span>
                    <div className="w-full bg-[#991B1B] text-white py-0.5 rounded-[2px] text-[7px]">VISIT</div>
                  </div>

                  {/* Badge 6: Clutch Hexagonal Top Dedicated Company 2022 */}
                  <div className="w-24 h-24 bg-slate-900 text-white rounded-lg border-2 border-slate-700 shadow-md p-2 flex flex-col items-center justify-center shrink-0 text-center relative">
                    <span className="text-[6px] text-cyan-400 font-bold uppercase tracking-wider">TOP DEDICATED</span>
                    <span className="text-[6px] text-slate-300 uppercase">SOFTWARE COMPANY</span>
                    <span className="text-sm font-black tracking-tight text-white my-1 font-serif">Clutch</span>
                    <span className="text-[7px] text-slate-400 font-semibold">DEVELOPERS 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Get 100% Customizable Apple Watch Web-Based Apps (1:1 Reference Screenshot Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
              Get 100% Customizable Apple Watch Web-Based Apps
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

                {/* Scalable And Robust iWatch Apps Headline */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-[800] text-[#005F96] leading-tight">
                    Scalable And Robust iWatch Apps
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                As an iWatch app development company, Hire expert Apple Watch App Developers are always one step ahead of the learning curve when adopting new technology. Our software engineers are well-versed in the Watch Kit suite of development tools and APIs, enabling them to create completely functional programs tailored exclusively for the Apple Watch. As early users of Apple's wearable technology, we are sure that we will be able to create an extraordinary app smartwatch driven by the watch's context. We specialize in Apple and smart watch app for android development.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We know that applications designed for the Apple Watch must feature a user-friendly and engaging interface. In addition to our <strong className="text-[#005F96] font-bold">custom mobile app development services</strong>, we also provide value-added services to design, create a framework for, assess, and launch potential expansions for the Apple Watch. As an apple watch app development company, we will construct a watch app that is complementary to your company by using the commitment of our developers, our enthusiasm for innovation in smartwatch app development, our search for cost-effective solutions, our agile development methodology and the quality of our work. We also help clients download apps for smartwatch with ease, ensuring compatibility and performance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* SECTION: Success Stories (Placed Directly Below Premium Services) */}
      <SuccessStoriesSection category="general" />

      {/* SECTION: The Expertise Of Our iWatch App Development Services (1:1 Reference Match) */}
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
              The Expertise Of Our iWatch App Development Services
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Our apple watch app developers have years of experience in iWatch app development. Other expertise are:
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
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  {/* Color Badge Icon */}
                  <div className={`w-12 h-12 rounded-[12px] ${item.badgeBg} ${item.badgeColor} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
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

      {/* SECTION: Recognition Badges Ribbon (1:1 Reference Screenshot Match) */}
      <section className="py-10 bg-[#0b5072] text-white font-sans text-left overflow-hidden border-b border-blue-900/40">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            {/* Left Title */}
            <div className="text-center lg:text-left max-w-md space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-white tracking-tight leading-tight font-sans">
                Proud To Have Picked These Up Along The Way
              </h2>
            </div>

            {/* Right 4 White Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 w-full lg:w-auto">
              {/* Badge 1: Clutch */}
              <div className="bg-white rounded-[12px] p-4 text-slate-900 shadow-md flex flex-col items-center justify-center text-center h-28 w-full sm:w-32 border border-slate-100">
                <div className="text-[7.5px] font-[800] text-slate-500 uppercase tracking-widest leading-none mb-1">CLIENTS SAY</div>
                <div className="text-[12px] font-[900] text-slate-900 leading-tight mb-1">WE DELIVER ON</div>
                <div className="text-lg font-[900] text-slate-950 font-serif tracking-tight border-t border-slate-200 pt-1 w-full">Clutch</div>
              </div>

              {/* Badge 2: Upwork */}
              <div className="bg-white rounded-[12px] p-4 text-slate-900 shadow-md flex flex-col items-center justify-center text-center h-28 w-full sm:w-32 border border-slate-100">
                <div className="text-sm font-[900] text-[#14A800] font-sans leading-none mb-1">Upwork</div>
                <div className="px-2 py-0.5 rounded bg-[#14A800] text-white text-[9px] font-[800] tracking-wider uppercase">TOP RATED</div>
              </div>

              {/* Badge 3: Freelancer */}
              <div className="bg-white rounded-[12px] p-4 text-slate-900 shadow-md flex flex-col items-center justify-center text-center h-28 w-full sm:w-32 border border-slate-100">
                <div className="text-sm font-[900] text-[#29B6F6] font-sans leading-none mb-1">freelancer</div>
                <div className="px-2 py-0.5 rounded bg-[#0284C7] text-white text-[8px] font-[800] tracking-wider uppercase mt-1">PREFERRED FREELANCER</div>
              </div>

              {/* Badge 4: GoodFirms / Trophy */}
              <div className="bg-white rounded-[12px] p-4 text-slate-900 shadow-md flex flex-col items-center justify-center text-center h-28 w-full sm:w-32 border border-slate-100">
                <div className="text-xs font-[900] text-amber-500 mb-0.5">🏆 VIEW OUR PROFILE</div>
                <div className="text-xs font-[900] text-[#005F96]">goodfirms.co</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Benefits Of iWatch App Development (1:1 Reference Screenshot Match) */}
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
              Benefits Of iWatch App Development
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Businesses can improve user experience and market reach by developing applications for the Apple Watch (iWatch). Six significant advantages of iWatch app development are:
            </p>
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
                  <div className="w-12 h-12 rounded-[12px] bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
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

      {/* SECTION: Unveiling Our Innovative Solution */}
      <section className="py-16 sm:py-20 bg-[#0b5072] text-white font-sans text-left border-b border-blue-900/50 overflow-hidden relative">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-white tracking-tight leading-tight font-sans">
              Unveiling Our Innovative Solution
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-blue-100 leading-relaxed font-sans max-w-3xl mx-auto">
              From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation.
            </p>
          </motion.div>

          {/* Responsive Video Showcase Container (100% Fit On ALL Screen Sizes Without Overlapping or Cut-offs) */}
          <div className="max-w-6xl mx-auto mb-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {insightfulVideos.slice(activeVideoIndex, activeVideoIndex + cardsPerPage).map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveVideoModal(video)}
                  className="bg-white rounded-[16px] border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between h-full"
                >
                  {/* Thumbnail Image Container with Play Overlay */}
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />

                    {/* Sapphire Logo Watermark (Top Right) */}
                    <div className="absolute top-3 right-3 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-[900] text-white tracking-wide border border-white/10 flex items-center space-x-1">
                      <span className="text-cyan-400 font-serif">S</span>
                      <span>Sapphire</span>
                    </div>

                    {/* Category Pill (Top Left) */}
                    <div className="absolute top-3 left-3 bg-[#0b5072]/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-[800] text-cyan-200 tracking-wide uppercase border border-cyan-400/20">
                      {video.badgeText}
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white text-[#0b5072] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#005F96] group-hover:text-white transition-all duration-300">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Video Title Box */}
                  <div className="p-4 sm:p-5 text-left bg-white border-t border-slate-100 min-h-[76px] flex items-center">
                    <h3 className="text-xs sm:text-[13.5px] font-[700] text-slate-900 leading-snug font-sans line-clamp-2 group-hover:text-[#0b5072] transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={handlePrevVideo}
              aria-label="Previous Videos"
              className="w-10 h-10 rounded-full border border-white/40 text-white hover:bg-white hover:text-[#0b5072] transition-all flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextVideo}
              aria-label="Next Videos"
              className="w-10 h-10 rounded-full border border-white/40 text-white hover:bg-white hover:text-[#0b5072] transition-all flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Centered 'View Insightful Videos' Button */}
          <div className="text-center">
            <Link
              to="/company/insightful-videos"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[8px] bg-white hover:bg-slate-100 text-[#0b5072] font-[800] text-[15px] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-sans"
            >
              View Insightful Videos
            </Link>
          </div>
        </Container>

        {/* Interactive Video Lightbox Modal */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-white/10 text-white">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase">
                    {activeVideoModal.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-200 truncate max-w-md">
                    {activeVideoModal.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={activeVideoModal.videoUrl}
                  title={activeVideoModal.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* SECTION: Process We Follow (Moved Directly Below Unveiling Our Innovative Solution) */}
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from wearable UI wireframes to WatchOS SDK development, UAT, and App Store deployment." />

      {/* SECTION: Our Story, Their Words (1:1 Reference Screenshot Match with Working Video Carousel & Lightbox Modal) */}
      <section className="py-16 sm:py-20 bg-[#dcf2fd] text-slate-900 font-sans text-left border-b border-blue-200/60 overflow-hidden relative">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight leading-tight font-sans">
              Our Story, Their Words
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
            </p>
          </motion.div>

          {/* 3 Visible Testimonial Video Cards Grid Container */}
          <div className="max-w-6xl mx-auto mb-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {clientTestimonialVideos.slice(activeTestimonialIndex, activeTestimonialIndex + testimonialCardsPerPage).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveTestimonialModal(item)}
                  className="bg-white rounded-[16px] border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between h-full"
                >
                  {/* Upper Blue Graphic Banner with Client Avatar */}
                  <div className="relative bg-gradient-to-r from-[#0284c7] via-[#0b5072] to-[#004A75] py-8 sm:py-10 px-4 flex items-center justify-center overflow-hidden">
                    {/* Background Decorative Vector Overlay */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
                        <circle cx="350" cy="150" r="60" stroke="#f59e0b" strokeWidth="3" fill="none" />
                        <path d="M10 150 L30 150 M20 140 L20 160" stroke="white" strokeWidth="3" />
                        <path d="M370 30 L390 30 M380 20 L380 40" stroke="white" strokeWidth="3" />
                      </svg>
                    </div>

                    {/* Client Headshot Avatar */}
                    <div className="relative z-10">
                      <img
                        src={item.avatar}
                        alt={item.clientName}
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover shadow-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Lower Title & Blue Play Button Box */}
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-3 min-h-[84px] text-left">
                    <h3 className="text-xs sm:text-[13.5px] font-[700] text-slate-900 leading-snug font-sans line-clamp-2 group-hover:text-[#0b5072] transition-colors">
                      {item.title}
                    </h3>

                    {/* Blue Play Button */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0b5072] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#005F96] group-hover:scale-110 transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Arrow Buttons */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handlePrevTestimonial}
              aria-label="Previous Testimonials"
              className="w-10 h-10 rounded-full border border-slate-400 text-slate-700 hover:bg-[#0b5072] hover:text-white hover:border-[#0b5072] transition-all flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextTestimonial}
              aria-label="Next Testimonials"
              className="w-10 h-10 rounded-full border border-slate-400 text-slate-700 hover:bg-[#0b5072] hover:text-white hover:border-[#0b5072] transition-all flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </Container>

        {/* Interactive Client Video Lightbox Modal */}
        {activeTestimonialModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-white/10 text-white">
                <div className="flex items-center space-x-3">
                  <img src={activeTestimonialModal.avatar} alt={activeTestimonialModal.clientName} className="w-9 h-9 rounded-full object-cover border border-white/20" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">{activeTestimonialModal.clientName} ({activeTestimonialModal.clientLocation})</h4>
                    <p className="text-[11px] text-cyan-300">{activeTestimonialModal.company}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTestimonialModal(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={activeTestimonialModal.videoUrl}
                  title={activeTestimonialModal.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>
      <SuccessMatrix />
      <SapphireTechStackGrid domainName="iwatch app" richTechCategories={techCategories} />
      <TrustedBrandsGrid />

      {/* SECTION 5: FAQs Section */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              iWatch App Development FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {sapphireFaqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-base text-slate-900 hover:text-[#005F96] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#005F96]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 6: Free Quote Lead Form */}
      <section id="quote-form" className="py-20 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003452] text-white text-left">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-white/20">
                <Watch className="w-3.5 h-3.5 text-cyan-300" />
                <span>BUILD YOUR APPLE WATCH APP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Get Access to Senior WatchOS Engineers
              </h2>
              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a consultation with our wearable solution architects today to design your custom iWatch application.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Inquiry Received!</h3>
                    <button onClick={() => setFormSubmitted(false)} className="px-6 py-2.5 rounded-lg bg-[#005F96] text-white font-bold text-xs">
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-slate-900 mb-2">Get A Free Project Quote</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g. Sarah Jenkins" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="sarah@healthtech.com" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief</label>
                      <textarea name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your Apple Watch app, HealthKit integration, biometric tracking..." className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none resize-none" />
                    </div>
                    <button type="submit" className="w-full py-4 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-black text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                      <span>Submit Project Brief & Get Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default IWatchAppDevelopmentService;
