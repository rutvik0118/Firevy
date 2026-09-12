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

  const defaultZomatoStats = [
    { value: '80+', label: 'Mobile App Developers' },
    { value: '20+', label: 'Fortunes 500 Companies' },
    { value: '800+', label: 'Project Completed in Mobile Technology' },
    { value: '320+', label: '5-Star Clutch Reviews' }
  ];

  const activeStats = stats || (isZomato ? defaultZomatoStats : null);

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
