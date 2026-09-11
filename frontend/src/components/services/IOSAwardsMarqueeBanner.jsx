import React from 'react';

export const IOSAwardsMarqueeBanner = () => {
  // 1. FIXED TROPHY BADGE (Stationary right next to title)
  const fixedTrophyBadge = (
    <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        {/* Laurel Wreath */}
        <g fill="#F59E0B">
          <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
          <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
          {/* Leaves Left */}
          <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
          <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
          <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
          {/* Leaves Right */}
          <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
          <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
          <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
        </g>
        {/* Golden Trophy Cup */}
        <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
        <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
        <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
        <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
      </svg>
    </div>
  );

  // 2. AUTO-SCROLLING BADGES (Rotating Marquee track)
  const rotatingBadges = [
    // 2.1 GoodFirms Blue Scalloped Badge
    {
      id: 'goodfirms-blue',
      content: (
        <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="46" r="38" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="3,2" />
            <circle cx="50" cy="46" r="34" fill="#2563EB" />
            
            <g fill="#FBBF24">
              <polygon points="50,18 51.5,22 55,22 52,24 53,28 50,25.5 47,28 48,24 45,22 48.5,22" />
              <polygon points="38,22 39.5,25 42,25 40,27 41,30 38,28 35,30 36,27 34,25 36.5,25" transform="scale(0.8) translate(10,5)" />
              <polygon points="62,22 63.5,25 66,25 64,27 65,30 62,28 59,30 60,27 58,25 60.5,25" transform="scale(0.8) translate(15,5)" />
            </g>
            
            <path d="M 42 32 L 58 32 L 55 46 C 54 50 46 50 45 46 Z" fill="#F59E0B" />
            <rect x="48" y="48" width="4" height="6" fill="#D97706" />
            <rect x="44" y="54" width="12" height="3" rx="1" fill="#B45309" />
            <text x="50" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900">G</text>
            
            <rect x="12" y="60" width="76" height="20" rx="3" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.2" />
            <text x="50" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900">THE WORLD'S TOP APP</text>
            <text x="50" y="74" textAnchor="middle" fill="#93C5FD" fontSize="4.8" fontWeight="800">DEVELOPMENT COMPANY</text>
            <text x="50" y="86" textAnchor="middle" fill="#FDE047" fontSize="4.2" fontWeight="800">goodfirms.co</text>
          </svg>
        </div>
      )
    },
    // 2.2 Red Ribbon - Most Reviewed iPhone App Development Company 1
    {
      id: 'most-reviewed-iphone-1',
      content: (
        <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
            <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
            <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
            <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">MOST REVIEWED</text>
            
            <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900" fontFamily="sans-serif">IPHONE APP</text>
            <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800" fontFamily="sans-serif">DEVELOPMENT COMPANY</text>
            
            <g fill="#B91C1C" transform="translate(0, -2)">
              <polygon points="38,58 39.5,61 43,61 40,63 41,66 38,64 35,66 36,63 33,61 36.5,61" />
              <polygon points="50,56 51.5,59 55,59 52,61 53,64 50,62 47,64 48,61 45,59 48.5,59" />
              <polygon points="62,58 63.5,61 67,61 64,63 65,66 62,64 59,66 60,63 57,61 60.5,61" />
            </g>
            
            <rect x="42" y="68" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
            <path d="M 46 72 L 54 72 L 50 78 Z" fill="#B91C1C" />
          </svg>
        </div>
      )
    },
    // 2.3 Clutch Hexagon Badge - Top Mobile App Developers 2023
    {
      id: 'clutch-hexagon',
      content: (
        <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-md">
            <polygon points="50,5 92,28 92,82 50,105 8,82 8,28" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
            <polygon points="50,9 88,30 88,80 50,101 12,80 12,30" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
            
            <text x="50" y="25" textAnchor="middle" fill="#64748B" fontSize="5.5" fontWeight="800">TOP</text>
            <text x="50" y="33" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="900">MOBILE APP</text>
            
            <rect x="18" y="38" width="64" height="25" fill="#1E293B" rx="2" />
            <text x="47" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900">Clutch</text>
            <circle cx="68" cy="46" r="2.2" fill="#EF4444" />
            
            <text x="50" y="74" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="900">DEVELOPERS</text>
            <text x="50" y="86" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="900">2023</text>
          </svg>
        </div>
      )
    },
    // 2.4 Red Ribbon - Most Reviewed Mobile App Development Companies
    {
      id: 'most-reviewed-mobile-companies',
      content: (
        <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
            <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
            <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
            <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
            
            <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900">MOBILE APP</text>
            <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800">DEVELOPMENT</text>
            <text x="50" y="58" textAnchor="middle" fill="#991B1B" fontSize="5.2" fontWeight="900">COMPANIES</text>
            
            <g fill="#B91C1C">
              <polygon points="50,66 51.5,69 55,69 52,71 53,74 50,72 47,74 48,71 45,69 48.5,69" />
            </g>
            
            <rect x="42" y="74" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
            <path d="M 46 78 L 54 78 L 50 84 Z" fill="#B91C1C" />
          </svg>
        </div>
      )
    },
    // 2.5 Red Ribbon - Most Reviewed App Development Company
    {
      id: 'most-reviewed-app-company',
      content: (
        <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
            <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
            <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
            <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
            
            <text x="50" y="46" textAnchor="middle" fill="#991B1B" fontSize="6.2" fontWeight="900">APP DEVELOPMENT</text>
            <text x="50" y="55" textAnchor="middle" fill="#111827" fontSize="5.5" fontWeight="900">COMPANY</text>
            
            <g fill="#B91C1C">
              <polygon points="50,64 51.5,67 55,67 52,69 53,72 50,70 47,72 48,69 45,67 48.5,67" />
            </g>
            
            <rect x="42" y="74" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
            <path d="M 46 78 L 54 78 L 50 84 Z" fill="#B91C1C" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="w-full bg-[#005F96] text-white py-5 sm:py-7 border-y border-blue-900/30 overflow-hidden select-none font-sans text-left">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
          
          {/* Left Block: Heading + FIXED TROPHY BADGE (Never scrolls, stays fixed in place) */}
          <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
            <h3 className="text-xl sm:text-2xl lg:text-[25px] font-[800] tracking-tight text-white leading-[1.2] max-w-xs sm:max-w-sm">
              World Wide Top Rated iOS<br />
              App Development<br />
              Company on Clutch
            </h3>

            {/* FIXED TROPHY BADGE */}
            {fixedTrophyBadge}
          </div>

          {/* Right Block: CONTINUOUS INFINITE AUTO-SCROLLING MARQUEE FOR OTHER BADGES */}
          <div className="w-full lg:flex-1 overflow-hidden relative">
            {/* Soft gradient edge fade for seamless scroll */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#005F96] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#005F96] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
              {/* Track 1 */}
              <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0">
                {rotatingBadges.map((badge, idx) => (
                  <div
                    key={`ios-badge-t1-${idx}`}
                    className="shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    {badge.content}
                  </div>
                ))}
              </div>

              {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
              <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0" aria-hidden="true">
                {rotatingBadges.map((badge, idx) => (
                  <div
                    key={`ios-badge-t2-${idx}`}
                    className="shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    {badge.content}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IOSAwardsMarqueeBanner;
