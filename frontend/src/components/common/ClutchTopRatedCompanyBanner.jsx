import React from 'react';
import Container from './Container';

export const ClutchTopRatedCompanyBanner = () => {
  const badgeList = [
    { title: 'IPHONE APP DEVELOPMENT COMPANY', isRed: true },
    { title: 'TOP MOBILE APP DEVELOPMENT COMPANY', isBlue: true },
    { title: 'TOP MOBILE APP DEVELOPERS 2022', isClutch: true },
    { title: 'MOBILE APP DEVELOPMENT COMPANIES', isRed: true },
    { title: 'APP DEVELOPMENT COMPANY', isRed: true },
    { title: 'WEB DEVELOPMENT', isRed: true },
    { title: 'IPHONE APP DEVELOPMENT COMPANY', isRed: true },
    { title: 'TOP MOBILE APP DEVELOPMENT COMPANY', isBlue: true },
    { title: 'TOP MOBILE APP DEVELOPERS 2022', isClutch: true },
    { title: 'MOBILE APP DEVELOPMENT COMPANIES', isRed: true },
    { title: 'APP DEVELOPMENT COMPANY', isRed: true },
    { title: 'WEB DEVELOPMENT', isRed: true }
  ];

  return (
    <section className="py-7 bg-[#006587] text-white font-sans overflow-hidden border-b border-cyan-800">
      <Container className="max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full">
          
          {/* Left Header & Golden 3D Trophy Laurel Wreath */}
          <div className="flex items-center space-x-4 text-left shrink-0">
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-[900] text-white tracking-tight leading-[1.15] font-sans">
              World Wide Top Rated<br />
              Mobile App Development<br />
              Company on Clutch
            </h2>

            {/* Golden 3D Trophy Laurel Wreath Icon */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <defs>
                  <linearGradient id="gold3DGradClutch" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF176" />
                    <stop offset="40%" stopColor="#FFD700" />
                    <stop offset="75%" stopColor="#FFA000" />
                    <stop offset="100%" stopColor="#FF8F00" />
                  </linearGradient>
                  <linearGradient id="goldCupGradClutch" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFF9C4" />
                    <stop offset="50%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#E65100" />
                  </linearGradient>
                </defs>

                {/* Laurel Wreath Stems */}
                <path d="M50 80 C32 78 18 64 18 45 C18 30 28 18 42 14" stroke="url(#gold3DGradClutch)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M50 80 C68 78 82 64 82 45 C82 30 72 18 58 14" stroke="url(#gold3DGradClutch)" strokeWidth="3" strokeLinecap="round" fill="none" />

                {/* Laurel Leaves Left */}
                <ellipse cx="40" cy="15" rx="3.5" ry="7" transform="rotate(-40 40 15)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="32" cy="22" rx="3.5" ry="7" transform="rotate(-30 32 22)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="25" cy="32" rx="3.5" ry="7" transform="rotate(-15 25 32)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="21" cy="44" rx="3.5" ry="7" transform="rotate(0 21 44)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="22" cy="56" rx="3.5" ry="7" transform="rotate(15 22 56)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="28" cy="67" rx="3.5" ry="7" transform="rotate(30 28 67)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="36" cy="75" rx="3.5" ry="7" transform="rotate(45 36 75)" fill="url(#gold3DGradClutch)" />

                {/* Laurel Leaves Right */}
                <ellipse cx="60" cy="15" rx="3.5" ry="7" transform="rotate(40 60 15)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="68" cy="22" rx="3.5" ry="7" transform="rotate(30 68 22)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="75" cy="32" rx="3.5" ry="7" transform="rotate(15 75 32)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="79" cy="44" rx="3.5" ry="7" transform="rotate(0 79 44)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="78" cy="56" rx="3.5" ry="7" transform="rotate(-15 78 56)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="72" cy="67" rx="3.5" ry="7" transform="rotate(-30 72 67)" fill="url(#gold3DGradClutch)" />
                <ellipse cx="64" cy="75" rx="3.5" ry="7" transform="rotate(-45 64 75)" fill="url(#gold3DGradClutch)" />

                {/* Bottom Diamond Accent */}
                <polygon points="50,77 54,81 50,85 46,81" fill="url(#gold3DGradClutch)" />

                {/* Center Trophy Cup */}
                <path d="M38 67 H62 L60 72 H40 Z" fill="url(#goldCupGradClutch)" />
                <rect x="42" y="64" width="16" height="3" fill="url(#gold3DGradClutch)" />
                <rect x="47" y="55" width="6" height="9" fill="url(#gold3DGradClutch)" />
                <path d="M35 28 H65 V46 C65 53 57 58 50 58 C43 58 35 53 35 46 Z" fill="url(#goldCupGradClutch)" />
                <ellipse cx="50" cy="28" rx="15" ry="3" fill="#FFFDE7" />
                <path d="M35 32 C26 32 26 44 35 46" stroke="url(#gold3DGradClutch)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M65 32 C74 32 74 44 65 46" stroke="url(#gold3DGradClutch)" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right Award Ribbon & Badge Marquee */}
          <div className="relative overflow-hidden flex-1 min-w-0 w-full">
            <div
              className="flex space-x-3.5 w-max py-1 hover:[animation-play-state:paused] animate-marquee"
            >
              {badgeList.map((badge, idx) => (
                badge.isBlue ? (
                  /* Blue Round Badge */
                  <div key={idx} className="w-[105px] sm:w-[115px] shrink-0 flex flex-col items-center justify-center p-1.5 bg-white text-slate-900 rounded-full shadow-lg border-2 border-blue-400 text-center cursor-pointer hover:-translate-y-1 transition-transform">
                    <div className="w-full h-full rounded-full bg-blue-50 border border-blue-200 p-2 flex flex-col items-center justify-center">
                      <span className="text-[6.5px] font-bold text-blue-900 uppercase leading-none">TOP MOBILE APP</span>
                      <span className="text-[7.5px] font-black text-blue-600 leading-tight my-0.5 uppercase">DEVELOPMENT</span>
                      <span className="text-[6px] font-bold text-slate-600 uppercase leading-none">COMPANY</span>
                    </div>
                  </div>
                ) : badge.isClutch ? (
                  /* Hexagonal Clutch Badge */
                  <div key={idx} className="w-[105px] sm:w-[115px] shrink-0 bg-[#1E293B] text-white p-2 rounded-lg border border-cyan-400/40 shadow-lg text-center flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform">
                    <span className="text-[6.5px] font-extrabold text-cyan-300 uppercase">TOP MOBILE APP</span>
                    <span className="text-[12px] font-black text-white leading-tight my-0.5">Clutch</span>
                    <span className="text-[6.5px] font-bold text-slate-300 uppercase">DEVELOPERS 2022</span>
                  </div>
                ) : (
                  /* Red Ribbon Shield Badge */
                  <div
                    key={idx}
                    className="bg-white text-slate-900 shadow-xl overflow-hidden w-[105px] sm:w-[115px] shrink-0 border-t-[5px] border-[#8C1D40] flex flex-col justify-between p-2.5 pb-4 text-center relative group hover:-translate-y-1 transition-all cursor-pointer"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)' }}
                  >
                    <div className="text-[7.5px] font-bold text-slate-400 uppercase tracking-tight">MOST REVIEWED</div>
                    <div className="text-[8.5px] font-black text-[#8C1D40] leading-tight my-1.5 uppercase min-h-[26px] flex items-center justify-center">
                      {badge.title}
                    </div>
                    <div className="flex items-center justify-center space-x-0.5 my-1 text-[#8C1D40]">
                      <span className="text-[7px]">★</span>
                      <div className="w-3.5 h-3.5 rounded-full bg-[#8C1D40] text-white flex items-center justify-center text-[7px] font-bold">
                        ★
                      </div>
                      <span className="text-[7px]">★</span>
                    </div>
                    <div className="text-[7px] font-extrabold text-slate-400 tracking-tighter uppercase mt-1">
                      THE MANIFEST
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ClutchTopRatedCompanyBanner;
