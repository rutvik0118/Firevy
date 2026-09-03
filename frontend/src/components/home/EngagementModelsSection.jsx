import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const defaultModels = [
  {
    title: 'Fixed Price',
    desc: 'This model is for projects with well-defined scope and requirements. When Clients know what they want and have fixed requirements, it works the best for small businesses and medium projects with limited or fixed budgets.',
    icon: (
      <svg className="w-8 h-8 text-[#006B8F]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M7 10h18l2 17H5L7 10z" />
        <path d="M16 14v8" />
        <path d="M13.5 16.5h5a2 2 0 0 1 0 4h-5" />
      </svg>
    )
  },
  {
    title: 'Dedicated Hiring',
    desc: 'For projects when clients want to have a full-time, dedicated team working on their projects. Works best for projects which require fast scaling or require expert developers to work on a long-term basis.',
    icon: (
      <svg className="w-8 h-8 text-[#006B8F]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M8 25v-2a6 6 0 0 1 12 0v2" />
        <path d="M22 13a3.5 3.5 0 1 0 0-7" />
        <path d="M26 23v-1a4.5 4.5 0 0 0-5-4.4" />
      </svg>
    )
  },
  {
    title: 'Time Material',
    desc: 'For projects where requirements are dynamic and constantly changing, and scope is not clearly defined. Works the best for When clients need short-term consulting or want to build a proof of concepts.',
    icon: (
      <svg className="w-8 h-8 text-[#006B8F]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28A12 12 0 1 0 16 4a12 12 0 0 0 0 24z" />
        <path d="M16 10v6l4 3" />
        <path d="M14 2h4" />
      </svg>
    )
  },
  {
    title: 'Buckets Approach',
    desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
    icon: (
      <svg className="w-8 h-8 text-[#006B8F]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l12 7-12 7-12-7 12-7z" />
        <path d="M4 18l12 7 12-7" />
        <path d="M4 23l12 7 12-7" />
      </svg>
    )
  }
];

export const EngagementModelsSection = ({ data }) => {
  const title = data?.title || 'Our Engagement Models';
  const description = data?.description || 'At firevy.co, we provide full-cycle custom software development services to meet your financial requirements. We have designed engagement models that give you the freedom to choose your team size according to your need.';
  const buttonText = data?.buttonText || 'Get In Touch';
  const buttonLink = data?.buttonLink || '/contact';

  const models = (data?.models && Array.isArray(data.models) && data.models.filter(m => m.isActive !== false).length > 0)
    ? data.models.filter(m => m.isActive !== false)
    : defaultModels;

  return (
    <section className="py-20 bg-[#006B8F] text-white relative font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-white mb-4 font-sans">
            {title}
          </h2>
          <p className="text-[16px] sm:text-[17px] font-[400] text-cyan-100 leading-relaxed max-w-3xl mx-auto font-sans">
            {description}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-7 text-slate-900 shadow-xl flex flex-col justify-between h-[310px] hover:scale-105 transition-transform duration-300 border border-white/20"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-5 border border-cyan-100">
                  {model.icon || defaultModels[idx % defaultModels.length].icon}
                </div>
                <h3 className="text-[20px] font-[800] text-slate-900 mb-3 tracking-tight font-sans">
                  {model.title}
                </h3>
                <p className="text-[13.5px] font-[400] text-slate-600 leading-relaxed font-sans line-clamp-4">
                  {model.description || model.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <Link
            to={buttonLink}
            className="inline-block px-9 py-3.5 rounded-lg bg-white text-[#006B8F] hover:bg-slate-100 font-extrabold text-sm border-2 border-white shadow-xl transition-all hover:scale-105 active:scale-95 font-sans"
          >
            {buttonText}
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default EngagementModelsSection;
