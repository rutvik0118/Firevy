import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const blogsData = [
  {
    id: 1,
    date: 'July 7, 2023',
    title: 'Mastering Android App Development: The Ultimate Guid...',
    excerpt: 'The keys to becoming a skilled Android app developer are commitment, ongoing study, and practical experienc...',
    bgGradient: 'bg-[#FDEEE9]', // Soft peach / light warm coral
    bannerContent: {
      line1: 'Mastering',
      line1Color: 'text-[#1E293B]',
      highlight: 'Android App Development:',
      highlightColor: 'text-[#E24A3B]',
      line2: 'The Ultimate Guide for Success',
      line2Color: 'text-[#1E293B]',
      illustration: (
        <svg className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 drop-shadow-sm" viewBox="0 0 130 130" fill="none">
          {/* Subtle background gear */}
          <path d="M15 45 C15 38 22 38 22 32 C22 26 15 26 17 20 C19 14 26 18 30 14 C34 10 30 3 37 3 C44 3 43 10 49 12 C55 14 60 8 65 13" stroke="#FDBA9B" strokeWidth="2.5" strokeDasharray="3 3" fill="none" />
          
          {/* Main App Wireframe / Tablet Window */}
          <rect x="35" y="16" width="62" height="84" rx="8" fill="white" stroke="#2563EB" strokeWidth="2" />
          <rect x="39" y="20" width="54" height="12" rx="3" fill="#EFF6FF" />
          <circle cx="45" cy="26" r="2.5" fill="#3B82F6" />
          <circle cx="52" cy="26" r="2.5" fill="#93C5FD" />
          
          {/* Dashboard Cards inside wireframe */}
          <rect x="40" y="36" width="24" height="24" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" />
          <path d="M46 48 L50 52 L58 44" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          <rect x="68" y="36" width="24" height="24" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
          <circle cx="80" cy="48" r="5" stroke="#D97706" strokeWidth="1.5" />
          <path d="M80 45 V48 H83" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />

          <rect x="40" y="64" width="52" height="14" rx="3" fill="#E0F2FE" />
          <line x1="45" y1="71" x2="72" y2="71" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          
          <rect x="40" y="82" width="52" height="12" rx="3" fill="#F1F5F9" />
          <line x1="45" y1="88" x2="80" y2="88" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

          {/* Success Check Badge */}
          <rect x="94" y="20" width="22" height="22" rx="6" fill="#2563EB" />
          <path d="M99 31 L103 35 L111 27" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Person Working / Sitting on block */}
          <g transform="translate(6, 68)">
            {/* Person Head */}
            <circle cx="72" cy="-28" r="6" fill="#F97316" />
            <path d="M68 -32 C68 -36 76 -36 76 -32" stroke="#7C2D12" strokeWidth="2" fill="#7C2D12" />
            {/* Person Body & Laptop */}
            <path d="M66 -22 C66 -22 62 -10 60 5 L78 5 C76 -10 74 -22 74 -22 Z" fill="#EA580C" />
            <path d="M62 -8 L78 -8 L84 -1 L66 -1 Z" fill="#3B82F6" />
            {/* Legs */}
            <path d="M64 5 L64 25 L58 35" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
            <path d="M74 5 L74 20 L82 35" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            {/* Block stool */}
            <rect x="52" y="16" width="24" height="24" rx="4" fill="#FDE047" stroke="#EAB308" strokeWidth="1.5" />
          </g>

          {/* Floating code / Android Tag */}
          <g transform="translate(5, 50)">
            <rect x="6" y="0" width="22" height="18" rx="4" fill="#3B82F6" />
            <path d="M12 9 L15 6 M12 9 L15 12 M20 6 L17 9 M20 12 L17 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      )
    }
  },
  {
    id: 2,
    date: 'January 13, 2023',
    title: 'Top Programming Languages for Android App Development to Tr...',
    excerpt: 'The development of apps for the Android operating app is essential to the success of the mobile app development...',
    bgGradient: 'bg-[#EBF7F8]', // Soft mint / light turquoise
    bannerContent: {
      line1: 'Top Programming Languages for',
      line1Color: 'text-[#1E293B]',
      highlight: 'Android App Development to',
      highlightColor: 'text-[#D96000]',
      line2: 'Try Out This Year!',
      line2Color: 'text-[#1E293B]',
      illustration: (
        <svg className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 drop-shadow-sm" viewBox="0 0 130 130" fill="none">
          {/* Floating Code Badge */}
          <rect x="22" y="14" width="24" height="16" rx="4" fill="#38BDF8" opacity="0.9" />
          <text x="34" y="26" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>

          {/* Light bulb idea */}
          <circle cx="106" cy="24" r="8" fill="#FDE047" stroke="#F59E0B" strokeWidth="1.5" />
          <path d="M103 32 H109 M104 34 H108" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M106 12 V8 M95 19 L92 16 M117 19 L120 16" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />

          {/* Center Smartphone */}
          <rect x="42" y="24" width="50" height="82" rx="9" fill="white" stroke="#38BDF8" strokeWidth="2" />
          <rect x="47" y="32" width="40" height="66" rx="5" fill="#F0FDF4" />

          {/* Android Robot on Screen */}
          <g transform="translate(52, 45)">
            {/* Robot Head */}
            <path d="M7 16 A 13 13 0 0 1 33 16 Z" fill="#78C257" />
            <line x1="12" y1="5" x2="9" y2="1" stroke="#78C257" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="5" x2="31" y2="1" stroke="#78C257" strokeWidth="2" strokeLinecap="round" />
            <circle cx="15" cy="11" r="1.8" fill="white" />
            <circle cx="25" cy="11" r="1.8" fill="white" />
            
            {/* Robot Body */}
            <rect x="7" y="19" width="26" height="20" rx="3" fill="#78C257" />
            {/* Arms */}
            <rect x="1" y="20" width="4" height="15" rx="2" fill="#78C257" />
            <rect x="35" y="20" width="4" height="15" rx="2" fill="#78C257" />
            {/* Legs */}
            <rect x="12" y="41" width="5" height="7" rx="2" fill="#78C257" />
            <rect x="23" y="41" width="5" height="7" rx="2" fill="#78C257" />
          </g>

          {/* Floating Leaves & Shapes */}
          <circle cx="102" cy="74" r="12" fill="#FCE7F3" opacity="0.7" />
          <path d="M102 65 C108 65 110 75 102 82 C94 75 96 65 102 65 Z" fill="#EC4899" opacity="0.6" />

          {/* Left Character sitting */}
          <g transform="translate(14, 76)">
            <circle cx="12" cy="4" r="5" fill="#F97316" />
            <path d="M6 14 C6 10 18 10 18 14 L19 28 L4 28 Z" fill="#EF4444" />
            <path d="M4 28 L0 38 L10 38" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Right Character / Decorative Cloud */}
          <g transform="translate(94, 86)">
            <ellipse cx="14" cy="14" rx="16" ry="8" fill="#FDE68A" />
            <circle cx="18" cy="2" r="4.5" fill="#3B82F6" />
            <path d="M12 9 C12 7 24 7 24 9 L22 18 L14 18 Z" fill="#10B981" />
          </g>
        </svg>
      )
    }
  },
  {
    id: 3,
    date: 'August 4, 2023',
    title: 'A Step-by-Step Guide to Building an Android App with Angular',
    excerpt: 'Angular.JS is widely used and has a successful track record. It\'s easier said than done to create an Angular.JS...',
    bgGradient: 'bg-[#EFF6FF]', // Soft ice blue
    bannerContent: {
      line1: 'A Step-by-Step',
      line1Color: 'text-[#1E293B]',
      highlight: 'Guide to Building an',
      highlightColor: 'text-[#1E293B]',
      line2: 'Android App with',
      line2Color: 'text-[#0055A5]',
      line3: 'Angular',
      line3Color: 'text-[#0055A5]',
      illustration: (
        <svg className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 drop-shadow-sm" viewBox="0 0 130 130" fill="none">
          {/* Background Network nodes */}
          <circle cx="85" cy="24" r="10" fill="#E2E8F0" />
          <path d="M85 18 L85 30 M79 24 L91 24" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

          {/* Gear icon on left */}
          <circle cx="28" cy="40" r="8" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="3 3" />
          <circle cx="28" cy="40" r="3" fill="#94A3B8" />

          {/* Main Smartphone */}
          <rect x="42" y="16" width="54" height="92" rx="10" fill="#1E293B" />
          <rect x="46" y="24" width="46" height="76" rx="6" fill="#F8FAFC" />

          {/* Top speaker slit & camera */}
          <circle cx="69" cy="20" r="1.5" fill="#64748B" />

          {/* Android Robot on Phone */}
          <g transform="translate(56, 42)">
            {/* Robot Head */}
            <path d="M4 14 A 9 9 0 0 1 22 14 Z" fill="#78C257" />
            <line x1="7" y1="5" x2="5" y2="2" stroke="#78C257" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="19" y1="5" x2="21" y2="2" stroke="#78C257" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="10" r="1.2" fill="white" />
            <circle cx="16" cy="10" r="1.2" fill="white" />
            {/* Body */}
            <rect x="4" y="16" width="18" height="15" rx="2" fill="#78C257" />
            {/* Arms */}
            <rect x="0" y="17" width="3" height="11" rx="1.5" fill="#78C257" />
            <rect x="23" y="17" width="3" height="11" rx="1.5" fill="#78C257" />
          </g>

          {/* Angular Shield Logo Badge */}
          <g transform="translate(94, 28)">
            {/* Red Angular Shield */}
            <path d="M14 0 L28 5 L25 21 L14 28 L3 21 L0 5 Z" fill="#DD0031" />
            <path d="M14 0 L28 5 L25 21 L14 28 Z" fill="#C3002F" />
            {/* White 'A' */}
            <path d="M14 5 L7 20 H10.5 L12 16.5 H16 L17.5 20 H21 L14 5 Z M14 9.5 L15.2 13.5 H12.8 L14 9.5 Z" fill="white" />
          </g>

          {/* Blue Cloud / Network server badge */}
          <g transform="translate(86, 76)">
            <rect x="0" y="0" width="32" height="22" rx="5" fill="#2563EB" />
            <rect x="4" y="4" width="24" height="4" rx="1" fill="#93C5FD" />
            <rect x="4" y="11" width="16" height="3" rx="1" fill="#BFDBFE" />
            <circle cx="24" cy="12.5" r="2" fill="#60A5FA" />
            <circle cx="24" cy="17.5" r="1" fill="#93C5FD" />
          </g>

          {/* Left bottom code / data block */}
          <g transform="translate(12, 70)">
            <rect x="0" y="0" width="26" height="20" rx="4" fill="#3B82F6" />
            <path d="M6 10 L10 6 M6 10 L10 14 M16 6 L20 10 M16 14 L20 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      )
    }
  }
];

