import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const educationCards = [
  {
    id: 1,
    title: 'Ai Powered Language Learning App Development',
    image: '/images/edu_case_study_ai_language.jpg'
  },
  {
    id: 2,
    title: 'Learning Management System',
    image: '/images/edu_case_study_lms.jpg'
  },
  {
    id: 3,
    title: 'Tutor Finder App Development',
    image: '/images/edu_case_study_tutor_finder.jpg'
  }
];

const digitalMarketingCards = [
  {
    id: 1,
    title: 'News Application Development',
    image: '/images/success_stories/epaper.svg',
    badge: 'Case Study'
  },
  {
    id: 2,
    title: 'Message App Development',
    image: '/images/success_stories/message_app.svg'
  },
  {
    id: 3,
    title: 'Advertising App Development',
    image: '/images/success_stories/advertising_app_development.svg'
  }
];

const defaultCards = [
  {
    id: 1,
    title: 'Employee Health Tracker App Development',
    renderGraphic: () => (
      <div className="w-full h-full relative overflow-hidden bg-white flex font-sans select-none border border-slate-200/60">
        {/* Top Right "Case Study" Badge */}
        <div className="absolute top-2 right-2 z-20 bg-[#0F2942] text-cyan-300 font-bold text-[9.5px] px-2.5 py-1 rounded shadow">
          Case Study
        </div>

        {/* Left Side: Outcome & Metrics */}
        <div className="w-1/2 p-3 bg-slate-50 flex flex-col justify-between border-r border-slate-200 text-left">
          <div>
            <span className="text-rose-600 font-black text-xs tracking-tight">Outcome</span>
            <div className="mt-2.5 grid grid-cols-3 gap-1 text-[7.5px] font-bold text-center text-slate-700">
              <div className="bg-white p-1 rounded shadow-xs border border-slate-100">
                <div className="text-slate-900 font-extrabold text-[9.5px]">60+</div>
                <div>Audits</div>
              </div>
              <div className="bg-white p-1 rounded shadow-xs border border-slate-100">
                <div className="text-slate-900 font-extrabold text-[9.5px]">170</div>
                <div>Acre</div>
              </div>
              <div className="bg-white p-1 rounded shadow-xs border border-slate-100">
                <div className="text-slate-900 font-extrabold text-[9.5px]">100%</div>
                <div>Sync</div>
              </div>
            </div>
          </div>
          {/* Car & Technician Illustration */}
          <div className="pt-1">
            <div className="bg-blue-700 text-white rounded-md p-1 text-[7.5px] font-bold shadow-xs flex items-center space-x-1 justify-center">
              <span>🚗 MG Motor OPD</span>
            </div>
          </div>
        </div>

        {/* Right Side: MG Dark Red Card */}
        <div className="w-1/2 bg-[#7A1A1A] p-3 text-white flex flex-col justify-between text-left">
          <div className="flex items-center justify-between border-b border-rose-400/30 pb-1.5">
            <div className="w-6 h-6 rounded-full bg-white text-[#7A1A1A] font-black text-[9.5px] flex items-center justify-center border border-white">
              MG
            </div>
            <span className="text-[7.5px] text-rose-200 font-bold tracking-wider">SAIC MOTOR</span>
          </div>
          <p className="text-[8.5px] text-rose-100 font-medium leading-tight">
            Digitization of Occupational Health processes for subsidiary of SAIC Motor.
          </p>
          <div className="text-[7.5px] bg-rose-900/60 p-1 rounded text-rose-200 font-semibold text-center">
            Health Check & OPD Logs
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Navigation App Development',
    renderGraphic: () => (
      <div className="w-full h-full relative overflow-hidden bg-[#454E35] p-3 flex items-center justify-between font-sans select-none">
        {/* Left Side Title Badge */}
        <div className="z-10 text-left space-y-1 max-w-[125px]">
          <div className="w-7 h-7 rounded-lg bg-[#F59E0B] flex items-center justify-center text-slate-950 font-black text-xs shadow-md">
            📍
          </div>
          <div className="text-white">
            <h4 className="text-xs font-black text-amber-400 tracking-tight leading-tight">MyliveGps</h4>
            <p className="text-[9px] text-slate-200 font-semibold leading-tight">Navigation Application</p>
          </div>
          <span className="inline-block text-[8px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">
            ● GPS Active
          </span>
        </div>

        {/* Right Side Angled Phones */}
        <div className="relative flex items-center space-x-2 z-10 pr-2">
          {/* Phone 1 */}
          <div className="w-20 h-36 bg-slate-900 rounded-xl p-1 border-2 border-slate-700 shadow-2xl flex flex-col justify-between text-white text-[7px]">
            <div className="w-4 h-0.5 bg-slate-600 rounded-full mx-auto" />
            <div className="bg-amber-500 text-slate-950 p-1 rounded font-black text-center text-[7px]">
              MyliveGps
            </div>
            <div className="bg-slate-800 p-1 rounded space-y-0.5 text-slate-300">
              <div>Route: 12 km</div>
              <div className="text-emerald-400">ETA: 18 min</div>
            </div>
          </div>
          {/* Phone 2 */}
          <div className="w-20 h-36 bg-slate-900 rounded-xl p-1 border-2 border-slate-700 shadow-2xl flex flex-col justify-between text-white text-[7px] -ml-4 -mb-2">
            <div className="w-4 h-0.5 bg-slate-600 rounded-full mx-auto" />
            <div className="bg-slate-800 rounded p-1 h-14 border border-slate-700 relative flex items-center justify-center">
              <svg viewBox="0 0 60 40" className="w-full h-full">
                <path d="M5 30 Q 25 5, 55 20" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                <circle cx="55" cy="20" r="3" fill="#10B981" />
              </svg>
            </div>
            <div className="bg-emerald-600 text-white p-1 rounded font-bold text-center text-[6.5px]">
              Turn Right 150m
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Claim Management App',
    renderGraphic: () => (
      <div className="w-full h-full relative overflow-hidden bg-[#D4E5FA] p-3 flex items-center justify-between font-sans select-none">
        {/* Left Side Claim Management Title Graphics */}
        <div className="z-10 text-left space-y-1.5 max-w-[130px]">
          <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-blue-200 shadow-sm space-y-1">
            <div className="text-sm font-black text-blue-700 leading-tight">Claim</div>
            <div className="text-[10px] font-bold text-slate-700 leading-tight">Management App</div>
          </div>
          <span className="inline-block text-[8px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold shadow">
            Auto Insurance
          </span>
        </div>

        {/* Right Side Smartphone Mockup */}
        <div className="w-24 h-40 bg-slate-900 rounded-2xl p-1.5 border-2 border-slate-800 shadow-2xl flex flex-col justify-between text-white text-[7.5px] z-10">
          <div className="w-5 h-0.5 bg-slate-600 rounded-full mx-auto mb-1" />
          <div className="bg-blue-600 p-1.5 rounded-lg text-center font-bold flex items-center justify-center space-x-1">
            <span>🛡️ CareClaim</span>
          </div>
          <div className="bg-slate-800 p-1.5 rounded-lg space-y-1 border border-slate-700">
            <div className="text-slate-300 font-semibold">Select Service</div>
            <div className="grid grid-cols-2 gap-1 text-[6.5px] text-center font-bold">
              <div className="bg-blue-500/30 text-blue-200 p-0.5 rounded">Health</div>
              <div className="bg-emerald-500/30 text-emerald-200 p-0.5 rounded">Auto</div>
            </div>
          </div>
          <div className="bg-emerald-500 text-slate-950 p-1 rounded font-extrabold text-center text-[7px]">
            Claim Approved $1,450
          </div>
        </div>
      </div>
    )
  }
];

export const SuccessStoriesSection = ({
  category = 'ecommerce',
  cards: customCards,
  title,
  subtitle = "Know Firevy.co's journey from concept to success. Explore how we’ve brought ideas to life and achieved remarkable results for our clients."
}) => {
  const isEducation = category === 'education';
  const isAudio = category === 'audio' || category === 'spotify' || category === 'music';
  const isTaxi = category === 'taxi' || category === 'uber' || category === 'cabbooking';
  const isEcommerce = category === 'ecommerce' || category === 'general';

  const cards = customCards || (
    category === 'education' ? educationCards :
    category === 'digital-marketing' ? digitalMarketingCards :
    defaultCards
  );

  return (
    <section className={`py-12 sm:py-16 text-slate-900 font-sans text-left border-b border-slate-200 ${isEducation ? 'bg-[#DCF2F7]' : isTaxi ? 'bg-[#EBF5FB]' : 'bg-[#EBF5FB]'}`}>
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-[900] text-slate-950 tracking-tight font-sans">
            {title || "Success Stories"}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed font-sans">
            {subtitle}
          </p>
        </div>

        {/* Portfolio Cards */}
        {customCards ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1320px] mx-auto mb-6 sm:mb-8">
            {cards.map((item) => (
              <div key={item.id} className="flex flex-col items-center group cursor-pointer w-full">
                <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-sm border border-slate-200/80 group-hover:shadow-md transition-shadow duration-200 relative bg-white">
                  {item.badge && (
                    <div className="absolute top-3 right-3 z-20 bg-[#BAE6FD] text-[#0369A1] font-bold text-[11px] px-2.5 py-1 rounded-md shadow-xs">
                      {item.badge}
                    </div>
                  )}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 select-none"
                      loading="lazy"
                    />
                  ) : (
                    typeof item.renderGraphic === 'function' ? item.renderGraphic() : item.renderGraphic
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left w-full">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        ) : isTaxi ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-8">
            {/* Card 1: Cab Booking Application Development */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border border-amber-200/80 bg-[#F4E3C9] p-4 flex flex-col justify-between">
                <div className="flex justify-end items-center z-10">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#7DD3FC] text-slate-900 shadow-sm">
                    Case Study
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-between my-auto px-1">
                  <div className="space-y-1 text-amber-900/40">
                    <span className="text-xl font-black block leading-none opacity-40">Taxi Booking App</span>
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-[8px] flex items-center justify-center">NG</div>
                      <span className="text-xs font-bold text-slate-900">NGcab</span>
                    </div>
                  </div>

                  <div className="relative flex items-end">
                    <div className="w-22 h-36 bg-slate-900 rounded-xl p-1 shadow-lg border border-slate-700">
                      <div className="bg-white w-full h-full rounded-lg overflow-hidden p-1 flex flex-col justify-between text-[6px]">
                        <div className="bg-emerald-500 text-white p-0.5 text-center font-bold rounded">Map Route</div>
                        <div className="w-full h-20 bg-emerald-50 rounded flex items-center justify-center text-slate-400">📍 Route</div>
                        <div className="bg-slate-900 text-white p-0.5 text-center rounded font-bold">Book Ride</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-2 w-20 h-10 bg-amber-400 rounded-xl border-2 border-slate-900 p-1 shadow-md flex flex-col justify-between z-20">
                      <span className="text-[6px] font-black text-slate-900 mx-auto bg-slate-900 text-amber-400 px-1 rounded">TAXI</span>
                      <div className="flex justify-between px-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Cab Booking Application Development
              </h3>
            </div>

            {/* Card 2: Bike Rental App Development */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border border-purple-300/80 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] p-4 flex flex-col justify-between text-white">
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider block mb-1">
                    Bike Rental Application
                  </span>
                  <div className="flex justify-center space-x-2 my-auto">
                    <div className="w-22 h-36 bg-slate-900 rounded-xl p-1 shadow-xl border border-purple-400/40">
                      <div className="bg-white rounded-lg p-1 text-slate-900 text-[6px] h-full flex flex-col justify-between">
                        <span className="font-bold text-purple-700 block">Nearby Bikes</span>
                        <div className="bg-purple-50 p-1 rounded space-y-0.5">
                          <span className="font-bold block">Sports Bike</span>
                          <span className="text-purple-600 font-extrabold">$6/hr</span>
                        </div>
                        <div className="bg-purple-50 p-1 rounded space-y-0.5">
                          <span className="font-bold block">Mountain Bike</span>
                          <span className="text-purple-600 font-extrabold">$4/hr</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-22 h-36 bg-slate-900 rounded-xl p-1 shadow-xl border border-purple-400/40">
                      <div className="bg-white rounded-lg p-1 text-slate-900 text-[6px] h-full flex flex-col justify-between">
                        <span className="font-bold text-purple-700 block">Total Earnings</span>
                        <span className="text-base font-black text-purple-900 block">$652.20</span>
                        <div className="space-y-1">
                          <div className="bg-slate-100 p-0.5 rounded flex justify-between"><span>Ride #102</span><span>$65.00</span></div>
                          <div className="bg-slate-100 p-0.5 rounded flex justify-between"><span>Ride #103</span><span>$45.00</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Bike Rental App Development
              </h3>
            </div>

            {/* Card 3: Car Rental Application Development */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border border-teal-200/80 bg-gradient-to-br from-[#CCFBF1] via-[#99F6E4] to-[#5EEAD4] p-4 flex flex-col justify-between">
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <span className="text-xs sm:text-sm font-black text-teal-900 uppercase tracking-wider text-right block mb-1">
                    Car Rental Application
                  </span>
                  <div className="flex justify-center items-center space-x-2 my-auto">
                    <div className="w-20 h-36 bg-white rounded-xl p-1.5 shadow-xl border border-teal-200 text-[6px] flex flex-col justify-between">
                      <span className="font-bold text-teal-800">Select Car</span>
                      <div className="bg-teal-50 p-1 rounded text-center">
                        <span className="font-bold block">SUV</span>
                      </div>
                      <div className="bg-teal-50 p-1 rounded text-center">
                        <span className="font-bold block">Sedan</span>
                      </div>
                    </div>

                    <div className="w-24 h-36 bg-white rounded-xl p-1.5 shadow-xl border border-teal-200 text-[6px] space-y-1">
                      <span className="font-bold text-teal-600 block text-center">TRANSPO</span>
                      <div className="bg-slate-50 p-1 rounded border border-slate-100 space-y-0.5">
                        <span className="font-bold block text-slate-800">Chevrolet Spark</span>
                        <span className="text-teal-600 font-extrabold">$55/Day</span>
                      </div>
                      <div className="bg-teal-600 text-white text-[5px] font-bold p-1 rounded text-center">
                        Check Availability
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Car Rental Application Development
              </h3>
            </div>
          </div>
        ) : isEducation ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-6 sm:mb-8">
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 relative border border-slate-200/80 bg-white">
                <img
                  src="/images/edu_case_study_ai_language.jpg"
                  alt="Ai Powered Language Learning App Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Ai Powered Language Learning App Development
              </h3>
            </div>

            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 relative border border-slate-200/80 bg-white">
                <img
                  src="/images/edu_case_study_lms.jpg"
                  alt="Learning Management System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Learning Management System
              </h3>
            </div>
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 relative border border-slate-200/80 bg-white">
                <img
                  src="/images/edu_case_study_tutor_finder.jpg"
                  alt="Tutor Finder App Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Tutor Finder App Development
              </h3>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1320px] mx-auto mb-6 sm:mb-8">
            {defaultCards.map((item) => (
              <div key={item.id} className="flex flex-col items-center group cursor-pointer w-full">
                <div className="w-full h-[220px] sm:h-[240px] rounded-[16px] overflow-hidden shadow-sm border border-slate-200/80 group-hover:shadow-md transition-shadow duration-200 relative bg-white">
                  {typeof item.renderGraphic === 'function' ? item.renderGraphic() : item.renderGraphic}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left w-full">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        )}

        {/* View All Portfolio Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block px-7 py-2.5 rounded-lg bg-[#005D95] hover:bg-[#004A75] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-sans"
          >
            View All Portfolio
          </Link>
        </div>

        {/* 4 Pastel Stats Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-8 sm:mt-10">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#E2D9FF] border border-purple-200/80 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-28 sm:h-30 hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">23+</div>
            <div className="text-xs font-bold text-slate-700 mt-1 font-sans">Years Experience</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#A7F3D0] border border-emerald-200/80 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-28 sm:h-30 hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">320+</div>
            <div className="text-xs font-bold text-slate-700 mt-1 font-sans">5–Star Clutch Reviews</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFC5D7] border border-rose-200/80 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-28 sm:h-30 hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">2800+</div>
            <div className="text-xs font-bold text-slate-700 mt-1 font-sans">Satisfied Clients</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#005D95] text-white flex flex-col items-center justify-center text-center shadow-lg h-28 sm:h-30 space-y-2 font-sans">
            <div className="text-xs sm:text-sm font-extrabold text-white">Want to start Projects</div>
            <Link
              to="/contact"
              className="px-5 py-1.5 rounded-lg bg-white text-[#005D95] font-black text-[11px] hover:bg-slate-100 transition-colors shadow-md"
            >
              Get Estimation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SuccessStoriesSection;
