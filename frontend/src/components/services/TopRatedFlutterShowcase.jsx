import React, { useState } from 'react';
import Container from '../common/Container';

export const TopRatedFlutterShowcase = ({
  title,
  subtitle,
  type = 'dotnet',
  videoTitle,
  videoUrl = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1'
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const displayTitle = title || (type === 'dotnet' ? 'Growing Popularity of DotNet Development' : 'Top Rated Flutter App Development Services');
  const displayVideoText = videoTitle || (type === 'dotnet' ? 'Empower Your Business with .NET Development' : 'Unlock the Power of Flutter!');

  return (
    <section className="py-7 sm:py-9 lg:py-11 bg-white text-slate-900 font-sans text-left relative overflow-hidden">
      {/* Ambient Decorative Pastel Circles in Background matching reference */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#E0F2FE] opacity-90 blur-xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#FCE7F3] opacity-80 blur-xl pointer-events-none -z-10" />

      <Container>
        {/* Section Heading matching screenshot 1:1 */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            {displayTitle}
          </h2>
          {subtitle && (
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal mt-2.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Featured Showcase Video Card with Thick White Border */}
        <div
          onClick={() => setIsVideoOpen(true)}
          className="max-w-[1040px] mx-auto rounded-[20px] sm:rounded-[26px] border-[5px] sm:border-[7px] border-white shadow-2xl overflow-hidden relative bg-[#040810] text-white aspect-[16/9] sm:aspect-[16/8.8] flex items-center justify-center cursor-pointer group select-none"
        >
          {type === 'php' ? (
            <>
              {/* Dark Blue / Purple Tech Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C122C] via-[#10183F] to-[#1E113A]" />

              {/* Ambient Glows */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-[#3B82F6]/20 blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-[#A855F7]/20 blur-3xl pointer-events-none" />

              {/* Left Side: 3D PHP Badge & Development Services Text */}
              <div className="absolute left-6 sm:left-12 md:left-16 top-1/2 -translate-y-1/2 flex flex-col items-center sm:items-start text-center sm:text-left z-10 select-none">
                {/* 3D Glossy Oval PHP Badge */}
                <div className="relative mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-28 sm:w-36 md:w-44 h-16 sm:h-20 md:h-24 rounded-full bg-gradient-to-b from-[#8892BF] via-[#4F5B93] to-[#2E365E] p-1 shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.6)] flex items-center justify-center border-2 border-white/40">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#7A86B8] via-[#4F5B93] to-[#343D68] flex items-center justify-center shadow-inner">
                      <span className="font-black text-2xl sm:text-3xl md:text-4xl italic text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        php
                      </span>
                    </div>
                  </div>
                </div>

                {/* Development Services Headline */}
                <h3 className="font-[900] text-[20px] sm:text-[26px] md:text-[32px] text-[#C084FC] tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Development<br />Services
                </h3>
              </div>

              {/* Center Play Button */}
              <div className="relative z-20 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#1E3A8A]/80 hover:bg-[#1E40AF] backdrop-blur-md border-2 border-white/50 text-white flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-white ml-1">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Isometric Developer & Monitor Graphic */}
              <div className="absolute right-4 sm:right-10 md:right-14 top-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 h-auto z-10 pointer-events-none opacity-90 group-hover:scale-105 transition-transform duration-500">
                {/* Computer Monitor Screen with Code */}
                <div className="relative w-full aspect-[16/11] bg-[#111827] rounded-xl border-2 border-slate-600 p-2.5 shadow-2xl flex flex-col justify-between overflow-hidden transform perspective-1000 -rotate-y-12 rotate-x-6">
                  {/* Window Bar */}
                  <div className="flex items-center space-x-1.5 pb-2 border-b border-slate-800">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  {/* Code Lines */}
                  <div className="space-y-1.5 py-1 text-[9px] sm:text-[10px] font-mono leading-tight">
                    <div className="text-purple-400 font-bold">&lt;?php</div>
                    <div className="text-sky-300 pl-2">namespace App\Services;</div>
                    <div className="text-emerald-400 pl-2">class PhpEnterpriseEngine &#123;</div>
                    <div className="text-amber-300 pl-4">public function execute(): void &#123;</div>
                    <div className="text-slate-400 pl-6">// High performance scaling</div>
                    <div className="text-indigo-300 pl-6">$app-&gt;deployProduction();</div>
                    <div className="text-amber-300 pl-4">&#125;</div>
                    <div className="text-emerald-400 pl-2">&#125;</div>
                  </div>
                </div>

                {/* Keyboard & Hands Glow */}
                <div className="mt-2 w-full h-8 bg-gradient-to-r from-purple-500/30 via-pink-500/40 to-blue-500/30 rounded-lg blur-xs" />
              </div>
            </>
          ) : type === 'dotnet' ? (
            <>
              {/* Dark Cyber Matrix / Circuit Board Grid Perspective */}
              <div className="absolute inset-0 bg-[#070D18]" />

              {/* Grid Lines with Perspective */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(0, 180, 255, 0.15) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 180, 255, 0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Cyan & Red Glowing Data Matrix Nodes */}
              <div
                className="absolute inset-0 pointer-events-none opacity-80"
                style={{
                  backgroundImage: `
                    radial-gradient(2px 2px at 15% 25%, rgba(239, 68, 68, 0.8) 100%, transparent),
                    radial-gradient(2px 2px at 25% 65%, rgba(239, 68, 68, 0.7) 100%, transparent),
                    radial-gradient(2.5px 2.5px at 35% 30%, rgba(56, 189, 248, 0.9) 100%, transparent),
                    radial-gradient(2px 2px at 45% 75%, rgba(239, 68, 68, 0.8) 100%, transparent),
                    radial-gradient(2.5px 2.5px at 65% 20%, rgba(56, 189, 248, 0.9) 100%, transparent),
                    radial-gradient(2px 2px at 75% 70%, rgba(239, 68, 68, 0.75) 100%, transparent),
                    radial-gradient(2px 2px at 85% 35%, rgba(56, 189, 248, 0.8) 100%, transparent),
                    radial-gradient(1.5px 1.5px at 90% 80%, rgba(239, 68, 68, 0.7) 100%, transparent)
                  `,
                  backgroundSize: '240px 240px'
                }}
              />

              {/* Horizontal Cyan Lens Flares */}
              <div className="absolute top-1/2 left-4 sm:left-12 -translate-y-1/2 w-20 sm:w-28 h-0.5 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent blur-2xs" />
              <div className="absolute top-1/2 right-4 sm:right-12 -translate-y-1/2 w-20 sm:w-28 h-0.5 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent blur-2xs" />

              {/* Central Soft Cyan Ambient Glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-70"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 140, 255, 0.3) 0%, rgba(0, 60, 140, 0.1) 45%, transparent 75%)'
                }}
              />

              {/* Top Right Firevy Logo */}
              <div className="absolute top-4 right-5 sm:top-6 sm:right-8 flex items-center opacity-95 z-20">
                <img
                  src="/firevy_logo_white.png"
                  alt="firevy.co"
                  className="h-5 sm:h-6 md:h-7 w-auto object-contain drop-shadow-md"
                />
              </div>

              {/* Central 3D Ribbon .NET Logo & Play Action */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                <div className="relative mb-3 sm:mb-4 flex items-center justify-center">
                  {/* Glowing 3D Ribbon .NET Logo */}
                  <svg
                    viewBox="0 0 280 130"
                    className="w-48 sm:w-64 md:w-72 h-auto drop-shadow-[0_0_30px_rgba(0,180,255,0.7)] group-hover:scale-105 transition-transform duration-300"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="netGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="45%" stopColor="#0078D7" />
                        <stop offset="100%" stopColor="#003E8A" />
                      </linearGradient>
                      <linearGradient id="netGradB" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#004A99" />
                        <stop offset="50%" stopColor="#0099FF" />
                        <stop offset="100%" stopColor="#80D8FF" />
                      </linearGradient>
                      <linearGradient id="netGradC" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#0078D7" />
                        <stop offset="50%" stopColor="#40C4FF" />
                        <stop offset="100%" stopColor="#E1F5FE" />
                      </linearGradient>
                    </defs>

                    {/* 3D Wave Ribbon Lines */}
                    <path
                      d="M 28 102 C 22 62, 52 24, 88 24 C 124 24, 146 68, 168 96 C 150 102, 92 102, 68 102 Z"
                      fill="url(#netGradA)"
                    />
                    <path
                      d="M 88 24 C 126 24, 158 74, 198 102 C 220 102, 252 68, 260 28 C 250 22, 218 40, 202 58 C 174 80, 146 42, 110 24 Z"
                      fill="url(#netGradB)"
                    />
                    <path
                      d="M 198 102 C 230 102, 256 80, 260 28 C 266 22, 244 22, 226 34 C 204 56, 178 90, 168 96 Z"
                      fill="url(#netGradC)"
                    />
                  </svg>

                  {/* Overlaid Glowing Blue Play Button in Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0070BA]/85 backdrop-blur-xs text-white flex items-center justify-center shadow-[0_0_20px_rgba(0,180,255,0.6)] group-hover:scale-110 transition-transform duration-300 border border-white/50">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current ml-0.5" stroke="none">
                        <polygon points="6 4 20 12 6 20 6 4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Headline text below video button */}
                <h3 className="font-[800] text-[18px] sm:text-[22px] md:text-[26px] text-white tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {displayVideoText}
                </h3>
              </div>
            </>
          ) : (
            <>
              {/* Flutter Cosmic Galaxy / Starry Dark Blue Background */}
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
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute -inset-3 bg-sky-500/30 rounded-2xl blur-lg group-hover:bg-sky-400/40 transition-all duration-300" />
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-b from-[#0A223E]/90 to-[#041122]/95 border-2 border-sky-400/60 flex items-center justify-center shadow-[0_0_30px_rgba(2,132,199,0.5)] group-hover:border-sky-300 transition-all duration-300">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-12 h-12 sm:w-14 sm:h-14 fill-none drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                    >
                      <path d="M14.314 0L2.3 12l3.7 3.7L21.686 0h-7.372z" fill="#00D2FF" />
                      <path
                        d="M14.314 9.771L7.257 16.828l3.7 3.7 7.057-7.057 3.7 3.7L14.314 24h7.372L24 21.686l-5.986-5.986L24 9.771h-7.372z"
                        fill="#007ACC"
                      />
                      <path
                        d="M14.314 9.771l-3.5 3.5 3.5 3.5 3.7-3.7-3.7-3.3z"
                        fill="#38BDF8"
                        opacity="0.9"
                      />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0070BA]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/40">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current ml-0.5" stroke="none">
                          <polygon points="6 4 20 12 6 20 6 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-[800] text-[20px] sm:text-[24px] md:text-[28px] text-[#00C4FF] tracking-tight leading-tight drop-shadow-[0_0_15px_rgba(0,196,255,0.6)]">
                  {displayVideoText}
                </h3>
              </div>
            </>
          )}
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
              src={videoUrl}
              title={displayTitle}
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
