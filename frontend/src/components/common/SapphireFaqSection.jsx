import React, { useState } from 'react';

const statsList = [
  {
    value: '23+',
    label: 'Years of Experience',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '320+',
    label: '5-Star Clutch Reviews',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '20+',
    label: 'Fortunes 500 Companies',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '200+',
    label: 'IT Professional',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '95%',
    label: 'Client Retention',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '18+',
    label: 'Industry Served',
    image: '/images/6.webp',
    fallback: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '2800+',
    label: 'Satisfied Clients',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '1500+',
    label: 'Completed Projects',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80'
  }
];

const androidFaqList = [
  {
    id: 1,
    question: '1. Do you create custom Android apps?',
    answer: 'We create Android business apps, e-commerce platforms, social networking apps, utility tools, gaming apps, and corporate solutions. We have the experience to provide a unique solution for your needs.'
  },
  {
    id: 2,
    question: '2. Do you support app updates and maintenance?',
    answer: 'Yes, we offer comprehensive post-launch SLA maintenance, Android OS compatibility updates (Android 14/15+), security patches, bug fixes, third-party API monitoring, and performance tuning.'
  },
  {
    id: 3,
    question: '3. How long does Android app development take?',
    answer: 'A standard MVP or mid-scale application typically takes 6 to 12 weeks. Complex enterprise applications with custom backend microservices and third-party integrations generally require 3 to 6 months.'
  },
  {
    id: 4,
    question: '4. Why hire an android development company?',
    answer: 'A specialized Android development company provides experienced Kotlin and Jetpack Compose architects, strict Google Play Store guidelines compliance, comprehensive multi-device testing, and scalable architecture.'
  },
  {
    id: 5,
    question: '5. What services do Android software development company offer?',
    answer: 'We provide end-to-end custom Android app development, Material Design 3 UI/UX, native Kotlin/Java development, AI & ML on-device integrations, legacy migration, API backend engineering, and Play Store release management.'
  },
  {
    id: 6,
    question: '6. How can Android app development benefit my business?',
    answer: 'Android commands over 70% of the global smartphone operating system market. A dedicated Android application unlocks access to billions of active users, strengthens customer retention, and accelerates digital revenue.'
  },
  {
    id: 7,
    question: '7. What security measures are taken during Android app development?',
    answer: 'We implement end-to-end SSL pinning, AES-256 data encryption, ProGuard and R8 code obfuscation, biometric authentication, secure EncryptedSharedPreferences, and strict OWASP mobile security standards.'
  },
  {
    id: 8,
    question: '8. Where can I find a reliable Android app development company?',
    answer: 'Sapphire is a globally recognized, top-rated Android app development partner with 23+ years of industry experience, 320+ 5-star Clutch reviews, and 1500+ completed projects trusted by Fortune 500 enterprises.'
  }
];

export const SapphireFaqSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="py-9 sm:py-11 lg:py-13 bg-[#005F96] text-white text-left font-sans">
      {/* Centered White Heading & Subtitle */}
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 space-y-2">
        <h2
          className="font-[800] text-white tracking-tight leading-tight"
          style={{ fontSize: '34px' }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-[13px] sm:text-[14px] text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto opacity-95">
          We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below.
        </p>
      </div>

      {/* Main Floating White Card Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-9 lg:p-11 text-slate-900 shadow-[0_15px_50px_rgba(0,0,0,0.18)] border border-slate-100/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-start">
            
            {/* Left Column: 8 Stat Pill Cards & 3 Review Laurel Badges */}
            <div className="lg:col-span-5 space-y-6">
              {/* 8 Stat Cards Grid (2 Columns x 4 Rows) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
                {statsList.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-[14px] bg-[#F2F8FD] border border-blue-100/60 flex items-center space-x-2.5 hover:shadow-sm hover:border-sky-300 transition-all duration-300"
                  >
                    <img
                      src={stat.image}
                      alt={stat.label}
                      onError={(e) => {
                        if (stat.fallback && e.target.src !== stat.fallback) {
                          e.target.src = stat.fallback;
                        }
                      }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] object-cover shrink-0 shadow-xs"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1 text-left">
                      <h4 className="text-[14px] sm:text-[15px] font-[800] text-[#005F96] leading-none">
                        {stat.value}
                      </h4>
                      <p className="text-[10px] sm:text-[10.5px] font-[600] text-[#475569] leading-tight mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3 Review Laurel Badges (Using authentic leaf SVGs) */}
              <div className="pt-3 flex items-center justify-between gap-1 sm:gap-2 border-t border-slate-100/80">
                {/* Google Laurel Badge */}
                <div className="flex items-center justify-center space-x-1 flex-1">
                  <img src="/images/left-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                  <div className="flex flex-col items-center text-center px-0.5">
                    <span className="text-[11px] sm:text-[12px] font-[800] text-[#111827] leading-tight">Google</span>
                    <div className="flex text-[#005F96] text-[9.5px] sm:text-[10.5px] tracking-tight leading-none my-0.5">★★★★★</div>
                    <span className="text-[7px] sm:text-[7.5px] font-[800] text-[#64748B] uppercase tracking-wider">900+ REVIEWS</span>
                  </div>
                  <img src="/images/right-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                </div>

                {/* Clutch Laurel Badge */}
                <div className="flex items-center justify-center space-x-1 flex-1">
                  <img src="/images/left-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                  <div className="flex flex-col items-center text-center px-0.5">
                    <span className="text-[11px] sm:text-[12px] font-[800] text-[#111827] leading-tight">Clutch</span>
                    <div className="flex text-[#005F96] text-[9.5px] sm:text-[10.5px] tracking-tight leading-none my-0.5">★★★★★</div>
                    <span className="text-[7px] sm:text-[7.5px] font-[800] text-[#64748B] uppercase tracking-wider">320+ REVIEWS</span>
                  </div>
                  <img src="/images/right-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                </div>

                {/* GoodFirms Laurel Badge */}
                <div className="flex items-center justify-center space-x-1 flex-1">
                  <img src="/images/left-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                  <div className="flex flex-col items-center text-center px-0.5">
                    <span className="text-[11px] sm:text-[12px] font-[800] text-[#111827] leading-tight">GoodFirms</span>
                    <div className="flex text-[#005F96] text-[9.5px] sm:text-[10.5px] tracking-tight leading-none my-0.5">★★★★★</div>
                    <span className="text-[7px] sm:text-[7.5px] font-[800] text-[#64748B] uppercase tracking-wider">200+ REVIEWS</span>
                  </div>
                  <img src="/images/right-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                </div>
              </div>
            </div>

            {/* Right Column: Interactive FAQ Accordion List (1 to 8) */}
            <div className="lg:col-span-7 space-y-0 text-left font-sans">
              {androidFaqList.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-slate-200/80 py-3.5 first:pt-0 last:border-b-0 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex items-start justify-between space-x-3 group cursor-pointer focus:outline-none"
                    >
                      <h3
                        className={`text-[13.5px] sm:text-[14.5px] font-[700] leading-snug transition-colors ${
                          isOpen ? 'text-[#005F96]' : 'text-[#0F172A] group-hover:text-[#005F96]'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </button>

                    {/* Expandable Answer */}
                    {isOpen && (
                      <div className="pt-2.5 pb-1 text-[12px] sm:text-[13px] text-[#475569] font-normal leading-[1.68] transition-all">
                        {faq.answer}
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

export default SapphireFaqSection;
