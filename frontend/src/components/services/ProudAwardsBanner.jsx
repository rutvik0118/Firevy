import React, { useState, useEffect } from 'react';
import Container from '../common/Container';

export const ProudAwardsBanner = () => {
  const [hoveredBadge, setHoveredBadge] = useState(null);

  const badges = [
    {
      id: 0,
      name: 'Clutch',
      render: () => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-18 sm:h-18">
          {/* Outer Black Circle with Dotted/Stitched Border */}
          <circle cx="50" cy="50" r="44" fill="none" stroke="#1E293B" strokeWidth="3" />
          <circle cx="50" cy="50" r="39" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="2,2" />
          
          {/* Top Star */}
          <path d="M50 18 L52 22 L56 22 L53 25 L54 29 L50 26 L46 29 L47 25 L44 22 L48 22 Z" fill="#1E293B" />
          
          {/* Circular/Curved Top Text */}
          <text x="50" y="34" fill="#1E293B" fontSize="6" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
            CLIENTS SAY
          </text>
          <text x="50" y="42" fill="#1E293B" fontSize="5.5" fontWeight="700" textAnchor="middle">
            WE DELIVER
          </text>
          <text x="50" y="48" fill="#64748B" fontSize="5" fontWeight="600" textAnchor="middle">
            ON
          </text>
          
          {/* Clutch Logo Text with Red Dot */}
          <text x="47" y="62" fill="#1E293B" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            Clutch
          </text>
          <circle cx="68" cy="53" r="2.2" fill="#EF4444" />
          
          {/* Bottom Stars */}
          <g transform="translate(0, 48)">
            <circle cx="38" cy="22" r="1.5" fill="#1E293B" />
            <circle cx="50" cy="24" r="2" fill="#1E293B" />
            <circle cx="62" cy="22" r="1.5" fill="#1E293B" />
          </g>
        </svg>
      )
    },
    {
      id: 1,
      name: 'Upwork Top Rated',
      render: () => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-18 sm:h-18">
          {/* Upwork Top Badge Arc */}
          <circle cx="50" cy="40" r="28" fill="none" stroke="#14A800" strokeWidth="2.5" />
          
          {/* Upwork Logo & Text */}
          <rect x="42" y="24" width="16" height="11" rx="2" fill="#14A800" />
          <text x="50" y="32" fill="#FFFFFF" fontSize="6.5" fontWeight="900" textAnchor="middle">
            Up
          </text>
          <text x="50" y="46" fill="#14A800" fontSize="8.5" fontWeight="800" textAnchor="middle">
            upwork
          </text>
          
          {/* Green Ribbon */}
          <path d="M18 58 L28 58 L32 54 L68 54 L72 58 L82 58 L77 68 L82 78 L72 78 L68 74 L32 74 L28 78 L18 78 L23 68 Z" fill="#14A800" />
          
          {/* Shield & Star */}
          <path d="M36 62 L42 62 L42 68 L39 70 L36 68 Z" fill="#FFFFFF" />
          <polygon points="39,63 40,65 42,65 40.5,66.5 41,68.5 39,67.5 37,68.5 37.5,66.5 36,65 38,65" fill="#14A800" />
          
          {/* TOP RATED Text */}
          <text x="56" y="68" fill="#FFFFFF" fontSize="7.5" fontWeight="900" textAnchor="middle">
            TOP RATED
          </text>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Freelancer Preferred',
      render: () => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-18 sm:h-18">
          {/* Outer Cyan Ring */}
          <circle cx="50" cy="40" r="28" fill="none" stroke="#00B0FF" strokeWidth="2.5" />
          
          {/* Blue Origami Hummingbird Logo */}
          <path d="M42 22 L55 30 L50 36 L58 36 L48 44 L52 38 L42 34 Z" fill="#00B0FF" />
          
          {/* Freelancer Text */}
          <text x="50" y="48" fill="#0F172A" fontSize="8" fontWeight="800" textAnchor="middle" fontStyle="italic">
            freelancer
          </text>
          
          {/* Blue Ribbon Banner */}
          <path d="M16 58 L26 58 L30 54 L70 54 L74 58 L84 58 L79 68 L84 78 L74 78 L70 74 L30 74 L26 78 L16 78 L21 68 Z" fill="#00B0FF" />
          
          <text x="50" y="67" fill="#FFFFFF" fontSize="5.5" fontWeight="900" textAnchor="middle" letterSpacing="0.3">
            PREFERRED FREELANCER
          </text>
        </svg>
      )
    },
    {
      id: 3,
      name: 'Top App Profile / GoodFirms',
      render: () => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-18 sm:h-18">
          {/* Laurel Wreath Outer Ring */}
          <circle cx="50" cy="40" r="28" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4,2" />
          
          {/* 3 Golden Stars */}
          <polygon points="42,22 43,24 45,24 43.5,25.5 44,27.5 42,26.5 40,27.5 40.5,25.5 39,24 41,24" fill="#F59E0B" />
          <polygon points="50,19 51.2,21.5 54,21.5 52,23.5 52.8,26 50,24.8 47.2,26 48,23.5 46,21.5 48.8,21.5" fill="#F59E0B" />
          <polygon points="58,22 59,24 61,24 59.5,25.5 60,27.5 58,26.5 56,27.5 56.5,25.5 55,24 57,24" fill="#F59E0B" />
          
          {/* Golden Trophy */}
          <path d="M44 29 L56 29 L55 37 C55 40 45 40 45 37 Z" fill="#F59E0B" />
          <path d="M41 30 C38 30 38 35 44 35" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
          <path d="M59 30 C62 30 62 35 56 35" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
          <rect x="48" y="38" width="4" height="4" fill="#F59E0B" />
          <rect x="45" y="42" width="10" height="2" rx="1" fill="#F59E0B" />
          <text x="50" y="36" fill="#FFFFFF" fontSize="5" fontWeight="900" textAnchor="middle">1</text>
          
          {/* Blue Ribbon Banner */}
          <path d="M16 56 L26 56 L30 52 L70 52 L74 56 L84 56 L79 66 L84 76 L74 76 L70 72 L30 72 L26 76 L16 76 L21 66 Z" fill="#3B82F6" />
          
          <text x="50" y="65" fill="#FFFFFF" fontSize="5.5" fontWeight="900" textAnchor="middle">
            VIEW OUR PROFILE
          </text>
          
          <text x="50" y="84" fill="#64748B" fontSize="4.5" fontWeight="700" textAnchor="middle">
            goodfirms.co
          </text>
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#005F96] py-8 sm:py-10 text-white font-sans overflow-hidden">
      {/* Subtle Background Organic Vector Waves */}
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Title */}
          <div className="text-center lg:text-left shrink-0">
            <h2
              className="font-[800] text-white tracking-tight leading-[1.2] text-[24px] sm:text-[28px] lg:text-[32px]"
            >
              Proud To Have<br />
              Picked These Up<br />
              Along The Way
            </h2>
          </div>

          {/* Right 4 White Cards with Glowing Spotlight Pulse Animation */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
            {badges.map((badge, idx) => {
              const isHovered = hoveredBadge === idx;

              return (
                <div
                  key={badge.id}
                  onMouseEnter={() => setHoveredBadge(idx)}
                  onMouseLeave={() => setHoveredBadge(null)}
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-[8px] bg-white flex items-center justify-center p-2.5 sm:p-3 transition-all duration-300 transform cursor-pointer select-none ${
                    isHovered
                      ? 'scale-105 shadow-[0_0_30px_rgba(255,255,255,0.95)] ring-2 ring-white/90 brightness-105'
                      : 'shadow-md opacity-95'
                  }`}
                >
                  {badge.render()}
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
