import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';

const defaultPremiumServices = [
  {
    name: 'Mobile App Development',
    link: '/services/mobile-app-development',
    image: '/images/ourpremiumservice/ic_mobile.svg'
  },
  {
    name: 'Software Development',
    link: '/services/software-development',
    image: '/images/ourpremiumservice/ic_software.svg'
  },
  {
    name: 'Web Development',
    link: '/services/web-development',
    image: '/images/ourpremiumservice/ic_web.svg'
  },
  {
    name: '.NET Development',
    link: '/services/dot-net-development',
    image: '/images/ourpremiumservice/ic_net.svg'
  },
  {
    name: 'Flutter App Development',
    link: '/services/flutter-app-development',
    image: '/images/ourpremiumservice/ic_flutter.svg'
  },
  {
    name: 'PHP Development',
    link: '/services/php-development',
    image: '/images/ourpremiumservice/ic_php.svg'
  },
  {
    name: 'Hire Dedicated Developers',
    link: '/hire-developers',
    image: '/images/ourpremiumservice/ic_hirededicated.svg'
  },
  {
    name: 'Mern Stack Development',
    link: '/services/mern-stack-development',
    image: '/images/ourpremiumservice/ic_mern.svg'
  },
  {
    name: 'Full Stack Development',
    link: '/services/full-stack-development',
    image: '/images/ourpremiumservice/ic_fullstack.svg'
  },
  {
    name: 'Laravel Development',
    link: '/services/laravel-development',
    image: '/images/ourpremiumservice/ic_laravel.svg'
  }
];

export const PremiumServicesGrid = ({ data, title, subtitle, companyName = "firevy.co" }) => {
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
