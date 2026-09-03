import React, { useState } from 'react';
import Container from './Container';

// 5 Outline Vector SVG Icons matching Sapphire Solutions reference screenshot 1:1
const FlexibleIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 16 36 C 24 36 28 32 36 24" />
    <circle cx="16" cy="18" r="4" />
    <circle cx="28" cy="14" r="4" />
    <circle cx="36" cy="22" r="4" />
    <path d="M 10 38 C 10 38 18 34 26 34 C 34 34 40 40 40 40" />
  </svg>
);

const TransparencyIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
    <circle cx="20" cy="24" r="12" />
    <circle cx="28" cy="24" r="12" strokeDasharray="3 2" />
  </svg>
);

const DevelopersIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 16 16 A 8 8 0 0 1 32 16" />
    <rect x="18" y="8" width="12" height="4" rx="1" fill="currentColor" />
    <circle cx="24" cy="20" r="4" />
    <rect x="8" y="32" width="32" height="10" rx="2" />
    <path d="M 16 32 L 20 28 H 28 L 32 32" />
  </svg>
);

const TimelyIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="26" r="14" />
    <path d="M 24 18 V 26 L 30 30" />
    <path d="M 18 6 H 30 M 24 6 V 12" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 16 18 L 22 24 M 22 18 L 16 24" />
    <circle cx="24" cy="24" r="12" />
    <path d="M 10 38 L 18 32 M 38 38 L 30 32" />
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

export const WhatSetsUsApartSection = () => {
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
    <section className="py-14 sm:py-16 bg-[#EFF7FE] text-slate-900 text-left font-sans border-b border-slate-200">
      {/* Full Width Edge-to-Edge Centered Header */}
      <div className="text-center w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto mb-10 sm:mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
          What Sets Us Apart As Healthcare App Development Company?
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-4xl mx-auto font-sans">
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
                  {/* Icon Box */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm border border-slate-100/90 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <IconComp />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1 font-sans">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-sans tracking-tight">
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
            {/* Top-Left Ribbon Accent */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#005D95] clip-path-triangle pointer-events-none z-0" />
            
            {/* White Floating Form Card */}
            <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xl font-sans">
              <h3 className="text-xl font-extrabold text-slate-900 text-center font-sans mb-6">
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
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-[#005D95] focus:ring-2 focus:ring-[#005D95]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all font-sans"
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
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-[#005D95] focus:ring-2 focus:ring-[#005D95]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all font-sans"
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
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-[#005D95] focus:ring-2 focus:ring-[#005D95]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all font-sans"
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
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-[#005D95] focus:ring-2 focus:ring-[#005D95]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all font-sans resize-none"
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
                      <span className="font-extrabold text-orange-600 block">CLOUDFLARE</span>
                      <span>Privacy - Help</span>
                    </div>
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#005D95] hover:bg-[#004A75] text-white text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-200 font-sans"
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
