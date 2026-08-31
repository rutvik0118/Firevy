import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, ShieldCheck, Sparkles, Zap, Layers } from 'lucide-react';
import Button from '../common/Button';
import Container from '../common/Container';
import BRAND from '../../constants/brand';

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-24 overflow-hidden bg-tech-grid"
    >
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Next-Generation Software Engineering</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Building Digital Products That <span className="text-gradient">Move Businesses Forward</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              {BRAND.subHeadline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Start a Project
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                Explore Our Work
              </Button>
            </motion.div>

            {/* Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-6 border-t border-gray-800/80 w-full max-w-xl text-left"
            >
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Enterprise SOC2 Ready</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">99.99% Cloud Uptime</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Code2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Top 1% Senior Engineers</span>
              </div>
            </motion.div>
          </div>

          {/* Right Floating 3D Technology Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              animate={{ x: mousePos.x, y: mousePos.y }}
              transition={{ type: 'spring', damping: 15, stiffness: 50 }}
              className="relative w-full max-w-md aspect-square"
            >
              {/* Central Glowing Mesh Frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-cyan-500/30 p-1 backdrop-blur-xl border border-white/10 shadow-2xl animate-float">
                <div className="w-full h-full bg-brand-card/90 rounded-[22px] p-6 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Mock Code Block Header */}
                  <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">firevy-architecture.ts</span>
                  </div>

                  {/* Code Fragment Visualization */}
                  <div className="font-mono text-xs text-blue-300 space-y-2 py-4">
                    <p className="text-purple-400">import <span className="text-cyan-300">{`{ AI, Cloud, Microservice }`}</span> from <span className="text-emerald-300">'@firevy/core'</span>;</p>
                    <p className="text-slate-400">// Intelligent Enterprise Deployment</p>
                    <p className="text-blue-400"><span className="text-purple-400">const</span> app = <span className="text-amber-300">new</span> DigitalProduct({`{`}</p>
                    <p className="pl-4 text-emerald-400">performance: <span className="text-cyan-300">'99.99%'</span>,</p>
                    <p className="pl-4 text-emerald-400">scale: <span className="text-cyan-300">'Infinite'</span>,</p>
                    <p className="pl-4 text-emerald-400">security: <span className="text-cyan-300">'Zero-Trust'</span></p>
                    <p className="text-blue-400">{`}`});</p>
                    <p className="text-emerald-300">await app.deploy();</p>
                  </div>

                  {/* Status Footer */}
                  <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center text-emerald-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2" />
                      System Active
                    </span>
                    <span className="font-mono text-slate-500">v3.4.0</span>
                  </div>
                </div>
              </div>

              {/* Floating Interface Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 bg-brand-card/90 border border-blue-500/30 p-3.5 rounded-xl shadow-glow-primary backdrop-blur-md flex items-center space-x-3 text-left"
              >
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AI Engine</div>
                  <div className="text-[10px] text-slate-400">LLM RAG Active</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-brand-card/90 border border-purple-500/30 p-3.5 rounded-xl shadow-glow-secondary backdrop-blur-md flex items-center space-x-3 text-left"
              >
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Microservices</div>
                  <div className="text-[10px] text-slate-400">Sub-50ms Latency</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
