import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinksData = {
    company: {
      title: 'Company',
      links: [
        { name: 'About firevy.co', path: '/about' },
        { name: 'Our Team', path: '/company/our-team' },
        { name: 'Events & Activities', path: '/company/events-activities' },
        { name: 'Careers (Jobs)', path: '/careers' },
        { name: 'Contact-Us', path: '/contact' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Awards & Recognition', path: '/company/awards-recognition' },
        { name: 'Why Choose Us', path: '/company/why-choose-us' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'Software Development', path: '/services/custom-software-development' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Progressive Web App Development', path: '/services/web-development' },
        { name: 'IT Outsourcing Services', path: '/services' },
        { name: 'Blockchain Development', path: '/services' },
        { name: 'Full Stack Development Services', path: '/services/custom-software-development' },
        { name: 'Next Js Development', path: '/services/web-development' }
      ]
    },
    technology: {
      title: 'Technology',
      links: [
        { name: '.NET Development', path: '/technologies' },
        { name: 'PHP Development', path: '/technologies' },
        { name: 'Android Development', path: '/technologies' },
        { name: 'iOS Development', path: '/technologies' },
        { name: 'Flutter Development', path: '/technologies' },
        { name: 'Angular Development', path: '/technologies' },
        { name: 'React Development', path: '/technologies' },
        { name: 'NodeJS Development', path: '/technologies' }
      ]
    },
    hireDevelopers: {
      title: 'Hire Developers',
      links: [
        { name: 'Hire Mobile App Developers', path: '/services/dedicated-developers' },
        { name: 'Hire Dedicated Developers', path: '/services/dedicated-developers' },
        { name: 'Hire Software Developers', path: '/services/dedicated-developers' },
        { name: 'Hire AI Developers', path: '/services/dedicated-developers' },
        { name: 'Hire Flutter App Developers', path: '/services/dedicated-developers' },
        { name: 'Hire Full Stack Developer', path: '/services/dedicated-developers' },
        { name: 'Hire Android App Developers', path: '/services/dedicated-developers' },
        { name: 'Hire React Js Developers', path: '/services/dedicated-developers' }
      ]
    },
    aiServices: {
      title: 'AI Services',
      links: [
        { name: 'AI Development Service', path: '/services/ai-machine-learning' },
        { name: 'AI Copilot Development', path: '/services/ai-machine-learning' },
        { name: 'Ethical AI Development', path: '/services/ai-machine-learning' },
        { name: 'AI Prompt Engineering', path: '/services/ai-machine-learning' },
        { name: 'Adaptive AI Development', path: '/services/ai-machine-learning' },
        { name: 'Generative AI Development', path: '/services/ai-machine-learning' },
        { name: 'AI in Business Intelligence Development', path: '/services/ai-machine-learning' },
        { name: 'AI in Marketing', path: '/services/ai-machine-learning' }
      ]
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'Taxi Booking App', path: '/portfolio' },
        { name: 'Covid Tracker App', path: '/portfolio' },
        { name: 'E-Commerce App', path: '/portfolio' },
        { name: 'Product Finder App', path: '/portfolio' },
        { name: 'Eyelash Booking App', path: '/portfolio' },
        { name: 'Language Learning App', path: '/portfolio' },
        { name: 'Barber Shop Booking App', path: '/portfolio' },
        { name: 'On Demand App Development', path: '/portfolio' }
      ]
    }
  };

  return (
    <footer className="bg-white text-slate-900 pt-8 pb-0 relative overflow-hidden font-sans border-t border-slate-200/80 w-full">
      
      {/* TOP SECTION: 6-COLUMN LINKS & AWARDS (WHITE BACKGROUND) */}
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 mx-auto space-y-6">
        
        {/* 1. TOP 6-COLUMN FOOTER LINKS IN CLEAN WHITE BOX - FULL WIDTH */}
        <div className="w-full bg-white rounded-[24px] border border-slate-200/90 shadow-sm p-6 sm:p-8 xl:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-left">
            {Object.keys(footerLinksData).map((key) => {
              const col = footerLinksData[key];
              return (
                <div key={key} className="space-y-4">
                  <h4 className="text-[17px] sm:text-[18px] font-[800] text-[#006B8F] font-sans tracking-tight">
                    {col.title}
                  </h4>
                  <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] font-[400] text-slate-700 font-sans">
                    {col.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          to={link.path}
                          className="hover:text-[#006B8F] transition-colors flex items-start space-x-2 group"
                        >
                          <span className="text-[#006B8F] text-[12px] leading-none shrink-0 mt-0.5">•</span>
                          <span className="leading-snug">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. AWARDS & RECOGNITION BADGE BANNER — FULL WIDTH */}
        <div className="w-full bg-white rounded-[24px] border border-slate-200/90 shadow-sm p-6 sm:p-8 text-left">
          <h3 className="text-[20px] sm:text-[22px] font-[800] text-[#006B8F] tracking-tight mb-6 font-sans">
            Awards & Recognition
          </h3>
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 scrollbar-none">
            {/* 1. GESIA */}
            <div className="shrink-0 flex flex-col items-center justify-center">
              <svg viewBox="0 0 50 50" className="w-16 h-16">
                <circle cx="25" cy="25" r="18" fill="none" stroke="#F59E0B" strokeWidth="6" strokeDasharray="30 100" />
                <circle cx="25" cy="25" r="18" fill="none" stroke="#EF4444" strokeWidth="6" strokeDasharray="30 100" strokeDashoffset="-28" />
                <circle cx="25" cy="25" r="18" fill="none" stroke="#3B82F6" strokeWidth="6" strokeDasharray="30 100" strokeDashoffset="-56" />
                <circle cx="25" cy="25" r="18" fill="none" stroke="#10B981" strokeWidth="6" strokeDasharray="30 100" strokeDashoffset="-84" />
              </svg>
              <span className="text-[14px] font-[900] text-slate-900 tracking-tight font-sans mt-1">gesia</span>
            </div>

            {/* 2. ISO 27001:2013 */}
            <div className="shrink-0 w-20 h-20 rounded-full border-2 border-[#006B8F] flex flex-col items-center justify-center p-1 text-center bg-[#F0F9FF] shadow-xs">
              <span className="text-[8px] font-[700] text-[#006B8F] uppercase leading-none">CERTIFIED</span>
              <span className="text-[16px] font-[900] text-[#006B8F] leading-tight my-0.5">ISO</span>
              <span className="text-[8px] font-[700] text-slate-700 leading-none">27001:2013</span>
              <span className="text-[7px] font-[600] text-slate-500 uppercase leading-none mt-0.5">COMPANY</span>
            </div>

            {/* 3. GCCI */}
            <div className="shrink-0 w-20 h-20 rounded-full border-2 border-blue-900 flex flex-col items-center justify-center p-1 text-center bg-white shadow-xs">
              <span className="text-[6.5px] font-[800] text-blue-900 uppercase leading-none">GUJARAT CHAMBER</span>
              <span className="text-[13px] font-[900] text-blue-950 uppercase leading-tight my-0.5">GCCI</span>
              <span className="text-[6.5px] font-[800] text-blue-900 uppercase leading-none">& INDUSTRY</span>
            </div>

            {/* 4. Top Web Dev */}
            <div className="shrink-0 w-16 h-22 bg-[#006B8F] text-white rounded-[6px] flex flex-col items-center justify-center p-2 text-center shadow-xs">
              <span className="text-[8px] font-bold text-cyan-200">2026 INDIA</span>
              <span className="text-[9.5px] font-[900] leading-tight mt-1">WEB DEVELOPMENT</span>
              <span className="text-[7px] text-cyan-200 mt-1">TOP COMPANY</span>
            </div>

            {/* 5. Top Mobile App */}
            <div className="shrink-0 w-16 h-22 bg-[#004A75] text-white rounded-[6px] flex flex-col items-center justify-center p-2 text-center shadow-xs">
              <span className="text-[8px] font-bold text-cyan-200">2026 INDIA</span>
              <span className="text-[9.5px] font-[900] leading-tight mt-1">MOBILE APP DEV</span>
              <span className="text-[7px] text-cyan-200 mt-1">TOP COMPANY</span>
            </div>

            {/* 6. SoftwareWorld Top Rated */}
            <div className="shrink-0 w-20 h-20 rounded-full border-2 border-blue-600 bg-blue-50/60 flex flex-col items-center justify-center p-1 text-center shadow-xs">
              <span className="text-[7px] font-[800] text-blue-900 uppercase leading-none">TOP RATED</span>
              <span className="text-[9px] font-[900] text-[#006B8F] leading-tight my-0.5">App Development</span>
              <span className="text-[7px] font-[800] text-slate-600 uppercase leading-none">SOFTWAREWORLD</span>
            </div>

            {/* 7. Clutch Top Company */}
            <div className="shrink-0 w-16 h-22 border border-slate-300 rounded-[6px] bg-white flex flex-col items-center justify-center p-1.5 text-center shadow-xs">
              <span className="text-[13px] font-[900] text-slate-900 font-sans">Clutch</span>
              <span className="text-[7px] font-[700] text-slate-500 uppercase mt-0.5">TOP COMPANY</span>
              <span className="text-[7.5px] font-[800] text-[#006B8F] uppercase mt-0.5">Development</span>
              <span className="text-[6.5px] text-slate-400">INDIA</span>
            </div>

            {/* 8-14. 7x Red Ribbon Shields */}
            {[
              'SOFTWARE DEVELOPERS',
              'IPHONE APP DEVELOPMENT COMPANY',
              'E-COMMERCE DEVELOPERS',
              'BLOCKCHAIN COMPANY',
              'APP DEVELOPMENT COMPANY',
              'DESIGN COMPANY',
              'WEB DEVELOPERS'
            ].map((ribbon, idx) => (
              <div
                key={idx}
                className="shrink-0 w-16 h-24 bg-white border border-rose-300 rounded-t-[6px] flex flex-col items-center justify-between p-2 text-center shadow-xs relative"
              >
                <span className="text-[6.5px] font-[800] text-rose-800 uppercase leading-none">MOST REVIEWED</span>
                <span className="text-[7.5px] font-[900] text-slate-800 leading-tight line-clamp-2 uppercase my-1">{ribbon}</span>
                <div className="flex items-center space-x-0.5 text-rose-600 text-[10px] leading-none">
                  <span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. MAIN LOWER SECTION WITH BACKGROUND COLOR (#edf5f9) - FULL WIDTH */}
      <div className="w-full bg-[#edf5f9] mt-8 pt-8 pb-4 border-t border-slate-200/80">
        <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-4 items-start text-left">
          
          {/* LEFT GROUP (Col 5 / 12) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* firevy.co Brand Logo */}
            <Link to="/" className="inline-block">
              <img
                src="/firevy_logo_dark.png"
                alt="firevy.co"
                className="h-10 sm:h-12 w-auto max-w-[220px] object-contain"
              />
            </Link>

            {/* Two Contact Cards Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Contact For Sales */}
              <div className="bg-white rounded-[16px] p-5 border border-slate-200/90 shadow-sm space-y-3 min-h-[145px] flex flex-col justify-between">
                <div className="text-[16px] font-[800] text-slate-900 font-sans">
                  Contact For Sales
                </div>
                <div className="space-y-2 text-[12.5px] text-slate-700 font-sans">
                  <a href="mailto:contact@firevy.co" className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors">
                    <Mail className="w-4 h-4 text-[#0080B0] shrink-0" />
                    <span className="truncate font-[500]">contact@firevy.co</span>
                  </a>
                  <a href="tel:+919429709662" className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors">
                    <Phone className="w-4 h-4 text-[#0080B0] shrink-0" />
                    <span className="font-[600]">IN:+91-942-970-9662</span>
                  </a>
                  <a href="tel:+17542587670" className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors">
                    <Phone className="w-4 h-4 text-[#0080B0] shrink-0" />
                    <span className="font-[600]">US:+1-754-258-7670</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Contact for Career (Jobs) */}
              <div className="bg-white rounded-[16px] p-5 border border-slate-200/90 shadow-sm space-y-3 min-h-[145px] flex flex-col justify-between">
                <div className="text-[16px] font-[800] text-slate-900 font-sans">
                  Contact for Career (Jobs)
                </div>
                <div className="space-y-2 text-[12.5px] text-slate-700 font-sans">
                  <a href="mailto:careers@firevy.co" className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors">
                    <Mail className="w-4 h-4 text-[#0080B0] shrink-0" />
                    <span className="truncate font-[500]">careers@firevy.co</span>
                  </a>
                  <a href="tel:+919099976034" className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors">
                    <Phone className="w-4 h-4 text-[#0080B0] shrink-0" />
                    <span className="font-[600]">+91-909-997-6034</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Three Rating Badges (Google, Clutch, GoodFirms) */}
            <div className="grid grid-cols-3 gap-3">
              {/* Google */}
              <div className="bg-white rounded-[16px] p-3.5 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center">
                <span className="text-[15px] font-[900] text-slate-900 font-sans">Google</span>
                <div className="text-blue-600 text-[13px] my-0.5 tracking-tight">★★★★★</div>
                <span className="text-[10px] font-[800] text-slate-800 font-sans tracking-tight">900+ REVIEWS</span>
              </div>

              {/* Clutch */}
              <div className="bg-white rounded-[16px] p-3.5 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center">
                <span className="text-[15px] font-[900] text-slate-900 font-sans">Clutch</span>
                <div className="text-blue-600 text-[13px] my-0.5 tracking-tight">★★★★★</div>
                <span className="text-[10px] font-[800] text-slate-800 font-sans tracking-tight">320+ REVIEWS</span>
              </div>

              {/* GoodFirms */}
              <div className="bg-white rounded-[16px] p-3.5 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center">
                <span className="text-[14px] font-[900] text-[#006B8F] font-sans">GoodFirms</span>
                <div className="text-blue-600 text-[13px] my-0.5 tracking-tight">★★★★★</div>
                <span className="text-[10px] font-[800] text-slate-800 font-sans tracking-tight">200+ REVIEWS</span>
              </div>
            </div>

            {/* Compliance Badges & Circular Social Icons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center space-x-2 text-[9px] font-[700]">
                <span className="px-2 py-0.5 bg-[#FFF176] text-slate-900 border border-amber-300 font-mono text-[8.5px] rounded-[3px]">W3C XHTML 1.0</span>
                <span className="px-2 py-0.5 bg-[#81C784] text-slate-900 border border-green-400 text-[8.5px] rounded-[3px]">DMCA PROTECTED</span>
                <span className="px-2 py-0.5 bg-[#90CAF9] text-slate-900 border border-blue-300 text-[8.5px] rounded-[3px]">COPYSCAPE</span>
                <span className="px-2 py-0.5 bg-[#FFF59D] text-slate-900 border border-amber-300 font-mono text-[8.5px] rounded-[3px]">W3C CSS</span>
              </div>

              <div className="flex items-center space-x-2">
                {[
                  { name: 'FB', href: 'https://facebook.com', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { name: 'X', href: 'https://twitter.com', path: 'M4 4l6.5 8.5L4 20h2l5.5-6.5L16 20h4l-7-9 6-7h-2l-5 6L8 4z' },
                  { name: 'IN', href: 'https://linkedin.com', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                  { name: 'IG', href: 'https://instagram.com', path: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6z' },
                  { name: 'YT', href: 'https://youtube.com', path: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z' }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0080B0] hover:bg-[#006B8F] text-white flex items-center justify-center transition-colors shadow-xs"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" fill="none">
                      <path d={item.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT GROUP: 6 GLOBAL OFFICES GRID — TALL SPACIOUS CARDS (Col 7 / 12) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* 1. India(HQ) */}
              <div className="bg-white rounded-[18px] p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-[180px] sm:h-[190px] relative overflow-hidden group hover:border-[#006B8F]/40 transition-colors">
                <div>
                  <div className="font-[800] text-slate-900 text-[16px] mb-2 font-sans flex items-center space-x-2">
                    <span className="text-xl">🇮🇳</span>
                    <span>India(HQ)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[12.5px] font-[400] font-sans pr-14">
                    C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, S.G. Highway, Ahmedabad - 380060, Gujarat, INDIA
                  </p>
                </div>
                {/* Statue of Unity sketch */}
                <div className="absolute right-3 bottom-2 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity">
                  <svg viewBox="0 0 50 80" className="w-14 h-24" fill="none" stroke="#334155" strokeWidth="1.2">
                    <circle cx="25" cy="14" r="6" />
                    <path d="M18 20 L32 20 L36 48 L33 76 L17 76 L14 48 Z" />
                    <line x1="25" y1="20" x2="25" y2="76" strokeDasharray="2 2" />
                    <line x1="8" y1="78" x2="42" y2="78" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* 2. USA */}
              <div className="bg-white rounded-[18px] p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-[180px] sm:h-[190px] relative overflow-hidden group hover:border-[#006B8F]/40 transition-colors">
                <div>
                  <div className="font-[800] text-slate-900 text-[16px] mb-2 font-sans flex items-center space-x-2">
                    <span className="text-xl">🇺🇸</span>
                    <span>USA</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[12.5px] font-[400] font-sans pr-16">
                    5004 NW 116th Ave Coral Springs, Florida, FL 33076
                  </p>
                </div>
                {/* USA Skyline sketch */}
                <div className="absolute right-3 bottom-2 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity">
                  <svg viewBox="0 0 60 80" className="w-20 h-24" fill="none" stroke="#334155" strokeWidth="1.2">
                    <rect x="6" y="32" width="12" height="46" />
                    <rect x="22" y="12" width="16" height="66" />
                    <line x1="30" y1="4" x2="30" y2="12" strokeWidth="1.5" />
                    <rect x="42" y="26" width="14" height="52" />
                    <line x1="2" y1="78" x2="58" y2="78" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* 3. Canada */}
              <div className="bg-white rounded-[18px] p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-[180px] sm:h-[190px] relative overflow-hidden group hover:border-[#006B8F]/40 transition-colors">
                <div>
                  <div className="font-[800] text-slate-900 text-[16px] mb-2 font-sans flex items-center space-x-2">
                    <span className="text-xl">🇨🇦</span>
                    <span>Canada</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[12.5px] font-[400] font-sans pr-16">
                    111 Tarawood lane NE, unit#403 Calgary AB, T3J 0G8
                  </p>
                </div>
                {/* CN Tower & Skyline sketch */}
                <div className="absolute right-3 bottom-2 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity">
                  <svg viewBox="0 0 60 80" className="w-20 h-24" fill="none" stroke="#334155" strokeWidth="1.2">
                    <line x1="28" y1="4" x2="28" y2="78" strokeWidth="2" />
                    <circle cx="28" cy="24" r="6" />
                    <rect x="6" y="38" width="14" height="40" />
                    <rect x="38" y="30" width="16" height="48" />
                    <line x1="2" y1="78" x2="58" y2="78" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* 4. Australia */}
              <div className="bg-white rounded-[18px] p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-[180px] sm:h-[190px] relative overflow-hidden group hover:border-[#006B8F]/40 transition-colors">
                <div>
                  <div className="font-[800] text-slate-900 text-[16px] mb-2 font-sans flex items-center space-x-2">
                    <span className="text-xl">🇦🇺</span>
                    <span>Australia</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[12.5px] font-[400] font-sans pr-16">
                    U 2B 305 Harborne Street, Glendalough 6016 WA
                  </p>
                </div>
                {/* Sydney Opera House sketch */}
                <div className="absolute right-3 bottom-2 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity">
                  <svg viewBox="0 0 60 80" className="w-20 h-24" fill="none" stroke="#334155" strokeWidth="1.2">
                    <path d="M4 76 C12 60 22 55 30 76" />
                    <path d="M16 76 C24 50 34 46 44 76" />
                    <line x1="50" y1="14" x2="50" y2="76" strokeWidth="2" />
                    <circle cx="50" cy="26" r="4" />
                    <line x1="2" y1="78" x2="58" y2="78" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* 5. UK */}
              <div className="bg-white rounded-[18px] p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-[180px] sm:h-[190px] relative overflow-hidden group hover:border-[#006B8F]/40 transition-colors">
                <div>
                  <div className="font-[800] text-slate-900 text-[16px] mb-2 font-sans flex items-center space-x-2">
                    <span className="text-xl">🇬🇧</span>
                    <span>UK</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[12.5px] font-[400] font-sans pr-16">
                    42 Audley Avenue, Gillingham, ME73AY United Kingdom
                  </p>
                </div>
                {/* Big Ben & London Eye sketch */}
                <div className="absolute right-3 bottom-2 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity">
                  <svg viewBox="0 0 60 80" className="w-20 h-24" fill="none" stroke="#334155" strokeWidth="1.2">
                    <rect x="8" y="18" width="12" height="60" />
                    <path d="M8 18 L14 6 L20 18 Z" />
                    <circle cx="14" cy="26" r="3" />
                    <circle cx="42" cy="48" r="14" />
                    <line x1="42" y1="48" x2="42" y2="78" strokeWidth="2" />
                    <line x1="2" y1="78" x2="58" y2="78" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* 6. UAE */}
              <div className="bg-white rounded-[18px] p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-[180px] sm:h-[190px] relative overflow-hidden group hover:border-[#006B8F]/40 transition-colors">
                <div>
                  <div className="font-[800] text-slate-900 text-[16px] mb-2 font-sans flex items-center space-x-2">
                    <span className="text-xl">🇦🇪</span>
                    <span>UAE</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[12.5px] font-[400] font-sans pr-16">
                    A-21, Building 21, Ghoroob, Mirdif Dubai, United Arab Emirates
                  </p>
                </div>
                {/* Burj Khalifa sketch */}
                <div className="absolute right-3 bottom-2 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity">
                  <svg viewBox="0 0 60 80" className="w-20 h-24" fill="none" stroke="#334155" strokeWidth="1.2">
                    <path d="M12 76 C18 55 18 40 10 32 C24 36 28 55 30 76" />
                    <line x1="46" y1="4" x2="46" y2="76" strokeWidth="2" />
                    <rect x="42" y="24" width="8" height="52" />
                    <rect x="38" y="44" width="16" height="32" />
                    <line x1="2" y1="78" x2="58" y2="78" strokeWidth="2" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      </div>

      {/* 4. SOLID BLUE COPYRIGHT BAR ACROSS FULL WIDTH */}
      <div className="bg-[#006B8F] text-white py-3.5 px-4 sm:px-8 xl:px-10 mt-0 w-full">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[13px] font-sans">
          <div>
            © {currentYear} firevy.co. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0 text-blue-100">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>

      {/* Floating Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#006B8F] hover:bg-[#005478] text-white shadow-xl transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
