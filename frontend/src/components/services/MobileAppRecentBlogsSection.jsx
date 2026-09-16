import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const mobileAppBlogsData = [
  {
    id: 1,
    date: 'January 9, 2023',
    title: 'Mobile App Ideas to Boost Your Business Growth in 2023',
    excerpt: 'Undoubtedly, the mobile app market is expanding rapidly, and new concepts and innovations are introduced each...',
    banner: {
      bgGradient: 'from-[#E8EEFD] via-[#EDE8FA] to-[#FDE8F3]',
      tagTitle: (
        <>
          <span className="font-[800] text-[#2563EB] text-[13px] sm:text-[14px] block">Mobile App</span>
          <span className="font-[700] text-[#0F172A] text-[10px] sm:text-[11px] block leading-tight">Ideas to Boost</span>
          <span className="font-[700] text-[#0F172A] text-[10px] sm:text-[11px] block leading-tight">Your Business</span>
          <span className="font-[800] text-[#0F172A] text-[10px] sm:text-[11px] block leading-tight">Growth in 2023</span>
        </>
      ),
      illustration: (
        <svg viewBox="0 0 160 140" className="w-28 h-28 sm:w-32 sm:h-32 object-contain">
          {/* Phone Frame */}
          <rect x="50" y="10" width="70" height="120" rx="12" fill="#1E293B" />
          <rect x="54" y="14" width="62" height="112" rx="8" fill="#3B82F6" opacity="0.15" />
          <rect x="56" y="20" width="58" height="100" rx="6" fill="#0F172A" />
          {/* Top Music Player Widget */}
          <rect x="62" y="28" width="46" height="28" rx="6" fill="url(#gradMusic)" />
          <circle cx="85" cy="40" r="6" fill="#FFFFFF" opacity="0.9" />
          <polygon points="83,37 89,40 83,43" fill="#EC4899" />
          {/* User Profile Bubble */}
          <rect x="110" y="32" width="36" height="34" rx="8" fill="#A855F7" opacity="0.9" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.2))" />
          <circle cx="128" cy="45" r="5" fill="#FFFFFF" />
          <path d="M120 58 C120 53 124 51 128 51 C132 51 136 53 136 58" fill="#FFFFFF" />
          {/* App Grid Cards */}
          <rect x="105" y="74" width="44" height="50" rx="8" fill="#F43F5E" opacity="0.9" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.2))" />
          <rect x="111" y="82" width="22" height="4" rx="2" fill="#FFFFFF" />
          <rect x="111" y="90" width="30" height="3" rx="1.5" fill="#FFFFFF" opacity="0.7" />
          <rect x="111" y="96" width="26" height="3" rx="1.5" fill="#FFFFFF" opacity="0.7" />
          <rect x="111" y="102" width="18" height="3" rx="1.5" fill="#FFFFFF" opacity="0.7" />
          <defs>
            <linearGradient id="gradMusic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>
        </svg>
      )
    }
  },
  {
    id: 2,
    date: 'February 22, 2023',
    title: 'Securing Your Mobile App: The Essential Cybersecurity Guide',
    excerpt: 'Our lives now revolve around our mobile phones. Since most mobile users spend 90% of their time on mobile applications...',
    banner: {
      bgGradient: 'from-[#EEF2FF] via-[#F3E8FF] to-[#EDE9FE]',
      tagTitle: (
        <>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Securing Your</span>
          <span className="font-[800] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Mobile App :</span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">The <span className="font-[800] text-[#7C3AED]">Essential</span></span>
          <span className="font-[800] text-[#7C3AED] text-[10.5px] sm:text-[11.5px] block leading-tight">Cybersecurity</span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Guide</span>
        </>
      ),
      illustration: (
        <svg viewBox="0 0 160 140" className="w-28 h-28 sm:w-32 sm:h-32 object-contain">
          {/* Phone Frame */}
          <rect x="65" y="12" width="66" height="116" rx="10" fill="#1E293B" />
          <rect x="69" y="16" width="58" height="108" rx="7" fill="#0F172A" />
          {/* Fingerprint Biometric Scanner */}
          <circle cx="98" cy="50" r="18" fill="#0284C7" opacity="0.3" />
          <circle cx="98" cy="50" r="13" fill="none" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="3 2" />
          <circle cx="98" cy="50" r="8" fill="none" stroke="#38BDF8" strokeWidth="1.8" />
          <circle cx="98" cy="50" r="3" fill="#38BDF8" />
          {/* Cybersecurity Padlock Badge */}
          <rect x="82" y="80" width="30" height="24" rx="5" fill="#10B981" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.25))" />
          <path d="M89 80 V72 C89 68 105 68 105 72 V80" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="97" cy="91" r="2.5" fill="#FFFFFF" />
          <rect x="96" y="91" width="2" height="5" fill="#FFFFFF" />
          {/* Person Security Shield Agent */}
          <circle cx="50" cy="85" r="4.5" fill="#6366F1" />
          <path d="M44 100 C44 94 47 92 50 92 C53 92 56 94 56 100" fill="#6366F1" />
          <polygon points="50,94 58,98 58,107 50,111 42,107 42,98" fill="#F59E0B" opacity="0.9" />
        </svg>
      )
    }
  },
  {
    id: 3,
    date: 'February 15, 2023',
    title: 'Start Making Money Now: Create an MVP for Your Mobile App',
    excerpt: 'MVP stands for "minimum viable product," and it refers to a new method of testing the potential of a product...',
    banner: {
      bgGradient: 'from-[#F0F9FF] via-[#E0F2FE] to-[#EFF6FF]',
      tagTitle: (
        <>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Start Making</span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Money Now:</span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">Create an <span className="font-[800] text-[#2563EB]">MVP</span></span>
          <span className="font-[700] text-[#0F172A] text-[10.5px] sm:text-[11.5px] block leading-tight">for Your Mobile App</span>
        </>
      ),
      illustration: (
        <svg viewBox="0 0 160 140" className="w-28 h-28 sm:w-32 sm:h-32 object-contain">
          {/* Big App Screen Frame */}
          <rect x="40" y="24" width="86" height="66" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.06))" />
          <rect x="40" y="24" width="86" height="12" rx="8" fill="#3B82F6" />
          <circle cx="46" cy="30" r="2" fill="#FFFFFF" />
          <circle cx="52" cy="30" r="2" fill="#FFFFFF" />
          <circle cx="58" cy="30" r="2" fill="#FFFFFF" />
          {/* MVP UI charts */}
          <rect x="46" y="42" width="30" height="20" rx="3" fill="#F1F5F9" />
          <path d="M48 56 L55 49 L62 53 L72 45" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
          <rect x="80" y="42" width="40" height="38" rx="3" fill="#F8FAFC" stroke="#E2E8F0" />
          <rect x="85" y="47" width="22" height="4" rx="2" fill="#2563EB" />
          <rect x="85" y="55" width="30" height="3" rx="1.5" fill="#94A3B8" />
          <rect x="85" y="61" width="26" height="3" rx="1.5" fill="#94A3B8" />
          {/* Developer / User working on laptop */}
          <circle cx="126" cy="74" r="5" fill="#1E293B" />
          <path d="M120 92 C120 85 123 82 126 82 C129 82 132 85 132 92" fill="#2563EB" />
          {/* Desk & Laptop */}
          <rect x="108" y="92" width="34" height="3" rx="1.5" fill="#64748B" />
          <polygon points="112,92 120,86 122,86 114,92" fill="#0F172A" />
          {/* Floating UI gear & target */}
          <circle cx="132" cy="30" r="7" fill="#38BDF8" opacity="0.25" />
          <circle cx="132" cy="30" r="4" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="2 1" />
        </svg>
      )
    }
  }
];

