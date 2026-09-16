import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export const SuccessStoriesSection = ({ category = 'ecommerce', title, subtitle }) => {
  const isEducation = category === 'education';
  const isAudio = category === 'audio' || category === 'spotify' || category === 'music';
  const isTaxi = category === 'taxi' || category === 'uber' || category === 'cabbooking';
  const isEcommerce = category === 'ecommerce' || category === 'general';

  return (
    <section className={`py-12 sm:py-16 text-slate-900 font-sans text-left border-b border-slate-200 ${isEducation ? 'bg-[#DCF2F7]' : isTaxi ? 'bg-[#EBF5FB]' : 'bg-[#EBF5FB]'}`}>
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-[900] text-slate-950 tracking-tight font-sans">
            {title || "Success Stories"}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed font-sans">
            {subtitle || "Know Sapphire journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."}
          </p>
        </div>

        {/* 3 Portfolio Cards */}
        {isTaxi ? (
          /* Exact 1:1 Match to User's Screenshot 2: Taxi & Mobility Portfolio Showcase Cards */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-8">
            
            {/* Card 1: Cab Booking Application Development */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border border-amber-200/80 bg-[#F4E3C9] p-4 flex flex-col justify-between">
                <div className="flex justify-end items-center z-10">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#7DD3FC] text-slate-900 shadow-sm">
                    Case Study
                  </span>
                </div>

                {/* Taxi Booking Graphic */}
                <div className="relative z-10 flex items-center justify-between my-auto px-1">
                  <div className="space-y-1 text-amber-900/40">
                    <span className="text-xl font-black block leading-none opacity-40">Taxi Booking App</span>
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-[8px] flex items-center justify-center">NG</div>
                      <span className="text-xs font-bold text-slate-900">NGcab</span>
                    </div>
                  </div>

                  {/* Smartphone Mockup + Yellow Cab */}
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
                  
                  {/* Dual Phone UI Mockup */}
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
                  
                  {/* Car Rental Web/App UI Mockup */}
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
        ) : isEcommerce ? (
          /* Exact 1:1 Match to User's Screenshot: E-Commerce / Retail Portfolio Showcase Cards */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-8">
            
            {/* Card 1: Case Study Fyndee (Product Finder Application) */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border border-amber-200/80 bg-gradient-to-br from-[#FDE68A] via-[#FCD34D] to-[#F59E0B] p-4 flex flex-col justify-between">
                <div className="flex justify-end items-center z-10">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#38BDF8] text-white shadow-sm">
                    Case Study
                  </span>
                </div>

                {/* Product Finder Graphic */}
                <div className="relative z-10 flex items-center justify-between my-auto px-2">
                  <div className="space-y-1 text-slate-900 max-w-[110px]">
                    <span className="text-sm sm:text-base font-black leading-tight block">
                      Product Finder Application
                    </span>
                  </div>
                  {/* Smartphone Graphic */}
                  <div className="w-24 h-40 bg-white rounded-xl shadow-xl p-1.5 flex flex-col justify-between border border-amber-300">
                    <div className="bg-amber-400 text-slate-950 font-black text-[9px] p-1 rounded text-center">
                      maloom
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-[6px] my-1">
                      <div className="bg-slate-100 p-1 rounded text-center">🛒</div>
                      <div className="bg-slate-100 p-1 rounded text-center">📦</div>
                      <div className="bg-amber-100 p-1 rounded text-center font-bold">🛍️</div>
                      <div className="bg-slate-100 p-1 rounded text-center">💳</div>
                    </div>
                    <div className="w-full h-2 bg-amber-400 rounded-full" />
                  </div>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Case Study Fyndee
              </h3>
            </div>

            {/* Card 2: Jewellery Website Development */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border border-slate-300/80 bg-gradient-to-br from-[#E5E7EB] via-[#D1D5DB] to-[#9CA3AF] p-4 flex flex-col justify-between">
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <span className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-1">
                    JEWELRY WEBSITE
                  </span>
                  
                  {/* Laptop / Web Mockup View */}
                  <div className="w-full bg-white rounded-lg p-2 shadow-xl border border-slate-300 text-slate-900 text-[8px] space-y-1 my-auto">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-1">
                      <span className="font-extrabold text-slate-800">The Fine Studio</span>
                      <span className="text-[6px] bg-amber-100 px-1 py-0.5 rounded text-amber-800 font-bold">Jewelry Collection</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 my-1">
                      <div className="bg-slate-100 h-14 rounded p-1 text-[6px]">
                        <span className="font-bold block">Gold Ring</span>
                        <span className="text-amber-700 font-bold">$299</span>
                      </div>
                      <div className="bg-slate-100 h-14 rounded p-1 text-[6px]">
                        <span className="font-bold block">Diamond Necklace</span>
                        <span className="text-amber-700 font-bold">$599</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Jewellery Website Development
              </h3>
            </div>

            {/* Card 3: Clothing Website Development */}
            <div className="flex flex-col justify-between group cursor-pointer">
              <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border border-rose-200/80 bg-gradient-to-br from-[#FCE7F3] via-[#FBCFE8] to-[#F472B6] p-4 flex flex-col justify-between">
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider block mb-1 drop-shadow-sm">
                    Clothing Website
                  </span>
                  
                  {/* Fashion Web Mockup View */}
                  <div className="w-full bg-white rounded-lg p-2.5 shadow-xl border border-rose-200 text-slate-900 text-[8px] space-y-1 my-auto">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                      <span className="font-bold text-rose-500">FIND YOUR STYLE AND YOUR SELF</span>
                    </div>
                    <div className="flex space-x-2 items-center pt-1">
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-1.5 bg-rose-200 rounded" />
                        <div className="w-3/4 h-1.5 bg-slate-200 rounded" />
                        <div className="w-12 h-3 bg-rose-500 rounded text-white text-[5px] font-bold flex items-center justify-center">
                          Buy Now
                        </div>
                      </div>
                      <div className="w-12 h-14 bg-rose-100 rounded flex items-center justify-center text-xs">
                        👗
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#005D95] transition-colors leading-snug font-sans mt-3 text-left">
                Clothing Website Development
              </h3>
            </div>

          </div>
        ) : isEducation ? (
          /* Education App Development 3 Showcase Image Cards */
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
          /* Music & Audio Streaming Case Studies */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#1DB954] via-[#0F2E1B] to-[#0A0A0A] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-[#1DB954] text-slate-950 shadow-sm flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                    <span>Spotify Engine</span>
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#005F96] text-white shadow-sm">
                    Case Study
                  </span>
                </div>
                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#005F96] block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Spotify Music Streaming App</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Spotify Clone Music Streaming App
                </h3>
              </div>
            </div>
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

        {/* 4 Pastel Stats Cards Row (Lavender, Green, Pink, Dark Blue) 1:1 Sapphire Match */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-8 sm:mt-10">
          {/* Card 1: Lavender */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#E2D9FF] border border-purple-200/80 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-28 sm:h-30 hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">23+</div>
            <div className="text-xs font-bold text-slate-700 mt-1 font-sans">Years Experience</div>
          </div>

          {/* Card 2: Soft Mint Green */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#A7F3D0] border border-emerald-200/80 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-28 sm:h-30 hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">320+</div>
            <div className="text-xs font-bold text-slate-700 mt-1 font-sans">5–Star Clutch Reviews</div>
          </div>

          {/* Card 3: Soft Coral Pink */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFC5D7] border border-rose-200/80 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-28 sm:h-30 hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">2800+</div>
            <div className="text-xs font-bold text-slate-700 mt-1 font-sans">Satisfied Clients</div>
          </div>

          {/* Card 4: Dark Sapphire Blue CTA */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#005D95] text-white flex flex-col items-center justify-center text-center shadow-lg h-28 sm:h-30 space-y-2 font-sans">
            <div className="text-xs sm:text-sm font-extrabold text-white">Want to start Projects</div>
            <a
              href="#quote-form"
              className="px-5 py-1.5 rounded-lg bg-white text-[#005D95] font-black text-[11px] hover:bg-slate-100 transition-colors shadow-md"
            >
              Get Estimation
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SuccessStoriesSection;