export const AndroidRecentBlogsSection = () => {
  return (
    <section className="pt-6 pb-5 sm:pt-7 sm:pb-6 bg-white text-slate-900 text-left font-sans">
      {/* Section Header */}
      <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-6 sm:mb-7 space-y-2">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight font-sans">
          Our Recent Blogs
        </h2>
        <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto font-sans">
          Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
        </p>
      </div>

      <Container>
        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto mb-5 sm:mb-6">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl bg-white border border-slate-100 shadow-[0_6px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Banner Graphic Area */}
              <div className={`relative h-44 sm:h-48 ${blog.bgGradient} p-4 sm:p-5 flex items-center justify-between overflow-hidden`}>
                {/* Left Text / Sapphire Branding */}
                <div className="relative z-10 flex flex-col justify-between h-full pr-2 flex-grow">
                  {/* Sapphire Logo */}
                  <div className="flex items-center space-x-1">
                    <span className="font-extrabold text-base tracking-tight font-sans text-[#005F96]">
                      Sapphire
                    </span>
                    <span className="text-[7.5px] uppercase tracking-wider font-bold text-slate-500 block">
                      SOFTWARE SOLUTIONS
                    </span>
                  </div>

                  {/* Banner Headline */}
                  <div className="py-1">
                    <p className={`text-[12.5px] sm:text-[13px] font-bold leading-tight font-sans ${blog.bannerContent.line1Color}`}>
                      {blog.bannerContent.line1}
                    </p>
                    <p className={`text-[12.5px] sm:text-[13px] font-bold leading-tight font-sans ${blog.bannerContent.highlightColor}`}>
                      {blog.bannerContent.highlight}
                    </p>
                    <p className={`text-[12px] sm:text-[12.5px] font-semibold leading-tight font-sans mt-0.5 ${blog.bannerContent.line2Color}`}>
                      {blog.bannerContent.line2}
                    </p>
                    {blog.bannerContent.line3 && (
                      <p className={`text-[12.5px] sm:text-[13px] font-bold leading-tight font-sans ${blog.bannerContent.line3Color}`}>
                        {blog.bannerContent.line3}
                      </p>
                    )}
                  </div>

                  {/* Small spacer bottom */}
                  <div className="h-1"></div>
                </div>

                {/* Right Illustration */}
                <div className="relative z-10 shrink-0 flex items-center justify-center">
                  {blog.bannerContent.illustration}
                </div>
              </div>

              {/* Bottom Details Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3.5 font-sans text-left bg-white">
                <div className="space-y-2">
                  {/* Date */}
                  <span className="text-xs font-semibold text-slate-400 font-sans block">
                    {blog.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#005F96] transition-colors font-sans">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2 font-sans">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs font-bold text-[#005F96] group-hover:underline">
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
            className="inline-block bg-[#005F96] hover:bg-[#004B77] text-white font-bold text-xs sm:text-sm px-8 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 tracking-wide"
          >
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AndroidRecentBlogsSection;
