import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import {
  Check,
  ChevronDown,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
  Star,
  Users,
  Layers,
  ArrowRight,
  Code2
} from 'lucide-react';

export const ShopifyDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState('cms');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Shopify / Shopify Plus Development',
    budget: '$10,000 - $25,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Shopify / Shopify Plus Development',
        budget: '$10,000 - $25,000',
        message: ''
      });
    }, 6000);
  };

  const techStack = {
    cms: [
      { name: 'Shopify Plus', desc: 'Enterprise Commerce Engine for High-Volume Brands', icon: '🛍️' },
      { name: 'Hydrogen 2.0 & Oxygen', desc: 'Shopify’s Official Remix-Powered Headless Stack', icon: '⚡' },
      { name: 'Shopify Functions & Scripts', desc: 'Custom Backend Logic & Checkout Extensibility', icon: '🧩' },
      { name: 'Shopify POS & Omnichannel', desc: 'Unified Brick-and-Mortar & Online Retail', icon: '🏪' },
      { name: 'Shopify Markets Pro', desc: 'Global Multi-Currency, Duties & Localized Tax', icon: '🌐' },
      { name: 'Shopify Flow & Launchpad', desc: 'Automated Event Triggers & Flash Sale Campaigns', icon: '🚀' }
    ],
    languages: [
      { name: 'Liquid 5.x & JSON Templates', desc: 'Native Dynamic Server-Rendered Templating', icon: '💧' },
      { name: 'Remix / Next.js 14', desc: 'Cutting-Edge Headless Storefront Frameworks', icon: '⚛️' },
      { name: 'GraphQL Storefront API', desc: 'High-Throughput Sub-Second Product Queries', icon: '🔄' },
      { name: 'TypeScript & Tailwind CSS', desc: 'Modular Type-Safe Enterprise Design Systems', icon: '🎨' },
      { name: 'Node.js / Express & Python', desc: 'Custom Shopify App & Middleware Backends', icon: '💻' },
      { name: 'Shopify CLI 3.x', desc: 'Modern Automated Local Theme & App Tooling', icon: '⚙️' }
    ],
    database: [
      { name: 'Shopify Cloud Datastore', desc: 'Globally Distributed Serverless Data Tier', icon: '☁️' },
      { name: 'PostgreSQL & Prisma', desc: 'Custom Shopify Embedded App Relational Data', icon: '🐘' },
      { name: 'Redis Cache', desc: 'High-Speed Cart & Session Data Acceleration', icon: '⚡' },
      { name: 'Algolia / Klevu AI', desc: 'Instant Intelligent Semantic Search & Filters', icon: '🔍' },
      { name: 'Shopify CDN (Cloudflare)', desc: 'Global Edge Caching & Automated WebP/AVIF', icon: '🌐' },
      { name: 'Sanity / Contentful CMS', desc: 'Headless Content Hub for Rich Storytelling', icon: '📦' }
    ],
    infrastructure: [
      { name: 'Shopify Oxygen Global Edge', desc: 'Serverless Edge Hosting with Zero Config', icon: '☁️' },
      { name: 'AWS Lambda / Google Cloud', desc: 'Serverless Microservices & Webhook Workers', icon: '🔷' },
      { name: 'GitHub CI/CD Integration', desc: 'Automated Theme Branching & Deployments', icon: '🐙' },
      { name: 'Klaviyo / Gorgias Sync', desc: 'Marketing Automation & Customer Service Hub', icon: '💌' },
      { name: 'Checkout Extensibility', desc: 'Custom App Blocks & Upsell Modules', icon: '💳' },
      { name: 'PCI-DSS Level 1 Hosted', desc: '100% Secure Certified Compliance Out-of-the-Box', icon: '🔒' }
    ]
  };

  const faqs = [
    {
      q: "1. Why choose Shopify and Shopify Plus for e-commerce?",
      a: "Shopify is the world’s leading cloud-hosted e-commerce platform, powering millions of stores with 99.99% uptime, built-in global CDN, seamless payment processing via Shopify Payments, and massive app ecosystem. Shopify Plus adds enterprise checkout customization, B2B wholesale portals, dedicated bot protection, and automated workflows via Shopify Flow."
    },
    {
      q: "2. What is Checkout Extensibility and why is it important?",
      a: "Checkout Extensibility is Shopify's modern, app-based architecture replacing legacy checkout.liquid. It allows us to build fast, secure custom checkout apps, post-purchase one-click upsells, custom shipping rules, and loyalty discounts without breaking future Shopify core updates."
    },
    {
      q: "3. How does Firevy.co build custom Shopify apps?",
      a: "We develop custom private and public Shopify apps using Node.js, React (Shopify Polaris), GraphQL Admin API, and Shopify Functions. Whether you need custom ERP inventory synchronizers, tiered discount engines, or bespoke fulfillment workflows, our apps run seamlessly in your Shopify admin."
    },
    {
      q: "4. Can you migrate our existing store from WooCommerce, Magento, or BigCommerce to Shopify?",
      a: "Yes. We have executed hundreds of seamless store migrations. We securely transfer product catalogs, customer accounts, order histories, gift card balances, and 301 redirect maps to preserve 100% of your SEO rankings with zero transaction downtime."
    },
    {
      q: "5. What is Headless Shopify with Hydrogen and Oxygen?",
      a: "Headless Shopify decouples the frontend user experience from the Shopify backend. Using Shopify Hydrogen (Remix) or Next.js hosted on Shopify Oxygen edge servers, we build lightning-fast web apps with sub-300ms page loads, bespoke storytelling layouts, and multi-channel capability."
    },
    {
      q: "6. How do you maximize store speed and Google Core Web Vitals on Shopify?",
      a: "We audit and remove unneeded app JavaScript snippets, optimize image sizing with WebP/AVIF formats, implement critical CSS inline, defer third-party tracking scripts, and build lightweight 2.0 themes to achieve 90+ mobile speed scores."
    },
    {
      q: "7. Do you support Shopify B2B and wholesale features?",
      a: "Yes. On Shopify Plus, we implement native B2B functionality including company profiles, custom price lists, payment terms (Net 30/60), quantity rules, and automated B2B customer onboarding workflows."
    },
    {
      q: "8. What engagement models do you offer for hiring Shopify developers?",
      a: "We provide dedicated full-time Shopify developers, fixed-price turnkey store design and builds, agile Time & Material development, and 24/7 ongoing store maintenance and conversion optimization."
    },
    {
      q: "9. How quickly can we start our Shopify project with Firevy.co?",
      a: "Our Shopify Plus certified experts can kick off your project within 2 to 4 business days following discovery and project scoping."
    }
  ];

  return (
    <div className="bg-white text-slate-800 font-sans antialiased overflow-hidden">
      <SEO
        title="Shopify Development Company in USA | Certified Shopify Plus Experts"
        description="Firevy.co is a premier Shopify development company in USA. Certified Shopify Plus experts specializing in custom theme design, app development, headless Hydrogen, and store migrations."
      />

      {/* Floating Quick Action Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 pr-2 pointer-events-auto">
        <a
          href="tel:+1234567890"
          className="w-11 h-11 bg-[#006699] hover:bg-[#004d73] text-white rounded-l-md flex items-center justify-center shadow-lg transition-all transform hover:-translate-x-1"
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-l-md flex items-center justify-center shadow-lg transition-all transform hover:-translate-x-1"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#F5F9FD] pt-16 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/80 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-['Poppins',sans-serif] font-[800] text-[34px] leading-[41px] text-black tracking-tight">
                Shopify Development Services in USA
              </h1>
              <p className="text-sm sm:text-base text-[#475569] leading-[1.8] max-w-xl font-normal">
                At Firevy.co, we are dedicated to providing top-notch Shopify Website Development Services suited to your particular company's demands as an industry leader. Our team of knowledgeable Shopify specialists is here to support you to be successful in the ever-changing e-commerce industry.
              </p>
              <div className="pt-2">
                <a
                  href="#discuss-project"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#005F96] hover:bg-[#004A75] text-white font-bold text-sm sm:text-base rounded-md shadow-sm transition-all duration-200 transform hover:translate-y-[-1px] group"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Realistic MacBook Mockup (Exact 1:1 match to reference screenshot) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="w-full max-w-[530px] drop-shadow-2xl select-none">
                
                {/* MacBook Display Lid (Metallic Space Gray / Silver Outer Bezel) */}
                <div className="bg-[#1E293B] rounded-t-[16px] p-2.5 sm:p-3 pb-0 border-t-[2.5px] border-x-[2.5px] border-slate-300 shadow-[0_20px_50px_rgba(0,0,0,0.18)] relative">
                  
                  {/* Web Camera Lens Dot */}
                  <div className="w-2 h-2 rounded-full bg-slate-700 mx-auto mb-1.5 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-cyan-400 opacity-70" />
                  </div>

                  {/* MacBook Screen Canvas: High-Resolution Real Shopify Storefront */}
                  <div className="bg-white rounded-t-[3px] overflow-hidden border border-slate-200 aspect-[16/10.5] flex flex-col shadow-inner text-left font-sans">
                    
                    {/* Store Header Bar */}
                    <div className="bg-white border-b border-slate-200 px-3 py-1.5 flex items-center justify-between text-[8px] sm:text-[9px]">
                      <div className="flex items-center space-x-2">
                        {/* Store Logo */}
                        <div className="flex items-center space-x-1">
                          <span className="w-3.5 h-3.5 rounded-sm bg-[#E65100] text-white flex items-center justify-center text-[7px] font-black">⚡</span>
                          <span className="font-extrabold text-[#1E293B] tracking-tight text-[10px]">TATA</span>
                          <span className="text-[7px] text-[#005F96] font-bold uppercase">Store</span>
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="flex-1 max-w-[180px] mx-3">
                        <div className="bg-slate-50 border border-slate-200 rounded px-2 py-0.5 flex items-center justify-between text-[8px] text-slate-400">
                          <span>Search iPhone, Mac, AirPods...</span>
                          <span>🔍</span>
                        </div>
                      </div>

                      {/* Nav Utilities */}
                      <div className="flex items-center space-x-2 text-[8px] font-medium text-slate-600">
                        <span className="hidden sm:inline">🇺🇸 USA</span>
                        <span>Sign In</span>
                        <span className="relative font-bold text-[#E65100]">
                          🛒 Cart <span className="text-[7px] bg-[#E65100] text-white px-1 rounded-full font-bold">1</span>
                        </span>
                      </div>
                    </div>

                    {/* Store Sub-Navigation Ribbon */}
                    <div className="bg-[#0B1E2D] text-white px-3 py-1 flex items-center justify-between text-[7px] sm:text-[8px] font-semibold">
                      <div className="flex items-center space-x-3">
                        <span className="text-amber-400 font-bold">☰ All Categories ▾</span>
                        <span className="hover:text-cyan-300">Smartphones</span>
                        <span className="hover:text-cyan-300">Laptops</span>
                        <span className="hover:text-cyan-300">Watches</span>
                        <span className="hover:text-cyan-300">Accessories</span>
                      </div>
                      <div className="text-emerald-400 font-bold hidden sm:inline">
                        ⚡ Free 2-Day Express Shipping
                      </div>
                    </div>

                    {/* Product Details Hero Canvas (Matches Reference Image) */}
                    <div className="flex-1 p-2 sm:p-3 bg-white grid grid-cols-12 gap-2 overflow-hidden items-center">
                      
                      {/* Left Vertical Gallery Thumbnails */}
                      <div className="col-span-2 flex flex-col space-y-1 justify-center">
                        {[
                          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=120&q=80",
                          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=120&q=80",
                          "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=120&q=80",
                          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=120&q=80"
                        ].map((thumb, tIdx) => (
                          <div
                            key={tIdx}
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded border ${
                              tIdx === 0 ? 'border-[#E65100] ring-1 ring-[#E65100]' : 'border-slate-200'
                            } overflow-hidden p-0.5 bg-slate-50 flex items-center justify-center`}
                          >
                            <img src={thumb} alt="iPhone Preview" className="w-full h-full object-contain" />
                          </div>
                        ))}
                      </div>

                      {/* Center Main Product Image Showcase */}
                      <div className="col-span-4 bg-gradient-to-b from-slate-50 to-white rounded p-1 flex items-center justify-center border border-slate-100 h-full max-h-[140px] relative">
                        <img
                          src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80"
                          alt="Apple iPhone 14 Pro Max Gold"
                          className="max-h-[125px] w-auto object-contain drop-shadow-md transform hover:scale-105 transition-transform"
                        />
                        <span className="absolute top-1 left-1 bg-amber-100 text-[#E65100] text-[6.5px] font-bold px-1 rounded">
                          Gold (1 TB)
                        </span>
                      </div>

                      {/* Right Product Buy Box Details */}
                      <div className="col-span-6 flex flex-col justify-between pl-1 text-[7.5px] sm:text-[8.5px] space-y-1">
                        <div>
                          <div className="text-[7px] text-slate-400 font-medium">Home &gt; Phones &gt; Apple</div>
                          <h4 className="text-[9px] sm:text-[10.5px] font-[800] text-slate-900 leading-tight">
                            APPLE IPHONE 14 PRO MAX (1 TB) - GOLD
                          </h4>
                          
                          {/* Rating Stars */}
                          <div className="flex items-center space-x-1 mt-0.5">
                            <span className="text-amber-500 font-bold text-[8px]">★★★★★</span>
                            <span className="text-slate-500 text-[7px] font-semibold">(4.9 • 2.4k reviews)</span>
                          </div>
                        </div>

                        {/* Feature Snippets */}
                        <div className="space-y-0.5 text-slate-600 text-[6.5px] sm:text-[7px] border-y border-slate-100 py-1">
                          <div>✓ 6.7-inch Super Retina XDR OLED Display</div>
                          <div>✓ 48MP Pro Quad Camera System</div>
                          <div>✓ A16 Bionic 6-Core Neural Engine</div>
                        </div>

                        {/* Price & Cart CTA */}
                        <div>
                          <div className="flex items-baseline space-x-1.5">
                            <span className="text-[11px] sm:text-[12px] font-black text-[#0B1E2D]">$1,299.00</span>
                            <span className="text-[7.5px] text-slate-400 line-through">$1,399.00</span>
                            <span className="text-[6.5px] text-emerald-600 font-bold">Save $100</span>
                          </div>

                          {/* 2 Buy Buttons */}
                          <div className="flex items-center space-x-1.5 mt-1">
                            <button className="flex-1 py-1 bg-[#E65100] hover:bg-[#D84315] text-white font-bold rounded text-[7.5px] shadow-xs text-center">
                              ADD TO CART
                            </button>
                            <button className="flex-1 py-1 bg-[#005F96] hover:bg-[#004A75] text-white font-bold rounded text-[7.5px] shadow-xs text-center">
                              BUY NOW
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* MacBook Aluminum Bottom Plate & Thumb Groove Notch */}
                <div className="relative bg-gradient-to-b from-[#CBD5E1] via-[#94A3B8] to-[#64748B] h-3 sm:h-3.5 rounded-b-[14px] shadow-lg flex items-center justify-center border-t border-slate-200">
                  <div className="w-14 sm:w-16 h-1 rounded-full bg-slate-400 shadow-inner" />
                </div>
                {/* Soft Ambient Desk Reflection */}
                <div className="w-4/5 h-2.5 bg-slate-400/25 blur-md mx-auto mt-0.5 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logo Marquee */}
      <BrandLogoMarquee />

      {/* Wireframe Showcase Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Wireframe Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-tr from-blue-50 to-sky-50/40 p-8 rounded-3xl border border-blue-100 shadow-sm">
                <div className="bg-white rounded-2xl p-5 border border-blue-200 shadow-lg relative">
                  {/* Wireframe Tablet Screen */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="w-16 h-4 bg-[#005F96] rounded" />
                      <div className="flex gap-1.5">
                        <div className="w-8 h-2 bg-slate-200 rounded" />
                        <div className="w-8 h-2 bg-slate-200 rounded" />
                      </div>
                    </div>
                    <div className="w-full h-24 bg-gradient-to-br from-[#005F96] to-[#005F96] rounded-lg flex items-center justify-center text-white font-bold text-xs p-3 text-center shadow-inner">
                      Shopify Plus Headless & Custom Checkout Extensibility
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 bg-slate-50 border border-slate-200 rounded p-2">
                        <div className="w-8 h-2 bg-blue-500 rounded mb-1" />
                        <div className="w-12 h-1.5 bg-slate-200 rounded" />
                      </div>
                      <div className="h-12 bg-slate-50 border border-slate-200 rounded p-2">
                        <div className="w-8 h-2 bg-[#006699] rounded mb-1" />
                        <div className="w-12 h-1.5 bg-slate-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-200 text-xs font-semibold text-[#005F96] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#006699]" />
                  Shopify Certified
                </div>
              </div>
            </div>

            {/* Right Detailed Description */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Acquire Shopify Store Development Services
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Firevy.co provides end-to-end Shopify and Shopify Plus development services designed to maximize conversions, average order value (AOV), and customer retention. From custom theme engineering (Online Store 2.0) to custom app creation and headless Hydrogen implementations, we deliver turnkey e-commerce success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Certified Shopify & Shopify Plus Experts',
                  'Online Store 2.0 & Custom Liquid Themes',
                  'Checkout Extensibility & Upsell Apps',
                  'Headless Shopify (Hydrogen 2.0 & Next.js)',
                  'Custom ERP, CRM & 3PL Logistics Connectors',
                  '24/7 Store Support & Conversion Rate Audits'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-[#005F96] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Banner */}
      <ClutchTopRatedBanner
        quote="High Conversion, Scalability And Omnichannel Commerce"
        subtext="Empowering global direct-to-consumer and enterprise brands with cutting-edge Shopify stores."
      />

      {/* 10 Premium Pill Tags */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">Comprehensive Shopify Capabilities</h3>
            <p className="text-sm text-slate-500 mt-1">Full-stack expertise across Shopify 2.0, Shopify Plus, Hydrogen, and Custom App Ecosystems.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { title: 'Shopify Plus', icon: '🛍️' },
              { title: 'Online Store 2.0', icon: '🎨' },
              { title: 'Custom Liquid Themes', icon: '💧' },
              { title: 'Hydrogen 2.0 Headless', icon: '⚡' },
              { title: 'Custom Shopify Apps', icon: '🧩' },
              { title: 'Checkout Extensibility', icon: '💳' },
              { title: 'Shopify POS Setup', icon: '🏪' },
              { title: 'ERP & Klaviyo Sync', icon: '🔄' },
              { title: 'Markets Pro Global', icon: '🌐' },
              { title: '24/7 Store SLA', icon: '🛡️' }
            ].map((tag, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-3 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-2.5 hover:border-[#006699] hover:shadow-md transition-all duration-200"
              >
                <span className="text-lg">{tag.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{tag.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Cutting Edge Services with Diagonal Hover Animation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-widest rounded-full">
              Tailored Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise Shopify Development Services
            </h2>
            <p className="text-slate-600 text-base">
              Custom-built store architectures engineered for high volume, frictionless mobile buying, and rapid scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Shopify Store Design & Dev',
                desc: 'Bespoke, brand-aligned themes built on Shopify Online Store 2.0 with modular dynamic sections and fast checkout.',
                icon: '🛍️',
                features: ['Custom Liquid & JSON Sections', 'Conversion-First UX Design', '100% Mobile Optimized']
              },
              {
                title: 'Shopify Plus Enterprise Solutions',
                desc: 'Wholesale B2B portals, multi-store global setups, custom checkout apps, and automated backend scripts via Shopify Flow.',
                icon: '🏢',
                features: ['B2B Wholesale Custom Portals', 'Checkout Extensibility Apps', 'Automated Shopify Flows']
              },
              {
                title: 'Custom Shopify App Development',
                desc: 'Tailored private and public apps using Node.js, React Polaris, and GraphQL to solve unique operational workflows.',
                icon: '🧩',
                features: ['Custom ERP & 3PL Middleware', 'Embedded Admin Experience', 'High-Rate Limit Handling']
              },
              {
                title: 'Headless Shopify (Hydrogen & Oxygen)',
                desc: 'Blazing fast sub-second storefronts built with Remix / Next.js and deployed to Shopify Oxygen global edge network.',
                icon: '⚡',
                features: ['Sub-300ms Edge Loading', 'Rich Contentful / Sanity CMS', 'Omnichannel Decoupled Commerce']
              },
              {
                title: 'Platform Migration to Shopify',
                desc: 'Seamless data migration from WooCommerce, Magento, or BigCommerce with 100% SEO preservation and zero downtime.',
                icon: '🚀',
                features: ['Orders & Customer History Sync', '301 SEO Redirect Mapping', 'Payment & Shipping Transfer']
              },
              {
                title: 'Conversion CRO & 24/7 SLA Support',
                desc: 'Continuous A/B testing, Core Web Vitals speed optimization, security updates, and dedicated emergency engineering.',
                icon: '🛡️',
                features: ['Guaranteed SLA Response', '90+ Core Web Vitals Tuning', 'A/B Testing & Upsell Funnels']
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-[14px] p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,95,150,0.15)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Light Sky/Ice Blue Diagonal Hover Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E6F5FD] via-[#F0F9FF] to-[#D4EEFD] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 pointer-events-none rounded-[14px]" />

                {/* Top Accent Gradient Line (Dark Blue -> Sky Blue) */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 ease-out z-10" />
                {/* Bottom Accent Gradient Line (Sky Blue -> Dark Blue) */}
                <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

                <div className="relative z-10 space-y-5">
                  <div className="w-14 h-14 bg-slate-50 group-hover:bg-white rounded-xl shadow-xs border border-slate-200/80 group-hover:border-[#BAE6FD] flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0F19] group-hover:text-[#005F96] leading-snug transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#556987] group-hover:text-slate-700 leading-relaxed transition-colors duration-300">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-slate-200/80 group-hover:border-[#BAE6FD]/80 transition-colors">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 group-hover:text-slate-800 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#005F96] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-200/60 group-hover:border-[#BAE6FD]/80 transition-colors">
                  <a
                    href="#discuss-project"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005F96] group-hover:text-[#004A75] transition-colors"
                  >
                    <span>Request Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Key Business Benefits */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Choose Shopify & Shopify Plus?
            </h2>
            <p className="text-slate-600 text-base">
              The world's highest-converting commerce platform engineered for unmatched speed, scalability, and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Highest-Converting Checkout',
                desc: 'Shop Pay delivers up to 50% higher conversions than standard checkout flows, with built-in 1-click accelerated payments.',
                icon: <Zap className="w-6 h-6 text-[#005F96]" />
              },
              {
                title: '99.99% Cloud Scalability',
                desc: 'Effortlessly handle massive flash sales and peak seasonal shopping spikes without worrying about server crashes.',
                icon: <Layers className="w-6 h-6 text-[#006699]" />
              },
              {
                title: 'Global Multi-Currency Selling',
                desc: 'Easily expand internationally with Shopify Markets Pro, providing localized currencies, languages, duties, and taxes.',
                icon: <Star className="w-6 h-6 text-blue-600" />
              },
              {
                title: 'Extensible Custom App Ecosystem',
                desc: 'Connect custom business logic, automated fulfillment flows, and ERP systems directly into the Shopify ecosystem.',
                icon: <Code2 className="w-6 h-6 text-indigo-600" />
              },
              {
                title: 'PCI-DSS Level 1 Hosted Security',
                desc: 'Completely secure cloud hosting with automatic SSL, tokenized payments, and zero server maintenance overhead.',
                icon: <ShieldCheck className="w-6 h-6 text-sky-600" />
              },
              {
                title: 'Unified POS & Online Operations',
                desc: 'Seamlessly sync online inventory, customer profiles, and orders with physical retail locations through Shopify POS.',
                icon: <Users className="w-6 h-6 text-[#005F96]" />
              }
            ].map((ben, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 border border-slate-100">
                  {ben.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{ben.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step Column-Locked Responsive Pipeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-widest rounded-full">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              8-Step Shopify Development Lifecycle
            </h2>
            <p className="text-slate-600 text-base">
              A streamlined engineering workflow ensuring high conversion rates, fast page loads, and rapid time to market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Strategy & Brand Discovery', desc: 'Requirements analysis, catalog taxonomy, app stack, and conversion goals.' },
              { step: '02', title: 'UI/UX & Mobile Design', desc: 'Figma wireframes, conversion funnel design, and design system components.' },
              { step: '03', title: 'Theme & Liquid Coding', desc: 'Clean Online Store 2.0 sections, modular blocks, and dynamic styling.' },
              { step: '04', title: 'Custom App & Functions', desc: 'Custom backend app development, discount functions, and checkout rules.' },
              { step: '05', title: 'ERP & Marketing Sync', desc: 'Klaviyo, Gorgias, ERP inventory sync, and payment gateway setup.' },
              { step: '06', title: 'Data Migration & 301s', desc: 'Secure transfer of products, customers, order history, and SEO redirects.' },
              { step: '07', title: 'Speed & Conversion QA', desc: 'Comprehensive mobile testing, cross-browser audits, and speed optimization.' },
              { step: '08', title: 'Launch & 24/7 Support', desc: 'Smooth domain cutover, checkout verification, and ongoing CRO support.' }
            ].map((st, idx) => (
              <div key={idx} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 relative hover:border-[#005F96] transition-colors">
                <div className="text-2xl font-black text-[#005F96] mb-2">{st.step}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Flexible Hiring Models */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Flexible Engagement & Hiring Models
            </h2>
            <p className="text-slate-400 text-base">
              Scale your team with certified Shopify developers or leverage turnkey project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Dedicated Team',
                badge: 'Most Popular',
                desc: 'Full-time dedicated Shopify developers working directly in your agile sprint cycles.',
                points: ['100% Dedicated Developers', 'Direct Daily Standups', 'Flexible Monthly Scaling']
              },
              {
                title: 'Fixed Price',
                badge: 'Guaranteed Scope',
                desc: 'Milestone-based store builds with clearly defined specifications and fixed budgets.',
                points: ['Strict Cost Certainty', 'Detailed Scope of Work', 'Clear Deliverable Sign-offs']
              },
              {
                title: 'Time & Material',
                badge: 'Maximum Agility',
                desc: 'Agile pay-as-you-go model for continuous feature delivery and dynamic scopes.',
                points: ['Pay Only for Hours Used', 'Rapid Pivot Flexibility', 'Bi-Weekly Invoicing']
              },
              {
                title: '24/7 Managed SLA',
                badge: 'Enterprise Uptime',
                desc: 'Round-the-clock incident response, security updates, and performance tuning.',
                points: ['Guaranteed Response SLAs', 'Proactive Threat Patching', 'Dedicated Account Lead']
              }
            ].map((model, idx) => (
              <div key={idx} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full">
                    {model.badge}
                  </div>
                  <h3 className="text-xl font-bold text-white">{model.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{model.desc}</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-700">
                    {model.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <a
                    href="#discuss-project"
                    className="block text-center py-2.5 px-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-lg text-xs font-bold transition-all"
                  >
                    Hire Developers
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Shopify Technology Stack
            </h2>
            <p className="text-slate-600 text-base">
              A modern e-commerce toolchain delivering maximum speed, checkout reliability, and effortless scalability.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
            {[
              { id: 'cms', label: 'Shopify Ecosystem' },
              { id: 'languages', label: 'Languages & Themes' },
              { id: 'database', label: 'Data & Search' },
              { id: 'infrastructure', label: 'Cloud & DevOps' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTechTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTechTab === tab.id
                    ? 'bg-[#005F96] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack[activeTechTab].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 flex items-start gap-4">
                <div className="text-2xl p-2 bg-white rounded-lg border border-slate-200 shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Get answers to common queries regarding our enterprise Shopify and Shopify Plus development services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180 text-[#005F96]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart & Contact Discuss Form Card */}
      <section id="discuss-project" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: What Sets Us Apart */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-widest rounded-full">
                Why Firevy.co
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                What Sets Us Apart As Shopify Development Company?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We combine creative UI/UX excellence with deep technical mastery of Shopify Plus, Hydrogen headless, and custom app ecosystems to drive measurable growth.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: 'Official Shopify Plus Experts', desc: 'Certified developers with proven experience on high-scale Shopify Plus stores.' },
                  { title: 'Conversion-Centric Engineering', desc: 'Themes built from the ground up to minimize friction and maximize checkout conversions.' },
                  { title: 'Custom App & API Specialists', desc: 'Expertise in building private embedded apps and complex ERP connectors.' },
                  { title: '24/7 Dedicated Store Support', desc: 'Round-the-clock technical assistance, security audits, and peak sale support.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-[#005F96] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Let's Discuss Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#005F96] via-[#006699] to-[#005F96]" />
                
                <h3 className="text-2xl font-black text-slate-900 mb-2">Let's Discuss Your Shopify Project</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill out the form below and our certified Shopify solutions architect will respond within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-[#005F96] mx-auto" />
                    <h4 className="text-base font-bold text-slate-900">Thank You!</h4>
                    <p className="text-xs text-slate-600">
                      Your inquiry has been received. Our Shopify lead will reach out to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Required</label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        >
                          <option>Custom Shopify Store Design & Dev</option>
                          <option>Shopify Plus Enterprise Solutions</option>
                          <option>Custom Shopify App Development</option>
                          <option>Headless Shopify (Hydrogen 2.0)</option>
                          <option>Platform Migration to Shopify</option>
                          <option>Dedicated Shopify Developers</option>
                          <option>24/7 Managed Support & SLA</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Estimated Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        >
                          <option>$10,000 - $25,000</option>
                          <option>$25,000 - $50,000</option>
                          <option>$50,000 - $100,000</option>
                          <option>$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Details *</label>
                      <textarea
                        name="message"
                        required
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your brand, store goals, and requirements..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#005F96] hover:bg-[#082d49] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopifyDevelopmentService;
