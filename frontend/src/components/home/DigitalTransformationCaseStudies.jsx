import React, { useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudiesList = [
  {
    id: 'mg',
    company: 'Morris Garages',
    bgColor: '#FFF0F0',
    logo: '/images/mg.png',
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
    mainImg: '/images/mg.webp'
  },
  {
    id: 'loreal',
    company: "L'Oréal",
    bgColor: '#F5F3EF',
    logo: '/images/loreal.png',
    desc: "This safety improvement application collects the observations from organizational Staff and non-staff, and the respective department head will take care of the closure observation, and some observation categories will be verified by top management.",
    bullets: [
      '97% reduction in safety incidents',
      'Scalable solution for large enterprises',
      'Recognized for excellence in safety innovation',
      'Automated safety reminders and alerts',
      'Real-time hazard identification and reporting'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/loreal.webp'
  },
  {
    id: 'adani',
    company: 'Adani Group',
    bgColor: '#EDEDF6',
    logo: '/images/adani.png',
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
    mainImg: '/images/adani.webp'
  },
  {
    id: 'waymark',
    company: 'Waymark Maps',
    bgColor: '#F5EDFC',
    logo: '/images/waymarkmaps.png',
    desc: "A city map and free business listings are available on Waymark. Our city information is consistently accurate and current. With advertisements, points of interest, restaurants, hotels, malls, parking, featured locations, metro routes, tourist attractions, and much more, Waymark offers an interactive map of the Ivory Coast...",
    bullets: [
      'Turn by turn voice navigation',
      'Points of interest (POI) recommendations',
      'Real-time traffic updates and route optimization',
      'Offline map access for remote areas',
      'Augmented reality (AR) navigation features'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/waymark_map_app.webp'
  },
  {
    id: 'beecar',
    company: 'Bee Car CARE',
    bgColor: '#FFFBEB',
    logo: '/images/beecar.png',
    desc: "If you provide car washing services and need to reach a wide range of customers, the car wash app is your best bet. Sapphire Software Solutions has built a car wash application that allows people to book car wash services in few clicks",
    bullets: [
      '56% customer retention rate',
      '112 % increase in service bookings',
      'Over 1,10,000 satisfied users',
      'Operating in 20+ locations',
      'User-friendly & Efficient interface for easy booking'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/beecar.webp'
  },
  {
    id: 'lt',
    company: 'LARSEN & TOUBRO',
    bgColor: '#EBF5FB',
    logo: '/images/lt.png',
    desc: "Larsen & Toubro Limited is one of India's largest and most well-known corporations. L&T offers unrivaled capabilities across Technology, Engineering, Construction, and Manufacturing, and retains leadership in all of its prime businesses, almost 80 years of a strong, customer-focused strategy and...",
    bullets: [
      'Automated safety audits and inspections',
      '24/7 access to safety training resources',
      'Customizable dashboards and reporting tools',
      'Real-time incident reporting and tracking',
      '99% compliance with health and safety regulations'
    ],
    caseStudyLink: '/portfolio',
    portfolioLink: '/portfolio',
    mainImg: '/images/l&t.webp'
  }
];

export const DigitalTransformationCaseStudies = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const title = data?.title || 'Digital Transformation Through Innovation and Collective Knowledge';
  const description = data?.description || 'At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.';

  const caseStudies = (data?.caseStudies && Array.isArray(data.caseStudies) && data.caseStudies.filter(c => c.isActive !== false).length > 0)
    ? data.caseStudies.filter(c => c.isActive !== false)
    : caseStudiesList;

  const total = caseStudies.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 relative font-sans overflow-hidden w-full border-b border-slate-100">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[900] tracking-tight text-slate-900 mb-2.5 font-sans">
            {title}
          </h2>
          <p className="text-[13.5px] sm:text-[15px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Multi-Card Slider Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * 85}%)`,
              width: `${total * 85}%`
            }}
          >
            {caseStudies.map((item, idx) => {
              const bullets = Array.isArray(item?.bullets) ? item.bullets : [];
              return (
                <div
                  key={idx}
                  className="w-full max-w-[1100px] shrink-0 rounded-[24px] overflow-hidden border border-slate-200/70 shadow-sm"
                  style={{ backgroundColor: item.bgColor || '#F5EDFC' }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
                    {/* Left Column: Client Info & Bullets */}
                    <div className="lg:col-span-7 p-6 sm:p-9 lg:p-11 flex flex-col justify-between text-left">
                      <div>
                        {/* Brand Logo / Header Title */}
                        <div className="mb-4">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt={item.company}
                              className="max-h-12 max-w-[200px] object-contain"
                            />
                          ) : (
                            <h3 className="text-2xl font-[900] text-slate-900 tracking-tight">
                              {item.company}
                            </h3>
                          )}
                        </div>

                        {/* Description Paragraph */}
                        <p className="text-[13px] sm:text-[13.5px] text-slate-700 leading-[1.65] font-normal mb-5 font-sans">
                          {item.desc}
                        </p>

                        {/* Bullet Points with >> */}
                        {bullets.length > 0 && (
                          <ul className="space-y-2 mb-6">
                            {bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start text-[12.5px] sm:text-[13px] font-[600] text-slate-800 font-sans">
                                <ChevronsRight className="w-3.5 h-3.5 text-slate-900 mr-2 shrink-0 mt-0.5 stroke-[3]" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Bottom Action Buttons: View Case Study | View Portfolio */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                          to={item.caseStudyLink || '/portfolio'}
                          className="px-6 py-2.5 rounded-full bg-[#18181b] hover:bg-black text-white font-[700] text-[13px] transition-all shadow-sm cursor-pointer"
                        >
                          View Case Study
                        </Link>
                        <Link
                          to={item.portfolioLink || '/portfolio'}
                          className="px-6 py-2.5 rounded-full border border-[#18181b] hover:bg-[#18181b] hover:text-white text-slate-900 font-[700] text-[13px] transition-all shadow-sm cursor-pointer"
                        >
                          View Portfolio
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: App Mockup Graphic */}
                    <div className="lg:col-span-5 flex items-center justify-center p-6 bg-white/50 border-l border-slate-200/40">
                      <div className="w-full h-full flex items-center justify-center">
                        {item.mainImg ? (
                          <img
                            src={item.mainImg}
                            alt={`${item.company} Mockup`}
                            className="w-full h-auto max-h-[380px] object-contain drop-shadow-xl hover:scale-102 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-[250px] flex items-center justify-center text-slate-400 text-sm">
                            Preview Image
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 bg-white text-slate-800 hover:text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
            aria-label="Previous Case Study"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 bg-white text-slate-800 hover:text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
            aria-label="Next Case Study"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationCaseStudies;