export const MobileAppRecentBlogsSection = () => {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white text-slate-900 text-left font-sans">
      {/* Section Header Matching Screenshot */}
      <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-8 sm:mb-10 space-y-2.5">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
          style={{ fontSize: '32px' }}
        >
          Our Recent Blogs
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
          Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
        </p>
      </div>

      <Container className="max-w-6xl">
        {/* 3 Blog Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mx-auto mb-9 sm:mb-10">
          {mobileAppBlogsData.map((blog) => (
            <div
              key={blog.id}
              className="rounded-[20px] bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Banner Matching Screenshot */}
              <div className={`relative w-full h-48 sm:h-52 overflow-hidden bg-gradient-to-br ${blog.banner.bgGradient} p-4 flex flex-col justify-between select-none`}>
                {/* Top Left firevy.co Logo */}
                <div className="flex items-center">
                  <img
                    src="/firevy_logo_dark.png"
                    alt="firevy.co"
                    className="h-5 sm:h-5.5 w-auto max-w-[110px] object-contain select-none"
                  />
                </div>

                {/* Banner Content Layout: Tag text on left, Illustration on right */}
                <div className="flex items-end justify-between gap-2 mt-auto">
                  <div className="max-w-[130px] sm:max-w-[140px] mb-1">
                    {blog.banner.tagTitle}
                  </div>
                  <div className="shrink-0 flex items-center justify-end">
                    {blog.banner.illustration}
                  </div>
                </div>
              </div>

              {/* Bottom Details Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3 font-sans text-left bg-white">
                <div className="space-y-2">
                  {/* Date */}
                  <span className="text-xs font-semibold text-[#8C98A4] font-sans block">
                    {blog.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15px] font-[800] text-[#0F172A] leading-snug line-clamp-2 group-hover:text-[#005F96] transition-colors font-sans">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-[12.5px] text-[#475569] font-normal leading-relaxed line-clamp-2 font-sans">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs font-[700] text-[#005F96] group-hover:underline">
                    <span>Get more details</span>
                    <span className="ml-1 text-sm font-bold transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered "View All" Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-xs sm:text-sm px-8 py-2.5 rounded-[6px] shadow-sm hover:shadow-md transition-all duration-200 tracking-wide cursor-pointer"
          >
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default MobileAppRecentBlogsSection;
