import React from 'react';
import Container from '../common/Container';

export const TrustRecognitionBanner = () => {
  const badges = [
    {
      // Clutch badge - "WE DELIVER ON Clutch"
      alt: 'Clutch - We Deliver On',
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
      // Upwork TOP RATED badge
      alt: 'Upwork Top Rated',
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
      // Freelancer badge
      alt: 'Freelancer Preferred Freelancer',
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
      // 5-star / Top profile badge
      alt: 'Top Profile Badge',
      svg: (
        <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="45" cy="45" r="42" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
          <circle cx="45" cy="45" r="36" fill="none" stroke="#F59E0B" strokeWidth="2.5"/>
          <text x="45" y="25" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#6b7280" fontFamily="sans-serif">VIEW OUR PROFILE</text>
          <text x="45" y="42" textAnchor="middle" fontSize="20" fontWeight="900" fill="#F59E0B" fontFamily="sans-serif">★</text>
          <text x="45" y="57" textAnchor="middle" fontSize="7" fontWeight="700" fill="#1f2937" fontFamily="sans-serif">TOP RATED</text>
          <text x="45" y="68" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="#6b7280" fontFamily="sans-serif">PROFILE</text>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#006B8F] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 py-12">

          {/* LEFT: Bold White Heading Text */}
          <div className="lg:w-2/5 shrink-0">
            <h2 className="text-[28px] sm:text-[32px] font-[800] text-white leading-tight font-sans">
              Proud To Have<br />Picked These Up<br />Along The Way
            </h2>
          </div>

          {/* RIGHT: 4 White Badge Cards */}
          <div className="lg:w-3/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[12px] p-3 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                style={{ aspectRatio: '1 / 1' }}
              >
                <div className="w-full h-full flex items-center justify-center p-1">
                  {badge.svg}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustRecognitionBanner;
