import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import SuccessStories from './SuccessStories';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import MobileAppExpertiseServices from './MobileAppExpertiseServices';
import AndroidTechStackSection from './AndroidTechStackSection';
import ReactNativeExpertiseServices from './ReactNativeExpertiseServices';
import ProudAwardsBanner from './ProudAwardsBanner';
import ReactNativeReasonsChoose from './ReactNativeReasonsChoose';
import AndroidHiringModels from './AndroidHiringModels';
import AndroidComparativeAnalysis from './AndroidComparativeAnalysis';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import AndroidRecentBlogsSection from './AndroidRecentBlogsSection';
import AndroidWhatSetsUsApartSection from './AndroidWhatSetsUsApartSection';
import AndroidChallengeCtaBanner from './AndroidChallengeCtaBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import JavaSuccessStoriesSection from './JavaSuccessStoriesSection';
import JavaApplicationServicesSection from './JavaApplicationServicesSection';
import JavaBenefitsSection from './JavaBenefitsSection';
import JavaTechStackSection from './JavaTechStackSection';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import {
  Smartphone,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Tv,
  Tablet,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Check,
  Bot,
  Sparkles,
  Search,
  Globe,
  Lock,
  Boxes,
  Brain,
  Cloud,
  Radio
} from 'lucide-react';

