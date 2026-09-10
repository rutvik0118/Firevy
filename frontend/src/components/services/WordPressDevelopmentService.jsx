import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import {
  Code2,
  Palette,
  ShoppingCart,
  Zap,
  ShieldCheck,
  RefreshCw,
  Layers,
  Settings,
  Headphones,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Search,
  Lock,
  Globe,
  Database,
  Server,
  Cpu,
  Monitor,
  Smartphone,
  Phone,
  MessageCircle,
  ExternalLink,
  Award,
  Users,
  Check
} from 'lucide-react';

export const WordPressDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState('cms');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Custom WordPress Theme',
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
  };

  // 8 Core WordPress Development Services
  const servicesList = [
    {
      title: 'Custom WordPress Theme Development',
      desc: 'Bespoke, lightweight, pixel-perfect WordPress themes engineered from Figma or Adobe XD with clean code, responsive layouts, and zero bloat.',
      icon: Palette,
      badge: 'Pixel Perfect'
    },
    {
      title: 'WordPress Plugin & Extension Development',
      desc: 'Custom-built plugins that extend WordPress functionality seamlessly, integrating bespoke APIs, automated workflows, and complex business logic.',
      icon: Code2,
      badge: 'Custom Logic'
    },
    {
      title: 'WooCommerce E-Commerce Solutions',
      desc: 'High-converting online stores built on WooCommerce with multi-currency, secure payment gateways, inventory sync, and one-click checkout optimization.',
      icon: ShoppingCart,
      badge: 'High Conversion'
    },
    {
      title: 'WordPress Speed & Core Web Vitals',
      desc: 'Advanced speed optimization including Redis object caching, database indexing, asset minification, and image CDN setup to achieve 95+ Google PageSpeed scores.',
      icon: Zap,
      badge: '95+ Speed Score'
    },
    {
      title: 'WordPress CMS Migration & Version Upgrades',
      desc: 'Seamless migration from Drupal, Joomla, Wix, Shopify or legacy CMS to modern WordPress 6.x with zero data loss, preserved SEO rankings, and zero downtime.',
      icon: RefreshCw,
      badge: 'Zero Downtime'
    },
    {
      title: 'Headless WordPress & REST / GraphQL API',
      desc: 'Decoupled modern frontend (React, Next.js, Vue) backed by WordPress as a headless content management powerhouse for enterprise velocity.',
      icon: Layers,
      badge: 'Next.js & React'
    },
    {
      title: 'Enterprise Security Hardening',
      desc: 'Proactive malware scanning, two-factor authentication (2FA), SSL implementation, Cloudflare WAF integration, and OWASP compliance protection.',
      icon: ShieldCheck,
      badge: 'Bank-Grade Security'
    },
    {
      title: '24/7 WordPress Maintenance & SLA Support',
      desc: 'Continuous WordPress core updates, plugin compatibility testing, real-time uptime monitoring, offsite automated backups, and instant bug fixes.',
      icon: Headphones,
      badge: '24/7 Monitoring'
    }
  ];

  // Tech Stack Data
  const techStack = {
    cms: [
      { name: 'WordPress 6.x', desc: 'Core Engine & Full Site Editing', icon: '🌐' },
      { name: 'WooCommerce', desc: 'Enterprise E-Commerce', icon: '🛍️' },
      { name: 'Gutenberg Blocks', desc: 'Native Modular Block Editor', icon: '🧱' },
      { name: 'ACF Pro', desc: 'Advanced Custom Fields', icon: '⚡' },
      { name: 'Roots Sage / Bedrock', desc: 'Modern WP Development Stack', icon: '🌿' },
      { name: 'Elementor Pro', desc: 'Visual Page Builder', icon: '🎨' }
    ],
    languages: [
      { name: 'PHP 8.2 / 8.3', desc: 'High-Performance Backend', icon: '🐘' },
      { name: 'React.js', desc: 'Interactive Gutenberg & Headless UI', icon: '⚛️' },
      { name: 'JavaScript ES6+', desc: 'Modern Asynchronous Scripting', icon: '📜' },
      { name: 'Tailwind CSS & SASS', desc: 'Utility-First Modern Styling', icon: '🎨' },
      { name: 'HTML5 & CSS3', desc: 'Semantic & Accessible Markup', icon: '🏷️' },
      { name: 'TypeScript', desc: 'Strict Typed Code Architecture', icon: '🔷' }
    ],
    database: [
      { name: 'MySQL 8.0', desc: 'Relational Database Engine', icon: '🐬' },
      { name: 'MariaDB', desc: 'High-Throughput SQL Storage', icon: '🦭' },
      { name: 'Redis Object Cache', desc: 'In-Memory Microsecond Caching', icon: '⚡' },
      { name: 'Elasticsearch', desc: 'Faceted Instant Search Engine', icon: '🔍' },
      { name: 'Memcached', desc: 'Distributed Memory Caching', icon: '💾' },
      { name: 'GraphQL / WPGraphQL', desc: 'Flexible API Querying', icon: '📊' }
    ],
    infrastructure: [
      { name: 'WP Engine', desc: 'Managed Enterprise WP Hosting', icon: '🚀' },
      { name: 'Kinsta', desc: 'Google Cloud Powered Hosting', icon: '☁️' },
      { name: 'AWS Lightsail / EC2', desc: 'Scalable Cloud Servers', icon: '📦' },
      { name: 'Cloudflare Enterprise', desc: 'Global CDN, DDoS & WAF', icon: '🛡️' },
      { name: 'WP-CLI', desc: 'Command-Line Management', icon: '💻' },
      { name: 'Docker / LocalWP', desc: 'Containerized Local Workflows', icon: '🐳' }
    ]
  };

  // FAQs
  const faqs = [
    {
      q: '1. Why should we choose WordPress for our business website?',
      a: 'WordPress powers over 43% of all websites globally due to its unmatched flexibility, vast plugin ecosystem, ease of content management, robust SEO capabilities, and complete data ownership with zero recurring platform vendor lock-in fees.'
    },
    {
      q: '2. Do you build 100% custom WordPress themes or use pre-made templates?',
      a: 'We specialize in 100% bespoke custom WordPress theme development tailored precisely to your brand identity, business workflows, and performance standards. We write clean, lightweight, hand-crafted code without unnecessary bloated plugins.'
    },
    {
      q: '3. Can you migrate our existing website from another platform to WordPress without losing SEO ranking?',
      a: 'Yes! We follow a strict 301 URL redirect strategy, preserve metadata, structure schema markup, and transfer all content, images, and user accounts seamlessly, ensuring your Google search rankings and traffic remain completely intact.'
    },
    {
      q: '4. How do you ensure WordPress security against malware and hackers?',
      a: 'We implement bank-grade security protocols including Web Application Firewalls (WAF), two-factor authentication (2FA), custom login endpoints, disabled XML-RPC, continuous vulnerability scanning, automated daily encrypted backups, and regular core/plugin security patches.'
    },
    {
      q: '5. Can WordPress handle high-traffic enterprise websites with thousands of daily visitors?',
      a: 'Absolutely. With proper server architecture, Redis object caching, database query optimization, CDN integration (Cloudflare), and decoupled headless configurations, WordPress effortlessly handles millions of monthly visitors with sub-second load times.'
    },
    {
      q: '6. What hiring and engagement models do you offer for WordPress developers?',
      a: 'We offer three flexible models: Dedicated Full-Time Developers (monthly billing with direct management), Fixed-Price Project Model (milestone-based deliverables), and Hourly / On-Demand Support (flexible Time & Material billing).'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Top WordPress Development Company in USA | Firevy.co"
        description="Our skilled developers offer AI-powered WordPress development services for businesses worldwide. Custom WordPress theme development, plugin customization, speed optimization and more."
        canonical="/services/wordpress"
      />

      {/* Floating Action Buttons (Phone & WhatsApp) - Matching User Screenshot Right Edge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 pr-1 sm:pr-2">
        <a
          href="tel:+15551234567"
          title="Call Us Directly"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#005F96] hover:bg-[#004A75] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0086C6] hover:bg-[#0070A6] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      {/* =========================================================================
          1. HERO SECTION (Exact 1:1 match to screenshot)
          ========================================================================= */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 bg-white text-slate-900 relative overflow-hidden text-left font-sans border-b border-slate-100">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading, Subtitle & 2 CTA Buttons */}
            <div className="lg:col-span-6 space-y-5">
              <h1 className="font-['Poppins',sans-serif] font-[800] text-[34px] leading-[41px] text-black tracking-tight font-sans">
                WordPress Development Services in USA
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.7] font-normal max-w-[540px]">
                Our skilled developers offer AI-powered WordPress development services for businesses worldwide. We offer all possible wordpress cms development services ranging from custom wordpress theme development, plugin customization, wordpress speed optimization and more.
              </p>

              {/* 2 CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13.5px] sm:text-[14px] transition-all shadow-sm group"
                >
                  <span>Discuss Your Project</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>

                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13.5px] sm:text-[14px] transition-all shadow-sm group"
                >
                  <span>Hire WordPress Developers</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Sleek Laptop Device Mockup with WordPress Website Preview */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="w-full max-w-[520px] relative">
                
                {/* Laptop Outer Bezel */}
                <div className="relative bg-[#1E293B] rounded-t-[16px] p-2.5 sm:p-3 pb-0 shadow-2xl border-t border-x border-slate-400">
                  
                  {/* Top Camera Dot */}
                  <div className="w-2 h-2 rounded-full bg-slate-700 mx-auto mb-1.5 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#0086C6]" />
                  </div>

                  {/* Laptop Screen Content (Interactive WordPress Website Preview) */}
                  <div className="w-full bg-white rounded-t-[4px] overflow-hidden aspect-[16/10] border border-slate-200 shadow-inner flex flex-col text-[8px] sm:text-[10px] select-none">
                    
                    {/* Website Header Bar */}
                    <div className="bg-[#1E293B] text-white px-3 py-1.5 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="font-bold text-[9px] text-[#67E8F9] ml-1">WordPress Portal</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[8px] text-slate-300">
                        <span>Home</span>
                        <span>Academics</span>
                        <span>Campus</span>
                        <span>Admissions</span>
                        <span>Contact</span>
                      </div>
                    </div>

                    {/* Website Hero / Alert Strip */}
                    <div className="bg-[#005F96] text-white px-3 py-1 flex items-center justify-between text-[7.5px]">
                      <span>🔔 Admission Open for Academic Year 2025-26</span>
                      <span className="underline font-bold">Apply Now</span>
                    </div>

                    {/* Website Body Layout */}
                    <div className="flex-1 p-2.5 bg-slate-50 grid grid-cols-12 gap-2 overflow-hidden">
                      
                      {/* Main Content: School Building Photo & Article */}
                      <div className="col-span-8 bg-white p-2 rounded shadow-xs border border-slate-200 flex flex-col">
                        <div className="w-full h-20 sm:h-24 rounded bg-gradient-to-r from-amber-800 to-amber-950 overflow-hidden relative mb-1.5">
                          <img
                            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80"
                            alt="WordPress Website Demonstration"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="font-bold text-slate-800 text-[9px] mb-0.5">
                          Excellence in Digital Learning & Research Campus
                        </div>
                        <p className="text-slate-500 text-[7px] leading-tight line-clamp-2">
                          Providing world-class modern facilities and curriculum with innovative interactive learning systems.
                        </p>
                      </div>

                      {/* Right Sidebar Widgets */}
                      <div className="col-span-4 space-y-1.5">
                        <div className="bg-white p-1.5 rounded shadow-xs border border-slate-200">
                          <div className="font-bold text-[#005F96] text-[8px] mb-1">Quick Links</div>
                          <div className="space-y-0.5 text-[7px] text-slate-600">
                            <div>• Academic Calendar</div>
                            <div>• Online Fee Payment</div>
                            <div>• Student Portal</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#005F96] to-[#0086C6] text-white p-1.5 rounded text-[7px]">
                          <div className="font-bold">Need Assistance?</div>
                          <div className="opacity-90">Call 24/7 Helpline</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand / Keyboard Plate */}
                <div className="relative bg-[#94A3B8] h-3.5 sm:h-4 rounded-b-[12px] shadow-xl flex items-center justify-center border-t border-slate-300">
                  <div className="w-16 sm:w-20 h-1 rounded-full bg-slate-600" />
                </div>
                {/* Bottom Lip Shadow */}
                <div className="w-3/4 h-2 bg-slate-300/60 blur-sm rounded-full mx-auto" />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. BRAND LOGOS MARQUEE / TRUST STRIP (Honda, LafargeHolcim, Adani, Toyota, etc.)
          ========================================================================= */}
      <section className="py-6 bg-white border-b border-slate-200">
        <BrandLogoMarquee />
      </section>

      {/* =========================================================================
          3. SECTION 2: "Reliable Wordpress Development Company For Businesses"
             (Exact 1:1 match to screenshot with Custom Illustration)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Tech Vector Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Background Cloud / Soft Glow */}
                <div className="absolute inset-0 bg-[#E0F2FE]/70 rounded-full blur-2xl transform scale-90" />
                
                {/* SVG Illustration: Developer at Desk with WordPress Logo & Code Windows */}
                <svg
                  viewBox="0 0 400 360"
                  className="relative z-10 w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Soft Background Cloud Shape */}
                  <path
                    d="M100 240 C60 240 40 200 60 160 C70 120 120 110 150 120 C180 80 240 70 280 100 C320 80 370 110 360 160 C380 200 350 240 310 240 Z"
                    fill="#BAE6FD"
                    opacity="0.6"
                  />

                  {/* Code Screen Window 1 (Top Left) */}
                  <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))">
                    <rect x="70" y="70" width="100" height="70" rx="8" fill="#38BDF8" />
                    <rect x="70" y="70" width="100" height="16" rx="8" fill="#0284C7" />
                    <circle cx="80" cy="78" r="2.5" fill="#fff" />
                    <circle cx="88" cy="78" r="2.5" fill="#fff" opacity="0.6" />
                    <circle cx="96" cy="78" r="2.5" fill="#fff" opacity="0.6" />
                    {/* Code lines */}
                    <line x1="80" y1="96" x2="140" y2="96" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                    <line x1="80" y1="108" x2="160" y2="108" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                    <line x1="80" y1="120" x2="120" y2="120" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                  </g>

                  {/* Code Screen Window 2 (Top Right) */}
                  <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))">
                    <rect x="230" y="80" width="110" height="80" rx="8" fill="#0EA5E9" />
                    <rect x="230" y="80" width="110" height="16" rx="8" fill="#0369A1" />
                    <line x1="240" y1="106" x2="310" y2="106" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                    <line x1="240" y1="118" x2="290" y2="118" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                    <line x1="240" y1="130" x2="325" y2="130" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                    <line x1="240" y1="142" x2="275" y2="142" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                  </g>

                  {/* Magnifying Glass (Top Left) */}
                  <g transform="translate(60, 60)">
                    <circle cx="20" cy="20" r="14" fill="#0284C7" stroke="#fff" strokeWidth="3" />
                    <path d="M30 30 L42 42" stroke="#0284C7" strokeWidth="5" strokeLinecap="round" />
                    <path d="M14 16 L26 16 M20 10 L20 22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                  </g>

                  {/* WordPress Logo Badge (Right) */}
                  <g transform="translate(300, 160)" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.15))">
                    <circle cx="24" cy="24" r="24" fill="#0074A2" />
                    <circle cx="24" cy="24" r="22" stroke="#fff" strokeWidth="2" fill="none" />
                    {/* W Symbol */}
                    <path
                      d="M10 16 L18 34 L22 24 L20 18 M28 18 L26 24 L30 34 L38 16"
                      stroke="#fff"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </g>

                  {/* Developer Figure Sitting at Desk */}
                  {/* Chair */}
                  <rect x="175" y="220" width="50" height="70" rx="6" fill="#0369A1" />
                  <rect x="195" y="290" width="10" height="40" fill="#0F172A" />
                  <path d="M175 330 L225 330" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />

                  {/* Developer Person */}
                  {/* Head */}
                  <circle cx="200" cy="180" r="16" fill="#FBBF24" />
                  {/* Hair */}
                  <path d="M184 175 C184 162 216 162 216 175 C210 166 190 166 184 175 Z" fill="#0F172A" />
                  {/* Body / Shirt */}
                  <path d="M182 198 L218 198 L224 250 L176 250 Z" fill="#38BDF8" />

                  {/* Desk & Laptop */}
                  <rect x="130" y="250" width="150" height="12" rx="4" fill="#0284C7" />
                  <rect x="145" y="262" width="10" height="70" fill="#0F172A" />
                  <rect x="255" y="262" width="10" height="70" fill="#0F172A" />

                  {/* Laptop on Desk */}
                  <path d="M180 230 L220 230 L226 250 L174 250 Z" fill="#0F172A" />
                  <rect x="183" y="233" width="34" height="14" rx="2" fill="#E0F2FE" />

                  {/* Gear / Settings Icons */}
                  <g transform="translate(60, 200)">
                    <circle cx="15" cy="15" r="8" fill="#0F172A" />
                    <circle cx="15" cy="15" r="4" fill="#fff" />
                  </g>
                  <g transform="translate(80, 220)">
                    <circle cx="10" cy="10" r="6" fill="#0F172A" />
                    <circle cx="10" cy="10" r="3" fill="#fff" />
                  </g>

                  {/* Code Brackets Badge (Bottom Right) */}
                  <g transform="translate(320, 240)">
                    <rect x="0" y="0" width="36" height="28" rx="6" fill="#0284C7" />
                    <text x="18" y="19" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">{`{ }`}</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Column: Heading, Rich Description & Value Highlights */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] leading-[1.2] tracking-tight font-sans">
                Reliable Wordpress Development<br className="hidden sm:inline" /> Company For Businesses
              </h2>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] font-normal">
                As an affordable WordPress development company in USA, Hire WordPress developers who have a decade long experience in creating WordPress sites, plugins and much more. We offer wordpress extension development, affordable, reliable and specialized WordPress development services to customers all over the world. We offer a wide range of custom WordPress CMS development services to assist you in creating a high-performance web presence that boosts brand credibility, accelerates lead conversion, and scales smoothly as your organization expands.
              </p>

              {/* 4 Feature Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] text-[#005F96] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[13.5px] font-[600] text-slate-800">
                    10+ Years of Proven WordPress Mastery
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] text-[#005F96] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[13.5px] font-[600] text-slate-800">
                    Bespoke Theme & Plugin Engineering
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] text-[#005F96] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[13.5px] font-[600] text-slate-800">
                    99.9% Uptime & Enterprise Hardened Security
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] text-[#005F96] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[13.5px] font-[600] text-slate-800">
                    Zero Downtime Seamless CMS Migration
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13.5px] transition-all shadow-sm group"
                >
                  <span>Get A Free Consultation</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          WORLD WIDE TOP RATED IT COMPANY ON CLUTCH (AWARDS STRIP)
          ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* =========================================================================
          GET WORDPRESS DEVELOPMENT SERVICES BY EXPERTS (Exact 1:1 match to screenshot)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <h2 className="text-center text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-12">
            Get WordPress Development Services by Experts
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Box: Soft blue patterned quote card with cyan quotation mark */}
            <div className="lg:col-span-5 bg-[#F0F9FF] border border-[#BAE6FD] rounded-[14px] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden shadow-xs min-h-[300px]">
              
              {/* Subtle decorative background topography wave lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
                viewBox="0 0 320 300"
                fill="none"
              >
                <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 340 40" stroke="#0284C7" strokeWidth="1.8" />
                <path d="M-20 140 C60 190, 140 120, 220 180 C270 210, 310 150, 340 170" stroke="#0284C7" strokeWidth="1.8" />
                <path d="M-20 220 C80 180, 160 260, 240 210 C290 180, 320 250, 340 220" stroke="#0284C7" strokeWidth="1.8" />
              </svg>

              {/* Cyan Quote Mark Icon */}
              <div className="text-[#0284C7] text-6xl sm:text-7xl font-serif font-bold leading-none mb-3 select-none relative z-10">
                “
              </div>

              {/* Bold Quote Headline */}
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.25] tracking-tight relative z-10 font-sans">
                We Promise<br />Reliability, Security<br />And Originality
              </h3>
            </div>

            {/* Right Box: In-Depth Narrative Matching Screenshot */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
              <p>
                WordPress is a common CMS platform for developing visually pleasing, feature-rich, and fully functional websites. It is secure, self-hosted, and simple to install, deploy, and update. We are a best wordpress development company in USA with extensive knowledge, helping businesses as an AI WordPress development company with smart, scalable solutions. We deliver a range of WordPress services right from custom WordPress theme development to plugin customization to WordPress speed optimization and application like Facebook.
              </p>

              <p>
                Owing to our rich industrial experience, we can handle every kind of WordPress site with no hassle. Custom WordPress website development uses its skills and experience to make the process as simple as possible, and our AI-powered WordPress website development approach helps create smarter, faster, and more engaging digital experiences. We have a dedicated team of seasoned WordPress developers who have hands-on experience and in-depth industry knowledge in WordPress development. Get in touch to discuss your next project!
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          OUR PREMIUM SERVICES (10 White Rounded Cards on Deep Blue)
          ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* =========================================================================
          SUCCESS STORIES (3 Rich Case Study Mockups on Soft Cyan)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#EDF7FC] text-slate-900 relative font-sans border-b border-slate-200">
        <Container>
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Success Stories
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Outcome / Larsen & Toubro (L&T) Construction Platform */}
            <div className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group cursor-pointer">
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                
                {/* Upper Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-extrabold text-[15px] text-[#005F96] tracking-tight">Outcome</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full border border-[#005F96] flex items-center justify-center font-black text-[#005F96] text-[10px]">
                      L&T
                    </div>
                    <span className="text-[10px] font-bold bg-[#005F96] text-white px-2 py-0.5 rounded-sm uppercase">Case Study</span>
                  </div>
                </div>

                {/* Card Preview Graphic */}
                <div className="my-3 rounded-[10px] overflow-hidden border border-slate-200 bg-slate-50 relative aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80"
                    alt="Larsen & Toubro Engineering Portal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 text-white">
                    <div className="text-[12px] font-bold">High performance tech ops for 100+ years old leader</div>
                    <div className="text-[10px] text-slate-300">10,000+ Workforce • Top 10 Global EPC</div>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="pt-2 flex items-center justify-between text-[12.5px] font-bold text-[#005F96] group-hover:text-[#004A75]">
                  <span>Enterprise Portal Solution</span>
                  <span>→</span>
                </div>
              </div>
              {/* Title Below Card */}
              <div className="p-3 pt-0 font-bold text-[14.5px] text-[#0B0F19] text-left">
                Health and Safety Management System
              </div>
            </div>

            {/* Card 2: Job Matchers Recruitment Platform */}
            <div className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group cursor-pointer">
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                
                {/* Upper Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-extrabold text-[15px] text-[#1D4ED8] tracking-tight">JOB Matchers</span>
                  <span className="text-[10px] font-bold bg-[#1D4ED8] text-white px-2 py-0.5 rounded-sm uppercase">Recruitment</span>
                </div>

                {/* Card Preview Graphic (Blue Card with Professional) */}
                <div className="my-3 rounded-[10px] overflow-hidden border border-slate-200 bg-gradient-to-br from-[#1E40AF] to-[#2563EB] p-3 text-white relative aspect-[16/10] flex items-center justify-between">
                  <div className="w-1/2 space-y-1.5 z-10">
                    <div className="text-[13px] sm:text-[14px] font-black leading-tight">Want To Get Hired?</div>
                    <div className="text-[11px] text-blue-100 font-semibold">We Got Opportunities.</div>
                    <div className="inline-block bg-white text-[#1E40AF] text-[9px] font-bold px-2.5 py-1 rounded shadow-sm mt-2">
                      Explore Jobs →
                    </div>
                  </div>

                  <div className="w-1/2 h-full flex items-end justify-center relative">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                      alt="Job Candidate Portal"
                      className="h-[120%] object-cover object-top -mb-3 group-hover:scale-105 transition-transform duration-500 rounded-t-lg"
                    />
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="pt-2 flex items-center justify-between text-[12.5px] font-bold text-[#1D4ED8] group-hover:text-[#1E40AF]">
                  <span>AI Talent Matching Engine</span>
                  <span>→</span>
                </div>
              </div>
              {/* Title Below Card */}
              <div className="p-3 pt-0 font-bold text-[14.5px] text-[#0B0F19] text-left">
                Job Portal Website Development
              </div>
            </div>

            {/* Card 3: Live Event Management Platform on Laptop Mockup */}
            <div className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group cursor-pointer">
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                
                {/* Upper Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-extrabold text-[15px] text-[#E11D48] tracking-tight">Live Event</span>
                  <span className="text-[10px] font-bold bg-[#E11D48] text-white px-2 py-0.5 rounded-sm uppercase">Conferencing</span>
                </div>

                {/* Card Preview Graphic (Laptop with Speaker Lineup) */}
                <div className="my-3 rounded-[10px] overflow-hidden border border-slate-200 bg-gradient-to-br from-[#FFE4E6] via-[#FECDD3] to-[#FDE047] p-2.5 relative aspect-[16/10] flex items-center justify-center">
                  <div className="w-[85%] bg-[#0F172A] rounded-t-md p-1 shadow-lg border border-slate-400 text-[6px] text-white text-center">
                    <div className="bg-[#881337] py-0.5 font-bold tracking-wide">IT'S TIME TO BOOST YOUR BUSINESS</div>
                    <div className="py-2 flex justify-center space-x-1.5 bg-slate-900">
                      <div className="w-5 h-5 rounded-full bg-rose-400 border border-white overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Speaker" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-5 h-5 rounded-full bg-amber-400 border border-white overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Speaker" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="bg-rose-600 text-white font-bold py-0.5 text-[6px]">REGISTER NOW</div>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="pt-2 flex items-center justify-between text-[12.5px] font-bold text-[#E11D48] group-hover:text-[#BE123C]">
                  <span>Virtual Event Streaming Platform</span>
                  <span>→</span>
                </div>
              </div>
              {/* Title Below Card */}
              <div className="p-3 pt-0 font-bold text-[14.5px] text-[#0B0F19] text-left">
                Live Event Website Development
              </div>
            </div>

          </div>

          {/* View All Portfolio Centered Button */}
          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14px] transition-all shadow-sm"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Pastel Statistics & CTA Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 max-w-[1240px] mx-auto">
            {/* Card 1: Lavender / Purple */}
            <div className="bg-[#DDD6FE] rounded-[16px] p-6 text-center flex flex-col items-center justify-center min-h-[140px] shadow-xs">
              <div className="text-[32px] sm:text-[36px] font-[900] text-[#0B0F19] leading-none mb-1">
                23+
              </div>
              <div className="text-[13px] sm:text-[13.5px] font-[700] text-slate-800">
                Years Experience
              </div>
            </div>

            {/* Card 2: Mint / Cyan */}
            <div className="bg-[#99F6E4] rounded-[16px] p-6 text-center flex flex-col items-center justify-center min-h-[140px] shadow-xs">
              <div className="text-[32px] sm:text-[36px] font-[900] text-[#0B0F19] leading-none mb-1">
                320+
              </div>
              <div className="text-[13px] sm:text-[13.5px] font-[700] text-slate-800">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Card 3: Soft Coral / Pink */}
            <div className="bg-[#FECDD3] rounded-[16px] p-6 text-center flex flex-col items-center justify-center min-h-[140px] shadow-xs">
              <div className="text-[32px] sm:text-[36px] font-[900] text-[#0B0F19] leading-none mb-1">
                2800+
              </div>
              <div className="text-[13px] sm:text-[13.5px] font-[700] text-slate-800">
                Satisfied Clients
              </div>
            </div>

            {/* Card 4: Deep Teal / Blue CTA */}
            <div className="bg-[#005F96] rounded-[16px] p-6 text-center flex flex-col items-center justify-center min-h-[140px] shadow-md text-white">
              <div className="text-[16px] sm:text-[17px] font-[800] leading-snug mb-3 text-white">
                Want to start Projects
              </div>
              <a
                href="#quote-form"
                className="bg-white text-[#005F96] hover:bg-slate-100 font-[800] text-[13px] px-6 py-2 rounded-[4px] shadow-sm transition-all inline-block"
              >
                Get Estimation
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. SECTION: "Our Cutting Edge WordPress Development Services Include" (Exact 1:1 Match)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F9FD] text-slate-900 relative font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Our Cutting Edge WordPress Development Services Include
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#556987] leading-relaxed">
              We offer several WordPress development services at a fraction of the cost. Some of them are:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1240px] mx-auto items-stretch">
            {/* Card 1: Development Of Custom Plugins */}
            <div className="relative bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,134,198,0.22)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col text-left cursor-pointer group overflow-hidden border border-slate-100">
              
              {/* Animated Background Overlay: Starts from Bottom-Right and moves towards Top-Left on Hover */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_10%,#E6F5FD_45%,#BEE7FC_100%)] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none rounded-[12px]" />

              {/* Top Accent Gradient Line (Dark Blue -> Sky Blue) */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150 ease-out z-10" />
              {/* Bottom Accent Gradient Line (Sky Blue -> Dark Blue) */}
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

              <div className="w-12 h-12 rounded-[10px] bg-[#EDE9FE] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 relative z-10">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#9333EA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Monitor frame */}
                  <rect x="5" y="6" width="26" height="19" rx="2.5" />
                  <line x1="13" y1="29" x2="23" y2="29" />
                  <line x1="18" y1="25" x2="18" y2="29" />
                  {/* Internal gear / plugin elements */}
                  <circle cx="18" cy="14" r="3.5" />
                  <path d="M18 9 V10.5 M18 17.5 V19 M13 14 H14.5 M21.5 14 H23" />
                  <path d="M14.5 10.5 L15.5 11.5 M20.5 16.5 L21.5 17.5 M14.5 17.5 L15.5 16.5 M20.5 11.5 L21.5 10.5" />
                  <line x1="9" y1="21" x2="12" y2="21" />
                  <line x1="24" y1="21" x2="27" y2="21" />
                </svg>
              </div>
              <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3.5 leading-snug relative z-10">
                Development Of Custom Plugins
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.75] flex-1 relative z-10">
                Our WordPress development team can create custom plugins with advanced features that extend your website's functionality and improve the user experience.
              </p>
            </div>

            {/* Card 2: Installation & Configuration Of WordPress */}
            <div className="relative bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,134,198,0.22)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col text-left cursor-pointer group overflow-hidden border border-slate-100">
              
              {/* Animated Background Overlay: Starts from Bottom-Right and moves towards Top-Left on Hover */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_10%,#E6F5FD_45%,#BEE7FC_100%)] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none rounded-[12px]" />

              {/* Top Accent Gradient Line (Dark Blue -> Sky Blue) */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150 ease-out z-10" />
              {/* Bottom Accent Gradient Line (Sky Blue -> Dark Blue) */}
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

              <div className="w-12 h-12 rounded-[10px] bg-[#DCFCE7] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 relative z-10">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Browser window */}
                  <rect x="5" y="5" width="26" height="23" rx="2.5" />
                  <line x1="5" y1="12" x2="31" y2="12" />
                  <circle cx="9" cy="8.5" r="1" fill="#16A34A" />
                  <circle cx="13" cy="8.5" r="1" fill="#16A34A" />
                  <circle cx="17" cy="8.5" r="1" fill="#16A34A" />
                  {/* Gear & configuration tool */}
                  <circle cx="18" cy="20" r="3.2" />
                  <path d="M18 15 V16.2 M18 23.8 V25 M13 20 H14.2 M21.8 20 H23" />
                  <path d="M14.5 16.5 L15.4 17.4 M20.6 22.6 L21.5 23.5 M14.5 23.5 L15.4 22.6 M20.6 17.4 L21.5 16.5" />
                </svg>
              </div>
              <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3.5 leading-snug relative z-10">
                Installation & Configuration Of WordPress
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.75] flex-1 relative z-10">
                Need assistance related to WordPress setup? Our team assists you with WordPress installation and setup help you use it easily in your organization and customize it as required.
              </p>
            </div>

            {/* Card 3: Wordpress Web Development Services */}
            <div className="relative bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,134,198,0.22)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col text-left cursor-pointer group overflow-hidden border border-slate-100">
              
              {/* Animated Background Overlay: Starts from Bottom-Right and moves towards Top-Left on Hover */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_10%,#E6F5FD_45%,#BEE7FC_100%)] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none rounded-[12px]" />

              {/* Top Accent Gradient Line (Dark Blue -> Sky Blue) */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150 ease-out z-10" />
              {/* Bottom Accent Gradient Line (Sky Blue -> Dark Blue) */}
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

              <div className="w-12 h-12 rounded-[10px] bg-[#FFEDD5] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 relative z-10">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#EA580C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Monitor / Layout */}
                  <rect x="5" y="6" width="26" height="19" rx="2.5" />
                  <line x1="13" y1="29" x2="23" y2="29" />
                  <line x1="18" y1="25" x2="18" y2="29" />
                  {/* 6 grid cards representation inside monitor */}
                  <rect x="9" y="10" width="4.5" height="4" rx="0.5" />
                  <rect x="15.75" y="10" width="4.5" height="4" rx="0.5" />
                  <rect x="22.5" y="10" width="4.5" height="4" rx="0.5" />
                  <rect x="9" y="16" width="4.5" height="4" rx="0.5" />
                  <rect x="15.75" y="16" width="4.5" height="4" rx="0.5" />
                  <rect x="22.5" y="16" width="4.5" height="4" rx="0.5" />
                </svg>
              </div>
              <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3.5 leading-snug relative z-10">
                Wordpress Web Development Services
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.75] flex-1 relative z-10">
                Our WordPress development team possesses hands-on experience in creating simple and complex eCommerce websites that align with your business goals and budget.
              </p>
            </div>
          </div>

          {/* Connect Now Centered Button */}
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[14px] sm:text-[15px] transition-all shadow-sm active:scale-95"
            >
              Connect Now
            </a>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. SECTION: WHY CHOOSE FIREVY (KEY METRICS & SUCCESS STATS)
          ========================================================================= */}

      {/* =========================================================================
          5. SECTION 4: WHY CHOOSE FIREVY (KEY METRICS & SUCCESS STATS)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[12px] font-bold text-[#005F96] tracking-wider uppercase bg-[#E0F2FE] px-3 py-1 rounded-full">
                Why Firevy.co
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-[800] text-slate-950 tracking-tight leading-tight">
                Engineering High-Performance WordPress Ecosystems
              </h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                We combine deep PHP architectural expertise, modern frontend frameworks (React & Gutenberg), and proactive enterprise DevOps to deliver WordPress platforms that outperform competitors.
              </p>

              <ul className="space-y-2.5 pt-2">
                {[
                  '100% Intellectual Property & Source Code Handover',
                  'Strict NDA & Zero Vendor Lock-in Policy',
                  'Dedicated Project Manager & Transparent Jira Tracking',
                  'Guaranteed < 1 Second Page Load Times'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2.5 text-[13.5px] font-[600] text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { number: '950+', label: 'WordPress Sites Delivered', sub: 'Across 25+ Global Industries' },
                { number: '120+', label: 'Certified WP Developers', sub: 'Senior Engineers & Architects' },
                { number: '99.8%', label: 'Client Satisfaction', sub: '5-Star Verified Clutch Reviews' },
                { number: '95+', label: 'Google PageSpeed Score', sub: 'Optimized Core Web Vitals' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#F8FAFC] rounded-[14px] p-6 border border-slate-200/80 hover:border-[#005F96]/40 transition-all hover:shadow-md"
                >
                  <div className="text-[32px] sm:text-[38px] font-[800] text-[#005F96] leading-none mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[14px] font-[700] text-slate-900 mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[12px] text-slate-500 font-normal">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. SECTION 5: WORDPRESS TECH STACK & TOOLS (Tabbed Category View)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F1F5F9] text-slate-900 relative font-sans border-b border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight leading-tight mb-3">
              Modern WordPress Technology Stack
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We leverage cutting-edge tools, modern PHP standards, and decoupled cloud architectures to build bulletproof WordPress solutions.
            </p>
          </div>

          {/* Tech Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'cms', label: 'CMS & Page Builders' },
              { id: 'languages', label: 'Languages & Frontend' },
              { id: 'database', label: 'Database & Caching' },
              { id: 'infrastructure', label: 'Hosting & DevOps' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTechTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-[13.5px] font-[700] transition-all cursor-pointer ${
                  activeTechTab === tab.id
                    ? 'bg-[#005F96] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack[activeTechTab]?.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[12px] p-5 shadow-sm border border-slate-200 flex items-center space-x-4 hover:border-[#005F96] transition-all"
              >
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <div className="text-[15px] font-[700] text-slate-900">{item.name}</div>
                  <div className="text-[12px] text-slate-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. SECTION 6: SOME OF THE KEY BENEFITS OF USING WORDPRESS (Exact 1:1 Match)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Some Of The Key Benefits Of Using WordPress
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#556987] leading-relaxed">
              WordPress offers a number of advantages over another platform. Some of them are:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1240px] mx-auto items-stretch">
            {/* Card 1: Ease Of Use */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Puzzle piece */}
                  <path d="M12 6 H24 A2 2 0 0 1 26 8 V14 A3 3 0 0 0 29 17 A3 3 0 0 0 26 20 V26 A2 2 0 0 1 24 28 H18 A3 3 0 0 0 15 31 A3 3 0 0 0 12 28 H8 A2 2 0 0 1 6 26 V20 A3 3 0 0 1 9 17 A3 3 0 0 1 6 14 V8 A2 2 0 0 1 8 6 H12" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Ease Of Use
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                WordPress is easy to use technology and with an intuitive interface. This means anyone can easily add new pages, content, images, etc.
              </p>
            </div>

            {/* Card 2: SEO-Friendly */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Laptop with Gear */}
                  <rect x="7" y="9" width="22" height="15" rx="2" />
                  <line x1="4" y1="27" x2="32" y2="27" strokeWidth="2.5" />
                  <circle cx="23" cy="11" r="4.5" fill="#fff" stroke="#0086C6" strokeWidth="1.8" />
                  <path d="M23 8.5 V9.5 M23 12.5 V13.5 M20.5 11 H21.5 M24.5 11 H25.5" strokeWidth="1.8" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                SEO-Friendly
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                The programming language behind WordPress is immaculate and simple, making it easy for you to rank your pages on search engines to read and index.
              </p>
            </div>

            {/* Card 3: Customizable */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Code Brackets </> */}
                  <path d="M12 11 L5 18 L12 25" />
                  <path d="M24 11 L31 18 L24 25" />
                  <line x1="20" y1="9" x2="16" y2="27" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Customizable
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                You can totally customize the site's look and feel to make your brand stand away from competitors and a unique experience for your visitors.
              </p>
            </div>

            {/* Card 4: Plugins */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Browser window with circular reload arrow */}
                  <rect x="5" y="6" width="26" height="24" rx="2.5" />
                  <line x1="5" y1="12" x2="31" y2="12" />
                  <circle cx="8.5" cy="9" r="0.75" fill="#0086C6" />
                  <circle cx="11.5" cy="9" r="0.75" fill="#0086C6" />
                  <circle cx="14.5" cy="9" r="0.75" fill="#0086C6" />
                  {/* Circular reload arrow */}
                  <path d="M18 16 A5 5 0 1 1 14 19" />
                  <polyline points="14 15 14 19 18 19" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Plugins
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                You can easily add any new feature like calendar, contact form, etc., to your site as WordPress makes this possible with its plugins, most of which are free.
              </p>
            </div>

            {/* Card 5: Scalable */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Bar Chart with Arrow */}
                  <line x1="6" y1="30" x2="30" y2="30" strokeWidth="2.2" />
                  <rect x="8" y="20" width="4" height="10" rx="0.5" />
                  <rect x="15" y="15" width="4" height="15" rx="0.5" />
                  <rect x="22" y="10" width="4" height="20" rx="0.5" />
                  {/* Trend Arrow */}
                  <path d="M8 15 L28 6" strokeWidth="2" />
                  <polyline points="23 6 28 6 28 11" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Scalable
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                WordPress grows with your business, and you can add several pages or blog posts on your site without compromising upon the performance and speed.
              </p>
            </div>

            {/* Card 6: Multi-User Site */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Multi-node circuit / touch */}
                  <circle cx="18" cy="10" r="3" />
                  <circle cx="10" cy="18" r="2.5" />
                  <circle cx="26" cy="18" r="2.5" />
                  <circle cx="8" cy="24" r="2" />
                  <circle cx="28" cy="24" r="2" />
                  <path d="M18 13 V18 M18 18 H12.5 M18 18 H23.5 M10 20.5 V22 M26 20.5 V22" />
                  {/* Pointer hand */}
                  <path d="M16 19 L16 13 A1.5 1.5 0 0 1 19 13 L19 18 L22 20 C23 21 23 24 21 27 L18 31 L14 27 L13 22 Z" fill="#fff" stroke="#0086C6" strokeWidth="1.6" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Multi-User Site
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                In WordPress CMS, you can set up several users for the website and provide access levels and capabilities to each user as per your choice.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. SECTION 6.5: PROCESS WE FOLLOW (8-Step Interactive Snake Pipeline)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
              Process We Follow
            </h2>
          </div>

          <div className="max-w-[1240px] mx-auto relative">
            {/* Top Row: Steps 01 to 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10">
              
              {/* Step 01: Requirement Gathering */}
              <div className="bg-[#EDE9FE]/75 border border-[#DDD6FE] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Purple Lightbulb Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-[#8B5CF6]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 A7 7 0 0 0 11 13 C11 17 14 19 14 22 H22 C22 19 25 17 25 13 A7 7 0 0 0 18 6 Z" />
                        <line x1="14" y1="25" x2="22" y2="25" />
                        <line x1="15" y1="28" x2="21" y2="28" />
                        <line x1="18" y1="2" x2="18" y2="4" />
                        <line x1="9" y1="6" x2="10.5" y2="7.5" />
                        <line x1="27" y1="6" x2="25.5" y2="7.5" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">01</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Requirement Gathering
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.
                  </p>
                </div>
              </div>

              {/* Step 02: Designs, Wireframes, & Mockups */}
              <div className="bg-[#DCFCE7]/75 border border-[#BBF7D0] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Cyan Pen Tool Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-[#06B6D4]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 L23 11 L13 21 L8 22 L9 17 Z" />
                        <circle cx="18" cy="11" r="1.5" fill="#06B6D4" />
                        <path d="M6 30 C10 26 14 26 18 30" />
                        <circle cx="6" cy="30" r="1.5" />
                        <circle cx="18" cy="30" r="1.5" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">02</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Designs, Wireframes, & Mockups
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.
                  </p>
                </div>
              </div>

              {/* Step 03: Prototype Demo */}
              <div className="bg-[#FFEDD5]/75 border border-[#FED7AA] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Orange Device / Prototype Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-[#F97316]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#F97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="10" width="12" height="18" rx="2" />
                        <rect x="17" y="6" width="12" height="18" rx="2" />
                        <circle cx="13" cy="24" r="1.2" fill="#F97316" />
                        <circle cx="23" cy="20" r="1.2" fill="#F97316" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">03</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Prototype Demo
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.
                  </p>
                </div>
              </div>

              {/* Step 04: Changes And Confirmation */}
              <div className="bg-[#FEF9C3]/75 border border-[#FEF08A] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Amber Reload Gears Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-[#D97706]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="18" r="4" />
                        <path d="M18 8 A10 10 0 0 1 28 18" />
                        <polyline points="24 18 28 18 28 14" />
                        <path d="M18 28 A10 10 0 0 1 8 18" />
                        <polyline points="12 18 8 18 8 22" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">04</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Changes And Confirmation
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.
                  </p>
                </div>
              </div>

            </div>

            {/* Middle Connecting Loop Track (100% Column-Locked to Grid for Absolute Pixel-Perfect Alignment) */}
            <div className="hidden lg:block my-7 relative">
              {/* Outer Loop Track Border */}
              <div className="h-14 border border-[#CBD5E1] rounded-[16px] relative px-3">
                
                {/* Flow Direction Arrows along the track */}
                {/* Top Track Rightward Flow Arrows */}
                <div className="absolute -top-[11px] left-0 right-0 flex justify-around pointer-events-none px-[12%]">
                  <span className="text-[#94A3B8] text-[12px]">►</span>
                  <span className="text-[#94A3B8] text-[12px]">►</span>
                  <span className="text-[#94A3B8] text-[12px]">►</span>
                </div>

                {/* Bottom Track Leftward Flow Arrows */}
                <div className="absolute -bottom-[11px] left-0 right-0 flex justify-around pointer-events-none px-[12%]">
                  <span className="text-[#94A3B8] text-[12px]">◄</span>
                  <span className="text-[#94A3B8] text-[12px]">◄</span>
                  <span className="text-[#94A3B8] text-[12px]">◄</span>
                </div>

                {/* 4-Column Aligned Connectors and Nodes */}
                <div className="grid grid-cols-4 gap-5 lg:gap-6 h-full items-center">
                  
                  {/* Column 1: Step 01 (Top) & Step 08 (Bottom) */}
                  <div className="relative h-full flex flex-col justify-between items-center">
                    {/* Top Connector Down with Arrowhead */}
                    <div className="absolute -top-7 h-7 flex flex-col items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[6px] border-t-[#94A3B8]" />
                    </div>
                    {/* Top Node (Purple) */}
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#8B5CF6] -translate-y-1/2 shadow-xs" />

                    {/* Bottom Node (Lime) */}
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#84CC16] translate-y-1/2 shadow-xs" />
                    {/* Bottom Connector Up with Arrowhead */}
                    <div className="absolute -bottom-7 h-7 flex flex-col-reverse items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[6px] border-b-[#94A3B8]" />
                    </div>
                  </div>

                  {/* Column 2: Step 02 (Top) & Step 07 (Bottom) */}
                  <div className="relative h-full flex flex-col justify-between items-center">
                    {/* Top Connector Down with Arrowhead */}
                    <div className="absolute -top-7 h-7 flex flex-col items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[6px] border-t-[#94A3B8]" />
                    </div>
                    {/* Top Node (Green) */}
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#10B981] -translate-y-1/2 shadow-xs" />

                    {/* Bottom Node (Purple) */}
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#A855F7] translate-y-1/2 shadow-xs" />
                    {/* Bottom Connector Up with Arrowhead */}
                    <div className="absolute -bottom-7 h-7 flex flex-col-reverse items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[6px] border-b-[#94A3B8]" />
                    </div>
                  </div>

                  {/* Column 3: Step 03 (Top) & Step 06 (Bottom) */}
                  <div className="relative h-full flex flex-col justify-between items-center">
                    {/* Top Connector Down with Arrowhead */}
                    <div className="absolute -top-7 h-7 flex flex-col items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[6px] border-t-[#94A3B8]" />
                    </div>
                    {/* Top Node (Orange) */}
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#F97316] -translate-y-1/2 shadow-xs" />

                    {/* Bottom Node (Cyan) */}
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#0284C7] translate-y-1/2 shadow-xs" />
                    {/* Bottom Connector Up with Arrowhead */}
                    <div className="absolute -bottom-7 h-7 flex flex-col-reverse items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[6px] border-b-[#94A3B8]" />
                    </div>
                  </div>

                  {/* Column 4: Step 04 (Top) & Step 05 (Bottom) */}
                  <div className="relative h-full flex flex-col justify-between items-center">
                    {/* Top Connector Down with Arrowhead */}
                    <div className="absolute -top-7 h-7 flex flex-col items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[6px] border-t-[#94A3B8]" />
                    </div>
                    {/* Top Node (Amber/Yellow) */}
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#EAB308] -translate-y-1/2 shadow-xs" />

                    {/* Bottom Node (Pink) */}
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#EC4899] translate-y-1/2 shadow-xs" />
                    {/* Bottom Connector Up with Arrowhead */}
                    <div className="absolute -bottom-7 h-7 flex flex-col-reverse items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[6px] border-b-[#94A3B8]" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Row: Steps 08, 07, 06, 05 (Displayed left to right as 08, 07, 06, 05) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10 mt-6 lg:mt-0">
              
              {/* Step 08: SEO */}
              <div className="bg-[#FEF9C3]/75 border border-[#FEF08A] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Lime SEO Magnifying Glass Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-[#65A30D]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#65A30D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="16" cy="16" r="8" />
                        <line x1="22" y1="22" x2="30" y2="30" strokeWidth="2.8" />
                        <text x="10.5" y="18.5" fontSize="6" fontWeight="bold" fill="#65A30D" stroke="none">SEO</text>
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">08</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    SEO
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.
                  </p>
                </div>
              </div>

              {/* Step 07: Support And Maintenance */}
              <div className="bg-[#F3E8FF]/75 border border-[#E9D5FF] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Purple Support / Wrench Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-[#9333EA]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#9333EA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="7" width="26" height="22" rx="2.5" />
                        <line x1="5" y1="13" x2="31" y2="13" />
                        <circle cx="9" cy="10" r="0.8" fill="#9333EA" />
                        <circle cx="12" cy="10" r="0.8" fill="#9333EA" />
                        <circle cx="15" cy="10" r="0.8" fill="#9333EA" />
                        <path d="M14 24 L22 16" />
                        <path d="M21 15 L23 17" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">07</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Support And Maintenance
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement
                  </p>
                </div>
              </div>

              {/* Step 06: Deployment */}
              <div className="bg-[#E0F2FE]/75 border border-[#BAE6FD] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Green Laptop with Rocket Launch Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-[#16A34A]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        {/* Laptop base */}
                        <rect x="7" y="12" width="22" height="15" rx="2" />
                        <line x1="4" y1="27" x2="32" y2="27" strokeWidth="2.5" />
                        {/* Rocket launching from screen */}
                        <path d="M18 5 C15 7 14 11 14 15 L18 16 L22 15 C22 11 21 7 18 5 Z" fill="#fff" />
                        <circle cx="18" cy="10" r="1.5" fill="#16A34A" />
                        <path d="M14 15 L11 17 L12 20 L15 18" />
                        <path d="M22 15 L25 17 L24 20 L21 18" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">06</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Deployment
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client's platform.
                  </p>
                </div>
              </div>

              {/* Step 05: Development */}
              <div className="bg-[#FFE4E6]/75 border border-[#FECDD3] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Pink Browser Window with </> Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-[#EC4899]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#EC4899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="7" width="26" height="22" rx="2.5" />
                        <line x1="5" y1="13" x2="31" y2="13" />
                        <circle cx="8" cy="10" r="0.8" fill="#EC4899" />
                        <circle cx="11" cy="10" r="0.8" fill="#EC4899" />
                        <path d="M13 18 L10 21 L13 24" />
                        <path d="M23 18 L26 21 L23 24" />
                        <line x1="19" y1="17" x2="17" y2="25" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">05</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Development
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. SECTION 7: BUSINESS FRIENDLY HIRING MODELS (Exact 1:1 Match to Reference)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F9FD] text-slate-900 relative font-sans border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#556987] leading-relaxed max-w-3xl mx-auto">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-[1280px] mx-auto items-stretch">
            {/* Model 1: Fixed Price */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
              <div>
                {/* Purple Money Bag SVG Icon */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#8B5CF6] mb-3">
                  <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {/* Bag top cinch */}
                    <path d="M14 8 C14 6 16 5 18 5 C20 5 22 6 22 8 Z" />
                    <line x1="13" y1="10" x2="23" y2="10" strokeWidth="2.2" />
                    {/* Bag body */}
                    <path d="M14 10 C9 14 7 28 9 30 C11 32 25 32 27 30 C29 28 27 14 22 10 Z" />
                    {/* Dollar sign */}
                    <path d="M18 15 V25 M15.5 17.5 C15.5 16 17 15 18 15 C19.5 15 20.5 16 20.5 17.5 C20.5 20 15.5 19.5 15.5 22 C15.5 23.5 16.5 24.5 18 24.5 C19.5 24.5 20.5 23.5 20.5 22" strokeWidth="1.6" />
                  </svg>
                </div>

                <h3 className="text-center text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3">
                  Fixed Price
                </h3>

                <p className="text-center text-[12.5px] sm:text-[13px] text-[#556987] leading-[1.65] mb-6">
                  If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.
                </p>

                <ul className="space-y-2.5 mb-6 text-left">
                  {[
                    'Optimal flexibility',
                    'Agile team',
                    'Small projects',
                    'Complete control over budget'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center space-x-2 text-[12.5px] sm:text-[13px] text-[#475569] font-[500]">
                      <Check className="w-4 h-4 text-[#0086C6] stroke-[2.5] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="w-full inline-flex items-center justify-center py-2.5 px-6 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[13.5px] transition-all shadow-sm active:scale-95 text-center"
                >
                  Hire Now
                </a>
              </div>
            </div>

            {/* Model 2: Time Material */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
              <div>
                {/* Green Stopwatch / Timer SVG Icon */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#22C55E] mb-3">
                  <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {/* Top button */}
                    <line x1="18" y1="4" x2="18" y2="7" strokeWidth="2.5" />
                    <line x1="15" y1="4" x2="21" y2="4" strokeWidth="2" />
                    {/* Timer circle */}
                    <circle cx="18" cy="20" r="12" />
                    {/* Clock hand */}
                    <polyline points="18 14 18 20 22 20" strokeWidth="2" />
                    {/* Motion speed streaks on left */}
                    <line x1="2" y1="16" x2="5" y2="16" strokeWidth="1.8" />
                    <line x1="1" y1="20" x2="4" y2="20" strokeWidth="1.8" />
                    <line x1="2" y1="24" x2="5" y2="24" strokeWidth="1.8" />
                  </svg>
                </div>

                <h3 className="text-center text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3">
                  Time Material
                </h3>

                <p className="text-center text-[12.5px] sm:text-[13px] text-[#556987] leading-[1.65] mb-6">
                  If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.
                </p>

                <ul className="space-y-2.5 mb-6 text-left">
                  {[
                    'No hidden costs',
                    'Working based hours',
                    'Monthly billing',
                    'Pay only for measurable work'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center space-x-2 text-[12.5px] sm:text-[13px] text-[#475569] font-[500]">
                      <Check className="w-4 h-4 text-[#0086C6] stroke-[2.5] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="w-full inline-flex items-center justify-center py-2.5 px-6 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[13.5px] transition-all shadow-sm active:scale-95 text-center"
                >
                  Hire Now
                </a>
              </div>
            </div>

            {/* Model 3: Dedicated Team */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
              <div>
                {/* Orange Team Avatars SVG Icon */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#F97316] mb-3">
                  <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {/* Center Person */}
                    <circle cx="18" cy="12" r="4.5" />
                    <path d="M12 28 C12 23 14.5 21 18 21 C21.5 21 24 23 24 28" />
                    {/* Left Person */}
                    <circle cx="9" cy="14" r="3.5" />
                    <path d="M5 27 C5 23.5 7 22 9.5 22 C10.8 22 11.8 22.5 12.5 23.5" />
                    {/* Right Person */}
                    <circle cx="27" cy="14" r="3.5" />
                    <path d="M31 27 C31 23.5 29 22 26.5 22 C25.2 22 24.2 22.5 23.5 23.5" />
                  </svg>
                </div>

                <h3 className="text-center text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3">
                  Dedicated Team
                </h3>

                <p className="text-center text-[12.5px] sm:text-[13px] text-[#556987] leading-[1.65] mb-6">
                  If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.
                </p>

                <ul className="space-y-2.5 mb-6 text-left">
                  {[
                    'No hidden costs',
                    '160 hours of assured work',
                    'Monthly billing',
                    'Pay only for measurable work'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center space-x-2 text-[12.5px] sm:text-[13px] text-[#475569] font-[500]">
                      <Check className="w-4 h-4 text-[#0086C6] stroke-[2.5] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="w-full inline-flex items-center justify-center py-2.5 px-6 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[13.5px] transition-all shadow-sm active:scale-95 text-center"
                >
                  Hire Now
                </a>
              </div>
            </div>

            {/* Model 4: Buckets Approach */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
              <div>
                {/* Cyan / Teal Gears SVG Icon */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#06B6D4] mb-3">
                  <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {/* Main Gear */}
                    <circle cx="15" cy="20" r="5" />
                    <path d="M15 13 V15 M15 25 V27 M8 20 H10 M20 20 H22 M10 15 L11.5 16.5 M18.5 23.5 L20 25 M10 25 L11.5 23.5 M18.5 16.5 L20 15" />
                    {/* Secondary Gear */}
                    <circle cx="24" cy="12" r="3.5" />
                    <path d="M24 7 V8.5 M24 15.5 V17 M19 12 H20.5 M27.5 12 H29 M20.5 8.5 L21.5 9.5 M26.5 14.5 L27.5 15.5 M20.5 15.5 L21.5 14.5 M26.5 9.5 L27.5 8.5" />
                  </svg>
                </div>

                <h3 className="text-center text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3">
                  Buckets Approach
                </h3>

                <p className="text-center text-[12.5px] sm:text-[13px] text-[#556987] leading-[1.65] mb-6">
                  A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.
                </p>

                <ul className="space-y-2.5 mb-6 text-left">
                  {[
                    'Direct Resource Monitoring',
                    'Less Risk',
                    'Less budget',
                    'Pay only for measurable work'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center space-x-2 text-[12.5px] sm:text-[13px] text-[#475569] font-[500]">
                      <Check className="w-4 h-4 text-[#0086C6] stroke-[2.5] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="w-full inline-flex items-center justify-center py-2.5 px-6 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[13.5px] transition-all shadow-sm active:scale-95 text-center"
                >
                  Hire Now
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          9. SECTION 8: FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight leading-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Find instant answers to common questions about our WordPress development services, timelines, and security standards.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-[10px] overflow-hidden transition-all bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between font-[700] text-[14.5px] sm:text-[15.5px] text-slate-900 hover:text-[#005F96] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-300 shrink-0 ml-4 ${
                      openFaq === idx ? 'rotate-180 text-[#005F96]' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-[13.5px] text-slate-600 leading-[1.7] border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          10. SECTION 9: "What Sets Us Apart As Wordpress Development Company?"
              (Exact 1:1 Match to User Reference Screenshot)
          ========================================================================= */}
      <section id="quote-form" className="py-16 sm:py-20 bg-[#F0F7FB] text-slate-900 relative font-sans">
        <Container>
          {/* Section Title */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
              What Sets Us Apart As Wordpress Development Company?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-[1240px] mx-auto">
            
            {/* Left Column: 5 Feature Items */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Feature 1: Flexible-Engagement-Models */}
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  {/* Hand holding avatars icon */}
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="11" r="3.2" />
                    <circle cx="11" cy="13" r="2.5" />
                    <circle cx="25" cy="13" r="2.5" />
                    <path d="M14 18 C14 15.5 15.8 14.5 18 14.5 C20.2 14.5 22 15.5 22 18" />
                    {/* Holding Hand */}
                    <path d="M6 24 C10 24 14 26 18 26 C22 26 26 24 30 24" />
                    <path d="M10 24 L7 28 C7 29 8 30 9 30 L20 30 C24 30 28 27 30 25" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    Flexible-Engagement-Models
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    Total customized and customer-centric engagement models facilitating hourly or fixed rate hiring of developers.
                  </p>
                </div>
              </div>

              {/* Feature 2: 100% Transparency */}
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  {/* Two Intersecting Circles (Venn diagram) */}
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="15" cy="18" r="7.5" />
                    <circle cx="21" cy="18" r="7.5" />
                    {/* Hatched lines in the top circle */}
                    <line x1="15" y1="11" x2="21" y2="17" strokeWidth="1.2" />
                    <line x1="17" y1="11" x2="23" y2="17" strokeWidth="1.2" />
                    <line x1="19" y1="12" x2="24" y2="17" strokeWidth="1.2" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    100% Transparency
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    100% transparency policy to keep our client and our team on the same page.
                  </p>
                </div>
              </div>

              {/* Feature 3: Experienced Developers */}
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  {/* Developer Figure with Laptop & </> */}
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {/* Cap / Head */}
                    <circle cx="18" cy="11" r="3.5" />
                    <path d="M14 9 C14 6.5 22 6.5 22 9 Z" />
                    {/* Shoulders */}
                    <path d="M11 20 C11 16.5 13.5 15.5 18 15.5 C22.5 15.5 25 16.5 25 20" />
                    {/* Screen with </> */}
                    <rect x="10" y="20" width="16" height="11" rx="2" fill="white" />
                    <path d="M14 24 L12 25.5 L14 27" />
                    <path d="M22 24 L24 25.5 L22 27" />
                    <line x1="19" y1="23.5" x2="17" y2="27.5" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    Experienced Developers
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.
                  </p>
                </div>
              </div>

              {/* Feature 4: Timely Delivery */}
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  {/* Stopwatch / Clock with Speed Lines */}
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="19" cy="19" r="8" />
                    <line x1="19" y1="15" x2="19" y2="19" strokeWidth="1.8" />
                    <line x1="19" y1="19" x2="22" y2="19" strokeWidth="1.8" />
                    <line x1="19" y1="7" x2="19" y2="9.5" strokeWidth="2" />
                    <line x1="16.5" y1="7" x2="21.5" y2="7" strokeWidth="2" />
                    {/* Motion lines on left */}
                    <line x1="6" y1="15" x2="8.5" y2="15" strokeWidth="1.5" />
                    <line x1="5" y1="19" x2="8" y2="19" strokeWidth="1.5" />
                    <line x1="6" y1="23" x2="8.5" y2="23" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    Timely Delivery
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    We value the time and are particular about timely deliveries by following the highest quality standards.
                  </p>
                </div>
              </div>

              {/* Feature 5: Technical Support */}
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  {/* Gear / Wrench in Hand */}
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {/* Cog / Gear */}
                    <circle cx="18" cy="13" r="3.5" />
                    <path d="M18 7 V8.5 M18 17.5 V19 M12 13 H13.5 M22.5 13 H24" />
                    <path d="M13.8 8.8 L14.9 9.9 M21.1 16.1 L22.2 17.2 M13.8 17.2 L14.9 16.1 M21.1 9.9 L22.2 8.8" />
                    {/* Hand Support */}
                    <path d="M8 26 C12 26 15 28 19 28 C23 28 26 26 29 26" />
                    <path d="M11 26 L8 30 C8 31 9 32 10 32 L21 32 C25 32 28 29 30 27" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    Technical Support
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: "Let's Discuss" Form Card */}
            <div className="lg:col-span-6 relative">
              
              {/* Outer Form Container */}
              <div className="bg-white rounded-[10px] border border-slate-300/80 p-7 sm:p-9 shadow-sm relative overflow-visible">
                
                {/* Decorative Top-Left Accent Ribbon / Flag Badge */}
                <div className="absolute -top-[1px] -left-[1px] w-9 h-9 pointer-events-none overflow-hidden">
                  <div className="w-0 h-0 border-t-[34px] border-t-[#0284C7] border-r-[34px] border-r-transparent relative">
                    {/* Beige / gold diagonal accent */}
                    <div className="absolute top-[-34px] left-0 w-0 h-0 border-t-[38px] border-t-transparent border-l-[38px] border-l-[#FDE68A]/70" />
                  </div>
                </div>

                {/* Decorative Bottom-Right Triangle Accent */}
                <div className="absolute -bottom-1 -right-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[14px] border-r-[#0284C7] pointer-events-none" />

                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-[22px] font-[800] text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-[14px] text-slate-600 max-w-sm mx-auto">
                      Thank you for contacting Firevy.co. Our team will review your project requirements and get in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-center text-[22px] font-[800] text-[#0B0F19] mb-5 tracking-tight">
                      Let's Discuss
                    </h3>

                    {/* Your name * */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name *"
                        className="w-full px-4 py-3 text-[13.5px] rounded-[4px] border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] bg-white transition-all"
                      />
                    </div>

                    {/* Email ID * */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email ID *"
                        className="w-full px-4 py-3 text-[13.5px] rounded-[4px] border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] bg-white transition-all"
                      />
                    </div>

                    {/* Mobile Number * with +91 Country Code Box */}
                    <div className="flex">
                      <div className="px-3.5 py-3 bg-slate-50 border border-r-0 border-slate-300 rounded-l-[4px] text-[13.5px] font-semibold text-slate-700 flex items-center justify-center shrink-0 select-none">
                        <span>+91 •</span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Mobile Number *"
                        className="w-full px-4 py-3 text-[13.5px] rounded-r-[4px] border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] bg-white transition-all"
                      />
                    </div>

                    {/* Tell us more about your project * */}
                    <div>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your project *"
                        className="w-full px-4 py-3 text-[13.5px] rounded-[4px] border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] bg-white transition-all resize-none"
                      />
                    </div>

                    {/* Cloudflare Turnstile Mockup Badge */}
                    <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[4px] px-4 py-2.5 flex items-center justify-between select-none">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-[13px] font-[600] text-slate-800">Success!</span>
                      </div>

                      <div className="flex flex-col items-end">
                        <div className="flex items-center space-x-1.5">
                          {/* Cloudflare Cloud Logo */}
                          <svg viewBox="0 0 24 16" className="w-6 h-4" fill="#F48120">
                            <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          </svg>
                          <span className="text-[9px] font-black tracking-wider text-slate-800 uppercase">CLOUDFLARE</span>
                        </div>
                        <div className="text-[8px] text-slate-400 space-x-1">
                          <span className="hover:underline cursor-pointer">Privacy</span>
                          <span>•</span>
                          <span className="hover:underline cursor-pointer">Help</span>
                        </div>
                      </div>
                    </div>

                    {/* Send Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[15px] transition-all shadow-sm cursor-pointer active:scale-[0.99]"
                      >
                        Send
                      </button>
                    </div>
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

export default WordPressDevelopmentService;

