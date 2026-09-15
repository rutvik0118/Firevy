import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const iwatchBlogsData = [
  {
    id: 1,
    date: 'January 8, 2024',
    title: '11+ Top iOS app development frameworks 2024',
    excerpt: 'A library called the iOS app development framework provides a fundamental structure to help with the building of...',
    image: '/images/iwatch_blog_1.png',
    alt: '11+ Top iOS App Development Frameworks 2024'
  },
  {
    id: 2,
    date: 'November 30, 2023',
    title: 'Choosing the Best iOS App Development Company: The Ke...',
    excerpt: 'Before choosing an iOS app developer, you must clearly describe your aims. Define your app\'s goal, audience, and...',
    image: '/images/iwatch_blog_2.png',
    alt: 'Choosing the Best iOS App Development Company: The Key to Building Success'
  },
  {
    id: 3,
    date: 'September 21, 2023',
    title: '6 Highly Effective iOS App Development Trends for...',
    excerpt: 'iOS apps have continuously set the standard for innovation, user experience, and performance in the dynamic and...',
    image: '/images/iwatch_blog_3.png',
    alt: '6 Highly Effective iOS App Development Trends for Enhanced Results'
  }
];

export const IWatchRecentBlogsSection = () => {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white text-slate-900 text-left font-sans">
      {/* Section Header */}
      <div className="text-center w-full max-w-4xl px-4 sm:px-6 mx-auto mb-8 sm:mb-10 space-y-2.5">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
          style={{ fontSize: '32px' }}
        >
          Our Recent Blogs
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] font-normal leading-relaxed max-w-2xl mx-auto">
          Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
        </p>
      </div>

      <Container className="max-w-6xl">
        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mx-auto mb-9 sm:mb-10">
          {iwatchBlogsData.map((blog) => (
            <div
              key={blog.id}
              className="rounded-[20px] bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Banner Real Image Area */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-50 flex items-center justify-center">
                <img
                  src={blog.image}
                  alt={blog.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Bottom Details Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3 font-sans text-left bg-white">
                <div className="space-y-2">
                  {/* Date */}
                  <span className="text-xs font-semibold text-[#8C98A4] font-sans block">
                    {blog.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15px] font-[800] text-[#0F172A] leading-snug line-clamp-2 group-hover:text-[#005F96] transition-colors font-sans">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-[12.5px] text-[#475569] font-normal leading-relaxed line-clamp-2 font-sans">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs font-[700] text-[#005F96] group-hover:underline">
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
          <Link
            to="/blog"
            className="inline-block bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-xs sm:text-sm px-8 py-2.5 rounded-[6px] shadow-sm hover:shadow-md transition-all duration-200 tracking-wide cursor-pointer"
          >
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default IWatchRecentBlogsSection;
