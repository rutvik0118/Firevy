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
            className="text-[#475569]"
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}
          >
            {subtitle || 'Trending Industries that Use Mobile App Development'}
          </p>
        </div>

        {/* Large Rounded Category Navigation Box (2 Rows) matching Sapphire reference design */}
        <div className="flex justify-center max-w-full mx-auto mb-10 sm:mb-12 px-2">
          <div className="bg-[#F0F8FD] rounded-[18px] sm:rounded-2xl p-3 sm:p-4 w-fit max-w-full border border-[#E2F1F8] flex flex-col gap-2.5 items-center justify-center shadow-xs">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {categoriesRow1.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13.5px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#005F96] text-white shadow-xs'
                      : 'bg-white text-[#334155] hover:text-[#005F96] hover:bg-slate-50 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {categoriesRow2.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13.5px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#005F96] text-white shadow-xs'
                      : 'bg-white text-[#334155] hover:text-[#005F96] hover:bg-slate-50 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic 3 Portfolio Cards with High Quality Images depending on Active Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1320px] mx-auto mb-10 sm:mb-12 transition-all duration-300">
          {currentCards.map((item) => (
            <div key={item.id} className="flex flex-col items-center group cursor-pointer">
              {/* Large Rounded High-Quality Image Container */}
              <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-xs border border-slate-200/60 group-hover:shadow-lg transition-all duration-300 relative bg-slate-950">
                {item.id === 'auto-1' ? (
                  <div className="w-full h-full bg-[#161B22] text-white p-3 flex flex-col justify-between select-none relative overflow-hidden font-sans">
                    {/* Top Header */}
                    <div className="bg-[#0D1117] -mx-3 -mt-3 p-2 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-[9.5px] text-slate-400 font-mono pl-1.5">vcc.playground.io</span>
                      </div>
                      <span className="text-[10px] font-[900] tracking-widest text-slate-300 uppercase">VEHICLE-DATA-LOGGING</span>
                    </div>

                    {/* Main Telemetry Interface */}
                    <div className="grid grid-cols-12 gap-2 mt-1.5 flex-1 items-stretch">
                      {/* Left Route Map Panel */}
                      <div className="col-span-7 bg-[#0D1117] rounded-lg p-2 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
                        <div className="flex justify-between items-center text-[7.5px] text-slate-400 font-mono">
                          <span>GPS Position</span>
                          <span className="text-cyan-400 font-bold">8597 rpm</span>
                        </div>

                        {/* Route Map Graphic */}
                        <div className="relative w-full h-[105px] my-1 rounded bg-[#161B22] overflow-hidden flex items-center justify-center border border-slate-800">
                          <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
                            {/* Grid Lines */}
                            <path d="M0 25 H160 M0 50 H160 M0 75 H160 M40 0 V100 M80 0 V100 M120 0 V100" stroke="#21262D" strokeWidth="0.8" strokeDasharray="3 3" />
                            {/* Blue Route */}
                            <path d="M20 80 Q 50 20, 85 55 T 145 20" stroke="#00B4D8" strokeWidth="3" strokeLinecap="round" fill="none" />
                            {/* Target Marker */}
                            <circle cx="145" cy="20" r="4.5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx="85" cy="55" r="3" fill="#00B4D8" />
                          </svg>

                          {/* Stat overlay box */}
                          <div className="absolute bottom-1.5 left-1.5 bg-[#0D1117]/90 backdrop-blur-xs rounded px-1.5 py-1 border border-slate-700/80 text-[7px] space-y-0.5 text-left">
                            <div className="text-emerald-400 font-bold">Speed: 74 km/h</div>
                            <div className="text-amber-400 font-bold">Fuel: 89%</div>
                          </div>
                        </div>

                        <div className="flex justify-between text-[7px] text-slate-500 font-mono">
                          <span>Lat: 37.7749</span>
                          <span>Long: -122.4194</span>
                        </div>
                      </div>

                      {/* Right Telemetry Widget Stack */}
                      <div className="col-span-5 flex flex-col justify-between space-y-1.5">
                        <div className="bg-[#7F1D1D]/90 border border-red-500/50 rounded-lg p-2 text-center shadow-xs">
                          <div className="text-[7.5px] font-bold text-red-200 uppercase tracking-wider">Engine Temp</div>
                          <div className="text-[17px] font-[900] text-white leading-tight">98°C</div>
                        </div>

                        <div className="bg-[#78350F]/90 border border-amber-500/50 rounded-lg p-2 text-center shadow-xs">
                          <div className="text-[7.5px] font-bold text-amber-200 uppercase tracking-wider">Fuel Level</div>
                          <div className="text-[17px] font-[900] text-white leading-tight">91%</div>
                        </div>

                        <div className="bg-[#064E3B]/90 border border-emerald-500/50 rounded-lg p-2 text-center shadow-xs">
                          <div className="text-[7.5px] font-bold text-emerald-200 uppercase tracking-wider">Ambient Temp</div>
                          <div className="text-[17px] font-[900] text-white leading-tight">34°C</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                  />
                )}
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
