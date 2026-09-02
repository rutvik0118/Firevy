import React from 'react';
import Container from './Container';

export const TrustedBrandsGrid = () => {
  // 24 Global Brands matching Sapphire Solutions screenshot 1:1
  const globalBrands = [
    { name: 'AMERICAN EXPRESS', style: 'text-[#005F96] font-black text-xs tracking-tight text-center leading-tight' },
    { name: 'LARSEN & TOUBRO', style: 'text-slate-900 font-black italic text-xs tracking-tighter text-center leading-tight' },
    { name: 'LafargeHolcim', style: 'text-slate-800 font-bold text-xs' },
    { name: 'CLP INDIA', style: 'text-[#059669] font-black text-xs tracking-widest' },
    { name: 'adani', style: 'text-[#7C3AED] font-black text-lg tracking-tight' },
    { name: 'GFL', style: 'text-[#0284C7] font-black text-sm tracking-wider' },
    { name: 'TOYOTA', style: 'text-[#DC2626] font-black text-sm tracking-widest' },
    { name: 'ACC LIMITED', style: 'text-[#B91C1C] font-black italic text-xs tracking-tight' },
    { name: 'Ambuja Cement', style: 'text-[#1E3A8A] font-extrabold text-xs' },
    { name: 'MORRIS GARAGES', style: 'text-[#B91C1C] font-bold text-[10px] tracking-wider' },
    { name: 'JSW Energy', style: 'text-[#0284C7] font-black text-xs' },
    { name: 'vedanta', style: 'text-[#047857] font-bold text-xs' },
    { name: 'HONDA', style: 'text-[#DC2626] font-black text-sm tracking-widest' },
    { name: 'Dr.Reddy\'s', style: 'text-[#6D28D9] font-extrabold text-xs' },
    { name: 'Chevron', style: 'text-[#1D4ED8] font-bold text-xs' },
    { name: 'ORIENT CEMENT', style: 'text-[#92400E] font-extrabold text-[10px]' },
    { name: 'Almarai', style: 'text-[#0284C7] font-black text-sm' },
    { name: 'Cummins', style: 'text-[#B91C1C] font-black italic text-sm' },
    { name: 'TDSG', style: 'text-[#DC2626] font-extrabold text-xs tracking-widest border border-[#DC2626] px-2 py-0.5 rounded-[2px]' },
    { name: 'L\'ORÉAL', style: 'text-slate-900 font-black text-xs tracking-[0.2em]' },
    { name: 'ASTRAL PIPES', style: 'text-[#1E40AF] font-black text-[11px] tracking-wider' },
    { name: 'TITAN', style: 'text-slate-900 font-extrabold text-xs tracking-[0.25em]' },
    { name: 'BANK NOTE PAPER MILL', style: 'text-[#065F46] font-bold text-[9px] text-center leading-tight' },
    { name: 'Alembic', style: 'text-[#1E3A8A] font-extrabold italic text-xs' }
  ];

  // 18 Featured Press & Media matching Sapphire Solutions screenshot 1:1
  const featuredMedia = [
    { name: 'Microsoft', logoText: 'Microsoft', icon: '❖', style: 'font-bold text-slate-800 text-sm' },
    { name: 'Inc.', logoText: 'Inc.', style: 'font-serif text-lg font-black text-slate-900' },
    { name: 'Google Play', logoText: 'Google Play', icon: '►', style: 'font-bold text-slate-800 text-xs' },
    { name: 'App Store', logoText: 'App Store', icon: '📱', style: 'font-semibold text-slate-800 text-xs' },
    { name: 'Forbes', logoText: 'Forbes', style: 'font-serif text-xl font-black text-slate-900 tracking-tight' },
    { name: 'BBB Accredited', logoText: 'BBB Accredited', icon: '🛡️', style: 'font-bold text-slate-800 text-xs' },
    { name: 'YOURSTORY', logoText: 'YOURSTORY', style: 'font-extrabold text-slate-900 text-xs tracking-widest' },
    { name: 'Wikipedia', logoText: 'WIKIPEDIA', icon: 'W', style: 'font-serif font-black text-slate-900 text-xs tracking-wider' },
    { name: 'Entrepreneur', logoText: 'Entrepreneur', style: 'font-serif text-sm font-bold text-slate-900' },
    { name: 'Mashable', logoText: 'Mashable', style: 'font-extrabold text-sm text-slate-500' },
    { name: 'Capterra', logoText: 'Capterra', icon: '▲', style: 'font-bold text-slate-800 text-xs' },
    { name: 'c|net', logoText: 'c|net', style: 'font-black text-lg text-slate-900' },
    { name: 'The New York Times', logoText: 'The New York Times', style: 'font-serif text-[11px] italic font-extrabold text-slate-900' },
    { name: 'TechCrunch', logoText: 'TC', style: 'font-black text-xl text-[#059669]' },
    { name: 'Clutch', logoText: 'Clutch', style: 'font-black text-base text-slate-900' },
    { name: 'PCMAG.COM', logoText: 'PCMAG.COM', style: 'font-black text-[11px] bg-slate-900 text-white px-2.5 py-1 rounded-[2px]' },
    { name: 'G2 CROWD', logoText: 'G2 CROWD', style: 'font-bold text-[11px] text-slate-900 tracking-wider' },
    { name: 'The Telegraph', logoText: 'The Telegraph', style: 'font-serif text-[11px] font-bold text-slate-900' }
  ];

  return (
    <div className="space-y-0 font-sans text-left">
      {/* 1. We Have Been Featured In Section (Exact Sapphire Match) */}
      <section className="py-20 bg-[#F6FAFC] border-b border-slate-200 text-slate-900">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="px-4 py-1.5 rounded-full text-[11px] font-extrabold bg-[#E5F3FA] text-[#005F96] uppercase tracking-wider inline-block">
              MEDIA RECOGNITION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              We Have Been Featured In
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Our engineering achievements and digital innovations featured across leading global tech and business publications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {featuredMedia.map((media, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#005F96]/40 transition-all duration-300 flex items-center justify-center h-20 text-center group cursor-pointer"
              >
                <div className="flex items-center justify-center space-x-1.5">
                  {media.icon && <span className="text-slate-700 font-bold text-xs">{media.icon}</span>}
                  <span className={`${media.style} transition-transform group-hover:scale-105`}>
                    {media.logoText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Trusted By The World's Leading Brands Section (Exact Sapphire Match) */}
      <section className="py-20 bg-white border-b border-slate-200 text-slate-900">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Trusted By The World’s Leading Brands
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {globalBrands.map((brand, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#005F96]/40 transition-all duration-300 flex items-center justify-center h-20 text-center group cursor-pointer"
              >
                <span className={`${brand.style} transition-transform group-hover:scale-105`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TrustedBrandsGrid;
