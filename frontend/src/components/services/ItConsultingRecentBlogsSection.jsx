import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const blogsData = [
  {
    id: 1,
    date: 'April 2, 2024',
    title: 'A Guide on How to Choose the Top IT Consulting Company in...',
    snippet: 'Companies wanting to gain a competitive advantage, enhance efficiency, and overcome complex issue...',
    slug: '/company/blog',
    cardBg: 'bg-[#EBF7FD]', // Soft sky tint
    bannerGraphic: (
      <div className="relative w-full h-full p-4 flex items-center justify-between overflow-hidden bg-gradient-to-br from-[#E2F4FC] to-[#D5EEFB]">
        {/* Top Left Sapphire Brand Logo */}
        <div className="absolute top-3 left-4 flex items-center">
          <img
            src="/images/sapphire_logo_dark.svg"
            alt="Sapphire"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/sapphire_logo_dark.png';
            }}
            className="h-4 sm:h-4.5 w-auto object-contain"
          />
        </div>

        {/* Text Pitch */}
        <div className="pt-6 pr-2 max-w-[55%] z-10 text-left">
          <p className="text-[11px] sm:text-[11.5px] font-medium text-slate-700 leading-tight">
            A Guide on How to Choose the
          </p>
          <p className="text-[12.5px] sm:text-[13.5px] font-[800] text-[#005F96] leading-snug mt-0.5">
            Top IT Consulting Company in USA
          </p>
        </div>

        {/* Right Illustration: Desk, screens, developers */}
        <div className="relative z-10 shrink-0 w-28 sm:w-32 h-28 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 140 120" fill="none">
            {/* Monitor 1 */}
            <rect x="52" y="32" width="46" height="32" rx="3" fill="#1E293B" stroke="#005F96" strokeWidth="1.5" />
            <rect x="56" y="36" width="38" height="22" rx="2" fill="#0EA5E9" opacity="0.25" />
            <path d="M60 48 L68 42 L74 46 L84 38" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="75" y1="64" x2="75" y2="72" stroke="#475569" strokeWidth="3" />
            <line x1="68" y1="72" x2="82" y2="72" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

            {/* Dashboard on Wall */}
            <rect x="86" y="16" width="34" height="20" rx="2" fill="#F0F9FF" stroke="#38BDF8" strokeWidth="1" />
            <rect x="90" y="20" width="8" height="12" fill="#38BDF8" rx="1" />
            <rect x="100" y="24" width="8" height="8" fill="#0284C7" rx="1" />
            <rect x="110" y="22" width="6" height="10" fill="#0369A1" rx="1" />

            {/* Table Desk */}
            <rect x="36" y="72" width="78" height="6" rx="2" fill="#94A3B8" />
            <line x1="42" y1="78" x2="42" y2="105" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            <line x1="108" y1="78" x2="108" y2="105" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />

            {/* Person Left */}
            <circle cx="28" cy="50" r="7" fill="#F59E0B" />
            <path d="M22 74 C22 62 34 62 34 74 Z" fill="#0284C7" />
            <circle cx="29" cy="48" r="4.5" fill="#FBBF24" />

            {/* Person Right Standing */}
            <circle cx="120" cy="46" r="6.5" fill="#3B82F6" />
            <path d="M114 74 C114 60 126 60 126 74 Z" fill="#1E293B" />
            <line x1="117" y1="74" x2="117" y2="102" stroke="#334155" strokeWidth="2.5" />
            <line x1="123" y1="74" x2="123" y2="102" stroke="#334155" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 2,
    date: 'February 29, 2024',
    title: 'Steps to Hire Top IT Consulting Company in USA',
    snippet: "Know your company's goals before looking for an IT consulting firm. Check your IT infrastructure, systems, and...",
    slug: '/company/blog',
    cardBg: 'bg-[#EFF8F3]', // Soft emerald tint
    bannerGraphic: (
      <div className="relative w-full h-full p-4 flex items-center justify-between overflow-hidden bg-gradient-to-br from-[#E6F8EE] to-[#D9F4E5]">
        {/* Top Left Sapphire Brand Logo */}
        <div className="absolute top-3 left-4 flex items-center">
          <img
            src="/images/sapphire_logo_dark.svg"
            alt="Sapphire"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/sapphire_logo_dark.png';
            }}
            className="h-4 sm:h-4.5 w-auto object-contain"
          />
        </div>

        {/* Text Pitch */}
        <div className="pt-6 pr-2 max-w-[55%] z-10 text-left">
          <p className="text-[12px] sm:text-[12.5px] font-medium text-slate-700 leading-tight">
            Steps to
          </p>
          <p className="text-[13px] sm:text-[14px] font-[800] text-[#059669] leading-snug mt-0.5">
            Hire Top IT Consulting Company in USA
          </p>
        </div>

        {/* Right Illustration: Team interview, laptop, plant */}
        <div className="relative z-10 shrink-0 w-28 sm:w-32 h-28 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 140 120" fill="none">
            {/* Whiteboard with flow chart */}
            <rect x="75" y="16" width="46" height="34" rx="2" fill="white" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="86" cy="25" r="3" fill="#10B981" />
            <circle cx="108" cy="25" r="3" fill="#3B82F6" />
            <line x1="89" y1="25" x2="105" y2="25" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2 2" />
            <rect x="88" y="36" width="22" height="7" rx="2" fill="#DCFCE7" />

            {/* Potted Plant */}
            <path d="M22 75 L25 96 H35 L38 75 Z" fill="#D97706" />
            <path d="M30 75 Q32 60 40 62 Q36 72 30 75" fill="#16A34A" />
            <path d="M28 75 Q24 62 16 66 Q22 74 28 75" fill="#22C55E" />

            {/* Meeting Desk */}
            <rect x="42" y="66" width="70" height="6" rx="2" fill="#64748B" />
            <rect x="66" y="52" width="22" height="14" rx="2" fill="#1E293B" stroke="#059669" strokeWidth="1" />
            <line x1="50" y1="72" x2="50" y2="105" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <line x1="104" y1="72" x2="104" y2="105" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

            {/* Team Members */}
            <circle cx="58" cy="46" r="6" fill="#F59E0B" />
            <path d="M52 66 C52 56 64 56 64 66 Z" fill="#10B981" />

            <circle cx="96" cy="46" r="6" fill="#6366F1" />
            <path d="M90 66 C90 56 102 56 102 66 Z" fill="#059669" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 3,
    date: 'February 12, 2024',
    title: 'Top IT Consulting Company in USA | Drive Stronger Performanc...',
    snippet: 'Business success and development depend on choosing the Top IT Consulting Company in USA in this...',
    slug: '/company/blog',
    cardBg: 'bg-[#15466A]', // Deep Navy / Steel Blue
    bannerGraphic: (
      <div className="relative w-full h-full p-4 flex items-center justify-between overflow-hidden bg-gradient-to-br from-[#16486F] via-[#1F5883] to-[#256899] text-white">
        {/* Top Left Sapphire White Brand Logo */}
        <div className="absolute top-3 left-4 flex items-center">
          <img
            src="/images/sapphire_logo_white.svg"
            alt="Sapphire"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/sapphire_logo_dark.png';
            }}
            className="h-4 sm:h-4.5 w-auto object-contain brightness-0 invert"
          />
        </div>

        {/* Text Pitch */}
        <div className="pt-6 pr-2 max-w-[55%] z-10 text-left">
          <p className="text-[12.5px] sm:text-[13.5px] font-[800] text-[#38BDF8] leading-snug">
            Top IT Consulting Company
          </p>
          <p className="text-[11px] sm:text-[12px] font-medium text-white/90 leading-tight mt-0.5">
            in USA | Drive Stronger Performance to Build Success
          </p>
        </div>

        {/* Right Illustration: Corporate consultants, high-tech chart screen */}
        <div className="relative z-10 shrink-0 w-28 sm:w-32 h-28 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 140 120" fill="none">
            {/* Glowing Analytical Board */}
            <rect x="58" y="16" width="62" height="42" rx="4" fill="#0B253D" stroke="#38BDF8" strokeWidth="1.5" />
            <path d="M64 44 L76 34 L88 40 L102 26 L114 30" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="102" cy="26" r="3" fill="#60A5FA" />
            <rect x="65" y="48" width="8" height="4" rx="1" fill="#38BDF8" opacity="0.6" />
            <rect x="77" y="46" width="8" height="6" rx="1" fill="#38BDF8" opacity="0.7" />
            <rect x="89" y="43" width="8" height="9" rx="1" fill="#38BDF8" opacity="0.8" />
            <rect x="101" y="40" width="8" height="12" rx="1" fill="#38BDF8" />

            {/* Consulting Desk */}
            <rect x="46" y="68" width="76" height="5" rx="1.5" fill="#475569" />
            <line x1="56" y1="73" x2="56" y2="105" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
            <line x1="112" y1="73" x2="112" y2="105" stroke="#334155" strokeWidth="3" strokeLinecap="round" />

            {/* Sitting Consultant Left */}
            <circle cx="38" cy="50" r="6" fill="#FCD34D" />
            <path d="M30 72 C30 60 44 60 44 72 Z" fill="#0284C7" />

            {/* Standing Consultant Right */}
            <circle cx="124" cy="46" r="6" fill="#FCD34D" />
            <path d="M116 72 C116 58 130 58 130 72 Z" fill="#38BDF8" />
            <line x1="120" y1="72" x2="120" y2="105" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="126" y1="72" x2="126" y2="105" stroke="#0F172A" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    )
  }
];

