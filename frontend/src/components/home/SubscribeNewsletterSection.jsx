import React, { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import Container from '../common/Container';

export const SubscribeNewsletterSection = ({ data }) => {
  const newsletterTitle =
    data?.newsletterTitle || 'Subscribe us and Get the latest updates and news';
  const newsletterButtonText = data?.newsletterButtonText || 'Subscribe';
  const namePlaceholder = data?.namePlaceholder || 'Your name *';
  const emailPlaceholder = data?.emailPlaceholder || 'Your Email ID *';
  const phonePlaceholder = data?.phonePlaceholder || 'Mobile Number *';

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
    <section className="py-14 sm:py-16 bg-[#EEF4F8] text-slate-900 text-center relative font-sans border-b border-slate-200">
      <Container>
        <h2
          className="tracking-tight mb-8 section-content-title"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '34px',
            lineHeight: '41px',
            color: '#0F172A'
          }}
        >
          {newsletterTitle}
        </h2>

        {subscribed ? (
          <div className="p-5 rounded-[8px] bg-white border border-emerald-200 text-emerald-700 max-w-lg mx-auto flex items-center justify-center space-x-2 font-[600]">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>Thank you for subscribing to our tech updates!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-[1240px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-3.5">
              {/* Input: Name */}
              <input
                type="text"
                required
                placeholder={namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full lg:flex-1 h-[48px] px-4 rounded-[4px] bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none focus:border-[#006085] font-sans shadow-xs"
              />

              {/* Input: Email */}
              <input
                type="email"
                required
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full lg:flex-1 h-[48px] px-4 rounded-[4px] bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none focus:border-[#006085] font-sans shadow-xs"
              />

              {/* Input: Phone with Country Code */}
              <div className="w-full lg:flex-1 h-[48px] flex items-center rounded-[4px] bg-white border border-slate-200 overflow-hidden shadow-xs">
                <div className="flex items-center space-x-1 px-3.5 h-full bg-slate-50/80 border-r border-slate-200 text-slate-700 text-[13.5px] font-[600] shrink-0">
                  <span>{countryCode}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <input
                  type="tel"
                  required
                  placeholder={phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-full px-3.5 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none font-sans"
                />
              </div>

              {/* Cloudflare Mock Badge */}
              <div className="h-[48px] bg-white border border-slate-200 rounded-[4px] px-3.5 flex items-center space-x-2 shrink-0 shadow-xs">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
                <span className="text-[11.5px] font-[600] text-slate-700 font-sans">Success!</span>
                <div className="border-l border-slate-200 pl-2 text-[9px] text-slate-400 font-sans leading-tight text-left">
                  <span className="font-bold text-slate-700 block text-[9.5px]">CLOUDFLARE</span>
                  <span>Privacy • Help</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full lg:w-auto h-[48px] px-8 rounded-[4px] bg-[#006085] hover:bg-[#004d6b] text-white font-[700] text-[14.5px] transition-all shadow-sm font-sans shrink-0"
              >
                {newsletterButtonText}
              </button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
};

export default SubscribeNewsletterSection;
