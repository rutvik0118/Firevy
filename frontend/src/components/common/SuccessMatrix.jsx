import React from 'react';
import Container from './Container';

// Exact Outline Vector Icons matching Sapphire Solutions reference screenshot 1:1
const MegaphoneIcon = () => (
  <svg className="w-9 h-9 text-[#16A34A]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 12 18 L 26 12 V 36 L 12 30 H 6 V 18 H 12 Z" />
    <path d="M 12 30 L 16 42 H 22 L 18 30" />
    <path d="M 32 18 C 34 20 34 28 32 30 M 37 14 C 41 18 41 30 37 34" />
  </svg>
);

const HeadphonesIcon = () => (
  <svg className="w-9 h-9 text-[#EA580C]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 8 26 V 20 C 8 11.2 15.2 4 24 4 C 32.8 4 40 11.2 40 20 V 26" />
    <rect x="6" y="24" width="8" height="14" rx="3" />
    <rect x="34" y="24" width="8" height="14" rx="3" />
  </svg>
);

const NonDisclosureIcon = () => (
  <svg className="w-9 h-9 text-[#0284C7]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 16 24 L 24 16 L 32 24 L 24 32 Z" />
    <path d="M 24 16 L 32 8 L 40 16 L 32 24" opacity="0.6" />
    <path d="M 8 24 L 16 16 L 24 24 L 16 32 Z" opacity="0.6" />
  </svg>
);

const MoneyValueIcon = () => (
  <svg className="w-9 h-9 text-[#CA8A04]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 18 10 H 30 L 32 16 H 16 L 18 10 Z" />
    <path d="M 12 18 C 12 14, 36 14, 36 18 C 36 28, 38 38, 32 42 C 24 44, 16 42, 16 42 C 10 38, 12 28, 12 18 Z" />
    <path d="M 24 24 V 34 M 21 27 C 21 24 27 24 27 27 C 27 31 21 31 21 34" strokeWidth="2" />
  </svg>
);

const CodingIcon = () => (
  <svg className="w-9 h-9 text-[#9333EA]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="36" height="24" rx="4" />
    <path d="M 16 17 L 11 20 L 16 23 M 32 17 L 37 20 L 32 23 M 26 16 L 22 24" />
    <path d="M 16 38 H 32" />
  </svg>
);

const PaymentPlansIcon = () => (
  <svg className="w-9 h-9 text-[#DB2777]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="10" width="32" height="28" rx="4" />
    <path d="M 8 18 H 40 M 16 6 V 10 M 32 6 V 10" />
    <circle cx="30" cy="30" r="5" strokeWidth="2" />
    <path d="M 30 28 V 32 M 29 30 H 31" strokeWidth="1.5" />
  </svg>
);

const TrackingIcon = () => (
  <svg className="w-9 h-9 text-[#2563EB]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="36" r="4" />
    <circle cx="24" cy="24" r="4" />
    <circle cx="36" cy="12" r="4" />
    <line x1="15" y1="33" x2="21" y2="27" />
    <line x1="27" y1="21" x2="33" y2="15" />
  </svg>
);

const AmcSupportIcon = () => (
  <svg className="w-9 h-9 text-[#A855F7]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 14 34 L 32 16 M 16 14 L 34 32" />
    <circle cx="12" cy="36" r="3.5" />
    <circle cx="36" cy="12" r="3.5" />
  </svg>
);

const QaTestingIcon = () => (
  <svg className="w-9 h-9 text-[#84CC16]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="4" />
    <circle cx="30" cy="18" r="4" />
    <path d="M 22 18 H 26" />
    <path d="M 12 36 C 12 28, 36 28, 36 36" />
  </svg>
);

const DeliveryDelayIcon = () => (
  <svg className="w-9 h-9 text-[#EA580C]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 12 8 H 32 V 40 H 12 Z" />
    <path d="M 18 16 H 26 M 18 22 H 26" />
    <path d="M 32 32 L 40 40 M 40 32 L 32 40" stroke="#EA580C" strokeWidth="2.5" />
  </svg>
);

const RevenueAnalysisIcon = () => (
  <svg className="w-9 h-9 text-[#0D9488]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="22" cy="22" r="11" />
    <line x1="30" y1="30" x2="40" y2="40" strokeWidth="3" />
    <line x1="17" y1="26" x2="17" y2="20" strokeWidth="3" />
    <line x1="22" y1="26" x2="22" y2="15" strokeWidth="3" />
    <line x1="27" y1="26" x2="27" y2="18" strokeWidth="3" />
  </svg>
);

const MindMapsIcon = () => (
  <svg className="w-9 h-9 text-[#0284C7]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 24 8 C 16 8 12 14 12 21 C 12 30 24 40 24 40 C 24 40 36 30 36 21 C 36 14 32 8 24 8 Z" />
    <path d="M 19 21 L 23 25 L 29 17" strokeWidth="2.5" />
  </svg>
);

const matrixItems = [
  {
    title: 'SEO and Digital Marketing',
    icon: MegaphoneIcon
  },
  {
    title: '4 months + Free Post Launch Support',
    icon: HeadphonesIcon
  },
  {
    title: 'Non-Disclosure',
    icon: NonDisclosureIcon
  },
  {
    title: '100% value for the money',
    icon: MoneyValueIcon
  },
  {
    title: 'Professional coding and version controls',
    icon: CodingIcon
  },
  {
    title: 'Flexible payment plans',
    icon: PaymentPlansIcon
  },
  {
    title: 'Real-time project tracking tools',
    icon: TrackingIcon
  },
  {
    title: 'Custom Tailored support | AMC Plans',
    icon: AmcSupportIcon
  },
  {
    title: 'Quality Asssurance and Unit Test Case',
    icon: QaTestingIcon
  },
  {
    title: 'Penalty enforce-ment in case of Delivery Delay',
    icon: DeliveryDelayIcon
  },
  {
    title: 'In-dept analysis of revenue business Models',
    icon: RevenueAnalysisIcon
  },
  {
    title: 'Mind Maps and video demos',
    icon: MindMapsIcon
  }
];

export const SuccessMatrix = () => {
  return (
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 bg-[#ECF5FA] border-b border-slate-200 text-slate-900 font-sans text-left">
      <Container>
        {/* Centered Heading & Full Width Subtitle */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
            Success Matrix
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-5xl mx-auto font-sans">
            We offer comprehensive services to develop digital solutions & manage complete product lifecycle. We've robust work history with diverse business services.
          </p>
        </div>

        {/* 12 White Cards Grid (6 Columns x 2 Rows on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5 max-w-6xl mx-auto">
          {matrixItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col items-center justify-center text-center h-44 sm:h-[190px] group"
              >
                {/* SVG Outline Icon */}
                <div className="mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <IconComp />
                </div>

                {/* Card Title */}
                <h3 className="text-xs sm:text-[13.5px] font-extrabold text-[#111827] leading-[1.35] font-sans text-center px-1 group-hover:text-[#005F96] transition-colors">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SuccessMatrix;
