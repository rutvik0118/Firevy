import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export const PremiumServicesGrid = () => {
  const services = [
    {
      name: 'Mobile App Development',
      link: '/services/mobile-app-development',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <rect x="10" y="4" width="20" height="32" rx="4" fill="#6366F1" />
          <rect x="12" y="8" width="16" height="22" rx="2" fill="#FFFFFF" />
          <circle cx="20" cy="33" r="1.5" fill="#FFFFFF" />
          <rect x="14" y="10" width="12" height="4" rx="1" fill="#F43F5E" />
          <rect x="14" y="16" width="8" height="3" rx="1" fill="#06B6D4" />
          <rect x="14" y="21" width="12" height="6" rx="1" fill="#10B981" />
        </svg>
      )
    },
    {
      name: 'Software Development',
      link: '/services/software-development',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <rect x="6" y="8" width="28" height="20" rx="3" fill="#475569" />
          <rect x="9" y="11" width="22" height="14" rx="1" fill="#FFFFFF" />
          <path d="M4 30 H36 V32 C36 33 35 34 34 34 H6 C5 34 4 33 4 32 Z" fill="#64748B" />
          <circle cx="23" cy="18" r="4.5" fill="#EF4444" />
          <path d="M23 15.5 V20.5 M20.5 18 H25.5" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M12 15 L15 18 L12 21" stroke="#10B981" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      )
    },
    {
      name: 'Web Development',
      link: '/services/web-development',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <rect x="4" y="8" width="32" height="24" rx="4" fill="#93C5FD" />
          <path d="M4 14 H36 V28 C36 30 34 32 32 32 H8 C6 32 4 30 4 28 Z" fill="#FFFFFF" />
          <circle cx="9" cy="11" r="1.5" fill="#EF4444" />
          <circle cx="14" cy="11" r="1.5" fill="#F59E0B" />
          <circle cx="19" cy="11" r="1.5" fill="#10B981" />
          <text x="7" y="24" fill="#005F96" fontSize="9" fontWeight="900" fontFamily="sans-serif">WWW</text>
        </svg>
      )
    },
    {
      name: '.NET Development',
      link: '/services/dot-net-development',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <path d="M10 12 L16 28 H21 L27 12 H22 L18.5 22 L15 12 Z" fill="#0284C7" />
          <circle cx="7" cy="26" r="2" fill="#0284C7" />
          <text x="25" y="16" fill="#0284C7" fontSize="7" fontWeight="900">.NET</text>
        </svg>
      )
    },
    {
      name: 'Flutter App Development',
      link: '/services/flutter-app-development',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <polygon points="22,6 34,18 26,26 14,14" fill="#38BDF8" />
          <polygon points="26,26 34,34 22,34 16,28" fill="#0284C7" />
          <polygon points="12,16 22,6 6,22 16,32" fill="#0EA5E9" />
        </svg>
      )
    },
    {
      name: 'PHP Development',
      link: '/services/php-development',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <ellipse cx="20" cy="20" rx="17" ry="11" fill="#4F46E5" />
          <text x="8" y="24" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif">php</text>
        </svg>
      )
    },
    {
      name: 'Hire Dedicated Developers',
      link: '/hire-developers',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <circle cx="16" cy="14" r="5" fill="#FCA5A5" />
          <path d="M8 28 C8 22 12 21 16 21 C20 21 24 22 24 28 Z" fill="#38BDF8" />
          <rect x="22" y="15" width="14" height="14" rx="2" fill="#0284C7" />
          <rect x="24" y="17" width="10" height="8" rx="1" fill="#E0F2FE" />
          <text x="25" y="23" fill="#EF4444" fontSize="6" fontWeight="900">&lt;/&gt;</text>
        </svg>
      )
    },
    {
      name: 'Mern Stack Development',
      link: '/services/mern-stack-development',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <circle cx="20" cy="20" r="14" fill="#0284C7" />
          <circle cx="20" cy="20" r="7" fill="#FFFFFF" />
          <path d="M20 6 V13 M20 27 V34 M6 20 H13 M27 20 H34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <text x="14" y="23" fill="#0284C7" fontSize="8" fontWeight="900">M</text>
        </svg>
      )
    },
    {
      name: 'Full Stack Development',
      link: '/services/full-stack-development',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <rect x="6" y="8" width="28" height="20" rx="3" fill="#1E293B" />
          <rect x="9" y="11" width="22" height="14" rx="1" fill="#0F172A" />
          <path d="M12 15 L15 18 L12 21" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" fill="none" />
          <line x1="18" y1="21" x2="24" y2="21" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 30 H36 V32 C36 33 35 34 34 34 H6 Z" fill="#94A3B8" />
        </svg>
      )
    },
    {
      name: 'Laravel Development',
      link: '/services/laravel-development',
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
          <path d="M12 8 L28 14 L20 20 L4 14 Z" fill="#FF2D20" />
          <path d="M20 20 L28 14 V26 L20 32 Z" fill="#E60000" />
          <path d="M4 14 L20 20 V32 L4 26 Z" fill="#CC0000" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-[#005F96] text-white font-sans text-left">
      <Container className="max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-[900] text-white tracking-tight">
            Our Premium Services
          </h2>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
            As a certified IT company, Sapphire helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!
          </p>
        </div>

        {/* 10 White Pill Cards Grid (5 cols x 2 rows with Smooth Gentle Wiggle Icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {services.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="p-4 rounded-xl bg-white text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-center space-x-3.5 h-[84px] text-left border border-white/20 group cursor-pointer"
            >
              {/* Smooth Gentle Wiggle / Vibration Icon Wrapper */}
              <div
                className="animate-phone-vibrate shrink-0 transition-transform duration-300 group-hover:scale-125"
                style={{ animationDelay: `${(idx * 0.2).toFixed(2)}s` }}
              >
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-[800] text-slate-900 leading-snug group-hover:text-[#005F96] transition-colors">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PremiumServicesGrid;
