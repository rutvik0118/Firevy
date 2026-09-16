import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import Container from '../common/Container';

export const WorkTogetherNewsletterSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      setSubscribed(true);
    }
  };

  return (
    <>
      {/* 1. Sapphire Blue Work Together / Prove Our Mettle CTA Banner */}
      <section className="py-14 sm:py-16 bg-[#006587] text-white text-center relative overflow-hidden font-sans border-b border-cyan-800">
        {/* Decorative Geometric Background Watermarks */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-between px-10">
          <div className="w-48 h-48 rounded-3xl bg-white/20 -rotate-12 transform -translate-x-12" />
          <div className="w-56 h-56 rounded-3xl bg-white/20 rotate-12 transform translate-x-16" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-white tracking-tight leading-tight font-sans mb-3">
            Hope You Will Provide Us A Chance To Prove Our Mettle.
          </h2>
          <p className="text-sm sm:text-base font-[400] text-blue-100/90 leading-relaxed max-w-3xl mx-auto mb-7 font-sans">
            Contact us by booking an appointment with our proficient techs today to learn more about how Sapphire can help you unlock technology visions and drive your product strategy.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[6px] bg-white hover:bg-slate-100 text-[#006587] font-[700] text-sm transition-all shadow-md font-sans"
            >
              Request A Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Subscribe us and Get the latest updates and news Banner */}
      <section className="py-12 sm:py-14 bg-[#E5F2F7] text-slate-900 text-center relative font-sans border-b border-slate-200">
        <Container>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-[800] text-slate-900 tracking-tight font-sans mb-7">
            Subscribe us and Get the latest updates and news
          </h2>

          {subscribed ? (
            <div className="p-5 rounded-[10px] bg-white border border-emerald-200 text-emerald-700 max-w-lg mx-auto flex items-center justify-center space-x-2 font-[600] text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Thank you for subscribing to our latest updates!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                {/* Input: Name */}
                <input
                  type="text"
                  required
                  placeholder="Your name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full lg:w-60 px-4 py-2.5 rounded-[4px] bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#006587] font-sans"
                />

                {/* Input: Email */}
                <input
                  type="email"
                  required
                  placeholder="Your Email ID *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full lg:w-60 px-4 py-2.5 rounded-[4px] bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#006587] font-sans"
                />

                {/* Input: Phone with Country Code */}
                <div className="w-full lg:w-72 flex items-center rounded-[4px] bg-white border border-slate-300 overflow-hidden">
                  <div className="flex items-center space-x-1 px-3 py-2.5 bg-slate-50 border-r border-slate-200 text-slate-700 text-xs sm:text-sm font-[600] shrink-0">
                    <span>{countryCode}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none font-sans"
                  />
                </div>

                {/* Cloudflare Mock Badge */}
                <div className="bg-white border border-slate-300 rounded-[4px] px-3 py-1.5 flex items-center space-x-2 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                  <span className="text-xs font-[600] text-slate-700 font-sans">Success!</span>
                  <div className="border-l border-slate-200 pl-2 text-[9px] text-slate-400 font-sans leading-tight text-left">
                    <span className="font-bold text-[#F38020] block">CLOUDFLARE</span>
                    <span>Privacy • Terms</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full lg:w-auto px-8 py-2.5 rounded-[4px] bg-[#006587] hover:bg-[#00526E] text-white font-[700] text-xs sm:text-sm transition-all shadow-sm shrink-0 font-sans"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </Container>
      </section>
    </>
  );
};

export default WorkTogetherNewsletterSection;

