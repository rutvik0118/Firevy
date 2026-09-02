import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import BRAND from '../../constants/brand';

export const AboutKeyMetrics = () => {
  const cards = [
    {
      metric: '23+',
      label: 'Years of Experience',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80'
    },
    {
      metric: '320+',
      label: '5-Star Clutch Reviews',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80'
    },
    {
      metric: '20+',
      label: 'Fortunes 500 Companies',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80'
    },
    {
      metric: '200+',
      label: 'IT Professional',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80'
    },
    {
      metric: '95%',
      label: 'Client Retention',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80'
    },
    {
      metric: '18+',
      label: 'Industry Served',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80'
    },
    {
      metric: '2800+',
      label: 'Satisfied Clients',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      metric: '1500+',
      label: 'Completed Projects',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="py-20 bg-[#006B8F] text-white relative font-sans overflow-hidden border-b border-cyan-900">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] text-white tracking-tight mb-3">
            About Us
          </h2>
          <p className="text-[18px] font-[400] text-cyan-100 leading-relaxed max-w-3xl mx-auto">
            firevy delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success
          </p>
        </div>

        {/* 4x2 Grid of 8 White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-white rounded-[22px] p-5 shadow-2xl border border-white/20 hover:shadow-cyan-900/40 transition-all duration-300 flex items-center space-x-4 text-left group hover:-translate-y-1"
            >
              <img
                src={card.image}
                alt={card.label}
                className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl object-cover shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col justify-center">
                <div className="text-[34px] font-[800] text-[#006B8F] tracking-tight leading-none mb-1.5">
                  {card.metric}
                </div>
                <div className="text-[15px] font-[600] text-slate-800 leading-tight">
                  {card.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutKeyMetrics;
