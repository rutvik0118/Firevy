import React from 'react';
import { ArrowRight, Activity, Shield, HeartHandshake, Pill } from 'lucide-react';
import Container from './Container';

// Custom 1:1 Vector Icon Badges matching Sapphire Education Hero Reference Screenshot 100%
const TeacherBoardIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="8" width="32" height="20" rx="2" fill="none" />
    <path d="M 16 15 H 32 M 16 21 H 24" />
    <circle cx="16" cy="36" r="3" />
    <path d="M 12 42 C 12 38 14 36 16 36 C 18 36 20 38 20 42" />
    <circle cx="32" cy="36" r="3" />
    <path d="M 28 42 C 28 38 30 36 32 36 C 34 36 36 38 36 42" />
  </svg>
);

const VideoClassIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="24" rx="3" fill="none" />
    <circle cx="20" cy="22" r="5" />
    <path d="M 12 30 C 12 26 16 25 20 25 C 24 25 28 26 28 30" />
    <path d="M 32 18 L 38 14 V 30 L 32 26 V 18 Z" fill="currentColor" />
  </svg>
);

const StudentLaptopIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="16" r="5" />
    <path d="M 16 26 C 16 22 20 21 24 21 C 28 21 32 22 32 26" />
    <rect x="10" y="28" width="28" height="14" rx="2" fill="none" />
    <line x1="6" y1="42" x2="42" y2="42" />
  </svg>
);

const TestScoreIcon = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center text-white">
    <span className="text-[9px] font-black tracking-tighter">TEST</span>
    <span className="text-[7px] font-extrabold text-cyan-300 mt-0.5">& CE</span>
  </div>
);

