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
    sapphire: '1.5x',
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

export const MobileAppComparativeAnalysis = () => {
  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white font-sans text-center">
      <Container className="max-w-6xl">
        {/* Section Heading & Subtitle */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3"
            style={{ fontSize: '34px' }}
          >
            Comparative Analysis
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We provide tailored, robust, scalable and secure Android development solutions that delight users and deliver engagement.
          </p>
        </div>

        {/* Comparative Analysis Table */}
        <div className="overflow-x-auto rounded-[6px] border border-[#CBD5E1] shadow-sm mb-9">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-[#CBD5E1]">
                {/* Empty Top-Left Header */}
                <th className="w-[30%] bg-white p-4 border-r border-[#CBD5E1]"></th>

                {/* Sapphire Software Solutions Header */}
                <th className="w-[26%] bg-[#005F96] text-white p-4 text-center font-[800] text-[14px] sm:text-[15px] border-r border-[#CBD5E1] leading-snug">
                  Sapphire Software<br />Solutions
                </th>

                {/* In-House Header */}
                <th className="w-[22%] bg-[#8B939E] text-white p-4 text-center font-[800] text-[14px] sm:text-[15px] border-r border-[#CBD5E1]">
                  In-House
                </th>

                {/* Freelance Header */}
                <th className="w-[22%] bg-[#C4C8CD] text-[#0F172A] p-4 text-center font-[800] text-[14px] sm:text-[15px]">
                  Freelance
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-[#CBD5E1] transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                  }`}
                >
                  {/* Criteria Column */}
                  <td className="p-3.5 sm:p-4 font-[700] text-[13px] sm:text-[13.5px] text-[#0B0F19] border-r border-[#CBD5E1]">
                    {row.criteria}
                  </td>

                  {/* Sapphire Column (Highlighted with Pale Blue Tint) */}
                  <td className="p-3.5 sm:p-4 text-center font-[600] text-[13px] sm:text-[13.5px] text-[#0F172A] bg-[#F0F8FD] border-r border-[#CBD5E1]">
                    {row.sapphire}
                  </td>

                  {/* In-House Column */}
                  <td className="p-3.5 sm:p-4 text-center font-normal text-[13px] sm:text-[13.5px] text-[#475569] border-r border-[#CBD5E1]">
                    {row.inHouse}
                  </td>

                  {/* Freelance Column */}
                  <td className="p-3.5 sm:p-4 text-center font-normal text-[13px] sm:text-[13.5px] text-[#475569]">
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
            href="#contact"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] sm:text-[14.5px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            Get Your Free Consultation
          </a>
        </div>
      </Container>
    </section>
  );
};

export default MobileAppComparativeAnalysis;
