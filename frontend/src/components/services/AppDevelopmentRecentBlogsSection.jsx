import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const blogsData = [
  {
    id: 1,
    date: 'May 14, 2026',
    title: 'Native vs. Cross-Platform: How to Choose the Optimal Mobile Tech Stack',
    snippet: 'Navigating between Swift, Kotlin, Flutter, and React Native requires understanding performance boundaries, time-to-market trade-offs, and long-term maintenance costs...',
    slug: '/company/blog',
    cardBg: 'bg-[#EBF7FD]',
    bannerGraphic: (
      <div className="relative w-full h-full p-4 flex items-center justify-between overflow-hidden bg-gradient-to-br from-[#E2F4FC] to-[#D5EEFB]">
        <div className="absolute top-3 left-4 flex items-center">
          <img
            src="/images/sapphire_logo_dark.svg"
            alt="Firevy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/sapphire_logo_dark.png';
            }}
            className="h-4 sm:h-4.5 w-auto object-contain"
          />
        </div>

        <div className="pt-6 pr-2 max-w-[55%] z-10 text-left">
          <p className="text-[11px] sm:text-[11.5px] font-medium text-slate-700 leading-tight">
            Comprehensive Comparison
          </p>
          <p className="text-[12.5px] sm:text-[13.5px] font-[800] text-[#005F96] leading-snug mt-0.5">
            Native vs Cross-Platform App Guide
          </p>
        </div>

        {/* Right Illustration: Smartphone mockups with code and metrics */}
        <div className="relative z-10 shrink-0 w-28 sm:w-32 h-28 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 140 120" fill="none">
            {/* Phone 1 */}
            <rect x="35" y="16" width="36" height="66" rx="6" fill="#1E293B" stroke="#005F96" strokeWidth="1.5" />
            <rect x="39" y="24" width="28" height="48" rx="3" fill="#0EA5E9" opacity="0.25" />
            <circle cx="53" cy="76" r="2" fill="#94A3B8" />
            <rect x="42" y="28" width="22" height="6" rx="1.5" fill="#38BDF8" />
            <rect x="42" y="38" width="16" height="4" rx="1" fill="#0284C7" />
            <rect x="42" y="46" width="20" height="4" rx="1" fill="#0369A1" />

            {/* Phone 2 */}
            <rect x="75" y="26" width="36" height="66" rx="6" fill="#0F172A" stroke="#0284C7" strokeWidth="1.5" />
            <rect x="79" y="34" width="28" height="48" rx="3" fill="#38BDF8" opacity="0.2" />
            <circle cx="93" cy="86" r="2" fill="#94A3B8" />
            <path d="M83 48 L89 42 L95 46 L103 38" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Connecting Arc / sync indicator */}
            <path d="M72 45 C75 40, 78 40, 80 45" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 2,
    date: 'April 28, 2026',
    title: 'Top App Store Optimization (ASO) Strategies to Supercharge Downloads',
    snippet: 'Learn how to maximize organic discovery on Google Play and Apple App Store through keyword auditing, conversion rate testing, and screenshot telemetry...',
    slug: '/company/blog',
    cardBg: 'bg-[#EFF8E9]',
    bannerGraphic: (
      <div className="relative w-full h-full p-4 flex items-center justify-between overflow-hidden bg-gradient-to-br from-[#EAF6ED] to-[#DBEFE0]">
        <div className="absolute top-3 left-4 flex items-center">
          <img
            src="/images/sapphire_logo_dark.svg"
            alt="Firevy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/sapphire_logo_dark.png';
            }}
            className="h-4 sm:h-4.5 w-auto object-contain"
          />
        </div>

        <div className="pt-6 pr-2 max-w-[55%] z-10 text-left">
          <p className="text-[11px] sm:text-[11.5px] font-medium text-slate-700 leading-tight">
            Growth & Marketing
          </p>
          <p className="text-[12.5px] sm:text-[13.5px] font-[800] text-[#16A34A] leading-snug mt-0.5">
            App Store Optimization Playbook
          </p>
        </div>

        {/* Right Illustration: Rocket / Growth Graph */}
        <div className="relative z-10 shrink-0 w-28 sm:w-32 h-28 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 140 120" fill="none">
            <rect x="40" y="24" width="60" height="70" rx="6" fill="#14532D" stroke="#16A34A" strokeWidth="1.5" />
            <rect x="46" y="32" width="48" height="50" rx="3" fill="#22C55E" opacity="0.15" />
            {/* Growth Bar Chart */}
            <rect x="52" y="62" width="6" height="14" rx="1.5" fill="#4ADE80" />
            <rect x="62" y="52" width="6" height="24" rx="1.5" fill="#22C55E" />
            <rect x="72" y="44" width="6" height="32" rx="1.5" fill="#16A34A" />
            <rect x="82" y="36" width="6" height="40" rx="1.5" fill="#15803D" />
            {/* Trend Arrow */}
            <path d="M50 68 L64 54 L74 46 L86 34" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 3,
    date: 'April 10, 2026',
    title: 'Mobile App Cybersecurity: Protecting Enterprise Apps from OWASP Vulnerabilities',
    snippet: 'In-depth analysis of end-to-end token encryption, biometric authentication, secure local storage, and real-time reverse engineering defense mechanisms...',
    slug: '/company/blog',
    cardBg: 'bg-[#F5F0FF]',
    bannerGraphic: (
      <div className="relative w-full h-full p-4 flex items-center justify-between overflow-hidden bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF]">
        <div className="absolute top-3 left-4 flex items-center">
          <img
            src="/images/sapphire_logo_dark.svg"
            alt="Firevy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/sapphire_logo_dark.png';
            }}
            className="h-4 sm:h-4.5 w-auto object-contain"
          />
        </div>

        <div className="pt-6 pr-2 max-w-[55%] z-10 text-left">
          <p className="text-[11px] sm:text-[11.5px] font-medium text-slate-700 leading-tight">
            Security & Compliance
          </p>
          <p className="text-[12.5px] sm:text-[13.5px] font-[800] text-[#7E22CE] leading-snug mt-0.5">
            Enterprise Mobile Security Guide
          </p>
        </div>

        {/* Right Illustration: Shield and Padlock */}
        <div className="relative z-10 shrink-0 w-28 sm:w-32 h-28 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 140 120" fill="none">
            <path d="M70 20 L96 32 V58 C96 76 70 94 70 94 C70 94 44 76 44 58 V32 L70 20 Z" fill="#581C87" stroke="#9333EA" strokeWidth="2" />
            <circle cx="70" cy="52" r="8" fill="#C084FC" />
            <rect x="65" y="52" width="10" height="12" rx="2" fill="#E9D5FF" />
            <path d="M68 46 C68 44 72 44 72 46" stroke="#581C87" strokeWidth="2" />
          </svg>
        </div>
      </div>
    )
  }
];

export const AppDevelopmentRecentBlogsSection = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#F8FAFC] text-slate-900 font-sans border-b border-slate-200 text-left">
      <Container className="max-w-7xl">
        {/* Section Heading & Subtitle matching Screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
          <h2 className="text-3xl sm:text-4xl font-[800] text-[#0F172A] tracking-tight leading-tight">
            Our Recent Blogs
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
            Explore industry trends, engineering best practices, and expert mobile app development consulting insights to accelerate your product journey.
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

export default AppDevelopmentRecentBlogsSection;