export const SapphireLightHeroBanner = ({
  title = "Education App Development Services in USA",
  subtitle = "As a best educational app development company, we deliver affordable education app development services. We are an experienced educational app development agency with a team of professional mobile app developers.",
  ctaText = "Discuss Your Project",
  ctaLink = "#quote-form",
  serviceCategory = "education"
}) => {
  const isEducation = serviceCategory === 'education';

  return (
    <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-[#EEF5FB] text-slate-900 relative overflow-hidden text-left font-sans border-b border-slate-200/60">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-6 space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 tracking-tight leading-[1.15] max-w-lg">
              {title}
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
              {subtitle}
            </p>

            <div className="pt-1">
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-extrabold text-sm sm:text-base transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Visual Graphic (Laptop + Mobile Mockup + 4 Floating Badges 1:1 Sapphire Reference Match) */}
          <div className="lg:col-span-6 flex justify-center relative py-4">
            <div className="relative w-full max-w-[560px]">
              
              {/* Laptop Web Dashboard Frame */}
              <div className="rounded-2xl border-4 border-slate-300 bg-white shadow-2xl p-1.5 relative overflow-hidden">
                {/* Top Laptop Screen Navigation Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 rounded-t-xl border-b border-slate-200 text-[8.5px] text-slate-600 font-sans">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="hidden sm:flex items-center space-x-2.5 font-semibold text-slate-700">
                    <span>Home</span>
                    <span>About</span>
                    <span>Product & Services</span>
                    <span>Clients</span>
                    <span>Resources</span>
                    <span>Contact Us</span>
                  </div>
                </div>

                {/* Dashboard Screen Mockup Content */}
                {isEducation ? (
                  <div className="bg-gradient-to-r from-[#0284C7] via-[#005F96] to-[#0369A1] rounded-b-xl p-5 text-white text-[10px] relative overflow-hidden min-h-[280px] flex flex-col justify-between">
                    {/* Wavy dots background */}
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-12 gap-2 items-center">
                      {/* Left Banner Text */}
                      <div className="col-span-7 space-y-1.5">
                        <span className="text-[8.5px] uppercase tracking-wider font-black text-cyan-200 block">
                          EDUCATION IS OUR PRIORITY
                        </span>
                        <h3 className="text-base sm:text-lg font-black leading-tight text-white font-sans">
                          School Management System With Secure Cloud Storage
                        </h3>
                        <p className="text-[8.5px] text-blue-100 leading-relaxed font-normal opacity-95 max-w-[210px]">
                          From Student Admission To Accounting, We Ensure That Your School Gets Game Quickly.
                        </p>

                        <button className="mt-2.5 px-3.5 py-1.5 rounded bg-[#002B4D] hover:bg-black text-white font-extrabold text-[8.5px] shadow-sm">
                          Get Started
                        </button>
                      </div>

                      {/* Right Student Boy Photo Illustration */}
                      <div className="col-span-5 relative flex items-center justify-center min-h-[140px]">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-cyan-300/30 p-1 flex items-center justify-center relative">
                          {/* Student Boy Vector Graphic */}
                          <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none">
                            {/* Graduation Cap */}
                            <path d="M 50 12 L 88 28 L 50 44 L 12 28 Z" fill="#0F172A" />
                            <rect x="42" y="36" width="16" height="10" fill="#1E293B" />
                            <circle cx="88" cy="28" r="3.5" fill="#F59E0B" />
                            <path d="M 88 28 V 50" stroke="#F59E0B" strokeWidth="2" />
                            {/* Head & Glasses */}
                            <circle cx="50" cy="54" r="19" fill="#FDE047" />
                            <circle cx="42" cy="52" r="4.5" stroke="#0F172A" strokeWidth="1.8" fill="white" />
                            <circle cx="58" cy="52" r="4.5" stroke="#0F172A" strokeWidth="1.8" fill="white" />
                            <path d="M 46.5 52 H 53.5" stroke="#0F172A" strokeWidth="1.8" />
                            <path d="M 44 63 Q 50 68 56 63" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
                            {/* Blue Shirt & Arm pointing up */}
                            <path d="M 22 92 C 22 75 33 72 50 72 C 67 72 78 75 78 92 Z" fill="#0284C7" />
                            <path d="M 72 75 L 82 55 L 87 58 L 78 80 Z" fill="#0284C7" />
                          </svg>
                        </div>

                        {/* Floating Stat Badges on Laptop Screen */}
                        <div className="absolute top-0 -right-2 bg-white text-slate-900 px-2 py-0.5 rounded shadow text-[7.5px] font-bold">
                          Success: 25k+
                        </div>
                        <div className="absolute bottom-2 -left-4 bg-white text-slate-900 px-2 py-0.5 rounded shadow text-[7.5px] font-bold">
                          Satisfaction: 98%
                        </div>
                      </div>
                    </div>

                    {/* Bottom School Marquee Logotypes */}
                    <div className="relative z-10 border-t border-white/20 pt-2 flex items-center justify-between text-[8px] font-extrabold text-cyan-100 uppercase tracking-tight opacity-90">
                      <span>BHOMRA</span>
                      <span>ST. XAVIER</span>
                      <span>AES EDUCATION</span>
                      <span>ANAND NIKETAN</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#F8FAFC] rounded-lg p-4 space-y-3 min-h-[260px] text-slate-800 text-[10px]">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white space-y-1 shadow-sm">
                        <span className="text-[9px] opacity-80 uppercase font-bold block">Annual Health Checkup</span>
                        <div className="text-xl font-black">577</div>
                        <span className="text-[8px] opacity-90 block">Active Patient Profiles</span>
                      </div>
                      <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white space-y-1 shadow-sm">
                        <span className="text-[9px] opacity-80 uppercase font-bold block">Doctor Consultations</span>
                        <div className="text-xl font-black">186</div>
                        <span className="text-[8px] opacity-90 block">Completed Today</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-sm space-y-2">
                      <div className="flex justify-between items-center text-[9px] font-bold text-slate-600">
                        <span>Monthly Growth Analytics</span>
                        <span className="text-[#005F96]">Updated Live</span>
                      </div>
                      <div className="h-20 flex items-end justify-between space-x-1 pt-2 border-b border-slate-100 pb-1">
                        <div className="w-full bg-purple-500 rounded-t h-[40%]" />
                        <div className="w-full bg-indigo-500 rounded-t h-[65%]" />
                        <div className="w-full bg-[#005F96] rounded-t h-[85%]" />
                        <div className="w-full bg-emerald-500 rounded-t h-[55%]" />
                        <div className="w-full bg-amber-500 rounded-t h-[95%]" />
                        <div className="w-full bg-rose-500 rounded-t h-[75%]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Smartphone Mockup Overlapping at Bottom Right */}
              <div className="absolute -bottom-6 -right-3 w-[175px] sm:w-[195px] h-[330px] rounded-[34px] bg-slate-950 border-4 border-slate-800 p-1.5 shadow-2xl overflow-hidden z-20">
                <div className="bg-[#005F96] text-white w-full h-full rounded-[26px] p-2 flex flex-col justify-between text-[8px] font-sans">
                  {/* Phone Header */}
                  <div className="bg-[#004A75] p-2 rounded-t-xl text-center space-y-0.5">
                    <div className="flex justify-between text-[7px] text-cyan-200 font-bold">
                      <span>9:41</span>
                      <span>Dashboard</span>
                    </div>
                    <div className="font-black text-[9.5px] text-white">School E-Learning</div>
                  </div>

                  {/* 9 Mobile App Icons Grid matching Reference Screenshot */}
                  <div className="bg-white text-slate-800 rounded-xl p-2 my-1 grid grid-cols-3 gap-1.5 text-center text-[7px]">
                    <div className="p-1 rounded bg-orange-50 flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-orange-500 text-white font-bold flex items-center justify-center text-[8px]">📌</div>
                      <span className="font-semibold text-slate-700 leading-none mt-1">Notice</span>
                    </div>
                    <div className="p-1 rounded bg-blue-50 flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-blue-500 text-white font-bold flex items-center justify-center text-[8px]">📊</div>
                      <span className="font-semibold text-slate-700 leading-none mt-1">Board</span>
                    </div>
                    <div className="p-1 rounded bg-purple-50 flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-purple-500 text-white font-bold flex items-center justify-center text-[8px]">👨‍🏫</div>
                      <span className="font-semibold text-slate-700 leading-none mt-1">Teacher</span>
                    </div>
                    <div className="p-1 rounded bg-emerald-50 flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-emerald-500 text-white font-bold flex items-center justify-center text-[8px]">📅</div>
                      <span className="font-semibold text-slate-700 leading-none mt-1">Calendar</span>
                    </div>
                    <div className="p-1 rounded bg-amber-50 flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-amber-500 text-white font-bold flex items-center justify-center text-[8px]">⏰</div>
                      <span className="font-semibold text-slate-700 leading-none mt-1">Timetable</span>
                    </div>
                    <div className="p-1 rounded bg-indigo-50 flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-indigo-500 text-white font-bold flex items-center justify-center text-[8px]">📚</div>
                      <span className="font-semibold text-slate-700 leading-none mt-1">Library</span>
                    </div>
                    <div className="p-1 rounded bg-[#E5F2F9] flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-[#005F96] text-white font-bold flex items-center justify-center text-[8px]">📝</div>
                      <span className="font-semibold text-slate-700 leading-none mt-1">Exam</span>
                    </div>
                    <div className="p-1 rounded bg-rose-50 flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-rose-500 text-white font-bold flex items-center justify-center text-[8px]">📑</div>
                      <span className="font-semibold text-slate-700 leading-none mt-1">Homework</span>
                    </div>
                    <div className="p-1 rounded bg-teal-50 flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-teal-500 text-white font-bold flex items-center justify-center text-[8px]">✅</div>
                      <span className="font-semibold text-slate-700 leading-none mt-1">Attendance</span>
                    </div>
                  </div>

                  <button className="w-full py-1 rounded bg-cyan-400 text-slate-900 font-extrabold text-[8.5px] text-center shadow-sm">
                    Open Student Portal
                  </button>
                </div>
              </div>

              {/* 4 Large Floating Icon Badges matching Reference Screenshot 100% */}
              {isEducation ? (
                <>
                  {/* Badge 1: Top-Left Yellow Badge (Teacher / Board Icon) */}
                  <div className="absolute -top-5 left-4 w-14 h-14 rounded-2xl bg-[#F5B000] shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center border-2 border-amber-300">
                    <TeacherBoardIcon />
                  </div>

                  {/* Badge 2: Top-Right Green Badge (Live Video Class Icon) */}
                  <div className="absolute top-4 -right-5 w-14 h-14 rounded-2xl bg-[#00D06C] shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center border-2 border-emerald-300">
                    <VideoClassIcon />
                  </div>

                  {/* Badge 3: Bottom-Left Coral Badge (Student Laptop Icon) */}
                  <div className="absolute bottom-10 -left-6 w-14 h-14 rounded-2xl bg-[#FF6B4A] shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center border-2 border-orange-300">
                    <StudentLaptopIcon />
                  </div>

                  {/* Badge 4: Bottom-Right Dark Purple Badge (Test & CE Score Icon) */}
                  <div className="absolute -bottom-5 right-32 w-14 h-14 rounded-2xl bg-[#2D1F5B] shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center border-2 border-purple-400">
                    <TestScoreIcon />
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute -top-4 left-10 p-3 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-8 -right-3 p-3 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-16 -left-5 p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-3 right-36 p-3 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6 text-white" />
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SapphireLightHeroBanner;