export const ItConsultingRecentBlogsSection = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#F8FAFC] text-slate-900 font-sans border-b border-slate-200 text-left">
      <Container className="max-w-7xl">
        {/* Section Heading & Subtitle matching Screenshot 1 */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
          <h2 className="text-3xl sm:text-4xl font-[800] text-[#0F172A] tracking-tight leading-tight">
            Our Recent Blogs
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
            Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Graphic Banner Top */}
              <div className="h-44 w-full relative border-b border-slate-100 overflow-hidden">
                {blog.bannerGraphic}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-3">
                <div className="space-y-2">
                  <p className="text-[12px] font-medium text-slate-400">
                    {blog.date}
                  </p>
                  <h3 className="text-[15.5px] sm:text-[16px] font-[800] text-[#0F172A] leading-snug group-hover:text-[#005F96] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#64748B] font-normal leading-relaxed line-clamp-3">
                    {blog.snippet}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to={blog.slug}
                    className="inline-flex items-center text-[13px] font-bold text-[#005F96] hover:text-[#004A75] hover:underline transition-colors group/link"
                  >
                    <span>Get more details</span>
                    <span className="ml-1.5 transition-transform group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Dark Blue "View All" Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/company/blog"
            className="inline-block px-9 py-2.5 sm:py-3 rounded-md bg-[#005F96] hover:bg-[#004A75] text-white text-xs sm:text-sm font-[700] tracking-wide shadow-md hover:shadow-lg transition-all"
          >
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ItConsultingRecentBlogsSection;
