import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export const PremiumServicesGrid = ({ title, subtitle, companyName = "firevy.co" }) => {
  const displayTitle = title || 'Our Premium Services';
  const rawDesc = subtitle || `As a certified IT company, ${companyName} helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks.`;
  const displayDescription = rawDesc.includes('Contact us') ? rawDesc : `${rawDesc} Contact us to learn more!`;

const defaultServices = [
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
    },
    {
      name: 'Drupal Development',
      link: '/services/drupal',
      image: '/images/ourpremiumservice/ic_drupal.svg'
    },
    {
      name: 'Umbraco Development',
      link: '/services/umbraco',
      image: '/images/ourpremiumservice/ic_umbraco.svg'
    },
    {
      name: 'Sitecore Development',
      link: '/services/sitecore',
      image: '/images/ourpremiumservice/ic_sitecore.svg'
    },
    {
      name: 'Sitefinity Development',
      link: '/services/sitefinity',
      image: '/images/ourpremiumservice/ic_sitefinity.svg'
    },
    {
      name: 'Magento Development',
      link: '/services/magento',
      image: '/images/ourpremiumservice/ic_magento.svg'
    },
    {
      name: 'Shopify Development',
      link: '/services/shopify',
      image: '/images/ourpremiumservice/ic_shopify.svg'
    }
  ];

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-[#005F96] text-white font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-white tracking-tight leading-tight">
            {displayTitle}
          </h2>
          <p className="text-[13.5px] sm:text-[15px] font-[400] text-white/95 leading-relaxed font-sans max-w-3xl mx-auto">
            {displayDescription}
          </p>
        </div>

        {/* 10 White Rounded Service Cards (5 columns x 2 rows on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-[1240px] mx-auto">
          {defaultServices.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="bg-white rounded-[15px] p-[15px] text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between min-h-[66px] h-[68px] sm:h-[72px] text-left group cursor-pointer"
            >
              <div className="w-[45px] h-[45px] shrink-0 p-1 flex items-center justify-center overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain"
                  style={{
                    animation: `sapphireHiThere 1.5s ease infinite`,
                    animationDelay: `${(idx % 5) * 0.25}s`
                  }}
                />
              </div>
              <span className="w-[calc(100%-55px)] font-[700] text-[#333333] text-[13px] sm:text-[13.5px] leading-[1.25] tracking-tight group-hover:text-[#005F96] transition-colors pl-1">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

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
