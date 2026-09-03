import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export const PremiumServicesGrid = ({ title, subtitle, companyName = "Firevy" }) => {
  const services = [
    {
      name: 'Mobile App Development',
      link: '/services/mobile-app-development',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0">
          <rect x="10" y="4" width="24" height="36" rx="4" fill="#3B82F6" />
          <rect x="12" y="7" width="20" height="27" rx="2" fill="#818CF8" />
          <circle cx="22" cy="37" r="1.5" fill="#FFFFFF" />
          <rect x="14" y="10" width="16" height="4" rx="1" fill="#FFFFFF" />
          <line x1="16" y1="12" x2="22" y2="12" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
          <rect x="14" y="16" width="16" height="4" rx="1" fill="#FFFFFF" />
          <line x1="16" y1="18" x2="24" y2="18" stroke="#EC4899" strokeWidth="1.2" strokeLinecap="round" />
          <rect x="14" y="22" width="16" height="4" rx="1" fill="#FFFFFF" />
          <line x1="16" y1="24" x2="20" y2="24" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" />
          <rect x="14" y="28" width="16" height="4" rx="1" fill="#FFFFFF" />
          <line x1="16" y1="30" x2="26" y2="30" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Software Development',
      link: '/services/software-development',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0">
          <rect x="6" y="8" width="30" height="20" rx="2" fill="#334155" />
          <rect x="8" y="10" width="26" height="16" rx="1" fill="#F8FAFC" />
          <path d="M3 30 L39 30 C40 30, 41 31, 39 32 L3 32 C1 31, 2 30, 3 30 Z" fill="#64748B" />
          <circle cx="18" cy="18" r="5" fill="#EF4444" />
          <circle cx="18" cy="18" r="2" fill="#F8FAFC" />
          <circle cx="26" cy="16" r="4.5" fill="#10B981" />
          <circle cx="26" cy="16" r="1.8" fill="#F8FAFC" />
        </svg>
      )
    },
    {
      name: 'Web Development',
      link: '/services/web-development',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0">
          <rect x="5" y="7" width="34" height="28" rx="3" fill="#BFDBFE" />
          <path d="M5 7 L39 7 L39 14 L5 14 Z" fill="#3B82F6" />
          <circle cx="9" cy="10.5" r="1.2" fill="#FFFFFF" />
          <circle cx="13" cy="10.5" r="1.2" fill="#FFFFFF" />
          <circle cx="17" cy="10.5" r="1.2" fill="#FFFFFF" />
          <text x="22" y="27" textAnchor="middle" fontSize="10" fontWeight="900" fill="#1D4ED8" fontFamily="sans-serif">
            www
          </text>
        </svg>
      )
    },
    {
      name: '.NET Development',
      link: '/services/dot-net-development',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0">
          <path d="M6 24 C10 12, 14 12, 18 24 C22 36, 26 36, 30 24" fill="none" stroke="#0284C7" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="34" cy="20" r="2" fill="#0284C7" />
        </svg>
      )
    },
    {
      name: 'Flutter App Development',
      link: '/services/flutter-app-development',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0" fill="none">
          <path d="M26 6 L10 22 L15 27 L36 6 Z" fill="#38BDF8" />
          <path d="M26 22 L15 33 L20 38 L36 22 Z" fill="#0284C7" />
          <path d="M21 27 L26 22 L36 32 L31 37 Z" fill="#0369A1" />
        </svg>
      )
    },
    {
      name: 'PHP Development',
      link: '/services/php-development',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0">
          <ellipse cx="22" cy="22" rx="18" ry="12" fill="#6B7280" />
          <text x="22" y="26.5" textAnchor="middle" fontSize="13" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif" letterSpacing="0.5">
            php
          </text>
        </svg>
      )
    },
    {
      name: 'Hire Dedicated Developers',
      link: '/hire-developers',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0">
          <circle cx="16" cy="14" r="5" fill="#FCA5A5" />
          <path d="M9 28 C9 23, 13 21, 16 21 C19 21, 23 23, 23 28" fill="#38BDF8" />
          <rect x="20" y="16" width="16" height="12" rx="1.5" fill="#38BDF8" />
          <path d="M26 28 L30 28 M28 28 L28 32" stroke="#0284C7" strokeWidth="1.5" />
          <polygon points="16,21 17.5,25 16,27 14.5,25" fill="#EF4444" />
        </svg>
      )
    },
    {
      name: 'Mern Stack Development',
      link: '/services/mern-stack-development',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0">
          <circle cx="16" cy="26" r="8" fill="none" stroke="#6366F1" strokeWidth="3" strokeDasharray="3 1.5" />
          <circle cx="16" cy="26" r="3.5" fill="#6366F1" />
          <circle cx="28" cy="14" r="2.5" fill="#06B6D4" />
          <circle cx="34" cy="18" r="2.5" fill="#06B6D4" />
          <circle cx="26" cy="20" r="2" fill="#06B6D4" />
          <circle cx="32" cy="24" r="2" fill="#06B6D4" />
        </svg>
      )
    },
    {
      name: 'Full Stack Development',
      link: '/services/full-stack-development',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0">
          <rect x="7" y="9" width="30" height="22" rx="3" fill="#1E293B" />
          <line x1="12" y1="15" x2="19" y2="15" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="20" x2="26" y2="20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="25" x2="22" y2="25" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 34 L32 34" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Laravel Development',
      link: '/services/laravel-development',
      icon: (
        <svg viewBox="0 0 44 44" className="w-10 h-10 shrink-0" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 6 L34 13 L34 27 L22 34 L10 27 L10 13 Z" />
          <path d="M22 6 L22 34" />
          <path d="M22 20 L34 13" />
          <path d="M22 20 L10 13" />
          <path d="M28 16.5 L28 30.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-11 bg-[#005F96] text-white font-sans text-left relative">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 space-y-2">
          <h2 
            className="font-[800] text-white tracking-tight leading-tight"
            style={{ fontSize: '30px' }}
          >
            {title || "Our Premium Services"}
          </h2>
          <p 
            className="text-white/90 font-normal max-w-3xl mx-auto"
            style={{ fontSize: '13.5px', lineHeight: '1.55' }}
          >
            {subtitle || `As a certified IT company, ${companyName} helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!`}
          </p>
        </div>

        {/* 10 White Rounded Service Cards (5 columns x 2 rows on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 max-w-[1360px] mx-auto">
          {services.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="bg-white rounded-[12px] px-3.5 py-2.5 sm:py-3 sm:px-3 text-slate-900 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 flex items-center space-x-3 min-h-[58px] sm:min-h-[62px] text-left group"
            >
              <div 
                className="shrink-0 flex items-center justify-center will-change-transform w-8 h-8 sm:w-8.5 sm:h-8.5"
                style={{
                  animation: `premiumIconFloat 2.8s ease-in-out infinite`,
                  animationDelay: `${(idx % 5) * 0.35}s`
                }}
              >
                {item.icon}
              </div>
              <span className="font-[800] text-[#0B0F19] text-[12px] sm:text-[12.5px] leading-[1.2] group-hover:text-[#005F96] transition-colors">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        <style>{`
          @keyframes premiumIconFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
          }
        `}</style>
      </Container>
    </section>
  );
};

export default PremiumServicesGrid;
