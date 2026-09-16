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
      render: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full p-1">
          {/* Outer Black Circle with Dotted/Stitched Inner Border */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="#1E293B" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="2,2" />
          
          {/* Top Star */}
          <path d="M50 16 L51.8 20.2 L56 20.2 L52.6 22.8 L53.8 27 L50 24.2 L46.2 27 L47.4 22.8 L44 20.2 L48.2 20.2 Z" fill="#1E293B" />
          
          {/* Circular/Curved Top Text */}
          <text x="50" y="32" fill="#1E293B" fontSize="5.5" fontWeight="800" textAnchor="middle" letterSpacing="0.4" fontFamily="sans-serif">
            CLIENTS SAY
          </text>
          <text x="50" y="39" fill="#1E293B" fontSize="5" fontWeight="700" textAnchor="middle" letterSpacing="0.2" fontFamily="sans-serif">
            WE DELIVER
          </text>
          <text x="50" y="45" fill="#64748B" fontSize="4.5" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
            ON
          </text>
          
          {/* Clutch Logo Text with Red Dot */}
          <text x="46" y="60" fill="#1E293B" fontSize="13.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="-0.5">
            Clutch
          </text>
          <circle cx="68" cy="51" r="2.2" fill="#EF4444" />
          
          {/* Bottom 5 Stars */}
          <g fill="#1E293B" transform="translate(0, 52)">
            <circle cx="34" cy="20" r="1.2" />
            <circle cx="42" cy="22" r="1.4" />
            <circle cx="50" cy="23" r="1.6" />
            <circle cx="58" cy="22" r="1.4" />
            <circle cx="66" cy="20" r="1.2" />
          </g>
        </svg>
      )
    },
    {
      id: 1,
      name: 'Upwork Top Rated',
      tooltip: 'Upwork Top Rated Agency - 100% Job Success Score',
      link: 'https://www.upwork.com',
      render: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full p-1">
          {/* Upwork Top Badge Arc */}
          <circle cx="50" cy="40" r="29" fill="none" stroke="#14A800" strokeWidth="2.5" />
          
          {/* Upwork Logo & Text */}
          <rect x="42" y="22" width="16" height="12" rx="2.5" fill="#14A800" />
          <text x="50" y="31" fill="#FFFFFF" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            Up
          </text>
          <text x="50" y="46" fill="#14A800" fontSize="8.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
            upwork
          </text>
          
          {/* Green Ribbon */}
          <path d="M16 57 L26 57 L30 53 L70 53 L74 57 L84 57 L79 67 L84 77 L74 77 L70 73 L30 73 L26 77 L16 77 L21 67 Z" fill="#14A800" />
          
          {/* Shield & Star */}
          <path d="M35 61 L41 61 L41 67 L38 69 L35 67 Z" fill="#FFFFFF" />
          <polygon points="38,62 39,64 41,64 39.5,65.5 40,67.5 38,66.5 36,67.5 36.5,65.5 35,64 37,64" fill="#14A800" />
          
          {/* TOP RATED Text */}
          <text x="56" y="67" fill="#FFFFFF" fontSize="7.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            TOP RATED
          </text>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Freelancer Preferred',
      tooltip: 'Preferred Freelancer Badge - Top Tier Enterprise Partner',
      link: 'https://www.freelancer.com',
      render: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full p-1">
          {/* Outer Cyan Ring */}
          <circle cx="50" cy="40" r="29" fill="none" stroke="#00B0FF" strokeWidth="2.5" />
          
          {/* Blue Origami Hummingbird Logo */}
          <path d="M41 21 L56 29 L50 35 L59 35 L47 44 L52 37 L41 33 Z" fill="#00B0FF" />
          
          {/* Freelancer Text */}
          <text x="50" y="47" fill="#0F172A" fontSize="8" fontWeight="800" textAnchor="middle" fontStyle="italic" fontFamily="sans-serif">
            freelancer
          </text>
          
          {/* Blue Ribbon Banner */}
          <path d="M15 57 L25 57 L29 53 L71 53 L75 57 L85 57 L80 67 L85 77 L75 77 L71 73 L29 73 L25 77 L15 77 L20 67 Z" fill="#00B0FF" />
          
          <text x="50" y="66" fill="#FFFFFF" fontSize="5.5" fontWeight="900" textAnchor="middle" letterSpacing="0.3" fontFamily="sans-serif">
            PREFERRED FREELANCER
          </text>
        </svg>
      )
    },
    {
      id: 3,
      name: 'GoodFirms',
      tooltip: 'GoodFirms Verified Top Rated Mobile & Web Developers',
      link: 'https://www.goodfirms.co',
      render: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full p-1">
          {/* Laurel Wreath Outer Ring */}
          <circle cx="50" cy="40" r="29" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4,2" />
          
          {/* 3 Golden Stars */}
          <polygon points="42,21 43,23 45,23 43.5,24.5 44,26.5 42,25.5 40,26.5 40.5,24.5 39,23 41,23" fill="#F59E0B" />
          <polygon points="50,18 51.2,20.5 54,20.5 52,22.5 52.8,25 50,23.8 47.2,25 48,22.5 46,20.5 48.8,20.5" fill="#F59E0B" />
          <polygon points="58,21 59,23 61,23 59.5,24.5 60,26.5 58,25.5 56,26.5 56.5,24.5 55,23 57,23" fill="#F59E0B" />
          
          {/* Golden Trophy */}
          <path d="M44 28 L56 28 L55 36 C55 39 45 39 45 36 Z" fill="#F59E0B" />
          <path d="M41 29 C38 29 38 34 44 34" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
          <path d="M59 29 C62 29 62 34 56 34" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
          <rect x="48" y="37" width="4" height="4" fill="#F59E0B" />
          <rect x="45" y="41" width="10" height="2" rx="1" fill="#F59E0B" />
          <text x="50" y="35" fill="#FFFFFF" fontSize="5" fontWeight="900" textAnchor="middle">1</text>
          
          {/* Blue Ribbon Banner */}
          <path d="M15 55 L25 55 L29 51 L71 51 L75 55 L85 55 L80 65 L85 75 L75 75 L71 71 L29 71 L25 75 L15 75 L20 65 Z" fill="#3B82F6" />
          
          <text x="50" y="64" fill="#FFFFFF" fontSize="5.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            VIEW OUR PROFILE
          </text>
          
          <text x="50" y="83" fill="#64748B" fontSize="4.5" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
            goodfirms.co
          </text>
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#005F96] py-7 sm:py-9 text-white font-sans overflow-hidden border-y border-[#004d7a]">
      {/* Subtle Background Organic Vector Waves matching reference */}
      <svg
        className="absolute left-0 top-0 bottom-0 h-full w-48 text-white/10 pointer-events-none"
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
        className="absolute right-0 top-0 bottom-0 h-full w-48 text-white/10 pointer-events-none"
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
          <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap sm:flex-nowrap">
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
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-[8px] bg-white flex items-center justify-center p-2 transition-shadow duration-300 cursor-pointer block select-none ${
                      isHovered
                        ? 'shadow-[0_10px_25px_rgba(0,0,0,0.25),0_0_20px_rgba(255,255,255,0.7)] ring-2 ring-white'
                        : 'shadow-md hover:shadow-lg'
                    }`}
                  >
                    {badge.render()}
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

