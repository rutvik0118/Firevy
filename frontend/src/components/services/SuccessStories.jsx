import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const SuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState('Automotive');

  const categoriesRow1 = [
    'Automotive',
    'Ecommerce',
    'Education',
    'Entertainment',
    'Finance',
    'Food and Beverage',
    'Healthcare'
  ];

  const categoriesRow2 = [
    'Information Technology',
    'Logistics',
    'Travel & Tourism',
    'Utility Services'
  ];

  const portfolioCards = [
    {
      id: 1,
      title: 'Vehicle Data Logging Software',
      renderGraphic: (
        <div className="w-full h-full bg-[#1A1E24] rounded-[16px] p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Faint Header Watermark */}
          <div className="text-center font-[900] text-[13px] tracking-widest text-[#333B44] uppercase pointer-events-none mb-1">
            VEHICLE-DATA-LOGGING
          </div>

          {/* Sparkle decorative star */}
          <span className="absolute top-8 left-3 text-white/40 text-xs">✦</span>
          <span className="absolute bottom-6 right-3 text-white/30 text-xs">✦</span>

          {/* Black Tablet Mockup Frame */}
          <div className="bg-[#0B0F14] rounded-[12px] p-2 sm:p-2.5 border border-slate-700 shadow-2xl flex-1 flex flex-col justify-between">
            {/* Tablet Screen Interior */}
            <div className="bg-[#101419] rounded-[8px] p-2 flex-1 flex flex-col justify-between text-white overflow-hidden border border-slate-800">
              {/* Top Navigation Bar */}
              <div className="flex items-center justify-between text-[8px] text-slate-400 pb-1 border-b border-slate-800/80 mb-1.5">
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  <span className="pl-1 text-[7px] text-slate-400">app.diagnostics</span>
                </div>
                <span className="text-[7px] text-slate-500">CAN Bus Active</span>
              </div>

              {/* Tablet Screen Content Grid */}
              <div className="grid grid-cols-12 gap-1.5 flex-1 items-stretch">
                {/* Left: GPS Map Box */}
                <div className="col-span-5 bg-[#171E26] rounded-[6px] p-1.5 flex flex-col justify-between border border-slate-700/60">
                  <div className="text-[8px] font-bold text-slate-300 flex items-center justify-between">
                    <span>GPS Telemetry</span>
                    <span className="text-[7px] text-emerald-400">LIVE</span>
                  </div>
                  {/* Stylized Map View */}
                  <div className="h-16 bg-[#0E1720] rounded-[4px] relative overflow-hidden my-1 border border-slate-800">
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      <path d="M10 50 Q 30 10, 60 30 T 90 20" fill="none" stroke="#22D3EE" strokeWidth="2.5" />
                      <circle cx="60" cy="30" r="3" fill="#EF4444" />
                      <path d="M0 20 L100 20 M0 40 L100 40 M30 0 L30 60 M70 0 L70 60" stroke="#1E293B" strokeWidth="0.8" />
                    </svg>
                  </div>
                  {/* 3 Color Badges: Red, Yellow, Green */}
                  <div className="flex space-x-1 pt-0.5">
                    <div className="flex-1 bg-red-600 rounded-[3px] py-0.5 text-center text-[7px] font-extrabold text-white">98°C</div>
                    <div className="flex-1 bg-yellow-500 rounded-[3px] py-0.5 text-center text-[7px] font-extrabold text-slate-950">91%</div>
                    <div className="flex-1 bg-emerald-500 rounded-[3px] py-0.5 text-center text-[7px] font-extrabold text-slate-950">34 psi</div>
                  </div>
                </div>

                {/* Right: Charts & Data Columns */}
                <div className="col-span-7 bg-[#171E26] rounded-[6px] p-1.5 flex flex-col justify-between border border-slate-700/60 space-y-1">
                  {/* Telemetry Waveform */}
                  <div className="bg-[#0B0F14] rounded-[4px] p-1 border border-slate-800">
                    <div className="text-[7px] font-bold text-slate-400 flex justify-between mb-0.5">
                      <span>Engine Torque (RPM)</span>
                      <span className="text-cyan-400 font-mono">3,480</span>
                    </div>
                    <svg viewBox="0 0 100 18" className="w-full h-4">
                      <path d="M0 12 Q 15 4, 30 14 T 60 6 T 90 10 L 100 8" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* Vertical Level Bars */}
                  <div className="grid grid-cols-4 gap-1 flex-1 items-end bg-[#0B0F14] rounded-[4px] p-1 border border-slate-800">
                    <div className="bg-sky-500/80 rounded-t-[2px] h-9" />
                    <div className="bg-indigo-500/80 rounded-t-[2px] h-7" />
                    <div className="bg-amber-500/80 rounded-t-[2px] h-10" />
                    <div className="bg-emerald-500/80 rounded-t-[2px] h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Car Wash App Development',
      renderGraphic: (
        <div className="w-full h-full bg-[#F4F6F8] rounded-[16px] p-4 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Top-Left BeeCar Logo */}
          <div className="flex items-center space-x-1.5 z-10">
            <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-[10px] font-black shadow-xs">
              🐝
            </div>
            <div className="text-left">
              <span className="text-[10px] font-[800] text-slate-900 block leading-none">BeeCar</span>
              <span className="text-[7px] font-[600] text-amber-600 block leading-none">CARE</span>
            </div>
          </div>

          {/* Faint Background Watermark Text */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-slate-200/90 font-[900] text-xl uppercase pointer-events-none select-none tracking-wider text-right">
            Car Wash<br />Application
          </div>

          {/* Illustration Container */}
          <div className="relative z-10 flex items-center justify-between mt-1">
            {/* Left: Hand Holding Smartphone Mockup */}
            <div className="w-[85px] sm:w-[95px] h-[130px] rounded-[16px] bg-white border-[3px] border-slate-800 p-1 shadow-xl flex flex-col justify-between shrink-0 transform -rotate-3">
              <div className="w-6 h-1 rounded-full bg-slate-300 mx-auto mb-1" />
              {/* App UI interior */}
              <div className="bg-slate-50 rounded-[8px] p-1 flex-1 flex flex-col justify-between border border-slate-100">
                <div className="text-[6.5px] font-bold text-slate-800 text-left">Book Wash</div>
                <div className="w-full bg-amber-100 rounded p-0.5 flex items-center space-x-1">
                  <span className="text-[8px]">🚗</span>
                  <span className="text-[5.5px] font-bold text-amber-900">Express Clean</span>
                </div>
                <div className="w-full bg-[#005F96] text-white rounded py-0.5 text-center text-[6px] font-bold">
                  Confirm
                </div>
              </div>
            </div>

            {/* Right: Yellow Sedan in Wash Bay with Cleaner Worker */}
            <div className="flex-1 flex flex-col items-center justify-center pl-2 relative">
              {/* Top Awning Tag */}
              <div className="bg-amber-400 text-slate-900 text-[8px] font-[800] px-2.5 py-0.5 rounded-sm uppercase tracking-wider mb-1 shadow-xs">
                CAR WASH
              </div>

              {/* Yellow Car Vector */}
              <svg viewBox="0 0 160 80" className="w-full max-w-[150px] drop-shadow-md">
                {/* Spray Water Arcs */}
                <path d="M120 15 Q 100 25, 80 35" stroke="#38BDF8" strokeWidth="3" strokeDasharray="3 2" fill="none" />
                <path d="M130 20 Q 110 32, 90 40" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="3 2" fill="none" />

                {/* Yellow Car Body */}
                <path d="M20 50 C20 40, 35 32, 55 32 L85 32 C105 32, 120 40, 135 48 L140 58 C140 62, 136 65, 130 65 L25 65 C20 65, 20 60, 20 50 Z" fill="#FBBF24" />
                {/* Windshield & Windows */}
                <path d="M55 35 L80 35 L80 48 L42 48 Z" fill="#0284C7" opacity="0.8" />
                <path d="M85 35 L105 35 L118 48 L85 48 Z" fill="#0284C7" opacity="0.8" />
                {/* Headlight */}
                <circle cx="135" cy="54" r="3.5" fill="#FFFFFF" />
                {/* Wheels */}
                <circle cx="45" cy="65" r="9" fill="#1E293B" />
                <circle cx="45" cy="65" r="4.5" fill="#94A3B8" />
                <circle cx="115" cy="65" r="9" fill="#1E293B" />
                <circle cx="115" cy="65" r="4.5" fill="#94A3B8" />
              </svg>

              {/* Foam Bubbles on Floor */}
              <div className="flex space-x-1 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-blue-200 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-sky-300 inline-block" />
                <span className="w-2 h-2 rounded-full bg-blue-100 inline-block" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Taxi Booking-App Development',
      renderGraphic: (
        <div className="w-full h-full bg-[#EEF2F6] rounded-[16px] p-4 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Faint Background Watermark Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-4 text-slate-300/80 font-[900] text-lg uppercase pointer-events-none select-none tracking-tight leading-tight">
            Quick Taxi<br />Booking<br />Application
          </div>

          {/* Top Left Floating Tag */}
          <div className="flex items-center space-x-1 z-10">
            <span className="text-amber-500 text-xs">📍</span>
            <span className="text-[9px] font-[800] text-slate-800">Quick Taxi Booking</span>
          </div>

          {/* Dual Smartphone Mockup Showcase */}
          <div className="relative z-10 flex items-center justify-center space-x-2.5 mt-2">
            {/* Phone 1: Splash/Home Screen */}
            <div className="w-[82px] sm:w-[90px] h-[130px] rounded-[14px] bg-white border-[2.5px] border-slate-900 p-1 shadow-lg flex flex-col items-center justify-center">
              <div className="w-5 h-1 rounded-full bg-slate-300 mb-4" />
              {/* Orange Taxi Icon & Quick Taxi Name */}
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-sm shadow-xs mb-1.5">
                🚖
              </div>
              <span className="text-[7px] font-[900] text-slate-900 tracking-wider uppercase">QUICK TAXI</span>
              <span className="text-[5px] text-slate-400 mt-0.5">Fast & Reliable Ride</span>
              <div className="w-12 h-2.5 bg-amber-500 rounded-sm mt-3" />
            </div>

            {/* Phone 2: Live Ride Map Navigation Screen */}
            <div className="w-[82px] sm:w-[90px] h-[130px] rounded-[14px] bg-white border-[2.5px] border-slate-900 p-1 shadow-lg flex flex-col justify-between">
              <div className="w-5 h-1 rounded-full bg-slate-300 mx-auto" />
              {/* Live Map Route View */}
              <div className="bg-slate-100 rounded-[6px] h-16 relative overflow-hidden my-1 border border-slate-200">
                <svg viewBox="0 0 80 60" className="w-full h-full">
                  <path d="M10 10 L40 30 L40 50 L70 55" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="10" cy="10" r="3" fill="#10B981" />
                  <circle cx="70" cy="55" r="3" fill="#EF4444" />
                  <rect x="36" y="26" width="8" height="8" rx="1.5" fill="#F59E0B" />
                </svg>
              </div>
              {/* Bottom Ride Card */}
              <div className="bg-slate-50 rounded p-1 border border-slate-200">
                <div className="flex justify-between items-center text-[5.5px] font-bold text-slate-800">
                  <span>Cab arriving</span>
                  <span className="text-amber-600">3 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white text-slate-900 font-sans border-b border-slate-200/80 text-left">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-2">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            Industry-Focused Insights To Elevate Your Business
          </h2>
          <p
            className="font-normal text-[#475569]"
            style={{ fontSize: '15px' }}
          >
            Trending Industries that Use Android App Development
          </p>
        </div>

        {/* Large Rounded Category Navigation Box (2 Rows) */}
        <div className="bg-[#F0F8FD] rounded-[16px] p-3 sm:p-4 max-w-5xl mx-auto mb-10 sm:mb-12 border border-[#E2F1F8] flex flex-col gap-2.5 shadow-xs">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoriesRow1.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-[8px] text-xs sm:text-[13px] font-[700] transition-all cursor-pointer ${activeCategory === cat
                    ? 'bg-[#005F96] text-white shadow-xs'
                    : 'bg-white text-[#334155] hover:text-[#005F96] hover:bg-slate-50 border border-slate-100/80 shadow-2xs'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoriesRow2.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 sm:px-6 py-2 rounded-[8px] text-xs sm:text-[13px] font-[700] transition-all cursor-pointer ${activeCategory === cat
                    ? 'bg-[#005F96] text-white shadow-xs'
                    : 'bg-white text-[#334155] hover:text-[#005F96] hover:bg-slate-50 border border-slate-100/80 shadow-2xs'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Portfolio Cards in One Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1320px] mx-auto mb-10 sm:mb-12">
          {portfolioCards.map((item) => (
            <div key={item.id} className="flex flex-col items-center group">
              {/* Large Rounded Image Container */}
              <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-xs border border-slate-200/60 group-hover:shadow-md transition-shadow duration-200">
                {item.renderGraphic}
              </div>

              {/* Project Title Below Image */}
              <h3 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] mt-3.5 text-center group-hover:text-[#005F96] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Centered View All Portfolio CTA Button */}
        <div className="text-center mb-14 sm:mb-16">
          <Link
            to="/portfolio"
            className="bg-[#005F96] hover:bg-[#004D7A] text-white text-xs sm:text-sm font-[800] rounded-[6px] px-7 py-3 inline-block transition-all shadow-xs"
          >
            View All Portfolio
          </Link>
        </div>
      </Container>

      {/* =========================================================================
          HORIZONTAL PASTEL VALUE CARDS CAROUSEL (EXACT 1:1 MATCH TO SCREENSHOT)
          ========================================================================= */}
      <div className="relative overflow-hidden w-full select-none mt-2 pb-4">
        <div 
          className="flex w-max hover:[animation-play-state:paused] items-stretch"
          style={{
            animation: 'marquee 95s linear infinite'
          }}
        >
          {/* Track 1 */}
          <div className="flex items-stretch space-x-6 pr-6 shrink-0">
            {[
              {
                bgColor: 'bg-[#D7EDFB]',
                iconBg: 'bg-[#0284C7]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <rect x="5" y="2" width="14" height="20" rx="3" />
                    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
                  </svg>
                ),
                title: 'Brand Recognition & Reach',
                desc: 'Mobile apps put your brand directly on users\' home screens, delivering 24/7 visibility, personalized engagement, and seamless brand accessibility.'
              },
              {
                bgColor: 'bg-[#E5DAF6]',
                iconBg: 'bg-[#9867E9]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <line x1="7" y1="13" x2="7" y2="10" />
                    <line x1="11" y1="13" x2="11" y2="7" />
                    <line x1="15" y1="13" x2="15" y2="9" />
                    <circle cx="17" cy="17" r="3" />
                    <line x1="19.5" y1="19.5" x2="22" y2="22" />
                  </svg>
                ),
                title: 'Data Collection and Analytics',
                desc: 'App analytics can help you learn more about your employer and make decisions that are appropriate, you can gather information on name, age, gender, location, interests, behavior, etc.'
              },
              {
                bgColor: 'bg-[#D1F2EE]',
                iconBg: 'bg-[#1EB1A8]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                    <polyline points="4 8 10 2 16 7 20 3" />
                  </svg>
                ),
                title: 'Gather Valuable Customer Insights',
                desc: 'You can interact with your customers using mobile apps, meet them where they are, ask them for ratings or feedback and get real-time analytics to act accordingly.'
              },
              {
                bgColor: 'bg-[#F8D3E3]',
                iconBg: 'bg-[#DE5B8F]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    <path d="M18 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
                  </svg>
                ),
                title: 'Competitive Advantage',
                desc: 'Businesses can make a big competitive edge by using mobile apps. Apps offer the opportunity to optimize processes, significant data insights, and more direct and personalized client connections.'
              },
              {
                bgColor: 'bg-[#FCE2CD]',
                iconBg: 'bg-[#E67E3F]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
                  </svg>
                ),
                title: 'Innovation & Business Growth',
                desc: 'Investing in modern mobile apps allows your brand to be at the forefront of digital evolution, giving you advanced capabilities to scale revenue and boost customer loyalty.'
              },
              {
                bgColor: 'bg-[#D9F5E5]',
                iconBg: 'bg-[#10B981]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: 'Enterprise Security & Reliability',
                desc: 'Safeguard sensitive business transactions and customer information with multi-tier encryption, automated backup, and scalable cloud infrastructure.'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className={`${card.bgColor} w-[340px] sm:w-[370px] lg:w-[390px] min-h-[220px] sm:min-h-[235px] rounded-[16px] p-6 sm:p-7 text-left flex flex-col justify-start shrink-0 shadow-xs border border-white/70`}
              >
                {/* Small Rounded Icon Box at Top-Left */}
                <div className={`w-10 h-10 rounded-[10px] ${card.iconBg} flex items-center justify-center mb-4 shadow-xs`}>
                  {card.icon}
                </div>

                {/* Card Heading */}
                <h4 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] mb-2 leading-snug">
                  {card.title}
                </h4>

                {/* Description Text */}
                <p 
                  className="font-normal text-[#334155]"
                  style={{ fontSize: '13px', lineHeight: '1.6' }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for Seamless Infinite Marquee Loop) */}
          <div className="flex items-stretch space-x-6 pr-6 shrink-0" aria-hidden="true">
            {[
              {
                bgColor: 'bg-[#D7EDFB]',
                iconBg: 'bg-[#0284C7]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <rect x="5" y="2" width="14" height="20" rx="3" />
                    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
                  </svg>
                ),
                title: 'Brand Recognition & Reach',
                desc: 'Mobile apps put your brand directly on users\' home screens, delivering 24/7 visibility, personalized engagement, and seamless brand accessibility.'
              },
              {
                bgColor: 'bg-[#E5DAF6]',
                iconBg: 'bg-[#9867E9]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <line x1="7" y1="13" x2="7" y2="10" />
                    <line x1="11" y1="13" x2="11" y2="7" />
                    <line x1="15" y1="13" x2="15" y2="9" />
                    <circle cx="17" cy="17" r="3" />
                    <line x1="19.5" y1="19.5" x2="22" y2="22" />
                  </svg>
                ),
                title: 'Data Collection and Analytics',
                desc: 'App analytics can help you learn more about your employer and make decisions that are appropriate, you can gather information on name, age, gender, location, interests, behavior, etc.'
              },
              {
                bgColor: 'bg-[#D1F2EE]',
                iconBg: 'bg-[#1EB1A8]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                    <polyline points="4 8 10 2 16 7 20 3" />
                  </svg>
                ),
                title: 'Gather Valuable Customer Insights',
                desc: 'You can interact with your customers using mobile apps, meet them where they are, ask them for ratings or feedback and get real-time analytics to act accordingly.'
              },
              {
                bgColor: 'bg-[#F8D3E3]',
                iconBg: 'bg-[#DE5B8F]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    <path d="M18 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
                  </svg>
                ),
                title: 'Competitive Advantage',
                desc: 'Businesses can make a big competitive edge by using mobile apps. Apps offer the opportunity to optimize processes, significant data insights, and more direct and personalized client connections.'
              },
              {
                bgColor: 'bg-[#FCE2CD]',
                iconBg: 'bg-[#E67E3F]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
                  </svg>
                ),
                title: 'Innovation & Business Growth',
                desc: 'Investing in modern mobile apps allows your brand to be at the forefront of digital evolution, giving you advanced capabilities to scale revenue and boost customer loyalty.'
              },
              {
                bgColor: 'bg-[#D9F5E5]',
                iconBg: 'bg-[#10B981]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: 'Enterprise Security & Reliability',
                desc: 'Safeguard sensitive business transactions and customer information with multi-tier encryption, automated backup, and scalable cloud infrastructure.'
              }
            ].map((card, idx) => (
              <div
                key={`dup-${idx}`}
                className={`${card.bgColor} w-[340px] sm:w-[370px] lg:w-[390px] min-h-[220px] sm:min-h-[235px] rounded-[16px] p-6 sm:p-7 text-left flex flex-col justify-start shrink-0 shadow-xs border border-white/70`}
              >
                {/* Small Rounded Icon Box at Top-Left */}
                <div className={`w-10 h-10 rounded-[10px] ${card.iconBg} flex items-center justify-center mb-4 shadow-xs`}>
                  {card.icon}
                </div>

                {/* Card Heading */}
                <h4 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] mb-2 leading-snug">
                  {card.title}
                </h4>

                {/* Description Text */}
                <p 
                  className="font-normal text-[#334155]"
                  style={{ fontSize: '13px', lineHeight: '1.6' }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
