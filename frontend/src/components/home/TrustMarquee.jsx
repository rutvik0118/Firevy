import React from 'react';

const defaultBrandLogos = [
  { name: 'adani', color: 'text-[#9B111E] font-serif lowercase tracking-normal text-2xl font-bold', symbol: '' },
  { name: 'TOYOTA', color: 'text-red-600 font-sans tracking-wider font-extrabold', symbol: '🔴' },
  { name: 'المراعي Almarai', color: 'text-[#005B94] font-sans font-bold', symbol: '🌾' },
  { name: 'CEMENT CK BIRLA GROUP', color: 'text-slate-800 font-sans font-bold', symbol: '🏗️' },
  { name: 'AMERICAN EXPRESS', color: 'text-[#006FCF] font-sans tracking-widest font-extrabold', symbol: '💳' },
  { name: 'Alembic Touching lives over 100 years', color: 'text-[#00875A] font-sans font-semibold', symbol: '🧪' },
  { name: 'HONDA', color: 'text-[#CC0000] font-sans font-black tracking-widest', symbol: '🏎️' },
  { name: 'LafargeHolcim', color: 'text-slate-700 font-sans font-bold', symbol: '🏢' },
  { name: 'Cummins', color: 'text-[#006B8F] font-sans font-bold', symbol: '⚙️' },
  { name: "L'ORÉAL", color: 'text-slate-900 font-sans font-bold', symbol: '✨' }
];

export const TrustMarquee = ({ data }) => {
  const brandLogos = (data?.logos && Array.isArray(data.logos) && data.logos.filter(l => l.isActive !== false).length > 0)
    ? data.logos.filter(l => l.isActive !== false)
    : defaultBrandLogos;

  return (
    <section className="py-6 bg-white border-y border-slate-200 text-slate-900 overflow-hidden relative font-sans shadow-sm">
      {/* Infinite Auto-Scrolling Marquee Wrapper */}
      <div className="relative w-full overflow-hidden group">
        {/* Gradient Fades on Left & Right */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center">
          {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 mx-8 py-2 px-4 opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer shrink-0"
            >
              {logo.image ? (
                <img src={logo.image} alt={logo.name} className="h-6 w-auto object-contain max-w-[100px]" />
              ) : logo.symbol ? (
                <span className="text-xl">{logo.symbol}</span>
              ) : null}
              <span className={`text-base sm:text-lg font-black tracking-wider ${logo.color || 'text-slate-900'} font-sans uppercase`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;
