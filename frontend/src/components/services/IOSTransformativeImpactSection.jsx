import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';
import { 
  ShieldCheck, 
  Users, 
  Award, 
  TrendingUp, 
  BarChart3, 
  Smartphone, 
  Sparkles, 
  Trophy 
} from 'lucide-react';

export const IOSTransformativeImpactSection = () => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth Auto-scroll every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const firstCard = container.querySelector('.impact-card');
        const cardWidth = firstCard ? firstCard.offsetWidth : 370;
        const gap = 24; // 1.5rem / 24px
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 25) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const cards = [
    {
      bgColor: 'bg-[#F8D3E3]',
      iconBg: 'bg-[#DE5B8F]',
      icon: <Trophy className="w-5 h-5 text-white" strokeWidth={2.2} />,
      title: 'Competitive Advantage',
      desc: 'Businesses can make a big competitive edge by using mobile apps. Apps offer the opportunity to optimize processes, significant data insights, and more direct and personalized client connections.'
    },
    {
      bgColor: 'bg-[#FCE2CD]',
      iconBg: 'bg-[#E67E3F]',
      icon: <Sparkles className="w-5 h-5 text-white" strokeWidth={2.2} />,
      title: 'Innovate and Stay Competitive',
      desc: 'Investigating flutter app development services can be a calculated move for companies looking to take advantage of the benefits of mobile applications to boost client engagement and productivity.'
    },
    {
      bgColor: 'bg-[#D9F5E5]',
      iconBg: 'bg-[#10B981]',
      icon: <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2.2} />,
      title: 'Ensure Security and Compliance',
      desc: 'Ensure Security and Compliance Using mobile apps, businesses can ensure that user data is never inadvertently disclosed to hackers or unscrupulous commercial vendors by employing secure analytics providers & executing advertising in ethical manner.'
    },
    {
      bgColor: 'bg-[#FEF3C7]',
      iconBg: 'bg-[#D97706]',
      icon: <Users className="w-5 h-5 text-white" strokeWidth={2.2} />,
      title: 'Enhanced Customer Engagement',
      desc: 'Mobile application give businesses the ability to give their users a more immersive and engaging experience by giving them a direct and personalized communication channel.'
    },
    {
      bgColor: 'bg-[#D1F2EE]',
      iconBg: 'bg-[#1EB1A8]',
      icon: <Award className="w-5 h-5 text-white" strokeWidth={2.2} />,
      title: 'Increased Brand Value & ROI',
      desc: 'By actively interacting with users through specialized iOS interfaces, you can use high conversion rates and personalized notifications to boost your mobile commerce and customer lifetime value.'
    },
    {
      bgColor: 'bg-[#D7EDFB]',
      iconBg: 'bg-[#0284C7]',
      icon: <Smartphone className="w-5 h-5 text-white" strokeWidth={2.2} />,
      title: 'Brand Recognition & Reach',
      desc: "iOS apps put your brand directly on high-value users' home screens, delivering 24/7 visibility, personalized engagement, and seamless brand accessibility."
    },
    {
      bgColor: 'bg-[#E5DAF6]',
      iconBg: 'bg-[#9867E9]',
      icon: <BarChart3 className="w-5 h-5 text-white" strokeWidth={2.2} />,
      title: 'Data Collection and Analytics',
      desc: 'App analytics can help you learn more about your users and make decisions that are appropriate, you can gather information on name, age, gender, location, interests, behavior, etc.'
    },
    {
      bgColor: 'bg-[#D1F2EE]',
      iconBg: 'bg-[#1EB1A8]',
      icon: <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.2} />,
      title: 'Gather Valuable Customer Insights',
      desc: 'You can interact with your customers using mobile apps, meet them where they are, ask them for ratings or feedback and get real-time analytics to act accordingly.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Heading (1:1 Copy to Copy from Reference) */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            Explore The Transformative Impact Of iOS App On Your Business Success
          </h2>
        </div>
      </Container>

      {/* Horizontal Pastel Value Cards Carousel with 2.5s Auto-Scroll */}
      <div
        className="relative overflow-hidden w-full select-none pb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-none px-4 sm:px-6 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`impact-card ${card.bgColor} w-[340px] sm:w-[370px] lg:w-[390px] min-h-[220px] sm:min-h-[235px] rounded-[16px] p-6 sm:p-7 text-left flex flex-col justify-start shrink-0 shadow-xs border border-white/70 hover:shadow-md transition-shadow`}
            >
              {/* Small Rounded Icon Box at Top-Left */}
              <div className={`w-10 h-10 rounded-[10px] ${card.iconBg} flex items-center justify-center mb-4 shadow-xs`}>
                {card.icon}
              </div>

              {/* Card Heading */}
              <h4 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] mb-2 leading-snug">
                {card.title}
              </h4>

              {/* Description Text */}
              <p
                className="font-normal text-[#334155]"
                style={{ fontSize: '13px', lineHeight: '1.6' }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IOSTransformativeImpactSection;
