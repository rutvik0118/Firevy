import React from 'react';
import Container from '../common/Container';

const defaultBadges = [
  {
    id: 1,
    title: 'Clutch - Clients Say We Deliver On Clutch',
    image: '/images/clutch.png',
    fallbackSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" fill="#182330" stroke="#253549" strokeWidth="2"/>
        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 3"/>
        <text x="50" y="28" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#94A3B8" letterSpacing="0.5">CLIENTS SAY</text>
        <text x="50" y="40" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="white" letterSpacing="0.5">WE DELIVER</text>
        <text x="50" y="50" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#94A3B8">ON</text>
        <text x="50" y="66" textAnchor="middle" fontSize="13" fontWeight="900" fill="white" fontFamily="sans-serif">Clutch</text>
        <circle cx="50" cy="76" r="3.5" fill="#FF3D2E"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Upwork Top Rated',
    image: '/images/9_upwork.png',
    fallbackSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="88" height="88" rx="10" fill="white" />
        <path d="M 22 25 Q 50 10 78 25 L 78 60 Q 50 85 22 60 Z" fill="none" stroke="#14A800" strokeWidth="2.5" />
        <text x="50" y="38" textAnchor="middle" fontSize="10" fontWeight="900" fill="#14A800">upwork</text>
        <rect x="14" y="52" width="72" height="18" rx="9" fill="#14A800" />
        <text x="50" y="65" textAnchor="middle" fontSize="8" fontWeight="900" fill="white" letterSpacing="0.5">TOP RATED</text>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Freelancer Preferred',
    image: '/images/10_freelancer.png',
    fallbackSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" fill="white" stroke="#29B6F6" strokeWidth="2"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#29B6F6" strokeWidth="1.5" strokeDasharray="4 2"/>
        <path d="M 40 32 Q 50 24 60 32 Q 54 36 50 34 Z" fill="#29B6F6" />
        <text x="50" y="46" textAnchor="middle" fontSize="9" fontWeight="900" fill="#0284C7">freelancer</text>
        <rect x="10" y="56" width="80" height="18" rx="9" fill="#0284C7" />
        <text x="50" y="68" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="white" letterSpacing="0.5">PREFERRED FREELANCER</text>
      </svg>
    )
  },
  {
    id: 4,
    title: 'GoodFirms Top Developer',
    image: '/images/goodfirms.png',
    fallbackSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="44" fill="white" stroke="#3B82F6" strokeWidth="2"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#3B82F6" strokeWidth="1.5"/>
        <text x="50" y="28" textAnchor="middle" fontSize="12" fill="#F59E0B">★ ★ ★</text>
        <circle cx="50" cy="42" r="10" fill="#F59E0B" />
        <text x="50" y="46" textAnchor="middle" fontSize="9" fontWeight="900" fill="white">🏆</text>
        <rect x="8" y="58" width="84" height="18" rx="9" fill="#3B82F6" />
        <text x="50" y="70" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="white" letterSpacing="0.5">VIEW OUR PROFILE</text>
      </svg>
    )
  }
];

export const TrustRecognitionBanner = ({ data }) => {
  const title = data?.title || "Proud To Have Picked These Up Along The Way";

  // Use provided badges if available and not empty, otherwise default to the 4 awards
  const rawBadges = (data?.badges && Array.isArray(data.badges) && data.badges.filter(b => b.isActive !== false).length > 0)
    ? data.badges.filter(b => b.isActive !== false)
    : defaultBadges;

  // Ensure default images are mapped properly
  const badges = rawBadges.slice(0, 4).map((badge, idx) => ({
    ...badge,
    image: badge.image || defaultBadges[idx % defaultBadges.length].image
  }));

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#00597b] text-white relative overflow-hidden font-sans border-t border-b border-cyan-900/40 select-none">
      {/* Background Wavy Contour Lines Accent */}
      <svg className="absolute -left-16 -top-16 w-80 h-80 opacity-25 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M 10 80 Q 90 20 180 120 T 250 200" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M 20 120 Q 100 60 190 160 T 260 240" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M 30 160 Q 110 100 200 200 T 270 280" stroke="white" strokeWidth="2.5" fill="none" />
      </svg>
      <svg className="absolute -right-16 -bottom-16 w-80 h-80 opacity-25 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M 10 80 Q 90 20 180 120 T 250 200" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M 20 120 Q 100 60 190 160 T 260 240" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M 30 160 Q 110 100 200 200 T 270 280" stroke="white" strokeWidth="2.5" fill="none" />
      </svg>

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10 max-w-7xl mx-auto">
          {/* Left Title */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-[800] text-white tracking-tight leading-[1.25] font-sans max-w-md mx-auto lg:mx-0">
              {title}
            </h2>
          </div>

          {/* Right 4 White Square Award Badge Cards */}
          <div className="w-full lg:w-7/12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-center items-center">
            {badges.map((badge, idx) => (
              <div
                key={badge.id || idx}
                className="bg-white rounded-[16px] shadow-lg flex items-center justify-center h-28 sm:h-32 lg:h-[135px] p-3 sm:p-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-white/40 group cursor-pointer"
              >
                {badge.image ? (
                  <img
                    src={badge.image}
                    alt={badge.title || 'Recognition Award Badge'}
                    className="max-h-20 sm:max-h-24 max-w-full object-contain filter group-hover:contrast-110 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.parentElement.querySelector('.fallback-svg');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className="fallback-svg w-full h-full items-center justify-center"
                  style={{ display: badge.image ? 'none' : 'flex' }}
                >
                  {badge.svg || defaultBadges[idx % defaultBadges.length]?.fallbackSvg}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustRecognitionBanner;
