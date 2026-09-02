import React, { useState } from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import Container from '../common/Container';

export const DownloadBrochureSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-14 bg-[#EDF5F9] border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Heading - Dark, centered, no card box */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-[28px] sm:text-[34px] font-[800] tracking-tight text-slate-900 leading-tight font-sans">
            Download Our Brochure To Take A Glimpse Of Our Offerings
          </h2>
        </div>

        {/* Form Row — 3 inputs + Success badge in one horizontal row */}
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
            {/* Name Input */}
            <input
              type="text"
              required
              placeholder="Your name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-1 w-full px-4 py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006B8F] focus:outline-none bg-white text-slate-800 font-sans placeholder:text-slate-400"
            />

            {/* Email Input */}
            <input
              type="email"
              required
              placeholder="Your Email ID *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 w-full px-4 py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006B8F] focus:outline-none bg-white text-slate-800 font-sans placeholder:text-slate-400"
            />

            {/* Phone Input with Country Flag Prefix */}
            <div className="flex-1 w-full flex">
              <span className="inline-flex items-center px-3 text-[13px] font-[600] text-slate-700 bg-white border border-r-0 border-slate-300 rounded-l-[6px] whitespace-nowrap gap-1">
                +1 ▾
              </span>
              <input
                type="tel"
                required
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 px-4 py-3 text-[14px] rounded-r-[6px] border border-slate-300 focus:border-[#006B8F] focus:outline-none bg-white text-slate-800 font-sans placeholder:text-slate-400"
              />
            </div>

            {/* Success + Cloudflare Badge on right */}
            <div className="flex flex-col items-start gap-1 shrink-0">
              <span className="inline-flex items-center gap-1 text-[12px] font-[600] text-emerald-600 bg-white border border-emerald-200 px-2.5 py-1 rounded-[4px]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Success!</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-[400]">
                <Shield className="w-3 h-3 text-orange-400" />
                <span>CLOUDFLARE</span>
              </span>
            </div>
          </div>

          {/* Download Button — centered below */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-12 py-3 bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] rounded-[6px] transition-all font-sans"
            >
              {submitted ? 'Brochure Sent!' : 'Download'}
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default DownloadBrochureSection;
