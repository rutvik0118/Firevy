import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const educationCards = [
  {
    id: 1,
    title: 'Ai Powered Language Learning App Development',
    image: '/images/edu_case_study_ai_language.jpg'
  },
  {
    id: 2,
    title: 'Learning Management System',
    image: '/images/edu_case_study_lms.jpg'
  },
  {
    id: 3,
    title: 'Tutor Finder App Development',
    image: '/images/edu_case_study_tutor_finder.jpg'
  }
];

const digitalMarketingCards = [
  {
    id: 1,
    title: 'News Application Development',
    image: '/images/success_stories/epaper.svg',
    badge: 'Case Study'
  },
  {
    id: 2,
    title: 'Message App Development',
    image: '/images/success_stories/message_app.svg'
  },
  {
    id: 3,
    title: 'Advertising App Development',
    image: '/images/success_stories/advertising_app_development.svg'
  }
];

const defaultCards = [
  {
    id: 1,
    title: 'Employee Health Tracker App Development',
    renderGraphic: () => (
      <div className="w-full h-full relative overflow-hidden bg-white flex font-sans select-none border border-slate-200/60">
        {/* Top Right "Case Study" Badge */}
        <div className="absolute top-2 right-2 z-20 bg-[#0F2942] text-cyan-300 font-bold text-[9.5px] px-2.5 py-1 rounded shadow">
          Case Study
        </div>

        {/* Left Side: Outcome & Metrics */}
        <div className="w-1/2 p-3 bg-slate-50 flex flex-col justify-between border-r border-slate-200 text-left">
          <div>
            <span className="text-rose-600 font-black text-xs tracking-tight">Outcome</span>
            <div className="mt-2.5 grid grid-cols-3 gap-1 text-[7.5px] font-bold text-center text-slate-700">
              <div className="bg-white p-1 rounded shadow-xs border border-slate-100">
                <div className="text-slate-900 font-extrabold text-[9.5px]">60+</div>
                <div>Audits</div>
              </div>
              <div className="bg-white p-1 rounded shadow-xs border border-slate-100">
                <div className="text-slate-900 font-extrabold text-[9.5px]">170</div>
                <div>Acre</div>
              </div>
              <div className="bg-white p-1 rounded shadow-xs border border-slate-100">
                <div className="text-slate-900 font-extrabold text-[9.5px]">100%</div>
                <div>Sync</div>
              </div>
            </div>
          </div>
          {/* Car & Technician Illustration */}
          <div className="pt-1">
            <div className="bg-blue-700 text-white rounded-md p-1 text-[7.5px] font-bold shadow-xs flex items-center space-x-1 justify-center">
              <span>🚗 MG Motor OPD</span>
            </div>
          </div>
        </div>

        {/* Right Side: MG Dark Red Card */}
        <div className="w-1/2 bg-[#7A1A1A] p-3 text-white flex flex-col justify-between text-left">
          <div className="flex items-center justify-between border-b border-rose-400/30 pb-1.5">
            <div className="w-6 h-6 rounded-full bg-white text-[#7A1A1A] font-black text-[9.5px] flex items-center justify-center border border-white">
              MG
            </div>
            <span className="text-[7.5px] text-rose-200 font-bold tracking-wider">SAIC MOTOR</span>
          </div>
          <p className="text-[8.5px] text-rose-100 font-medium leading-tight">
            Digitization of Occupational Health processes for subsidiary of SAIC Motor.
          </p>
          <div className="text-[7.5px] bg-rose-900/60 p-1 rounded text-rose-200 font-semibold text-center">
            Health Check & OPD Logs
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Navigation App Development',
    renderGraphic: () => (
      <div className="w-full h-full relative overflow-hidden bg-[#454E35] p-3 flex items-center justify-between font-sans select-none">
        {/* Left Side Title Badge */}
        <div className="z-10 text-left space-y-1 max-w-[125px]">
          <div className="w-7 h-7 rounded-lg bg-[#F59E0B] flex items-center justify-center text-slate-950 font-black text-xs shadow-md">
            📍
          </div>
          <div className="text-white">
            <h4 className="text-xs font-black text-amber-400 tracking-tight leading-tight">MyliveGps</h4>
            <p className="text-[9px] text-slate-200 font-semibold leading-tight">Navigation Application</p>
          </div>
          <span className="inline-block text-[8px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">
            ● GPS Active
          </span>
        </div>

        {/* Right Side Angled Phones */}
        <div className="relative flex items-center space-x-2 z-10 pr-2">
          {/* Phone 1 */}
          <div className="w-20 h-36 bg-slate-900 rounded-xl p-1 border-2 border-slate-700 shadow-2xl flex flex-col justify-between text-white text-[7px]">
            <div className="w-4 h-0.5 bg-slate-600 rounded-full mx-auto" />
            <div className="bg-amber-500 text-slate-950 p-1 rounded font-black text-center text-[7px]">
              MyliveGps
            </div>
            <div className="bg-slate-800 p-1 rounded space-y-0.5 text-slate-300">
              <div>Route: 12 km</div>
              <div className="text-emerald-400">ETA: 18 min</div>
            </div>
          </div>
          {/* Phone 2 */}
          <div className="w-20 h-36 bg-slate-900 rounded-xl p-1 border-2 border-slate-700 shadow-2xl flex flex-col justify-between text-white text-[7px] -ml-4 -mb-2">
            <div className="w-4 h-0.5 bg-slate-600 rounded-full mx-auto" />
            <div className="bg-slate-800 rounded p-1 h-14 border border-slate-700 relative flex items-center justify-center">
              <svg viewBox="0 0 60 40" className="w-full h-full">
                <path d="M5 30 Q 25 5, 55 20" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                <circle cx="55" cy="20" r="3" fill="#10B981" />
              </svg>
            </div>
            <div className="bg-emerald-600 text-white p-1 rounded font-bold text-center text-[6.5px]">
              Turn Right 150m
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Claim Management App',
    renderGraphic: () => (
      <div className="w-full h-full relative overflow-hidden bg-[#D4E5FA] p-3 flex items-center justify-between font-sans select-none">
        {/* Left Side Claim Management Title Graphics */}
        <div className="z-10 text-left space-y-1.5 max-w-[130px]">
          <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-blue-200 shadow-sm space-y-1">
            <div className="text-sm font-black text-blue-700 leading-tight">Claim</div>
            <div className="text-[10px] font-bold text-slate-700 leading-tight">Management App</div>
          </div>
          <span className="inline-block text-[8px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold shadow">
            Auto Insurance
          </span>
        </div>

        {/* Right Side Smartphone Mockup */}
        <div className="w-24 h-40 bg-slate-900 rounded-2xl p-1.5 border-2 border-slate-800 shadow-2xl flex flex-col justify-between text-white text-[7.5px] z-10">
          <div className="w-5 h-0.5 bg-slate-600 rounded-full mx-auto mb-1" />
          <div className="bg-blue-600 p-1.5 rounded-lg text-center font-bold flex items-center justify-center space-x-1">
            <span>🛡️ CareClaim</span>
          </div>
          <div className="bg-slate-800 p-1.5 rounded-lg space-y-1 border border-slate-700">
            <div className="text-slate-300 font-semibold">Select Service</div>
            <div className="grid grid-cols-2 gap-1 text-[6.5px] text-center font-bold">
              <div className="bg-blue-500/30 text-blue-200 p-0.5 rounded">Health</div>
              <div className="bg-emerald-500/30 text-emerald-200 p-0.5 rounded">Auto</div>
            </div>
          </div>
          <div className="bg-emerald-500 text-slate-950 p-1 rounded font-extrabold text-center text-[7px]">
            Claim Approved $1,450
          </div>
        </div>
      </div>
    )
  }
];

export const SuccessStoriesSection = ({
  category,
  cards: customCards,
  subtitle = "Know Firevy.co's journey from concept to success. Explore how we’ve brought ideas to life and achieved remarkable results for our clients."
}) => {
  const cards = customCards || (
    category === 'education' ? educationCards :
    category === 'digital-marketing' ? digitalMarketingCards :
    defaultCards
  );

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#EDF5F9] text-slate-900 font-sans border-b border-slate-200/80 text-left">
      <Container>
        {/* Section Heading & Subtitle Matching Screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          <h2
            className="text-[#0B0F19] tracking-tight section-content-title"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: '34px',
              lineHeight: '41px'
            }}
          >
            Success Stories
          </h2>
          <p
            className="text-[#475569] section-content-desc max-w-3xl mx-auto"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '26px'
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* 3 Showcase Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1320px] mx-auto mb-6 sm:mb-8">
          {cards.map((item) => (
            <div key={item.id} className="flex flex-col items-center group cursor-pointer w-full">
              {/* Large Rounded Image / UI Mockup Frame */}
              <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-sm border border-slate-200/80 group-hover:shadow-md transition-shadow duration-200 relative bg-white">
                {item.badge && (
                  <div className="absolute top-3 right-3 z-20 bg-[#BAE6FD] text-[#0369A1] font-bold text-[11px] px-2.5 py-1 rounded-md shadow-xs">
                    {item.badge}
                  </div>
                )}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 select-none"
                    loading="lazy"
                  />
                ) : (
                  typeof item.renderGraphic === 'function' ? item.renderGraphic() : item.renderGraphic
                )}
              </div>

              {/* Title Below Card */}
              <h3 className="font-[800] text-[16px] sm:text-[17.5px] text-[#0B0F19] mt-3.5 text-center group-hover:text-[#005F96] transition-colors font-sans w-full">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Centered View All Portfolio CTA Button */}
        <div className="text-center mb-8 sm:mb-10">
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
