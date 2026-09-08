import React, { useState } from 'react';
import Container from '../common/Container';

const defaultTechData = {
  'Cloud & Devops': {
    title: 'Cloud & Devops',
    desc: 'Both cloud and DevOps engineers are essential and complementary components of contemporary infrastructure management and software development. To enhance your cloud experience and help you create more quickly, we provide dependable cloud and DevOps services on cloud platforms. DevOps enables almost instantaneous cloud product and service deployment, going beyond continuous integration and delivery (CI/CD).',
    logos: [
      { name: 'AWS', image: '/images/aws.png' },
      { name: 'Google Cloud', image: '/images/google_cloud.png' },
      { name: 'Docker', image: '/images/docker.png' },
      { name: 'Kubernets', image: '/images/kubernetes.png' },
      { name: 'Jenkins', image: '/images/jenkins.png' },
      { name: 'Azure', image: '/images/azure.png' }
    ]
  },
  'Frontend': {
    title: 'Frontend',
    desc: 'Our frontend engineering creates stunning, ultra-responsive, and modern interactive user interfaces with seamless accessibility and 60fps performance across desktop, tablet, and mobile devices.',
    logos: [
      { name: 'React', image: '/images/react.png' },
      { name: 'Angular', image: '/images/angular.png' },
      { name: 'Vue.js', image: '/images/vue.png' },
      { name: 'JavaScript', image: '/images/javascript.png' },
      { name: 'Ionic', image: '/images/Ionic.png' },
      { name: 'Knockout.js', image: '/images/knockout_js.png' }
    ]
  },
  'Backend': {
    title: 'Backend',
    desc: 'We design and build scalable, secure, and distributed microservices architectures and robust enterprise APIs capable of handling millions of real-time transactions with minimal latency.',
    logos: [
      { name: 'Node.js', image: '/images/node.png' },
      { name: 'Python', image: '/images/python.png' },
      { name: 'Java', image: '/images/java.png' },
      { name: 'PHP', image: '/images/php.png' },
      { name: '.NET', image: '/images/dot_net.png' },
      { name: 'Ruby', image: '/images/ruby.png' }
    ]
  },
  'Mobile': {
    title: 'Mobile',
    desc: 'We engineer state-of-the-art native iOS, Android, and cross-platform mobile apps with native fluid performance, secure biometric authentication, and offline capability.',
    logos: [
      { name: 'Flutter', image: '/images/flutter.png' },
      { name: 'iOS', image: '/images/apple.png' },
      { name: 'Android', image: '/images/android.png' },
      { name: 'Ionic', image: '/images/Ionic.png' },
      { name: 'Xamarin', image: '/images/xamarin.png' },
      { name: 'React Native', image: '/images/react.png' }
    ]
  },
  'Microsoft': {
    title: 'Microsoft',
    desc: 'As Microsoft solution partners, we build enterprise-grade SharePoint solutions, Power Platform automated workflows, Power BI dashboards, and custom .NET cloud applications.',
    logos: [
      { name: '.NET', image: '/images/dot_net.png' },
      { name: 'SharePoint', image: '/images/sharepoint.png' },
      { name: 'Office 365', image: '/images/office365.png' },
      { name: 'Power BI', image: '/images/power_bi.png' },
      { name: 'Power Apps', image: '/images/powerapp.png' },
      { name: 'Power Automate', image: '/images/power_automate.png' }
    ]
  },
  'Database': {
    title: 'Database',
    desc: 'From high-speed transactional SQL relational databases to distributed NoSQL clusters, we architect resilient data storage layers engineered for low-latency queries and zero data loss.',
    logos: [
      { name: 'MySQL', image: '/images/mysql.png' },
      { name: 'MongoDB', image: '/images/mongo.png' },
      { name: 'PostgreSQL', image: '/images/postgresql.png' },
      { name: 'Cassandra', image: '/images/cassandra.png' },
      { name: 'Oracle', image: '/images/oracle.png' },
      { name: 'Microsoft SQL', image: '/images/microsoft_sql.png' }
    ]
  },
  'Testing': {
    title: 'Testing',
    desc: 'We implement end-to-end automated testing pipelines, stress testing, security audits, and regression verification to guarantee bug-free software that performs reliably under extreme demand.',
    logos: [
      { name: 'Selenium', image: '/images/selenium.png' },
      { name: 'Postman', image: '/images/postman.png' },
      { name: 'BrowserStack', image: '/images/browserstack.png' },
      { name: 'Apache JMeter', image: '/images/apache_jmeter.png' },
      { name: 'Katalon', image: '/images/katalon.png' },
      { name: 'Jira', image: '/images/jira.png' }
    ]
  }
};

export const TechShowcaseTabbed = ({ data }) => {
  const [activeTab, setActiveTab] = useState('Cloud & Devops');

  const title = data?.title || 'Technologies We Work With';
  const description = data?.description || 'We work on wide range of tools and technologies to cater client business requirement for existing project or new application.';

  const tabs = Object.keys(defaultTechData);
  const current = defaultTechData[activeTab] || defaultTechData['Cloud & Devops'];

  return (
    <section className="py-12 sm:py-14 bg-white border-b border-slate-200 text-slate-900 relative font-sans select-none">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-7">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[38px] font-[800] tracking-tight text-slate-950 mb-2 font-sans">
            {title}
          </h2>
          <p className="text-[15px] sm:text-[16px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Horizontal Tab Buttons Row */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-10 max-w-5xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 sm:px-7 py-2.5 rounded-[4px] text-[14.5px] sm:text-[15px] font-[600] transition-all duration-200 font-sans cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#005F86] text-white shadow-xs font-[700]'
                  : 'bg-[#D1E0E9] text-slate-800 hover:bg-[#C2D6E2]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center text-left max-w-6xl mx-auto">
          {/* Left Column: Heading + Description */}
          <div className="lg:col-span-5 pr-0 lg:pr-2">
            <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-slate-950 mb-3 font-sans tracking-tight leading-tight">
              {current.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] font-[400] text-slate-600 leading-relaxed font-sans">
              {current.desc}
            </p>
          </div>

          {/* Right Column: 3x2 Grid of White Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {current.logos?.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[14px] p-5 sm:p-6 shadow-md border border-slate-100/90 flex flex-col items-center justify-center text-center h-[145px] sm:h-[155px] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center justify-center h-12 w-auto max-w-[85px] mb-2.5">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-12 max-w-[75px] object-contain group-hover:scale-105 transition-transform duration-200"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-[14px] sm:text-[15px] font-[700] text-slate-900 font-sans tracking-tight leading-none">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcaseTabbed;
