import React, { useState } from 'react';

export const NewsletterSubscribeBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="w-full max-w-full py-10 sm:py-12 bg-[#ECF5FA] text-slate-900 text-center font-sans border-b border-slate-200 text-left">
      <div className="w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto">
        {/* Centered Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight font-sans text-center mb-6 sm:mb-8">
          Subscribe us and Get the latest updates and news
        </h2>

        {subscribed ? (
          <div className="max-w-xl mx-auto p-4 rounded-xl bg-emerald-50 text-emerald-800 text-center border border-emerald-200 font-sans text-sm font-bold shadow-sm">
            ✓ Thank you for subscribing! You will receive our latest updates and news.
          </div>
        ) : (
          /* Horizontal 5-Element Full Width Form Grid */
          <form onSubmit={handleSubmit} className="w-full max-w-full px-4 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-center font-sans text-left">
            {/* Field 1: Your name */}
            <div>
              <input
                type="text"
                required
                placeholder="Your name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-lg bg-white border border-slate-200 focus:border-[#005D95] focus:ring-2 focus:ring-[#005D95]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all shadow-sm font-sans"
              />
            </div>

            {/* Field 2: Your Email ID */}
            <div>
              <input
                type="email"
                required
                placeholder="Your Email ID *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-lg bg-white border border-slate-200 focus:border-[#005D95] focus:ring-2 focus:ring-[#005D95]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all shadow-sm font-sans"
              />
            </div>

            {/* Field 3: +91 Mobile Number */}
            <div className="flex items-center space-x-1.5">
              <div className="px-2.5 py-3 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shrink-0 font-sans">
                +91 ▾
              </div>
              <input
                type="tel"
                required
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-lg bg-white border border-slate-200 focus:border-[#005D95] focus:ring-2 focus:ring-[#005D95]/20 text-xs sm:text-sm text-slate-900 outline-none transition-all shadow-sm font-sans"
              />
            </div>

            {/* Field 4: Cloudflare Captcha Widget Mock */}
            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </div>
                <span className="text-xs font-bold text-slate-700 font-sans">Success!</span>
              </div>
              <div className="text-[9px] text-slate-400 font-sans text-right leading-none">
                <span className="font-extrabold text-orange-600 block">CLOUDFLARE</span>
                <span>Privacy - Help</span>
              </div>
            </div>

            {/* Field 5: Subscribe Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#005D95] hover:bg-[#004A75] text-white text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-200 font-sans"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSubscribeBanner;
