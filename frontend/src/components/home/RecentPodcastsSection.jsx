import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const RecentPodcastsSection = () => {
  const podcasts = [
    {
      title: 'Mobile App Testing and Quality Assurance: Ensuring a Seamless Use...',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      desc: 'In today\'s fast-paced digital world, mobile applications have become an integral part of our daily lives. From communication to...'
    },
    {
      title: 'Why Does Your Business Needs Software Applications?',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      desc: 'In today\'s fast-paced and digitally-driven world, businesses of all sizes and industries are recognizing the importance of integratin...'
    },
    {
      title: 'A Chat with a Client: Why They Chose firevy.co',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      desc: 'There are several mobile app development companies worldwide. While searching for a reliable IT services provider, I came across...'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header - 100% Copy-to-Copy with Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            Our Recent Podcasts
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
            Listen to our series of podcasts that expose you to a broad array of concepts. Whether you're looking for the latest trends or want to hear customer experience, our podcasts will be a treat for your ears.
          </p>
        </div>

        {/* 3-Column Podcast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {podcasts.map((pod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[8px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group text-left"
            >
              {/* Image Thumbnail with Centered Circular Play Button */}
              <div className="relative overflow-hidden cursor-pointer" style={{ height: '240px' }}>
                <img
                  src={pod.image}
                  alt={pod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Centered Circular White Play Button with slight dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-[#006B8F] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-[15px] font-[700] text-slate-900 mb-3 leading-snug font-sans">
                    {pod.title}
                  </h3>
                  <p className="text-[14px] font-[400] text-slate-600 leading-relaxed font-sans">
                    {pod.desc}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center text-[14px] font-[600] text-[#006B8F] hover:text-[#005F80] font-sans"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RecentPodcastsSection;
