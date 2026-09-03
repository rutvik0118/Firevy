import React from 'react';
import Container from '../common/Container';

export const AboutUsStats = () => {
  const stats = [
    {
      number: '23+',
      label: 'Years of Experience',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&auto=format&fit=crop&q=80',
      alt: 'Years of Experience'
    },
    {
      number: '320+',
      label: '5-Star Clutch Reviews',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80',
      alt: '5-Star Clutch Reviews'
    },
    {
      number: '20+',
      label: 'Fortunes 500 Companies',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&auto=format&fit=crop&q=80',
      alt: 'Fortunes 500 Companies'
    },
    {
      number: '200+',
      label: 'IT Professional',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80',
      alt: 'IT Professionals Team'
    },
    {
      number: '95%',
      label: 'Client Retention',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
      alt: 'Client Retention Handshake'
    },
    {
      number: '18+',
      label: 'Industry Served',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&auto=format&fit=crop&q=80',
      alt: 'Industry Facilities Served'
    },
    {
      number: '2800+',
      label: 'Satisfied Clients',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&auto=format&fit=crop&q=80',
      alt: 'Satisfied Corporate Clients'
    },
    {
      number: '1500+',
      label: 'Completed Projects',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80',
      alt: 'Completed Projects Software Development'
    }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-13 bg-[#005F96] text-white font-sans text-left relative overflow-hidden">
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
            Firevy delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success
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
