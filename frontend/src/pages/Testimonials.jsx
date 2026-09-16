import React, { useEffect } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import { Link } from 'react-router-dom';
import BRAND from '../constants/brand';
import TrustMarquee from '../components/home/TrustMarquee';
import BrandLogoGrid from '../components/home/BrandLogoGrid';
import TrustRecognitionBanner from '../components/home/TrustRecognitionBanner';
import FeaturedInLogosGrid from '../components/home/FeaturedInLogosGrid';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import { ArrowRight, Quote, Star } from 'lucide-react';

import companyPublicService from '../services/companyPublicService';

export const Testimonials = () => {
  const isPreview = typeof window !== 'undefined' && window.location.search.includes('preview=true');
  const [dynamicSection, setDynamicSection] = useState(null);
  const [reviews, setReviews] = useState(testimonialsList);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    companyPublicService.getSection('client-testimonials', isPreview).then((data) => {
      if (data) setDynamicSection(data);
    }).catch(console.error);

    companyPublicService.getClutchReviews().then((data) => {
      if (data && data.length > 0) {
        const mapped = data.map((item, idx) => ({
          id: item._id || item.id || idx,
          name: item.clientName || item.name,
          location: item.location || item.company || 'Verified Client',
          avatar: item.avatar || item.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          text: item.review || item.text || ''
        }));
        setReviews(mapped);
      }
    }).catch(console.error);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={dynamicSection?.seo?.metaTitle || `Client Testimonials | What Our Clients Say | ${BRAND.name}`}
        description={dynamicSection?.seo?.metaDescription || `Read verified client testimonials and reviews for ${BRAND.name}. Discover why Fortune 500s, ISVs, and startups trust us as their dedicated tech partner.`}
        canonical="/company/client-testimonials"
      />

      {/* ============================================================
          1. HERO SECTION ("Celebrating The Successful Partnerships")
          ============================================================ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F4F8FA] border-b border-slate-200/60 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-[800] text-slate-900 leading-[1.18] tracking-tight font-sans">
                {dynamicSection?.title || 'Celebrating The Successful Partnerships'}
              </h1>
              
              <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed font-[400] max-w-xl font-sans">
                {dynamicSection?.subtitle || `People Said At ${BRAND.name}, we ensure 100% customer satisfaction in everything we deliver. Read our customer testimonials to know how much we are loved by our customers.`}
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg group font-sans"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Isometric Laptop & Reviews Vector Illustration (1:1 Reference Match) */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-full max-w-[500px] h-[320px] sm:h-[360px] flex items-center justify-center">
                
                <svg viewBox="0 0 550 400" className="w-full h-full drop-shadow-2xl overflow-visible">
                  <defs>
                    <linearGradient id="reviewGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                  </defs>

                  {/* Star Badges */}
                  <g transform="translate(60, 110)">
                    <rect x="0" y="0" width="80" height="30" rx="6" fill="#FBBF24" />
                    <text x="40" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900">★★★★★</text>
                  </g>

                  {/* Main Isometric Laptop */}
                  <g transform="translate(160, 80)">
                    <polygon points="40,20 220,20 250,170 10,170" fill="#2563EB" stroke="#1D4ED8" strokeWidth="3" />
                    <polygon points="50,30 210,30 238,160 22,160" fill="#F8FAFC" />
                    
                    {/* User Profile Cards on Screen */}
                    <g transform="translate(60, 45)">
                      <circle cx="15" cy="15" r="10" fill="#0284C7" />
                      <rect x="30" y="8" width="60" height="6" rx="2" fill="#3B82F6" />
                      <rect x="30" y="18" width="40" height="5" rx="2" fill="#94A3B8" />
                    </g>
                    <g transform="translate(140, 45)">
                      <circle cx="15" cy="15" r="10" fill="#E11D48" />
                      <rect x="30" y="8" width="50" height="6" rx="2" fill="#E11D48" />
                      <rect x="30" y="18" width="35" height="5" rx="2" fill="#94A3B8" />
                    </g>

                    <g transform="translate(60, 85)">
                      <circle cx="15" cy="15" r="10" fill="#10B981" />
                      <rect x="30" y="8" width="70" height="6" rx="2" fill="#10B981" />
                      <rect x="30" y="18" width="45" height="5" rx="2" fill="#94A3B8" />
                    </g>

                    <polygon points="10,170 250,170 290,220 -30,220" fill="#0F172A" />
                    <polygon points="0,173 240,173 275,215 -18,215" fill="#334155" />
                  </g>

                  {/* Floating Like & Comment Badges */}
                  <g transform="translate(420, 150)">
                    <rect x="0" y="0" width="50" height="40" rx="8" fill="#38BDF8" />
                    <path d="M 15,20 L 25,12 L 35,20 L 25,28 Z" fill="#FFFFFF" />
                  </g>

                  {/* Character Standing Reviewer */}
                  <g transform="translate(350, 160)">
                    <circle cx="20" cy="18" r="14" fill="#0284C7" />
                    <path d="M 5,55 C 5,35 35,35 35,55 Z" fill="#1D4ED8" />
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
          3. "What Our Clients Say" (1:1 Reference Match for Screenshots 2 & 3)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[42px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonial Cards Grid (3 cards top row, 2 cards bottom row) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {testimonialsList.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-[#EBF7FC] rounded-[24px] p-8 text-center flex flex-col items-center justify-between border border-[#D5EEF8] shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Avatar with Quote Badge */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#006B8F] text-white flex items-center justify-center shadow-md">
                    <span className="text-base font-serif font-black leading-none">“</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[14.5px] text-slate-700 leading-relaxed font-[400] font-sans mb-6 flex-1">
                  {item.text}
                </p>

                {/* Client Info */}
                <div className="space-y-1 pt-2 border-t border-slate-200/60 w-full">
                  <h3 className="text-lg font-[800] text-slate-900 font-sans">{item.name}</h3>
                  <p className="text-xs font-[600] text-slate-500 font-sans">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row (2 Centered Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonialsList.slice(3, 5).map((item) => (
              <div
                key={item.id}
                className="bg-[#EBF7FC] rounded-[24px] p-8 text-center flex flex-col items-center justify-between border border-[#D5EEF8] shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Avatar with Quote Badge */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#006B8F] text-white flex items-center justify-center shadow-md">
                    <span className="text-base font-serif font-black leading-none">“</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[14.5px] text-slate-700 leading-relaxed font-[400] font-sans mb-6 flex-1">
                  {item.text}
                </p>

                {/* Client Info */}
                <div className="space-y-1 pt-2 border-t border-slate-200/60 w-full">
                  <h3 className="text-lg font-[800] text-slate-900 font-sans">{item.name}</h3>
                  <p className="text-xs font-[600] text-slate-500 font-sans">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* ============================================================
          4. BRAND LOGOS GRID ("Trusted By The World's Leading Brands")
          ============================================================ */}
      <BrandLogoGrid />

      {/* ============================================================
          5. AWARDS & RECOGNITION RIBBON BANNER
          ============================================================ */}
      <TrustRecognitionBanner />

      {/* ============================================================
          6. WE HAVE BEEN FEATURED IN (MEDIA LOGOS GRID)
          ============================================================ */}
      <FeaturedInLogosGrid />

      {/* ============================================================
          7. CONTACT CTA & NEWSLETTER SUBSCRIBE SECTION
          ============================================================ */}
      <WorkTogetherNewsletterSection
        title="Thinking of building a new digital product? Let's talk!"
        subtitle="Join our list of satisfied global clients. We engineer scalable software solutions tailored to your growth objectives."
        buttonText="Get Free Consultation"
      />

    </div>
  );
};

export default Testimonials;
