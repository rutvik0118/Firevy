import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  // 3 Key Panels matching Sapphire Solutions Uber-Like App
  const panelFeatures = {
    rider: [
      { title: 'User Register & Sign In', desc: 'Allows users to sign up via social accounts (Google, Facebook, Apple) or mobile OTP instantly.' },
      { title: 'Interactive Car Booking', desc: 'Displays an interactive live map, pickup location pin, cab categories (Economy, Luxury, SUV), and ETA.' },
      { title: 'Fare Calculation', desc: 'Pre-trip transparent fare check available to passengers before confirming their ride request.' },
      { title: 'Real-time Driver Tracking', desc: 'Riders track driver movement on live GPS map with exact arrival countdown and route navigation.' },
      { title: 'In-App Multi-Payment', desc: 'Seamless payments using credit/debit cards, Apple Pay, Google Pay, PayPal, and cash wallets.' },
      { title: 'Instant Push Alerts', desc: 'Keeps passengers updated on ride dispatch, driver arrival, trip start, and digital invoices.' }
    ],
    driver: [
      { title: 'Dynamic Fare Management', desc: 'Drivers view dynamic pricing based on surge zones, peak hours, and location distance.' },
      { title: 'Interactive Driver Dashboard', desc: 'One-stop dashboard to monitor trip requests, completed rides, pending earnings, and ratings.' },
      { title: 'In-App Revenue Breakdown', desc: 'Drivers access daily, weekly, and monthly net profit reports and commission breakdowns.' },
      { title: 'Ride Request Notifications', desc: 'Instant trip dispatch alerts allowing drivers to accept or decline rides within 15 seconds.' },
      { title: 'Direct Bank Account Deposit', desc: 'Drivers link bank accounts within the app to receive automated weekly or instant payouts.' },
      { title: 'Profile & Vehicle Control', desc: 'Manage driver licenses, vehicle registration documents, insurance, and active status.' }
    ],
    admin: [
      { title: 'One-Stop Central Dashboard', desc: 'Super Admin monitors all live rides, active drivers, riders, trip revenue, and city heat maps.' },
      { title: 'Driver Document Verification', desc: 'Review and approve driver licenses, vehicle background checks, and fleet compliance.' },
      { title: 'Ad & Surge Revenue Control', desc: 'Manage in-app banner ads, surge multipliers, promotional promo codes, and commission rates.' },
      { title: 'User & Rider Management', desc: 'Manage system-registered riders and drivers with complete account suspension or audit tools.' },
      { title: 'Vehicle Fleet Reports', desc: 'Generate real-time telemetry analytics, fuel expenditure, fleet maintenance, and ride logs.' },
      { title: 'Role-Based Access Control', desc: 'Assign granular admin permissions for dispatch operators, billing managers, and support leads.' }
    ]
  };

  // 6 Niche Uber Mobility Business Solutions (Sapphire Exact)
  const nicheSolutions = [
    {
      title: 'Uber For Delivery & Logistics',
      icon: Truck,
      desc: 'Enables users to send packages, parcels, and freight across cities. Perfect for packers & movers, courier firms, and eCommerce brands.'
    },
    {
      title: 'Uber For Fleet & Taxi Business',
      icon: Car,
      desc: 'Complete white-label taxi dispatch software with automated trip routing, surge pricing, and corporate dispatch management.'
    },
    {
      title: 'Uber For Female Safety',
      icon: Shield,
      desc: 'Specialized ride-hailing app employing verified female drivers exclusively for female passengers and children with SOS triggers.'
    },
    {
      title: 'Uber For Cloud Kitchen & Food',
      icon: Utensils,
      desc: 'Allows cloud kitchens and restaurant chains to dispatch on-demand food deliveries with real-time driver tracking.'
    },
    {
      title: 'Uber For Child Safety Rides',
      icon: Baby,
      desc: 'Kid-focused ride-sharing service featuring verified drivers, live camera feeds, and real-time parent location monitoring.'
    },
    {
      title: 'Uber For Caregivers & Healthcare',
      icon: HeartHandshake,
      desc: 'On-demand platform matching patients and elderly families with verified home caregivers, nurses, and medical helpers.'
    }
  ];

  // Comparative Analysis (Sapphire Custom vs Standard Off-the-shelf)
  const comparativeFeatures = [
    { feature: '100% Source Code Ownership', custom: true, standard: false },
    { feature: 'Custom Brand UI/UX & White Label', custom: true, standard: false },
    { feature: 'Real-time WebSockets GPS Engine', custom: true, standard: true },
    { feature: 'Surge Pricing & Heat Map Analytics', custom: true, standard: false },
    { feature: 'Multi-Payment & Wallet Integration', custom: true, standard: true },
    { feature: 'Zero Monthly Revenue Royalty Fees', custom: true, standard: false }
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

  // Official Sapphire Uber-Like App FAQs
  const sapphireFaqs = [
    {
      q: '1. How tailored will the app be to my business?',
      a: 'Not by supplying generic off-the-shelf scripts, but by engineering 100% white-label custom solutions have we earned the title of top On-demand app development company. Every application we design is 100% customized to your brand image, color palette, logo, and business workflow.'
    },
    {
      q: '2. What is the scope of your mobility solutions in Uber-Like App Development?',
      a: 'Our mobility solutions cover ride-hailing taxi apps, parcel delivery dispatch, cloud kitchen food delivery, female safety rides, child safety transit, and caregiver booking platforms. We build cross-platform solutions for iOS, Android, and Web.'
    },
    {
      q: '3. Do you provide complete source code and documentation?',
      a: 'Yes, we provide 100% source code ownership and end-to-end technical documentation, architectural blueprints, and API guides for all solutions developed by our engineering team.'
    },
    {
      q: '4. Can you distribute my mobile app to the Play Store and App Store?',
      a: 'Yes! We handle the entire publication process, including Apple App Store and Google Play Store submission guidelines, review approvals, and zero-downtime deployment.'
    },
    {
      q: '5. What technologies do you use for ride-sharing app development?',
      a: 'We use Node.js, WebSockets, Flutter, React Native, Kotlin, Swift, PostGIS PostgreSQL, Firebase, and AWS Cloud to ensure sub-second GPS tracking, high scalability, and bank-grade data encryption.'
    },
    {
      q: '6. What makes Sapphire Software Solutions a trusted Uber-like app developer?',
      a: 'With 23+ years of IT expertise, 1,500+ successful projects, and 2,800+ global clients across USA, UK, UAE, and Canada, we deliver robust, high-performance mobility apps backed by 24/7 SLA support.'
    },
    {
      q: '7. What features are included in your Uber clone app solutions?',
      a: 'Our Uber clone apps include rider booking, driver dispatch, real-time GPS tracking, surge pricing, fare estimation, multi-payment gateways, ratings & reviews, heat maps, and a central super admin dashboard.'
    },
    {
      q: '8. How long does it take to build a custom Uber-like app?',
      a: 'We typically deliver an MVP within 10–12 weeks, and a full enterprise multi-city dispatch solution within 4 to 6 months.'
    },
    {
      q: '9. What engagement models do you offer for Uber-like app projects?',
      a: 'We offer flexible models including Dedicated Developer Teams, Fixed Price Contracts, Time & Material hourly contracts, and SLA Maintenance Buckets.'
    }
  ];

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
      <section id="panels-section" className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get Fully Customized White Labelled Uber-Like Apps
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Our Uber-like app development company understands how to make an app like Uber and what it takes to establish a successful on-demand mobility platform.
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

          {/* Dual Phone Layout + Left 3 Cards + Right 3 Cards (Exact Screenshot 1:1) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto pt-6">
            {/* Left 3 Feature Cards */}
            <div className="lg:col-span-4 space-y-6">
              {panelFeatures[activePanelTab].slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-cyan-100/80 text-[#005F96] shrink-0 border border-cyan-200 shadow-sm">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Dual Mobile Phone Screens (1:1 Sapphire Visual Mockup) */}
            <div className="lg:col-span-4 flex items-center justify-center relative py-4">
              <div className="flex items-center -space-x-8">
                {/* Phone 1: Rider Map Screen */}
                <div className="w-[200px] h-[400px] rounded-[36px] bg-slate-900 border-4 border-slate-800 p-2 shadow-2xl relative overflow-hidden text-left z-20">
                  <div className="bg-white w-full h-full rounded-[28px] p-3 flex flex-col justify-between text-slate-900 text-[10px]">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                        <span>9:41</span>
                        <span>5G 100%</span>
                      </div>
                      <div className="font-bold text-slate-800 text-[11px]">Good morning, Mark</div>
                      <div className="text-slate-400 font-semibold">Where are you going?</div>
                    </div>

                    {/* Live GPS Map Representation */}
                    <div className="my-2 h-36 bg-blue-50 rounded-xl border border-blue-100 relative p-2 overflow-hidden flex flex-col justify-between">
                      <div className="absolute inset-0 bg-[radial-gradient(#005F96_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
                      <div className="w-full text-center text-[#005F96] font-bold text-[9px] z-10">Swastik Society ➔</div>
                      <div className="w-full flex justify-between items-center text-[9px] font-bold text-slate-700 z-10">
                        <span className="bg-amber-400 text-slate-900 px-1.5 py-0.5 rounded font-black">Standard ₹166</span>
                        <span>Comfort ₹190</span>
                      </div>
                    </div>

                    <button className="w-full py-2 rounded-lg bg-amber-500 text-white font-extrabold text-xs text-center shadow-md">
                      Confirm Ride
                    </button>
                  </div>
                </div>

                {/* Phone 2: Driver Bill & Rating Screen */}
                <div className="w-[190px] h-[380px] rounded-[34px] bg-slate-900 border-4 border-slate-800 p-2 shadow-xl relative overflow-hidden text-left z-10">
                  <div className="bg-white w-full h-full rounded-[26px] p-3 flex flex-col justify-between text-slate-900 text-[10px]">
                    <div className="text-center space-y-1">
                      <span className="text-[9px] font-bold text-slate-400">Ride Experience</span>
                      <div className="text-xs text-slate-500">Your bill is</div>
                      <div className="text-2xl font-black text-slate-900">₹108</div>
                      <div className="text-[9px] text-slate-400">March 25, 2026 at 10:38 am</div>
                    </div>

                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 rounded-full bg-slate-200 mx-auto font-bold text-[#005F96] flex items-center justify-center text-[10px]">AG</div>
                      <div className="font-bold text-slate-800 text-[10px]">Avinash Gupta</div>
                      <div className="flex justify-center text-amber-400">★★★★★</div>
                    </div>

                    <button className="w-full py-1.5 rounded-lg bg-amber-500 text-white font-extrabold text-[10px] text-center shadow-sm">
                      Submit Rating
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3 Feature Cards */}
            <div className="lg:col-span-4 space-y-6">
              {panelFeatures[activePanelTab].slice(3, 6).map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-cyan-100/80 text-[#005F96] shrink-0 border border-cyan-200 shadow-sm">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Success Stories & Stat Cards (Image 2 Match) */}
      <SuccessStoriesSection />

      {/* Our Premium Services 10-Card Section (Image 3 Match) */}
      <PremiumServicesGrid />

      {/* Section 4: Uber For On-Demand Businesses (6 Niche Solutions) */}
      <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              VERSATILE BUSINESS VERTICALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Uber For On-Demand Businesses
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Whether you are launching a cab booking app, parcel delivery service, or cloud kitchen dispatch, our Uber clone app powers your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nicheSolutions.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#005F96] to-[#003452] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#005F96] transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>

                  <div className="pt-3 border-t border-slate-100">
                    <a href="#quote-form" className="text-xs font-bold text-[#005F96] hover:underline inline-flex items-center">
                      <span>Request Solution Demo</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Section 5: Comparative Analysis (Custom Uber App vs Off-The-Shelf Script) */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              WHY CHOOSE CUSTOM BUILD
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Comparative Analysis
            </h2>
            <p className="text-base text-slate-600">
              We provide tailored, robust, scalable, and secure Uber-like app solutions that delight users and deliver engagement.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-white">
            <div className="grid grid-cols-12 bg-[#005F96] text-white p-4 font-black text-sm text-center">
              <div className="col-span-6 text-left pl-4">Platform Feature / Capability</div>
              <div className="col-span-3">Sapphire Custom Uber App</div>
              <div className="col-span-3">Generic Off-The-Shelf Script</div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparativeFeatures.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 text-xs sm:text-sm items-center hover:bg-slate-50 transition-colors">
                  <div className="col-span-6 font-bold text-slate-800 pl-4">{row.feature}</div>
                  <div className="col-span-3 text-center flex justify-center">
                    {row.custom ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <span className="text-red-500 font-bold">✕</span>}
                  </div>
                  <div className="col-span-3 text-center flex justify-center">
                    {row.standard ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <span className="text-slate-300 font-bold">✕</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Sapphire Success Matrix */}
      <SuccessMatrix />

      {/* Sapphire 6-Card Technology Stack Grid */}
      <SapphireTechStackGrid domainName="Uber-like app" richTechCategories={techCategories} />

      {/* Process We Follow - Sapphire 8-Step Timeline */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from initial blueprinting to UAT, deployment, and ongoing SLA maintenance."
      />

      {/* Trusted By World's Leading Brands & Featured In Media */}
      <TrustedBrandsGrid />

      {/* Official Sapphire Uber-Like App FAQs */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Uber Like App Development FAQs
            </h2>
            <p className="text-base text-slate-600">
              Clear answers regarding customization, source code ownership, Play Store submission, and delivery timelines.
            </p>
          </div>

          <div className="space-y-4">
            {sapphireFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-base text-slate-900 hover:text-[#005F96] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#005F96]' : ''
                    }`}
                  />
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

      {/* Free Proposal & Project Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003452] text-white text-left">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>BUILD YOUR UBER APP STARTUP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Get Access to Top Mobility Developers
              </h2>

              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a consultation with our on-demand mobility architects today to transform your ride-hailing or delivery startup idea into a robust application.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>100% Source Code Ownership & Signed NDA</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Complete Architecture & Cost Estimate</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Sub-30 Second Dispatch Algorithm</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Inquiry Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Sapphire Software Solutions. Our mobility technology leads will review your project brief and respond within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg bg-[#005F96] text-white font-bold text-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-slate-900 mb-2">Get A Free Project Quote</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="alex@taxistartup.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Hiring Model</label>
                        <select
                          name="model"
                          value={formData.model}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none bg-white"
                        >
                          <option value="Dedicated Team">Dedicated Team</option>
                          <option value="Fixed Price">Fixed Price Contract</option>
                          <option value="Time & Material">Time & Material</option>
                          <option value="Buckets Approach">Buckets Approach</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none bg-white"
                      >
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000+">$100,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief / Requirements</label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your taxi fleet size, city locations, or payment gateways..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-black text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
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

export default UberLikeAppDevelopmentService;
