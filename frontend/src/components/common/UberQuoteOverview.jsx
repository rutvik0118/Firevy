import React, { useState } from 'react';
import Container from './Container';
import { User, Clock, Wrench } from 'lucide-react';

export const UberQuoteOverview = () => {
  const [formState, setFormState] = useState({
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

  return (
    <section id="quote-form" className="py-16 md:py-20 bg-white border-b border-slate-200 text-left font-sans">
      <Container className="max-w-6xl">
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
          <h2
            className="text-slate-900 tracking-tight section-content-title"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: '34px',
              lineHeight: '41px'
            }}
          >
            Get Uber-Like App Development With 100% Guaranteed Success
          </h2>
          <p
            className="text-slate-600 section-content-desc max-w-3xl mx-auto"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '26px'
            }}
          >
            We develop the uber like app for services with robust customer-facing features for your on-demand taxi service business. With our on-demand app solutions, we assist you in uber like taxi app development for building your business's brand and obtaining direct online reservations, among other advantages. In addition, we provide uber like clone app development services to ensure the smooth running of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto pt-4">
          {/* Left Column: 3 Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-start space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border border-blue-100 flex items-center justify-center text-[#005F96] shrink-0">
                <User className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 font-sans">Experienced Developers</h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans">
                  Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-start space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border border-blue-100 flex items-center justify-center text-[#005F96] shrink-0">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 font-sans">Timely Delivery</h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans">
                  We value the time and are particular about timely deliveries by following the highest quality standards.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-start space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border border-blue-100 flex items-center justify-center text-[#005F96] shrink-0">
                <Wrench className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 font-sans">Technical Support</h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal font-sans">
                  Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Lead Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                <p className="text-sm text-slate-600">Your message has been sent successfully. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#005F96] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#005F96] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mobile Number *</label>
                  <div className="flex gap-2">
                    <span className="px-3 py-3 bg-slate-100 text-slate-600 font-bold text-sm rounded-lg border border-slate-200 flex items-center">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#005F96] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Tell us more about your project *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe your requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#005F96] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#005F96] hover:bg-[#004b78] text-white font-extrabold text-sm rounded-lg shadow-md hover:shadow-lg transition-all font-sans cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UberQuoteOverview;
