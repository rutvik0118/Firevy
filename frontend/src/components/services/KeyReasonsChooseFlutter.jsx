import React from 'react';
import Container from '../common/Container';

export const KeyReasonsChooseFlutter = () => {
  const reasons = [
    {
      id: 1,
      title: 'Cross-Platform Development',
      desc: "With Flutter, developers can use a single codebase to build applications for both iOS and Android. For companies trying to create a cohesive presence, the user experience's uniformity across several platforms is a big plus."
    },
    {
      id: 2,
      title: 'Fast Development with Hot Reload',
      desc: "Its ability to hot reload code in real-time without requiring the user to restart the application is one of Flutter's best advantages. Hot reload speeds up and improves the efficiency of the development process."
    },
    {
      id: 3,
      title: 'Rich and Customizable UI',
      desc: 'Easily customizable to meet any design need, Flutter has a large library of pre-designed widgets. For user retention and engagement, it is essential to have a UI that is both aesthetically pleasing and consistent.'
    },
    {
      id: 4,
      title: 'Exceptional Work',
      desc: "Flutter excels in performance, which is a crucial component of an app's success. Fast loading times and fluid animations are guaranteed by the powerful rendering engine upon which it is based."
    },
    {
      id: 5,
      title: 'Strong Community and Support',
      desc: 'Developer support for Flutter is rising quickly, and it has the backing of Google. A plethora of tools, plugins, and libraries are available thanks to this robust support network, which facilitates problem-solving throughout development.'
    },
    {
      id: 6,
      title: 'Seamless Integration with Firebase',
      desc: "Flutter integrates well with Firebase, Google's all-inclusive platform for online and mobile development, which is another benefit of adopting it. This integration makes creating, managing, and growing apps more effective."
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
            Key Reasons to Choose Flutter for App Development Services
          </h2>
          <p
            className="text-white/90 font-normal max-w-4xl mx-auto"
            style={{ fontSize: '13.5px', lineHeight: '1.65' }}
          >
            With its full solution for creating natively built apps for desktop, web, and mobile devices from a single codebase, Google's Flutter UI toolkit has become a game-changer. Here are the key reasons to choose Flutter:
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

export default KeyReasonsChooseFlutter;
