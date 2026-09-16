import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const SapphireFaqWithStatBadges = ({
  title = "Frequently Asked Questions",
  subtitle = "We provide tailored, robust, scalable and secure mobile app solutions that delight users and deliver engagement.",
  faqs = null
}) => {
  const [openFaq, setOpenFaq] = useState(0);

  // 8 Official Sapphire Stat Badges (Matching Screenshot 1:1)
  const statBadges = [
    {
      number: '23+',
      label: 'Years of Experience',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&auto=format&fit=crop&q=80'
    },
    {
      number: '320+',
      label: '5-Star Clutch Reviews',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&auto=format&fit=crop&q=80'
    },
    {
      number: '20+',
      label: 'Fortunes 500 Companies',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&auto=format&fit=crop&q=80'
    },
    {
      number: '200+',
      label: 'IT Professional',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&auto=format&fit=crop&q=80'
    },
    {
      number: '95%',
      label: 'Client Retention',
      img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=120&auto=format&fit=crop&q=80'
    },
    {
      number: '18+',
      label: 'Industry Served',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&auto=format&fit=crop&q=80'
    },
    {
      number: '2800+',
      label: 'Satisfied Clients',
      img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=120&auto=format&fit=crop&q=80'
    },
    {
      number: '1500+',
      label: 'Completed Projects',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&auto=format&fit=crop&q=80'
    }
  ];

  // Default Uber-like / Mobility FAQs
  const defaultFaqs = [
    {
      q: "1. What's the point of spending money on an app to track or manage your business?",
      a: "Said, it is a need! With digital transformation globally in desperate need of automation, custom mobile app software assists businesses while also providing a high-ROI feasible growth opportunity for you."
    },
    {
      q: "2. Can you tell me how much it costs to develop the app?",
      a: "The cost depends on your required features, integrations, and fleet size. We offer flexible models including MVP fixed-price contracts and dedicated developer monthly buckets."
    },
    {
      q: "3. How long will it take to construct a custom mobile app?",
      a: "An initial MVP version is delivered within 8 to 12 weeks, while a full enterprise multi-platform app with iOS, Android, and Super Admin portal takes 4 to 6 months."
    },
    {
      q: "4. Is my data secure and who owns the source code?",
      a: "You receive 100% source code ownership backed by a signed NDA. All applications feature bank-grade SSL encryption and HIPAA/GDPR compliance."
    }
  ];

  const listFaqs = faqs || defaultFaqs;

  return (
    <section className="py-16 sm:py-20 bg-[#005F96] text-white relative font-sans w-full border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[950] tracking-tight text-white leading-tight font-sans">
            {title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base font-[400] text-cyan-100/90 leading-relaxed font-sans max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Inner White Container Card (1:1 Match to Screenshot) */}
        <div className="bg-white text-slate-900 rounded-[28px] p-6 sm:p-10 shadow-2xl border border-white/30 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: 8 Sapphire Stat Badges + 3 Review Badges */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {statBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F0F8FD] hover:bg-[#E4F2FA] transition-colors rounded-xl p-3 flex items-center space-x-3 border border-blue-100/70 shadow-2xs text-left"
                  >
                    <img
                      src={badge.img}
                      alt={badge.label}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover shrink-0 shadow-2xs border border-white"
                    />
                    <div>
                      <div className="text-sm sm:text-base font-[950] text-[#005F96] leading-none font-sans">
                        {badge.number}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-extrabold text-slate-700 leading-tight font-sans mt-0.5">
                        {badge.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3 Review Badges: Google, Clutch, GoodFirms (Exact 1:1 Match to Screenshot) */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center border-t border-slate-100">
                {/* Google Review Badge */}
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="text-xs font-black text-slate-800">Google</span>
                  </div>
                  <div className="flex text-amber-400 text-[10px] space-x-0.5 mb-0.5">
                    ★★★★★
                  </div>
                  <span className="text-[8px] font-extrabold text-slate-500 uppercase tracking-tighter">
                    150+ REVIEWS
                  </span>
                </div>

                {/* Clutch Review Badge */}
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="text-xs font-black text-slate-900">Clutch</span>
                  </div>
                  <div className="flex text-amber-400 text-[10px] space-x-0.5 mb-0.5">
                    ★★★★★
                  </div>
                  <span className="text-[8px] font-extrabold text-slate-500 uppercase tracking-tighter">
                    320+ REVIEWS
                  </span>
                </div>

                {/* GoodFirms Review Badge */}
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="text-xs font-black text-blue-700">GoodFirms</span>
                  </div>
                  <div className="flex text-amber-400 text-[10px] space-x-0.5 mb-0.5">
                    ★★★★★
                  </div>
                  <span className="text-[8px] font-extrabold text-slate-500 uppercase tracking-tighter">
                    200+ REVIEWS
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive FAQ Accordion */}
            <div className="lg:col-span-6 space-y-3 text-left">
              {listFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-slate-200 pb-3 transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full flex items-start justify-between text-left font-bold text-xs sm:text-sm text-[#005F96] hover:text-[#004A75] transition-colors py-1 group"
                    >
                      <span className="pr-3 leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#005F96] shrink-0 transition-transform mt-0.5 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="pt-2 text-xs text-slate-600 leading-relaxed font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SapphireFaqWithStatBadges;
