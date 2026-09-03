import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';

const defaultPremiumServices = [
  {
    name: 'Mobile App Development',
    link: '/services/mobile-app-development',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="5" width="24" height="38" rx="5" fill="#5B21B6" />
        <rect x="14" y="7" width="20" height="34" rx="4" fill="#7C3AED" />
        <rect x="16" y="10" width="16" height="24" rx="2" fill="#FFFFFF" />
        <rect x="18" y="12" width="5" height="5" rx="1.5" fill="#EC4899" />
        <rect x="25" y="12" width="5" height="5" rx="1.5" fill="#3B82F6" />
        <rect x="18" y="19" width="5" height="5" rx="1.5" fill="#10B981" />
        <rect x="25" y="19" width="5" height="5" rx="1.5" fill="#F59E0B" />
        <rect x="18" y="26" width="12" height="4" rx="1" fill="#7C3AED" opacity="0.9" />
        <circle cx="24" cy="37" r="1.5" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: 'Software Development',
    link: '/services/software-development',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="32" width="36" height="4" rx="1" fill="#334155" />
        <path d="M18 36H30" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        <rect x="9" y="10" width="30" height="22" rx="3" fill="#475569" stroke="#334155" strokeWidth="2" />
        <rect x="11" y="12" width="26" height="18" rx="1" fill="#FFFFFF" />
        <circle cx="20" cy="21" r="5.5" fill="#10B981" />
        <path d="M20 13.5V15.5M20 26.5V28.5M12.5 21H14.5M25.5 21H27.5M14.7 15.7L16.1 17.1M23.9 24.9L25.3 26.3M14.7 26.3L16.1 24.9M23.9 15.7L25.3 17.1" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="21" r="2" fill="#FFFFFF" />
        <circle cx="28" cy="18" r="3.5" fill="#EF4444" />
        <circle cx="28" cy="18" r="1.2" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: 'Web Development',
    link: '/services/web-development',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="32" rx="4" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M6 12C6 9.79086 7.79086 8 10 8H38C40.2091 8 42 9.79086 42 12V16H6V12Z" fill="#38BDF8" />
        <circle cx="11" cy="12" r="1.5" fill="#EF4444" />
        <circle cx="15" cy="12" r="1.5" fill="#F59E0B" />
        <circle cx="19" cy="12" r="1.5" fill="#10B981" />
        <rect x="23" y="10" width="15" height="4" rx="2" fill="#FFFFFF" opacity="0.7" />
        <text x="24" y="32" textAnchor="middle" fill="#0284C7" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">WWW</text>
      </svg>
    )
  },
  {
    name: '.NET Development',
    link: '/services/dot-net-development',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 25C9 15, 17 9, 24 19C31 29, 39 23, 41 13" stroke="#0284C7" strokeWidth="5" strokeLinecap="round" fill="none" />
        <text x="24" y="38" textAnchor="middle" fill="#0284C7" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">.NET</text>
      </svg>
    )
  },
  {
    name: 'Flutter App Development',
    link: '/services/flutter-app-development',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 6L39 19L29 29L16 16L26 6Z" fill="#42A5F5" />
        <path d="M29 29L39 39L27 39L20 32L29 29Z" fill="#01579B" />
        <path d="M20 32L27 39L17 39L10 32L20 32Z" fill="#29B6F6" />
      </svg>
    )
  },
  {
    name: 'PHP Development',
    link: '/services/php-development',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="24" rx="20" ry="13" fill="#777BB4" />
        <ellipse cx="24" cy="24" rx="18.5" ry="11.5" fill="#4F5B93" />
        <text x="24" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">php</text>
      </svg>
    )
  },
  {
    name: 'Hire Dedicated Developers',
    link: '/hire-developers',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="12" width="20" height="16" rx="2" fill="#1E293B" />
        <rect x="24" y="14" width="16" height="12" rx="1" fill="#0284C7" opacity="0.35" />
        <text x="32" y="22" textAnchor="middle" fill="#38BDF8" fontSize="7" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
        <rect x="28" y="28" width="8" height="3" fill="#475569" />
        <circle cx="15" cy="18" r="6" fill="#FDBA74" />
        <path d="M9 17C9 13.6863 11.6863 11 15 11C18.3137 11 21 13.6863 21 17" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="8" y="16" width="3" height="5" rx="1" fill="#0284C7" />
        <path d="M5 36C5 30.4772 9.4772 26 15 26C20.5228 26 25 30.4772 25 36V38H5V36Z" fill="#0284C7" />
        <path d="M12 26L15 30L18 26" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'Mern Stack Development',
    link: '/services/mern-stack-development',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L40 15V33L24 42L8 33V15L24 6Z" fill="#F3E8FF" stroke="#8B5CF6" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="6" fill="#7C3AED" />
        <circle cx="24" cy="12" r="3" fill="#61DAFB" />
        <circle cx="34" cy="30" r="3" fill="#68A063" />
        <circle cx="14" cy="30" r="3" fill="#F59E0B" />
        <path d="M24 18V15M20 27.5L16.5 29.5M28 27.5L31.5 29.5" stroke="#7C3AED" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: 'Full Stack Development',
    link: '/services/full-stack-development',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="24" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="2" />
        <rect x="8" y="12" width="32" height="20" rx="1" fill="#1E293B" />
        <text x="24" y="25" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="900" fontFamily="monospace">&lt;/&gt;</text>
        <path d="M4 34L44 34L40 38L8 38Z" fill="#475569" />
        <rect x="18" y="34" width="12" height="2" fill="#94A3B8" />
      </svg>
    )
  },
  {
    name: 'Laravel Development',
    link: '/services/laravel-development',
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L40 15V33L24 42L8 33V15L24 6Z" fill="#FF2D20" opacity="0.1" />
        <path d="M24 6L40 15L24 24L8 15L24 6Z" fill="#FF2D20" />
        <path d="M8 15L24 24V42L8 33V15Z" fill="#E62217" />
        <path d="M40 15V33L24 42V24L40 15Z" fill="#C51910" />
        <path d="M24 24L32 19.5" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
      </svg>
    )
  }
];

