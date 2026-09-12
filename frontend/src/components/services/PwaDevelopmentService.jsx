import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Zap,
  ShieldCheck,
  Clock,
  Headphones,
  Users,
  Layers,
  Star,
  ExternalLink,
  Code2,
  TrendingUp,
  DollarSign,
  Phone,
  MessageCircle,
  Globe,
  Smartphone,
  Bell,
  RefreshCw,
  Gauge,
  WifiOff
} from 'lucide-react';

export const PwaDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const pwaCapabilities = [
    {
      title: 'Service Workers & Offline Caching',
      desc: 'Ensure reliable offline access and instantaneous page loads with smart background caching and pre-caching strategies using Google Workbox.',
      icon: <WifiOff className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'App Shell Architecture',
      desc: 'Separate static UI structure from dynamic content, achieving lightning-fast initial load times and smooth mobile navigation.',
      icon: <Layers className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Web Push Notifications',
      desc: 'Re-engage users directly on mobile and desktop devices with targeted, real-time push notifications without needing app store downloads.',
      icon: <Bell className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Add to Home Screen & Installability',
      desc: 'Deliver a native-like installation prompt with web app manifests, standalone display modes, and custom branded splash screens.',
      icon: <Smartphone className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Ultra-Fast Performance & SEO Friendly',
      desc: 'Achieve 95+ Google Lighthouse scores, superior Core Web Vitals, and full search engine discoverability with server-side hydration.',
      icon: <Gauge className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Cross-Device Responsiveness',
      desc: 'Single unified codebase delivering pixel-perfect, adaptive UI across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
      icon: <Globe className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const pwaBenefits = [
    {
      title: 'Zero App Store Friction',
      desc: 'Users install and access your app directly via URL links with zero 100MB download wait times and no app store commissions.'
    },
    {
      title: 'Higher Conversion Rates',
      desc: 'Sub-second page speeds and instant offline loading reduce bounce rates significantly and boost eCommerce conversion rates up to 50%.'
    },
    {
      title: 'Cost-Effective Single Codebase',
      desc: 'Build once and deploy across iOS, Android, macOS, and Windows, dramatically slashing development and long-term maintenance overhead.'
    },
    {
      title: 'Reduced Data Usage & Lightweight Size',
      desc: 'PWAs consume up to 90% less storage space than native mobile apps, making them accessible to users on low-bandwidth connections.'
    },
    {
      title: 'Continuous Background Sync',
      desc: 'Synchronize user actions, cart updates, and form submissions automatically once network connectivity is restored.'
    },
    {
      title: 'Enhanced Security over HTTPS',
      desc: 'Strict end-to-end HTTPS encryption prevents packet sniffing, man-in-the-middle attacks, and unauthorized content tampering.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'E-Commerce Marketplace PWA',
      category: 'Retail & E-Commerce',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Real-Time News & Media Portal PWA',
      category: 'Publishing & Media',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Enterprise Field Task Manager PWA',
      category: 'Enterprise SaaS & Offline Tool',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'Healthcare Patient Portal PWA',
      category: 'HealthTech & Telehealth',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'Travel & Hotel Booking PWA',
      category: 'Hospitality & Travel',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'FinTech Investment & Portfolio Tracker',
      category: 'FinTech & Banking',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    }
  ];

  const faqs = [
    {
      q: '1. What is a Progressive Web App (PWA)?',
      a: 'A Progressive Web App is a website that looks and behaves just like a mobile app. It supports offline functionality, push notifications, and home screen installation while being accessible via regular web browsers.'
    },
    {
      q: '2. Do PWAs work on both iOS and Android?',
      a: 'Yes, modern iOS Safari and Android Chrome fully support Progressive Web App features including Add to Home Screen, service worker caching, and Web Push notifications.'
    },
    {
      q: '3. Can a PWA work completely offline?',
      a: 'Yes! Using Service Workers and IndexedDB, PWAs can cache static assets and transactional data locally, allowing users to browse products, read articles, or fill forms even without internet access.'
    },
    {
      q: '4. How does PWA improve SEO and website ranking?',
      a: 'PWAs are indexed by Google just like standard web pages, but their superior loading speeds, high Lighthouse scores, and responsive UX significantly boost organic search engine rankings.'
    },
    {
      q: '5. How much does custom PWA development cost?',
      a: 'PWA development is significantly more cost-effective than building separate iOS and Android native apps because it leverages a single unified web codebase and modern modern frontend frameworks.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Progressive Web App Development Company in USA | PWA Development Services"
        description="Sapphire is a leading Progressive Web App development company in USA. We build custom PWAs with offline capabilities, push notifications, and fast loading speeds."
        canonical="/services/pwd"
      />

      {/* =========================================================================
          1. HERO SECTION (1:1 Exact Match with Reference)
          ========================================================================= */}
      <section className="pt-4 pb-10 sm:pt-6 sm:pb-14 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext & CTA Button */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Progressive Web App Development Company in USA
              </h1>
              
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] font-normal font-sans">
                Deliver lightning-fast, app-like experiences directly through web browsers with offline access, push notifications, and ultra-responsive performance.
              </p>

              {/* CTA Action Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/pwa_hero_illustration.jpg"
                  alt="Progressive Web App Development Company in USA"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. TRUSTED BRAND LOGOS STRIP (Full Width Infinite Auto-Scroll Marquee)
          ========================================================================= */}
      <section className="py-2 bg-white border-b border-slate-200/70 overflow-hidden">
        <BrandLogoMarquee />
      </section>

      {/* =========================================================================
          3. BEST PROGRESSIVE WEB APP DEVELOPMENT COMPANY (Section 2)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-[28px] sm:text-[34px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Best Progressive Web App Development Company
              </h2>
              <div className="space-y-4 text-[14.5px] text-[#475569] leading-[1.8]">
                <p>
                  Progressive Web Applications (PWAs) represent the pinnacle of modern web engineering, combining the universal discoverability of websites with the immersive interactivity and hardware performance of native mobile applications.
                </p>
                <p>
                  As an award-winning PWA development company, we craft feature-rich, ultra-lightweight progressive web apps utilizing React, Next.js, Vue, Angular, and Google Workbox. We ensure your digital experience loads instantaneously even in low-connectivity areas, driving unprecedented user engagement and maximizing revenue conversion.
                </p>
              </div>
            </div>

            {/* Right Column: PWA Architecture Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/pwa_features_illustration.jpg"
                  alt="Best Progressive Web App Development Company"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. KEY PWA CAPABILITIES (Grid)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Key Progressive Web App Capabilities
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Comprehensive PWA engineering designed to eliminate app store boundaries and maximize conversion rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {pwaCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[12px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-[10px] bg-[#E0F2FE] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[18px] font-[800] text-[#0B0F19]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#475569] leading-[1.65]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. BENEFITS OF PWA DEVELOPMENT
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Benefits of Custom Progressive Web Apps
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Why global brands choose Progressive Web Apps to replace or augment traditional native mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {pwaBenefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[12px] border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#006B8F] shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="text-[17px] font-[800] text-[#0B0F19]">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-[#475569] leading-[1.65]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. OUR PREMIUM SERVICES (10 White Pill Cards with Arrow)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          7. RECENT PROJECTS SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Recent PWA Projects
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Discover high-performing progressive web applications delivering native speed across global user bases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-[14px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-52 bg-slate-100 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-semibold text-[#006B8F]">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-[17px] font-[800] text-[#0B0F19] group-hover:text-[#006B8F] transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[13px] font-[600] text-[#006B8F]">Explore Case Study</span>
                    <ArrowRight className="w-4 h-4 text-[#006B8F] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. VIDEO TESTIMONIALS
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          9. TECHNOLOGY STACK WE USE
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (Accordion)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Find answers to commonly asked questions regarding Progressive Web App (PWA) development.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-[10px] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-6 py-4.5 text-left font-[700] text-[15.5px] text-[#0B0F19] flex justify-between items-center hover:text-[#006B8F] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#006B8F]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-[14px] text-[#475569] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          11. FEATURED IN LOGOS GRID (18 Recognitions)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          12. HIRE DEDICATED DEVELOPERS CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-[#005478] to-[#007EA7] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <h2 className="text-[28px] sm:text-[36px] font-[900] tracking-tight">
                Ready to Launch a High-Converting PWA?
              </h2>
              <p className="text-[15px] text-blue-100 leading-relaxed max-w-2xl">
                Collaborate with our certified PWA architects to transform your web presence into an instant-loading app experience.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white hover:bg-slate-100 text-[#005478] font-[800] text-[15px] rounded-[8px] shadow-xl hover:shadow-2xl transition-all inline-flex items-center space-x-2"
              >
                <span>Hire PWA Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PwaDevelopmentService;
