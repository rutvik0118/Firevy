import React from 'react';
import Container from '../common/Container';
import { getMediaUrl } from '../../utils/mediaUrl';

const defaultLogos = [
  { name: 'Microsoft', image: '/images/1.svg' },
  { name: 'Inc.', image: '/images/2.svg' },
  { name: 'Google Play', image: '/images/3.svg' },
  { name: 'App Store', image: '/images/4.svg' },
  { name: 'Forbes', image: '/images/5.svg' },
  { name: 'BBB', image: '/images/6.svg' },
  { name: 'YOURSTORY', image: '/images/7.svg' },
  { name: 'Wikipedia', image: '/images/8.svg' },
  { name: 'Entrepreneur', image: '/images/9.svg' },
  { name: 'Mashable', image: '/images/10.svg' },
  { name: 'Capterra', image: '/images/11.svg' },
  { name: 'c|net', image: '/images/12.svg' },
  { name: 'The New York Times', image: '/images/13.svg' },
  { name: 'TechCrunch', image: '/images/14.svg' },
  { name: 'Clutch', image: '/images/15.svg' },
  { name: 'PCMag', image: '/images/16.svg' },
  { name: 'G2 Crowd', image: '/images/17.svg' },
  { name: 'The Telegraph', image: '/images/18.svg' }
];

    // Row 2
    {
      id: 'yourstory',
      content: (
        <span className="text-[18px] sm:text-[20px] font-[900] text-slate-800 font-sans tracking-widest uppercase">
          YOURSTORY
        </span>
      )
    },
    {
      id: 'wikipedia',
      content: (
        <div className="flex items-center justify-center">
          <img
            src="/images/wikipedia_globe.svg"
            alt="Wikipedia"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
        </div>
      )
    },
    {
      id: 'entrepreneur',
      content: (
        <span className="text-[18px] sm:text-[20px] font-[800] text-slate-900 font-serif tracking-tight">
          Entrepreneur
        </span>
      )
    },
    {
      id: 'mashable',
      content: (
        <span className="text-[20px] sm:text-[22px] font-[900] text-slate-600 font-sans tracking-tight">
          Mashable
        </span>
      )
    },
    {
      id: 'capterra',
      content: (
        <div className="flex items-center space-x-1.5">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-700">
            <path d="M2 12L22 2L13 22L11 13L2 12Z" />
          </svg>
          <span className="text-[16px] font-[800] text-slate-800 font-sans">Capterra</span>
        </div>
      )
    },
    {
      id: 'cnet',
      content: (
        <span className="text-[28px] sm:text-[32px] font-[900] text-slate-900 font-sans tracking-tighter">
          c|net
        </span>
      )
    },

  // Always display the 18 reference logos in 6x3 grid
  const logos = (data?.logos && Array.isArray(data.logos) && data.logos.length >= 18)
    ? data.logos.filter(l => l.isActive !== false)
    : defaultLogos;

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80 text-slate-900 relative font-sans overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[900] tracking-tight text-slate-950 font-sans">
            {displayTitle}
          </h2>
        </div>

        {/* 6x3 Grid of 18 Exact Square White Cards (Matching Reference Screenshot 1) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-5 max-w-[1240px] mx-auto">
          {logos.map((logo, idx) => {
            const rawSrc = logo.image || defaultLogos[idx % defaultLogos.length]?.image || `/images/${(idx % 18) + 1}.svg`;
            const imgSrc = rawSrc ? getMediaUrl(rawSrc) : '';

            return (
              <div
                key={idx}
                className="bg-white rounded-[14px] sm:rounded-[16px] shadow-[0_4px_18px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#006B8F]/40 flex items-center justify-center p-4 aspect-square w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
              >
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={logo.name || `Publication Logo ${idx + 1}`}
                    className="max-h-[44px] sm:max-h-[50px] max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    {logo.content || <span className="text-base font-bold text-slate-800">{logo.name}</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedInLogosGrid;
