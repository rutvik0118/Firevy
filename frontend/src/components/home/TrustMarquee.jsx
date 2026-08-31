import React from 'react';
import Container from '../common/Container';

export const TrustMarquee = () => {
  const clientLogos = [
    { name: 'FINTECH LABS', symbol: '⚡' },
    { name: 'MEDTECH GLOBAL', symbol: '✚' },
    { name: 'APEX LOGISTICS', symbol: '▲' },
    { name: 'PROPTECH REALTY', symbol: '🏛' },
    { name: 'CLOUDSCALE AI', symbol: '☁' },
    { name: 'AEROSPACE TECH', symbol: '🚀' },
    { name: 'ECOCOMMERCE', symbol: '🛒' },
    { name: 'CYBERSECURITY CO', symbol: '🛡' }
  ];

  return (
    <section className="py-10 bg-brand-dark/80 border-y border-gray-800/80 overflow-hidden">
      <Container className="mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by Businesses Building What's Next
        </p>
      </Container>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden group">
        {/* Gradient Fades on Left & Right */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2.5 mx-8 px-5 py-2.5 rounded-xl bg-gray-900/40 border border-gray-800/60 opacity-75 hover:opacity-100 hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
            >
              <span className="text-lg text-blue-400">{logo.symbol}</span>
              <span className="text-sm font-bold tracking-wider text-slate-300 hover:text-white font-mono uppercase">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;
