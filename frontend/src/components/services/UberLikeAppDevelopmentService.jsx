import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import SapphireFaqSection, { uberFaqList } from '../common/SapphireFaqSection';
import RecentBlogsSection from '../common/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import HealthcareChallengeCtaBanner from '../common/HealthcareChallengeCtaBanner';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import UberQuoteOverview from '../common/UberQuoteOverview';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import {
  Car,
  Navigation,
  ShieldCheck,
  CreditCard,
  User,
  Users,
  MapPin,
  Clock,
  Smartphone,
  Star,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Lock,
  Headphones,
  Check,
  Shield,
  Truck,
  HeartHandshake,
  Utensils,
  Baby,
  BarChart3,
  DollarSign,
  Bell,
  Sliders,
  CheckSquare
} from 'lucide-react';

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

// 1:1 Reference Match Section 3 SVG Icon Components
const UserRegisterIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="5" width="16" height="26" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M 6 18 H 20 M 15 13 L 20 18 L 15 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CarBookingIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 16 L 13 9 H 23 L 26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="7" y="16" width="22" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="11" cy="21" r="1.8" fill="currentColor" />
    <circle cx="25" cy="21" r="1.8" fill="currentColor" />
    <path d="M 9 26 V 28 M 27 26 V 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="14" y="6" width="8" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const FareCalculationIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="5" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="12" y="9" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="13.5" cy="19.5" r="1.2" fill="currentColor" />
    <circle cx="18" cy="19.5" r="1.2" fill="currentColor" />
    <circle cx="22.5" cy="19.5" r="1.2" fill="currentColor" />
    <circle cx="13.5" cy="24" r="1.2" fill="currentColor" />
    <circle cx="18" cy="24" r="1.2" fill="currentColor" />
    <path d="M 21 23 H 24 M 21 25 H 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DriverTrackingIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="15" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M 22 21 L 28 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M 16 10 C 14.5 10 13.5 11.2 13.5 12.8 C 13.5 15 16 17 16 17 C 16 17 18.5 15 18.5 12.8 C 18.5 11.2 17.5 10 16 10 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="12.8" r="0.8" fill="currentColor" />
  </svg>
);

const PaymentIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="5" width="18" height="26" rx="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="18" cy="16" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M 18 13.5 V 18.5 M 16.5 14.8 H 19 C 19.5 14.8 19.5 16 18 16 C 16.5 16 16.5 17.2 19.5 17.2 H 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 13 25 H 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PushAlertsIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 18 6 C 14 6 11 9 11 14 V 20 L 8 23 H 28 L 25 20 V 14 C 25 9 22 6 18 6 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M 15 26 C 15 27.5 16.5 29 18 29 C 19.5 29 21 27.5 21 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M 18 3 V 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 1:1 Reference Match Section 4 Uber For On-Demand Businesses SVG Icons
const UberDeliveryBusinessIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="10" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="14" cy="19" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 14 17 V 21 M 12.8 18 H 15.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 23 14 H 29 V 24 C 29 25.5 28 26 26.5 26 H 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const UberTransportationIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 6 12 H 20 V 24 H 6 Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M 20 16 H 26 L 29 20 V 24 H 20 Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="11" cy="24" r="2" fill="currentColor" />
    <circle cx="24" cy="24" r="2" fill="currentColor" />
  </svg>
);

const UberFemaleSafetyIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 18 5 L 29 9.5 V 19 C 29 25.5 18 30.5 18 30.5 C 18 30.5 7 25.5 7 19 V 9.5 L 18 5 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <circle cx="18" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 14 22 C 14 19.5 16 18 18 18 C 20 18 22 19.5 22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const UberCloudKitchenIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 11 23 C 8 23 6 20.5 6 18 C 6 15.5 8 13.5 10.5 13.5 C 11.5 10 14.5 8 18 8 C 22.5 8 26 11 26 15 C 28.5 15 30 17 30 19.5 C 30 22 28 23 25.5 23 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
  </svg>
);

const UberChildSafetyIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 7 17 C 7 11 18 6 18 6 C 18 6 29 11 29 17 H 7 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M 18 17 V 27 C 18 29 16 30 14.5 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const UberCaregiversIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 18 13 C 16.5 10 12 10 10.5 13 C 9 16 11.5 19 18 24 C 24.5 19 27 16 25.5 13 C 24 10 19.5 10 18 13 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M 7 24 C 11 28 14 29 18 29 C 22 29 25 28 29 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export const UberLikeAppDevelopmentService = () => {
  const [activePanelTab, setActivePanelTab] = useState('rider');
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Taxi & Ride Hailing App',
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

  // 3 Key Panels matching Sapphire Solutions Uber-Like App (Exact 1:1 Reference Match - 6 Cards Per Panel)
  const panelFeatures = {
    rider: [
      {
        title: 'User Register & Sign In',
        icon: UserRegisterIcon,
        desc: 'The app allows users to join Facebook, Twitter, Instagram, and other prominent social media networks.'
      },
      {
        title: 'Car Booking',
        icon: CarBookingIcon,
        desc: 'The app displays customers an interactive map, defines the pickup place, chooses the kind of cab, and so on.'
      },
      {
        title: 'Fare Calculation',
        icon: FareCalculationIcon,
        desc: 'A pre-trip pricing check is available to passengers as a standard feature of most transportation services.'
      },
      {
        title: 'Driver Tracking',
        icon: DriverTrackingIcon,
        desc: 'The users can track the drivers to decide how much longer it will take before it arrives.'
      },
      {
        title: 'Payment',
        icon: PaymentIcon,
        desc: 'Users can make payments using credit and debit cards, mobile payment services such as PayPal, Android Pay, and Apple Pay within the app.'
      },
      {
        title: 'Push Alerts',
        icon: PushAlertsIcon,
        desc: 'The push alert keeps consumers updated on the trip request, vehicle time, the driver, and any other relevant information.'
      }
    ],
    driver: [
      {
        title: 'Trip Requests',
        icon: PushAlertsIcon,
        desc: 'Drivers receive real-time notifications for nearby ride requests and can accept or decline trips.'
      },
      {
        title: 'Route Navigation',
        icon: CarBookingIcon,
        desc: 'Built-in GPS map turn-by-turn navigation guides drivers along the fastest route to pickup and drop-off points.'
      },
      {
        title: 'Driver Documents',
        icon: UserRegisterIcon,
        desc: 'Drivers can upload and manage their personal documents, vehicle registration, and driver licenses easily.'
      },
      {
        title: 'Earnings Report',
        icon: PaymentIcon,
        desc: 'Drivers can view daily, weekly, and monthly earnings breakdowns, tips, and direct bank payouts.'
      },
      {
        title: 'Driver Rating',
        icon: DriverTrackingIcon,
        desc: 'Passengers rate driver performance and leave feedback after every trip to maintain high service standards.'
      },
      {
        title: 'Driver Support',
        icon: PushAlertsIcon,
        desc: 'Dedicated 24/7 in-app support hotline and emergency assistance button for drivers on duty.'
      }
    ],
    admin: [
      {
        title: 'Central Dashboard',
        icon: CarBookingIcon,
        desc: 'Super admin can monitor live taxi dispatches, active drivers, rider activity, and total daily revenue.'
      },
      {
        title: 'Driver Management',
        icon: UserRegisterIcon,
        desc: 'Verify driver credentials, manage vehicle licenses, inspect background documents, and control active status.'
      },
      {
        title: 'Rider Management',
        icon: DriverTrackingIcon,
        desc: 'View customer profiles, ride histories, feedback ratings, and manage user account permissions.'
      },
      {
        title: 'Fare & Surge Control',
        icon: FareCalculationIcon,
        desc: 'Configure base fares, distance rates, peak surge multipliers, and promo codes across operating cities.'
      },
      {
        title: 'Analytics & Reports',
        icon: PaymentIcon,
        desc: 'Generate real-time business performance analytics, trip logs, commission payouts, and customer reports.'
      },
      {
        title: 'Notification Center',
        icon: PushAlertsIcon,
        desc: 'Send broadcast push notifications, promotional discounts, and system alerts to riders and drivers.'
      }
    ]
  };

  // 6 Niche Uber Mobility Business Solutions (Exact 1:1 Sapphire Reference Match)
  const nicheSolutions = [
    {
      title: 'Uber For Delivery Business',
      icon: UberDeliveryBusinessIcon,
      desc: 'Our Uber for delivery app helps users send any kind of package to any destination. Delivery businesses can use the app, packers and movers, eCommerce businesses, and other courier service providers to make a digital presence.'
    },
    {
      title: 'Uber For Transportation',
      icon: UberTransportationIcon,
      desc: 'We develop the Uber app for female safety that solely hires female drivers and only allows women and kids to ride along as passengers.'
    },
    {
      title: 'Uber For Female Safety',
      icon: UberFemaleSafetyIcon,
      desc: 'Businesses can run ads to help users know about the latest offerings and earn money'
    },
    {
      title: 'Uber For Cloud Kitchen',
      icon: UberCloudKitchenIcon,
      desc: 'The user for cloud kitchen allows the business to run their cloud kitchen and enables users to order from nearby restaurants and pay directly to have food delivered.'
    },
    {
      title: 'Uber For Child Safety',
      icon: UberChildSafetyIcon,
      desc: 'You can launch an Uber for child safety app to provide kid-focused ride-sharing service and offer a straightforward riding environment.'
    },
    {
      title: 'Uber For Caregivers',
      icon: UberCaregiversIcon,
      desc: 'Using Uber for caregivers, the app can search for verified caregivers, nurses, and domestic help, make bookings and submit payments.'
    }
  ];

  // Comparative Analysis (1:1 Sapphire Reference Table Match)
  const comparativeTableData = [
    { metric: 'Time to get right developers', sapphire: '1 day – 2 weeks', inHouse: '4 – 12 weeks', freelance: '1 – 12 weeks' },
    { metric: 'Time to start a project', sapphire: '1 day – 2 weeks', inHouse: '2 – 10 weeks', freelance: '1 – 10 weeks' },
    { metric: 'Recurring cost of training & benefits', sapphire: '-', inHouse: '$10,000 – $25,000', freelance: '-' },
    { metric: 'Time to scale size of team', sapphire: '48 hours – 1 week', inHouse: '4 – 16 weeks', freelance: '1 – 12 weeks' },
    { metric: 'Pricing (weekly average)', sapphire: '1.5X', inHouse: '2X', freelance: '1X' },
    { metric: 'Project failure risk', sapphire: 'Extremely low, we have 98% success ratio', inHouse: 'Low', freelance: 'Very High' },
    { metric: 'Developers backed by a delivery team', sapphire: 'Yes', inHouse: 'Some', freelance: 'No' },
    { metric: 'Dedicated resources', sapphire: 'Yes', inHouse: '-', freelance: 'Some' },
    { metric: 'Quality Guarantee', sapphire: 'Yes', inHouse: 'High', freelance: 'High' },
    { metric: 'Assured work rigor', sapphire: 'Yes', inHouse: 'Some', freelance: 'No' },
    { metric: 'Tools and professional environment', sapphire: 'Yes', inHouse: 'High', freelance: 'Uncertain' }
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

  // Rich Technology Categories for Tech Stack Grid
  const techCategories = {
    backend: [
      { name: '.NET', desc: 'Enterprise server framework for high-throughput taxi dispatch and payment processing engines.' },
      { name: 'Node.js', desc: 'Asynchronous event-driven runtime powering real-time WebSockets GPS location tracking.' },
      { name: 'Java', desc: 'Scalable backend language executing automated driver matching algorithms and ride calculations.' },
      { name: 'PHP', desc: 'Robust server-side framework managing central admin portals and billing engines.' },
      { name: 'Ruby on Rails', desc: 'Rapid MVP deployment framework for on-demand delivery and taxi booking portals.' }
    ],
    frontend: [
      { name: 'Kotlin (Android)', desc: 'Native Android app development ensuring smooth Google Maps SDK rendering and offline GPS.' },
      { name: 'RxJava & RxKotlin', desc: 'Reactive extension libraries handling smooth async location streams during live rides.' },
      { name: 'Java', desc: 'Enterprise native Android component execution for background driver location tracking.' },
      { name: 'Coroutines Kotlin', desc: 'Lightweight concurrency framework ensuring zero UI lag during driver navigation.' }
    ],
    database: [
      { name: 'PostgreSQL & PostGIS', desc: 'Spatial database storing geo-location coordinates and geospatial polygon queries.' },
      { name: 'Firebase', desc: 'Real-time database and push notification service for instant ride alerts and driver triggers.' },
      { name: 'SQLite & CoreData', desc: 'Embedded mobile database for offline trip logs and local map caching.' },
      { name: 'Realm', desc: 'Ultra-fast mobile database providing instant multi-device sync for driver trip acceptance.' }
    ],
    devops: [
      { name: 'CI/CD Pipelines', desc: 'Automated release pipelines guaranteeing zero downtime during peak rider hours.' },
      { name: 'GitHub Actions', desc: 'Continuous code audit workflows checking security, linting, and API health.' },
      { name: 'AWS Cloud', desc: 'Auto-scaling AWS EC2, Elastic Load Balancers, and Redis caching for ride spikes.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile test automation verifying rider and driver trip flows.' },
      { name: 'BrowserStack', desc: 'Real-device cloud matrix testing GPS performance across 500+ mobile devices.' },
      { name: 'Katalon Studio', desc: 'Automated API and payment gateway security testing suite.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management platform tracking feature backlogs and dispatch bugs.' },
      { name: 'Slack', desc: 'Real-time client communication channel with senior mobility engineers.' },
      { name: 'Microsoft Teams', desc: 'Weekly sprint demo reviews and architectural video check-ins.' },
      { name: 'Trello', desc: 'Visual Kanban boards for UI/UX wireframe approvals.' }
    ]
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Uber Like App Development Services | On-Demand Taxi & Mobility Solutions"
        description="Top Uber Like App Development Company in USA. Build a custom white-label taxi booking app, ride sharing platform, and on-demand delivery app like Uber."
        canonical="/services/uber-like-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Uber Like App Development Services in USA"
        subtitle="Rapidly transforming urban mobility, White Label Custom Uber Like App Development Services empower ride hailing businesses and taxi fleets with real-time GPS dispatch, driver allocation, fare estimation, and 1-tap booking."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="uber"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* Review & Ratings Bar */}
      <section className="py-6 bg-[#F8FAFC] border-b border-slate-200 text-slate-900 font-sans">
        <Container>
          <div className="flex flex-wrap items-center justify-around gap-6 text-center">
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>900+ GOOGLE REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">4.9 / 5.0 Rating</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>320+ CLUTCH REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Top Mobility App Developer</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>200+ GOODFIRMS REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Verified On-Demand IT Partner</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Get Fully Customized White Labelled Uber-Like Apps (Dual Mobile Phone UI Layout 1:1 Sapphire Match) */}
      <section id="panels-section" className="py-16 md:py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2
              className="text-slate-900 tracking-tight section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: '34px',
                lineHeight: '41px'
              }}
            >
              Get Fully Customized White Labelled Uber-Like Apps
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
              Our uber like app development company understands how to make an app like Uber and what it takes to establish a taxi app. Whether you own a small or large taxi startup firm, on demand taxi booking app developers provides taxi app solution can benefit your business. We can create a taxi app and <span className="font-bold text-[#005F96]">audio streaming app like Spotify</span> to provide on-demand towing app development like uber to help you skyrocket your business.
            </p>

            {/* 3 Main Panel Pill Tabs */}
            <div className="flex justify-center space-x-4 pt-4 max-w-2xl mx-auto">
              <button
                onClick={() => setActivePanelTab('rider')}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-extrabold transition-all border ${
                  activePanelTab === 'rider'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96]/40 hover:bg-slate-50'
                }`}
              >
                Uber for Riders
              </button>
              <button
                onClick={() => setActivePanelTab('driver')}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-extrabold transition-all border ${
                  activePanelTab === 'driver'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96]/40 hover:bg-slate-50'
                }`}
              >
                Uber for Driver
              </button>
              <button
                onClick={() => setActivePanelTab('admin')}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-extrabold transition-all border ${
                  activePanelTab === 'admin'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96]/40 hover:bg-slate-50'
                }`}
              >
                Uber for Admin
              </button>
            </div>
          </div>

          {/* Dual Phone Layout + Left 3 Cards + Right 3 Cards (Exact 1:1 Reference Match) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto pt-6">
            {/* Left 3 Feature Cards */}
            <div className="lg:col-span-4 space-y-8 sm:space-y-10">
              {panelFeatures[activePanelTab].slice(0, 3).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD]/60 flex items-center justify-center text-[#005F96] shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <IconComp className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 font-sans group-hover:text-[#005F96] transition-colors">{item.title}</h3>
                      <p className="text-xs sm:text-[14px] text-slate-600 leading-[1.65] font-normal font-sans">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Dual Mobile Phone Screens (1:1 Sapphire Visual Mockup) */}
            <div className="lg:col-span-4 flex items-center justify-center relative py-4">
              <div className="flex items-center -space-x-8 sm:-space-x-10">
                {/* Phone 1: Rider Map Screen */}
                <div className="w-[210px] sm:w-[225px] h-[430px] sm:h-[450px] rounded-[38px] bg-slate-900 border-[5px] border-slate-800 p-2 shadow-2xl relative overflow-hidden text-left z-20">
                  <div className="bg-white w-full h-full rounded-[30px] p-3 flex flex-col justify-between text-slate-900 text-[10px]">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                        <span>9:41</span>
                        <span>5G 100%</span>
                      </div>
                      <div className="font-bold text-slate-800 text-[11px]">Good morning, Mark</div>
                      <div className="text-slate-400 font-semibold text-[10px]">Where are you going?</div>
                    </div>

                    {/* Live GPS Map Representation */}
                    <div className="my-1.5 h-44 bg-blue-50/80 rounded-xl border border-blue-100 relative p-2 overflow-hidden flex flex-col justify-between">
                      <div className="absolute inset-0 bg-[radial-gradient(#005F96_1px,transparent_1px)] [background-size:10px_10px] opacity-25" />
                      <div className="w-full text-center text-[#005F96] font-bold text-[9.5px] z-10 bg-white/90 py-0.5 rounded shadow-sm border border-blue-100">Swastik Society ➔</div>
                      
                      {/* Cab icon & route pin */}
                      <div className="relative h-20 my-auto z-10 flex items-center justify-between px-2">
                        <div className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-[8px] shadow-md">📍</div>
                        <div className="flex-1 border-b-2 border-dashed border-[#005F96] mx-1 relative">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-slate-900 text-[7px] font-black px-1 rounded">🚖 3 MIN</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-[#005F96] text-white flex items-center justify-center font-bold text-[8px] shadow-md">🏁</div>
                      </div>

                      <div className="w-full flex justify-between items-center text-[9px] font-bold text-slate-700 z-10">
                        <span className="bg-amber-400 text-slate-900 px-1.5 py-0.5 rounded font-black shadow-xs">Standard ₹133</span>
                        <span className="text-slate-500">Comfort ₹170</span>
                      </div>
                    </div>

                    {/* Bottom Car Selection & Confirm Button */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[9px] text-slate-500 font-semibold px-0.5">
                        <span>Payment: <strong className="text-slate-800">💵 Cash</strong></span>
                        <span className="text-[#005F96] font-bold cursor-pointer">Change ›</span>
                      </div>
                      <button className="w-full py-2 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white font-extrabold text-xs text-center shadow-md">
                        Confirm Ride
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone 2: Driver Bill & Rating Screen */}
                <div className="w-[195px] sm:w-[205px] h-[395px] sm:h-[415px] rounded-[34px] bg-slate-900 border-[5px] border-slate-800 p-2 shadow-xl relative overflow-hidden text-left z-10">
                  <div className="bg-white w-full h-full rounded-[26px] p-3 flex flex-col justify-between text-slate-900 text-[10px]">
                    <div className="text-center space-y-0.5">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Ride Experience</span>
                      <div className="text-[10px] text-slate-500 font-medium">Your bill is</div>
                      <div className="text-2xl font-black text-slate-900 leading-none py-1">₹108</div>
                      <div className="text-[8.5px] text-slate-400 font-medium">March 25, 2026 at 10:38 am</div>
                    </div>

                    <div className="text-center space-y-1 py-1 border-y border-slate-100 my-1">
                      <div className="w-8 h-8 rounded-full bg-[#005F96] text-white mx-auto font-bold flex items-center justify-center text-[10px] shadow-sm">AG</div>
                      <div className="font-bold text-slate-800 text-[10px]">Avinash Gupta</div>
                      <div className="flex justify-center text-amber-400 text-xs">★★★★★</div>
                      <p className="text-[8px] text-slate-400">Great driver? Consider giving a tip.</p>
                      
                      <div className="flex justify-center gap-1 pt-0.5">
                        <span className="px-2 py-0.5 rounded border border-slate-200 text-[8.5px] font-bold text-slate-600">₹10</span>
                        <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-300 text-[8.5px] font-bold text-amber-800">₹15</span>
                        <span className="px-2 py-0.5 rounded border border-slate-200 text-[8.5px] font-bold text-slate-600">₹20</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <input
                        type="text"
                        readOnly
                        value="Type your review..."
                        className="w-full text-[8.5px] text-slate-400 border border-slate-200 rounded px-2 py-1 bg-slate-50"
                      />
                      <button className="w-full py-1.5 rounded-lg bg-[#F59E0B] text-white font-extrabold text-[10px] text-center shadow-sm">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3 Feature Cards */}
            <div className="lg:col-span-4 space-y-8 sm:space-y-10">
              {panelFeatures[activePanelTab].slice(3, 6).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD]/60 flex items-center justify-center text-[#005F96] shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <IconComp className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 font-sans group-hover:text-[#005F96] transition-colors">{item.title}</h3>
                      <p className="text-xs sm:text-[14px] text-slate-600 leading-[1.65] font-normal font-sans">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: Uber For On-Demand Businesses (6 Niche Solutions - 1:1 Sapphire Reference Match) */}
      <section className="py-16 md:py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2
              className="text-slate-900 tracking-tight section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: '34px',
                lineHeight: '41px'
              }}
            >
              Uber For On-Demand Businesses
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
              Whether you are looking to start a cloud kitchen business, <span className="font-bold text-[#005F96]">food delivery app development like zomato</span> or your own cab booking app, our Uber for on-demand businesses app will allow businesses to create a strong digital presence and stay engaged with their customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {nicheSolutions.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-start group"
                >
                  {/* Light Cyan Pastel Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD]/60 flex items-center justify-center text-[#005F96] mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <IconComp className="w-7 h-7" />
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
        </Container>
      </section>

      {/* Unveiling Our Innovative Solution - Auto Moving Video Slider Section */}
      <InnovativeVideoSlider />

      {/* Success Stories & Stat Cards */}
      <SuccessStoriesSection category="uber" />

      {/* Our Premium Services 10-Card Section */}
      <PremiumServicesGrid />

      {/* Section 5: Comparative Analysis (Exact 1:1 Sapphire Reference Table Match) */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200 text-left font-sans">
        <Container className="max-w-5xl">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2
              className="text-slate-900 tracking-tight section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: '34px',
                lineHeight: '41px'
              }}
            >
              Comparative Analysis
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
              We provide tailored, robust, scalable and secure Android development solutions that delight users and deliver engagement.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="text-sm font-bold">
                    <th className="p-4 sm:p-5 bg-white w-1/4 border-b border-slate-200"></th>
                    <th className="p-4 sm:p-5 bg-[#005F96] text-white text-center w-1/4 font-extrabold text-sm sm:text-base border-b border-[#005F96]">
                      Sapphire Software Solutions
                    </th>
                    <th className="p-4 sm:p-5 bg-[#9E9E9E] text-white text-center w-1/4 font-extrabold text-sm sm:text-base border-b border-[#9E9E9E]">
                      In-House
                    </th>
                    <th className="p-4 sm:p-5 bg-[#D6D6D6] text-slate-900 text-center w-1/4 font-extrabold text-sm sm:text-base border-b border-[#D6D6D6]">
                      Freelance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-medium">
                  {comparativeTableData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="p-4 sm:p-5 font-bold text-slate-800 border-r border-slate-200">
                        {row.metric}
                      </td>
                      <td className="p-4 sm:p-5 text-center font-semibold text-slate-900 bg-blue-50/20 border-r border-slate-200">
                        {row.sapphire}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-slate-700 border-r border-slate-200">
                        {row.inHouse}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-slate-700">
                        {row.freelance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Consultation Button */}
          <div className="text-center mt-10">
            <a
              href="#quote-form"
              className="inline-block px-8 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004b78] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-lg font-sans cursor-pointer"
            >
              Get Your Free Consultation
            </a>
          </div>
        </Container>
      </section>

      {/* Our Story, Their Words - Client Video Testimonials Slider Section */}
      <ClientStoryVideoSlider />

      {/* Frequently Asked Questions - Sapphire Signature 2-Column FAQ Section */}
      <SapphireFaqSection faqList={uberFaqList} />

      {/* Technology Stack We Use For Uber Like App Development Section */}
      <SapphireTechStackGrid domainName="Uber-like app" richTechCategories={techCategories} />

      {/* What Our Clients Say / Clutch Client Testimonials Slider Section */}
      <ClientReviewsDarkSection />

      {/* Get Uber-Like App Development With 100% Guaranteed Success Section */}
      <UberQuoteOverview />

      {/* Have Uber Like App Development Challenge To Address CTA Banner Section */}
      <HealthcareChallengeCtaBanner
        title="Have Uber-Like App development Challenge To Address ?"
        subtitle="Get access to top Uber-Like App development to transform your ideas into a robust application."
        buttonText="Hire Now"
      />

      {/* Subscribe us and Get the latest updates and news */}
      <NewsletterSubscribeBanner />

    </div>
  );
};

export default UberLikeAppDevelopmentService;
