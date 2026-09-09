import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const defaultPodcasts = [
  {
    id: 1,
    title: 'Mobile App Testing and Quality Assurance: Ensuring a Seamless Use...',
    fullTitle: 'Mobile App Testing and Quality Assurance: Ensuring a Seamless User Experience',
    image: '/images/podcast1.webp',
    desc: "In today's fast-paced digital world, mobile applications have become an integral part of our daily lives. From communication to...",
    link: '/portfolio'
  },
  {
    id: 2,
    title: 'Why Does Your Business Needs Software Applications?',
    fullTitle: 'Why Does Your Business Needs Software Applications?',
    image: '/images/podcast2.webp',
    desc: "In today's fast-paced and digitally-driven world, businesses of all sizes and industries are recognizing the importance of integratin...",
    link: '/portfolio'
  },
  {
    id: 3,
    title: 'A Chat with a Client: Why They Chose Sapphire',
    fullTitle: 'A Chat with a Client: Why They Chose Sapphire',
    image: '/images/podcast3.webp',
    desc: 'There are several mobile app development companies worldwide. While searching for a reliable IT services provider, I came across...',
    link: '/portfolio'
  }
];

export const RecentPodcastsSection = ({ data }) => {
  const title = data?.title || 'Our Recent Podcasts';
  const description = data?.description || "Listen to our series of podcasts that expose you to a broad array of concepts. Whether you're looking for the latest trends or want to hear customer experience, our podcasts will be a treat for your ears.";

  const podcasts = (data?.podcasts && Array.isArray(data.podcasts) && data.podcasts.filter(p => p.isActive !== false).length > 0)
    ? data.podcasts.filter(p => p.isActive !== false)
    : defaultPodcasts;

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-[30px] sm:text-[36px] font-[800] tracking-tight text-[#111827] mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] font-[400] text-[#4b5563] leading-relaxed font-sans max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* 3-Column Podcast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 max-w-6xl mx-auto">
          {podcasts.map((pod, idx) => {
            const fallbackPod = defaultPodcasts[idx % defaultPodcasts.length];
            const imgSrc = (pod.image && !pod.image.includes('unsplash.com')) ? pod.image : fallbackPod.image;
            const cardTitle = pod.title || fallbackPod.title;
            const cardDesc = pod.desc || pod.description || fallbackPod.desc;
            const cardLink = pod.link || pod.exploreLink || "/portfolio";

            return (
              <div
                key={pod.id || idx}
                className="flex flex-col text-left group cursor-pointer"
              >
                {/* Image Thumbnail with Centered Circular Play Button */}
                <div className="relative aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-slate-100 mb-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300">
                  <img
                    src={imgSrc}
                    alt={cardTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Centered Circular Play Button SVG */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img
                      src="/images/podcast_slicing/audioplaybtn.svg"
                      alt="Play"
                      className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#111827] leading-[1.35] line-clamp-2 group-hover:text-[#005d89] transition-colors font-sans mb-2.5">
                      {cardTitle}
                    </h3>
                    <p className="text-[14px] text-[#4b5563] line-clamp-3 leading-[1.6] font-sans font-normal mb-4">
                      {cardDesc}
                    </p>
                  </div>

                  <div>
                    <Link
                      to={cardLink}
                      className="inline-flex items-center text-[15px] font-[600] text-[#005d89] hover:text-[#004768] space-x-1.5 group/btn font-sans"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block px-9 py-3 rounded-[6px] bg-[#005d89] hover:bg-[#004a6e] text-white font-[700] text-[15px] shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
          >
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default RecentPodcastsSection;
