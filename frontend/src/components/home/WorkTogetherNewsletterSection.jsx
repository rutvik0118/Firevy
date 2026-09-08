import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import Container from '../common/Container';

export const WorkTogetherNewsletterSection = ({ data, title, subtitle }) => {
  const bannerTitle = title || data?.bannerTitle || "Let's Work Together On Your Next Digital Project";
  const bannerDescription = subtitle || data?.bannerDescription || "Book a meeting with our specialists today to learn more about how firevy.co can help you unlock technology visions and drive your product strategy.";
  const bannerButtonText = data?.bannerButtonText || "Request A Free Quote";
  const bannerButtonLink = data?.bannerButtonLink || "/contact";
  const newsletterTitle = data?.newsletterTitle || "Subscribe us and Get the latest updates and news";
  const newsletterButtonText = data?.newsletterButtonText || "Subscribe";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      setSubscribed(true);
    }
  };

  return (
    <>
      {/* 1. Sapphire Blue Work Together CTA Banner */}
      <section className="py-16 bg-[#006B8F] text-white text-center relative overflow-hidden font-sans border-b border-cyan-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-[32px] sm:text-[38px] font-[800] text-white tracking-tight leading-tight font-sans mb-3 section-content-title">
            {bannerTitle}
          </h2>
          <p className="text-[15px] sm:text-[16px] font-[400] text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8 font-sans section-content-desc">
            {bannerDescription}
          </p>
          <div>
            <Link
              to={bannerButtonLink}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-white hover:bg-slate-100 text-[#004A75] font-[700] text-[14px] transition-all shadow-md font-sans"
            >
              {bannerButtonText}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Subscribe and Get Latest Updates Banner */}
      <section className="py-16 bg-[#DFEEF7] text-slate-900 text-center relative font-sans border-b border-slate-200">
        <Container>
          <h2 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 tracking-tight font-sans mb-8 section-content-title">
            {newsletterTitle}
          </h2>

          {subscribed ? (
            <div className="p-6 rounded-[12px] bg-white border border-emerald-200 text-emerald-700 max-w-lg mx-auto flex items-center justify-center space-x-2 font-[600]">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Thank you for subscribing to our tech updates!</span>
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
                  className="w-full lg:w-64 px-4 py-3 rounded-[6px] bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-[13px] focus:outline-none focus:border-[#006B8F] font-sans"
                />

                {/* Input: Email */}
                <input
                  type="email"
                  required
                  placeholder="Your Email ID *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full lg:w-64 px-4 py-3 rounded-[6px] bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-[13px] focus:outline-none focus:border-[#006B8F] font-sans"
                />

                {/* Input: Phone with Country Code */}
                <div className="w-full lg:w-72 flex items-center rounded-[6px] bg-white border border-slate-300 overflow-hidden">
                  <div className="flex items-center space-x-1 px-3 py-3 bg-slate-50 border-r border-slate-200 text-slate-700 text-[13px] font-[600] shrink-0">
                    <span>{countryCode}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-3 text-slate-900 placeholder-slate-400 text-[13px] focus:outline-none font-sans"
                  />
                </div>

                {/* Cloudflare Mock Badge */}
                <div className="bg-white border border-slate-300 rounded-[6px] px-3.5 py-2 flex items-center space-x-2 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                  <span className="text-[11px] font-[600] text-slate-700 font-sans">Success!</span>
                  <div className="border-l border-slate-200 pl-2 text-[9px] text-slate-400 font-sans leading-tight text-left">
                    <span className="font-bold text-slate-600 block">CLOUDFLARE</span>
                    <span>Privacy • Help</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full lg:w-auto px-9 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14px] transition-all shadow-md shrink-0 font-sans"
                >
                  {newsletterButtonText}
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
