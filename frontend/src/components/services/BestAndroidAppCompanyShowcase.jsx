import React, { useState } from 'react';
import Container from '../common/Container';

export const BestAndroidAppCompanyShowcase = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-7 sm:py-9 lg:py-10 bg-[#F4F9FC] text-slate-900 font-sans text-left relative overflow-hidden">
      {/* Ambient Decorative Pastel Circles in Background matching screenshot */}
      <div className="absolute top-1/4 left-6 sm:left-12 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#D7EEFB] opacity-80 blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-6 sm:right-12 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#FCE5EB] opacity-80 blur-2xl pointer-events-none -z-10" />

      <Container>
        {/* Section Heading matching screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            Best Android App Development Company
          </h2>
        </div>

        {/* Featured Showcase Video Card with Thick White Border */}
        <div className="max-w-[1140px] mx-auto rounded-[24px] sm:rounded-[28px] border-[5px] sm:border-[7px] border-white shadow-2xl overflow-hidden relative bg-[#100D0B] text-white">
          {/* Base Dark Velvet & Gold Spotlight Background */}
          <div className="absolute inset-0 bg-[#0E0C0A]" />
          
          {/* Subtle Sparkling Golden Dust & Ambient Glow in Center */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: 'radial-gradient(ellipse at 42% 48%, rgba(212, 175, 55, 0.28) 0%, rgba(180, 130, 40, 0.12) 40%, rgba(14, 12, 10, 0.95) 75%)'
            }}
          />

          {/* =========================================================================
              EXACT REALISTIC COSMETIC PROPS LAYER (LEFT & RIGHT SIDES MATCHING SCREENSHOT)
              ========================================================================= */}
          
          {/* LEFT SIDE COSMETIC PROPS */}
          <div className="absolute -left-4 sm:left-2 top-0 bottom-0 w-44 sm:w-56 pointer-events-none z-0 select-none overflow-hidden">
            {/* Top-Left: Fluffy Powder Makeup Brush */}
            <div className="absolute -top-6 -left-6 sm:left-0 w-28 sm:w-36 h-36 sm:h-44 transform -rotate-45 opacity-85">
              <svg viewBox="0 0 100 160" className="w-full h-full drop-shadow-2xl">
                {/* Fluffy Bristles */}
                <path d="M25 80 C15 50, 20 15, 50 10 C80 15, 85 50, 75 80 Z" fill="#8C7662" />
                <path d="M30 75 C25 45, 30 20, 50 16 C70 20, 75 45, 70 75 Z" fill="#D4B89B" opacity="0.8" />
                <path d="M35 55 C32 35, 40 22, 50 20 C60 22, 68 35, 65 55 Z" fill="#F3E5D8" opacity="0.9" />
                {/* Gold Metallic Ferrule */}
                <rect x="30" y="78" width="40" height="24" rx="2" fill="url(#goldMetallicBrush)" stroke="#8C6D23" strokeWidth="0.8" />
                <line x1="30" y1="84" x2="70" y2="84" stroke="#FFE79A" strokeWidth="1" />
                <line x1="30" y1="92" x2="70" y2="92" stroke="#8C6D23" strokeWidth="0.8" />
                {/* Black Wooden Handle */}
                <path d="M33 102 L36 160 L64 160 L67 102 Z" fill="#1C1816" stroke="#000" strokeWidth="1" />
              </svg>
            </div>

            {/* Mid-Left: Gold Lipstick Tube Cylinder */}
            <div className="absolute top-1/3 left-0 sm:left-4 w-12 sm:w-16 h-28 sm:h-36 transform -rotate-12 opacity-90">
              <svg viewBox="0 0 60 120" className="w-full h-full drop-shadow-2xl">
                {/* Gold Casing */}
                <rect x="12" y="10" width="36" height="100" rx="6" fill="url(#goldMetallicBrush)" stroke="#8C6D23" strokeWidth="1" />
                {/* Gold Highlight Stripe */}
                <rect x="18" y="10" width="8" height="100" fill="#FFF2B2" opacity="0.6" />
                {/* Middle Ring Band */}
                <line x1="12" y1="60" x2="48" y2="60" stroke="#785B18" strokeWidth="2" />
                <circle cx="30" cy="60" r="4" fill="#FFEAA0" stroke="#8C6D23" strokeWidth="1" />
              </svg>
            </div>

            {/* Bottom-Left: Open Soft Pink Powder Blush Compact */}
            <div className="absolute -bottom-6 -left-6 sm:left-2 w-32 sm:w-40 h-32 sm:h-40 opacity-95">
              <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-2xl">
                {/* Outer Compact Lid Base */}
                <circle cx="60" cy="60" r="50" fill="#E8A598" stroke="#D18778" strokeWidth="2" />
                <circle cx="60" cy="60" r="45" fill="#D18778" />
                {/* Inner Pressed Powder Disk */}
                <circle cx="60" cy="60" r="38" fill="#EFAFA2" />
                {/* Shimmer Highlight */}
                <ellipse cx="50" cy="48" rx="20" ry="14" fill="#FAD4CD" opacity="0.6" />
                <text x="60" y="64" fill="#C97363" fontSize="8" fontWeight="800" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif">
                  AURA
                </text>
              </svg>
            </div>
          </div>

          {/* RIGHT SIDE COSMETIC PROPS */}
          <div className="absolute -right-4 sm:right-2 top-0 bottom-0 w-44 sm:w-56 pointer-events-none z-0 select-none overflow-hidden">
            {/* Mid-Right: Slim Eye/Contour Makeup Brush */}
            <div className="absolute top-8 sm:top-14 right-2 sm:right-8 w-12 sm:w-16 h-40 sm:h-52 transform rotate-25 opacity-85">
              <svg viewBox="0 0 40 160" className="w-full h-full drop-shadow-2xl">
                {/* Bristles */}
                <path d="M12 30 C10 15, 14 5, 20 4 C26 5, 30 15, 28 30 Z" fill="#E8DCD0" />
                <path d="M14 26 C12 18, 15 10, 20 8 C25 10, 28 18, 26 26 Z" fill="#6E5846" opacity="0.7" />
                {/* Gold Ferrule */}
                <rect x="13" y="28" width="14" height="22" rx="1.5" fill="url(#goldMetallicBrush)" stroke="#8C6D23" strokeWidth="0.8" />
                {/* Slim Wooden Handle */}
                <path d="M15 50 L18 150 L22 150 L25 50 Z" fill="#1C1816" />
              </svg>
            </div>

            {/* Bottom-Right: Open Gold Lipstick with Red/Rose Bullet */}
            <div className="absolute -bottom-4 right-0 sm:right-6 w-20 sm:w-28 h-36 sm:h-44 transform rotate-12 opacity-95">
              <svg viewBox="0 0 80 140" className="w-full h-full drop-shadow-2xl">
                {/* Red/Rose Lipstick Bullet */}
                <path d="M30 45 L30 22 C30 14, 45 6, 50 18 L50 45 Z" fill="#C25953" stroke="#8E2D27" strokeWidth="1" />
                <path d="M33 22 C33 16, 44 10, 48 18 L48 40 L33 40 Z" fill="#E07A74" opacity="0.6" />
                {/* Inner Gold Swivel Base */}
                <rect x="25" y="44" width="30" height="20" fill="url(#goldMetallicBrush)" stroke="#8C6D23" strokeWidth="1" />
                {/* Outer Gold Square Case Body */}
                <rect x="20" y="62" width="40" height="70" rx="3" fill="url(#goldMetallicBrush)" stroke="#785B18" strokeWidth="1.5" />
                <rect x="26" y="62" width="8" height="70" fill="#FFF2B2" opacity="0.5" />
              </svg>
            </div>
          </div>

          {/* SVG Linear Gradient Definitions for Real Gold Shimmer */}
          <svg className="absolute w-0 h-0 pointer-events-none">
            <defs>
              <linearGradient id="goldMetallicBrush" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="30%" stopColor="#FFF2B2" />
                <stop offset="60%" stopColor="#AA8010" />
                <stop offset="100%" stopColor="#E5C158" />
              </linearGradient>
            </defs>
          </svg>

          {/* Card Content Grid */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Top Right Logo Watermark matching screenshot */}
            <div className="absolute top-5 right-6 sm:top-6 sm:right-8 flex items-center space-x-1.5 opacity-90 z-20">
              <span className="font-[900] text-[15px] sm:text-[17px] tracking-tight text-white">Firevy</span>
              <span className="text-[8px] sm:text-[9px] text-amber-300/80 font-[600] block leading-none">Software Solutions</span>
            </div>

            {/* Left Column: Golden Smartphone Mockup with BEAUTYBEE App UI & Floor Reflection */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative pt-2 z-10">
              <div className="relative w-[210px] sm:w-[245px] rounded-[32px] bg-[#1E1B18] border-[4px] border-[#D4AF37] p-2 shadow-2xl overflow-hidden select-none">
                {/* Smartphone Speaker & Notch */}
                <div className="w-16 h-3 rounded-full bg-[#13110E] mx-auto mb-2 flex items-center justify-center">
                  <span className="w-8 h-1 rounded-full bg-slate-700 inline-block" />
                </div>

                {/* BEAUTYBEE App Screen Interior */}
                <div className="bg-[#FAF8F5] rounded-[22px] p-2.5 text-slate-900 flex flex-col justify-between min-h-[360px] sm:min-h-[400px] border border-amber-100">
                  {/* App Header */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-amber-600 text-xs">🐝</span>
                        <span className="text-[11px] font-[900] text-[#1E1B18] tracking-wider">BEAUTYBEE</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-slate-600 text-[9px]">
                        <span>🔔</span>
                        <span>🛍️</span>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-white rounded-full px-2.5 py-1 text-[8px] text-slate-400 border border-slate-200/80 flex items-center justify-between mb-2">
                      <span>Search lipstick, foundation...</span>
                      <span>🔍</span>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex justify-between text-[7px] font-bold text-slate-700 pb-1.5 border-b border-slate-100">
                      <span className="text-amber-700 border-b-2 border-amber-600 pb-0.5">Lips</span>
                      <span>Face</span>
                      <span>Eyes</span>
                      <span>Nails</span>
                    </div>

                    {/* Promo Hero Banner */}
                    <div className="rounded-[10px] bg-gradient-to-r from-amber-100 to-rose-100 p-2 my-2 flex items-center justify-between">
                      <div className="text-left">
                        <span className="bg-rose-500 text-white text-[5.5px] font-bold px-1 py-0.5 rounded-xs uppercase">The new!</span>
                        <div className="text-[7.5px] font-[800] text-slate-900 mt-0.5">Glow Collection</div>
                        <div className="text-[5.5px] text-slate-600">Pure organic cosmetics</div>
                      </div>
                      <span className="text-xl">💄</span>
                    </div>

                    {/* Recommended For You Grid */}
                    <div className="text-left">
                      <div className="flex justify-between items-center text-[7.5px] font-bold text-slate-900 mb-1">
                        <span>Recommended For You</span>
                        <span className="text-[6.5px] text-amber-700">View All</span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        {/* Product 1 */}
                        <div className="bg-white p-1.5 rounded-lg border border-slate-100 shadow-2xs flex flex-col justify-between">
                          <div className="w-full h-11 bg-rose-50 rounded flex items-center justify-center text-lg mb-1">
                            💄
                          </div>
                          <div className="text-[6.5px] font-bold text-slate-800 truncate">Velvet Matte Lipstick</div>
                          <div className="text-[6px] text-amber-600 font-extrabold">$22 <span className="line-through text-slate-300 font-normal">$28</span></div>
                          <button className="w-full bg-[#1A1612] text-white rounded py-0.5 text-[5px] font-bold mt-1">
                            ADD TO BAG
                          </button>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white p-1.5 rounded-lg border border-slate-100 shadow-2xs flex flex-col justify-between">
                          <div className="w-full h-11 bg-amber-50 rounded flex items-center justify-center text-lg mb-1">
                            🧴
                          </div>
                          <div className="text-[6.5px] font-bold text-slate-800 truncate">Liquid Foundation</div>
                          <div className="text-[6px] text-amber-600 font-extrabold">$34 <span className="line-through text-slate-300 font-normal">$42</span></div>
                          <button className="w-full bg-[#1A1612] text-white rounded py-0.5 text-[5px] font-bold mt-1">
                            ADD TO BAG
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom App Nav */}
                  <div className="pt-1.5 border-t border-slate-100 flex justify-around text-[9px] text-slate-400">
                    <span className="text-amber-700 font-bold">🏠</span>
                    <span>🔍</span>
                    <span>❤️</span>
                    <span>👤</span>
                  </div>
                </div>
              </div>

              {/* Realistic Floor Shadow & Reflection */}
              <div className="w-44 h-3 bg-amber-500/20 rounded-full blur-md mt-1" />
            </div>

            {/* Right Column: Play Button, Gold Brand Heading, Description & Download Badges */}
            <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-center z-10">
              {/* Center Interactive Circular Play Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play Project Demo Video"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#005F96] hover:bg-[#004A75] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer group"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              </div>

              {/* Gold Headline */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-serif text-[#F4D06F] tracking-wide leading-tight font-extrabold">
                  BEAUTYBEE <span className="text-white font-sans font-light">:</span> Discover Your Beauty Essentials
                </h3>

                {/* Subtitle / Description */}
                <p className="text-sm sm:text-[15px] text-slate-300 font-normal leading-relaxed max-w-lg">
                  Where beauty meets convenience. Explore a world of cosmetics and skincare products tailored to enhance your unique beauty.
                </p>
              </div>

              {/* App Store & Google Play Badges matching screenshot */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Google Play Badge */}
                <a
                  href="#quote-form"
                  className="bg-black/90 hover:bg-black text-white border border-slate-700 px-4 py-2 rounded-[8px] flex items-center space-x-2.5 transition-all shadow-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-cyan-400">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-.954V2.768c0-.363.22-.686.609-.954zM15.207 13.414l2.482 2.482-11.83 6.649 9.348-9.131zm0-2.828L5.859 1.455l11.83 6.649-2.482 2.482zm1.414 1.414l3.774 2.12a1.5 1.5 0 0 0 0-2.615l-3.774-2.12-.614.615.614.615v1.386z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[7.5px] uppercase text-slate-400 tracking-wider">GET IT ON</div>
                    <div className="text-[12px] font-bold text-white">Google Play</div>
                  </div>
                </a>

                {/* Apple App Store Badge */}
                <a
                  href="#quote-form"
                  className="bg-black/90 hover:bg-black text-white border border-slate-700 px-4 py-2 rounded-[8px] flex items-center space-x-2.5 transition-all shadow-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.99 1.74-.86 2.76 1 .08 2.02-.51 2.57-1.26z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[7.5px] uppercase text-slate-400 tracking-wider">Download on the</div>
                    <div className="text-[12px] font-bold text-white">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Interactive Video Player Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            {/* Close Modal Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center text-lg font-bold transition-all"
            >
              ✕
            </button>

            {/* Video Container */}
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1"
                title="BEAUTYBEE App Showcase Video"
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

export default BestAndroidAppCompanyShowcase;
