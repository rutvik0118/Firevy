import React from 'react';
import Container from './Container';
import { FileText, Contact2, HelpCircle, UserCheck } from 'lucide-react';

export const HireDeveloper4Steps = ({
  techName = "Blockchain Developer",
  title,
  subtitle
}) => {
  const displayTitle = title || `Hire ${techName} In 4 Easy Steps`;
  const displaySubtitle = subtitle || `${techName} offers a number of advantages over another platform. Some of them are:`;
  const steps = [
    {
      stepNum: "Step 01",
      title: "Send Us Your Detailed Project Requirement",
      icon: FileText,
    },
    {
      stepNum: "Step 02",
      title: "Select Candidate for Screening Process",
      icon: Contact2,
    },
    {
      stepNum: "Step 03",
      title: "Take Interview of Selected Candidates",
      icon: HelpCircle,
    },
    {
      stepNum: "Step 04",
      title: "Initiate Project On-Boarding & Assign",
      icon: UserCheck,
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F2F9FD] text-slate-900 font-sans border-b border-slate-100 overflow-hidden text-center select-none">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight mb-3">
            {displayTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {displaySubtitle}
          </p>
        </div>

        {/* 4 Easy Steps Looping Graphic Container */}
        <div className="relative max-w-5xl mx-auto mb-8">
          
          {/* Outer Looping Racetrack SVG (Desktop & Tablet) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 920 340" fill="none" preserveAspectRatio="none">
              {/* Top Half Track (Light Sky Blue) */}
              <path
                d="M 60 170 C 60 60, 140 30, 240 30 L 680 30 C 780 30, 860 60, 860 170"
                stroke="#BEE3F8"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Arrow on right going down */}
              <path d="M 860 185 L 850 160 L 870 160 Z" fill="#BEE3F8" />
              {/* Arrow on left going up */}
              <path d="M 60 155 L 50 180 L 70 180 Z" fill="#006095" />

              {/* Bottom Half Track (Dark Ocean Blue) */}
              <path
                d="M 860 170 C 860 280, 780 300, 680 300 L 240 300 C 140 300, 60 280, 60 170"
                stroke="#006095"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Left arrows near bottom return track */}
              <path d="M 260 300 L 280 290 L 280 310 Z" fill="#006095" />
              <path d="M 660 300 L 680 290 L 680 310 Z" fill="#006095" />
            </svg>
          </div>

          {/* Steps Content Body */}
          <div className="relative z-10 py-4 px-4 md:px-10">
            
            {/* Top Row: 4 Circular Badges */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 mb-2 text-center">
              {steps.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Circle Icon Badge */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#006095] text-white flex items-center justify-center shadow-md border-4 border-white mb-2 transition-transform hover:scale-105">
                      <IconComp className="w-8 h-8 stroke-[2]" />
                    </div>

                    {/* Upward Connector Arrow */}
                    <div className="hidden md:flex flex-col items-center text-[#006095]">
                      <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 21V3M8 3L2 9M8 3L14 9" stroke="#006095" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Middle Row: Connected Colored Chevron Arrow Ribbon Banner */}
            <div className="my-2 hidden md:block">
              <div className="flex items-center rounded-lg overflow-visible shadow-sm">
                {steps.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 py-4 text-center relative flex items-center justify-center text-white font-[900] text-base sm:text-lg tracking-wide bg-[#006095] ${
                      idx === 0 ? 'rounded-l-md' : ''
                    }`}
                    style={{
                      clipPath: idx === 0
                        ? 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                        : 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)',
                      marginLeft: idx > 0 ? '-14px' : '0',
                      zIndex: 10 - idx
                    }}
                  >
                    <span className={idx > 0 ? 'pl-3' : ''}>{item.stepNum}</span>
                  </div>
                ))}
                {/* Ghost End Arrow */}
                <div
                  className="w-12 h-14 bg-[#BEE3F8] shrink-0"
                  style={{
                    clipPath: 'polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%, 40% 50%)',
                    marginLeft: '-10px'
                  }}
                />
              </div>
            </div>

            {/* Bottom Row: Step Descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 text-center pt-3">
              {steps.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Step Num for Mobile view */}
                  <span className="md:hidden inline-block bg-[#006095] text-white font-[900] text-xs px-3 py-1 rounded-full mb-1.5">
                    {item.stepNum}
                  </span>
                  <h3 className="text-xs sm:text-[14px] font-[800] text-[#006095] leading-snug max-w-[200px]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Loop Bottom "NOT SATISFIED?" Pill */}
            <div className="mt-8 sm:mt-10 text-center relative z-20">
              <div className="inline-block bg-[#CBE8F6] border-2 border-[#006095] text-[#006095] font-[900] text-xs sm:text-[13px] px-8 py-2 rounded-full shadow-sm tracking-wider uppercase">
                NOT SATISFIED?
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-2">
          <a
            href="#quote-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('quote-form') || document.getElementById('contact-quote');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/contact';
              }
            }}
            className="inline-block bg-[#006095] hover:bg-[#004f7a] text-white font-[900] text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            Talk With Our Expert Now
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HireDeveloper4Steps;

