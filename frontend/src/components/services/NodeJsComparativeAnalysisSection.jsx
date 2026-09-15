import React from 'react';
import Container from '../common/Container';

const comparisonRows = [
  {
    criteria: 'Time to get right developers',
    sapphire: '1 day – 2 weeks',
    inHouse: '4 – 12 weeks',
    freelance: '1 – 12 weeks'
  },
  {
    criteria: 'Time to start a project',
    sapphire: '1 day – 2 weeks',
    inHouse: '2 – 10 weeks',
    freelance: '1 – 10 weeks'
  },
  {
    criteria: 'Recurring cost of training & benefits',
    sapphire: '–',
    inHouse: '$10,000 – $25,000',
    freelance: '–'
  },
  {
    criteria: 'Time to scale size of team',
    sapphire: '48 hours – 1 week',
    inHouse: '4 – 16 weeks',
    freelance: '1 – 12 weeks'
  },
  {
    criteria: 'Pricing (weekly average)',
    sapphire: '1.5X',
    inHouse: '2X',
    freelance: '1X'
  },
  {
    criteria: 'Project failure risk',
    sapphire: 'Extremely low, we have 98% success ratio',
    inHouse: 'Low',
    freelance: 'Very High'
  },
  {
    criteria: 'Developers backed by a delivery team',
    sapphire: 'Yes',
    inHouse: 'Some',
    freelance: 'No'
  },
  {
    criteria: 'Dedicated resources',
    sapphire: 'Yes',
    inHouse: '–',
    freelance: 'Some'
  },
  {
    criteria: 'Quality Guarantee',
    sapphire: 'Yes',
    inHouse: 'High',
    freelance: 'High'
  },
  {
    criteria: 'Assured work rigor',
    sapphire: 'Yes',
    inHouse: 'Some',
    freelance: 'No'
  },
  {
    criteria: 'Tools and professional environment',
    sapphire: 'Yes',
    inHouse: 'High',
    freelance: 'Uncertain'
  }
];

const NodeJsComparativeAnalysisSection = () => {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white font-sans text-center">
      <Container className="max-w-6xl">
        {/* Section Heading & Subtitle */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
            Comparative Analysis
          </h2>
          <p className="text-[13px] sm:text-[14.5px] text-[#556987] leading-relaxed max-w-3xl mx-auto font-normal">
            We provide tailored, robust, scalable and secure Android development solutions that delight users and deliver engagement.
          </p>
        </div>

        {/* Comparative Analysis Table */}
        <div className="overflow-x-auto rounded-[6px] border border-[#D5DDE5] shadow-xs mb-8">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#D5DDE5]">
                {/* Empty Top-Left Header */}
                <th className="w-[30%] bg-white p-3.5 sm:p-4 border-r border-[#D5DDE5]"></th>

                {/* Sapphire Software Solutions Header */}
                <th className="w-[26%] bg-[#005F96] text-white p-3.5 sm:p-4 text-center font-[700] text-[13.5px] sm:text-[15px] border-r border-[#D5DDE5] leading-snug">
                  Sapphire Software<br />Solutions
                </th>

                {/* In-House Header */}
                <th className="w-[22%] bg-[#8F9BAA] text-white p-3.5 sm:p-4 text-center font-[700] text-[13px] sm:text-[14px] border-r border-[#D5DDE5]">
                  In-House
                </th>

                {/* Freelance Header */}
                <th className="w-[22%] bg-[#BDC7D1] text-[#1E293B] p-3.5 sm:p-4 text-center font-[700] text-[13px] sm:text-[14px]">
                  Freelance
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-[#E2E8F0] ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFCFF]'
                  }`}
                >
                  {/* Criteria Column */}
                  <td className="p-3 sm:p-3.5 font-[700] text-[12.5px] sm:text-[13.5px] text-[#0B0F19] border-r border-[#E2E8F0]">
                    {row.criteria}
                  </td>

                  {/* Sapphire Software Solutions Column (Soft Pale Blue Tint) */}
                  <td className="p-3 sm:p-3.5 text-center font-[500] text-[12.5px] sm:text-[13.5px] text-[#0B0F19] bg-[#F0F8FD] border-r border-[#E2E8F0]">
                    {row.sapphire}
                  </td>

                  {/* In-House Column */}
                  <td className="p-3 sm:p-3.5 text-center font-normal text-[12.5px] sm:text-[13.5px] text-[#475569] border-r border-[#E2E8F0]">
                    {row.inHouse}
                  </td>

                  {/* Freelance Column */}
                  <td className="p-3 sm:p-3.5 text-center font-normal text-[12.5px] sm:text-[13.5px] text-[#475569]">
                    {row.freelance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center px-8 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004D7A] text-white font-[700] text-[14px] transition-all shadow-xs cursor-pointer"
          >
            Get Your Free Consultation
          </a>
        </div>
      </Container>
    </section>
  );
};

export default NodeJsComparativeAnalysisSection;
