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
  Utensils,
  ShoppingBag,
  Clock,
  MapPin,
  Navigation,
  ShieldCheck,
  CreditCard,
  User,
  Users,
  Building2,
  PhoneCall,
  Star,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Lock,
  Smartphone,
  Sliders,
  DollarSign,
  Gift,
  Bike,
  Check
} from 'lucide-react';

export const ZomatoLikeAppDevelopmentService = () => {
  const [activePanelTab, setActivePanelTab] = useState('customer');
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Food Delivery & Cloud Kitchen Platform',
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

  // 3 Panel Features (Customer App, Delivery Partner App, Restaurant Admin Portal)
  const panelFeatures = {
    customer: [
      { title: 'User Registration & Auth', desc: 'Fast 1-tap social login, mobile OTP verification, and saved delivery addresses.' },
      { title: 'Advanced Search & Filters', desc: 'Filter restaurants by cuisine, Veg/Non-Veg, dietary tags, ratings, and delivery time.' },
      { title: 'Custom Cooking Instructions', desc: 'Allow customers to add special notes for chefs (e.g. "Less spicy", "No garlic").' },
      { title: 'Live GPS Order Tracking', desc: 'Sub-second real-time map tracking of delivery executive from kitchen to doorstep.' },
      { title: 'Multi-Gateway Payment', desc: 'Apple Pay, Credit Cards, Net Banking, UPI, Digital Wallets, and Cash on Delivery.' },
      { title: 'Referral Codes & Cashback', desc: 'Invite friends to earn instant wallet credits and promotional discount coupons.' }
    ],
    driver: [
      { title: 'Accept / Reject Orders', desc: 'Delivery partners can view distance and payout details before accepting trips.' },
      { title: 'In-App Route Navigation', desc: 'Turn-by-turn Google Maps SDK navigation guiding drivers directly to customers.' },
      { title: 'Online / Offline Availability', desc: 'Toggle working status to receive delivery requests whenever ready.' },
      { title: 'Earnings & Trip History', desc: 'Daily/weekly income calculator, tip summaries, and completed delivery logs.' },
      { title: 'Order Pickup Verification', desc: 'QR code scanning and OTP confirmation at restaurant counters.' },
      { title: 'Delivery Status Alerts', desc: 'Mark order as Arrived, Picked Up, and Delivered with 1 tap.' }
    ],
    admin: [
      { title: 'Restaurant & Menu Manager', desc: 'Add/edit food categories, prices, dish descriptions, and out-of-stock items.' },
      { title: 'Auto-Dispatch Engine', desc: 'AI algorithm matching nearby delivery partners for fastest pickup dispatch.' },
      { title: 'Revenue & Commission Ledgers', desc: 'Track merchant commission rates, driver payouts, and total daily sales.' },
      { title: 'Dynamic Surge Pricing', desc: 'Enable surge fees during peak lunch/dinner hours and rain weather conditions.' },
      { title: 'Promo & Discount Management', desc: 'Create festive coupon codes, buy-1-get-1 offers, and banner ads.' },
      { title: 'Ratings & Feedback Audit', desc: 'Monitor customer reviews, restaurant ratings, and delivery partner complaints.' }
    ]
  };

  // Rich Technology Categories for Tech Stack Grid
  const techCategories = {
    backend: [
      { name: '.NET Core', desc: 'Enterprise microservices engine processing thousands of concurrent order transactions and payments.' },
      { name: 'Node.js', desc: 'Asynchronous event-driven runtime powering real-time WebSockets driver GPS tracking.' },
      { name: 'Java & Spring Boot', desc: 'Scalable backend handling automated order dispatching algorithms and kitchen workflows.' },
      { name: 'PHP (Laravel)', desc: 'Robust server framework powering multi-restaurant admin portals and billing modules.' },
      { name: 'Python (Django)', desc: 'AI/ML algorithms predicting food preparation times and personalized restaurant recommendations.' }
    ],
    frontend: [
      { name: 'React Native & Flutter', desc: 'Cross-platform mobile frameworks delivering native 60 FPS smooth ordering experiences.' },
      { name: 'Kotlin (Android)', desc: 'Native Android app execution ensuring smooth Google Maps SDK rendering and background GPS.' },
      { name: 'Swift (iOS)', desc: 'Native iOS application development providing hardware-accelerated Apple Maps & Pay.' },
      { name: 'RxJava & RxKotlin', desc: 'Reactive extension libraries managing smooth async location streams during live delivery.' }
    ],
    database: [
      { name: 'PostgreSQL & PostGIS', desc: 'Geospatial database storing restaurant locations, delivery zones, and polygon queries.' },
      { name: 'Firebase', desc: 'Real-time database and push notification service for instant order acceptance triggers.' },
      { name: 'Redis Cache', desc: 'In-memory cache delivering instant restaurant menu loading and trending dishes.' },
      { name: 'MongoDB', desc: 'NoSQL document database storing complex food menus, customized options, and reviews.' }
    ],
    devops: [
      { name: 'AWS Cloud', desc: 'Auto-scaling AWS EC2, Elastic Load Balancers, and S3 media storage for food images.' },
      { name: 'CI/CD Pipelines', desc: 'Automated release pipelines guaranteeing zero downtime during peak lunch & dinner spikes.' },
      { name: 'Docker & Kubernetes', desc: 'Containerized orchestration managing high-traffic food ordering surges.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile test automation verifying customer, driver, and restaurant workflows.' },
      { name: 'BrowserStack', desc: 'Real-device cloud matrix testing live GPS performance across 500+ mobile devices.' },
      { name: 'Katalon Studio', desc: 'Automated API and payment gateway security test suite.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management platform tracking food delivery feature backlogs.' },
      { name: 'Slack', desc: 'Real-time client communication channel with senior mobility & food tech engineers.' },
      { name: 'Microsoft Teams', desc: 'Weekly sprint demo reviews and architectural video check-ins.' },
      { name: 'Trello', desc: 'Visual Kanban boards for UI/UX restaurant menu wireframe approvals.' }
    ]
  };

  // Official Sapphire Zomato Food Delivery FAQs
  const sapphireFaqs = [
    {
      q: '1. What is Zomato-like food delivery app development?',
      a: 'Food delivery app development like Zomato builds a multi-sided ecosystem connecting hungry customers, local restaurants/cloud kitchens, and delivery partners under one platform. It includes live GPS order tracking, dish customization, automated dispatching, and multi-channel monetization.'
    },
    {
      q: '2. How does the revenue model work for a Zomato clone app?',
      a: 'The platform generates revenue through restaurant commission fees (e.g. 15-25% per order), delivery charges paid by customers, featured restaurant advertising placements, and monthly subscription programs like free delivery passes.'
    },
    {
      q: '3. Do you provide complete source code and technical documentation?',
      a: 'Yes, we provide 100% source code ownership, complete architectural blueprints, API documentation, and database schemas upon project delivery.'
    },
    {
      q: '4. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict Non-Disclosure Agreements (NDAs) before discussing any project details to ensure full confidentiality of your business concept and customer data.'
    },
    {
      q: '5. Can your food delivery solution support Cloud Kitchens & Tiffin Services?',
      a: 'Absolutely! Our solutions are custom-engineered to handle single-brand cloud kitchens, multi-brand ghost kitchens, scheduled tiffin meal boxes, and traditional restaurant aggregators.'
    },
    {
      q: '6. What post-launch maintenance and SLA support do you offer?',
      a: 'We provide 24/7 server health monitoring, OS compatibility updates, performance tuning, new feature rollouts, and third-party API update maintenance.'
    },
    {
      q: '7. How long does it take to build a custom food delivery app like Zomato?',
      a: 'We typically deliver a fully functional MVP within 10 to 12 weeks, and a complete multi-city enterprise food delivery solution within 4 to 6 months.'
    },
    {
      q: '8. What payment gateways can be integrated?',
      a: 'We integrate Stripe, PayPal, Razorpay, Apple Pay, Google Pay, credit/debit cards, digital wallets, and Cash on Delivery (COD).'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Food Delivery App Development Company | Zomato Like App Development"
        description="Leading Zomato-like food delivery app development company in USA. Build custom food delivery apps, Swiggy clones, cloud kitchen portals, and live GPS order dispatch engines."
        canonical="/services/zomato-like-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Food Delivery App Like Zomato Development Services in USA"
        subtitle="Rapidly transforming modern dining, Custom White Label Zomato-Like Food Delivery App Development Services empower cloud kitchens, single restaurants, and aggregator hubs with real-time order dispatch, live GPS driver tracking, and merchant portals."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="zomato"
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
              <p className="text-xs text-slate-500 font-medium">Top Food Tech Partner</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>200+ GOODFIRMS REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Verified On-Demand Partner</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Get Fully Customized White Labelled Zomato-Like Apps (Dual Phone UI Layout 1:1 Match) */}
      <section id="panels-section" className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get Fully Customized White Labelled Zomato-Like Apps
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Our food delivery app development company understands how to make an app like Zomato and what it takes to establish a successful on-demand food ordering platform.
            </p>

            {/* 3 Main Panel Pill Tabs */}
            <div className="flex justify-center space-x-4 pt-4 max-w-2xl mx-auto">
              <button
                onClick={() => setActivePanelTab('customer')}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-extrabold transition-all border ${
                  activePanelTab === 'customer'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96]/40 hover:bg-slate-50'
                }`}
              >
                Customer App
              </button>
              <button
                onClick={() => setActivePanelTab('driver')}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-extrabold transition-all border ${
                  activePanelTab === 'driver'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96]/40 hover:bg-slate-50'
                }`}
              >
                Delivery Partner App
              </button>
              <button
                onClick={() => setActivePanelTab('admin')}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-extrabold transition-all border ${
                  activePanelTab === 'admin'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96]/40 hover:bg-slate-50'
                }`}
              >
                Restaurant Merchant Portal
              </button>
            </div>
          </div>

          {/* Dual Phone Layout + Left 3 Cards + Right 3 Cards (1:1 Sapphire Match) */}
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

            {/* Center Dual Mobile Phone Screens (1:1 Sapphire Food UI Visual) */}
            <div className="lg:col-span-4 flex items-center justify-center relative py-4">
              <div className="flex items-center -space-x-8">
                {/* Phone 1: Customer Menu & Cart Screen */}
                <div className="w-[200px] h-[400px] rounded-[36px] bg-slate-900 border-4 border-slate-800 p-2 shadow-2xl relative overflow-hidden text-left z-20">
                  <div className="bg-white w-full h-full rounded-[28px] p-3 flex flex-col justify-between text-slate-900 text-[10px]">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                        <span>9:41</span>
                        <span className="text-rose-600 font-black">ZOMATO CLONE</span>
                      </div>
                      <div className="font-bold text-slate-800 text-[11px]">Deliver to Swastik Society</div>
                      <div className="text-slate-400 font-semibold text-[9px]">Search "Pizza, Biryani, Burgers"</div>
                    </div>

                    <div className="my-2 space-y-1.5">
                      <div className="p-2 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-between">
                        <div>
                          <div className="font-extrabold text-slate-900 text-[10px]">Butter Chicken Combo</div>
                          <div className="text-[8px] text-slate-500">⭐ 4.8 (1.2k+ reviews)</div>
                        </div>
                        <span className="font-black text-rose-600 text-[11px]">₹280</span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="font-extrabold text-slate-900 text-[10px]">Veg Dum Biryani</div>
                          <div className="text-[8px] text-slate-500">⭐ 4.6 (850+ reviews)</div>
                        </div>
                        <span className="font-black text-slate-900 text-[11px]">₹190</span>
                      </div>
                    </div>

                    <button className="w-full py-2 rounded-lg bg-rose-600 text-white font-extrabold text-xs text-center shadow-md">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>

                {/* Phone 2: Live Delivery Tracking Screen */}
                <div className="w-[190px] h-[380px] rounded-[34px] bg-slate-900 border-4 border-slate-800 p-2 shadow-xl relative overflow-hidden text-left z-10">
                  <div className="bg-white w-full h-full rounded-[26px] p-3 flex flex-col justify-between text-slate-900 text-[10px]">
                    <div className="text-center space-y-1">
                      <span className="text-[9px] font-bold text-rose-600 uppercase">Live Delivery GPS</span>
                      <div className="text-xs font-black text-slate-900">Arriving in 14 Mins</div>
                      <div className="text-[9px] text-emerald-600 font-bold">Driver is on the way 🚴</div>
                    </div>

                    <div className="my-2 h-28 bg-emerald-50 rounded-xl border border-emerald-100 relative p-2 overflow-hidden flex flex-col justify-between">
                      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
                      <div className="w-full text-center text-emerald-700 font-bold text-[9px] z-10">Restaurant ➔ Home</div>
                      <div className="w-full text-center font-mono text-[8px] bg-white/80 rounded py-0.5 z-10">
                        OTP: 4829
                      </div>
                    </div>

                    <button className="w-full py-1.5 rounded-lg bg-slate-900 text-white font-extrabold text-[10px] text-center shadow-sm">
                      Call Delivery Partner
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

      {/* Success Stories & Stat Cards (Food Delivery Category Match) */}
      <SuccessStoriesSection category="zomato" />

      {/* Our Premium Services 10-Card Section */}
      <PremiumServicesGrid />

      {/* Sapphire Success Matrix */}
      <SuccessMatrix />

      {/* Sapphire 6-Card Technology Stack Grid */}
      <SapphireTechStackGrid domainName="food delivery" richTechCategories={techCategories} />

      {/* Process We Follow - Sapphire 8-Step Timeline */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from initial blueprinting to UAT, deployment, and ongoing SLA maintenance."
      />

      {/* Trusted By World's Leading Brands & Featured In Media */}
      <TrustedBrandsGrid />

      {/* Official Sapphire Zomato Food Delivery FAQs */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Food Delivery App Development FAQs
            </h2>
            <p className="text-base text-slate-600">
              Clear answers regarding cloud kitchen integration, revenue models, NDAs, source code ownership, and 24/7 SLA maintenance.
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
                <Utensils className="w-3.5 h-3.5 text-cyan-300" />
                <span>BUILD YOUR FOOD DELIVERY APP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Get Access to Senior Food Tech Developers
              </h2>

              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a consultation with our food tech architects today to launch your Zomato-like restaurant delivery app or cloud kitchen portal.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>100% Source Code Ownership & Signed NDA</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Sub-Second Live GPS Driver Tracking Engine</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Automated Merchant Commission Ledgers</span>
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
                      Thank you for contacting Sapphire Software Solutions. Our food delivery tech leads will review your project brief and respond within 2 business hours.
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
                          placeholder="e.g. Michael Smith"
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
                          placeholder="michael@foodbrand.com"
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
                        placeholder="Tell us about multi-restaurant aggregators, cloud kitchens, tiffin services, or custom notes..."
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

export default ZomatoLikeAppDevelopmentService;
