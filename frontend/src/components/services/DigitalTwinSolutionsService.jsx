import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import DigitalTwinCuttingEdgeTechSection from './DigitalTwinCuttingEdgeTechSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import DigitalTwinExpertiseServices from './DigitalTwinExpertiseServices';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import { ArrowRight } from 'lucide-react';

export const DigitalTwinSolutionsService = () => {
  // 6 Benefits Cards Grid (Exact 1:1 Match to Data Annotation with Outline SVG Icons)
  const digitalTwinBenefits = [
    {
      title: 'Real-Time Asset Visibility',
      desc: 'Sub-second telemetry ingestion and bi-directional synchronization between physical machines and their 3D virtual representations for complete operational transparency.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="7" width="32" height="13" rx="2" />
          <line x1="13" y1="13.5" x2="15" y2="13.5" strokeWidth="2.5" />
          <line x1="18" y1="13.5" x2="20" y2="13.5" strokeWidth="2.5" />
          <line x1="23" y1="13.5" x2="25" y2="13.5" strokeWidth="2.5" />
          <circle cx="34" cy="13.5" r="1.3" fill="#0084D1" />
          <circle cx="30" cy="13.5" r="1.3" fill="#0084D1" />

          <rect x="8" y="25" width="32" height="13" rx="2" />
          <line x1="13" y1="31.5" x2="15" y2="31.5" strokeWidth="2.5" />
          <line x1="18" y1="31.5" x2="20" y2="31.5" strokeWidth="2.5" />
          <line x1="23" y1="31.5" x2="25" y2="31.5" strokeWidth="2.5" />
          <circle cx="34" cy="31.5" r="1.3" fill="#0084D1" />
          <circle cx="30" cy="31.5" r="1.3" fill="#0084D1" />

          <path d="M14 20v5M34 20v5" />
        </svg>
      )
    },
    {
      title: 'Predictive Maintenance & Zero Downtime',
      desc: 'Continuous machine learning monitoring that identifies anomaly signatures, thermal hotspots, and component wear well before costly unplanned outages occur.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 16 L38 16 L28 28 L28 38 L20 38 L20 28 Z" />
          <line x1="15" y1="7" x2="15" y2="12" />
          <circle cx="15" cy="6" r="1.8" fill="#0084D1" />
          <line x1="24" y1="4" x2="24" y2="12" />
          <circle cx="24" cy="3" r="1.8" fill="#0084D1" />
          <line x1="33" y1="7" x2="33" y2="12" />
          <circle cx="33" cy="6" r="1.8" fill="#0084D1" />
          <circle cx="24" cy="43" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Physics-Based "What-If" Simulations',
      desc: 'Virtually stress-test operational variations, line throughput adjustments, and extreme contingency scenarios in high fidelity without risking physical machinery.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 7 A 17 17 0 1 1 9 24" />
          <polyline points="5 14 9 24 19 20" />
          <circle cx="24" cy="24" r="5" />
          <path d="M24 16v2M24 30v2M16 24h2M30 24h2M18.5 18.5l1.4 1.4M28.1 28.1l1.4 1.4M18.5 29.5l1.4-1.4M28.1 19.9l1.4-1.4" />
        </svg>
      )
    },
    {
      title: 'Seamless IT & OT Ecosystem Integration',
      desc: 'Direct bi-directional connectivity with legacy SCADA, PLC controllers, MES, ERP, and enterprise cloud data lakes via industrial standards like OPC-UA and MQTT.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="9" width="26" height="32" rx="3" />
          <path d="M18 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M16 19l2 2 4-4" />
          <line x1="25" y1="19" x2="31" y2="19" />
          <path d="M16 27l2 2 4-4" />
          <line x1="25" y1="27" x2="31" y2="27" />
          <path d="M16 35l2 2 4-4" />
          <line x1="25" y1="35" x2="31" y2="35" />
          <circle cx="37" cy="11" r="3" />
          <path d="M37 6v2M37 14v2M32 11h2M40 11h2" />
        </svg>
      )
    },
    {
      title: 'Future-Ready Cloud Scalability',
      desc: 'Engineered with containerized microservices that scale smoothly from single equipment units to multi-facility factory networks processing millions of real-time events.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="8" width="12" height="12" rx="2" />
          <circle cx="24" cy="14" r="2" fill="#0084D1" />
          <line x1="24" y1="4" x2="24" y2="8" />
          <line x1="14" y1="14" x2="18" y2="14" />
          <line x1="30" y1="14" x2="34" y2="14" />
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="28" y1="4" x2="28" y2="8" />
          <path d="M9 34c4-2 9-2 13-2h4a6 6 0 0 1 6 6v3H7v-3a4 4 0 0 1 2-4z" />
          <path d="M22 32l3-5a2 2 0 0 1 3.5 2l-2 3" />
        </svg>
      )
    },
    {
      title: 'Enterprise Security & ISO Governance',
      desc: 'Bank-grade zero-trust infrastructure adhering to ISO 27001, SOC 2, and IEC 62443 standards with TLS 1.3 encryption and granular role-based access management.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 26V20a10 10 0 0 1 20 0v6" />
          <rect x="11" y="24" width="6" height="10" rx="2" />
          <rect x="31" y="24" width="6" height="10" rx="2" />
          <path d="M34 32v2a4 4 0 0 1-4 4h-6" />
          <circle cx="21" cy="38" r="2" fill="#0084D1" />
          <path d="M21 14l3-3a2 2 0 0 1 3 3l-3 3" />
        </svg>
      )
    }
  ];

  // Success Stories (Exact 1:1 Match to Reference Portfolio)
  const digitalTwinSuccessCards = [
    {
      id: 1,
      title: 'Industrial Automated Assembly Line Real-Time Digital Twin Platform',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'Smart Commercial Facility BIM & HVAC Energy Optimization Twin',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Aerospace Turbine Telemetry & Predictive Simulation Suite',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // 9 Complete FAQs (Firevy.co Branded)
  const digitalTwinFaqs = [
    {
      question: '1. What is a Digital Twin and how does it work?',
      answer: 'A Digital Twin is a dynamic, high-fidelity virtual representation of a physical asset, process, or system that is continuously updated using real-time IoT sensor telemetry, machine learning algorithms, and spatial 3D physics models. It allows operators to monitor performance, simulate scenarios, and predict maintenance needs before issues emerge in the physical world.'
    },
    {
      question: '2. Which industries benefit most from Digital Twin solutions?',
      answer: 'Digital Twins deliver tremendous ROI across industrial manufacturing, aerospace, automotive, smart cities, building and facility management (BIM), healthcare and pharmaceuticals, logistics and warehousing, and renewable energy grids.'
    },
    {
      question: '3. How does a Digital Twin integrate with existing IoT sensors and SCADA systems?',
      answer: 'Our solutions integrate seamlessly using industry-standard protocols including MQTT, OPC-UA, Modbus, BACnet, and REST APIs. We establish secure edge gateways that ingest real-time sensor streams (temperature, vibration, pressure, rpm) into cloud time-series data lakes and simulation engines.'
    },
    {
      question: '4. What is the difference between a static 3D CAD model and a true Digital Twin?',
      answer: 'A 3D CAD model is a static geometric representation created during the design phase. In contrast, a true Digital Twin is a living, connected model that reflects the real-world operating state of the asset in real time, factoring in sensor telemetry, physical stresses, operational wear, and predictive analytics.'
    },
    {
      question: '5. How does predictive maintenance through a Digital Twin reduce operational costs?',
      answer: 'By continuously correlating real-time operational parameters against physics models and anomaly detection AI, Digital Twins forecast component failures weeks in advance. This prevents catastrophic downtime, reduces unnecessary routine servicing, and cuts maintenance costs by up to 35%.'
    },
    {
      question: '6. Can Firevy.co build custom Digital Twins on NVIDIA Omniverse, Unreal Engine, or Azure?',
      answer: 'Yes. We build enterprise digital twins on top-tier platforms including NVIDIA Omniverse, Unreal Engine 5, Unity 3D, Azure Digital Twins, and AWS IoT TwinMaker, tailoring the graphics fidelity, physics fidelity, and cloud pipeline to your exact operational requirements.'
    },
    {
      question: '7. What data security standards do your Digital Twin platforms adhere to?',
      answer: 'We implement rigorous defense-in-depth security architectures conforming to ISO 27001, SOC 2, and IEC 62443 industrial standards. All data streams are encrypted with TLS 1.3 in transit and AES-256 at rest, protected behind granular role-based access control.'
    },
    {
      question: '8. How long does it take to implement an enterprise Digital Twin MVP?',
      answer: 'A pilot Digital Twin covering a single machine or specialized production cell typically deploys within 6 to 10 weeks. Scaled multi-facility enterprise deployments with custom ERP/MES integrations generally take 3 to 6 months in phased milestones.'
    },
    {
      question: '9. How can we get started with Firevy.co for our Digital Twin project?',
      answer: 'Simply share your asset specifications, sensor telemetry setup, and operational objectives. Our digital twin architects will provide an architectural blueprint, technology recommendation, and implementation roadmap within 24 hours.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <SEO
        title="Digital Twin Solutions Company | Real-Time Virtual Replicas"
        description="Firevy.co delivers premier Digital Twin solutions. High-fidelity 3D cyber-physical models, IoT sensor telemetry, predictive maintenance, and NVIDIA Omniverse simulations."
        keywords="digital twin solutions company, digital twin development, IoT digital twin, predictive maintenance, 3D simulation, cyber-physical systems, NVIDIA Omniverse, Azure Digital Twins"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 Match to Reference Screenshot)                      */}
      {/* ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Heading + Tagline + Metrics + CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.14] font-sans"
                style={{ fontSize: 'clamp(30px, 4vw, 40px)' }}
              >
                Digital Twin Solutions Company
              </h1>

              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                Accelerate industrial efficiency, eliminate unplanned downtime, and optimize complex operations with enterprise digital twin solutions. From bidirectional IoT sensor streaming and photorealistic 3D simulation to predictive AI analytics and physics engines.
              </p>

              {/* 4 Stats Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">500+</div>
                  <div className="text-xs text-slate-600 font-medium">Digital Twins Deployed</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">99.9%</div>
                  <div className="text-xs text-slate-600 font-medium">Real-Time Data Sync</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">35%</div>
                  <div className="text-xs text-slate-600 font-medium">Downtime Reduction</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">24/7</div>
                  <div className="text-xs text-slate-600 font-medium">Predictive Monitoring</div>
                </div>
              </div>

              {/* Single "Let's Talk" CTA */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/digital_twin_hero.jpg"
                  alt="Digital Twin Solutions Platform"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE                                                     */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 3. HIGH-PRECISION SOLUTIONS (Image Left + Content Right)                  */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/digital_twin_pipeline.jpg"
                  alt="Cyber-Physical Digital Twin Architecture & Simulation Pipeline"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for High-Precision Digital Twin Solutions
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Modern enterprises generate massive volumes of physical sensor data, but without contextualized spatial modeling and physics simulation, raw telemetry remains disconnected from actionable operations. Our specialist Digital Twin Solutions Company delivers high-fidelity, real-time cyber-physical models that mirror your physical assets, production facilities, and supply chains with sub-second latency.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By combining bidirectional IoT data streaming with advanced physics engines and predictive machine learning, our digital twin services enable engineering teams to simulate what-if scenarios, detect equipment failure before it happens, and optimize operational lifecycle performance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. AWARDS & TRUST RECOGNITION CLUTCH BANNER                               */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* ========================================================================= */}
      {/* 6. 100% CUSTOMIZABLE DIGITAL TWIN SOLUTIONS (Quote Card + Narrative)      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Digital Twin Solutions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Soft Blue Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-5 bg-[#EFF7FE] border border-[#BAE6FD]/90 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative shadow-xs min-h-[320px] group transition-all duration-300 hover:shadow-md">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-transform duration-700 group-hover:scale-105"
                viewBox="0 0 340 340"
                fill="none"
              >
                <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 360 40" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 180 C80 140, 160 220, 240 170 C290 140, 320 210, 360 180" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 300 C80 260, 160 340, 240 290 C290 260, 320 330, 360 300" stroke="#005F96" strokeWidth="2" />
              </svg>

              {/* Speech bubble pointer arrow pointing right towards narrative */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EFF7FE] z-20" />
              <div className="hidden lg:block absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[14px] border-l-[#BAE6FD] z-10" />

              <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
                “
              </div>

              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Real-time physical<br />& virtual asset<br />sync guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Deploying high-impact digital twins in today's connected enterprise demands rigorous mathematical precision, low-latency telemetry ingestion, and seamless integration across enterprise IT and OT systems. Off-the-shelf software often fails to replicate complex proprietary machinery or unique facility workflows. As a premier Digital Twin Solutions Company, we engineer fully customized digital twins tailored specifically to your industrial standards.
              </p>
              <p>
                Our 100% personalized Digital Twin Solutions are built to accommodate your specific SCADA networks, CAD schematics, and enterprise ERP systems. Whether you are running robotic automotive manufacturing, smart city utility grids, or building management networks, our experienced systems architects and simulation engineers deliver solutions that minimize operational risk, cut maintenance costs, and unlock predictive intelligence.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION                                      */}
      {/* ========================================================================= */}
      <DigitalTwinCuttingEdgeTechSection companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 8. OUR PREMIUM SERVICES                                                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES                                                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={digitalTwinSuccessCards}
        subtitle="Know Firevy.co journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER                                                   */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR DIGITAL TWIN SOLUTIONS                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Digital Twin Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Years of cyber-physical engineering, IoT telematics integration, and 3D simulation have made our committed digital twin specialists exceptionally skilled partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {digitalTwinBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100/90 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                  {benefit.icon}
                </div>
                <h3 className="text-[17px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3 leading-snug tracking-tight font-sans">
                  {benefit.title}
                </h3>
                <p className="text-[#475569] text-[13px] sm:text-[13.8px] leading-[1.68] font-normal font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. OUR EXPERTISE IN DEDICATED DIGITAL TWIN SOLUTIONS                     */}
      {/* ========================================================================= */}
      <DigitalTwinExpertiseServices />

      {/* ========================================================================= */}
      {/* 13. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 14. INNOVATIVE VIDEO SOLUTIONS SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 15. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Digital Twin Process We Follow"
        subtitle="Our systematic 6-phase engineering lifecycle from physical telemetry mapping and 3D geometric modeling to real-time IoT integration, predictive AI simulation, and enterprise deployment."
      />

      {/* ========================================================================= */}
      {/* 16. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 17. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 18. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 19. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 20. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 21. FREQUENTLY ASKED QUESTIONS (SapphireFaqSection 1:1 Match)              */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below."
        faqs={digitalTwinFaqs}
        companyName="Firevy.co"
      />

      {/* ========================================================================= */}
      {/* 22. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 23. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 24. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <IWatchChallengeCtaBanner
        heading="Have an Incredible Digital Twin Concept?"
        text="Our systems architects and simulation specialists are ready to engineer your real-time cyber-physical digital twin platform."
        buttonText="Get Free Digital Twin Consultation"
      />
    </div>
  );
};

export default DigitalTwinSolutionsService;
