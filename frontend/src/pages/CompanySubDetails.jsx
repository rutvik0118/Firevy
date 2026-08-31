import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import CTASection from '../components/home/CTASection';
import {
  Users, Award, Calendar, BookOpen, Heart, ShieldCheck, CheckCircle2,
  ArrowRight, FileText, Mic, Globe, Sparkles, MessageSquare, Star, Quote, ChevronRight, Briefcase
} from 'lucide-react';

const companyPagesData = {
  'about-firevy': {
    title: 'About firevy.co',
    badge: 'COMPANY PROFILE',
    subtitle: 'Building Scalable Software Solutions For Global Enterprises & High-Growth Startups.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Our Vision & Core Mission',
        text: 'At firevy.co, we partner with world-class organizations to turn ambitious ideas into digital reality. With over 15 years of technical excellence, our multi-disciplinary engineering squads design resilient web, mobile, AI, and cloud architectures.'
      },
      {
        heading: 'Global Delivery Excellence',
        text: 'Operating across San Francisco, India, Canada, and the UK, our teams follow strict SOC2 compliance standards and 2-week agile sprint cadences to deliver predictable value.'
      }
    ],
    highlights: [
      '15+ Years of Engineering Mastery',
      '500+ Digital Products Shipped Globally',
      '99.4% Client Retention & Satisfaction',
      'Full Stack Capability Across React, Node, AI & Cloud'
    ]
  },
  'ceo-message': {
    title: 'CEO Message & Vision',
    badge: 'LEADERSHIP INSIGHT',
    subtitle: 'A Message From Our Chief Executive Officer on Engineering Trust and Innovation.',
    icon: Quote,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Pioneering The Future Of Software Engineering',
        text: 'Welcome to firevy.co. When we founded this company, our goal was simple: to bring technical rigor and genuine client centricity to software engineering. Technology is best when it brings people together and solves genuine human problems.'
      },
      {
        heading: 'Our Commitment To Quality & Transparency',
        text: 'Every project we build is backed by our zero-compromise quality guarantee. We communicate openly, ship code frequently, and treat your business goals as our own.'
      }
    ],
    highlights: [
      'Focus on long-term client partnerships',
      'Investing in cutting-edge AI and RAG architectures',
      'Building sustainable, high-impact digital experiences'
    ]
  },
  'our-team': {
    title: 'Our Team & Leadership',
    badge: 'ENGINEERING TALENT',
    subtitle: 'Meet the Architects, Developers, and Visionaries Behind firevy.co.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Top 1% Senior Engineers',
        text: 'Our team comprises over 250 senior software developers, solution architects, AI researchers, and UI/UX designers who bring extensive domain expertise in FinTech, Healthcare, EdTech, and SaaS.'
      }
    ],
    highlights: [
      'Rigorous top 1% developer vetting process',
      'Continuous learning & tech certification programs',
      'Cross-functional squads aligned by timezone'
    ]
  },
  'events-activities': {
    title: 'Events & Company Activities',
    badge: 'CULTURE & COMMUNITY',
    subtitle: 'Hackathons, Tech Summits, and Team Outings at firevy.co.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Innovating Together',
        text: 'We host quarterly AI Hackathons, quarterly tech summits, and regular open-source contribution weekends where our engineering teams build prototypes for next-gen technologies.'
      }
    ],
    highlights: [
      'Annual Global Tech Conference',
      'Quarterly Hackathons & Demo Days',
      'Community Tech Meetups & Developer Workshops'
    ]
  },
  'brochure': {
    title: 'Company Brochure & Media Assets',
    badge: 'DOWNLOAD RESOURCES',
    subtitle: 'Download our official company profile, solution decks, and enterprise case studies.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Enterprise Solutions Blueprint',
        text: 'Explore our complete suite of software engineering services, engagement models, security compliances, and client case studies in our comprehensive 2026 corporate brochure.'
      }
    ],
    highlights: [
      'Official firevy.co Corporate Deck (PDF)',
      'Security & ISO Compliance Certificates',
      'Industry Vertical Case Study Overviews'
    ]
  },
  'why-choose-us': {
    title: 'Why Choose firevy.co',
    badge: 'OUR ADVANTAGE',
    subtitle: 'Why Fortune 500 Leaders & High-Growth Startups Trust Us With Their Core Software.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Unmatched Technical Precision',
        text: 'We do not cut corners. From clean microservice architectures to sub-second page load optimizations, our codebases are built for scale and longevity.'
      }
    ],
    highlights: [
      '100% On-Time Delivery Guarantee',
      'Full Source Code Ownership & IP Protection',
      'Dedicated Agile Sprint Management',
      '24/7 SLA Cloud Support & Operations'
    ]
  },
  'great-place-to-work': {
    title: 'Great Place To Work',
    badge: 'CAREERS & CULTURE',
    subtitle: 'Empowering Talent, Fostering Growth, and Building Great Futures Together.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'People-First Culture',
        text: 'Recognized as a Great Place To Work®, firevy.co fosters an environment of continuous learning, remote flexibility, mental wellness, and career acceleration.'
      }
    ],
    highlights: [
      'Competitive compensation & wellness perks',
      'Flexible remote & hybrid work schedules',
      'Generous learning & conference budgets'
    ]
  },
  'women-empowerment': {
    title: 'Women Empowerment & Diversity',
    badge: 'DIVERSITY & INCLUSION',
    subtitle: 'Championing Women in Tech & Building Inclusive Engineering Squads.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Closing the Gender Gap in Technology',
        text: 'We are committed to building a diverse technical workforce. Over 40% of our leadership roles and engineering teams are spearheaded by women in technology.'
      }
    ],
    highlights: [
      'Women in Engineering Leadership Programs',
      'Mentorship & Career Upskilling Workshops',
      'Equal Pay & Equal Opportunity Guarantees'
    ]
  },
  'awards-recognition': {
    title: 'Awards & Recognition',
    badge: 'GLOBAL ACCREDITATIONS',
    subtitle: 'Celebrated by Clutch, GoodFirms, GCCI, and International Tech Bodies.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Recognized Industry Leaders',
        text: 'Our commitment to software quality and innovation has earned us top rankings across global industry platforms, including Clutch Top Mobile App Developers and GoodFirms Top Web Agencies.'
      }
    ],
    highlights: [
      'Top Software Development Firm - Clutch',
      'Top Web & Mobile App Agency - GoodFirms',
      'ISO 9001:2015 Quality Certified',
      'GESIA & GCCI Corporate Excellence Winner'
    ]
  },
  'blog': {
    title: 'Blog & Technical Insights',
    badge: 'ENGINEERING BLOG',
    subtitle: 'In-Depth Articles on React, Node.js, AI RAG Architecture, and Cloud Engineering.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Stay Ahead of the Tech Curve',
        text: 'Read real-world architecture teardowns, microservice benchmarks, and generative AI implementation guides written by firevy.co senior engineers.'
      }
    ],
    highlights: [
      'Building Production RAG Pipelines with Vector DBs',
      'Next.js 14 Server Actions vs API Routes Benchmark',
      'Microservice Migration: Lessons from 10M+ Daily Queries'
    ]
  },
  'csr': {
    title: 'Corporate Social Responsibility (CSR)',
    badge: 'SOCIAL IMPACT',
    subtitle: 'Giving Back to Local Communities and Building Sustainable Technology.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Tech For Good',
        text: 'At firevy.co, we dedicate 2% of our annual revenue and 1,000+ developer hours to building free software solutions for non-profits and educational initiatives.'
      }
    ],
    highlights: [
      'Pro-bono software engineering for non-profits',
      'Digital literacy workshops in underserved areas',
      'Green cloud hosting & eco-friendly IT initiatives'
    ]
  },
  'podcast': {
    title: 'Tech Podcasts & Interviews',
    badge: 'AUDIO & PODCASTS',
    subtitle: 'Conversations with Tech Leaders, CTOs, and Product Innovators.',
    icon: Mic,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'The Engineering Scalability Podcast',
        text: 'Tune in to our bi-weekly podcast where our CTO and guest industry experts unpack the future of AI, cloud security, and high-performance software architecture.'
      }
    ],
    highlights: [
      'Episode 1: Architecting Autonomous AI Agents',
      'Episode 2: Modernizing Legacy Monoliths Without Downtime',
      'Episode 3: Scaling Mobile Apps to 5M Active Users'
    ]
  },
  'delivery-models': {
    title: 'Delivery & Engineering Models',
    badge: 'SPRINT EXECUTION',
    subtitle: 'Tailored Delivery Frameworks Designed For Speed, Flexibility, and Reliability.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Agile Delivery Framework',
        text: 'Choose between Turnkey Fixed Price, Dedicated Engineering Squads, or Time & Material sprint models based on your project requirements.'
      }
    ],
    highlights: [
      'Turnkey Fixed Price Delivery',
      'Dedicated Engineering Squads',
      'Time & Material Agile Sprints'
    ]
  },
  'engagement-models': {
    title: 'Engagement Models',
    badge: 'FLEXIBLE PARTNERSHIPS',
    subtitle: 'Seamless Resource Augmentation and Dedicated Team Integration.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Custom Scalable Teams',
        text: 'Whether you need 2 React developers or a full 15-person cross-functional squad, our engagement models scale dynamically with your needs.'
      }
    ],
    highlights: [
      'Staff Augmentation (Plug & Play Developers)',
      'Dedicated Product Development Centers',
      'Managed Project Delivery'
    ]
  },
  'development-methodology': {
    title: 'Development Methodology',
    badge: 'AGILE PROCESS',
    subtitle: 'Zero-Friction Sprints, Continuous Delivery, and Strict Quality Gates.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: '14-Day Sprint Cadence',
        text: 'We operate on transparent 2-week sprint cycles. Every sprint concludes with a live demo, working code deployment, and clear task backlogs.'
      }
    ],
    highlights: [
      'Daily Standups & Slack Synchronization',
      'Automated CI/CD Testing Gates',
      'Jira Task Transparency & Burn-Down Charts'
    ]
  },
  'client-testimonials': {
    title: 'Client Testimonials & Case Studies',
    badge: 'CLIENT FEEDBACK',
    subtitle: 'Hear Directly From CTOs and Product Leaders Who Partnered With firevy.co.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Trusted By Industry Leaders',
        text: 'Our clients consistently rate us 4.9/5 stars for technical excellence, speed of delivery, and proactive communication.'
      }
    ],
    highlights: [
      '500+ Verified 5-Star Reviews',
      '99% SLA Compliance on Project Deliverables',
      'Client Retention Exceeding 94%'
    ]
  },
  'clutch-testimonial': {
    title: 'Verified Clutch Reviews',
    badge: 'VERIFIED REVIEWS',
    subtitle: 'Read Independent 5-Star Ratings & Audio Case Studies Verified by Clutch.co.',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: '320+ Verified Clutch Reviews',
        text: 'Clutch independently interviews our clients to verify project scope, code quality, and delivery speed. Explore our 4.9/5 overall rating.'
      }
    ],
    highlights: [
      '320+ Client Interviews Conducted by Clutch',
      '5.0 Quality & Communication Score',
      'Top B2B Tech Agency Award Winner'
    ]
  }
};

export const CompanySubDetails = () => {
  const { slug } = useParams();
  const normalizedSlug = slug ? slug.toLowerCase() : 'about-firevy';
  const pageData = companyPagesData[normalizedSlug] || {
    title: normalizedSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    badge: 'COMPANY DETAIL',
    subtitle: `Learn more about ${normalizedSlug.replace(/-/g, ' ')} at firevy.co.`,
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Engineering Excellence & Leadership',
        text: `Explore our commitment to delivery, transparent engineering, and innovative software solutions designed for global leaders.`
      }
    ],
    highlights: [
      'Enterprise SLA & SOC2 Ready Security',
      'Dedicated Senior Engineering Squads',
      'Global Delivery Infrastructure'
    ]
  };

  const IconComp = pageData.icon || Globe;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [normalizedSlug]);

  return (
    <>
      <SEO
        title={`${pageData.title} | firevy.co`}
        description={pageData.subtitle}
        canonical={`/company/${normalizedSlug}`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <IconComp className="w-4 h-4 text-cyan-300" />
                <span className="uppercase tracking-widest">{pageData.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {pageData.title}
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed font-normal">
                {pageData.subtitle}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-[#004A75] font-extrabold text-base hover:bg-slate-100 transition-all shadow-xl group"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-cyan-500/20 border border-cyan-300/40 text-cyan-200 font-bold text-base hover:bg-cyan-500/30 transition-all"
                >
                  About Company
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-white/10 backdrop-blur-md">
                <img
                  src={pageData.image}
                  alt={pageData.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-slate-50 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Content Details */}
            <div className="lg:col-span-8 space-y-10">
              {pageData.content.map((block, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h3 className="text-2xl font-extrabold text-slate-900">{block.heading}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">{block.text}</p>
                </div>
              ))}

              {/* Highlights List */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-[#005F96]">Key Highlights & Standards</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pageData.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50/60 border border-blue-100">
                      <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-[#005F96] to-[#003B60] text-white shadow-xl space-y-6 text-center">
                <h4 className="text-2xl font-extrabold">Ready to Partner With firevy.co?</h4>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Let us help you build scalable digital experiences with our senior engineering squads.
                </p>
                <Link
                  to="/contact"
                  className="block w-full py-3.5 rounded-lg bg-white text-[#004A75] font-extrabold text-sm hover:bg-slate-100 transition-colors shadow-md"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default CompanySubDetails;
