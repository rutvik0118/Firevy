import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export const SuccessStoriesSection = () => {
  const cards = [
    {
      id: 1,
      title: 'AI Recruitment Software',
      renderGraphic: (
        <div className="w-full h-full relative overflow-hidden bg-[#EEF5FC] flex items-center justify-center">
          <img
            src="/images/talenti_qube.png"
            alt="AI Recruitment Software - Talenti Qube"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
            onError={(e) => {
              // Fallback clean styled UI mockup if local image is missing
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback mockup */}
          <div className="hidden w-full h-full bg-gradient-to-br from-[#EEF5FC] to-[#DDEBFA] p-4 flex-col justify-between select-none">
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center space-x-1">
                <span className="w-4 h-4 rounded bg-indigo-600 text-white flex items-center justify-center text-[9px] font-bold">👔</span>
                <span className="text-[10px] font-extrabold text-slate-900">Talenti Qube</span>
              </div>
              <span className="bg-sky-400 text-white text-[8px] font-extrabold px-2 py-0.5 rounded-sm uppercase">Case Study</span>
            </div>
            <div className="flex items-center justify-center my-auto">
              <div className="text-center">
                <div className="text-3xl mb-1">👨‍💼</div>
                <div className="text-[13px] font-[900] text-indigo-950 uppercase tracking-tight">On Demand<br />AI Recruitment Tools</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Navigation App Development',
      renderGraphic: (
        <div className="w-full h-full bg-[#525B42] p-3 sm:p-4 flex items-center justify-between relative overflow-hidden select-none">
          {/* Left: Branding & Tag */}
          <div className="flex flex-col justify-between h-full z-10 text-left max-w-[110px] sm:max-w-[130px]">
            <div className="w-7 h-7 rounded-[7px] bg-[#EAB308] flex items-center justify-center text-slate-950 text-xs font-black shadow-xs">
              📍
            </div>
            <div className="text-white space-y-0.5 my-auto">
              <div className="text-[12px] sm:text-[13px] font-[900] leading-tight text-white drop-shadow-sm">MyliveGps</div>
              <div className="text-[7.5px] sm:text-[8px] text-white/80 font-[600] leading-tight">Navigation<br />Application</div>
            </div>
            <span className="text-[7px] text-[#EAB308] font-bold">● GPS Live</span>
          </div>

          {/* Right: Dual White Smartphone Navigation Mockup */}
          <div className="relative flex items-center space-x-2 z-10 pr-1">
            {/* Phone 1: Splash Screen */}
            <div className="w-[78px] sm:w-[85px] h-[135px] sm:h-[145px] rounded-[16px] bg-white border-[2.5px] border-slate-900 p-1 shadow-2xl flex flex-col items-center justify-center shrink-0">
              <div className="w-5 h-1 rounded-full bg-slate-200 mb-4" />
              <div className="w-7 h-7 rounded-[7px] bg-[#EAB308] flex items-center justify-center text-slate-950 text-xs font-black mb-1">
                📍
              </div>
              <span className="text-[6.5px] font-[900] text-slate-800">MyliveGps</span>
            </div>

            {/* Phone 2: Live Driving Route Map Screen */}
            <div className="w-[78px] sm:w-[85px] h-[135px] sm:h-[145px] rounded-[16px] bg-white border-[2.5px] border-slate-900 p-1 shadow-2xl flex flex-col justify-between shrink-0">
              <div className="w-5 h-1 rounded-full bg-slate-200 mx-auto" />
              {/* Map Route Graphic */}
              <div className="bg-slate-100 rounded-[8px] h-16 relative overflow-hidden my-1 border border-slate-200">
                <svg viewBox="0 0 80 60" className="w-full h-full">
                  <path d="M10 15 L35 30 L35 48 L65 52" fill="none" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="10" cy="15" r="3" fill="#10B981" />
                  <circle cx="65" cy="52" r="3" fill="#EF4444" />
                </svg>
              </div>
              {/* Turn Instruction Box */}
              <div className="bg-slate-50 rounded p-1 border border-slate-200 text-[5px] text-slate-800 font-bold flex justify-between items-center">
                <span>Turn Right 200m</span>
                <span className="text-[#EAB308]">8 min</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Dropshipping App Development',
      renderGraphic: (
        <div className="w-full h-full bg-[#18353A] p-3 sm:p-4 flex items-center justify-center space-x-2.5 relative overflow-hidden select-none">
          {/* Phone 1: Food/Product Order Screen */}
          <div className="w-[82px] sm:w-[90px] h-[135px] sm:h-[145px] rounded-[16px] bg-[#0E2024] border-[2.5px] border-slate-800 p-1 shadow-2xl flex flex-col justify-between shrink-0 text-white">
            <div className="w-5 h-0.5 rounded-full bg-slate-600 mx-auto" />
            <div className="bg-white/10 rounded p-1 text-[5px]">
              <div className="text-slate-400">Total price:</div>
              <div className="font-bold text-amber-400">$45.20</div>
            </div>
            <div className="w-full bg-[#F97316] text-white rounded py-1 text-center text-[5.5px] font-bold">
              Checkout
            </div>
            <div className="bg-white/5 rounded p-1 space-y-0.5">
              <div className="text-[5px] text-slate-300">Your Order:</div>
              <div className="flex space-x-1">
                <span className="w-3 h-3 rounded bg-amber-400/20 text-[6px] flex items-center justify-center">🍔</span>
                <span className="w-3 h-3 rounded bg-emerald-400/20 text-[6px] flex items-center justify-center">🥗</span>
              </div>
            </div>
          </div>

          {/* Phone 2: Delivery Live Rider Tracking */}
          <div className="w-[82px] sm:w-[90px] h-[135px] sm:h-[145px] rounded-[16px] bg-white border-[2.5px] border-slate-900 p-1 shadow-2xl flex flex-col justify-between shrink-0">
            <div className="w-5 h-0.5 rounded-full bg-slate-200 mx-auto" />
            <div className="bg-amber-100 rounded-[8px] h-14 flex items-center justify-center text-lg">
              📦
            </div>
            <div className="space-y-0.5 text-left">
              <div className="text-[6px] font-bold text-slate-800">Live Tracking</div>
              <div className="text-[5px] text-emerald-600">Rider on the way • 12 mins</div>
            </div>
            <div className="w-full bg-[#005F96] text-white rounded py-0.5 text-center text-[5.5px] font-bold">
              Contact Courier
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-[#EDF5F9] text-slate-900 font-sans border-b border-slate-200/80 text-left">
      <Container>
        {/* Section Heading & Subtitle Matching Screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            Success Stories
          </h2>
          <p
            className="font-normal text-[#475569] max-w-3xl mx-auto"
            style={{ fontSize: '14.5px', lineHeight: '1.6' }}
          >
            Know Firevy journey from concept to success. Explore how we’ve brought ideas to life and achieved remarkable results for our clients.
          </p>
        </div>

        {/* 3 Showcase Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1320px] mx-auto mb-10 sm:mb-12">
          {cards.map((item) => (
            <div key={item.id} className="flex flex-col items-center group cursor-pointer">
              {/* Large Rounded Image / UI Mockup Frame */}
              <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-sm border border-slate-200/80 group-hover:shadow-md transition-shadow duration-200">
                {item.renderGraphic}
              </div>

              {/* Title Below Card */}
              <h3 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] mt-3.5 text-center group-hover:text-[#005F96] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Centered View All Portfolio CTA Button */}
        <div className="text-center mb-12 sm:mb-14">
          <Link
            to="/portfolio"
            className="bg-[#005F96] hover:bg-[#004D7A] text-white text-xs sm:text-sm font-[800] rounded-[6px] px-8 py-3 inline-block transition-all shadow-xs"
          >
            View All Portfolio
          </Link>
        </div>

        {/* 4 Pastel & Action Stats Cards Row (Lavender, Mint Green, Coral Pink, Dark Sapphire Blue) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-[1320px] mx-auto">
          {/* Card 1: Lavender */}
          <div className="rounded-[16px] bg-[#D7CCFA] p-6 text-center flex flex-col justify-center items-center shadow-xs min-h-[120px]">
            <div className="text-[32px] sm:text-[34px] font-[800] text-[#0B0F19] leading-none mb-1">
              23+
            </div>
            <div className="text-[12.5px] sm:text-[13px] font-[700] text-[#334155]">
              Years Experience
            </div>
          </div>

          {/* Card 2: Mint Green */}
          <div className="rounded-[16px] bg-[#B0F0DE] p-6 text-center flex flex-col justify-center items-center shadow-xs min-h-[120px]">
            <div className="text-[32px] sm:text-[34px] font-[800] text-[#0B0F19] leading-none mb-1">
              320+
            </div>
            <div className="text-[12.5px] sm:text-[13px] font-[700] text-[#334155]">
              5-Star Clutch Reviews
            </div>
          </div>

          {/* Card 3: Coral Pink */}
          <div className="rounded-[16px] bg-[#FBB9B4] p-6 text-center flex flex-col justify-center items-center shadow-xs min-h-[120px]">
            <div className="text-[32px] sm:text-[34px] font-[800] text-[#0B0F19] leading-none mb-1">
              2800+
            </div>
            <div className="text-[12.5px] sm:text-[13px] font-[700] text-[#334155]">
              Satisfied Clients
            </div>
          </div>

          {/* Card 4: Sapphire Blue Action Card */}
          <div className="rounded-[16px] bg-[#005F96] p-6 text-center flex flex-col justify-center items-center shadow-md min-h-[120px] space-y-2.5">
            <div className="text-[16px] sm:text-[17px] font-[800] text-white leading-tight">
              Want to start Projects
            </div>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-50 text-[#005F96] font-[800] text-[12px] sm:text-[13px] rounded-[6px] px-6 py-2 transition-all shadow-xs inline-block"
            >
              Get Estimation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SuccessStoriesSection;
