import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../common/Container';

export const VideoTestimonialsStory = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      name: 'Tim Harrison',
      role: 'CTO, FinTech Global',
      title: 'Hear out what Tim has got to say about scaling our engineering team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      comment: 'Firevy delivered our React Native fintech app ahead of schedule with 99.99% uptime.'
    },
    {
      name: 'Sarah Jenkins',
      role: 'VP of Product, HealthTech',
      title: 'Testimonial from client who expanded their enterprise AI footprint',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      comment: 'Working with Firevy allowed us to automate document processing with 98% accuracy.'
    },
    {
      name: 'Pravin Mehta',
      role: 'Founder, RetailScale',
      title: 'Hear what Pravin has got to say about 4x growth post launch',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      comment: 'The team handled our microservices migration smoothly without any customer downtime.'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#006B8F]">
            Our Story, Their Words
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Watch genuine client video testimonials sharing their product development journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-slate-200 flex flex-col justify-between items-center text-center group hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-cyan-200 absolute top-4 right-4 pointer-events-none" />

              {/* Avatar with Play Button Badge */}
              <div className="relative mb-4 cursor-pointer">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#006B8F] shadow-md group-hover:scale-105 transition-transform"
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#006B8F] text-white flex items-center justify-center shadow-md">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#006B8F] transition-colors mb-2 leading-snug">
                  "{t.title}"
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium italic mb-4">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 w-full">
                <div className="text-sm font-bold text-[#006B8F]">{t.name}</div>
                <div className="text-[11px] text-slate-400 font-medium">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="p-2.5 rounded-full bg-white text-slate-700 border border-slate-300 hover:bg-[#006B8F] hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="p-2.5 rounded-full bg-white text-slate-700 border border-slate-300 hover:bg-[#006B8F] hover:text-white transition-all shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default VideoTestimonialsStory;
