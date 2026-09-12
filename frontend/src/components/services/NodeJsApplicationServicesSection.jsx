import React from 'react';
import Container from '../common/Container';

const servicesData = [
  {
    id: 1,
    title: 'Node.js Web Development',
    desc: 'Our Node.js development team builds scalable, secure and high-speed web applications for various businesses across the globe.',
    iconBg: 'bg-[#F3E8FF]',
    iconColor: '#9333EA',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#9333EA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="32" height="24" rx="3" />
        <line x1="20" y1="32" x2="16" y2="40" />
        <line x1="28" y1="32" x2="32" y2="40" />
        <line x1="14" y1="40" x2="34" y2="40" />
        <circle cx="15" cy="15" r="1.5" fill="#9333EA" />
        <circle cx="24" cy="15" r="1.5" fill="#9333EA" />
        <circle cx="33" cy="15" r="1.5" fill="#9333EA" />
        <circle cx="15" cy="23" r="1.5" fill="#9333EA" />
        <circle cx="24" cy="23" r="1.5" fill="#9333EA" />
        <circle cx="33" cy="23" r="1.5" fill="#9333EA" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Node.js API & Microservices',
    desc: 'Our development team provides robust, scalable & secure RESTful and GraphQL APIs using asynchronous event-driven architectures.',
    iconBg: 'bg-[#DCFCE7]',
    iconColor: '#16A34A',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="8" width="24" height="32" rx="3" />
        <circle cx="24" cy="34" r="1.5" fill="#16A34A" />
        <circle cx="24" cy="20" r="5" />
        <path d="M24 12 v2 M24 26 v2 M16 20 h2 M30 20 h2" />
        <path d="M18.5 14.5 l1.5 1.5 M28 24 l1.5 1.5 M18.5 25.5 l1.5 -1.5 M28 16 l1.5 -1.5" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Enterprise Node.js Solutions',
    desc: 'Our programmers develop enterprise-centric Node.js backend systems with NestJS, TypeScript, and high-concurrency event loops.',
    iconBg: 'bg-[#FFE4E6]',
    iconColor: '#E11D48',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#E11D48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="28" height="9" rx="2" />
        <circle cx="16" cy="12.5" r="1.5" fill="#E11D48" />
        <line x1="22" y1="12.5" x2="32" y2="12.5" />
        
        <rect x="10" y="20" width="28" height="9" rx="2" />
        <circle cx="16" cy="24.5" r="1.5" fill="#E11D48" />
        <line x1="22" y1="24.5" x2="32" y2="24.5" />

        <rect x="10" y="32" width="28" height="9" rx="2" />
        <circle cx="16" cy="36.5" r="1.5" fill="#E11D48" />
        <line x1="22" y1="36.5" x2="32" y2="36.5" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Real-Time Streaming & IoT',
    desc: 'We build ultra-fast WebSocket, Socket.io, and WebRTC applications for live messaging, data feeds, and IoT devices.',
    iconBg: 'bg-[#FEF3C7]',
    iconColor: '#D97706',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="6" />
        <circle cx="24" cy="24" r="2.5" fill="#D97706" />
        
        <circle cx="10" cy="14" r="3" />
        <line x1="12.5" y1="16" x2="19" y2="20.5" />

        <circle cx="38" cy="14" r="3" />
        <line x1="35.5" y1="16" x2="29" y2="20.5" />

        <circle cx="10" cy="34" r="3" />
        <line x1="12.5" y1="32" x2="19" y2="27.5" />

        <circle cx="38" cy="34" r="3" />
        <line x1="35.5" y1="32" x2="29" y2="27.5" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Full-Stack JavaScript Development',
    desc: 'Seamless full-stack synergy connecting Node.js/Express backends with React, Next.js, Vue, and Angular frontends.',
    iconBg: 'bg-[#FCE7F3]',
    iconColor: '#DB2777',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#DB2777" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="28" height="32" rx="3" />
        <line x1="10" y1="16" x2="38" y2="16" />
        <line x1="14" y1="12" x2="18" y2="12" />
        
        <rect x="15" y="21" width="7" height="6" rx="1" fill="#DB2777" fillOpacity="0.2" />
        <rect x="26" y="21" width="7" height="6" rx="1" fill="#DB2777" fillOpacity="0.2" />
        <line x1="15" y1="32" x2="33" y2="32" />
        <line x1="15" y1="35" x2="27" y2="35" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Serverless Node.js & Cloud',
    desc: 'We architect lightning-fast serverless microservices on AWS Lambda, Google Cloud Functions, and Azure Serverless.',
    iconBg: 'bg-[#E0F2FE]',
    iconColor: '#0284C7',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="18" r="5" />
        <path d="M12 36 C12 29, 15 27, 20 27 C23 27, 26 28, 27.5 30" />
        <circle cx="34" cy="18" r="3.5" />
        <path d="M34 12 v1.5 M34 22.5 v1.5 M28 18 h1.5 M38.5 18 h1.5" />
        <path d="M31 34 L38 27 M37 26 L40 29 M31 34 L29 36" strokeWidth="2.2" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Node.js Migration & Upgrade',
    desc: 'Our team has great expertise in migrating legacy monolithic backends to high-performance modern Node.js 20+ LTS.',
    iconBg: 'bg-[#CCFBF1]',
    iconColor: '#0D9488',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="10" width="32" height="24" rx="3" />
        <line x1="18" y1="34" x2="14" y2="40" />
        <line x1="30" y1="34" x2="34" y2="40" />
        <line x1="12" y1="40" x2="36" y2="40" />
        <path d="M24 16 A 6 6 0 1 1 18 22" />
        <polyline points="18,17 18,22 23,22" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'Maintenance & 24/7 SLA Support',
    desc: 'Complete support and maintenance services to ensure zero downtime, security patching, and optimal server memory profiling.',
    iconBg: 'bg-[#FFEDD5]',
    iconColor: '#EA580C',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8 L28 8 L36 16 L36 40 L12 40 Z" />
        <polyline points="28,8 28,16 36,16" />
        <circle cx="24" cy="28" r="4" />
        <path d="M24 21 v2 M24 33 v2 M17 28 h2 M29 28 h2" />
        <line x1="16" y1="16" x2="24" y2="16" />
      </svg>
    )
  },
  {
    id: 9,
    title: 'Dedicated Node.js Developer Team',
    desc: 'Expand your development capabilities with our highly experienced in-house senior Node.js & TypeScript engineers.',
    iconBg: 'bg-[#E0E7FF]',
    iconColor: '#4F46E5',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="5" />
        <path d="M14 32 C14 26, 18 24, 24 24 C30 24, 34 26, 34 32" />
        <rect x="10" y="32" width="28" height="8" rx="2" />
        <circle cx="16" cy="36" r="1.5" fill="#4F46E5" />
        <line x1="22" y1="36" x2="32" y2="36" />
      </svg>
    )
  }
];

