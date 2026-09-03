import React, { useState } from 'react';
import Container from './Container';

const statsList = [
  {
    value: '23+',
    label: 'Years of Experience',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80'
  },
  {
    value: '320+',
    label: '5-Star Clutch Reviews',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    value: '20+',
    label: 'Fortunes 500 Companies',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=150&q=80'
  },
  {
    value: '200+',
    label: 'IT Professional',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&q=80'
  },
  {
    value: '95%',
    label: 'Client Retention',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=150&q=80'
  },
  {
    value: '18+',
    label: 'Industry Served',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80'
  },
  {
    value: '2800+',
    label: 'Satisfied Clients',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=150&q=80'
  },
  {
    value: '1500+',
    label: 'Completed Projects',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=150&q=80'
  }
];

const faqList = [
  {
    id: 1,
    question: '1. Should the development of a medical app for healthcare professionals begin on iOS or Android?',
    answer: 'It fully depends on the purpose of your medical mobile app development procedure. If you are searching for a platform to facilitate staff communication and have a large crew, use an Android application. However, if you are searching for a platform on which they may communicate encrypted data, medical records, etc., choose iOS since it is naturally more secure.'
  },
  {
    id: 2,
    question: '2. How much do medical applications for healthcare professionals cost to develop?',
    answer: 'The cost of developing a medical app typically ranges from $15,000 to $60,000 depending on features, compliance requirements (HIPAA/GDPR), integrations, and platform complexity.'
  },
  {
    id: 3,
    question: '3. What makes a health app effective?',
    answer: 'An effective health app requires an intuitive UI/UX design, real-time data sync, secure encrypted data storage, seamless integration with medical devices/wearables, and reliable 24/7 backend performance.'
  },
  {
    id: 4,
    question: '4. What are Healthcare App Development Services?',
    answer: 'Healthcare App Development Services encompass custom mobile and web application design, telemedicine integration, EHR/EMR software, remote patient monitoring, and regulatory compliance engineering.'
  },
  {
    id: 5,
    question: '5. Why should businesses choose Sapphire Solutions for Healthcare App Development?',
    answer: 'Sapphire Solutions brings 23+ years of domain expertise, 2800+ delivered projects, ISO & HIPAA compliant development frameworks, and dedicated 24/7 post-launch support.'
  },
  {
    id: 6,
    question: '6. How do Healthcare Apps benefit hospitals and patients?',
    answer: 'Healthcare apps streamline clinical workflows, reduce administrative overhead for hospitals, enable instant doctor appointments, and provide patients with 24/7 access to their medical records.'
  },
  {
    id: 7,
    question: '7. Are Healthcare Apps developed by Sapphire Solutions compliant with regulations?',
    answer: 'Yes, all our healthcare applications comply strictly with HIPAA, HITECH, GDPR, HL7, and FHIR standards to ensure end-to-end data privacy and security.'
  },
  {
    id: 8,
    question: '8. How much does it cost to develop a Healthcare App?',
    answer: 'Costs vary based on scope, features, and platform requirements. Contact our team for a detailed milestone-based project estimation.'
  },
  {
    id: 9,
    question: '9. Can Healthcare Apps integrate AI and wearable devices?',
    answer: 'Absolutely. We integrate AI algorithms for diagnostic assistance and real-time Bluetooth/IoT wearable data streaming from Apple HealthKit, Fitbit, and medical sensors.'
  }
];

export const SapphireFaqSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="py-14 sm:py-16 bg-[#005D95] text-white text-left font-sans border-b border-slate-200">
      {/* Full Width Edge-to-Edge Centered Header */}
      <div className="text-center w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto mb-8 sm:mb-10 space-y-2.5">
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-white tracking-tight font-sans">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-100 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-90">
          We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below.
        </p>
      </div>

      {/* Main White Floating Container Card */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 text-slate-900 shadow-2xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: 8 Stats Cards & Review Laurel Badges */}
            <div className="lg:col-span-5 space-y-6">
              {/* 8 Stats Cards Grid (2 Columns x 4 Rows) */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {statsList.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-xl bg-[#EFF7FE] border border-blue-100/80 flex items-center space-x-3 hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={stat.image}
                      alt={stat.label}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover shrink-0 shadow-sm"
                    />
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-[#005D95] leading-none font-sans">
                        {stat.value}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight font-sans mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3 Review Laurel Badges */}
              <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                {/* Google Badge */}
                <div className="flex items-center space-x-2 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-black text-slate-900 font-sans">Google</span>
                    <div className="flex text-blue-600 text-xs">★★★★★</div>
                    <span className="text-[9.5px] font-extrabold text-slate-600 font-sans uppercase">900+ REVIEWS</span>
                  </div>
                </div>

                {/* Clutch Badge */}
                <div className="flex items-center space-x-2 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-black text-slate-900 font-sans">Clutch</span>
                    <div className="flex text-blue-600 text-xs">★★★★★</div>
                    <span className="text-[9.5px] font-extrabold text-slate-600 font-sans uppercase">320+ REVIEWS</span>
                  </div>
                </div>

                {/* GoodFirms Badge */}
                <div className="flex items-center space-x-2 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-black text-slate-900 font-sans">GoodFirms</span>
                    <div className="flex text-blue-600 text-xs">★★★★★</div>
                    <span className="text-[9.5px] font-extrabold text-slate-600 font-sans uppercase">200+ REVIEWS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive FAQ Accordion List */}
            <div className="lg:col-span-7 space-y-3 font-sans">
              {faqList.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-slate-200 pb-3 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex items-start justify-between space-x-4 py-2 group focus:outline-none"
                    >
                      <h3
                        className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                          isOpen ? 'text-[#005D95]' : 'text-slate-900 group-hover:text-[#005D95]'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </button>

                    {/* Answer Expandable Area */}
                    {isOpen && (
                      <div className="pt-2 pb-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed font-sans transition-all">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SapphireFaqSection;
