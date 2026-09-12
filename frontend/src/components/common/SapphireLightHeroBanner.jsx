import React from 'react';
import { ArrowRight, Activity, Shield, HeartHandshake, Pill } from 'lucide-react';
import Container from './Container';

// Custom 1:1 Vector Icon Badges matching Sapphire Education Hero Reference Screenshot 100%
const TeacherBoardIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="8" width="32" height="20" rx="2" fill="none" />
    <path d="M 16 15 H 32 M 16 21 H 24" />
    <circle cx="16" cy="36" r="3" />
    <path d="M 12 42 C 12 38 14 36 16 36 C 18 36 20 38 20 42" />
    <circle cx="32" cy="36" r="3" />
    <path d="M 28 42 C 28 38 30 36 32 36 C 34 36 36 38 36 42" />
  </svg>
);

const VideoClassIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="24" rx="3" fill="none" />
    <circle cx="20" cy="22" r="5" />
    <path d="M 12 30 C 12 26 16 25 20 25 C 24 25 28 26 28 30" />
    <path d="M 32 18 L 38 14 V 30 L 32 26 V 18 Z" fill="currentColor" />
  </svg>
);

const StudentLaptopIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="16" r="5" />
    <path d="M 16 26 C 16 22 20 21 24 21 C 28 21 32 22 32 26" />
    <rect x="10" y="28" width="28" height="14" rx="2" fill="none" />
    <line x1="6" y1="42" x2="42" y2="42" />
  </svg>
);

const TestScoreIcon = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center text-white">
    <span className="text-[9px] font-black tracking-tighter">TEST</span>
    <span className="text-[7px] font-extrabold text-cyan-300 mt-0.5">& CE</span>
  </div>
);

