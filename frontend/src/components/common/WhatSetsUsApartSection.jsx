import React, { useState } from 'react';
import Container from './Container';

// 5 Outline Vector SVG Icons matching Sapphire Solutions reference screenshot 1:1
const FlexibleIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 14 36 C 14 36 20 31 24 31 C 28 31 34 36 34 36" />
    <path d="M 16 39 C 16 35 20 32 24 32 C 28 32 32 35 32 39" />
    <circle cx="24" cy="21" r="4" />
    <path d="M 17 22 C 14 22 12 20 12 17" />
    <circle cx="11" cy="16" r="3" />
    <path d="M 31 22 C 34 22 36 20 36 17" />
    <circle cx="37" cy="16" r="3" />
    <path d="M 10 40 L 24 35 L 38 40" />
  </svg>
);

const TransparencyIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="19" cy="24" r="11" />
    <circle cx="29" cy="24" r="11" />
    <path d="M 22 16 L 26 32 M 18 20 L 29 28 M 18 28 L 29 20" strokeWidth="1.5" />
  </svg>
);

const DevelopersIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="18" r="4.5" />
    <path d="M 16 28 C 16 23 20 22 24 22 C 28 22 32 23 32 28" />
    <path d="M 20 13.5 C 20 11.5 28 11.5 28 13.5" />
    <rect x="8" y="28" width="32" height="13" rx="2" />
    <path d="M 16 36 L 14 38 M 32 36 L 34 38 M 22 38 H 26" />
    <path d="M 19 33.5 L 17 35.5 L 19 37.5 M 29 33.5 L 31 35.5 L 29 37.5 M 23 37.5 L 25 33.5" strokeWidth="1.5" />
  </svg>
);

const TimelyIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="26" r="13" />
    <path d="M 24 18 V 26 L 29 29" strokeWidth="2.2" />
    <path d="M 19 8 H 29 M 24 8 V 13" />
    <path d="M 12 14 L 15 17" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="21" r="6" />
    <path d="M 24 11 V 13 M 24 29 V 31 M 14 21 H 16 M 32 21 H 34" />
    <path d="M 17 14 L 18.5 15.5 M 29.5 26.5 L 31 28 M 31 14 L 29.5 15.5 M 18.5 26.5 L 17 28" />
    <path d="M 12 37 C 18 33, 30 33, 36 37" />
    <path d="M 10 40 L 24 35 L 38 40" />
  </svg>
);

const pillarList = [
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

export const WhatSetsUsApartSection = ({
  title = "What Sets Us Apart As Healthcare App Development Company?",
  subtitle = "Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
}) => {
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
    <section className="py-14 sm:py-16 bg-[#F4F8FA] text-slate-900 text-left font-sans border-b border-slate-200">
      {/* Full Width Edge-to-Edge Centered Header */}
      <div className="text-center w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto mb-10 sm:mb-12 space-y-3">
        <h2
          className="text-slate-900 tracking-tight section-content-title"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: '34px',
            lineHeight: '41px'
          }}
        >
          {title}
        </h2>
        <p
          className="text-slate-600 section-content-desc max-w-4xl mx-auto"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '26px'
          }}
        >
          Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors.
        </p>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: 5 Pillar Items */}
          <div className="lg:col-span-7 space-y-6">
            {pillarList.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.id} className="flex items-start space-x-4 group">
                  {/* Light Grey Round-Cornered Icon Box */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <IconComp />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1 font-sans">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: "Let's Discuss" Contact Form Card */}
          <div className="lg:col-span-5 relative">
            {/* Corner Ribbon Triangle Accent on Top-Left Edge */}
            <div className="absolute -top-3 -left-3 z-30 pointer-events-none">
              <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
                <path d="M 0 36 L 0 0 L 36 0 Z" fill="#005F96" />
              </svg>
            </div>

            {/* Right Side Arrow Pointer Notch Accent */}
            <div className="hidden lg:block absolute -right-3 top-[68%] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-[#005F96] z-30 pointer-events-none" />
            
            {/* White Floating Form Card */}
            <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)] font-sans overflow-hidden">
              <h3 className="text-xl font-bold text-slate-900 text-center font-sans mb-6">
                Let's Discuss
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 text-emerald-800 text-center space-y-2 border border-emerald-200 font-sans">
                  <h4 className="font-bold text-lg">Thank You!</h4>
                  <p className="text-xs sm:text-sm">Your inquiry has been submitted successfully. Our healthcare technology experts will reach out to you within 24 hours.</p>
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
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all font-sans"
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
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all font-sans"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="flex items-center space-x-2">
                    <div className="px-3 py-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shrink-0 font-sans">
                      +91 ▾
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all font-sans"
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
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Cloudflare Captcha Widget Mock */}
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-xs font-bold text-slate-700 font-sans">Success!</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans text-right">
                      <span className="font-bold text-orange-600 block">CLOUDFLARE</span>
                      <span>Privacy - Help</span>
                    </div>
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004b78] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 font-sans"
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

export default WhatSetsUsApartSection;
