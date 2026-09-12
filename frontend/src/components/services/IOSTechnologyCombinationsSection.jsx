import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';
import {
  Code as SiSwift,
  Terminal as SiPython,
  Zap as SiFirebase,
  FileCode as SiPhp,
  Cpu as SiGo,
  Server as SiNodedotjs,
  Globe as SiServerless,
  Layers as SiGraphql,
  Database as SiPostgresql,
  Cloud as FaAws
} from 'lucide-react';

export const IOSTechnologyCombinationsSection = () => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth Auto-scroll every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const firstCard = container.querySelector('.tech-combo-card');
        const cardWidth = firstCard ? firstCard.offsetWidth : 360;
        const gap = 24; // 1.5rem / 24px space
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

  const combinations = [
    {
      id: 'python',
      title: 'Swift/SwiftUI + Python',
      desc: "Make use of Python's prowess in automation, machine learning, data processing, and backend programming to improve the features and performance of your iOS apps.",
      icon: <SiPython className="w-5 h-5 text-white shrink-0" />
    },
    {
      id: 'firebase',
      title: 'Swift/SwiftUI + Firebase',
      desc: 'This combination will give your feature-rich, scalable iOS apps access to secure authentication, real-time data syncing, cloud storage, and analytics.',
      icon: <SiFirebase className="w-5 h-5 text-white shrink-0" />
    },
    {
      id: 'php',
      title: 'Swift/SwiftUI + PHP',
      desc: 'Combining PHP with Swift guarantees smooth data transfer, integration with external services, strong backend capabilities, and improved user experience overall.',
      icon: <SiPhp className="w-5 h-5 text-white shrink-0" />
    },
    {
      id: 'golang',
      title: 'Swift/SwiftUI + Golang',
      desc: 'Develop apps using Golang for high-speed concurrency, using the swift client interface to handle real-time communications, heavy server-side logic, and scalable cloud microservices.',
      icon: <SiGo className="w-5 h-5 text-white shrink-0" />
    },
    {
      id: 'node',
      title: 'Swift/SwiftUI + Node JS',
      desc: 'Our developers use this combination to create iOS apps for real-time communication and e-commerce platforms, among other applications that need server-side functionality.',
      icon: <SiNodedotjs className="w-5 h-5 text-white shrink-0" />
    },
    {
      id: 'serverless',
      title: 'Swift/SwiftUI + Serverless',
      desc: 'With serverless architecture, developers can leverage flexibility and cost-effective backend services to create scalable iOS apps with dynamic and responsive user interfaces.',
      icon: <SiServerless className="w-5 h-5 text-white shrink-0" />
    },
    {
      id: 'graphql',
      title: 'Swift/SwiftUI + GraphQL',
      desc: 'Empower your iOS application with optimized, high-performance data querying, minimizing network payload and ensuring snappy user experiences.',
      icon: <SiGraphql className="w-5 h-5 text-white shrink-0" />
    },
    {
      id: 'aws',
      title: 'Swift/SwiftUI + AWS Cloud',
      desc: 'Connect your iOS app directly to enterprise AWS infrastructure including AWS Lambda, Cognito, Amplify, and DynamoDB for enterprise-grade scalability.',
      icon: <FaAws className="w-5 h-5 text-white shrink-0" />
    },
    {
      id: 'postgres',
      title: 'Swift/SwiftUI + PostgreSQL',
      desc: 'Pair high-performance Swift frontend architecture with robust relational databases to ensure strict ACID compliance, complex queries, and data integrity.',
      icon: <SiPostgresql className="w-5 h-5 text-white shrink-0" />
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle (1:1 Copy-to-Copy Reference Match) */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3 px-4">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            Technology Combinations Used By Sapphire For iOS App Development
          </h2>
          <p
            className="font-normal text-[#475569] max-w-3xl mx-auto"
            style={{ fontSize: '13.5px', lineHeight: '1.65' }}
          >
            The technological combinations listed below, which prioritize efficiency, scalability, and performance, allow our iOS developer to guarantee flawless performance and user experience across all platforms.
          </p>
        </div>
      </Container>

      {/* Auto-scrolling Technology Combination Cards (1:1 Reference Match) */}
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
          {combinations.map((card, idx) => (
            <div
              key={idx}
              className="tech-combo-card bg-[#E4F2FA] w-[340px] sm:w-[370px] lg:w-[390px] min-h-[220px] sm:min-h-[230px] rounded-[16px] p-6 sm:p-7 text-left flex flex-col justify-start shrink-0 shadow-xs border border-[#CDE5F5] hover:shadow-md transition-shadow"
            >
              {/* Blue Capsule Pill Badge with Official Swift Logo + Official Tech Logo */}
              <div className="inline-flex items-center space-x-2.5 bg-[#54A0DB] px-4 py-2 rounded-full w-fit mb-4.5 shadow-2xs">
                {/* Official Apple Swift Bird Logo */}
                <SiSwift className="w-5 h-5 text-white shrink-0" />

                {/* Plus Sign */}
                <span className="text-white text-[13px] font-[800] leading-none select-none">+</span>

                {/* Official Brand Logo from react-icons */}
                {card.icon}
              </div>

              {/* Combination Title */}
              <h4 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] mb-2 leading-snug">
                {card.title}
              </h4>

              {/* Description */}
              <p
                className="font-normal text-[#334155]"
                style={{ fontSize: '13px', lineHeight: '1.62' }}
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

export default IOSTechnologyCombinationsSection;
