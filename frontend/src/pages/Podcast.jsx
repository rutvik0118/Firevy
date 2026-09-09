import React, { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import { Link } from 'react-router-dom';
import BRAND from '../constants/brand';
import TrustRecognitionBanner from '../components/home/TrustRecognitionBanner';
import BrandLogoGrid from '../components/home/BrandLogoGrid';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import {
  Play, ArrowRight, X, Volume2, Calendar, Clock, Share2, Sparkles, Check, ChevronRight, Mic, Headphones, Eye
} from 'lucide-react';

const podcastEpisodesData = [
  {
    id: 'mobile-app-testing',
    title: 'Mobile App Testing And Quality Assurance Ensuring A Seamless...',
    fullTitle: 'Mobile App Testing And Quality Assurance Ensuring A Seamless User Experience',
    category: 'QUALITY ASSURANCE',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    desc: "In today's fast-paced digital world, mobile applications have become an integral part of our daily lives. From communication to shopping, entertainment to productivity, there's an app for almost everything.",
    fullArticle: `In today's fast-paced digital world, mobile applications have become an integral part of our daily lives. From communication to shopping, entertainment to productivity, there's an app for almost everything. 

However, with millions of apps available across App Store and Google Play, user expectations are higher than ever. A single bug, slow loading time, or crash can lead users to uninstall the app immediately and turn to a competitor.

Key Discussion Points:
• Automated vs. Manual Testing in Mobile Ecosystems
• Cross-Platform Performance Benchmarking (iOS & Android)
• Security Testing & Vulnerability Assessment
• Real Device Cloud Labs for Scalable QA Regression Testing`,
    duration: '18 min',
    date: 'Sep 02, 2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'why-business-needs-software-apps',
    title: 'Why Your Business Needs Software Applications',
    fullTitle: 'Why Your Business Needs Custom Software Applications in Modern Digital Economy',
    category: 'ENTERPRISE TECH',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    desc: "In today's fast-paced and digitally-driven world, businesses of all sizes and industries are recognizing the importance of integrating software solutions into their operations. Whether you run a small startup or a...",
    fullArticle: `In today's fast-paced and digitally-driven world, businesses of all sizes and industries are recognizing the importance of integrating software solutions into their operations. Whether you run a small startup or a large enterprise, custom software applications have become vital for maintaining growth, efficiency, and customer satisfaction.

In this episode, our solution architects breakdown how tailored enterprise applications streamline workflows, automate repetitive tasks, and unlock brand-new digital revenue streams.

Key Insights Covered:
• Modernizing Legacy Systems for Cloud Agility
• ROI of Bespoke Software vs Off-the-Shelf SaaS
• Scalability & Data Intelligence Integration
• Enhancing Customer Experience Through Digital Touchpoints`,
    duration: '24 min',
    date: 'Aug 28, 2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'chat-with-client',
    title: `A Chat With A Client: Why They Chose ${BRAND.name}`,
    fullTitle: `A Chat With A Client: Why They Chose ${BRAND.name} for Enterprise Scale`,
    category: 'CLIENT SUCCESS',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    desc: `There are several mobile app development companies worldwide. While searching for a reliable IT services provider, I came across ${BRAND.name} as they were ranking on the first page of...`,
    fullArticle: `There are several mobile app development companies worldwide. While searching for a reliable IT services provider, I came across ${BRAND.name} as they were ranking on the first page of search results and demonstrated technical excellence right from the initial discovery call.

In this candid client testimonial episode, we sit down with executive leaders who share their experience collaborating with our engineering team, from project inception through post-launch scaling.

Episode Highlights:
• Transparent Agile Project Management & Milestones
• Seamless Communication Across Global Time Zones
• On-Time & On-Budget Enterprise Project Delivery
• Long-Term Technical Support & Sustained Innovation`,
    duration: '15 min',
    date: 'Aug 15, 2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'ai-cloud-architecture',
    title: 'Unlocking Enterprise Growth with AI & Cloud Architecture',
    fullTitle: 'Unlocking Enterprise Growth with AI & Cloud Architecture',
    category: 'EMERGING TECH',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Explore how next-generation AI integrations, cloud scalability, microservices, and continuous delivery drive sustainable business agility for global enterprises.',
    fullArticle: `Artificial Intelligence and Cloud Architecture have shifted from optional technological upgrades to foundational business imperatives. In this deep dive, our lead AI engineers discuss actionable frameworks for integrating AI models into existing production software without interrupting business continuity.

Topics Explored:
• Scalable LLM & Generative AI Infrastructure
• Cloud Native Microservices Architecture
• Data Pipeline Optimization & Security Compliance
• Real-time Predictive Analytics for Decision Makers`,
    duration: '22 min',
    date: 'Jul 30, 2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'cybersecurity-best-practices',
    title: 'Cybersecurity Best Practices For Modern Web & Mobile Applications',
    fullTitle: 'Cybersecurity Best Practices For Modern Web & Mobile Applications',
    category: 'CYBERSECURITY',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    desc: 'Data breaches and cyber threats are escalating worldwide. Learn how proactive encryption, zero-trust architecture, and secure API protocols protect enterprise digital assets.',
    fullArticle: `Cybersecurity is no longer an afterthought—it is a core requirement for modern digital products. As applications handle sensitive user credentials, financial transactions, and proprietary business data, implementing robust defense-in-depth protocols is mandatory.

Key Topics Covered:
• Zero-Trust Network Architecture & OWASP Top 10 Safeguards
• End-to-End Encryption Standards for Mobile & Web Applications
• Automated Penetration Testing & API Vulnerability Scanning
• Regulatory Compliance (GDPR, HIPAA, ISO27001)`,
    duration: '19 min',
    date: 'Jul 18, 2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'devops-ci-cd-pipeline-automation',
    title: 'Accelerating Software Delivery With DevOps & CI/CD Automation',
    fullTitle: 'Accelerating Software Delivery With DevOps & CI/CD Automation',
    category: 'DEVOPS & CLOUD',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
    desc: 'Discover how automated testing pipelines, Kubernetes container orchestration, and Infrastructure as Code (IaC) enable continuous deployment with zero downtime.',
    fullArticle: `High-performing software development teams release updates multiple times a day with complete confidence. In this podcast episode, our cloud engineers break down how modern CI/CD automation pipelines eliminate deployment bottlenecks.

Episode Highlights:
• Building Resilience with Kubernetes & Microservice Orchestration
• Infrastructure as Code (IaC) with Terraform & AWS CloudFormation
• Zero-Downtime Blue-Green & Canary Deployments
• Real-time Application Performance Monitoring & APM Telemetry`,
    duration: '27 min',
    date: 'Jul 05, 2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'ui-ux-design-systems-scale',
    title: 'Designing Intuitive UI/UX Systems That Drive High Conversions',
    fullTitle: 'Designing Intuitive UI/UX Systems That Drive High Conversions',
    category: 'UI/UX DESIGN',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Great product design balances functional aesthetics with seamless user journeys. Explore how component libraries, design systems, and micro-interactions delight users.',
    fullArticle: `User experience directly impacts customer acquisition, retention, and conversion rates. In this episode, our principal UX designers share strategies for constructing scalable design systems that maintain brand consistency across web, mobile, and wearable platforms.

What You Will Learn:
• Establishing Unified Design Systems in Figma & Storybook
• User Psychology, Accessibility (WCAG 2.1), and Inclusive Design
• Designing Delightful Micro-Animations & Smooth Motion UI
• Data-Driven A/B Testing & Usability Research Methods`,
    duration: '16 min',
    date: 'Jun 22, 2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'cross-platform-flutter-react-native',
    title: 'Flutter vs React Native: Choosing The Right Framework in 2026',
    fullTitle: 'Flutter vs React Native: Choosing The Right Framework in 2026',
    category: 'MOBILE DEV',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    desc: 'Evaluating cross-platform mobile frameworks for speed, native performance, and codebase maintainability. A practical guide for startup founders and CTOs.',
    fullArticle: `Choosing between Flutter and React Native is one of the most critical decisions for engineering leaders. In this technical comparison episode, we evaluate performance benchmarks, developer ecosystem maturity, and native device API access.

In-Depth Comparison:
• Rendering Performance: Skia Engine vs JavaScript Bridge
• Code Reusability Across iOS, Android, Web & Desktop
• Ecosystem Ecosystem Maturity & Third-Party Library Integration
• Cost-Efficiency & Speed to Market for Early-Stage Startups`,
    duration: '23 min',
    date: 'Jun 10, 2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'fintech-blockchain-innovations',
    title: 'Fintech & Blockchain Innovations Shaping Global Digital Payments',
    fullTitle: 'Fintech & Blockchain Innovations Shaping Global Digital Payments',
    category: 'FINTECH',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    desc: 'How digital wallets, decentralized ledger technology, and instant payment gateways are revolutionizing financial transactions for millions of global users.',
    fullArticle: `The financial technology landscape is undergoing a massive transformation. From cross-border instant settlements to automated smart contracts, modern fintech applications demand high throughput and uncompromised security.

Key Insights:
• High-Frequency Payment Processing & Low-Latency Gateways
• Smart Contract Security Audits & Decentralized Finance (DeFi)
• Biometric Authentication & Fraud Detection Algorithms
• Future Trends in Central Bank Digital Currencies (CBDCs)`,
    duration: '20 min',
    date: 'May 29, 2026',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export const Podcast = () => {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeArticleModal, setActiveArticleModal] = useState(null);
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Podcasts | Learn About Tech On The Go | ${BRAND.name}`}
        description="Listen to our podcasts where we discuss leading technologies, taking a deep dive into gripping topics from software and app development world."
        canonical="/company/podcast"
      />

      {/* ============================================================
          1. HERO SECTION ("Learn About Tech On The Go")
          ============================================================ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F4F8FA] border-b border-slate-200/60 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-[800] text-slate-900 leading-[1.18] tracking-tight font-sans">
                Learn About Tech On The Go
              </h1>
              
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-slate-600 leading-relaxed font-[400] max-w-2xl font-sans">
                Listen to our podcasts where we discuss all leading technologies, taking a deep dive into gripping topics from the software and app development world. You'll see new episodes, which will undoubtedly light up new ideas.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg group font-sans"
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Illustration: 3D Headphones + Studio Microphone on Tablet Platform */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-full max-w-[480px] h-[340px] md:h-[380px] flex items-center justify-center">
                
                {/* Outer Glow Circle */}
                <div className="absolute w-72 h-72 rounded-full bg-blue-400/10 blur-2xl animate-pulse" />

                {/* Vector / 3D Headphone + Microphone Illustration */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-2xl overflow-visible">
                    <defs>
                      <linearGradient id="tabletGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E2EEF4" />
                        <stop offset="100%" stopColor="#CBDDE8" />
                      </linearGradient>
                      <linearGradient id="headphoneBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                      <linearGradient id="headphoneCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#0284C7" />
                      </linearGradient>
                      <linearGradient id="micGold" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FBBF24" />
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#D97706" />
                      </linearGradient>
                      <linearGradient id="standChrome" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#94A3B8" />
                        <stop offset="50%" stopColor="#E2E8F0" />
                        <stop offset="100%" stopColor="#64748B" />
                      </linearGradient>
                      <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.15" />
                      </filter>
                    </defs>

                    {/* Isometric Base Tablet / Stand */}
                    <g filter="url(#shadow3d)">
                      <polygon points="100,260 250,190 400,260 250,330" fill="url(#tabletGradient)" stroke="#94A3B8" strokeWidth="2" />
                      <polygon points="100,260 250,330 250,342 100,272" fill="#B0C4DE" />
                      <polygon points="250,330 400,260 400,272 250,342" fill="#9FB5CE" />
                      
                      {/* Tablet Screen Details */}
                      <polygon points="120,258 250,198 380,258 250,318" fill="#F8FAFC" opacity="0.9" />
                      <line x1="180" y1="260" x2="320" y2="260" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                    </g>

                    {/* Microphone Base & Stand */}
                    <g filter="url(#shadow3d)">
                      {/* Base Ring */}
                      <ellipse cx="250" cy="255" rx="35" ry="16" fill="url(#standChrome)" />
                      <ellipse cx="250" cy="253" rx="30" ry="13" fill="#64748B" />

                      {/* Stand Stem */}
                      <rect x="246" y="160" width="8" height="95" rx="4" fill="url(#standChrome)" />
                      
                      {/* Mount Ring */}
                      <ellipse cx="250" cy="160" rx="26" ry="12" fill="none" stroke="url(#standChrome)" strokeWidth="5" />
                    </g>

                    {/* Microphone Capsule */}
                    <g filter="url(#shadow3d)">
                      {/* Mic Body */}
                      <rect x="234" y="105" width="32" height="65" rx="16" fill="url(#micGold)" />
                      
                      {/* Mic Mesh Lines */}
                      <line x1="234" y1="125" x2="266" y2="125" stroke="#78350F" strokeWidth="1.5" opacity="0.4" />
                      <line x1="234" y1="135" x2="266" y2="135" stroke="#78350F" strokeWidth="1.5" opacity="0.4" />
                      <line x1="234" y1="145" x2="266" y2="145" stroke="#78350F" strokeWidth="1.5" opacity="0.4" />
                      
                      {/* Vertical mesh divider */}
                      <line x1="250" y1="105" x2="250" y2="150" stroke="#78350F" strokeWidth="1.5" opacity="0.3" />
                    </g>

                    {/* 3D Over-Ear Headphones */}
                    <g filter="url(#shadow3d)">
                      {/* Headband Arch */}
                      <path
                        d="M 155,160 C 155,50 345,50 345,160"
                        fill="none"
                        stroke="url(#headphoneBlue)"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 160,155 C 160,60 340,60 340,155"
                        fill="none"
                        stroke="url(#headphoneCyan)"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />

                      {/* Left Ear Cup */}
                      <g transform="translate(130, 125)">
                        <rect x="0" y="0" width="38" height="68" rx="19" fill="url(#headphoneBlue)" />
                        <rect x="22" y="6" width="12" height="56" rx="6" fill="url(#headphoneCyan)" />
                        <ellipse cx="14" cy="34" rx="10" ry="22" fill="#1E293B" opacity="0.8" />
                      </g>

                      {/* Right Ear Cup */}
                      <g transform="translate(332, 125)">
                        <rect x="0" y="0" width="38" height="68" rx="19" fill="url(#headphoneBlue)" />
                        <rect x="4" y="6" width="12" height="56" rx="6" fill="url(#headphoneCyan)" />
                        <ellipse cx="24" cy="34" rx="10" ry="22" fill="#1E293B" opacity="0.8" />
                      </g>
                    </g>

                    {/* Floating Orange Music Note 🎵 */}
                    <g transform="translate(100, 70)" filter="url(#shadow3d)" className="animate-bounce" style={{ animationDuration: '3s' }}>
                      <circle cx="28" cy="28" r="24" fill="#F97316" />
                      {/* Music Note Icon inside */}
                      <path
                        d="M 24,34 C 24,36.2 22.2,38 20,38 C 17.8,38 16,36.2 16,34 C 16,31.8 17.8,30 20,30 C 20.8,30 21.5,30.3 22,30.7 L 22,20 L 34,17 L 34,28 C 34,30.2 32.2,32 30,32 C 27.8,32 26,30.2 26,28 C 26,25.8 27.8,24 30,24 C 30.8,24 31.5,24.3 32,24.7 L 32,21.2 L 24,23.2 L 24,34 Z"
                        fill="#FFFFFF"
                      />
                    </g>

                    {/* Cable Detail */}
                    <path
                      d="M 338,185 Q 360,250 280,265"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          2. PODCAST EPISODES LIST (Matching Reference Images 2, 3, 4)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 relative font-sans">
        <Container>
          <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
            {podcastEpisodesData.map((episode, idx) => {
              const isEven = idx % 2 === 0; // Alternating layout (Image left, then Image right)

              return (
                <div
                  key={episode.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center group text-left"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      onClick={() => setActiveVideoModal(episode)}
                      className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-100 aspect-[4/3] max-h-[420px] w-full"
                    >
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Dark Gradient Backdrop */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                        
                        {/* Centered Circular White Play Button */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-xs text-[#006B8F] shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <h2
                      onClick={() => setActiveVideoModal(episode)}
                      className="text-[22px] sm:text-[28px] md:text-[32px] font-[800] text-slate-900 leading-[1.25] tracking-tight group-hover:text-[#006B8F] transition-colors cursor-pointer font-sans"
                    >
                      {episode.title}
                    </h2>

                    <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-sans font-[400]">
                      {episode.desc}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => setActiveArticleModal(episode)}
                        className="inline-flex items-center space-x-2 text-[#006B8F] font-[700] text-[15px] sm:text-[16px] hover:text-[#004e69] transition-colors group/btn font-sans cursor-pointer"
                      >
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          3. AWARDS & RECOGNITION BADGES RIBBON ("Proud To Have Picked These Up Along The Way")
          ============================================================ */}
      <TrustRecognitionBanner />

      {/* ============================================================
          4. BRAND LOGOS GRID ("Trusted By The World's Leading Brands")
          ============================================================ */}
      <BrandLogoGrid />

      {/* ============================================================
          5. CLIENT REVIEWS CAROUSEL ("What Our Clients Say")
          ============================================================ */}
      <ClientReviewsDarkSection />

      {/* ============================================================
          6. CONTACT CTA BANNER & NEWSLETTER SUBSCRIBE SECTION
          ============================================================ */}
      <WorkTogetherNewsletterSection
        title="Need to know more about our offerings? Contact us today!"
        subtitle="Our podcasts are specific, as guests discuss their experience, giving listeners ideas to harness their full potential."
        buttonText="Contact-Us"
      />

      {/* ============================================================
          3. VIDEO / AUDIO PLAYER MODAL
          ============================================================ */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn font-sans">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-200">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${activeVideoModal.videoUrl}?autoplay=1`}
                title={activeVideoModal.fullTitle}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Episode Meta & Details */}
            <div className="p-6 text-left space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span className="text-[#006B8F] font-bold uppercase">{activeVideoModal.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeVideoModal.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {activeVideoModal.fullTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {activeVideoModal.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          4. READ MORE ARTICLE MODAL
          ============================================================ */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn font-sans">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border border-slate-200 text-left p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-extrabold text-[#006B8F] uppercase tracking-wider">
                  {activeArticleModal.category} • EPISODE SUMMARY
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 leading-snug">
                  {activeArticleModal.fullTitle}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-4"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Article Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full">
              <img src={activeArticleModal.image} alt={activeArticleModal.fullTitle} className="w-full h-full object-cover" />
            </div>

            {/* Article Content Body */}
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
              {activeArticleModal.fullArticle}
            </div>

            {/* Footer Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  const current = activeArticleModal;
                  setActiveArticleModal(null);
                  setActiveVideoModal(current);
                }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[#006B8F] hover:bg-[#005478] text-white font-bold text-sm transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Play Episode</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center space-x-1.5 text-slate-600 hover:text-slate-900 text-sm font-semibold cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedId ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Podcast;
