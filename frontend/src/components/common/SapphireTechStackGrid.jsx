import React, { useState } from 'react';
import Container from './Container';
import {
  Boxes,
  Layout,
  Database,
  Package,
  Award,
  Settings,
  CheckCircle2
} from 'lucide-react';

export const SapphireTechStackGrid = ({
  domainName = "healthcare",
  richTechCategories = null
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Exact 6 Categories matching Sapphire Solutions screenshot
  const overviewCards = [
    {
      id: 'backend',
      title: 'Backend',
      icon: Boxes,
      col1: ['.NET', 'Node', 'JAVA'],
      col2: ['Ruby on Rails', 'PHP']
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Layout,
      col1: ['Java', 'RxJava', 'Coroutines Kotlin'],
      col2: ['Kotlin', 'RxKotlin']
    },
    {
      id: 'database',
      title: 'Database',
      icon: Database,
      col1: ['SQLite', 'CoreData'],
      col2: ['Realm', 'Firebase']
    },
    {
      id: 'devops',
      title: 'Devops',
      icon: Package,
      col1: ['CI/CD'],
      col2: ['GitHub Actions']
    },
    {
      id: 'testing',
      title: 'Testing',
      icon: Award,
      col1: ['Appium', 'BrowserStack', 'Katalon Test Studio'],
      col2: []
    },
    {
      id: 'pm',
      title: 'Project Management Tools',
      icon: Settings,
      col1: ['Jira', 'Slack'],
      col2: ['Microsoft Teams', 'Trello']
    }
  ];

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 font-sans text-left">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            We use the latest {domainName} app development technology and process to make sure we deliver the best. Have a look at our technology stack:
          </p>
        </div>

        {/* 6 Light-Blue Overview Cards (Exact Sapphire Screenshot Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {overviewCards.map((card) => {
            const IconComp = card.icon;
            const isSelected = selectedCategory === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedCategory(isSelected ? null : card.id)}
                className={`p-7 rounded-2xl bg-[#EDF6FC] border border-blue-100/80 shadow-sm hover:shadow-md hover:border-[#005F96] transition-all cursor-pointer flex flex-col justify-between min-h-[220px] ${
                  isSelected ? 'ring-2 ring-[#005F96] bg-white' : ''
                }`}
              >
                <div>
                  {/* Header: Cyan/Blue Icon + Title */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-white text-[#005F96] shadow-sm border border-blue-100">
                      <IconComp className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 font-sans tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* 2-Column Bullet List */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-semibold text-slate-700">
                    <div className="space-y-2.5">
                      {card.col1.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <span className="text-[#005F96] font-bold text-base">-</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2.5">
                      {card.col2.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <span className="text-[#005F96] font-bold text-base">-</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {richTechCategories && (
                  <div className="pt-4 mt-4 border-t border-blue-200/60 text-xs font-bold text-[#005F96] flex items-center justify-between">
                    <span>{isSelected ? 'Hide Details' : 'Click to view descriptions'}</span>
                    <span>→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Descriptions Expandable Section (If richTechCategories passed) */}
        {richTechCategories && selectedCategory && richTechCategories[selectedCategory] && (
          <div className="mt-12 p-8 rounded-2xl bg-white border border-slate-200 shadow-xl max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">
                Detailed {overviewCards.find(c => c.id === selectedCategory)?.title} Stack
              </h4>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 px-3 py-1 bg-slate-100 rounded-lg"
              >
                Close Details
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {richTechCategories[selectedCategory].map((tech, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <div className="flex items-center space-x-2 text-[#005F96]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h5 className="text-base font-extrabold text-slate-900">{tech.name}</h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default SapphireTechStackGrid;
