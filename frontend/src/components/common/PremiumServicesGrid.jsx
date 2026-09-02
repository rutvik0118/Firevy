import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import {
  Smartphone,
  Laptop,
  Globe,
  Code2,
  Layers,
  FileCode,
  Users,
  Cpu,
  Terminal,
  Server
} from 'lucide-react';

export const PremiumServicesGrid = () => {
  const services = [
    { name: 'Mobile App Development', icon: Smartphone, link: '/services/mobile-app-development' },
    { name: 'Software Development', icon: Laptop, link: '/services/software-development' },
    { name: 'Web Development', icon: Globe, link: '/services/web-development' },
    { name: '.NET Development', icon: Code2, link: '/services/dot-net-development' },
    { name: 'Flutter App Development', icon: Layers, link: '/services/flutter-app-development' },
    { name: 'PHP Development', icon: FileCode, link: '/services/php-development' },
    { name: 'Hire Dedicated Developers', icon: Users, link: '/hire-developers' },
    { name: 'Mern Stack Development', icon: Cpu, link: '/services/mern-stack-development' },
    { name: 'Full Stack Development', icon: Terminal, link: '/services/full-stack-development' },
    { name: 'Laravel Development', icon: Server, link: '/services/laravel-development' }
  ];

  return (
    <section className="py-20 bg-[#005F96] text-white font-sans text-left">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our Premium Services
          </h2>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
            As a certified IT company, Sapphire helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!
          </p>
        </div>

        {/* 10 Rounded White Pill Cards Grid (5 cols x 2 rows on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <Link
                key={idx}
                to={item.link}
                className="p-4 rounded-2xl bg-white text-slate-900 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 h-20 text-left border border-white/20 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center font-bold shrink-0 group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug group-hover:text-[#005F96] transition-colors">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PremiumServicesGrid;
