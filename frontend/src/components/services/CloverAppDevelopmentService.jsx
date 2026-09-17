import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import WorkProcessGrid from '../home/WorkProcessGrid';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SectorsThrivingSection from './SectorsThrivingSection';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutKeyMetrics from '../home/AboutKeyMetrics';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import RecentBlogsSection from '../common/RecentBlogsSection';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';

export const CloverAppDevelopmentService = () => {
  // Carousel index for Cutting Edge Tech
  const techCarouselRef = useRef(null);
  const cloverExpertiseCarouselRef = useRef(null);

  // Exceptional Team State
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [activeTeamTab, setActiveTeamTab] = useState('tech');

  // Industry Insights State
  const [industryTab, setIndustryTab] = useState(0);


  const scrollTechCarousel = (direction) => {
    if (techCarouselRef.current) {
      const scrollAmount = 400;
      techCarouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollCloverExpertise = (direction) => {
    if (cloverExpertiseCarouselRef.current) {
      const scrollAmount = 380;
      cloverExpertiseCarouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Cutting Edge Tech Cards
  const techCards = [
    {
      title: 'Blockchain Development Service',
      desc: "We provide blockchain development services that will improve your company's security and transparency while giving you access to a variety of decentralized alternatives.",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 text-[#0084D1] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          <polygon points="32 6 54 18 54 46 32 58 10 46 10 18 32 6" />
          <polygon points="32 18 43 24 43 38 32 44 21 38 21 24 32 18" />
          <circle cx="32" cy="31" r="4" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'IoT Integration Development Service',
      desc: "Discover personalized IoT development services that enable intelligent data analytics and remote device administration, tailored to your business needs.",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 text-[#0084D1] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          <rect x="20" y="20" width="24" height="24" rx="4" />
          <path d="M32 10v10M32 44v10M10 32h10M44 32h10" />
          <circle cx="20" cy="10" r="3" fill="#0084D1" />
          <circle cx="44" cy="10" r="3" fill="#0084D1" />
          <circle cx="54" cy="44" r="3" fill="#0084D1" />
          <circle cx="10" cy="44" r="3" fill="#0084D1" />
          <text x="32" y="35" textAnchor="middle" fill="#0084D1" fontSize="10" fontWeight="900" fontFamily="sans-serif">IoT</text>
        </svg>
      )
    },
    {
      title: 'Cloud Application Development Service',
      desc: "We use the newest developments in cloud computing, such as creating hybrid multi-cloud solutions, transferring enterprise data to the cloud, and developing next-generation apps.",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 text-[#0084D1] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          <path d="M18 44h28a12 12 0 0 0 4-23.3A16 16 0 0 0 18 24a10 10 0 0 0 0 20z" />
          <path d="M32 30v10M26 36l6 6 6-6" />
        </svg>
      )
    },
    {
      title: 'Mobile Application Development Service',
      desc: "Develop custom iOS, Android, and cross-platform applications optimized for Clover point-of-sale hardware and high transaction speed.",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 text-[#0084D1] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          <rect x="18" y="8" width="28" height="48" rx="6" />
          <line x1="28" y1="14" x2="36" y2="14" />
          <circle cx="32" cy="48" r="2.5" fill="#0084D1" />
        </svg>
      )
    }
  ];

  // Clover Expertise Cards (Section 12)
  const cloverExpertiseCards = [
    {
      title: 'Clover App Development',
      desc: 'Our clover app developers construct suitable and user-friendly online apps using restful application programming interfaces (APIs) and cloud-based payment infrastructures. These...'
    },
    {
      title: 'Clover POS Implementation',
      desc: 'Acquire a point-of-sale (POS) solution that covers installing a payment system in your company and can handle any payments made through NFC devices. In addition, we can create POS systems that are unique to...'
    },
    {
      title: 'Clover POS Design',
      desc: 'Inviting point-of-sale (POS) designs with user-friendly functionality are created by our team. Get the custom Clover POS design you want by capitalizing on our knowledge. This will make it simpler for you...'
    },
    {
      title: 'Clover Integration',
      desc: 'We design and integrate all kinds of custom Clover POS that meet business needs with new types of payment processing, inventory webhooks, and third-party ERP integrations...'
    }
  ];

  // Client Testimonials (Section 14)
  const clientReviews = [
    {
      name: 'Julius John',
      country: 'Tanzania',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      comment: 'They were always able to deliver the results on time and ensured excellent communication throughout...',
      body: 'Sapphire Software Solutions drastically improved the client’s platform and single-handedly developed all of the planned features with great attention to detail.'
    },
    {
      name: 'Marios C.',
      country: 'Limassol, Cyprus',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      comment: 'They were always willing to make sure that we were satisfied with the final deliverables...',
      body: 'Sapphire Software Solutions’ support enabled the company to build a solution that automates their workflows. The team was prompt, skilled, and highly responsive.'
    },
    {
      name: 'Lino Barahona',
      country: 'Portugal',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      comment: 'Communication was smooth, and the deliverables were done on target time with impressive accuracy...',
      body: 'Client is happy with Sapphire Software Solutions. The team has exceeded all expectations in terms of mobile app design and Clover feature integrations.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Clover App Development Company | Custom Clover POS Solutions"
        description="Top Clover App Development Company in USA. Build custom Clover POS apps for Station, Mini, & Flex devices with custom inventory, loyalty, and payment integrations."
        canonical="/services/clover-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Clover App Development Services in USA"
        subtitle="Do you want clover app development services to optimize your work processes and fulfill the criteria of contemporary businesses, but you do not have the programming expertise to create one?"
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="clover"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* =========================================================================
          SECTION 1: GET CLOVER APP DEVELOPMENT SERVICES AT BEST PRICE (1:1 SCREENSHOT MATCH)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Side: Custom Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[480px]">
                <svg viewBox="0 0 500 380" className="w-full h-auto drop-shadow-sm select-none">
                  {/* Background Ground Line */}
                  <line x1="70" y1="280" x2="480" y2="280" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Smartphone Graphic */}
                  <rect x="75" y="165" width="95" height="185" rx="14" fill="#0F172A" stroke="#334155" strokeWidth="3" />
                  <rect x="80" y="172" width="85" height="170" rx="10" fill="#FFFFFF" />
                  {/* Notch */}
                  <rect x="110" y="176" width="25" height="4" rx="2" fill="#334155" />
                  {/* Clover App Icon on Phone */}
                  <g transform="translate(90, 205)">
                    {/* Clover Four Leaves */}
                    <circle cx="16" cy="12" r="7" fill="#0084D1" />
                    <circle cx="26" cy="12" r="7" fill="#0084D1" />
                    <circle cx="16" cy="22" r="7" fill="#0084D1" />
                    <circle cx="26" cy="22" r="7" fill="#0084D1" />
                    <text x="36" y="21" fill="#1E293B" fontSize="13" fontWeight="800" fontFamily="sans-serif">clover</text>
                  </g>
                  {/* UI Wireframe Blocks on Phone */}
                  <rect x="88" y="245" width="32" height="22" rx="4" fill="#E0F2FE" />
                  <rect x="126" y="245" width="32" height="22" rx="4" fill="#E0F2FE" />
                  <circle cx="104" cy="256" r="5" fill="#BAE6FD" />
                  <circle cx="142" cy="256" r="5" fill="#BAE6FD" />
                  <rect x="88" y="275" width="70" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="88" y="287" width="50" height="6" rx="3" fill="#E2E8F0" />

                  {/* Code Badge Float top left */}
                  <g transform="translate(132, 150)">
                    <rect x="0" y="0" width="24" height="16" rx="4" fill="#0084D1" />
                    <text x="12" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900">{`{}`}</text>
                  </g>
                  {/* Code Badge Float top right */}
                  <g transform="translate(198, 155)">
                    <rect x="0" y="0" width="28" height="16" rx="4" fill="#60A5FA" />
                    <text x="14" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900">{`</>`}</text>
                  </g>

                  {/* Desktop Workstation & Developer */}
                  {/* Desk Screen Window */}
                  <rect x="140" y="165" width="82" height="42" rx="3" fill="#60A5FA" />
                  <rect x="144" y="170" width="74" height="4" rx="2" fill="#FFFFFF" opacity="0.8" />
                  <rect x="144" y="178" width="60" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />
                  <rect x="144" y="184" width="68" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />
                  <rect x="144" y="190" width="40" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />

                  {/* Desk Table */}
                  <rect x="132" y="235" width="78" height="6" rx="2" fill="#334155" />
                  <line x1="140" y1="241" x2="140" y2="280" stroke="#334155" strokeWidth="4" />
                  <line x1="204" y1="241" x2="204" y2="280" stroke="#334155" strokeWidth="4" />

                  {/* Laptop on desk */}
                  <polygon points="144,235 166,210 186,210 162,235" fill="#475569" />
                  <rect x="143" y="232" width="24" height="3" rx="1" fill="#94A3B8" />

                  {/* Developer Sitting at Desk */}
                  {/* Chair */}
                  <line x1="212" y1="230" x2="212" y2="280" stroke="#0084D1" strokeWidth="4" />
                  <rect x="206" y="210" width="8" height="30" rx="3" fill="#0084D1" />
                  <rect x="195" y="235" width="22" height="6" rx="2" fill="#0084D1" />

                  {/* Developer Figure */}
                  {/* Head & Hair */}
                  <circle cx="190" cy="182" r="10" fill="#0F172A" />
                  <circle cx="188" cy="185" r="9" fill="#FED7AA" />
                  <path d="M180 182 Q188 172 196 182" fill="#0F172A" />
                  {/* Body / Blue Shirt */}
                  <path d="M178 196 C178 196 182 192 192 192 C202 192 208 196 208 225 L180 225 Z" fill="#0084D1" />
                  {/* Arm reaching laptop */}
                  <path d="M192 200 L166 218" stroke="#FED7AA" strokeWidth="4" strokeLinecap="round" />
                  {/* Pants / Dark Legs */}
                  <path d="M182 225 L150 270 L165 272 L192 235 Z" fill="#0F172A" />
                  {/* Shoes */}
                  <path d="M148 268 Q138 274 154 274 Z" fill="#0084D1" />

                  {/* Plant Pot right */}
                  <path d="M216 280 L220 255 L232 255 L236 280 Z" fill="#334155" />
                  <path d="M212 255 Q205 235 226 230 Q230 240 226 255 Z" fill="#0284C7" />
                  <path d="M226 255 Q242 235 236 226 Q228 238 226 255 Z" fill="#38BDF8" />
                </svg>
              </div>
            </div>

            {/* Right Side: Heading & Detailed Description */}
            <div className="lg:col-span-7 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5 font-sans">
                Get Clover App Development Services At Best Price
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Our team has direct knowledge of creating clover apps using a proprietary approach. The{' '}
                  <span className="font-bold text-[#005F96] hover:underline cursor-pointer">
                    custom mobile app development company in USA
                  </span>{' '}
                  guarantee a rise in your company's overall efficiency and have the potential to function with any clover-based device. In addition, we ensure that our applications are adaptable enough to interface with various hardware devices while maintaining high performance.
                </p>
                <p>
                  In addition, we have an extensive understanding Best Clover app developer for small business solutions and integration of Clover POS app development services. Hire Clover App Developers for POS system will work with you to develop the most effective clover application strategy for your next major endeavor. Get in touch with Best Clover App Development Company right away for more profits and a rise in the number of satisfied customers.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: BRIEF ABOUT CLOVER APP DEVELOPMENT SERVICES (1:1 SCREENSHOT MATCH)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-t border-slate-100 text-slate-900 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Side: Title & Paragraphs */}
            <div className="lg:col-span-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5 font-sans">
                Brief About Clover App Development Services
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Hire developers for Clover POS integrations to stay one step ahead of the curve by providing individualized, tailored solutions for the challenges faced by modern businesses. Dedicated teams are knowledgeable in cutting-edge technologies and have significant experience in creating Clover and POS systems.
                </p>
                <p>
                  Our simplified and agile engagements aassist in fitting your objectives, timeframe, and budget while keeping you informed of our progress.
                </p>
              </div>
            </div>

            {/* Right Side: Vector Graphic Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <svg viewBox="0 0 520 380" className="w-full h-auto drop-shadow-sm select-none">
                  {/* Ground Line */}
                  <line x1="60" y1="290" x2="460" y2="290" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Left Female Developer Standing */}
                  <g transform="translate(65, 140)">
                    {/* Head & Hair */}
                    <circle cx="25" cy="20" r="11" fill="#0084D1" />
                    <circle cx="25" cy="22" r="9" fill="#FED7AA" />
                    <path d="M14 20 Q25 8 36 20 Z" fill="#0084D1" />
                    {/* Body / Overalls */}
                    <path d="M12 42 C12 42 16 38 25 38 C34 38 38 42 38 105 L12 105 Z" fill="#1E293B" />
                    <rect x="18" y="38" width="14" height="22" fill="#60A5FA" />
                    {/* Arm holding clover badge */}
                    <path d="M30 46 L55 52" stroke="#FED7AA" strokeWidth="4" strokeLinecap="round" />
                    {/* Blue Clover Badge in hand */}
                    <rect x="52" y="44" width="22" height="22" rx="5" fill="#0084D1" />
                    {/* Clover icon inside badge */}
                    <circle cx="60" cy="52" r="3" fill="#FFFFFF" />
                    <circle cx="66" cy="52" r="3" fill="#FFFFFF" />
                    <circle cx="60" cy="58" r="3" fill="#FFFFFF" />
                    <circle cx="66" cy="58" r="3" fill="#FFFFFF" />
                    {/* Legs & Shoes */}
                    <line x1="18" y1="105" x2="18" y2="148" stroke="#1E293B" strokeWidth="7" />
                    <line x1="32" y1="105" x2="32" y2="148" stroke="#1E293B" strokeWidth="7" />
                    <path d="M12 148 H24 V152 H12 Z" fill="#0084D1" />
                    <path d="M26 148 H38 V152 H26 Z" fill="#0084D1" />
                  </g>

                  {/* Center Smartphone Graphic */}
                  <g transform="translate(190, 115)">
                    <rect x="0" y="0" width="115" height="220" rx="16" fill="#1E293B" stroke="#475569" strokeWidth="3" />
                    <rect x="6" y="8" width="103" height="204" rx="12" fill="#FFFFFF" />
                    {/* Phone Top Speaker */}
                    <rect x="42" y="12" width="30" height="4" rx="2" fill="#64748B" />

                    {/* App Grid UI Icons */}
                    {/* Item 1: Phone call icon */}
                    <rect x="14" y="26" width="38" height="32" rx="6" fill="#0084D1" />
                    <circle cx="22" cy="34" r="3" fill="#FFFFFF" />
                    <text x="36" y="34" fill="#FFFFFF" fontSize="8" fontWeight="800">3</text>
                    <path d="M20 44 Q28 50 36 44" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />

                    {/* Item 2: Globe icon */}
                    <rect x="58" y="26" width="38" height="32" rx="6" fill="#0084D1" />
                    <circle cx="77" cy="42" r="8" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
                    <line x1="69" y1="42" x2="85" y2="42" stroke="#FFFFFF" strokeWidth="1" />

                    {/* Item 3: Clock/Dashboard icon */}
                    <rect x="14" y="66" width="38" height="32" rx="6" fill="#E0F2FE" />
                    <circle cx="33" cy="82" r="7" fill="none" stroke="#0084D1" strokeWidth="1.5" />
                    <polyline points="33,78 33,82 36,82" stroke="#0084D1" strokeWidth="1.5" fill="none" />

                    {/* Item 4: Chart icon */}
                    <rect x="58" y="66" width="38" height="32" rx="6" fill="#E0F2FE" />
                    <line x1="68" y1="88" x2="68" y2="80" stroke="#0084D1" strokeWidth="2" />
                    <line x1="77" y1="88" x2="77" y2="74" stroke="#0084D1" strokeWidth="2" />
                    <line x1="86" y1="88" x2="86" y2="78" stroke="#0084D1" strokeWidth="2" />

                    {/* Item 5: Mail icon */}
                    <rect x="14" y="106" width="38" height="32" rx="6" fill="#E0F2FE" />
                    <rect x="22" y="116" width="22" height="14" rx="2" fill="none" stroke="#0084D1" strokeWidth="1.5" />
                    <polyline points="22,116 33,124 44,116" stroke="#0084D1" strokeWidth="1.5" fill="none" />

                    {/* Item 6: Floating Star Badge */}
                    <g transform="translate(58, 106)">
                      <rect x="0" y="0" width="38" height="32" rx="6" fill="#0084D1" />
                      <polygon points="19,8 21,14 27,14 22,18 24,24 19,20 14,24 16,18 11,14 17,14" fill="#FFFFFF" />
                    </g>

                    {/* Dots pagination */}
                    <circle cx="48" cy="190" r="2" fill="#64748B" />
                    <circle cx="58" cy="190" r="2" fill="#0084D1" />
                    <circle cx="68" cy="190" r="2" fill="#64748B" />
                  </g>

                  {/* Right Male Developer Standing */}
                  <g transform="translate(325, 135)">
                    {/* Head & Hair */}
                    <circle cx="25" cy="20" r="10" fill="#1E293B" />
                    <circle cx="25" cy="22" r="9" fill="#FED7AA" />
                    <path d="M16 16 Q25 8 34 16 Z" fill="#1E293B" />
                    {/* Yellow Sweater */}
                    <path d="M10 42 C10 42 16 36 25 36 C34 36 40 42 40 100 L10 100 Z" fill="#F59E0B" />
                    {/* Arms crossed holding phone */}
                    <path d="M12 48 L28 65 L40 55" stroke="#FED7AA" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <rect x="28" y="58" width="10" height="18" rx="2" fill="#1E293B" />
                    {/* Dark Blue Pants */}
                    <line x1="16" y1="100" x2="16" y2="152" stroke="#1E293B" strokeWidth="8" />
                    <line x1="34" y1="100" x2="34" y2="152" stroke="#1E293B" strokeWidth="8" />
                    {/* Shoes */}
                    <path d="M10 152 H22 V156 H10 Z" fill="#0084D1" />
                    <path d="M28 152 H40 V156 H28 Z" fill="#0084D1" />
                  </g>

                  {/* Plant pots at sides */}
                  <path d="M30 290 L34 265 L44 265 L48 290 Z" fill="#334155" />
                  <path d="M25 265 Q20 240 38 235 Q45 250 39 265 Z" fill="#0084D1" />
                  <path d="M39 265 Q52 245 46 235 Q38 248 39 265 Z" fill="#38BDF8" />

                  <path d="M420 290 L424 265 L434 265 L438 290 Z" fill="#334155" />
                  <path d="M415 265 Q410 240 428 235 Q435 250 429 265 Z" fill="#0084D1" />
                  <path d="M429 265 Q442 245 436 235 Q428 248 429 265 Z" fill="#38BDF8" />
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3: WORLD WIDE TOP RATED IT COMPANY ON CLUTCH (1:1 SCREENSHOT MATCH)
          ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* =========================================================================
          SECTION 4: GET 100% CUSTOMIZABLE CLOVER APP DEVELOPMENT SERVICES BY EXPERTS (1:1 SCREENSHOT MATCH)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
              Get 100% Customizable Clover App Development Services By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Side Box: Quote Card */}
            <div className="lg:col-span-5 flex">
              <div className="w-full bg-[#EBF7FC] rounded-2xl p-8 sm:p-10 flex flex-col justify-center text-left relative overflow-hidden border border-[#D0ECF7]">
                {/* Large Decorative Quote Icon */}
                <div className="text-[#0084D1] text-6xl sm:text-7xl font-serif font-bold leading-none mb-4 opacity-90 select-none">
                  “
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-sans">
                  Reliable And Trustworthy Clover Applications
                </h3>
              </div>
            </div>

            {/* Right Side: Detailed Narrative Paragraphs */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  We have a clover app development team who are well-versed in developing bespoke Clover apps and have in-depth knowledge about the Clover platform and point of sale, inventory management, and order management. Recognized as a Top Clover App Development Agency near me, our team ensures the Clover app has an excellent, user-friendly user interface and is adaptable to many mobile platforms and other devices. Hire Clover App Developer in Canada with a solid understanding of contemporary technology and Clover ecosystems to develop bespoke applications.
                </p>
                <p>
                  Get 100% Customizable Clover App Development Services By Experts. Our Clover applications can run on any device and may be integrated with various hardware devices. Furthermore, they provide exceptional scalability and performance. As an Affordable Clover App Development Company, we offer the option to hire a Clover Developer from a{' '}
                  <span className="font-bold text-[#005F96] hover:underline cursor-pointer">
                    top mobile app development company in the USA
                  </span>{' '}
                  that specializes in developing POS systems that are interoperable, expandable, and packed with features. Hire Clover App Developer in Australia for any Clover integration, including ERP, Shopify, a bespoke project, integration with QuickBooks, and so on.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5: CUTTING EDGE TECHNOLOGIES SAPPHIRE USE FOR CLOVER APP DEVELOPMENT (1:1 SCREENSHOT MATCH)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-100 text-slate-900 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
              Cutting Edge Technologies Sapphire Use For Clover App Development
            </h2>
          </div>

          {/* Cards Carousel */}
          <div className="relative">
            <div
              ref={techCarouselRef}
              className="flex space-x-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-2"
            >
              {techCards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 rounded-2xl bg-[#DDF1FC] p-7 sm:p-8 flex flex-col text-left transition-all duration-300 hover:shadow-md border border-[#CCE8F8]"
                >
                  <div className="mb-6">
                    {card.icon}
                  </div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] mb-3 leading-snug font-sans">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <button
                onClick={() => scrollTechCarousel('prev')}
                aria-label="Previous Slide"
                className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] transition-colors text-2xl font-bold cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={() => scrollTechCarousel('next')}
                aria-label="Next Slide"
                className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] transition-colors text-2xl font-bold cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: OUR PREMIUM SERVICES (1:1 SCREENSHOT MATCH)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          SECTION 7: MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (1:1 SCREENSHOT MATCH)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-sans">
              Meet Sapphire’s Exceptional Team of Seasoned Experts
            </h2>
          </div>

          {/* Top Category Filter Pills Bar */}
          <div className="flex justify-center mb-10">
            <div className="bg-[#D9EFF9] rounded-full p-1.5 inline-flex flex-wrap items-center justify-center gap-1.5 shadow-xs">
              {[
                'Trending',
                'Product Development',
                'Saas',
                'AI/ML',
                'Data Engineering',
                'Design',
                'Marketing',
                'IoT App Dev',
                'Blockchain Dev'
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => setExpertActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${expertActiveCategory === category
                      ? 'bg-[#005F96] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#005F96] hover:bg-white/50'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Team Cards Grid (3 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                id: 0,
                title: 'Mobile Application Team',
                techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                team: ['Tech Lead (1)', 'Sr. Android Dev (2)', 'Sr. iOS Dev (2)', 'Flutter Dev (2)', 'QA Engineer (1)']
              },
              {
                id: 1,
                title: 'SaaS Product Dev. Team',
                techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
                team: ['Solution Architect (1)', 'Full Stack Lead (2)', 'Cloud DevOps (1)', 'Frontend Specialist (2)', 'Product QA (1)']
              },
              {
                id: 2,
                title: 'Microsoft Dev. Team',
                techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                team: ['.NET Architect (1)', 'SharePoint Lead (2)', 'Power Platform Eng (2)', 'Azure Cloud Eng (1)', 'BI Analyst (1)']
              }
            ].map((card) => (
              <div
                key={card.id}
                className="bg-[#EBF7FC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#D0ECF7] hover:shadow-md transition-all text-left"
              >
                <div>
                  {/* Card Cover Illustration / Graphic Header */}
                  <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#005F96] to-[#0284C7] p-4 flex items-center justify-center text-white mb-5 overflow-hidden relative shadow-xs">
                    {card.id === 0 && (
                      <div className="text-center">
                        <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto drop-shadow-md">
                          <rect x="25" y="10" width="50" height="80" rx="8" fill="#1E293B" stroke="#60A5FA" strokeWidth="2.5" />
                          <rect x="30" y="16" width="40" height="60" rx="4" fill="#38BDF8" />
                          <circle cx="50" cy="83" r="3" fill="#FFFFFF" />
                          <path d="M40 40 L60 40 M40 50 L55 50" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </div>
                    )}
                    {card.id === 1 && (
                      <div className="text-center">
                        <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto drop-shadow-md">
                          <rect x="15" y="20" width="70" height="55" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                          <rect x="15" y="20" width="70" height="12" fill="#1E293B" />
                          <circle cx="22" cy="26" r="2" fill="#EF4444" />
                          <circle cx="28" cy="26" r="2" fill="#F59E0B" />
                          <circle cx="34" cy="26" r="2" fill="#10B981" />
                          <text x="22" y="48" fill="#38BDF8" fontSize="9" fontWeight="900" fontFamily="monospace">{`const app = () =>`}</text>
                          <text x="22" y="60" fill="#F43F5E" fontSize="9" fontWeight="900" fontFamily="monospace">{`return <SaaS />`}</text>
                        </svg>
                      </div>
                    )}
                    {card.id === 2 && (
                      <div className="text-center">
                        <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto drop-shadow-md">
                          <rect x="20" y="20" width="28" height="28" fill="#F25022" />
                          <rect x="52" y="20" width="28" height="28" fill="#7FBA00" />
                          <rect x="20" y="52" width="28" height="28" fill="#00A4EF" />
                          <rect x="52" y="52" width="28" height="28" fill="#FFB900" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className="font-extrabold text-xl text-[#0F172A] mb-4 font-sans">
                    {card.title}
                  </h3>

                  {/* Sub-tabs: Technologies / Team Composition */}
                  <div className="flex bg-white rounded-lg p-1 mb-4 border border-[#CCE8F8]">
                    <button
                      onClick={() => setActiveTeamTab('tech')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${activeTeamTab === 'tech'
                          ? 'bg-[#005F96] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Technologies
                    </button>
                    <button
                      onClick={() => setActiveTeamTab('team')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${activeTeamTab === 'team'
                          ? 'bg-[#005F96] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Team Composition
                    </button>
                  </div>

                  {/* Dynamic Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 min-h-[76px]">
                    {(activeTeamTab === 'tech' ? card.techs : card.team).map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-slate-700 font-semibold text-xs px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Get Details Button */}
                <div>
                  <button className="inline-flex items-center space-x-2 bg-[#005F96] hover:bg-[#004B77] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer">
                    <span>Get Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8: SAPPHIRE'S COMPREHENSIVE SUITE OF MOBILE APP DEVELOPMENT SERVICES
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              Sapphire’s Comprehensive Suite of Mobile App Development Services
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              Sapphire developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Sapphire provides full-service mobile app development customized to meet your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Mobile App UI/UX Design',
                desc: 'By considering market trends and creating best practices that provide an enhanced app user experience, we can help you create a unique, sophisticated, and user-friendly mobile app user interface.'
              },
              {
                title: 'MVP Development',
                desc: 'By creating an MVP with the necessary functionality, we increase your trust in the app idea. This enables you to swiftly release a test app onto the market and attract early users before moving on to complete app development.'
              },
              {
                title: 'Custom App Development',
                desc: "Whether you're developing a mobile app for a business or a community, we can help you realize your unique idea by incorporating cutting-edge features that will make it stand out from the crowd."
              },
              {
                title: 'Startup App Development',
                desc: 'Our world-class app development solutions will help your startup take off by helping startups get the best app solution possible with the use of leading app development frameworks.'
              },
              {
                title: 'Enterprise App Development',
                desc: 'Enhance your business operations through mobility by integrating third-party integrations and industry-leading technologies into your mobile app solutions to increase revenue and business operations.'
              },
              {
                title: 'Embedded IoT App Development',
                desc: 'To control and fully exploit your IoT-enabled environment, get a highly customized embedded software solution built with cloud and AI/ML technology.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white text-slate-900 rounded-2xl p-7 flex flex-col justify-start text-left shadow-md hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] mb-3 leading-snug font-sans">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9: SUCCESS STORIES
          ========================================================================= */}
      <SuccessStoriesSection />

      {/* =========================================================================
          SECTION 10: SECTORS THRIVING THROUGH SAPPHIRE'S BESPOKE MOBILE APP DEVELOPMENT SERVICES
          ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Sapphire’s Bespoke Mobile App Development Services" />

      {/* =========================================================================
          SECTION 11: INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white text-slate-900 font-sans border-t border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-sans">
              Industry-Focused Insights To Elevate Your Business
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Trending Industries that Use Mobile App Development
            </p>
          </div>

          {/* Industry Category Tabs */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="bg-[#EBF4FA] p-3.5 rounded-2xl border border-blue-100 shadow-2xs flex flex-col gap-2.5 items-center">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'Automotive',
                  'Ecommerce',
                  'Education',
                  'Entertainment',
                  'Finance',
                  'Food and Beverage',
                  'Healthcare'
                ].map((name, idx) => (
                  <button
                    key={idx}
                    onClick={() => setIndustryTab(idx)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${industryTab === idx
                        ? 'bg-[#005F96] text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:text-[#005F96] hover:bg-slate-50 border border-slate-200/50'
                      }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'Information Technology',
                  'Logistics',
                  'Travel & Tourism',
                  'Utility Services'
                ].map((name, row2Idx) => {
                  const actualIdx = row2Idx + 7;
                  return (
                    <button
                      key={actualIdx}
                      onClick={() => setIndustryTab(actualIdx)}
                      className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${industryTab === actualIdx
                          ? 'bg-[#005F96] text-white shadow-xs'
                          : 'bg-white text-slate-700 hover:text-[#005F96] hover:bg-slate-50 border border-slate-200/50'
                        }`}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Industry Portfolio Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10">
            {[
              {
                title: 'Vehicle Data Logging Software',
                bg: 'bg-[#1E293B]',
                renderGraphic: (
                  <div className="w-full h-full bg-[#0F172A] p-4 flex flex-col justify-between text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                      <span className="text-sky-400 font-bold">VEHICLE-DATA-LOGGING</span>
                      <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[9px]">LIVE OBD-II</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 my-2">
                      <div className="bg-rose-500/20 p-2 rounded border border-rose-500/30">
                        <div className="text-slate-400 text-[8px]">ENGINE TEMP</div>
                        <div className="text-rose-400 font-bold text-sm">98 °C</div>
                      </div>
                      <div className="bg-amber-500/20 p-2 rounded border border-amber-500/30">
                        <div className="text-slate-400 text-[8px]">RPM SPEED</div>
                        <div className="text-amber-400 font-bold text-sm">3400</div>
                      </div>
                    </div>
                    <div className="bg-slate-800 p-2 rounded text-slate-300 text-[9px] truncate">
                      GPS: 37.7749° N, 122.4194° W
                    </div>
                  </div>
                )
              },
              {
                title: 'Car Wash App Development',
                bg: 'bg-[#FEF3C7]',
                renderGraphic: (
                  <div className="w-full h-full bg-[#FFFBEB] p-4 flex items-center justify-center relative overflow-hidden">
                    <div className="w-36 h-48 bg-white rounded-xl shadow-lg border border-amber-200 p-3 flex flex-col justify-between text-left font-sans">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">🚗</div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-800">BeeCar Care</div>
                          <div className="text-[8px] text-amber-600">Car Wash App</div>
                        </div>
                      </div>
                      <div className="w-full h-20 bg-amber-100 rounded-lg flex items-center justify-center text-3xl">
                        🚘
                      </div>
                      <div className="w-full bg-amber-500 text-white text-[9px] font-bold py-1.5 rounded text-center">
                        Book Service
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: 'Taxi Booking-App Development',
                bg: 'bg-[#F0F9FF]',
                renderGraphic: (
                  <div className="w-full h-full bg-[#E0F2FE] p-4 flex items-center justify-center relative">
                    <div className="w-36 h-48 bg-white rounded-xl shadow-lg border border-sky-200 p-3 flex flex-col justify-between text-left font-sans">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-[#005F96] text-white flex items-center justify-center font-bold text-[10px]">🚖</div>
                        <div>
                          <div className="text-[9px] font-bold text-slate-800">Quick Taxi</div>
                          <div className="text-[7.5px] text-sky-600">Booking Application</div>
                        </div>
                      </div>
                      <div className="w-full h-20 bg-sky-50 rounded-lg border border-sky-100 p-1 relative">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                          <path d="M10 50 Q50 10 90 40" fill="none" stroke="#005F96" strokeWidth="2.5" strokeDasharray="3,3" />
                          <circle cx="10" cy="50" r="4" fill="#10B981" />
                          <circle cx="90" cy="40" r="4" fill="#EF4444" />
                        </svg>
                      </div>
                      <div className="w-full bg-[#005F96] text-white text-[9px] font-bold py-1.5 rounded text-center">
                        Confirm Ride
                      </div>
                    </div>
                  </div>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className="w-full h-[230px] rounded-2xl overflow-hidden shadow-xs border border-slate-200 group-hover:shadow-md transition-all duration-300">
                  {item.renderGraphic}
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-[#0F172A] mt-3.5 text-center group-hover:text-[#005F96] transition-colors font-sans">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="bg-[#005F96] hover:bg-[#004B77] text-white text-xs sm:text-sm font-bold rounded-lg px-8 py-3 inline-block transition-colors shadow-xs"
            >
              View All Portfolio
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 12: THE EXPERTISE IN OUR CLOVER APP DEVELOPMENT
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-slate-50/70 text-slate-900 font-sans border-t border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-sans">
              The Expertise In Our Clover App Development
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              We have year long expertise in delivering clover development services. Our expertise include:
            </p>
          </div>

          {/* Cards Carousel */}
          <div className="relative">
            <div
              ref={cloverExpertiseCarouselRef}
              className="flex space-x-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-2"
            >
              {cloverExpertiseCards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[360px] lg:w-[380px] shrink-0 rounded-2xl bg-[#EBF7FC] p-7 sm:p-8 flex flex-col justify-between text-left border border-[#D0ECF7] transition-all duration-300 hover:shadow-md"
                >
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] mb-3.5 leading-snug font-sans">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {card.desc}
                    </p>
                  </div>
                  <div>
                    <button className="bg-[#005F96] hover:bg-[#004B77] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer inline-block">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <button
                onClick={() => scrollCloverExpertise('prev')}
                aria-label="Previous Slide"
                className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] transition-colors text-2xl font-bold cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={() => scrollCloverExpertise('next')}
                aria-label="Next Slide"
                className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] transition-colors text-2xl font-bold cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 13: BUSINESS FRIENDLY HIRING MODELS : BUILDING GREATER FUTURES THROUGH INNOVATION (NEW - SCREENSHOT 1)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white text-slate-900 font-sans border-t border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-sans">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: 'Fixed Price',
                icon: (
                  <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#9333EA] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
                    <path d="M24 6 C16 6 12 12 12 20 C12 28 16 34 24 40 C32 34 36 28 36 20 C36 12 32 6 24 6 Z" />
                    <text x="24" y="26" textAnchor="middle" fill="#9333EA" fontSize="16" fontWeight="900" fontFamily="sans-serif">$</text>
                  </svg>
                ),
                desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
                bullets: ['Optimal flexibility', 'Agile team', 'Small projects', 'Complete control over budget']
              },
              {
                title: 'Time Material',
                icon: (
                  <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#22C55E] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
                    <circle cx="24" cy="26" r="14" />
                    <polyline points="24,18 24,26 30,26" />
                    <path d="M18 6 L30 6 M24 6 L24 12" />
                  </svg>
                ),
                desc: "If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
                bullets: ['No hidden costs', 'Working based hours', 'Monthly billing', 'Pay only for measurable work']
              },
              {
                title: 'Dedicated Team',
                icon: (
                  <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#F97316] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
                    <circle cx="24" cy="16" r="6" />
                    <path d="M14 36 C14 28 18 26 24 26 C30 26 34 28 34 36" />
                    <circle cx="12" cy="18" r="4" />
                    <circle cx="36" cy="18" r="4" />
                  </svg>
                ),
                desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
                bullets: ['No hidden costs', '160 hours of assured work', 'Monthly billing', 'Pay only for measurable work']
              },
              {
                title: 'Buckets Approach',
                icon: (
                  <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0284C7] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
                    <circle cx="18" cy="18" r="8" />
                    <circle cx="30" cy="30" r="8" />
                    <path d="M24 14 L34 24" />
                  </svg>
                ),
                desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
                bullets: ['Direct Resource Monitoring', 'Less Risk', 'Less budget', 'Pay only for measurable work']
              }
            ].map((model, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 flex flex-col justify-between text-left border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="mb-5 flex justify-center">
                    {model.icon}
                  </div>
                  <h3 className="font-extrabold text-xl text-[#0F172A] mb-3.5 text-center font-sans">
                    {model.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {model.desc}
                  </p>
                  <div className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700 font-semibold">
                    {model.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center space-x-2">
                        <span className="text-[#005F96] font-bold">✓</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <button className="w-full bg-[#005F96] hover:bg-[#004B77] text-white text-xs font-bold py-3 rounded-lg transition-colors cursor-pointer text-center">
                    Hire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 14: WHAT OUR CLIENTS SAY (HOME PAGE COMPONENT)
          ========================================================================= */}
      <ClientReviewsDarkSection />

      {/* =========================================================================
          SECTION 15: PROCESS WE FOLLOW (NEW - SCREENSHOT 2 BOTTOM)
          ========================================================================= */}
      <WorkProcessGrid />

      {/* =========================================================================
          SECTION 16: PROUD TO HAVE PICKED THESE UP ALONG THE WAY (HOME PAGE COMPONENT)
          ========================================================================= */}
      <TrustRecognitionBanner />

      {/* =========================================================================
          SECTION 17: TECHNOLOGY STACK THAT SAPPHIRE MOBILE DEVELOPERS USE PROFICIENTLY (NEW - SCREENSHOT 3)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white text-slate-900 font-sans border-t border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-sans">
              Technology Stack That Sapphire Mobile Developers Use Proficiently
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-3.5 mb-10">
            {[
              {
                category: 'iOS',
                skills: ['Swift', 'Objective-C', 'X-Code', 'SwiftUI']
              },
              {
                category: 'Android',
                skills: ['Java', 'Kotlin', 'Android Studio', 'Version control tools (Git, GitLab, Bit Bucket)']
              },
              {
                category: 'Cross Platform',
                skills: ['Flutter', 'React Native', 'Ionic', 'NativeScript']
              },
              {
                category: 'Database',
                skills: ['Firebase', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'SQLite']
              },
              {
                category: 'Design Tool',
                skills: ['Figma', 'Sketch', 'Adobe XD', 'Zeplin', 'Photoshop', 'Illustrator', 'After Effects', 'InVision']
              }
            ].map((row, idx) => (
              <div
                key={idx}
                className="bg-[#EAF3F9] rounded-xl p-2.5 border border-[#D5E6F2] flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-3 shadow-2xs"
              >
                <div className="bg-[#005F96] text-white font-bold text-sm sm:text-base px-5 py-2.5 rounded-lg md:w-[220px] shrink-0 text-center flex items-center justify-center">
                  {row.category}
                </div>

                <div className="flex flex-wrap gap-2 flex-1 p-0.5 items-center">
                  {row.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="bg-white text-slate-800 font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-md shadow-2xs border border-slate-100 hover:border-[#005F96] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#005F96] hover:bg-[#004B77] text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-lg transition-colors cursor-pointer">
              Share Your Requirement
            </button>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 18: DIGITAL TRANSFORMATION THROUGH INNOVATION (NEW - SCREENSHOT 4)
          ========================================================================= */}
      <DigitalTransformationSlider />

      {/* =========================================================================
          SECTION 19: TRUSTED BY THE WORLD'S LEADING BRANDS
          ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SECTION 20: EXPLORE THE TRANSFORMATIVE IMPACT OF MOBILE APP (NEW - SCREENSHOT 1)
          ========================================================================= */}
      <TransformativeImpactSection />

      {/* =========================================================================
          SECTION 21: ABOUT US & KEY METRICS (NEW - SCREENSHOT 2 TOP)
          ========================================================================= */}
      <AboutKeyMetrics />

      {/* =========================================================================
          SECTION 22: WE HAVE BEEN FEATURED IN (NEW - SCREENSHOT 2 BOTTOM)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          SECTION 23: SUCCESS MATRIX (NEW - SCREENSHOT 3)
          ========================================================================= */}
      <SuccessMatrix />

      {/* =========================================================================
          SECTION 24: UNVEILING OUR INNOVATIVE SOLUTION (NEW - SCREENSHOT 4 TOP)
          ========================================================================= */}
      <InnovativeSolutionVideo />

      {/* =========================================================================
          SECTION 25: OUR STORY, THEIR WORDS - VIDEO TESTIMONIALS
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          SECTION 26: FREQUENTLY ASKED QUESTIONS (NEW - SCREENSHOT 1)
          ========================================================================= */}
      <SapphireFaqSection
        faqList={[
          {
            id: 1,
            question: '1. What is Clover app development, and how can it help my business?',
            answer: 'Clover app development involves creating custom apps that integrate with Clover POS systems to streamline business operations, improve customer experience, and increase efficiency.'
          },
          {
            id: 2,
            question: '2. Why should I choose Sapphire Solutions for Clover app development services?',
            answer: 'Sapphire Solutions brings 23+ years of software experience, 320+ 5-star Clutch reviews, expert Clover POS Android SDK developers, and 100% compliant App Market deployment.'
          },
          {
            id: 3,
            question: '3. Can Clover POS apps be customized for my industry?',
            answer: 'Yes! We build bespoke Clover applications tailored for restaurants, retail stores, service businesses, hospitality, and custom enterprise workflows.'
          },
          {
            id: 4,
            question: '4. How much does it cost to develop a Clover POS app?',
            answer: 'The cost depends on app complexity, hardware target (Station, Mini, Flex), custom payment gateway integrations, and third-party webhooks.'
          },
          {
            id: 5,
            question: '5. Do you provide Clover app integration with third-party tools?',
            answer: 'Yes, we seamlessly integrate Clover POS with ERP systems, QuickBooks, Shopify e-commerce, CRM platforms, and custom backend APIs.'
          },
          {
            id: 6,
            question: '6. How long does it take to develop a Clover app?',
            answer: 'A standard custom Clover POS application takes between 4 to 8 weeks including sandbox testing and security compliance verification.'
          },
          {
            id: 7,
            question: '7. Can you help upgrade or maintain my existing Clover app?',
            answer: 'Yes, we provide post-launch maintenance, Clover OS compatibility upgrades, feature enhancements, and 24/7 technical support.'
          }
        ]}
      />

      {/* =========================================================================
          SECTION 27: WHAT SETS US APART AS CLOVER DEVELOPMENT? (NEW - SCREENSHOT 2)
          ========================================================================= */}
      <WhatSetsUsApartSection title="What Sets Us Apart As Clover Development?" />

      {/* =========================================================================
          SECTION 28: OUR RECENT BLOGS (NEW - SCREENSHOT 3)
          ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          SECTION 29: HAVE CLOVER APP CHALLENGE TO ADDRESS ? (NEW - SCREENSHOT 4 TOP)
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-[#005F96] text-white font-sans text-center">
        <Container>
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              Have Clover App Challenge To Address ?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Get access to top Clover Development to transform your ideas into a robust application.
            </p>
            <div className="pt-4">
              <Link
                to="#quote-form"
                className="bg-white hover:bg-slate-100 text-[#005F96] font-extrabold text-sm px-8 py-3.5 rounded-lg transition-all shadow-md inline-block"
              >
                Hire Now
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 30: NEWSLETTER SUBSCRIBE BANNER (NEW - SCREENSHOT 4 BOTTOM)
          ========================================================================= */}
      <NewsletterSubscribeBanner />

    </div>
  );
};

export default CloverAppDevelopmentService;
