import React, { useState, useEffect, useRef } from 'react';

// 1. Adani Logo (Gradient text)
const AdaniLogo = () => (
  <div className="flex items-center space-x-2">
    <span className="text-[34px] sm:text-[38px] font-[900] bg-gradient-to-r from-[#0072BC] via-[#5C2E91] to-[#E91E63] bg-clip-text text-transparent leading-none tracking-tight">
      adani
    </span>
  </div>
);

// 2. Waymark Maps Logo
const WaymarkLogo = () => (
  <div className="flex flex-col">
    <div className="text-[28px] sm:text-[32px] font-[900] text-[#581C87] leading-none tracking-tight">
      Waymark
    </div>
    <div className="text-[24px] sm:text-[28px] font-[900] text-[#581C87] leading-none tracking-tight mt-0.5">
      Maps
    </div>
  </div>
);

// 3. BeeCar CARE Logo
const BeeCarLogo = () => (
  <div className="flex items-center space-x-2.5">
    <svg viewBox="0 0 40 40" className="w-11 h-11 shrink-0">
      {/* Hexagon Yellow Bee Icon */}
      <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="#FFC80A" stroke="#111827" strokeWidth="2.5" />
      <circle cx="20" cy="18" r="8" fill="#111827" />
      <path d="M16 16 L24 16 M15 20 L25 20" stroke="#FFC80A" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 11 Q20 7 24 11" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <div>
      <div className="text-[26px] sm:text-[28px] font-[900] text-[#E0A000] leading-none tracking-tight">
        BeeCar
      </div>
      <div className="text-[12px] font-[900] text-[#111827] tracking-[0.25em] leading-none mt-0.5">
        CARE
      </div>
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
    <div className="text-[18px] sm:text-[20px] font-[900] text-[#005A9C] tracking-tight leading-none uppercase">
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
    <div>
      <div className="text-[14px] sm:text-[15px] font-[900] text-[#CC1122] tracking-[0.18em] leading-none uppercase">
        MORRIS GARAGES
      </div>
      <div className="text-[9.5px] font-[700] text-[#64748B] tracking-wider mt-0.5">
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
    <span className="text-[11px] font-[700] text-[#E11D48]">PARIS</span>
  </div>
);

const transformCards = [
  {
    id: 1,
    logoComp: AdaniLogo,
    desc: "Adani EmCare is a Web + Mobile App used by Adani Group's medical officer to capture, analyze and manage the health data of the employees and workers. And this data is used by medical...",
    bullets: [
      '98% Employee satisfaction ratio',
      '81% reduction in appointment scheduling...',
      '24/7 real-time health monitoring',
      'Serving over 60,000 healthcare...',
      'Generating over USD 30 billion in revenue'
    ],
    leftBg: 'bg-[#EBF0FA]',
    rightBg: 'bg-[#F6F8FD]',
    image: '/images/adani.webp',
    imageAlt: 'Adani EmCare Healthcare Telemedicine'
  },
  {
    id: 2,
    logoComp: WaymarkLogo,
    desc: 'A city map and free business listings are available on Waymark. Our city information is consistently accurate and current. With advertisements, points of interest, restaurants,...',
    bullets: [
      'Turn-by-turn voice navigation',
      'Points of interest (POI) recommendations',
      'Real-time traffic updates and route...',
      'Offline map access for remote areas',
      'Augmented reality (AR) navigation features'
    ],
    leftBg: 'bg-[#F4EAFA]',
    rightBg: 'bg-[#FCF9FD]',
    image: '/images/waymark_map_app.webp',
    imageAlt: 'Waymark Maps Application'
  },
  {
    id: 3,
    logoComp: BeeCarLogo,
    desc: 'If you provide car washing services and need to reach a wide range of customers, the car wash app is your best bet. Sapphire Software Solutions has built a car wash application that allows...',
    bullets: [
      '96% customer retention rate',
      '82 % increase in service bookings',
      'Over 1,10,000 satisfied users',
      'Operating in 80+ locations',
      'User-friendly & Efficient interface for easy...'
    ],
    leftBg: 'bg-[#FDF5D9]',
    rightBg: 'bg-[#FFFDF2]',
    image: '/images/beecar.webp',
    imageAlt: 'BeeCar CARE Mobile App Mockup'
  },
  {
    id: 4,
    logoComp: LtLogo,
    desc: "Larsen & Toubro Limited is one of India's largest and most well-known private corporations. L&T offers unrivaled capabilities acros...",
    bullets: [
      'Automated safety audits and...',
      '24/7 access to safety trainin...',
      'Customizable dashboards...',
      'Real-time incident reporting...',
      '99% compliance with health...'
    ],
    leftBg: 'bg-[#DDEEF9]',
    rightBg: 'bg-[#EEF7FC]',
    image: '/images/l&t.webp',
    imageAlt: 'Larsen & Toubro Enterprise Dashboard'
  },
  {
    id: 5,
    logoComp: MgLogo,
    desc: "MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees' health and...",
    bullets: [
      'Real-time health data...',
      'HIPAA-compliant data...',
      '24/7 access to health...',
      'Personalized health...',
      '98% improvement in...'
    ],
    leftBg: 'bg-[#FCE6E6]',
    rightBg: 'bg-[#FFF2F2]',
    image: '/images/mg.webp',
    imageAlt: 'MG Motor Health & Process Automation'
  },
  {
    id: 6,
    logoComp: LorealLogo,
    desc: "L'Oréal is the world's largest cosmetics company. We engineered an intelligent beauty and cosmetic analytics platform...",
    bullets: [
      'AI-powered skin diagnostics...',
      'Virtual beauty try-on features...',
      'Real-time product recommendations...',
      'Multi-language global platform...',
      '99% app uptime & cloud scale...'
    ],
    leftBg: 'bg-[#F6EFEA]',
    rightBg: 'bg-[#FDFBF9]',
    image: '/images/loreal.webp',
    imageAlt: "L'Oreal Cosmetics AI Application"
  }
];

export const DigitalTransformationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // 3 Second Auto Scroll (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformCards.length);
    }, 3000);
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
    <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left overflow-hidden">
      {/* Centered Heading & Subtitle */}
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
          Digital Transformation Through Innovation and Collective Knowledge
        </h2>
        <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed mt-2.5 max-w-3xl mx-auto">
          At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
        </p>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        className="w-full relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 sm:gap-7 overflow-x-auto snap-x snap-mandatory scrollbar-none px-4 sm:px-8 lg:px-12 py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {transformCards.map((card) => {
            const LogoComponent = card.logoComp;
            return (
              <div
                key={card.id}
                className="w-[90vw] sm:w-[740px] md:w-[820px] lg:w-[920px] shrink-0 rounded-[20px] overflow-hidden border border-slate-100 shadow-[0_6px_25px_rgba(0,0,0,0.05)] snap-center grid grid-cols-1 md:grid-cols-12 transition-all duration-300 bg-white"
              >
                {/* Left Side: Information & Bullets */}
                <div className={`md:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${card.leftBg} text-left`}>
                  <div className="space-y-4">
                    {/* Brand Logo */}
                    <div className="pb-1">
                      <LogoComponent />
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[12.5px] sm:text-[13px] text-slate-700 leading-[1.65] font-normal">
                      {card.desc}
                    </p>

                    {/* 5 Bullet Points with >> */}
                    <div className="space-y-2 pt-1">
                      {card.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-2 text-[12px] sm:text-[12.5px] font-[600] text-slate-900 leading-tight">
                          <span className="font-[900] text-slate-900 tracking-tighter shrink-0 select-none">
                            &gt;&gt;
                          </span>
                          <span className="truncate">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2 CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-6 mt-2">
                    <a
                      href="#quote-form"
                      className="px-5 py-2.5 rounded-full bg-[#111827] hover:bg-black text-white text-[12.5px] font-[700] text-center transition-all shadow-sm"
                    >
                      View Case Study
                    </a>
                    <a
                      href="#portfolio"
                      className="px-5 py-2.5 rounded-full border border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white text-[12.5px] font-[700] text-center transition-all"
                    >
                      View Portfolio
                    </a>
                  </div>
                </div>

                {/* Right Side: Mockup Image */}
                <div className={`md:col-span-7 ${card.rightBg} p-4 sm:p-6 flex items-center justify-center relative overflow-hidden min-h-[300px] sm:min-h-[360px]`}>
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="w-full h-full max-h-[360px] sm:max-h-[400px] object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Center Arrows */}
      <div className="flex items-center justify-center space-x-5 mt-6 sm:mt-7">
        <button
          onClick={handlePrev}
          aria-label="Previous Case Study"
          className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-all cursor-pointer text-lg font-bold"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Case Study"
          className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-all cursor-pointer text-lg font-bold"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default DigitalTransformationSlider;
