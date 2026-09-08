import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Code2,
  Globe,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Users,
  Award,
  X
} from 'lucide-react';
import Container from '../common/Container';
import SEO from '../common/SEO';
import WorkTogetherNewsletterSection from '../home/WorkTogetherNewsletterSection';

export const InsightfulVideosPage = () => {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [selectedVideoModal, setSelectedVideoModal] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const tagContainerRef = useRef(null);

  // Industry Categories (Exact list from live site & Image 1)
  const industryCategories = [
    'All',
    'Utilities',
    'Ecommerce',
    'Technology',
    'Real Estate',
    'HR',
    'Logistics',
    'Human Resource',
    'HealthCare',
    'Social',
    'Entertainment',
    'Personal Care & Cosmetic',
    'Agriculture',
    'Education',
    'Marketplace',
    'Food & Beverages'
  ];

  // Brand Logos Row (Exact from live site & Image 1)
  const brandLogos = [
    { name: 'Toyota', img: '/images/trusted_brands/toyota_logo.webp' },
    { name: 'Almarai', img: '/images/trusted_brands/almarai_corporate_logo.png' },
    { name: 'Orient Cement', img: '/images/trusted_brands/orient_logo.svg' },
    { name: 'American Express', img: '/images/trusted_brands/logo_american_express.svg' },
    { name: 'Alembic', img: '/images/trusted_brands/alembic_logo.svg' },
    { name: 'Honda', img: '/images/trusted_brands/honda_logo.png' },
    { name: 'LafargeHolcim', img: '/images/trusted_brands/logo_lafargeHolcim.svg' },
    { name: 'Cummins', img: '/images/trusted_brands/ncummins.png' },
    { name: 'L\'Oreal', img: '/images/trusted_brands/logo_loreal.png' },
    { name: 'TDSG', img: '/images/trusted_brands/logo_tdsg.png' },
    { name: 'Astral', img: '/images/trusted_brands/logo_astral.png' },
    { name: 'Adani', img: '/images/trusted_brands/logo_adani.svg' }
  ];

  // Video Showcase Items with mapping
  const videoList = [
    {
      id: 1,
      industry: 'HealthCare',
      title: 'Revolutionizing Diet & Nutrition App Development with Sapphire - Best AI Development company in USA',
      duration: '4:20 Min',
      tag: 'HealthCare & AI',
      img: '/images/homeinnovation/eleventh.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Explore how AI-powered calorie scanning, real-time diet adjustment algorithms, and personalized wellness coaching transform modern health mobile apps.'
    },
    {
      id: 2,
      industry: 'Utilities',
      title: 'Revolutionizing Water Distribution System: Our New App for National Water Supply Corporation',
      duration: '5:15 Min',
      tag: 'Utilities & IoT',
      img: '/images/homeinnovation/tenth.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Discover our cutting-edge IoT and mobile monitoring ecosystem digitizing water supply networks, leak detections, and billing automation.'
    },
    {
      id: 3,
      industry: 'Technology',
      title: 'Unlock Innovation with Sapphire Software Solutions: Hire Mobile App Developers in the USA!',
      duration: '3:45 Min',
      tag: 'Technology',
      img: '/images/homeinnovation/second.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Scale your engineering squads with pre-vetted senior mobile app engineers delivering high-performance iOS and Android architectures.'
    },
    {
      id: 4,
      industry: 'Technology',
      title: 'Elevate Your Business with Sapphire Software Solutions: Hire iOS App Developers in USA!',
      duration: '4:10 Min',
      tag: 'Technology',
      img: '/images/homeinnovation/fourth.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Deep dive into native Apple ecosystem development, CoreML integrations, App Store optimization, and enterprise security compliance.'
    },
    {
      id: 5,
      industry: 'Technology',
      title: 'Unlock Innovation with Sapphire Software Solutions: Hire Android App Developers in the USA!',
      duration: '3:50 Min',
      tag: 'Technology',
      img: '/images/homeinnovation/third.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Learn how our Android development team builds scalable, battery-optimized, and device-responsive mobile applications for global audiences.'
    },
    {
      id: 6,
      industry: 'Ecommerce',
      title: 'Unlock Digital Excellence with Sapphire : Top Web Application Development Company in USA!',
      duration: '4:30 Min',
      tag: 'Ecommerce & Web',
      img: '/images/homeinnovation/fifth.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Discover modern cloud-native architectures, React/Next.js frontends, microservices, and high-throughput databases built for scale.'
    },
    {
      id: 7,
      industry: 'Real Estate',
      title: 'Smart Real Estate Property Discovery & 3D Virtual Tour Mobile Platform',
      duration: '4:50 Min',
      tag: 'Real Estate',
      img: '/images/homeinnovation/first.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Next-generation PropTech mobile application featuring immersive 360-degree virtual property walkthroughs and automated agent appointment scheduling.'
    },
    {
      id: 8,
      industry: 'HR',
      title: 'Global Workforce Management & Payroll Automation Suite for Enterprise Enterprises',
      duration: '5:10 Min',
      tag: 'HR & HCM',
      img: '/images/homeinnovation/sixth.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Streamlining cross-border employee compliance, dynamic shift scheduling, automated payroll calculation, and digital performance appraisals.'
    },
    {
      id: 9,
      industry: 'Logistics',
      title: 'Omnichannel Logistics & Fleet Management Mobile App Suite for Global Supply Chains',
      duration: '3:35 Min',
      tag: 'Logistics',
      img: '/images/homeinnovation/tenth.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Real-time GPS fleet tracking, AI route optimization, driver companion applications, and real-time digital proof of delivery.'
    },
    {
      id: 10,
      industry: 'Social',
      title: 'Next-Gen Social Video Sharing & Creator Monetization Platform with Low-Latency Streaming',
      duration: '4:15 Min',
      tag: 'Social Media',
      img: '/images/homeinnovation/seventh.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Ultra-fast video encoding, personalized recommendation feed, live-streaming tipping, and interactive community channels.'
    },
    {
      id: 11,
      industry: 'Entertainment',
      title: 'OTT Streaming Video-on-Demand Platform with DRM Security & Offline Downloads',
      duration: '5:30 Min',
      tag: 'Entertainment',
      img: '/images/homeinnovation/ninth.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Multi-device cross-platform media streaming engine with adaptive bitrate streaming, Widevine DRM protection, and parental controls.'
    },
    {
      id: 12,
      industry: 'Food & Beverages',
      title: 'On-Demand Multi-Restaurant Food Ordering & Contactless Cloud Kitchen Ecosystem',
      duration: '3:55 Min',
      tag: 'Food & Beverages',
      img: '/images/homeinnovation/eleventh.webp',
      youtubeId: 'dQw4w9WgXcQ',
      desc: 'Dynamic kitchen order ticketing, real-time rider dispatch algorithms, customized loyalty rewards, and customer review moderation.'
    }
  ];

  // Filtered videos based on activeIndustry
  const filteredVideos =
    activeIndustry === 'All'
      ? videoList
      : videoList.filter((v) => v.industry.toLowerCase() === activeIndustry.toLowerCase() || (activeIndustry === 'Human Resource' && v.industry === 'HR'));

  // Scroll handlers for tags
  const scrollTags = (direction) => {
    if (tagContainerRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      tagContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Client Video Testimonials
  const clientTestimonials = [
    {
      id: 1,
      img: '/images/awards/hdimages/clienttestimonial1.png',
      title: 'Hear out Tim got to say about working with Team Sapphire on building a complex and unique web application.',
      client: 'Tim Vance',
      country: 'United States',
      tag: 'Web Platform'
    },
    {
      id: 2,
      img: '/images/awards/hdimages/clienttestimonial2.png',
      title: 'Testimonial from client who has expanded their business using Sapphire Services.',
      client: 'Pravin Patel',
      country: 'Canada',
      tag: 'Business Scaling'
    },
    {
      id: 3,
      img: '/images/awards/hdimages/clienttestimonial3.png',
      title: 'Sapphire Successfully Delivered Web & Mobile App Solutions - Leading IT Company in Canada.',
      client: 'Christina Edwards',
      country: 'United Kingdom',
      tag: 'Enterprise Delivery'
    },
    {
      id: 4,
      img: '/images/awards/hdimages/vision_client.png',
      title: 'Discover why Andrew trusted Sapphire Software Solutions with his mobile digital diary project : A Client’s Honest Experience.',
      client: 'Andrew Robertson',
      country: 'Australia',
      tag: 'Mobile Innovation'
    },
    {
      id: 5,
      img: '/images/awards/hdimages/img_client2.png',
      title: 'From Vision to Healthcare Innovation | Client Success With Sapphire - Top IT Company.',
      client: 'Dr. Marcos Santos',
      country: 'Brazil',
      tag: 'Healthcare App'
    },
    {
      id: 6,
      img: '/images/awards/hdimages/img_client6.png',
      title: 'From Idea to Reality | Client\'s Success Story with Sapphire - Best Mobile App Development Company.',
      client: 'Sarah Jenkins',
      country: 'USA',
      tag: 'SaaS Platform'
    }
  ];

  // Premium Services
  const premiumServices = [
    { title: 'Mobile App Development', desc: 'Native iOS & Android and cross-platform Flutter solutions.', icon: Smartphone, link: '/services' },
    { title: 'Software Development', desc: 'Custom enterprise software and automated backend engines.', icon: Code2, link: '/services' },
    { title: 'Web Development', desc: 'Modern responsive web applications with React & Next.js.', icon: Globe, link: '/services' },
    { title: '.NET Development', desc: 'Enterprise-grade C# .NET Core web APIs and microservices.', icon: Cpu, link: '/services' },
    { title: 'Flutter App Development', desc: 'Single codebase hybrid mobile apps with smooth 60fps UX.', icon: Layers, link: '/services' },
    { title: 'PHP Development', desc: 'Scalable web applications and custom portal frameworks.', icon: Zap, link: '/services' },
    { title: 'Hire Dedicated Developers', desc: 'Dedicated full-time senior developers for your roadmap.', icon: Users, link: '/contact' },
    { title: 'MERN Stack Development', desc: 'MongoDB, Express, React, Node.js modern full stack.', icon: Code2, link: '/services' },
    { title: 'Full Stack Development', desc: 'End-to-end frontend, backend, database, and DevOps.', icon: Layers, link: '/services' },
    { title: 'Laravel Development', desc: 'Robust PHP Laravel MVC solutions for web enterprises.', icon: ShieldCheck, link: '/services' }
  ];

  // 8 Process Steps
  const processSteps = [
    {
      num: '01',
      title: 'Requirement Gathering',
      desc: 'Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.'
    },
    {
      num: '02',
      title: 'Designs, Wireframes, & Mockups',
      desc: 'We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.'
    },
    {
      num: '03',
      title: 'Prototype Demo',
      desc: 'After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.'
    },
    {
      num: '04',
      title: 'Changes And Confirmation',
      desc: "Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same."
    },
    {
      num: '05',
      title: 'Development',
      desc: 'With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.'
    },
    {
      num: '06',
      title: 'Deployment',
      desc: 'We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client\'s platform.'
    },
    {
      num: '07',
      title: 'Support And Maintenance',
      desc: 'We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement.'
    },
    {
      num: '08',
      title: 'SEO & Promotion',
      desc: 'We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.'
    }
  ];

  // Key Matrix Stats
  const keyMetrics = [
    { value: '23+', label: 'Years of Experience' },
    { value: '320+', label: '5-Star Clutch Reviews' },
    { value: '50+', label: 'Fortune 500 Companies' },
    { value: '200+', label: 'IT Professionals' },
    { value: '99.4%', label: 'Client Retention' },
    { value: '20+', label: 'Industries Served' },
    { value: '2800+', label: 'Satisfied Clients' },
    { value: '1500+', label: 'Completed Projects' }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-[#006B8F] selection:text-white">
      <SEO
        title="Creative Ideas into Digital Solutions | Insightful Videos | Sapphire Software Solutions"
        description="Explore insightful videos and services that help you develop, launch, and manage digital solutions efficiently. Elevate your business with our expert guidance."
        canonical="/company/insightful-videos"
      />

      {/* ============================================================
          1. HERO BANNER SECTION (Exact Match with Image 1)
          ============================================================ */}
      <section className="pt-28 pb-14 bg-[#F4F9FC] relative overflow-hidden text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-[16px] sm:text-[17.5px] font-[400] text-slate-700 leading-[1.65] max-w-xl font-sans">
                Now unleash the power of new ideas with our award-winning mobile app development company in USA. It's time to convert your ideas to life, whether you want solutions that work on iOS, Android, or both. Contact us now!
              </p>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[5px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[480px]">
                <img
                  src="/images/sapphire_mobile_app_development_company_in_usa/Image_1.svg"
                  alt="Mobile App Development Company in USA"
                  className="w-full h-auto object-contain mx-auto select-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          2. TRUSTED BRANDS LOGO BANNER (Exact Match with Image 1)
          ============================================================ */}
      <section className="py-7 bg-white border-b border-slate-100 overflow-hidden font-sans">
        <Container>
          <div className="flex items-center justify-between gap-8 overflow-x-hidden py-1 px-2">
            {brandLogos.map((brand, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                style={{ height: '42px' }}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="max-h-[34px] max-w-[115px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          3. UNVEILING OUR INNOVATIVE SOLUTION (Industry Carousel - Image 1)
          ============================================================ */}
      <section className="py-16 bg-white text-center font-sans border-b border-slate-100">
        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Unveiling Our Innovative Solution
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] font-[400] text-slate-600 leading-relaxed font-sans">
              From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation.
            </p>
          </div>

          {/* Industry Main Tab Header with downward indicator */}
          <div className="flex flex-col items-center mb-0">
            <div className="relative inline-block pb-2">
              <span className="text-[18px] font-[800] text-[#006B8F] tracking-tight">
                Industry
              </span>
              {/* Downward triangle pointer */}
              <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-[#006B8F] mx-auto mt-1" />
            </div>
          </div>

          {/* Industry Sub-Tabs 2-Row Box (Exact match with Image 1) */}
          <div className="max-w-5xl mx-auto mt-1 mb-12 p-3 sm:p-4 rounded-[16px] bg-[#EBF5FB]/70 border border-[#cde5f4] relative flex items-center shadow-xs">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollTags('left')}
              className="w-7 h-7 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#006B8F] hover:shadow-md shrink-0 transition-all z-10 mr-3"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* 2-Row Tags Grid / Container */}
            <div
              ref={tagContainerRef}
              className="flex-1 grid grid-cols-4 sm:grid-cols-8 gap-2 justify-items-center items-center py-1"
            >
              {industryCategories.map((cat, idx) => {
                const isActive = activeIndustry === cat;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIndustry(cat);
                      setVisibleCount(6);
                    }}
                    className={`w-full text-center px-2 sm:px-3 py-1.5 rounded-[5px] text-[12px] sm:text-[13px] font-[600] transition-all whitespace-nowrap font-sans ${
                      isActive
                        ? 'bg-[#006B8F] text-white shadow-xs font-[700]'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90 hover:border-[#006B8F]/50 shadow-2xs'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollTags('right')}
              className="w-7 h-7 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#006B8F] hover:shadow-md shrink-0 transition-all z-10 ml-3"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredVideos.slice(0, visibleCount).map((v) => (
              <div
                key={v.id}
                className="rounded-[18px] bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Thumbnail with Play Overlay */}
                <div
                  className="relative h-52 bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedVideoModal(v)}
                >
                  <img
                    src={v.img}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/95 text-[#006B8F] group-hover:bg-[#006B8F] group-hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Top Tag & Duration */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-cyan-300 text-[11px] font-[700] border border-white/10">
                    {v.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-black/75 text-white text-[11px] font-[600]">
                    {v.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[16px] font-[800] text-slate-900 leading-snug font-sans group-hover:text-[#006B8F] transition-colors mb-2 line-clamp-2">
                      {v.title}
                    </h3>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed font-sans line-clamp-2">
                      {v.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedVideoModal(v)}
                      className="text-[13px] font-[700] text-[#006B8F] hover:underline inline-flex items-center space-x-1 font-sans"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Video</span>
                    </button>
                    <Link
                      to="/contact"
                      className="text-[12.5px] font-[600] text-slate-500 hover:text-slate-800 font-sans"
                    >
                      Hire Experts →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredVideos.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="px-9 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md font-sans"
              >
                Load More Videos
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* ============================================================
          4. CLIENT TESTIMONIALS VIDEO SECTION
          ============================================================ */}
      <section className="py-20 bg-[#F4F9FC] text-left font-sans border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Client Video Testimonials
            </h2>
            <p className="text-[15px] font-[400] text-slate-600 leading-relaxed font-sans">
              From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTestimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-[18px] bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div
                  className="relative h-48 bg-slate-900 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedVideoModal({ title: item.title, youtubeId: 'dQw4w9WgXcQ' })}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="w-13 h-13 rounded-full bg-white/90 text-[#006B8F] group-hover:bg-[#006B8F] group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[11px] font-[700]">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-[14px] font-[700] text-slate-900 leading-snug font-sans mb-4 group-hover:text-[#006B8F] transition-colors">
                    {item.title}
                  </p>
                  <div className="flex items-center justify-between text-[12.5px] text-slate-500 pt-3 border-t border-slate-100">
                    <span className="font-[700] text-slate-800">{item.client}</span>
                    <span>{item.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          5. WHAT WE OFFER / PREMIUM SERVICES
          ============================================================ */}
      <section className="py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Explore Our Premium Services
            </h2>
            <p className="text-[15px] font-[400] text-slate-600 leading-relaxed font-sans">
              Accelerate your digital transformation journey with full-lifecycle software development and mobile engineering services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {premiumServices.map((svc, i) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-[18px] bg-[#F8FAFC] border border-slate-200/80 hover:border-[#006B8F]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[12px] bg-[#006B8F]/10 text-[#006B8F] group-hover:bg-[#006B8F] group-hover:text-white flex items-center justify-center mb-5 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-[17px] font-[800] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-2 font-sans">
                      {svc.title}
                    </h3>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed font-sans">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-4 border-t border-slate-200/60">
                    <Link
                      to={svc.link}
                      className="text-[13px] font-[700] text-[#006B8F] group-hover:text-[#005478] inline-flex items-center space-x-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          6. AGILE PROCESS METHODOLOGY (8 Steps)
          ============================================================ */}
      <section className="py-20 bg-[#F4F9FC] text-left font-sans border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              The Process We Follow
            </h2>
            <p className="text-[15px] font-[400] text-slate-600 leading-relaxed font-sans">
              Our proven 8-step software and mobile development methodology ensures high reliability, transparent delivery, and predictable milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((st, i) => (
              <div
                key={i}
                className="p-6 rounded-[16px] bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[28px] font-[900] text-[#006B8F]/30 block mb-2 font-mono">
                    {st.num}
                  </span>
                  <h3 className="text-[16px] font-[800] text-slate-900 mb-2 font-sans">
                    {st.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          7. SUCCESS MATRIX & KEY STATS
          ============================================================ */}
      <section className="py-20 bg-white text-center font-sans border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto mb-14">
            <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Proven Track Record of Excellence
            </h2>
            <p className="text-[15px] font-[400] text-slate-600 leading-relaxed font-sans">
              Global enterprises, startups, and institutions partner with us for mission-critical software solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {keyMetrics.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-[18px] bg-[#F8FAFC] border border-slate-200/80 hover:bg-[#F0F8FB] hover:border-[#006B8F]/30 transition-all duration-300"
              >
                <div className="text-[32px] sm:text-[38px] font-[900] text-[#006B8F] tracking-tight font-sans mb-1">
                  {item.value}
                </div>
                <div className="text-[13px] sm:text-[14px] font-[600] text-slate-600 font-sans">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Clutch Rating Banner */}
          <div className="mt-12 p-8 rounded-[20px] bg-gradient-to-r from-slate-900 via-[#0a2540] to-slate-900 text-white max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-left space-y-1">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="font-[800] text-white text-[15px] ml-2">4.9 / 5.0</span>
              </div>
              <h4 className="text-[18px] font-[800] text-white">
                Rated Top Mobile & Web Development Company on Clutch
              </h4>
              <p className="text-[13px] text-slate-300">
                Based on 320+ verified client reviews across USA, UK, Canada, and Australia.
              </p>
            </div>

            <Link
              to="/contact"
              className="shrink-0 px-7 py-3.5 rounded-[8px] bg-[#006B8F] hover:bg-[#008cb8] text-white font-[700] text-[14px] transition-all shadow-lg font-sans"
            >
              Hire Developers Now
            </Link>
          </div>
        </Container>
      </section>

      {/* ============================================================
          8. WORK TOGETHER NEWSLETTER / CTA
          ============================================================ */}
      <WorkTogetherNewsletterSection />

      {/* ============================================================
          9. VIDEO PLAYBACK MODAL
          ============================================================ */}
      {selectedVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-[20px] overflow-hidden shadow-2xl border border-slate-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80">
              <h4 className="text-[15px] font-[700] text-white truncate pr-4">
                {selectedVideoModal.title}
              </h4>
              <button
                onClick={() => setSelectedVideoModal(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoModal.youtubeId || 'dQw4w9WgXcQ'}?autoplay=1`}
                title={selectedVideoModal.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightfulVideosPage;
