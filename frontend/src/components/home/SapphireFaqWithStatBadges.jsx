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
            
            {/* LEFT COLUMN: 8 Sapphire Stat Badges (1:1 Match to Screenshot) */}
            <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-24 self-start">
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
                {statBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F0F7FD] hover:bg-[#E2F0FB] transition-colors rounded-2xl p-3 sm:p-3.5 flex items-center space-x-3 text-left border border-[#D0E5F5]/60 shadow-2xs"
                  >
                    <img
                      src={badge.img}
                      alt={badge.label}
                      className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl object-cover shrink-0 shadow-2xs border border-white"
                    />
                    <div>
                      <div className="text-base sm:text-lg font-[950] text-[#005F96] leading-none font-sans">
                        {badge.number}
                      </div>
                      <div className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug font-sans mt-1">
                        {badge.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ratings Badges Row (Google 5-Star, Clutch 5-Star, GoodFirms 5-Star 1:1 Match) */}
              <div className="pt-4 pb-1 flex items-center justify-center">
                <img
                  src="/images/faq_ratings_badges_row.png"
                  alt="Google 5-Star, Clutch 5-Star, GoodFirms 5-Star Ratings"
                  className="w-full max-w-[420px] sm:max-w-[460px] h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
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
