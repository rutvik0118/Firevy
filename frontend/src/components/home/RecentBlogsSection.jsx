import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const RecentBlogsSection = () => {
  const blogs = [
    {
      headerBanner: 'AI in Mobile App Development',
      bannerGradient: 'from-blue-600 to-cyan-500',
      title: 'AI in Mobile App Development: Tools That Save Time and Money',
      date: 'Sept 01, 2026',
      desc: 'Explore top LLM SDKs, automated UI code generators, and predictive analytics tools revolutionizing modern iOS & Android engineering.',
      slug: 'ai-in-mobile-app-development'
    },
    {
      headerBanner: 'AI in Software Development',
      bannerGradient: 'from-cyan-600 to-teal-500',
      title: 'AI in Software Development: Scale Operations Faster with Code Assist',
      date: 'Aug 28, 2026',
      desc: 'How enterprise tech teams leverage AI pair programmers and automated unit test generation to double sprint velocity.',
      slug: 'ai-in-software-development'
    },
    {
      headerBanner: 'Why Startups Choose Sapphire',
      bannerGradient: 'from-purple-600 to-indigo-500',
      title: 'Why Startups Choose Sapphire Over TCS, Infosys, and Wipro',
      date: 'Aug 20, 2026',
      desc: 'Agile 2-week sprint iterations, direct access to senior architects, and 100% IP ownership vs legacy IT outsourcing models.',
      slug: 'why-startups-choose-sapphire'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-slate-900 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-[#006B8F]">
            Our Recent Blogs
          </h2>
          <p className="text-[18px] font-[400] text-slate-500 mt-2">
            Stay updated with expert engineering insights, software architecture trends, and tech strategy guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] overflow-hidden border border-slate-200 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              {/* Gradient Banner Header */}
              <div className={`p-6 bg-gradient-to-r ${blog.bannerGradient} text-white flex items-center justify-center text-center h-28`}>
                <h4 className="text-[18px] font-[600] tracking-tight leading-tight">
                  {blog.headerBanner}
                </h4>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#006B8F]" />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-[18px] font-[600] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-2 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-[15px] font-[400] text-slate-600 leading-relaxed">
                    {blog.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    to={`/services/${blog.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#006B8F] hover:text-cyan-600 group/link"
                  >
                    <span>Get more details</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
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

export default RecentBlogsSection;
