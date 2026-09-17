import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';

export const ProudAwardsBanner = () => {
  const [hoveredBadge, setHoveredBadge] = useState(null);

  const badges = [
    {
      id: 0,
      name: 'Clutch',
      tooltip: 'Clients Say We Deliver on Clutch - 4.9/5 Rating',
      link: 'https://clutch.co',
      image: '/images/clutch.png',
      alt: 'Clutch - Clients Say We Deliver on Clutch'
    },
    {
      id: 1,
      name: 'Upwork Top Rated',
      tooltip: 'Upwork Top Rated Agency - 100% Job Success Score',
      link: 'https://www.upwork.com',
      image: '/images/9_upwork.png',
      alt: 'Upwork Top Rated Agency'
    },
    {
      id: 2,
      name: 'Freelancer Preferred',
      tooltip: 'Preferred Freelancer Badge - Top Tier Enterprise Partner',
      link: 'https://www.freelancer.com',
      image: '/images/10_freelancer.png',
      alt: 'Freelancer Preferred Partner'
    },
    {
      id: 3,
      name: 'GoodFirms',
      tooltip: 'GoodFirms Verified Top Rated Mobile & Web Developers',
      link: 'https://www.goodfirms.co',
      image: '/images/goodfirms.png',
      alt: 'GoodFirms Top Developer - View Our Profile'
    }
  ];

  return (
    <section className="relative bg-[#005F96] py-6 sm:py-8 lg:py-9 text-white font-sans overflow-hidden border-y border-[#004d7a]">
      {/* Subtle Background Organic Vector Waves matching reference */}
      <svg
        className="absolute left-0 top-0 bottom-0 h-full w-56 text-white/10 pointer-events-none"
        viewBox="0 0 200 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M -20 10 C 40 20, 20 80, 80 50 C 130 30, 90 110, 160 90"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M -10 40 C 50 50, 40 100, 100 80"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <svg
        className="absolute right-0 top-0 bottom-0 h-full w-56 text-white/10 pointer-events-none"
        viewBox="0 0 200 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M 220 10 C 160 30, 180 80, 120 60 C 80 40, 110 110, 40 100"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <Container className="max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Left Title */}
          <div className="text-center lg:text-left shrink-0">
            <h2 className="font-[800] text-white tracking-tight leading-[1.18] text-[24px] sm:text-[28px] lg:text-[32px] font-sans">
              Proud To Have<br />
              Picked These Up<br />
              Along The Way
            </h2>
          </div>

          {/* Right 4 White Cards with interactive hover feedback */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 flex-wrap sm:flex-nowrap">
            {badges.map((badge, idx) => {
              const isHovered = hoveredBadge === idx;

              return (
                <div
                  key={badge.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredBadge(idx)}
                  onMouseLeave={() => setHoveredBadge(null)}
                >
                  <motion.a
                    href={badge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={badge.tooltip}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-[12px] sm:rounded-[14px] bg-white flex items-center justify-center p-3 sm:p-3.5 transition-all duration-300 cursor-pointer block select-none ${
                      isHovered
                        ? 'shadow-[0_12px_28px_rgba(0,0,0,0.25)] ring-2 ring-white/90'
                        : 'shadow-md hover:shadow-xl'
                    }`}
                  >
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-full h-full object-contain filter group-hover:contrast-105 transition-transform duration-300 select-none"
                      loading="lazy"
                    />
                  </motion.a>

                  {/* Tooltip on Hover */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="hidden sm:block absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/95 text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-lg pointer-events-none z-30"
                    >
                      {badge.name}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProudAwardsBanner;

