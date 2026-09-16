import React, { useEffect, useState } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import { Link, useLocation } from 'react-router-dom';
import BRAND from '../constants/brand';
import TrustMarquee from '../components/home/TrustMarquee';
import TrustRecognitionBanner from '../components/home/TrustRecognitionBanner';
import FeaturedInLogosGrid from '../components/home/FeaturedInLogosGrid';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import companyPublicService from '../services/companyPublicService';
import { ArrowRight, Play, X } from 'lucide-react';

export const VideoTestimonial = () => {
  const location = useLocation();
  const isPreview = new URLSearchParams(location.search).get('preview') === 'true';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [sectionData, setSectionData] = useState(null);
  const [dynamicVideos, setDynamicVideos] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  useEffect(() => {
    companyPublicService.getSection('video-testimonial', isPreview).then(setSectionData).catch(console.error);
    companyPublicService.getVideoTestimonials().then((items) => {
      if (items && items.length > 0) setDynamicVideos(items);
    }).catch(console.error);
  }, [isPreview]);

  const videoTestimonialsData = [
    {
      id: 1,
      title: `Hear out Tim got to say about working with Team ${BRAND.name} on building a complex and unique web application.`,
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      clientName: 'Tim',
      clientRole: 'Founder, US Tech Startup'
    },
    {
      id: 2,
      title: `Testimonial from client who has expanded their business using ${BRAND.name} Services`,
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      clientName: 'Robert Vance',
      clientRole: 'Managing Director, Aus Corp'
    },
    {
      id: 3,
      title: `Hear what Pravin has got to say about working with ${BRAND.name} Software Solutions`,
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      clientName: 'Pravin',
      clientRole: 'VP of Engineering'
    },
    {
      id: 4,
      title: 'Web & Mobile App Solutions | Leading IT Company in Canada',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      clientName: 'Sarah Jenkins',
      clientRole: 'Product Lead, Canada'
    },
    {
      id: 5,
      title: 'Top 100 App Development Company in USA!',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      clientName: 'Michael',
      clientRole: 'CEO, Digital Agency'
    },
    {
      id: 6,
      title: "Christina's Testimonial Video Shines Bright!",
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      clientName: 'Christina',
      clientRole: 'Head of Operations'
    },
    {
      id: 7,
      title: `From Idea to Reality | Client's Success Story with ${BRAND.name} - Best Mobile App Development Company`,
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      clientName: 'David Miller',
      clientRole: 'Founder & CEO'
    },
    {
      id: 8,
      title: `From Vision to Wellness | Client's Success Story with ${BRAND.name} - Top Mobile App Development Company`,
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
      clientName: 'Alex Thorne',
      clientRole: 'CTO, HealthTech'
    },
    {
      id: 9,
      title: `From Vision to Education | Client's Success Story with ${BRAND.name} Solutions`,
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      clientName: 'Elena Rostova',
      clientRole: 'EdTech Director'
    },
    {
      id: 10,
      title: `Scaling Cloud Architectures & Mobile Integration for Global Logistics`,
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80',
      clientName: 'Marcus Bennett',
      clientRole: 'VP of Technology'
    },
    {
      id: 11,
      title: `How ${BRAND.name} Transformed Our Legacy SaaS Core Into High-Scale Microservices`,
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
      clientName: 'Julian Hayes',
      clientRole: 'Co-Founder'
    },
    {
      id: 12,
      title: 'Building Zero-Trust Fintech Security Architecture with 99.99% Availability',
      videoSrc: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80',
      clientName: 'Daniel Vance',
      clientRole: 'Chief Information Security Officer'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Video Testimonials | Client Video Reviews | ${BRAND.name}`}
        description={`Watch authentic video testimonials from our global clients. Hear directly from founders, CTOs, and IT directors about partnering with ${BRAND.name}.`}
        canonical="/company/video-testimonial"
      />

      {/* ============================================================
          1. HERO SECTION ("Stories From Our Clients!") - Screenshot 1
          ============================================================ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F4F8FA] border-b border-slate-200/60 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[36px] sm:text-[46px] md:text-[52px] font-[800] text-slate-900 leading-[1.15] tracking-tight font-sans">
                {sectionData?.title || 'Stories From Our Clients!'}
              </h1>
              
              <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed font-[400] max-w-xl font-sans">
                {sectionData?.subtitle || "Voice of our Customers, Their trust transformed into words. You'll find excerpts from our clients, reflecting their views on client service, creativity, process, communication style, and more."}
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg group font-sans"
                >
                  <span>{sectionData?.ctaText || 'Get In Touch'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Isometric Laptop Graphic with Video Badges */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-full max-w-[500px] h-[320px] sm:h-[360px] flex items-center justify-center">
                
                <svg viewBox="0 0 550 400" className="w-full h-full drop-shadow-2xl overflow-visible">
                  {/* Floating Video Bubble Header */}
                  <g transform="translate(320, 50)">
                    <rect x="0" y="0" width="110" height="38" rx="19" fill="#FFFFFF" filter="drop-shadow(0 8px 12px rgba(0,0,0,0.1))" />
                    <circle cx="24" cy="19" r="11" fill="#006B8F" />
                    <polygon points="21,14 30,19 21,24" fill="#FFFFFF" />
                    <text x="68" y="24" textAnchor="middle" fill="#006B8F" fontSize="13" fontWeight="800" fontFamily="sans-serif">WATCH</text>
                  </g>

                  {/* Main Isometric Laptop */}
                  <g transform="translate(150, 90)">
                    <polygon points="40,20 230,20 260,170 10,170" fill="#0284C7" stroke="#0369A1" strokeWidth="3" />
                    <polygon points="50,30 220,30 248,160 22,160" fill="#0F172A" />
                    
                    {/* Video Cards Grid on Laptop Screen */}
                    <g transform="translate(45, 45)">
                      <rect x="0" y="0" width="48" height="36" rx="4" fill="#0369A1" />
                      <circle cx="24" cy="18" r="8" fill="#38BDF8" />
                      <polygon points="22,14 28,18 22,22" fill="#FFFFFF" />

                      <rect x="58" y="0" width="48" height="36" rx="4" fill="#0369A1" />
                      <circle cx="82" cy="18" r="8" fill="#38BDF8" />
                      <polygon points="80,14 86,18 80,22" fill="#FFFFFF" />

                      <rect x="116" y="0" width="48" height="36" rx="4" fill="#0369A1" />
                      <circle cx="140" cy="18" r="8" fill="#38BDF8" />
                      <polygon points="138,14 144,18 138,22" fill="#FFFFFF" />
                    </g>

                    <polygon points="10,170 260,170 300,220 -30,220" fill="#1E293B" />
                    <polygon points="0,173 250,173 285,215 -18,215" fill="#334155" />
                  </g>

                  {/* Play Button Badge */}
                  <g transform="translate(60, 140)">
                    <rect x="0" y="0" width="100" height="34" rx="17" fill="#006B8F" />
                    <text x="50" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">REVIEWS ▶</text>
                  </g>

                  {/* Character Standing */}
                  <g transform="translate(370, 150)">
                    <circle cx="20" cy="18" r="14" fill="#38BDF8" />
                    <path d="M 5,55 C 5,35 35,35 35,55 Z" fill="#0284C7" />
                    <rect x="12" y="55" width="6" height="45" fill="#0F172A" />
                    <rect x="22" y="55" width="6" height="45" fill="#0F172A" />
                  </g>
                </svg>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          2. LOGOS MARQUEE STRIP
          ============================================================ */}
      <section className="py-6 bg-white border-b border-slate-100 overflow-hidden">
        <TrustMarquee />
      </section>

      {/* ============================================================
          3. VIDEO TESTIMONIALS GRID (Screenshots 2 & 3 Match)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] text-slate-900 font-sans border-b border-slate-200">
        <Container>
          
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              {sectionData?.contentSections?.[0]?.title || 'Video Testimonials'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(dynamicVideos || videoTestimonialsData).map((item) => (
              <div
                key={item._id || item.id}
                onClick={() => setActiveVideoModal(item.videoSrc || item.videoUrl)}
                className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Top Card Banner with Curved Blue Wave & Circular Avatar */}
                <div className="bg-gradient-to-br from-[#0284C7] via-[#006B8F] to-[#0F172A] pt-8 pb-6 px-4 relative flex items-center justify-center overflow-hidden">
                  
                  {/* Decorative Waves SVG */}
                  <svg viewBox="0 0 400 120" className="absolute bottom-0 left-0 w-full h-16 pointer-events-none opacity-40" preserveAspectRatio="none">
                    <path d="M0,40 C150,90 250,10 400,60 L400,120 L0,120 Z" fill="#38BDF8" />
                    <path d="M0,60 C180,10 280,80 400,30 L400,120 L0,120 Z" fill="#F0F9FF" />
                  </svg>

                  {/* Circular Avatar */}
                  <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white/90 shadow-md overflow-hidden bg-slate-100 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={item.avatar || item.clientAvatar}
                      alt={item.clientName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Card Content & Play Button Row */}
                <div className="bg-[#F4F9FC] p-6 flex-1 flex items-center justify-between space-x-4 border-t border-slate-200/80">
                  <p className="text-[14px] sm:text-[14.5px] font-[700] text-slate-800 leading-snug font-sans text-left">
                    {item.title}
                  </p>
                  
                  <div className="w-10 h-10 rounded-full bg-[#006B8F] group-hover:bg-[#004D68] text-white flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-110">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* ============================================================
          4. PROUD TO HAVE PICKED THESE UP ALONG THE WAY BANNER
          ============================================================ */}
      <TrustRecognitionBanner />

      {/* ============================================================
          5. WE HAVE BEEN FEATURED IN LOGOS GRID
          ============================================================ */}
      <FeaturedInLogosGrid title="We Have Been Featured In" />

      {/* ============================================================
          5. CTA BANNER & NEWSLETTER SECTION
          ============================================================ */}
      <WorkTogetherNewsletterSection
        title="Ready To Get Started?"
        subtitle={`Learn how ${BRAND.name} can help you build better relationships with your customers. Start a conversation today.`}
        buttonText="Request A Free Quote"
      />

      {/* ============================================================
          VIDEO MODAL POPUP
          ============================================================ */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-[16px] overflow-hidden shadow-2xl border border-slate-700">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full">
              <video
                src={activeVideoModal}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default VideoTestimonial;
