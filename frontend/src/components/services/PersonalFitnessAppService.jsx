import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import HybridAppCuttingEdgeTechnologiesSection from './HybridAppCuttingEdgeTechnologiesSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import HybridAppExpertiseServices from './HybridAppExpertiseServices';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';

export const PersonalFitnessAppService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Fitness Squad',
    appType: 'Custom Personal Fitness App Development',
    budget: '$20,000 - $45,000',
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

  // 6 Benefits of Personal Fitness App Development
  const benefitsItems = [
    {
      title: 'Wearable & Sensor Integration',
      desc: 'Seamlessly sync biometric data from Apple Watch, Fitbit, Garmin, and Wear OS devices with Apple HealthKit and Google Health Connect for continuous, accurate tracking.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="16" rx="3" />
          <circle cx="12" cy="12" r="3" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3" />
        </svg>
      )
    },
    {
      title: 'AI-Driven Custom Workout Routines',
      desc: 'Dynamic machine learning algorithms generate personalized training programs and daily calorie targets tailored to each user’s body composition, goals, and workout history.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v8H2z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      )
    },
    {
      title: 'Real-Time Biometric Analytics',
      desc: 'Interactive visual dashboards track heart rate zones, calories burned, VO2 max, sleep patterns, and recovery scores with low-latency updates and historical trend reports.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      title: 'Live Video Coaching & On-Demand Classes',
      desc: 'Low-latency streaming video infrastructure with multi-device casting (AirPlay & Chromecast), audio playlist integration, and interactive trainer feedback mechanisms.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      )
    },
    {
      title: 'Social Leaderboards & Gamification',
      desc: 'Boost user retention with community challenges, achievement badges, streak rewards, and social feed sharing that turn routine exercise into an engaging daily habit.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: 'Nutrition & Macro Meal Tracking',
      desc: 'Barcode scanner integration, extensive food databases, macro breakdown calculations, and automated hydration reminders for comprehensive health and wellness management.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models
  const hiringModels = [
    {
      title: 'Fixed Price Model',
      desc: 'If you represent a company with well-defined projects, ask about our fixed cost model with strict milestone-based delivery.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="30" rx="3" />
          <path d="M16 6 V10" />
          <path d="M32 6 V10" />
          <path d="M8 18 H40" />
          <path d="M20 28 L23 31 L29 25" strokeWidth="2.5" />
        </svg>
      ),
      points: [
        'Optimal flexibility',
        'Agile team',
        'Milestone deliverables',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time Material',
      desc: "If you represent a fitness brand with evolving feature sets and continuous testing needs, choose our flexible hourly rolling contract.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="27" r="14" />
          <path d="M24 13 V8" />
          <path d="M20 8 H28" />
          <path d="M34 17 L37 14" />
          <path d="M24 27 L24 20" />
          <path d="M24 27 L29 30" />
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
      desc: "If you represent an enterprise requiring a dedicated mobile squad of fitness engineers, architects, and QA engineers on a monthly rolling retainer.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="15" r="4.5" />
          <path d="M17 29 C17 24.5 20 22.5 24 22.5 C28 22.5 31 24.5 31 29" />
          <circle cx="14" cy="19" r="3.5" />
          <path d="M8 31 C8 27 11 25.5 14 25.5 C15.2 25.5 16.3 25.9 17.2 26.6" />
          <circle cx="34" cy="19" r="3.5" />
          <path d="M30.8 26.6 C31.7 25.9 32.8 25.5 34 25.5 C37 25.5 40 27 40 31" />
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
      desc: 'Ideal for ongoing post-launch maintenance, OS upgrades, and feature additions with pre-purchased flexible support hour blocks.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#06B6D4]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="19" cy="27" r="7" />
          <path d="M19 18 V20 M19 34 V36 M10 27 H12 M26 27 H28 M12.5 20.5 L14 22 M24 32 L25.5 33.5 M12.5 33.5 L14 32 M24 22 L25.5 20.5" strokeWidth="2.2" />
          <circle cx="31" cy="17" r="4.5" />
          <path d="M31 11 V12.5 M31 21.5 V23 M25 17 H26.5 M35.5 17 H37 M26.8 12.8 L28 14 M34 20 L35.2 21.2 M26.8 21.2 L28 20 M34 14 L35.2 12.8" strokeWidth="1.8" />
        </svg>
      ),
      points: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Flexible hours',
        'Pay only for measurable work'
      ]
    }
  ];

  // Official Personal Fitness FAQs
  const fitnessFaqs = [
    {
      q: '1. What are the key features of a custom personal fitness app?',
      a: 'A production-grade fitness application includes personalized workout plans, live and on-demand video streaming, wearable sync (Apple Watch, Garmin, Fitbit), nutrition and calorie logging, GPS route tracking for runners, community leaderboards, and AI coaching.'
    },
    {
      q: '2. How does the app connect with wearable devices like Apple Watch and Fitbit?',
      a: 'We integrate native SDKs including Apple HealthKit, Google Health Connect, Garmin Connect IQ, and Bluetooth Low Energy (BLE) APIs to sync steps, heart rate, sleep quality, and active calories with battery-efficient background syncing.'
    },
    {
      q: '3. Can we offer subscription models and in-app purchases?',
      a: 'Yes! We configure secure in-app subscriptions and payment gateways across Apple StoreKit 2, Google Play Billing, Stripe, and RevenueCat with support for free trials, tier upgrades, and automated renewals.'
    },
    {
      q: '4. Is user health data kept private and compliant with regulations?',
      a: 'Absolutely. We enforce end-to-end encryption (AES-256), secure biometric authentication, and strict compliance with GDPR, CCPA, and HIPAA requirements for health and biometric data storage.'
    },
    {
      q: '5. Do you handle App Store and Google Play Store publishing?',
      a: 'Yes! Our team manages the end-to-end deployment process, including signing certificates, health metadata disclosure reviews, store guideline validations, and publication.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict Non-Disclosure Agreements (NDAs) prior to any project discussion to ensure 100% data confidentiality and complete source code intellectual property ownership.'
    }
  ];

  // Stats for Personal Fitness Coach App Development (100% matched to reference)
  const fitnessStats = [
    { value: '100+', label: 'Software Developers' },
    { value: '20+', label: 'Fortunes 500 Companies' },
    { value: '1000+', label: 'Project Completed in Software' },
    { value: '320+', label: '5-Star Clutch Reviews' }
  ];

  // 7 Personal Fitness Coach App Development Services (100% matched to reference)
  const fitnessExpertiseCards = [
    {
      id: 1,
      title: 'Wearables & IoT Devices Integration',
      desc: 'Smooth integration with wearables, trackers, and IoT devices to track steps, calories, and workout performance.'
    },
    {
      id: 2,
      title: 'Low-Cost Fitness Coach App Development',
      desc: 'Cost-effective solutions for startups and fitness organizations in search of scalable apps without compromising on quality.'
    },
    {
      id: 3,
      title: 'Nutrition Management Apps',
      desc: 'Apps that integrate personal training coach functionality with meal tracking and diet plans for overall health management.'
    },
    {
      id: 4,
      title: 'Workout & Personal Training Apps',
      desc: 'Custom workout routines, video exercises, and automated rep/timer trackers designed for personal trainers and fitness studios.'
    },
    {
      id: 5,
      title: 'Live & On-Demand Video Coaching Apps',
      desc: 'High-definition streaming platforms with interactive workout sessions, live trainer feedback, and class scheduling.'
    },
    {
      id: 6,
      title: 'AI-Powered Fitness & Wellness Apps',
      desc: 'Intelligent algorithms that analyze biometric data to deliver dynamic workout adjustments and smart calorie recommendations.'
    },
    {
      id: 7,
      title: 'Gym & Membership Management Apps',
      desc: 'Comprehensive member portals with class booking, subscription billing, access control, and trainer schedule management.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Personal Fitness Coach App Development Company | Custom Fitness Apps | Firevy.co"
        description="We have expertise in developing Personal Fitness Coach App that enable people and businesses to deliver personalized fitness experiences to users across the globe."
        canonical="/services/personal-fitness-app"
      />

      {/* 1. Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Personal Fitness Coach App Development Company"
        subtitle="We have expertise in developing Personal Fitness Coach App that enable people and businesses to deliver personalized fitness experiences to users across the globe. Right from AI-based personal trainer app development to sophisticated fitness challenges app, our products are cost-effective, scalable, and interactive. Being a startup, gym, or wellness brand, we provide tailor-made fitness app solutions that enable personal coaching for everyone. Contact us today for a free consultation and get started on your next-gen fitness platform."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="personal-fitness-app"
        stats={fitnessStats}
      />

      {/* 2. Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* 3. SECTION: Hire Developers For Fitness Coaching App */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/hire_fitness_developers_illustration.jpg"
                  alt="Hire Developers For Fitness Coaching App"
                  className="w-full h-auto max-w-[460px] object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Hire Developers For Fitness Coaching App
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                As a leading Personal Fitness Coach App Development Company, we provide innovative, secure, and high-performance fitness solutions. Leveraging our skills in personal training coach app, digital fitness coaching websites, and AI-powered wellness solutions, we assist fitness businesses, gyms, and startups in growing their online presence. Our process fuses years of experience, cutting-edge technologies, and profound industry insights, ensuring us the best choice for personal trainer app development services across various domains.
              </p>
            </div>
          </div>
        </Container>
      </section>



      {/* 5. SECTION: World Wide Top Rated IT Company on Clutch (Award Badges Marquee Banner - 1:1 Screenshot Match) */}
      <section className="py-6 sm:py-8 bg-[#005F96] text-white border-y border-blue-900/30 overflow-hidden text-left font-sans select-none">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Title */}
            <div className="lg:col-span-4 shrink-0 pr-4 border-r-0 lg:border-r border-white/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-[900] text-white tracking-tight leading-tight">
                World Wide Top Rated IT Company on Clutch
              </h2>
            </div>

            {/* Right Column: Animated Scrolling Award Badges Marquee */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Track 1 Badges */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0">
                  {/* Badge 1: Golden Trophy with Laurel Wreath */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  {/* Badge 2: The Manifest - Most Reviewed Dedicated Software Development Companies */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 3: The Manifest - Most Reviewed Software Developers */}
                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 4: GoodFirms Top Dedicated Software Development Company */}
                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 5: The Manifest - Most Reviewed Dedicated Software Development Companies */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 6: Clutch Top Dedicated Software Company Hexagon */}
                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                {/* Track 2 Badges (Duplicate for Seamless Loop) */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0" aria-hidden="true">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. SECTION: Scalable And Robust Fitness Applications (Quote Card) */}
      <section className="py-14 sm:py-18 bg-white font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-2xl p-7 sm:p-9 relative flex flex-col justify-between min-h-[260px] border border-sky-100 shadow-sm text-left">
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Scalable And Robust Fitness Apps
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We are a top personal fitness mobile application development company backed by experienced software architects and certified developers. Our team engineers high-velocity mobile applications that combine native performance with seamless cross-platform adaptability.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We know that applications designed for modern fitness brands must deliver dependable offline caching, instant load times, and fluid touch interactions. We ensure every deliverable matches your business goals without compromising code maintainability or security.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6.5 SECTION: Cutting Edge Technologies Sapphire Use For Hybrid App Development */}
      <HybridAppCuttingEdgeTechnologiesSection />

      {/* 7. SECTION: Our Premium Services */}
      <PremiumServicesGrid />





      {/* 8. SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />



      {/* 10. SECTION: Proud To Have Picked These Up Along The Way */}
      <ProudAwardsBanner />

      {/* 11. SECTION: Benefits of Personal Fitness App Development */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100 overflow-hidden">
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
              Benefits of Personal Fitness App Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto font-normal">
              Personal fitness applications combine smart coaching, real-time sensor analytics, and gamified social features. Benefits of our fitness app development solutions:
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto"
          >
            {benefitsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#EBF6FC] text-[#0084D1] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 11.5 SECTION: Our Personal Fitness Coach App Development Services */}
      <HybridAppExpertiseServices
        title="Our Personal Fitness Coach App Development Services"
        subtitle="We provide a variety of fitness app development services aimed at optimizing business ROI and providing high-value digital experiences. Each service is tailored to client needs and user expectations."
        cards={fitnessExpertiseCards}
        showButton={false}
      />

      {/* 12. SECTION: Business Friendly Hiring Models */}
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
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto font-normal">
              We offer four different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
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
                className="bg-white rounded-[18px] p-6 sm:p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[12.8px] text-slate-600 font-[400] leading-relaxed font-sans text-center min-h-[60px]">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 pt-3 text-left font-sans text-xs sm:text-[12.8px] text-slate-700 font-[500]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0078D7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#quote-form"
                  className="w-full py-2.5 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-sm transition-all shadow-xs hover:shadow-md font-sans inline-block mt-4 text-center cursor-pointer"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 13. SECTION: Unveiling Our Innovative Solution */}
      <InnovativeSolutionsVideoSection />

      {/* 14. SECTION: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from fitness UI wireframes to wearable sensor compilation, QA testing, and App Store deployment." />

      {/* 15. SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* 16. SECTION: Trusted Brands Grid */}
      <TrustedBrandsGrid />

      {/* 17. SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* 19. SECTION: Featured In Brands Section */}
      <FeaturedInBrandsSection />

      {/* 20. SECTION: Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* 21. SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={fitnessFaqs} />

      {/* 22. SECTION: Our Recent Blogs */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Our Recent Blogs
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              Read our latest engineering insights, architecture breakdowns, and fitness mobile app best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-900">
                <img
                  src="/images/fitness_blog_1.svg"
                  alt="Building Real-Time Workout & Heart Rate Tracking Apps"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Building Real-Time Workout &amp; Heart Rate Tracking Apps
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  How modern HealthKit and BLE architectures optimize battery life while capturing precision biometric metrics.
                </p>
                <div className="text-[#005F96] font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-900">
                <img
                  src="/images/fitness_blog_2.svg"
                  alt="AI in Fitness Apps: Delivering Hyper-Personalized Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  AI in Fitness Apps: Delivering Hyper-Personalized Training
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Machine learning models that adapt exercise intensity and recovery recommendations based on daily user biometric logs.
                </p>
                <div className="text-[#005F96] font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-900">
                <img
                  src="/images/fitness_blog_3.svg"
                  alt="HIPAA & Privacy Standards for Health & Fitness Applications"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  HIPAA &amp; Privacy Standards for Health &amp; Fitness Applications
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Implementing cryptographic keystores, biometrics, and zero-trust API communications for sensitive user health data.
                </p>
                <div className="text-[#005F96] font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 24. SECTION: Have Personal Fitness App Development Challenge To Address ?? */}
      <section className="relative w-full max-w-full py-10 sm:py-12 lg:py-14 bg-[#005F96] text-white text-center font-sans overflow-hidden">
        {/* Background Floating Geometric Rounded Squares / Rectangles Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-4 left-1/4 w-16 h-16 rounded-xl bg-white/[0.06] -rotate-6" />
          <div className="absolute -bottom-6 left-12 w-28 h-28 rounded-2xl bg-white/[0.05] rotate-12" />
          <div className="absolute top-3 right-1/4 w-36 h-20 rounded-2xl bg-white/[0.06] rotate-3" />
          <div className="absolute bottom-2 right-16 w-24 h-24 rounded-2xl bg-white/[0.04] -rotate-12" />
          <div className="absolute -top-10 right-10 w-40 h-40 rounded-3xl border-8 border-white/[0.05] rotate-45" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8 mx-auto text-center space-y-3.5">
          <h2 className="text-white tracking-tight font-[800] text-2xl sm:text-3xl lg:text-[34px] leading-tight">
            Have Personal Fitness App Development Challenge To Address ??
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
            Get access to top Personal Fitness App development to transform your ideas into a robust application.
          </p>

          <div className="pt-3">
            <a
              href="#quote-form"
              className="inline-block bg-white hover:bg-slate-50 text-[#005F96] font-bold text-xs sm:text-sm px-8 py-2.5 rounded-[4px] shadow-sm hover:shadow-md transition-all duration-200"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalFitnessAppService;
