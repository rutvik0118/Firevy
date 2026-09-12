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
import AndroidComparativeAnalysis from './AndroidComparativeAnalysis';
import SapphireFaqSection from '../common/SapphireFaqSection';
import AmazonQuoteOverview from '../common/AmazonQuoteOverview';
import HealthcareChallengeCtaBanner from '../common/HealthcareChallengeCtaBanner';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import {
  ShoppingBag,
  ShoppingCart,
  PackageCheck,
  Truck,
  CreditCard,
  User,
  Users,
  Search,
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
  Tag,
  Check,
  Shield,
  Layers,
  LogIn,
  Bell,
  Map
} from 'lucide-react';

export const AmazonLikeAppDevelopmentService = () => {
  const [principalTab, setPrincipalTab] = useState('customers');
  const [activePanelTab, setActivePanelTab] = useState('buyer');
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Principal Features matching Sapphire Solutions 1:1 Reference
  const principalFeatures = {
    customers: {
      left: [
        {
          title: 'Sign-Up & Authorization',
          desc: "The registration or sign-up procedure allows users to use the app's services easily. People may register for the app by submitting information such as name, email, phone number, etc.",
          icon: LogIn
        },
        {
          title: 'Creating Profile',
          desc: 'Users can build an interactive profile with all required information, including personal information, financial information, etc.',
          icon: User
        },
        {
          title: 'Product Catalog',
          desc: 'This feature is vital since it allows users to see all available items on the app, organized by category. Users can examine product listings, images, pricing, and ratings.',
          icon: Map
        }
      ],
      right: [
        {
          title: 'Search Bar',
          desc: 'The search bar increases customer satisfaction by giving enhanced search results despite misspellings.',
          icon: Search
        },
        {
          title: 'Shopping Cart',
          desc: 'This allows customers to put all their desired, unavailable goods in one location. It might be for various reasons, including a shortage of stock or funds.',
          icon: ShoppingCart
        },
        {
          title: 'Push Notifications',
          desc: 'The push notifications will let customers get immediate information on items, current promotions and offers, product delivery, and other topics.',
          icon: Bell
        }
      ]
    },
    investors: {
      left: [
        {
          title: 'Admin Dashboard & Control',
          desc: 'Allows investors and platform managers to monitor gross sales revenue, daily active orders, commission ledgers, and marketplace metrics.',
          icon: Sliders
        },
        {
          title: 'Vendor Verification & KYC',
          desc: 'A robust onboarding pipeline to verify vendor business licenses, tax IDs, catalog compliance, and storefront status.',
          icon: CheckCircle2
        },
        {
          title: 'Commission & Payout Ledger',
          desc: 'Automated multi-vendor revenue split system managing category-based commissions, bank payouts, and tax invoice generation.',
          icon: DollarSign
        }
      ],
      right: [
        {
          title: 'Inventory & Stock Analytics',
          desc: 'Real-time catalog stock synchronization preventing overselling across multi-warehouse fulfillment channels.',
          icon: PackageCheck
        },
        {
          title: 'Promotional Banner Manager',
          desc: 'Monetize the app by scheduling homepage hero banners, vendor sponsored product ads, and festive flash sales.',
          icon: Tag
        },
        {
          title: 'Security & Anti-Fraud Suite',
          desc: 'Enterprise PCI-DSS compliance, AI fraud detection on transactions, and automated review spam filtering.',
          icon: Shield
        }
      ]
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'E-Commerce Multi-Vendor Marketplace',
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

  // 12 Key E-Commerce Features matching Sapphire Solutions
  const ecommerceFeatures = [
    {
      title: 'Navigation Through Products',
      desc: 'To facilitate product navigation, an internal search bar is included with auto-suggestions, voice search, and instant filters.',
      icon: Search
    },
    {
      title: 'Onboarding Is A Breeze',
      desc: 'Assure a painless onboarding procedure to facilitate quick logins for customers via 1-tap social media accounts and phone OTPs.',
      icon: Smartphone
    },
    {
      title: 'Customer Testimonials & Ratings',
      desc: 'Customers may give verified product reviews, star ratings, and photo/video feedback directly within the mobile application.',
      icon: Star
    },
    {
      title: 'Comprehensive Customer Profiles',
      desc: 'Our e-commerce app covers all consumer features including saved shipping addresses, payment cards, and order histories.',
      icon: User
    },
    {
      title: 'Product Classifications & Taxonomy',
      desc: 'Multi-level product categories, flash sale banners, brand filters, and price range sorting to showcase large product catalogs.',
      icon: Tag
    },
    {
      title: 'Shopping Cart & Wishlist',
      desc: 'Allow consumers to add items to shopping carts that may be checked out instantly or saved for later reference.',
      icon: ShoppingCart
    },
    {
      title: 'Multiple Payment Gateways',
      desc: 'Numerous payment options enabling simple purchases through debit/credit cards, Apple Pay, Google Pay, Net Banking, and COD.',
      icon: CreditCard
    },
    {
      title: 'Native High-Performance Mobile App',
      desc: 'Native iOS & Android mobile applications extending the full hardware capabilities of smartphones for fluid 60 FPS scrolling.',
      icon: Shield
    },
    {
      title: 'Real-Time Admin Dashboard',
      desc: 'Using an interactive real-time dashboard, admins monitor sales revenue, vendor payouts, and store inventory.',
      icon: Sliders
    },
    {
      title: 'Staff & Personnel Management',
      desc: 'The administrator manages warehouse staff, customer support reps, and vendor access permissions effectively.',
      icon: Users
    },
    {
      title: 'Banner & Advertisement Manager',
      desc: 'Manage promotional banners, festive discount sales, and sponsored vendor product ads effectively from a single console.',
      icon: Gift
    },
    {
      title: 'Order & Shipment Tracking',
      desc: 'Real-time order status tracking with automated SMS/email alerts ensuring timely product delivery and customer satisfaction.',
      icon: Truck
    }
  ];

  // 3 Panel Features (Buyer Shopping App, Vendor Merchant Portal, Super Admin Dashboard)
  const panelFeatures = {
    buyer: [
      { title: 'AI Personalized Recommendations', desc: 'Predictive product suggestions based on user browsing history and purchase patterns.' },
      { title: '1-Click Buy Now & Fast Checkout', desc: 'Accelerated checkout saving payment tokens for frictionless 1-tap orders.' },
      { title: 'AR Product Try-On Visualizer', desc: 'Augmented reality visualizer allowing customers to preview products in 3D.' },
      { title: 'Wishlist & Cart Sync', desc: 'Cross-device instant cart synchronization across mobile apps and web portals.' },
      { title: 'Order History & Returns Engine', desc: 'Track shipment status, download tax invoices, and initiate 1-click return requests.' },
      { title: 'In-App Live Chat Support', desc: 'Instant customer service chat resolving order queries and shipping updates.' }
    ],
    vendor: [
      { title: 'Bulk Product Upload & Sync', desc: 'CSV/Excel bulk product import, variant management, and real-time stock sync.' },
      { title: 'Vendor Order Fulfillment', desc: 'Receive automated order dispatch notifications and print shipping airway bills.' },
      { title: 'Automated Payout Ledgers', desc: 'Transparent commission deductions, weekly bank payouts, and tax reports.' },
      { title: 'Storefront Customization', desc: 'Custom vendor brand storefront with custom banners, logo, and featured products.' },
      { title: 'Inventory Stock Alerts', desc: 'Low stock alerts notifying sellers before popular items run out of stock.' },
      { title: 'Promotional Discounts & Coupons', desc: 'Sellers create custom coupon codes, volume discounts, and bundle offers.' }
    ],
    admin: [
      { title: 'Multi-Vendor Commission Engine', desc: 'Set global or category-specific commission rates (e.g. 8-15%) per vendor.' },
      { title: 'Vendor Verification & Approval', desc: 'KYC background checks, business tax document verification, and store activation.' },
      { title: 'Banner & Flash Sale Manager', desc: 'Schedule homepage hero carousel banners, countdown timers, and deal of the day.' },
      { title: 'Anti-Fraud & Security Audit', desc: 'AI fraud detection monitoring suspicious bulk orders, card chargebacks, and spam reviews.' },
      { title: 'Global Multi-Currency & Tax', desc: 'Automated GST/VAT calculation, localized currencies, and multi-language support.' },
      { title: 'Comprehensive Sales Analytics', desc: 'Real-time sales graphs, top-selling categories, and customer acquisition metrics.' }
    ]
  };

  // Rich Technology Categories for Tech Stack Grid
  const techCategories = {
    backend: [
      { name: 'Node.js & Express', desc: 'High-performance microservices backend powering real-time product search and cart checkout.' },
      { name: 'Python (Django)', desc: 'AI recommendation algorithms and machine learning data pipelines predicting user buying intent.' },
      { name: '.NET Core', desc: 'Enterprise server framework executing high-volume marketplace transactions and ERP integrations.' },
      { name: 'Java & Spring Boot', desc: 'Scalable backend language managing multi-vendor payout ledgers and order fulfillment engines.' },
      { name: 'PHP (Laravel)', desc: 'Robust server-side framework powering seller portals and catalog management.' }
    ],
    frontend: [
      { name: 'React Native & Flutter', desc: 'Cross-platform mobile app frameworks delivering native 60 FPS smooth e-commerce shopping.' },
      { name: 'Kotlin (Android)', desc: 'Native Android application development providing seamless push notifications and local storage.' },
      { name: 'Swift (iOS)', desc: 'Native Apple iOS app execution providing hardware-accelerated Apple Pay and ARKit.' },
      { name: 'Next.js & React', desc: 'SEO-optimized SSR web storefront delivering sub-second page loads.' }
    ],
    database: [
      { name: 'PostgreSQL & MySQL', desc: 'Relational database managing transactional order ledgers, user accounts, and inventory.' },
      { name: 'MongoDB', desc: 'NoSQL document database storing complex product catalog attributes, variants, and reviews.' },
      { name: 'Elasticsearch', desc: 'Sub-second full-text search engine executing instant product filtering and auto-complete.' },
      { name: 'Redis Cache', desc: 'In-memory cache delivering flash-sale catalog caching and shopping session state.' }
    ],
    devops: [
      { name: 'AWS Cloud (EC2 & Lambda)', desc: 'Auto-scaling serverless infrastructure managing viral traffic surges during Black Friday sales.' },
      { name: 'AWS CloudFront CDN', desc: 'Global edge CDN delivering sub-second product image loading.' },
      { name: 'Docker & Kubernetes', desc: 'Containerized microservices auto-scaling compute capacity for high concurrency.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile automation testing cart checkout, payment gateways, and order tracking.' },
      { name: 'BrowserStack', desc: 'Real-device cloud matrix testing e-commerce UX performance across 500+ mobile devices.' },
      { name: 'Katalon Studio', desc: 'Automated API security and payment PCI-DSS compliance test suite.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management platform tracking marketplace feature backlogs.' },
      { name: 'Slack', desc: 'Real-time client communication channel with senior e-commerce engineering leads.' },
      { name: 'Microsoft Teams', desc: 'Weekly sprint demo reviews and architectural video check-ins.' },
      { name: 'Trello', desc: 'Visual Kanban boards for UI/UX product catalog wireframe approvals.' }
    ]
  };

  // Official Sapphire E-Commerce FAQs matching Screenshot 1 1:1
  const sapphireFaqs = [
    {
      id: 1,
      question: '1. Which technology do you specialize in?',
      answer: 'We develop eCommerce mobile applications for retailers for Google Android, iOS, Windows, etc. Our mobile developers execute the most recent market trends using cutting-edge technologies such as Flutter, PhoneGap, React Native, AR/VR, AI, IoT, and others.'
    },
    {
      id: 2,
      question: '2. Can I examine the code throughout development?',
      answer: 'Yes! We follow 100% transparent development practices and grant client access to code repositories (GitHub/GitLab) so you can review pull requests, examine code quality, and track sprint deliverables.'
    },
    {
      id: 3,
      question: '3. Which platform should my first mobile app be built on?',
      answer: 'It depends on your target market demographics. For mass global adoption, launch on Android first. For higher average revenue per user in USA/Europe, launch on iOS. We also build cross-platform apps using Flutter or React Native to deploy on both App Store and Google Play simultaneously.'
    },
    {
      id: 4,
      question: '4. How can you secure mobile app development projects?',
      answer: 'We enforce bank-grade security protocols including PCI-DSS compliance, SSL pinning, end-to-end payload encryption, multi-factor authentication, biometric logins, ProGuard obfuscation, and automated vulnerability scanning.'
    },
    {
      id: 5,
      question: '5. What makes Sapphire Software Solutions a reliable provider of Amazon like app development services?',
      answer: 'With 23+ years of IT experience, 320+ 5-star Clutch reviews, 1500+ completed projects, and 95% client retention, we deliver enterprise-grade multi-vendor e-commerce platforms tailored to your brand vision.'
    },
    {
      id: 6,
      question: '6. What features are included in Amazon like apps developed by Sapphire Software Solutions?',
      answer: 'Our Amazon-like apps include buyer shopping apps, seller portals, automated vendor payouts, real-time GPS shipment tracking, AI recommendations, push notifications, and super admin dashboards.'
    },
    {
      id: 7,
      question: '7. Does Sapphire Software Solutions build Amazon like apps for both web and mobile platforms?',
      answer: 'Yes, we build fully integrated e-commerce ecosystems covering native iOS, native Android, cross-platform mobile apps, and progressive Next.js/React web storefronts.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="E-Commerce Mobile App Development Company | Amazon Like App Development"
        description="Top Amazon-like e-commerce app development company in USA. Build a custom multi-vendor marketplace app like Amazon with AI recommendations, seller portals, and fast checkout."
        canonical="/services/amazon-like-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Amazon Like App Development Services in USA"
        subtitle="People have established strong faith in online shopping in the modern day. The majority of consumers prefer to purchase online since it is quick, reliable, and convenient. Choosing Amazon like app development services simplifies the user’s online shopping journey and ensures a seamless buying experience. Many entrepreneurial visionaries now want to build eCommerce app like Amazon to capture the growing digital marketplace. Partnering with an expert Amazon clone app development company allows businesses to launch scalable and feature-rich eCommerce platforms that replicate Amazon’s success while tailoring solutions to their brand identity."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="amazon"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* Section 3: Principal Features (1:1 Sapphire Reference Screenshot Match) */}
      <section id="features-section" className="py-20 bg-[#F0F8FA] border-b border-slate-200 text-left">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2
              className="text-slate-900 tracking-tight"
              style={{
                fontSize: '40px',
                fontWeight: 800,
                lineHeight: '48px'
              }}
            >
              Principal Features
            </h2>

            {/* 2 Main Tab Buttons: For Customers / For Investors */}
            <div className="flex justify-center items-center space-x-4 pt-4 max-w-md mx-auto">
              <button
                onClick={() => setPrincipalTab('customers')}
                className={`px-8 py-3 rounded-lg transition-all border ${
                  principalTab === 'customers'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96] hover:bg-cyan-50'
                }`}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '24px'
                }}
              >
                For Customers
              </button>
              <button
                onClick={() => setPrincipalTab('investors')}
                className={`px-8 py-3 rounded-lg transition-all border ${
                  principalTab === 'investors'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96] hover:bg-cyan-50'
                }`}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '24px'
                }}
              >
                For Investors
              </button>
            </div>
          </div>

          {/* 3-Column Layout: Left 3 Features + Center Dual Phone Mockup (KepShop + Shopping App) + Right 3 Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Left 3 Feature Items */}
            <div className="lg:col-span-4 space-y-8">
              {principalFeatures[principalTab].left.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-xl bg-[#D6EEF8] text-[#005F96] shrink-0 border border-cyan-200/60 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3
                        className="text-slate-900"
                        style={{
                          fontSize: '18px',
                          fontWeight: 600,
                          lineHeight: '22px'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-slate-600 font-normal"
                        style={{
                          fontSize: '15px',
                          fontWeight: 400,
                          lineHeight: '23px'
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Dual Phone Mockup (KepShop + Shopping App 1:1 Match) */}
            <div className="lg:col-span-4 flex items-center justify-center relative py-4">
              <div className="flex items-center -space-x-12">
                {/* Left Phone: KepShop Dark Navy Branding Screen */}
                <div className="w-[195px] sm:w-[215px] h-[390px] sm:h-[420px] rounded-[36px] bg-[#1E2548] border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between text-white font-sans relative z-20">
                  {/* Top iPhone Speaker Notch */}
                  <div className="w-20 h-3.5 bg-slate-900 rounded-b-xl mx-auto border-b border-x border-slate-700/50" />

                  <div className="my-auto text-center space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
                      KepShop
                    </h3>
                  </div>

                  <div className="pb-3" />
                </div>

                {/* Right Phone: E-Commerce Storefront App Screen */}
                <div className="w-[185px] sm:w-[205px] h-[380px] sm:h-[410px] rounded-[34px] bg-slate-950 border-4 border-slate-800 p-2 shadow-xl overflow-hidden flex flex-col justify-between text-slate-900 font-sans relative z-10 -ml-8 sm:-ml-10 transform translate-y-3 bg-white">
                  <div>
                    <div className="flex items-center justify-between text-[7px] text-slate-500 px-2 pt-1 font-semibold border-b border-slate-100 pb-1">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        <div className="w-2 h-1.5 border border-slate-500 rounded-sm" />
                      </div>
                    </div>

                    <div className="px-2 pt-1.5 space-y-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[7px] text-slate-400 font-bold leading-none">Welcome,</p>
                          <h4 className="text-[10px] font-black text-slate-900 leading-tight">Martin Smith</h4>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-[9px]">
                          👤
                        </div>
                      </div>

                      <div className="bg-slate-100 text-slate-400 rounded-md px-2 py-0.5 flex items-center text-[7.5px]">
                        <span className="mr-1">🔍</span>
                        <span>Search...</span>
                      </div>
                    </div>

                    <div className="px-2 mt-1.5 space-y-1">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-1.5 text-white space-y-0.5 shadow-sm">
                        <span className="text-[6.5px] font-black bg-white/20 px-1 py-0.2 rounded uppercase">50% Off</span>
                        <div className="text-[7.5px] font-extrabold leading-tight">On everything today</div>
                        <div className="text-[6px] opacity-80">With code: ECOMMERCE</div>
                      </div>
                    </div>

                    <div className="px-2 mt-1.5 space-y-1">
                      <div className="flex justify-between items-center text-[7.5px]">
                        <span className="font-extrabold text-slate-900">New Arrivals</span>
                        <span className="text-[6.5px] text-[#005F96] font-bold">View all</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="bg-slate-50 border border-slate-200 rounded p-1 space-y-0.5">
                          <div className="h-10 rounded bg-slate-200 flex items-center justify-center text-sm">👜</div>
                          <div className="text-[7px] font-bold truncate">The Marc Jacobs</div>
                          <div className="text-[6.5px] font-black">$185.00</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded p-1 space-y-0.5">
                          <div className="h-10 rounded bg-slate-200 flex items-center justify-center text-sm">👟</div>
                          <div className="text-[7px] font-bold truncate">Axel Arigato</div>
                          <div className="text-[6.5px] font-black">$245.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-t border-slate-100 -mx-2 -mb-2 p-1 flex items-center justify-around text-[7px] font-extrabold text-slate-400">
                    <span className="text-[#005F96]">🏠</span>
                    <span>🔍</span>
                    <span>🛍️</span>
                    <span>👤</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3 Feature Items */}
            <div className="lg:col-span-4 space-y-8">
              {principalFeatures[principalTab].right.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-xl bg-[#D6EEF8] text-[#005F96] shrink-0 border border-cyan-200/60 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3
                        className="text-slate-900"
                        style={{
                          fontSize: '18px',
                          fontWeight: 600,
                          lineHeight: '22px'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-slate-600 font-normal"
                        style={{
                          fontSize: '15px',
                          fontWeight: 400,
                          lineHeight: '23px'
                        }}
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

      {/* Our Premium Services 10-Card Grid Section (1:1 Sapphire Reference Screenshot 1) */}
      <PremiumServicesGrid />

      {/* Advantages 6-Card Section (1:1 Sapphire Reference Screenshot 2) */}
      <section className="py-20 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
              Advantages
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Whether you are looking to start a cloud kitchen business or need to launch your own cab booking app, our Amazon for on-demand businesses app will allow businesses to create a strong digital presence and stay engaged with their customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                  <User className="w-6 h-6" />
                </div>
                <h3
                  className="text-slate-900 group-hover:text-[#005F96] transition-colors"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '22px'
                  }}
                >
                  Sign-Up & Authorization
                </h3>
                <p
                  className="text-slate-600 font-normal"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '23px'
                  }}
                >
                  Like consumers, sellers or vendors can build a profile that includes their personal and financial information. Authorities must verify their profile to ensure their integrity.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h3
                  className="text-slate-900 group-hover:text-[#005F96] transition-colors"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '22px'
                  }}
                >
                  Managing Orders
                </h3>
                <p
                  className="text-slate-600 font-normal"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '23px'
                  }}
                >
                  It will assist sellers in monitoring shipped and in-stock items. They have total control over the order method and can monitor and handle product deliveries.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                  <Shield className="w-6 h-6" />
                </div>
                <h3
                  className="text-slate-900 group-hover:text-[#005F96] transition-colors"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '22px'
                  }}
                >
                  Managing Inventories
                </h3>
                <p
                  className="text-slate-600 font-normal"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '23px'
                  }}
                >
                  Inventory management lets suppliers record the specifics of each product entering and exiting the stock.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3
                  className="text-slate-900 group-hover:text-[#005F96] transition-colors"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '22px'
                  }}
                >
                  Creating Reports And Analyzing Data
                </h3>
                <p
                  className="text-slate-600 font-normal"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '23px'
                  }}
                >
                  These enable marketers to get comprehensive information on customer behavior and sales reports, which facilitates customized services to meet specific needs.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3
                  className="text-slate-900 group-hover:text-[#005F96] transition-colors"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '22px'
                  }}
                >
                  Order & Return Management
                </h3>
                <p
                  className="text-slate-600 font-normal"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '23px'
                  }}
                >
                  This feature comprises the administration of an order's complete lifecycle, which includes tracking the order from its original delivery till the consumer demands its return.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3
                  className="text-slate-900 group-hover:text-[#005F96] transition-colors"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '22px'
                  }}
                >
                  Discount Management
                </h3>
                <p
                  className="text-slate-600 font-normal"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '23px'
                  }}
                >
                  These discounts, particularly on in-demand items and services, are used by vendors to attract audiences.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Unveiling Our Innovative Solution Video Slider Section (1:1 Sapphire Reference) */}
      <InnovativeVideoSlider />

      {/* Comparative Analysis Table (1:1 Sapphire Reference Image 1 & Image 2) */}
      <AndroidComparativeAnalysis />

      {/* Our Story, Their Words Video Testimonials Section */}
      <VideoTestimonialsStory />

      {/* Frequently Asked Questions Section */}
      <SapphireFaqSection faqList={sapphireFaqs} />

      {/* Technology Stack Grid Section */}
      <SapphireTechStackGrid domainName="Amazon Like App Development and process" />

      {/* What Our Clients Say Section (1:1 Sapphire Reference Image 1) */}
      <WhatOurClientsSaySection />

      {/* Get Amazon-Like App Development With 100% Guaranteed Success Section */}
      <AmazonQuoteOverview />

      {/* Have Amazon-Like App Development Challenge To Address Banner */}
      <HealthcareChallengeCtaBanner
        title="Have Amazon-Like App development Challenge To Address ?"
        subtitle="Get access to top Amazon-Like App development to transform your ideas into a robust application."
        buttonText="Hire Now"
      />

      {/* Subscribe Us And Get The Latest Updates And News Footer Banner */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default AmazonLikeAppDevelopmentService;
