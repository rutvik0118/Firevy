import React, { useState } from 'react';
import Container from './Container';
import { Users, Shield, User, Clock, Wrench } from 'lucide-react';

export const AmazonQuoteOverview = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const featureItems = [
    {
      title: 'Flexible-Engagement-Models',
      desc: 'Total customized and customer-centric engagement models facilitating hourly or fixed rate hiring of developers.',
      icon: Users
    },
    {
      title: '100% Transparency',
      desc: '100% transparency policy to keep our client and our team on the same page.',
      icon: Shield
    },
    {
      title: 'Experienced Developers',
      desc: 'Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.',
      icon: User
    },
    {
      title: 'Timely Delivery',
      desc: 'We value the time and are particular about timely deliveries by following the highest quality standards.',
      icon: Clock
    },
    {
      title: 'Technical Support',
      desc: 'Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.',
      icon: Wrench
    }
  ];

  return (
    <section id="quote-form" className="py-16 md:py-20 bg-white border-b border-slate-200 text-left font-sans">
      <Container className="max-w-6xl">
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
          <h2
            className="text-slate-900 tracking-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: '34px',
              lineHeight: '41px'
            }}
          >
            Get Amazon-Like App Development With 100% Guaranteed Success
          </h2>
          <p
            className="text-slate-600 max-w-4xl mx-auto font-normal"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '15px',
              lineHeight: '26px'
            }}
          >
            Looking to launch an eCommerce app like Amaon? No need to worry more. We have a team of developers who can develop best-in-class e-commerce apps like Amazon. An e-commerce app like Amazon can help investors connect buyers and sellers on a single place, earn commission, run ads and much more. Get in touch with us to know more!
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto pt-2">
          {/* Left Column: 5 Feature Items */}
          <div className="lg:col-span-6 space-y-6">
            {featureItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-xs">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: "Let's Discuss" Contact Form Box */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/90 p-7 sm:p-8 shadow-xl relative overflow-hidden">
            {/* Top-Left Accent Ribbon Graphic */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-t-[#005F96] border-r-[50px] border-r-transparent" />

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-6 font-sans">
              Let's Discuss
            </h3>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-slate-900">Thank You!</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Your project requirements have been received. Our senior e-commerce consultant will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                {/* Your name * */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/20 text-sm text-slate-900 font-sans"
                  />
                </div>

                {/* Email ID * */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email ID *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/20 text-sm text-slate-900 font-sans"
                  />
                </div>

                {/* Mobile Number * with +91 */}
                <div className="flex gap-2">
                  <div className="px-3 py-3 bg-slate-100 text-slate-700 font-semibold text-sm rounded-lg border border-slate-200 flex items-center shrink-0 font-sans">
                    +91 ▾
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/20 text-sm text-slate-900 font-sans"
                  />
                </div>

                {/* Tell us more about your project * */}
                <div>
                  <textarea
                    rows="3"
                    required
                    placeholder="Tell us more about your project *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#005F96] focus:ring-2 focus:ring-[#005F96]/20 text-sm text-slate-900 font-sans"
                  />
                </div>

                {/* Captcha Widget Mock */}
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between">
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

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#005F96] hover:bg-[#004B78] text-white font-bold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all font-sans cursor-pointer"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AmazonQuoteOverview;
