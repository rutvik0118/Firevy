import React, { useState } from 'react';
import Container from '../common/Container';
import {
  Lock,
  Bell,
  Languages,
  Info,
  ChevronRight,
  Play,
  X
} from 'lucide-react';

export const BestMobileAppCompanyShowcase = ({ title = "Best Mobile App Development Company" }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#F8FBFC] text-slate-900 font-sans text-left relative overflow-hidden">
      {/* Ambient Decorative Pastel Circles in Background matching screenshot */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#D5EFFD] opacity-70 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FCE6E6] opacity-70 blur-3xl pointer-events-none -z-10" />

      <Container className="max-w-6xl">
        {/* Section Heading matching screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            {title}
          </h2>
        </div>

        {/* Featured Showcase Card with Thick White Border */}
        <div className="max-w-[1040px] mx-auto rounded-[24px] sm:rounded-[30px] border-[6px] sm:border-[8px] border-white shadow-2xl overflow-hidden relative bg-[#FCE1CF] text-slate-900 select-none">
          {/* Subtle Decorative Gift Watermark Patterns */}
          <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
            {/* Top Right Gift Icon */}
            <svg className="absolute top-6 right-8 w-20 h-20 text-[#E67E3F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M12 8v13M3 12h18M12 8a3 3 0 1 0-3-3c0 2 3 3 3 3zm0 0a3 3 0 1 1 3-3c0 2-3 3-3 3z" />
            </svg>
            {/* Mid Left Gift Icon */}
            <svg className="absolute top-1/3 left-10 w-16 h-16 text-[#E67E3F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M12 8v13M3 12h18M12 8a3 3 0 1 0-3-3c0 2 3 3 3 3zm0 0a3 3 0 1 1 3-3c0 2-3 3-3 3z" />
            </svg>
            {/* Bottom Center Gift Icon */}
            <svg className="absolute bottom-6 right-1/4 w-24 h-24 text-[#E67E3F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M12 8v13M3 12h18M12 8a3 3 0 1 0-3-3c0 2 3 3 3 3zm0 0a3 3 0 1 1 3-3c0 2-3 3-3 3z" />
            </svg>
            {/* Top Center Small Gift */}
            <svg className="absolute top-4 left-1/2 w-14 h-14 text-[#E67E3F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M12 8v13M3 12h18M12 8a3 3 0 1 0-3-3c0 2 3 3 3 3zm0 0a3 3 0 1 1 3-3c0 2-3 3-3 3z" />
            </svg>
          </div>

          {/* Card Content Grid */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Smartphone Mockup with Settings UI */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-[230px] sm:w-[255px] bg-[#1C1F26] rounded-[36px] p-2.5 shadow-2xl border-[3px] border-slate-700">
                
                {/* Smartphone Interior Screen */}
                <div className="bg-[#F6F7FB] rounded-[28px] p-3 text-slate-900 flex flex-col justify-between min-h-[380px] sm:min-h-[410px]">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[9px] font-bold text-slate-800 px-1 mb-2">
                    <span>9:41</span>
                    <div className="w-14 h-3 bg-slate-900 rounded-full" />
                    <div className="flex items-center space-x-1 text-[8px]">
                      <span>5G</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Settings Header Title */}
                  <div className="mb-2.5 px-0.5">
                    <h4 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] leading-none">
                      Settings
                    </h4>
                  </div>

                  {/* Profile Card */}
                  <div className="bg-white rounded-[13px] p-2.5 mb-2.5 flex items-center justify-between shadow-2xs border border-slate-100">
                    <div>
                      <div className="font-[800] text-[12.5px] text-[#0B0F19] leading-tight">
                        Julia Banks
                      </div>
                      <div className="text-[9.5px] text-slate-400 font-medium">
                        julia.banks@gmail.com
                      </div>
                    </div>
                    <button className="text-[11px] font-bold text-[#E67E3F] hover:underline cursor-pointer">
                      Edit
                    </button>
                  </div>

                  {/* 4 Settings List Rows */}
                  <div className="space-y-2 flex-1 flex flex-col justify-start">
                    {/* Row 1: Change Password */}
                    <div className="bg-white rounded-[11px] p-2 flex items-center justify-between shadow-2xs border border-slate-100/80">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-[7px] bg-[#FCE2CD] text-[#E67E3F] flex items-center justify-center shrink-0">
                          <Lock className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </div>
                        <span className="font-[700] text-[11px] text-[#0B0F19]">
                          Change Password
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    {/* Row 2: Notification Settings */}
                    <div className="bg-white rounded-[11px] p-2 flex items-center justify-between shadow-2xs border border-slate-100/80">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-[7px] bg-[#FCE2CD] text-[#E67E3F] flex items-center justify-center shrink-0">
                          <Bell className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </div>
                        <span className="font-[700] text-[11px] text-[#0B0F19]">
                          Notification Settings
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    {/* Row 3: Language */}
                    <div className="bg-white rounded-[11px] p-2 flex items-center justify-between shadow-2xs border border-slate-100/80">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-[7px] bg-[#FCE2CD] text-[#E67E3F] flex items-center justify-center shrink-0">
                          <Languages className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </div>
                        <span className="font-[700] text-[11px] text-[#0B0F19]">
                          Language
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    {/* Row 4: About Us */}
                    <div className="bg-white rounded-[11px] p-2 flex items-center justify-between shadow-2xs border border-slate-100/80">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-[7px] bg-[#FCE2CD] text-[#E67E3F] flex items-center justify-center shrink-0">
                          <Info className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </div>
                        <span className="font-[700] text-[11px] text-[#0B0F19]">
                          About Us
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Floating Play Button, #SETTINGS Tag, Heading & Description */}
            <div className="lg:col-span-7 space-y-4 text-left relative">
              
              {/* Circular Floating Play Button */}
              <div className="mb-2">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play App Settings Video Demo"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#48729A]/90 hover:bg-[#345B7D] hover:scale-105 active:scale-95 text-white flex items-center justify-center shadow-lg transition-all cursor-pointer backdrop-blur-xs group"
                >
                  <Play className="w-6 h-6 fill-white text-white ml-0.5 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Category Tag */}
              <div className="text-xs font-[800] tracking-wider text-slate-700 uppercase">
                #SETTINGS
              </div>

              {/* Main Headline matching screenshot */}
              <h3
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.18]"
                style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}
              >
                Empower Your App Experience With Our Intuitive Settings
              </h3>

              {/* Description paragraph matching screenshot */}
              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-relaxed max-w-xl">
                Take control of your user journey from personalized notifications to seamless account management
              </p>
            </div>

          </div>
        </div>
      </Container>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Mobile App Intuitive Settings Showcase"
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

export default BestMobileAppCompanyShowcase;
