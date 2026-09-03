import React from 'react';

const brandLogos = [
  { name: 'Almarai', image: '/images/almarai_corporate_logo.png' },
  { name: 'Orient Cement', image: '/images/orient_logo.svg' },
  { name: 'American Express', image: '/images/logo_american_express.svg' },
  { name: 'Alembic', image: '/images/alembic_logo.svg' },
  { name: 'Honda', image: '/images/honda_logo.png' },
  { name: 'LafargeHolcim', image: '/images/logo_lafargeHolcim.svg' },
  { name: 'Cummins', image: '/images/cummins.webp' },
  { name: 'Toyota', image: '/images/toyota_logo.webp' },
  { name: 'Adani', image: '/images/logo_adani.svg' },
  { name: 'Larsen & Toubro', image: '/images/logo_larsen_toubro.svg' },
  { name: 'MG Motors', image: '/images/logo_mg_motors.svg' }
];

export const BrandLogoMarquee = () => {
  return (
    <div className="w-full bg-white border-y border-slate-200/80 py-5 sm:py-6 overflow-hidden select-none">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        {/* Track 1 */}
        <div className="flex items-center space-x-12 sm:space-x-16 lg:space-x-20 pr-12 sm:pr-16 lg:pr-20 shrink-0">
          {brandLogos.map((item, idx) => (
            <div key={`logo-1-${idx}`} className="flex items-center justify-center shrink-0 h-10 sm:h-12 w-28 sm:w-36">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-8 sm:max-h-10 max-w-full object-contain filter hover:brightness-110 transition-all duration-200"
              />
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for Seamless Infinite Marquee Loop) */}
        <div className="flex items-center space-x-12 sm:space-x-16 lg:space-x-20 pr-12 sm:pr-16 lg:pr-20 shrink-0" aria-hidden="true">
          {brandLogos.map((item, idx) => (
            <div key={`logo-2-${idx}`} className="flex items-center justify-center shrink-0 h-10 sm:h-12 w-28 sm:w-36">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-8 sm:max-h-10 max-w-full object-contain filter hover:brightness-110 transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoMarquee;
