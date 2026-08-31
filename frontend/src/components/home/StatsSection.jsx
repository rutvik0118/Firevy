import React from 'react';
import Container from '../common/Container';
import AnimatedCounter from '../common/AnimatedCounter';
import BRAND from '../../constants/brand';

export const StatsSection = () => {
  return (
    <section className="py-16 bg-brand-card/30 border-b border-gray-800">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {BRAND.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-brand-card/60 border border-gray-800/80 hover:border-blue-500/30 transition-colors text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  numericValue={stat.numeric}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
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
