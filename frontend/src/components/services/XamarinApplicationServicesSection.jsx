import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const servicesData = [
  {
    id: 1,
    title: 'Xamarin Consulting',
    desc: 'Our consulting helps you select right development framework and strategy to launch a perfect Xamarin app with the right list of features.',
    iconBg: 'bg-[#F4ECFF]',
    iconColor: '#9333EA',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#9333EA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Person Head & Shoulders */}
        <circle cx="18" cy="18" r="6" />
        <path d="M8 38 C8 30, 12 28, 18 28 C21 28, 24 29, 26 31" />
        {/* Gear */}
        <circle cx="35" cy="16" r="4" />
        <path d="M35 8 v2 M35 22 v2 M27 16 h2 M41 16 h2 M30 11 l1.5 1.5 M38.5 19.5 l1.5 1.5 M30 21 l1.5 -1.5 M38.5 12.5 l1.5 -1.5" />
        {/* Wrench */}
        <path d="M33 38 L42 29 C43 28, 43 26, 42 25 L40 23 C39 22, 37 22, 36 23 L27 32 C26 33, 26 35, 27 36 L29 38 C30 39, 32 39, 33 38 Z" fill="#9333EA" fillOpacity="0.1" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Custom Xamarin App',
    desc: 'Our expert developer builds custom Xamarin apps custom-made to meet your business requirements.',
    iconBg: 'bg-[#E8F8EE]',
    iconColor: '#16A34A',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Mobile Phone Frame */}
        <rect x="10" y="8" width="22" height="34" rx="4" />
        <line x1="18" y1="13" x2="24" y2="13" />
        {/* Layout wireframe cards */}
        <rect x="14" y="18" width="6" height="6" rx="1" fill="#16A34A" fillOpacity="0.2" />
        <line x1="23" y1="19" x2="28" y2="19" />
        <line x1="23" y1="23" x2="27" y2="23" />
        <line x1="14" y1="29" x2="28" y2="29" />
        <line x1="14" y1="34" x2="24" y2="34" />
        {/* User avatar badge right */}
        <circle cx="36" cy="22" r="7" fill="#E8F8EE" />
        <circle cx="36" cy="20" r="2.5" />
        <path d="M32 27 C32 25, 34 24, 36 24 C38 24, 40 25, 40 27" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Xamarin Enterprise App App Development',
    desc: 'Our end-to-end enterprise mobility solution with secure enterprise data integration with Xamarin.',
    iconBg: 'bg-[#FFF0E6]',
    iconColor: '#EA580C',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Enterprise Worker / Head */}
        <circle cx="18" cy="18" r="6" />
        {/* Helmet / Glasses */}
        <path d="M11 16 C11 12, 14 10, 18 10 C22 10, 25 12, 25 16 Z" fill="#EA580C" fillOpacity="0.2" />
        <path d="M8 38 C8 30, 12 28, 18 28 C21 28, 24 29, 26 31" />
        {/* Enterprise Cog & Wrench */}
        <circle cx="36" cy="24" r="5" />
        <path d="M36 16 v2 M36 30 v2 M28 24 h2 M44 24 h2" />
        <path d="M31 19 l1.5 1.5 M39.5 27.5 l1.5 1.5 M31 29 l1.5 -1.5 M39.5 20.5 l1.5 -1.5" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Xamarin MVP Development',
    desc: 'Build your Cost-effective MVP and prototype solution to quickly launch your app on both Android and iOS.',
    iconBg: 'bg-[#FEF7E6]',
    iconColor: '#D97706',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Smartphone Frame */}
        <rect x="13" y="6" width="22" height="36" rx="4" />
        <line x1="21" y1="10" x2="27" y2="10" />
        {/* Apple Icon hint top */}
        <circle cx="24" cy="18" r="2.5" fill="#D97706" />
        <path d="M24 14.5 Q25.5 13 26 14.5" strokeWidth="1.5" />
        {/* Android Bot Icon hint bottom */}
        <path d="M21 27 A3 3 0 0 1 27 27" fill="#D97706" fillOpacity="0.2" />
        <circle cx="22.5" cy="26" r="0.5" fill="#D97706" />
        <circle cx="25.5" cy="26" r="0.5" fill="#D97706" />
        <rect x="21" y="28" width="6" height="5" rx="1" />
        {/* Bottom home indicator */}
        <circle cx="24" cy="38" r="1.5" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Migration & Upgrade',
    desc: 'Our team help in migration of your legacy application to Xamarin platform for high speed, performance as well as security.',
    iconBg: 'bg-[#FDF0F6]',
    iconColor: '#DB2777',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#DB2777" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Smartphone Frame */}
        <rect x="13" y="6" width="22" height="36" rx="4" />
        <line x1="21" y1="10" x2="27" y2="10" />
        {/* Upward Migration Arrow */}
        <line x1="24" y1="31" x2="24" y2="16" strokeWidth="2.5" />
        <polyline points="19,21 24,16 29,21" strokeWidth="2.5" />
        <path d="M19 31 C19 34, 29 34, 29 31" fill="#DB2777" fillOpacity="0.2" />
        {/* Home dot */}
        <circle cx="24" cy="38" r="1" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Xamarin App Maintenance',
    desc: 'Our Support & maintenance service ensure constant check on your apps for performance, security, and downtime after deployment.',
    iconBg: 'bg-[#E4F8FD]',
    iconColor: '#0284C7',
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Smartphone Frame */}
        <rect x="13" y="6" width="22" height="36" rx="4" />
        <line x1="21" y1="10" x2="27" y2="10" />
        {/* Gear & Wrench Tools Inside Screen */}
        <circle cx="21" cy="22" r="3.5" />
        <path d="M21 16.5 v1.5 M21 26 v1.5 M15.5 22 h1.5 M25 22 h1.5" />
        <path d="M25 26 L30 31 C31 32, 32.5 32, 33 31.5 L34 30.5 C34.5 30, 34.5 28.5, 33.5 27.5 L28.5 22.5" />
        {/* Home dot */}
        <circle cx="24" cy="38" r="1" />
      </svg>
    )
  }
];

export const XamarinApplicationServicesSection = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FBFDFF] text-slate-900 font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Xamarin Application Development Services
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            Xamarin application development services to build cross-platform mobile apps for native user experience.
          </p>
        </div>

        {/* 6 Interactive Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[12px] p-7 sm:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,95,150,0.12)] hover:bg-[#DDF4FF] transition-all duration-300 relative overflow-hidden group cursor-pointer flex flex-col justify-start hover:-translate-y-1"
            >
              {/* Top Border Accent Line that reveals on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-transparent group-hover:bg-[#005F96] transition-colors duration-300" />

              {/* Icon Container with subtle pop on hover */}
              <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-[10px] ${item.iconBg} flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-[17px] sm:text-[18.5px] font-[800] text-[#0B0F19] group-hover:text-[#005F96] transition-colors duration-300 mb-3 tracking-tight leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[13.5px] sm:text-[14px] text-[#475569] group-hover:text-slate-700 leading-[1.65] font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-12 sm:mt-14">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-[15px] rounded-[5px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Connect Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default XamarinApplicationServicesSection;
