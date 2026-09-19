import React, { useState } from 'react';
import Container from '../common/Container';
import { Play, X } from 'lucide-react';

export const CloudComputingTrendsShowcase = ({
  title = "Cloud Computing in 2025: Trends and Strategies for Business Growth"
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FBFC] text-slate-900 font-sans text-left relative overflow-hidden">
      {/* Ambient Decorative Pastel Circle in Background matching screenshot 1:1 */}
      <div className="absolute top-1/4 left-2 sm:left-12 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#D5EFFD] opacity-80 blur-3xl pointer-events-none -z-10" />

      <Container className="max-w-6xl">
        {/* Section Heading matching screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}
          >
            {title}
          </h2>
        </div>

        {/* Video Card Container with Thick White Border & Drop Shadow */}
        <div className="max-w-[1040px] mx-auto rounded-[24px] sm:rounded-[32px] border-[6px] sm:border-[8px] border-white shadow-2xl overflow-hidden relative select-none bg-[#091124] min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
          
          {/* 3D Isometric Cloud Illustration Background */}
          <img
            src="/images/cloud_computing_2025_video_cover.jpg"
            alt="Cloud Computing in 2025 Trends & Strategies"
            className="absolute inset-0 w-full h-full object-cover object-center sm:object-right"
          />

          {/* Left Dark Gradient Overlay for Maximum Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#091124]/95 via-[#091124]/65 to-transparent z-10 pointer-events-none" />

          {/* Top-Right Brand Badge (Firevy.co replacing Sapphire) */}
          <div className="absolute top-4 sm:top-7 right-5 sm:right-8 z-20 flex items-center space-x-2.5 bg-[#091124]/90 sm:bg-[#091124]/75 backdrop-blur-md px-4 py-2 rounded-xl border border-cyan-400/30 shadow-lg">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <div className="flex flex-col text-right">
              <span className="font-[900] text-[15px] sm:text-[17px] text-white tracking-tight leading-none">
                firevy<span className="text-[#00D2F4]">.co</span>
              </span>
              <span className="text-[8.5px] font-semibold tracking-wider text-slate-300 uppercase leading-none mt-1">
                Cloud Enterprise
              </span>
            </div>
          </div>

          {/* Card Content: Cyan Headline & Interactive Play Button */}
          <div className="relative z-20 w-full px-6 sm:px-12 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Headline Matching Screenshot Exactly */}
            <div className="max-w-md lg:max-w-lg space-y-2 text-left">
              <h3
                className="font-[800] text-[#00D2F4] tracking-tight leading-[1.18] drop-shadow-[0_2px_14px_rgba(0,210,244,0.4)]"
                style={{ fontSize: 'clamp(22px, 3.4vw, 38px)' }}
              >
                Cloud Computing
                <br />
                in 2025: Trends
                <br />
                & Strategies for
                <br />
                Business Growth
              </h3>
            </div>

            {/* Centered / Right Play Button */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white text-[#005F96] flex items-center justify-center shadow-[0_0_35px_rgba(0,210,244,0.7)] hover:scale-115 hover:bg-[#00D2F4] hover:text-slate-900 transition-all cursor-pointer group"
                aria-label="Play Cloud Computing Trends Video"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Spacer for balancing the right illustration on large screens */}
            <div className="hidden lg:block w-36" />
          </div>
        </div>
      </Container>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/30">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube-nocookie.com/embed/M988_fsOSWo?autoplay=1"
                title="Cloud Computing in 2025: Trends & Strategies"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CloudComputingTrendsShowcase;
