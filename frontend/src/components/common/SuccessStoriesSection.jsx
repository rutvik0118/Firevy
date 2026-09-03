import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './Container';

export const SuccessStoriesSection = ({ title, subtitle, companyName = "Sapphire" }) => {
  const caseStudies = [
    {
      title: 'Healthcare Mobile App Development Company',
      link: '/portfolio',
      previewBg: 'bg-[#4C1D95]',
      graphic: (
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#7E22CE] p-4 flex text-white font-sans">
          {/* Case Study Tag */}
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-md bg-[#7DD3FC] text-[#0369A1] font-[800] text-[11px] shadow-sm">
            Case Study
          </div>

          {/* Left Column: Healthcare Graphic */}
          <div className="w-1/2 pr-2 flex flex-col justify-between z-0">
            <div>
              {/* Adani logo mark */}
              <div className="text-xl font-[900] tracking-wider text-white mb-2 font-sans">
                adani
              </div>
              <div className="text-[11px] font-[700] leading-tight text-purple-100 max-w-[130px]">
                Shift Your Employee Health and Safety To Online Mode With Your Own Health App
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-[9px] space-y-1">
              <div className="flex justify-between font-bold">
                <span>India's #1</span>
                <span>US$30</span>
                <span>70+</span>
              </div>
              <div className="text-[7.5px] text-purple-200">23000+ Employees Onboarded</div>
            </div>
          </div>

          {/* Right Column: Achievements White Card */}
          <div className="w-1/2 pl-1 flex flex-col justify-center">
            <div className="bg-white text-slate-900 rounded-xl p-3 shadow-xl border border-purple-100 space-y-2">
              <div className="text-xs font-[900] text-purple-900 border-b border-purple-100 pb-1">
                Achievements
              </div>
              <p className="text-[8px] leading-tight text-slate-600">
                We have an award-winning team of 70+ dev leads, creating custom healthcare mobile apps for enterprise employees.
              </p>

              <div className="grid grid-cols-2 gap-1.5 pt-1 text-center">
                <div className="p-1 rounded bg-purple-50 text-purple-900">
                  <div className="text-[11px] font-[900]">70+</div>
                  <div className="text-[7px] text-slate-500 font-bold">Leaders</div>
                </div>
                <div className="p-1 rounded bg-rose-50 text-rose-900">
                  <div className="text-[11px] font-[900]">23000+</div>
                  <div className="text-[7px] text-slate-500 font-bold">Features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Federal Forecasting App',
      link: '/portfolio',
      previewBg: 'bg-[#FFEBEA]',
      graphic: (
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#FEE2E2] via-[#FCE7F3] to-[#F3E8FF] p-4 flex items-center justify-between text-slate-900 font-sans">
          {/* Left side: Federal Forecasting Branding & Avatar */}
          <div className="w-1/2 space-y-2 z-10">
            <div className="flex items-center space-x-1.5">
              <div className="w-6 h-6 rounded-full bg-[#1E40AF] text-white font-[900] text-[10px] flex items-center justify-center border border-white">
                F
              </div>
              <span className="text-xs font-[900] text-[#1E3A8A] tracking-tight">FORECASTING</span>
            </div>

            <h4 className="text-sm sm:text-base font-[900] text-slate-900 leading-tight">
              Federal Forecasting Application
            </h4>

            {/* Flying Document Vector Accents */}
            <div className="flex space-x-1 pt-1">
              <div className="w-5 h-6 bg-white rounded border border-rose-200 shadow-sm -rotate-6 transform" />
              <div className="w-5 h-6 bg-white rounded border border-rose-200 shadow-sm rotate-6 transform" />
              <div className="w-5 h-6 bg-white rounded border border-rose-200 shadow-sm -rotate-3 transform" />
            </div>
          </div>

          {/* Right side: Smartphone Frame Preview */}
          <div className="w-1/2 flex justify-end z-10">
            <div className="w-[115px] h-[195px] bg-slate-900 rounded-[18px] p-1.5 shadow-2xl border-2 border-slate-800 relative">
              <div className="w-full h-full bg-white rounded-[14px] overflow-hidden p-2 space-y-2 flex flex-col justify-between text-left">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                  <span className="text-[8px] font-bold text-slate-800">Feed</span>
                  <div className="w-3 h-3 rounded-full bg-purple-600 text-white text-[7px] flex items-center justify-center font-bold">+</div>
                </div>

                <div className="flex items-center space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-rose-400 text-white text-[7px] font-bold flex items-center justify-center">A</div>
                  <div>
                    <div className="text-[8px] font-bold text-slate-900 leading-none">Alicia Reed</div>
                    <div className="text-[6px] text-slate-400">2 hrs ago</div>
                  </div>
                </div>

                <div className="h-14 bg-gradient-to-r from-purple-100 to-rose-100 rounded-lg p-1.5 flex items-center justify-center text-center">
                  <span className="text-[7.5px] font-bold text-slate-700 leading-tight">Forecast Analysis Complete</span>
                </div>

                <div className="flex items-center justify-between text-[7px] text-slate-400 border-t border-slate-100 pt-1">
                  <span>❤️ 423 Likes</span>
                  <span>💬 37 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Stress Management App',
      link: '/portfolio',
      previewBg: 'bg-[#FFF3E0]',
      graphic: (
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#FFEDD5] via-[#FED7AA] to-[#FDBA74] p-4 flex items-center justify-center font-sans">
          {/* Vertical Branding Text Accent */}
          <div className="absolute left-2 top-0 bottom-0 text-orange-600/15 font-[900] text-3xl uppercase tracking-widest flex items-center select-none pointer-events-none rotate-90">
            Stress App
          </div>

          {/* Dual Smartphone Mockups */}
          <div className="flex items-center space-x-2 z-10">
            {/* Left Phone: Healing Crystals */}
            <div className="w-[105px] h-[185px] bg-slate-900 rounded-[16px] p-1 shadow-xl border border-slate-800 -rotate-3 transform">
              <div className="w-full h-full bg-white rounded-[12px] p-2 flex flex-col justify-between text-center">
                <div className="mt-4 space-y-1">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto text-[12px]">
                    🧘
                  </div>
                  <div className="text-[8.5px] font-[900] text-orange-900 leading-tight">Healing Crystals</div>
                </div>

                <div className="p-1.5 rounded bg-orange-50 text-[7px] font-bold text-orange-800">
                  Mindfulness & Calm
                </div>
              </div>
            </div>

            {/* Right Phone: Heart Rate & Stats */}
            <div className="w-[115px] h-[195px] bg-slate-900 rounded-[18px] p-1 shadow-2xl border-2 border-slate-800 rotate-2 transform">
              <div className="w-full h-full bg-white rounded-[14px] p-2 flex flex-col justify-between text-left space-y-1.5">
                <div className="text-[7.5px] font-bold text-slate-400">Good Morning!</div>
                <div className="text-[9px] font-[900] text-slate-900">Zenith</div>

                {/* Heart Rate Box */}
                <div className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-100 space-y-1">
                  <div className="text-[7px] font-bold text-slate-500">Weekly Stats</div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-sm font-[900] text-slate-900">96</span>
                    <span className="text-[7px] font-bold text-cyan-600">bpm</span>
                  </div>
                  {/* Heartbeat pulse wave */}
                  <path d="M0 5h5l2-4 3 8 2-4h5" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
                </div>

                <div className="text-[7px] font-bold text-slate-800">Quick Links</div>
                <div className="grid grid-cols-2 gap-1 text-[6.5px] text-center">
                  <div className="p-1 rounded bg-slate-100 font-bold">Meditate</div>
                  <div className="p-1 rounded bg-slate-100 font-bold">Sleep 7h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const defaultSubtitle = `Know ${companyName} journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#dcf2fd] text-slate-900 font-sans text-left overflow-hidden border-b border-blue-100">
      <Container>
        {/* Section Heading - 100% Copy-to-Copy with Reference Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
            {title || "Success Stories"}
          </h2>
          <p className="text-base sm:text-[17.5px] font-[400] text-slate-700 leading-relaxed font-sans max-w-4xl mx-auto">
            {subtitle || defaultSubtitle}
          </p>
        </motion.div>

        {/* 3 Case Study Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 sm:mb-12"
        >
          {caseStudies.map((item, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Link to={item.link} className="block group text-decoration-none text-left">
                {/* Rounded Graphic Preview Box */}
                <div className="h-60 sm:h-64 rounded-[20px] overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300 relative mb-4 border border-white/60">
                  {item.graphic}
                </div>

                {/* Case Study Title Text Below */}
                <h3 className="text-lg sm:text-[19px] font-[800] text-slate-900 group-hover:text-[#0b5072] transition-colors leading-snug font-sans px-1">
                  {item.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Centered 'View All Portfolio' Dark Blue Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mb-14 sm:mb-16"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-[8px] bg-[#0b5072] hover:bg-[#084260] text-white font-[800] text-[15px] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 font-sans"
          >
            View All Portfolio
          </Link>
        </motion.div>

        {/* Bottom 4 Pastel Metric & Callout Cards (3 Pastel + 1 Dark Ocean Blue CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
        >
          {/* Card 1: Soft Pastel Lavender Purple */}
          <div className="p-6 rounded-[18px] bg-[#d9c7ff] text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-36 hover:shadow-md transition-all duration-200 border border-purple-200/50">
            <div className="text-3xl sm:text-[34px] font-[900] text-slate-950 tracking-tight font-sans mb-1">
              23+
            </div>
            <div className="text-xs sm:text-[14px] font-[700] text-slate-800 font-sans">
              Years Experience
            </div>
          </div>

          {/* Card 2: Soft Pastel Mint Green */}
          <div className="p-6 rounded-[18px] bg-[#9ce8d4] text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-36 hover:shadow-md transition-all duration-200 border border-emerald-200/50">
            <div className="text-3xl sm:text-[34px] font-[900] text-slate-950 tracking-tight font-sans mb-1">
              320+
            </div>
            <div className="text-xs sm:text-[14px] font-[700] text-slate-800 font-sans">
              5-Star Clutch Reviews
            </div>
          </div>

          {/* Card 3: Soft Pastel Coral Pink */}
          <div className="p-6 rounded-[18px] bg-[#fbbab2] text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-36 hover:shadow-md transition-all duration-200 border border-rose-200/50">
            <div className="text-3xl sm:text-[34px] font-[900] text-slate-950 tracking-tight font-sans mb-1">
              2800+
            </div>
            <div className="text-xs sm:text-[14px] font-[700] text-slate-800 font-sans">
              Satisfied Clients
            </div>
          </div>

          {/* Card 4: Dark Ocean Blue CTA Card */}
          <div className="p-6 rounded-[18px] bg-[#0b5072] text-white flex flex-col items-center justify-center text-center shadow-lg h-36 space-y-2.5 font-sans border border-blue-900/30">
            <div className="text-base sm:text-[17px] font-[800] text-white font-sans leading-tight">
              Want to start Projects
            </div>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-[8px] bg-white text-[#0b5072] font-[800] text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md font-sans inline-block"
            >
              Get Estimation
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SuccessStoriesSection;

