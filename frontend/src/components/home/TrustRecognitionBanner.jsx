import React from 'react';
import Container from '../common/Container';

const defaultBadges = [
  {
    title: 'Clutch - We Deliver On',
    sub: 'Verified 5.0 Rating',
    svg: (
      <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="45" cy="45" r="42" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
        <text x="45" y="26" textAnchor="middle" fontSize="7" fontWeight="700" fill="#6b7280" fontFamily="sans-serif">CLIENTS SAY</text>
        <text x="45" y="38" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#1f2937" fontFamily="sans-serif">WE DELIVER</text>
        <text x="45" y="49" textAnchor="middle" fontSize="7" fontWeight="600" fill="#6b7280" fontFamily="sans-serif">ON</text>
        <text x="45" y="64" textAnchor="middle" fontSize="13" fontWeight="900" fill="#FF3D2E" fontFamily="sans-serif">Clutch</text>
        <circle cx="45" cy="75" r="4" fill="#FF3D2E"/>
      </svg>
    )
  },
  {
    title: 'Upwork Top Rated',
    sub: 'Top-Rated Freelancer',
    svg: (
      <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="4" width="82" height="82" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
        <rect x="4" y="4" width="82" height="28" rx="8" fill="#14a800"/>
        <rect x="4" y="24" width="82" height="8" fill="#14a800"/>
        <text x="45" y="22" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="sans-serif">Upwork</text>
        <rect x="14" y="38" width="62" height="22" rx="11" fill="#14a800"/>
        <text x="45" y="53" textAnchor="middle" fontSize="10" fontWeight="800" fill="white" fontFamily="sans-serif">TOP RATED</text>
        <text x="45" y="76" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#374151" fontFamily="sans-serif">Top-Rated Freelancer</text>
      </svg>
    )
  },
  {
    title: 'Freelancer Preferred',
    sub: 'Top 1% Engineering',
    svg: (
      <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="45" cy="45" r="42" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
        <circle cx="45" cy="45" r="36" fill="none" stroke="#29B2FE" strokeWidth="3" strokeDasharray="6 3"/>
        <text x="45" y="32" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#6b7280" fontFamily="sans-serif">PREFERRED</text>
        <text x="45" y="43" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#6b7280" fontFamily="sans-serif">FREELANCER</text>
        <text x="45" y="55" textAnchor="middle" fontSize="11" fontWeight="900" fill="#29B2FE" fontFamily="sans-serif">f</text>
        <text x="45" y="67" textAnchor="middle" fontSize="7" fontWeight="600" fill="#6b7280" fontFamily="sans-serif">freelancer</text>
        <circle cx="72" cy="18" r="10" fill="#29B2FE"/>
        <text x="72" y="22" textAnchor="middle" fontSize="8" fontWeight="900" fill="white" fontFamily="sans-serif">★</text>
      </svg>
    )
  },
  {
    title: 'Top Profile Badge',
    sub: '5-Star Quality',
    svg: (
      <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="45" cy="45" r="42" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
        <circle cx="45" cy="45" r="36" fill="none" stroke="#F59E0B" strokeWidth="2.5"/>
        <text x="45" y="25" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#6b7280" fontFamily="sans-serif">VIEW OUR PROFILE</text>
        <text x="45" y="42" textAnchor="middle" fontSize="20" fontWeight="900" fill="#F59E0B" fontFamily="sans-serif">★</text>
        <text x="45" y="57" textAnchor="middle" fontSize="7" fontWeight="700" fill="#1f2937" fontFamily="sans-serif">TOP RATED</text>
        <text x="45" y="68" textAnchor="middle" fontSize="6" fontWeight="600" fill="#6b7280" fontFamily="sans-serif">ENTERPRISE</text>
      </svg>
    )
  },
  {
    title: 'GoodFirms Top Developer',
    sub: 'Certified Leader',
    svg: (
      <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="4" width="82" height="82" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
        <rect x="4" y="4" width="82" height="24" rx="8" fill="#003554"/>
        <rect x="4" y="20" width="82" height="8" fill="#003554"/>
        <text x="45" y="19" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#00C9A7" fontFamily="sans-serif">GOODFIRMS</text>
        <text x="45" y="40" textAnchor="middle" fontSize="7" fontWeight="700" fill="#6b7280" fontFamily="sans-serif">TOP WEB</text>
        <text x="45" y="51" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#003554" fontFamily="sans-serif">DEVELOPER</text>
        <rect x="20" y="60" width="50" height="14" rx="7" fill="#00C9A7"/>
        <text x="45" y="70" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="white" fontFamily="sans-serif">VERIFIED</text>
      </svg>
    )
  },
  {
    title: 'ISO 9001:2015 Certified',
    sub: 'Quality Assurance',
    svg: (
      <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="45" cy="45" r="42" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
        <circle cx="45" cy="45" r="37" fill="#0f2744"/>
        <circle cx="45" cy="45" r="33" fill="white"/>
        <text x="45" y="30" textAnchor="middle" fontSize="9" fontWeight="900" fill="#0f2744" fontFamily="sans-serif">ISO</text>
        <text x="45" y="43" textAnchor="middle" fontSize="8" fontWeight="800" fill="#006B8F" fontFamily="sans-serif">9001:2015</text>
        <text x="45" y="55" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#374151" fontFamily="sans-serif">CERTIFIED</text>
        <text x="45" y="67" textAnchor="middle" fontSize="6" fontWeight="600" fill="#6b7280" fontFamily="sans-serif">COMPANY</text>
      </svg>
    )
  }
];

export const TrustRecognitionBanner = ({ data }) => {
  const title = data?.title || 'Trust & Recognition In Global Software Engineering';
  const badges = (data?.badges && Array.isArray(data.badges) && data.badges.filter(b => b.isActive !== false).length > 0)
    ? data.badges.filter(b => b.isActive !== false)
    : defaultBadges;

  return (
    <section className="py-14 bg-white border-b border-slate-200 relative overflow-hidden font-sans">
      <Container>
        {title && (
          <div className="text-center mb-8">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#006B8F]">
              {title}
            </h3>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-[#006B8F]/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-300 group-hover:scale-105">
                {badge.image ? (
                  <img src={badge.image} alt={badge.title || badge.alt || 'Recognition Badge'} className="w-full h-full object-contain" />
                ) : (
                  badge.svg || defaultBadges[idx % defaultBadges.length].svg
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustRecognitionBanner;