export const JavaDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);

  useEffect(() => {
    if (isTechHovered) return;
    const interval = setInterval(() => {
      setTechCarouselIndex((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isTechHovered]);

  const javaFaqs = [
    {
      q: '1. Why choose Java for enterprise application development?',
      a: 'Java offers unbeatable cross-platform portability ("Write Once, Run Anywhere"), enterprise-grade security, mature Spring Boot ecosystems, high-throughput multi-threading, and decades of proven backward compatibility for mission-critical systems.'
    },
    {
      q: '2. What is the typical development timeline for a custom Java web or microservice project?',
      a: 'A focused MVP or microservice backend typically takes 6 to 10 weeks. Comprehensive enterprise architectures with legacy migration, distributed event streaming (Kafka), and multi-cloud deployment usually span 12 to 24 weeks.'
    },
    {
      q: '3. Can Firevy assist in migrating legacy Java 7/8 applications to Java 17/21 LTS and Spring Boot 3?',
      a: 'Yes, Firevy specializes in modernizing legacy Java monoliths into scalable, cloud-native microservices running on Java 21 LTS with virtual threads, Spring Boot 3, and automated CI/CD containerization.'
    },
    {
      q: '4. How do you protect intellectual property and ensure code security?',
      a: 'We sign comprehensive Non-Disclosure Agreements (NDAs) before discovery. 100% of the source code and IP rights belong to you upon milestone delivery, backed by SonarQube static audits and OWASP compliance.'
    },
    {
      q: '5. What hiring engagement models are available for Java developers?',
      a: 'We provide versatile engagement models tailored to your roadmap: Dedicated Java Squads (Monthly Retainer), Time & Material (T&M) Sprints, and Fixed-Price Project Contracts with strict enterprise SLAs.'
    },
    {
      q: '6. What post-launch support and SLA maintenance do you provide?',
      a: 'Our maintenance services include 24/7/365 infrastructure observability, automated security patching, performance profiling, garbage collection tuning, database query optimization, and rapid incident response.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Java App Development Company in USA | Firevy"
        description="Avail our AI integrated Java app development services to build full-featured, cross-platform enterprise applications offering high-throughput performance."
        canonical="/services/java"
      />

      {/* =========================================================================
          EXACT 1:1 RECREATED HERO SECTION (MATCHING JAVA REFERENCE SCREENSHOT)
          ========================================================================= */}
      <section className="pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-14 bg-[#F4F8FC] text-slate-900 relative overflow-hidden text-left font-sans">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            {/* Left Column: Heading, Paragraph, Single CTA (1:1 Copy to Copy) */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              {/* Heading */}
              <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight">
                No.1 Java Development<br />Company in USA
              </h1>

              {/* Subtitle / Paragraph matching screenshot 1:1 */}
              <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-[1.7] font-normal max-w-[530px]">
                At Sapphire, our team has great expertise in Java application development. We apply the latest Java-related technologies to help clients build sustainable Java-based software fast and cost-effectively.
              </p>

              {/* Single CTA Button Directly Below Description */}
              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[5px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14px] sm:text-[15px] transition-all shadow-sm group cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Exact Open Laptop with Account Demo Banking Dashboard Screen (1:1 Match) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative pt-2 pb-2">
              <div className="relative w-full max-w-[520px] sm:max-w-[560px] flex flex-col items-center justify-center select-none">

                {/* Laptop Lid / Screen Bezel */}
                <div className="w-full bg-[#111827] rounded-t-[14px] sm:rounded-t-[16px] p-2.5 sm:p-3 pb-0 border-[3px] border-[#374151] shadow-2xl relative">
                  
                  {/* Top Center WebCam Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-auto mb-1.5" />

                  {/* Inner Screen Display (Account Demo Banking Dashboard UI) */}
                  <div className="w-full bg-white rounded-t-[6px] overflow-hidden flex h-[260px] sm:h-[295px] text-left relative text-slate-800 border border-slate-200">

                    {/* Left Dark Blue Sidebar Navigation */}
                    <div className="w-[125px] sm:w-[145px] bg-[#1E3A8A] text-white p-2 sm:p-2.5 flex flex-col justify-between shrink-0">
                      <div>
                        {/* App Brand Header */}
                        <div className="text-[9px] sm:text-[10px] font-bold text-white tracking-tight pb-2 border-b border-white/15 mb-2">
                          Account Demo
                        </div>

                        {/* User Profile Avatar Block */}
                        <div className="flex flex-col items-center text-center my-2">
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                            alt="Olivia Jones"
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-white/40 mb-1"
                          />
                          <span className="text-[8px] sm:text-[8.5px] font-bold text-white leading-tight">
                            Olivia Jones
                          </span>
                        </div>

                        {/* Active Dashboard Button */}
                        <div className="bg-white text-[#1E3A8A] rounded-[4px] py-1 px-2 text-[7px] sm:text-[7.5px] font-bold flex items-center space-x-1.5 shadow-xs my-1.5 cursor-pointer">
                          <span>📊</span>
                          <span>Dashboard</span>
                        </div>

                        {/* Sidebar Navigation Links */}
                        <nav className="space-y-1 text-[6.5px] sm:text-[7px] text-white/80 font-medium">
                          <div className="flex items-center space-x-1.5 py-0.5 px-1 rounded hover:bg-white/10 cursor-pointer">
                            <span>💳</span>
                            <span>My Accounts</span>
                          </div>
                          <div className="flex items-center space-x-1.5 py-0.5 px-1 rounded hover:bg-white/10 cursor-pointer">
                            <span>💸</span>
                            <span>Transactions</span>
                          </div>
                          <div className="flex items-center space-x-1.5 py-0.5 px-1 rounded hover:bg-white/10 cursor-pointer">
                            <span>📈</span>
                            <span>Investment</span>
                          </div>
                          <div className="flex items-center space-x-1.5 py-0.5 px-1 rounded hover:bg-white/10 cursor-pointer">
                            <span>⚙️</span>
                            <span>Settings</span>
                          </div>
                        </nav>
                      </div>

                      {/* Logout Link */}
                      <div className="text-[6.5px] sm:text-[7px] text-white/70 flex items-center space-x-1 pt-1 border-t border-white/10 cursor-pointer">
                        <span>↪️</span>
                        <span>Logout</span>
                      </div>
                    </div>

                    {/* Right Main Content Dashboard Area */}
                    <div className="flex-1 bg-[#F8FAFC] p-2 sm:p-2.5 flex flex-col justify-between overflow-hidden">
                      
                      {/* Top Search & Profile Bar */}
                      <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-slate-200/80">
                        {/* Search Input Box */}
                        <div className="bg-white border border-slate-200 rounded-full px-2 py-0.5 flex items-center space-x-1 text-[6.5px] sm:text-[7px] text-slate-400 w-32 sm:w-40 shadow-2xs">
                          <span>🔍</span>
                          <span>Search</span>
                        </div>

                        {/* Notifications & Top User Pill */}
                        <div className="flex items-center space-x-2">
                          <span className="text-[7.5px] text-slate-500">🔔</span>
                          <div className="flex items-center space-x-1 text-[6.5px] sm:text-[7px] font-bold text-slate-700">
                            <img
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                              alt="Olivia"
                              className="w-3.5 h-3.5 rounded-full object-cover"
                            />
                            <span>Olivia Jones ▾</span>
                          </div>
                        </div>
                      </div>

                      {/* Row 1: Overview (Send, Receive, Bank Card) */}
                      <div>
                        <div className="text-[7px] sm:text-[7.5px] font-bold text-slate-800 mb-1">
                          Overview:
                        </div>
                        <div className="grid grid-cols-3 gap-1.5">
                          {/* Card 1: Send */}
                          <div className="bg-white rounded-[5px] p-1.5 border border-slate-200/80 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-1">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[5.5px] font-bold">↗</span>
                                <span className="text-[6.5px] font-bold text-slate-700">Send</span>
                              </div>
                              <div className="text-[8px] sm:text-[9px] font-extrabold text-slate-900 mt-0.5">$1550</div>
                              <div className="text-[4.5px] text-slate-400">Total out bound</div>
                            </div>
                          </div>

                          {/* Card 2: Received */}
                          <div className="bg-white rounded-[5px] p-1.5 border border-slate-200/80 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-1">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[5.5px] font-bold">↙</span>
                                <span className="text-[6.5px] font-bold text-slate-700">Received</span>
                              </div>
                              <div className="text-[8px] sm:text-[9px] font-extrabold text-slate-900 mt-0.5">$2600</div>
                              <div className="text-[4.5px] text-slate-400">Total in bound</div>
                            </div>
                          </div>

                          {/* Card 3: Blue Bank Card */}
                          <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-[5px] p-1.5 text-white shadow-2xs flex flex-col justify-between relative overflow-hidden">
                            <div className="flex justify-between items-center text-[5px] font-bold">
                              <span>VISA</span>
                              <div className="w-2 h-1.5 rounded-[1px] bg-amber-300" />
                            </div>
                            <div className="text-[5.5px] font-mono tracking-wider my-0.5">•••• 3482</div>
                            <div className="flex justify-between text-[4.5px] text-blue-100">
                              <span>09/28</span>
                              <span>Olivia</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Total Account Summary */}
                      <div className="bg-white rounded-[5px] p-1.5 border border-slate-200/80 shadow-2xs my-1">
                        <div className="text-[6.5px] sm:text-[7px] font-bold text-slate-800 mb-1">
                          Total account summary
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[5.5px] sm:text-[6px]">
                          {/* Left stats */}
                          <div className="space-y-0.5">
                            <div className="text-slate-600 font-medium">Deposit the money</div>
                            <div className="flex justify-between text-slate-500">
                              <span>Interest Rate</span>
                              <span className="font-bold text-slate-700">121.2/annum</span>
                            </div>
                            <div className="flex justify-between text-slate-500">
                              <span>Interest Paid after 1 yr</span>
                              <span className="font-bold text-slate-700">141.2/annum</span>
                            </div>
                          </div>

                          {/* Right credit limit */}
                          <div className="space-y-0.5">
                            <div className="flex justify-between items-center text-slate-700 font-bold">
                              <span>Credit Limit</span>
                              <span className="text-[5px] bg-slate-100 px-1 rounded text-slate-500">Web ▾</span>
                            </div>
                            <div className="flex justify-between text-slate-500">
                              <span>1000 - $3400</span>
                              <span className="font-bold text-blue-600">Available $2400</span>
                            </div>
                            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                              <div className="w-3/4 h-full bg-[#2563EB] rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Account Statistics Wave Line Charts */}
                      <div className="bg-white rounded-[5px] p-1.5 border border-slate-200/80 shadow-2xs flex-1 flex flex-col justify-between">
                        <div className="text-[6.5px] sm:text-[7px] font-bold text-slate-800">
                          Account statistics
                        </div>
                        
                        {/* Wave SVG Graph */}
                        <div className="w-full h-8 sm:h-9 relative overflow-hidden">
                          <svg viewBox="0 0 300 60" className="w-full h-full" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGradBlue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            {/* Area fill */}
                            <path
                              d="M0 45 Q 30 20, 60 40 T 120 25 T 180 45 T 240 15 T 300 35 L 300 60 L 0 60 Z"
                              fill="url(#chartGradBlue)"
                            />
                            {/* Blue Line 1 */}
                            <path
                              d="M0 45 Q 30 20, 60 40 T 120 25 T 180 45 T 240 15 T 300 35"
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="1.8"
                            />
                            {/* Light Blue Line 2 */}
                            <path
                              d="M0 50 Q 40 35, 80 48 T 160 38 T 230 48 T 300 25"
                              fill="none"
                              stroke="#93C5FD"
                              strokeWidth="1.2"
                              strokeDasharray="2,2"
                            />
                          </svg>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Laptop Base / Keyboard Deck Bottom Plate */}
                <div className="w-[108%] h-3 sm:h-3.5 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-[8px] relative shadow-md flex items-start justify-center">
                  <div className="w-12 sm:w-16 h-1.5 bg-[#64748B] rounded-b-[4px]" />
                </div>

                {/* Realistic Floor Shadow */}
                <div className="w-[85%] h-3.5 bg-slate-900/20 rounded-full blur-sm -mt-0.5" />

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* =========================================================================
          OFFERING JAVA DEVELOPMENT SERVICES SECTION (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Exact 1:1 Vector Illustration (Developers with Code Monitor & Tech Badges) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center select-none">
                <svg
                  viewBox="0 0 540 440"
                  className="w-full h-auto drop-shadow-sm select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Soft Background Circular / Organic Backdrop */}
                  <ellipse cx="230" cy="220" rx="180" ry="180" fill="#E8F4FA" />

                  {/* Top-Left Floating Badge: "Java" */}
                  <g transform="translate(145, 65)">
                    <rect width="64" height="34" rx="6" fill="#296492" />
                    <text
                      x="32"
                      y="23"
                      fill="#FFFFFF"
                      fontSize="17"
                      fontWeight="bold"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor="middle"
                    >
                      Java
                    </text>
                  </g>

                  {/* Top-Right Floating Badge: "{}" */}
                  <g transform="translate(390, 85)">
                    <rect width="64" height="52" rx="10" fill="#296492" />
                    <text
                      x="32"
                      y="37"
                      fill="#FFFFFF"
                      fontSize="30"
                      fontWeight="bold"
                      fontFamily="system-ui, -apple-system, monospace"
                      textAnchor="middle"
                    >
                      {'{ }'}
                    </text>
                  </g>

                  {/* Large Desktop Monitor Stand */}
                  <path d="M230 310 L330 310 L345 395 L215 395 Z" fill="#1B3A5A" />
                  <rect x="210" y="388" width="140" height="12" rx="4" fill="#1B3A5A" />
                  
                  {/* Monitor Outer Shell / Bezel */}
                  <rect
                    x="130"
                    y="105"
                    width="300"
                    height="215"
                    rx="18"
                    fill="#1B3A5A"
                  />
                  {/* Inner Light Blue Screen Frame */}
                  <rect
                    x="138"
                    y="113"
                    width="284"
                    height="199"
                    rx="12"
                    fill="#9DCBE8"
                  />
                  {/* Screen Display White Canvas */}
                  <rect
                    x="144"
                    y="119"
                    width="272"
                    height="187"
                    rx="8"
                    fill="#FFFFFF"
                  />

                  {/* Screen Header Bar with Browser Dots */}
                  <rect x="144" y="119" width="272" height="18" rx="4" fill="#EDF5FA" />
                  <circle cx="158" cy="128" r="3" fill="#6EA8CE" />
                  <circle cx="168" cy="128" r="3" fill="#6EA8CE" />
                  <circle cx="178" cy="128" r="3" fill="#6EA8CE" />

                  {/* Split Code Windows (Left & Right Editor Panels) */}
                  {/* Left Code Editor */}
                  <rect x="150" y="142" width="128" height="156" rx="4" fill="#F8FCFF" stroke="#E1EEF6" strokeWidth="1" />
                  {/* Left Code Lines */}
                  <g fill="#A8C8DD">
                    <rect x="158" y="152" width="35" height="4" rx="2" fill="#5D92B6" />
                    <rect x="198" y="152" width="45" height="4" rx="2" />
                    
                    <rect x="166" y="162" width="60" height="3" rx="1.5" />
                    <rect x="166" y="170" width="85" height="3" rx="1.5" />
                    <rect x="174" y="178" width="50" height="3" rx="1.5" fill="#7FAECB" />
                    <rect x="174" y="186" width="70" height="3" rx="1.5" />
                    
                    <rect x="158" y="196" width="40" height="3" rx="1.5" fill="#5D92B6" />
                    <rect x="166" y="204" width="75" height="3" rx="1.5" />
                    <rect x="174" y="212" width="65" height="3" rx="1.5" />
                    <rect x="174" y="220" width="80" height="3" rx="1.5" />
                    <rect x="174" y="228" width="45" height="3" rx="1.5" fill="#7FAECB" />
                    
                    <rect x="166" y="238" width="55" height="3" rx="1.5" />
                    <rect x="158" y="248" width="30" height="3" rx="1.5" fill="#5D92B6" />
                    <rect x="166" y="256" width="70" height="3" rx="1.5" />
                    <rect x="166" y="264" width="60" height="3" rx="1.5" />
                    <rect x="158" y="274" width="40" height="3" rx="1.5" />
                  </g>

                  {/* Right Code Editor */}
                  <rect x="282" y="142" width="128" height="156" rx="4" fill="#F8FCFF" stroke="#E1EEF6" strokeWidth="1" />
                  {/* Right Code Lines */}
                  <g fill="#A8C8DD">
                    <rect x="290" y="152" width="45" height="4" rx="2" fill="#5D92B6" />
                    <rect x="340" y="152" width="40" height="4" rx="2" />
                    
                    <rect x="298" y="162" width="70" height="3" rx="1.5" />
                    <rect x="298" y="170" width="90" height="3" rx="1.5" />
                    <rect x="306" y="178" width="65" height="3" rx="1.5" fill="#7FAECB" />
                    <rect x="306" y="186" width="80" height="3" rx="1.5" />
                    <rect x="306" y="194" width="50" height="3" rx="1.5" />
                    
                    <rect x="298" y="204" width="45" height="3" rx="1.5" fill="#5D92B6" />
                    <rect x="306" y="212" width="85" height="3" rx="1.5" />
                    <rect x="306" y="220" width="70" height="3" rx="1.5" />
                    <rect x="306" y="228" width="60" height="3" rx="1.5" fill="#7FAECB" />
                    
                    <rect x="298" y="238" width="65" height="3" rx="1.5" />
                    <rect x="290" y="248" width="35" height="3" rx="1.5" fill="#5D92B6" />
                    <rect x="298" y="256" width="80" height="3" rx="1.5" />
                    <rect x="298" y="264" width="55" height="3" rx="1.5" />
                    <rect x="290" y="274" width="45" height="3" rx="1.5" />
                  </g>

                  {/* Floating Center Badge on Stand: "</>" */}
                  <g transform="translate(198, 335)">
                    <rect width="68" height="52" rx="8" fill="#296492" />
                    <text
                      x="34"
                      y="37"
                      fill="#FFFFFF"
                      fontSize="26"
                      fontWeight="bold"
                      fontFamily="system-ui, -apple-system, monospace"
                      textAnchor="middle"
                    >
                      &lt;/&gt;
                    </text>
                  </g>

                  {/* Floating Bottom-Right Badge: "C++" */}
                  <g transform="translate(415, 338)">
                    <rect width="68" height="38" rx="6" fill="#296492" />
                    <text
                      x="34"
                      y="26"
                      fill="#FFFFFF"
                      fontSize="20"
                      fontWeight="bold"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor="middle"
                    >
                      C++
                    </text>
                  </g>

                  {/* Left Character: Male Developer in Blue Jacket with Laptop */}
                  <g id="male-developer">
                    {/* Head / Hair */}
                    <path
                      d="M104 225 C101 216 107 207 116 206 C124 205 130 211 130 219 C130 223 128 227 125 229 Z"
                      fill="#2E1C17"
                    />
                    <circle cx="120" cy="222" r="10" fill="#FBD5BE" />
                    {/* Hair Front */}
                    <path
                      d="M109 216 C113 210 124 210 128 216 C125 214 116 213 111 216 Z"
                      fill="#2E1C17"
                    />
                    {/* Face Profile / Glasses */}
                    <circle cx="125" cy="221" r="2.5" fill="#1B3A5A" />
                    <path d="M125 224 Q127 227 125 229" stroke="#2E1C17" strokeWidth="1" fill="none" />

                    {/* White Shirt Neck */}
                    <polygon points="116,232 124,232 120,240" fill="#FFFFFF" />

                    {/* Blue Jacket */}
                    <path
                      d="M106 238 C112 234 128 234 134 238 L136 285 L104 285 Z"
                      fill="#4382B8"
                    />
                    {/* White Inner Shirt */}
                    <polygon points="118,236 122,236 122,285 118,285" fill="#FFFFFF" />

                    {/* Arms holding laptop */}
                    {/* Left Arm */}
                    <path
                      d="M106 242 L98 268 L114 274 L114 266 L106 258 Z"
                      fill="#376E9E"
                    />
                    {/* Right Arm */}
                    <path
                      d="M132 242 L138 266 L124 272 L120 264 L128 254 Z"
                      fill="#4382B8"
                    />
                    {/* Hands */}
                    <circle cx="114" cy="272" r="3.5" fill="#FBD5BE" />
                    <circle cx="123" cy="272" r="3.5" fill="#FBD5BE" />

                    {/* Laptop in Hands */}
                    <polygon points="110,265 142,263 140,278 112,280" fill="#A4B4C4" />
                    <polygon points="112,280 140,278 136,285 110,286" fill="#CBD5E1" />

                    {/* Dark Navy Trousers */}
                    <path
                      d="M105 285 L135 285 L133 388 L122 388 L120 310 L118 310 L116 388 L105 388 Z"
                      fill="#132E4A"
                    />

                    {/* Black Shoes */}
                    <ellipse cx="110" cy="392" rx="8" ry="4" fill="#0B1A2A" />
                    <ellipse cx="128" cy="392" rx="8" ry="4" fill="#0B1A2A" />
                  </g>

                  {/* Right Character: Female Developer Pointing to Screen */}
                  <g id="female-developer">
                    {/* Long Dark Hair Back */}
                    <path
                      d="M380 230 C370 232 360 248 362 268 C364 280 372 290 376 295 C372 275 376 250 384 240 Z"
                      fill="#202936"
                    />
                    {/* Head / Profile */}
                    <circle cx="383" cy="226" r="9" fill="#FBD5BE" />
                    {/* Hair Bun / Style */}
                    <path
                      d="M377 220 C382 214 394 216 395 226 C394 234 386 238 380 235 C374 232 374 224 377 220 Z"
                      fill="#202936"
                    />

                    {/* Blue / Teal Blouse */}
                    <path
                      d="M374 238 C378 234 390 235 394 240 L396 288 L370 288 Z"
                      fill="#287BAA"
                    />

                    {/* Left Arm: Outstretched Pointing at Code Window */}
                    <path
                      d="M376 242 C362 250 348 258 335 264 L332 257 C345 251 360 243 372 238 Z"
                      fill="#287BAA"
                    />
                    {/* Hand with pointing gesture */}
                    <path d="M334 263 L322 268 C320 269 318 266 321 264 L332 257 Z" fill="#FBD5BE" />

                    {/* Right Arm: Resting by side */}
                    <path
                      d="M394 242 C398 254 398 268 396 278 L390 278 C392 268 392 256 388 246 Z"
                      fill="#21648B"
                    />
                    <circle cx="393" cy="281" r="3.5" fill="#FBD5BE" />

                    {/* Dark Navy Trousers */}
                    <path
                      d="M371 288 L396 288 L394 388 L384 388 L383 315 L381 315 L380 388 L370 388 Z"
                      fill="#132E4A"
                    />

                    {/* Dark Shoes */}
                    <ellipse cx="375" cy="392" rx="7" ry="4" fill="#0B1A2A" />
                    <ellipse cx="389" cy="392" rx="7" ry="4" fill="#0B1A2A" />
                  </g>

                  {/* Clean Ground Line */}
                  <rect x="70" y="394" width="400" height="4" rx="2" fill="#296492" />
                </svg>
              </div>
            </div>

            {/* Right Column: Exact 1:1 Copy from reference screenshot */}
            <div className="lg:col-span-7 space-y-4 lg:pl-4">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-[800] text-[#0B0F19] leading-[1.2] tracking-tight">
                Offering Java Development Services
              </h2>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We develop cross-platform, scalable apps for any server system that supports Java. Together, object-oriented programming, robust IDEs, and platform-independent development can help you expedite your Java projects. Our Java developers make use of libraries containing ready-to-integrate codes, reusable components, and frameworks. The industry-focused consultants at Sapphire assess your needs and provide all software requirements. Our project managers evaluate the risks and provide realistic project schedules and budgets.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          WORLD WIDE TOP RATED CLUTCH AWARDS & RECOGNITIONS BAR (ANIMATED MARQUEE 1:1)
          ========================================================================= */}
      <section className="w-full bg-[#005F96] text-white py-5 sm:py-7 border-y border-blue-900/30 overflow-hidden select-none font-sans text-left">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            
            {/* Left Block: Heading + FIXED Golden Trophy Badge */}
            <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
              <h3 className="text-lg sm:text-xl lg:text-[23px] font-[800] tracking-tight text-white leading-[1.25] max-w-[260px] sm:max-w-[300px]">
                World Wide Top Rated IT Company on Clutch
              </h3>

              {/* Fixed Golden Trophy with Laurel Wreath Badge */}
              <div className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  {/* Laurel Wreath */}
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
                  {/* Golden Trophy Cup */}
                  <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                  <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                  <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                  <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                </svg>
              </div>
            </div>

            {/* Right Block: CONTINUOUS INFINITE AUTO-SCROLLING MARQUEE FOR OTHER BADGES */}
            <div className="w-full lg:flex-1 overflow-hidden relative">
              {/* Soft gradient edge fade for seamless scroll */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#005F96] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#005F96] to-transparent z-10 pointer-events-none" />

              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Track 1 */}
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0">
                  {/* Badge 1: Red Ribbon - Dedicated Software Development */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">MOST REVIEWED</text>
                      <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900" fontFamily="sans-serif">DEDICATED</text>
                      <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800" fontFamily="sans-serif">SOFTWARE COMPANY</text>
                      <g fill="#B91C1C" transform="translate(0, -2)">
                        <polygon points="38,58 39.5,61 43,61 40,63 41,66 38,64 35,66 36,63 33,61 36.5,61" />
                        <polygon points="50,56 51.5,59 55,59 52,61 53,64 50,62 47,64 48,61 45,59 48.5,59" />
                        <polygon points="62,58 63.5,61 67,61 64,63 65,66 62,64 59,66 60,63 57,61 60.5,61" />
                      </g>
                      <rect x="42" y="68" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 72 L 54 72 L 50 78 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 2: Clutch Hexagon Badge - Top Developers 2022 */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-md">
                      <polygon points="50,5 92,28 92,82 50,105 8,82 8,28" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
                      <polygon points="50,9 88,30 88,80 50,101 12,80 12,30" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
                      <text x="50" y="25" textAnchor="middle" fill="#64748B" fontSize="5.5" fontWeight="800">TOP DEDICATED</text>
                      <text x="50" y="33" textAnchor="middle" fill="#1E293B" fontSize="5.5" fontWeight="900">SOFTWARE COMPANY</text>
                      <rect x="18" y="38" width="64" height="25" fill="#1E293B" rx="2" />
                      <text x="47" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900">Clutch</text>
                      <circle cx="68" cy="46" r="2.2" fill="#EF4444" />
                      <text x="50" y="74" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="900">DEVELOPERS</text>
                      <text x="50" y="86" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="900">2022</text>
                    </svg>
                  </div>

                  {/* Badge 3: Red Ribbon - Top Rated Software Dev Company */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
                      <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900">SOFTWARE DEV</text>
                      <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800">COMPANY</text>
                      <g fill="#B91C1C">
                        <polygon points="50,60 51.5,63 55,63 52,65 53,68 50,66 47,68 48,65 45,63 48.5,63" />
                      </g>
                      <rect x="42" y="70" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 74 L 54 74 L 50 80 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 4: Red Ribbon - Software Developers */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
                      <text x="50" y="46" textAnchor="middle" fill="#991B1B" fontSize="6.2" fontWeight="900">SOFTWARE DEVELOPERS</text>
                      <text x="50" y="55" textAnchor="middle" fill="#111827" fontSize="5.5" fontWeight="900">USA</text>
                      <g fill="#B91C1C">
                        <polygon points="50,64 51.5,67 55,67 52,69 53,72 50,70 47,72 48,69 45,67 48.5,67" />
                      </g>
                      <rect x="42" y="74" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 78 L 54 78 L 50 84 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 5: GoodFirms Blue Scalloped Badge */}
                  <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <circle cx="50" cy="46" r="38" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="3,2" />
                      <circle cx="50" cy="46" r="34" fill="#2563EB" />
                      <g fill="#FBBF24">
                        <polygon points="50,18 51.5,22 55,22 52,24 53,28 50,25.5 47,28 48,24 45,22 48.5,22" />
                      </g>
                      <path d="M 42 32 L 58 32 L 55 46 C 54 50 46 50 45 46 Z" fill="#F59E0B" />
                      <rect x="48" y="48" width="4" height="6" fill="#D97706" />
                      <rect x="44" y="54" width="12" height="3" rx="1" fill="#B45309" />
                      <text x="50" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900">G</text>
                      <rect x="12" y="60" width="76" height="20" rx="3" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.2" />
                      <text x="50" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900">TOP DEDICATED</text>
                      <text x="50" y="74" textAnchor="middle" fill="#93C5FD" fontSize="4.8" fontWeight="800">SOFTWARE COMPANY</text>
                      <text x="50" y="86" textAnchor="middle" fill="#FDE047" fontSize="4.2" fontWeight="800">goodfirms.co</text>
                    </svg>
                  </div>
                </div>

                {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0" aria-hidden="true">
                  {/* Badge 1: Red Ribbon - Dedicated Software Development */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">MOST REVIEWED</text>
                      <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900" fontFamily="sans-serif">DEDICATED</text>
                      <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800" fontFamily="sans-serif">SOFTWARE COMPANY</text>
                      <g fill="#B91C1C" transform="translate(0, -2)">
                        <polygon points="38,58 39.5,61 43,61 40,63 41,66 38,64 35,66 36,63 33,61 36.5,61" />
                        <polygon points="50,56 51.5,59 55,59 52,61 53,64 50,62 47,64 48,61 45,59 48.5,59" />
                        <polygon points="62,58 63.5,61 67,61 64,63 65,66 62,64 59,66 60,63 57,61 60.5,61" />
                      </g>
                      <rect x="42" y="68" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 72 L 54 72 L 50 78 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 2: Clutch Hexagon Badge - Top Developers 2022 */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-md">
                      <polygon points="50,5 92,28 92,82 50,105 8,82 8,28" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
                      <polygon points="50,9 88,30 88,80 50,101 12,80 12,30" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
                      <text x="50" y="25" textAnchor="middle" fill="#64748B" fontSize="5.5" fontWeight="800">TOP DEDICATED</text>
                      <text x="50" y="33" textAnchor="middle" fill="#1E293B" fontSize="5.5" fontWeight="900">SOFTWARE COMPANY</text>
                      <rect x="18" y="38" width="64" height="25" fill="#1E293B" rx="2" />
                      <text x="47" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900">Clutch</text>
                      <circle cx="68" cy="46" r="2.2" fill="#EF4444" />
                      <text x="50" y="74" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="900">DEVELOPERS</text>
                      <text x="50" y="86" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="900">2022</text>
                    </svg>
                  </div>

                  {/* Badge 3: Red Ribbon - Top Rated Software Dev Company */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
                      <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900">SOFTWARE DEV</text>
                      <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800">COMPANY</text>
                      <g fill="#B91C1C">
                        <polygon points="50,60 51.5,63 55,63 52,65 53,68 50,66 47,68 48,65 45,63 48.5,63" />
                      </g>
                      <rect x="42" y="70" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 74 L 54 74 L 50 80 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 4: Red Ribbon - Software Developers */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
                      <text x="50" y="46" textAnchor="middle" fill="#991B1B" fontSize="6.2" fontWeight="900">SOFTWARE DEVELOPERS</text>
                      <text x="50" y="55" textAnchor="middle" fill="#111827" fontSize="5.5" fontWeight="900">USA</text>
                      <g fill="#B91C1C">
                        <polygon points="50,64 51.5,67 55,67 52,69 53,72 50,70 47,72 48,69 45,67 48.5,67" />
                      </g>
                      <rect x="42" y="74" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 78 L 54 78 L 50 84 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 5: GoodFirms Blue Scalloped Badge */}
                  <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <circle cx="50" cy="46" r="38" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="3,2" />
                      <circle cx="50" cy="46" r="34" fill="#2563EB" />
                      <g fill="#FBBF24">
                        <polygon points="50,18 51.5,22 55,22 52,24 53,28 50,25.5 47,28 48,24 45,22 48.5,22" />
                      </g>
                      <path d="M 42 32 L 58 32 L 55 46 C 54 50 46 50 45 46 Z" fill="#F59E0B" />
                      <rect x="48" y="48" width="4" height="6" fill="#D97706" />
                      <rect x="44" y="54" width="12" height="3" rx="1" fill="#B45309" />
                      <text x="50" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900">G</text>
                      <rect x="12" y="60" width="76" height="20" rx="3" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.2" />
                      <text x="50" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900">TOP DEDICATED</text>
                      <text x="50" y="74" textAnchor="middle" fill="#93C5FD" fontSize="4.8" fontWeight="800">SOFTWARE COMPANY</text>
                      <text x="50" y="86" textAnchor="middle" fill="#FDE047" fontSize="4.2" fontWeight="800">goodfirms.co</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          GET CUTTING-EDGE JAVA APP DEVELOPMENT SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered H2 Title (Single Line) */}
          <div className="text-center w-full max-w-5xl mx-auto mb-7 sm:mb-9">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight whitespace-normal md:whitespace-nowrap">
              Get Cutting-Edge Java App Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Light-Blue Patterned Quote Panel with Pointer */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[10px] p-8 sm:p-10 flex flex-col justify-start relative overflow-hidden shadow-xs min-h-[340px]">
              {/* Topographic Watermark Contour Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" viewBox="0 0 400 400" fill="none" stroke="#D2E8F6" strokeWidth="1.2">
                <path d="M-40 60 C 50 20, 140 130, 220 70 C 300 10, 370 110, 440 80" />
                <path d="M-40 120 C 60 70, 160 180, 250 120 C 330 60, 390 170, 440 140" />
                <path d="M-40 180 C 80 130, 180 240, 280 170 C 360 110, 400 230, 440 200" />
                <path d="M-40 240 C 100 190, 200 300, 300 230 C 380 170, 420 290, 440 260" />
                <path d="M-40 300 C 120 250, 220 360, 320 290 C 400 230, 430 350, 440 320" />
                <ellipse cx="120" cy="180" rx="55" ry="40" stroke="#D2E8F6" strokeWidth="1" />
                <ellipse cx="280" cy="240" rx="80" ry="60" stroke="#D2E8F6" strokeWidth="1" />
              </svg>

              {/* Right Speech Bubble Arrow Pointer */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-[#F0F8FC] z-20" />

              {/* Big Teal Quote Icon */}
              <div className="text-[#005F96] mb-5 relative z-10">
                <svg viewBox="0 0 44 34" className="w-11 h-8.5 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              {/* Quote Headline */}
              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] tracking-tight leading-[1.25] relative z-10">
                Get Custom Applications That Take Your Business To The Next Level.
              </h3>
            </div>

            {/* Right Column: Two Detailed Paragraphs matching reference 1:1 */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal">
                It's time to take your enterprise architecture strategy to the next level with our Java app development services. Firevy is a reliable AI-powered Java software development company with a team of experts who develop high-concurrency, cost-efficient Java applications. As a leading Java software development company, we offer the best Java cross-platform development services using Spring Boot, Hibernate, microservices, and modern JVM tooling.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal">
                During every stage of the Java development process, our Java software architects optimize your systems for high throughput, security, and low latency for your end-users. We have delivered our Java software development services to Fortune 500 enterprises, small & medium-sized businesses, as well as venture-backed start-ups. Get in touch with Firevy to know more about our services tailored right for you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          OUR PREMIUM SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          SUCCESS STORIES (EXACT 1:1 MATCH FROM REFERENCE SCREENSHOT)
          ========================================================================= */}
      <JavaSuccessStoriesSection />

      {/* =========================================================================
          JAVA APPLICATION DEVELOPMENT SERVICES (EXACT 1:1 MATCH WITH HOVER)
          ========================================================================= */}
      <JavaApplicationServicesSection />

      {/* =========================================================================
          PROUD TO HAVE PICKED THESE UP ALONG THE WAY (EXACT 1:1 MATCH)
          ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          JAVA BENEFITS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <JavaBenefitsSection />

      {/* =========================================================================
          BUSINESS FRIENDLY HIRING MODELS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          UNVEILING OUR INNOVATIVE SOLUTION (EXACT 1:1 MATCH)
          ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          PROCESS WE FOLLOW (EXACT 1:1 MATCH)
          ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          OUR STORY, THEIR WORDS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          TRUSTED BY THE WORLD'S LEADING BRANDS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SUCCESS MATRIX (EXACT 1:1 MATCH)
          ========================================================================= */}
      <SuccessMatrix />

      {/* =========================================================================
          TECHNOLOGY STACK (EXACT 1:1 MATCH)
          ========================================================================= */}
      <JavaTechStackSection />

      {/* =========================================================================
          WE HAVE BEEN FEATURED IN (EXACT 1:1 MATCH WITH HOVER COLOR)
          ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          DIGITAL TRANSFORMATION (CASE STUDIES SLIDER 1:1 MATCH)
          ========================================================================= */}
      <DigitalTransformationSlider />

      {/* Remaining Service Components */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our Java enterprise application development services."
        faqs={javaFaqs}
      />
      <AndroidRecentBlogsSection />
      <AndroidWhatSetsUsApartSection />
      <AndroidChallengeCtaBanner />
    </div>
  );
};

export default JavaDevelopmentService;
