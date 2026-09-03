import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';

<<<<<<< HEAD
const defaultPremiumServices = [
  {
    name: 'Mobile App Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#7C3AED]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="20" height="28" rx="4" fill="#F3E8FF" />
        <rect x="12" y="8" width="12" height="16" rx="1" fill="white" />
        <circle cx="18" cy="28" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Software Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#EA580C]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="26" height="16" rx="2" fill="#FFEDD5" />
        <path d="M2 28h32" strokeWidth="2.5" />
        <circle cx="23" cy="16" r="4" fill="#EA580C" />
      </svg>
    )
  },
  {
    name: 'Web Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#0284C7]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="28" height="24" rx="3" fill="#E0F2FE" />
        <line x1="4" y1="13" x2="32" y2="13" />
        <circle cx="8" cy="9.5" r="1" fill="currentColor" />
        <circle cx="12" cy="9.5" r="1" fill="currentColor" />
        <text x="18" y="23" textAnchor="middle" fontSize="8" fontWeight="800" fill="currentColor" stroke="none">WWW</text>
      </svg>
    )
  },
  {
    name: '.NET Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#0284C7]" viewBox="0 0 36 36" fill="none">
        <path d="M6 18l6-10h6l-6 10 6 10h-6l-6-10z" fill="#0284C7" />
        <text x="24" y="22" textAnchor="middle" fontSize="10" fontWeight="900" fill="#0284C7">.NET</text>
      </svg>
    )
  },
  {
    name: 'Flutter App Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#02569B]" viewBox="0 0 36 36" fill="currentColor">
        <path d="M20 6L8 18l4 4 16-16H20z" fill="#42A5F5" />
        <path d="M20 18l-6 6 6 6h8l-6-6 6-6h-8z" fill="#01579B" />
      </svg>
    )
  },
  {
    name: 'PHP Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#777BB4]" viewBox="0 0 36 36" fill="none">
        <ellipse cx="18" cy="18" rx="14" ry="10" fill="#777BB4" />
        <text x="18" y="22" textAnchor="middle" fontSize="9" fontWeight="900" fill="white" fontFamily="sans-serif">php</text>
      </svg>
    )
  },
  {
    name: 'Java Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#EA2D2E]" viewBox="0 0 36 36" fill="currentColor">
        <path d="M14 26s-2 1 0 2c3 1 6 1 9 0 2-1 0-2 0-2-3 1-6 1-9 0zm-1-4s-2 1.5 0 2.5c4 1.5 8 1.5 12 0 2-1 0-2.5 0-2.5-4 1-8 1-12 0zm5-14c1 2-2 4-2 6 0 3 3 5 3 8-4-2-5-5-5-8 0-3 3-5 4-6z" />
      </svg>
    )
  },
  {
    name: 'Android App Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#3DDC84]" viewBox="0 0 36 36" fill="currentColor">
        <path d="M12 10l-2-3.5a1 1 0 0 1 1.7-1l2 3.5a11 11 0 0 1 8.6 0l2-3.5a1 1 0 0 1 1.7 1L24 10a11 11 0 0 1 5 9H7a11 11 0 0 1 5-9z" />
        <circle cx="13" cy="14" r="1.5" fill="white" />
        <circle cx="23" cy="14" r="1.5" fill="white" />
      </svg>
    )
  },
  {
    name: 'Full Stack Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#006B8F]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4l14 8-14 8-14-8 14-8z" fill="#E0F2FE" />
        <path d="M4 20l14 8 14-8" />
        <path d="M4 26l14 8 14-8" />
      </svg>
    )
  },
  {
    name: 'iPhone App Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-slate-800" viewBox="0 0 36 36" fill="currentColor">
        <path d="M22.5 18c0-3.3 2.7-5 2.8-5.1-1.5-2.2-4-2.5-4.8-2.5-2-.2-3.9 1.2-4.9 1.2-1 0-2.6-1.2-4.2-1.2-2.2 0-4.2 1.3-5.3 3.3-2.3 4-0.6 9.8 1.6 13 1.1 1.6 2.4 3.3 4.1 3.2 1.6-.1 2.3-1 4.2-1s2.6 1 4.2 1c1.8 0 2.9-1.5 4-3.1 1.3-1.8 1.8-3.6 1.8-3.7-.1 0-3.5-1.3-3.5-5.2zM19.7 8.5c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.8-3.7 1.9-.8.9-1.5 2.4-1.3 3.9 1.4.1 2.8-.7 3.7-1.7z" />
      </svg>
    )
  }
];

