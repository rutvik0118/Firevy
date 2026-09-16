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
  serviceCategory = "education"
}) => {
  const isEducation = serviceCategory === 'education';
  const isUber = serviceCategory === 'uber' || serviceCategory === 'taxi';

  return (
    <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-[#EEF5FB] text-slate-900 relative overflow-hidden text-left font-sans border-b border-slate-200/60">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[800] text-slate-900 tracking-tight leading-[1.18] max-w-xl font-sans">
              {title}
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-lg font-sans">
              {subtitle}
            </p>

            <div className="pt-2">
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[8px] bg-[#006B8F] hover:bg-[#005573] text-white font-[700] text-sm sm:text-base transition-all shadow-md hover:shadow-lg group font-sans"
              >
                <span>{ctaText}</span>
              </a>
            </div>
          </div>

          {/* Right Visual Graphic */}
          <div className="lg:col-span-6 flex justify-center relative py-4">
            {isUber ? (
              <div className="relative w-full max-w-[580px] h-[360px] sm:h-[420px] flex items-center justify-center">
                {/* 1. Background City Skyline Vector */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none opacity-90">
                  <svg className="w-full h-full text-[#D4E7F6]" viewBox="0 0 500 300" fill="none">
                    {/* Soft Sky Glow & Clouds */}
                    <circle cx="250" cy="150" r="140" fill="#E8F3FC" opacity="0.7" />
                    <path d="M 70 90 Q 85 70 110 80 Q 130 65 155 80 Q 175 75 180 90 Z" fill="#F4FAFF" opacity="0.9" />
                    <path d="M 310 60 Q 325 45 345 55 Q 360 40 380 55 Q 395 50 400 60 Z" fill="#F4FAFF" opacity="0.8" />

                    {/* City Buildings Skyline (Subtle Soft Blue Vectors) */}
                    <rect x="20" y="140" width="45" height="160" fill="#D2E5F5" rx="3" />
                    <rect x="32" y="155" width="8" height="12" fill="#EBF4FB" />
                    <rect x="48" y="155" width="8" height="12" fill="#EBF4FB" />
                    <rect x="32" y="180" width="8" height="12" fill="#EBF4FB" />
                    <rect x="48" y="180" width="8" height="12" fill="#EBF4FB" />
                    <rect x="32" y="205" width="8" height="12" fill="#EBF4FB" />
                    <rect x="48" y="205" width="8" height="12" fill="#EBF4FB" />

                    <rect x="75" y="100" width="55" height="200" fill="#C5DFF2" rx="4" />
                    <polygon points="102,65 95,100 110,100" fill="#B3D5EE" />
                    <rect x="87" y="120" width="10" height="14" fill="#FFFFFF" opacity="0.8" />
                    <rect x="105" y="120" width="10" height="14" fill="#FFFFFF" opacity="0.8" />
                    <rect x="87" y="145" width="10" height="14" fill="#FFFFFF" opacity="0.8" />
                    <rect x="105" y="145" width="10" height="14" fill="#FFFFFF" opacity="0.8" />
                    <rect x="87" y="170" width="10" height="14" fill="#FFFFFF" opacity="0.8" />
                    <rect x="105" y="170" width="10" height="14" fill="#FFFFFF" opacity="0.8" />

                    <rect x="140" y="160" width="40" height="140" fill="#DAEBF7" rx="3" />
                    <rect x="190" y="110" width="60" height="190" fill="#CCE3F5" rx="4" />
                    <rect x="202" y="130" width="14" height="15" fill="#FFFFFF" opacity="0.7" />
                    <rect x="224" y="130" width="14" height="15" fill="#FFFFFF" opacity="0.7" />
                    <rect x="202" y="160" width="14" height="15" fill="#FFFFFF" opacity="0.7" />
                    <rect x="224" y="160" width="14" height="15" fill="#FFFFFF" opacity="0.7" />

                    <rect x="260" y="130" width="50" height="170" fill="#C0DCF0" rx="3" />
                    <polygon points="285,95 278,130 292,130" fill="#A8CEE9" />

                    <rect x="320" y="150" width="45" height="150" fill="#D2E5F5" rx="3" />
                    <rect x="375" y="170" width="40" height="130" fill="#E1EFF9" rx="3" />
                  </svg>
                </div>

                {/* 2. Dotted Orange Connection Line from Taxi Roof Sign to Location Pin */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 580 420" fill="none">
                  <path
                    d="M 225 210 C 245 160, 265 160, 305 175"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Orange Pin Icon above phone */}
                <div className="absolute top-[158px] left-[300px] z-30 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md border-2 border-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4h14v4z" />
                      <circle cx="7.5" cy="14.5" r="1.5" />
                      <circle cx="16.5" cy="14.5" r="1.5" />
                    </svg>
                  </div>
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-0.5 shadow-sm" />
                </div>

                {/* 3. Shiny Bright Yellow Taxi Car Graphic (1:1 Reference Match) */}
                <div className="absolute bottom-6 left-0 sm:left-2 z-20 w-[240px] sm:w-[290px]">
                  <svg viewBox="0 0 320 200" className="w-full h-auto drop-shadow-xl" fill="none">
                    {/* Car shadow */}
                    <ellipse cx="160" cy="178" rx="140" ry="14" fill="#0F172A" opacity="0.25" />

                    {/* TAXI Roof Sign */}
                    <g transform="translate(130, 48)">
                      <rect x="0" y="0" width="50" height="16" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                      <rect x="2" y="2" width="46" height="12" rx="2" fill="#F59E0B" />
                      <text x="25" y="11" fill="#0F172A" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">TAXI</text>
                    </g>

                    {/* Main Car Body - Front 3/4 Perspective */}
                    {/* Roof & Cabin */}
                    <path
                      d="M 85 105 C 100 68, 125 60, 160 60 C 195 60, 220 75, 235 105 Z"
                      fill="#EAB308"
                    />
                    {/* Windshield */}
                    <path
                      d="M 100 100 C 112 73, 130 66, 160 66 C 185 66, 205 76, 215 100 Z"
                      fill="#1E293B"
                      opacity="0.85"
                    />
                    {/* Windshield Reflection */}
                    <path d="M 110 95 L 140 70 L 155 70 L 120 95 Z" fill="#FFFFFF" opacity="0.3" />

                    {/* Lower Body */}
                    <path
                      d="M 35 135 C 35 110, 60 102, 100 102 L 230 102 C 265 102, 285 112, 285 135 C 285 155, 275 162, 255 162 L 65 162 C 45 162, 35 152, 35 135 Z"
                      fill="#FACC15"
                    />
                    {/* Body Accent Highlight */}
                    <path
                      d="M 40 120 C 60 112, 100 110, 160 110 C 220 110, 260 112, 280 120 C 265 115, 220 113, 160 113 C 100 113, 55 115, 40 120 Z"
                      fill="#FFFFFF"
                      opacity="0.5"
                    />

                    {/* Front Grille & Bumper */}
                    <path d="M 45 138 C 45 132, 60 130, 85 130 C 110 130, 125 132, 125 138 C 125 146, 110 148, 85 148 C 60 148, 45 146, 45 138 Z" fill="#1E293B" />
                    {/* Grille Bars */}
                    <line x1="55" y1="135" x2="115" y2="135" stroke="#94A3B8" strokeWidth="1.5" />
                    <line x1="55" y1="139" x2="115" y2="139" stroke="#94A3B8" strokeWidth="1.5" />
                    <line x1="55" y1="143" x2="115" y2="143" stroke="#94A3B8" strokeWidth="1.5" />

                    {/* Headlights */}
                    <ellipse cx="46" cy="132" rx="9" ry="6" fill="#FEF08A" stroke="#E2E8F0" strokeWidth="1.5" />
                    <ellipse cx="46" cy="132" rx="5" ry="3" fill="#FFFFFF" />
                    <ellipse cx="124" cy="132" rx="9" ry="6" fill="#FEF08A" stroke="#E2E8F0" strokeWidth="1.5" />
                    <ellipse cx="124" cy="132" rx="5" ry="3" fill="#FFFFFF" />

                    {/* License Plate */}
                    <rect x="73" y="146" width="24" height="10" rx="1.5" fill="#FFFFFF" stroke="#64748B" strokeWidth="0.8" />
                    <text x="85" y="153" fill="#0F172A" fontSize="5.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">TAXI 01</text>

                    {/* Side Mirrors */}
                    <ellipse cx="88" cy="100" rx="6" ry="4" fill="#EAB308" stroke="#1E293B" strokeWidth="1" />
                    <ellipse cx="232" cy="100" rx="6" ry="4" fill="#EAB308" stroke="#1E293B" strokeWidth="1" />

                    {/* Wheels */}
                    <g transform="translate(75, 142)">
                      <circle cx="18" cy="18" r="20" fill="#0F172A" />
                      <circle cx="18" cy="18" r="12" fill="#94A3B8" />
                      <circle cx="18" cy="18" r="6" fill="#475569" />
                      <circle cx="18" cy="18" r="3" fill="#F8FAFC" />
                    </g>
                    <g transform="translate(205, 142)">
                      <circle cx="18" cy="18" r="20" fill="#0F172A" />
                      <circle cx="18" cy="18" r="12" fill="#94A3B8" />
                      <circle cx="18" cy="18" r="6" fill="#475569" />
                      <circle cx="18" cy="18" r="3" fill="#F8FAFC" />
                    </g>
                  </svg>
                </div>

                {/* 4. Smartphone Mockup showing Taxi Booking App UI (1:1 Reference Match) */}
                <div className="absolute top-2 right-2 sm:right-4 z-20 w-[210px] sm:w-[235px] h-[370px] sm:h-[400px] rounded-[38px] bg-slate-900 border-[5px] border-slate-900 p-1.5 shadow-2xl overflow-hidden font-sans">
                  <div className="bg-white text-slate-900 w-full h-full rounded-[30px] flex flex-col justify-between overflow-hidden relative text-left">
                    
                    {/* Top Phone Status & Header */}
                    <div className="px-3 pt-2 pb-1 space-y-1 bg-white border-b border-slate-100 z-10">
                      <div className="flex items-center justify-between text-[8px] font-bold text-slate-400 px-1">
                        <span>9:41</span>
                        <div className="w-10 h-2 bg-slate-900 rounded-full mx-auto" />
                        <span>5G 100%</span>
                      </div>
                      <div className="flex items-center justify-between pt-0.5">
                        <div>
                          <div className="text-[10px] font-bold text-slate-800 leading-none">Good morning, Mark</div>
                          <div className="text-[9px] text-slate-400 font-medium">Where are you going?</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-[9px] font-black text-slate-700">
                          M
                        </div>
                      </div>
                    </div>

                    {/* Map View Area */}
                    <div className="relative flex-1 bg-[#EEF4F8] overflow-hidden p-2">
                      <svg className="absolute inset-0 w-full h-full text-slate-200" viewBox="0 0 200 180" fill="none">
                        <path d="M -10 40 L 210 60" stroke="#FFFFFF" strokeWidth="12" />
                        <path d="M 40 -10 L 60 190" stroke="#FFFFFF" strokeWidth="10" />
                        <path d="M 140 -10 L 130 190" stroke="#FFFFFF" strokeWidth="8" />
                        <path d="M -10 130 C 60 120, 120 150, 210 140" stroke="#FFFFFF" strokeWidth="10" />

                        <path
                          d="M 50 130 L 55 70 Q 60 50 90 55 L 135 60 L 130 130"
                          stroke="#334155"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <circle cx="70" cy="53" r="3" fill="#0F172A" />
                        <circle cx="132" cy="95" r="3" fill="#0F172A" />
                      </svg>

                      <div className="relative z-10 space-y-1.5 pt-1">
                        <div className="bg-white/95 backdrop-blur-xs rounded-lg p-1.5 shadow-sm border border-slate-200/80 flex items-center justify-between">
                          <span className="text-[9px] font-bold text-slate-700">Swastik society &gt;</span>
                        </div>
                        <div className="bg-white/95 backdrop-blur-xs rounded-lg p-1.5 shadow-sm border border-slate-200/80 flex items-center justify-between w-3/4 ml-auto">
                          <span className="text-[8.5px] font-semibold text-slate-600">My Location &gt;</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Sheet Drawer "Choose your car" */}
                    <div className="bg-white p-2.5 border-t border-slate-200/80 space-y-2 z-10">
                      <div className="text-[10px] font-black text-slate-900 leading-none">Choose your car</div>

                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-[#FF9F1C] text-white p-1.5 rounded-lg shadow-sm space-y-0.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-black">Standard</span>
                          </div>
                          <div className="flex items-center justify-between text-[7.5px] font-bold opacity-95">
                            <span>7 CB</span>
                            <span>3 MIN</span>
                          </div>
                        </div>

                        <div className="bg-slate-100 text-slate-700 p-1.5 rounded-lg border border-slate-200/60 space-y-0.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold text-slate-800">Comfort</span>
                          </div>
                          <div className="flex items-center justify-between text-[7.5px] font-semibold text-slate-500">
                            <span>400</span>
                            <span>10 MIN</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between py-0.5 text-[8.5px] text-slate-700 font-semibold border-t border-slate-100 pt-1">
                        <div className="flex items-center space-x-1">
                          <span className="w-3.5 h-3.5 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center text-[7px] font-bold">💵</span>
                          <span>Cash</span>
                        </div>
                        <span>&gt;</span>
                      </div>

                      <button className="w-full py-1.5 rounded-lg bg-[#FF9F1C] hover:bg-[#F39C12] text-white font-black text-[10px] text-center shadow-md transition-colors">
                        Confirm
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

                {/* 4 Large Floating Icon Badges matching Reference Screenshot 100% */}
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

      {/* Floating Action Icons on Right Edge (Phone Call & WhatsApp 1:1 Match) */}
      <div className="fixed right-0 top-1/3 z-50 flex flex-col space-y-2 pointer-events-auto">
        <a
          href="tel:+919429709662"
          aria-label="Call Us"
          className="w-10 h-10 bg-[#006B8F] hover:bg-[#00526E] text-white flex items-center justify-center rounded-l-md shadow-lg transition-all"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
        <a
          href="https://wa.me/919429709662"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Us"
          className="w-10 h-10 bg-[#006B8F] hover:bg-[#00526E] text-white flex items-center justify-center rounded-l-md shadow-lg transition-all"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.81 9.81 0 0 0 12.04 2zm5.82 14.16c-.25.7-.99 1.28-1.74 1.45-.51.11-1.17.2-3.41-.72-2.86-1.18-4.71-4.08-4.85-4.27-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.11 1.01-2.39.27-.28.59-.35.79-.35.2 0 .4 0 .57.01.18.01.43-.07.67.5.25.59.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.32.4-.46.54-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12.99 2.07 1.3 2.37 1.45.3.15.47.13.65-.08.18-.21.76-.88.96-1.18.2-.3.4-.25.67-.15.27.1.1.72 2.07 2.07.95 2.22.1.25.1.41.05.71z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default SapphireLightHeroBanner;
