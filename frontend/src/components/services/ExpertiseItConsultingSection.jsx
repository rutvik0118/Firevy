import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const expertiseCards = [
  {
    title: 'Cloud & Data Migration Services',
    desc: 'Our IT Consulting Services assist you in developing the optimal cloud migration plan, including cloud security. We walk you through the advantages and disadvantages, assist you in evaluating...',
    link: '/services/cloud-data-migration'
  },
  {
    title: 'IT Strategy & Planning',
    desc: 'We see strategic IT as a critical competitive advantage, enabling you to invest in the right technology to prepare your business for future challenges. We will collaborate with you to create a comprehensive...',
    link: '/services/it-strategy-planning'
  },
  {
    title: 'IT Budgeting',
    desc: 'We collaborate with you to establish a realistic IT budget that includes your assets and resources and the predicted costs of the new technology that will bring the most outstanding value to your company and...',
    link: '/services/it-budgeting'
  },
  {
    title: 'IT Assessments',
    desc: 'We can thoroughly analyze your infrastructure to determine if your technology is helping or harming your organization. You will get a written assessment of the critical areas...',
    link: '/services/it-assessments'
  }
];

export const ExpertiseItConsultingSection = ({
  title = 'Expertise In Our IT Consulting Services',
  subtitle = 'Our Information Technology (IT) Consulting Services are top-notch in quality. Some of our expertise include:',
  cards
}) => {
  const cardsToRender = cards && cards.length > 0 ? cards : expertiseCards;

  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-2.5 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 4 Light Blue Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-[1240px] mx-auto">
          {cardsToRender.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#D9EFF9] rounded-[16px] p-5 sm:p-6 text-slate-900 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left group border border-[#C5E6F5]"
            >
              <div>
                <h3 className="font-[800] text-[#0B0F19] text-[16px] sm:text-[18px] leading-[1.3] mb-3 group-hover:text-[#005F96] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#334155] text-[12.5px] sm:text-[13px] leading-[1.65] font-[400] mb-6">
                  {card.desc}
                </p>
              </div>

              <div>
                <Link
                  to={card.link}
                  className="inline-block bg-[#0084D1] text-white px-5 py-2 rounded-[8px] font-[700] text-xs sm:text-[13px] hover:bg-[#006EA8] transition-colors shadow-xs"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExpertiseItConsultingSection;
