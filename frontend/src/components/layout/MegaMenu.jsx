import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X, ChevronRight, GraduationCap, BookOpen, HeartPulse, Sparkles, Calendar, Layers, ExternalLink } from 'lucide-react';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export const servicesCategories = [
  {
    id: 'mobile',
    label: 'Mobile App Development',
    col1: [
      'iWatch App Development',
      'Mobile App Development',
      'Cross Platform App Development',
      'iPad App Development Services',
      'Kotlin App Development',
      'Hybrid App Development',
      'Progressive Web App Development',
      'Personal Fitness App',
      'Used Car App Development',
      'Enneagram Test App',
      'Credit Card App Development'
    ],
    col2: [
      'Swift App Development',
      'IBeacon App Development',
      'Wearable App Development',
      'Native App Development',
      'Windows App Development',
      'Custom Mobile App Development',
      'B2B Mobile App Development',
      'Windows 11 App Development',
      'Ride Sharing App Development',
      'Visa Card App Development',
      'Wellness App Development'
    ]
  },
  {
    id: 'backend',
    label: 'Back End Development',
    col1: [
      'Symfony Development',
      'Django Development',
      'Laravel Development',
      'Lamp Development',
      'Python Development Services',
      'Golang Development Services'
    ],
    col2: [
      'Big Commerce Development',
      'MongoDB Development Services',
      'Phalcon Development Services',
      'Azure Web Services',
      'MySQL Development Company'
    ]
  },
  {
    id: 'ai',
    label: 'AI & ML Development',
    col1: [
      'Artificial Intelligence Development',
      'Machine Learning Development',
      'Chatbot Development',
      'Data Analytics Services',
      'Data Migration Services',
      'Business Intelligence Development'
    ],
    col2: [
      'IOT App Development',
      'Blockchain Development',
      'AI Ionic App Development',
      'Enterprise AI Development',
      'AI in Payments Industry'
    ]
  },
  {
    id: 'frontend',
    label: 'Front End Development',
    col1: [
      'C Sharp Development',
      'Frontend Development',
      'Meteor JS Development',
      'Typescript Development Services',
      'Next Js Development',
      'React JS Development'
    ],
    col2: [
      'CSR Web Development',
      'CSS Web Development',
      'Web Portal Development',
      'Web3 Development',
      'Progressive Web App'
    ]
  },
  {
    id: 'microsoft',
    label: 'Microsoft Development',
    col1: [
      'Microsoft Development',
      'ASP.NET Core Development',
      '.NET Application Development',
      'ASP.NET Development',
      'ASP.NET Migration Service',
      'Microsoft Dynamics 365 Consulting'
    ],
    col2: [
      'Kentico Development Services',
      'Dotnetnuke Development',
      'Power BI Consulting',
      'Windows 11 App Development',
      'Windows App Development'
    ]
  },
  {
    id: 'blockchain',
    label: 'Blockchain Development',
    col1: [
      'NFT Marketplace Development',
      'Smart Contracts Development',
      'Bitcoin Wallet Development',
      'Marketplace App Development'
    ],
    col2: [
      'Cryptocurrency Wallet Development',
      'Bullion Exchange App Development',
      'Digital Wayfinding Solutions',
      'Ethereum App Development'
    ]
  },
  {
    id: 'software',
    label: 'Software Development Service',
    col1: [
      'Product Development',
      'Software Development Service',
      'Digital Transformation Services',
      'Application Services',
      'Startup Consulting Services',
      'App Development Consulting',
      'Crm Development',
      'Prototype Development Services',
      'Offshore Software Development',
      'Invoice Generation Software',
      'Software Modernization Services'
    ],
    col2: [
      'Web Application Development',
      'Product Engineering Services',
      'IT Outsourcing',
      'Business Application Development',
      'It Consulting Services',
      'VB6 Migration Services',
      'Enterprise Mobility Services',
      'Full Stack Development',
      'Financial Software Development',
      'Travel Software Development',
      'Software Product Discovery'
    ]
  },
  {
    id: 'arvr',
    label: 'AR/VR Development',
    col1: [
      'Augmented Reality App Development',
      'Virtual Reality App Development',
      'Extended Reality Development'
    ],
    col2: [
      'Metaverse Development Company',
      'Digital Twin Solutions'
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    col1: [
      'Cloud Development',
      'Cloud Computing Service',
      'DevOps Development Services',
      'AWS Cloud Services',
      'Google Cloud Development'
    ],
    col2: [
      'Cloud Foundry Software Development',
      'Cloud Cost Optimization Software',
      'Cloud Based Storage Services',
      'Cloud Analytics Software Development'
    ]
  },
  {
    id: 'other',
    label: 'Other Services',
    col1: [
      'UI/UX Design',
      'Digital Marketing',
      'Testing & QA',
      'Nintex Development Services',
      'Mobile App Porting',
      'Data Cleansing Services'
    ],
    col2: [
      'Data Annotation Company',
      'Patient Management System',
      'Digital Twin Solutions Company',
      'Artist Collaboration Platform',
      'Prototype Development Services'
    ]
  },
  {
    id: 'consulting',
    label: 'Tech Consulting Services',
    col1: [
      'IT Consulting Services',
      'App Development Consulting',
      'Startup Consulting Services',
      'Epicor ERP Consulting Services'
    ],
    col2: [
      'DevOps Consulting Service',
      'Generative AI Consulting Company',
      'Microservices Consulting Services',
      'AI Consulting Services'
    ]
  }
];

export const hireDeveloperCategories = [
  {
    id: 'web',
    label: 'Hire Web Developers',
    roles: [
      'Hire C Sharp Developers',
      'Hire Bootstrap Developers',
      'Hire Codeigniter Developers',
      'Hire Angular JS Developers',
      'Hire React Js Developers',
      'Hire Vue Storefront Developers',
      'Hire Ember JS Developers',
      'Hire Laravel Developers',
      'Hire Express JS Developers',
      'Hire Vue JS Developers',
      'Hire Next JS Developers'
    ]
  },
  {
    id: 'mobile',
    label: 'Hire Mobile App Developers',
    roles: [
      'Hire Kotlin Developers',
      'Hire Android Developers',
      'Hire Ionic Developers',
      'Hire Flutter Developers',
      'Hire iOS Developers',
      'Hire Swift Developer',
      'Hire Mobile App Developers',
      'Hire Blackberry App Developers',
      'Hire Freelance App Developers',
      'Hire AI Application Developers',
      'Hire iPhone App Developers'
    ]
  },
  {
    id: 'cms',
    label: 'Hire CMS & E-Commerce Developers',
    roles: [
      'Hire Magento Developers',
      'Hire WooCommerce Developers',
      'Hire Prestashop Developers',
      'Hire Wordpress Developers',
      'Hire Bootstrap Developers',
      'Hire Laravel Developers',
      'Hire Flutter Developers',
      'Hire Swift Developers'
    ]
  },
  {
    id: 'backend',
    label: 'Hire Back End Developers',
    roles: [
      'Hire Golang Developers',
      'Hire Backend Developers',
      'Hire Python Developers',
      'Hire Java Developers',
      'Hire Spring Boot Developers',
      'Hire Django Developers',
      'Hire .NET Developers',
      'Hire Node JS Developers',
      'Hire PHP Developers',
      'Hire Express JS Developers',
      'Hire Fintech Developers'
    ]
  },
  {
    id: 'microsoft',
    label: 'Hire Microsoft Developers',
    roles: [
      'Hire PowerApps Developers',
      'Hire SharePoint Developers',
      'Hire Alexa Skills Developer',
      'Hire Metaverse Developers',
      'Hire Software Developers',
      'Hire Embedded Software Developers',
      'Hire Machine Learning Engineer'
    ]
  },
  {
    id: 'javascript',
    label: 'Hire Javascript Developers',
    roles: [
      'Hire Mean Stack Developers',
      'Hire Mern Stack Developers',
      'Hire Full Stack Developers',
      'Hire Ember JS Developer',
      'Hire React JS Developers',
      'Hire Angular JS Developers',
      'Hire Next JS Developers',
      'Hire Vue JS Developers',
      'Hire Express JS Developers'
    ]
  },
  {
    id: 'blockchain',
    label: 'Hire Blockchain Development',
    roles: [
      'Hire Blockchain Developers',
      'Hire Solidity Developers',
      'Hire Data Scientist',
      'Hire FastAPI Developers',
      'Hire API Developers'
    ]
  },
  {
    id: 'trending',
    label: 'Hire Trending',
    roles: [
      'Hire Data Scientist Developers',
      'Hire Alexa Skills Developers',
      'Hire Embedded Software Developers',
      'Hire Metaverse Developers',
      'Hire Dedicated Developers',
      'Hire Blackberry App Developers',
      'Hire Software Developers',
      'Hire ChatGPT Developer',
      'Hire LLM Engineers',
      'Hire AI Agent Developer',
      'Hire OpenAI Developer'
    ]
  }
];

export const MegaMenu = ({ type, onClose }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState('/Best Software Development Company in USA - Sapphire Software Sol.mp4');
  const [activeServiceId, setActiveServiceId] = useState('mobile');
  const [activeHireId, setActiveHireId] = useState('web');

  const openVideo = (src) => {
    if (src) setActiveVideoSrc(src);
    setIsVideoModalOpen(true);
  };

  const selectedCategory = servicesCategories.find((c) => c.id === activeServiceId) || servicesCategories[0];
  const selectedHireCategory = hireDeveloperCategories.find((c) => c.id === activeHireId) || hireDeveloperCategories[0];

  // SubMenu Link Style matching reference site typography
  const subMenuLinkStyle = "text-xs sm:text-[13.5px] font-[400] text-[#333333] hover:text-[#005F96] hover:bg-blue-50/70 px-2 py-0.5 rounded transition-colors inline-block font-sans";

  // Our Work View
  if (type === 'our-work') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-200 text-slate-900 z-50 font-sans text-left overflow-hidden"
          onMouseEnter={(e) => e.stopPropagation()}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
            <div className="lg:col-span-3 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003758] p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-5 relative z-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Our Work</h2>
                <p className="text-[13.5px] text-blue-100 leading-relaxed font-normal">
                  Insights From firevy.co Experts Who Help The World's Most Successful Fortune 500 Companies Solve Key Challenges. Lets Shape Happier Tomorrow.
                </p>
              </div>

              <div className="pt-8 relative z-10">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#004A75] font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg group w-full"
                >
                  <span>Request A Quote</span>
                </Link>
              </div>

              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
            </div>

            <div className="lg:col-span-9 p-8 lg:px-10 lg:py-8 bg-white flex flex-col justify-between">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-3">
                  <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider border-b border-slate-100 pb-2">
                    SOLUTIONS
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-[13px]">
                    {[
                      'Health Care App Development',
                      'Education App Development',
                      'Uber Like App Development',
                      'Spotify Like App Development',
                      'Zomato Like App Development',
                      'Amazon Like App Development',
                      'Visitor Management System',
                      'Warehouse Management System',
                      'Clover App Development',
                      'Product Finder App Development',
                      'Eyelash Appointment Booking App',
                      'Language Learning App'
                    ].map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={`/services/${slugify(item)}`}
                          onClick={onClose}
                          className={subMenuLinkStyle}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 space-y-3">
                  <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider border-b border-slate-100 pb-2">
                    CASE STUDY
                  </h4>
                  <Link
                    to="/case-studies"
                    onClick={onClose}
                    className="group block p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#005F96] hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col justify-between"
                  >
                    <div className="w-full h-36 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center p-4 overflow-hidden relative">
                      <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <div className="w-12 h-12 rounded-full bg-[#005F96] text-white flex items-center justify-center shadow-md">
                          <Layers className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">Enterprise Case Studies & Metrics</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-extrabold text-slate-900 group-hover:text-[#005F96]">
                        Client ROI & Growth Breakdown
                      </h5>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        How we helped Fortune 500 leaders achieve 4.8x performance scale.
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="lg:col-span-4 space-y-3">
                  <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider border-b border-slate-100 pb-2">
                    PORTFOLIO
                  </h4>
                  <Link
                    to="/portfolio"
                    onClick={onClose}
                    className="group block p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#005F96] hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col justify-between"
                  >
                    <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-200 relative group-hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src="/images/waymark_map_app.webp"
                        alt="Portfolio Showcases"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                        <span className="text-[11px] font-bold text-white flex items-center">
                          View Featured Projects <ExternalLink className="w-3 h-3 ml-1" />
                        </span>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-extrabold text-slate-900 group-hover:text-[#005F96]">
                        Multi-Device Web & Mobile Portfolio
                      </h5>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        Explore 150+ live Web, Mobile & Cloud applications deployed globally.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  // Hire Developers View
  if (type === 'hire-developers') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-200 text-slate-900 z-50 font-sans text-left overflow-hidden"
          onMouseEnter={(e) => e.stopPropagation()}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            <div className="lg:col-span-3 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003758] p-8 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Hire Developers</h2>
                <p className="text-[13.5px] text-blue-100 leading-relaxed font-normal">
                  Extraordinary Expertise Leads To Remarkable Results.
                </p>
              </div>

              <div className="pt-8 relative z-10">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#004A75] font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg group w-full"
                >
                  <span>Hire Now</span>
                </Link>
              </div>

              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
            </div>

            <div className="lg:col-span-3 bg-slate-50 border-r border-slate-200 py-3 flex flex-col justify-between max-h-[460px] overflow-y-auto">
              <div className="space-y-0.5">
                {hireDeveloperCategories.map((cat) => {
                  const isCatActive = cat.id === activeHireId;
                  return (
                    <button
                      key={cat.id}
                      onMouseEnter={() => setActiveHireId(cat.id)}
                      onClick={() => setActiveHireId(cat.id)}
                      className={`w-full px-5 py-2.5 flex items-center justify-between text-left text-xs sm:text-[13px] font-bold transition-colors ${
                        isCatActive
                          ? 'bg-white text-[#005F96] shadow-sm border-l-4 border-[#005F96]'
                          : 'text-slate-700 hover:text-[#005F96] hover:bg-slate-100/80'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.label}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isCatActive ? 'text-[#005F96]' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>

              <div className="m-3 p-3 bg-white rounded-xl border border-blue-100 shadow-sm flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Tech Consulting Services</h5>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="text-[11px] font-bold text-blue-600 hover:underline inline-block mt-0.5"
                  >
                    Schedule a Meeting
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 p-6 lg:p-8 bg-white overflow-y-auto max-h-[460px]">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <h3 className="text-base font-extrabold text-[#005F96]">{selectedHireCategory.label}</h3>
              </div>

              <ul className="space-y-1">
                {selectedHireCategory.roles.map((role, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/services/${slugify(role)}`}
                      onClick={onClose}
                      className={subMenuLinkStyle}
                    >
                      {role}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 rounded-2xl bg-[#EDF6FC] border border-blue-100 p-6 flex flex-col items-center text-center justify-between relative overflow-hidden my-4 mr-6">
              <div className="space-y-2 relative z-10 pt-2">
                <span className="text-xs font-medium text-slate-600 block">Let's grow together</span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Partner with us</h3>
              </div>

              <div className="my-4 relative z-10">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#005F96] text-white font-bold text-sm hover:bg-[#004A75] transition-all shadow-md"
                >
                  Get A Quote
                </Link>
              </div>

              <div className="w-full pt-2 flex justify-center opacity-90 relative z-10">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#005F96]">
                  <Sparkles className="w-4 h-4" />
                  <span>Custom Engineering Teams</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  // Technology View
  if (type === 'technologies') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-200 text-slate-900 z-50 font-sans text-left overflow-hidden"
          onMouseEnter={(e) => e.stopPropagation()}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
            <div className="lg:col-span-3 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003758] p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-5 relative z-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Technology</h2>
                <p className="text-[13.5px] text-blue-100 leading-relaxed font-normal">
                  Technology Is Best When It Brings People Together.
                </p>
              </div>

              <div className="pt-8 relative z-10">
                <Link
                  to="/about"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#004A75] font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg group w-full"
                >
                  <span>About Company</span>
                </Link>
              </div>

              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
            </div>

            <div className="lg:col-span-6 p-6 lg:p-8 bg-white flex flex-col justify-between">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider">
                      MOBILE
                    </h4>
                    <ul className="space-y-1 text-xs sm:text-[13px]">
                      {['Android', 'iOS', 'Flutter', 'React Native', 'Xamarin'].map((tech) => (
                        <li key={tech}>
                          <Link to={`/services/${slugify(tech)}`} onClick={onClose} className={subMenuLinkStyle}>
                            {tech}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider">
                      MICROSOFT
                    </h4>
                    <ul className="space-y-1 text-xs sm:text-[13px]">
                      {['SharePoint', 'PowerApps', 'Power Automate'].map((tech) => (
                        <li key={tech}>
                          <Link to={`/services/${slugify(tech)}`} onClick={onClose} className={subMenuLinkStyle}>
                            {tech}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider">
                      BACKEND
                    </h4>
                    <ul className="space-y-1 text-xs sm:text-[13px]">
                      {['.NET', 'PHP', 'Java', 'Nodejs'].map((tech) => (
                        <li key={tech}>
                          <Link to={`/services/${slugify(tech)}`} onClick={onClose} className={subMenuLinkStyle}>
                            {tech}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider">
                      FRONTEND
                    </h4>
                    <ul className="space-y-1 text-xs sm:text-[13px]">
                      {['Angular', 'React', 'Vuejs'].map((tech) => (
                        <li key={tech}>
                          <Link to={`/services/${slugify(tech)}`} onClick={onClose} className={subMenuLinkStyle}>
                            {tech}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider">
                    TRENDING
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-[13px]">
                    {['Generative AI', 'AI & ML', 'Blockchain', 'Full Stack', 'VR & AR', 'IoT', 'PWD', 'RPA'].map((tech) => (
                      <li key={tech}>
                        <Link to={`/services/${slugify(tech)}`} onClick={onClose} className={subMenuLinkStyle}>
                          {tech}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider">
                    OTHERS
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-[13px]">
                    {['Wordpress', 'Drupal', 'Umbraco', 'Sitecore', 'Sitefinity', 'Magento', 'Shopify'].map((tech) => (
                      <li key={tech}>
                        <Link to={`/services/${slugify(tech)}`} onClick={onClose} className={subMenuLinkStyle}>
                          {tech}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 rounded-2xl bg-[#EDF6FC] border border-blue-100 p-6 flex flex-col items-center text-center justify-between relative overflow-hidden my-4 mr-6">
              <div className="space-y-2 relative z-10 pt-2">
                <span className="text-xs font-medium text-slate-600 block">Let's grow together</span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Partner with us</h3>
              </div>

              <div className="my-4 relative z-10">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#005F96] text-white font-bold text-sm hover:bg-[#004A75] transition-all shadow-md"
                >
                  Get A Quote
                </Link>
              </div>

              <div className="w-full pt-2 flex justify-center opacity-90 relative z-10">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#005F96]">
                  <Sparkles className="w-4 h-4" />
                  <span>Custom Tech Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  // Services View
  if (type === 'services') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-200 text-slate-900 z-50 font-sans text-left overflow-hidden"
          onMouseEnter={(e) => e.stopPropagation()}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            <div className="lg:col-span-3 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003758] p-8 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Service</h2>
                <p className="text-[13.5px] text-blue-100 leading-relaxed font-normal">
                  Our Portfolio Of Services Range From Designing Strategy To Delivering Impact.
                </p>
              </div>

              <div className="pt-8 relative z-10">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#004A75] font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg group w-full"
                >
                  <span>Hire Now</span>
                </Link>
              </div>

              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
            </div>

            <div className="lg:col-span-3 bg-slate-50 border-r border-slate-200 py-3 overflow-y-auto max-h-[460px]">
              {servicesCategories.map((cat) => {
                const isCatActive = cat.id === activeServiceId;
                return (
                  <button
                    key={cat.id}
                    onMouseEnter={() => setActiveServiceId(cat.id)}
                    onClick={() => setActiveServiceId(cat.id)}
                    className={`w-full px-5 py-2.5 flex items-center justify-between text-left text-xs sm:text-[13px] font-bold transition-colors ${
                      isCatActive
                        ? 'bg-white text-[#005F96] shadow-sm border-l-4 border-[#005F96]'
                        : 'text-slate-700 hover:text-[#005F96] hover:bg-slate-100/80'
                    }`}
                  >
                    <span className="truncate pr-2">{cat.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isCatActive ? 'text-[#005F96]' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-6 p-6 lg:p-8 bg-white overflow-y-auto max-h-[460px]">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <h3 className="text-base font-extrabold text-[#005F96]">{selectedCategory.label}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                <ul className="space-y-1">
                  {selectedCategory.col1.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={`/services/${slugify(item)}`}
                        onClick={onClose}
                        className={subMenuLinkStyle}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-1">
                  {selectedCategory.col2.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={`/services/${slugify(item)}`}
                        onClick={onClose}
                        className={subMenuLinkStyle}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  // Product / Solutions View
  if (type === 'solutions') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-200 text-slate-900 z-50 font-sans text-left overflow-hidden"
          onMouseEnter={(e) => e.stopPropagation()}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
            <div className="lg:col-span-3 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003758] p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-5 relative z-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Product</h2>
                <p className="text-[13.5px] text-blue-100 leading-relaxed font-normal">
                  Our Curiosity Has Led Us To Break New Grounds And Nurture A Brave New World Of Innovative Products.
                </p>
              </div>

              <div className="pt-8 relative z-10">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#004A75] font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg group w-full"
                >
                  <span>Book A Demo</span>
                </Link>
              </div>

              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
            </div>

            <div className="lg:col-span-9 p-8 lg:px-10 lg:py-8 bg-white flex flex-col justify-between">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                  <Link
                    to="/services/vidyalaya-school-management-software"
                    onClick={onClose}
                    className="group p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#005F96] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-9 h-9" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold tracking-widest uppercase text-orange-600 block mb-1">EDTECH PRODUCT</span>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[#005F96] leading-snug">
                        Vidyalaya School Management Software
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-[#005F96] mt-4 flex items-center group-hover:underline">
                      Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </Link>

                  <Link
                    to="/services/vidyalaya-learning-management-system"
                    onClick={onClose}
                    className="group p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#005F96] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-9 h-9" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold tracking-widest uppercase text-blue-600 block mb-1">E-LEARNING LMS</span>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[#005F96] leading-snug">
                        Vidyalaya Learning Management System
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-[#005F96] mt-4 flex items-center group-hover:underline">
                      Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </Link>

                  <Link
                    to="/services/occupational-health-safety-software"
                    onClick={onClose}
                    className="group p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#005F96] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <HeartPulse className="w-9 h-9" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold tracking-widest uppercase text-emerald-600 block mb-1">HEALTH & SAFETY</span>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[#005F96] leading-snug">
                        Occupational Health And Safety Software
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-[#005F96] mt-4 flex items-center group-hover:underline">
                      Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </Link>
                </div>

                <div className="lg:col-span-4 rounded-2xl bg-[#EDF6FC] border border-blue-100 p-6 flex flex-col items-center text-center justify-between relative overflow-hidden">
                  <div className="space-y-2 relative z-10 pt-2">
                    <span className="text-xs font-medium text-slate-600 block">Let's grow together</span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Partner with us</h3>
                  </div>

                  <div className="my-4 relative z-10">
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#005F96] text-white font-bold text-sm hover:bg-[#004A75] transition-all shadow-md"
                    >
                      Get A Quote
                    </Link>
                  </div>

                  <div className="w-full pt-2 flex justify-center opacity-90 relative z-10">
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#005F96]">
                      <Sparkles className="w-4 h-4" />
                      <span>Custom Enterprise Solutions</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <h4 className="text-[12px] font-extrabold text-[#005F96] uppercase tracking-wider">
                  REVIEWS AND RATING
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/google.webp" alt="Google" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">900+ REVIEWS</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/clutch.webp" alt="Clutch" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-blue-600 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">320+ REVIEWS</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/goodfirms.webp" alt="GoodFirms" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-cyan-500 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">200+ REVIEWS</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <span className="font-extrabold text-xs text-blue-900">DESIGN<span className="text-cyan-500">RUSH</span></span>
                    <div>
                      <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">55+ REVIEWS</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <span className="font-bold text-xs text-red-600">TechReviewer</span>
                    <div>
                      <div className="flex text-blue-600 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">5.0 RATING</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  // Company View (Default)
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-200 text-slate-900 z-50 font-sans text-left overflow-hidden"
        onMouseEnter={(e) => e.stopPropagation()}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
          <div className="lg:col-span-3 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003758] p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-5 relative z-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Company</h2>
              <p className="text-[13.5px] text-blue-100 leading-relaxed font-normal">
                We Partner With You To Deliver An Innovative Solution To Your Needs With Our 15+ Years Of Technical Experience With Fortune 500 Organizations.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                to="/about"
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#004A75] font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg group w-full"
              >
                <span>About Company</span>
              </Link>
            </div>

            <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
          </div>

          <div className="lg:col-span-9 p-8 lg:px-10 lg:py-8 bg-white flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 space-y-3">
                <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider mb-2">
                  ABOUT US
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <ul className="space-y-1">
                    <li><Link to="/company/about-firevy" onClick={onClose} className={subMenuLinkStyle}>About firevy.co</Link></li>
                    <li><Link to="/company/ceo-message" onClick={onClose} className={subMenuLinkStyle}>CEO Message</Link></li>
                    <li><Link to="/company/our-team" onClick={onClose} className={subMenuLinkStyle}>Our Team</Link></li>
                    <li><Link to="/company/events-activities" onClick={onClose} className={subMenuLinkStyle}>Events & Activities</Link></li>
                    <li><Link to="/company/brochure" onClick={onClose} className={subMenuLinkStyle}>Brochure</Link></li>
                  </ul>

                  <ul className="space-y-1">
                    <li><Link to="/company/why-choose-us" onClick={onClose} className={subMenuLinkStyle}>Why Choose Us</Link></li>
                    <li><Link to="/company/great-place-to-work" onClick={onClose} className={subMenuLinkStyle}>Great Place To Work</Link></li>
                    <li><Link to="/company/women-empowerment" onClick={onClose} className={subMenuLinkStyle}>Women Empowerment</Link></li>
                    <li><Link to="/company/awards-recognition" onClick={onClose} className={subMenuLinkStyle}>Awards & Recognition</Link></li>
                    <li><Link to="/company/insightful-videos" onClick={onClose} className={subMenuLinkStyle}>Insightful Videos</Link></li>
                  </ul>

                  <ul className="space-y-1">
                    <li><Link to="/company/blog" onClick={onClose} className={subMenuLinkStyle}>Blog</Link></li>
                    <li><Link to="/careers" onClick={onClose} className={subMenuLinkStyle}>Careers (Jobs)</Link></li>
                    <li><Link to="/company/csr" onClick={onClose} className={subMenuLinkStyle}>CSR</Link></li>
                    <li><Link to="/company/podcast" onClick={onClose} className={subMenuLinkStyle}>Podcast</Link></li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-2 space-y-3">
                <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider mb-2">
                  MODELS
                </h4>
                <ul className="space-y-1">
                  <li><Link to="/company/delivery-models" onClick={onClose} className={subMenuLinkStyle}>Delivery Models</Link></li>
                  <li><Link to="/company/engagement-models" onClick={onClose} className={subMenuLinkStyle}>Engagement Models</Link></li>
                  <li><Link to="/company/development-methodology" onClick={onClose} className={subMenuLinkStyle}>Development Methodology</Link></li>
                </ul>
              </div>

              <div className="md:col-span-3 space-y-3">
                <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider mb-2">
                  TESTIMONIAL
                </h4>
                <ul className="space-y-1">
                  <li><Link to="/company/client-testimonials" onClick={onClose} className={subMenuLinkStyle}>Client Testimonials</Link></li>
                  <li><Link to="/company/video-testimonial" onClick={onClose} className={subMenuLinkStyle}>Video Testimonial</Link></li>
                  <li><Link to="/company/clutch-testimonial" onClick={onClose} className={subMenuLinkStyle}>Clutch Testimonial</Link></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-2.5">
                <h4 className="text-[12px] font-extrabold text-[#005F96] uppercase tracking-wider">
                  REVIEWS AND RATING
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/google.webp" alt="Google" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">900+ REVIEWS</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/clutch.webp" alt="Clutch" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-blue-600 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">320+ REVIEWS</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/goodfirms.webp" alt="GoodFirms" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-cyan-500 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">200+ REVIEWS</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <span className="font-extrabold text-xs text-blue-900">DESIGN<span className="text-cyan-500">RUSH</span></span>
                    <div>
                      <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">55+ REVIEWS</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 space-y-2.5">
                <h4 className="text-[12px] font-extrabold text-[#005F96] uppercase tracking-wider">
                  PRESS RELEASE
                </h4>
                <div className="flex items-center space-x-3">
                  <div className="px-3 py-2 bg-slate-100 rounded-md font-serif text-xs font-bold text-slate-700 tracking-wider">
                    CISION <span className="text-[9px] text-slate-400 block font-sans">PR Newswire</span>
                  </div>
                  <div className="px-3 py-2 bg-slate-100 rounded-md font-mono text-xs font-black text-blue-600 tracking-wider">
                    TECHGIG
                  </div>
                  <div className="px-3 py-2 bg-slate-100 rounded-md font-serif text-xs font-extrabold text-red-900 tracking-wide">
                    THE ECONOMIC TIMES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 text-white bg-gray-900/80 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Close Video"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full">
                <video
                  src={activeVideoSrc}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MegaMenu;
