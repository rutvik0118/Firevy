import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star, Trophy, CheckCircle2 } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export const AwardsSection = () => {
  const awards = [
    {
      title: 'Clutch Top AI & Software Developer 2026',
      badge: 'CLUTCH LEADER',
      year: '2026',
      icon: Trophy,
      desc: 'Ranked #1 Global AI & Custom Software Engineering Firm.'
    },
    {
      title: 'ISO 9001:2015 & SOC2 Type II Certified',
      badge: 'ENTERPRISE COMPLIANT',
      year: 'Certified',
      icon: ShieldCheck,
      desc: 'Bank-grade cybersecurity & quality management standards.'
    },
    {
      title: 'GoodFirms Top App Development Agency',
      badge: 'TOP DEVELOPER',
      year: '2025-2026',
      icon: Award,
      desc: 'Recognized for high-impact mobile & web product delivery.'
    },
    {
      title: 'G2 High Performer Enterprise Software',
      badge: '5-STAR RATED',
      year: 'Top 1%',
      icon: Star,
      desc: 'Highest customer satisfaction rating across 300+ reviews.'
    }
  ];

  return (
    <section className="py-20 bg-slate-950/80 border-b border-gray-800 relative">
      <Container>
        <SectionHeading
          badge="RECOGNITION & EXCELLENCE"
          title="Proud To Have Picked These Up Along The Way"
          subtitle="Our commitment to technical rigor, innovation, and client success has earned top industry accolades."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/90 border border-gray-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 group shadow-lg text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold font-mono tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 border border-gray-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Verified
                  </span>
                  <span className="font-mono text-slate-300 font-bold">{item.year}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AwardsSection;
