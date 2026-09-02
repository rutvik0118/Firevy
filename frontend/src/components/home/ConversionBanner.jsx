import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const ConversionBanner = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200 text-slate-900 relative overflow-hidden">
      <Container>
        <div className="relative rounded-[24px] bg-[#F4F8FA] border border-slate-200 p-10 sm:p-16 text-center shadow-[0px_10px_30px_rgba(0,0,0,0.04)] overflow-hidden group">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-50 border border-cyan-200 text-[#006B8F]">
              <Sparkles className="w-4 h-4 text-[#006B8F] animate-pulse" />
              <span>COLLABORATE WITH EXPERTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Let's Start Something <span className="text-[#006B8F]">Big Together</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl">
              Have an ambitious digital product in mind or scaling an enterprise platform? Partner with our engineers for custom product strategy, technical roadmap design, and rapid execution.
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#006B8F] hover:bg-[#004A75] text-white font-extrabold text-base transition-all shadow-xl hover:scale-105 active:scale-95 group"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ConversionBanner;
