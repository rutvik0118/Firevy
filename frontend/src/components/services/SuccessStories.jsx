import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const SuccessStories = ({ subtitle }) => {
  const [activeCategory, setActiveCategory] = useState('Automotive');
  const impactCarouselRef = useRef(null);
  const [isImpactHovered, setIsImpactHovered] = useState(false);

  // Auto-scroll the pastel value cards every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isImpactHovered) return;

    const interval = setInterval(() => {
      if (impactCarouselRef.current) {
        const container = impactCarouselRef.current;
        const firstCard = container.querySelector('.impact-card');
        const cardWidth = firstCard ? firstCard.offsetWidth : 370;
        const gap = 24; // 1.5rem
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isImpactHovered]);

  const categoriesRow1 = [
    'Automotive',
    'Ecommerce',
    'Education',
    'Entertainment',
    'Finance',
    'Food and Beverage',
    'Healthcare'
  ];

  const categoriesRow2 = [
    'Information Technology',
    'Logistics',
    'Travel & Tourism',
    'Utility Services'
  ];

  const portfolioByCategory = {
    Automotive: [
      {
        id: 'auto-1',
        title: 'Vehicle Data Logging Software',
        image: '/assets/portfolio/vehicle_logging.jpg'
      },
      {
        id: 'auto-2',
        title: 'Car Wash App Development',
        image: '/assets/portfolio/car_wash.jpg'
      },
      {
        id: 'auto-3',
        title: 'Taxi Booking-App Development',
        image: '/assets/portfolio/taxi_booking.jpg'
      }
    ],
    Ecommerce: [
      {
        id: 'ecom-1',
        title: 'Multi-Vendor Marketplace App',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'ecom-2',
        title: 'Grocery Delivery Mobile App',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'ecom-3',
        title: 'Fashion & Apparel Store App',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80'
      }
    ],
    Education: [
      {
        id: 'edu-1',
        title: 'Interactive E-Learning Platform',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'edu-2',
        title: 'Virtual Classroom & Live Quiz App',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'edu-3',
        title: 'Language Learning Mobile App',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80'
      }
    ],
    Entertainment: [
      {
        id: 'ent-1',
        title: 'Video Streaming OTT Platform',
        image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'ent-2',
        title: 'Music & Podcast Player App',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'ent-3',
        title: 'Live Gaming Community App',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80'
      }
    ],
    Finance: [
      {
        id: 'fin-1',
        title: 'Stock Market Website...',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'fin-2',
        title: 'Payment Service App...',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'fin-3',
        title: 'Claim Management App',
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Food and Beverage': [
      {
        id: 'fb-1',
        title: 'Online Restaurant & Food Delivery App',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'fb-2',
        title: 'Cloud Kitchen Order Management',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'fb-3',
        title: 'Table Reservation & Dine-in App',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80'
      }
    ],
    Healthcare: [
      {
        id: 'hc-1',
        title: 'Telemedicine & Doctor Consultation App',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'hc-2',
        title: 'Patient Health Record & Pharmacy App',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'hc-3',
        title: 'Fitness & Vital Vitals Tracking App',
        image: 'https://images.unsplash.com/photo-1510519138161-584736f2f8f0?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Information Technology': [
      {
        id: 'it-1',
        title: 'Cloud Infrastructure Monitoring App',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'it-2',
        title: 'Cybersecurity Threat Alert Dashboard',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'it-3',
        title: 'DevOps CI/CD Build Pipeline Manager',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80'
      }
    ],
    Logistics: [
      {
        id: 'log-1',
        title: 'Fleet Tracking & Dispatch Management',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'log-2',
        title: 'Warehouse Inventory Barcode Scanner',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'log-3',
        title: 'Supply Chain Route Optimization',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Travel & Tourism': [
      {
        id: 'trv-1',
        title: 'Flight & Hotel Booking Engine',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'trv-2',
        title: 'Smart Travel Guide & City Navigator',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'trv-3',
        title: 'Vacation Rental & Host Portal',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Utility Services': [
      {
        id: 'util-1',
        title: 'Smart Home IoT Energy Management',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'util-2',
        title: 'Electricity & Water Bill Payment App',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 'util-3',
        title: 'On-Demand Home Services & Repair App',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80'
      }
    ]
  };

  const currentCards = portfolioByCategory[activeCategory] || portfolioByCategory['Automotive'];

  return (
    <section className="py-9 sm:py-11 lg:py-13 bg-white text-slate-900 font-sans text-left">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-2">
          <h2
            className="text-[#0B0F19] tracking-tight"
            style={{ fontSize: '34px', fontWeight: 800, lineHeight: '51px' }}
          >
            Industry-Focused Insights To Elevate Your Business
          </h2>
          <p
            className="font-normal text-[#475569]"
            style={{ fontSize: '15px' }}
          >
            {subtitle || 'Trending Industries that Use Mobile App Development'}
          </p>
        </div>

        {/* Large Rounded Category Navigation Box (2 Rows) with fully functional active state switching */}
        <div className="bg-[#F0F8FD] rounded-[16px] p-3 sm:p-4 max-w-[1140px] mx-auto mb-10 sm:mb-12 border border-[#E2F1F8] flex flex-col gap-2.5 shadow-xs">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
            {categoriesRow1.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-[8px] whitespace-nowrap text-xs sm:text-[13px] font-[700] transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#005F96] text-white shadow-xs'
                    : 'bg-white text-[#334155] hover:text-[#005F96] hover:bg-slate-50 border border-slate-100/80 shadow-2xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
            {categoriesRow2.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 sm:px-6 py-1.5 sm:py-2 rounded-[8px] whitespace-nowrap text-xs sm:text-[13px] font-[700] transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#005F96] text-white shadow-xs'
                    : 'bg-white text-[#334155] hover:text-[#005F96] hover:bg-slate-50 border border-slate-100/80 shadow-2xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic 3 Portfolio Cards with High Quality Images depending on Active Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1320px] mx-auto mb-10 sm:mb-12 transition-all duration-300">
          {currentCards.map((item) => (
            <div key={item.id} className="flex flex-col items-center group">
              {/* Large Rounded High-Quality Image Container */}
              <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-xs border border-slate-200/60 group-hover:shadow-lg transition-all duration-300 relative bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Project Title Below Image */}
              <h3 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] mt-3.5 text-center group-hover:text-[#005F96] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Centered View All Portfolio CTA Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="bg-[#005F96] hover:bg-[#004D7A] text-white text-xs sm:text-sm font-[800] rounded-[6px] px-7 py-3 inline-block transition-all shadow-xs"
          >
            View All Portfolio
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SuccessStories;
