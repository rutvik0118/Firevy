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
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import WorkProcessGrid from '../home/WorkProcessGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import FeaturedInMedia from '../common/FeaturedInMedia';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../common/RecentBlogsSection';
import WarehouseWhatSetsUsApartSection from './WarehouseWhatSetsUsApartSection';
import {
  Boxes,
  Layers,
  Smartphone,
  Sliders,
  Database,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Check,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

export const WarehouseManagementSystemService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Warehouse Management & WMS System',
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

  // Official FAQs matching Sapphire Warehouse Management System
  const sapphireFaqs = [
    {
      id: 1,
      question: '1. What is a Warehouse Management System (WMS)?',
      answer: 'A Warehouse Management System (WMS) is enterprise software that controls and optimizes daily warehouse operations, including receiving, putaway, picking, packing, inventory tracking, and shipping.'
    },
    {
      id: 2,
      question: '2. Does the WMS support industrial barcode scanners (Zebra / Honeywell)?',
      answer: 'Yes, we build native applications optimized for industrial Android handheld scanners (Zebra, Honeywell, Datalogic) with dedicated hardware laser scanner SDKs.'
    },
    {
      id: 3,
      question: '3. Do you provide complete source code and technical documentation?',
      answer: 'Yes, we provide 100% source code ownership and technical documentation upon project completion.'
    },
    {
      id: 4,
      question: '4. Do you sign Non-Disclosure Agreements (NDAs)?',
      answer: 'Yes, we sign strict NDAs before project kickoff to guarantee full data privacy.'
    },
    {
      id: 5,
      question: '5. Can your WMS integrate with our existing ERP (SAP, Oracle, NetSuite)?',
      answer: 'Yes, we build custom bi-directional API connectors for SAP, Oracle, NetSuite, Microsoft Dynamics 365, and QuickBooks.'
    },
    {
      id: 6,
      question: '6. What post-launch SLA support do you offer?',
      answer: 'We provide 24/7 server health monitoring, ERP integration updates, and SLA maintenance.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Warehouse Management System Development Company | WMS Software"
        description="Top Warehouse Management System (WMS) development company in USA. Build custom AI-driven WMS software, barcode stock tracking, RFID, and ERP integrations."
        canonical="/services/warehouse-management-system"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Warehouse Management System in USA"
        subtitle="Our comprehensive warehouse inventory management software and consulting services include creating cloud-based software."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="warehouse"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* Section 1: Inventory Warehouse Management Software Development (Screenshot 1) */}
      <section className="py-16 md:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Worker with Clipboard & Package Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[480px] bg-[#EEF6FC] rounded-3xl p-6 sm:p-8 flex items-center justify-center border border-slate-200/60 shadow-xs relative overflow-hidden min-h-[300px]">
                <svg className="w-full h-auto max-h-[280px]" viewBox="0 0 450 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Location Pin Background Accent */}
                  <path d="M 90 140 C 90 115 110 95 135 95 C 160 95 180 115 180 140 C 180 170 135 210 135 210 C 135 210 90 170 90 140 Z" fill="#38BDF8" opacity="0.4" />
                  <circle cx="135" cy="135" r="12" fill="white" />

                  {/* Paper Plane Graphic */}
                  <path d="M 400 120 L 440 90 L 420 140 L 410 125 L 400 120 Z" fill="#0284C7" />

                  {/* Boxes Stack & Trolley */}
                  <rect x="70" y="180" width="60" height="50" fill="#0284C7" rx="3" />
                  <rect x="220" y="170" width="110" height="60" fill="#0284C7" rx="4" />
                  <path d="M 215 230 H 345 V 135 H 350" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="235" cy="232" r="8" fill="#0F172A" />
                  <circle cx="325" cy="232" r="8" fill="#0F172A" />

                  {/* Man Standing Holding Yellow Box & Clipboard */}
                  <circle cx="230" cy="90" r="14" fill="#FDBA74" />
                  <path d="M 216 85 Q 230 75 244 85 Z" fill="#0F172A" />
                  <path d="M 210 115 C 210 106 220 104 230 104 C 240 104 250 106 250 115 V 175 L 244 240 H 234 L 224 175 Z" fill="#0284C7" />
                  <path d="M 223 175 V 240 H 233 V 175 Z" fill="#1E293B" />
                  <path d="M 235 175 V 240 H 245 V 175 Z" fill="#1E293B" />

                  {/* Yellow Package Box Held in Left Arm */}
                  <rect x="180" y="130" width="35" height="35" rx="3" fill="#EAB308" />
                  <path d="M 180 140 H 215 M 197 130 V 165" stroke="#CA8A04" strokeWidth="2" />

                  {/* White Clipboard Held in Right Arm */}
                  <rect x="260" y="125" width="24" height="32" rx="2" fill="white" stroke="#94A3B8" strokeWidth="2" />
                  <rect x="268" y="122" width="8" height="4" rx="1" fill="#475569" />
                  <line x1="264" y1="135" x2="278" y2="135" stroke="#94A3B8" strokeWidth="1.5" />
                  <line x1="264" y1="141" x2="278" y2="141" stroke="#94A3B8" strokeWidth="1.5" />
                  <line x1="264" y1="147" x2="274" y2="147" stroke="#94A3B8" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Right Column: Title & Paragraph */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Inventory Warehouse Management Software Development
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                Transferring warehouse data, developing warehouse management solutions, optimizing WMS software, ERP and IoT connections, and more. You may automate all warehouse management system processes to improve efficiency if you have a specialized Enterprise warehouse management system provider specifically for Cloud-based warehouse management software. The Best warehouse management system cover various features, including RFID tracking, task delegation, EDI communications, reporting, and analytics, to optimize routine procedures with improved accuracy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Brief About Warehouse Management System (Screenshot 2) */}
      <section className="py-16 md:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Text & Paragraphs */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Brief About Warehouse Management System
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                We use cutting-edge tools and technology to provide your company with the most effective Warehouse Management System in USA. The Custom warehouse management system development includes the use of the agile development paradigm, enabling us to rapidly design products, test them, and then enhance them using fast iterations.
              </p>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                The professionals in charge of our software warehouse management system have more than ten years of expertise facilitating effective warehouse operations. They are experts in efficiently standardizing and organizing warehouse operations, which is what a warehouse management system means—streamlining and optimizing every step of your inventory and logistics processes.
              </p>
            </div>

            {/* Right Column: 2 Warehouse Workers & Boxes Trolley Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[480px] bg-[#EEF6FC] rounded-3xl p-6 sm:p-8 flex items-center justify-center border border-slate-200/60 shadow-xs relative overflow-hidden min-h-[300px]">
                <svg className="w-full h-auto max-h-[280px]" viewBox="0 0 450 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Glass Window Frame */}
                  <rect x="290" y="40" width="80" height="110" fill="none" stroke="#93C5FD" strokeWidth="3" />
                  <line x1="290" y1="95" x2="370" y2="95" stroke="#93C5FD" strokeWidth="2" />
                  <rect x="300" y="55" width="25" height="25" rx="3" fill="#38BDF8" opacity="0.8" />
                  <path d="M 308 67 L 313 72 L 321 62" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Pallet Trolley with Blue Stacked Boxes */}
                  <rect x="200" y="115" width="70" height="30" fill="#38BDF8" rx="2" />
                  <rect x="200" y="148" width="80" height="32" fill="#60A5FA" rx="2" />
                  <rect x="190" y="183" width="90" height="35" fill="#0284C7" rx="2" />
                  <path d="M 175 220 H 310 V 170 H 315" stroke="#38BDF8" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <circle cx="195" cy="222" r="7" fill="#0F172A" />
                  <circle cx="290" cy="222" r="7" fill="#0F172A" />

                  {/* Left Worker (Pushing Trolley, Yellow Shirt & Dark Pants) */}
                  <circle cx="145" cy="115" r="14" fill="#FDBA74" />
                  <path d="M 131 110 Q 145 100 159 110 Z" fill="#0F172A" />
                  <path d="M 125 138 C 125 130 135 128 145 128 C 155 128 165 130 165 138 V 190 L 158 245 H 148 L 138 190 Z" fill="#EAB308" />
                  <path d="M 137 190 V 245 H 147 V 190 Z" fill="#1E293B" />
                  <path d="M 149 190 V 245 H 159 V 190 Z" fill="#1E293B" />

                  {/* Right Worker (Woman Holding Tablet, Blue Top & Black Skirt/Pants) */}
                  <circle cx="335" cy="130" r="14" fill="#FDE047" />
                  <path d="M 321 125 C 321 110 349 110 349 125 V 145 Z" fill="#0F172A" />
                  <path d="M 315 152 C 315 145 325 142 335 142 C 345 142 355 145 355 152 V 195 L 348 245 H 338 L 328 195 Z" fill="#0284C7" />
                  <path d="M 327 195 V 245 H 337 V 195 Z" fill="#1E293B" />
                  <path d="M 339 195 V 245 H 349 V 195 Z" fill="#1E293B" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: World Wide Top Rated IT Company on Clutch Banner */}
      <ClutchTopRatedBanner />

      {/* Section 4: Get 100% Customizable Warehouse Management Software By Experts (Screenshot 3) */}
      <section className="py-16 md:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
              Get 100% Customizable Warehouse Management Software By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Box: Secure And User-Friendly Solution */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#E6F3FA] via-[#D9EEF8] to-[#CCE6F5] rounded-3xl p-8 sm:p-10 border border-cyan-100 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[260px]">
              <div className="text-5xl font-serif text-[#005F96] font-black leading-none mb-3">
                “
              </div>
              <h3 className="text-2xl sm:text-3xl font-[900] text-[#005F96] tracking-tight leading-snug font-sans">
                Secure And User-Friendly Solution
              </h3>
            </div>

            {/* Right Column: Paragraph 1 & Paragraph 2 */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                You can achieve excellent operational efficiency with Warehouse Management System in USA, which will help you save significant money. This can be accomplished via automation and a smooth flow of information regarding transactions and inventories using software for the warehouse management system. As part of our inventory management software warehouse solutions, RFID readers, QR scanners, and other tracking devices transmit real-time updates to the centralized platform, so you won't have to worry about your merchandise being stolen, misplaced, or lost.
              </p>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal font-sans">
                Optimizing the whole supply chain is much simpler when you have a warehouse management system USA linked with legacy systems such as ERP and APIs provided by third-party logistics providers. <span className="font-bold text-[#005F96]">On demand app development company</span> further optimized due to the software for warehouse management system's ability to effectively assist you in planning inventory's incoming and outward path.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 5: Our Premium Services */}
      <PremiumServicesGrid />

      {/* Section 6: Success Stories & Portfolio Showcase */}
      <SuccessStoriesSection category="general" />

      {/* Section 7: Expertise Of Our Warehouse Management Software (Screenshot 5) */}
      <section className="py-16 md:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight">
              Expertise Of Our Warehouse Management Software
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              We provide Warehouse management solutions for businesses looking to skyrocket their operations. Our expertise includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center mb-5">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Warehouse Software Development</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We provide a warehouse management system for eCommerce to help optimize processes, control operations, and traceability of items. It offers complete control over all aspects of the shipping and delivery procedures.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Warehouse Software Integration</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We provide an integrated service for warehouse software with ERP systems so that current warehouse management solutions can better use their existing capabilities.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100/70 text-orange-600 flex items-center justify-center mb-5">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Warehouse Mobile App Solutions</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We design warehouse management system for small business that make logistical operations more efficient. They can fulfill all of the needs for the warehouse, such as fleet management, route planning, and shipment tracking.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center mb-5">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">WMS Consulting</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We provide advisory services to help you personalize the flow of your application, enhance the warehouse process so that it runs more smoothly, and make other improvements to the warehouse operating operations.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-100/70 text-pink-600 flex items-center justify-center mb-5">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Warehouse Data Migration</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We use a system that is both organized and effective in delivering our warehouse data transfer services. It guarantees that the master and dynamic data will migrate successfully into the destination system.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100/70 text-cyan-600 flex items-center justify-center mb-5">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">WMS Based On The Internet Of Things (IoT)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We provide warehouse management system software in India based on an IoT architecture suited for various sensor technologies. Our IoT-based WMS services feature sophisticated tracking.
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

      {/* Benefits of Warehouse Management System Section (Reference Screenshot 1) */}
      <section className="py-16 md:py-20 bg-slate-50/50 text-left font-sans border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight">
              Benefits of Warehouse Management System
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              Businesses may improve efficiency and accuracy by using a Warehouse Management System (WMS). Six important benefits:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Increased productivity */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Increased productivity</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  WMSs automate inventory monitoring, order picking, and delivery. Employees may concentrate on key tasks since automation saves time and effort. WMSs streamline processes, increasing warehouse productivity and throughput.
                </p>
              </div>
            </div>

            {/* Card 2: More accurate inventory */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">More accurate inventory</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  In real-time, a WMS shows inventory levels and locations, providing precise stock monitoring. Overstocking and stockouts are prevented by enhanced accuracy, improved inventory management, and lowered carrying costs.
                </p>
              </div>
            </div>

            {/* Card 3: Upgraded Order Fulfillment */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Upgraded Order Fulfillment</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  WMS algorithms and automation optimize order picking and packaging. This improves order fulfillment, reduces mistakes, and expedites delivery. Keep customers happy and loyal with efficient order fulfillment.
                </p>
              </div>
            </div>

            {/* Card 4: Space optimization */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Space optimization</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  A WMS analyzes storage patterns and inventory placement based on size, weight, and demand to optimize warehouse layout and space use. Space optimization boosts storage capacity and throughput.
                </p>
              </div>
            </div>

            {/* Card 5: Improving Labor Management */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Improving Labor Management</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  WMS solutions improve labor management, including staff performance and productivity. By monitoring KPIs, firms may improve, manage resources, and employ workers efficiently.
                </p>
              </div>
            </div>

            {/* Card 6: Using data to decide */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005F96] flex items-center justify-center mb-5">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Using data to decide</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  WMSs analyze warehouse operations data to provide insights and reports. This data helps organizations make choices, see patterns, and improve. Data-driven decision-making elevates operational performance.
                </p>
              </div>
            </div>
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

      {/* Technology Stack Section */}
      <SapphireTechStackGrid />

      {/* We Have Been Featured In Section */}
      <FeaturedInMedia />

      {/* Digital Transformation Through Innovation and Collective Knowledge */}
      <DigitalTransformationSlider />

      {/* Frequently Asked Questions with Stats & Badges */}
      <SapphireFaqSection customFaqs={sapphireFaqs} />

      {/* Our Recent Blogs Section */}
      <RecentBlogsSection />

      {/* What Sets Us Apart & Have Challenge To Address CTA Banner (Screenshots 1 & 2) */}
      <WarehouseWhatSetsUsApartSection />
    </div>
  );
};

export default WarehouseManagementSystemService;
