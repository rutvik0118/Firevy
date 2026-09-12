import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';

// Zero-dependency SVG Icons for iOS Technology Combinations
const SwiftIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M21.706 14.86c-.027.057-.59 1.196-1.574 2.308-1.54 1.745-3.523 2.973-5.719 3.525 3.013-1.42 5.094-4.225 5.567-7.46.03-.207.03-.314.03-.314s-.307.318-.727.653c-1.895 1.503-4.237 2.29-6.66 2.24 3.003-1.92 4.965-5.068 5.342-8.59.02-.19.03-.362.03-.362s-.488.473-.974.832c-2.88 2.128-6.42 3.107-9.98 2.76 1.488-.934 2.775-2.14 3.79-3.553C12.39 4.545 13.568 2.39 14.22.01c0 0-1.782.72-3.64 2.142-2.316 1.77-4.135 4.14-5.26 6.845-.19.46-.363.93-.518 1.408C4.08 8.94 3.75 7.15 3.75 7.15s-.69 2.05-.285 4.295c.29 1.62.98 3.12 2.007 4.38-1.285-.16-2.527-.64-3.618-1.41-.09-.06-.17-.13-.17-.13s.41 1.05 1.254 1.93c1.786 1.86 4.316 3.03 7.035 3.23-2.15.2-4.32-.23-6.25-1.25 0 0 .52 1.03 1.54 1.84 2.35 1.88 5.36 2.65 8.35 2.16 3.49-.57 6.64-2.38 8.89-5.11.83-1.01 1.43-2.16 1.76-3.39.05-.18.09-.34.09-.34s-.65.65-1.57 1.13c-.35.18-.72.33-1.09.47v.01z" />
  </svg>
);

const PythonIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M11.914 0C5.82 0 6.2 2.645 6.2 2.645l.006 2.738h5.81v.827H3.92S0 5.753 0 11.86c0 6.104 3.42 5.894 3.42 5.894h2.04v-2.868s-.11-3.42 3.364-3.42h5.782s3.255.053 3.255-3.15V3.15S18.332 0 11.914 0zm-3.23 1.832a1.077 1.077 0 1 1 0 2.154 1.077 1.077 0 0 1 0-2.154zM12.086 24c6.094 0 5.714-2.645 5.714-2.645l-.006-2.738h-5.81v-.827h8.096S24 18.247 24 12.14c0-6.104-3.42-5.894-3.42-5.894h-2.04v2.868s.11 3.42-3.364 3.42H9.394s-3.255-.053-3.255 3.15v5.058S5.668 24 12.086 24zm3.23-1.832a1.077 1.077 0 1 1 0-2.154 1.077 1.077 0 0 1 0 2.154z" />
  </svg>
);

const FirebaseIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.28l3.543 6.643zm16.787 2.677l-2.094-13.02a.543.543 0 0 0-.916-.285L3.376 18.349l7.747 4.364a2.072 2.072 0 0 0 2.023 0zM14.004 8.79l-2.3-4.39a.542.542 0 0 0-.961 0L3.435 17.848z" />
  </svg>
);

const PhpIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-6.69 15.75H3.6l1.83-7.5h3.33c1.5 0 2.49.84 2.16 2.22-.33 1.35-1.53 2.19-2.91 2.19H6.27l-.96 3.09zm4.23-4.59c.24-.96-.24-1.5-1.17-1.5H7.02l-.72 2.31h1.35c.78 0 1.29-.33 1.44-.81zm6.96 4.59h-1.71l.96-3.09h-1.74l-.96 3.09h-1.71l2.31-7.5h1.71l-.69 2.19h1.74l.69-2.19h1.71l-2.31 7.5zm5.79-4.59c-.33 1.35-1.53 2.19-2.91 2.19h-1.74l-.96 3.09h-1.71l1.83-7.5h3.33c1.5 0 2.49.84 2.16 2.22zm-2.07-.81c.24-.96-.24-1.5-1.17-1.5h-1.35l-.72 2.31h1.35c.78 0 1.29-.33 1.44-.81z" />
  </svg>
);

const GoIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M1.811 10.231c-.131-.412-.047-.79.252-1.135l.032-.037c.338-.387.807-.514 1.408-.381 1.096.242 2.188.502 3.284.747.387.086.666.273.837.607.172.333.151.684-.064 1.053-.243.414-.622.569-1.137.464-1.189-.243-2.378-.485-3.567-.728-.363-.074-.712-.177-1.045-.59zm-.654 3.538c.321-.371.742-.489 1.264-.356 1.189.303 2.378.606 3.567.909.435.111.725.334.87.72.146.386.075.766-.214 1.14-.289.375-.712.487-1.217.375-1.2-.266-2.4-.533-3.6-.799a1.184 1.184 0 0 1-.67-.989zm14.11-4.707c-2.42 0-4.382 1.962-4.382 4.382 0 2.42 1.962 4.382 4.382 4.382 1.83 0 3.407-1.121 4.062-2.716h-4.062v-1.666h6.148c.058.33.094.667.094 1.015 0 3.585-2.909 6.494-6.494 6.494-3.585 0-6.494-2.909-6.494-6.494 0-3.585 2.909-6.494 6.494-6.494 2.115 0 3.985.998 5.176 2.548l-1.442 1.258c-.859-1.332-2.228-2.209-3.734-2.209z" />
  </svg>
);

const NodeIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm7.8 16.5l-7.8 4.5-7.8-4.5V7.5L12 3l7.8 4.5v9z" />
  </svg>
);

const ServerlessIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M0 4.5h24v3H0zm0 6h24v3H0zm0 6h24v3H0z" />
  </svg>
);

const GraphqlIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm6.93 6.13l-6.93-4-6.93 4v7.74l6.93 4 6.93-4V8.13z" />
  </svg>
);

const AwsIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M18.8 17.5c-3.7 2.4-8.8 3.5-13.6 1.8-.7-.2-1.5-.7-2-1.3-.2-.3-.2-.7.1-.9.4-.3.9-.2 1.3 0 4.1 1.5 8.6.6 12-1.4.5-.3 1 .2 1.2.6.2.5-.1 1-.4 1.2h-.6zM22.5 15c-.4-.5-2.6-.2-3.8.3-.3.1-.4-.2-.2-.5 1.2-1.8 3.2-1.3 3.6-.8.4.5.7 2.8-.8 4.2-.3.3-.6.1-.5-.2.5-1.1 1.7-3 .7-3zM12 2.5l5.5 10H6.5L12 2.5z" />
  </svg>
);

const PostgresIcon = () => (
  <svg className="w-5 h-5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V16h-2v2.93C7.05 18.44 4 15.08 4 11c0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.08-3.05 7.44-7 7.93z" />
  </svg>
);

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
      icon: <PythonIcon />
    },
    {
      id: 'firebase',
      title: 'Swift/SwiftUI + Firebase',
      desc: 'This combination will give your feature-rich, scalable iOS apps access to secure authentication, real-time data syncing, cloud storage, and analytics.',
      icon: <FirebaseIcon />
    },
    {
      id: 'php',
      title: 'Swift/SwiftUI + PHP',
      desc: 'Combining PHP with Swift guarantees smooth data transfer, integration with external services, strong backend capabilities, and improved user experience overall.',
      icon: <PhpIcon />
    },
    {
      id: 'golang',
      title: 'Swift/SwiftUI + Golang',
      desc: 'Develop apps using Golang for high-speed concurrency, using the swift client interface to handle real-time communications, heavy server-side logic, and scalable cloud microservices.',
      icon: <GoIcon />
    },
    {
      id: 'node',
      title: 'Swift/SwiftUI + Node JS',
      desc: 'Our developers use this combination to create iOS apps for real-time communication and e-commerce platforms, among other applications that need server-side functionality.',
      icon: <NodeIcon />
    },
    {
      id: 'serverless',
      title: 'Swift/SwiftUI + Serverless',
      desc: 'With serverless architecture, developers can leverage flexibility and cost-effective backend services to create scalable iOS apps with dynamic and responsive user interfaces.',
      icon: <ServerlessIcon />
    },
    {
      id: 'graphql',
      title: 'Swift/SwiftUI + GraphQL',
      desc: 'Empower your iOS application with optimized, high-performance data querying, minimizing network payload and ensuring snappy user experiences.',
      icon: <GraphqlIcon />
    },
    {
      id: 'aws',
      title: 'Swift/SwiftUI + AWS Cloud',
      desc: 'Connect your iOS app directly to enterprise AWS infrastructure including AWS Lambda, Cognito, Amplify, and DynamoDB for enterprise-grade scalability.',
      icon: <AwsIcon />
    },
    {
      id: 'postgres',
      title: 'Swift/SwiftUI + PostgreSQL',
      desc: 'Pair high-performance Swift frontend architecture with robust relational databases to ensure strict ACID compliance, complex queries, and data integrity.',
      icon: <PostgresIcon />
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
              {/* Blue Capsule Pill Badge with Swift Logo + Tech Logo */}
              <div className="inline-flex items-center space-x-2.5 bg-[#54A0DB] px-4 py-2 rounded-full w-fit mb-4.5 shadow-2xs">
                <SwiftIcon />
                <span className="text-white text-[13px] font-[800] leading-none select-none">+</span>
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
