import React from 'react';
import { ArrowRight, Activity, Shield, HeartHandshake, Pill, Smartphone, CheckCircle } from 'lucide-react';
import Container from './Container';

export const SapphireLightHeroBanner = ({
  title = "Healthcare App Development Services in USA",
  subtitle = "Rapidly becoming an important component of the business, Custom healthcare mobile app development services is now a vital industry element. The Healthcare Consultation App Development of mobile applications is now a crucial aspect of increasing patient happiness and earnings. Contact us to know more!",
  ctaText = "Discuss Your Project",
  ctaLink = "#quote-form",
  serviceCategory = "healthcare"
}) => {
  return (
    <section className="pt-32 pb-16 bg-[#EFF5F9] text-slate-900 relative overflow-hidden text-left font-sans border-b border-slate-200/60">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              {subtitle}
            </p>

            <div className="pt-2">
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Visual Graphic (Laptop + Mobile Mockup + Floating 4 Badges 1:1 Sapphire Screenshot Match) */}
          <div className="lg:col-span-6 flex justify-center relative py-6">
            <div className="relative w-full max-w-[540px]">
              {/* Laptop Web Dashboard Frame */}
              <div className="rounded-xl border-4 border-slate-300 bg-white shadow-2xl p-2.5 space-y-2 relative overflow-hidden">
                {/* Top Browser Header */}
                <div className="flex items-center space-x-1.5 px-2 py-1 bg-slate-100 rounded-md border-b border-slate-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-slate-400 font-mono ml-2">https://app.sapphire-solutions.net/portal</span>
                </div>

                {/* Dashboard Screen Mockup Content */}
                <div className="bg-[#F8FAFC] rounded-lg p-4 space-y-3 min-h-[260px] text-slate-800 text-[10px]">
                  {/* Top Stats Cards Row */}
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

                  {/* Chart Analytics Area */}
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
              </div>

              {/* Smartphone Mockup Overlapping at Bottom Right */}
              <div className="absolute -bottom-4 -right-2 w-[165px] sm:w-[185px] h-[310px] rounded-[30px] bg-slate-950 border-4 border-slate-700 p-1.5 shadow-2xl overflow-hidden z-20">
                <div className="bg-white w-full h-full rounded-[22px] p-2.5 flex flex-col justify-between text-slate-900 text-[9px]">
                  <div className="space-y-1 text-center border-b border-slate-100 pb-1.5">
                    <div className="flex justify-between text-[8px] font-bold text-slate-400">
                      <span>9:41</span>
                      <span className="text-[#005F96]">HEALTH APP</span>
                    </div>
                    <div className="font-extrabold text-slate-900 text-[10px]">Patient Dashboard</div>
                  </div>

                  <div className="space-y-1.5 my-auto">
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                      <span className="text-[8px] font-bold text-emerald-700 block">VITAL SIGNS</span>
                      <div className="font-black text-slate-900 text-xs">Heart Rate: 72 bpm</div>
                      <div className="text-[8px] text-slate-500">Steps: 8,420 • Normal</div>
                    </div>

                    <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-between">
                      <span className="font-bold text-slate-700 text-[8px]">Next Appointment</span>
                      <span className="font-black text-[#005F96] text-[8px]">10:30 AM</span>
                    </div>
                  </div>

                  <button className="w-full py-1.5 rounded-md bg-[#005F96] text-white font-extrabold text-[9px] text-center shadow-sm">
                    Book Consultation
                  </button>
                </div>
              </div>

              {/* 4 Floating Glass Badges matching Sapphire Screenshot 1:1 */}
              {/* Badge 1: Top Center-Left Orange Badge (Pill / Medicine Icon) */}
              <div className="absolute -top-4 left-10 p-3 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                <Pill className="w-6 h-6 text-white" />
              </div>

              {/* Badge 2: Top Right Light Blue Badge (Shield / Security Icon) */}
              <div className="absolute top-8 -right-3 p-3 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>

              {/* Badge 3: Left Center Purple Badge (Pulse / Heartbeat Icon) */}
              <div className="absolute bottom-16 -left-5 p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>

              {/* Badge 4: Bottom Right Green Badge (Hands / Care Icon) */}
              <div className="absolute -bottom-3 right-36 p-3 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-xl hover:scale-110 transition-transform z-30 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SapphireLightHeroBanner;
