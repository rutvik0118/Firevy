import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const IndustryFocusedInsightsSection = ({
  title,
  subtitle = 'Trending Industries that Use Mobile App Development'
} = {}) => {
  const [activeIndustry, setActiveIndustry] = useState('Automotive');

  const row1 = [
    'Automotive',
    'Ecommerce',
    'Education',
    'Entertainment',
    'Finance',
    'Food and Beverage',
    'Healthcare'
  ];

  const row2 = [
    'Information Technology',
    'Logistics',
    'Travel & Tourism',
    'Utility Services'
  ];


  const industryData = {
    'Automotive': [
      {
        id: 1,
        title: 'Vehicle Data Logging Software',
        image: '/assets/portfolio/vehicle_logging.jpg'
      },
      {
        id: 2,
        title: 'Car Wash App Development',
        image: '/assets/portfolio/car_wash.jpg'
      },
      {
        id: 3,
        title: 'Taxi Booking-App Development',
        image: '/assets/portfolio/taxi_booking.jpg'
      }
    ],
    'Ecommerce': [
      {
        id: 1,
        title: 'Multi-Vendor Marketplace Platform',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'Luxury Fashion Storefront & POS',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'B2B Wholesale Ordering Portal',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Education': [
      {
        id: 1,
        title: 'Interactive E-Learning Platform',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'Virtual Classroom Video App',
        image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'Online Examination & LMS Portal',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Entertainment': [
      {
        id: 1,
        title: 'On-Demand OTT Video Streaming App',
        image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'Music & Podcast Discovery Platform',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'Live Event Ticketing & Streaming',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Finance': [
      {
        id: 1,
        title: 'Fintech Neobanking & Wallet App',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'Crypto & Stock Trading Dashboard',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'AI Wealth Management Portal',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Food and Beverage': [
      {
        id: 1,
        title: 'On-Demand Food Delivery Platform',
        image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'Cloud Kitchen Management App',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'Restaurant POS & Table Reservation',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Healthcare': [
      {
        id: 1,
        title: 'Telemedicine & Video Consultation',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'Hospital Management EHR Portal',
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'Smart Medical IoT Health Tracker',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Information Technology': [
      {
        id: 1,
        title: 'Cloud Infrastructure Monitoring Hub',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'Enterprise SaaS DevOps Automation',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'Cybersecurity SIEM Analytics Portal',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Logistics': [
      {
        id: 1,
        title: 'Fleet Management & Real-Time GPS',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'Warehouse Automated Inventory Tracker',
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'Freight Forwarding & Route Dispatcher',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Travel & Tourism': [
      {
        id: 1,
        title: 'Flight & Hotel Booking Engine',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'AI Smart Trip Planner & Guide',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'Vacation Rental Booking Portal',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
      }
    ],
    'Utility Services': [
      {
        id: 1,
        title: 'Smart Energy Metering & Billing App',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 2,
        title: 'Home Services On-Demand Platform',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: 3,
        title: 'Water & Power Grid Analytics Hub',
        image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80'
      }
    ]
  };

  const currentCards = industryData[activeIndustry] || industryData['Automotive'];

  return (
    <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left overflow-hidden select-none w-full border-b border-slate-100">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-2">
            {title || "Industry-Focused Insights To Elevate Your Business"}
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal">
            {subtitle}
          </p>
        </div>

        {/* 2-Row Filter Bar Container matching Sapphire reference design */}
        <div className="flex justify-center max-w-full mx-auto mb-8 sm:mb-10 px-2">
          <div className="bg-[#F0F8FD] p-3 sm:p-4 rounded-[18px] sm:rounded-2xl border border-[#D9EFF9] flex flex-col gap-2.5 items-center justify-center w-fit max-w-full shadow-2xs">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {row1.map((industry) => {
                const isActive = activeIndustry === industry;
                return (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => setActiveIndustry(industry)}
                    className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] md:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#005F96] text-white shadow-xs'
                        : 'bg-white text-[#334155] hover:text-[#005F96] hover:bg-slate-50 border border-slate-200/80 shadow-2xs'
                    }`}
                  >
                    {industry}
                  </button>
                );
              })}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {row2.map((industry) => {
                const isActive = activeIndustry === industry;
                return (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => setActiveIndustry(industry)}
                    className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] md:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#005F96] text-white shadow-xs'
                        : 'bg-white text-[#334155] hover:text-[#005F96] hover:bg-slate-50 border border-slate-200/80 shadow-2xs'
                    }`}
                  >
                    {industry}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Portfolio Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10">
          {currentCards.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Card Image Container with rounded corners & subtle shadow */}
              <div className="w-full h-[220px] sm:h-[240px] rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 bg-slate-100 mb-3.5 border border-slate-100 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  loading="lazy"
                />
              </div>

              {/* Centered Project Title */}
              <h3 className="font-[800] text-[15.5px] sm:text-[17px] text-[#0B0F19] tracking-tight text-center leading-snug group-hover:text-[#005F96] transition-colors">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Centered "View All Portfolio" Button */}
        <div className="flex justify-center items-center">
          <Link
            to="/portfolio"
            className="bg-[#005F96] hover:bg-[#004D7A] text-white font-[700] text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-lg shadow-sm hover:shadow transition-all duration-200 inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>View All Portfolio</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default IndustryFocusedInsightsSection;
