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
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import HybridAppCuttingEdgeTechnologiesSection from './HybridAppCuttingEdgeTechnologiesSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import HybridAppExpertiseServices from './HybridAppExpertiseServices';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';

export const CreditCardAppDevelopmentService = () => {
  // 6 Benefits of Credit Card App Development Solutions
  const benefitsItems = [
    {
      title: 'Custom Credit Card App Development',
      desc: 'Customized apps with secure elements such as payments, billing, and transaction monitoring for businesses and banks.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      title: 'Credit Card Payment App Development',
      desc: 'Payments-enabled apps to manage credit card app payments with seamless integration of multiple payment gateways.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <circle cx="6" cy="14" r="1" />
          <circle cx="10" cy="14" r="1" />
          <rect x="14" y="13" width="4" height="2" rx="0.5" />
        </svg>
      )
    },
    {
      title: 'Fraud Detection & Security Solutions',
      desc: 'Robust encryption and AI-driven fraud monitoring to protect financial transactions.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
          <line x1="14.2" y1="13.2" x2="16.5" y2="15.5" />
        </svg>
      )
    },
    {
      title: 'Digital Wallet & Third-Party Integration',
      desc: 'Seamless integration with wallets, bank APIs, and third-party financial platforms for prolonged usability.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
          <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
        </svg>
      )
    },
    {
      title: 'Cross-Platform Credit Card App Development',
      desc: 'Robust apps for Android, iOS, and web platforms with adaptive user interfaces.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
          <line x1="9" y1="6" x2="15" y2="6" />
          <rect x="8" y="9" width="8" height="5" rx="1" strokeDasharray="1,1" />
        </svg>
      )
    },
    {
      title: 'Ongoing Support & Maintenance',
      desc: 'Regular updates, compliance enhancements, and 24/7 technical support for long-term app reliability.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="8" cy="12" r="1" />
          <circle cx="16" cy="12" r="1" />
        </svg>
      )
    }
  ];

  // 6 Expertise Services for Credit Card App Development (Matching Slider)
  const creditCardExpertiseCards = [
    {
      id: 1,
      title: 'Ongoing Support & Maintenance',
      desc: 'Ongoing updates, compliance enhancements, and 24/7 support for long-term app dependability.'
    },
    {
      id: 2,
      title: 'Custom Credit Card App Development',
      desc: 'Custom apps with security features such as payments, billing, and tracking transactions for banks and companies.'
    },
    {
      id: 3,
      title: 'Credit Card Payment App Development',
      desc: 'Apps for processing credit card app payments with seamless support for multiple payment gateways.'
    },
    {
      id: 4,
      title: 'Fraud Detection & Security Solutions',
      desc: 'Cutting-edge encryption and AI-driven fraud detection to secure transactions and maintain compliance.'
    },
    {
      id: 5,
      title: 'Digital Wallet & Third-Party Integration',
      desc: 'Smooth integration with mobile wallets, core card issuers, and third-party financial platforms.'
    },
    {
      id: 6,
      title: 'Cross-Platform Credit Card App Development',
      desc: 'High-performance credit card apps built for iOS, Android, and web with responsive user interfaces.'
    }
  ];

  // 4 Business Friendly Hiring Models (1:1 Reference Match)
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12 C19 9 20.8 7 24 7 C27.2 7 29 9 29 12 Z" />
          <ellipse cx="24" cy="13" rx="7" ry="2" />
          <path d="M17 13 C12 18 10 24 10 32 C10 40 16 43 24 43 C32 43 38 40 38 32 C38 24 36 18 31 13 Z" />
          <text x="24" y="32" fill="currentColor" stroke="none" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">$</text>
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
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="27" r="14" />
          <path d="M24 13 V8" />
          <path d="M20 8 H28" />
          <path d="M34 17 L37 14" />
          <path d="M24 27 L24 20" />
          <path d="M24 27 L29 30" />
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
          <circle cx="24" cy="15" r="4.5" />
          <path d="M17 29 C17 24.5 20 22.5 24 22.5 C28 22.5 31 24.5 31 29" />
          <circle cx="14" cy="19" r="3.5" />
          <path d="M8 31 C8 27 11 25.5 14 25.5 C15.2 25.5 16.3 25.9 17.2 26.6" />
          <circle cx="34" cy="19" r="3.5" />
          <path d="M30.8 26.6 C31.7 25.9 32.8 25.5 34 25.5 C37 25.5 40 27 40 31" />
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
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#06B6D4]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Cog */}
          <circle cx="19" cy="27" r="7" />
          <path d="M19 18 V20 M19 34 V36 M10 27 H12 M26 27 H28 M12.5 20.5 L14 22 M24 32 L25.5 33.5 M12.5 33.5 L14 32 M24 22 L25.5 20.5" strokeWidth="2.2" />
          {/* Small Cog */}
          <circle cx="31" cy="17" r="4.5" />
          <path d="M31 11 V12.5 M31 21.5 V23 M25 17 H26.5 M35.5 17 H37 M26.8 12.8 L28 14 M34 20 L35.2 21.2 M26.8 21.2 L28 20 M34 14 L35.2 12.8" strokeWidth="1.8" />
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
      question: 'How do you ensure PCI-DSS compliance and financial data security in credit card apps?',
      answer: 'We adhere to stringent PCI-DSS Level 1 guidelines, utilize tokenization engines (such as Visa VTS and Mastercard MDES), implement AES-256 and TLS 1.3 encryption, and store zero raw card numbers on local devices.'
    },
    {
      question: 'Which card issuing and banking APIs can you integrate with?',
      answer: 'We have hands-on experience integrating leading card issuing and banking platforms including Marqeta, Galileo, Stripe Issuing, Adyen, FIS, Fiserv, and Plaid for account verification.'
    },
    {
      question: 'Can you develop instant virtual credit card issuance with Apple Pay and Google Wallet provisioning?',
      answer: 'Yes! We implement in-app push provisioning APIs that allow cardholders to generate virtual cards and add them directly to Apple Wallet and Google Wallet with zero manual friction.'
    },
    {
      question: 'How long does it take to develop a custom credit card management app?',
      answer: 'A standard feature-rich Credit Card MVP typically takes 10 to 14 weeks from UI/UX design to final regulatory compliance testing and store deployment.'
    },
    {
      question: 'Can you build custom loyalty, rewards, and cashback programs into the app?',
      answer: 'Absolutely. We engineer flexible rewards engines supporting merchant-funded cashbacks, tiered milestone perks, instant statement credit redemptions, and affiliate partner vouchers.'
    },
    {
      question: 'Do you provide continuous maintenance and security patch support?',
      answer: 'Yes, we provide 24/7 SLA-backed maintenance packages including server monitoring, annual penetration test remediation, OS updates, and new feature sprints.'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-[#0f172a] font-sans antialiased overflow-x-hidden">
      <SEO
        title="Credit Card App Development Services | Custom Fintech & Card Solutions"
        description="Premier Credit Card App Development Company. Build secure, PCI-DSS compliant credit card management apps, virtual card issuance, and reward platforms."
        keywords="credit card app development, fintech app development, virtual card issuance app, cardholder app builder, PCI DSS card app"
      />

      {/* Section 1: Hero Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#f8fafc] overflow-hidden border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 font-black tracking-tight"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 42px)',
                  lineHeight: '1.2'
                }}
              >
                Credit Card Application<br />Development Company
              </h1>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[22px] font-normal max-w-2xl font-sans">
                We excel in creating Credit Card Applications that are secure, easy to use, and customized for businesses of every size. Starting from custom credit card app development services to advanced credit card payment app development, our solutions are made to facilitate smooth transactions and compliance. Get in touch with us today to hire credit card application developers and avail free consultation for your project.
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
                  href="/company/contact"
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
                  src="/images/services/credit-card-hero-illustration.png"
                  alt="Credit Card Application Development Company Illustration"
                  className="w-full max-w-[540px] h-auto object-contain drop-shadow-sm select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Marquee */}
      <BrandLogoMarquee />

      {/* Section 3: Trusted Experts In Credit Card Payment App Development */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-md flex items-center justify-center">
                <img
                  src="/images/services/credit-card-trusted-experts.png"
                  alt="Trusted Experts In Credit Card Payment App Development"
                  className="w-full max-w-[420px] h-auto object-contain block drop-shadow-sm select-none pointer-events-none"
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
                Trusted Experts In Credit Card <br />Payment App Development
              </h2>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[24px] font-normal font-sans">
                As a top Credit Card Application Development Company, we apply years of experience in designing secure, scalable, and compliant financial applications. Our expertise includes credit card app payments, digital wallets, and tailored credit card app development solutions for banks, fintech startups, and enterprises. Through the integration of robust encryption, contemporary design, and international financial compliance, we enable businesses to deploy apps users can trust.
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

      {/* Section 5: Build High-Performance Credit Card App Payment */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Build High-Performance Credit Card App Payment
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
                Secure, Scalable &amp;<br />Future-Ready<br />Apps
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We provide credit card payment application development services that are secure, scalable, and compliant with international standards of security. Our expertise in encryption, fraud prevention, and secure payment gateways ensures businesses have the ability to provide smooth user experiences and yet remain in compliance with financial regulations.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Our experienced developers have developed international credit card application projects, equipping organizations with high-performance applications that facilitate transactions, bill payments, and digital banking capabilities. Hire Developers for Credit Card Application that concentrate on creating financial applications tailored for businesses that enable enterprises and startups to grow securely in the current competitive business environment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 6: Cutting Edge Technologies */}
      <HybridAppCuttingEdgeTechnologiesSection
        title={"Cutting Edge Technologies Sapphire Use For\nCredit Card Application Development"}
      />



      {/* Section 7: Premium Services Grid */}
      <div id="services-grid">
        <PremiumServicesGrid />
      </div>

      {/* Section 8: Success Stories */}
      <SuccessStoriesSection />

      {/* Section 9: Proud Awards Banner */}
      <ProudAwardsBanner />

      {/* Section 10: Benefits of Choosing Credit Card App Development Solutions */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Benefits of Choosing Credit Card App Development Solutions
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal font-sans">
              We offer an end-to-end set of services for companies who wish to build next-generation payment apps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {benefitsItems.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_14px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col text-left group"
              >
                <div className="mb-4 text-[#0084D1] group-hover:scale-105 transition-transform duration-200">
                  {benefit.icon}
                </div>
                <h3 className="text-[16px] sm:text-[17px] font-[800] text-[#0B0F19] mb-2 leading-snug tracking-tight font-sans">
                  {benefit.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65] font-normal font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 11: Our Credit Card Application Development Services Slider */}
      <HybridAppExpertiseServices
        title="Our Credit Card Application Development Services"
        subtitle="We offer a complete set of services for companies who want to develop cutting-edge payment apps."
        cards={creditCardExpertiseCards}
        showButton={false}
      />

      {/* Section 12: Business Friendly Hiring Models (1:1 Reference Match) */}
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
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto font-normal">
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
      <IWatchRecentBlogsSection />

      {/* Section 22: Bottom Blue CTA Banner (1:1 Reference Match) */}
      <section className="relative w-full max-w-full py-9 sm:py-11 lg:py-12 bg-[#005F96] text-white text-center font-sans overflow-hidden">
        {/* Background Floating Geometric Rounded Squares / Rectangles Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left Floating Boxes */}
          <div className="absolute top-4 left-1/4 w-16 h-16 rounded-xl bg-white/[0.06] -rotate-6" />
          <div className="absolute -bottom-6 left-12 w-28 h-28 rounded-2xl bg-white/[0.05] rotate-12" />

          {/* Right Side Floating Rounded Rectangles */}
          <div className="absolute top-3 right-1/4 w-36 h-20 rounded-2xl bg-white/[0.06] rotate-3" />
          <div className="absolute bottom-2 right-16 w-24 h-24 rounded-2xl bg-white/[0.04] -rotate-12" />
          <div className="absolute -top-10 right-10 w-40 h-40 rounded-3xl border-8 border-white/[0.05] rotate-45" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8 mx-auto text-center space-y-3">
          {/* Main Title */}
          <h2
            className="text-white tracking-tight leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: '32px',
              color: '#FFFFFF'
            }}
          >
            Have Credit Card Application Development Company<br />Challenge To Address ?
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-[14.5px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
            Get access to top Credit Card Application Development Company to transform your ideas into a robust application.
          </p>

          {/* Centered White "Hire Now" Button */}
          <div className="pt-2">
            <a
              href="#quote-form"
              className="inline-block bg-white hover:bg-slate-50 text-[#005F96] font-[800] text-xs sm:text-sm px-8 py-2.5 rounded-[5px] shadow-md hover:shadow-lg transition-all duration-200 tracking-wide cursor-pointer"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditCardAppDevelopmentService;
