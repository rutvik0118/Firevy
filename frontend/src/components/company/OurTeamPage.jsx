import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Linkedin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import SEO from '../common/SEO';
import WorkTogetherNewsletterSection from '../home/WorkTogetherNewsletterSection';
import { getMediaUrl } from '../../utils/mediaUrl';

export const OurTeamPage = ({ dynamicSection, pageKey = 'our-team' }) => {
  // 1. Hero Content
  const heroHeading = dynamicSection?.content?.heroHeading || dynamicSection?.title || 'Our Team';
  const heroSubtitle =
    dynamicSection?.content?.heroSubtitle ||
    dynamicSection?.subtitle ||
    'Meet the team of innovative, driven and passionate individuals. We cultivate the diverse talents of our team and leverage their extraordinary perspectives and innovative ideas to make firevy.co the industry leader.';
  const heroButtonText = dynamicSection?.content?.heroButtonText || dynamicSection?.ctaText || 'Connect Now';
  const heroButtonLink = dynamicSection?.content?.heroButtonLink || dynamicSection?.ctaLink || '/contact';

  // 2. Management Team
  const managementHeading = dynamicSection?.content?.managementHeading || 'Management Team';

  // 2.1 CEO Message
  const ceo = {
    image:
      dynamicSection?.content?.ceo?.image ||
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    name: dynamicSection?.content?.ceo?.name || 'Kumaril Patel',
    role: dynamicSection?.content?.ceo?.role || 'CEO & Co-Founder',
    linkedin: dynamicSection?.content?.ceo?.linkedin || 'https://linkedin.com',
    messageHeading: dynamicSection?.content?.ceo?.messageHeading || 'CEO Message',
    paragraph1:
      dynamicSection?.content?.ceo?.paragraph1 ||
      "Welcome to firevy.co— a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership is not just about steering the ship but about inspiring every hand on deck to innovate, dream, and achieve. Our success stems from a shared commitment to excellence, where each solution is crafted with purpose and passion. At firevy.co, we don't merely adapt to change; we define it. By blending cutting-edge technology with human ingenuity, we create software solutions that empower businesses and individuals alike. This is not just a company; it's a vision brought to life by a team that dares to dream bigger every day.",
    paragraph2:
      dynamicSection?.content?.ceo?.paragraph2 ||
      'Never stop believing in the power of technology that can change the world. One Revolutionary idea... One brilliant Invention can enlighten billions of the Human lives. Nothing is Impossible when you Dream it & believe it you can Do it. Together, let us embrace the challenges and opportunities. Thank you for trusting us to be your partner in progress. Together, we are not just building software —we are creating a legacy of innovation and impact.'
  };

  // 2.2 CTO Message
  const cto = {
    image:
      dynamicSection?.content?.cto?.image ||
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    name: dynamicSection?.content?.cto?.name || 'Mr. Rajendra Patel',
    role: dynamicSection?.content?.cto?.role || 'CTO & Co-Founder',
    linkedin: dynamicSection?.content?.cto?.linkedin || 'https://linkedin.com',
    messageHeading: dynamicSection?.content?.cto?.messageHeading || 'CTO Message',
    paragraph1:
      dynamicSection?.content?.cto?.paragraph1 ||
      "At firevy.co, technology is not just a means to an end—it's the essence of our identity and the foundation of our future. As the CTO, my mission is to push the boundaries of innovation, ensuring that every line of code we write and every solution we deliver drives meaningful impact. Our approach is simple yet profound: embrace challenges as opportunities and ideas as catalysts for change. By staying at the forefront of technological advancements and fostering a culture of continuous learning, we empower businesses to thrive in a dynamic digital landscape. Crafting success stories from startups to Fortune 500 stalwarts.",
    paragraph2:
      dynamicSection?.content?.cto?.paragraph2 ||
      'Our dedication to user-centric design and cutting-edge solutions has garnered prestigious accolades. Innovation is a journey, and at firevy.co, we walk that path with purpose and passion, transforming visions into reality and possibilities into achievements. Thank you for trusting us as your technology partner. Together, we are building a smarter, more connected happy world.'
  };

  // 2.3 Business Heads
  const defaultBusinessHeads = [
    {
      name: 'Nirav Patel',
      role: 'Business Head - Product',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Parth Patel',
      role: 'Business Head - Service',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    }
  ];
  const businessHeads =
    Array.isArray(dynamicSection?.content?.businessHeads) && dynamicSection.content.businessHeads.length > 0
      ? dynamicSection.content.businessHeads
      : defaultBusinessHeads;

  // 3. Leadership Team
  const leadershipHeading = dynamicSection?.content?.leadershipHeading || 'Leadership Team';
  const defaultLeadershipTeam = [
    { name: 'Ankit Gokani', role: 'HR Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Ankit Morasiya', role: 'QA Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Ashish Dubey', role: 'MERN Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80' },
    { name: 'Galav Shukla', role: 'Sr. BDR - Service', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
    { name: 'Hitarth Joshi', role: 'Module Lead - Mobile', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80' },
    { name: 'Jaymin Prajapati', role: 'SEO Lead', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80' },
    { name: 'Mayur Trivedi', role: 'PHP Lead', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80' },
    { name: 'Mehul Gajjar', role: '.NET Lead', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
    { name: 'Mitesh Aroda', role: 'Vidyalaya Tech Support Lead', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80' },
    { name: 'Prashant Patel', role: 'UI/UX Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
    { name: 'Sahil Detroja', role: 'Web Development Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Satish Prajapati', role: '.NET Lead', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80' },
    { name: 'Shrenik Shah', role: 'Mobile Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
    { name: 'Umang Barot', role: 'Project Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80' },
    { name: 'Vipul Patel', role: '.NET Lead', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80' }
  ];
  const leadershipTeam =
    Array.isArray(dynamicSection?.content?.leadershipTeam) && dynamicSection.content.leadershipTeam.length > 0
      ? dynamicSection.content.leadershipTeam
      : defaultLeadershipTeam;

  // 4. Teamwork Mosaic
  const teamworkHeading = dynamicSection?.content?.teamworkHeading || 'Teamwork Is The Only Way We Work';
  const teamworkButtonText = dynamicSection?.content?.teamworkButtonText || 'Join Our Team';
  const teamworkButtonLink = dynamicSection?.content?.teamworkButtonLink || '/careers';

  // 5. What Our Firevian Says (Testimonial)
  const firevianSay = {
    avatar:
      dynamicSection?.content?.firevianSay?.avatar ||
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    name: dynamicSection?.content?.firevianSay?.name || 'Vipul Patel',
    role: dynamicSection?.content?.firevianSay?.role || 'Team Lead',
    quote:
      dynamicSection?.content?.firevianSay?.quote ||
      "I am proud to be working for a company like firevy.co that values honesty and a fair attitude to all which has also contributed to a very valuable and delightful experience. The work culture and the integrity of the company's management are remarkable. In firevy.co, we get all the freedom to think out-of-the-box and take complete ownership of the work we do. Being a client-focused company, firevy.co makes us understand the clients' requirements easily so that the work can be coordinated effectively. There are always opportunities to learn and no limitations to scale new heights in this organization."
  };

  // 6. Learning & Growth
  const learningGrowth = {
    heading: dynamicSection?.content?.learningGrowth?.heading || 'Learning & Growth',
    p1:
      dynamicSection?.content?.learningGrowth?.p1 ||
      'Learning and growth go hand-in-hand fundamentally, and so is the story at firevy.co. We offer ample amounts of training to each individual and help them to improve their skills with subject matter specialists from the industry and within the company. We always believe in continuous learning culture so it gives opportunity to achieve better be it, Business interactions, Design Thinking or Technology.',
    p2:
      dynamicSection?.content?.learningGrowth?.p2 ||
      'We want our team to grow and develop at firevy.co, meet your career goals and make the most of your potential, all while embracing your own exceptional talents.',
    p3:
      dynamicSection?.content?.learningGrowth?.p3 ||
      "That's why we are committed to helping you drive your career in a dynamic environment. Across all levels of our organization, we are nurturing a culture of trust and dialogue. We offer tools to support this culture such as 360 feedback, online coaching and a mutual mentoring program.",
    buttonText: dynamicSection?.content?.learningGrowth?.buttonText || 'Join Our Team',
    buttonLink: dynamicSection?.content?.learningGrowth?.buttonLink || '/careers',
    photo1:
      dynamicSection?.content?.learningGrowth?.photo1 ||
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
    photo2:
      dynamicSection?.content?.learningGrowth?.photo2 ||
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
    photo3:
      dynamicSection?.content?.learningGrowth?.photo3 ||
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80'
  };

  // 7. Team @ firevy.co (Life at Firevy)
  const lifeAtFirevy = {
    heading: dynamicSection?.content?.lifeAtFirevy?.heading || 'Team @ firevy.co',
    description:
      dynamicSection?.content?.lifeAtFirevy?.description ||
      'At firevy.co, we have a friendly, inspiring and fun loving yet professional environment. We celebrate all the good moments in terms of our growth and accomplishments. Our closeness always makes us feel strengthened and energetic to improve our actions, to go stress-free, and to work untiringly as a team.',
    photo1:
      dynamicSection?.content?.lifeAtFirevy?.photo1 ||
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    photo2:
      dynamicSection?.content?.lifeAtFirevy?.photo2 ||
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    photo3:
      dynamicSection?.content?.lifeAtFirevy?.photo3 ||
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    photo4:
      dynamicSection?.content?.lifeAtFirevy?.photo4 ||
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  };

  // 8. Ready To Take The Challenge CTA
  const cta = {
    title:
      dynamicSection?.content?.cta?.title ||
      dynamicSection?.cta?.title ||
      'Ready To Take The Challenge?',
    subtitle:
      dynamicSection?.content?.cta?.subtitle ||
      dynamicSection?.cta?.subtitle ||
      'Join our team of passionate and bright technologists. Work in a collaborative environment which will provide you ample growth opportunities and shape the leader in you.',
    buttonText:
      dynamicSection?.content?.cta?.buttonText ||
      dynamicSection?.cta?.buttonText ||
      'Join Our Team',
    buttonLink:
      dynamicSection?.content?.cta?.buttonLink ||
      dynamicSection?.cta?.buttonLink ||
      '/careers'
  };

  // 9. SEO
  const pageTitle = dynamicSection?.seo?.metaTitle || 'Our Team | Innovative & Passionate Minds | firevy.co';
  const pageDescription =
    dynamicSection?.seo?.metaDescription ||
    'Meet the team of innovative, driven and passionate individuals at firevy.co. We cultivate diverse talents to make firevy.co the industry leader.';

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`/company/${pageKey}`}
      />

      {/* 1. HERO SECTION: "Our Team" (Exact Reference Match) */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden text-left font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans page-hero-title">
                {heroHeading}
              </h1>
              <p className="text-[15px] text-slate-600 leading-relaxed font-[400] font-sans max-w-lg page-hero-desc">
                {heroSubtitle}
              </p>
              <div className="pt-2">
                <Link
                  to={heroButtonLink}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                >
                  <span>{heroButtonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right 3D Isometric Team Illustration */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-[500px] h-[340px] flex items-center justify-center">
                <svg viewBox="0 0 500 360" className="w-full h-full drop-shadow-xl" fill="none">
                  <polygon points="250,90 440,190 250,290 60,190" fill="#E0F2FE" />
                  <polygon points="250,290 440,190 440,205 250,305 60,205 60,190" fill="#BAE6FD" />
                  <rect x="220" y="150" width="60" height="35" rx="3" fill="#0284C7" transform="rotate(-15 250 167)" />
                  <rect x="225" y="155" width="50" height="25" rx="2" fill="#FFFFFF" transform="rotate(-15 250 167)" />
                  <rect x="340" y="50" width="90" height="65" rx="4" fill="#FFFFFF" stroke="#006B8F" strokeWidth="3" />
                  <line x1="355" y1="70" x2="415" y2="70" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="355" y1="85" x2="395" y2="85" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                  <line x1="355" y1="100" x2="405" y2="100" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />

                  {/* Team Characters */}
                  <circle cx="150" cy="110" r="14" fill="#FED7AA" />
                  <path d="M135 125 C135 120 165 120 165 125 L168 155 L132 155 Z" fill="#0284C7" />
                  <polygon points="125,145 175,145 165,185 135,185" fill="#3B82F6" opacity="0.4" />

                  <circle cx="360" cy="110" r="14" fill="#FED7AA" />
                  <path d="M345 125 C345 120 375 120 375 125 L378 155 L342 155 Z" fill="#10B981" />

                  <circle cx="130" cy="230" r="14" fill="#FED7AA" />
                  <path d="M115 245 C115 240 145 240 145 245 L148 285 L112 285 Z" fill="#F59E0B" />

                  <circle cx="370" cy="230" r="14" fill="#FED7AA" />
                  <path d="M355 245 C355 240 385 240 385 245 L388 285 L352 285 Z" fill="#EC4899" />

                  <circle cx="250" cy="260" r="15" fill="#FED7AA" />
                  <path d="M232 277 C232 272 268 272 268 277 L272 320 L228 320 Z" fill="#006B8F" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Management Team" SECTION */}
      <section className="py-20 bg-white border-t border-slate-100 text-left font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              {managementHeading}
            </h2>
          </div>

          {/* CEO Message Card */}
          <div className="bg-[#F0F7FA] rounded-[24px] p-8 sm:p-10 border border-blue-100/70 shadow-sm max-w-5xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Photo & Name */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="w-[180px] h-[210px] rounded-[16px] overflow-hidden shadow-md bg-slate-200 mb-3 border border-slate-200">
                  <img
                    src={getMediaUrl(ceo.image)}
                    alt={ceo.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
                <h3 className="text-[20px] font-[800] text-slate-900 font-sans leading-tight">
                  {ceo.name}
                </h3>
                <p className="text-[13.5px] font-[700] text-slate-600 font-sans mb-2">
                  {ceo.role}
                </p>
                {ceo.linkedin && (
                  <a
                    href={ceo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center transition-colors shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                  </a>
                )}
              </div>

              {/* CEO Letter Text */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <svg viewBox="0 0 48 36" className="w-8 h-6 fill-[#006B8F] shrink-0" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C13.56 28.3 9.4 32 4 32v4c8.84 0 16-7.16 16-16V0H12zm28 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C41.56 28.3 37.4 32 32 32v4c8.84 0 16-7.16 16-16V0H40z" />
                  </svg>
                  <h4 className="text-[22px] font-[800] text-slate-900 font-sans tracking-tight">
                    {ceo.messageHeading}
                  </h4>
                  <div className="h-[2px] w-12 bg-slate-900/80 rounded-full" />
                </div>

                <div className="space-y-3 text-[14.5px] text-slate-700 leading-relaxed font-[400]">
                  <p>{ceo.paragraph1}</p>
                  {ceo.paragraph2 && <p>{ceo.paragraph2}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* CTO Message Card */}
          <div className="bg-[#F0F7FA] rounded-[24px] p-8 sm:p-10 border border-blue-100/70 shadow-sm max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* CTO Letter Text */}
              <div className="md:col-span-8 space-y-4 order-2 md:order-1">
                <div className="flex items-center space-x-3">
                  <svg viewBox="0 0 48 36" className="w-8 h-6 fill-[#006B8F] shrink-0" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C13.56 28.3 9.4 32 4 32v4c8.84 0 16-7.16 16-16V0H12zm28 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C41.56 28.3 37.4 32 32 32v4c8.84 0 16-7.16 16-16V0H40z" />
                  </svg>
                  <h4 className="text-[22px] font-[800] text-slate-900 font-sans tracking-tight">
                    {cto.messageHeading}
                  </h4>
                  <div className="h-[2px] w-12 bg-slate-900/80 rounded-full" />
                </div>

                <div className="space-y-3 text-[14.5px] text-slate-700 leading-relaxed font-[400]">
                  <p>{cto.paragraph1}</p>
                  {cto.paragraph2 && <p>{cto.paragraph2}</p>}
                </div>
              </div>

              {/* Photo & Name */}
              <div className="md:col-span-4 flex flex-col items-center text-center order-1 md:order-2">
                <div className="w-[180px] h-[210px] rounded-[16px] overflow-hidden shadow-md bg-slate-200 mb-3 border border-slate-200">
                  <img
                    src={getMediaUrl(cto.image)}
                    alt={cto.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
                <h3 className="text-[20px] font-[800] text-slate-900 font-sans leading-tight">
                  {cto.name}
                </h3>
                <p className="text-[13.5px] font-[700] text-slate-600 font-sans mb-2">
                  {cto.role}
                </p>
                {cto.linkedin && (
                  <a
                    href={cto.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center transition-colors shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* 2 Business Heads Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {businessHeads.map((head, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-[240px] sm:w-[260px] h-[260px] sm:h-[280px] rounded-[16px] overflow-hidden shadow-md border border-slate-200 bg-slate-200 mb-3.5">
                  <img
                    src={getMediaUrl(head.image)}
                    alt={head.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
                <h3 className="text-[20px] font-[800] text-slate-900 font-sans leading-tight">
                  {head.name}
                </h3>
                <p className="text-[14px] font-[600] text-slate-600 font-sans mt-0.5">
                  {head.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "Leadership Team" SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200 text-slate-900 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              {leadershipHeading}
            </h2>
          </div>

          {/* Team Leads Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-7">
            {leadershipTeam.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-[150px] sm:w-[165px] h-[170px] sm:h-[185px] rounded-[14px] overflow-hidden shadow-sm border border-slate-200 bg-slate-200 mb-3">
                  <img
                    src={getMediaUrl(member.image)}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80';
                    }}
                  />
                </div>
                <h4 className="text-[15.5px] font-[800] text-slate-900 font-sans leading-tight">
                  {member.name}
                </h4>
                <p className="text-[12.5px] font-[600] text-slate-500 font-sans mt-0.5">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Teamwork Is The Only Way We Work" (Full-Bleed Mosaic Wall) */}
      <section className="pt-20 pb-12 bg-white border-t border-slate-100 text-center font-sans overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 mb-10">
          <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
            {teamworkHeading}
          </h2>
        </div>

        {/* Full-width Edge-to-Edge Blue Duotone Team Faces Wall (Exact 24-Column x 6-Row Complete 144 Photos Match) */}
        <div className="w-full relative overflow-hidden bg-[#388BA8]">
          {dynamicSection?.content?.teamworkBannerImage ? (
            <div className="relative w-full overflow-hidden max-h-[380px] sm:max-h-[460px]">
              <img
                src={getMediaUrl(dynamicSection.content.teamworkBannerImage)}
                alt={teamworkHeading}
                className="w-full h-full object-cover object-center grayscale contrast-125 brightness-95 opacity-85 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-[#35829D]/20 pointer-events-none" />
            </div>
          ) : (
            <div
              className="grid gap-[2px] opacity-95 grid-cols-[repeat(12,minmax(0,1fr))] sm:grid-cols-[repeat(18,minmax(0,1fr))] lg:grid-cols-[repeat(24,minmax(0,1fr))]"
            >
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
              ].concat(
                Array.from({ length: 120 }, (_, i) => [
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80'
                ][i % 12])
              ).map((src, i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden bg-[#2D7392]">
                  <img
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-95 opacity-80 mix-blend-multiply hover:opacity-100 hover:grayscale-0 hover:mix-blend-normal transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="absolute inset-0 bg-[#35829D]/20 pointer-events-none" />
        </div>

        <div className="mt-8">
          <Link
            to={teamworkButtonLink}
            className="inline-flex items-center justify-center px-8 py-2.5 rounded-[4px] bg-[#006085] hover:bg-[#004d6b] text-white font-[700] text-[14px] transition-all shadow-sm font-sans"
          >
            {teamworkButtonText}
          </Link>
        </div>
      </section>

      {/* 5. "What Our Firevian Says" (Testimonial) */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200 text-slate-900 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              What Our Firevian Says
            </h2>
          </div>

          <div className="bg-white rounded-[24px] p-8 sm:p-12 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-5xl mx-auto relative flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex flex-col items-center shrink-0 text-center">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-md bg-slate-200 border-4 border-white mb-3 ring-4 ring-cyan-100">
                <img
                  src={getMediaUrl(firevianSay.avatar)}
                  alt={firevianSay.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>
              <h4 className="text-[19px] font-[800] text-slate-900 font-sans leading-tight">
                {firevianSay.name}
              </h4>
              <p className="text-[13.5px] font-[600] text-slate-500 font-sans">
                {firevianSay.role}
              </p>
            </div>

            <div className="flex-1 space-y-4 text-left">
              <svg viewBox="0 0 48 36" className="w-10 h-7 fill-[#006B8F] shrink-0 select-none" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C13.56 28.3 9.4 32 4 32v4c8.84 0 16-7.16 16-16V0H12zm28 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C41.56 28.3 37.4 32 32 32v4c8.84 0 16-7.16 16-16V0H40z" />
              </svg>

              <p className="text-[15px] sm:text-[15.5px] text-slate-700 leading-[1.8] font-[400] font-sans">
                {firevianSay.quote}
              </p>

              <div className="flex justify-end">
                <svg viewBox="0 0 48 36" className="w-10 h-7 fill-[#006B8F] rotate-180 shrink-0 select-none" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C13.56 28.3 9.4 32 4 32v4c8.84 0 16-7.16 16-16V0H12zm28 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C41.56 28.3 37.4 32 32 32v4c8.84 0 16-7.16 16-16V0H40z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Learning & Growth" SECTION */}
      <section className="py-20 bg-white border-t border-slate-100 text-left font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                {learningGrowth.heading}
              </h2>
              <div className="space-y-4 text-[15px] sm:text-[15.5px] text-slate-600 leading-[1.8] font-[400] font-sans">
                <p>{learningGrowth.p1}</p>
                {learningGrowth.p2 && <p>{learningGrowth.p2}</p>}
                {learningGrowth.p3 && <p>{learningGrowth.p3}</p>}
              </div>
              <div className="pt-2">
                <Link
                  to={learningGrowth.buttonLink}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans"
                >
                  {learningGrowth.buttonText}
                </Link>
              </div>
            </div>

            {/* Right Photos Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-center">
              <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[360px] bg-slate-100">
                <img
                  src={getMediaUrl(learningGrowth.photo1)}
                  alt="Ceremony 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80';
                  }}
                />
              </div>
              <div className="space-y-4">
                <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[172px] bg-slate-100">
                  <img
                    src={getMediaUrl(learningGrowth.photo2)}
                    alt="Ceremony 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80';
                    }}
                  />
                </div>
                <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[172px] bg-slate-100">
                  <img
                    src={getMediaUrl(learningGrowth.photo3)}
                    alt="Ceremony 3"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "Team @ firevy.co" SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200 text-slate-900 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              {lifeAtFirevy.heading}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
              {lifeAtFirevy.description}
            </p>
          </div>

          {/* 2x2 Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-[18px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100">
              <img
                src={getMediaUrl(lifeAtFirevy.photo1)}
                alt="Culture Photo 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="rounded-[18px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100">
              <img
                src={getMediaUrl(lifeAtFirevy.photo2)}
                alt="Culture Photo 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="rounded-[18px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100">
              <img
                src={getMediaUrl(lifeAtFirevy.photo3)}
                alt="Culture Photo 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="rounded-[18px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100">
              <img
                src={getMediaUrl(lifeAtFirevy.photo4)}
                alt="Culture Photo 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. "Ready To Take The Challenge?" CTA BANNER */}
      <section className="py-16 bg-[#005478] text-white text-center font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 space-y-4">
          <h2 className="text-[34px] sm:text-[42px] font-[900] text-white tracking-tight leading-tight">
            {cta.title}
          </h2>
          <p className="text-[15.5px] sm:text-[16.5px] text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {cta.subtitle}
          </p>
          <div className="pt-2">
            <Link
              to={cta.buttonLink}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-white text-[#005478] hover:bg-slate-100 font-[800] text-[15px] transition-all shadow-lg"
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* 9. LET'S WORK TOGETHER & NEWSLETTER SUBSCRIPTION BANNER */}
      <WorkTogetherNewsletterSection hideBanner={true} />
    </div>
  );
};

export default OurTeamPage;
