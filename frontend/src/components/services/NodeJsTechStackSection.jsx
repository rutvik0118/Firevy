import React from 'react';
import Container from '../common/Container';

const techStackCards = [
  {
    id: 1,
    title: 'Back End & Frameworks',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8 L22 8 L22 40 L12 40 Z" />
        <line x1="16" y1="24" x2="16" y2="25" strokeWidth="3" />
        <rect x="22" y="11" width="16" height="12" rx="2" />
        <line x1="26" y1="16" x2="34" y2="16" strokeWidth="1.8" />
        <rect x="22" y="25" width="16" height="12" rx="2" />
        <line x1="26" y1="30" x2="34" y2="30" strokeWidth="1.8" />
      </svg>
    ),
    col1: ['Node.js 20+ LTS', 'Express.js', 'NestJS'],
    col2: ['Fastify', 'TypeScript', 'Koa.js']
  },
  {
    id: 2,
    title: 'Frontend & Full-Stack',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <circle cx="12" cy="14" r="1.2" fill="currentColor" />
        <circle cx="16" cy="14" r="1.2" fill="currentColor" />
        <circle cx="20" cy="14" r="1.2" fill="currentColor" />
        <rect x="11" y="23" width="9" height="10" rx="1.5" />
        <line x1="24" y1="24" x2="36" y2="24" strokeWidth="1.8" />
        <line x1="24" y1="28" x2="36" y2="28" strokeWidth="1.8" />
        <line x1="24" y1="32" x2="32" y2="32" strokeWidth="1.8" />
      </svg>
    ),
    col1: ['React JS', 'Next.js', 'Vue.js'],
    col2: ['Angular', 'Tailwind CSS', 'Redux Toolkit']
  },
  {
    id: 3,
    title: 'Database & ORM',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="24" cy="12" rx="14" ry="5.5" />
        <path d="M10 12 V22 C10 25 16 27.5 24 27.5 C32 27.5 38 25 38 22 V12" />
        <path d="M10 22 V32 C10 35 16 37.5 24 37.5 C32 35 38 32 38 32 V22" />
      </svg>
    ),
    col1: ['MongoDB / Mongoose', 'PostgreSQL / Prisma', 'Redis Caching'],
    col2: ['MySQL', 'DynamoDB', 'TypeORM']
  },
  {
    id: 4,
    title: 'Deployment & Cloud',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="28" height="20" rx="2" />
        <circle cx="24" cy="20" r="6" strokeWidth="1.8" />
        <ellipse cx="24" cy="20" rx="2.5" ry="6" strokeWidth="1.8" />
        <line x1="18" y1="20" x2="30" y2="20" strokeWidth="1.8" />
        <path d="M6 30 L42 30 C43 30, 43 33, 41 33 L7 33 C5 33, 5 30, 6 30 Z" />
        <path d="M24 24 L24 16 M21 19 L24 16 L27 19" strokeWidth="2" />
      </svg>
    ),
    col1: ['AWS Lambda', 'Docker', 'Kubernetes'],
    col2: ['Google Cloud', 'Microsoft Azure', 'CI/CD Pipelines']
  },
  {
    id: 5,
    title: 'Testing & Quality',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="11" />
        <path d="M19 20 L22 23 L29 16" strokeWidth="2.5" />
        <path d="M17 29 L14 41 L24 37 L34 41 L31 29" />
      </svg>
    ),
    col1: ['Jest', 'Mocha & Chai', 'Cypress'],
    col2: ['Supertest', 'SonarQube', 'Postman']
  },
  {
    id: 6,
    title: 'Architecture & Real-Time',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="14" />
        <path d="M24 6 V9 M24 39 V42 M6 24 H9 M39 24 H42 M11.3 11.3 L13.5 13.5 M34.5 34.5 L36.7 36.7 M11.3 36.7 L13.5 34.5 M34.5 13.5 L36.7 11.3" strokeWidth="2.8" />
        <path d="M19 24 C19 21.5, 15 21.5, 15 24 C15 26.5, 19 26.5, 24 24 C29 21.5, 33 21.5, 33 24 C33 26.5, 29 26.5, 24 24" strokeWidth="2.2" />
      </svg>
    ),
    col1: ['Microservices', 'Socket.io / WebSockets', 'GraphQL'],
    col2: ['RabbitMQ', 'Apache Kafka', 'gRPC']
  }
];

export const NodeJsTechStackSection = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white font-sans text-left">
      <Container className="max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-7 sm:mb-9 space-y-2.5">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Technology Stack
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We employ cutting-edge technologies and tools to make sure your applications are built on the latest technology. Have a look at our tech stack:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto items-stretch">
          {techStackCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F0F8FC] rounded-[12px] p-6 sm:p-7 border border-[#E0F0FA] shadow-[0_2px_12px_rgba(0,95,150,0.03)] hover:shadow-[0_8px_24px_rgba(0,95,150,0.08)] transition-all duration-300 flex flex-col justify-start"
            >
              <div className="flex items-center space-x-3.5 mb-5 pb-1 border-b border-[#E2EFF7]/60">
                <div className="shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] tracking-tight">
                  {card.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left">
                <ul className="space-y-2">
                  {card.col1.map((tech, idx) => (
                    <li key={idx} className="text-[13px] sm:text-[13.5px] text-[#334155] font-[500] flex items-center">
                      <span className="text-[#64748B] mr-2">-</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-2">
                  {card.col2.map((tech, idx) => (
                    <li key={idx} className="text-[13px] sm:text-[13.5px] text-[#334155] font-[500] flex items-center">
                      <span className="text-[#64748B] mr-2">-</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NodeJsTechStackSection;
