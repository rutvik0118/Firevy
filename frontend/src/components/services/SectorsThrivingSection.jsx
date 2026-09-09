import React, { useState, useEffect, useRef } from 'react';

export const SectorsThrivingSection = () => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const firstCard = container.querySelector('.sector-card');
        const cardWidth = firstCard ? firstCard.offsetWidth : 420;
        const gap = 24; // space-x-6 is 24px
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const sectors = [
    {
      id: 'retail',
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="5" width="16" height="30" rx="3" />
          <path d="M12 11h6" />
          <path d="M10 16h10" />
          <rect x="18" y="14" width="15" height="18" rx="2" fill="#0084D1" stroke="white" strokeWidth="2" />
          <path d="M22 19c0-1.5 1.5-3 3.5-3s3.5 1.5 3.5 3" />
          <line x1="22" y1="24" x2="29" y2="24" />
          <line x1="22" y1="27" x2="26" y2="27" />
        </svg>
      ),
      title: 'Retail App Development Company',
      desc: 'The Retail App Development Market For Mobile Devices Is Growing Far More Quickly Than Anybody Could Have Anticipated. The Retail Industry Is Seeing A Meteoric Rise In Terms Of Growth Throughout Time.',
      featuresLeft: [
        {
          name: 'Integrations',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M7 4a2 2 0 0 1 2 2v1h2V6a2 2 0 1 1 4 0v1h1a2 2 0 0 1 2 2v3a2 2 0 1 1 0 4v2a2 2 0 0 1-2 2h-1v-1a2 2 0 1 0-4 0v1H9a2 2 0 0 1-2-2v-2H6a2 2 0 1 1 0-4v-3a2 2 0 0 1 2-2h1V6a2 2 0 0 1-2-2" />
            </svg>
          )
        },
        {
          name: 'Product Personalization',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="7" r="3" />
              <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" />
              <path d="M14 5l2 2m0-2l-2 2" strokeWidth="1.5" />
            </svg>
          )
        },
        {
          name: 'eCommerce Solutions',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M3 4h2l2.5 9h8.5l2-6H6" />
              <circle cx="8" cy="16" r="1.5" fill="currentColor" />
              <circle cx="15" cy="16" r="1.5" fill="currentColor" />
            </svg>
          )
        }
      ],
      featuresRight: [
        {
          name: 'Marketplace Solutions',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M3 7l2-4h10l2 4v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" />
              <path d="M3 7h14" />
              <path d="M8 10v4m4-4v4" />
            </svg>
          )
        },
        {
          name: 'Vendor Management System',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="4" y="4" width="12" height="13" rx="1.5" />
              <path d="M8 2h4v3H8z" fill="currentColor" fillOpacity="0.2" />
              <path d="M7 8h6M7 11h6M7 14h4" strokeLinecap="round" />
            </svg>
          )
        },
        {
          name: 'VR Shopping',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="2" y="6" width="16" height="9" rx="3" />
              <circle cx="7" cy="10.5" r="2" />
              <circle cx="13" cy="10.5" r="2" />
              <path d="M9 10.5h2" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'legal',
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="8" width="30" height="20" rx="3" />
          <path d="M2 28h36" strokeWidth="2.5" />
          <path d="M12 14l-4 4 4 4" />
          <path d="M28 14l4 4-4 4" />
          <line x1="22" y1="13" x2="18" y2="23" />
        </svg>
      ),
      title: 'Legal Website Development',
      desc: 'Several businesses are operating at varying levels within the legal sector. To have a solid online presence, you must need a website.',
      featuresLeft: [
        {
          name: 'Search Engine Optimization',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="8.5" cy="8.5" r="5" />
              <line x1="12.5" y1="12.5" x2="17" y2="17" />
              <path d="M6 9l2-2 2 1.5 2-3" strokeLinecap="round" />
            </svg>
          )
        },
        {
          name: 'Content Writing',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M13.5 3.5l3 3L6 17H3v-3L13.5 3.5z" />
              <line x1="11" y1="6" x2="14" y2="9" />
            </svg>
          )
        },
        {
          name: 'Responsive Web Design',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="2" y="4" width="11" height="9" rx="1.5" />
              <rect x="11" y="7" width="7" height="10" rx="1.5" fill="white" />
              <circle cx="14.5" cy="14.5" r="0.8" fill="currentColor" />
            </svg>
          )
        }
      ],
      featuresRight: [
        {
          name: 'Web Design And Development',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="3" y="3" width="14" height="11" rx="1.5" />
              <line x1="6" y1="17" x2="14" y2="17" />
              <line x1="10" y1="14" x2="10" y2="17" />
              <circle cx="6" cy="6" r="0.8" fill="currentColor" />
              <circle cx="8.5" cy="6" r="0.8" fill="currentColor" />
            </svg>
          )
        },
        {
          name: 'Wordpress Experts',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="10" r="7.5" />
              <path d="M4 10l4 7 3-9 2.5 6 2-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          name: 'Custom Web Design',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M15 3l2 2-8 8H6v-3l9-7z" />
              <path d="M3 17h14" strokeWidth="1.5" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'automotive',
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="32" height="20" rx="3" />
          <line x1="14" y1="26" x2="14" y2="31" />
          <line x1="26" y1="26" x2="26" y2="31" />
          <line x1="10" y1="31" x2="30" y2="31" />
          {/* Car outline inside monitor */}
          <path d="M11 19l2-4h14l2 4v3h-2v-1h-14v1h-2v-3z" fill="white" fillOpacity="0.2" />
          <circle cx="15" cy="19" r="1.5" fill="white" />
          <circle cx="25" cy="19" r="1.5" fill="white" />
        </svg>
      ),
      title: 'Automotive App Development',
      desc: 'We are an industry-leading automotive software development firm offering digital solutions of the highest quality at reasonable operating expenses.',
      featuresLeft: [
        {
          name: 'Vehicle Interior Apps',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="10" r="7" />
              <circle cx="10" cy="10" r="2" />
              <path d="M10 3v5M10 12v5M3 10h5M12 10h5" />
            </svg>
          )
        },
        {
          name: 'Chatbot Development',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="4" y="4" width="12" height="10" rx="2" />
              <circle cx="8" cy="8" r="1" fill="currentColor" />
              <circle cx="12" cy="8" r="1" fill="currentColor" />
              <path d="M8 11h4" strokeLinecap="round" />
              <path d="M10 2v2M4 14l-2 3v-3" />
            </svg>
          )
        },
        {
          name: 'AR And VR Apps',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="3" y="6" width="14" height="8" rx="2" />
              <circle cx="7.5" cy="10" r="1.5" />
              <circle cx="12.5" cy="10" r="1.5" />
              <path d="M9 10h2" />
            </svg>
          )
        }
      ],
      featuresRight: [
        {
          name: 'Automotive Dealership',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M3 8l7-4 7 4v8H3V8z" />
              <rect x="7" y="11" width="6" height="5" />
            </svg>
          )
        },
        {
          name: 'Big Data Solution',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <ellipse cx="10" cy="5" rx="6" ry="2.5" />
              <path d="M4 5v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5" />
              <path d="M4 10v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V10" />
            </svg>
          )
        },
        {
          name: 'IoT Solution For Roads',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="10" r="2.5" />
              <path d="M5 5a7 7 0 0 1 10 0M3 3a10 10 0 0 1 14 0" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'fintech',
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="5" width="20" height="30" rx="3" />
          <circle cx="16" cy="30" r="1.5" fill="white" />
          <path d="M22 11h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" />
          <circle cx="28" cy="20" r="3" />
          <path d="M28 17v6M25 20h6" strokeWidth="1.5" />
        </svg>
      ),
      title: 'Fintech App Development',
      desc: 'Our cutting-edge fintech app development delivers secure, seamless online solutions to help modern financial businesses scale and launch successful FinTech platforms.',
      featuresLeft: [
        {
          name: 'Portfolio Management',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="10" r="7" />
              <path d="M10 3v7l5 3" />
            </svg>
          )
        },
        {
          name: 'Fintech Software Development',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="3" y="5" width="14" height="10" rx="2" />
              <line x1="3" y1="9" x2="17" y2="9" />
              <circle cx="6" cy="12" r="1" fill="currentColor" />
            </svg>
          )
        },
        {
          name: 'Fintech Accounting',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="4" y="3" width="12" height="14" rx="2" />
              <rect x="6" y="5" width="8" height="3" fill="currentColor" fillOpacity="0.2" />
              <circle cx="7" cy="11" r="0.8" fill="currentColor" />
              <circle cx="10" cy="11" r="0.8" fill="currentColor" />
              <circle cx="13" cy="11" r="0.8" fill="currentColor" />
              <circle cx="7" cy="14" r="0.8" fill="currentColor" />
              <circle cx="10" cy="14" r="0.8" fill="currentColor" />
              <circle cx="13" cy="14" r="0.8" fill="currentColor" />
            </svg>
          )
        }
      ],
      featuresRight: [
        {
          name: 'Secure Payment Gateways',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M10 2l7 3v5c0 4.5-3 7.5-7 8-4-0.5-7-3.5-7-8V5l7-3z" />
              <path d="M8 10l1.5 1.5 3-3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          name: 'Blockchain & Crypto',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="10" r="7" />
              <path d="M10 5v10M8 7h3.5a1.5 1.5 0 0 1 0 3H8h4a1.5 1.5 0 0 1 0 3H8" strokeLinecap="round" />
            </svg>
          )
        },
        {
          name: 'AI Fraud Detection',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="10" r="6" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <path d="M10 4v2M10 14v2M4 10h2M14 10h2" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'healthcare',
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 6h20v28H10z" rx="3" />
          <path d="M20 12v12M14 18h12" strokeWidth="2.5" />
        </svg>
      ),
      title: 'Healthcare App Development',
      desc: 'Custom healthcare mobile applications designed for telehealth consultations, patient electronic health records, and HIPAA-compliant medical communications.',
      featuresLeft: [
        {
          name: 'Telemedicine Video',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="3" y="5" width="10" height="10" rx="2" />
              <polygon points="13,8 17,5 17,15 13,12" />
            </svg>
          )
        },
        {
          name: 'Electronic Health Records',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="4" y="3" width="12" height="14" rx="2" />
              <path d="M10 6v4M8 8h4" strokeLinecap="round" />
              <line x1="7" y1="13" x2="13" y2="13" />
            </svg>
          )
        },
        {
          name: 'Pharmacy Refill System',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M7 4h6v3H7z" fill="currentColor" fillOpacity="0.2" />
              <rect x="5" y="7" width="10" height="10" rx="2" />
              <path d="M10 10v4M8 12h4" />
            </svg>
          )
        }
      ],
      featuresRight: [
        {
          name: 'HIPAA Compliance',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M10 2l6 3v5c0 4-3 7-6 7.5-3-.5-6-3.5-6-7.5V5l6-3z" />
              <circle cx="10" cy="10" r="2" />
            </svg>
          )
        },
        {
          name: 'Wearable Device Sync',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="6" y="6" width="8" height="8" rx="2" />
              <path d="M8 6V3h4v3M8 14v3h4v-3" />
              <path d="M8 10h1l1-2 1.5 4 1-2h1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          name: 'Patient Portal',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="6" r="3" />
              <path d="M4 16c0-3 3-5 6-5s6 2 6 5" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'education',
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6l16 8-16 8L4 14z" />
          <path d="M10 19v8c0 4 5 7 10 7s10-3 10-7v-8" />
          <line x1="36" y1="14" x2="36" y2="26" />
        </svg>
      ),
      title: 'Education & E-Learning Platform',
      desc: 'Scalable educational apps and LMS platforms that empower students and teachers with interactive quizzes, live classrooms, and gamified progress tracking.',
      featuresLeft: [
        {
          name: 'Virtual Classrooms',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="3" y="4" width="14" height="10" rx="1.5" />
              <circle cx="8" cy="9" r="1.5" />
              <circle cx="12" cy="9" r="1.5" />
            </svg>
          )
        },
        {
          name: 'Interactive Quizzes',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M5 8l2 2 4-4M5 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          name: 'Course Management',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M4 5h12M4 9h12M4 13h8" strokeLinecap="round" />
            </svg>
          )
        }
      ],
      featuresRight: [
        {
          name: 'Student Analytics',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M4 15l4-5 3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          name: 'Live Video Streaming',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="10" r="3" />
              <path d="M4 6a9 9 0 0 1 12 0M2 4a12 12 0 0 1 16 0" />
            </svg>
          )
        },
        {
          name: 'Offline Study Material',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M10 4v8M7 9l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 15h12" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'logistics',
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="8" width="22" height="18" rx="2" />
          <path d="M26 14h6l4 5v7h-10V14z" fill="white" fillOpacity="0.2" />
          <circle cx="12" cy="28" r="3" fill="white" />
          <circle cx="28" cy="28" r="3" fill="white" />
        </svg>
      ),
      title: 'Logistics & Transportation App',
      desc: 'End-to-end supply chain logistics and fleet dispatch systems with live GPS tracking, automated freight billing, and warehouse inventory control.',
      featuresLeft: [
        {
          name: 'GPS Fleet Tracking',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="8" r="3" />
              <path d="M10 2a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6z" />
            </svg>
          )
        },
        {
          name: 'Route Optimization',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M5 15l4-8 4 4 4-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          name: 'Automated Dispatch',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <polygon points="11,2 3,11 9,11 8,18 16,9 10,9" />
            </svg>
          )
        }
      ],
      featuresRight: [
        {
          name: 'Driver Management',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="10" cy="7" r="3" />
              <path d="M4 17c0-3 3-5 6-5s6 2 6 5" />
            </svg>
          )
        },
        {
          name: 'Barcode & RFID Scan',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M4 5v10M7 5v10M10 5v10M13 5v10M16 5v10" strokeLinecap="round" />
            </svg>
          )
        },
        {
          name: 'Warehouse Management',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M3 7l7-4 7 4v8l-7 4-7-4V7z" />
              <path d="M3 7l7 4 7-4M10 11v8" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'realestate',
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18L20 6l14 12v16H6V18z" />
          <rect x="15" y="20" width="10" height="14" fill="white" fillOpacity="0.2" />
        </svg>
      ),
      title: 'Real Estate App Development',
      desc: 'Smart real estate portals and property valuation apps featuring 3D virtual home tours, mortgage calculation engines, and verified agent chats.',
      featuresLeft: [
        {
          name: '3D Virtual Tours',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M10 3l6 3.5v7L10 17l-6-3.5v-7L10 3z" />
              <path d="M10 3v14M16 6.5L4 13.5M4 6.5l12 7" />
            </svg>
          )
        },
        {
          name: 'Mortgage Calculator',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="4" y="3" width="12" height="14" rx="2" />
              <path d="M7 6h6M7 9h6M7 12h2M11 12h2" strokeLinecap="round" />
            </svg>
          )
        },
        {
          name: 'Agent Chat & Leads',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M4 5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7l-4 3V7a2 2 0 0 1 2-2z" />
            </svg>
          )
        }
      ],
      featuresRight: [
        {
          name: 'Map Property Search',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <path d="M3 5l5-2 4 2 5-2v12l-5 2-4-2-5 2V5z" />
              <line x1="8" y1="3" x2="8" y2="15" />
              <line x1="12" y1="5" x2="12" y2="17" />
            </svg>
          )
        },
        {
          name: 'Document E-Signing',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <rect x="4" y="3" width="12" height="14" rx="2" />
              <path d="M7 13c1.5 0 2-1 3-1s1.5 1 3 1" strokeLinecap="round" />
            </svg>
          )
        },
        {
          name: 'Rental Management',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          svg: (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]">
              <circle cx="7" cy="10" r="3" />
              <path d="M10 10h6M13 7v6" strokeLinecap="round" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section className="py-9 sm:py-11 lg:py-13 bg-white text-slate-900 font-sans text-left overflow-hidden">
      {/* Centered Heading Matching Screenshot Exactly */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-[1.25]"
          style={{ fontSize: '32px' }}
        >
          Sectors Thriving Through Firevy’s Bespoke Android App Development Services
        </h2>
      </div>

      {/* Auto-scrolling Carousel Container */}
      <div
        className="relative overflow-hidden w-full select-none pb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-none px-4 sm:px-6 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="sector-card w-[360px] sm:w-[410px] lg:w-[430px] min-h-[310px] sm:min-h-[320px] rounded-[18px] bg-[#F0F8FD] p-6 sm:p-7 border border-[#E2F1F8] flex flex-col justify-between shrink-0 shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Top Row: Rounded Blue Icon Box + Title */}
                <div className="flex items-start space-x-3.5 mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] bg-[#0084D1] flex items-center justify-center shrink-0 shadow-xs">
                    {sector.icon}
                  </div>
                  <h3 className="font-[800] text-[16px] sm:text-[17.5px] text-[#0B0F19] leading-tight pt-1">
                    {sector.title}
                  </h3>
                </div>

                {/* Paragraph Description */}
                <p
                  className="font-normal text-[#475569] mb-4"
                  style={{ fontSize: '12.5px', lineHeight: '1.6' }}
                >
                  {sector.desc}
                </p>
              </div>

              {/* 2-Column Feature Capabilities List (3 Left, 3 Right) */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pt-3.5 border-t border-[#D9EFF9]">
                {/* Left Column */}
                <div className="space-y-2.5">
                  {sector.featuresLeft.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2">
                      <div className={`w-5 h-5 rounded-[4px] ${feat.bg} ${feat.iconColor} flex items-center justify-center shrink-0`}>
                        {feat.svg}
                      </div>
                      <span className="text-[11px] sm:text-[11.5px] font-[700] text-[#1E293B] leading-tight truncate">
                        {feat.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-2.5">
                  {sector.featuresRight.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2">
                      <div className={`w-5 h-5 rounded-[4px] ${feat.bg} ${feat.iconColor} flex items-center justify-center shrink-0`}>
                        {feat.svg}
                      </div>
                      <span className="text-[11px] sm:text-[11.5px] font-[700] text-[#1E293B] leading-tight truncate">
                        {feat.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsThrivingSection;
