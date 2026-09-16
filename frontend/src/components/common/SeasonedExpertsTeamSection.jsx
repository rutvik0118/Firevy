import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const SeasonedExpertsTeamSection = ({ brandName = 'Sapphire’s' }) => {
  const [activeCategory, setActiveCategory] = useState('Trending');
  const [cardToggleState, setCardToggleState] = useState({});
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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

  const categoryTeams = {
    'Trending': [
      {
        id: 'trending-1',
        title: 'Mobile Application Team',
        image: '/images/team_card_mobile.jpg',
        techPills: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
        compositionPills: ['Business Analyst', 'Mobile UI Designer', 'Kotlin/Swift Dev', 'QA Automation', 'Project Manager'],
        link: '/services/mobile-app-development'
      },
      {
        id: 'trending-2',
        title: 'Saas Product Dev. Team',
        image: '/images/team_card_saas.jpg',
        techPills: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
        compositionPills: ['Cloud Architect', 'Full Stack Lead', 'DevOps Engineer', 'Database Admin', 'QA Specialist', 'Product Manager'],
        link: '/services/full-stack-development-services'
      },
      {
        id: 'trending-3',
        title: 'Microsoft Dev. Team',
        image: '/images/team_card_microsoft.jpg',
        techPills: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
        compositionPills: ['Solutions Architect', '.NET Core Lead', 'Azure Cloud Engineer', 'Power Apps Specialist', 'QA Analyst'],
        link: '/services/net'
      }
    ],
    'Product Development': [
      {
        id: 'prod-1',
        title: 'Full Stack Engineering Team',
        image: '/images/team_card_saas.jpg',
        techPills: ['React', 'Node.js', 'Next.js', 'PostgreSQL', 'Docker', 'GraphQL'],
        compositionPills: ['Product Strategist', 'Tech Lead', 'Full Stack Devs', 'UI/UX Designer', 'Scrum Master'],
        link: '/services/full-stack-development-services'
      },
      {
        id: 'prod-2',
        title: 'Enterprise Architecture Squad',
        image: '/images/team_card_microsoft.jpg',
        techPills: ['Kubernetes', 'AWS', 'Microservices', 'Kafka', 'Redis', 'Terraform'],
        compositionPills: ['Chief Architect', 'DevOps Lead', 'Security Specialist', 'Senior Backend Dev'],
        link: '/services/cloud-solutions'
      },
      {
        id: 'prod-3',
        title: 'Mobile MVP Launch Squad',
        image: '/images/team_card_mobile.jpg',
        techPills: ['Kotlin', 'Flutter', 'Firebase', 'Fastlane', 'Stripe'],
        compositionPills: ['Product Manager', 'Mobile Architect', 'QA Automation', 'UX Researcher'],
        link: '/services/mobile-app-development'
      }
    ],
    'Saas': [
      {
        id: 'saas-1',
        title: 'Multi-Tenant SaaS Squad',
        image: '/images/team_card_saas.jpg',
        techPills: ['Node.js', 'React.js', 'Stripe API', 'PostgreSQL', 'AWS Lambda', 'Redis'],
        compositionPills: ['SaaS Architect', 'Billing Specialist', 'Full Stack Dev', 'DevOps Engineer'],
        link: '/services/full-stack-development-services'
      },
      {
        id: 'saas-2',
        title: 'B2B Enterprise Portal Team',
        image: '/images/team_card_microsoft.jpg',
        techPills: ['.NET 8', 'Angular', 'Azure AD', 'MS SQL', 'Docker', 'REST API'],
        compositionPills: ['Enterprise Architect', 'Senior .NET Lead', 'QA Lead', 'Delivery Manager'],
        link: '/services/net'
      },
      {
        id: 'saas-3',
        title: 'Mobile SaaS Extension Team',
        image: '/images/team_card_mobile.jpg',
        techPills: ['Kotlin Native', 'SwiftUI', 'GraphQL', 'Push Notification Engine'],
        compositionPills: ['Mobile Tech Lead', 'Senior Kotlin Dev', 'UI/UX Designer', 'QA Tester'],
        link: '/services/mobile-app-development'
      }
    ],
    'AI/ML': [
      {
        id: 'aiml-1',
        title: 'Generative AI & LLM Squad',
        image: '/images/team_card_microsoft.jpg',
        techPills: ['OpenAI / GPT-4', 'LangChain', 'Llama 3', 'Pinecone', 'Python', 'FastAPI'],
        compositionPills: ['AI Research Scientist', 'Prompt Engineer', 'MLOps Lead', 'Data Engineer'],
        link: '/services/generative-ai-development'
      },
      {
        id: 'aiml-2',
        title: 'Computer Vision & On-Device AI',
        image: '/images/team_card_mobile.jpg',
        techPills: ['TensorFlow Lite', 'OpenCV', 'CoreML', 'Kotlin AI', 'YOLOv8'],
        compositionPills: ['Computer Vision Specialist', 'Mobile AI Dev', 'Data Annotation Lead'],
        link: '/services/artificial-intelligence-development'
      },
      {
        id: 'aiml-3',
        title: 'Predictive Analytics Team',
        image: '/images/team_card_saas.jpg',
        techPills: ['PyTorch', 'Scikit-Learn', 'Pandas', 'Snowflake', 'Airflow', 'Tableau'],
        compositionPills: ['Lead Data Scientist', 'ML Engineer', 'BI Specialist', 'Product Owner'],
        link: '/services/artificial-intelligence-development'
      }
    ],
    'Data Engineering': [
      {
        id: 'data-1',
        title: 'Big Data & ETL Pipeline Team',
        image: '/images/team_card_saas.jpg',
        techPills: ['Apache Spark', 'Kafka', 'Databricks', 'AWS Glue', 'Snowflake', 'Python'],
        compositionPills: ['Principal Data Architect', 'Senior ETL Engineer', 'Data Quality QA'],
        link: '/services/cloud-solutions'
      },
      {
        id: 'data-2',
        title: 'Cloud Data Warehouse Squad',
        image: '/images/team_card_microsoft.jpg',
        techPills: ['Azure Synapse', 'Power BI', 'Google BigQuery', 'dbt', 'PostgreSQL'],
        compositionPills: ['Data Warehouse Lead', 'BI Analyst', 'Cloud Data Engineer'],
        link: '/services/net'
      },
      {
        id: 'data-3',
        title: 'Real-Time Streaming Team',
        image: '/images/team_card_mobile.jpg',
        techPills: ['Kafka Streams', 'Apache Flink', 'Redis', 'WebSockets', 'Go'],
        compositionPills: ['Streaming Architect', 'Distributed Systems Dev', 'QA Engineer'],
        link: '/services/full-stack-development-services'
      }
    ],
    'Design': [
      {
        id: 'design-1',
        title: 'UI/UX & Product Design Squad',
        image: '/images/team_card_mobile.jpg',
        techPills: ['Figma', 'Material Design 3', 'Design Systems', 'Micro-interactions', 'Protopie'],
        compositionPills: ['Lead Product Designer', 'UX Researcher', 'UI Designer', 'Motion Designer'],
        link: '/services/ui-ux-design-services'
      },
      {
        id: 'design-2',
        title: 'Enterprise Web & SaaS Design Team',
        image: '/images/team_card_saas.jpg',
        techPills: ['Design Tokens', 'Tailwind CSS', 'Storybook', 'Figma', 'Accessibility (a11y)'],
        compositionPills: ['Design System Lead', 'Senior UX Architect', 'Visual Designer'],
        link: '/services/ui-ux-design-services'
      },
      {
        id: 'design-3',
        title: 'Mobile First & App UX Squad',
        image: '/images/team_card_microsoft.jpg',
        techPills: ['iOS HIG', 'Android Material You', 'Figma', 'Wireframing', 'User Journey Maps'],
        compositionPills: ['Senior Mobile UX Lead', 'Visual UI Artist', 'Usability Tester'],
        link: '/services/ui-ux-design-services'
      }
    ],
    'Marketing': [
      {
        id: 'mkt-1',
        title: 'Growth & App Store Optimization (ASO)',
        image: '/images/team_card_mobile.jpg',
        techPills: ['App Store Connect', 'Google Play Console', 'AppsFlyer', 'Branch.io', 'Mixpanel'],
        compositionPills: ['ASO Strategist', 'Growth Marketer', 'Creative Specialist', 'Data Analyst'],
        link: '/contact'
      },
      {
        id: 'mkt-2',
        title: 'Technical SEO & Performance Team',
        image: '/images/team_card_saas.jpg',
        techPills: ['Core Web Vitals', 'Next.js SEO', 'Schema.org', 'Google Analytics 4', 'Semrush'],
        compositionPills: ['Technical SEO Lead', 'Content Strategist', 'Conversion Rate Expert'],
        link: '/contact'
      },
      {
        id: 'mkt-3',
        title: 'B2B Enterprise Lead Gen Squad',
        image: '/images/team_card_microsoft.jpg',
        techPills: ['HubSpot CRM', 'LinkedIn Marketing', 'Email Automation', 'Salesforce'],
        compositionPills: ['Inbound Marketing Strategist', 'Marketing Automation Lead', 'Copywriter'],
        link: '/contact'
      }
    ],
    'IoT App Dev': [
      {
        id: 'iot-1',
        title: 'Connected Smart Hardware Squad',
        image: '/images/team_card_mobile.jpg',
        techPills: ['BLE / Bluetooth', 'MQTT', 'Kotlin IoT', 'Raspberry Pi', 'AWS IoT Core'],
        compositionPills: ['IoT Solutions Architect', 'Embedded Mobile Dev', 'Hardware QA Tester'],
        link: '/services/internet-of-things'
      },
      {
        id: 'iot-2',
        title: 'Industrial IoT & Sensor Gateway Team',
        image: '/images/team_card_microsoft.jpg',
        techPills: ['Azure IoT Hub', 'Node-RED', 'Modbus', 'TimescaleDB', 'Grafana'],
        compositionPills: ['IIoT Systems Lead', 'Cloud Gateway Engineer', 'Firmware Specialist'],
        link: '/services/internet-of-things'
      },
      {
        id: 'iot-3',
        title: 'Wearables & Telemetry App Squad',
        image: '/images/team_card_saas.jpg',
        techPills: ['Wear OS', 'Apple WatchKit', 'HealthKit', 'Google Fit API', 'Kotlin Native'],
        compositionPills: ['Wearable App Lead', 'Biometric Data Engineer', 'Mobile QA'],
        link: '/services/iwatch-app-development'
      }
    ],
    'Blockchain Dev': [
      {
        id: 'bc-1',
        title: 'Smart Contracts & Web3 Squad',
        image: '/images/team_card_saas.jpg',
        techPills: ['Solidity', 'Ethereum', 'Hardhat', 'Ethers.js', 'IPFS', 'Metamask API'],
        compositionPills: ['Smart Contract Auditor', 'Web3 Full Stack Dev', 'DeFi Architect'],
        link: '/services/blockchain-development'
      },
      {
        id: 'bc-2',
        title: 'Enterprise DApp & Hyperledger Team',
        image: '/images/team_card_microsoft.jpg',
        techPills: ['Hyperledger Fabric', 'Go', 'Docker', 'Kubernetes', 'Node.js', 'PostgreSQL'],
        compositionPills: ['Consortium Architect', 'Lead Blockchain Engineer', 'Security Auditor'],
        link: '/services/blockchain-development'
      },
      {
        id: 'bc-3',
        title: 'Mobile Web3 Crypto Wallet Squad',
        image: '/images/team_card_mobile.jpg',
        techPills: ['Kotlin Multiplatform', 'Web3j', 'Bip39', 'WalletConnect', 'Secp256k1'],
        compositionPills: ['Cryptography Lead', 'Senior Mobile Wallet Dev', 'Penetration Tester'],
        link: '/services/blockchain-development'
      }
    ]
  };

  const currentCards = categoryTeams[activeCategory] || categoryTeams['Trending'];

  const getCardMode = (cardId) => {
    return cardToggleState[cardId] || 'tech'; // 'tech' or 'composition'
  };

  const setCardMode = (cardId, mode) => {
    setCardToggleState((prev) => ({ ...prev, [cardId]: mode }));
  };

  const handlePrev = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const prevIndex = currentIndex <= 0 ? categories.length - 1 : currentIndex - 1;
    setActiveCategory(categories[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveCategory(categories[nextIndex]);
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
            Meet {brandName} Exceptional Team of Seasoned Experts
          </h2>
        </div>

        {/* Categories Capsule Navigation Bar */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto py-2">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#F0F6FB] p-1.5 rounded-full border border-slate-200/80 max-w-full overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSlideIndex(0);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-[700] whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#006095] text-white shadow-md shadow-[#006095]/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Columns Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentCards.map((card) => {
            const mode = getCardMode(card.id);
            const pillsToDisplay = mode === 'tech' ? card.techPills : card.compositionPills;

            return (
              <div
                key={card.id}
                className="bg-[#E8F4F8] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between border border-[#d2e8f1] shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Card Header Image */}
                  <div className="w-full h-[200px] sm:h-[210px] rounded-[18px] overflow-hidden mb-5 bg-slate-900 shadow-inner">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-[20px] font-[800] text-slate-900 tracking-tight mb-4 text-left">
                    {card.title}
                  </h3>

                  {/* Segmented Control Buttons: Technologies | Team Composition */}
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      onClick={() => setCardMode(card.id, 'tech')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-[700] transition-all cursor-pointer ${
                        mode === 'tech'
                          ? 'bg-[#006095] text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                      }`}
                    >
                      Technologies
                    </button>
                    <button
                      onClick={() => setCardMode(card.id, 'composition')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-[700] transition-all cursor-pointer ${
                        mode === 'composition'
                          ? 'bg-[#006095] text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                      }`}
                    >
                      Team Composition
                    </button>
                  </div>

                  {/* White Pills List */}
                  <div className="flex flex-wrap gap-2 mb-6 min-h-[72px] items-start">
                    {pillsToDisplay.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="bg-white text-slate-800 text-xs sm:text-[12px] font-[600] px-3 py-1.5 rounded-full border border-slate-100 shadow-xs"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2">
                  <Link
                    to={card.link || '/contact'}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#006095] hover:bg-[#004f7a] text-white font-[700] text-xs sm:text-[13px] transition-all shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>Get Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-center space-x-4 mt-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-[#006095] hover:text-white hover:border-[#006095] transition-all shadow-sm cursor-pointer"
            aria-label="Previous Team Category"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-[#006095] hover:text-white hover:border-[#006095] transition-all shadow-sm cursor-pointer"
            aria-label="Next Team Category"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SeasonedExpertsTeamSection;
