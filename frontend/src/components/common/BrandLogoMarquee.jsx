import React from 'react';

export const BrandLogoMarquee = () => {
  const logos = [
    { name: 'LafargeHolcim', logo: 'LafargeHolcim', color: 'text-slate-800 font-black' },
    { name: 'Cummins', logo: 'Cummins', color: 'text-[#DA291C] font-black' },
    { name: 'L\'ORÉAL', logo: 'L\'ORÉAL', color: 'text-slate-900 font-extrabold tracking-widest' },
    { name: 'TDSG', logo: '+TDSG+', color: 'text-[#D9232D] font-black' },
    { name: 'Astral Pipes', logo: 'ASTRAL PIPES', color: 'text-[#005F96] font-black' },
    { name: 'CLP India', logo: 'CLP INDIA', sub: 'The power of new standards', color: 'text-amber-600 font-extrabold' },
    { name: 'Adani', logo: 'adani', color: 'text-[#005F96] font-bold lowercase' },
    { name: 'Toyota', logo: 'TOYOTA', color: 'text-red-600 font-black' },
    { name: 'American Express', logo: 'AMERICAN EXPRESS', color: 'text-[#006FCF] font-black' },
    { name: 'Honda', logo: 'HONDA', color: 'text-red-600 font-black' }
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200/90 py-8 lg:py-10 overflow-hidden select-none">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        {/* Track 1 */}
        <div className="flex items-center space-x-16 sm:space-x-24 pr-16 sm:pr-24 shrink-0">
          {logos.map((item, idx) => (
            <div key={`logo-1-${idx}`} className="flex flex-col items-center justify-center shrink-0">
              <span className={`text-2xl sm:text-3xl lg:text-[34px] tracking-tight ${item.color}`}>
                {item.logo}
              </span>
              {item.sub && <span className="text-[10px] font-semibold text-slate-400 block leading-none mt-0.5">{item.sub}</span>}
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for Seamless Loop) */}
        <div className="flex items-center space-x-16 sm:space-x-24 pr-16 sm:pr-24 shrink-0" aria-hidden="true">
          {logos.map((item, idx) => (
            <div key={`logo-2-${idx}`} className="flex flex-col items-center justify-center shrink-0">
              <span className={`text-2xl sm:text-3xl lg:text-[34px] tracking-tight ${item.color}`}>
                {item.logo}
              </span>
              {item.sub && <span className="text-[10px] font-semibold text-slate-400 block leading-none mt-0.5">{item.sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoMarquee;
