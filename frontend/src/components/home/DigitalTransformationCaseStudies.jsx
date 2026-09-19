import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DigitalTransformationCaseStudies = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 6 Enterprise Case Studies
  const caseStudies = [
    {
      id: 0,
      company: 'Larsen & Toubro',
      bgColor: '#E2F1F8', // Soft Light Blue
      logo: (
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#005F96] flex items-center justify-center font-black text-[#005F96] text-xs bg-white">
              L&T
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-[950] text-[#005F96] font-sans tracking-wide leading-none">
                LARSEN & TOUBRO
              </div>
            </div>
          </div>
        </div>
      ),
      desc: "Larsen & Toubro Limited is one of India's largest and most well-known private corporations. L&T offers unrivaled capabilities across Technology, Engineering, Construction, and Manufacturing, and retains leadership in all of its primary lines of business, almost 80 years of a strong, customer-focused strategy and a..",
      points: [
        'Automated safety audits and inspections',
        '24/7 access to safety training resources',
        'Customizable dashboards and reporting tools',
        'Real-time incident reporting and tracking',
        '99% compliance with health and safety regulations'
      ],
      rightMockup: (
        <div className="w-full h-full rounded-[24px] bg-white p-5 sm:p-6 flex flex-col justify-between border border-slate-200/80 shadow-sm relative overflow-hidden">
          <div>
            <div className="text-2xl sm:text-3xl font-[950] text-[#0080B0] font-sans text-center tracking-tight mb-3">
              OverView
            </div>
            {/* 4 Stats */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center mb-4">
              <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200/80">
                <div className="text-sm sm:text-base font-black text-[#0080B0]">18+</div>
                <div className="text-[7.5px] sm:text-[8.5px] font-bold text-slate-500 leading-tight">Different Business</div>
              </div>
              <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200/80">
                <div className="text-sm sm:text-base font-black text-[#0080B0]">50000+</div>
                <div className="text-[7.5px] sm:text-[8.5px] font-bold text-slate-500 leading-tight">Employees Across Globe</div>
              </div>
              <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200/80">
                <div className="text-sm sm:text-base font-black text-[#0080B0]">Top 10</div>
                <div className="text-[7.5px] sm:text-[8.5px] font-bold text-slate-500 leading-tight">Best Workplace In India</div>
              </div>
              <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200/80">
                <div className="text-sm sm:text-base font-black text-[#0080B0]">50+</div>
                <div className="text-[7.5px] sm:text-[8.5px] font-bold text-slate-500 leading-tight">Country Presence</div>
              </div>
            </div>
          </div>

          {/* Laptop + Smartphone Graphic */}
          <div className="relative mt-auto flex items-end justify-center pt-2">
            {/* Mobile Phone Mockup */}
            <div className="w-20 sm:w-24 h-36 sm:h-44 rounded-2xl bg-emerald-700 p-1 shadow-2xl z-20 -mr-6 border-2 border-white transform -rotate-3">
              <div className="w-full h-full bg-emerald-500 rounded-xl p-1.5 text-white text-[7px] flex flex-col justify-between">
                <div className="font-bold">L&T Safety App</div>
                <div className="bg-white text-emerald-900 rounded p-1 font-black text-[8px] text-center my-auto">
                  Audit Verified
                </div>
                <div className="w-full h-2 bg-emerald-600 rounded-full" />
              </div>
            </div>
            {/* Laptop Mockup */}
            <div className="w-60 sm:w-72 h-36 sm:h-44 rounded-t-xl bg-slate-900 p-1.5 shadow-2xl z-10 border-t-2 border-slate-700">
              <div className="w-full h-full bg-white rounded-t-lg p-2 flex flex-col justify-between text-[8px] text-slate-800">
                <div className="flex justify-between items-center border-b pb-1 font-bold text-slate-600">
                  <span>Employee Health Dashboard</span>
                  <span className="text-emerald-600 font-bold">● Active</span>
                </div>
                <div className="grid grid-cols-3 gap-1 my-auto">
                  <div className="bg-blue-50 p-1 rounded border border-blue-200 text-center">
                    <div className="text-[7px] text-blue-700 font-bold">OPD Records</div>
                    <div className="text-xs font-black">24,321</div>
                  </div>
                  <div className="bg-pink-50 p-1 rounded border border-pink-200 text-center">
                    <div className="text-[7px] text-pink-700 font-bold">Health Score</div>
                    <div className="text-xs font-black">98.5%</div>
                  </div>
                  <div className="bg-purple-50 p-1 rounded border border-purple-200 text-center">
                    <div className="text-[7px] text-purple-700 font-bold">Compliance</div>
                    <div className="text-xs font-black">99%</div>
                  </div>
                </div>
                <div className="h-5 bg-slate-100 rounded px-1.5 flex items-center justify-between text-[6.5px]">
                  <span>Total Safety Audits Passed</span>
                  <span className="font-black text-slate-900">50,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      company: 'Morris Garages',
      bgColor: '#FDE8E8', // Soft Red/Pink
      logo: (
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#C0392B] flex items-center justify-center font-black text-[#C0392B] text-xs bg-white">
              MG
            </div>
            <div>
              <div className="text-lg sm:text-xl font-[950] text-[#C0392B] font-sans tracking-widest uppercase leading-none">
                MORRIS GARAGES
              </div>
            </div>
          </div>
        </div>
      ),
      desc: "MG Motor is a well-known firm that have large number of employee. It is the major responsibility to keep track of employees' health and records. The requirement from their end was to have one secure locker for the protection of all the health data in order to keep track of employee Examination and OPD records for audit.",
      points: [
        'Real-time health data analytics',
        'HIPAA-compliant data security',
        '24/7 access to health resources and support',
        'Personalized health recommendations',
        '98% improvement in employee health monitoring'
      ],
      rightMockup: (
        <div className="w-full h-full rounded-[24px] bg-white p-5 sm:p-6 flex flex-col justify-between border border-slate-200/80 shadow-sm relative overflow-hidden text-left">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <div className="w-7 h-7 rounded-full bg-[#C0392B] text-white flex items-center justify-center font-black text-xs">
              MG
            </div>
            <div className="font-black text-slate-900 text-sm">MG Employee Health Locker</div>
          </div>

          <div className="space-y-3 my-auto">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50 p-2.5 rounded-xl border border-red-100">
                <div className="text-[10px] font-bold text-red-600">OPD Examination</div>
                <div className="text-base font-black text-slate-900">Encrypted</div>
              </div>
              <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                <div className="text-[10px] font-bold text-emerald-600">Audit Compliance</div>
                <div className="text-base font-black text-slate-900">100% HIPAA</div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-3 shadow-lg flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <div className="font-bold text-slate-300 text-[10px]">Active MG Health Analytics</div>
                <div className="font-black text-red-400">98% Health Monitoring</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-black">
                🔒
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      company: "L'ORÉAL",
      bgColor: '#F3EFE6', // Soft Cream/Beige
      logo: (
        <div className="mb-4">
          <div className="text-2xl sm:text-3xl font-[950] text-slate-900 font-sans tracking-wider leading-none">
            L'ORÉAL
          </div>
          <div className="flex items-center space-x-1.5 mt-1">
            <div className="w-4 h-4 bg-amber-600 rounded-xs flex items-center justify-center">
              <span className="text-white text-[7px] font-black">S</span>
            </div>
            <div className="text-[9px] text-slate-700 font-bold leading-tight uppercase">
              SAFE@WORK SAFE@HOME <span className="block text-[7px] text-slate-400 font-medium">spread the culture</span>
            </div>
          </div>
        </div>
      ),
      desc: 'This safety improvement application collects the observations from the organizational Staff and non-staff, and the respective department head will take care of the closure observation, and some observation categories will be verified by the top management.',
      points: [
        '97% reduction in safety incidents',
        'Scalable solution for large enterprises',
        'Recognized for excellence in safety innovation',
        'Automated safety reminders and alerts',
        'Real-time hazard identification and reporting'
      ],
      rightMockup: (
        <div className="w-full h-full rounded-[24px] bg-white p-5 sm:p-6 flex flex-col justify-between border border-slate-200/80 shadow-sm relative overflow-hidden text-left">
          <div className="text-center font-black text-slate-800 text-sm tracking-wider uppercase mb-2">
            L'ORÉAL BADDI
          </div>

          <div className="flex items-center justify-center my-auto space-x-4">
            <div className="w-24 sm:w-28 h-44 sm:h-52 bg-amber-50 rounded-2xl border border-amber-200 p-2 flex flex-col items-center justify-center relative shadow-xs">
              <div className="w-10 h-10 rounded-full bg-amber-700 mb-2 flex items-center justify-center text-white font-black text-xs">
                👩
              </div>
              <div className="w-16 h-20 bg-amber-600 rounded-t-xl mb-1" />
              <div className="w-12 h-16 bg-slate-800 rounded-b-lg" />
              <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-amber-500 text-white font-black text-[9px]">
                %
              </div>
            </div>

            <div className="w-36 sm:w-44 h-56 sm:h-64 rounded-[28px] bg-slate-900 p-1.5 shadow-2xl border-4 border-slate-800">
              <div className="w-full h-full bg-white rounded-[22px] p-2 flex flex-col justify-between items-center text-center">
                <div className="w-10 h-1.5 bg-slate-800 rounded-full mx-auto mb-1" />
                <div className="my-auto space-y-2">
                  <div className="text-base sm:text-lg font-[950] text-slate-900 tracking-wider">L'ORÉAL</div>
                  <div className="text-[10px] font-black text-slate-600 tracking-widest">BADDI</div>
                  <div className="w-16 h-16 rounded-full bg-amber-100 mx-auto flex items-center justify-center border-2 border-amber-500 text-amber-800 font-black text-xs">
                    SAFE
                  </div>
                  <div className="text-[7.5px] font-extrabold text-slate-700 uppercase">
                    SAFE@WORK SAFE@HOME<br />
                    <span className="text-slate-400 font-normal text-[6.5px]">spread the culture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      company: 'Adani EmCare',
      bgColor: '#E6E4F7', // Soft Light Purple/Lavender
      logo: (
        <div className="mb-4">
          <span className="text-3xl sm:text-4xl font-[950] font-sans tracking-tight" style={{
            background: 'linear-gradient(90deg, #1565C0 0%, #00897B 50%, #F57C00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>adani</span>
        </div>
      ),
      desc: "Adani EmCare is a Web + Mobile App used by Adani Group's medical officer to capture, analyze and manage the health data of the employees and workers. And this data is used by medical officer to provide the preventive healthcare to the employees.",
      points: [
        '98% Employee satisfaction ratio',
        '91% reduction in appointment scheduling time',
        '24/7 real-time health monitoring',
        'Serving over 60,000 healthcare professionals',
        'Generating over USD 30 billion in revenue'
      ],
      rightMockup: (
        <div className="w-full h-full rounded-[24px] bg-white p-4 sm:p-5 flex flex-col justify-between border border-slate-200/80 shadow-sm relative overflow-hidden text-left">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-200 text-[8px]">
              <div className="font-bold text-slate-500">Pharmacy Name</div>
              <div className="font-black text-slate-900 text-[9px]">EmCare Station</div>
              <div className="text-emerald-600 font-bold text-[7px] mt-0.5">● Cashless Verified</div>
            </div>
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-200 text-[8px]">
              <div className="font-bold text-slate-500">Speciality</div>
              <div className="font-black text-slate-900 text-[9px]">24/7 Medical Officer</div>
              <div className="text-purple-600 font-bold text-[7px] mt-0.5">● 60,000+ Staff</div>
            </div>
          </div>

          <div className="relative mt-auto flex items-end justify-center">
            <div className="w-20 sm:w-24 h-36 sm:h-44 rounded-2xl bg-slate-900 p-1 shadow-2xl z-20 -mr-4 border-2 border-white">
              <div className="w-full h-full bg-[#1565C0] text-white rounded-xl p-1.5 flex flex-col justify-between text-[7px]">
                <div className="font-black">adani EmCare</div>
                <div className="bg-white text-blue-900 p-1 rounded font-bold text-center text-[7.5px]">
                  Medical Record
                </div>
                <div className="w-full h-2 bg-blue-800 rounded-full" />
              </div>
            </div>
            <div className="w-56 sm:w-64 h-36 sm:h-44 rounded-xl bg-slate-50 border border-slate-200 p-2.5 shadow-xl z-10 flex flex-col justify-between">
              <div className="flex justify-between items-center border-b pb-1">
                <span className="font-black text-slate-900 text-xs">adani EmCare Portal</span>
                <span className="text-[7.5px] font-bold text-emerald-600">Achievements</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 my-auto text-[8px]">
                <div className="bg-blue-100/70 p-1.5 rounded">
                  <div className="text-[6.5px] text-slate-600 font-bold">Satisfaction</div>
                  <div className="font-black text-blue-700 text-sm">98%</div>
                </div>
                <div className="bg-amber-100/70 p-1.5 rounded">
                  <div className="text-[6.5px] text-slate-600 font-bold">Annual Rev</div>
                  <div className="font-black text-amber-700 text-sm">$30B+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      company: 'Waymark Maps',
      bgColor: '#F4E4F7', // Soft Lilac
      logo: (
        <div className="mb-4">
          <div className="text-2xl sm:text-3xl font-[950] text-[#6B21A8] font-sans tracking-tight leading-none">
            Waymark Maps
          </div>
        </div>
      ),
      desc: 'A city map and free business listings are available on Waymark. Our city information is consistently accurate and current. With advertisements, points of interest, restaurants, hotels, malls, parking, featured locations, metro routes, tourist attractions, and much more, Waymark offers an interactive map of the Ivory Coast. There are two versions of Waymark: mobile and web.',
      points: [
        'Turn-by-turn voice navigation',
        'Points of interest (POI) recommendations',
        'Real-time traffic updates and route optimization',
        'Offline map access for remote areas',
        'Augmented reality (AR) navigation features'
      ],
      rightMockup: (
        <div className="w-full h-full rounded-[24px] bg-white p-5 sm:p-6 flex flex-col justify-between border border-slate-200/80 shadow-sm relative overflow-hidden text-left">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#6B21A8] text-white flex items-center justify-center font-black text-xs">
              📍
            </div>
            <div className="text-sm font-black text-[#6B21A8]">Waymark Maps Application</div>
          </div>

          <div className="flex items-center justify-between my-auto pt-2">
            <div className="w-28 sm:w-32 h-48 sm:h-56 flex flex-col items-center justify-end relative">
              <div className="w-9 h-9 rounded-full bg-[#E5D7F0] border-2 border-[#6B21A8] flex items-center justify-center text-xs mb-1">
                👨‍💼
              </div>
              <div className="w-14 h-20 bg-[#6B21A8] rounded-t-xl relative">
                <div className="w-6 h-8 bg-slate-800 rounded-sm absolute -left-3 top-6" />
              </div>
              <div className="w-12 h-20 bg-slate-800 rounded-b-md" />
              <div className="w-24 h-5 bg-slate-900 rounded-full flex justify-between items-center px-1 border border-slate-700 shadow-md">
                <div className="w-4 h-4 rounded-full bg-purple-400 border border-slate-900" />
                <div className="w-4 h-4 rounded-full bg-purple-400 border border-slate-900" />
              </div>
            </div>

            <div className="w-40 sm:w-48 h-60 sm:h-68 rounded-[30px] bg-slate-900 p-1.5 shadow-2xl border-4 border-slate-800">
              <div className="w-full h-full bg-[#EAF7EE] rounded-[24px] p-2 flex flex-col justify-between text-[8px] relative overflow-hidden">
                <div className="bg-white p-1.5 rounded-lg shadow-xs space-y-1 text-[7px] text-slate-700 font-bold">
                  <div className="flex items-center justify-between border-b pb-0.5">
                    <span>📍 Kotobrino, Cote d'Ivoire</span>
                    <span>⇅</span>
                  </div>
                  <div>📍 Frtessou, Cote d'Ivoire</div>
                </div>

                <div className="my-auto h-24 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 80">
                    <path d="M 15 70 Q 35 25 55 45 T 85 15" fill="none" stroke="#D946EF" strokeWidth="4.5" strokeLinecap="round" />
                    <circle cx="85" cy="15" r="4.5" fill="#6B21A8" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="55" cy="45" r="3.5" fill="#D946EF" />
                  </svg>
                  <div className="absolute top-2 left-2 text-[6.5px] font-bold text-slate-600 bg-white/80 px-1 rounded">
                    Sénikro
                  </div>
                  <div className="absolute bottom-2 right-4 text-[6.5px] font-bold text-slate-600 bg-white/80 px-1 rounded">
                    Kotobrino
                  </div>
                </div>

                <div className="bg-white p-1.5 rounded-xl shadow-md space-y-1">
                  <div className="flex justify-between items-center text-[7px] font-bold text-slate-800">
                    <span>1 hr 12 min • 31.7 km</span>
                    <span className="text-slate-400">with traffic</span>
                  </div>
                  <button className="w-full py-1.5 bg-[#C026D3] hover:bg-[#A21CAF] text-white rounded-lg font-black text-[8px] uppercase tracking-wider shadow-xs">
                    Start Navigation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      company: 'Bee Car Care',
      bgColor: '#F9F3D5', // Soft Light Yellow
      logo: (
        <div className="mb-4 flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center shrink-0 shadow-xs">
            <span className="text-amber-400 font-black text-sm">🐝</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-[900] text-amber-500 font-sans">Bee </span>
            <span className="text-xl sm:text-2xl font-[900] text-slate-900 font-sans">Car Care</span>
          </div>
        </div>
      ),
      desc: 'If you provide car washing services and need to reach a wide range of customers, the car wash app is your best bet. Sapphire Software Solutions built a car wash application that allows people to book car wash services in a few clicks',
      points: [
        '96% customer retention rate',
        '92 % increase in service bookings',
        'Over 1,10,000 satisfied users',
        'Operating in 90+ locations',
        'User-friendly & Efficient interface for easy booking'
      ],
      rightMockup: (
        <div className="w-full h-full rounded-[24px] bg-white p-5 sm:p-6 flex flex-col justify-between border border-slate-200/80 shadow-sm relative overflow-hidden text-left">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
            <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-black text-xs">
              🐝
            </div>
            <div className="text-sm font-black text-amber-600">Bee Car Wash App</div>
          </div>

          <div className="flex items-center justify-center my-auto pt-2">
            <div className="w-40 sm:w-48 h-60 sm:h-64 rounded-[28px] bg-slate-900 p-1.5 shadow-2xl border-4 border-slate-800">
              <div className="w-full h-full bg-white rounded-[22px] p-2.5 flex flex-col justify-between text-slate-900 text-[8px]">
                <div className="flex justify-between items-center font-black border-b pb-1">
                  <span className="text-amber-500 text-[9px]">Bee Car Wash</span>
                  <span className="text-emerald-600">90+ Locations</span>
                </div>
                <div className="space-y-1.5 my-auto">
                  <div className="bg-amber-50 p-2 rounded-lg border border-amber-200 text-left">
                    <div className="font-bold text-amber-800">Express Foam Wash</div>
                    <div className="text-[7px] text-slate-500">Exterior + Interior Polish</div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 text-left">
                    <div className="font-bold text-slate-800">Doorstep Car Wash</div>
                    <div className="text-[7px] text-slate-500">1,10,000+ Happy Users</div>
                  </div>
                </div>
                <button className="w-full py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-full text-[8.5px] uppercase shadow-md">
                  Book Car Wash Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const total = caseStudies.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const goNext = handleNext;
  const goPrev = handlePrev;

  // 2.5-second auto-scroll interval
  useEffect(() => {
    const timer = setInterval(handleNext, 2500);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="py-16 bg-white border-b border-slate-200 text-slate-900 relative font-sans w-full overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto px-4 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] tracking-tight text-slate-900 mb-2 font-sans">
          Digital Transformation Through Innovation and Collective Knowledge
        </h2>
        <p className="text-xs sm:text-sm lg:text-base font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
          At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
        </p>
      </div>

      {/* Slider Container (Full Width per Slide) */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mb-8">
        <div className="relative overflow-hidden w-full rounded-[28px]">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="w-full shrink-0 rounded-[28px] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md transition-all duration-500"
                style={{
                  backgroundColor: cs.bgColor,
                  minHeight: '460px'
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-stretch">
                  {/* LEFT HALF: Description & Points */}
                  <div className="lg:col-span-6 flex flex-col justify-between text-left">
                    <div>
                      {cs.logo}
                      <p className="text-xs sm:text-[13.5px] font-[400] text-slate-700 leading-relaxed font-sans mb-5">
                        {cs.desc}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {cs.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-[13.5px] text-slate-900 font-bold font-sans">
                            <span className="text-slate-950 font-[950] shrink-0 mt-0.5 text-sm">»</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        to="/portfolio"
                        className="px-6 py-3 bg-[#111827] hover:bg-slate-800 text-white font-[800] text-xs sm:text-sm rounded-full transition-all shadow-md font-sans"
                      >
                        View Case Study
                      </Link>
                      <Link
                        to="/portfolio"
                        className="px-6 py-3 bg-white/90 border border-slate-400 hover:bg-white text-slate-900 font-[800] text-xs sm:text-sm rounded-full transition-all shadow-xs font-sans"
                      >
                        View Portfolio
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT HALF: Mockup Graphic */}
                  <div className="lg:col-span-6 min-h-[360px]">
                    {cs.rightMockup}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Arrows */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={goPrev}
          className="p-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors shadow-xs cursor-pointer"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="p-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors shadow-xs cursor-pointer"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default DigitalTransformationCaseStudies;