export const PremiumServicesGrid = ({ data }) => {
  const title = data?.title || 'Our Premium Services';
  const description = data?.description || 'As a certified IT company, firevy.co helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks.';

  const services = (data?.services && Array.isArray(data.services) && data.services.filter(s => s.isActive !== false).length > 0)
    ? data.services.filter(s => s.isActive !== false)
    : defaultPremiumServices;

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* 5x2 Grid of 10 Solid White Cards with Rounded Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-5 shadow-sm hover:shadow-lg border border-slate-200/80 hover:border-[#006B8F] flex flex-col items-center justify-center text-center space-y-3 h-36 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {service.image ? (
                  <img src={service.image} alt={service.name} className="w-9 h-9 object-contain" />
                ) : (
                  service.icon || defaultPremiumServices[idx % defaultPremiumServices.length]?.icon || <span className="text-3xl">⚙️</span>
                )}
              </div>
              <span className="text-[14px] font-[800] text-slate-900 leading-tight font-sans tracking-tight group-hover:text-[#006B8F] transition-colors">
                {service.name || service.title}
              </span>
            </div>
=======
export const PremiumServicesGrid = ({ title, subtitle, companyName = "Sapphire" }) => {
  const premiumServices = [
    {
      name: 'Mobile App Development',
      link: '/services/mobile-app-development',
      icon: (
        <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Smartphone outer body */}
          <rect x="12" y="5" width="24" height="38" rx="5" fill="#5B21B6" />
          <rect x="14" y="7" width="20" height="34" rx="4" fill="#7C3AED" />
          {/* Display screen */}
          <rect x="16" y="10" width="16" height="24" rx="2" fill="#FFFFFF" />
          {/* Colorful App Icons Grid */}
          <rect x="18" y="12" width="5" height="5" rx="1.5" fill="#EC4899" />
          <rect x="25" y="12" width="5" height="5" rx="1.5" fill="#3B82F6" />
          <rect x="18" y="19" width="5" height="5" rx="1.5" fill="#10B981" />
          <rect x="25" y="19" width="5" height="5" rx="1.5" fill="#F59E0B" />
          <rect x="18" y="26" width="12" height="4" rx="1" fill="#7C3AED" opacity="0.9" />
          {/* Home indicator */}
          <circle cx="24" cy="37" r="1.5" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'Software Development',
      link: '/services/software-development',
      icon: (
        <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Laptop Base */}
          <rect x="6" y="32" width="36" height="4" rx="1" fill="#334155" />
          <path d="M18 36H30" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          {/* Laptop Display Screen */}
          <rect x="9" y="10" width="30" height="22" rx="3" fill="#475569" stroke="#334155" strokeWidth="2" />
          <rect x="11" y="12" width="26" height="18" rx="1" fill="#FFFFFF" />
          {/* Green Setting Gear */}
          <circle cx="20" cy="21" r="5.5" fill="#10B981" />
          <path d="M20 13.5V15.5M20 26.5V28.5M12.5 21H14.5M25.5 21H27.5M14.7 15.7L16.1 17.1M23.9 24.9L25.3 26.3M14.7 26.3L16.1 24.9M23.9 15.7L25.3 17.1" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="20" cy="21" r="2" fill="#FFFFFF" />
          {/* Red Accent Gear */}
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
          {/* Browser Window Frame */}
          <rect x="6" y="8" width="36" height="32" rx="4" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Top Header Navigation Bar */}
          <path d="M6 12C6 9.79086 7.79086 8 10 8H38C40.2091 8 42 9.79086 42 12V16H6V12Z" fill="#38BDF8" />
          {/* Header Control Buttons */}
          <circle cx="11" cy="12" r="1.5" fill="#EF4444" />
          <circle cx="15" cy="12" r="1.5" fill="#F59E0B" />
          <circle cx="19" cy="12" r="1.5" fill="#10B981" />
          {/* Address URL Pill */}
          <rect x="23" y="10" width="15" height="4" rx="2" fill="#FFFFFF" opacity="0.7" />
          {/* Bold WWW Branding Text */}
          <text x="24" y="32" textAnchor="middle" fill="#0284C7" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">WWW</text>
        </svg>
      )
    },
    {
      name: '.NET Development',
      link: '/services/dot-net-development',
      icon: (
        <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* .NET Curved Wave Vector Ribbon */}
          <path d="M7 25C9 15, 17 9, 24 19C31 29, 39 23, 41 13" stroke="#0284C7" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* .NET Text Branding */}
          <text x="24" y="38" textAnchor="middle" fill="#0284C7" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">.NET</text>
        </svg>
      )
    },
    {
      name: 'Flutter App Development',
      link: '/services/flutter-app-development',
      icon: (
        <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Flutter Official Diamond Ribbons */}
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
          {/* PHP Oval Badge */}
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
          {/* Monitor Screen */}
          <rect x="22" y="12" width="20" height="16" rx="2" fill="#1E293B" />
          <rect x="24" y="14" width="16" height="12" rx="1" fill="#0284C7" opacity="0.35" />
          <text x="32" y="22" textAnchor="middle" fill="#38BDF8" fontSize="7" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
          <rect x="28" y="28" width="8" height="3" fill="#475569" />
          {/* Developer Profile Avatar */}
          <circle cx="15" cy="18" r="6" fill="#FDBA74" />
          {/* Headset Frame */}
          <path d="M9 17C9 13.6863 11.6863 11 15 11C18.3137 11 21 13.6863 21 17" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
          <rect x="8" y="16" width="3" height="5" rx="1" fill="#0284C7" />
          {/* Shirt / Body */}
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
          {/* Hexagonal Tech Base */}
          <path d="M24 6L40 15V33L24 42L8 33V15L24 6Z" fill="#F3E8FF" stroke="#8B5CF6" strokeWidth="2" strokeLinejoin="round" />
          {/* Central Purple Node */}
          <circle cx="24" cy="24" r="6" fill="#7C3AED" />
          {/* Outer Tech Nodes */}
          <circle cx="24" cy="12" r="3" fill="#61DAFB" />
          <circle cx="34" cy="30" r="3" fill="#68A063" />
          <circle cx="14" cy="30" r="3" fill="#F59E0B" />
          {/* Connecting Spokes */}
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
          {/* Terminal Code tag */}
          <text x="24" y="25" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="900" fontFamily="monospace">&lt;/&gt;</text>
          {/* Stand Base */}
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
          {/* Laravel 3D Cube Structure */}
          <path d="M24 6L40 15V33L24 42L8 33V15L24 6Z" fill="#FF2D20" opacity="0.1" />
          <path d="M24 6L40 15L24 24L8 15L24 6Z" fill="#FF2D20" />
          <path d="M8 15L24 24V42L8 33V15Z" fill="#E62217" />
          <path d="M40 15V33L24 42V24L40 15Z" fill="#C51910" />
          <path d="M24 24L32 19.5" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
        </svg>
      )
    }
  ];

  const defaultDescription = `As a certified IT company, ${companyName} helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!`;

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
        {/* Section Header - Exactly 100% Copy-to-Copy with Reference Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] tracking-tight text-white mb-3 font-sans">
            {title || "Our Premium Services"}
          </h2>
          <p className="text-base sm:text-[17.5px] font-[400] text-white/90 leading-relaxed font-sans max-w-4xl mx-auto">
            {subtitle || defaultDescription}
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
          {premiumServices.map((item, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Link
                to={item.link}
                className="bg-white rounded-[16px] px-4.5 py-3.5 text-slate-900 shadow-md hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 flex items-center space-x-3.5 text-left h-[80px] border border-slate-100/80 hover:border-cyan-300 group cursor-pointer relative overflow-hidden block text-decoration-none"
              >
                {/* Subtle Hover Sheen Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Vector Icon */}
                <div className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>

                {/* Service Title */}
                <span className="text-[13px] sm:text-[14px] font-[800] text-slate-900 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                  {item.name}
                </span>
              </Link>
            </motion.div>
>>>>>>> 8cb21c9e90c25913bdf378ceb0ee75f4d31189db
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default PremiumServicesGrid;

