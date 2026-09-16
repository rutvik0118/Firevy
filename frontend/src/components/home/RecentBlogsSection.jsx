import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const defaultBlogs = [
  {
    id: 1,
    date: 'March 6, 2026',
    title: 'AI in Mobile App Development: Tools That Save Time and Money',
    desc: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development,...',
    slug: 'ai-in-mobile-app-development',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    date: 'March 3, 2026',
    title: 'Hire Dedicated Developers: Ultimate Guide for 2026',
    desc: 'Hiring dedicated remote developers is the fastest way to scale software delivery while maintaining engineering quality...',
    slug: 'hire-dedicated-developers-guide-2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    date: 'February 28, 2026',
    title: 'Microservices vs Monolithic Architecture in Modern Cloud',
    desc: 'Discover key architectural trade-offs, scalability metrics, and cost implications when modernizing legacy systems...',
    slug: 'microservices-vs-monolithic-cloud-architecture',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  }
];

export const RecentBlogsSection = ({ data }) => {
  const title = data?.title || 'Our Recent Blogs';
  const description = data?.description || "Read through our latest blog posts that cover everything from technology trends to business insights. Expand your knowledge and stay ahead of the curve.";
  const buttonText = data?.buttonText || 'View All Blogs';
  const buttonLink = data?.buttonLink || '/about';

  const blogs = (data?.blogs && Array.isArray(data.blogs) && data.blogs.filter(b => b.isActive !== false).length > 0)
    ? data.blogs.filter(b => b.isActive !== false)
    : defaultBlogs;

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {blogs.map((blog, idx) => (
            <div
              key={blog.id || idx}
              className="bg-white rounded-[20px] overflow-hidden border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-left"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="h-[200px] w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src={blog.image || defaultBlogs[idx % defaultBlogs.length].image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {blog.date}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-[18px] font-[800] text-slate-900 leading-snug group-hover:text-[#006B8F] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed line-clamp-3">
                    {blog.desc || blog.description}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  to={`/company/${blog.slug || 'insights'}`}
                  className="inline-flex items-center text-[13px] font-[800] text-[#006B8F] hover:text-[#005578] space-x-1 group/btn"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom CTA */}
        <div className="text-center">
          <Link
            to={buttonLink}
            className="inline-block px-10 py-3 rounded-lg bg-[#006B8F] text-white font-[800] text-sm hover:bg-[#005578] transition-all shadow-md font-sans hover:scale-105 active:scale-95"
          >
            {buttonText}
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default RecentBlogsSection;
