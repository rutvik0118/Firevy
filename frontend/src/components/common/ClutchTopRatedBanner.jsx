import React from 'react';

export const ClutchTopRatedBanner = ({ title = "World Wide Top Rated IT Company on Clutch" }) => {
  // Ultra-crisp HD SVG Badges for Rotating Marquee
  const rotatingBadges = [
    // Badge 1: GoodFirms Circular Top Dedicated Badge
    {
      id: 'goodfirms',
      content: (
        <svg viewBox="0 0 100 100" className="w-16 sm:w-20 md:w-22 h-16 sm:h-20 md:h-22 drop-shadow-md shrink-0">
          <circle cx="50" cy="46" r="38" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="3,2" />
          <circle cx="50" cy="46" r="34" fill="#2563EB" />
          <g fill="#FBBF24">
            <polygon points="50,18 51.5,22 55,22 52,24 53,28 50,25.5 47,28 48,24 45,22 48.5,22" />
            <polygon points="38,22 39.5,25 42,25 40,27 41,30 38,28 35,30 36,27 34,25 36.5,25" transform="scale(0.8) translate(10,5)" />
            <polygon points="62,22 63.5,25 66,25 64,27 65,30 62,28 59,30 60,27 58,25 60.5,25" transform="scale(0.8) translate(15,5)" />
          </g>
          <path d="M 42 32 L 58 32 L 55 46 C 54 50 46 50 45 46 Z" fill="#F59E0B" />
          <rect x="48" y="48" width="4" height="8" fill="#D97706" />
          <rect x="42" y="56" width="16" height="4" rx="1" fill="#B45309" />
          <rect x="10" y="62" width="80" height="22" rx="3" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="50" y="71" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">TOP DEDICATED</text>
          <text x="50" y="79" textAnchor="middle" fill="#93C5FD" fontSize="5.5" fontWeight="800" fontFamily="sans-serif">SOFTWARE COMPANY</text>
          <text x="50" y="87" textAnchor="middle" fill="#FDE047" fontSize="4.5" fontWeight="900" fontFamily="sans-serif">goodfirms.co</text>
        </svg>
      )
    },
    // Badge 2: Most Reviewed Shield (Software Development Company)
    {
      id: 'most-reviewed-1',
      content: (
        <svg viewBox="0 0 100 110" className="w-16 sm:w-20 md:w-22 h-18 sm:h-22 md:h-24 drop-shadow-md shrink-0">
          <path d="M 12 15 L 88 15 L 88 65 C 88 85 50 102 50 102 C 50 102 12 85 12 65 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="3" />
          <path d="M 12 15 L 88 15 L 88 36 L 12 36 Z" fill="#B91C1C" />
          <text x="50" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">MOST REVIEWED</text>
          <text x="50" y="46" textAnchor="middle" fill="#991B1B" fontSize="5" fontWeight="800" fontFamily="sans-serif">DEDICATED</text>
          <text x="50" y="53" textAnchor="middle" fill="#111827" fontSize="5" fontWeight="900" fontFamily="sans-serif">SOFTWARE DEVELOPMENT</text>
          <text x="50" y="60" textAnchor="middle" fill="#991B1B" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">COMPANY</text>
          <rect x="18" y="66" width="64" height="12" fill="#B91C1C" rx="1" />
          <polygon points="50,68 52,72 56,72 53,75 54,79 50,76 46,79 47,75 44,72 48,72" fill="#FFFFFF" />
          <text x="50" y="90" textAnchor="middle" fill="#B91C1C" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">2022</text>
        </svg>
      )
    },
    // Badge 3: Clutch Hexagon Badge
    {
      id: 'clutch-hex',
      content: (
        <svg viewBox="0 0 100 110" className="w-16 sm:w-20 md:w-22 h-18 sm:h-22 md:h-24 drop-shadow-md shrink-0">
          <polygon points="50,5 92,28 92,82 50,105 8,82 8,28" fill="#1E293B" stroke="#38BDF8" strokeWidth="3" />
          <text x="50" y="24" textAnchor="middle" fill="#94A3B8" fontSize="5" fontWeight="800" fontFamily="sans-serif">TOP DEDICATED</text>
          <text x="50" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="5" fontWeight="800" fontFamily="sans-serif">SOFTWARE COMPANY</text>
          <rect x="20" y="38" width="60" height="24" fill="#0F172A" rx="2" stroke="#38BDF8" strokeWidth="1" />
          <text x="50" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">Clutch</text>
          <text x="50" y="74" textAnchor="middle" fill="#38BDF8" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">DEVELOPERS</text>
          <text x="50" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">2022</text>
        </svg>
      )
    },
    // Badge 4: Most Reviewed Shield (Software Development Companies)
    {
      id: 'most-reviewed-2',
      content: (
        <svg viewBox="0 0 100 110" className="w-16 sm:w-20 md:w-22 h-18 sm:h-22 md:h-24 drop-shadow-md shrink-0">
          <path d="M 12 15 L 88 15 L 88 65 C 88 85 50 102 50 102 C 50 102 12 85 12 65 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="3" />
          <path d="M 12 15 L 88 15 L 88 36 L 12 36 Z" fill="#B91C1C" />
          <text x="50" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">MOST REVIEWED</text>
          <text x="50" y="46" textAnchor="middle" fill="#991B1B" fontSize="5" fontWeight="800" fontFamily="sans-serif">DEDICATED</text>
          <text x="50" y="53" textAnchor="middle" fill="#111827" fontSize="5" fontWeight="900" fontFamily="sans-serif">SOFTWARE DEVELOPMENT</text>
          <text x="50" y="60" textAnchor="middle" fill="#991B1B" fontSize="5" fontWeight="900" fontFamily="sans-serif">COMPANIES</text>
          <rect x="18" y="66" width="64" height="12" fill="#B91C1C" rx="1" />
          <polygon points="50,68 52,72 56,72 53,75 54,79 50,76 46,79 47,75 44,72 48,72" fill="#FFFFFF" />
          <text x="50" y="90" textAnchor="middle" fill="#B91C1C" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">IN INDIA</text>
        </svg>
      )
    },
    // Badge 5: Most Reviewed Shield (Software Developers)
    {
      id: 'most-reviewed-3',
      content: (
        <svg viewBox="0 0 100 110" className="w-16 sm:w-20 md:w-22 h-18 sm:h-22 md:h-24 drop-shadow-md shrink-0">
          <path d="M 12 15 L 88 15 L 88 65 C 88 85 50 102 50 102 C 50 102 12 85 12 65 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="3" />
          <path d="M 12 15 L 88 15 L 88 36 L 12 36 Z" fill="#B91C1C" />
          <text x="50" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">MOST REVIEWED</text>
          <text x="50" y="48" textAnchor="middle" fill="#111827" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">SOFTWARE DEVELOPERS</text>
          <rect x="18" y="66" width="64" height="12" fill="#B91C1C" rx="1" />
          <polygon points="50,68 52,72 56,72 53,75 54,79 50,76 46,79 47,75 44,72 48,72" fill="#FFFFFF" />
          <text x="50" y="90" textAnchor="middle" fill="#B91C1C" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">IN INDIA</text>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#005F96] text-white py-6 sm:py-8 border-y border-blue-900/30 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Block: Fixed Text + FIXED FIRST GOLD TROPHY BADGE */}
          <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white leading-tight max-w-xs sm:max-w-sm font-sans">
              {title}
            </h3>

            {/* FIXED FIRST GOLD TROPHY BADGE (Ultra-crisp SVG - Fixed position) */}
            <div className="w-16 sm:w-20 md:w-22 h-16 sm:h-20 md:h-22 flex items-center justify-center p-1 shrink-0 bg-white/5 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <g fill="none" stroke="#F59E0B" strokeWidth="2.5">
                  <path d="M 22 75 C 10 50 15 25 32 15 C 26 26 26 44 33 58 C 30 50 25 32 35 22 C 35 35 39 48 45 60" />
                  <path d="M 78 75 C 90 50 85 25 68 15 C 74 26 74 44 67 58 C 70 50 75 32 65 22 C 65 35 61 48 55 60" />
                </g>
                <g fill="#F59E0B">
                  <path d="M 20 65 Q 12 55 24 48 Q 28 58 20 65 Z" />
                  <path d="M 24 48 Q 15 38 28 32 Q 32 42 24 48 Z" />
                  <path d="M 30 32 Q 22 22 36 18 Q 38 28 30 32 Z" />
                  <path d="M 80 65 Q 88 55 76 48 Q 72 58 80 65 Z" />
                  <path d="M 76 48 Q 85 38 72 32 Q 68 42 76 48 Z" />
                  <path d="M 70 32 Q 78 22 64 18 Q 62 28 70 32 Z" />
                </g>
                <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
              </svg>
            </div>
          </div>

          {/* Vertical Divider Line on Large Screens */}
          <div className="hidden lg:block w-px h-16 bg-white/20 shrink-0 mx-2" />

          {/* Right Block: CONTINUOUS ROTATING MARQUEE FOR ALL OTHER HD BADGES */}
          <div className="w-full lg:flex-1 overflow-hidden">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
              
              {/* Track 1 */}
              <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0">
                {rotatingBadges.map((badge, idx) => (
                  <div key={`badge-t1-${idx}`} className="shrink-0 hover:scale-105 transition-transform cursor-pointer">
                    {badge.content}
                  </div>
                ))}
              </div>

              {/* Track 2 (Duplicate for Seamless Infinite Loop Animation) */}
              <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0" aria-hidden="true">
                {rotatingBadges.map((badge, idx) => (
                  <div key={`badge-t2-${idx}`} className="shrink-0 hover:scale-105 transition-transform cursor-pointer">
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

export default ClutchTopRatedBanner;
