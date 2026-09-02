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
  Music,
  Headphones,
  Radio,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Download,
  Share2,
  Sparkles,
  Star,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Lock,
  Check,
  Brain,
  Sliders,
  Users,
  DollarSign,
  MessageSquare,
  Shield,
  Search,
  Bell
} from 'lucide-react';

export const SpotifyLikeAppDevelopmentService = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState('listener');
  const [isPlaying, setIsPlaying] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Music & Audio Streaming Platform',
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

  // 12 Key Features matching Sapphire Solutions Spotify-Like App
  const spotifyFeatures = [
    {
      title: 'AI Personalized Playlists',
      desc: 'Users get a curated selection of unique music based on their search history, listening habits, and favorite genres.',
      icon: Brain
    },
    {
      title: 'Listen Offline Engine',
      desc: 'Users can download high-fidelity audio tracks and podcasts to listen offline without consuming mobile data.',
      icon: Download
    },
    {
      title: 'Simple & Intuitive UI',
      desc: 'From 1-tap registration to high-resolution audio streaming, the app offers an ultra-fast, user-friendly interface.',
      icon: Play
    },
    {
      title: 'Free Signup & Freemium Model',
      desc: 'Free trial access transitioning into monthly subscription plans, allowing users to experience premium features.',
      icon: DollarSign
    },
    {
      title: 'Large Music & Podcast Catalogue',
      desc: 'Overwhelming content repository supporting millions of songs, podcasts, and audiobooks across all global genres.',
      icon: Music
    },
    {
      title: 'Group & Artist Following',
      desc: 'Users create music groups, follow favorite artists, share public playlists, and discover community recommendations.',
      icon: Users
    },
    {
      title: 'In-Built Programmatic Ads',
      desc: 'Monetize free tier listeners with programmatic audio ads, display banners, and sponsored playlist placements.',
      icon: Sliders
    },
    {
      title: 'Encrypted Offline Downloads',
      desc: 'AES-256 encrypted media storage ensuring downloaded audio cannot be extracted outside the official app.',
      icon: Lock
    },
    {
      title: 'Multi-Tier Subscriptions',
      desc: 'Support for Individual, Student, and Family subscription tiers with automated recurring payment gateways.',
      icon: CheckCircle2
    },
    {
      title: 'Direct Artist Communication',
      desc: 'Connect fans directly with verified independent artists for exclusive release previews and concert tickets.',
      icon: MessageSquare
    },
    {
      title: 'Enhanced User Engagement',
      desc: 'In-app lyrics sync, social media story sharing, live artist radio, and real-time listening activity feeds.',
      icon: Headphones
    },
    {
      title: '100% Custom White-Labeling',
      desc: 'White-label custom solution extending your media brand image with custom UI themes, logos, and features.',
      icon: Shield
    }
  ];

  // Admin & Analytics Control Capabilities
  const adminCapabilities = [
    { title: 'User Registration & Auth', desc: 'OAuth 2.0 social sign-in, multi-device session management, and age verification.' },
    { title: 'AI Recommendation Engine', desc: 'Monitor user listening activity with AI/ML algorithms to suggest relevant daily mixes.' },
    { title: 'Diverse Music Collections', desc: 'High-res FLAC, AAC, and MP3 audio stream management covering global regional catalogs.' },
    { title: 'Advanced Search & Filters', desc: 'Search tracks by artist, album, mood, tempo (BPM), language, or synced lyrics.' },
    { title: 'Smart Push Notifications', desc: 'Notify listeners about new album releases, live concert tickets, and promo discounts.' },
    { title: 'Artist Payout Analytics', desc: 'Automated stream counting, royalty calculations, and direct artist payouts.' }
  ];

  // Rich Technology Categories for Tech Stack Grid
  const techCategories = {
    backend: [
      { name: 'Python (Django/Flask)', desc: 'Primary server backend technology powering AI recommendation engines and machine learning music matching.' },
      { name: 'Node.js', desc: 'High-concurrency event-driven runtime handling millions of concurrent WebSockets audio streaming connections.' },
      { name: 'Java', desc: 'Robust enterprise framework executing automated stream DRM licensing and subscription billing.' },
      { name: '.NET', desc: 'Enterprise microservices architecture managing high-volume media asset storage and user databases.' },
      { name: 'Ruby on Rails', desc: 'Rapid MVP deployment framework for audio streaming and podcast management portals.' }
    ],
    frontend: [
      { name: 'React Native & Flutter', desc: 'Cross-platform mobile frameworks delivering 60 FPS smooth native audio playback on iOS & Android.' },
      { name: 'Kotlin (Android)', desc: 'Native Android audio background service execution ensuring uninterrupted music playback.' },
      { name: 'Swift (iOS)', desc: 'Native Apple AVFoundation audio engine with hardware-accelerated spatial audio support.' },
      { name: 'RxJava & RxKotlin', desc: 'Reactive streams handling real-time audio buffering, seek bars, and waveform visualization.' }
    ],
    database: [
      { name: 'MongoDB', desc: 'High-performance NoSQL document database storing song metadata, playlists, and user profiles.' },
      { name: 'PostgreSQL', desc: 'ACID-compliant database managing subscription ledgers, artist royalty contracts, and payments.' },
      { name: 'Redis Cache', desc: 'In-memory data store caching trending playlists, top charts, and search suggestions for instant loads.' },
      { name: 'SQLite & CoreData', desc: 'Local mobile database managing encrypted offline track downloads and playback state.' }
    ],
    devops: [
      { name: 'AWS CloudFront CDN', desc: 'Global Edge CDN delivering sub-second audio buffering and adaptive bitrate streaming.' },
      { name: 'Docker & Kubernetes', desc: 'Containerized microservices auto-scaling compute capacity during viral song drops.' },
      { name: 'CI/CD Pipelines', desc: 'Automated release pipelines ensuring zero-downtime app updates and SLA reliability.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile automation testing audio background controls and lock screen widgets.' },
      { name: 'BrowserStack', desc: 'Testing audio streaming quality across 500+ physical mobile devices and OS versions.' },
      { name: 'Katalon Studio', desc: 'Automated API performance and DRM media license security test suite.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint tracking platform managing audio engineering tasks and feature requests.' },
      { name: 'Slack', desc: 'Direct client communication channel connecting media engineers and project managers.' },
      { name: 'Microsoft Teams', desc: 'Weekly sprint demo reviews and architectural video check-ins.' },
      { name: 'Trello', desc: 'Visual Kanban boards for UI/UX audio player wireframe approvals.' }
    ]
  };

  // Official Sapphire Spotify-Like App FAQs
  const sapphireFaqs = [
    {
      q: '1. What is Spotify-like app development?',
      a: 'Audio streaming app development like Spotify creates a feature-rich music and podcast platform operating primarily on a freemium business model. Users enjoy basic features for free with ad support, or upgrade to paid monthly subscriptions for ad-free offline listening and high-fidelity audio.'
    },
    {
      q: '2. What technology stack is used to build a Spotify clone app?',
      a: 'Python, Node.js, and Java serve as the core backend technologies, paired with React Native, Flutter, or native Swift/Kotlin for mobile apps. Media delivery is powered by AWS CloudFront CDN, WebSockets, and Redis for sub-second audio buffering.'
    },
    {
      q: '3. How does the Spotify freemium business model function?',
      a: 'The platform earns revenue through two primary streams: recurring monthly subscriber fees for premium ad-free access, and programmatic audio/display advertisements served to free-tier listeners.'
    },
    {
      q: '4. Do you provide Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign a strict Non-Disclosure Agreement (NDA) before discussing your project to ensure complete confidentiality of your business model, customer data, and unique app features.'
    },
    {
      q: '5. Why choose Sapphire Software Solutions for Spotify-like app development?',
      a: 'With 23+ years in IT, 1,500+ successful projects, and a team of 200+ senior engineers, we deliver end-to-end white-label audio streaming apps backed by 24/7 SLA technical support.'
    },
    {
      q: '6. What post-launch support and SLA maintenance do you provide?',
      a: 'We provide continuous 24/7 server health monitoring, OS compatibility updates, performance tuning, new feature rollouts, and media DRM security patches.'
    },
    {
      q: '7. How can I monetize my audio streaming platform?',
      a: 'We guide clients in integrating multiple monetization channels: Tiered Subscriptions (Individual, Family, Student), In-App Audio Ads, Sponsored Playlists, Artist Tipping, and Exclusive Content Paywalls.'
    },
    {
      q: '8. How long does it take to develop a custom Spotify clone app?',
      a: 'Typical timelines range from 10 to 12 weeks for a fully functional MVP, and 4 to 6 months for an enterprise global audio streaming platform.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Spotify Like Music App Development | Audio Streaming App Development"
        description="Top Spotify-like app development company in USA. Build a custom audio streaming app like Spotify with AI playlists, offline listening, podcasts, and direct artist tools."
        canonical="/services/spotify-like-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Audio Streaming App Like Spotify Development Services in USA"
        subtitle="Rapidly transforming digital entertainment, Custom Spotify-Like Audio Streaming App Development Services empower music record labels, podcast platforms, and audio creators with Hi-Fi live audio streaming, AI playlists, and offline playback."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="spotify"
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
              <p className="text-xs text-slate-500 font-medium">Top Audio App Developer</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>200+ GOODFIRMS REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Verified Streaming Partner</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Get Spotify-Like App Development Services (1:1 Sapphire Dual Phone Mockup Layout) */}
      <section id="features-section" className="py-20 bg-[#F0F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get Spotify-Like App Development Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Spotify is more than just music. It has tales, podcasts, audiobooks, and the most diversified stuff imaginable. Make the action as simple and uncomplicated as possible by removing any extra steps.
            </p>
          </div>

          {/* 3-Column Layout: Left 3 Features + Center Dual "Musicon" Phone Mockup + Right 3 Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16">
            {/* Left 3 Feature Items */}
            <div className="lg:col-span-4 space-y-8">
              {spotifyFeatures.slice(0, 3).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-xl bg-[#D6EEF8] text-[#005F96] shrink-0 border border-cyan-200/60 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Dual Phone Mockup ("Musicon" Pink Headphone + Genre Search Screen 1:1 Match) */}
            <div className="lg:col-span-4 flex items-center justify-center relative py-4">
              <div className="flex items-center -space-x-12">
                {/* Front Phone: "Musicon" Splash Screen */}
                <div className="w-[200px] h-[410px] rounded-[36px] bg-slate-950 border-4 border-slate-800 p-2 shadow-2xl relative overflow-hidden text-left z-20">
                  <div className="bg-[#121212] w-full h-full rounded-[28px] p-4 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-pink-500/30 animate-pulse">
                      <Headphones className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-xl font-black text-white tracking-wide">Musicon</div>
                    <div className="text-[9px] text-pink-400 font-bold uppercase tracking-widest">Audio Streaming App</div>
                  </div>
                </div>

                {/* Back Phone: Genre Cards Search Screen */}
                <div className="w-[190px] h-[390px] rounded-[34px] bg-slate-950 border-4 border-slate-800 p-2 shadow-xl relative overflow-hidden text-left z-10">
                  <div className="bg-slate-900 w-full h-full rounded-[26px] p-2.5 flex flex-col justify-between text-white text-[9px]">
                    <div className="space-y-1.5">
                      <div className="font-extrabold text-xs text-white">Search</div>
                      <div className="bg-slate-800 p-1.5 rounded-md text-[8px] text-slate-400 flex items-center space-x-1">
                        <Search className="w-3 h-3 text-slate-400" />
                        <span>Songs, Artists, Podcasts...</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[8px] font-bold text-slate-300">Your Top Genres</div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-2 rounded-lg bg-pink-600 font-bold text-[8px] text-white">Kpop</div>
                        <div className="p-2 rounded-lg bg-indigo-600 font-bold text-[8px] text-white">Indie</div>
                        <div className="p-2 rounded-lg bg-[#1DB954] font-bold text-[8px] text-white">Pop</div>
                        <div className="p-2 rounded-lg bg-purple-600 font-bold text-[8px] text-white">R&B</div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[8px] font-bold text-slate-300">Browse All</div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-2 rounded-lg bg-blue-600 font-bold text-[8px] text-white">Made For You</div>
                        <div className="p-2 rounded-lg bg-amber-600 font-bold text-[8px] text-white">Podcasts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3 Feature Items */}
            <div className="lg:col-span-4 space-y-8">
              {spotifyFeatures.slice(3, 6).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-xl bg-[#D6EEF8] text-[#005F96] shrink-0 border border-cyan-200/60 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Remaining 6 Features Grid Below */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-200/80">
            {spotifyFeatures.slice(6).map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center font-bold mb-3 group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-[#005F96] transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                    <span>100% Custom Feature</span>
                    <span className="text-[#005F96] font-bold">Included</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Section 4: Admin & User Control Features */}
      <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              ENTERPRISE MEDIA ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Advanced User & Admin Control Features
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Empower listeners with rich personalized accounts and grant admins total control over global music catalogues and monetization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminCapabilities.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#005F96] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Success Stories & Stat Cards Section */}
      <SuccessStoriesSection category="spotify" />

      {/* Our Premium Services 10-Card Section */}
      <PremiumServicesGrid />

      {/* Sapphire Success Matrix */}
      <SuccessMatrix />

      {/* Sapphire 6-Card Technology Stack Grid */}
      <SapphireTechStackGrid domainName="audio streaming" richTechCategories={techCategories} />

      {/* Process We Follow - Sapphire 8-Step Timeline */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from initial blueprinting to UAT, deployment, and ongoing SLA maintenance."
      />

      {/* Trusted By World's Leading Brands & Featured In Media */}
      <TrustedBrandsGrid />

      {/* Official Sapphire Spotify-Like App FAQs */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Spotify Like App Development FAQs
            </h2>
            <p className="text-base text-slate-600">
              Clear answers regarding tech stack (Python/Node/Java), freemium business models, NDA agreements, and post-launch SLA maintenance.
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
                <span>BUILD YOUR AUDIO APP PLATFORM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Get Access to Top Audio Streaming Developers
              </h2>

              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a consultation with our audio technology architects today to launch your Spotify-like music app or podcast platform.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>100% Source Code Ownership & Signed NDA</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Sub-Second Audio Buffering CDN Architecture</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Freemium & Subscription Payment Gateways</span>
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
                      Thank you for contacting Sapphire Software Solutions. Our audio technology leads will review your project brief and respond within 2 business hours.
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
                          placeholder="e.g. David Miller"
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
                          placeholder="david@audiomedia.com"
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
                        placeholder="Tell us about target audio formats, DRM licensing, offline mode, or artist tools..."
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

export default SpotifyLikeAppDevelopmentService;
