import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X, Star, BookOpen, GraduationCap, HeartPulse, Sparkles, Building2, Code2 } from 'lucide-react';

export const MegaMenu = ({ type, onClose }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState('/Best Software Development Company in USA - Sapphire Software Sol.mp4');

  const openVideo = (src) => {
    if (src) setActiveVideoSrc(src);
    setIsVideoModalOpen(true);
  };

  // Product / Solutions Mega Menu View
  if (type === 'solutions') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed left-0 right-0 top-[108px] w-full bg-white shadow-2xl border-t border-slate-200 text-slate-900 z-50 font-sans text-left overflow-hidden"
          onMouseEnter={(e) => e.stopPropagation()}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
            {/* Left Blue Sidebar Banner Section (~22% width) */}
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

              {/* Background Decorative Graphic Curve */}
              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
            </div>

            {/* Center & Right Section (~78% width) */}
            <div className="lg:col-span-9 p-8 lg:px-10 lg:py-8 bg-white flex flex-col justify-between">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Center: 3 Product Cards (Spans 8 columns) */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Card 1: Vidyalaya School Management */}
                  <Link
                    to="/services/software-development"
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

                  {/* Card 2: Vidyalaya LMS */}
                  <Link
                    to="/services/software-development"
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

                  {/* Card 3: OccuCare Health & Safety */}
                  <Link
                    to="/services/software-development"
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

                {/* Right: Partner With Us Banner (Spans 4 columns) */}
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

              {/* Bottom Reviews & Rating Bar */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <h4 className="text-[12px] font-extrabold text-[#005F96] uppercase tracking-wider">
                  REVIEWS AND RATING
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  {/* Google */}
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/google.webp" alt="Google" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">900+ REVIEWS</div>
                    </div>
                  </div>

                  {/* Clutch */}
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/clutch.webp" alt="Clutch" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-blue-600 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">320+ REVIEWS</div>
                    </div>
                  </div>

                  {/* GoodFirms */}
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/goodfirms.webp" alt="GoodFirms" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-cyan-500 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">200+ REVIEWS</div>
                    </div>
                  </div>

                  {/* DesignRush */}
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <span className="font-extrabold text-xs text-blue-900">DESIGN<span className="text-cyan-500">RUSH</span></span>
                    <div>
                      <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">55+ REVIEWS</div>
                    </div>
                  </div>

                  {/* TechReviewer */}
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

  // Company / Default Mega Menu View
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="fixed left-0 right-0 top-[108px] w-full bg-white shadow-2xl border-t border-slate-200 text-slate-900 z-50 font-sans text-left overflow-hidden"
        onMouseEnter={(e) => e.stopPropagation()}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
          {/* Left Blue Sidebar Banner Section (~22% width) */}
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

            {/* Background Decorative Graphic Curve */}
            <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
          </div>

          {/* Right Main Content Section (~78% width) */}
          <div className="lg:col-span-9 p-8 lg:px-10 lg:py-8 bg-white flex flex-col justify-between">
            {/* Top Grid Columns matching Sapphire header structure */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* ABOUT US (Spans 7 columns, with 3 internal sub-columns) */}
              <div className="md:col-span-7 space-y-3">
                <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider mb-2">
                  ABOUT US
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {/* Sub Column 1 */}
                  <ul className="space-y-2 text-xs sm:text-[13px]">
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">About firevy.co</Link></li>
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">CEO Message</Link></li>
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Our Team</Link></li>
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Events & Activities</Link></li>
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Brochure</Link></li>
                  </ul>

                  {/* Sub Column 2 */}
                  <ul className="space-y-2 text-xs sm:text-[13px]">
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Why Choose Us</Link></li>
                    <li><Link to="/careers" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Great Place To Work</Link></li>
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Women Empowerment</Link></li>
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Awards & Recognition</Link></li>
                    <li>
                      <button onClick={() => openVideo('/Best Software Development Company in USA - Sapphire Software Sol.mp4')} className="text-slate-600 hover:text-[#005F96] font-medium block text-left">
                        Insightful Videos
                      </button>
                    </li>
                  </ul>

                  {/* Sub Column 3 */}
                  <ul className="space-y-2 text-xs sm:text-[13px]">
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Blog</Link></li>
                    <li><Link to="/careers" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Careers (Jobs)</Link></li>
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">CSR</Link></li>
                    <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Podcast</Link></li>
                  </ul>
                </div>
              </div>

              {/* MODELS Column */}
              <div className="md:col-span-2 space-y-3">
                <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider mb-2">
                  MODELS
                </h4>
                <ul className="space-y-2 text-xs sm:text-[13px]">
                  <li><Link to="/process" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Delivery Models</Link></li>
                  <li><Link to="/about" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Engagement Models</Link></li>
                  <li><Link to="/process" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Development Methodology</Link></li>
                </ul>
              </div>

              {/* TESTIMONIAL Column */}
              <div className="md:col-span-3 space-y-3">
                <h4 className="text-[13px] font-extrabold text-[#005F96] uppercase tracking-wider mb-2">
                  TESTIMONIAL
                </h4>
                <ul className="space-y-2 text-xs sm:text-[13px]">
                  <li><Link to="/portfolio" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Client Testimonials</Link></li>
                  <li>
                    <button onClick={() => openVideo('/Best Software Development Company in USA - Sapphire Software Sol.mp4')} className="text-slate-600 hover:text-[#005F96] font-medium flex items-center space-x-1.5 text-left">
                      <span>Video Testimonial</span>
                      <Play className="w-3 h-3 text-cyan-600 fill-current" />
                    </button>
                  </li>
                  <li><Link to="/portfolio" onClick={onClose} className="text-slate-600 hover:text-[#005F96] font-medium block">Clutch Testimonial</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer Section: REVIEWS AND RATING & PRESS RELEASE */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* REVIEWS AND RATING Badges */}
              <div className="md:col-span-7 space-y-2.5">
                <h4 className="text-[12px] font-extrabold text-[#005F96] uppercase tracking-wider">
                  REVIEWS AND RATING
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  {/* Google Review Badge */}
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/google.webp" alt="Google" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">900+ REVIEWS</div>
                    </div>
                  </div>

                  {/* Clutch Badge */}
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/clutch.webp" alt="Clutch" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-blue-600 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">320+ REVIEWS</div>
                    </div>
                  </div>

                  {/* GoodFirms Badge */}
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <img src="/images/goodfirms.webp" alt="GoodFirms" className="h-5 w-auto object-contain" />
                    <div>
                      <div className="flex text-cyan-500 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">200+ REVIEWS</div>
                    </div>
                  </div>

                  {/* DesignRush Badge */}
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <span className="font-extrabold text-xs text-blue-900">DESIGN<span className="text-cyan-500">RUSH</span></span>
                    <div>
                      <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                      <div className="text-[10px] text-slate-800 font-extrabold">55+ REVIEWS</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PRESS RELEASE Logos */}
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
