import React from 'react';
import Container from '../common/Container';
import AnimatedCounter from '../common/AnimatedCounter';
import BRAND from '../../constants/brand';

export const StatsSection = () => {
  const statsList = [
    { value: "95%", label: "Client Retention", numeric: 95, suffix: "%" },
    { value: "18+", label: "Industries Served", numeric: 18, suffix: "+" },
    { value: "2800+", label: "Satisfied Clients", numeric: 2800, suffix: "+" },
    { value: "1500+", label: "Projects Completed", numeric: 1500, suffix: "+" },
    { value: "23+", label: "Years of Experience", numeric: 23, suffix: "+" },
    { value: "320+", label: "5-Star Reviews", numeric: 320, suffix: "+" }
  ];

  return (
    <section className="py-16 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 rounded-[20px] bg-white border border-slate-200/80 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#006B8F] mb-2 group-hover:scale-105 transition-transform">
                <AnimatedCounter
                  value={stat.value}
                  numericValue={stat.numeric}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
