import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const DigitalTransformationCaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
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
      desc: 'If you provide car washing services and need to reach a wide range of customers, the car wash app development is your best bet. Sapphire Software Solutions has built a car wash application that allows people to book car wash services in few clicks',
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
      desc: 'MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees\' health and records. The system from their end was to have one secure locker for the protection of all the papers in order to keep track of employee Examination and OPD records for audit purpose.',
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
      company: 'Adani EmCare',
      bgColor: '#EAF4FD',
      logo: (
        <div className="mb-5">
          <span className="text-[26px] font-[900] font-sans" style={{
            background: 'linear-gradient(90deg, #1565C0 0%, #00897B 50%, #F57C00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>adani</span>
        </div>
      ),
      desc: 'Adani EmCare is a Web + Mobile App used by Adani Group\'s medical officer to capture, analyze and manage the health data of the employees and workers. And this data is used by medical officer to provide the preventive healthcare to the employees.',
      points: [
        '98% Employee satisfaction ratio',
        '91% reduction in appointment scheduling time',
        '24/7 real-time health monitoring',
        'Serving over 60,000 healthcare professionals',
        'Generating over USD 30 billion in revenue'
      ],
      mockup: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=700&q=80',
      slug: 'adani-emcare'
    },
    {
      id: 3,
      company: "L'OREAL",
      bgColor: '#F8F8F8',
      logo: (
        <div className="mb-5">
          <div className="text-[20px] font-[900] text-slate-900 font-sans tracking-wider">L'ORÉAL</div>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-5 h-5 bg-amber-600 rounded-sm flex items-center justify-center">
              <span className="text-white text-[7px] font-[900]">S</span>
            </div>
            <div className="text-[8px] text-slate-600 font-[600] leading-tight">SAFE@WORK<br/>SAFE@HOME</div>
          </div>
        </div>
      ),
      desc: 'This safety improvement application collects the observations from the organizational Staff and non-staff, and the respective department head will take care of the closure observation, and some observation categories will be verified by the top management.',
      points: [
        '97% reduction in safety incidents',
        'Scalable solution for large enterprises',
        'Recognized for excellence in safety innovation',
        'Automated safety reminders and alerts',
        'Real-time hazard identification and reporting'
      ],
      mockup: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=700&q=80',
      slug: 'loreal'
    }
  ];

  const total = caseStudies.length;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // 4-second auto-scroll
  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  const nextIndex = (currentIndex + 1) % total;
  const cs = caseStudies[currentIndex];
  const nextCs = caseStudies[nextIndex];

  return (
    <section className="py-16 bg-white border-b border-slate-100 text-slate-900 relative font-sans">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto px-4 mb-10">
        <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
          Digital Transformation Through Innovation and Collective Knowledge
        </h2>
        <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans">
          At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
        </p>
      </div>

      {/* Full-Bleed Slider with Peek */}
      <div className="w-full overflow-hidden mb-8 px-4 sm:px-8">
        <div className="flex gap-5 transition-all duration-500 ease-in-out">

          {/* Current Card — ~80% width */}
          <div
            className="flex rounded-[16px] overflow-hidden border border-slate-200/60 shadow-sm shrink-0 transition-all duration-500"
            style={{ backgroundColor: cs.bgColor, width: 'calc(80% - 10px)', minHeight: '380px' }}
          >
            {/* LEFT: Text Content */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                {cs.logo}
                <p className="text-[13px] font-[400] text-slate-700 leading-relaxed font-sans mb-5">
                  {cs.desc}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {cs.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-slate-700 font-sans">
                      <span className="text-slate-400 font-[700] shrink-0 mt-0.5">&gt;&gt;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to={`/portfolio/${cs.slug}`}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-700 text-white font-[700] text-[13px] rounded-full transition-all font-sans"
                >
                  View Case Study
                </Link>
                <Link
                  to="/portfolio"
                  className="px-6 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-[700] text-[13px] rounded-full transition-all font-sans shadow-sm"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* RIGHT: App Mockup — white bg, contained image */}
            <div className="hidden lg:flex w-1/2 bg-white items-center justify-center overflow-hidden p-6">
              <img
                src={cs.mockup}
                alt={cs.company}
                className="w-full h-full object-contain rounded-[12px]"
                style={{ maxHeight: '320px' }}
              />
            </div>
          </div>

          {/* Partial Next Card (Peek — ~20% visible) */}
          <div
            className="flex rounded-[16px] overflow-hidden border border-slate-200/60 shadow-sm shrink-0"
            style={{ backgroundColor: nextCs.bgColor, width: 'calc(20% - 10px)', minHeight: '380px' }}
          >
            <div className="w-full p-6 flex flex-col justify-start overflow-hidden">
              {nextCs.logo}
              <p className="text-[12px] text-slate-500 font-sans line-clamp-4 leading-relaxed">
                {nextCs.desc}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Navigation Arrows */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={goPrev}
          className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Previous"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goNext}
          className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Next"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default DigitalTransformationCaseStudies;
