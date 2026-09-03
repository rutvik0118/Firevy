import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export const SuccessStoriesSection = ({ category = 'general', title, subtitle }) => {
  const isEducation = category === 'education';
  const isAudio = category === 'audio' || category === 'spotify' || category === 'music';

  return (
    <section className={`py-14 sm:py-16 text-slate-900 font-sans text-left border-b border-slate-200 ${isEducation ? 'bg-[#DCF2F7]' : 'bg-[#EBF5FB]'}`}>
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
            {title || "Success Stories"}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed font-sans">
            {subtitle || "Know Sapphire journey from concept to success. Explore how we’ve brought ideas to life and achieved remarkable results for our clients."}
          </p>
        </div>

        {/* 3 Portfolio Cards */}
        {isEducation ? (
          /* Education App Development 3 Showcase Image Cards 1:1 Sapphire Reference Match */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10">
            
            {/* Card 1: Ai Powered Language Learning App Development */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 relative border border-slate-200/80 bg-white">
                <img
                  src="/images/edu_case_study_ai_language.jpg"
                  alt="Ai Powered Language Learning App Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Card Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Ai Powered Language Learning App Development
              </h3>
            </div>

            {/* Card 2: Learning Management System */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 relative border border-slate-200/80 bg-white">
                <img
                  src="/images/edu_case_study_lms.jpg"
                  alt="Learning Management System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Card Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Learning Management System
              </h3>
            </div>

            {/* Card 3: Tutor Finder App Development */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 relative border border-slate-200/80 bg-white">
                <img
                  src="/images/edu_case_study_tutor_finder.jpg"
                  alt="Tutor Finder App Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Card Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Tutor Finder App Development
              </h3>
            </div>

          </div>
        ) : isAudio ? (
          /* Music & Audio Streaming Case Studies */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#1DB954] via-[#0F2E1B] to-[#0A0A0A] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-[#1DB954] text-slate-950 shadow-sm flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                    <span>Spotify Engine</span>
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#005F96] text-white shadow-sm">
                    Case Study
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#005F96] block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Spotify Music Streaming App</h4>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Spotify Clone Music Streaming App
                </h3>
              </div>
            </div>
          </div>
        ) : (
          /* General Enterprise / Mobility Case Studies */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-[#FEE996] p-5 relative overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-center z-10">
                  <div className="flex items-center space-x-1.5 bg-red-600 text-white px-2.5 py-1 rounded-full text-[10px] font-black shadow-sm">
                    <span>NGcab</span>
                  </div>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#00B4D8] text-white shadow-sm">
                    Case Study
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#005F96] block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">NGcab Taxi Dispatch Engine</h4>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Cab Booking Application Development
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* View All Portfolio Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block px-9 py-3 rounded-lg bg-[#005D95] hover:bg-[#004A75] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-sans"
          >
            View All Portfolio
          </Link>
        </div>

        {/* 4 Pastel Stats Cards Row (Lavender, Green, Pink, Dark Blue) 1:1 Sapphire Match */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-12 sm:mt-14">
          {/* Card 1: Lavender */}
          <div className="p-6 rounded-2xl bg-[#E2D9FF] border border-purple-200/80 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-36 hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">23+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-700 mt-2 font-sans">Years Experience</div>
          </div>

          {/* Card 2: Soft Mint Green */}
          <div className="p-6 rounded-2xl bg-[#A7F3D0] border border-emerald-200/80 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-36 hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">320+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-700 mt-2 font-sans">5–Star Clutch Reviews</div>
          </div>

          {/* Card 3: Soft Coral Pink */}
          <div className="p-6 rounded-2xl bg-[#FFC5D7] border border-rose-200/80 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-36 hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">2800+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-700 mt-2 font-sans">Satisfied Clients</div>
          </div>

          {/* Card 4: Dark Sapphire Blue CTA */}
          <div className="p-6 rounded-2xl bg-[#005D95] text-white flex flex-col items-center justify-center text-center shadow-lg h-36 space-y-2.5 font-sans">
            <div className="text-sm sm:text-base font-extrabold text-white">Want to start Projects</div>
            <a
              href="#quote-form"
              className="px-6 py-2 rounded-lg bg-white text-[#005D95] font-black text-xs hover:bg-slate-100 transition-colors shadow-md"
            >
              Get Estimation
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SuccessStoriesSection;
