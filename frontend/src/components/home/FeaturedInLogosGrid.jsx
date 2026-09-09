import React from 'react';
import Container from '../common/Container';

const defaultLogos = [
  // Row 1
  {
    name: 'Microsoft',
    content: (
      <div className="grid grid-cols-2 gap-1.5 w-14 h-14">
        <div className="bg-[#737373] rounded-[2px]" />
        <div className="bg-[#8c8c8c] rounded-[2px]" />
        <div className="bg-[#8c8c8c] rounded-[2px]" />
        <div className="bg-[#a6a6a6] rounded-[2px]" />
      </div>
    )
  },
  {
    name: 'Inc.',
    content: (
      <span className="text-[38px] sm:text-[44px] font-[900] text-black font-serif tracking-tight">
        Inc.
      </span>
    )
  },
  {
    name: 'Google Play',
    content: (
      <div className="flex items-center space-x-2">
        <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none">
          <path d="M4 3.5L14.5 12L4 20.5V3.5Z" fill="#64748B" />
          <path d="M14.5 12L18.5 8L4 3.5L14.5 12Z" fill="#94A3B8" />
          <path d="M14.5 12L18.5 16L4 20.5L14.5 12Z" fill="#475569" />
          <path d="M18.5 8L21 10.5C21.8 11.2 21.8 12.8 21 13.5L18.5 16L14.5 12L18.5 8Z" fill="#334155" />
        </svg>
        <span className="text-[15px] sm:text-[16px] font-[800] text-slate-800 font-sans tracking-tight">Google Play</span>
      </div>
    )
  },
  {
    name: 'App Store',
    content: (
      <div className="flex items-center space-x-2">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black shrink-0">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.13 16.69C20.11 16.77 19.71 18.14 18.71 19.5ZM15.03 4.54C15.69 3.73 16.13 2.61 16.01 1.5C15.05 1.54 13.88 2.14 13.19 2.95C12.58 3.66 12.05 4.8 12.19 5.89C13.26 5.97 14.37 5.35 15.03 4.54Z" />
        </svg>
        <span className="text-[15px] sm:text-[16px] font-[800] text-black font-sans tracking-tight">App Store</span>
      </div>
    )
  },
  {
    name: 'Forbes',
    content: (
      <div className="bg-[#475569] px-4 sm:px-5 py-1.5 sm:py-2 rounded-[3px]">
        <span className="text-[19px] sm:text-[21px] font-[900] text-white font-serif tracking-wider uppercase">
          Forbes
        </span>
      </div>
    )
  },
  {
    name: 'BBB',
    content: (
      <div className="flex flex-col items-center leading-none text-slate-800">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-slate-700 mb-1">
          <path d="M12 2C10 5 8 7 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 7 14 5 12 2Z" />
          <rect x="7" y="15" width="10" height="2" rx="0.5" />
          <rect x="9" y="18" width="6" height="2" rx="0.5" />
        </svg>
        <span className="text-[17px] font-[900] tracking-tight">BBB</span>
        <span className="text-[7.5px] font-[700] text-slate-500 uppercase tracking-tight">Start With Trust</span>
      </div>
    )
  },

  // Row 2
  {
    name: 'YOURSTORY',
    content: (
      <span className="text-[19px] sm:text-[21px] font-[900] text-slate-700 tracking-wider font-sans uppercase">
        YOURSTORY
      </span>
    )
  },
  {
    name: 'Wikipedia',
    content: (
      <div className="w-16 h-16 rounded-full flex items-center justify-center p-1">
        <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-800" fill="none" stroke="currentColor">
          {/* Wikipedia Puzzle Globe Representation */}
          <circle cx="50" cy="50" r="42" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.85" />
          <path d="M22 35 C28 28, 38 24, 50 24 C62 24, 72 28, 78 35" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 50 C28 45, 38 43, 50 43 C62 43, 72 45, 80 50" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 65 C32 60, 40 58, 50 58 C60 58, 68 60, 76 65" strokeWidth="2" strokeLinecap="round" />
          <path d="M34 26 C30 38, 30 62, 34 74" strokeWidth="2" />
          <path d="M50 24 C46 38, 46 62, 50 76" strokeWidth="2" />
          <path d="M66 26 C70 38, 70 62, 66 74" strokeWidth="2" />
          {/* Symbols */}
          <text x="32" y="40" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none">W</text>
          <text x="46" y="55" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none">Ω</text>
          <text x="60" y="40" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none">祖</text>
          <text x="32" y="66" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none">위</text>
          <text x="58" y="66" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none">ي</text>
        </svg>
      </div>
    )
  },
  {
    name: 'Entrepreneur',
    content: (
      <span className="text-[18px] sm:text-[20px] font-[900] text-black font-serif tracking-tight">
        Entrepreneur
      </span>
    )
  },
  {
    name: 'Mashable',
    content: (
      <span className="text-[22px] sm:text-[24px] font-[900] text-slate-500 font-sans tracking-tight">
        Mashable
      </span>
    )
  },
  {
    name: 'Capterra',
    content: (
      <div className="flex items-center space-x-2 text-slate-800">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0284C7] shrink-0">
          <path d="M2 12L22 2L13 22L11 13L2 12Z" />
        </svg>
        <span className="text-[16px] sm:text-[18px] font-[800] tracking-tight font-sans text-slate-800">Capterra</span>
      </div>
    )
  },
  {
    name: 'c|net',
    content: (
      <div className="flex items-center text-[28px] sm:text-[32px] font-black text-black font-sans tracking-tighter">
        <span>c</span>
        <span className="text-red-600 font-bold px-0.5 text-[24px] sm:text-[28px]">|</span>
        <span>net</span>
      </div>
    )
  },

  // Row 3
  {
    name: 'The New York Times',
    content: (
      <span className="text-[16px] sm:text-[17.5px] font-[900] text-black font-serif tracking-tight text-center px-1">
        The New York Times
      </span>
    )
  },
  {
    name: 'TC',
    content: (
      <div className="flex items-center justify-center">
        <span className="text-[40px] sm:text-[46px] font-[900] text-[#55606F] font-sans tracking-tighter leading-none">
          TC
        </span>
      </div>
    )
  },
  {
    name: 'Clutch',
    content: (
      <div className="flex items-center space-x-1">
        <span className="text-[26px] sm:text-[29px] font-black text-black font-sans tracking-tight">Clutch</span>
        <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block mb-1.5" />
      </div>
    )
  },
  {
    name: 'PCMag',
    content: (
      <div className="bg-[#475569] text-white px-4 py-1.5 rounded-[3px] text-center">
        <span className="text-[22px] font-black tracking-tight block leading-none">PC</span>
        <span className="text-[8px] font-bold tracking-wider uppercase block mt-0.5">PCMAG.COM</span>
      </div>
    )
  },
  {
    name: 'G2 Crowd',
    content: (
      <div className="flex items-center space-x-1 font-sans text-slate-800">
        <span className="text-[24px] font-black text-[#F43F5E]">G²</span>
        <span className="text-[15px] font-[800] tracking-wider text-slate-700 uppercase">CROWD</span>
      </div>
    )
  },
  {
    name: 'The Telegraph',
    content: (
      <span className="text-[16.5px] sm:text-[18px] font-[900] text-black font-serif tracking-tight text-center px-1">
        The Telegraph
      </span>
    )
  }
];

export const FeaturedInLogosGrid = ({ data }) => {
  const title = data?.title || 'We Have Been Featured In';

  const logos = (data?.logos && Array.isArray(data.logos) && data.logos.filter(l => l.isActive !== false).length > 0)
    ? data.logos.filter(l => l.isActive !== false)
    : defaultLogos;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-[800] tracking-tight text-slate-900 font-sans">
            {title}
          </h2>
        </div>

        {/* 6x3 Grid of 18 Exact Square White Cards (Matching Sapphire Reference Screenshot Image 1) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-5 max-w-[1240px] mx-auto">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[14px] sm:rounded-[16px] shadow-[0_4px_18px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#006B8F]/40 flex items-center justify-center p-4 aspect-square w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
            >
              {logo.image ? (
                <img src={logo.image} alt={logo.name} className="h-12 w-auto object-contain max-w-[85%]" />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  {logo.content || <span className="text-base font-bold text-slate-800">{logo.name}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedInLogosGrid;