export const SapphireLightHeroBanner = ({
  title = "Education App Development Services in USA",
  subtitle = "As a best educational app development company, we deliver affordable education app development services. We are an experienced educational app development agency with a team of professional mobile app developers.",
  ctaText = "Discuss Your Project",
  ctaLink = "#quote-form",
  serviceCategory = "education",
  stats = null
}) => {
  const isEducation = serviceCategory === 'education';
  const isSpotify = serviceCategory === 'spotify';
  const isZomato = serviceCategory === 'zomato' || serviceCategory === 'food';
  const isAmazon = serviceCategory === 'amazon' || serviceCategory === 'ecommerce';
  const isVisitor = serviceCategory === 'visitor' || serviceCategory === 'vms' || serviceCategory === 'gatepass';
  const isWarehouse = serviceCategory === 'warehouse' || serviceCategory === 'wms' || serviceCategory === 'inventory';
  const isClover = serviceCategory === 'clover' || serviceCategory === 'pos';

  const defaultZomatoStats = [
    { value: '80+', label: 'Mobile App Developers' },
    { value: '20+', label: 'Fortunes 500 Companies' },
    { value: '800+', label: 'Project Completed in Mobile Technology' },
    { value: '320+', label: '5-Star Clutch Reviews' }
  ];

  const defaultCloverStats = [
    { value: '80+', label: 'Mobile App Developers' },
    { value: '20+', label: 'Fortunes 500 Companies' },
    { value: '800+', label: 'Project Completed in Mobile Technology' },
    { value: '320+', label: '5-Star Clutch Reviews' }
  ];

  const activeStats = stats || (isZomato ? defaultZomatoStats : isClover ? defaultCloverStats : null);

  return (
    <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-[#EEF5FB] text-slate-900 relative overflow-hidden text-left font-sans border-b border-slate-200/60">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-6 space-y-5">
            <h1
              className="text-slate-900 tracking-tight max-w-lg page-hero-title font-sans"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '34px',
                lineHeight: '41px'
              }}
            >
              {title}
            </h1>

            <p
              className="text-slate-600 max-w-xl page-hero-desc font-sans"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '26px'
              }}
            >
              {subtitle}
            </p>

            {/* Stats Grid if provided or isZomato */}
            {activeStats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-t border-b border-slate-200/80 my-3">
                {activeStats.map((st, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">
                      {st.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-1">
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-extrabold text-sm sm:text-base transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Visual Graphic */}
          <div className="lg:col-span-6 flex justify-center relative py-4">
            {isZomato ? (
              /* Zomato Food Delivery Dual Phone Mockup Layout with Orange/Red Blobs matching Sapphire Reference 1:1 */
              <div className="relative w-full max-w-[540px] flex items-center justify-center min-h-[440px] py-4">
                {/* Orange Circle Blob Top-Left */}
                <div className="absolute top-2 left-4 sm:left-8 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#FF5722] pointer-events-none opacity-90" />

                {/* Bright Red/Coral Circle Blob Bottom-Right */}
                <div className="absolute bottom-2 right-4 sm:right-8 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#FF3B30] pointer-events-none opacity-85" />

                {/* Dual Overlapping Mobile Phones */}
                <div className="relative flex items-center justify-center z-10">

                  {/* LEFT PHONE (Main Food App Screen) */}
                  <div className="w-[200px] sm:w-[225px] h-[400px] sm:h-[440px] rounded-[36px] bg-slate-950 border-4 border-slate-800 p-2 shadow-2xl overflow-hidden flex flex-col justify-between text-slate-900 font-sans relative z-20 bg-white">
                    <div>
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[7px] text-slate-500 px-2 pt-1 font-semibold border-b border-slate-100 pb-1">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          <div className="w-2 h-1.5 border border-slate-500 rounded-sm" />
                        </div>
                      </div>

                      {/* Orange Header Card */}
                      <div className="bg-gradient-to-r from-[#FF5722] to-[#FF7043] -mx-2 -mt-1 p-2.5 text-white space-y-1.5 shadow-sm">
                        <div className="flex items-center justify-between text-[8px] font-bold">
                          <div className="flex items-center space-x-1 truncate">
                            <span className="text-[10px]">📍</span>
                            <span className="truncate">120 E Taylor St, USA</span>
                          </div>
                          <span>⚙️</span>
                        </div>
                        {/* Search Bar */}
                        <div className="bg-white text-slate-400 rounded-md px-2 py-1 flex items-center text-[7.5px]">
                          <span className="mr-1">🔍</span>
                          <span>Search your product...</span>
                        </div>
                      </div>

                      {/* Food Categories */}
                      <div className="px-1 mt-2 space-y-1">
                        <div className="flex justify-between items-center text-[8px]">
                          <span className="font-extrabold text-slate-900">Categories</span>
                          <span className="text-[7px] text-[#FF5722] font-bold">See All</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1 text-center">
                          <div className="bg-orange-50 border border-orange-100 rounded p-1">
                            <span className="text-[11px] block">🥣</span>
                            <span className="text-[6.5px] font-extrabold text-slate-700 block mt-0.5">Breakfast</span>
                          </div>
                          <div className="bg-amber-50 border border-amber-100 rounded p-1">
                            <span className="text-[11px] block">🍔</span>
                            <span className="text-[6.5px] font-extrabold text-slate-700 block mt-0.5">Lunch</span>
                          </div>
                          <div className="bg-red-50 border border-red-100 rounded p-1">
                            <span className="text-[11px] block">🍟</span>
                            <span className="text-[6.5px] font-extrabold text-slate-700 block mt-0.5">Snacks</span>
                          </div>
                          <div className="bg-yellow-50 border border-yellow-100 rounded p-1">
                            <span className="text-[11px] block">🍕</span>
                            <span className="text-[6.5px] font-extrabold text-slate-700 block mt-0.5">Dinner</span>
                          </div>
                        </div>
                      </div>

                      {/* Popular Products */}
                      <div className="px-1 mt-2 space-y-1">
                        <div className="flex justify-between items-center text-[8px]">
                          <span className="font-extrabold text-slate-900">Popular Products</span>
                          <span className="text-[7px] text-[#FF5722] font-bold">See All</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          <div className="bg-slate-50 border border-slate-200 rounded-md p-1 space-y-0.5">
                            <div className="h-8 rounded bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-sm">🍔</div>
                            <div className="text-[7px] font-bold truncate text-slate-800">Hamburger</div>
                            <div className="text-[6.5px] text-[#FF5722] font-extrabold">$12 ⭐ 4.8</div>
                          </div>
                          <div className="bg-slate-50 border border-slate-200 rounded-md p-1 space-y-0.5">
                            <div className="h-8 rounded bg-gradient-to-tr from-red-400 to-rose-500 flex items-center justify-center text-sm">🍕</div>
                            <div className="text-[7px] font-bold truncate text-slate-800">Garlic Pizza</div>
                            <div className="text-[6.5px] text-[#FF5722] font-extrabold">$15 ⭐ 4.9</div>
                          </div>
                          <div className="bg-slate-50 border border-slate-200 rounded-md p-1 space-y-0.5">
                            <div className="h-8 rounded bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-sm">🍜</div>
                            <div className="text-[7px] font-bold truncate text-slate-800">Wok Noodle</div>
                            <div className="text-[6.5px] text-[#FF5722] font-extrabold">$10 ⭐ 4.7</div>
                          </div>
                        </div>
                      </div>

                      {/* Recommended Dishes */}
                      <div className="px-1 mt-2 space-y-1">
                        <div className="flex justify-between items-center text-[8px]">
                          <span className="font-extrabold text-slate-900">Recommended Dishes</span>
                        </div>
                        <div className="flex space-x-1 overflow-hidden">
                          <div className="w-1/2 bg-slate-50 border border-slate-200 rounded p-1 flex items-center space-x-1">
                            <span className="text-[12px]">🍣</span>
                            <div>
                              <div className="text-[6.5px] font-bold truncate">Sushi Roll</div>
                              <div className="text-[6px] text-[#FF5722] font-bold">$18.00</div>
                            </div>
                          </div>
                          <div className="w-1/2 bg-slate-50 border border-slate-200 rounded p-1 flex items-center space-x-1">
                            <span className="text-[12px]">🌮</span>
                            <div>
                              <div className="text-[6.5px] font-bold truncate">Mex Taco</div>
                              <div className="text-[6px] text-[#FF5722] font-bold">$9.50</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="bg-slate-900 text-white -mx-2 -mb-2 p-1.5 flex items-center justify-around text-[7.5px] font-extrabold">
                      <div className="flex flex-col items-center text-[#FF5722]">
                        <span className="text-[10px] leading-none">🏠</span>
                        <span className="mt-0.5">Home</span>
                      </div>
                      <div className="flex flex-col items-center opacity-70">
                        <span className="text-[10px] leading-none">📂</span>
                        <span className="mt-0.5">Category</span>
                      </div>
                      <div className="flex flex-col items-center opacity-70">
                        <span className="text-[10px] leading-none">🛒</span>
                        <span className="mt-0.5">Cart</span>
                      </div>
                      <div className="flex flex-col items-center opacity-70">
                        <span className="text-[10px] leading-none">👤</span>
                        <span className="mt-0.5">Profile</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT PHONE (EasyEat Secondary Screen) */}
                  <div className="w-[190px] sm:w-[215px] h-[390px] sm:h-[430px] rounded-[36px] bg-slate-950 border-4 border-slate-800 p-2 shadow-2xl overflow-hidden flex flex-col justify-between text-slate-900 font-sans relative z-10 -ml-8 sm:-ml-10 transform rotate-3 hover:rotate-0 transition-transform duration-300 bg-white">
                    <div>
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[7px] text-slate-500 px-2 pt-1 font-semibold border-b border-slate-100 pb-1">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          <div className="w-2 h-1.5 border border-slate-500 rounded-sm" />
                        </div>
                      </div>

                      {/* EasyEat Brand Header */}
                      <div className="p-2 text-center border-b border-slate-100 space-y-0.5">
                        <div className="w-7 h-7 mx-auto rounded-lg bg-[#FF5722] flex items-center justify-center text-white text-xs font-black">
                          🍕
                        </div>
                        <h4 className="text-[10px] font-black text-slate-900 tracking-tight">EasyEat</h4>
                        <p className="text-[6.5px] text-slate-400 font-semibold uppercase tracking-wider">Food Tech Engine</p>
                      </div>

                      {/* Today's Special Dish */}
                      <div className="p-2 space-y-1">
                        <span className="text-[7.5px] font-extrabold text-[#FF5722] block uppercase tracking-wider">Today's Special Dish</span>
                        <div className="bg-orange-50/70 border border-orange-200 rounded-lg p-2 space-y-1">
                          <div className="flex justify-between items-center text-[7.5px] font-bold">
                            <span>Item Name</span>
                            <span className="text-slate-800">Garlic Pizza</span>
                          </div>
                          <div className="flex justify-between items-center text-[7.5px]">
                            <span className="text-slate-500">Regular Price</span>
                            <span className="text-slate-400 line-through">$18.00</span>
                          </div>
                          <div className="flex justify-between items-center text-[7.5px] font-extrabold text-[#FF5722]">
                            <span>Discount Price</span>
                            <span>$12.00</span>
                          </div>
                        </div>
                      </div>

                      {/* Main Product List */}
                      <div className="p-2 space-y-1">
                        <span className="text-[7.5px] font-extrabold text-slate-800 block uppercase tracking-wider">Main Product List</span>
                        <div className="space-y-1">
                          <div className="bg-slate-50 border border-slate-200 rounded p-1 flex justify-between items-center text-[7px]">
                            <span className="font-bold">Item Name</span>
                            <span className="text-slate-600">BBQ Burger ($10.50)</span>
                          </div>
                          <div className="bg-slate-50 border border-slate-200 rounded p-1 flex justify-between items-center text-[7px]">
                            <span className="font-bold">Category</span>
                            <span className="text-slate-600">Fast Food / Meal</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Orange Continue CTA Button */}
                    <div className="p-2">
                      <button className="w-full py-2 rounded-lg bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-[9px] text-center shadow-md transition-colors">
                        Continue →
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ) : isSpotify ? (
              /* Spotify 1:1 Reference Dual Phone Mockup Layout with Pink/Purple Blobs */
              <div className="relative w-full max-w-[540px] flex items-center justify-center min-h-[420px] py-4">
                {/* Magenta/Pink Accent Circle Blob Top-Left */}
                <div className="absolute top-2 left-6 sm:left-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#D946EF] pointer-events-none opacity-90" />

                {/* Dark Accent Circle Blob Bottom-Right */}
                <div className="absolute bottom-4 right-8 sm:right-12 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#18181B] pointer-events-none" />

                {/* Dual Overlapping Mobile Phones */}
                <div className="relative flex items-center justify-center z-10">
                  
                  {/* LEFT PHONE: Spotify Music Main Screen */}
                  <div className="w-[195px] sm:w-[220px] h-[390px] sm:h-[430px] rounded-[36px] bg-[#09090B] border-4 border-slate-800 p-2 shadow-2xl overflow-hidden flex flex-col justify-between text-white font-sans relative z-20 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    
                    {/* Status Bar & Header */}
                    <div>
                      <div className="flex items-center justify-between text-[7px] text-slate-400 px-2 pt-1 font-semibold">
                        <span>11:03</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <div className="w-2 h-1.5 border border-slate-400 rounded-sm" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between px-2 pt-2 pb-1">
                        <span className="text-[11px] font-black text-white tracking-tight">Welcome back!</span>
                        <div className="flex items-center space-x-1.5 text-slate-300 text-[10px]">
                          <span>🔔</span>
                          <span>⚙️</span>
                        </div>
                      </div>

                      {/* Continue Listening Grid */}
                      <div className="px-2 mt-1 space-y-1">
                        <span className="text-[8px] font-extrabold text-slate-300 uppercase tracking-wider block">Continue Listening</span>
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="bg-[#1E1E22] p-1 rounded-md flex items-center space-x-1.5 border border-white/5">
                            <div className="w-5 h-5 rounded bg-gradient-to-br from-pink-500 to-purple-600 shrink-0 flex items-center justify-center text-[7px] font-bold">🎵</div>
                            <span className="text-[7.5px] font-bold text-slate-200 truncate">Saffron & Solo</span>
                          </div>
                          <div className="bg-[#1E1E22] p-1 rounded-md flex items-center space-x-1.5 border border-white/5">
                            <div className="w-5 h-5 rounded bg-gradient-to-br from-amber-500 to-emerald-500 shrink-0 flex items-center justify-center text-[7px] font-bold">🎧</div>
                            <span className="text-[7.5px] font-bold text-slate-200 truncate">Chill Vibes</span>
                          </div>
                          <div className="bg-[#1E1E22] p-1 rounded-md flex items-center space-x-1.5 border border-white/5">
                            <div className="w-5 h-5 rounded bg-gradient-to-br from-cyan-500 to-blue-600 shrink-0 flex items-center justify-center text-[7px] font-bold">🎸</div>
                            <span className="text-[7.5px] font-bold text-slate-200 truncate">Acoustic Hits</span>
                          </div>
                          <div className="bg-[#1E1E22] p-1 rounded-md flex items-center space-x-1.5 border border-white/5">
                            <div className="w-5 h-5 rounded bg-gradient-to-br from-[#D946EF] to-indigo-600 shrink-0 flex items-center justify-center text-[7px] font-bold">🎹</div>
                            <span className="text-[7.5px] font-bold text-slate-200 truncate">Lo-Fi Beats</span>
                          </div>
                        </div>
                      </div>

                      {/* Your Top Mixes */}
                      <div className="px-2 mt-2 space-y-1">
                        <span className="text-[8px] font-extrabold text-slate-300 uppercase tracking-wider block">Your Top Mixes</span>
                        <div className="flex space-x-1.5">
                          <div className="bg-[#18181C] p-1.5 rounded-lg w-1/2 border border-white/5 space-y-1">
                            <div className="h-12 rounded-md bg-gradient-to-tr from-pink-600 via-rose-500 to-purple-600 p-1 flex items-end">
                              <span className="text-[7px] font-black text-white">POP MIX</span>
                            </div>
                            <span className="text-[7px] text-slate-400 block truncate">Dua Lipa, The Weeknd</span>
                          </div>
                          <div className="bg-[#18181C] p-1.5 rounded-lg w-1/2 border border-white/5 space-y-1">
                            <div className="h-12 rounded-md bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-600 p-1 flex items-end">
                              <span className="text-[7px] font-black text-white">CHILL MIX</span>
                            </div>
                            <span className="text-[7px] text-slate-400 block truncate">Coldplay, Ed Sheeran</span>
                          </div>
                        </div>
                      </div>

                      {/* Based on recent listening */}
                      <div className="px-2 mt-2 space-y-1">
                        <span className="text-[8px] font-extrabold text-slate-300 uppercase tracking-wider block">Based on your recent listening</span>
                        <div className="flex space-x-1.5">
                          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-purple-800 shrink-0 border border-white/10" />
                          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-pink-500 to-rose-700 shrink-0 border border-white/10" />
                          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-amber-500 to-orange-600 shrink-0 border border-white/10" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="bg-[#121215] -mx-2 -mb-2 p-2 border-t border-white/10 flex items-center justify-around text-[7.5px] font-extrabold text-slate-400">
                      <div className="flex flex-col items-center text-white">
                        <span className="text-sm leading-none">🏠</span>
                        <span className="mt-0.5">Home</span>
                      </div>
                      <div className="flex flex-col items-center hover:text-white">
                        <span className="text-sm leading-none">🔍</span>
                        <span className="mt-0.5">Explore</span>
                      </div>
                      <div className="flex flex-col items-center hover:text-white">
                        <span className="text-sm leading-none">📚</span>
                        <span className="mt-0.5">Library</span>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT PHONE: Spotify Music Player Screen */}
                  <div className="w-[190px] sm:w-[215px] h-[385px] sm:h-[425px] rounded-[36px] bg-[#09090B] border-4 border-slate-800 p-2 shadow-2xl overflow-hidden flex flex-col justify-between text-white font-sans relative z-10 -ml-8 sm:-ml-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    
                    <div>
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[7px] text-slate-400 px-2 pt-1 font-semibold">
                        <span>11:03</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <div className="w-2 h-1.5 border border-slate-400 rounded-sm" />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex items-center justify-between px-1 py-1 text-[8px] text-slate-400">
                        <span>‹</span>
                        <span className="font-extrabold text-slate-200 text-[7.5px] tracking-wider uppercase">Playing from playlist</span>
                        <span>⋮</span>
                      </div>

                      {/* Album Artwork */}
                      <div className="my-1.5 px-1 flex justify-center">
                        <div className="w-full h-32 sm:h-36 rounded-xl bg-gradient-to-tr from-purple-900 via-indigo-800 to-pink-600 p-2 relative overflow-hidden shadow-lg border border-white/10 flex flex-col justify-end">
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-400/30 via-purple-600/20 to-transparent" />
                          <div className="relative z-10">
                            <span className="text-[6.5px] font-black uppercase text-pink-300 tracking-widest block">NEW RELEASE</span>
                            <span className="text-[10px] font-extrabold text-white leading-tight block">Grainy Days EP</span>
                          </div>
                        </div>
                      </div>

                      {/* Track Title & Artist */}
                      <div className="px-2 flex items-center justify-between">
                        <div>
                          <h4 className="text-[12px] font-extrabold text-white leading-tight">grainy days</h4>
                          <p className="text-[8px] text-slate-400 font-medium">reedy.</p>
                        </div>
                        <span className="text-pink-500 text-sm">♥</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="px-2 mt-2 space-y-0.5">
                        <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                          <div className="w-2/5 h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                        </div>
                        <div className="flex justify-between text-[6.5px] text-slate-500 font-semibold">
                          <span>1:24</span>
                          <span>3:45</span>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-around px-1 mt-1 text-slate-300">
                        <span className="text-[9px]">🔀</span>
                        <span className="text-[11px]">⏮</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-[10px] shadow-md">
                          ▶
                        </div>
                        <span className="text-[11px]">⏭</span>
                        <span className="text-[9px]">🔁</span>
                      </div>
                    </div>

                    {/* Pink Lyric Box at Bottom (1:1 Reference Match) */}
                    <div className="bg-gradient-to-r from-[#EC4899] to-[#D946EF] rounded-xl p-2 text-white shadow-lg space-y-0.5 border border-pink-300/30">
                      <p className="text-[7.5px] font-bold leading-tight">You never look at the sky</p>
                      <p className="text-[7.5px] font-bold leading-tight text-white/90">Cause you think it's too high</p>
                      <p className="text-[6.5px] font-medium opacity-80">You never look at the stars...</p>
                    </div>

                  </div>

                </div>
              </div>
            ) : isAmazon ? (
              /* Amazon E-Commerce 1:1 Reference Dual Phone Mockup Layout */
              <div className="relative w-full max-w-[540px] flex items-center justify-center min-h-[420px] py-4">
                {/* Dark Blue Circle Blob Top-Left */}
                <div className="absolute top-1 left-4 sm:left-8 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#1A237E] pointer-events-none opacity-90" />

                {/* Soft Purple/Indigo Circle Blob Bottom-Right */}
                <div className="absolute bottom-1 right-4 sm:right-8 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#7C4DFF] pointer-events-none opacity-70" />

                {/* Dual Overlapping Mobile Phones */}
                <div className="relative flex items-center justify-center z-10">

                  {/* LEFT PHONE: Amazon E-Commerce Shopping Catalog App Screen */}
                  <div className="w-[200px] sm:w-[225px] h-[400px] sm:h-[440px] rounded-[36px] bg-slate-950 border-4 border-slate-800 p-2 shadow-2xl overflow-hidden flex flex-col justify-between text-slate-900 font-sans relative z-20 bg-white">
                    <div>
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[7px] text-slate-500 px-2 pt-1 font-semibold border-b border-slate-100 pb-1">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          <div className="w-2 h-1.5 border border-slate-500 rounded-sm" />
                        </div>
                      </div>

                      {/* User Greeting & Search */}
                      <div className="px-2 pt-2 space-y-1.5">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-[7.5px] text-slate-400 font-bold leading-none">Welcome,</p>
                            <h4 className="text-[11px] font-black text-slate-900 leading-tight">Martin Smith</h4>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-[10px]">
                            👤
                          </div>
                        </div>

                        <div className="bg-slate-100 text-slate-400 rounded-lg px-2 py-1 flex items-center justify-between text-[8px]">
                          <div className="flex items-center space-x-1">
                            <span>🔍</span>
                            <span>Search...</span>
                          </div>
                          <span>🎙️</span>
                        </div>
                      </div>

                      {/* Promo Banners Horizontal Carousel */}
                      <div className="px-2 mt-2 space-y-1">
                        <div className="flex space-x-1.5 overflow-hidden">
                          {/* Banner 1 */}
                          <div className="w-[130px] shrink-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-2 text-white space-y-1 shadow-sm">
                            <span className="text-[7px] font-black bg-white/20 px-1 py-0.5 rounded text-white uppercase">50% Off</span>
                            <div className="text-[8.5px] font-extrabold leading-tight">On everything today</div>
                            <div className="text-[6.5px] opacity-80">With code: ECOMMERCE</div>
                            <button className="px-2 py-0.5 rounded bg-white text-indigo-700 font-extrabold text-[7px] shadow-sm">Get now</button>
                          </div>
                          {/* Banner 2 */}
                          <div className="w-[120px] shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-2 text-white space-y-1 opacity-90">
                            <span className="text-[7px] font-black bg-white/20 px-1 py-0.5 rounded text-white uppercase">70% Off</span>
                            <div className="text-[8.5px] font-extrabold leading-tight">On every order</div>
                            <button className="px-2 py-0.5 rounded bg-white text-purple-700 font-extrabold text-[7px]">Explore</button>
                          </div>
                        </div>
                      </div>

                      {/* New Arrivals Grid */}
                      <div className="px-2 mt-2 space-y-1">
                        <div className="flex justify-between items-center text-[8px]">
                          <span className="font-extrabold text-slate-900">New Arrivals</span>
                          <span className="text-[7px] text-[#005F96] font-bold">See all</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {/* Product Card 1 */}
                          <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-1.5 space-y-1">
                            <div className="h-14 rounded-md bg-slate-200 flex items-center justify-center text-xl relative overflow-hidden">
                              👜
                              <span className="absolute top-1 right-1 text-[8px]">🤍</span>
                            </div>
                            <div className="text-[7.5px] font-extrabold text-slate-900 truncate">The Marc Jacobs</div>
                            <div className="text-[6.5px] text-slate-500 font-semibold truncate">Traveler Tote</div>
                            <div className="text-[7.5px] font-black text-slate-900">$185.00</div>
                          </div>

                          {/* Product Card 2 */}
                          <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-1.5 space-y-1">
                            <div className="h-14 rounded-md bg-slate-200 flex items-center justify-center text-xl relative overflow-hidden">
                              👟
                              <span className="absolute top-1 right-1 text-[8px]">🤍</span>
                            </div>
                            <div className="text-[7.5px] font-extrabold text-slate-900 truncate">Axel Arigato</div>
                            <div className="text-[6.5px] text-slate-500 font-semibold truncate">Clean 90 Sneakers</div>
                            <div className="text-[7.5px] font-black text-slate-900">$245.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="bg-white border-t border-slate-100 -mx-2 -mb-2 p-1.5 flex items-center justify-around text-[7.5px] font-extrabold text-slate-400">
                      <div className="flex flex-col items-center text-[#005F96]">
                        <span className="text-[10px] leading-none">🏠</span>
                        <span className="mt-0.5">Home</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] leading-none">🔍</span>
                        <span className="mt-0.5">Search</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] leading-none">🛍️</span>
                        <span className="mt-0.5">Cart</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] leading-none">👤</span>
                        <span className="mt-0.5">Profile</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT PHONE: Product Details Page */}
                  <div className="w-[190px] sm:w-[215px] h-[390px] sm:h-[430px] rounded-[36px] bg-slate-950 border-4 border-slate-800 p-2 shadow-2xl overflow-hidden flex flex-col justify-between text-slate-900 font-sans relative z-10 -ml-8 sm:-ml-10 transform translate-y-3 hover:translate-y-0 transition-transform duration-300 bg-white">
                    <div>
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[7px] text-slate-500 px-2 pt-1 font-semibold border-b border-slate-100 pb-1">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          <div className="w-2 h-1.5 border border-slate-500 rounded-sm" />
                        </div>
                      </div>

                      {/* Product Photo Header */}
                      <div className="relative my-1 px-1">
                        <div className="w-full h-32 rounded-xl bg-gradient-to-tr from-indigo-100 via-slate-100 to-purple-100 p-2 flex items-center justify-center relative overflow-hidden border border-slate-200">
                          <span className="text-4xl">🧥</span>
                          <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-[10px] font-bold text-slate-700 shadow-sm">
                            ‹
                          </div>
                          <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-[10px] text-rose-500 shadow-sm">
                            ♥
                          </div>
                        </div>
                      </div>

                      {/* Title & Price */}
                      <div className="px-2 space-y-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-[11px] font-black text-slate-900 leading-tight">Oiler Jacket</h4>
                            <div className="flex items-center space-x-1 text-[7px] text-amber-500 font-bold mt-0.5">
                              <span>⭐⭐⭐⭐⭐</span>
                              <span className="text-slate-400">(120 reviews)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded block">Available in stock</span>
                            <span className="text-[11px] font-black text-slate-900 block mt-0.5">$250.00</span>
                          </div>
                        </div>

                        {/* Size Pills */}
                        <div className="pt-1 space-y-1">
                          <span className="text-[7.5px] font-extrabold text-slate-700 block">Select Size</span>
                          <div className="flex space-x-1">
                            <span className="w-5 h-5 rounded border border-slate-300 text-slate-600 font-bold text-[7px] flex items-center justify-center">S</span>
                            <span className="w-5 h-5 rounded border border-indigo-600 bg-indigo-600 text-white font-black text-[7px] flex items-center justify-center shadow-sm">M</span>
                            <span className="w-5 h-5 rounded border border-slate-300 text-slate-600 font-bold text-[7px] flex items-center justify-center">L</span>
                            <span className="w-5 h-5 rounded border border-slate-300 text-slate-600 font-bold text-[7px] flex items-center justify-center">XL</span>
                            <span className="w-5 h-5 rounded border border-slate-300 text-slate-600 font-bold text-[7px] flex items-center justify-center">XXL</span>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="pt-1 space-y-0.5">
                          <span className="text-[7.5px] font-extrabold text-slate-700 block">Description</span>
                          <p className="text-[6.5px] text-slate-500 leading-tight font-normal line-clamp-2">
                            A trendy fit soft suede jacket features a spread collar, button front, side pockets & long sleeves.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Add To Cart CTA Button */}
                    <div className="p-2">
                      <button className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-[9px] text-center shadow-md flex items-center justify-center space-x-1">
                        <span>🛍️</span>
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ) : isClover ? (
              /* Clover App Development 1:1 Reference Vector Graphic matching Sapphire Screenshot 1 */
              <div className="relative w-full max-w-[540px] flex items-center justify-center min-h-[400px] py-4 select-none">
                {/* Light Blue Wavy Background Cloud Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D9EBFA] via-[#E6F3FC] to-[#CFE6F8] rounded-[50px] transform -rotate-1 shadow-inner border border-blue-100/80 overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full opacity-25 text-[#005F96]" viewBox="0 0 500 400" fill="none">
                    <path d="M 0 100 Q 150 50 300 120 T 500 80 V 400 H 0 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Floating Elements: Gear wheels, Clock, Code Badges */}
                <div className="absolute top-10 left-10 opacity-30 text-[#005F96]">
                  <svg className="w-16 h-16" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="20" cy="20" r="8" />
                    <path d="M 20 4 V 10 M 20 30 V 36 M 4 20 H 10 M 30 20 H 36" />
                  </svg>
                </div>

                <div className="absolute top-8 right-16 opacity-40 text-[#005F96]">
                  <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="20" cy="20" r="14" />
                    <path d="M 20 10 V 20 L 26 24" />
                  </svg>
                </div>

                <div className="absolute top-28 left-8 bg-[#38BDF8] text-white px-3 py-1.5 rounded-xl text-sm font-mono font-black shadow-md z-20">
                  &#123; &#125;
                </div>

                <div className="absolute bottom-28 right-8 bg-[#38BDF8] text-white px-3 py-1.5 rounded-xl text-sm font-mono font-black shadow-md z-20">
                  &#123; &#125;
                </div>
                <div className="absolute bottom-12 right-12 bg-[#38BDF8] text-white px-3 py-1.5 rounded-xl text-sm font-mono font-black shadow-md z-20">
                  &#123; &#125;
                </div>

                <div className="absolute bottom-12 left-10 bg-[#38BDF8] text-white w-9 h-9 rounded-xl flex items-center justify-center shadow-md z-20">
                  <span className="text-sm font-black">▶</span>
                </div>

                {/* Vector SVG Scene: Smartphone Frame, Kneeling Worker with Clover Logo, Sitting Worker with Laptop */}
                <div className="relative z-10 w-full px-4 flex justify-center items-end h-[340px]">
                  <svg className="w-full h-full max-h-[320px]" viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Smartphone Outer Frame */}
                    <rect x="220" y="20" width="140" height="260" rx="20" fill="#0284C7" />
                    <rect x="225" y="25" width="130" height="250" rx="16" fill="white" />
                    <rect x="260" y="30" width="60" height="6" rx="3" fill="#E2E8F0" />

                    {/* Screen Top Banner with </ > Badge */}
                    <rect x="235" y="45" width="110" height="40" rx="6" fill="#0284C7" />
                    <rect x="245" y="55" width="30" height="20" rx="4" fill="#38BDF8" />
                    <text x="252" y="69" fill="white" fontSize="11" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>

                    {/* Phone Screen App Graphic with Clover Icon */}
                    <rect x="235" y="95" width="110" height="75" rx="6" fill="#E0F2FE" />
                    <g transform="translate(275, 115)">
                      <circle cx="0" cy="-7" r="7" fill="#005F96" />
                      <circle cx="7" cy="0" r="7" fill="#005F96" />
                      <circle cx="0" cy="7" r="7" fill="#005F96" />
                      <circle cx="-7" cy="0" r="7" fill="#005F96" />
                      <circle cx="0" cy="0" r="3" fill="white" />
                    </g>
                    <line x1="245" y1="145" x2="335" y2="145" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
                    <line x1="245" y1="155" x2="315" y2="155" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />

                    {/* Screen Bottom Menu Placeholders */}
                    <rect x="235" y="180" width="110" height="45" rx="4" fill="#F1F5F9" />
                    <line x1="245" y1="195" x2="325" y2="195" stroke="#CBD5E1" strokeWidth="2.5" />
                    <line x1="245" y1="208" x2="295" y2="208" stroke="#CBD5E1" strokeWidth="2.5" />

                    {/* Left Kneeling Developer holding Clover Leaf Badge */}
                    <circle cx="170" cy="170" r="12" fill="#FDBA74" />
                    <path d="M 158 165 C 158 153 182 153 182 165 Z" fill="#0F172A" />
                    <path d="M 155 190 C 155 182 162 180 170 180 C 178 180 185 182 185 190 V 225 H 155 Z" fill="#0284C7" />
                    <path d="M 155 225 L 140 250 L 160 250 H 185 L 180 225 Z" fill="#0F172A" />
                    <rect x="180" y="185" width="28" height="28" rx="6" fill="white" stroke="#38BDF8" strokeWidth="2" />
                    <g transform="translate(194, 199)">
                      <circle cx="0" cy="-4" r="4" fill="#005F96" />
                      <circle cx="4" cy="0" r="4" fill="#005F96" />
                      <circle cx="0" cy="4" r="4" fill="#005F96" />
                      <circle cx="-4" cy="0" r="4" fill="#005F96" />
                    </g>

                    {/* Right Developer Sitting on Box with Laptop */}
                    <rect x="365" y="210" width="45" height="55" rx="6" fill="#0284C7" />
                    <circle cx="380" cy="140" r="12" fill="#FDBA74" />
                    <path d="M 368 135 C 368 123 392 123 392 135 Z" fill="#0F172A" />
                    <path d="M 365 160 C 365 152 372 150 380 150 C 388 150 395 152 395 160 V 210 H 365 Z" fill="#EAB308" />
                    <path d="M 365 210 H 395 V 265 H 380 V 230 H 365 Z" fill="#0F172A" />
                    <rect x="345" y="185" width="30" height="20" rx="2" fill="#94A3B8" />
                    <rect x="348" y="188" width="24" height="14" rx="1" fill="#38BDF8" />
                    <rect x="340" y="205" width="40" height="3" rx="1" fill="#64748B" />
                  </svg>
                </div>
              </div>
            ) : isWarehouse ? (
              /* Warehouse Management 1:1 Reference Vector Graphic matching Sapphire Screenshot */
              <div className="relative w-full max-w-[540px] flex items-center justify-center min-h-[400px] py-4 select-none">
                {/* Light Blue Wavy Background Cloud Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D9EBFA] via-[#E6F3FC] to-[#CFE6F8] rounded-[50px] transform -rotate-1 shadow-inner border border-blue-100/80 overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full opacity-25 text-[#005F96]" viewBox="0 0 500 400" fill="none">
                    <path d="M 0 100 Q 150 50 300 120 T 500 80 V 400 H 0 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Vector SVG Scene: Warehouse Racks, Worker in Blue Overalls, Trolley, Laptop Person */}
                <div className="relative z-10 w-full px-4 flex justify-center items-end h-[340px]">
                  <svg className="w-full h-full max-h-[320px]" viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Shelves / Racks */}
                    <rect x="240" y="40" width="120" height="210" fill="#E2E8F0" rx="4" />
                    <rect x="245" y="45" width="110" height="200" fill="none" stroke="#94A3B8" strokeWidth="3" />
                    <line x1="245" y1="95" x2="355" y2="95" stroke="#94A3B8" strokeWidth="3" />
                    <line x1="245" y1="145" x2="355" y2="145" stroke="#94A3B8" strokeWidth="3" />
                    <line x1="245" y1="195" x2="355" y2="195" stroke="#94A3B8" strokeWidth="3" />

                    {/* Inventory Boxes on Shelves */}
                    <rect x="255" y="55" width="38" height="35" fill="#38BDF8" rx="3" />
                    <rect x="302" y="60" width="38" height="30" fill="#60A5FA" rx="3" />
                    <rect x="255" y="105" width="48" height="35" fill="#0284C7" rx="3" />
                    <rect x="260" y="155" width="42" height="35" fill="#38BDF8" rx="3" />
                    <rect x="308" y="160" width="35" height="30" fill="#93C5FD" rx="3" />

                    {/* Stack of Boxes on Floor */}
                    <rect x="190" y="200" width="45" height="45" fill="#0284C7" rx="4" />
                    <rect x="150" y="215" width="40" height="30" fill="#38BDF8" rx="3" />

                    {/* Left Person Sitting on Chair with Laptop */}
                    <ellipse cx="110" cy="245" rx="35" ry="12" fill="#CBD5E1" />
                    {/* Chair Legs */}
                    <path d="M 90 200 L 95 255 M 125 200 L 120 255" stroke="#475569" strokeWidth="4" />
                    <circle cx="108" cy="145" r="14" fill="#FDBA74" />
                    <path d="M 96 140 Q 108 130 120 140 Z" fill="#1E293B" />
                    <path d="M 92 168 C 92 160 100 158 108 158 C 116 158 124 160 124 168 V 215 L 118 260 H 108 L 100 215 Z" fill="#EAB308" />
                    <path d="M 98 215 V 260 H 108 V 215 Z" fill="#1E293B" />
                    <path d="M 110 215 V 260 H 120 V 215 Z" fill="#1E293B" />
                    {/* Laptop */}
                    <rect x="105" y="180" width="32" height="22" rx="2" fill="#0284C7" />
                    <rect x="100" y="200" width="42" height="4" rx="1" fill="#94A3B8" />

                    {/* Pallet Trolley Hand Jack */}
                    <path d="M 210 255 H 270 V 190 H 275" stroke="#0284C7" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="218" cy="257" r="7" fill="#1E293B" />
                    <circle cx="262" cy="257" r="7" fill="#1E293B" />

                    {/* Right Warehouse Worker Standing in Blue Uniform */}
                    <circle cx="410" cy="115" r="14" fill="#FDBA74" />
                    {/* Blue Helmet */}
                    <path d="M 394 110 C 394 98 426 98 426 110 Z" fill="#0284C7" />
                    <rect x="390" y="109" width="40" height="4" rx="2" fill="#0284C7" />
                    {/* Blue Overalls / Uniform */}
                    <path d="M 393 135 C 393 126 401 124 410 124 C 419 124 427 126 427 135 V 200 L 421 270 H 411 L 405 200 Z" fill="#1E3A8A" />
                    <path d="M 401 200 V 270 H 411 V 200 Z" fill="#1E293B" />
                    <path d="M 413 200 V 270 H 423 V 200 Z" fill="#1E293B" />
                    <rect x="399" y="267" width="15" height="6" rx="2" fill="#EF4444" />
                    <rect x="411" y="267" width="15" height="6" rx="2" fill="#EF4444" />
                  </svg>
                </div>
              </div>
            ) : isVisitor ? (
              /* Visitor Management 1:1 Reference Vector Graphic matching Sapphire Screenshot 1 */
              <div className="relative w-full max-w-[540px] flex items-center justify-center min-h-[400px] py-4 select-none">
                {/* Light Blue Wavy Background Cloud Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D9EBFA] via-[#E6F3FC] to-[#CFE6F8] rounded-[50px] transform -rotate-1 shadow-inner border border-blue-100/80 overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full opacity-25 text-[#005F96]" viewBox="0 0 500 400" fill="none">
                    <path d="M 0 100 Q 150 50 300 120 T 500 80 V 400 H 0 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Floating Step Badges Top */}
                <div className="absolute top-8 left-1/3 -translate-x-12 z-20 flex items-center space-x-1 bg-[#005F96] text-white px-3.5 py-1 rounded-md text-[12px] font-black shadow-md">
                  <span>1</span>
                  <span className="text-[10px] opacity-75">≡</span>
                </div>

                <div className="absolute top-10 right-1/3 translate-x-8 z-20 flex items-center space-x-1 bg-[#005F96] text-white px-3.5 py-1 rounded-md text-[12px] font-black shadow-md">
                  <span>3</span>
                  <span className="text-[10px] opacity-75">≡</span>
                </div>

                {/* Vector SVG Scene: Reception Counter with 3 Staff & 1 Visitor */}
                <div className="relative z-10 w-full px-4 flex justify-center items-end h-[340px]">
                  <svg className="w-full h-full max-h-[320px]" viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Reception Counter Desk */}
                    <rect x="60" y="180" width="340" height="90" rx="14" fill="#005F96" />
                    <rect x="65" y="185" width="330" height="80" rx="10" fill="#006C9A" />
                    <rect x="70" y="170" width="320" height="15" rx="4" fill="#004A75" />

                    {/* Laptop 1 (Left Receptionist) */}
                    <rect x="110" y="145" width="35" height="22" rx="2" fill="#1E293B" />
                    <rect x="113" y="148" width="29" height="16" rx="1" fill="#38BDF8" />
                    <path d="M 102 167 H 153 L 157 170 H 98 Z" fill="#64748B" />

                    {/* Laptop 2 (Center Receptionist) */}
                    <rect x="230" y="145" width="35" height="22" rx="2" fill="#1E293B" />
                    <rect x="233" y="148" width="29" height="16" rx="1" fill="#38BDF8" />
                    <path d="M 222 167 H 273 L 277 170 H 218 Z" fill="#64748B" />

                    {/* Laptop 3 (Right Receptionist) */}
                    <rect x="330" y="145" width="35" height="22" rx="2" fill="#1E293B" />
                    <rect x="333" y="148" width="29" height="16" rx="1" fill="#38BDF8" />
                    <path d="M 322 167 H 373 L 377 170 H 318 Z" fill="#64748B" />

                    {/* Staff 1 (Left - Woman sitting) */}
                    <circle cx="127" cy="105" r="14" fill="#FCA5A5" />
                    <path d="M 113 102 C 113 90 141 90 141 102 C 141 85 113 85 113 102 Z" fill="#1E1B4B" />
                    <path d="M 110 125 C 110 120 117 118 127 118 C 137 118 144 120 144 125 V 170 H 110 Z" fill="#004A75" />

                    {/* Staff 2 (Center - Woman standing/sitting, blue top) */}
                    <circle cx="247" cy="108" r="14" fill="#FDBA74" />
                    <path d="M 233 105 C 233 92 261 92 261 105 Z" fill="#0F172A" />
                    <path d="M 230 128 C 230 122 237 120 247 120 C 257 120 264 122 264 128 V 170 H 230 Z" fill="#004A75" />

                    {/* Staff 3 (Right - Woman receptionist) */}
                    <circle cx="347" cy="105" r="14" fill="#FED7AA" />
                    <path d="M 333 100 C 333 88 361 88 361 100 Z" fill="#451A03" />
                    <path d="M 330 125 C 330 120 337 118 347 118 C 357 118 364 120 364 125 V 170 H 330 Z" fill="#004A75" />

                    {/* Visitor Standing on Right (Man in Mustard Yellow/Brown Jacket checking in) */}
                    <circle cx="435" cy="100" r="15" fill="#FDBA74" />
                    <path d="M 420 95 C 420 85 450 85 450 95 Z" fill="#1E293B" />
                    <path d="M 425 105 Q 435 118 445 105 Z" fill="#1E293B" />
                    <path d="M 415 122 C 415 115 425 112 435 112 C 445 112 455 115 455 122 V 210 L 442 270 H 428 L 415 210 Z" fill="#D97706" />
                    <path d="M 422 210 V 285 H 433 V 210 Z" fill="#1E293B" />
                    <path d="M 437 210 V 285 H 448 V 210 Z" fill="#1E293B" />
                    <line x1="452" y1="130" x2="458" y2="285" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="relative w-full max-w-[560px]">
                {/* Laptop Web Dashboard Frame */}
                <div className="rounded-2xl border-4 border-slate-300 bg-white shadow-2xl p-1.5 relative overflow-hidden">
                  {/* Top Laptop Screen Navigation Bar */}
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 rounded-t-xl border-b border-slate-200 text-[8.5px] text-slate-600 font-sans">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="hidden sm:flex items-center space-x-2.5 font-semibold text-slate-700">
                      <span>Home</span>
                      <span>About</span>
                      <span>Product & Services</span>
                      <span>Clients</span>
                      <span>Resources</span>
                      <span>Contact Us</span>
                    </div>
                  </div>

                  {/* Dashboard Screen Mockup Content */}
                  {isEducation ? (
                    <div className="bg-gradient-to-r from-[#0284C7] via-[#005F96] to-[#0369A1] rounded-b-xl p-5 text-white text-[10px] relative overflow-hidden min-h-[280px] flex flex-col justify-between">
                      {/* Wavy dots background */}
                      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                      <div className="relative z-10 grid grid-cols-12 gap-2 items-center">
                        {/* Left Banner Text */}
                        <div className="col-span-7 space-y-1.5">
                          <span className="text-[8.5px] uppercase tracking-wider font-black text-cyan-200 block">
                            EDUCATION IS OUR PRIORITY
                          </span>
                          <h3 className="text-base sm:text-lg font-black leading-tight text-white font-sans">
                            School Management System With Secure Cloud Storage
                          </h3>
                          <p className="text-[8.5px] text-blue-100 leading-relaxed font-normal opacity-95 max-w-[210px]">
                            From Student Admission To Accounting, We Ensure That Your School Gets Game Quickly.
                          </p>

                          <button className="mt-2.5 px-3.5 py-1.5 rounded bg-[#002B4D] hover:bg-black text-white font-extrabold text-[8.5px] shadow-sm">
                            Get Started
                          </button>
                        </div>

                        {/* Right Student Boy Photo Illustration */}
                        <div className="col-span-5 relative flex items-center justify-center min-h-[140px]">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-cyan-300/30 p-1 flex items-center justify-center relative">
                            {/* Student Boy Vector Graphic */}
                            <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none">
                              {/* Graduation Cap */}
                              <path d="M 50 12 L 88 28 L 50 44 L 12 28 Z" fill="#0F172A" />
                              <rect x="42" y="36" width="16" height="10" fill="#1E293B" />
                              <circle cx="88" cy="28" r="3.5" fill="#F59E0B" />
                              <path d="M 88 28 V 50" stroke="#F59E0B" strokeWidth="2" />
                              {/* Head & Glasses */}
                              <circle cx="50" cy="54" r="19" fill="#FDE047" />
                              <circle cx="42" cy="52" r="4.5" stroke="#0F172A" strokeWidth="1.8" fill="white" />
                              <circle cx="58" cy="52" r="4.5" stroke="#0F172A" strokeWidth="1.8" fill="white" />
                              <path d="M 46.5 52 H 53.5" stroke="#0F172A" strokeWidth="1.8" />
                              <path d="M 44 63 Q 50 68 56 63" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
                              {/* Blue Shirt & Arm pointing up */}
                              <path d="M 22 92 C 22 75 33 72 50 72 C 67 72 78 75 78 92 Z" fill="#0284C7" />
                              <path d="M 72 75 L 82 55 L 87 58 L 78 80 Z" fill="#0284C7" />
                            </svg>
                          </div>

                          {/* Floating Stat Badges on Laptop Screen */}
                          <div className="absolute top-0 -right-2 bg-white text-slate-900 px-2 py-0.5 rounded shadow text-[7.5px] font-bold">
                            Success: 25k+
                          </div>
                          <div className="absolute bottom-2 -left-4 bg-white text-slate-900 px-2 py-0.5 rounded shadow text-[7.5px] font-bold">
                            Satisfaction: 98%
                          </div>
                        </div>
                      </div>

                      {/* Bottom School Marquee Logotypes */}
                      <div className="relative z-10 border-t border-white/20 pt-2 flex items-center justify-between text-[8px] font-extrabold text-cyan-100 uppercase tracking-tight opacity-90">
                        <span>BHOMRA</span>
                        <span>ST. XAVIER</span>
                        <span>AES EDUCATION</span>
                        <span>ANAND NIKETAN</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#F8FAFC] rounded-lg p-4 space-y-3 min-h-[260px] text-slate-800 text-[10px]">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white space-y-1 shadow-sm">
                          <span className="text-[9px] opacity-80 uppercase font-bold block">Annual Health Checkup</span>
                          <div className="text-xl font-black">577</div>
                          <span className="text-[8px] opacity-90 block">Active Patient Profiles</span>
                        </div>
                        <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white space-y-1 shadow-sm">
                          <span className="text-[9px] opacity-80 uppercase font-bold block">Doctor Consultations</span>
                          <div className="text-xl font-black">186</div>
                          <span className="text-[8px] opacity-90 block">Completed Today</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-sm space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-bold text-slate-600">
                          <span>Monthly Growth Analytics</span>
                          <span className="text-[#005F96]">Updated Live</span>
                        </div>
                        <div className="h-20 flex items-end justify-between space-x-1 pt-2 border-b border-slate-100 pb-1">
                          <div className="w-full bg-purple-500 rounded-t h-[40%]" />
                          <div className="w-full bg-indigo-500 rounded-t h-[65%]" />
                          <div className="w-full bg-[#005F96] rounded-t h-[85%]" />
                          <div className="w-full bg-emerald-500 rounded-t h-[55%]" />
                          <div className="w-full bg-amber-500 rounded-t h-[95%]" />
                          <div className="w-full bg-rose-500 rounded-t h-[75%]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Smartphone Mockup Overlapping at Bottom Right */}
                <div className="absolute -bottom-6 -right-3 w-[175px] sm:w-[195px] h-[330px] rounded-[34px] bg-slate-950 border-4 border-slate-800 p-1.5 shadow-2xl overflow-hidden z-20">
                  <div className="bg-[#005F96] text-white w-full h-full rounded-[26px] p-2 flex flex-col justify-between text-[8px] font-sans">
                    {/* Phone Header */}
                    <div className="bg-[#004A75] p-2 rounded-t-xl text-center space-y-0.5">
                      <div className="flex justify-between text-[7px] text-cyan-200 font-bold">
                        <span>9:41</span>
                        <span>Dashboard</span>
                      </div>
                      <div className="font-black text-[9.5px] text-white">School E-Learning</div>
                    </div>

                    {/* 9 Mobile App Icons Grid matching Reference Screenshot */}
                    <div className="bg-white text-slate-800 rounded-xl p-2 my-1 grid grid-cols-3 gap-1.5 text-center text-[7px]">
                      <div className="p-1 rounded bg-orange-50 flex flex-col items-center">
                        <div className="w-4 h-4 rounded bg-orange-500 text-white font-bold flex items-center justify-center text-[8px]">📌</div>
                        <span className="font-semibold text-slate-700 leading-none mt-1">Notice</span>
                      </div>
                      <div className="p-1 rounded bg-blue-50 flex flex-col items-center">
                        <div className="w-4 h-4 rounded bg-blue-500 text-white font-bold flex items-center justify-center text-[8px]">📊</div>
                        <span className="font-semibold text-slate-700 leading-none mt-1">Board</span>
                      </div>
                      <div className="p-1 rounded bg-purple-50 flex flex-col items-center">
                        <div className="w-4 h-4 rounded bg-purple-500 text-white font-bold flex items-center justify-center text-[8px]">👨‍🏫</div>
                        <span className="font-semibold text-slate-700 leading-none mt-1">Teacher</span>
                      </div>
                      <div className="p-1 rounded bg-emerald-50 flex flex-col items-center">
                        <div className="w-4 h-4 rounded bg-emerald-500 text-white font-bold flex items-center justify-center text-[8px]">📅</div>
                        <span className="font-semibold text-slate-700 leading-none mt-1">Calendar</span>
                      </div>
                      <div className="p-1 rounded bg-amber-50 flex flex-col items-center">
                        <div className="w-4 h-4 rounded bg-amber-500 text-white font-bold flex items-center justify-center text-[8px]">⏰</div>
                        <span className="font-semibold text-slate-700 leading-none mt-1">Timetable</span>
                      </div>
                      <div className="p-1 rounded bg-indigo-50 flex flex-col items-center">
                        <div className="w-4 h-4 rounded bg-indigo-500 text-white font-bold flex items-center justify-center text-[8px]">📚</div>
                        <span className="font-semibold text-slate-700 leading-none mt-1">Library</span>
                      </div>
                      <div className="p-1 rounded bg-[#E5F2F9] flex flex-col items-center">
                        <div className="w-4 h-4 rounded bg-[#005F96] text-white font-bold flex items-center justify-center text-[8px]">📝</div>
                        <span className="font-semibold text-slate-700 leading-none mt-1">Exam</span>
                      </div>
                      <div className="p-1 rounded bg-rose-50 flex flex-col items-center">
                        <div className="w-4 h-4 rounded bg-rose-500 text-white font-bold flex items-center justify-center text-[8px]">📑</div>
                        <span className="font-semibold text-slate-700 leading-none mt-1">Homework</span>
                      </div>
                      <div className="p-1 rounded bg-teal-50 flex flex-col items-center">
                        <div className="w-4 h-4 rounded bg-teal-500 text-white font-bold flex items-center justify-center text-[8px]">✅</div>
                        <span className="font-semibold text-slate-700 leading-none mt-1">Attendance</span>
                      </div>
                    </div>

                    <button className="w-full py-1 rounded bg-cyan-400 text-slate-900 font-extrabold text-[8.5px] text-center shadow-sm">
                      Open Student Portal
                    </button>
                  </div>
                </div>

                {/* 4 Large Floating Icon Badges */}
                {isEducation ? (
                  <>
                    <div className="absolute -top-5 left-4 w-14 h-14 rounded-2xl bg-[#F5B000] shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center border-2 border-amber-300">
                      <TeacherBoardIcon />
                    </div>

                    <div className="absolute top-4 -right-5 w-14 h-14 rounded-2xl bg-[#00D06C] shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center border-2 border-emerald-300">
                      <VideoClassIcon />
                    </div>

                    <div className="absolute bottom-10 -left-6 w-14 h-14 rounded-2xl bg-[#FF6B4A] shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center border-2 border-orange-300">
                      <StudentLaptopIcon />
                    </div>

                    <div className="absolute -bottom-5 right-32 w-14 h-14 rounded-2xl bg-[#2D1F5B] shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center border-2 border-purple-400">
                      <TestScoreIcon />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute -top-4 left-10 p-3 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                      <Pill className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-8 -right-3 p-3 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-16 -left-5 p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-3 right-36 p-3 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                      <HeartHandshake className="w-6 h-6 text-white" />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SapphireLightHeroBanner;
