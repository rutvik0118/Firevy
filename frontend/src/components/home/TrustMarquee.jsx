import React from 'react';

const defaultBrandLogos = [
  { name: 'TOYOTA', color: 'text-red-600', symbol: '🚗' },
  { name: 'Almarai', color: 'text-blue-700', symbol: '🌾' },
  { name: 'ORIENT CEMENT', color: 'text-slate-800', symbol: '🏗️' },
  { name: 'AMERICAN EXPRESS', color: 'text-blue-600', symbol: '💳' },
  { name: 'Alembic', color: 'text-cyan-700', symbol: '🧪' },
  { name: 'HONDA', color: 'text-red-600', symbol: '🏎️' },
  { name: 'LafargeHolcim', color: 'text-slate-700', symbol: '🏢' },
  { name: 'Cummins', color: 'text-[#006B8F]', symbol: '⚙️' },
  { name: "L'ORÉAL", color: 'text-slate-900', symbol: '✨' },
  { name: 'TDSG', color: 'text-red-700', symbol: '🛡️' }
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
