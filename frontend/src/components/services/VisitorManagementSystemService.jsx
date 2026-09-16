import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import WorkProcessGrid from '../home/WorkProcessGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import FeaturedInMedia from '../common/FeaturedInMedia';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../common/RecentBlogsSection';
import {
  UserCheck,
  ShieldCheck,
  QrCode,
  Bell,
  Printer,
  FileCheck,
  Building,
  User,
  Users,
  Search,
  Star,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Lock,
  Smartphone,
  Sliders,
  DollarSign,
  AlertTriangle,
  Check,
  Clock
} from 'lucide-react';

export const VisitorManagementSystemService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Visitor Management & Gate Pass System',
    budget: '$25,000 - $50,000',
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

  // Official FAQs matching reference Screenshot 4
  const sapphireFaqs = [
    {
      id: 1,
      question: '1. What is the definition of a visitor management system?',
      answer: 'A visitor management system, often known as the visitor check-in system, has become one of the most common means of securing facilities/offices and protecting employees and visitors. It delivers real-time information about office visitors at any given moment and tips on creating a great visitor experience.'
    },
    {
      id: 2,
      question: '2. Why is a visitor management system necessary?',
      answer: 'A VMS improves physical security by tracking who enters and exits your facility, preventing unauthorized access, ensuring regulatory compliance, printing visitor badges, and providing instant host notification alerts.'
    },
    {
      id: 3,
      question: '3. Why is an Office visitor management system used?',
      answer: 'Office visitor management systems replace paper logbooks with digital iPad/tablet kiosks or QR code check-ins. They streamline guest registration, automate NDA signing, issue digital passes, and maintain complete visitor records.'
    },
    {
      id: 4,
      question: '4. What are the security and management functions of visitor tracking software?',
      answer: 'Key functions include ID scanning and photo capture, badge printing, emergency roll-call checklists, host email/SMS notifications, watchlist screening, and physical access control gate turnstile integrations.'
    },
    {
      id: 5,
      question: '5. What makes Sapphire Software Solutions a trusted provider of visitor management systems?',
      answer: 'We provide 100% customizable gate pass software, enterprise cloud scalability, seamless physical access control integrations, 24/7 SLA maintenance, and 100% source code ownership.'
    },
    {
      id: 6,
      question: '6. Does Sapphire Software Solutions provide cloud-based visitor management systems?',
      answer: 'Yes, we develop cloud-native visitor management solutions with multi-branch enterprise support, central cloud dashboards, real-time analytics, and mobile app access for security managers.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Visitor Management System Development Company | Gate Pass System"
        description="Top Visitor Management System development company in USA. Build custom kiosk visitor check-in apps, QR gate passes, facial recognition, and host alerts."
        canonical="/services/visitor-management-system"
      />

      {/* Hero Banner */}
      <SapphireLightHeroBanner
        title="Visitor Management System in USA"
        subtitle="Digital or Electronic gate access control system has become an industry standard and an essential function for schools, colleges, offices, hospitals, factories, industries, gated communities, residential apartments & societies, and at nearly all other locations where people live, work or visit."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="visitor"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* Section 1: Visitor Management Software For Businesses (1:1 Reference Screenshot 1) */}
      <section className="py-16 md:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Entrance Check-in & Barrier Rope Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[480px] bg-[#F4F8FC] rounded-3xl p-6 sm:p-8 flex items-center justify-center border border-slate-200/60 shadow-xs">
                <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Wall Frames */}
                  <rect x="70" y="40" width="30" height="30" fill="none" stroke="#64748B" strokeWidth="3" />
                  <rect x="120" y="20" width="30" height="30" fill="none" stroke="#64748B" strokeWidth="3" />
                  <rect x="170" y="20" width="50" height="70" fill="none" stroke="#64748B" strokeWidth="4" />
                  <path d="M 185 40 Q 195 55 205 45" stroke="#64748B" strokeWidth="2.5" fill="none" />
                  <rect x="240" y="30" width="55" height="40" fill="none" stroke="#64748B" strokeWidth="3.5" />
                  <path d="M 250 50 Q 267 35 285 55" fill="#64748B" opacity="0.4" />

                  {/* Barrier Posts & Rope */}
                  <rect x="80" y="210" width="6" height="50" fill="#94A3B8" />
                  <circle cx="83" cy="207" r="5" fill="#64748B" />
                  <rect x="360" y="210" width="6" height="50" fill="#94A3B8" />
                  <circle cx="363" cy="207" r="5" fill="#64748B" />
                  <path d="M 83 207 Q 223 260 363 207" stroke="#CBD5E1" strokeWidth="7" fill="none" />

                  {/* Left Man Figure (Blue Backpack & Jacket) */}
                  <circle cx="145" cy="115" r="14" fill="#FDBA74" />
                  <path d="M 132 110 Q 145 100 158 110 Z" fill="#1E293B" />
                  <path d="M 125 138 C 125 130 135 128 145 128 C 155 128 165 130 165 138 V 220 L 153 285 H 142 L 132 220 Z" fill="#0284C7" />
                  <rect x="115" y="140" width="12" height="35" rx="4" fill="#0F172A" />
                  <path d="M 137 220 V 285 H 147 V 220 Z" fill="#1E293B" />
                  <path d="M 149 220 V 285 H 159 V 220 Z" fill="#1E293B" />
                  <rect x="135" y="282" width="16" height="6" rx="2" fill="#EF4444" />
                  <rect x="147" y="282" width="16" height="6" rx="2" fill="#EF4444" />

                  {/* Right Woman Figure (Yellow Top & Black Pants) */}
                  <circle cx="310" cy="120" r="14" fill="#FDE047" />
                  <path d="M 296 115 C 296 100 324 100 324 115 V 135 Z" fill="#0F172A" />
                  <path d="M 292 142 C 292 135 300 132 310 132 C 320 132 328 135 328 142 V 190 L 322 285 H 312 L 305 190 Z" fill="#EAB308" />
                  <path d="M 300 190 V 285 H 312 V 190 Z" fill="#1E293B" />
                  <path d="M 314 190 V 285 H 325 V 190 Z" fill="#1E293B" />
                  <rect x="298" y="282" width="16" height="6" rx="2" fill="#EF4444" />
                  <rect x="312" y="282" width="16" height="6" rx="2" fill="#EF4444" />
                </svg>
              </div>
            </div>

            {/* Right Column: Title & Text */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Visitor Management Software For Businesses
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                Today, a robust gate pass security system is essential for fostering a healthy work environment for all workers. This has a direct effect on overall success and productivity. Employees and other company members should feel secure knowing that dependable visitor management software has processed every visitor or guest who has entered a workplace or facility. Consequently, the organization has complete control over the visitor's <span className="font-bold text-[#005F96]">event management app development</span> with an access control system. Thus, Best Visitor Management System provides the critical function of monitoring who is present on the grounds.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Brief About Visitor Management System (1:1 Reference Screenshot 2) */}
      <section className="py-16 md:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Text & Paragraphs */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Brief About Visitor Management System
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                Using Cloud-based visitor management system, you'll never again have to worry about visitor data management across various offices in several geographic regions. Track all visitor statistics, including time spent, entry/exit times, and frequency of visits using the visitor management system app.
              </p>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                The visitor management system for offices offers a straightforward installation process that allows it to run in minutes across many contexts, including mobile, tablet, and desktop.
              </p>
            </div>

            {/* Right Column: Analytics Dashboard & People Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[480px] bg-[#EEF6FC] rounded-3xl p-6 sm:p-8 flex items-center justify-center border border-slate-200/60 shadow-xs">
                <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Dashboard Board */}
                  <rect x="80" y="40" width="220" height="150" rx="6" fill="#38BDF8" />
                  <rect x="85" y="45" width="210" height="140" rx="4" fill="#60A5FA" />
                  <circle cx="125" cy="80" r="15" fill="white" />
                  <rect x="150" y="65" width="120" height="12" rx="3" fill="white" />
                  <rect x="150" y="85" width="80" height="8" rx="2" fill="white" opacity="0.8" />
                  <path d="M 95 145 Q 140 110 180 130 T 280 115" stroke="white" strokeWidth="4" fill="none" />
                  <circle cx="255" cy="140" r="18" stroke="white" strokeWidth="6" fill="none" />

                  {/* Left Man (Blue Shirt & Dark Trousers) */}
                  <circle cx="140" cy="155" r="14" fill="#FDBA74" />
                  <path d="M 126 150 Q 140 140 154 150 Z" fill="#0F172A" />
                  <path d="M 122 178 C 122 170 130 168 140 168 C 150 168 158 170 158 178 V 225 L 152 285 H 142 L 135 225 Z" fill="#0284C7" />
                  <path d="M 134 225 V 285 H 144 V 225 Z" fill="#1E293B" />
                  <path d="M 146 225 V 285 H 156 V 225 Z" fill="#1E293B" />

                  {/* Right Man (Yellow Shirt & Dark Trousers) */}
                  <circle cx="340" cy="150" r="14" fill="#FDBA74" />
                  <path d="M 326 145 Q 340 135 354 145 Z" fill="#0F172A" />
                  <path d="M 322 173 C 322 165 330 163 340 163 C 350 163 358 165 358 173 V 220 L 352 285 H 342 L 335 220 Z" fill="#EAB308" />
                  <path d="M 334 220 V 285 H 344 V 220 Z" fill="#1E293B" />
                  <path d="M 346 220 V 285 H 356 V 220 Z" fill="#1E293B" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: World Wide Top Rated IT Company on Clutch Banner */}
      <ClutchTopRatedBanner />

      {/* Section 4: Get 100% Customizable Visitor Management Software By Experts (1:1 Reference Screenshot 3) */}
      <section className="py-16 md:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
              Get 100% Customizable Visitor Management Software By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Box: Easy-To-Use, Complete Security Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#E6F3FA] via-[#D9EEF8] to-[#CCE6F5] rounded-3xl p-8 sm:p-10 border border-cyan-100 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[260px]">
              <div className="text-5xl font-serif text-[#005F96] font-black leading-none mb-3">
                “
              </div>
              <h3 className="text-2xl sm:text-3xl font-[900] text-[#005F96] tracking-tight leading-snug font-sans">
                Easy-To-Use, Complete Security
              </h3>
            </div>

            {/* Right Column: Paragraph 1 & Paragraph 2 */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                You can grant rights to restricted areas of your building to different people depending on their requirements with the help of visitor management solutions to access gate control. These people may include family and friends who visit, coworkers who need guest access for important meetings, or visitors who require high-level clearance for sensitive situations.
              </p>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                When deciding on guest privileges, work attendance requirements, or access restrictions within specific premises, our remote gate access control systems allow you to implement customized rules effortlessly. Whether it's granting access to employees, visitors, or service providers, our solutions ensure safety and security without compromise. As an <span className="font-bold text-[#005F96]">on demand app development company</span>, we understand the importance of tailored solutions, and our systems provide flexibility and control to meet your unique access management needs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Premium Services Section (1:1 Reference Screenshot 4) */}
      <PremiumServicesGrid />

      {/* Success Stories & Portfolio Showcase Section (1:1 Reference Screenshots 4 & 5) */}
      <SuccessStoriesSection category="general" />

      {/* Features Of Our Visitor Management Software Section */}
      <section className="py-16 md:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight">
              Features Of Our Visitor Management Software
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              Our team can design visitor management software at the most competitive rates and in no time. Our expertise includes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {/* Card 1: Planned Visitors */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center mb-5">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Planned Visitors</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our best gate access control system solution streamlines arranging for and managing guests at your business. Collect precise information about the guests due to come, and ensure you know every aspect of their itinerary.
                </p>
              </div>
            </div>

            {/* Card 2: Ad-Hoc Visitors */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Ad-Hoc Visitors</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  You'll be able to accommodate impromptu guests with our streamlined solution for managing visitors without causing disruptions to your business's operations or lowering its level of safety.
                </p>
              </div>
            </div>

            {/* Card 3: Visitor Screening */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100/70 text-orange-600 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Visitor Screening</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  You should install visitor management and pre-screening tools to help automate the admittance process. Limiting lineups at the entrance and reducing wait times are both benefits of implementing touchless visitor check-in or pre-screening.
                </p>
              </div>
            </div>

            {/* Card 4: QR Code Scanning */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center mb-5">
                  <QrCode className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">QR Code Scanning</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Visitors may quickly check-in by scanning a QR code or generating their visitor form, which is easy to fill out and can be processed quickly. The visitor management software solutions that we provide are simple to use.
                </p>
              </div>
            </div>

            {/* Card 5: Badge Printing */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-100/70 text-pink-600 flex items-center justify-center mb-5">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Badge Printing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  The safety of your guests, while they are on your premises is ensured by the visitor management system in India that we provide. For proper identification, a photograph of each visitor is stored inside a visitor badge management system.
                </p>
              </div>
            </div>

            {/* Card 6: Digital Document Signing */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100/70 text-cyan-600 flex items-center justify-center mb-5">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Digital Document Signing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  When signing non-disclosure agreements (NDAs), waivers, or legal agreements, ensure that secrecy is maintained by using digital signatures. It's possible that digitally signing papers is the most effective approach to prevent sensitive information from escaping.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <a
              href="#quote-form"
              className="px-8 py-3.5 bg-[#005F96] hover:bg-[#004B77] text-white font-bold text-sm sm:text-base rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Get A Free Quote For Your Project</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Proud To Have Picked These Up Along The Way Banner */}
      <section className="py-12 bg-[#005F96] text-white font-sans text-left relative overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-white tracking-tight leading-tight">
                Proud To Have Picked These Up Along The Way
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Card 1: Clutch */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full border-2 border-slate-900 flex flex-col items-center justify-center mb-2 p-1">
                  <span className="text-[8px] font-bold leading-tight uppercase tracking-tighter">CLIENTS SAY WE DELIVER ON</span>
                  <span className="text-[11px] font-black text-slate-900 tracking-tight">Clutch</span>
                </div>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
              </div>

              {/* Card 2: Upwork */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full border-2 border-emerald-600 flex flex-col items-center justify-center mb-2 p-1">
                  <span className="text-[10px] font-black text-emerald-600">Upwork</span>
                  <span className="text-[8px] font-bold text-emerald-700 uppercase">TOP RATED</span>
                </div>
                <span className="text-[10px] font-bold text-slate-600">TOP RATED</span>
              </div>

              {/* Card 3: Freelancer */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full border-2 border-sky-500 flex flex-col items-center justify-center mb-2 p-1">
                  <span className="text-[9px] font-bold text-sky-600">freelancer</span>
                  <span className="text-[7px] font-extrabold text-sky-700 uppercase">PREFERRED</span>
                </div>
                <span className="text-[10px] font-bold text-slate-600">PREFERRED FREELANCER</span>
              </div>

              {/* Card 4: GoodFirms */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full border-2 border-blue-600 flex flex-col items-center justify-center mb-2 p-1">
                  <span className="text-[8px] font-bold text-blue-600 uppercase">VIEW OUR PROFILE</span>
                  <span className="text-[8px] font-black text-blue-800">goodfirms.co</span>
                </div>
                <span className="text-[10px] font-bold text-slate-600">TOP FIRM</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits of Visitor Management System Section */}
      <section className="py-16 md:py-20 bg-slate-50/50 text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight">
              Benefits of Visitor Management System
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              Visitor Management Systems (VMS) improve security, efficiency, and visitor experience for companies and organizations. Six main benefits:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Enhance Security</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  VMSs properly record and monitor visitor enters and exits, improving security. It can verify IDs, print badges, and take photos to restrict access to approved users. Security staff may get real-time warnings and notifications of suspected activity.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Streamlined Check-in</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Customers can check in fast via self-service kiosks or pre-registration with a VMS. Visitors have a smoother experience with fewer wait periods and administrative tasks. Check-in is much faster with pre-registration.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Correct Visitor Tracking</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  An organization may track visitor identities, purpose, entrance and leave times, and host data using a VMS. Fast visitor record retrieval, contact tracing, and regulatory compliance are possible with this precise tracking.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Better Guest Experience</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Pre-registration, digital signs, and customized badges make the visitor experience more engaging and efficient. Convenience and efficiency win over visitors, improving company image.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Analytics, data</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  VMS helps firms identify visitor patterns, peak attendance periods, and other trends. This data may maximize workforce, facilities management, and operational efficiency. Comprehensive reporting offers total clarity.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Emergency Management</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  VMS can rapidly and accurately identify all on-site visitors, helping with evacuation and ensuring everyone is safe. Improved safety practices and health and safety compliance depend on real-time roll calls.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Business Friendly Hiring Models Section */}
      <section className="py-16 md:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Fixed Price */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-center">
              <div>
                <div className="w-14 h-14 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4 border border-purple-100 text-xl font-bold">
                  $
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Fixed Price</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6 min-h-[72px]">
                  If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.
                </p>

                <div className="space-y-2.5 text-left mb-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Optimal flexibility</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Agile team</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Small projects</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Complete control over budget</span>
                  </div>
                </div>
              </div>

              <a
                href="#quote-form"
                className="w-full py-2.5 bg-[#005F96] hover:bg-[#004B77] text-white font-bold text-sm rounded-lg transition-all text-center block shadow-sm"
              >
                Hire Now
              </a>
            </div>

            {/* Card 2: Time Material */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-center">
              <div>
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Time Material</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6 min-h-[72px]">
                  If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.
                </p>

                <div className="space-y-2.5 text-left mb-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>No hidden costs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Working based ongoing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Monthly billing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Pay only for measurable work</span>
                  </div>
                </div>
              </div>

              <a
                href="#quote-form"
                className="w-full py-2.5 bg-[#005F96] hover:bg-[#004B77] text-white font-bold text-sm rounded-lg transition-all text-center block shadow-sm"
              >
                Hire Now
              </a>
            </div>

            {/* Card 3: Dedicated Team */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-center">
              <div>
                <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-4 border border-orange-100">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Dedicated Team</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6 min-h-[72px]">
                  If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.
                </p>

                <div className="space-y-2.5 text-left mb-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>No hidden costs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>160 hours of assured work</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Monthly billing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Pay only for measurable work</span>
                  </div>
                </div>
              </div>

              <a
                href="#quote-form"
                className="w-full py-2.5 bg-[#005F96] hover:bg-[#004B77] text-white font-bold text-sm rounded-lg transition-all text-center block shadow-sm"
              >
                Hire Now
              </a>
            </div>

            {/* Card 4: Buckets Approach */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-center">
              <div>
                <div className="w-14 h-14 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mx-auto mb-4 border border-cyan-100">
                  <Sliders className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Buckets Approach</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6 min-h-[72px]">
                  A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.
                </p>

                <div className="space-y-2.5 text-left mb-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Direct Resource Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Less Risk</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Less budget</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#005F96] shrink-0" />
                    <span>Pay only for measurable work</span>
                  </div>
                </div>
              </div>

              <a
                href="#quote-form"
                className="w-full py-2.5 bg-[#005F96] hover:bg-[#004B77] text-white font-bold text-sm rounded-lg transition-all text-center block shadow-sm"
              >
                Hire Now
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Unveiling Our Innovative Solution Video Slider Section */}
      <InnovativeVideoSlider />

      {/* Process We Follow Section (Home Page Component) */}
      <WorkProcessGrid />

      {/* Our Story, Their Words (Video Testimonials) */}
      <VideoTestimonialsStory />

      {/* Trusted By The World's Leading Brands */}
      <TrustedBrandsGrid />

      {/* Experience & Clutch Reviews Matrix Section (Home Page 6x2 Grid Component) */}
      <SuccessMatrixGrid />

      {/* Technology Stack Section (Reference Screenshot 1) */}
      <SapphireTechStackGrid />

      {/* We Have Been Featured In Section (Reference Screenshot 2) */}
      <FeaturedInMedia />

      {/* Digital Transformation Through Innovation and Collective Knowledge (Reference Screenshot 3) */}
      <DigitalTransformationSlider />

      {/* Frequently Asked Questions with Stats & Badges (Reference Screenshot 4) */}
      <SapphireFaqSection customFaqs={sapphireFaqs} />

      {/* Our Recent Blogs Section (Reference Screenshot 5) */}
      <RecentBlogsSection />
    </div>
  );
};

export default VisitorManagementSystemService;
