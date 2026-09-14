import React, { useState } from 'react';
import Container from '../common/Container';

// 5 Vector SVG Icons matching reference screenshot 100% pixel-perfect
const FlexibleIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="25" cy="17" r="10.5" strokeDasharray="2.5 2" strokeWidth="1.3" />
    <circle cx="25" cy="13.5" r="2.6" />
    <path d="M19.5 21 C19.5 18.5 30.5 18.5 30.5 21" />
    <circle cx="18" cy="16" r="2" />
    <path d="M15 21.5 C15 19.8 21 19.8 21 21.5" />
    <circle cx="32" cy="16" r="2" />
    <path d="M29 21.5 C29 19.8 35 19.8 35 21.5" />
    <path d="M8 35.5 H16.5 L23 39.5 H36 C39.5 39.5 42 37 42 34.5 C42 32 39.5 30.5 35.5 30.5 H29" />
    <path d="M8 31.5 V40.5 H14" />
  </svg>
);

const TransparencyIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <clipPath id="hatchClipCircleWarehouse">
        <circle cx="29" cy="24" r="12" />
      </clipPath>
    </defs>
    <circle cx="19" cy="24" r="12" />
    <g clipPath="url(#hatchClipCircleWarehouse)">
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
    <path d="M19 13.5 C19 9.5 29 9.5 29 13.5" />
    <path d="M16.5 14 H31.5" />
    <circle cx="24" cy="17" r="4.2" />
    <path d="M15 28.5 C15 23 33 23 33 28.5" />
    <rect x="13.5" y="28" width="21" height="13" rx="2" fill="white" />
    <path d="M18 34.5 L16 33 M18 34.5 L16 36" strokeWidth="1.8" />
    <path d="M30 33 L32 34.5 M30 36 L32 34.5" strokeWidth="1.8" />
    <line x1="23" y1="37" x2="25" y2="32" strokeWidth="1.4" />
    <line x1="11" y1="41" x2="37" y2="41" strokeWidth="2.2" />
  </svg>
);

const TimelyIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="25" cy="26" r="13" />
    <path d="M20 7 H30 M25 7 V13" strokeWidth="2" />
    <polyline points="25,18 25,26 31,26" strokeWidth="2" />
    <path d="M7 18 C9 15 11 14 14 13" strokeWidth="1.5" />
    <line x1="6" y1="26" x2="10" y2="26" strokeWidth="1.5" />
    <path d="M7 34 C9 37 11 38 14 39" strokeWidth="1.5" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-slate-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="25" cy="16.5" r="3.5" />
    <circle cx="25" cy="16.5" r="7" strokeWidth="1.5" />
    <path d="M25 7 V9.5 M25 23.5 V26 M15.5 16.5 H18 M32 16.5 H34.5 M18.3 9.8 L20 11.5 M30 21.5 L31.7 23.2 M18.3 23.2 L20 21.5 M30 11.5 L31.7 9.8" strokeWidth="2.4" strokeLinecap="round" />
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

export const WarehouseWhatSetsUsApartSection = () => {
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
    <>
      {/* What Sets Us Apart As Warehouse Management System Section (Reference Screenshot 1) */}
      <section className="py-16 md:py-20 bg-white text-slate-900 text-left font-sans border-b border-slate-100">
        {/* Centered Section Header */}
        <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight font-sans">
            What Sets Us Apart As Warehouse Management System
          </h2>
          <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
            Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors.
          </p>
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Column: 5 Pillar Cards with Vector Icons */}
            <div className="lg:col-span-7 space-y-6">
              {pillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div key={pillar.id} className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                      <IconComp />
                    </div>

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

            {/* Right Column: "Let's Discuss" Form Card (Screenshot 1) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-2 -left-2 w-0 h-0 border-t-[28px] border-t-[#005F96] border-r-[28px] border-r-transparent z-20 pointer-events-none drop-shadow-sm" />
              <div className="absolute -bottom-2 -right-2 w-0 h-0 border-b-[28px] border-b-[#005F96] border-l-[28px] border-l-transparent z-20 pointer-events-none drop-shadow-sm" />

              <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl font-sans">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 text-center font-sans mb-6">
                  Let's Discuss
                </h3>

                {submitted ? (
                  <div className="p-6 rounded-xl bg-emerald-50 text-emerald-800 text-center space-y-2 border border-emerald-200 font-sans">
                    <h4 className="font-bold text-base">Thank You!</h4>
                    <p className="text-xs sm:text-sm">Your inquiry has been submitted successfully. Our WMS specialists will reach out to you shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-3 px-4 py-2 bg-[#005F96] text-white text-xs font-bold rounded-lg"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
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
                        <span className="font-extrabold text-slate-800 uppercase tracking-wider text-[9px]">CLOUDFLARE</span>
                        <span className="text-[8px] text-slate-400">Privacy • Help</span>
                      </div>
                    </div>

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

      {/* Dark Blue Challenge CTA Banner (Reference Screenshot 2) */}
      <section className="py-16 md:py-20 bg-[#005F96] text-white font-sans text-center relative overflow-hidden">
        <Container className="max-w-4xl relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Have Warehouse Management System Challenge To Address ?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Get access to top Warehouse Management System to transform your ideas into a robust application.
          </p>
          <div>
            <a
              href="#quote-form"
              className="inline-block px-8 py-3.5 bg-white text-[#005F96] hover:bg-sky-50 font-bold text-sm sm:text-base rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Request A Free Quote
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WarehouseWhatSetsUsApartSection;
