import React from 'react';
import Container from '../common/Container';

export const FeaturedInLogosGrid = () => {
  const mediaLogos = [
    { name: 'Microsoft', icon: '💻' },
    { name: 'Inc. 5000', icon: '📈' },
    { name: 'Google Play', icon: '▶️' },
    { name: 'App Store', icon: '🍎' },
    { name: 'Forbes', icon: '📰' },
    { name: 'BBB Accredited', icon: '🛡️' },
    { name: 'TechCrunch', icon: '⚡' },
    { name: 'Product Hunt', icon: '🐱' },
    { name: 'GoodFirms', icon: '🏆' },
    { name: 'Clutch Leader', icon: '⭐' },
    { name: 'ISO 9001:2015', icon: '📜' },
    { name: 'Entrepreneur', icon: '🚀' },
    { name: 'VentureBeat', icon: '🌐' },
    { name: 'ZDNet', icon: '🔬' },
    { name: 'Business Insider', icon: '📊' },
    { name: 'CIO Review', icon: '🎖️' },
    { name: 'Software World', icon: '🌐' },
    { name: 'DesignRush', icon: '🎨' }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-slate-900 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-[#006B8F]">
            We Have Been Featured In
          </h2>
          <p className="text-[18px] font-[400] text-slate-500 mt-2">
            Recognized across leading global tech publications, business magazines, and B2B software benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {mediaLogos.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-4 border border-slate-200 shadow-[0px_4px_15px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-cyan-500/40 flex items-center justify-center space-x-2 transition-all duration-300 group cursor-pointer"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-xs font-bold text-slate-700 group-hover:text-[#006B8F] transition-colors font-sans tracking-wide">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedInLogosGrid;
