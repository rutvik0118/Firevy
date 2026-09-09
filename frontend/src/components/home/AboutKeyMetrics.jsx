import React, { useState, useEffect, useRef } from 'react';

const defaultCards = [
  {
    metric: '23+',
    label: 'Years of Experience',
    image: '/images/first.webp'
  },
  {
    metric: '320+',
    label: '5-Star Clutch Reviews',
    image: '/images/homeinnovation/second.webp'
  },
  {
    metric: '20+',
    label: 'Fortunes 500 Companies',
    image: '/images/third.webp'
  },
  {
    metric: '200+',
    label: 'IT Professional',
    image: '/images/fourth.webp'
  },
  {
    metric: '95%',
    label: 'Client Retention',
    image: '/images/fifth.webp'
  },
  {
    metric: '18+',
    label: 'Industry Served',
    image: '/images/sixth.webp'
  },
  {
    metric: '2800+',
    label: 'Satisfied Clients',
    image: '/images/awards/hdimages/client_seven.webp'
  },
  {
    metric: '1500+',
    label: 'Completed Projects',
    image: '/images/awards/hdimages/clienttestimonial3.webp'
  }
];

// Smooth Animated Counter Component
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Parse numeric target and suffix (e.g. "2800+" -> num: 2800, suffix: "+", "95%" -> num: 95, suffix: "%")
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const elem = ref.current;
    if (elem) observer.observe(elem);

    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, []);

  const runAnimation = () => {
    if (!target) return;
    let startTimestamp = null;
    const duration = 1800; // 1.8s smooth duration

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing function: easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (isVisible) {
      runAnimation();
    }
  }, [isVisible, target]);

  return (
    <span
      ref={ref}
      onMouseEnter={runAnimation}
      className="inline-block tabular-nums font-[900] text-[#005F96] tracking-tight leading-none font-sans"
    >
      {count}{suffix}
    </span>
  );
};

export const AboutKeyMetrics = ({ data }) => {
  const title = data?.title || 'About Us';
  const description = data?.description || 'Sapphire delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success';
  
  const rawCards = (data?.cards && Array.isArray(data.cards) && data.cards.filter(c => c.isActive !== false).length > 0)
    ? data.cards.filter(c => c.isActive !== false)
    : defaultCards;

  const cards = rawCards.map((card, idx) => ({
    metric: card.metric || defaultCards[idx % defaultCards.length].metric,
    label: card.label || defaultCards[idx % defaultCards.length].label,
    image: card.image || defaultCards[idx % defaultCards.length].image
  }));

  return (
    <section className="py-16 sm:py-20 bg-[#006085] text-white relative font-sans overflow-hidden border-b border-cyan-900">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-[900] text-white tracking-tight leading-tight mb-2.5 font-sans">
            {title}
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] font-[400] text-blue-100 leading-relaxed max-w-2xl mx-auto font-sans">
            {description}
          </p>
        </div>

        {/* 8-Card Grid (2 rows x 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-[18px] sm:rounded-[20px] shadow-lg p-3 sm:p-3.5 flex items-center space-x-3.5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                {/* Left Thumbnail Image */}
                <div className="w-[78px] h-[88px] sm:w-[86px] sm:h-[96px] rounded-[14px] overflow-hidden shrink-0 bg-slate-100 shadow-inner flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/images/first.webp';
                    }}
                  />
                </div>

                {/* Right Stat & Label with Counting Animation */}
                <div className="flex flex-col justify-center min-w-0 pr-1 text-left">
                  <div className="text-[26px] sm:text-[29px] mb-1.5 leading-none">
                    <AnimatedCounter value={card.metric} />
                  </div>
                  <div className="text-[13px] sm:text-[13.5px] font-[600] text-slate-700 leading-snug font-sans group-hover:text-slate-950 transition-colors">
                    {card.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutKeyMetrics;
