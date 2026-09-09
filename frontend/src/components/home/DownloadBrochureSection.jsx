import React, { useState } from 'react';
import Container from '../common/Container';

export const DownloadBrochureSection = ({ data }) => {
  const title = data?.title || 'Download Our Brochure To Take A Glimpse Of Our Offerings';
  const buttonText = data?.buttonText || 'Download';
  const brochureUrl = data?.brochureUrl || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (brochureUrl) {
      window.open(brochureUrl, '_blank');
    }
  };

  return (
    <section className="py-14 sm:py-16 bg-[#f0f8ff] text-slate-900 relative font-sans">
      <Container>
        {/* Section Heading — Single Line, Bold Black */}
        <div className="text-center max-w-5xl mx-auto mb-7">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[32px] font-[800] tracking-tight text-[#000000] font-sans">
            {title}
          </h2>
        </div>

        {/* Form Container — 1 Row for Inputs & Captcha */}
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center mb-6">
            {/* 1. Name Input */}
            <div className="lg:col-span-3">
              <input
                type="text"
                required
                placeholder="Your name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-[46px] px-3.5 text-[13.5px] rounded-[4px] border border-slate-300 focus:border-[#005d89] focus:outline-none bg-white text-slate-800 font-sans placeholder:text-slate-400 shadow-sm"
              />
            </div>

            {/* 2. Email Input */}
            <div className="lg:col-span-3">
              <input
                type="email"
                required
                placeholder="Your Email ID *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-[46px] px-3.5 text-[13.5px] rounded-[4px] border border-slate-300 focus:border-[#005d89] focus:outline-none bg-white text-slate-800 font-sans placeholder:text-slate-400 shadow-sm"
              />
            </div>

            {/* 3. Phone with Country Code */}
            <div className="lg:col-span-4 flex rounded-[4px] border border-slate-300 bg-white overflow-hidden shadow-sm focus-within:border-[#005d89] h-[46px]">
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="bg-transparent px-2.5 text-[13px] font-[500] text-slate-700 outline-none border-r border-slate-200 cursor-pointer"
              >
                <option value="+91">+91 ▾</option>
                <option value="+1">+1 ▾</option>
                <option value="+44">+44 ▾</option>
                <option value="+971">+971 ▾</option>
                <option value="+61">+61 ▾</option>
              </select>
              <input
                type="tel"
                required
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 px-3 text-[13.5px] outline-none bg-white text-slate-800 font-sans placeholder:text-slate-400"
              />
            </div>

            {/* 4. Cloudflare Turnstile Badge */}
            <div className="lg:col-span-2">
              <div className="h-[46px] px-3 bg-white border border-slate-300 rounded-[4px] shadow-sm flex items-center justify-between select-none">
                <div className="flex items-center space-x-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[11.5px] font-[500] text-slate-700">Success!</span>
                </div>
                
                <div className="flex flex-col items-end justify-center">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-3 text-[#F38020]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.8 10.5C18.2 6.7 14.8 4 10.8 4.7 7.7 5.2 5.1 7.6 4.4 10.6 2 11.2.3 13.3.4 15.8.5 18.4 2.6 20.4 5.2 20.4h13.2c2.4 0 4.4-1.8 4.6-4.2.2-2.5-1.5-4.8-4.2-5.7z"/>
                    </svg>
                    <span className="text-[9.5px] font-[700] text-slate-700 tracking-wider">CLOUDFLARE</span>
                  </div>
                  <span className="text-[7.5px] text-slate-400">Privacy • Terms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button — Centered Solid Blue Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-2.5 sm:py-3 bg-[#005d89] hover:bg-[#004a6e] text-white font-[700] text-[15px] rounded-[6px] transition-all font-sans shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              {submitted ? 'Brochure Sent!' : buttonText}
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default DownloadBrochureSection;
