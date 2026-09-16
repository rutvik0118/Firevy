import React from 'react';
import Container from '../common/Container';
import {
  Code2,
  RotateCw,
  Boxes,
  Users,
  RefreshCcw,
  CircleDollarSign
} from 'lucide-react';

const reasonsData = [
  {
    title: 'Code Reusability',
    desc: 'React Native uses a single code base to build web applications and native iOS/Android apps by reusing and redeploying codes with greater comfort.',
    icon: <Code2 className="w-8 h-8 text-[#0084D1]" strokeWidth={2} />
  },
  {
    title: 'Hot Reloading',
    desc: 'React Native comes with a Hot Reload feature that lets you see the latest changes immediately on a page without creating a new build every time.',
    icon: <RotateCw className="w-8 h-8 text-[#0084D1]" strokeWidth={2} />
  },
  {
    title: 'Modular Architecture',
    desc: 'React Native Modular architecture helps in code scalability and declarative coding makes app development dynamic.',
    icon: <Boxes className="w-8 h-8 text-[#0084D1]" strokeWidth={2} />
  },
  {
    title: 'Huge Community Support',
    desc: 'React Native has an active community of developers and contributors that is always ready to help.',
    icon: <Users className="w-8 h-8 text-[#0084D1]" strokeWidth={2} />
  },
  {
    title: 'Live Reloading',
    desc: 'React Native comes with a Live Reload feature allows you to see the latest changes immediately after they have been made.',
    icon: <RefreshCcw className="w-8 h-8 text-[#0084D1]" strokeWidth={2} />
  },
  {
    title: 'Cost-Effective',
    desc: 'React Native single code base and Code- reusability saves total development, testing, bug fixing and maintenance cost result in faster time to market.',
    icon: <CircleDollarSign className="w-8 h-8 text-[#0084D1]" strokeWidth={2} />
  }
];

export const ReactNativeReasonsChoose = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white font-sans text-left">
      <Container className="max-w-7xl">
        {/* Section Heading & Subtitle Matching Screenshot 1:1 */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3"
            style={{ fontSize: '32px' }}
          >
            Reasons To Choose React Native
          </h2>
          <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            Here are the benefits of React Native app development for startups and SMEs.
          </p>
        </div>

        {/* 6 White Reason Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {reasonsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-6 sm:p-7 lg:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-start"
            >
              {/* Icon at Top */}
              <div className="mb-4">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2.5 leading-snug tracking-tight">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[12.8px] sm:text-[13.2px] text-[#475569] leading-[1.65] font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ReactNativeReasonsChoose;
