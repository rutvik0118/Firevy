import React from 'react';

export const BrandLogoMarquee = () => {
  const logos = [
    { name: 'Toyota', logo: 'TOYOTA', color: 'text-red-600 font-black' },
    { name: 'Almarai', logo: 'Almarai', color: 'text-blue-700 font-extrabold' },
    { name: 'Orient Cement', logo: 'ORIENT CEMENT', sub: 'CK BIRLA GROUP', color: 'text-slate-800 font-bold' },
    { name: 'American Express', logo: 'AMERICAN EXPRESS', color: 'text-[#006FCF] font-black' },
    { name: 'Alembic', logo: 'Alembic', color: 'text-[#005F96] font-bold' },
    { name: 'Honda', logo: 'HONDA', color: 'text-red-600 font-black' },
    { name: 'LafargeHolcim', logo: 'LafargeHolcim', color: 'text-slate-700 font-black' },
    { name: 'Adani Group', logo: 'ADANI', color: 'text-blue-900 font-black' },
    { name: 'Larsen & Toubro', logo: 'L&T', color: 'text-slate-900 font-black' },
    { name: 'MG Motor', logo: 'MG MOTOR', color: 'text-red-700 font-black' }
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200 py-5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Track 1 */}
        <div className="flex items-center space-x-12 sm:space-x-16 pr-12 sm:pr-16 shrink-0">
          {logos.map((item, idx) => (
            <div key={`logo-1-${idx}`} className="flex items-center space-x-2 shrink-0">
              <span className={`text-base sm:text-xl tracking-tight uppercase ${item.color}`}>
                {item.logo}
              </span>
              {item.sub && <span className="text-[9px] font-bold text-slate-400 block leading-tight">{item.sub}</span>}
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for Seamless Loop) */}
        <div className="flex items-center space-x-12 sm:space-x-16 pr-12 sm:pr-16 shrink-0" aria-hidden="true">
          {logos.map((item, idx) => (
            <div key={`logo-2-${idx}`} className="flex items-center space-x-2 shrink-0">
              <span className={`text-base sm:text-xl tracking-tight uppercase ${item.color}`}>
                {item.logo}
              </span>
              {item.sub && <span className="text-[9px] font-bold text-slate-400 block leading-tight">{item.sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoMarquee;
