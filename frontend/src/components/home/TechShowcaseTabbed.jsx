import React, { useState } from 'react';
import Container from '../common/Container';

export const TechShowcaseTabbed = () => {
  const [activeTab, setActiveTab] = useState('Cloud & Devops');

  const techData = {
    'Cloud & Devops': {
      title: 'Cloud & Devops',
      desc: 'Both cloud and DevOps engineers are essential and complementary components of contemporary infrastructure management and software development. To enhance your cloud experience and help you create more quickly, we provide dependable cloud and DevOps services on cloud platforms. DevOps enables almost instantaneous cloud product and service deployment, going beyond continuous integration and delivery (CI/CD).',
      logos: [
        {
          name: 'AWS',
          icon: (
            <svg className="w-12 h-12 text-[#FF9900]" viewBox="0 0 48 48" fill="currentColor">
              <path d="M18.8 26.2c0 .4.1.7.3.9.2.2.6.3 1.1.3.6 0 1.2-.2 1.8-.5v2c-.6.3-1.4.5-2.2.5-1.1 0-2-.3-2.6-.9-.6-.6-.9-1.4-.9-2.5v-7.2h-2.1v-1.9h2.1v-3.7l2.5-.8v4.5h3.4v1.9h-3.4v7.4zm10.7 3.2c-1 0-1.8-.2-2.5-.7-.7-.5-1-1.2-1-2.1 0-1.1.4-1.9 1.2-2.4.8-.5 2-.8 3.5-.8h2.3v-.6c0-.6-.2-1.1-.6-1.4-.4-.3-1-.5-1.7-.5-.7 0-1.4.2-2.1.5l-.6-1.6c.9-.5 1.9-.7 3-.7 1.4 0 2.4.3 3.1 1 .7.7 1 1.7 1 3v6.2h-2.2v-1.2c-.8.9-1.9 1.3-3.4 1.3zm.5-1.9c.8 0 1.5-.2 2.1-.7.6-.5.9-1.1.9-1.8v-1.1h-2c-.9 0-1.6.2-2 .5-.4.3-.6.8-.6 1.4 0 .5.2.9.5 1.2.5.3 1 .5 1.7.5z" />
              <path d="M12.4 34.8c12.2 4.5 24.2 1.8 30.1-2.4.5-.4.1-1-.4-.7-7.4 4.3-18.7 5.1-29.7-.9-.6-.4-1.1.4-.5.8z" />
              <path d="M42.8 31.4c-.6-.7-3.6-.4-4.9-.2-.3 0-.4.3-.1.5 1.2.9 3.8.9 4.8.2.3-.2.4-.4.2-.5z" />
            </svg>
          )
        },
        {
          name: 'Google Cloud',
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
              <path d="M24 14c-4.2 0-7.8 2.5-9.3 6.1l4.9 2.8c.8-1.8 2.6-3 4.4-3 2.8 0 5 2.2 5 5v.5h3c2.5 0 4.5 2 4.5 4.5S34.5 34.5 32 34.5h-16c-3.6 0-6.5-2.9-6.5-6.5 0-3.3 2.5-6 5.7-6.4 1.1-4.4 5.1-7.6 9.8-7.6z" fill="#4285F4" />
              <path d="M24 14c2.8 0 5.4 1.1 7.3 2.9l-3.3 3.3c-1-1-2.4-1.6-4-1.6-3.1 0-5.6 2.5-5.6 5.6 0 .5.1.9.2 1.4l-4.5 2.6c-.7-1.2-1.1-2.6-1.1-4 0-5.6 4.6-10.2 10.2-10.2z" fill="#EA4335" />
              <path d="M36.5 25.5c0-.6-.1-1.2-.2-1.7H24v4.5h7.1c-.3 1.6-1.2 3-2.6 3.9l3.9 3c2.3-2.1 3.6-5.2 3.6-9.7z" fill="#FBBC05" />
              <path d="M15.2 27.9c-.3-.9-.4-1.9-.4-2.9s.1-2 .4-2.9l-4.9-2.8C9.4 21.1 9 22.5 9 24s.4 2.9 1.3 4.7l4.9-2.8z" fill="#34A853" />
            </svg>
          )
        },
        {
          name: 'Docker',
          icon: (
            <svg className="w-12 h-12 text-[#2496ED]" viewBox="0 0 48 48" fill="currentColor">
              <path d="M43.7 22.8c-1.1-.8-2.6-1.2-4.4-1.2-1.3 0-2.4.2-3.3.7-1.2-2.6-3.8-4.3-6.8-4.3h-.5v3.4h.5c1.8 0 3.3.9 4 2.4-1.1.2-2.1.6-2.9 1.2H4v3.4h37.5c1.6 0 2.9-.6 3.7-1.7.5-.9.7-2.1.5-3.9zM10.8 14.8h4.5v4.5h-4.5zm6.8 0h4.5v4.5h-4.5zm6.8 0h4.5v4.5h-4.5zm-13.6-6h4.5v4.5h-4.5zm6.8 0h4.5v4.5h-4.5zm6.8 0h4.5v4.5h-4.5zm6.8 0h4.5v4.5h-4.5zm-20.4-6h4.5v4.5h-4.5zm6.8 0h4.5v4.5h-4.5z" />
            </svg>
          )
        },
        {
          name: 'Kubernets',
          icon: (
            <svg className="w-12 h-12 text-[#326CE5]" viewBox="0 0 48 48" fill="currentColor">
              <path d="M24 4L6 14.4v20.8L24 44l18-10.4V14.4L24 4zm0 6l12.8 7.4v14.8L24 39.6 11.2 32.2V17.4L24 10z" />
              <circle cx="24" cy="24" r="5" />
            </svg>
          )
        },
        {
          name: 'Jenkins',
          icon: (
            <svg className="w-12 h-12 text-[#D24939]" viewBox="0 0 48 48" fill="currentColor">
              <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm0 6c4 0 7.3 2.1 9.1 5.3L27.5 21v-4h-7v4L14.9 15.3C16.7 12.1 20 10 24 10zm-10 14c0-1.8.5-3.5 1.4-5l5.6 5-5.6 5c-.9-1.5-1.4-3.2-1.4-5zm10 14c-4 0-7.3-2.1-9.1-5.3l5.6-5.7v4h7v-4l5.6 5.7c-1.8 3.2-5.1 5.3-9.1 5.3zm10-14c0 1.8-.5 3.5-1.4 5l-5.6-5 5.6-5c.9 1.5 1.4 3.2 1.4 5z" />
            </svg>
          )
        },
        {
          name: 'Azure',
          icon: (
            <svg className="w-12 h-12 text-[#0089D6]" viewBox="0 0 48 48" fill="currentColor">
              <path d="M17.5 35L6 26.5l14-20h11L17.5 35z" />
              <path d="M19.5 24.5L25 35h17L27 12l-7.5 12.5z" />
            </svg>
          )
        }
      ]
    },
    'Frontend': {
      title: 'Frontend',
      desc: 'Our frontend developers craft intuitive, highly responsive, and user-centric web applications using modern Javascript frameworks and responsive CSS engines designed for maximum speed and conversion.',
      logos: [
        { name: 'React.js', icon: <span className="text-4xl text-[#61DAFB]">⚛️</span> },
        { name: 'Next.js', icon: <span className="text-4xl text-slate-900">▲</span> },
        { name: 'TypeScript', icon: <span className="text-4xl text-[#3178C6]">📘</span> },
        { name: 'Vue.js', icon: <span className="text-4xl text-[#4FC08D]">🟢</span> },
        { name: 'Tailwind', icon: <span className="text-4xl text-[#38BDF8]">🎨</span> },
        { name: 'HTML5', icon: <span className="text-4xl text-[#E34F26]">🌐</span> }
      ]
    },
    'Backend': {
      title: 'Backend',
      desc: 'Robust, scalable, and secure backend architectures designed for high throughput, seamless API integration, database management, and sub-millisecond execution times.',
      logos: [
        { name: 'Node.js', icon: <span className="text-4xl text-[#339933]">🟢</span> },
        { name: 'Python', icon: <span className="text-4xl text-[#3776AB]">🐍</span> },
        { name: 'Java', icon: <span className="text-4xl text-[#007396]">☕</span> },
        { name: 'Go', icon: <span className="text-4xl text-[#00ADD8]">🐹</span> },
        { name: 'PHP', icon: <span className="text-4xl text-[#777BB4]">🐘</span> },
        { name: 'Laravel', icon: <span className="text-4xl text-[#FF2D20]">🔥</span> }
      ]
    },
    'Mobile': {
      title: 'Mobile',
      desc: 'Cross-platform and native mobile applications tailored for iOS and Android devices with smooth 60fps UI animations, offline data sync, and hardware integration.',
      logos: [
        { name: 'Flutter', icon: <span className="text-4xl text-[#02569B]">🦋</span> },
        { name: 'React Native', icon: <span className="text-4xl text-[#61DAFB]">📱</span> },
        { name: 'Swift', icon: <span className="text-4xl text-[#F05138]">🍎</span> },
        { name: 'Kotlin', icon: <span className="text-4xl text-[#7F52FF]">🤖</span> },
        { name: 'iOS', icon: <span className="text-4xl text-slate-800">🍏</span> },
        { name: 'Android', icon: <span className="text-4xl text-[#3DDC84]">🤖</span> }
      ]
    },
    'Microsoft': {
      title: 'Microsoft',
      desc: 'Enterprise Microsoft solutions leveraging .NET Core microservices, Azure cloud hosting infrastructure, C# ecosystems, and business intelligence dashboards.',
      logos: [
        { name: '.NET Core', icon: <span className="text-4xl text-[#512BD4]">💻</span> },
        { name: 'C#', icon: <span className="text-4xl text-[#239120]">♯</span> },
        { name: 'Azure', icon: <span className="text-4xl text-[#0089D6]">🔷</span> },
        { name: 'SQL Server', icon: <span className="text-4xl text-[#CC292B]">🗄️</span> },
        { name: 'Power BI', icon: <span className="text-4xl text-[#F2C811]">📊</span> },
        { name: 'SharePoint', icon: <span className="text-4xl text-[#0078D4]">📁</span> }
      ]
    },
    'Database': {
      title: 'Database',
      desc: 'High-performance relational and NoSQL database management systems engineered for heavy read/write throughput, automatic scaling, indexing, and data encryption.',
      logos: [
        { name: 'PostgreSQL', icon: <span className="text-4xl text-[#4169E1]">🐘</span> },
        { name: 'MongoDB', icon: <span className="text-4xl text-[#47A248]">🍃</span> },
        { name: 'MySQL', icon: <span className="text-4xl text-[#4479A1]">🐬</span> },
        { name: 'Redis', icon: <span className="text-4xl text-[#DC382D]">⚡</span> },
        { name: 'Firebase', icon: <span className="text-4xl text-[#FFCA28]">🔥</span> },
        { name: 'Cassandra', icon: <span className="text-4xl text-[#1287B5]">👁️</span> }
      ]
    },
    'Testing': {
      title: 'Testing',
      desc: 'Automated quality assurance, end-to-end regression testing suites, load stress testing, and continuous security vulnerability audits.',
      logos: [
        { name: 'Selenium', icon: <span className="text-4xl text-[#43B02A]">🤖</span> },
        { name: 'Cypress', icon: <span className="text-4xl text-[#17202C]">🌲</span> },
        { name: 'Jest', icon: <span className="text-4xl text-[#C21325]">🃏</span> },
        { name: 'Postman', icon: <span className="text-4xl text-[#FF6C37]">🚀</span> },
        { name: 'JMeter', icon: <span className="text-4xl text-[#D22128]">⚡</span> },
        { name: 'Appium', icon: <span className="text-4xl text-[#663399]">📱</span> }
      ]
    }
  };

  const tabs = Object.keys(techData);
  const current = techData[activeTab];

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header - Exactly 100% Copy-to-Copy with Reference Screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            Technologies We Work With
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
            We work on wide range of tools and technologies to cater client business requirement for existing project or new application.
          </p>
        </div>

        {/* Horizontal Tab Buttons Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-[6px] text-sm font-[600] transition-all duration-200 font-sans ${
                activeTab === tab
                  ? 'bg-[#006B8F] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 2-Column Content Layout (Clean White Background, No Outer Gray Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left max-w-6xl mx-auto">
          {/* Left Column: Heading + Description */}
          <div className="lg:col-span-5 pr-0 lg:pr-4">
            <h3 className="text-[28px] font-[800] text-slate-900 mb-4 font-sans tracking-tight">
              {current.title}
            </h3>
            <p className="text-[15px] font-[400] text-slate-600 leading-relaxed font-sans">
              {current.desc}
            </p>
          </div>

          {/* Right Column: 3x2 Grid of White Cards with Official Logos */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {current.logos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center h-36 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-center h-16 w-16 mb-2">
                  {logo.icon}
                </div>
                <span className="text-sm font-[700] text-slate-900 font-sans tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechShowcaseTabbed;
