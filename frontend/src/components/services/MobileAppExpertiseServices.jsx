import React from 'react';
import Container from '../common/Container';

export const MobileAppExpertiseServices = () => {
  const services = [
    {
      id: 1,
      title: 'Mobile App UI/UX Design',
      desc: 'By considering market trends and creating best practices that provide an enhanced app user experience, we can help you create a unique, sophisticated, and user-friendly mobile app user interface.'
    },
    {
      id: 2,
      title: 'MVP Development',
      desc: 'By creating an MVP with the necessary functionality, we increase your trust in the app idea. This enables you to swiftly release a test app onto the market and attract early users before moving on to complete app development.'
    },
    {
      id: 3,
      title: 'Custom App Development',
      desc: "Whether you're developing a mobile app for a business or a community, we can help you realize your unique idea by incorporating cutting-edge features that will make it stand out from the crowd."
    },
    {
      id: 4,
      title: 'Startup App Development',
      desc: 'Our world-class app development solutions will help your startup take off by helping startups get the best app solution possible with the use of leading app development frameworks.'
    },
    {
      id: 5,
      title: 'Enterprise App Development',
      desc: 'Enhance your business operations through mobility by integrating third-party integrations and industry-leading technologies into your mobile app solutions to increase revenue and business operations.'
    },
    {
      id: 6,
      title: 'Embedded IoT App Development',
      desc: 'To control and fully exploit your IoT-enabled environment, get a highly customized embedded software solution built with cloud and AI/ML technology.'
    }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#005F96] text-white font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle Matching Screenshot 1:1 */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3 px-4">
          <h2
            className="font-[800] text-white tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            The Expertise of Our Mobile App Development Services
          </h2>
          <p
            className="text-white/90 font-normal max-w-3xl mx-auto"
            style={{ fontSize: '13.5px', lineHeight: '1.65' }}
          >
            Our cross-platform development process combines transparency, features, and sensitive interfaces by leveraging the best cross-platform development technologies such as Ionic, Xamarin, and others.
          </p>
        </div>

        {/* 6 White Rounded Rectangular Cards (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1320px] mx-auto">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[14px] p-6 sm:p-7 text-left shadow-md flex flex-col justify-start hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-white/90 group"
            >
              {/* Card Title */}
              <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2.5 leading-snug group-hover:text-[#005F96] transition-colors">
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

export default MobileAppExpertiseServices;
