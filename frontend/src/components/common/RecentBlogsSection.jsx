import React from 'react';
import Container from './Container';

const blogPosts = [
  {
    id: 1,
    date: 'May 17, 2024',
    title: 'Leading the Digital Frontier: Top Mobile App Development...',
    excerpt: 'Digital innovation has made mobile apps essential for companies to communicate with customers and manage operation...',
    bannerBg: 'bg-gradient-to-r from-[#002D52] via-[#004A80] to-[#005F96]',
    tagTitle: 'Leading the Digital Frontier:',
    tagSub: 'Top Mobile App Development Company in Germany',
    illustration: (
      <div className="w-28 h-28 relative shrink-0 flex items-center justify-center">
        <svg className="w-full h-full text-cyan-400" viewBox="0 0 100 100" fill="none">
          <rect x="22" y="10" width="56" height="80" rx="10" stroke="currentColor" strokeWidth="3" fill="#001F3B" />
          <rect x="28" y="16" width="44" height="68" rx="6" fill="#003566" />
          <circle cx="50" cy="45" r="14" stroke="#00E5FF" strokeWidth="2.5" />
          <path d="M 44 45 L 48 49 L 58 39" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 10 30 H 20 M 80 30 H 90 M 12 70 H 22 M 78 70 H 88" stroke="#00E5FF" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="15" cy="30" r="3" fill="#00E5FF" />
          <circle cx="85" cy="70" r="3" fill="#00E5FF" />
        </svg>
      </div>
    )
  },
  {
    id: 2,
    date: 'January 19, 2024',
    title: 'What is the best technology for mobile app development in...',
    excerpt: 'React Native is a prominent cross-platform mobile app development framework that combines efficiency,...',
    bannerBg: 'bg-gradient-to-r from-[#E0E7FF] via-[#EEF2FF] to-[#C7D2FE]',
    tagTitle: 'What is the Best Technology for',
    tagSub: 'Mobile App Development in 2024?',
    textColor: 'text-indigo-950',
    illustration: (
      <div className="w-28 h-28 relative shrink-0 flex items-center justify-center">
        <svg className="w-full h-full text-indigo-600" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="18" width="80" height="58" rx="8" fill="#A5B4FC" opacity="0.4" stroke="currentColor" strokeWidth="2.5" />
          <rect x="18" y="26" width="26" height="42" rx="4" fill="#6366F1" />
          <rect x="48" y="26" width="34" height="18" rx="3" fill="#4F46E5" />
          <line x1="48" y1="52" x2="78" y2="52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="48" y1="60" x2="68" y2="60" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="70" cy="35" r="4" fill="#C7D2FE" />
        </svg>
      </div>
    )
  },
  {
    id: 3,
    date: 'November 7, 2023',
    title: 'Machine Learning and AI Integration in Android Apps:...',
    excerpt: 'The smartphone revolution has changed how people use technology and the world. Android, with its enormous user..',
    bannerBg: 'bg-gradient-to-r from-[#FCE7F3] via-[#FBCFE8] to-[#F472B6]',
    tagTitle: 'Machine Learning and AI Integration',
    tagSub: 'in Android Apps Transforming User Experiences',
    textColor: 'text-pink-950',
    illustration: (
      <div className="w-28 h-28 relative shrink-0 flex items-center justify-center">
        <svg className="w-full h-full text-pink-600" viewBox="0 0 100 100" fill="none">
          {/* Robot AI Head */}
          <rect x="25" y="25" width="40" height="34" rx="8" fill="#DB2777" />
          <circle cx="37" cy="38" r="3.5" fill="white" />
          <circle cx="53" cy="38" r="3.5" fill="white" />
          <path d="M 37 48 Q 45 53 53 48" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="45" y1="15" x2="45" y2="25" stroke="#DB2777" strokeWidth="3" />
          <circle cx="45" cy="12" r="4" fill="#EC4899" />
          {/* Brain Gears */}
          <circle cx="78" cy="30" r="10" stroke="#DB2777" strokeWidth="2.5" fill="#FBCFE8" />
          <path d="M 74 30 L 82 30 M 78 26 V 34" stroke="#DB2777" strokeWidth="2" />
        </svg>
      </div>
    )
  }
];

export const RecentBlogsSection = () => {
  return (
    <section className="py-14 sm:py-16 bg-white text-slate-900 text-left font-sans border-b border-slate-200">
      {/* Full Width Edge-to-Edge Centered Header */}
      <div className="text-center w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto mb-8 sm:mb-10 space-y-2.5">
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
          Our Recent Blogs
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
          Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
        </p>
      </div>

      <Container>
        {/* 3 Blog Cards Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10">
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Banner Box with Sapphire Logo, Title & Graphic Illustration */}
              <div className={`relative h-48 sm:h-52 ${blog.bannerBg} p-5 sm:p-6 flex items-center justify-between overflow-hidden`}>
                {/* Wavy dots background */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

                {/* Left Text Content inside Banner */}
                <div className="relative z-10 space-y-2 pr-2 flex-grow">
                  {/* Firevy.co Logo Header */}
                  <div className="flex items-center space-x-1">
                    <span className={`font-extrabold text-sm sm:text-base tracking-tight font-sans ${blog.textColor || 'text-white'}`}>
                      Firevy.co
                    </span>
                  </div>

                  {/* Graphic Tag Title */}
                  <div className="pt-1">
                    <h4 className={`text-xs sm:text-[13px] font-black leading-snug font-sans ${blog.textColor || 'text-white'}`}>
                      {blog.tagTitle}
                    </h4>
                    <p className={`text-xs font-bold leading-snug font-sans mt-0.5 ${blog.textColor || 'text-cyan-200'}`}>
                      {blog.tagSub}
                    </p>
                  </div>
                </div>

                {/* Right Graphic Illustration */}
                <div className="relative z-10 shrink-0">
                  {blog.illustration}
                </div>
              </div>

              {/* Bottom White Bar: Date, Title, Excerpt, Get More Details */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4 font-sans text-left">
                <div className="space-y-2.5">
                  {/* Date */}
                  <span className="text-xs font-semibold text-slate-400 font-sans block">
                    {blog.date}
                  </span>

                  {/* Blog Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#005D95] transition-colors font-sans">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-relaxed line-clamp-3 font-sans">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs sm:text-[13px] font-bold text-[#005D95] group-hover:underline">
                    <span>Get more details</span>
                    <span className="ml-1 text-sm font-bold transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered "View All" Button */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-block bg-[#005D95] hover:bg-[#004A75] text-white font-extrabold text-sm px-9 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            View All
          </a>
        </div>
      </Container>
    </section>
  );
};

export default RecentBlogsSection;
