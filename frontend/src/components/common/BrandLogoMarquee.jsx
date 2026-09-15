import React from 'react';

const brandLogos = [
  { name: 'Almarai', src: '/images/almarai_corporate_logo.png' },
  { name: 'Orient Cement', src: '/images/orient_logo.svg' },
  { name: 'American Express', src: '/images/logo_american_express.svg' },
  { name: 'Alembic', src: '/images/alembic_logo.svg' },
  { name: 'Honda', src: '/images/honda_logo.png' },
  { name: 'LafargeHolcim', src: '/images/logo_lafargeHolcim.svg' },
  { name: 'Cummins', src: '/images/ncummins.png' },
  { name: 'Loreal', src: '/images/logo_loreal.png' },
  { name: 'TDSG', src: '/images/logo_tdsg.png' },
  { name: 'Astral Pipes', src: '/images/logo_astral.png' },
  { name: 'CLP India', src: '/images/logo_clp_india.svg' },
  { name: 'Adani', src: '/images/logo_adani.svg' },
  { name: 'Toyota', src: '/images/toyota_logo.webp' }
];

export const BrandLogoMarquee = () => {
  return (
    <div className="w-full bg-white py-5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        {/* Track 1 */}
        <div className="flex items-center space-x-12 sm:space-x-16 pr-12 sm:pr-16 shrink-0">
          {brandLogos.map((item, idx) => (
            <div key={`logo-1-${idx}`} className="flex items-center justify-center shrink-0 h-10 sm:h-12 w-28 sm:w-36">
              <img
                src={item.src}
                alt={item.name}
                className="max-h-8 sm:max-h-10 max-w-full object-contain transition-transform hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden font-bold text-slate-700 text-sm">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for Seamless Infinite Marquee Loop) */}
        <div className="flex items-center space-x-12 sm:space-x-16 pr-12 sm:pr-16 shrink-0" aria-hidden="true">
          {brandLogos.map((item, idx) => (
            <div key={`logo-2-${idx}`} className="flex items-center justify-center shrink-0 h-10 sm:h-12 w-28 sm:w-36">
              <img
                src={item.src}
                alt={item.name}
                className="max-h-8 sm:max-h-10 max-w-full object-contain transition-transform hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden font-bold text-slate-700 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoMarquee;
