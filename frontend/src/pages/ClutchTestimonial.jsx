import React, { useEffect, useState } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import { Link, useLocation } from 'react-router-dom';
import BRAND from '../constants/brand';
import TrustMarquee from '../components/home/TrustMarquee';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import companyPublicService from '../services/companyPublicService';
import { ArrowRight, Star, ChevronDown, Check, User, Users, MapPin, Building, Globe, ShieldCheck } from 'lucide-react';

export const ClutchTestimonial = () => {
  const location = useLocation();
  const isPreview = new URLSearchParams(location.search).get('preview') === 'true';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [sectionData, setSectionData] = useState(null);
  const [dynamicReviews, setDynamicReviews] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    companyPublicService.getSection('clutch-testimonial', isPreview).then(setSectionData).catch(console.error);
    companyPublicService.getClutchReviews().then((items) => {
      if (items && items.length > 0) setDynamicReviews(items);
    }).catch(console.error);
  }, [isPreview]);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const clutchReviewsData = [
    {
      id: 1,
      title: 'Custom Software Dev & Implementation for School',
      projectCost: '$10,000 to $49,999',
      projectDate: 'Aug. 2019 - Ongoing',
      projectSummary: `${BRAND.name} has implemented a fee management system integrated with a school ERP. The solution manages fee structures, concessions, and payment records and facilitates secure payment options.`,
      overallRating: '5.0',
      scores: { quality: '5.0', schedule: '5.0', cost: '4.5', refer: '5.0' },
      reviewQuote: '"They were very responsive throughout the project and gave excellent support."',
      reviewDate: 'Aug 19, 2026',
      feedbackSummary: `The system has made fee collection more efficient and transparent, boosting online payments and reducing manual data entry. ${BRAND.name} leads a professional process, working closely with the client to understand their needs. The team is responsive and supportive.`,
      reviewerTitle: 'Admin, L.P.Savani Riverside School, Surat',
      reviewerName: 'Anonymous',
      industry: 'Education',
      location: 'Surat, India',
      companySize: '51-200 Employees',
      reviewType: 'Online Review',
      verified: true
    },
    {
      id: 2,
      title: 'Mobile App Development & Design for Educational Institution',
      projectCost: '$10,000 to $49,999',
      projectDate: 'Aug. 2014 - Ongoing',
      projectSummary: `${BRAND.name} designed and developed a mobile app for an educational institution. The team integrated the app with the client's ERP to enable access to academic and administrative services.`,
      overallRating: '5.0',
      scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' },
      reviewQuote: '"What impressed us the most was their ability to deliver a fully branded mobile app that felt like our own product."',
      reviewDate: 'Aug 18, 2026',
      feedbackSummary: `${BRAND.name}' app enhanced the client's communication with students, parents, and employees. The team managed the project effectively, delivering on time and responding to feedback. ${BRAND.name} created a reliable and easy-to-use app that met the client's requirements.`,
      reviewerTitle: 'Admin, Vidyanagri campus, Himmatnagar',
      reviewerName: 'Anonymous',
      industry: 'Education',
      location: 'Himmatnagar, India',
      companySize: '11-50 Employees',
      reviewType: 'Online Review',
      verified: true
    },
    {
      id: 3,
      title: 'ERP System Implementation for Coaching Institute',
      projectCost: '$10,000 to $49,999',
      projectDate: 'June 2025 - Ongoing',
      projectSummary: `${BRAND.name} implemented an ERP system for a coaching institute. The solution streamlined administrative operations, fee management, and student record tracking.`,
      overallRating: '5.0',
      scores: { quality: '5.0', schedule: '4.5', cost: '5.0', refer: '5.0' },
      reviewQuote: '"Their team is always there and quick to respond to any changes or support we need."',
      reviewDate: 'Jul 3, 2026',
      feedbackSummary: `${BRAND.name} delivered a reliable ERP platform that simplified day-to-day operations and administrative workflows. The team was responsive, supportive, and dedicated throughout.`,
      reviewerTitle: 'Admin, AS Vidyapeeth Pvt. Ltd,',
      reviewerName: 'Anonymous',
      industry: 'Education',
      location: 'Shimla, India',
      companySize: '51-200 Employees',
      reviewType: 'Online Review',
      verified: true
    },
    {
      id: 4,
      title: 'Web & Mobile App Development for Healthcare Enterprise',
      projectCost: '$50,000 to $99,999',
      projectDate: 'Jan. 2022 - Ongoing',
      projectSummary: `${BRAND.name} engineered a HIPAA-compliant healthcare telemedicine platform with real-time patient appointment scheduling and EHR integration.`,
      overallRating: '5.0',
      scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' },
      reviewQuote: '"Their technical depth, proactive communication, and ability to hit tight deadlines were phenomenal."',
      reviewDate: 'Jul 24, 2026',
      feedbackSummary: `The platform scaled seamlessly to handle over 100k active monthly consultations. ${BRAND.name} provided continuous maintenance and security patches without any downtime.`,
      reviewerTitle: 'CTO, HealthTech Global Solutions',
      reviewerName: 'Verified Executive',
      industry: 'Healthcare & Lifesciences',
      location: 'California, USA',
      companySize: '201-500 Employees',
      reviewType: 'Verified Interview',
      verified: true
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Clutch Testimonials & Reviews | Verified 5.0 Star Ratings | ${BRAND.name}`}
        description={`Read verified Clutch reviews for ${BRAND.name}. Discover 100% authentic client feedback, ratings, and project summaries.`}
        canonical="/company/clutch-testimonial"
      />

      {/* ============================================================
          1. HERO SECTION ("Our Clients Do The Talking!")
          ============================================================ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F4F8FA] border-b border-slate-200/60 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[36px] sm:text-[46px] md:text-[52px] font-[800] text-slate-900 leading-[1.15] tracking-tight font-sans">
                {sectionData?.title || 'Our Clients Do The Talking!'}
              </h1>
              
              <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed font-[400] max-w-xl font-sans">
                {sectionData?.subtitle || 'Visit Clutch to read our 100% genuine and authentic testimonials given by customers after availing our services. These testimonials from our happy clients prove that we deliver nothing but only the best to our customers regardless of the project type and size.'}
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

            {/* Right Column: Isometric Laptop Vector with Clutch Logo Bubble */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-full max-w-[500px] h-[320px] sm:h-[360px] flex items-center justify-center">
                
                <svg viewBox="0 0 550 400" className="w-full h-full drop-shadow-2xl overflow-visible">
                  {/* Floating Clutch Bubble Header */}
                  <g transform="translate(320, 60)">
                    <rect x="0" y="0" width="100" height="36" rx="18" fill="#FFFFFF" filter="drop-shadow(0 8px 12px rgba(0,0,0,0.1))" />
                    <text x="50" y="24" textAnchor="middle" fill="#E11D48" fontSize="18" fontWeight="900" fontFamily="sans-serif">Clutch</text>
                  </g>

                  {/* Main Isometric Laptop */}
                  <g transform="translate(160, 90)">
                    <polygon points="40,20 220,20 250,170 10,170" fill="#2563EB" stroke="#1D4ED8" strokeWidth="3" />
                    <polygon points="50,30 210,30 238,160 22,160" fill="#F8FAFC" />
                    
                    {/* Testimonial Cards on Laptop Screen */}
                    <g transform="translate(60, 45)">
                      <circle cx="15" cy="15" r="10" fill="#0284C7" />
                      <rect x="30" y="8" width="60" height="6" rx="2" fill="#3B82F6" />
                      <rect x="30" y="18" width="40" height="5" rx="2" fill="#94A3B8" />
                    </g>

                    <polygon points="10,170 250,170 290,220 -30,220" fill="#0F172A" />
                    <polygon points="0,173 240,173 275,215 -18,215" fill="#334155" />
                  </g>

                  {/* Rating Stars & Badges */}
                  <g transform="translate(60, 140)">
                    <rect x="0" y="0" width="90" height="32" rx="6" fill="#FBBF24" />
                    <text x="45" y="21" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900">★★★★★</text>
                  </g>

                  {/* Character Standing */}
                  <g transform="translate(360, 160)">
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
          3. "Don't Take Our Word For It, Take Our Clients'"
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-[32px] sm:text-[42px] font-[800] text-slate-900 tracking-tight leading-tight mb-4 font-sans">
              {sectionData?.contentSections?.[0]?.title || "Don't Take Our Word For It, Take Our Clients'"}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-sans font-[400] max-w-3xl mx-auto">
              {sectionData?.contentSections?.[0]?.content || "Positive Clutch reviews are a clear sign of teamwork, good service, and improved project management. Our team takes pride in our ability to think beyond the box when it comes to producing cutting-edge digital solutions"}
            </p>
          </div>

          {/* Clutch Widget Outer Frame */}
          <div className="max-w-5xl mx-auto border border-slate-300 rounded-[14px] overflow-hidden shadow-lg bg-white mb-16">
            
            {/* Dark Header Bar */}
            <div className="bg-[#1E293B] text-white px-6 py-4 flex items-center justify-between font-sans">
              <span className="text-base sm:text-lg font-[800] tracking-tight uppercase">
                {BRAND.name.toUpperCase()} REVIEWS
              </span>
              <div className="flex items-center space-x-1.5 text-xs text-slate-300">
                <span>Powered by</span>
                <span className="text-white font-[900] text-sm tracking-wider">Clutch</span>
              </div>
            </div>

            {/* Overall Rating Banner */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-3.5 flex items-center justify-center space-x-3 text-slate-800">
              <span className="text-2xl font-[900] text-slate-900">4.9</span>
              <div className="flex text-amber-500 text-lg">★★★★★</div>
              <span className="text-xs font-[700] text-blue-600 hover:underline cursor-pointer">334 reviews</span>
            </div>

            {/* Clutch Detailed Review Boxes List */}
            <div className="p-6 space-y-8 text-left font-sans">
              {(dynamicReviews || clutchReviewsData).map((item) => (
                <div key={item.id} className="border border-slate-200 rounded-[12px] overflow-hidden bg-white shadow-xs">
                  
                  {/* Card Header Title */}
                  <div className="bg-slate-100/80 px-6 py-3.5 border-b border-slate-200">
                    <h3 className="text-lg sm:text-[19px] font-[800] text-slate-900 font-sans">
                      {item.title}
                    </h3>
                  </div>

                  {/* 3 Column Grid Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
                    
                    {/* Left Col: THE PROJECT */}
                    <div className="lg:col-span-3 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-4 lg:pb-0 lg:pr-4">
                      <span className="text-[11px] font-[900] text-slate-400 uppercase tracking-wider block">THE PROJECT</span>
                      <div className="space-y-1">
                        <div className="text-sm font-[800] text-slate-800">{item.projectCost}</div>
                        <div className="text-xs text-slate-500 font-medium">{item.projectDate}</div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[11px] font-[800] text-slate-400 uppercase tracking-wider block">PROJECT SUMMARY</span>
                        <p className="text-xs text-slate-600 leading-relaxed font-[400]">{item.projectSummary}</p>
                      </div>
                    </div>

                    {/* Center Col: THE REVIEW */}
                    <div className="lg:col-span-6 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-4 lg:pb-0 lg:pr-4">
                      <div className="flex items-start space-x-4">
                        <div className="text-center shrink-0">
                          <span className="text-3xl font-[900] text-slate-900 leading-none block">{item.overallRating}</span>
                          <div className="flex text-amber-500 text-xs mt-1">★★★★★</div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-600 font-medium border-l border-slate-200 pl-4">
                          <div>Quality <span className="font-bold text-slate-900 ml-1">{item.scores.quality}</span></div>
                          <div>Schedule <span className="font-bold text-slate-900 ml-1">{item.scores.schedule}</span></div>
                          <div>Cost <span className="font-bold text-slate-900 ml-1">{item.scores.cost}</span></div>
                          <div>Willing to Refer <span className="font-bold text-slate-900 ml-1">{item.scores.refer}</span></div>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-[900] text-slate-400 uppercase tracking-wider block">THE REVIEW</span>
                        <blockquote className="text-sm font-[800] text-slate-800 italic leading-snug">
                          {item.reviewQuote}
                        </blockquote>
                        <span className="text-xs text-slate-400 block">{item.reviewDate}</span>
                      </div>

                      <div className="space-y-1 pt-1">
                        <span className="text-[11px] font-[800] text-slate-400 uppercase tracking-wider block">FEEDBACK SUMMARY</span>
                        <p className="text-xs text-slate-600 leading-relaxed font-[400]">
                          {item.feedbackSummary}
                        </p>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.id)}
                          className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-md border border-slate-300 text-xs font-[700] text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          <span>{expandedCard === item.id ? 'Close Review' : 'Read Full Review'}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedCard === item.id ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Right Col: THE REVIEWER */}
                    <div className="lg:col-span-3 space-y-3">
                      <span className="text-[11px] font-[900] text-slate-400 uppercase tracking-wider block">THE REVIEWER</span>
                      <div className="text-xs font-[800] text-slate-900">{item.reviewerTitle}</div>
                      
                      <div className="space-y-2 text-xs text-slate-600">
                        <div className="flex items-center space-x-2">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.reviewerName}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.industry}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.companySize}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.reviewType}</span>
                        </div>
                        {item.verified && (
                          <div className="flex items-center space-x-1.5 text-emerald-600 font-[800] pt-1">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

        </Container>
      </section>

      {/* ============================================================
          4. EXACT SAPPHIRE CTA & NEWSLETTER SUBSCRIBE SECTIONS
          ============================================================ */}
      <WorkTogetherNewsletterSection
        title="Ready To Get Started?"
        subtitle={`Learn how ${BRAND.name} can help you build better relationships with your customers. Start a conversation today.`}
        buttonText="Request A Free Quote"
      />

    </div>
  );
};

export default ClutchTestimonial;
