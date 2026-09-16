import React, { useState } from 'react';
import Container from '../common/Container';

// 5 Vector SVG Icons matching reference screenshot 100% pixel-perfect
const FlexibleIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Dotted circle enclosing the 3 team members */}
    <circle cx="25" cy="17" r="10.5" strokeDasharray="2.5 2" strokeWidth="1.3" />
    
    {/* Center user avatar */}
    <circle cx="25" cy="13.5" r="2.6" />
    <path d="M19.5 21 C19.5 18.5 30.5 18.5 30.5 21" />
    
    {/* Left user avatar */}
    <circle cx="18" cy="16" r="2" />
    <path d="M15 21.5 C15 19.8 21 19.8 21 21.5" />
    
    {/* Right user avatar */}
    <circle cx="32" cy="16" r="2" />
    <path d="M29 21.5 C29 19.8 35 19.8 35 21.5" />
    
    {/* Supporting hand below */}
    <path d="M8 35.5 H16.5 L23 39.5 H36 C39.5 39.5 42 37 42 34.5 C42 32 39.5 30.5 35.5 30.5 H29" />
    <path d="M8 31.5 V40.5 H14" />
  </svg>
);

const TransparencyIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <clipPath id="hatchClipCircle">
        <circle cx="29" cy="24" r="12" />
      </clipPath>
    </defs>
    
    {/* Left clear circle */}
    <circle cx="19" cy="24" r="12" />
    
    {/* Right circle with clean diagonal hatching */}
    <g clipPath="url(#hatchClipCircle)">
      <circle cx="29" cy="24" r="12" />
      <line x1="12" y1="7" x2="46" y2="41" strokeWidth="1.4" />
      <line x1="16" y1="7" x2="50" y2="41" strokeWidth="1.4" />
      <line x1="20" y1="7" x2="54" y2="41" strokeWidth="1.4" />
      <line x1="24" y1="7" x2="58" y2="41" strokeWidth="1.4" />
      <line x1="28" y1="7" x2="62" y2="41" strokeWidth="1.4" />
      <line x1="8" y1="7" x2="42" y2="41" strokeWidth="1.4" />
      <line x1="4" y1="7" x2="38" y2="41" strokeWidth="1.4" />
    </g>
    <circle cx="29" cy="24" r="12" />
  </svg>
);

const DevelopersIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Cap & Visor */}
    <path d="M19 13.5 C19 9.5 29 9.5 29 13.5" />
    <path d="M16.5 14 H31.5" />
    
    {/* Head */}
    <circle cx="24" cy="17" r="4.2" />
    
    {/* Shoulders */}
    <path d="M15 28.5 C15 23 33 23 33 28.5" />
    
    {/* Computer monitor with </> code */}
    <rect x="13.5" y="28" width="21" height="13" rx="2" fill="white" />
    <path d="M18 34.5 L16 33 M18 34.5 L16 36" strokeWidth="1.8" />
    <path d="M30 33 L32 34.5 M30 36 L32 34.5" strokeWidth="1.8" />
    <line x1="23" y1="37" x2="25" y2="32" strokeWidth="1.4" />
    
    {/* Monitor base */}
    <line x1="11" y1="41" x2="37" y2="41" strokeWidth="2.2" />
  </svg>
);

const TimelyIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Clock circle */}
    <circle cx="25" cy="26" r="13" />
    
    {/* Top button stem */}
    <path d="M20 7 H30 M25 7 V13" strokeWidth="2" />
    
    {/* Clock hands pointing at 10:10 */}
    <polyline points="25,18 25,26 31,26" strokeWidth="2" />
    
    {/* Speed curve ticks on left */}
    <path d="M7 18 C9 15 11 14 14 13" strokeWidth="1.5" />
    <line x1="6" y1="26" x2="10" y2="26" strokeWidth="1.5" />
    <path d="M7 34 C9 37 11 38 14 39" strokeWidth="1.5" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Gear hub & circle */}
    <circle cx="25" cy="16.5" r="3.5" />
    <circle cx="25" cy="16.5" r="7" strokeWidth="1.5" />
    
    {/* Gear teeth */}
    <path d="M25 7 V9.5 M25 23.5 V26 M15.5 16.5 H18 M32 16.5 H34.5 M18.3 9.8 L20 11.5 M30 21.5 L31.7 23.2 M18.3 23.2 L20 21.5 M30 11.5 L31.7 9.8" strokeWidth="2.4" strokeLinecap="round" />
    
    {/* Supporting hand */}
    <path d="M8 35.5 H16.5 L23 39.5 H36 C39.5 39.5 42 37 42 34.5 C42 32 39.5 30.5 35.5 30.5 H29" />
    <path d="M8 31.5 V40.5 H14" />
  </svg>
);

