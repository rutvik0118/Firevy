import React from 'react';
import Container from '../common/Container';

export const FeaturedInLogosGrid = () => {
  const logos = [
    // Row 1
    {
      id: 'microsoft',
      content: (
        <div className="grid grid-cols-2 gap-1.5 w-14 h-14">
          <div className="bg-[#94A3B8] rounded-[2px]" />
          <div className="bg-[#94A3B8] rounded-[2px]" />
          <div className="bg-[#94A3B8] rounded-[2px]" />
          <div className="bg-[#94A3B8] rounded-[2px]" />
        </div>
      )
    },
    {
      id: 'inc',
      content: (
        <span className="text-[34px] font-[900] text-slate-900 font-serif tracking-tight">
          Inc.
        </span>
      )
    },
    {
      id: 'google-play',
      content: (
        <div className="flex items-center space-x-2">
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
            <path d="M4 3.5L14.5 12L4 20.5V3.5Z" fill="#64748B" />
            <path d="M14.5 12L18.5 8L4 3.5L14.5 12Z" fill="#94A3B8" />
            <path d="M14.5 12L18.5 16L4 20.5L14.5 12Z" fill="#475569" />
            <path d="M18.5 8L21 10.5C21.8 11.2 21.8 12.8 21 13.5L18.5 16L14.5 12L18.5 8Z" fill="#334155" />
          </svg>
          <span className="text-[15px] font-[800] text-slate-800 font-sans tracking-tight">Google Play</span>
        </div>
      )
    },
    {
      id: 'app-store',
      content: (
        <div className="flex items-center space-x-2">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-slate-900">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.13 16.69C20.11 16.77 19.71 18.14 18.71 19.5ZM15.03 4.54C15.69 3.73 16.13 2.61 16.01 1.5C15.05 1.54 13.88 2.14 13.19 2.95C12.58 3.66 12.05 4.8 12.19 5.89C13.26 5.97 14.37 5.35 15.03 4.54Z" />
          </svg>
          <span className="text-[15px] font-[800] text-slate-900 font-sans tracking-tight">App Store</span>
        </div>
      )
    },
    {
      id: 'forbes',
      content: (
        <div className="bg-[#475569] px-4 py-2 rounded-[4px]">
          <span className="text-[20px] font-[900] text-white font-serif tracking-wider uppercase">
            Forbes
          </span>
        </div>
      )
    },
    {
      id: 'bbb',
      content: (
        <div className="flex flex-col items-center leading-none">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-slate-700 mb-1">
            <path d="M12 2L13.5 6.5C14.5 9.5 16 11 19 12C16 13 14.5 14.5 13.5 17.5L12 22L10.5 17.5C9.5 14.5 8 13 5 12C8 11 9.5 9.5 10.5 6.5L12 2Z" />
          </svg>
          <span className="text-[18px] font-[900] text-slate-800 font-sans tracking-tight">BBB</span>
          <span className="text-[8px] font-[700] text-slate-500 uppercase tracking-tight">Start With Trust</span>
        </div>
      )
    },

    // Row 2
    {
      id: 'yourstory',
      content: (
        <span className="text-[18px] sm:text-[20px] font-[900] text-slate-800 font-sans tracking-widest uppercase">
          YOURSTORY
        </span>
      )
    },
    {
      id: 'wikipedia',
      content: (
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-16 h-16">
            <circle cx="20" cy="20" r="17" fill="none" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M13 27L17 13H19L23 27M14 23H22" stroke="#334155" strokeWidth="1.8" fill="none" />
            <path d="M21 27L25 13H27L31 27M22 23H30" stroke="#334155" strokeWidth="1.8" fill="none" />
          </svg>
        </div>
      )
    },
    {
      id: 'entrepreneur',
      content: (
        <span className="text-[18px] sm:text-[20px] font-[800] text-slate-900 font-serif tracking-tight">
          Entrepreneur
        </span>
      )
    },
    {
      id: 'mashable',
      content: (
        <span className="text-[20px] sm:text-[22px] font-[900] text-slate-600 font-sans tracking-tight">
          Mashable
        </span>
      )
    },
    {
      id: 'capterra',
      content: (
        <div className="flex items-center space-x-1.5">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-700">
            <path d="M2 12L22 2L13 22L11 13L2 12Z" />
          </svg>
          <span className="text-[16px] font-[800] text-slate-800 font-sans">Capterra</span>
        </div>
      )
    },
    {
      id: 'cnet',
      content: (
        <span className="text-[28px] sm:text-[32px] font-[900] text-slate-900 font-sans tracking-tighter">
          c|net
        </span>
      )
    },

    // Row 3
    {
      id: 'nytimes',
      content: (
        <span className="text-[13px] sm:text-[14px] font-[900] text-slate-900 font-serif tracking-tight text-center leading-snug">
          The New York Times
        </span>
      )
    },
    {
      id: 'techcrunch',
      content: (
        <div className="flex items-center justify-center bg-[#64748B] w-16 h-12 rounded-[4px]">
          <span className="text-[24px] font-[900] text-white font-sans tracking-tighter">TC</span>
        </div>
      )
    },
    {
      id: 'clutch',
      content: (
        <div className="flex items-center space-x-0.5 font-[900] text-[24px] sm:text-[26px] tracking-tight text-slate-900 font-sans">
          <span>Clut</span>
          <span className="relative">
            <span>c</span>
            <span className="absolute -top-1 right-0.5 w-2 h-2 rounded-full bg-red-500 inline-block" />
          </span>
          <span>h</span>
        </div>
      )
    },
    {
      id: 'pcmag',
      content: (
        <div className="bg-[#475569] w-14 h-14 rounded-[4px] flex flex-col items-center justify-center text-center">
          <div className="text-[20px] font-[900] text-white font-sans leading-none">PC</div>
          <div className="text-[7.5px] font-[700] text-slate-200 uppercase tracking-tighter font-sans leading-tight mt-0.5">PCMAG.COM</div>
        </div>
      )
    },
    {
      id: 'g2crowd',
      content: (
        <div className="flex items-center space-x-1.5">
          <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-[12px] font-[900] text-white">
            G2
          </div>
          <span className="text-[14px] font-[800] text-slate-800 font-sans tracking-wide">CROWD</span>
        </div>
      )
    },
    {
      id: 'telegraph',
      content: (
        <span className="text-[14px] sm:text-[16px] font-[900] text-slate-900 font-serif tracking-tight text-center">
          The Telegraph
        </span>
      )
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100 text-slate-900 relative font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 font-sans">
            We Have Been Featured In
          </h2>
        </div>

        {/* 6-Column x 3-Row Grid of 18 Exact 1:1 SQUARE Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-5">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="aspect-square bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-[#006B8F]/40 transition-all duration-300 flex items-center justify-center p-4 group cursor-pointer"
            >
              <div className="group-hover:scale-105 transition-transform flex items-center justify-center text-center">
                {logo.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInLogosGrid;
