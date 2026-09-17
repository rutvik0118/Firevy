import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import Container from '../common/Container';

export const WorkTogetherNewsletterSection = ({
  data,
  title,
  subtitle,
  buttonText,
  buttonLink,
  hideBanner = false,
  showBanner = true,
  hideNewsletter = false,
  showNewsletter = true
}) => {
  const bannerTitle =
    title ||
    data?.bannerTitle ||
    data?.title ||
    "Hope You Will Provide Us A Chance To Prove Our Mettle.";
  const bannerDescription =
    subtitle ||
    data?.bannerDescription ||
    data?.description ||
    "Contact us by booking an appointment with our proficient techs today to learn more about how Sapphire can help you unlock technology visions and drive your product strategy.";
  const bannerButtonText = buttonText || data?.bannerButtonText || data?.buttonText || "Request A Free Quote";
  const bannerButtonLink = buttonLink || data?.bannerButtonLink || data?.buttonLink || "/contact";
  const newsletterTitle =
    data?.newsletterTitle || "Subscribe us and Get the latest updates and news";
  const newsletterButtonText =
    data?.newsletterButtonText || "Subscribe";

  const shouldShowBanner = !hideBanner && showBanner && !data?.hideBanner;
  const shouldShowNewsletter = !hideNewsletter && showNewsletter && !data?.hideNewsletter;

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
      {shouldShowBanner && (
        <section className="py-14 sm:py-16 bg-[#006085] text-white text-center relative overflow-hidden font-sans border-b border-cyan-900">
          {/* Background Decorative Translucent Tile Shapes */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-4 left-6 w-32 h-32 rounded-2xl bg-white/20" />
            <div className="absolute top-10 left-1/4 w-44 h-44 rounded-3xl bg-white/20" />
            <div className="absolute bottom-4 left-1/3 w-36 h-36 rounded-2xl bg-white/20" />
            <div className="absolute top-6 right-1/4 w-40 h-40 rounded-2xl bg-white/20" />
            <div className="absolute bottom-6 right-10 w-48 h-48 rounded-3xl bg-white/20" />
            <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-56 h-28 rounded-3xl bg-white/20" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <h2
              className="text-white tracking-tight mb-3 whitespace-pre-line section-content-title"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '34px',
                lineHeight: '41px',
                color: 'rgb(255, 255, 255)'
              }}
            >
              {bannerTitle}
            </h2>
            <p className="text-[14.5px] sm:text-[16px] font-[400] text-blue-50/90 leading-relaxed max-w-3xl mx-auto mb-7 font-sans section-content-desc">
              {bannerDescription}
            </p>
            <div>
              <Link
                to={bannerButtonLink}
                className="inline-flex items-center justify-center px-9 py-3 rounded-[4px] bg-white hover:bg-slate-100 text-[#006085] font-[800] text-[15px] transition-all shadow-md hover:shadow-lg font-sans"
              >
                {bannerButtonText}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 2. Subscribe and Get Latest Updates Banner (Rendered only when shouldShowNewsletter is true) */}
      {shouldShowNewsletter && (
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
                    placeholder="Your name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full lg:flex-1 h-[48px] px-4 rounded-[4px] bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none focus:border-[#006085] font-sans shadow-xs"
                  />

                  {/* Input: Email */}
                  <input
                    type="email"
                    required
                    placeholder="Your Email ID *"
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
                      placeholder="Mobile Number *"
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
      )}
    </>
  );
};

export default WorkTogetherNewsletterSection;
