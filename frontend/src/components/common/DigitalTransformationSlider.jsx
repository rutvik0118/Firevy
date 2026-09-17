import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 1. BeeCar CARE Logo (Exact Match to Screenshot)
const BeeCarLogo = () => (
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 rounded-xl bg-[#111827] flex items-center justify-center shadow-xs">
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path
          d="M16 4C10.5 4 6 8.5 6 14C6 21 16 28 16 28C16 28 26 21 26 14C26 8.5 21.5 4 16 4Z"
          fill="#FFC107"
        />
        <circle cx="16" cy="13" r="4.5" fill="#111827" />
        <circle cx="16" cy="13" r="2" fill="#FFC107" />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="text-[26px] sm:text-[30px] font-[900] text-[#D98E00] leading-none tracking-tight font-sans">
        BeeCar
      </span>
      <span className="text-[11px] sm:text-[12px] font-[900] text-[#111827] tracking-[0.28em] uppercase leading-none mt-1 font-sans">
        CARE
      </span>
    </div>
  </div>
);

// 2. Adani Logo (Gradient text)
const AdaniLogo = () => (
  <div className="flex items-center space-x-2">
    <span className="text-[34px] sm:text-[38px] font-[900] bg-gradient-to-r from-[#0072BC] via-[#5C2E91] to-[#E91E63] bg-clip-text text-transparent leading-none tracking-tight font-sans">
      adani
    </span>
  </div>
);

// 3. Waymark Maps Logo
const WaymarkLogo = () => (
  <div className="flex flex-col text-left">
    <div className="text-[28px] sm:text-[32px] font-[900] text-[#581C87] leading-none tracking-tight font-sans">
      Waymark
    </div>
    <div className="text-[24px] sm:text-[28px] font-[900] text-[#581C87] leading-none tracking-tight mt-0.5 font-sans">
      Maps
    </div>
  </div>
);

// 4. L&T Logo
const LtLogo = () => (
  <div className="flex items-center space-x-2.5">
    <div className="w-10 h-10 rounded-full border-2 border-[#005A9C] flex items-center justify-center font-[900] text-[#005A9C] text-[18px]">
      <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#005A9C" strokeWidth="3">
        <circle cx="18" cy="18" r="15" />
        <path d="M12 10 V25 H20" />
        <path d="M17 14 H25" />
        <path d="M21 10 V25" />
      </svg>
    </div>
    <div className="text-[18px] sm:text-[20px] font-[900] text-[#005A9C] tracking-tight leading-none uppercase font-sans">
      LARSEN & TOUBRO
    </div>
  </div>
);

// 5. Morris Garages (MG) Logo
const MgLogo = () => (
  <div className="flex items-center space-x-2.5">
    <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
      <polygon points="12,2 28,2 38,12 38,28 28,38 12,38 2,28 2,12" fill="none" stroke="#CC1122" strokeWidth="2.5" />
      <text x="20" y="27" textAnchor="middle" fontFamily="sans-serif" fontSize="17" fontWeight="900" fill="#CC1122" letterSpacing="-1">
        MG
      </text>
    </svg>
    <div className="text-left">
      <div className="text-[14px] sm:text-[15px] font-[900] text-[#CC1122] tracking-[0.18em] leading-none uppercase font-sans">
        MORRIS GARAGES
      </div>
      <div className="text-[9.5px] font-[700] text-[#64748B] tracking-wider mt-0.5 font-sans">
        Since 1924
      </div>
    </div>
  </div>
);

// 6. L'Oreal Logo
const LorealLogo = () => (
  <div className="flex items-center space-x-1.5">
    <span className="text-[22px] font-[900] text-[#111827] tracking-widest uppercase font-serif">
      L'ORÉAL
    </span>
    <span className="text-[11px] font-[700] text-[#E11D48] font-sans">PARIS</span>
  </div>
);

const transformCards = [
  {
    id: 1,
    company: 'BeeCar CARE',
    logoComp: BeeCarLogo,
    desc: 'If you provide car washing services and need to reach a wide range of customers, the car wash app is your best bet. Firevy.co has built a car wash application that allows people to book car wash services in few clicks',
    bullets: [
      '96% customer retention rate',
      '92 % increase in service bookings',
      'Over 1,10,000 satisfied users',
      'Operating in 90+ locations',
      'User-friendly & Efficient interface for easy booking'
    ],
    cardBg: 'bg-[#FEF9EE] border-amber-200/80',
    image: '/images/beecar.webp',
    imageAlt: 'BeeCar CARE Mobile App Mockup'
  },
  {
    id: 2,
    company: 'Waymark Maps',
    logoComp: WaymarkLogo,
    desc: 'A city map and free business listings are available on Waymark. Our city information is consistently accurate and current. With advertisements, points of interest, restaurants,...',
    bullets: [
      'Turn-by-turn voice navigation',
      'Points of interest (POI) recommendations',
      'Real-time traffic updates and route...',
      'Offline map access for remote areas',
      'Augmented reality (AR) navigation features'
    ],
    cardBg: 'bg-[#F7EDFC] border-purple-200/80',
    image: '/images/waymark_map_app.webp',
    imageAlt: 'Waymark Maps Application'
  },
  {
    id: 3,
    company: 'Adani EmCare',
    logoComp: AdaniLogo,
    desc: "Adani EmCare is a Web + Mobile App used by Adani Group's medical officer to capture, analyze and manage the health data of the employees and workers. And this data is used by medical...",
    bullets: [
      '98% Employee satisfaction ratio',
      '81% reduction in appointment scheduling...',
      '24/7 real-time health monitoring',
      'Serving over 60,000 healthcare...',
      'Generating over USD 30 billion in revenue'
    ],
    cardBg: 'bg-[#ECEAF7] border-indigo-200/80',
    image: '/images/adani.webp',
    imageAlt: 'Adani EmCare Healthcare Telemedicine'
  },
  {
    id: 4,
    company: 'LARSEN & TOUBRO',
    logoComp: LtLogo,
    desc: "Larsen & Toubro Limited is one of India's largest and most well-known private corporations. L&T offers unrivaled capabilities across Technology, Engineering, Construction, and Manufacturing...",
    bullets: [
      'Automated safety audits and...',
      '24/7 access to safety training...',
      'Customizable dashboards...',
      'Real-time incident reporting...',
      '99% compliance with health...'
    ],
    cardBg: 'bg-[#EAF4FB] border-sky-200/80',
    image: '/images/l&t.webp',
    imageAlt: 'Larsen & Toubro Enterprise Dashboard'
  },
  {
    id: 5,
    company: 'Morris Garages',
    logoComp: MgLogo,
    desc: "MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees' health and records...",
    bullets: [
      'Real-time health data...',
      'HIPAA-compliant data...',
      '24/7 access to health...',
      'Personalized health...',
      '98% improvement in...'
    ],
    cardBg: 'bg-[#FFF0F0] border-rose-200/80',
    image: '/images/mg.webp',
    imageAlt: 'MG Motor Health & Process Automation'
  },
  {
    id: 6,
    company: "L'Oréal",
    logoComp: LorealLogo,
    desc: "L'Oréal is the world's largest cosmetics company. We engineered an intelligent beauty and cosmetic safety improvement application...",
    bullets: [
      '97% reduction in safety incidents',
      'Scalable solution for large enterprises',
      'Recognized for excellence in safety innovation',
      'Automated safety reminders and alerts',
      'Real-time hazard identification and reporting'
    ],
    cardBg: 'bg-[#F7F4EE] border-stone-200/80',
    image: '/images/loreal.webp',
    imageAlt: "L'Oreal Cosmetics AI Application"
  }
];

export const DigitalTransformationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // 3.5 Second Auto Scroll (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformCards.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Center active card smoothly
  useEffect(() => {
    if (sliderRef.current && sliderRef.current.children[currentIndex]) {
      const container = sliderRef.current;
      const targetCard = container.children[currentIndex];
      const scrollPosition = targetCard.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2;

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? transformCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % transformCards.length);
  };

  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left overflow-hidden border-b border-slate-100">
      {/* Centered Heading & Subtitle */}
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight font-sans">
          Digital Transformation Through Innovation and Collective Knowledge
        </h2>
        <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed mt-2.5 max-w-3xl mx-auto font-sans">
          At Firevy.co, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
        </p>
      </div>

      {/* Horizontal Carousel Track with Peek Layout */}
      <div
        className="w-full relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={sliderRef}
          className="flex items-stretch gap-5 sm:gap-7 overflow-x-auto snap-x snap-mandatory scrollbar-none px-4 sm:px-12 lg:px-20 py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {transformCards.map((card) => {
            const LogoComponent = card.logoComp;
            return (
              <div
                key={card.id}
                className={`w-[88vw] sm:w-[82vw] lg:w-[80vw] max-w-[1160px] shrink-0 rounded-[28px] sm:rounded-[32px] overflow-hidden border shadow-sm snap-center grid grid-cols-1 md:grid-cols-12 transition-all duration-300 ${card.cardBg}`}
              >
                {/* Left Side: Information & Bullets */}
                <div className="md:col-span-6 p-6 sm:p-9 lg:p-11 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    {/* Brand Logo */}
                    <div className="pb-1">
                      <LogoComponent />
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[13px] sm:text-[14px] text-slate-700 leading-[1.7] font-normal font-sans">
                      {card.desc}
                    </p>

                    {/* 5 Bullet Points with >> */}
                    <div className="space-y-2 pt-1">
                      {card.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-2.5 text-[12.5px] sm:text-[13.5px] font-[700] text-slate-900 leading-tight font-sans">
                          <span className="font-[950] text-slate-950 tracking-tighter shrink-0 select-none text-sm sm:text-base">
                            &gt;&gt;
                          </span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2 CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 mt-3">
                    <a
                      href="#quote-form"
                      className="px-6 py-3 rounded-full bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-[800] text-center transition-all shadow-md font-sans"
                    >
                      View Case Study
                    </a>
                    <a
                      href="#portfolio"
                      className="px-6 py-3 rounded-full border border-slate-900 bg-white/40 hover:bg-white text-slate-900 text-xs sm:text-sm font-[800] text-center transition-all shadow-xs font-sans"
                    >
                      View Portfolio
                    </a>
                  </div>
                </div>

                {/* Right Side: Inner White Card with Mockup Image (1:1 with Screenshot) */}
                <div className="md:col-span-6 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
                  <div className="w-full h-full max-h-[380px] sm:max-h-[440px] rounded-[24px] bg-white/90 shadow-sm border border-slate-100/80 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="w-full h-full object-contain drop-shadow-md select-none transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Right Chevron Navigation Indicator (matching screenshot) */}
        <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col items-center space-y-2 z-20">
          <button
            onClick={handleNext}
            aria-label="Next Case Study"
            className="w-9 h-9 rounded-full bg-white/90 shadow-md border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-white hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation Arrows */}
      <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-all cursor-pointer shadow-xs"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-all cursor-pointer shadow-xs"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default DigitalTransformationSlider;
