import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import HybridAppCuttingEdgeTechnologiesSection from './HybridAppCuttingEdgeTechnologiesSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import HybridAppExpertiseServices from './HybridAppExpertiseServices';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';

export const UsedCarAppDevelopmentService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Automotive App Squad',
    appType: 'Custom Used Car App Development',
    budget: '$20,000 - $45,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // 6 Benefits of Used Car App Development
  const benefitsItems = [
    {
      title: 'End-to-End Customization',
      desc: 'Enjoy a fully customized used car application developed to suit your very specific business model for exclusivity and enhanced user interaction.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="14" />
          <path d="M14 20h12M20 14v12" strokeLinecap="round" />
          <rect x="10" y="10" width="20" height="20" rx="4" />
          <circle cx="16" cy="16" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Increased Scalability',
      desc: 'Our applications are developed in such a way that they can handle increasing traffic, increasing dealer networks, and rising car listings without any hassle.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M8 32h24M12 28v-8M20 28V14M28 28V8" strokeLinecap="round" />
          <path d="M12 18l8-6 8-6" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="24 6 28 6 28 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Better Customer Experience',
      desc: 'From intuitive search filters to rapid car comparisons, your shoppers have a seamless and interactive purchasing experience.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="14" r="5" />
          <path d="M10 30c0-5 4.5-8 10-8s10 3 10 8" strokeLinecap="round" />
          <circle cx="9" cy="16" r="3.5" />
          <circle cx="31" cy="16" r="3.5" />
          <path d="M4 29c0-3.5 3-6 7-6M36 29c0-3.5-3-6-7-6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Seamless Loan & Financing Capabilities',
      desc: 'Embedded used car financing app capabilities make financing easy, providing users with confidence and convenience.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="8" y="10" width="24" height="20" rx="3" />
          <line x1="8" y1="16" x2="32" y2="16" />
          <circle cx="14" cy="23" r="2" fill="#0084D1" />
          <path d="M22 23h4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Strong Security & Compliance',
      desc: 'Protect data, secure payments, and meet automotive and financial regulations.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 6l12 5v9c0 8-6 13-12 15-6-2-12-7-12-15v-9l12-5z" strokeLinejoin="round" />
          <path d="M16 20l3 3 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Higher ROI & Growth Speed',
      desc: 'With smart features, seamless integrations, and automation, your business achieves higher returns and increased growth speed.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="14" />
          <path d="M14 26l5-5 4 4 5-7" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="23 18 28 18 28 23" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  // 7 Expertise Services for Used Car App Development
  const expertiseServices = [
    {
      id: 1,
      title: 'Payment Integration',
      desc: 'API integration for payments, maps, CRMs, and lenders for increased functionality.'
    },
    {
      id: 2,
      title: 'Support & Maintenance Services',
      desc: 'Regular support to ensure your used car finding application remains up-to-date, secure, and scalable for business expansion.'
    },
    {
      id: 3,
      title: 'Custom Used Car App Development',
      desc: 'Specialized apps crafted with latest features to address the specific needs of car dealers and buyers.'
    },
    {
      id: 4,
      title: 'Used Car Loan & Finance App Development',
      desc: 'Secure integrations for loan calculators, credit verification, and digital agreements.'
    },
    {
      id: 5,
      title: 'Inventory & Vehicle Listing Management',
      desc: 'Real-time VIN lookup, stock management, and automated sync across car dealership portals.'
    },
    {
      id: 6,
      title: 'Cross-Platform Used Car App Development',
      desc: 'High performance native & hybrid mobile applications compatible with iOS and Android.'
    },
    {
      id: 7,
      title: 'AI & Valuation Engine Integration',
      desc: 'Automated price estimation, depreciation tracking, and predictive market valuation algorithms.'
    }
  ];

  // 4 Business Friendly Hiring Models (1:1 Reference Match)
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ruffled top above tie */}
          <path d="M19 9 C17 6 22 5 24 7 C26 5 31 6 29 9" />
          {/* Tied neck */}
          <path d="M18 11 H30" strokeWidth="2.8" />
          {/* Main money bag pouch */}
          <path d="M18 11 C12 16 9 23 9 32 C9 41 15 44 24 44 C33 44 39 41 39 32 C39 23 36 16 30 11" />
          {/* Dollar Sign */}
          <text x="24" y="32" fill="currentColor" stroke="none" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">$</text>
        </svg>
      ),
      points: [
        'Optimal flexibility',
        'Agile team',
        'Small projects',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time Material',
      desc: "If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Top Winder & Loop */}
          <path d="M24 10 V5" />
          <path d="M20 5 H28" />
          <path d="M35 15 L38 12" />
          {/* Clock Circle */}
          <circle cx="25" cy="27" r="14" />
          {/* Clock Hands */}
          <path d="M25 27 V19" strokeWidth="2.5" />
          <path d="M25 27 L31 27" strokeWidth="2.5" />
          <circle cx="25" cy="27" r="1.5" fill="currentColor" />
          {/* Speed / Motion lines on left */}
          <path d="M10 20 H5" />
          <path d="M8 26 H3" />
          <path d="M10 32 H5" />
        </svg>
      ),
      points: [
        'No hidden costs',
        'Working based hours',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Dedicated Team',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Center Leader Head & Body */}
          <circle cx="24" cy="14" r="5" />
          <path d="M16 33 C16 27.5 19.5 24 24 24 C28.5 24 32 27.5 32 33" />
          {/* Left Member Head & Body */}
          <circle cx="13" cy="18" r="4" />
          <path d="M6 33 C6 29 9 26 13 26 C14.5 26 15.8 26.5 16.8 27.4" />
          {/* Right Member Head & Body */}
          <circle cx="35" cy="18" r="4" />
          <path d="M42 33 C42 29 39 26 35 26 C33.5 26 32.2 26.5 31.2 27.4" />
        </svg>
      ),
      points: [
        'No hidden costs',
        '160 hours of assured work',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Buckets Approach',
      desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#06B6D4]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Big Gear Left/Bottom */}
          <circle cx="18" cy="28" r="4" />
          <circle cx="18" cy="28" r="8" />
          <path d="M18 18 V20 M18 36 V38 M8 28 H10 M26 28 H28 M11 21 L12.5 22.5 M23.5 33.5 L25 35 M11 35 L12.5 33.5 M23.5 22.5 L25 21" strokeWidth="2.4" />
          {/* Small Gear Right/Top */}
          <circle cx="33" cy="17" r="3" />
          <circle cx="33" cy="17" r="6" />
          <path d="M33 9 V11 M33 23 V25 M25 17 H27 M39 17 H41 M27.5 11.5 L29 13 M37 21 L38.5 22.5 M27.5 22.5 L29 21 M37 13 L38.5 11.5" strokeWidth="2.2" />
        </svg>
      ),
      points: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Less budget',
        'Pay only for measurable work'
      ]
    }
  ];

  // 6 FAQ Items
  const faqItems = [
    {
      question: 'How much does it cost to develop a used car marketplace app?',
      answer: 'The cost typically ranges between $18,000 and $65,000+ depending on the complexity, features (VIN decoding, 360 virtual tour, real-time auctions, digital financing), and platform targets (iOS, Android, Web).'
    },
    {
      question: 'Can you integrate third-party VIN decoding and vehicle history reports like CARFAX?',
      answer: 'Yes! We have extensive experience integrating leading automotive data APIs including CARFAX, Experian AutoCheck, Edmunds, Kelley Blue Book (KBB), and NHTSA databases.'
    },
    {
      question: 'How do you ensure secure payment and car transactions on the app?',
      answer: 'We implement PCI-DSS compliant escrow payment gateways like Stripe, Plaid for ACH bank transfers, and tokenized deposits to safeguard buyers and dealers throughout the entire deal.'
    },
    {
      question: 'Can you build dealer portal management (DMS) alongside consumer apps?',
      answer: 'Publised unified dealer dashboard portals for bulk inventory uploading, lead management, real-time messaging, test-drive booking schedules, and analytics.'
    },
    {
      question: 'How long does it take to launch a used car buying & selling MVP?',
      answer: 'A fully-functional Used Car MVP can typically be designed, developed, and deployed to iOS App Store and Google Play Store within 8 to 12 weeks.'
    },
    {
      question: 'Do you provide post-launch support and regular feature enhancements?',
      answer: 'Yes, we offer comprehensive SLA-backed maintenance packages including server monitoring, security patches, OS version compatibility updates, and agile feature sprints.'
    }
  ];

  // 3 Recent Blogs (1:1 Match to Reference Screenshot)
  const recentBlogs = [
    {
      id: 1,
      date: 'February 16, 2024',
      title: 'How to find cost-effective options for web development company in USA?',
      desc: 'Understanding your needs is critical to a successful and affordable web development project. It evaluates your...',
      banner: {
        bgGradient: 'from-[#E2ECF8] via-[#E8F0FB] to-[#DCE9F8]',
        tagTitle: (
          <div className="text-left font-sans">
            <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">How to find</span>
            <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">cost-effective options</span>
            <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">for <span className="font-[800] text-[#F97316]">web development</span></span>
            <span className="font-[800] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">company in USA?</span>
          </div>
        ),
        illustration: (
          <svg viewBox="0 0 150 130" className="w-28 h-28 sm:w-32 sm:h-32 object-contain">
            {/* Monitor / Code Screen */}
            <rect x="25" y="20" width="75" height="55" rx="6" fill="#1E293B" />
            <rect x="29" y="24" width="67" height="47" rx="4" fill="#0F172A" />
            <circle cx="35" cy="29" r="1.5" fill="#EF4444" />
            <circle cx="40" cy="29" r="1.5" fill="#F59E0B" />
            <circle cx="45" cy="29" r="1.5" fill="#10B981" />
            <line x1="34" y1="36" x2="60" y2="36" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            <line x1="34" y1="42" x2="80" y2="42" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
            <line x1="34" y1="48" x2="52" y2="48" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
            <line x1="34" y1="54" x2="70" y2="54" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
            {/* Mobile Device Frame */}
            <rect x="85" y="35" width="38" height="65" rx="7" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="88" y="42" width="32" height="50" rx="4" fill="#F8FAFC" />
            <rect x="92" y="48" width="24" height="4" rx="2" fill="#F97316" />
            <rect x="92" y="56" width="20" height="3" rx="1.5" fill="#94A3B8" />
            <rect x="92" y="62" width="22" height="3" rx="1.5" fill="#94A3B8" />
            <circle cx="104" cy="84" r="3" fill="#0284C7" />
            {/* Developer Person */}
            <circle cx="120" cy="50" r="5" fill="#F59E0B" />
            <path d="M112 68 C112 60 115 58 120 58 C125 58 128 60 128 68" fill="#F97316" />
            {/* Gold Coins */}
            <ellipse cx="40" cy="90" rx="8" ry="4" fill="#F59E0B" />
            <ellipse cx="40" cy="86" rx="8" ry="4" fill="#FBBF24" />
            <ellipse cx="50" cy="93" rx="8" ry="4" fill="#F59E0B" />
            <ellipse cx="50" cy="89" rx="8" ry="4" fill="#FBBF24" />
          </svg>
        )
      }
    },
    {
      id: 2,
      date: 'May 13, 2024',
      title: 'Guide to Choosing the Top Web Development Company in Germany',
      desc: "Germany's digital ecosystem, where innovation flourishes and organizations strive for excellence, makes web...",
      banner: {
        bgGradient: 'from-[#F0F4FA] via-[#E8EEF8] to-[#E2EAF5]',
        tagTitle: (
          <div className="text-left font-sans">
            <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Guide to Choosing</span>
            <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">the Top <span className="font-[800] text-[#F97316]">Web</span></span>
            <span className="font-[800] text-[#F97316] text-[10.5px] sm:text-[11.5px] block leading-tight">Development</span>
            <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Company in Germany</span>
          </div>
        ),
        illustration: (
          <svg viewBox="0 0 150 130" className="w-28 h-28 sm:w-32 sm:h-32 object-contain">
            {/* Code Stack Badges */}
            <rect x="42" y="24" width="28" height="12" rx="3" fill="#E06C75" />
            <text x="56" y="33" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">HTML</text>
            <rect x="88" y="22" width="28" height="12" rx="3" fill="#61AFEF" />
            <text x="102" y="31" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">JAVA</text>
            <rect x="118" y="32" width="22" height="12" rx="3" fill="#E5C07B" />
            <text x="129" y="41" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">C++</text>
            {/* Desktop Screen with Dashboard Layout */}
            <rect x="30" y="42" width="85" height="58" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="30" y="42" width="85" height="12" rx="6" fill="#005F96" />
            <circle cx="36" cy="48" r="1.5" fill="#FFFFFF" />
            <circle cx="41" cy="48" r="1.5" fill="#FFFFFF" />
            <circle cx="46" cy="48" r="1.5" fill="#FFFFFF" />
            <rect x="35" y="58" width="22" height="34" rx="2" fill="#F1F5F9" />
            <rect x="62" y="58" width="48" height="18" rx="2" fill="#E2E8F0" />
            <rect x="62" y="80" width="48" height="12" rx="2" fill="#F8FAFC" stroke="#E2E8F0" />
            {/* Developer Person */}
            <circle cx="68" cy="34" r="5" fill="#005F96" />
            <path d="M60 48 C60 42 63 40 68 40 C73 40 76 42 76 48" fill="#38BDF8" />
          </svg>
        )
      }
    },
    {
      id: 3,
      date: 'March 14, 2024',
      title: 'Key Factors to Consider When Hiring a Top Web Development Company in USA',
      desc: 'Hiring web services in USA requires careful consideration of several variables. From technical competence...',
      banner: {
        bgGradient: 'from-[#E8F6FA] via-[#E0F2F8] to-[#D5EDF6]',
        tagTitle: (
          <div className="text-left font-sans">
            <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Key Factors to</span>
            <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Consider When</span>
            <span className="font-[800] text-[#005F96] text-[10.5px] sm:text-[11.5px] block leading-tight">Hiring A Top Web</span>
            <span className="font-[800] text-[#005F96] text-[10.5px] sm:text-[11.5px] block leading-tight">Development</span>
            <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Company in USA</span>
          </div>
        ),
        illustration: (
          <svg viewBox="0 0 150 130" className="w-28 h-28 sm:w-32 sm:h-32 object-contain">
            {/* Review Cards Panel */}
            <rect x="35" y="25" width="85" height="60" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="40" y="30" width="16" height="16" rx="3" fill="#F87171" />
            <circle cx="48" cy="37" r="3" fill="white" />
            <rect x="60" y="30" width="16" height="16" rx="3" fill="#FBBF24" />
            <circle cx="68" cy="37" r="3" fill="white" />
            <rect x="80" y="30" width="16" height="16" rx="3" fill="#34D399" />
            <circle cx="88" cy="37" r="3" fill="white" />
            <rect x="100" y="30" width="16" height="16" rx="3" fill="#60A5FA" />
            <circle cx="108" cy="37" r="3" fill="white" />
            {/* Star Rating Bar */}
            <rect x="40" y="52" width="75" height="12" rx="3" fill="#FEF3C7" />
            <text x="77" y="61" fill="#D97706" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">★★★★★</text>
            <rect x="40" y="68" width="50" height="4" rx="2" fill="#CBD5E1" />
            <rect x="40" y="75" width="35" height="3" rx="1.5" fill="#E2E8F0" />
            {/* Hiring Team / Interviewers */}
            <circle cx="28" cy="74" r="5" fill="#005F96" />
            <path d="M20 90 C20 83 23 81 28 81 C33 81 36 83 36 90" fill="#EC4899" />
            <circle cx="128" cy="74" r="5" fill="#0F172A" />
            <path d="M120 90 C120 83 123 81 128 81 C133 81 136 83 136 90" fill="#005F96" />
          </svg>
        )
      }
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-[#0f172a] font-sans antialiased overflow-x-hidden">
      <SEO
        title="Used Car App Development Services | Custom Automotive Marketplace Solutions"
        description="Top-tier Used Car App Development Company. Build robust car buying, selling, auction, VIN decoding, and dealership marketplace applications."
        keywords="used car app development, car buying app, automotive marketplace software, VIN decoder app, car dealership app builder"
      />

      {/* Section 1: Hero Banner (Matching Exact Mockup 1:1) */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#f0f7fd] text-slate-900 border-b border-slate-200/60 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 font-extrabold tracking-tight"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '34px',
                  lineHeight: '42px'
                }}
              >
                Used Car App Development <br />Company
              </h1>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[22px] font-normal max-w-2xl font-sans">
                Seeking to develop a Used Car App that facilitates buying and selling cars in a hassle-free, transparent, and time-saving manner? We offer specialized custom used car marketplace app development services for businesses of every size. Whether it is a startup or a well-established company, our cost-effective and scalable app solutions enable you to connect easily with car buyers and sellers. Contact us today to book developers for Used Car buying App development and get a free quote for your next project.
              </p>

              {/* 4 Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-3 pb-2">
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">100+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    Software<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    Project Completed in<br />Software
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    5-Star Clutch<br />Reviews
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#005F96] hover:bg-[#004a75] text-white font-bold text-xs sm:text-sm rounded-[4px] shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-xl overflow-hidden flex items-center justify-center lg:justify-end">
                <img
                  src="/images/services/used-car-hero-illustration.png"
                  alt="Used Car App Development Company Illustration"
                  className="w-[145%] max-w-none -translate-x-[4%] sm:-translate-x-[6%] h-auto object-contain drop-shadow-sm select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Marquee */}
      <BrandLogoMarquee />

      {/* Section 3: A Trusted Partner For Used Car Marketplace Development */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-md flex items-center justify-center">
                <img
                  src="/images/services/used-car-trusted-partner-tight.png"
                  alt="A Trusted Partner For Used Car Marketplace Development"
                  className="w-full max-w-[360px] h-auto object-contain block drop-shadow-sm select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2
                className="text-slate-900 font-extrabold tracking-tight"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '32px',
                  lineHeight: '40px'
                }}
              >
                A Trusted Partner For Used Car <br />Marketplace Development
              </h2>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[24px] font-normal font-sans">
                Being one of the top Used Car App Development Company, we specialize in creating secure, responsive, and feature-enriched apps for car dealerships, business owners, and automobile businesses. With considerable experience in used car loan apps, second-hand car buy apps, and used car search apps, we provide each platform that we develop as scalable, secure, and customer-centric. Our Custom used car marketplace app development services cutting-edge solutions are designed with industry best practices, supported by years of experience, so that your business remains ahead of the rest.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: World Wide Top Rated IT Company on Clutch (Award Badges Marquee Banner) */}
      <section className="py-6 sm:py-8 bg-[#005F96] text-white border-y border-blue-900/30 overflow-hidden text-left font-sans select-none">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Title */}
            <div className="lg:col-span-4 shrink-0 pr-4 border-r-0 lg:border-r border-white/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-[900] text-white tracking-tight leading-tight">
                World Wide Top Rated IT Company on Clutch
              </h2>
            </div>

            {/* Right Column: Animated Scrolling Award Badges Marquee */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Track 1 Badges */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0">
                  {/* Badge 1: Golden Trophy with Laurel Wreath */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  {/* Badge 2: The Manifest - Most Reviewed Dedicated Software Development Companies */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 3: The Manifest - Most Reviewed Software Developers */}
                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 4: GoodFirms Top Dedicated Software Development Company */}
                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 5: The Manifest - Most Reviewed Dedicated Software Development Companies */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 6: Clutch Top Dedicated Software Company Hexagon */}
                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                {/* Track 2 Badges (Duplicate for Seamless Loop) */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0" aria-hidden="true">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 5: Transforming the Used Car Market with Technology (Quote Card Section) */}
      <section className="py-14 sm:py-18 bg-white font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-[900] text-slate-900 tracking-tight leading-tight">
              Transforming the Used Car Market with Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-2xl p-7 sm:p-9 relative flex flex-col justify-between min-h-[260px] border border-sky-100 shadow-sm text-left">
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Secure, Scalable & Future-Ready Apps
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We bring extensive experience in creating Used Car Buying Apps that revolutionize the way individuals purchase, sell, and finance used cars. From intelligent search filters to safe payment integrations and loan management systems, Hire Developers for Used Car App experts ensure that your app possesses all the features needed to provide an unparalleled user experience.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                With experience in international projects, our expert developers create bespoke used car apps that are scalable, secure, and responsive to your business strategy. Whether you need a used car platform app, Custom used car marketplace app development services a niche loan and financing hub, our customized solutions are built to give businesses the leverage and increase their ROI while fostering sustainable growth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 6: Cutting Edge Technologies */}
      <HybridAppCuttingEdgeTechnologiesSection />

      {/* Section 7: Premium Services Grid */}
      <div id="services-grid">
        <PremiumServicesGrid />
      </div>

      {/* Section 8: Success Stories */}
      <SuccessStoriesSection />

      {/* Section 9: Proud Awards Banner */}
      <ProudAwardsBanner />

      {/* Section 10: Benefits of Choosing Used Car App Development Company */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Benefits of Choosing Used Car App Development Company
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
              Getting partnered with us means your app is not just functional, it's a high-powered growth driver. Here are the most important advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {benefitsItems.map((benefit, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-[14px] bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.035)] hover:shadow-md transition-all duration-300 text-left flex flex-col justify-start group"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
                  {benefit.icon}
                </div>
                <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2 leading-snug tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 11: Our Used Car Loan App Development Services */}
      <HybridAppExpertiseServices
        title="Our Used Car Loan App Development Services"
        subtitle="We offer a full range of services to fulfill all business requirements. Each of our services is tailored to ensure your used car app development process is smooth and effective"
        cards={expertiseServices}
        showButton={false}
      />

      {/* 12. SECTION: Business Friendly Hiring Models (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </motion.div>

          {/* 4 White Hiring Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {hiringModels.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[18px] p-6 sm:p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-3">
                  {/* Clean Vector Icon */}
                  <div className="w-14 h-14 flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[12.8px] text-slate-600 font-[400] leading-relaxed font-sans text-center min-h-[60px]">
                    {item.desc}
                  </p>

                  {/* Bullet Points List with Blue Checkmarks */}
                  <ul className="space-y-2 pt-3 text-left font-sans text-xs sm:text-[12.8px] text-slate-700 font-[500]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0078D7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 'Hire Now' Blue Button */}
                <a
                  href="#quote-form"
                  className="w-full py-2.5 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-sm transition-all shadow-xs hover:shadow-md font-sans inline-block mt-4 text-center cursor-pointer"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Section 13: InnovativeSolutionsVideoSection */}
      <InnovativeSolutionsVideoSection />

      {/* Section 14: ProcessWeFollow */}
      <ProcessWeFollow />

      {/* Section 15: OurStoryTheirWordsSection */}
      <OurStoryTheirWordsSection />

      {/* Section 16: TrustedBrandsGrid */}
      <TrustedBrandsGrid />

      {/* Section 17: SuccessMatrix */}
      <SuccessMatrix />

      {/* Section 18: FeaturedInBrandsSection */}
      <FeaturedInBrandsSection />

      {/* Section 19: DigitalTransformationSlider */}
      <DigitalTransformationSlider />

      {/* Section 20: SapphireFaqSection */}
      <SapphireFaqSection customFaqs={faqItems} />

      {/* Section 21: Our Recent Blogs */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-white text-slate-900 text-left font-sans border-b border-slate-100">
        <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-10 sm:mb-12 space-y-2.5">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            Our Recent Blogs
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
            Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
          </p>
        </div>

        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mx-auto mb-10">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-[18px] sm:rounded-[20px] bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                {/* Top Banner Graphic */}
                <div className={`relative w-full h-48 sm:h-52 overflow-hidden bg-gradient-to-br ${blog.banner.bgGradient} p-4 flex flex-col justify-between select-none`}>
                  {/* Top Left firevy Logo */}
                  <div className="flex items-center">
                    <img
                      src="/firevy_logo_dark.png"
                      alt="Firevy"
                      className="h-5 sm:h-5.5 w-auto max-w-[110px] object-contain select-none"
                    />
                  </div>

                  {/* Tag and Illustration Layout */}
                  <div className="flex items-end justify-between gap-2 mt-auto">
                    <div className="max-w-[130px] sm:max-w-[145px] mb-1">
                      {blog.banner.tagTitle}
                    </div>
                    <div className="shrink-0 flex items-center justify-end">
                      {blog.banner.illustration}
                    </div>
                  </div>
                </div>

                {/* Bottom Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4 text-left">
                  <div className="space-y-2">
                    <span className="text-[12px] sm:text-[12.5px] font-[500] text-slate-400 block font-sans">
                      {blog.date}
                    </span>
                    <h3 className="text-[15.5px] sm:text-[16.5px] font-[800] text-[#0B0F19] leading-snug group-hover:text-[#005F96] transition-colors font-sans line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-[12.5px] sm:text-[13px] text-[#475569] font-normal leading-relaxed line-clamp-3 font-sans">
                      {blog.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center text-[12.5px] sm:text-[13px] font-[700] text-[#005F96] group-hover:underline gap-1">
                      Get more details
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered 'View All' Button */}
          <div className="text-center pt-2">
            <a
              href="/company/blog"
              className="inline-flex items-center justify-center px-9 py-2.5 rounded-[5px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-[13.5px] sm:text-[14px] transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              View All
            </a>
          </div>
        </Container>
      </section>

      {/* Section 22: Bottom Blue CTA Banner */}
      <section className="py-12 bg-[#0084D1] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight">
            Have Used Car App Development Challenge To Address ??
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
            Get access to top Used Car App development to transform your ideas into a robust application.
          </p>

          <div className="pt-3">
            <a
              href="#quote-form"
              className="inline-block bg-white hover:bg-slate-50 text-[#005F96] font-bold text-xs sm:text-sm px-8 py-2.5 rounded-[4px] shadow-sm hover:shadow-md transition-all duration-200"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsedCarAppDevelopmentService;
