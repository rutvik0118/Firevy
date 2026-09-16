import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { Check } from 'lucide-react';

const defaultModels = [
  {
    id: 1,
    title: 'Fixed Price',
    desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
    features: [
      'Optimal flexibility',
      'Agile team',
      'Small projects',
      'Complete control over budget'
    ],
    icon: (
      <svg className="w-12 h-12 text-[#8B5CF6] shrink-0 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 14c0-4 3.5-7 8-7s8 3 8 7" />
        <path d="M14 14h20l4 24a4 4 0 0 1-4 5H14a4 4 0 0 1-4-5l4-24z" fill="#F3E8FF" />
        <text x="24" y="32" fontSize="16" fontWeight="bold" fill="#8B5CF6" textAnchor="middle" stroke="none">$</text>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Time Material',
    desc: "If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
    features: [
      'No hidden costs',
      'Working based hours',
      'Monthly billing',
      'Pay only for measurable work'
    ],
    icon: (
      <svg className="w-12 h-12 text-[#22C55E] shrink-0 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="26" r="14" fill="#DCFCE7" />
        <line x1="24" y1="5" x2="24" y2="12" />
        <line x1="20" y1="5" x2="28" y2="5" />
        <polyline points="24 18 24 26 30 26" strokeWidth="2.5" />
        <path d="M10 18 L6 14" />
        <path d="M7 22 L3 22" />
        <path d="M9 26 L4 26" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Dedicated Team',
    desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
    features: [
      'No hidden costs',
      '160 hours of assured work',
      'Monthly billing',
      'Pay only for measurable work'
    ],
    icon: (
      <svg className="w-12 h-12 text-[#F97316] shrink-0 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="15" r="5.5" fill="#FFEDD5" />
        <path d="M14 36v-3a7 7 0 0 1 14 0v3" fill="#FFEDD5" />
        <circle cx="36" cy="19" r="4" fill="#FFEDD5" />
        <path d="M32 34v-2a5 5 0 0 0-4-4.8" />
        <circle cx="12" cy="19" r="4" fill="#FFEDD5" />
        <path d="M16 34v-2a5 5 0 0 1 4-4.8" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Buckets Approach',
    desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
    features: [
      'Direct Resource Monitoring',
      'Less Risk',
      'Less budget',
      'Pay only for measurable work'
    ],
    icon: (
      <svg className="w-12 h-12 text-[#06B6D4] shrink-0 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="28" r="7" fill="#CFFAFE" />
        <path d="M20 17v4m0 14v4M9 28h4m14 0h4m-12.7-7.7l2.8 2.8m8 8l2.8 2.8m-13.6 0l2.8-2.8m8-8l2.8-2.8" />
        <circle cx="32" cy="18" r="5" fill="#CFFAFE" />
        <path d="M32 10v3m0 10v3M26 18h3m10 0h3m-9.1-5.1l2.1 2.1m6 6l2.1 2.1m-10.2 0l2.1-2.1m6-6l2.1-2.1" />
      </svg>
    )
  }
];

export const EngagementModelsSection = ({ data, variant = 'light', isLight = true }) => {
  const isLightMode = isLight || variant === 'light' || data?.isLight === true || data?.variant === 'light';

  const title = data?.title || 'Business Friendly Hiring Models : Building Greater Futures Through Innovation';
  const description = data?.description || 'We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:';
  const buttonText = data?.buttonText || 'Get In Touch';
  const buttonLink = data?.buttonLink || '/contact';

  const rawModels = (data?.models && Array.isArray(data.models) && data.models.filter(m => m.isActive !== false).length > 0)
    ? data.models.filter(m => m.isActive !== false)
    : defaultModels;

  const models = rawModels.map((m, idx) => ({
    ...m,
    icon: m.icon || defaultModels[idx % defaultModels.length].icon,
    features: m.features || defaultModels[idx % defaultModels.length].features
  }));

  if (isLightMode) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F0F6FB] text-slate-900 relative font-sans border-b border-slate-200/80">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-[900] tracking-tight text-slate-900 mb-3 font-sans leading-tight">
              {title}
            </h2>
            <p className="text-[13.5px] sm:text-[15px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans">
              {description}
            </p>
          </div>

          {/* 4 White Cards Grid (1:1 Match to Sapphire Reference Image 1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {models.map((model, idx) => (
              <div
                key={model.id || idx}
                className="bg-white rounded-2xl p-7 text-slate-900 shadow-md border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 h-full text-center group"
              >
                <div>
                  {/* Card Header Icon */}
                  <div className="mb-4 flex items-center justify-center">
                    {model.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-[800] text-slate-900 mb-3 tracking-tight font-sans">
                    {model.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[13px] font-[400] text-slate-600 leading-relaxed font-sans mb-6 text-center min-h-[75px]">
                    {model.description || model.desc}
                  </p>

                  {/* Checklist Items */}
                  {model.features && model.features.length > 0 && (
                    <ul className="space-y-2.5 mb-8 text-left border-t border-slate-100 pt-5 text-xs font-[600] text-slate-700">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-[#005C8A] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom Card Hire Now Button */}
                <div className="pt-2">
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
                    className="w-full inline-flex items-center justify-center bg-[#005C8A] hover:bg-[#004A75] text-white font-bold py-3 px-6 rounded-lg text-sm transition-all shadow-sm group-hover:shadow-md cursor-pointer"
                  >
                    Hire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // Dark Version (Legacy fallback)
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#006085] text-white relative font-sans select-none border-b border-cyan-900">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-[800] tracking-tight text-white mb-4 font-sans leading-tight">
            {title}
          </h2>
          <p className="text-[15px] sm:text-[16px] font-[400] text-cyan-50/90 leading-relaxed max-w-4xl mx-auto font-sans">
            {description}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 max-w-7xl mx-auto items-stretch">
          {models.map((model, idx) => (
            <div
              key={model.id || idx}
              className="bg-white rounded-[16px] p-6 sm:p-7 text-slate-900 shadow-xl flex flex-col justify-start min-h-[350px] lg:min-h-[370px] hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-white/40"
            >
              {/* Card Header: Icon on Left, Title on Right */}
              <div className="flex items-center space-x-3.5 mb-4">
                <div className="shrink-0 flex items-center justify-center">
                  {model.icon || defaultModels[idx % defaultModels.length].icon}
                </div>
                <h3 className="text-[19px] sm:text-[20px] font-[800] text-slate-900 tracking-tight font-sans leading-tight">
                  {model.title}
                </h3>
              </div>

              {/* Card Body: Description */}
              <p className="text-[13px] sm:text-[13.5px] font-[400] text-slate-600 leading-relaxed font-sans mt-2">
                {model.description || model.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <Link
            to={buttonLink}
            className="inline-block px-9 py-3.5 rounded-[6px] bg-white text-[#006085] hover:bg-slate-100 font-[700] text-[15px] border-2 border-white shadow-xl transition-all hover:scale-105 active:scale-95 font-sans"
          >
            {buttonText}
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default EngagementModelsSection;
