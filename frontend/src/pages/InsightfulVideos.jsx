import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import { Link } from 'react-router-dom';
import BRAND from '../constants/brand';
import TrustMarquee from '../components/home/TrustMarquee';
import PremiumServicesGrid from '../components/home/PremiumServicesGrid';
import WorkProcessGrid from '../components/home/WorkProcessGrid';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import { ArrowRight, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const InsightfulVideos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const filterScrollRef = useRef(null);
  const storyScrollRef = useRef(null);

  const categories = [
    'All', 'Utilities', 'Ecommerce', 'Technology', 'Real Estate', 'HR', 
    'Logistics', 'Human Resource', 'HealthCare', 'Social', 'Entertainment', 
    'Personal Care & Cosmetic', 'Agriculture', 'Education', 'Marketplace', 'Food & Beverages'
  ];

  const innovativeVideos = [
    {
      id: 1,
      title: `Revolutionizing Diet & Nutrition App Development with ${BRAND.name} - Best AI Solution`,
      category: 'HealthCare',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
      client: 'NutriPlan'
    },
    {
      id: 2,
      title: 'Revolutionizing Water Distribution System: Our New App for National Water Supply (NWSC)',
      category: 'Utilities',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80',
      client: 'NWSC Utilities'
    },
    {
      id: 3,
      title: `Unlock Innovation with ${BRAND.name} Software Solutions: Hire Mobile App Developers in the US`,
      category: 'Technology',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
      client: 'WishQuake'
    },
    {
      id: 4,
      title: `Elevate Your Business with ${BRAND.name} Software Solutions: Hire iOS App Developers`,
      category: 'Technology',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80',
      client: 'BreathCraft'
    },
    {
      id: 5,
      title: `Unlock Innovation with ${BRAND.name} Software Solutions: Hire Android App Developers`,
      category: 'Ecommerce',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
      client: 'BeautyBee'
    },
    {
      id: 6,
      title: `Unlock Digital Excellence with ${BRAND.name} : Top Web Application Development Company`,
      category: 'Entertainment',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
      client: 'CineStream'
    },
    {
      id: 7,
      title: `Smart Real Estate Asset Management Platform with Real-time IoT Tracking`,
      category: 'Real Estate',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      client: 'PropTech Pro'
    },
    {
      id: 8,
      title: `Automated HR & Payroll Suite for Distributed Workforce Enterprises`,
      category: 'HR',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      client: 'HR Flow'
    },
    {
      id: 9,
      title: `Next-Gen Supply Chain & Logistics Control Tower for Cold Chain Cargo`,
      category: 'Logistics',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      client: 'LogiGlobal'
    }
  ];

  const storyTestimonials = [
    {
      id: 1,
      name: 'Tim',
      quote: `Hear out Tim got to say about working with Team ${BRAND.name} on building a complex and unique web application.`,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Client Expansion',
      quote: `Testimonial from client who has expanded their business using ${BRAND.name} Services`,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Pravin',
      quote: `Hear what Pravin has got to say about working with ${BRAND.name} Software Solutions`,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Canada Client',
      quote: `${BRAND.name} Successfully Delivered Web & Mobile App Solutions - Leading IT Company`,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Christina',
      quote: `${BRAND.name} Software Solutions iOS App Development Testimonial`,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const filteredVideos = activeCategory === 'All'
    ? innovativeVideos
    : innovativeVideos.filter(v => v.category === activeCategory);

  const scrollFilter = (direction) => {
    if (filterScrollRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      filterScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollStory = (direction) => {
    if (storyScrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      storyScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Insightful Videos | Unveiling Our Innovative Solutions | ${BRAND.name}`}
        description={`Explore insightful video showcases, technology demos, and client success stories from ${BRAND.name}.`}
        canonical="/company/insightful-videos"
      />

      {/* ============================================================
          1. HERO SECTION ("Now unleash the power of new ideas...") - Screenshot 1
          ============================================================ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F4F8FA] border-b border-slate-200/60 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <p className="text-[16px] sm:text-[17.5px] text-slate-600 leading-relaxed font-[400] max-w-xl font-sans">
                Now unleash the power of new ideas with our award-winning mobile app development company in USA. It's time to convert your ideas to life, whether you want solutions that work on iOS, Android, or both. Contact us now!
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg group font-sans"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: People Working on Mobile App Wireframe Vector */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-full max-w-[500px] h-[300px] sm:h-[340px] flex items-center justify-center">
                
                <svg viewBox="0 0 550 380" className="w-full h-full drop-shadow-xl overflow-visible">
                  {/* Central Smartphone Screen */}
                  <g transform="translate(180, 40)">
                    <rect x="0" y="0" width="160" height="280" rx="20" fill="#0F172A" stroke="#334155" strokeWidth="4" />
                    <rect x="8" y="10" width="144" height="260" rx="14" fill="#FFFFFF" />
                    
                    {/* User Profile UI */}
                    <circle cx="40" cy="40" r="14" fill="#0284C7" />
                    <rect x="62" y="32" width="60" height="6" rx="2" fill="#64748B" />
                    <rect x="62" y="44" width="40" height="5" rx="2" fill="#94A3B8" />

                    {/* Settings Widget */}
                    <rect x="25" y="70" width="110" height="45" rx="6" fill="#F1F5F9" />
                    <circle cx="45" cy="92.5" r="10" fill="#38BDF8" />

                    {/* Search Magnifier Graphic */}
                    <circle cx="120" cy="65" r="22" fill="#475569" opacity="0.9" />
                    <line x1="135" y1="80" x2="150" y2="95" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
                  </g>

                  {/* Character Kneeling Left */}
                  <g transform="translate(60, 140)">
                    <circle cx="30" cy="20" r="14" fill="#FED7AA" />
                    <path d="M 10,60 C 10,40 50,40 50,60 Z" fill="#0284C7" />
                    <path d="M 10,60 L 50,60 L 30,100 Z" fill="#0F172A" />
                  </g>

                  {/* Character Standing Right */}
                  <g transform="translate(370, 120)">
                    <circle cx="20" cy="18" r="14" fill="#FED7AA" />
                    <path d="M 5,55 C 5,35 35,35 35,55 Z" fill="#334155" />
                    <rect x="12" y="55" width="6" height="55" fill="#0F172A" />
                    <rect x="22" y="55" width="6" height="55" fill="#0F172A" />
                  </g>
                </svg>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          2. LOGOS MARQUEE STRIP
          ============================================================ */}
      <section className="py-6 bg-white border-b border-slate-100 overflow-hidden">
        <TrustMarquee />
      </section>

      {/* ============================================================
          3. "Unveiling Our Innovative Solution" - Screenshot 2
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-[32px] sm:text-[42px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              Unveiling Our Innovative Solution
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-sans font-[400] max-w-3xl mx-auto mb-8">
              From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation.
            </p>

            <h3 className="text-[22px] font-[800] text-[#006B8F] font-sans tracking-tight mb-1">
              Industry
            </h3>

            {/* Triangle Pointer */}
            <div className="flex justify-center mb-2">
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#EBF5FB]" />
            </div>

            {/* Filter Container with Outer Arrows */}
            <div className="relative max-w-5xl mx-auto flex items-center justify-center space-x-3">
              <button
                type="button"
                onClick={() => scrollFilter('left')}
                className="text-slate-800 hover:text-[#006B8F] transition-colors p-1"
              >
                <ChevronLeft className="w-7 h-7 stroke-[3]" />
              </button>

              <div className="bg-[#EBF5FB] rounded-[24px] p-5 border border-slate-200/60 shadow-xs flex-1 max-w-4xl">
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setVisibleCount(6);
                      }}
                      className={`px-4 py-2 rounded-[8px] text-[13px] font-[700] whitespace-nowrap transition-all font-sans ${
                        activeCategory === cat
                          ? 'bg-[#006B8F] text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollFilter('right')}
                className="text-slate-800 hover:text-[#006B8F] transition-colors p-1"
              >
                <ChevronRight className="w-7 h-7 stroke-[3]" />
              </button>
            </div>

          </div>

          {/* Video Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {filteredVideos.slice(0, visibleCount).map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideoModal(video.videoSrc)}
                className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left flex flex-col justify-between"
              >
                {/* 1:1 Sapphire Banner Thumbnail Graphic */}
                {video.id === 1 ? (
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#F2FAF4] p-4 flex items-center justify-between border-b border-slate-200">
                    <div className="flex-1 pr-2 text-left space-y-1 z-10">
                      <div className="flex items-center space-x-1 mb-2">
                        <span className="text-[14px] font-[900] text-[#006B8F]">{BRAND.name}</span>
                      </div>
                      <span className="text-[10px] font-[800] text-emerald-600 tracking-wider block uppercase">#NUTRITION</span>
                      <h5 className="text-[12.5px] font-[900] text-slate-800 leading-tight">YOUR GO-TO MEAL PLANNING AND NUTRITION APP</h5>
                    </div>
                    <div className="w-32 h-36 bg-white rounded-[12px] shadow-md border border-emerald-100 p-2 shrink-0 flex flex-col justify-between">
                      <div className="w-full h-12 bg-emerald-50 rounded-[6px] flex items-center justify-center text-emerald-600 font-bold text-xs">
                        NutriPlan
                      </div>
                      <div className="space-y-1">
                        <div className="w-full h-2 bg-slate-200 rounded" />
                        <div className="w-3/4 h-2 bg-slate-200 rounded" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#D0E7F7] hover:bg-[#BDE0F5] text-[#005B82] flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                ) : video.id === 2 ? (
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#EBF7FD] p-4 flex items-center justify-between border-b border-slate-200">
                    <div className="flex-1 pr-2 text-left space-y-1.5 z-10">
                      <div className="flex items-center space-x-1 mb-2">
                        <span className="text-[14px] font-[900] text-[#006B8F]">{BRAND.name}</span>
                      </div>
                      <h5 className="text-[12.5px] font-[900] text-[#005B82] leading-tight">National Water Supply Corporation (NWSC)</h5>
                      <p className="text-[10.5px] font-[600] text-slate-600 leading-tight">Streamlining Water Management, Introducing Innovative App</p>
                    </div>
                    <div className="w-24 h-36 bg-white rounded-[14px] shadow-md border border-cyan-200 p-1.5 shrink-0 flex flex-col items-center justify-center">
                      <div className="w-16 h-28 bg-[#E0F2FE] rounded-[10px] flex flex-col items-center justify-center p-1 text-center">
                        <div className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px] font-bold">💧</div>
                        <span className="text-[7.5px] font-[900] text-cyan-900 mt-1 leading-tight">NWSC Water App</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#D0E7F7] hover:bg-[#BDE0F5] text-[#005B82] flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                ) : video.id === 3 ? (
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#FFF7ED] p-4 flex items-center justify-between border-b border-slate-200">
                    <div className="flex-1 pr-2 text-left space-y-1.5 z-10">
                      <div className="flex items-center space-x-1 mb-1">
                        <span className="text-[14px] font-[900] text-[#006B8F]">{BRAND.name}</span>
                      </div>
                      <span className="text-[9.5px] font-[800] text-amber-600 uppercase block tracking-wider">#WISHLIST</span>
                      <h5 className="text-[13px] font-[900] text-amber-900 leading-tight">WishQuake: More than just a Wishlist App</h5>
                      <p className="text-[10px] font-[600] text-amber-800/80 leading-tight">Craft your wishlist collection on-the-go with our intuitive Wishlist App</p>
                    </div>
                    <div className="w-28 h-36 bg-white rounded-[14px] shadow-md border border-amber-200 p-1.5 shrink-0 flex items-center justify-center">
                      <div className="w-20 h-28 bg-[#FFEDD5] rounded-[10px] p-1 flex flex-col items-center justify-center text-center">
                        <span className="text-xl">🎁</span>
                        <span className="text-[8px] font-[900] text-amber-900 mt-1">WishQuake</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#D0E7F7] hover:bg-[#BDE0F5] text-[#005B82] flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                ) : video.id === 4 ? (
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#F8FAFC] p-4 flex items-center justify-between border-b border-slate-200">
                    <div className="flex-1 pr-2 text-left space-y-1.5 z-10">
                      <div className="flex items-center space-x-1 mb-1">
                        <span className="text-[14px] font-[900] text-[#006B8F]">{BRAND.name}</span>
                      </div>
                      <h5 className="text-[13px] font-[900] text-slate-900 leading-tight">BREATHCRAFT : Unleash Your Potential through Mindful Breathing</h5>
                      <p className="text-[10px] font-[500] text-slate-600 leading-tight">Breathwork empowers you to take control of your wellness journey.</p>
                    </div>
                    <div className="w-24 h-36 bg-white rounded-[14px] shadow-md border border-slate-200 p-1.5 shrink-0 flex items-center justify-center">
                      <div className="w-18 h-28 bg-slate-100 rounded-[10px] flex flex-col items-center justify-center text-center p-1">
                        <span className="text-xl">🧘</span>
                        <span className="text-[7.5px] font-[900] text-slate-800 mt-1">BREATHCRAFT</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#D0E7F7] hover:bg-[#BDE0F5] text-[#005B82] flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                ) : video.id === 5 ? (
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#1E1715] p-4 flex items-center justify-between border-b border-slate-800 text-amber-100">
                    <div className="flex-1 pr-2 text-left space-y-1.5 z-10">
                      <div className="flex items-center space-x-1 mb-1">
                        <span className="text-[14px] font-[900] text-amber-400">{BRAND.name}</span>
                      </div>
                      <h5 className="text-[13px] font-[900] text-amber-200 leading-tight">BEAUTYBEE - Discover Your Beauty Essentials</h5>
                      <p className="text-[10px] font-[500] text-amber-100/70 leading-tight">Where beauty meets convenience. Explore cosmetics and skincare products.</p>
                    </div>
                    <div className="w-24 h-36 bg-stone-900 rounded-[14px] shadow-md border border-amber-900/60 p-1.5 shrink-0 flex items-center justify-center">
                      <div className="w-18 h-28 bg-stone-800 rounded-[10px] flex flex-col items-center justify-center text-center p-1">
                        <span className="text-xl">✨</span>
                        <span className="text-[7.5px] font-[900] text-amber-300 mt-1">BEAUTYBEE</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#D0E7F7] hover:bg-[#BDE0F5] text-[#005B82] flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                ) : (
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#0A0E1A] p-4 flex items-center justify-between border-b border-slate-800 text-purple-100">
                    <div className="flex-1 pr-2 text-left space-y-1.5 z-10">
                      <div className="flex items-center space-x-1 mb-1">
                        <span className="text-[14px] font-[900] text-purple-400">{BRAND.name}</span>
                      </div>
                      <h5 className="text-[13px] font-[900] text-pink-400 tracking-wider leading-tight">CINESTREAM: STREAM. ENJOY</h5>
                      <p className="text-[10px] font-[500] text-slate-300 leading-tight">Find where your favorite movies are streaming with ease!</p>
                    </div>
                    <div className="w-28 h-32 bg-slate-900 rounded-[12px] shadow-md border border-purple-900/60 p-1.5 shrink-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-purple-950 rounded-[8px] flex flex-col items-center justify-center text-center p-1">
                        <span className="text-xl">🎬</span>
                        <span className="text-[7.5px] font-[900] text-pink-400 mt-1">CINESTREAM</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#D0E7F7] hover:bg-[#BDE0F5] text-[#005B82] flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Video Title Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h4 className="text-[14.5px] font-[800] text-slate-900 leading-snug font-sans group-hover:text-[#006B8F] transition-colors">
                    {video.title}
                  </h4>
                </div>

              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredVideos.length && (
            <div className="text-center mt-12">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans"
              >
                Load More Videos
              </button>
            </div>
          )}

        </Container>
      </section>

      {/* ============================================================
          4. "Our Story, Their Words" - Screenshot 3
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#EAF4FA] text-slate-900 font-sans border-b border-slate-200">
        <Container>
          
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-[32px] sm:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              Our Story, Their Words
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-sans font-[400] max-w-3xl mx-auto">
              From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
            </p>
          </div>

          {/* Story Slider Container */}
          <div className="relative max-w-6xl mx-auto">
            <div
              ref={storyScrollRef}
              className="flex items-stretch space-x-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-2"
            >
              {storyTestimonials.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideoModal('/Best Software Development Company in USA - Sapphire Software Sol.mp4')}
                  className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="bg-gradient-to-br from-[#0284C7] via-[#006B8F] to-[#0F172A] pt-8 pb-6 px-4 relative flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 400 120" className="absolute bottom-0 left-0 w-full h-16 pointer-events-none opacity-40" preserveAspectRatio="none">
                      <path d="M0,40 C150,90 250,10 400,60 L400,120 L0,120 Z" fill="#38BDF8" />
                    </svg>

                    <div className="relative z-10 w-28 h-28 rounded-full border-4 border-white/90 shadow-md overflow-hidden bg-slate-100 shrink-0">
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="bg-[#F4F9FC] p-5 flex-1 flex items-center justify-between space-x-3 border-t border-slate-200/80">
                    <p className="text-[13.5px] font-[700] text-slate-800 leading-snug font-sans text-left">
                      {item.quote}
                    </p>
                    <div className="w-9 h-9 rounded-full bg-[#006B8F] group-hover:bg-[#004D68] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                type="button"
                onClick={() => scrollStory('left')}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 shadow-md text-slate-700 hover:bg-[#006B8F] hover:text-white transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollStory('right')}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 shadow-md text-slate-700 hover:bg-[#006B8F] hover:text-white transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </Container>
      </section>

      {/* ============================================================
          5. OUR PREMIUM SERVICES (Screenshot 4)
          ============================================================ */}
      <PremiumServicesGrid />

      {/* ============================================================
          6. PROCESS WE FOLLOW (Screenshot 4)
          ============================================================ */}
      <WorkProcessGrid />

      {/* ============================================================
          7. CTA & NEWSLETTER SECTION
          ============================================================ */}
      <WorkTogetherNewsletterSection
        title="Ready To Get Started?"
        subtitle={`Learn how ${BRAND.name} can help you build better relationships with your customers. Start a conversation today.`}
        buttonText="Request A Free Quote"
      />

      {/* ============================================================
          VIDEO MODAL POPUP
          ============================================================ */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-[16px] overflow-hidden shadow-2xl border border-slate-700">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full">
              <video
                src={activeVideoModal}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default InsightfulVideos;
