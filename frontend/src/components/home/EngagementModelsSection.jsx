import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const defaultModels = [
  {
    id: 1,
    title: 'Fixed Price',
    desc: 'This model is for projects with well-defined scope and requirements. When Clients know what they want and have fixed requirements, it works the best for small businesses and medium projects with limited or fixed budgets.',
    icon: (
      <svg className="w-10 h-10 text-[#8B5CF6] shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 14c0-4 3.5-7 8-7s8 3 8 7" />
        <path d="M14 14h20l4 24a4 4 0 0 1-4 5H14a4 4 0 0 1-4-5l4-24z" />
        <path d="M24 22v12" />
        <path d="M20.5 25.5h5a2.5 2.5 0 0 1 0 5h-5" />
        <path d="M20 14h8" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Dedicated Hiring',
    desc: 'For projects when clients want to have a full-time, dedicated team working on their projects. Works best for projects which require fast scaling or require expert developers to work on a long-term basis.',
    icon: (
      <svg className="w-10 h-10 text-[#F97316] shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="14" r="6" />
        <path d="M14 36v-3a7 7 0 0 1 14 0v3" />
        <circle cx="37" cy="18" r="4.5" />
        <path d="M33 34v-2a5 5 0 0 0-4-4.8" />
        <circle cx="11" cy="18" r="4.5" />
        <path d="M15 34v-2a5 5 0 0 1 4-4.8" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Time Material',
    desc: 'For projects where requirements are dynamic and constantly changing, and scope is not clearly defined. Works the best for When clients need short-term consulting or want to build a proof of concepts.',
    icon: (
      <svg className="w-10 h-10 text-[#22C55E] shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="26" r="15" />
        <line x1="24" y1="5" x2="24" y2="11" />
        <line x1="20" y1="5" x2="28" y2="5" />
        <polyline points="24 18 24 26 29 26" />
        <line x1="36" y1="14" x2="39" y2="11" />
        <line x1="12" y1="14" x2="9" y2="11" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Buckets Approach',
    desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
    icon: (
      <svg className="w-10 h-10 text-[#06B6D4] shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="28" r="7" />
        <path d="M18 17v4m0 14v4M7 28h4m14 0h4m-12.7-7.7l2.8 2.8m8 8l2.8 2.8m-13.6 0l2.8-2.8m8-8l2.8-2.8" />
        <circle cx="34" cy="16" r="5" />
        <path d="M34 8v3m0 10v3M26 16h3m10 0h3m-9.1-5.1l2.1 2.1m6 6l2.1 2.1m-10.2 0l2.1-2.1m6-6l2.1-2.1" />
      </svg>
    )
  }
];

export const EngagementModelsSection = ({ data }) => {
  const title = data?.title || 'Our Engagement Models';
  const description = data?.description || 'At Sapphire, we provide full-cycle custom software development services to meet your financial requirements. Our software development team leverages their expertise in delivering process-oriented and high-performance software products for Cloud, Mobile, and Web.';
  const buttonText = data?.buttonText || 'Get In Touch';
  const buttonLink = data?.buttonLink || '/contact';

  const rawModels = (data?.models && Array.isArray(data.models) && data.models.filter(m => m.isActive !== false).length > 0)
    ? data.models.filter(m => m.isActive !== false)
    : defaultModels;

  const models = rawModels.map((m, idx) => ({
    ...m,
    icon: m.icon || defaultModels[idx % defaultModels.length].icon
  }));

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
