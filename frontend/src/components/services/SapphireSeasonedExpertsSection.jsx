import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const SapphireSeasonedExpertsSection = () => {
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);
  const [expertTabs, setExpertTabs] = useState({});

  const categories = [
    'Trending',
    'Product Development',
    'Saas',
    'AI/ML',
    'Data Engineering',
    'Design',
    'Marketing',
    'IoT App Dev',
    'Blockchain Dev'
  ];

  const expertTeamData = {
    'Trending': [
      {
        id: 'trend-1',
        title: 'Mobile Application Team',
        image: '/assets/team/mobile_app_team.jpg',
        techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
        team: ['Tech Lead (1)', 'Sr. Android Dev (2)', 'Sr. iOS Dev (2)', 'Flutter Dev (2)', 'QA Engineer (1)']
      },
      {
        id: 'trend-2',
        title: 'Saas Product Dev. Team',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
        team: ['Solution Architect (1)', 'Full Stack Lead (2)', 'Cloud DevOps (1)', 'Frontend Specialist (2)', 'Product QA (1)']
      },
      {
        id: 'trend-3',
        title: 'Microsoft Dev. Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
        team: ['.NET Architect (1)', 'SharePoint Lead (2)', 'Power Platform Eng (2)', 'Azure Cloud Eng (1)', 'BI Analyst (1)']
      },
      {
        id: 'trend-4',
        title: 'Node.js & Cloud Squad',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['Node.js', 'Express.js', 'NestJS', 'TypeScript', 'GraphQL', 'AWS', 'Redis'],
        team: ['Principal Node.js Architect (1)', 'Sr. Backend Engineers (3)', 'Cloud DevOps (1)', 'QA Specialist (1)']
      },
      {
        id: 'trend-5',
        title: 'AI & Data Engineering Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'LangChain', 'Snowflake'],
        team: ['AI Research Lead (1)', 'ML Engineers (2)', 'Data Engineer (1)', 'MLOps Eng (1)']
      }
    ],
    'Product Development': [
      {
        id: 'prod-1',
        title: 'Mobile Application Team',
        image: '/assets/team/mobile_app_team.jpg',
        techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
        team: ['Tech Lead (1)', 'Sr. Android Dev (2)', 'Sr. iOS Dev (2)', 'Flutter Dev (2)', 'QA Engineer (1)']
      },
      {
        id: 'prod-2',
        title: 'Saas Product Dev. Team',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
        team: ['Solution Architect (1)', 'Full Stack Lead (2)', 'Cloud DevOps (1)', 'Frontend Specialist (2)', 'Product QA (1)']
      },
      {
        id: 'prod-3',
        title: 'Microsoft Dev. Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
        team: ['.NET Architect (1)', 'SharePoint Lead (2)', 'Power Platform Eng (2)', 'Azure Cloud Eng (1)', 'BI Analyst (1)']
      }
    ],
    'Saas': [
      {
        id: 'saas-1',
        title: 'Saas Product Dev. Team',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
        team: ['Solution Architect (1)', 'Full Stack Lead (2)', 'Cloud DevOps (1)', 'Frontend Specialist (2)', 'Product QA (1)']
      },
      {
        id: 'saas-2',
        title: 'Mobile Application Team',
        image: '/assets/team/mobile_app_team.jpg',
        techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
        team: ['Tech Lead (1)', 'Sr. Android Dev (2)', 'Sr. iOS Dev (2)', 'Flutter Dev (2)', 'QA Engineer (1)']
      },
      {
        id: 'saas-3',
        title: 'Microsoft Dev. Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
        team: ['.NET Architect (1)', 'SharePoint Lead (2)', 'Power Platform Eng (2)', 'Azure Cloud Eng (1)', 'BI Analyst (1)']
      }
    ],
    'AI/ML': [
      {
        id: 'aiml-1',
        title: 'AI & NLP Engineering Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['PyTorch', 'TensorFlow', 'HuggingFace', 'OpenAI', 'Python', 'FastAPI', 'LangChain'],
        team: ['AI Lead (1)', 'NLP Engineer (2)', 'MLOps Specialist (1)', 'Data Annotator (1)']
      },
      {
        id: 'aiml-2',
        title: 'Computer Vision Team',
        image: '/assets/team/mobile_app_team.jpg',
        techs: ['OpenCV', 'YOLOv8', 'CUDA', 'Python', 'TensorRT', 'AWS Bedrock'],
        team: ['CV Architect (1)', 'Deep Learning Dev (2)', 'Edge AI Eng (1)', 'QA (1)']
      },
      {
        id: 'aiml-3',
        title: 'GenAI & LLM Solutions Team',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['LLaMA 3', 'Claude API', 'LangGraph', 'Pinecone', 'Vector DB', 'Next.js'],
        team: ['GenAI Lead (1)', 'Prompt Engineer (2)', 'Fullstack AI Dev (2)', 'QA (1)']
      }
    ],
    'Data Engineering': [
      {
        id: 'data-1',
        title: 'Data Analytics Services Team',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['Big Data Analytics', 'Predictive Analytics', 'Data Management', 'Visualization And Reporting'],
        team: ['Lead Data Analyst (1)', 'BI Engineer (2)', 'Data Pipeline Dev (2)', 'Analytics QA (1)']
      },
      {
        id: 'data-2',
        title: 'Data Migration Services Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['Data Science', 'Data Warehousing', 'Data Analytics', 'Big Data Implementation'],
        team: ['Migration Architect (1)', 'ETL Pipeline Lead (2)', 'Database Migration Eng (2)', 'Data QA (1)']
      },
      {
        id: 'data-3',
        title: 'Data Science Team',
        image: '/assets/team/mobile_app_team.jpg',
        techs: ['Data Science Team', 'Data Visualization', 'Machine Learning', 'Data Analysis', 'AWS', 'Data Mining'],
        team: ['Principal Data Scientist (1)', 'ML Engineer (3)', 'AI Researcher (1)', 'Data Ops Lead (1)']
      }
    ],
    'Design': [
      {
        id: 'design-1',
        title: 'UI/UX Design Team',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['Figma', 'Adobe XD', 'Sketch', 'Protopie', 'Wireframing', 'User Research'],
        team: ['Design Lead (1)', 'Sr UI Designer (2)', 'UX Researcher (1)', 'Motion Designer (1)']
      },
      {
        id: 'design-2',
        title: 'Brand & Product Identity Team',
        image: '/assets/team/mobile_app_team.jpg',
        techs: ['Illustrator', 'Photoshop', 'Brand Guidelines', 'Typography', '3D Blender'],
        team: ['Creative Director (1)', 'Brand Strategist (1)', 'Visual Designer (2)']
      },
      {
        id: 'design-3',
        title: 'Design System & Prototyping Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['Design Tokens', 'Storybook', 'Figma Variants', 'Accessibility (a11y)', 'CSS'],
        team: ['Design System Lead (1)', 'UI Engineer (2)', 'Accessibility QA (1)']
      }
    ],
    'Marketing': [
      {
        id: 'mkt-1',
        title: 'Growth & Digital Marketing Team',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['Google Analytics 4', 'HubSpot', 'SEMrush', 'Meta Ads', 'A/B Testing'],
        team: ['Growth Lead (1)', 'Performance Marketer (2)', 'Content Strategist (1)']
      },
      {
        id: 'mkt-2',
        title: 'SEO & Performance Analytics Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['Technical SEO', 'Ahrefs', 'Search Console', 'Schema Markup', 'Core Web Vitals'],
        team: ['SEO Architect (1)', 'Analytics Specialist (1)', 'Technical Writer (2)']
      },
      {
        id: 'mkt-3',
        title: 'Content & Campaign Strategy Team',
        image: '/assets/team/mobile_app_team.jpg',
        techs: ['Copywriting', 'Email Automation', 'Klaviyo', 'LinkedIn Ads', 'Video Marketing'],
        team: ['Campaign Lead (1)', 'Copywriter (2)', 'Social Media Manager (1)']
      }
    ],
    'IoT App Dev': [
      {
        id: 'iot-1',
        title: 'Smart Hardware & IoT Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['MQTT', 'BLE / Bluetooth', 'ESP32', 'Raspberry Pi', 'AWS IoT Core', 'C++'],
        team: ['IoT Architect (1)', 'Embedded Firmware Dev (2)', 'Hardware QA (1)']
      },
      {
        id: 'iot-2',
        title: 'Connected Devices & Sensors Team',
        image: '/assets/team/mobile_app_team.jpg',
        techs: ['Zigbee', 'LoRaWAN', 'Modbus', 'Telemetry Pipelines', 'Grafana', 'InfluxDB'],
        team: ['Sensor Network Lead (1)', 'Firmware Eng (2)', 'Cloud Integrator (1)']
      },
      {
        id: 'iot-3',
        title: 'Industrial IoT & Edge Computing Team',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['Edge AI', 'OPC-UA', 'SCADA', 'Time-Series DB', 'Docker Edge', 'Linux Embedded'],
        team: ['IIoT Lead (1)', 'Edge Computing Dev (2)', 'Industrial QA (1)']
      }
    ],
    'Blockchain Dev': [
      {
        id: 'bc-1',
        title: 'Smart Contract & dApp Team',
        image: '/assets/team/mobile_app_team.jpg',
        techs: ['Solidity', 'Rust', 'Hardhat', 'Ethers.js', 'Web3.js', 'Ethereum', 'Polygon'],
        team: ['Blockchain Architect (1)', 'Smart Contract Dev (2)', 'Security Auditor (1)']
      },
      {
        id: 'bc-2',
        title: 'Web3 & DeFi Architecture Team',
        image: '/assets/team/saas_dev_team.jpg',
        techs: ['Solana', 'Anchor', 'IPFS', 'The Graph', 'MetaMask', 'Subgraphs'],
        team: ['DeFi Lead (1)', 'Rust Blockchain Eng (2)', 'Cryptographer (1)']
      },
      {
        id: 'bc-3',
        title: 'Crypto & Tokenomics Team',
        image: '/assets/team/microsoft_dev_team.jpg',
        techs: ['ERC-20 / ERC-721', 'Staking Protocols', 'Zero Knowledge Proofs', 'Chainlink Oracles'],
        team: ['Tokenomics Strategist (1)', 'Protocol Engineer (2)', 'Audit QA (1)']
      }
    ]
  };

  const currentList = expertTeamData[expertActiveCategory] || expertTeamData['Trending'];
  const maxIdx = Math.max(0, currentList.length - 3);
  const visibleCards = currentList.slice(expertCarouselIndex, expertCarouselIndex + 3);

  return (
    <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left overflow-hidden select-none w-full border-b border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Meet Sapphire’s Exceptional Team of Seasoned Experts
          </h2>
        </div>

        {/* Top Category Filter Pills Bar */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="bg-[#D9EFF9] rounded-full p-1.5 sm:p-2 inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 shadow-2xs max-w-full">
            {categories.map((category) => {
              const isActive = expertActiveCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setExpertActiveCategory(category);
                    setExpertCarouselIndex(0);
                  }}
                  className={`px-3.5 sm:px-4 md:px-5 py-2 rounded-full text-xs sm:text-[13px] font-[700] whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#005F96] text-white shadow-xs'
                      : 'text-[#334155] hover:text-[#005F96] hover:bg-white/50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1340px] mx-auto">
          {visibleCards.map((card) => {
            const currentTab = expertTabs[card.id] || 'tech';
            const activePills = currentTab === 'tech' ? card.techs : card.team;

            return (
              <div
                key={card.id}
                className="bg-[#DDF1FC] rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 border border-[#CCE8F7] flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 text-left"
              >
                <div>
                  {/* Top Image Box */}
                  <div className="w-full h-[180px] sm:h-[195px] rounded-[14px] overflow-hidden shadow-xs mb-4 bg-slate-900 group">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                    />
                  </div>

                  {/* Team Title */}
                  <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] mb-3 text-left">
                    {card.title}
                  </h3>

                  {/* Sub-Tabs Switch (Technologies / Team Composition) */}
                  <div className="flex items-center space-x-2 mb-3.5 text-left">
                    <button
                      onClick={() => setExpertTabs((prev) => ({ ...prev, [card.id]: 'tech' }))}
                      className={`text-xs font-[800] rounded-[6px] px-3.5 py-1.5 transition-all cursor-pointer ${
                        currentTab === 'tech'
                          ? 'bg-[#005F96] text-white shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      Technologies
                    </button>
                    <button
                      onClick={() => setExpertTabs((prev) => ({ ...prev, [card.id]: 'team' }))}
                      className={`text-xs font-[700] rounded-[6px] px-3.5 py-1.5 transition-all cursor-pointer ${
                        currentTab === 'team'
                          ? 'bg-[#005F96] text-white shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      Team Composition
                    </button>
                  </div>

                  {/* Tag Pills Grid */}
                  <div className="flex flex-wrap gap-2 min-h-[66px] text-left items-start mb-4">
                    {activePills.map((pill, pillIdx) => (
                      <span
                        key={pillIdx}
                        className="bg-white text-[#1E293B] font-[600] text-xs px-3.5 py-1.5 rounded-full shadow-2xs border border-white/60"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2 text-left">
                  <Link
                    to="/contact"
                    className="bg-[#005F96] hover:bg-[#004D7A] text-white text-xs font-[800] rounded-[6px] px-4 py-2.5 inline-flex items-center space-x-2 transition-all shadow-xs group"
                  >
                    <span>Get Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Center Arrow Controls */}
        <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-10">
          <button
            onClick={() => setExpertCarouselIndex((prev) => Math.max(0, prev - 1))}
            disabled={expertCarouselIndex === 0}
            className={`p-2 rounded-full transition-all text-2xl font-bold select-none cursor-pointer ${
              expertCarouselIndex === 0
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-700 hover:text-[#005F96] hover:bg-slate-100'
            }`}
            aria-label="Previous team slide"
          >
            ←
          </button>
          <button
            onClick={() => setExpertCarouselIndex((prev) => Math.min(maxIdx, prev + 1))}
            disabled={expertCarouselIndex >= maxIdx}
            className={`p-2 rounded-full transition-all text-2xl font-bold select-none cursor-pointer ${
              expertCarouselIndex >= maxIdx
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-700 hover:text-[#005F96] hover:bg-slate-100'
            }`}
            aria-label="Next team slide"
          >
            →
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SapphireSeasonedExpertsSection;
