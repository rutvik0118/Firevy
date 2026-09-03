import React from 'react';
import Container from './Container';

// 18 Prominent & Large Vector Brand Logos matching Sapphire Solutions reference screenshot 100%
const MicrosoftLogo = () => (
  <div className="w-20 h-20 grid grid-cols-2 gap-1.5 p-1">
    <div className="bg-[#8E8E8E]" />
    <div className="bg-[#9E9E9E]" />
    <div className="bg-[#9E9E9E]" />
    <div className="bg-[#B5B5B5]" />
  </div>
);

const IncLogo = () => (
  <span className="font-serif text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter">
    Inc.
  </span>
);

const GooglePlayLogo = () => (
  <div className="flex items-center space-x-2.5">
    <svg className="w-8 h-8 fill-slate-800" viewBox="0 0 24 24">
      <path d="M 3 2 L 15 12 L 3 22 Z" />
      <path d="M 15 12 L 19 8 L 3 2 Z" opacity="0.75" />
      <path d="M 15 12 L 19 16 L 3 22 Z" opacity="0.75" />
      <path d="M 15 12 L 19 8 L 22 10 C 23 11 23 13 22 14 L 19 16 Z" />
    </svg>
    <span className="text-base sm:text-lg font-extrabold text-slate-800 font-sans tracking-tight">Google Play</span>
  </div>
);

const AppStoreLogo = () => (
  <div className="flex items-center space-x-2.5">
    <svg className="w-8 h-8 fill-slate-900" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.1-.98.04-2.19.66-2.88 1.47-.62.72-1.16 1.88-1.01 3 1.09.08 2.22-.55 2.9-1.37z" />
    </svg>
    <span className="text-base sm:text-lg font-extrabold text-slate-900 font-sans tracking-tight">App Store</span>
  </div>
);

const ForbesLogo = () => (
  <div className="bg-[#334155] text-white px-5 py-2 font-serif text-lg sm:text-xl font-black tracking-wider uppercase">
    FORBES
  </div>
);

const BbbLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <svg className="w-9 h-9 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M 12 2 C 12 2 16 6 16 10 C 16 14 12 18 12 18 C 12 18 8 14 8 10 C 8 6 12 2 12 2 Z" fill="#475569" />
      <path d="M 6 18 H 18 V 22 H 6 Z" fill="#1E293B" />
    </svg>
    <span className="text-sm font-black text-slate-900 tracking-tight mt-1">BBB</span>
    <span className="text-[8px] text-slate-600 font-sans font-bold">Start With Trust</span>
  </div>
);

const YourStoryLogo = () => (
  <span className="text-base sm:text-lg font-black text-slate-700 tracking-[0.15em] font-sans uppercase">
    YOURSTORY
  </span>
);

const WikipediaLogo = () => (
  <div className="flex items-center justify-center">
    <svg className="w-20 h-20 text-slate-800" viewBox="0 0 100 100" fill="none" stroke="currentColor">
      <circle cx="50" cy="50" r="42" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.8" />
      <path d="M 30 35 L 42 70 L 50 48 L 58 70 L 70 35" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const EntrepreneurLogo = () => (
  <span className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
    Entrepreneur
  </span>
);

const MashableLogo = () => (
  <span className="font-black text-xl sm:text-2xl text-slate-500 tracking-tight font-sans">
    Mashable
  </span>
);

const CapterraLogo = () => (
  <div className="flex items-center space-x-2">
    <svg className="w-6 h-6 text-slate-700 fill-current" viewBox="0 0 24 24">
      <path d="M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z" />
    </svg>
    <span className="text-base sm:text-lg font-bold text-slate-800 font-sans">Capterra</span>
  </div>
);

const CnetLogo = () => (
  <span className="font-black text-3xl sm:text-4xl text-slate-900 font-sans tracking-tighter">
    c<span className="text-slate-400 font-normal">|</span>net
  </span>
);

const NytLogo = () => (
  <span className="font-serif text-sm sm:text-base italic font-bold text-slate-900 tracking-tighter">
    The New York Times
  </span>
);

const TechCrunchLogo = () => (
  <svg className="w-24 h-14 text-[#475569]" viewBox="0 0 80 40" fill="currentColor">
    <rect x="5" y="5" width="32" height="10" />
    <rect x="16" y="15" width="10" height="20" />
    <path d="M 45 5 H 75 V 15 H 55 V 25 H 75 V 35 H 45 Z" />
  </svg>
);

const ClutchLogo = () => (
  <span className="font-black text-2xl sm:text-3xl text-slate-900 tracking-tight font-sans">
    Clutch
  </span>
);

const PcMagLogo = () => (
  <div className="bg-[#334155] text-white p-2.5 rounded-[3px] flex flex-col items-center justify-center leading-none text-center w-18 h-18">
    <span className="font-black text-xl tracking-tighter">PC</span>
    <span className="text-[8px] font-bold tracking-widest border-t border-white/40 pt-1 mt-1">PCMAG.COM</span>
  </div>
);

const G2Logo = () => (
  <div className="flex items-center space-x-1 font-sans">
    <span className="font-black text-xl sm:text-2xl text-slate-800">G</span>
    <sup className="font-bold text-sm text-slate-800 -top-1.5">2</sup>
    <span className="font-extrabold text-sm sm:text-base text-slate-800 tracking-wider ml-1">CROWD</span>
  </div>
);

const TelegraphLogo = () => (
  <span className="font-serif text-sm sm:text-base font-bold text-slate-900 tracking-tight">
    The Telegraph
  </span>
);

const mediaList = [
  { name: 'Microsoft', component: MicrosoftLogo },
  { name: 'Inc.', component: IncLogo },
  { name: 'Google Play', component: GooglePlayLogo },
  { name: 'App Store', component: AppStoreLogo },
  { name: 'Forbes', component: ForbesLogo },
  { name: 'BBB Accredited', component: BbbLogo },
  { name: 'YOURSTORY', component: YourStoryLogo },
  { name: 'Wikipedia', component: WikipediaLogo },
  { name: 'Entrepreneur', component: EntrepreneurLogo },
  { name: 'Mashable', component: MashableLogo },
  { name: 'Capterra', component: CapterraLogo },
  { name: 'c|net', component: CnetLogo },
  { name: 'The New York Times', component: NytLogo },
  { name: 'TechCrunch', component: TechCrunchLogo },
  { name: 'Clutch', component: ClutchLogo },
  { name: 'PCMAG.COM', component: PcMagLogo },
  { name: 'G2 CROWD', component: G2Logo },
  { name: 'The Telegraph', component: TelegraphLogo }
];

export const FeaturedInMedia = () => {
  return (
    <section className="pt-2 sm:pt-4 pb-6 sm:pb-8 bg-white text-slate-900 text-left font-sans">
      <Container>
        {/* Centered Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
            We Have Been Featured In
          </h2>
        </div>

        {/* 18 Large & Prominent Square White Logo Cards Grid (6 Columns x 3 Rows on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5 max-w-6xl mx-auto">
          {mediaList.map((item, idx) => {
            const Comp = item.component;
            return (
              <div
                key={idx}
                className="aspect-square rounded-2xl bg-white border border-slate-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center p-3 sm:p-4 text-center group cursor-pointer"
              >
                <div className="group-hover:scale-105 transition-transform duration-300 flex items-center justify-center w-full h-full">
                  <Comp />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedInMedia;
