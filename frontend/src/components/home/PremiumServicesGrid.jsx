import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';

const defaultPremiumServices = [
  {
    name: 'Mobile App Development',
    link: '/services/mobile-app-development',
    image: '/images/ourpremiumservice/ic_mobile.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="3" width="22" height="34" rx="4" fill="#3B82F6" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="11.5" y="6" width="17" height="26" rx="2" fill="#FFFFFF" />
        <rect x="13.5" y="8.5" width="13" height="4.5" rx="1.5" fill="#6366F1" />
        <rect x="13.5" y="14.5" width="13" height="4.5" rx="1.5" fill="#EC4899" />
        <rect x="13.5" y="20.5" width="13" height="4.5" rx="1.5" fill="#10B981" />
        <rect x="13.5" y="26.5" width="13" height="3" rx="1" fill="#F59E0B" />
        <circle cx="20" cy="34" r="1.2" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: 'Software Development',
    link: '/services/software-development',
    image: '/images/ourpremiumservice/ic_software.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="28" height="19" rx="2" fill="#334155" stroke="#1E293B" strokeWidth="1.2" />
        <rect x="8" y="10" width="24" height="15" rx="1" fill="#F8FAFC" />
        <circle cx="16" cy="17.5" r="4.5" fill="#10B981" />
        <path d="M16 11.5V13.5M16 21.5V23.5M10 17.5H12M20 17.5H22M11.8 13.3L13.2 14.7M18.8 20.3L20.2 21.7M11.8 21.7L13.2 20.3M18.8 14.7L20.2 13.3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="17.5" r="1.8" fill="#F8FAFC" />
        <circle cx="23" cy="15" r="3.2" fill="#F97316" />
        <path d="M23 10.8V12M23 18V19.2M18.8 15H20M26 15H27.2" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="23" cy="15" r="1.2" fill="#F8FAFC" />
        <path d="M4 27.5C4 26.9 4.5 26.5 5.1 26.5H34.9C35.5 26.5 36 26.9 36 27.5L37.5 30.5C37.5 31.3 36.8 32 36 32H4C3.2 32 2.5 31.3 2.5 30.5L4 27.5Z" fill="#64748B" />
        <rect x="16" y="27" width="8" height="1.5" rx="0.75" fill="#94A3B8" />
      </svg>
    )
  },
  {
    name: 'Web Development',
    link: '/services/web-development',
    image: '/images/ourpremiumservice/ic_web.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="32" height="28" rx="3.5" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.2" />
        <path d="M4 9.5C4 7.567 5.567 6 7.5 6H32.5C34.433 6 36 7.567 36 9.5V13H4V9.5Z" fill="#38BDF8" />
        <circle cx="8" cy="9.5" r="1.2" fill="#EF4444" />
        <circle cx="11.5" cy="9.5" r="1.2" fill="#F59E0B" />
        <circle cx="15" cy="9.5" r="1.2" fill="#10B981" />
        <rect x="18.5" y="8" width="13.5" height="3" rx="1.5" fill="#FFFFFF" opacity="0.85" />
        <text x="20" y="27" textAnchor="middle" fill="#0284C7" fontSize="12" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">WWW</text>
      </svg>
    )
  },
  {
    name: '.NET Development',
    link: '/services/dot-net-development',
    image: '/images/ourpremiumservice/ic_net.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 22C8 13, 14 8, 20 17C26 26, 32 21, 34 12" stroke="#0078D7" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="20" y="32" textAnchor="middle" fill="#0078D7" fontSize="11.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">.NET</text>
      </svg>
    )
  },
  {
    name: 'Flutter App Development',
    link: '/services/flutter-app-development',
    image: '/images/ourpremiumservice/ic_flutter.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 5L33 16L24.5 24.5L13.5 13.5L22 5Z" fill="#40D0FD" />
        <path d="M24.5 24.5L33 33L23 33L17 27L24.5 24.5Z" fill="#02569B" />
        <path d="M17 27L23 33L14.5 33L8.5 27L17 27Z" fill="#29B6F6" />
      </svg>
    )
  },
  {
    name: 'PHP Development',
    link: '/services/php-development',
    image: '/images/ourpremiumservice/ic_php.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="20" cy="20" rx="17" ry="11" fill="#777BB4" />
        <ellipse cx="20" cy="20" rx="15.5" ry="9.5" fill="#4F5B93" />
        <text x="20" y="24.5" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">php</text>
      </svg>
    )
  },
  {
    name: 'Hire Dedicated Developers',
    link: '/hire-developers',
    image: '/images/ourpremiumservice/ic_hirededicated.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="10" width="18" height="14" rx="2" fill="#1E293B" />
        <rect x="20" y="12" width="14" height="10" rx="1" fill="#0284C7" opacity="0.3" />
        <text x="27" y="19.5" textAnchor="middle" fill="#38BDF8" fontSize="7" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
        <rect x="25" y="24" width="4" height="3" fill="#475569" />
        <path d="M22 27H32" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="14" r="5" fill="#FDBA74" />
        <path d="M7 13.5C7 10.5 9.2 8 12 8C14.8 8 17 10.5 17 13.5" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 14C6.5 14 6 14.5 6 15V16C6 16.5 6.5 17 7 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 29C4 24.5 7.5 21 12 21C16.5 21 20 24.5 20 29V30H4V29Z" fill="#06B6D4" />
        <path d="M9.5 21L12 24.5L14.5 21" stroke="#FFFFFF" strokeWidth="1.2" />
      </svg>
    )
  },
  {
    name: 'Mern Stack Development',
    link: '/services/mern-stack-development',
    image: '/images/ourpremiumservice/ic_mern.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="24" r="6" fill="#6366F1" />
        <circle cx="15" cy="24" r="2.5" fill="#FFFFFF" />
        <path d="M15 16V18M15 30V32M7 24H9M21 24H23M9.3 18.3L10.7 19.7M19.3 28.3L20.7 29.7M9.3 29.7L10.7 28.3M19.3 19.7L20.7 18.3" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="27" cy="12" r="3" fill="#06B6D4" />
        <circle cx="33" cy="18" r="2.5" fill="#06B6D4" />
        <circle cx="24" cy="19" r="2" fill="#06B6D4" />
        <circle cx="32" cy="25" r="2.2" fill="#06B6D4" />
        <path d="M19 20L25 14M27 15L31 17M20 23L23 20M26 20L30 24" stroke="#06B6D4" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
      </svg>
    )
  },
  {
    name: 'Full Stack Development',
    link: '/services/full-stack-development',
    image: '/images/ourpremiumservice/ic_fullstack.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="28" height="19" rx="2" fill="#0F172A" stroke="#1E293B" strokeWidth="1.2" />
        <rect x="8" y="10" width="24" height="15" rx="1" fill="#1E293B" />
        <path d="M11 14H18" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 17.5H23" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 21H16" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <text x="25" y="19" fill="#EC4899" fontSize="8" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
        <path d="M4 27.5C4 26.9 4.5 26.5 5.1 26.5H34.9C35.5 26.5 36 26.9 36 27.5L37.5 30.5C37.5 31.3 36.8 32 36 32H4C3.2 32 2.5 31.3 2.5 30.5L4 27.5Z" fill="#64748B" />
        <rect x="16" y="27" width="8" height="1.5" rx="0.75" fill="#94A3B8" />
      </svg>
    )
  },
  {
    name: 'Laravel Development',
    link: '/services/laravel-development',
    image: '/images/ourpremiumservice/ic_laravel.svg',
    icon: (
      <svg className="w-full h-full object-contain" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z" fill="#FF2D20" fillOpacity="0.08" stroke="#FF2D20" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 5V35" stroke="#FF2D20" strokeWidth="1.8" />
        <path d="M20 20L33 12.5" stroke="#FF2D20" strokeWidth="1.8" />
        <path d="M20 20L7 12.5" stroke="#FF2D20" strokeWidth="1.8" />
        <path d="M26.5 8.75L26.5 23.75" stroke="#FF2D20" strokeWidth="1.4" strokeOpacity="0.6" />
      </svg>
    )
  }
];

