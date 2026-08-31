import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

export const CTASection = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-purple-900/60 border border-blue-500/30 p-10 sm:p-16 text-center shadow-2xl backdrop-blur-xl overflow-hidden">
          {/* Subtle Background Particle Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>TRANSFORM YOUR VISION INTO SOFTWARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an Idea? <span className="text-gradient">Let's Build It Together.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you need to launch a new SaaS MVP, scale legacy microservices, or integrate private enterprise AI, our engineering team is ready.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Start a Project
              </Button>
              <Button to="/contact" variant="outline" size="lg" icon={Calendar}>
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
