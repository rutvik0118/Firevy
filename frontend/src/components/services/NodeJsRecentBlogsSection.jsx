import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const nodeJsBlogsData = [
  {
    id: 1,
    date: 'April 22, 2023',
    title: 'Node.js vs PHP: Deciding the Right Environment for Your Project',
    excerpt: 'When selecting a programming language or environment for developing online apps, Node.js and PHP are two...',
    bgGradient: 'bg-[#EBF3FB]', // Soft ice-blue
    banner: (
      <div className="relative h-44 sm:h-48 bg-[#EBF3FB] p-4 sm:p-5 flex items-center justify-between overflow-hidden">
        {/* Left Side: Sapphire Logo & Title */}
        <div className="relative z-10 flex flex-col justify-between h-full pr-2 flex-1">
          {/* Firevy Logo */}
          <div className="flex items-center">
            <img
              src="/firevy_logo_dark.png"
              alt="firevy.co"
              className="h-5 sm:h-5.5 w-auto object-contain"
            />
          </div>

          {/* Banner Text */}
          <div className="py-1">
            <div className="flex items-center space-x-1.5 mb-1">
              <span className="bg-[#22C55E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[3px]">
                Node.JS
              </span>
              <span className="text-[11px] font-bold text-[#1E293B]">vs</span>
              <span className="bg-[#8B5CF6] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[3px]">
                PHP
              </span>
            </div>
            <p className="text-[12px] sm:text-[13px] font-bold text-[#1E293B] leading-tight font-sans">
              Deciding the Right Environment for Your Project
            </p>
          </div>
          <div className="h-0.5"></div>
        </div>

        {/* Right Side: Illustration */}
        <div className="relative z-10 shrink-0 flex items-center justify-center">
          <svg className="w-28 h-28 sm:w-32 sm:h-32" viewBox="0 0 130 130" fill="none">
            {/* Tech comparison graphic */}
            <circle cx="95" cy="30" r="14" fill="#22C55E" opacity="0.15" />
            <text x="95" y="34" textAnchor="middle" fill="#16A34A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">node</text>

            <circle cx="110" cy="56" r="11" fill="#8B5CF6" opacity="0.15" />
            <text x="110" y="59" textAnchor="middle" fill="#7C3AED" fontSize="8" fontWeight="bold" fontFamily="sans-serif">php</text>

            {/* VS Symbol */}
            <circle cx="82" cy="46" r="8" fill="#F59E0B" />
            <text x="82" y="49" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">VS</text>

            {/* Code Window / Monitor */}
            <rect x="22" y="50" width="34" height="26" rx="3" fill="#1E293B" />
            <circle cx="27" cy="54" r="1" fill="#EF4444" />
            <circle cx="31" cy="54" r="1" fill="#F59E0B" />
            <circle cx="35" cy="54" r="1" fill="#10B981" />
            <line x1="26" y1="60" x2="48" y2="60" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="64" x2="42" y2="64" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="68" x2="45" y2="68" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" />

            {/* Female Developer Left */}
            <g transform="translate(48, 54)">
              <circle cx="10" cy="10" r="6" fill="#FCD34D" />
              <path d="M5 8 C5 3 15 3 15 8" stroke="#1E293B" strokeWidth="2.5" fill="#1E293B" />
              <path d="M4 17 C4 17 0 28 0 42 L20 42 C20 28 16 17 16 17 Z" fill="#10B981" />
              {/* Laptop */}
              <path d="M-8 30 L6 30 L8 38 L-6 38 Z" fill="#93C5FD" />
            </g>

            {/* Male Developer Right */}
            <g transform="translate(74, 52)">
              <circle cx="10" cy="10" r="6" fill="#FCD34D" />
              <path d="M5 8 C5 4 15 4 15 8" stroke="#1E293B" strokeWidth="2.5" fill="#1E293B" />
              <path d="M4 17 C4 17 0 28 0 44 L20 44 C20 28 16 17 16 17 Z" fill="#1E3A8A" />
              <path d="M10 17 L8 26 L12 26 Z" fill="white" />
              {/* Desktop Monitor */}
              <rect x="18" y="24" width="22" height="16" rx="2" fill="#38BDF8" />
              <line x1="29" y1="40" x2="29" y2="44" stroke="#64748B" strokeWidth="2" />
              <line x1="24" y1="44" x2="34" y2="44" stroke="#64748B" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 2,
    date: 'July 12, 2023',
    title: 'Exploring the Top 10 Nodejs Frameworks for App...',
    excerpt: 'Using Node.js as a robust and effective JavaScript runtime environment for server-side applications has led to the...',
    bgGradient: 'bg-[#0A192F]', // Dark sapphire navy
    banner: (
      <div className="relative h-44 sm:h-48 bg-[#0B1E38] p-4 sm:p-5 flex items-center justify-between overflow-hidden">
        {/* Left Side: Firevy Logo & Title */}
        <div className="relative z-10 flex flex-col justify-between h-full pr-2 flex-1">
          {/* Firevy Logo */}
          <div className="flex items-center">
            <img
              src="/firevy_logo_white.png"
              alt="firevy.co"
              className="h-5 sm:h-5.5 w-auto object-contain"
            />
          </div>

          {/* Banner Text */}
          <div className="py-1">
            <p className="text-[12px] sm:text-[12.5px] font-semibold text-white/90 leading-tight font-sans">
              Exploring the Top 10
            </p>
            <p className="text-[12.5px] sm:text-[13px] font-extrabold text-[#F59E0B] leading-tight font-sans mt-0.5">
              Node.js Frameworks
            </p>
            <p className="text-[12px] sm:text-[12.5px] font-semibold text-white/90 leading-tight font-sans mt-0.5">
              for App Development
            </p>
          </div>
          <div className="h-0.5"></div>
        </div>

        {/* Right Side: Illustration */}
        <div className="relative z-10 shrink-0 flex items-center justify-center">
          <svg className="w-28 h-28 sm:w-32 sm:h-32" viewBox="0 0 130 130" fill="none">
            {/* Gears in background */}
            <circle cx="70" cy="38" r="14" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="3 3" fill="none" opacity="0.6" />
            <circle cx="70" cy="38" r="5" fill="#3B82F6" opacity="0.4" />
            <circle cx="50" cy="48" r="9" stroke="#93C5FD" strokeWidth="2" strokeDasharray="2 2" fill="none" opacity="0.5" />

            {/* Mobile / Tablet UI Screen */}
            <rect x="80" y="24" width="42" height="76" rx="6" fill="#1E40AF" stroke="#60A5FA" strokeWidth="1.5" />
            <rect x="84" y="32" width="34" height="20" rx="3" fill="#3B82F6" />
            <circle cx="92" cy="42" r="3" fill="white" />
            <line x1="98" y1="40" x2="112" y2="40" stroke="white" strokeWidth="1.5" />
            <line x1="98" y1="44" x2="108" y2="44" stroke="white" strokeWidth="1" />

            {/* App interface icons */}
            <rect x="84" y="56" width="7" height="7" rx="1.5" fill="#F59E0B" />
            <rect x="93" y="56" width="7" height="7" rx="1.5" fill="#10B981" />
            <rect x="102" y="56" width="7" height="7" rx="1.5" fill="#EC4899" />
            <rect x="111" y="56" width="7" height="7" rx="1.5" fill="#38BDF8" />

            {/* Bar charts inside screen */}
            <rect x="85" y="70" width="4" height="12" fill="#38BDF8" rx="1" />
            <rect x="91" y="66" width="4" height="16" fill="#60A5FA" rx="1" />
            <rect x="97" y="68" width="4" height="14" fill="#38BDF8" rx="1" />
            <rect x="103" y="64" width="4" height="18" fill="#60A5FA" rx="1" />
            <rect x="109" y="72" width="4" height="10" fill="#38BDF8" rx="1" />

            {/* Developer sitting on top right */}
            <g transform="translate(100, 14)">
              <circle cx="6" cy="4" r="3.5" fill="#FCD34D" />
              <path d="M3 10 C3 8 9 8 9 10 L8 18 L4 18 Z" fill="#38BDF8" />
              <path d="M4 18 L2 26 L6 26" stroke="#93C5FD" strokeWidth="2" />
              <rect x="5" y="11" width="6" height="5" rx="1" fill="#F3F4F6" />
            </g>

            {/* Developer left standing */}
            <g transform="translate(68, 70)">
              <circle cx="6" cy="4" r="3.5" fill="#FCD34D" />
              <path d="M2 9 C2 7 10 7 10 9 L9 24 L3 24 Z" fill="#38BDF8" />
              <path d="M3 24 L2 36 M9 24 L10 36" stroke="#1E293B" strokeWidth="2.5" />
            </g>
          </svg>
        </div>
      </div>
    )
  }
];

export const NodeJsRecentBlogsSection = () => {
  return (
    <section className="pt-10 pb-10 sm:pt-14 sm:pb-14 bg-white text-slate-900 text-left font-sans">
      {/* Section Header */}
      <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-8 sm:mb-10 space-y-2.5">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight font-sans">
          Our Recent Blogs
        </h2>
        <p className="text-[13px] sm:text-[14.5px] text-[#556987] font-normal leading-relaxed max-w-2xl mx-auto font-sans">
          Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
        </p>
      </div>

      <Container>
        {/* 2 Blog Cards Grid (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto mb-8">
          {nodeJsBlogsData.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Banner Graphic Area */}
              {blog.banner}

              {/* Bottom Details Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3 font-sans text-left bg-white">
                <div className="space-y-2">
                  {/* Date */}
                  <span className="text-xs font-semibold text-[#8F9BAA] font-sans block">
                    {blog.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15.5px] font-[800] text-[#0B0F19] leading-snug line-clamp-2 group-hover:text-[#005F96] transition-colors font-sans">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-[13px] text-[#556987] font-normal leading-relaxed line-clamp-2 font-sans">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs sm:text-[13px] font-[700] text-[#005F96] group-hover:underline">
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
            className="inline-block bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-xs sm:text-sm px-9 py-2.5 rounded-[4px] shadow-sm hover:shadow-md transition-all duration-200 tracking-wide cursor-pointer"
          >
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NodeJsRecentBlogsSection;
