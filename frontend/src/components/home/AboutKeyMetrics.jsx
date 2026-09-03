import React from 'react';
import Container from '../common/Container';

const defaultCards = [
  // Row 1
  {
    type: 'stat',
    metric: '23+',
    label: 'Years Experience'
  },
  {
    type: 'stat',
    metric: '2800+',
    label: 'Satisfied Clients'
  },
  {
    type: 'stat',
    metric: '1500+',
    label: 'Projects Completed'
  },
  {
    type: 'stat',
    metric: '200+',
    label: 'IT Professional'
  },

  // Row 2
  {
    type: 'stat',
    metric: '95%',
    label: 'Client Retention'
  },
  {
    type: 'stat',
    metric: '18+',
    label: 'Industry Served'
  },
  {
    type: 'stat',
    metric: '30+',
    label: 'Countries Active Customers'
  },
  {
    type: 'stat',
    metric: '6+',
    label: 'Global Offices'
  },

  // Row 3 (4 Benefit Cards with Cyan/Blue Line Icons)
  {
    type: 'feature',
    label: 'Work at your time zone',
    iconKey: 'globe'
  },
  {
    type: 'feature',
    label: 'Easy communication',
    iconKey: 'chat'
  },
  {
    type: 'feature',
    label: 'Hire in 48 Hours',
    iconKey: 'hired'
  },
  {
    type: 'feature',
    label: 'In Business since 2002',
    iconKey: 'handshake'
  }
];

const renderFeatureIcon = (iconKey) => {
  switch (iconKey) {
    case 'globe':
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#006B8F] mb-1.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="20" r="16" />
          <path d="M4 20h32" />
          <path d="M20 4a24 24 0 0 1 0 32 24 24 0 0 1 0-32" />
          <circle cx="27" cy="27" r="7" fill="#FFFFFF" stroke="#006B8F" strokeWidth="2" />
          <polyline points="27,24 27,27 29,29" stroke="#006B8F" strokeWidth="2" />
        </svg>
      );
    case 'chat':
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#006B8F] mb-1.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M26 18c0-5.5-5.4-10-12-10S2 12.5 2 18c0 2.8 1.4 5.3 3.6 7.1L4 30l5.4-1.8c1.4.5 3 .8 4.6.8 6.6 0 12-4.5 12-10z" />
          <path d="M24 25.5c3.8-.5 6.5-2.8 6.5-5.5 0-1-.4-2-1.1-2.8" />
          <path d="M30 32l-3.6-1.2c-.9.4-2 .6-3.1.6" />
        </svg>
      );
    case 'hired':
    case 'badge':
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#006B8F] mb-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="4" width="18" height="8" rx="2" fill="#006B8F" />
          <text x="20" y="10" textAnchor="middle" fontSize="5" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">HIRED</text>
          <path d="M6 24l7-7 6 6 8-8 7 7" />
          <path d="M19 23l4 4" />
          <path d="M16 26l4 4" />
        </svg>
      );
    case 'handshake':
    default:
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#006B8F] mb-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="12" r="5" strokeDasharray="3 2" />
          <path d="M8 26l6-6 6 6 6-6 6 6" />
          <path d="M14 26l6 6 6-6" />
          <path d="M6 32h28" strokeWidth="2.5" />
        </svg>
      );
  }
};

export const AboutKeyMetrics = ({ data }) => {
  const title = data?.title || 'Glance through our creations and presence';
  const description = data?.description || "We are a team of qualified Salesforce & Enterprise Development Professionals adept at expanding your current system's capabilities via the development and integration of Salesforce CRM and cloud architectures.";
  const bgImg = data?.backgroundImage || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80';

  const cards = (data?.cards && Array.isArray(data.cards) && data.cards.filter(c => c.isActive !== false).length > 0)
    ? data.cards.filter(c => c.isActive !== false)
    : defaultCards;

  return (
    <section
      className="py-20 text-white relative font-sans overflow-hidden border-b border-cyan-900 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 107, 143, 0.94) 0%, rgba(0, 85, 120, 0.96) 100%), url('${bgImg}')`
      }}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[36px] sm:text-[44px] font-[900] text-white tracking-tight leading-tight mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[15px] sm:text-[16.5px] font-[400] text-blue-100 leading-relaxed max-w-3xl mx-auto font-sans">
            {description}
          </p>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, idx) => {
            const isStat = card.type === 'stat' || (!card.type && (card.metric || card.title));
            const metricVal = card.metric || card.title;
            const labelVal = card.label || card.sub || card.description;

            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] shadow-[0px_8px_30px_rgba(0,0,0,0.12)] p-6 flex flex-col items-center justify-center text-center h-[140px] hover:scale-105 transition-transform duration-300 group"
              >
                {isStat ? (
                  <>
                    <div className="text-[38px] font-[900] text-[#006B8F] tracking-tight leading-none mb-1.5 font-sans">
                      {metricVal}
                    </div>
                    <div className="text-[14.5px] font-[700] text-slate-800 tracking-tight font-sans">
                      {labelVal}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center text-[#006B8F] group-hover:scale-110 transition-transform">
                      {card.image ? (
                        <img src={card.image} alt={labelVal} className="w-10 h-10 object-contain mb-1.5" />
                      ) : (
                        renderFeatureIcon(card.iconKey || card.icon || (idx === 8 ? 'globe' : idx === 9 ? 'chat' : idx === 10 ? 'hired' : 'handshake'))
                      )}
                    </div>
                    <div className="text-[14.5px] font-[700] text-slate-800 tracking-tight font-sans mt-0.5">
                      {labelVal}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutKeyMetrics;