export const NodeJsApplicationServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FBFDFF] text-slate-900 font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Header (Exact 1:1 Match) */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Node.js Development Services
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We provide wide range of Node.js technology services for distributed business infrastructure and extended capability to meet your technological needs.
          </p>
        </div>

        {/* 9 Interactive Cards Grid (3 Columns x 3 Rows with Hover Fill & Animated Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1280px] mx-auto items-stretch">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-[12px] p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,95,150,0.14)] transition-all duration-500 ease-out overflow-hidden group cursor-pointer flex flex-col justify-start hover:-translate-y-1.5 select-none"
            >
              {/* Smooth Hover Gradient Fill Layer */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E2F4FD] via-[#D2F0FD] to-[#BCE9FC] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

              {/* Top Animated Gradient Accent Border (Deep Blue -> Cyan) */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#004A75] via-[#0070B3] to-[#38BDF8] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-out" />

              {/* Bottom Animated Gradient Accent Border (Cyan -> Deep Blue) */}
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0070B3] to-[#004A75] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-right transition-all duration-500 ease-out" />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-[10px] ${item.iconBg} flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-2xs`}>
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-[17px] sm:text-[18.5px] font-[800] text-[#0B0F19] transition-colors duration-300 mb-2.5 tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[13px] sm:text-[14px] text-[#475569] group-hover:text-slate-700 leading-[1.65] font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NodeJsApplicationServicesSection;