export const PremiumServicesGrid = ({ data, title, subtitle, companyName = "Sapphire" }) => {
  const displayTitle = data?.title || title || 'Our Premium Services';
  const rawDesc = data?.description || subtitle || `As a certified IT company, ${companyName} helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks.`;
  const displayDescription = rawDesc.includes('Contact us') ? rawDesc : `${rawDesc} Contact us to learn more!`;

  const services = (data?.services && Array.isArray(data.services) && data.services.filter(s => s.isActive !== false).length > 0)
    ? data.services.filter(s => s.isActive !== false)
    : defaultPremiumServices;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-[#005F96] text-white relative font-sans overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] tracking-tight text-white mb-2.5 font-sans section-content-title">
            {displayTitle}
          </h2>
          <p className="text-[13.5px] sm:text-[15px] font-[400] text-white/95 leading-relaxed font-sans max-w-3xl mx-auto section-content-desc">
            {displayDescription}
          </p>
        </motion.div>

        {/* 10 White Cards (5 Columns x 2 Rows Layout on Desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-[1240px] mx-auto"
        >
          {services.map((item, idx) => {
            const fallbackItem = defaultPremiumServices[idx % defaultPremiumServices.length];
            const imageSrc = item.image || fallbackItem?.image;
            const iconSvg = item.icon || fallbackItem?.icon;

            return (
              <motion.div key={idx} variants={cardVariants}>
                <Link
                  to={item.link || item.slug || '/services'}
                  className="bg-white rounded-[15px] p-[15px] text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between min-h-[66px] h-[68px] sm:h-[72px] group cursor-pointer relative overflow-hidden block text-decoration-none"
                >
                  {/* Icon Container with Exact Sapphire HiThere Animation */}
                  <div className="w-[45px] h-[45px] shrink-0 p-1 flex items-center justify-center overflow-hidden">
                    {imageSrc ? (
                      <img 
                        src={imageSrc} 
                        alt={item.name} 
                        className="w-full h-full object-contain sapphire-service-icon"
                        style={{
                          animation: `sapphireHiThere 1.5s ease infinite`,
                          animationDelay: `${(idx % 5) * 0.25}s`
                        }}
                      />
                    ) : (
                      <div
                        className="w-full h-full sapphire-service-icon"
                        style={{
                          animation: `sapphireHiThere 1.5s ease infinite`,
                          animationDelay: `${(idx % 5) * 0.25}s`
                        }}
                      >
                        {iconSvg}
                      </div>
                    )}
                  </div>

                  {/* Service Title */}
                  <span className="w-[calc(100%-55px)] text-[13px] sm:text-[13.5px] font-[700] text-[#333333] font-sans leading-[1.25] tracking-tight group-hover:text-[#005F96] transition-colors text-left pl-1">
                    {item.name || item.title}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Exact Sapphire Solutions 'hithere' Keyframe Animation */}
        <style>{`
          @keyframes sapphireHiThere {
            30% {
              transform: scale(1.2);
            }
            40%, 60% {
              transform: rotate(-20deg) scale(1.2);
            }
            50% {
              transform: rotate(20deg) scale(1.2);
            }
            70% {
              transform: rotate(0deg) scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        `}</style>
      </Container>
    </section>
  );
};

export default PremiumServicesGrid;
