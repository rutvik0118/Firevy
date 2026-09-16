import React, { useRef, useState, useEffect } from 'react';
import Container from '../common/Container';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const processCards = [
  {
    id: 1,
    title: 'Laravel Development',
    icon: (
      <div className="w-9 h-9 rounded-lg bg-sky-100/90 border border-sky-300/60 flex items-center justify-center text-[#005F96] mb-3 shrink-0 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
          <path d="M4 6h16M4 12h16M4 18h16" />
          <rect x="7" y="9" width="10" height="6" rx="1" className="fill-sky-200/50" />
        </svg>
      </div>
    ),
    description:
      'With Laravel development expertise dating back to 2011, we use Composer and Blade, among other technologies, to build scalable, effective, and powerful online apps. Together, we can use our Laravel knowledge to turn your concept into a high-performing product.'
  },
  {
    id: 2,
    title: 'Node Js Development',
    icon: (
      <div className="w-9 h-9 rounded-lg bg-sky-100/90 border border-sky-300/60 flex items-center justify-center text-[#005F96] mb-3 shrink-0 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="10" y1="19" x2="14" y2="5" />
        </svg>
      </div>
    ),
    description:
      "For the purpose of developing scalable and quick online apps, we provide Node.js development services. We can handle complicated jobs and heavy traffic quickly by using JavaScript's event-driven nature for efficient real-time applications and a single JavaScript codebase for both the server and client sides."
  },
  {
    id: 3,
    title: 'MERN Stack App Development',
    icon: (
      <div className="w-9 h-9 rounded-lg bg-sky-100/90 border border-sky-300/60 flex items-center justify-center text-[#005F96] mb-3 shrink-0 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      </div>
    ),
    description:
      'Select our first-rate development services using the MERN Stack (Node.js, MongoDB, Express, and React). Our expertise is in developing intuitive web apps that meet user demands while delivering exceptional performance.'
  },
  {
    id: 4,
    title: 'MEAN Stack App Development',
    icon: (
      <div className="w-9 h-9 rounded-lg bg-sky-100/90 border border-sky-300/60 flex items-center justify-center text-[#005F96] mb-3 shrink-0 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      </div>
    ),
    description:
      'When it comes to MEAN stack development, we are your trusted partner. Our team uses Angular, Node.js, Express, and Mongoose to create enterprise applications that scale effortlessly and perform very well.'
  },
  {
    id: 5,
    title: 'Full-Stack JavaScript Development',
    icon: (
      <div className="w-9 h-9 rounded-lg bg-sky-100/90 border border-sky-300/60 flex items-center justify-center text-[#005F96] mb-3 shrink-0 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>
    ),
    description:
      'Leverage the combined power of Node.js on the backend with modern reactive frontend frameworks like React, Next.js, and Vue to build unified, end-to-end JavaScript applications.'
  },
  {
    id: 6,
    title: 'Microservices & Real-Time APIs',
    icon: (
      <div className="w-9 h-9 rounded-lg bg-sky-100/90 border border-sky-300/60 flex items-center justify-center text-[#005F96] mb-3 shrink-0 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>
    ),
    description:
      'Architect resilient microservices with event-driven Socket.io, Redis streams, and asynchronous Node.js message queues tailored for enterprise high-concurrency throughput.'
  }
];

export const NodeJsExceptionalProcessSection = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll every 2.5 seconds (2500ms) with smooth wrap-around
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const scrollStep = 440; // Step matching wider card width + gap

        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          // Loop back to start smoothly
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 440;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left border-b border-slate-100 select-none overflow-hidden">
      <Container>
        {/* Section Heading matching Screenshot 1:1 */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-[900] text-[#0F172A] tracking-tight leading-[1.25]">
            Firevy Exceptional Process in Creating Cutting-Edge Node Js Applications
          </h2>
        </div>
      </Container>

      {/* Full-width Carousel Track */}
      <div
        className="w-full px-4 sm:px-8 xl:px-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          className="flex space-x-5 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {processCards.map((card) => (
            <div
              key={card.id}
              className="w-[340px] sm:w-[420px] md:w-[460px] lg:w-[480px] shrink-0 p-5 sm:p-6 rounded-[14px] bg-[#E1F3FD] flex flex-col justify-start snap-start hover:shadow-md transition-all duration-300 border border-sky-200/50 hover:bg-[#D7EFFC]"
            >
              {card.icon}
              <h3 className="text-[16px] sm:text-[17px] font-[800] text-[#0F172A] mb-1.5 tracking-tight">
                {card.title}
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#334155] leading-[1.6] font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Left & Right Navigation Arrows */}
        <div className="flex items-center justify-center space-x-4 pt-3">
          <button
            onClick={() => handleScroll('left')}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer active:scale-95 border border-slate-200/80 shadow-2xs"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer active:scale-95 border border-slate-200/80 shadow-2xs"
            aria-label="Next Slide"
          >
            <ArrowRight className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NodeJsExceptionalProcessSection;
