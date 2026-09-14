import React, { useState } from 'react';
import Container from '../common/Container';

export const NodeJsVideoShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-sans text-left relative overflow-hidden select-none">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Node js development Services
          </h2>
        </div>

        {/* Video Player Card Container with Decorative Pastel Background Orbs */}
        <div className="relative max-w-[880px] mx-auto flex items-center justify-center">
          {/* Top-Left Soft Cyan/Blue Decorative Orb */}
          <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 w-56 h-56 sm:w-72 sm:h-72 bg-[#DDF4FF] rounded-full blur-3xl opacity-80 pointer-events-none -z-10" />

          {/* Bottom-Right Soft Pink/Peach Decorative Orb */}
          <div className="absolute -bottom-12 -right-12 sm:-bottom-16 sm:-right-16 w-56 h-56 sm:w-72 sm:h-72 bg-[#FFE4E6] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />

          {/* Main Dark Video Card */}
          <div
            onClick={() => setIsPlaying(true)}
            className="w-full aspect-[16/9] sm:aspect-[16/9.2] bg-gradient-to-b from-[#060D18] via-[#03070E] to-[#010408] rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-2xl border border-slate-800/60 relative cursor-pointer group flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Subtle Tech Grid Lines / Stars in Background */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-sky-950/30 to-transparent pointer-events-none" />

            {/* Top Row: Firevy Brand Logo */}
            <div className="w-full flex justify-end items-center relative z-10">
              <img
                src="/firevy_logo_white.png"
                alt="Firevy.co"
                className="h-5 sm:h-6 md:h-7 w-auto object-contain drop-shadow-md brightness-110"
              />
            </div>

            {/* Center Content: 3D Node.js Brand Logo & Glowing Caption */}
            <div className="w-full flex flex-col items-center justify-center my-auto relative z-10 text-center">
              {/* Node.js 3D Logo Graphic */}
              <div className="flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-500">
                <div className="flex items-center space-x-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-[900] text-white tracking-tighter">
                    no
                  </span>
                  {/* Hexagon JS Badge */}
                  <div className="relative flex items-center justify-center">
                    <svg viewBox="0 0 100 115" className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 fill-[#539E43] drop-shadow-[0_0_15px_rgba(83,158,67,0.7)]">
                      <polygon points="50 0, 100 28.8, 100 86.6, 50 115.5, 0 86.6, 0 28.8" />
                    </svg>
                    <span className="absolute font-[900] text-white text-xs sm:text-sm md:text-base tracking-tight">
                      JS
                    </span>
                  </div>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-[900] text-white tracking-tighter">
                    e
                  </span>
                </div>
              </div>

              {/* Glowing Subtitle Text */}
              <p className="text-sky-300 font-[700] text-xs sm:text-sm md:text-base tracking-wide drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] mt-1">
                Accelerate Your Development with Node.js
              </p>
            </div>

            {/* Center Glowing Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="relative flex items-center justify-center">
                {/* Outer Ripple Effect */}
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#005F96]/30 animate-ping opacity-75" />
                {/* Middle Glass Ring */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#0284C7]/80 to-[#005F96]/90 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-[0_0_35px_rgba(0,95,150,0.8)] group-hover:scale-115 transition-transform duration-300">
                  {/* White Play Triangle */}
                  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" stroke="none">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Empty bottom spacer for balance */}
            <div className="h-4" />
          </div>
        </div>
      </Container>

      {/* Video Popup Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Modal Header */}
            <div className="p-4 bg-slate-900 flex items-center justify-between border-b border-slate-800">
              <h3 className="font-bold text-white text-sm sm:text-base">
                Node.js Enterprise Application Development Services
              </h3>
              <button
                onClick={() => setIsPlaying(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-lg font-bold transition-all cursor-pointer"
                aria-label="Close video"
              >
                ✕
              </button>
            </div>

            {/* Video Player */}
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                src="/Best Software Development Company in USA - Sapphire Software Sol.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NodeJsVideoShowcaseSection;
