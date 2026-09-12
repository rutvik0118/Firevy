import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const JavaSuccessStoriesSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#E8F6FB] text-slate-900 font-sans text-left border-b border-sky-100 select-none">
      <Container>
        {/* Section Heading & Subtitle (Exact 1:1 Match) */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <h2 className="text-[28px] sm:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Success Stories
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-[#475569] max-w-3xl mx-auto leading-relaxed font-normal">
            Know Sapphire journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
          </p>
        </div>

        {/* 3 Showcase Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1340px] mx-auto mb-8 sm:mb-10">
          
          {/* Card 1: Health and Safety Management System */}
          <div className="flex flex-col items-start group cursor-pointer">
            <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-xs border border-sky-200/80 bg-[#12B5CB] relative flex flex-col justify-between group-hover:shadow-lg transition-all duration-300">
              
              {/* Background Real Construction Site with Engineers */}
              <img
                src="/images/l&t.webp"
                alt="Health and Safety Management System - Larsen & Toubro"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/case_study_health_safety.jpg';
                }}
              />

              {/* Cyan / Teal Top Branding Overlay Strip */}
              <div className="relative z-10 p-3 sm:p-3.5 bg-gradient-to-b from-[#0E9DB2]/90 via-[#0E9DB2]/60 to-transparent flex items-center justify-between">
                <div className="bg-white/95 px-3 py-1 rounded-[5px] text-[11px] font-black text-slate-900 tracking-tight shadow-sm">
                  Outcome
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm border border-sky-300">
                    <span className="font-[900] text-[#005F96] text-[10px] tracking-tighter">L&T</span>
                  </div>
                  <div className="bg-[#38BDF8] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-[5px] uppercase tracking-wide shadow-sm">
                    Case Study
                  </div>
                </div>
              </div>

              {/* Bottom Gradient Overlay with Tag & Stats */}
              <div className="relative z-10 p-3 sm:p-3.5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white text-left">
                <div className="text-[11px] sm:text-[12px] font-[800] text-sky-200 leading-snug mb-1.5 drop-shadow-md">
                  digitalised health & safety operations for a 80+ years old organisation
                </div>
                <div className="flex items-center space-x-2 text-[8px] sm:text-[8.5px] font-bold">
                  <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-white">15+ Modules</span>
                  <span className="bg-[#0284C7] px-2 py-0.5 rounded text-white">10000+ Workers</span>
                  <span className="bg-emerald-500 px-2 py-0.5 rounded text-white">Top 10 Global</span>
                </div>
              </div>
            </div>

            {/* Title Below Card */}
            <h3 className="font-[800] text-[15px] sm:text-[16.5px] text-[#0B0F19] mt-3 group-hover:text-[#005F96] transition-colors">
              Health and Safety Management System
            </h3>
          </div>

          {/* Card 2: Job Portal Website Development */}
          <div className="flex flex-col items-start group cursor-pointer">
            <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-xs border border-sky-200/80 bg-gradient-to-br from-[#93C5FD] via-[#60A5FA] to-[#3B82F6] p-3 sm:p-3.5 relative flex flex-col justify-between group-hover:shadow-lg transition-all duration-300">
              
              {/* Large Watermark: JOB Matchers */}
              <div className="absolute top-1 left-3 text-white/30 font-[900] text-[26px] sm:text-[30px] tracking-wider select-none pointer-events-none">
                JOB Matchers
              </div>

              {/* Main Split: Dark Blue Card + Real Pointing Professional Photo */}
              <div className="grid grid-cols-12 gap-2 my-auto items-center z-10 w-full pt-3">
                {/* Left Blue Card */}
                <div className="col-span-7 bg-[#1E3A8A] text-white rounded-[10px] p-3 shadow-md text-left z-10">
                  <div className="text-[8px] font-bold text-blue-200 mb-0.5">JOB Matchers</div>
                  <div className="text-[12px] sm:text-[13px] font-[900] leading-tight text-white mb-0.5">
                    Want To Get Hired?
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-blue-200 leading-tight mb-2">
                    We Got Opportunities.
                  </div>
                  <div className="inline-flex items-center space-x-1 bg-white hover:bg-slate-50 text-[#1E3A8A] text-[8px] font-bold px-2.5 py-1 rounded shadow-xs transition-colors">
                    <span>Get Started</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Right: Real High-Res Pointing Professional Image */}
                <div className="col-span-5 h-[130px] sm:h-[140px] relative flex items-end justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                    alt="Job Matchers Professional"
                    className="h-[125%] object-cover object-top drop-shadow-lg group-hover:scale-105 transition-transform duration-500 rounded-t-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bottom Stats Ribbon */}
              <div className="bg-white/95 rounded-[6px] p-1.5 flex items-center justify-between text-[7.5px] sm:text-[8px] font-bold text-slate-700 shadow-xs z-10">
                <span className="text-blue-900 font-extrabold">Our Stats</span>
                <span className="text-slate-800">25 K+ <span className="font-normal text-slate-500">Hirings</span></span>
                <span className="text-slate-800">98% <span className="font-normal text-slate-500">Success Ratio</span></span>
                <span className="text-slate-800">75 K+ <span className="font-normal text-slate-500">Reviews</span></span>
              </div>
            </div>

            {/* Title Below Card */}
            <h3 className="font-[800] text-[15px] sm:text-[16.5px] text-[#0B0F19] mt-3 group-hover:text-[#005F96] transition-colors">
              Job Portal Website Development
            </h3>
          </div>

          {/* Card 3: Live Event Website Development */}
          <div className="flex flex-col items-start group cursor-pointer">
            <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-xs border border-rose-200/80 bg-gradient-to-br from-[#FECDD3] via-[#FDA4AF] to-[#F43F5E] p-3 sm:p-3.5 relative flex flex-col justify-center items-center group-hover:shadow-lg transition-all duration-300">
              
              {/* Large Watermark: Live Event */}
              <div className="absolute top-1 left-3 text-white/35 font-[900] text-[26px] sm:text-[30px] tracking-wider select-none pointer-events-none">
                Live Event
              </div>

              {/* Realistic Desktop Computer Monitor on Curved Blue Stand */}
              <div className="w-[90%] max-w-[290px] relative flex flex-col items-center z-10 mt-1">
                {/* Screen Housing */}
                <div className="w-full bg-[#0F172A] rounded-[8px] p-1.5 shadow-2xl border border-slate-700">
                  {/* Screen Display */}
                  <div className="w-full bg-gradient-to-br from-[#881337] via-[#9F1239] to-[#BE123C] rounded-[4px] p-2 text-white text-center relative overflow-hidden">
                    
                    {/* Header Strip */}
                    <div className="flex justify-between items-center pb-1 border-b border-rose-400/40 text-[5px] text-rose-100">
                      <span className="font-bold flex items-center space-x-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                        <span>Live Event</span>
                      </span>
                      <span className="space-x-1.5 font-semibold">
                        <span>Home</span>
                        <span>About Us</span>
                        <span>Speakers</span>
                      </span>
                    </div>

                    {/* Headline Banner */}
                    <div className="text-[7.5px] sm:text-[8px] font-[900] tracking-wide text-white mt-1 leading-tight">
                      IT'S TIME TO BOOST YOUR BUSINESS
                    </div>
                    <div className="text-[4.5px] text-rose-200 leading-tight mt-0.5 max-w-[180px] mx-auto">
                      Bring better events to life without any stress, enjoy numerous friendly live platforms.
                    </div>

                    {/* 3 Real Speaker Circular Avatars with photos */}
                    <div className="flex justify-center items-center space-x-2 my-1.5">
                      <div className="w-6 h-6 rounded-full bg-rose-200 border-2 border-white overflow-hidden shadow-xs">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                          alt="Speaker 1"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-amber-200 border-2 border-white overflow-hidden shadow-xs -mt-1">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                          alt="Speaker 2"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-sky-200 border-2 border-white overflow-hidden shadow-xs">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                          alt="Speaker 3"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* CTA Pill */}
                    <div className="inline-block bg-white text-[#9F1239] text-[5.5px] font-[800] px-2.5 py-0.5 rounded-full shadow-xs">
                      GET IN TOUCH
                    </div>
                  </div>
                </div>

                {/* Curved Metallic Blue Stand */}
                <div className="w-4 h-4.5 bg-[#3B82F6] shadow-sm -mt-0.5" />
                <div className="w-20 h-2 bg-[#2563EB] rounded-full shadow-md" />
              </div>
            </div>

            {/* Title Below Card */}
            <h3 className="font-[800] text-[15px] sm:text-[16.5px] text-[#0B0F19] mt-3 group-hover:text-[#005F96] transition-colors">
              Live Event Website Development
            </h3>
          </div>

        </div>

        {/* Centered View All Portfolio CTA Button (Exact 1:1 Match) */}
        <div className="text-center mb-10 sm:mb-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[13.5px] sm:text-[14.5px] rounded-[5px] px-8 sm:px-10 py-3 transition-all shadow-sm"
          >
            View All Portfolio
          </Link>
        </div>

        {/* 4 Pastel & Action Stats Cards Row (Exact 1:1 Color & Typography Match) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-[1340px] mx-auto">
          {/* Card 1: Lavender / Soft Purple */}
          <div className="rounded-[16px] bg-[#DDD6FE] p-6 text-center flex flex-col justify-center items-center shadow-xs min-h-[130px]">
            <div className="text-[34px] sm:text-[38px] font-[900] text-[#0B0F19] leading-none mb-1.5">
              23+
            </div>
            <div className="text-[13px] sm:text-[14px] font-[700] text-[#1E293B]">
              Years Experience
            </div>
          </div>

          {/* Card 2: Mint Green */}
          <div className="rounded-[16px] bg-[#A7F3D0] p-6 text-center flex flex-col justify-center items-center shadow-xs min-h-[130px]">
            <div className="text-[34px] sm:text-[38px] font-[900] text-[#0B0F19] leading-none mb-1.5">
              320+
            </div>
            <div className="text-[13px] sm:text-[14px] font-[700] text-[#1E293B]">
              5-Star Clutch Reviews
            </div>
          </div>

          {/* Card 3: Coral / Salmon Pink */}
          <div className="rounded-[16px] bg-[#FECACA] p-6 text-center flex flex-col justify-center items-center shadow-xs min-h-[130px]">
            <div className="text-[34px] sm:text-[38px] font-[900] text-[#0B0F19] leading-none mb-1.5">
              2800+
            </div>
            <div className="text-[13px] sm:text-[14px] font-[700] text-[#1E293B]">
              Satisfied Clients
            </div>
          </div>

          {/* Card 4: Sapphire Blue Action Card with White Button */}
          <div className="rounded-[16px] bg-[#005F96] p-6 text-center flex flex-col justify-center items-center shadow-md min-h-[130px] space-y-2.5">
            <div className="text-[16px] sm:text-[17.5px] font-[800] text-white leading-tight">
              Want to start Projects
            </div>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-50 text-[#005F96] font-[800] text-[13px] sm:text-[13.5px] rounded-[5px] px-6 py-2 transition-all shadow-xs inline-block"
            >
              Get Estimation
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default JavaSuccessStoriesSection;