const pillars = [
  {
    id: 1,
    title: 'Flexible-Engagement-Models',
    desc: 'Total customized and customer-centric engagement models facilitating hourly or fixed rate hiring of developers.',
    icon: FlexibleIcon
  },
  {
    id: 2,
    title: '100% Transparency',
    desc: '100% transparency policy to keep our client and our team on the same page.',
    icon: TransparencyIcon
  },
  {
    id: 3,
    title: 'Experienced Developers',
    desc: 'Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.',
    icon: DevelopersIcon
  },
  {
    id: 4,
    title: 'Timely Delivery',
    desc: 'We value the time and are particular about timely deliveries by following the highest quality standards.',
    icon: TimelyIcon
  },
  {
    id: 5,
    title: 'Technical Support',
    desc: 'Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.',
    icon: SupportIcon
  }
];

export const AndroidWhatSetsUsApartSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pt-4 pb-6 sm:pt-5 sm:pb-8 bg-white text-slate-900 text-left font-sans">
      {/* Centered Section Header */}
      <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-5 sm:mb-6 space-y-2">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight font-sans">
          What Sets Us Apart As Android App Development Company?
        </h2>
        <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
          Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors.
        </p>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: 5 Pillar Cards with Exact Icons */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.id} className="flex items-start space-x-4 group">
                  {/* Icon Container with rounded-2xl and clean shadow */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                    <IconComp />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1 font-sans pt-1">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-sans tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: "Let's Discuss" Contact Form Box */}
          <div className="lg:col-span-5 relative">
            {/* Top-Left Ribbon Triangle Accent */}
            <div 
              className="absolute -top-2 -left-2 w-0 h-0 border-t-[28px] border-t-[#005F96] border-r-[28px] border-r-transparent z-20 pointer-events-none drop-shadow-sm" 
            />
            {/* Bottom-Right Triangle Accent */}
            <div 
              className="absolute -bottom-2 -right-2 w-0 h-0 border-b-[28px] border-b-[#005F96] border-l-[28px] border-l-transparent z-20 pointer-events-none drop-shadow-sm" 
            />

            {/* White Form Card */}
            <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl font-sans">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 text-center font-sans mb-6">
                Let's Discuss
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 text-emerald-800 text-center space-y-2 border border-emerald-200 font-sans">
                  <h4 className="font-bold text-base">Thank You!</h4>
                  <p className="text-xs sm:text-sm">Your inquiry has been submitted successfully. Our Android development specialists will reach out to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 bg-[#005F96] text-white text-xs font-bold rounded-lg"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
                  {/* Your name */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/15 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition-all font-sans"
                    />
                  </div>

                  {/* Email ID */}
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email ID *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/15 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition-all font-sans"
                    />
                  </div>

                  {/* Mobile Number with Country Code */}
                  <div className="flex items-center space-x-2">
                    <div className="px-3.5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 shrink-0 font-sans">
                      +91 ▾
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/15 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition-all font-sans"
                    />
                  </div>

                  {/* Tell us more about your project */}
                  <div>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us more about your project *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/15 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Cloudflare Turnstile Mock */}
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-xs font-bold text-slate-700 font-sans">Success!</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-sans text-right">
                      {/* Cloudflare orange logo */}
                      <svg className="w-6 h-4 text-orange-500" viewBox="0 0 100 60" fill="currentColor">
                        <path d="M78 30 C78 20 70 12 60 12 C52 12 45 17 42 24 C39 22 35 20 30 20 C20 20 12 28 12 38 C12 39 12 40 12 41 C5 42 0 48 0 55 C0 63 7 70 15 70 H78 C88 70 96 62 96 52 C96 42 88 34 78 30 Z" />
                      </svg>
                      <div>
                        <span className="font-extrabold text-slate-800 block uppercase tracking-wider text-[9px]">CLOUDFLARE</span>
                        <span className="text-[8px] text-slate-400">Privacy • Help</span>
                      </div>
                    </div>
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#005F96] hover:bg-[#004B77] text-white text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-200 font-sans tracking-wide"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AndroidWhatSetsUsApartSection;
