import React from 'react';
import Container from '../common/Container';

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

export const FeaturedInLogosGrid = ({ data, title }) => {
  const displayTitle = data?.title || title || 'We Have Been Featured In';

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 max-w-[1240px] mx-auto">
          {logos.map((logo, idx) => {
            const imgSrc = logo.image || defaultLogos[idx % defaultLogos.length]?.image || `/images/${(idx % 18) + 1}.svg`;

            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] shadow-[0_4px_22px_rgba(0,0,0,0.06)] border border-slate-100 hover:border-slate-200/90 flex items-center justify-center p-4 sm:p-5 aspect-[1.15/1] sm:aspect-square w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
              >
                <img 
                  src={imgSrc} 
                  alt={logo.name || `Publication Logo ${idx + 1}`} 
                  className="max-h-[44px] sm:max-h-[50px] max-w-[82%] object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedInLogosGrid;
