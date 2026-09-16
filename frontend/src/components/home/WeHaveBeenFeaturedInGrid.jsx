import React from 'react';
import Container from '../common/Container';

export const WeHaveBeenFeaturedInGrid = () => {
  // 18 Featured Brand Logos (Exact 1:1 Match to Screenshot with Bigger Size)
  const featuredLogos = [
    {
      name: 'Microsoft',
      content: (
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-1 w-12 h-12 sm:w-14 sm:h-14">
            <div className="bg-[#F25022] w-full h-full rounded-[1px]" />
            <div className="bg-[#7FBA00] w-full h-full rounded-[1px]" />
            <div className="bg-[#00A4EF] w-full h-full rounded-[1px]" />
            <div className="bg-[#FFB900] w-full h-full rounded-[1px]" />
          </div>
        </div>
      )
    },
    {
      name: 'Inc.',
      content: (
        <span className="text-3xl sm:text-4xl font-[950] tracking-tighter text-slate-900 font-serif italic">
          Inc.
        </span>
      )
    },
    {
      name: 'Google Play',
      content: (
        <div className="flex items-center space-x-2 text-slate-800">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path fill="#00E676" d="M3 20.5v-17l11.5 8.5z"/>
            <path fill="#FF3D00" d="M14.5 12L3 3.5l13.8 7.9z"/>
            <path fill="#FFC107" d="M14.5 12l2.3 1.3 4.2-2.4-4.2-2.4z"/>
            <path fill="#00B0FF" d="M3 20.5l11.5-8.5 2.3 1.3-13.8 7.2z"/>
          </svg>
          <div className="text-left leading-tight">
            <span className="block text-[7.5px] sm:text-[8px] text-slate-400 font-bold uppercase tracking-wider">
              GET IT ON
            </span>
            <span className="font-[950] text-sm sm:text-base text-slate-900 tracking-tight">
              Google Play
            </span>
          </div>
        </div>
      )
    },
    {
      name: 'App Store',
      content: (
        <div className="flex items-center space-x-2 text-slate-900">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 fill-current" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.12-1.96.99-3.1-.97.04-2.14.65-2.84 1.47-.61.71-1.15 1.87-.99 2.99 1.08.08 2.17-.54 2.84-1.36z"/>
          </svg>
          <div className="text-left leading-tight">
            <span className="block text-[7.5px] sm:text-[8px] text-slate-400 font-bold uppercase tracking-wider">
              Download on the
            </span>
            <span className="font-[950] text-sm sm:text-base text-slate-900 tracking-tight">
              App Store
            </span>
          </div>
        </div>
      )
    },
    {
      name: 'Forbes',
      content: (
        <span className="text-2xl sm:text-3xl font-[950] text-white bg-slate-900 px-3 py-1 rounded font-serif tracking-tight">
          Forbes
        </span>
      )
    },
    {
      name: 'BBB',
      content: (
        <div className="flex flex-col items-center justify-center text-slate-900 leading-none">
          <svg className="w-6 h-7 sm:w-7 sm:h-8 mb-0.5 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L9 9H15L12 2ZM12 11C8.69 11 6 13.69 6 17V22H18V17C18 13.69 15.31 11 12 11ZM10 19.5C10 18.67 10.67 18 11.5 18S13 18.67 13 19.5 12.33 21 11.5 21 10 20.33 10 19.5Z" />
          </svg>
          <div className="text-lg sm:text-xl font-[950] tracking-[0.2em] border-b border-slate-300 pb-0.5 font-serif">
            BBB
          </div>
          <div className="text-[7.5px] font-bold text-slate-500 uppercase mt-0.5 tracking-wider font-sans">
            Start With Trust
          </div>
        </div>
      )
    },
    {
      name: 'YOURSTORY',
      content: (
        <span className="text-base sm:text-lg font-[950] tracking-widest text-slate-900 uppercase font-sans">
          YOURSTORY
        </span>
      )
    },
    {
      name: 'Wikipedia',
      content: (
        <div className="flex items-center justify-center">
          <img
            src="/images/wikipedia_globe.svg"
            alt="Wikipedia"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
        </div>
      )
    },
    {
      name: 'Entrepreneur',
      content: (
        <span className="text-base sm:text-lg font-[950] text-slate-900 font-serif tracking-tight">
          Entrepreneur
        </span>
      )
    },
    {
      name: 'Mashable',
      content: (
        <span className="text-lg sm:text-xl font-[950] text-slate-700 tracking-tighter font-sans">
          Mashable
        </span>
      )
    },
    {
      name: 'Capterra',
      content: (
        <div className="flex items-center space-x-1.5 text-slate-900">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600 fill-current" viewBox="0 0 24 24">
            <path d="M4 3l16 9-16 9V3z" />
          </svg>
          <span className="font-[950] text-base sm:text-lg tracking-tight font-sans">
            Capterra
          </span>
        </div>
      )
    },
    {
      name: 'CNET',
      content: (
        <div className="flex items-center text-3xl sm:text-4xl font-[950] text-slate-900 tracking-tighter font-sans">
          c<span className="text-3xl sm:text-4xl font-light text-slate-400 mx-0.5">|</span>net
        </div>
      )
    },
    {
      name: 'The New York Times',
      content: (
        <span className="text-xs sm:text-sm font-[950] text-slate-900 font-serif tracking-tight text-center leading-snug">
          The New York Times
        </span>
      )
    },
    {
      name: 'TechCrunch',
      content: (
        <span className="text-3xl sm:text-4xl font-[950] text-[#00A562] font-mono tracking-tighter">
          TC
        </span>
      )
    },
    {
      name: 'Clutch',
      content: (
        <span className="text-xl sm:text-2xl font-[950] text-slate-900 tracking-tighter font-sans">
          Clutc<span className="text-[#DA291C]">h</span>
        </span>
      )
    },
    {
      name: 'PCMag',
      content: (
        <div className="bg-slate-900 text-white px-3 py-1.5 rounded-md text-center flex flex-col items-center justify-center">
          <div className="text-sm sm:text-base font-[950] tracking-widest leading-none font-sans">
            PC
          </div>
          <div className="text-[7.5px] font-black text-red-500 tracking-tighter mt-0.5 border-t border-slate-700 pt-0.5 font-sans">
            PCMAG.COM
          </div>
        </div>
      )
    },
    {
      name: 'G2 CROWD',
      content: (
        <div className="flex items-center space-x-1.5 text-slate-900 font-sans">
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] sm:text-xs font-black">
            G²
          </span>
          <span className="font-[950] text-sm sm:text-base tracking-tight text-slate-900">
            CROWD
          </span>
        </div>
      )
    },
    {
      name: 'The Telegraph',
      content: (
        <span className="text-xs sm:text-sm font-[950] text-slate-900 font-serif tracking-tight text-center leading-snug">
          The Telegraph
        </span>
      )
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-200 text-slate-900 font-sans">
      <Container>
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[950] text-slate-950 tracking-tight font-sans">
            We Have Been Featured In
          </h2>
        </div>

        {/* 18 Cards Grid (6 Columns x 3 Rows on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4.5 max-w-6xl mx-auto">
          {featuredLogos.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:border-slate-300 transition-all duration-300 flex items-center justify-center h-28 sm:h-32 text-center cursor-pointer group"
            >
              <div className="filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WeHaveBeenFeaturedInGrid;

