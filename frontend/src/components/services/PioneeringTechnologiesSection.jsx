import React from 'react';
import Container from '../common/Container';

export const PioneeringTechnologiesSection = ({
  title = "Pioneering Technologies Fueling Sapphire Web Development",
  subtitle = "As a top web development company in USA, we use the most up-to-date technological stack to provide unmatched bespoke website development services that cater to specific needs.",
  technologies = [
    {
      title: 'AI/ML',
      desc: 'With AI/ML integration in web apps, we develop smarter, more efficient, and user-friendly online applications, ranging from simple chatbots for immediate assistance to dynamic content suggestions and predictive analytics.'
    },
    {
      title: 'Big Data Analytics',
      desc: 'Through Big Data analytics, we help businesses take advantage of their actionable insights to improve decision-making and provide measurable business results.'
    },
    {
      title: 'Internet of Things (IoT)',
      desc: 'We can give web application development solutions with smooth access to IoT-enabled devices for monitoring real-time data and automating operations for more comfort and efficiency, thanks to our experience with IoT web development.'
    }
  ]
}) => {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#005F96] text-white font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <h2 className="font-[800] text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-snug">
            {title}
          </h2>
          <p className="font-normal text-white/90 text-xs sm:text-sm md:text-[14.5px] leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 3 Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-6 sm:p-7 text-left shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/90 flex flex-col justify-start"
            >
              {/* Card Title */}
              <h3 className="text-[17.5px] sm:text-[19px] font-[800] text-[#0B0F19] tracking-tight mb-3">
                {tech.title}
              </h3>

              {/* Card Paragraph Description */}
              <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-[1.7] font-normal">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PioneeringTechnologiesSection;
