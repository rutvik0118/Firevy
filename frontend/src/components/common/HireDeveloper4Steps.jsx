import React from 'react';
import Container from './Container';
import { FileText, UserCheck, MessageSquare, UserPlus, ArrowUp } from 'lucide-react';

export const HireDeveloper4Steps = ({
  title = "Hire C# Developer In 4 Easy Steps",
  subtitle = "C# offers a number of advantages over another platform. Some of them are:"
}) => {
  const steps = [
    {
      stepNum: "Step 01",
      title: "Send Us Your Detailed Project Requirement",
      icon: FileText
    },
    {
      stepNum: "Step 02",
      title: "Select Candidate for Screening Process",
      icon: UserPlus
    },
    {
      stepNum: "Step 03",
      title: "Take Interview of Selected Candidates",
      icon: MessageSquare
    },
    {
      stepNum: "Step 04",
      title: "Initiate Project On-Boarding & Assign",
      icon: UserCheck
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans border-b border-slate-200 overflow-hidden">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight mb-2">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-[400]">
            {subtitle}
          </p>
        </div>

        {/* 4 Easy Steps Diagram Graphic */}
        <div className="relative max-w-5xl mx-auto mb-12">
          
          {/* Outer Looping SVG Track Ellipse & Arrows (Desktop & Tablet) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 900 320" fill="none" preserveAspectRatio="none">
              {/* Outer Loop Ellipse */}
              <path
                d="M 120 70 L 780 70 C 850 70, 870 160, 780 240 L 120 240 C 30 240, 50 70, 120 70 Z"
                stroke="#7DD3FC"
                strokeWidth="3"
                fill="none"
              />
              {/* Left Arrow Up */}
              <path d="M 46 160 L 52 145 L 58 160" stroke="#005F96" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* Right Arrow Down */}
              <path d="M 854 160 L 848 175 L 842 160" stroke="#005F96" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Steps Content Grid */}
          <div className="relative z-10 py-6 px-4">
            
            {/* Top Row: 4 Blue Icon Circles with Upward Arrows */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 mb-4 text-center">
              {steps.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Circle Icon Badge */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#006095] text-white flex items-center justify-center shadow-lg border-4 border-white mb-3 group hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2]" />
                    </div>

                    {/* Upward Connector Arrow Pointer */}
                    <div className="hidden md:flex flex-col items-center text-[#006095]">
                      <ArrowUp className="w-5 h-5 stroke-[3] -mb-1 animate-pulse" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Middle Row: Connected Dark Blue Chevron Arrow Banner */}
            <div className="my-3 hidden md:block">
              <div className="flex items-center rounded-lg overflow-hidden shadow-md bg-[#006095] text-white font-[900] text-sm sm:text-base">
                {steps.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 py-4 text-center relative border-r border-[#0284C7]/40 flex items-center justify-center ${
                      idx === 0 ? 'rounded-l-lg' : ''
                    }`}
                  >
                    <span>{item.stepNum}</span>
                    {/* Chevron Arrow Pointer between steps */}
                    {idx < 3 && (
                      <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center translate-x-1/2 pointer-events-none">
                        <div className="w-0 h-0 border-y-[24px] border-y-transparent border-l-[16px] border-l-[#006095]" />
                      </div>
                    )}
                  </div>
                ))}
                {/* Right Arrow End Pointer */}
                <div className="w-0 h-0 border-y-[26px] border-y-transparent border-l-[20px] border-l-[#7DD3FC] shrink-0" />
              </div>
            </div>

            {/* Bottom Row: Step Titles & Descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 text-center pt-2">
              {steps.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-1">
                  {/* Step Num Badge for Mobile */}
                  <span className="md:hidden inline-block bg-[#006095] text-white font-[900] text-xs px-3 py-1 rounded-full mb-1">
                    {item.stepNum}
                  </span>
                  <h3 className="text-xs sm:text-sm font-[800] text-[#006095] leading-snug max-w-[200px]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Loop Bottom "NOT SATISFIED?" Pill */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-[#E0F2FE] border-2 border-[#006095] text-[#006095] font-[900] text-xs sm:text-sm px-6 py-2 rounded-full shadow-sm">
                NOT SATISFIED?
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <a
            href="#quote-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('quote-form');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/contact';
              }
            }}
            className="inline-block bg-[#006095] hover:bg-[#004B77] text-white font-[800] text-sm sm:text-base px-8 sm:px-10 py-3.5 rounded-lg shadow-md transition-all hover:scale-105"
          >
            Talk With Our Expert Now
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HireDeveloper4Steps;
