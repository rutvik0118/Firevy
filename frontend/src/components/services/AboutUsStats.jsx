import React from 'react';
import Container from '../common/Container';

export const AboutUsStats = ({ companyName = "Sapphire" }) => {
  const stats = [
    {
      number: '23+',
      label: 'Years of Experience',
      image: '/images/first.webp',
      alt: 'Years of Experience'
    },
    {
      number: '320+',
      label: '5-Star Clutch Reviews',
      image: '/images/first.webp',
      alt: '5-Star Clutch Reviews'
    },
    {
      number: '20+',
      label: 'Fortunes 500 Companies',
      image: '/images/third.webp',
      alt: 'Fortunes 500 Companies'
    },
    {
      number: '200+',
      label: 'IT Professional',
      image: '/images/client_seven.webp',
      alt: 'IT Professionals Team'
    },
    {
      number: '95%',
      label: 'Client Retention',
      image: '/images/sixth.webp',
      alt: 'Client Retention Handshake'
    },
    {
      number: '18+',
      label: 'Industry Served',
      image: '/images/fourth.webp',
      alt: 'Industry Facilities Served'
    },
    {
      number: '2800+',
      label: 'Satisfied Clients',
      image: '/images/fifth.webp',
      alt: 'Satisfied Corporate Clients'
    },
    {
      number: '1500+',
      label: 'Completed Projects',
      image: '/images/clienttestimonial3.webp',
      alt: 'Completed Projects Software Development'
    }
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-[#005F96] text-white font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <h2
            className="font-[800] text-white tracking-tight leading-tight"
            style={{ fontSize: '30px' }}
          >
            About Us
          </h2>
          <p
            className="font-normal text-white/90"
            style={{ fontSize: '14px' }}
          >
            {companyName} delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success
          </p>
        </div>

        {/* 4 Columns x 2 Rows Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-[1260px] mx-auto">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[14px] p-2.5 sm:p-3 flex items-center space-x-3 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group border border-white/80 select-none"
            >
              {/* Rectangular Image on Left */}
              <div className="w-[66px] sm:w-[72px] h-[72px] sm:h-[78px] rounded-[9px] overflow-hidden shrink-0 bg-slate-100 shadow-2xs">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Statistic Number & Description on Right */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <div
                  className="font-[800] text-[#005F96] tracking-tight leading-none mb-1"
                  style={{ fontSize: '23px' }}
                >
                  {item.number}
                </div>
                <div
                  className="font-[600] text-[#1E293B] leading-tight truncate"
                  style={{ fontSize: '12.5px' }}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutUsStats;
