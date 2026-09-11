import React, { useState } from 'react';
import Container from '../common/Container';

export const TopRatedFlutterShowcase = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-7 sm:py-9 lg:py-11 bg-[#F4F9FC] text-slate-900 font-sans text-left relative overflow-hidden">
      {/* Ambient Decorative Pastel Circles in Background matching reference */}
      <div className="absolute top-1/4 left-6 sm:left-12 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#D7EEFB] opacity-80 blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-6 sm:right-12 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#FCE5EB] opacity-80 blur-2xl pointer-events-none -z-10" />

      <Container>
        {/* Section Heading matching screenshot 1:1 */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            Top Rated Flutter App Development Services
          </h2>
        </div>

        {/* Featured Showcase Video Card with Thick White Border */}
        <div
          onClick={() => setIsVideoOpen(true)}
          className="max-w-[1040px] mx-auto rounded-[24px] sm:rounded-[28px] border-[5px] sm:border-[7px] border-white shadow-2xl overflow-hidden relative bg-[#040810] text-white aspect-[16/9] sm:aspect-[16/8.8] flex items-center justify-center cursor-pointer group select-none"
        >
          {/* Cosmic Galaxy / Starry Dark Blue Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-[#02050B] to-[#010307]" />

          {/* Glowing particle dots and starry dust effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-75"
            style={{
              backgroundImage:
                'radial-gradient(1.5px 1.5px at 20% 30%, rgba(56, 189, 248, 0.6) 100%, transparent), radial-gradient(1.5px 1.5px at 40% 70%, rgba(255, 255, 255, 0.4) 100%, transparent), radial-gradient(2px 2px at 60% 25%, rgba(0, 184, 255, 0.7) 100%, transparent), radial-gradient(1.5px 1.5px at 80% 60%, rgba(56, 189, 248, 0.5) 100%, transparent), radial-gradient(1px 1px at 70% 85%, rgba(255, 255, 255, 0.3) 100%, transparent), radial-gradient(2px 2px at 30% 80%, rgba(0, 184, 255, 0.6) 100%, transparent), radial-gradient(1.5px 1.5px at 85% 20%, rgba(255, 255, 255, 0.5) 100%, transparent)',
              backgroundSize: '280px 280px'
            }}
          />

          {/* Central Blue Neon Ambient Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-80"
            style={{
              background:
                'radial-gradient(circle at 50% 48%, rgba(0, 160, 240, 0.35) 0%, rgba(0, 100, 180, 0.15) 35%, transparent 70%)'
            }}
          />

          {/* Top Right Logo Watermark */}
          <div className="absolute top-5 right-6 sm:top-6 sm:right-8 flex items-center opacity-90 z-20">
            <img
              src="/firevy_logo_white.png"
              alt="firevy.co"
              className="h-5 sm:h-6 md:h-7 w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Central Flutter Glowing Box & Play Action */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            {/* Glowing Flutter Frame Box */}
            <div className="relative mb-4 sm:mb-6">
              {/* Outer Neon Glow Ring */}
              <div className="absolute -inset-3 bg-sky-500/30 rounded-2xl blur-lg group-hover:bg-sky-400/40 transition-all duration-300" />

              {/* Glass Frame Border */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-b from-[#0A223E]/90 to-[#041122]/95 border-2 border-sky-400/60 flex items-center justify-center shadow-[0_0_30px_rgba(2,132,199,0.5)] group-hover:border-sky-300 transition-all duration-300">
                {/* Official Flutter Logo SVG inside Glass */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 sm:w-14 sm:h-14 fill-none drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                >
                  {/* Top Flutter Blade */}
                  <path d="M14.314 0L2.3 12l3.7 3.7L21.686 0h-7.372z" fill="#00D2FF" />
                  {/* Bottom Right Chevron */}
                  <path
                    d="M14.314 9.771L7.257 16.828l3.7 3.7 7.057-7.057 3.7 3.7L14.314 24h7.372L24 21.686l-5.986-5.986L24 9.771h-7.372z"
                    fill="#007ACC"
                  />
                  {/* Center Triangle Highlight */}
                  <path
                    d="M14.314 9.771l-3.5 3.5 3.5 3.5 3.7-3.7-3.7-3.3z"
                    fill="#38BDF8"
                    opacity="0.9"
                  />
                </svg>

                {/* Overlaid Play Button in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0070BA]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/40">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current ml-0.5" stroke="none">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Cyan Headline Text matching screenshot 1:1 */}
            <h3 className="font-[800] text-[20px] sm:text-[24px] md:text-[28px] text-[#00C4FF] tracking-tight leading-tight drop-shadow-[0_0_15px_rgba(0,196,255,0.6)]">
              Unlock the Power of Flutter!
            </h3>
          </div>
        </div>
      </Container>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[16/9]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-lg font-bold transition-all cursor-pointer"
            >
              ✕
            </button>

            {/* Video Player */}
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Top Rated Flutter App Development Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TopRatedFlutterShowcase;
