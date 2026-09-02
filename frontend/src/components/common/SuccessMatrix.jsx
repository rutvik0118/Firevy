import React from 'react';
import Container from './Container';
import {
  Megaphone,
  Headphones,
  ShieldCheck,
  Coins,
  Code2,
  CalendarDays,
  Compass,
  Wrench,
  UserCheck,
  FileCheck,
  LineChart,
  MapPin
} from 'lucide-react';

export const SuccessMatrix = () => {
  const matrixItems = [
    {
      title: 'SEO and Digital Marketing',
      icon: Megaphone,
      bgColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      iconColor: 'text-emerald-500'
    },
    {
      title: '4 months + Free Post Launch Support',
      icon: Headphones,
      bgColor: 'bg-orange-50 text-orange-600 border-orange-100',
      iconColor: 'text-orange-500'
    },
    {
      title: 'Non-Disclosure (NDA Protection)',
      icon: ShieldCheck,
      bgColor: 'bg-cyan-50 text-cyan-600 border-cyan-100',
      iconColor: 'text-cyan-500'
    },
    {
      title: '100% value for the money',
      icon: Coins,
      bgColor: 'bg-amber-50 text-amber-600 border-amber-100',
      iconColor: 'text-amber-500'
    },
    {
      title: 'Professional coding and version controls',
      icon: Code2,
      bgColor: 'bg-purple-50 text-purple-600 border-purple-100',
      iconColor: 'text-purple-500'
    },
    {
      title: 'Flexible payment plans',
      icon: CalendarDays,
      bgColor: 'bg-rose-50 text-rose-600 border-rose-100',
      iconColor: 'text-rose-500'
    },
    {
      title: 'Real-time project tracking tools',
      icon: Compass,
      bgColor: 'bg-blue-50 text-blue-600 border-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Custom Tailored support | AMC Plans',
      icon: Wrench,
      bgColor: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100',
      iconColor: 'text-fuchsia-500'
    },
    {
      title: 'Quality Assurance and Unit Test Case',
      icon: UserCheck,
      bgColor: 'bg-[#EBF9F1] text-[#059669] border-emerald-100',
      iconColor: 'text-[#059669]'
    },
    {
      title: 'Penalty enforcement in case of Delivery Delay',
      icon: FileCheck,
      bgColor: 'bg-stone-50 text-amber-800 border-amber-100',
      iconColor: 'text-amber-700'
    },
    {
      title: 'In-dept analysis of revenue business Models',
      icon: LineChart,
      bgColor: 'bg-teal-50 text-teal-600 border-teal-100',
      iconColor: 'text-teal-500'
    },
    {
      title: 'Mind Maps and video demos',
      icon: MapPin,
      bgColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      iconColor: 'text-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 font-sans">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
            OUR GUARANTEES & STANDARDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Success Matrix
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            We offer comprehensive services to develop digital solutions & manage complete product lifecycle. We’ve robust work history with diverse business services.
          </p>
        </div>

        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-6xl mx-auto">
          {matrixItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all duration-300 text-center flex flex-col items-center justify-between h-[210px] group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bgColor} border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm`}>
                  <IconComp className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-snug font-sans group-hover:text-[#005F96] transition-colors">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SuccessMatrix;
