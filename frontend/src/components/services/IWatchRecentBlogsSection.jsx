import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const FirevyLogo = () => (
  <div className="flex items-center select-none">
    <img
      src="/firevy_logo_dark.png"
      alt="firevy.co"
      className="h-4 sm:h-[18px] w-auto object-contain drop-shadow-2xs"
    />
  </div>
);

const iwatchBlogsData = [
  {
    id: 1,
    date: 'January 8, 2024',
    title: 'Mobile App Ideas to Boost Your Business Growth in 2023',
    excerpt: 'Explore innovative mobile app concepts and feature strategies designed to accelerate digital engagement and business revenue...',
    renderGraphic: () => (
      <div className="relative w-full h-full bg-gradient-to-br from-[#ebebff] via-[#f3f0ff] to-[#f9f5ff] p-4 sm:p-5 flex items-center justify-between overflow-hidden select-none border-b border-slate-100">
        {/* Top Left: Official firevy.co Brand Logo */}
        <div className="absolute top-3 left-3.5 z-30">
          <img src="/firevy_logo_dark.png" alt="firevy.co" className="h-4 sm:h-[18px] w-auto object-contain drop-shadow-2xs" />
        </div>

        {/* Left Typography */}
        <div className="w-[50%] z-20 text-left pt-6 space-y-1 font-sans">
          <span className="text-[#2563eb] font-[800] text-[15px] sm:text-[16px] block leading-tight tracking-tight">
            Mobile App
          </span>
          <span className="text-slate-900 font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            Ideas to Boost<br />Your Business<br />Growth in 2023
          </span>
        </div>

        {/* Right 3D Claymorphic Phone & Widget Composition */}
        <div className="w-[50%] flex justify-end items-center z-10 pr-0.5 pt-3">
          <div className="relative w-32 sm:w-36 h-32 flex items-center justify-center">
            {/* 3D Phone Body with Deep Realistic Shadow & Specular Bezel */}
            <div className="w-[68px] sm:w-[74px] h-[105px] sm:h-[114px] bg-gradient-to-b from-[#2a2e3d] via-[#1c1f2b] to-[#12141c] rounded-[16px] border-[2.5px] border-[#4b5268] shadow-[0_15px_30px_rgba(15,23,42,0.35),0_4px_10px_rgba(0,0,0,0.2)] p-1.5 flex flex-col items-center justify-between relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Speaker Notch */}
              <div className="w-5 h-1 bg-[#4b5268] rounded-full mt-0.5" />

              {/* Glossy Screen */}
              <div className="w-full flex-1 bg-gradient-to-b from-[#181b26] to-[#0c0e14] rounded-[11px] p-1.5 flex flex-col items-center justify-center relative overflow-hidden border border-white/5">
                {/* Screen diagonal light sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />

                {/* 3D Orange Video Play Tile Floating on Screen */}
                <div className="w-10 h-7 bg-gradient-to-br from-[#ff8a3d] via-[#ff6b2c] to-[#e64a19] rounded-[7px] border border-white/40 shadow-[0_6px_14px_rgba(230,74,25,0.45)] flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-white ml-0.5 drop-shadow-xs" />
                </div>
              </div>

              {/* Home Indicator Bar */}
              <div className="w-6 h-0.5 bg-slate-500 rounded-full mb-0.5" />
            </div>

            {/* 3D Purple Avatar Badge Floating */}
            <div className="absolute -top-1 right-0 w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#a855f7] via-[#9333ea] to-[#7e22ce] rounded-[9px] border-[1.5px] border-white/50 shadow-[0_8px_18px_rgba(147,51,234,0.4)] flex items-center justify-center text-white transform rotate-6">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>

            {/* 3D Peach/Coral Document Card Floating */}
            <div className="absolute -bottom-1 right-0.5 w-11 h-12 bg-gradient-to-br from-[#ff9e80] via-[#ff7043] to-[#f4511e] rounded-[9px] border-[1.5px] border-white/60 shadow-[0_10px_20px_rgba(244,81,30,0.4)] p-1.5 flex flex-col justify-around transform -rotate-6">
              <div className="w-full h-1 bg-white/90 rounded-full shadow-2xs" />
              <div className="w-3/4 h-1 bg-white/90 rounded-full shadow-2xs" />
              <div className="w-1/2 h-1 bg-white/90 rounded-full shadow-2xs" />
            </div>

            {/* Floating Soft Ambient Glow Bubbles */}
            <div className="absolute top-1 left-0 w-2 h-2 rounded-full bg-indigo-400/60 blur-xs animate-pulse" />
            <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-purple-400/50 blur-xs" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    date: 'November 30, 2023',
    title: 'Securing Your Mobile App : The Essential Cybersecurity Guide',
    excerpt: 'Before deploying an app, protect client data with robust cybersecurity protocols, biometric authentication, and active penetration testing...',
    renderGraphic: () => (
      <div className="relative w-full h-full bg-gradient-to-br from-[#f4efff] via-[#f7f2ff] to-[#fcf8ff] p-4 sm:p-5 flex items-center justify-between overflow-hidden select-none border-b border-slate-100">
        {/* Top Left: Official firevy.co Brand Logo */}
        <div className="absolute top-3 left-3.5 z-30">
          <img src="/firevy_logo_dark.png" alt="firevy.co" className="h-4 sm:h-[18px] w-auto object-contain drop-shadow-2xs" />
        </div>

        {/* Left Typography */}
        <div className="w-[50%] z-20 text-left pt-6 font-sans space-y-0.5">
          <span className="text-slate-900 font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            Securing Your<br />Mobile App :
          </span>
          <span className="text-[#9333ea] font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            The Essential<br />Cybersecurity
          </span>
          <span className="text-slate-900 font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            Guide
          </span>
        </div>

        {/* Right 3D Claymorphic Phone with Biometric & Padlock */}
        <div className="w-[50%] flex justify-end items-center z-10 pr-0.5 pt-3">
          <div className="relative w-32 sm:w-36 h-32 flex items-center justify-center">
            {/* 3D Phone Body with Deep Metallic Slate Frame */}
            <div className="w-[68px] sm:w-[74px] h-[105px] sm:h-[114px] bg-gradient-to-b from-[#252837] via-[#1a1c28] to-[#10121a] rounded-[16px] border-[2.5px] border-[#4e536c] shadow-[0_15px_30px_rgba(15,23,42,0.35),0_4px_10px_rgba(0,0,0,0.2)] p-1.5 flex flex-col items-center justify-between relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Camera Notch */}
              <div className="w-4 h-1 bg-[#4e536c] rounded-full mt-0.5" />

              {/* Screen with Glowing 3D Biometric Fingerprint Rings */}
              <div className="w-full flex-1 bg-gradient-to-b from-[#131622] to-[#0a0c13] rounded-[11px] p-1.5 flex flex-col items-center justify-center relative overflow-hidden border border-cyan-500/20">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-cyan-400/90 shadow-[0_0_12px_rgba(6,182,212,0.6)] flex items-center justify-center animate-pulse">
                    <div className="w-6 h-6 rounded-full border-[1.5px] border-cyan-300 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Indicator */}
              <div className="w-6 h-0.5 bg-slate-500 rounded-full mb-0.5" />
            </div>

            {/* 3D Shiny Green Padlock Floating with High Specular Lighting */}
            <div className="absolute -bottom-1 right-0.5 w-10 h-11 bg-gradient-to-br from-[#34d399] via-[#10b981] to-[#047857] rounded-[9px] border-[1.5px] border-white/70 shadow-[0_10px_22px_rgba(16,185,129,0.5)] flex flex-col items-center justify-center text-white transform -rotate-6">
              {/* Metallic Silver Padlock Shackle */}
              <div className="w-4 h-3.5 border-[2.5px] border-slate-200 rounded-t-full -mt-3.5 mb-0.5 shadow-xs" />
              {/* Keyhole */}
              <div className="w-2 h-2.5 bg-[#064e3b] rounded-full flex flex-col items-center justify-end">
                <div className="w-1 h-1.5 bg-[#064e3b]" />
              </div>
            </div>

            {/* Floating 3D Purple Node Sphere */}
            <div className="absolute top-2 left-0.5 w-6 h-6 rounded-full bg-gradient-to-tr from-[#9333ea] to-[#c084fc] border border-white/60 shadow-[0_4px_10px_rgba(147,51,234,0.4)] flex items-center justify-center text-white">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    date: 'September 21, 2023',
    title: 'Start Making Money Now: Create an MVP for Your Mobile App',
    excerpt: 'Step-by-step roadmap to building a high-impact minimum viable product (MVP), validating market demand, and generating early cashflow...',
    renderGraphic: () => (
      <div className="relative w-full h-full bg-gradient-to-br from-[#e6f5ff] via-[#edf7ff] to-[#f7fbff] p-4 sm:p-5 flex items-center justify-between overflow-hidden select-none border-b border-slate-100">
        {/* Top Left: Official firevy.co Brand Logo */}
        <div className="absolute top-3 left-3.5 z-30">
          <img src="/firevy_logo_dark.png" alt="firevy.co" className="h-4 sm:h-[18px] w-auto object-contain drop-shadow-2xs" />
        </div>

        {/* Left Typography */}
        <div className="w-[50%] z-20 text-left pt-6 font-sans space-y-0.5">
          <span className="text-slate-900 font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            Start Making<br />Money Now:
          </span>
          <span className="text-slate-900 font-[800] text-[12.5px] sm:text-[13.5px] block leading-snug tracking-tight">
            Create an <span className="text-[#0284c7] font-[900]">MVP</span><br />
            for Your Mobile App
          </span>
        </div>

        {/* Right 3D Claymorphic Browser & Analytics Dashboard */}
        <div className="w-[50%] flex justify-end items-center z-10 pr-0.5 pt-3">
          <div className="relative w-32 sm:w-36 h-32 flex items-center justify-center">
            {/* 3D Browser Window with Depth Shadow & Header */}
            <div className="w-24 sm:w-26 h-18 sm:h-20 bg-gradient-to-b from-white to-[#f0f9ff] rounded-[10px] border-[1.5px] border-[#93c5fd] shadow-[0_12px_28px_rgba(2,132,199,0.22),0_4px_10px_rgba(0,0,0,0.06)] p-1.5 flex flex-col justify-between transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Window Header with Blue Accent & Buttons */}
              <div className="w-full h-2.5 bg-gradient-to-r from-[#0284c7] to-[#38bdf8] rounded-t-[7px] flex items-center px-1.5 gap-1 shadow-xs">
                <div className="w-1 h-1 rounded-full bg-white/90" />
                <div className="w-1 h-1 rounded-full bg-white/90" />
                <div className="w-1 h-1 rounded-full bg-white/90" />
              </div>

              {/* 3D Growth Line Chart */}
              <div className="flex-1 p-1 flex items-center justify-center relative">
                <svg className="w-full h-8 text-[#0284c7] drop-shadow-[0_2px_4px_rgba(2,132,199,0.35)]" viewBox="0 0 60 22" fill="none">
                  <path d="M3 17 C12 17, 18 10, 28 13 C38 16, 44 5, 57 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="57" cy="3" r="2" fill="#0284c7" />
                </svg>
              </div>

              {/* Status Indicator Bars */}
              <div className="w-full h-1 bg-slate-100 rounded-full flex gap-1">
                <div className="w-1/3 h-full bg-[#0284c7]/40 rounded-full" />
                <div className="w-1/2 h-full bg-[#38bdf8]/40 rounded-full" />
              </div>
            </div>

            {/* 3D Developer Avatar Floating Pill */}
            <div className="absolute -bottom-1 right-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] border-[1.5px] border-white/80 shadow-[0_6px_14px_rgba(2,132,199,0.45)] flex items-center justify-center text-white">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>

            {/* Gear / Tech Widget Floating */}
            <div className="absolute -top-1.5 right-1 w-5 h-5 rounded-full bg-gradient-to-tr from-[#38bdf8] to-[#bae6fd] border border-white/80 shadow-sm flex items-center justify-center text-[#0369a1]">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export const IWatchRecentBlogsSection = () => {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white text-slate-900 text-left font-sans">
      {/* Section Header */}
      <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-8 sm:mb-10 space-y-2.5">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
          style={{ fontSize: '32px' }}
        >
          Our Recent Blogs
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] font-normal leading-relaxed max-w-2xl mx-auto">
          Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
        </p>
      </div>

      <Container className="max-w-6xl">
        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mx-auto mb-9 sm:mb-10">
          {iwatchBlogsData.map((blog) => (
            <div
              key={blog.id}
              className="rounded-[20px] bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Banner Graphic with 1:1 firevy.co logo */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-50 flex items-center justify-center">
                {blog.renderGraphic()}
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

export default IWatchRecentBlogsSection;
