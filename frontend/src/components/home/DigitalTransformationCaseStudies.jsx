import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const caseStudiesList = [
  {
    id: 'lt',
    company: 'Larsen & Toubro',
    bgColor: '#E6F4FA',
    logo: '/images/case_study_images/Images/new/finallogos_1/lt.png',
    desc: "Larsen & Toubro Limited is one of India's largest and most well-known private corporations. L&T offers unrivaled capabilities across Technology, Engineering, Construction, and Manufacturing, and retains leadership in all of its primary lines of business, almost 80 years of a strong, customer-focused strategy and a never-ending search for world-class quality. The Hazira campus produce extra-large..",
    bullets: [
      'Automated safety audits and inspections',
      '24/7 access to safety training resources',
      'Customizable dashboards and reporting tools',
      'Real-time incident reporting and tracking',
      '99% compliance with health and safety regulations'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/case_study_images/Images/new/l&t.webp'
  },
  {
    id: 'mg',
    company: 'Morris Garages',
    bgColor: '#FFEAEA',
    logo: '/images/case_study_images/Images/new/finallogos_1/mg.png',
    desc: "MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees' health and records. The system from their end was to have one secure locker for the protection of all the papers in order to keep track of employee Examination and OPD records for audit purpose.",
    bullets: [
      'Real-time health data analytics',
      'HIPAA-compliant data security',
      '24/7 access to health resources and support',
      'Personalized health recommendations',
      '98% improvement in employee health monitoring'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/case_study_images/Images/new/mg.webp'
  },
  {
    id: 'adani',
    company: 'Adani Group',
    bgColor: '#EDEDF6',
    logo: '/images/case_study_images/Images/new/finallogos_1/adani.png',
    desc: "Adani EmCare is a Web + Mobile App used by Adani Group’s medical officer to capture, analyze and manage the health data of the employees and workers. And this data is used by medical officer to provide preventive healthcare to the employees.",
    bullets: [
      '98% Employee satisfaction ratio',
      '91% reduction in appointment scheduling time',
      '24/7 real-time health monitoring',
      'Serving over 60,000 healthcare professionals',
      'Generating over USD 30 billion in revenue'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/case_study_images/Images/new/adani.webp'
  },
  {
    id: 'loreal',
    company: "L'Oreal",
    bgColor: '#F3F2EF',
    logo: '/images/case_study_images/Images/new/finallogos_1/loreal.png',
    desc: "This safety improvement application collects observations from organizational Staff and non-staff, and the respective department head will take care of closure observation, and some observation categories will be verified by top management.",
    bullets: [
      '97% reduction in safety incidents',
      'Scalable solution for large enterprises',
      'Recognized for excellence in safety innovation',
      'Automated safety reminders and alerts',
      'Real-time hazard identification and reporting'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/case_study_images/Images/new/loreal.webp'
  },
  {
    id: 'waymark',
    company: 'Waymark Maps',
    bgColor: '#F9E5F7',
    logo: '/images/case_study_images/Images/new/finallogos_1/waymarkmaps.png',
    desc: "A city map and free business listings are available on Waymark. Our city information is consistently accurate and current. With advertisements, points of interest, restaurants, hotels, malls, parking, and metro routes, Waymark offers an interactive map.",
    bullets: [
      'Turn-by-turn voice navigation',
      'Points of interest (POI) recommendations',
      'Real-time traffic updates and route optimization',
      'Offline map access for remote areas',
      'Augmented reality (AR) navigation features'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/case_study_images/Images/new/waymark_map_app.webp'
  },
  {
    id: 'beecar',
    company: 'Bee Car Care',
    bgColor: '#F4F2EC',
    logo: '/images/case_study_images/Images/new/finallogos_1/beecar.png',
    desc: "If you provide car washing services and need to reach a wide range of customers, the car wash app is your best bet. Firevy.co has built a car wash application that allows people to book car wash services in a few clicks.",
    bullets: [
      '96% customer retention rate',
      '92% increase in service bookings',
      'Over 1,10,000 satisfied users',
      'Operating in 90+ locations',
      'User-friendly & Efficient interface for easy booking'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/case_study_images/Images/new/beecar.webp'
  }
];

export const DigitalTransformationCaseStudies = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const title = data?.title || 'Digital Transformation Through Innovation and Collective Knowledge';
  const description = data?.description || 'At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.';

  const caseStudies = (data?.caseStudies && Array.isArray(data.caseStudies) && data.caseStudies.filter(c => c.isActive !== false).length > 0)
    ? data.caseStudies.filter(c => c.isActive !== false)
    : (data?.studies && Array.isArray(data.studies) && data.studies.filter(c => c.isActive !== false).length > 0
        ? data.studies.filter(c => c.isActive !== false)
        : caseStudiesList);

  const total = caseStudies.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Auto slide every 7 seconds
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [total, handleNext]);

  const current = caseStudies[currentIndex] || caseStudies[0];

  return (
    <section className="py-14 sm:py-18 bg-white text-slate-900 relative font-sans overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1550px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] tracking-tight text-[#000000] mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[14.5px] sm:text-[16px] font-[400] text-[#4b5563] leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Full Width Slide Carousel Card */}
        <div className="w-full">
          <div
            className="w-full rounded-[24px] overflow-hidden transition-all duration-500 shadow-sm border border-slate-100"
            style={{ backgroundColor: current.bgColor || '#E6F4FA' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px]">
              {/* Left Column: Client Info & Bullets */}
              <div className="lg:col-span-6 p-8 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-between text-left">
                <div>
                  {/* Brand Logo */}
                  <div className="h-14 flex items-center mb-6">
                    <img
                      src={current.logo}
                      alt={current.company}
                      className="max-h-12 max-w-[220px] object-contain"
                    />
                  </div>

                  {/* Paragraph Description */}
                  <p className="text-[14px] sm:text-[15px] text-[#374151] leading-[1.7] font-sans mb-6">
                    {current.desc}
                  </p>

                  {/* Bullet Points with >> Chevrons */}
                  <ul className="space-y-3.5 mb-8">
                    {current.bullets?.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-[14px] sm:text-[14.5px] font-[500] text-[#1f2937] font-sans">
                        <ChevronsRight className="w-4 h-4 text-[#111827] mr-2.5 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Pill Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    to={current.caseStudyLink || '/portfolio'}
                    className="px-8 py-3 rounded-full bg-[#18181b] hover:bg-black text-white font-[700] text-[14.5px] transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                  >
                    View Case Study
                  </Link>
                  <Link
                    to={current.portfolioLink || '/portfolio'}
                    className="px-8 py-3 rounded-full border border-[#18181b] hover:bg-[#18181b] hover:text-white text-[#18181b] font-[700] text-[14.5px] transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Res Mockup Graphic */}
              <div className="lg:col-span-6 flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-14 bg-white/40">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={current.mainImg}
                    alt={`${current.company} Overview`}
                    className="w-full h-auto max-h-[520px] object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls Below Card */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-slate-900 bg-white text-slate-800 hover:text-black flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Previous Case Study"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-slate-900 bg-white text-slate-800 hover:text-black flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Next Case Study"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationCaseStudies;
