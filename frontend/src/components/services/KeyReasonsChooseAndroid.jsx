import React from 'react';
import Container from '../common/Container';

export const KeyReasonsChooseAndroid = () => {
  const reasons = [
    {
      id: 1,
      title: 'Wider Audience Reach',
      desc: 'Android has unmatched reach and user diversity, powering the global mobile market. Android apps let businesses reach emerging markets and premium users. App downloads, user engagement, and business growth increase with this wide reach.'
    },
    {
      id: 2,
      title: 'Open-Source Platform',
      desc: 'Open-source Android lets developers use its entire ecosystem. The ability to customize apps and integrate advanced features without licensing fees encourages innovation and cost-effective development. Businesses can make customized solutions.'
    },
    {
      id: 3,
      title: 'Easy Customization',
      desc: "Android's flexibility ensures your app meets your business needs, whether it's simple or complex, and has specific features. Rapidly adapting to market changes and user preferences helps businesses stay competitive."
    },
    {
      id: 4,
      title: 'Multiple Distribution Channels',
      desc: 'Unlike other platforms, Android apps can be hosted on Google Play, Amazon Appstore, and even your website. Flexibility improves visibility and user acquisition strategies, maximizing app exposure and revenue.'
    },
    {
      id: 5,
      title: 'Seamless Integration with Google Services',
      desc: 'Integrating Google Maps, Firebase, and Analytics into Android apps improves functionality and performance. Seamless integration lets businesses use powerful tools for app monitoring and data-driven decision-making to enhance user experiences.'
    },
    {
      id: 6,
      title: 'Cost-Effective Development',
      desc: 'Free SDKs, libraries, and development tools make Android development affordable, and the developer community speeds up development and reduces costs. Businesses with different budgets can still use Android to develop high-quality apps.'
    }
  ];

  return (
    <section className="py-9 sm:py-11 lg:py-13 bg-[#005F96] text-white font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle Matching Screenshot 1:1 */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3 px-4">
          <h2
            className="font-[800] text-white tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            Key Reasons to Choose Android for Mobile App Development
          </h2>
          <p
            className="text-white/90 font-normal max-w-4xl mx-auto"
            style={{ fontSize: '13.5px', lineHeight: '1.65' }}
          >
            Whether for startups or established businesses, Android apps can reach diverse audiences and integrate with Google services at a low cost. Companies can build engaging, high-performance apps that meet user needs and goals using the latest technologies and tools. Some of the benefits of choosing Android are:
          </p>
        </div>

        {/* 6 White Rounded Rectangular Reason Cards (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1320px] mx-auto">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[14px] p-6 sm:p-7 text-left shadow-md flex flex-col justify-start hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-white/90 group"
            >
              {/* Card Title */}
              <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-3 leading-snug group-hover:text-[#005F96] transition-colors">
                {item.title}
              </h3>

              {/* Card Description */}
              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '13px', lineHeight: '1.65' }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyReasonsChooseAndroid;
