import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const defaultCaseStudies = [
  {
    id: 0,
    company: 'Bee Car Care',
    bgColor: '#FFFBE8',
    logo: (
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 bg-[#1a1a1a] rounded-full flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#F5A623" strokeWidth="2">
            <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="9" y="11" width="14" height="10" rx="2" fill="none" stroke="#F5A623"/>
            <circle cx="12" cy="21" r="1" fill="#F5A623"/>
            <circle cx="20" cy="21" r="1" fill="#F5A623"/>
          </svg>
        </div>
        <div>
          <span className="text-[18px] font-[900] text-[#F5A623] font-sans">Bee</span>
          <span className="text-[18px] font-[900] text-slate-900 font-sans">CarCare</span>
        </div>
      </div>
    ),
    desc: 'If you provide car washing services and need to reach a wide range of customers, the car wash app development is your best bet. firevy.co has built a car wash application that allows people to book car wash services in few clicks',
    points: [
      '96% customer retention rate',
      '92% increase in service bookings',
      'Over 1,10,000 satisfied users',
      'Operating in 90+ locations',
      'User-friendly & Efficient interface for easy booking'
    ],
    mockup: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80',
    slug: 'bee-car-care'
  },
  {
    id: 1,
    company: 'Morris Garages',
    bgColor: '#FDE8E8',
    logo: (
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 border-[2.5px] border-[#C0392B] rounded-full flex items-center justify-center shrink-0">
          <span className="text-[#C0392B] font-[900] text-[11px] font-sans">MG</span>
        </div>
        <span className="text-[13px] font-[900] text-slate-800 font-sans tracking-widest uppercase">MORRIS GARAGES</span>
      </div>
    ),
    desc: "MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees' health and records. The system from their end was to have one secure locker for the protection of all the papers in order to keep track of employee Examination and OPD records for audit purpose.",
    points: [
      'Real-time health data analytics',
      'HIPAA-compliant data security',
      '24/7 access to health resources and support',
      'Personalized health recommendations',
      '98% improvement in employee health monitoring'
    ],
    mockup: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80',
    slug: 'morris-garages'
  },
  {
    id: 2,
    company: 'Fintech Wealth Platform',
    bgColor: '#EDF5F9',
    logo: (
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 bg-[#006B8F] rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-[900] text-[14px]">AP</span>
        </div>
        <span className="text-[16px] font-[900] text-[#006B8F] font-sans">Apex Capital</span>
      </div>
    ),
    desc: 'High-throughput wealth management platform delivering automated investment insights, algorithmic portfolio rebalancing, and banking integrations with sub-second execution.',
    points: [
      'Sub-50ms trading execution latency',
      'SOC2 and PCI-DSS Tier 1 certified',
      'Over $500M in assets under management',
      '99.99% system availability SLA',
      'Automated daily tax-loss harvesting'
    ],
    mockup: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80',
    slug: 'fintech-wealth-platform'
  }
];

export const DigitalTransformationCaseStudies = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const title = data?.title || 'Driving Digital Transformation';
  const description = data?.description || 'Learn how we are empowering leading companies to achieve their transformation goals with our industry expertise and deep tech.';

  const caseStudies = (data?.caseStudies && Array.isArray(data.caseStudies) && data.caseStudies.filter(c => c.isActive !== false).length > 0)
    ? data.caseStudies.filter(c => c.isActive !== false)
    : defaultCaseStudies;

  const total = caseStudies.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [total, handleNext]);

  const current = caseStudies[currentIndex] || caseStudies[0] || defaultCaseStudies[0];

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Outer Card with Light Yellow/Red tint background */}
        <div
          className="rounded-[24px] p-8 sm:p-12 transition-colors duration-500 shadow-sm border border-slate-200/80 relative"
          style={{ backgroundColor: current.bgColor || '#FFFBE8' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Brand Logo */}
              {current.logo ? (
                typeof current.logo === 'string' ? (
                  <img src={current.logo} alt={current.company} className="h-10 object-contain mb-5" />
                ) : (
                  current.logo
                )
              ) : (
                <div className="text-xl font-black text-slate-900 mb-4">{current.company}</div>
              )}

              {/* Paragraph Description */}
              <p className="text-[14.5px] font-[400] text-slate-700 leading-relaxed font-sans">
                {current.desc || current.description}
              </p>

              {/* Green Checkpoint Bullet List */}
              {current.points && current.points.length > 0 && (
                <ul className="space-y-2.5 pt-1">
                  {current.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[14px] font-[500] text-slate-800 font-sans">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[12px] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Button */}
              <div className="pt-3">
                <Link
                  to={`/portfolio/${current.slug || 'case-study'}`}
                  className="inline-block px-8 py-3 bg-[#006B8F] hover:bg-[#005578] text-white font-[700] text-sm rounded-[8px] transition-all font-sans shadow-sm"
                >
                  View Case Study
                </Link>
              </div>
            </div>

            {/* Right Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] h-[420px] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src={current.mockup || current.image}
                  alt={current.company}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Controls Bar: Left/Right Arrows + Dots Counter */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-black/10">
            {/* Left & Right Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#006B8F] hover:text-white transition-all duration-200"
                aria-label="Previous Case Study"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#006B8F] hover:text-white transition-all duration-200"
                aria-label="Next Case Study"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Dots Indicator */}
            {total > 1 && (
              <div className="flex items-center gap-2">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-[#006B8F]' : 'w-2.5 bg-slate-400/40 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to case study ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DigitalTransformationCaseStudies;