export const PremiumServicesGrid = ({ data, title, subtitle, companyName = "Firevy" }) => {
  const displayTitle = data?.title || title || 'Our Premium Services';
  const displayDescription = data?.description || subtitle || `As a certified IT company, ${companyName} helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks.`;

  const services = (data?.services && Array.isArray(data.services) && data.services.filter(s => s.isActive !== false).length > 0)
    ? data.services.filter(s => s.isActive !== false)
    : defaultPremiumServices;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0b5072] text-white relative font-sans overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] tracking-tight text-white mb-3 font-sans section-content-title">
            {displayTitle}
          </h2>
          <p className="text-base sm:text-[17.5px] font-[400] text-white/90 leading-relaxed font-sans max-w-4xl mx-auto section-content-desc">
            {displayDescription}
          </p>
        </motion.div>

        {/* 10 White Pill Button Cards (5 Columns x 2 Rows Layout on Desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto"
        >
          {services.map((item, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Link
                to={item.link || item.slug || '/services'}
                className="bg-white rounded-[16px] px-4.5 py-3.5 text-slate-900 shadow-md hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 flex items-center space-x-3.5 text-left h-[80px] border border-slate-100/80 hover:border-cyan-300 group cursor-pointer relative overflow-hidden block text-decoration-none"
              >
                {/* Subtle Hover Sheen Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Vector Icon */}
                <div className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
                  ) : (
                    item.icon || defaultPremiumServices[idx % defaultPremiumServices.length]?.icon || <span className="text-2xl">⚙️</span>
                  )}
                </div>

                {/* Service Title */}
                <span className="text-[13px] sm:text-[14px] font-[800] text-slate-900 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                  {item.name || item.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default PremiumServicesGrid;
