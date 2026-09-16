import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import Container from '../common/Container';

export const CrossPlatformMusicCaseStudySection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-200/80">
      {/* Decorative Soft Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/12 w-64 h-64 sm:w-80 sm:h-80 bg-[#cbf0ff]/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/6 right-1/12 w-64 h-64 sm:w-80 sm:h-80 bg-[#ffdbe2]/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* Centered Top Client/Product Heading */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[900] text-slate-950 tracking-tight font-sans">
            MaDigital
          </h2>
        </motion.div>

        {/* Music App Video Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div
            onClick={() => setIsVideoOpen(true)}
            className="relative w-full aspect-[16/9] rounded-[22px] sm:rounded-[30px] overflow-hidden border-2 sm:border-[3px] border-white/80 shadow-[0_20px_50px_rgba(15,23,42,0.18)] group cursor-pointer select-none bg-slate-950"
          >
            {/* Background Image */}
            <img
              src="/images/cross_platform_beatsync_bg.jpg"
              alt="BeatSync Music App Case Study"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlays for Cinematic Lighting and Typography Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

            {/* Top Right: Firevy Brand Logo (1:1 with user instruction) */}
            <div className="absolute top-4 sm:top-6 right-5 sm:right-8 z-20 flex items-center gap-2">
              <img
                src="/firevy_logo_white.png"
                alt="Firevy"
                className="h-5 sm:h-7 w-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-[#1d4ed8]/85 group-hover:bg-[#2563eb] text-white flex items-center justify-center shadow-2xl backdrop-blur-xs border-2 border-white/60 transition-transform duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
              </div>
            </div>

            {/* Right-Center Content Overlay (BeatSync Branding) */}
            <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-20 text-center max-w-md pointer-events-none px-2">
              {/* Glowing Equalizer & Headphone Mini Badge */}
              <div className="inline-flex flex-col items-center justify-center mb-1.5 sm:mb-2">
                <div className="flex items-center gap-1.5 text-cyan-400 drop-shadow">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    <line x1="12" y1="11" x2="12" y2="15" />
                    <line x1="9" y1="12" x2="9" y2="14" />
                    <line x1="15" y1="12" x2="15" y2="14" />
                  </svg>
                </div>
                <span className="text-[11px] sm:text-[13px] font-bold text-slate-200 tracking-wider">
                  BeatSync
                </span>
              </div>

              {/* Main Title: BeatSync */}
              <h3 className="text-3xl sm:text-5xl lg:text-[54px] font-[900] tracking-tight bg-gradient-to-r from-[#38bdf8] via-[#67e8f9] to-[#fef08a] bg-clip-text text-transparent drop-shadow-lg leading-none mb-2 sm:mb-3">
                BeatSync
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-base lg:text-[17px] font-semibold text-white/95 leading-snug drop-shadow-md">
                Revolutionizing Music <br className="hidden sm:inline" />
                Management &amp; Collaboration
              </p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Interactive Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <div className="p-4 bg-slate-800 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <h3 className="font-bold text-white text-base">BeatSync - Music Management Platform</h3>
                </div>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="text-slate-400 hover:text-white text-xl font-bold p-1.5 rounded-full hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video w-full bg-black flex items-center justify-center">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="BeatSync Showcase"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CrossPlatformMusicCaseStudySection;
