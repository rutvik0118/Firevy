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
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import UnveilingInnovativeSolutionsVideoSlider from '../home/UnveilingInnovativeSolutionsVideoSlider';
import WhatOurClientsSayClutchSlider from '../home/WhatOurClientsSayClutchSlider';
import OurStoryTheirWordsVideoTestimonialsSlider from '../home/OurStoryTheirWordsVideoTestimonialsSlider';
import SapphireFaqWithStatBadges from '../home/SapphireFaqWithStatBadges';
import WeHaveBeenFeaturedInGrid from '../home/WeHaveBeenFeaturedInGrid';
import WorkTogetherNewsletterSection from '../home/WorkTogetherNewsletterSection';
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
  CheckSquare,
  PhoneCall,
  Percent,
  Share2,
  FileText,
  Play
} from 'lucide-react';

/* Super Ride Taxi – Cab Booking App Video Showcase Component (1:1 Screenshot Match) */
const SuperRideTaxiVideoShowcase = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-16 bg-white border-b border-slate-200 text-slate-900 font-sans">
      <Container>
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[900] text-slate-900 tracking-tight font-sans">
            Super Ride Taxi – Cab Booking App
          </h2>
        </div>

        {/* Video Banner Container with Floating Soft Pastel Background Blobs */}
        <div className="relative max-w-4xl mx-auto px-4">
          
          {/* Top-Left Soft Cyan Blob */}
          <div className="absolute -top-8 -left-6 w-44 h-44 rounded-full bg-[#D4F1F9]/70 blur-xs -z-0 pointer-events-none" />

          {/* Bottom-Right Soft Pink Blob */}
          <div className="absolute -bottom-8 -right-6 w-48 h-48 rounded-full bg-[#FFE5EC]/70 blur-xs -z-0 pointer-events-none" />

          {/* Main Interactive Card */}
          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="relative z-10 rounded-[28px] sm:rounded-[36px] bg-white border-[6px] sm:border-[8px] border-white shadow-2xl overflow-hidden cursor-pointer group hover:shadow-3xl transition-all duration-300"
          >
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[420px] overflow-hidden">
              <img
                src="/images/super_ride_taxi_video_banner_v3.png"
                alt="Super Ride Taxi Cab Booking App"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />

              {/* Center Interactive Translucent Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0080B0]/85 text-white shadow-2xl border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-xs">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Interactive Video Modal Popup */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center font-bold text-lg transition-colors"
            >
              ✕
            </button>

            {/* Video Player Embed */}
            <div className="relative aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Super Ride Taxi - Cab Booking App Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export const UberLikeAppDevelopmentService = () => {
  const [activePanelTab, setActivePanelTab] = useState('rider');
  const [principalTab, setPrincipalTab] = useState('rider');
  const [activeCard, setActiveCard] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // 1:1 Reference Match - Principal Features of Ride-sharing app development Data
  const principalFeatures = {
    rider: {
      left: [
        {
          title: 'Driver Verification',
          icon: ShieldCheck,
          desc: "The driver's data such as name, permit number, and photographs are made accessible to the rider. The driver needs to enter an OTP, which is shipped on rider's number."
        },
        {
          title: 'SOS',
          icon: PhoneCall,
          desc: "SOS is a security highlight in the application that permits riders to send an SMS of threat. The alarm message bears the driver's name, contact, and other information."
        },
        {
          title: 'Promotion Code',
          icon: Percent,
          desc: "Riders are granted exceptional limits for elevating the application to others. After a fruitful advancement, the riders can apply the code and get a markdown on their booking."
        },
        {
          title: 'Share Ride Details',
          icon: Share2,
          desc: "If the budget to ride is low, they can also share with other riders travelling at the same or nearby places. This can be done by selecting an option within the app to share or use personal ride selection."
        }
      ],
      right: [
        {
          title: 'Real Time Tracking',
          icon: Navigation,
          desc: "It uses high-exactness GPS that permits riders to rapidly look into the precise area of close by drivers and also while onboard can track whether they are driven on a right path."
        },
        {
          title: 'Easy Payment',
          icon: CreditCard,
          desc: "Riders can make the installment for their ride by utilizing money, or an assortment of e-wallets. A wide scope of installment choices is vital to draw in an enormous crowd."
        },
        {
          title: 'Fare Estimator',
          icon: FileText,
          desc: "Fare estimator is a valuable component that permits riders to know the expense of their outing before affirming a booking. To get a gauge, the riders need to enter their pickup area and the ride-type."
        }
      ]
    },
    driver: {
      left: [
        {
          title: 'Register',
          icon: FileText,
          desc: "A web interface is introduced to the driver to transfer confirmation archives for enlistment. When the check is finished, the driver can begin offering rides."
        },
        {
          title: 'Booking',
          icon: CheckSquare,
          desc: "New in demand module that allocates on a previously started ride premise. The drivers can see the pickup point and the drop-off area to design their excursion ahead of time."
        },
        {
          title: 'Route',
          icon: Navigation,
          desc: "The drivers can utilize the route highlight to arrive at the rider's area. The driver can choose either the application's in-fabricated route or decide to divert to Google Maps."
        }
      ],
      right: [
        {
          title: 'Booking History',
          icon: Clock,
          desc: "Drivers reserving history is kept for speedy reference. Here the driver can bring insights concerning the status of the multitude of outings, including the dropped ones."
        },
        {
          title: 'Rating & Review',
          icon: Star,
          desc: "The rating and audit area permit the drivers to share their experience i.e., leave remarks about rider's conductor an extraordinary solicitation for certain element expansion."
        },
        {
          title: 'Easy Sign-In/Out',
          icon: User,
          desc: "Once sign in and verified by administration, driver gets access to get offer of rides. This permits them to set up their timetable and exercise the most extreme adaptability."
        },
        {
          title: 'Status',
          icon: FileText,
          desc: "Drivers can send message to rider in case of traffic stuck or any emergency stops on a way to pick up. In addition, they can also chat if rider is not found nearby the pickup spot."
        }
      ]
    },
    admin: {
      left: [
        {
          title: 'Profile Management',
          icon: User,
          desc: "This helps administrator to oversee everything from the rating, survey, history, etc. of all rides for both drivers and riders on the platform. Total rider and driver controller panel."
        },
        {
          title: 'Ride Details',
          icon: FileText,
          desc: "Under ride details, the administrator can pull up the historical backdrop of the multitude of rides alongside the name of drivers and riders.Also can able to see total earns."
        },
        {
          title: 'Transaction Management',
          icon: DollarSign,
          desc: "Payment transaction for administrator to separate reports of absolute acquiring by the business inside a predefined period. This demonstrates help in the resulting strategic plan."
        }
      ],
      right: [
        {
          title: 'Secure Authentication',
          icon: Lock,
          desc: "Drivers are sent a special one-time secret word or OPT through SMS to finish the enrollment and login in order to stay away from bad effectiveness of online business."
        },
        {
          title: 'Manage CMS content',
          icon: Sliders,
          desc: "The administrator can set/change SMTP mail settings, oversee site settings, online media layouts, installment passages, etc. according to his/her one-of-a-kind necessities."
        },
        {
          title: 'Fare Management',
          icon: BarChart3,
          desc: "To see the charges of urban communities depending of the type of vehicle. What could be empowered next that will depend upon the arrival of the week and season of day."
        },
        {
          title: 'Geo-Fencing',
          icon: MapPin,
          desc: "Regardless of whether it's the beginning or cessation in a current region, the administrator can add/eliminate urban communities/areas or states with relative ease."
        }
      ]
    }
  };
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

  // Official Sapphire Taxi Booking App FAQs (Exact 9 Questions matching screenshot 1:1)
  const sapphireFaqs = [
    {
      q: '1. Can taxi app be used for corporate employee to manage their travelling?',
      a: 'Yes, it will be a best way to save your company travelling expenses through a dedicated panel. Your business can also retain and attract more corporate customers.'
    },
    {
      q: '2. How I can get the currency into my local currency?',
      a: 'Our taxi app supports multi-currency and multi-language payment gateways like Stripe, PayPal, and Razorpay so payments auto-convert into your local currency seamlessly.'
    },
    {
      q: '3. How much secure is White label taxi app especially for payment gateways?',
      a: 'All payment transactions are encrypted using PCI-DSS compliant SSL protocols and tokenized security for complete peace of mind.'
    },
    {
      q: '4. Can you set up the modules as per my needs?',
      a: 'Yes! Our white-label taxi app is 100% customizable. We tailor rider, driver, and admin modules according to your precise business requirements.'
    },
    {
      q: '5. Will my taxi booking application be deployed after the development?',
      a: 'Yes, our team handles end-to-end deployment to your Apple App Store, Google Play Store, and web server infrastructure with zero hassle.'
    },
    {
      q: '6. What services does Sapphire Software Solutions offer for taxi booking app development?',
      a: 'We offer complete custom development, white-label taxi dispatch software, real-time GPS tracking integration, driver payout systems, and 24/7 post-launch maintenance.'
    },
    {
      q: '7. Can Sapphire Software Solutions build an Uber-like taxi app for iOS and Android?',
      a: 'Absolutely! We build native iOS (Swift), Android (Kotlin), and cross-platform (Flutter/React Native) taxi booking apps tailored to your target audience.'
    },
    {
      q: '8. How long does it take to develop a custom taxi booking app?',
      a: 'We deliver MVP taxi apps in 8 to 12 weeks, while complex multi-city dispatch platforms take 4 to 6 months.'
    },
    {
      q: '9. Does Sapphire Software Solutions offer white-label taxi booking app solutions?',
      a: 'Yes, we provide 100% white-label taxi booking solutions with complete source code ownership, custom branding, and logo integration.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Uber Like App Development Services | On-Demand Taxi & Mobility Solutions"
        description="Top Uber Like App Development Company in USA. Build a custom white-label taxi booking app, ride sharing platform, and on-demand delivery app like Uber."
        canonical="/services/uber-like-app-development"
      />

      {/* Sapphire Light Hero Banner matching Taxi Booking App 1:1 */}
      <SapphireLightHeroBanner
        title="Taxi Booking App Development Company"
        subtitle="Our dedicated team of taxi app developers has built 50+ taxi and ride-sharing apps. Contact us to give your customers the best possible user experience and expand your revenue with our on-demand taxi booking app development services."
        ctaText="Let's Talk →"
        ctaLink="#quote-form"
        serviceCategory="uber"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* About The Taxi Booking App Solution Section (Exact 1:1 Screenshot Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic: Circular Map + Smartphone Graphic (1:1 Reference Match) */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-[460px] flex items-center justify-center">
                
                {/* Outer Circular Map Graphic Container */}
                <div className="w-[360px] h-[360px] sm:w-[410px] sm:h-[410px] rounded-full bg-gradient-to-br from-[#EAF3FA] via-[#F2F7FC] to-[#E5EFF8] p-4 relative flex items-center justify-center border border-blue-100/60 shadow-inner overflow-hidden">
                  
                  {/* Map Grid Roads Vector Background */}
                  <svg className="absolute inset-0 w-full h-full text-slate-200/90 pointer-events-none" viewBox="0 0 400 400" fill="none">
                    <polygon points="40,60 120,40 160,110 80,140" fill="#DDECF8" opacity="0.6" />
                    <polygon points="220,50 340,80 310,180 200,140" fill="#E2F0FA" opacity="0.6" />
                    <polygon points="60,200 180,180 150,320 50,300" fill="#E2F0FA" opacity="0.6" />
                    <polygon points="220,220 340,200 360,340 240,350" fill="#DDECF8" opacity="0.6" />

                    <path d="M 0 120 Q 200 100 400 150" stroke="#FFFFFF" strokeWidth="16" />
                    <path d="M 120 0 Q 150 200 110 400" stroke="#FFFFFF" strokeWidth="14" />
                    <path d="M 280 0 Q 260 200 310 400" stroke="#FFFFFF" strokeWidth="14" />
                    <path d="M 0 280 Q 200 250 400 300" stroke="#FFFFFF" strokeWidth="16" />

                    <path d="M 30 30 L 370 370" stroke="#FFFFFF" strokeWidth="8" />
                    <path d="M 370 30 L 30 370" stroke="#FFFFFF" strokeWidth="8" />
                  </svg>

                  {/* Floating Elements on Map Circle */}
                  {/* 1. Top-Left Compass / Speedometer Badge */}
                  <div className="absolute top-6 left-12 w-12 h-12 rounded-full bg-slate-800 text-white border-2 border-white shadow-lg flex items-center justify-center z-20">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <polygon points="12 6 15 12 12 18 9 12" fill="#EF4444" stroke="#EF4444" />
                      <circle cx="12" cy="12" r="1.5" fill="white" />
                    </svg>
                  </div>

                  {/* 2. Top-Right Yellow Chat/Speech Bubble Badge */}
                  <div className="absolute top-8 right-14 px-3 py-2 rounded-lg bg-[#FFC107] text-white shadow-md z-20 flex flex-col space-y-1">
                    <div className="w-6 h-1 bg-white/90 rounded-full" />
                    <div className="w-4 h-1 bg-white/90 rounded-full" />
                  </div>

                  {/* 3. Right Blue Navigation Arrow Icon */}
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-9 h-9 rounded-full bg-[#0284C7] text-white shadow-md flex items-center justify-center z-20">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                    </svg>
                  </div>

                  {/* 4. Left Yellow Speech Bubble Badge */}
                  <div className="absolute bottom-28 left-6 p-2.5 rounded-lg bg-[#FFC107] text-white shadow-md z-20 flex flex-col space-y-1">
                    <div className="w-5 h-1 bg-white/90 rounded-full" />
                    <div className="w-3 h-1 bg-white/90 rounded-full" />
                  </div>

                  {/* 5. Orange Pins around map */}
                  <div className="absolute top-24 right-24 text-amber-500 z-10">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>

                  <div className="absolute bottom-16 left-24 text-amber-500 z-10">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>

                  <div className="absolute bottom-8 right-28 text-amber-500 z-10">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>

                  {/* 6. Bottom-Right Crosshair / Target Icon */}
                  <div className="absolute bottom-20 right-12 w-9 h-9 rounded-full bg-slate-800 text-white shadow-md flex items-center justify-center z-20">
                    <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                      <circle cx="12" cy="12" r="7" />
                      <line x1="12" y1="2" x2="12" y2="5" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="5" y2="12" />
                      <line x1="19" y1="12" x2="22" y2="12" />
                    </svg>
                  </div>

                  {/* Central Phone Screen Graphic (1:1 Screenshot Match) */}
                  <div className="relative w-[180px] sm:w-[200px] h-[330px] sm:h-[360px] rounded-[34px] bg-slate-900 border-4 border-slate-900 p-1.5 shadow-2xl overflow-hidden z-30 font-sans">
                    <div className="bg-white text-slate-900 w-full h-full rounded-[26px] flex flex-col justify-between overflow-hidden relative text-center">
                      
                      {/* Top Speaker Notch */}
                      <div className="w-12 h-2 bg-slate-900 rounded-full mx-auto mt-1 z-10" />

                      {/* Phone Display Map Background */}
                      <div className="relative flex-1 bg-gradient-to-b from-[#FFF5ED] via-[#FFEADB] to-[#FCE3D2] flex flex-col items-center justify-center p-3">
                        
                        {/* Soft Concentric Radar Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                          <div className="w-48 h-48 rounded-full border border-orange-300/80" />
                          <div className="w-36 h-36 rounded-full border border-orange-300/80 absolute" />
                          <div className="w-24 h-24 rounded-full border border-orange-300/80 absolute" />
                        </div>

                        {/* Orange Location Pin at top inside screen */}
                        <div className="text-[#E07A5F] mb-1 relative z-10">
                          <svg className="w-8 h-8 fill-current drop-shadow" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                        </div>

                        {/* White Front Taxi Car Graphic */}
                        <div className="w-24 h-16 bg-white rounded-xl shadow-lg border border-orange-200 flex flex-col items-center justify-center p-1.5 relative z-10 mb-6">
                          {/* TAXI Sign */}
                          <div className="w-8 h-2.5 bg-slate-800 rounded-xs flex items-center justify-center text-[5.5px] text-amber-400 font-black mb-0.5">
                            TAXI
                          </div>
                          {/* Car Windshield */}
                          <div className="w-16 h-5 bg-slate-800 rounded-t-sm opacity-90 mb-1" />
                          {/* Headlights */}
                          <div className="w-full flex justify-between px-1">
                            <div className="w-2.5 h-1 bg-amber-400 rounded-xs" />
                            <div className="w-2.5 h-1 bg-amber-400 rounded-xs" />
                          </div>
                        </div>

                        {/* Two Action Buttons: DRIVER APP & RIDER APP (1:1 Reference Match) */}
                        <div className="w-full space-y-2 z-10 px-2">
                          <button className="w-full py-2 rounded-full bg-[#D97736] text-white font-extrabold text-[10px] tracking-wider uppercase shadow-md hover:bg-[#C86A2E] transition-colors">
                            DRIVER APP
                          </button>
                          <button className="w-full py-2 rounded-full bg-white text-[#D97736] font-extrabold text-[10px] tracking-wider uppercase shadow-md hover:bg-slate-50 transition-colors border border-orange-100">
                            RIDER APP
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Content: Title + Paragraphs + CTA Button (1:1 Reference Match) */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                About The Taxi Booking App Solution
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 font-[400] leading-relaxed font-sans">
                <p>
                  We develop a modified stage to serve the various accomplices in the taxi business. The method is performed after iOS, Android, and web stages. As a professional taxi booking mobile app and cab booking app development company, we identify the challenges going on in the way of development and work to improve for the betterment of the production. Our gathering's regional capacity in the taxi stage helped with fitting the necessities into our adequately open flexible design, which has encouraged the application improvement measure. The client expected a structure that could manage a lot of drivers inside a short season of a half year. To gather all accomplices, our gathering proposed an unquestionable online taxi booking application arrangement with three applications, one for the driver, one for the rider, and one for admin, all powered by reliable taxi booking app software.
                </p>
              </div>

              <div className="pt-3">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-[#0080B0] hover:bg-[#006B94] text-white font-[700] text-sm sm:text-base transition-all shadow-md font-sans"
                >
                  Talk To An Expert Now
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* World Wide Top Rated Mobile App Development Company on Clutch Banner (1:1 Reference Match) */}
      <section className="py-7 bg-[#005F96] text-white font-sans overflow-hidden">
        <Container className="max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full">
            {/* Left Header & Golden 3D Trophy Laurel Wreath */}
            <div className="flex items-center space-x-4 text-left shrink-0">
              <h2 className="text-xl sm:text-2xl lg:text-[26px] font-[900] text-white tracking-tight leading-[1.15]">
                World Wide Top Rated<br />
                Mobile App Development<br />
                Company on Clutch
              </h2>
              {/* Golden 3D Trophy Laurel Wreath Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  <defs>
                    <linearGradient id="gold3DGradTaxi" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF176" />
                      <stop offset="40%" stopColor="#FFD700" />
                      <stop offset="75%" stopColor="#FFA000" />
                      <stop offset="100%" stopColor="#FF8F00" />
                    </linearGradient>
                    <linearGradient id="goldCupGradTaxi" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFF9C4" />
                      <stop offset="50%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#E65100" />
                    </linearGradient>
                  </defs>

                  {/* Laurel Wreath Stems */}
                  <path d="M50 80 C32 78 18 64 18 45 C18 30 28 18 42 14" stroke="url(#gold3DGradTaxi)" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M50 80 C68 78 82 64 82 45 C82 30 72 18 58 14" stroke="url(#gold3DGradTaxi)" strokeWidth="3" strokeLinecap="round" fill="none" />

                  {/* Laurel Leaves Left */}
                  <ellipse cx="40" cy="15" rx="3.5" ry="7" transform="rotate(-40 40 15)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="32" cy="22" rx="3.5" ry="7" transform="rotate(-30 32 22)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="25" cy="32" rx="3.5" ry="7" transform="rotate(-15 25 32)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="21" cy="44" rx="3.5" ry="7" transform="rotate(0 21 44)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="22" cy="56" rx="3.5" ry="7" transform="rotate(15 22 56)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="28" cy="67" rx="3.5" ry="7" transform="rotate(30 28 67)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="36" cy="75" rx="3.5" ry="7" transform="rotate(45 36 75)" fill="url(#gold3DGradTaxi)" />

                  {/* Laurel Leaves Right */}
                  <ellipse cx="60" cy="15" rx="3.5" ry="7" transform="rotate(40 60 15)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="68" cy="22" rx="3.5" ry="7" transform="rotate(30 68 22)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="75" cy="32" rx="3.5" ry="7" transform="rotate(15 75 32)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="79" cy="44" rx="3.5" ry="7" transform="rotate(0 79 44)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="78" cy="56" rx="3.5" ry="7" transform="rotate(-15 78 56)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="72" cy="67" rx="3.5" ry="7" transform="rotate(-30 72 67)" fill="url(#gold3DGradTaxi)" />
                  <ellipse cx="64" cy="75" rx="3.5" ry="7" transform="rotate(-45 64 75)" fill="url(#gold3DGradTaxi)" />

                  {/* Bottom Diamond Accent */}
                  <polygon points="50,77 54,81 50,85 46,81" fill="url(#gold3DGradTaxi)" />

                  {/* Center Trophy Cup */}
                  <path d="M38 67 H62 L60 72 H40 Z" fill="url(#goldCupGradTaxi)" />
                  <rect x="42" y="64" width="16" height="3" fill="url(#gold3DGradTaxi)" />
                  <rect x="47" y="55" width="6" height="9" fill="url(#gold3DGradTaxi)" />
                  <path d="M35 28 H65 V46 C65 53 57 58 50 58 C43 58 35 53 35 46 Z" fill="url(#goldCupGradTaxi)" />
                  <ellipse cx="50" cy="28" rx="15" ry="3" fill="#FFFDE7" />
                  <path d="M35 32 C26 32 26 44 35 46" stroke="url(#gold3DGradTaxi)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M65 32 C74 32 74 44 65 46" stroke="url(#gold3DGradTaxi)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Right Award Ribbon & Badge Marquee */}
            <div className="relative overflow-hidden flex-1 min-w-0 w-full">
              <div
                className="flex space-x-3.5 w-max py-1 hover:[animation-play-state:paused]"
                style={{ animation: 'marquee 13s linear infinite' }}
              >
                {[
                  { title: 'IPHONE APP DEVELOPMENT COMPANY', isRed: true },
                  { title: 'TOP MOBILE APP DEVELOPMENT COMPANY', isBlue: true },
                  { title: 'TOP MOBILE APP DEVELOPERS 2022', isClutch: true },
                  { title: 'MOBILE APP DEVELOPMENT COMPANIES', isRed: true },
                  { title: 'APP DEVELOPMENT COMPANY', isRed: true },
                  { title: 'WEB DEVELOPMENT', isRed: true },
                  { title: 'IPHONE APP DEVELOPMENT COMPANY', isRed: true },
                  { title: 'TOP MOBILE APP DEVELOPMENT COMPANY', isBlue: true },
                  { title: 'TOP MOBILE APP DEVELOPERS 2022', isClutch: true },
                  { title: 'MOBILE APP DEVELOPMENT COMPANIES', isRed: true },
                  { title: 'APP DEVELOPMENT COMPANY', isRed: true },
                  { title: 'WEB DEVELOPMENT', isRed: true }
                ].map((badge, idx) => (
                  badge.isBlue ? (
                    /* Blue Round Badge */
                    <div key={idx} className="w-[105px] sm:w-[115px] shrink-0 flex flex-col items-center justify-center p-1.5 bg-white text-slate-900 rounded-full shadow-lg border-2 border-blue-400 text-center cursor-pointer hover:-translate-y-1 transition-transform">
                      <div className="w-full h-full rounded-full bg-blue-50 border border-blue-200 p-2 flex flex-col items-center justify-center">
                        <span className="text-[6.5px] font-bold text-blue-900 uppercase leading-none">TOP MOBILE APP</span>
                        <span className="text-[7.5px] font-black text-blue-600 leading-tight my-0.5 uppercase">DEVELOPMENT</span>
                        <span className="text-[6px] font-bold text-slate-600 uppercase leading-none">COMPANY</span>
                      </div>
                    </div>
                  ) : badge.isClutch ? (
                    /* Hexagonal Clutch Badge */
                    <div key={idx} className="w-[105px] sm:w-[115px] shrink-0 bg-[#1E293B] text-white p-2 rounded-lg border border-cyan-400/40 shadow-lg text-center flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform">
                      <span className="text-[6.5px] font-extrabold text-cyan-300 uppercase">TOP MOBILE APP</span>
                      <span className="text-[12px] font-black text-white leading-tight my-0.5">Clutch</span>
                      <span className="text-[6.5px] font-bold text-slate-300 uppercase">DEVELOPERS 2022</span>
                    </div>
                  ) : (
                    /* Red Ribbon Shield Badge */
                    <div
                      key={idx}
                      className="bg-white text-slate-900 shadow-xl overflow-hidden w-[105px] sm:w-[115px] shrink-0 border-t-[5px] border-[#8C1D40] flex flex-col justify-between p-2.5 pb-4 text-center relative group hover:-translate-y-1 transition-all cursor-pointer"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)' }}
                    >
                      <div className="text-[7.5px] font-bold text-slate-400 uppercase tracking-tight">MOST REVIEWED</div>
                      <div className="text-[8.5px] font-black text-[#8C1D40] leading-tight my-1.5 uppercase min-h-[26px] flex items-center justify-center">
                        {badge.title}
                      </div>
                      <div className="flex items-center justify-center space-x-0.5 my-1 text-[#8C1D40]">
                        <span className="text-[7px]">★</span>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#8C1D40] text-white flex items-center justify-center text-[7px] font-bold">
                          ★
                        </div>
                        <span className="text-[7px]">★</span>
                      </div>
                      <div className="text-[7px] font-extrabold text-slate-400 tracking-tighter uppercase mt-1">
                        THE MANIFEST
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* World Wide Top Rated Mobile App Development Company on Clutch Banner */}

      {/* Principal Features of Ride-sharing app development Section (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-[900] text-slate-900 tracking-tight font-sans">
              Principal Features of Ride-sharing app development
            </h2>
          </div>

          {/* 3 Interactive Tab Pills (Rider App, Driver App, Admin Panel) */}
          <div className="flex justify-center items-center space-x-3 sm:space-x-6 max-w-2xl mx-auto mb-16">
            <button
              onClick={() => setPrincipalTab('rider')}
              className={`flex-1 py-3 px-6 rounded-lg text-sm sm:text-base font-[800] transition-all border ${
                principalTab === 'rider'
                  ? 'bg-[#0080B0] text-white border-[#0080B0] shadow-md'
                  : 'bg-[#EBF4F9] text-[#0080B0] border-[#90CDF4] hover:bg-blue-100/60'
              }`}
            >
              Rider App
            </button>
            <button
              onClick={() => setPrincipalTab('driver')}
              className={`flex-1 py-3 px-6 rounded-lg text-sm sm:text-base font-[800] transition-all border ${
                principalTab === 'driver'
                  ? 'bg-[#0080B0] text-white border-[#0080B0] shadow-md'
                  : 'bg-[#EBF4F9] text-[#0080B0] border-[#90CDF4] hover:bg-blue-100/60'
              }`}
            >
              Driver App
            </button>
            <button
              onClick={() => setPrincipalTab('admin')}
              className={`flex-1 py-3 px-6 rounded-lg text-sm sm:text-base font-[800] transition-all border ${
                principalTab === 'admin'
                  ? 'bg-[#0080B0] text-white border-[#0080B0] shadow-md'
                  : 'bg-[#EBF4F9] text-[#0080B0] border-[#90CDF4] hover:bg-blue-100/60'
              }`}
            >
              Admin Panel
            </button>
          </div>

          {/* 3-Column Grid: Left 4 Features + Center Dual Phone Graphic + Right 3 Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            
            {/* Left Column Features (4 Cards) */}
            <div className="lg:col-span-4 space-y-4">
              {principalFeatures[principalTab].left.map((item, idx) => {
                const IconComp = item.icon;
                const cardId = `left-${idx}`;
                const isSelected = activeCard === cardId;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveCard(cardId)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(cardId)}
                    className={`p-4 rounded-2xl transition-all duration-300 flex items-start space-x-3.5 cursor-pointer group ${
                      isSelected
                        ? 'bg-[#0080B0] text-white shadow-xl scale-[1.02]'
                        : 'bg-white border border-transparent hover:bg-[#0080B0] hover:text-white hover:shadow-xl hover:scale-[1.02]'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all mt-0.5 ${
                        isSelected
                          ? 'bg-white/20 text-white border-white/40'
                          : 'bg-[#EAF5FA] text-[#0080B0] border-blue-100 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40'
                      }`}
                    >
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3
                        className={`text-base sm:text-lg font-[800] leading-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-900 group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-[13px] mt-1.5 leading-relaxed transition-colors ${
                          isSelected ? 'text-sky-100' : 'text-slate-600 group-hover:text-sky-100'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Column: Dual Smartphone / Mockup Graphic (Sticky inside component) */}
            <div className="lg:col-span-4 flex justify-center items-start relative lg:sticky lg:top-28 lg:self-start z-10 py-1 transition-all duration-300">
              
              {/* RIDER APP CENTER MOCKUP */}
              {principalTab === 'rider' && (
                <div className="flex items-center -space-x-10 sm:-space-x-12">
                  {/* Left/Back Phone Screen (Driver Rating & Bill Screen) */}
                  <div className="w-[185px] sm:w-[200px] h-[370px] sm:h-[390px] rounded-[34px] bg-slate-900 border-4 border-slate-900 p-1.5 shadow-xl relative overflow-hidden text-left z-10 opacity-95">
                    <div className="bg-white w-full h-full rounded-[26px] p-3 flex flex-col justify-between text-slate-900 text-[10px] font-sans">
                      <div className="text-center space-y-1 pt-1">
                        <span className="text-[9px] font-bold text-slate-400">Ride Experience</span>
                        <div className="text-xs text-slate-500 font-semibold">Your bill is</div>
                        <div className="text-2xl font-black text-slate-900">₹108</div>
                        <div className="text-[8.5px] text-slate-400">March 25, 2026 at 10:38 am</div>
                      </div>

                      <div className="text-center space-y-1 my-2">
                        <div className="w-9 h-9 rounded-full bg-slate-200 mx-auto font-bold text-[#0080B0] flex items-center justify-center text-[11px] shadow-xs">
                          AG
                        </div>
                        <div className="font-bold text-slate-800 text-[10.5px]">Avinash Gupta</div>
                        <div className="flex justify-center text-amber-400 text-xs">★★★★★</div>
                      </div>

                      <button className="w-full py-2 rounded-lg bg-amber-500 text-white font-black text-[10px] text-center shadow-sm">
                        Submit Rating
                      </button>
                    </div>
                  </div>

                  {/* Right/Front Phone Screen (Live GPS Search & Route Screen) */}
                  <div className="w-[205px] sm:w-[225px] h-[400px] sm:h-[420px] rounded-[38px] bg-slate-900 border-[5px] border-slate-900 p-1.5 shadow-2xl relative overflow-hidden text-left z-20 font-sans">
                    <div className="bg-white text-slate-900 w-full h-full rounded-[30px] flex flex-col justify-between overflow-hidden relative">
                      
                      {/* Status Bar & Greeting Header */}
                      <div className="px-3 pt-2 pb-1 space-y-1 bg-white border-b border-slate-100 z-10">
                        <div className="flex items-center justify-between text-[8px] font-bold text-slate-400 px-1">
                          <span>9:41</span>
                          <div className="w-10 h-2 bg-slate-900 rounded-full mx-auto" />
                          <span>5G 100%</span>
                        </div>
                        <div className="pt-0.5">
                          <div className="text-[10px] font-bold text-slate-800 leading-none">Good morning, Mark</div>
                          <div className="text-[9px] text-slate-400 font-medium">Where are you going?</div>
                        </div>
                      </div>

                      {/* Interactive GPS Map Screen */}
                      <div className="relative flex-1 bg-[#EEF4F8] overflow-hidden p-2">
                        <svg className="absolute inset-0 w-full h-full text-slate-200" viewBox="0 0 200 180" fill="none">
                          <path d="M -10 40 L 210 60" stroke="#FFFFFF" strokeWidth="12" />
                          <path d="M 40 -10 L 60 190" stroke="#FFFFFF" strokeWidth="10" />
                          <path d="M 140 -10 L 130 190" stroke="#FFFFFF" strokeWidth="8" />
                          <path d="M -10 130 C 60 120, 120 150, 210 140" stroke="#FFFFFF" strokeWidth="10" />

                          <path
                            d="M 50 130 L 55 70 Q 60 50 90 55 L 135 60 L 130 130"
                            stroke="#334155"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <circle cx="70" cy="53" r="3" fill="#0F172A" />
                          <circle cx="132" cy="95" r="3" fill="#0F172A" />
                        </svg>

                        <div className="relative z-10 space-y-1.5 pt-1">
                          <div className="bg-white/95 backdrop-blur-xs rounded-lg p-1.5 shadow-sm border border-slate-200/80 flex items-center justify-between">
                            <span className="text-[9px] font-bold text-slate-700">Swastik society &gt;</span>
                          </div>
                          <div className="bg-white/95 backdrop-blur-xs rounded-lg p-1.5 shadow-sm border border-slate-200/80 flex items-center justify-between w-3/4 ml-auto">
                            <span className="text-[8.5px] font-semibold text-slate-600">My Location &gt;</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Choose Car Card */}
                      <div className="bg-white p-2.5 border-t border-slate-200/80 space-y-1.5 z-10">
                        <div className="text-[10px] font-black text-slate-900 leading-none">Choose your car</div>
                        <div className="bg-[#FF9F1C] text-white p-1.5 rounded-lg shadow-xs flex items-center justify-between">
                          <span className="text-[9px] font-black">Standard</span>
                          <span className="text-[7.5px] font-bold">3 MIN</span>
                        </div>
                        <button className="w-full py-1.5 rounded-lg bg-[#FF9F1C] text-white font-black text-[10px] text-center shadow-sm">
                          Confirm Ride
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              )}

              {/* DRIVER APP CENTER MOCKUP (Matching Image 2 1:1) */}
              {principalTab === 'driver' && (
                <div className="flex items-center -space-x-10 sm:-space-x-12">
                  {/* Left/Back Phone Screen (Driver Earnings & Shift Stats Screen) */}
                  <div className="w-[185px] sm:w-[200px] h-[370px] sm:h-[390px] rounded-[34px] bg-slate-900 border-4 border-slate-900 p-1.5 shadow-xl relative overflow-hidden text-left z-10 opacity-95">
                    <div className="bg-white w-full h-full rounded-[26px] p-2.5 flex flex-col justify-between text-slate-900 text-[10px] font-sans">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                        <span className="text-xs font-black text-slate-800">Earning</span>
                        <span className="text-[8px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">Active</span>
                      </div>

                      <div className="my-2 space-y-1">
                        <span className="text-[9px] text-slate-400 font-semibold">Total Revenue</span>
                        <div className="text-xl font-black text-slate-900">$154.75</div>
                        <div className="flex items-end space-x-1 h-16 pt-2 border-b border-slate-100 pb-1">
                          {[40, 65, 30, 85, 50, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 bg-amber-400 rounded-t-xs" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5 text-[8.5px]">
                        <div className="flex justify-between items-center text-slate-600 font-medium">
                          <span>Trips Completed</span>
                          <span className="font-bold text-slate-900">14 Trips</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-600 font-medium">
                          <span>Acceptance Rate</span>
                          <span className="font-bold text-emerald-600">98.5%</span>
                        </div>
                      </div>

                      <div className="w-full py-1.5 rounded-lg bg-slate-800 text-white font-bold text-[9px] text-center shadow-xs">
                        Total Earnings
                      </div>
                    </div>
                  </div>

                  {/* Right/Front Phone Screen (Live Pickup Route & Driver Order Screen - 1:1 Image 2 Match) */}
                  <div className="w-[205px] sm:w-[225px] h-[400px] sm:h-[420px] rounded-[38px] bg-slate-900 border-[5px] border-slate-900 p-1.5 shadow-2xl relative overflow-hidden text-left z-20 font-sans">
                    <div className="bg-white text-slate-900 w-full h-full rounded-[30px] flex flex-col justify-between overflow-hidden relative">
                      
                      {/* Top Status & Destination Input Card (Exact Image 2 Match) */}
                      <div className="p-2 bg-white z-10 space-y-1 border-b border-slate-100">
                        <div className="flex items-center justify-between text-[8px] font-bold text-slate-400 px-1">
                          <span>9:41</span>
                          <div className="w-9 h-2 bg-slate-900 rounded-full mx-auto" />
                          <span>5G</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 flex items-center space-x-1.5 shadow-xs">
                          <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                          <div className="text-[7.5px] font-semibold text-slate-700 leading-tight truncate">
                            1 Ash Park, Pembroke Dock, SA7234, Cleary Lane, Oldham, OL9 9PR
                          </div>
                        </div>
                      </div>

                      {/* Map Section with Pickup Pin & Route */}
                      <div className="relative flex-1 bg-[#F1F5F9] overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full text-slate-300/80" viewBox="0 0 200 180" fill="none">
                          <path d="M -10 30 L 210 50" stroke="#FFFFFF" strokeWidth="14" />
                          <path d="M 60 -10 L 40 190" stroke="#FFFFFF" strokeWidth="12" />
                          <path d="M 150 -10 L 140 190" stroke="#FFFFFF" strokeWidth="10" />
                          <path d="M -10 140 Q 100 130 210 150" stroke="#FFFFFF" strokeWidth="12" />

                          {/* Route line */}
                          <path d="M 50 120 L 52 45 L 140 45 L 140 110" stroke="#475569" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
                        </svg>

                        {/* Blue Pickup Circle */}
                        <div className="absolute top-10 left-[44px] w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-600 z-10">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                        </div>

                        {/* Orange Destination Pin */}
                        <div className="absolute bottom-14 right-[50px] text-amber-500 z-10">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom Dispatch Action Sheet (Exact Image 2 Match) */}
                      <div className="bg-white p-2 border-t border-slate-200/90 space-y-1.5 z-10">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[12px] font-black text-slate-900 leading-none">01:59</div>
                            <div className="text-[7.5px] font-semibold text-slate-400">Waiting for rider</div>
                          </div>
                          <div className="text-right">
                            <div className="text-[9px] font-bold text-slate-800">2 min | 0.5 mi</div>
                            <div className="text-[7px] text-slate-400">Arrived Redetax</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1.5 pt-0.5">
                          <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                            <PhoneCall className="w-3.5 h-3.5" />
                          </div>
                          <button className="flex-1 py-1.5 rounded-lg bg-[#FF9F1C] text-white font-black text-[10px] text-center shadow-xs">
                            Start
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}

              {/* ADMIN PANEL CENTER MOCKUP (Matching Image 3 1:1) */}
              {principalTab === 'admin' && (
                <div className="flex items-center justify-center relative w-full py-2">
                  <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
                    
                    {/* Back Smartphone Graphic */}
                    <div className="absolute top-2 left-0 w-[140px] sm:w-[155px] h-[270px] sm:h-[290px] rounded-[28px] bg-slate-900 border-4 border-slate-900 p-1 shadow-lg overflow-hidden opacity-90 z-10">
                      <div className="bg-white w-full h-full rounded-[22px] p-2 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[7px] font-bold text-slate-400">
                          <span>9:41</span>
                          <span className="text-[#0080B0] font-black">ADMIN APP</span>
                        </div>
                        <div className="relative flex-1 bg-slate-100 rounded-lg my-1 overflow-hidden">
                          <svg className="w-full h-full text-slate-300" viewBox="0 0 100 120" fill="none">
                            <path d="M 10 20 L 90 40" stroke="#FFFFFF" strokeWidth="8" />
                            <path d="M 30 0 L 30 120" stroke="#FFFFFF" strokeWidth="6" />
                            <path d="M 70 0 L 70 120" stroke="#FFFFFF" strokeWidth="6" />
                            <circle cx="30" cy="40" r="4" fill="#0080B0" />
                            <circle cx="70" cy="80" r="4" fill="#FF9F1C" />
                          </svg>
                        </div>
                        <div className="bg-amber-500 text-white py-1 rounded-md text-[8px] font-extrabold text-center">
                          Live Fleet Map
                        </div>
                      </div>
                    </div>

                    {/* Front Laptop / Web Admin Dashboard (Exact Image 3 Match) */}
                    <div className="relative ml-auto w-[240px] sm:w-[270px] z-20">
                      {/* Laptop Screen Bezel */}
                      <div className="bg-slate-900 rounded-t-xl p-2 border-2 border-slate-800 shadow-2xl">
                        <div className="bg-white rounded-lg p-2 font-sans space-y-2 text-slate-900">
                          
                          {/* Web Header */}
                          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                            <div className="flex items-center space-x-1">
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                              <span className="text-[9px] font-black text-slate-800 tracking-tight">Dispatch SuperAdmin</span>
                            </div>
                            <div className="flex items-center space-x-1 text-[7px] text-slate-400 font-medium">
                              <div className="w-3.5 h-3.5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold">
                                SA
                              </div>
                            </div>
                          </div>

                          {/* 3 Metric Cards */}
                          <div className="grid grid-cols-3 gap-1">
                            <div className="bg-amber-50 p-1 rounded-md border border-amber-200/60 text-center">
                              <div className="text-[6.5px] font-bold text-amber-700">Revenue</div>
                              <div className="text-[9px] font-black text-slate-900">$1.5k</div>
                            </div>
                            <div className="bg-blue-50 p-1 rounded-md border border-blue-200/60 text-center">
                              <div className="text-[6.5px] font-bold text-blue-700">Total Rides</div>
                              <div className="text-[9px] font-black text-slate-900">$5.1k</div>
                            </div>
                            <div className="bg-slate-50 p-1 rounded-md border border-slate-200/60 text-center">
                              <div className="text-[6.5px] font-bold text-slate-600">Active Drivers</div>
                              <div className="text-[9px] font-black text-slate-900">120</div>
                            </div>
                          </div>

                          {/* Analytics Section: Circular Donut Chart (52%) + Mini Bar Charts */}
                          <div className="grid grid-cols-12 gap-1.5 items-center bg-slate-50 p-1.5 rounded-md border border-slate-100">
                            {/* 52% Circular Donut Chart (Image 3 Match) */}
                            <div className="col-span-5 flex flex-col items-center justify-center relative py-1">
                              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#FF9F1C" strokeWidth="4" strokeDasharray="52, 100" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center text-[8.5px] font-black text-slate-800">
                                52%
                              </div>
                            </div>

                            {/* Bar Graph */}
                            <div className="col-span-7 space-y-1">
                              <div className="text-[7px] font-bold text-slate-600">Weekly Performance</div>
                              <div className="flex items-end space-x-1 h-7">
                                {[35, 60, 45, 90, 75, 40].map((h, i) => (
                                  <div key={i} className="flex-1 bg-[#FF9F1C] rounded-t-xs" style={{ height: `${h}%` }} />
                                ))}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      {/* Laptop Base Stand */}
                      <div className="w-[270px] sm:w-[300px] h-2.5 bg-slate-700 rounded-b-lg -ml-4 border-t border-slate-600 shadow-md flex justify-center items-center">
                        <div className="w-10 h-0.5 bg-slate-500 rounded-full" />
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>

            {/* Right Column Features (3 Cards) */}
            <div className="lg:col-span-4 space-y-4">
              {principalFeatures[principalTab].right.map((item, idx) => {
                const IconComp = item.icon;
                const cardId = `right-${idx}`;
                const isSelected = activeCard === cardId;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveCard(cardId)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(cardId)}
                    className={`p-4 rounded-2xl transition-all duration-300 flex items-start space-x-3.5 cursor-pointer group ${
                      isSelected
                        ? 'bg-[#0080B0] text-white shadow-xl scale-[1.02]'
                        : 'bg-white border border-transparent hover:bg-[#0080B0] hover:text-white hover:shadow-xl hover:scale-[1.02]'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all mt-0.5 ${
                        isSelected
                          ? 'bg-white/20 text-white border-white/40'
                          : 'bg-[#EAF5FA] text-[#0080B0] border-blue-100 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40'
                      }`}
                    >
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3
                        className={`text-base sm:text-lg font-[800] leading-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-900 group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-[13px] mt-1.5 leading-relaxed transition-colors ${
                          isSelected ? 'text-sky-100' : 'text-slate-600 group-hover:text-sky-100'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </Container>
      </section>

      {/* Our Premium Services 10-Card Section (Moved right below Principal Features) */}
      <PremiumServicesGrid />

      {/* Super Ride Taxi – Cab Booking App Video Showcase Component (1:1 Screenshot Match) */}
      <SuperRideTaxiVideoShowcase />

      {/* Success Stories & Stat Cards (1:1 Taxi Showcase Match) */}
      <SuccessStoriesSection category="taxi" />

      {/* Digital Transformation Case Studies Carousel (1:1 Match to 1st image with peek & 2.5s auto-scroll) */}
      <DigitalTransformationCaseStudies />

      {/* Unveiling Our Innovative Solution Video Slider (17 Videos, Interactive Modal, 3s Auto Scroll) */}
      <UnveilingInnovativeSolutionsVideoSlider />

      {/* Process We Follow - Sapphire 8-Step Timeline (Moved directly below Video Slider) */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from initial blueprinting to UAT, deployment, and ongoing SLA maintenance."
      />

      {/* What Our Clients Say - Clutch Client Reviews Slider (9 Reviews, 2.5s Auto Scroll, 1:1 Match) */}
      <WhatOurClientsSayClutchSlider />

      {/* Sapphire Success Matrix (Moved directly below What Our Clients Say) */}
      <SuccessMatrix />

      {/* Our Story, Their Words Video Testimonials Slider (11 Video Reviews, Interactive Modal, 2.5s Auto Scroll) */}
      <OurStoryTheirWordsVideoTestimonialsSlider />

      {/* Sapphire FAQ with 8 Stat Badges & 3 Review Badges (1:1 Match to Screenshot) */}
      <SapphireFaqWithStatBadges
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        faqs={sapphireFaqs}
      />

      {/* We Have Been Featured In Grid (18 Brand Cards, 1:1 Match to Screenshot) */}
      <WeHaveBeenFeaturedInGrid />

      {/* Hope You Will Provide Us A Chance CTA & Newsletter Subscription Banners (1:1 Match to Screenshot) */}
      <WorkTogetherNewsletterSection />
    </div>
  );
};

export default UberLikeAppDevelopmentService;
