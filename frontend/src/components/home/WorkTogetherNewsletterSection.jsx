import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import Container from '../common/Container';

export const WorkTogetherNewsletterSection = ({ data, title, subtitle, buttonText }) => {
  const bannerTitle = title || data?.bannerTitle || "Need to know more about our offerings? Contact us today!";
  const bannerDescription = subtitle || data?.bannerDescription || "Our podcasts are specific, as guests discuss their experience, giving listeners ideas to harness their full potential.";
  const bannerButtonText = buttonText || data?.bannerButtonText || "Contact-Us";
  const bannerButtonLink = data?.bannerButtonLink || "/contact";
  const newsletterTitle = data?.newsletterTitle || "Subscribe us and Get the latest updates and news";

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
      {/* 1. Sapphire Blue Work Together CTA Banner with Translucent Tile Shapes */}
      <section className="py-16 sm:py-20 bg-[#006B8F] text-white text-center relative overflow-hidden font-sans border-b border-cyan-800">
        {/* Background Decorative Translucent Tile Shapes (1:1 Reference Match) */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-4 left-6 w-32 h-32 rounded-2xl bg-white/15" />
          <div className="absolute top-12 left-1/4 w-48 h-48 rounded-3xl bg-white/15" />
          <div className="absolute bottom-4 left-1/3 w-36 h-36 rounded-2xl bg-white/15" />
          <div className="absolute top-6 right-1/4 w-40 h-40 rounded-2xl bg-white/15" />
          <div className="absolute bottom-6 right-10 w-52 h-52 rounded-3xl bg-white/15" />
          <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-60 h-28 rounded-3xl bg-white/15" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-[32px] sm:text-[40px] font-[800] text-white tracking-tight leading-tight font-sans mb-3">
            {bannerTitle}
          </h2>
          <p className="text-[15px] sm:text-[17px] font-[400] text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
            {bannerDescription}
          </p>
          <div>
            <Link
              to={bannerButtonLink}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-white hover:bg-slate-100 text-[#004A75] font-[800] text-[15px] transition-all shadow-lg hover:shadow-xl font-sans"
            >
              {bannerButtonText}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Subscribe and Get Latest Updates Banner */}
      <section className="py-16 bg-[#DFEEF7] text-slate-900 text-center relative font-sans border-b border-slate-200">
        <Container>
          <h2 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 tracking-tight font-sans mb-8">
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
                  className="w-full lg:w-auto px-8 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14px] transition-all shadow-md font-sans"
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
