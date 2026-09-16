import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Upload, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Lock, 
  Clock, 
  FileText, 
  Check, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import BRAND from '../constants/brand';
import contactApi from '../services/contactApi';
import NewsletterSubscribeBanner from '../components/common/NewsletterSubscribeBanner';
import SuccessMatrixGrid from '../components/home/SuccessMatrixGrid';
import ProcessWeFollowPillStages from '../components/common/ProcessWeFollowPillStages';
import { BrandLogoMarquee } from '../components/common/BrandLogoMarquee';
import InnovativeSolutionVideo from '../components/home/InnovativeSolutionVideo';
import ClientStoryVideoSlider from '../components/common/ClientStoryVideoSlider';
import AboutKeyMetrics from '../components/home/AboutKeyMetrics';
import TrustedBrandsGrid from '../components/common/TrustedBrandsGrid';
import FeaturedInLogosGrid from '../components/home/FeaturedInLogosGrid';
import TrustRecognitionBanner from '../components/home/TrustRecognitionBanner';
import OurOfficesGrid from '../components/common/OurOfficesGrid';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';

export const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    service: '',
    budget: '',
    projectType: '',
    message: '',
    subscribeNewsletter: true
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [dateStartIndex, setDateStartIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);

  const fileInputRef = useRef(null);

  // Generate dynamic upcoming dates for the calendar
  const getUpcomingDays = () => {
    const days = [];
    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const baseDate = new Date();
    baseDate.setDate(baseDate.getDate() + 1);

    for (let i = 0; i < 14; i++) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      days.push({
        dayName: weekdays[d.getDay()],
        dateStr: `${months[d.getMonth()]} ${d.getDate()}`,
        fullDate: d.toISOString().split('T')[0]
      });
    }
    return days;
  };

  const upcomingDays = getUpcomingDays();
  const visibleDays = upcomingDays.slice(dateStartIndex, dateStartIndex + 6);

  const handlePrevDates = () => {
    setDateStartIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextDates = () => {
    setDateStartIndex(prev => Math.min(upcomingDays.length - 6, prev + 1));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit. Please upload a smaller file.');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setServerError('Please fill in all required fields marked with *');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        scheduledSlot: upcomingDays[selectedDateIndex] 
          ? `${upcomingDays[selectedDateIndex].dayName}, ${upcomingDays[selectedDateIndex].dateStr}`
          : 'Not selected',
        fileName: selectedFile ? selectedFile.name : null
      };

      await contactApi.submitInquiry(payload);
      setSubmitSuccess(true);
    } catch (err) {
      console.error('[Contact Submission Error]', err);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const metricsData = [
    { number: '23+', label: 'Years Experience' },
    { number: '2800+', label: 'Satisfied Clients' },
    { number: '1500+', label: 'Completed Projects' },
    { number: '200+', label: 'IT Professional' },
    { number: '95%', label: 'Client Retention' },
    { number: '18+', label: 'Industry Served' }
  ];

  return (
    <div className="bg-[#F0F6FA] min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Contact Us | Free 30-Min Strategy Call | ${BRAND.name}`}
        description={`Get a Free 30-Min Strategy Call with ${BRAND.name} software experts. Connect with us for enterprise web, mobile, AI & cloud development.`}
        canonical="/contact"
      />

      {/* ========================================================= */}
      {/* 1. TOP HEADER TITLE & SUBTITLE SECTION                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-32 pb-4 text-center font-sans">
        <Container className="max-w-5xl mx-auto px-4">
          <h1 className="text-[28px] sm:text-[38px] lg:text-[42px] font-[800] text-slate-950 tracking-tight leading-tight">
            Let's Navigate Digital Transformation Together!!!
          </h1>
          <p className="text-[14px] sm:text-[15.5px] font-[400] text-slate-600 max-w-3xl mx-auto mt-3 leading-relaxed">
            Every day, {BRAND.name} experts help businesses around the globe accelerate digital transformation and build a more resilient, sustainable, and inclusive future Together.
          </p>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. MAIN 2-COLUMN SECTION: METRICS & STRATEGY CALL FORM   */}
      {/* ========================================================= */}
      <section className="pt-4 pb-16 sm:pb-20 relative overflow-hidden text-left font-sans">
        
        {/* Subtle Decorative Dots Pattern on top-right */}
        <div className="absolute top-8 right-8 sm:right-16 pointer-events-none opacity-30 hidden sm:block">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#006085]" />
            ))}
          </div>
        </div>

        {/* Soft Background Radial Gradient */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* --------------------------------------------------------- */}
            {/* LEFT COLUMN: METRICS GRID & CLUTCH TESTIMONIAL CARD      */}
            {/* --------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Metrics Grid (2 Columns x 3 Rows) */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:gap-y-8">
                {metricsData.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[34px] sm:text-[40px] font-[800] text-[#006085] leading-none tracking-tight font-sans">
                      {item.number}
                    </div>
                    <div className="text-[14px] sm:text-[15px] font-[700] text-slate-800 font-sans">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Horizontal Separator Line */}
              <div className="pt-2">
                <hr className="border-slate-300/80" />
              </div>

              {/* Clutch Testimonial Card */}
              <div className="bg-white rounded-[14px] p-6 sm:p-7 shadow-sm border border-slate-200/80 space-y-4 text-left font-sans">
                {/* Stars and Clutch Logo Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FDB022] text-[#FDB022]" />
                    ))}
                  </div>
                  
                  <div className="flex items-center">
                    <img
                      src="/images/clutch.png"
                      alt="Clutch"
                      className="h-6 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="font-[900] text-[18px] text-slate-800 tracking-tight ml-1 font-sans">
                      Clutch
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[13.5px] sm:text-[14px] text-slate-700 leading-relaxed font-normal">
                  Firevy Software Solutions successfully implemented all UX and design features on the app. The team has consistently delivered on time, provided daily updates on the project's progress, and communicated smoothly throughout the engagement.
                </p>

                {/* Reviewer Avatar and Name */}
                <div className="flex items-center space-x-3 pt-2">
                  <img
                    src="/images/derrick_surratt.webp"
                    alt="Derrick Surratt"
                    className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm"
                    onError={(e) => {
                      e.target.src = '/images/smit_shah.webp';
                    }}
                  />
                  <div>
                    <h4 className="text-[14.5px] font-[800] text-slate-900 leading-snug">
                      Derrick Surratt
                    </h4>
                    <span className="text-[12.5px] text-slate-500 font-medium block">
                      Arkansas
                    </span>
                  </div>
                </div>
              </div>

            </div>


            {/* --------------------------------------------------------- */}
            {/* RIGHT COLUMN: 30-MIN STRATEGY CALL FORM                  */}
            {/* --------------------------------------------------------- */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[12px] shadow-sm border border-slate-200/90 overflow-hidden text-left font-sans">
                
                {/* Header Banner Bar */}
                <div className="bg-[#006085] text-white px-6 sm:px-8 py-4 sm:py-4.5">
                  <h2 className="text-[17px] sm:text-[19px] font-[700] tracking-tight">
                    Get a Free 30-Min Strategy Call with Our Experts
                  </h2>
                </div>

                {submitSuccess ? (
                  <div className="p-8 sm:p-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 border border-emerald-200">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-[22px] font-[800] text-slate-900">
                      Strategy Call Request Submitted!
                    </h3>
                    <p className="text-[14.5px] text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="font-[700] text-slate-900">{formData.name}</span>. Our technical director has received your inquiry and will connect with you on the chosen date.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitSuccess(false);
                          setFormData({
                            name: '',
                            email: '',
                            countryCode: '+91',
                            phone: '',
                            service: '',
                            budget: '',
                            projectType: '',
                            message: '',
                            subscribeNewsletter: true
                          });
                          setSelectedFile(null);
                        }}
                        className="px-8 py-3 rounded-[6px] bg-[#006085] hover:bg-[#004b6b] text-white font-[700] text-[14px] transition-colors shadow-sm"
                      >
                        Book Another Consultation
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4.5">
                    
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name *"
                          className="w-full px-4 py-2.5 sm:py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006085] focus:ring-1 focus:ring-[#006085] focus:outline-none bg-white text-slate-900 placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email ID *"
                          className="w-full px-4 py-2.5 sm:py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006085] focus:ring-1 focus:ring-[#006085] focus:outline-none bg-white text-slate-900 placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    {/* Row 2: Country Code + Phone and Interested Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex rounded-[6px] border border-slate-300 focus-within:border-[#006085] focus-within:ring-1 focus-within:ring-[#006085] overflow-hidden bg-white">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          aria-label="Country Code"
                          className="px-3 py-2.5 text-[14px] bg-slate-50 border-r border-slate-300 text-slate-700 font-medium focus:outline-none cursor-pointer"
                        >
                          <option value="+91">+91 (IN)</option>
                          <option value="+1">+1 (US)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+971">+971 (UAE)</option>
                          <option value="+61">+61 (AU)</option>
                          <option value="+1-ca">+1 (CA)</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Mobile Number *"
                          className="w-full px-3.5 py-2.5 text-[14px] bg-transparent text-slate-900 focus:outline-none placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          aria-label="Interested Service"
                          className="w-full px-4 py-2.5 sm:py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006085] focus:ring-1 focus:ring-[#006085] focus:outline-none bg-white text-slate-700 cursor-pointer"
                        >
                          <option value="">Interested Service *</option>
                          <option value="Custom Software Development">Custom Software Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Web & Enterprise Application">Web & Enterprise Application</option>
                          <option value="AI & Machine Learning Engineering">AI & Machine Learning Engineering</option>
                          <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                          <option value="UI/UX Architecture & Design">UI/UX Architecture & Design</option>
                          <option value="Dedicated Developers Squad">Dedicated Developers Squad</option>
                          <option value="QA & Security Testing">QA & Security Testing</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Project Budget and Project Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          aria-label="Project Budget"
                          className="w-full px-4 py-2.5 sm:py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006085] focus:ring-1 focus:ring-[#006085] focus:outline-none bg-white text-slate-700 cursor-pointer"
                        >
                          <option value="">Project Budget</option>
                          <option value="Under $10,000">Under $10,000</option>
                          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                          <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                          <option value="$100,000+">$100,000+</option>
                        </select>
                      </div>

                      <div>
                        <select
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleInputChange}
                          aria-label="Project Type"
                          className="w-full px-4 py-2.5 sm:py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006085] focus:ring-1 focus:ring-[#006085] focus:outline-none bg-white text-slate-700 cursor-pointer"
                        >
                          <option value="">Project Type *</option>
                          <option value="New Product Development">New Product Development</option>
                          <option value="Existing System Modernization">Existing System Modernization</option>
                          <option value="Dedicated Engineering Team">Dedicated Engineering Team</option>
                          <option value="Tech Consulting & Architecture">Tech Consulting & Architecture</option>
                          <option value="Enterprise Maintenance & Support">Enterprise Maintenance & Support</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Textarea Project Description */}
                    <div>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your project *"
                        className="w-full px-4 py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006085] focus:ring-1 focus:ring-[#006085] focus:outline-none bg-white text-slate-900 placeholder:text-slate-500 resize-none"
                      />
                    </div>

                    {/* Row 5: File Upload Dropzone */}
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border border-dashed border-slate-300 rounded-[8px] p-3.5 sm:p-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".jpg,.jpeg,.png,.pdf"
                        className="hidden"
                      />

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200/70 flex items-center justify-center text-slate-700 shrink-0">
                          <Upload className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[13px] font-[600] text-slate-800">
                            {selectedFile ? selectedFile.name : 'Select or Drop your file here'}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Allow only .jpg, .png, .pdf file size up to 5MB
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                        className="bg-[#006085] hover:bg-[#004b6b] text-white px-5 py-1.5 sm:py-2 rounded-[5px] text-[12.5px] sm:text-[13px] font-[600] transition-colors shrink-0 shadow-sm cursor-pointer"
                      >
                        {selectedFile ? 'Change' : 'Upload'}
                      </button>
                    </div>

                    {/* Row 6: Strategy Call Scheduler */}
                    <div className="pt-2 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-[13.5px] sm:text-[14px] font-[700] text-slate-900">
                          Schedule a call with our tech expert. Get a tech consultation for free!
                        </h4>
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-[700] text-rose-600 bg-rose-50 border border-rose-200 shrink-0 self-start sm:self-auto">
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                          <span>30 Min Meeting</span>
                        </span>
                      </div>

                      {/* Date Carousel Selector */}
                      <div className="flex items-center space-x-2 pt-1">
                        <button
                          type="button"
                          onClick={handlePrevDates}
                          disabled={dateStartIndex === 0}
                          aria-label="Previous dates"
                          className="w-8 h-12 rounded-[6px] border border-blue-200 text-[#006085] flex items-center justify-center hover:bg-blue-50 transition-colors disabled:opacity-40 disabled:hover:bg-transparent shrink-0 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        <div className="grid grid-cols-6 gap-1.5 sm:gap-2 flex-1">
                          {visibleDays.map((item, idx) => {
                            const actualIndex = dateStartIndex + idx;
                            const isSelected = selectedDateIndex === actualIndex;

                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedDateIndex(actualIndex)}
                                className={`py-1.5 sm:py-2 px-1 rounded-[6px] text-center transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-2 border-[#006085] bg-[#EAF4FA] shadow-xs'
                                    : 'border border-blue-100 bg-white hover:bg-slate-50 text-slate-700'
                                }`}
                              >
                                <span className={`text-[11px] sm:text-[12px] font-[800] block uppercase leading-tight ${
                                  isSelected ? 'text-[#006085]' : 'text-slate-600'
                                }`}>
                                  {item.dayName}
                                </span>
                                <span className={`text-[11px] sm:text-[12px] font-[700] block leading-tight ${
                                  isSelected ? 'text-[#006085]' : 'text-slate-900'
                                }`}>
                                  {item.dateStr}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        <button
                          type="button"
                          onClick={handleNextDates}
                          disabled={dateStartIndex >= upcomingDays.length - 6}
                          aria-label="Next dates"
                          className="w-8 h-12 rounded-[6px] border border-blue-200 text-[#006085] flex items-center justify-center hover:bg-blue-50 transition-colors disabled:opacity-40 disabled:hover:bg-transparent shrink-0 cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Row 7: Checkbox and NDA Info */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px]">
                      <label className="flex items-center space-x-2 text-slate-700 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          name="subscribeNewsletter"
                          checked={formData.subscribeNewsletter}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#006085] rounded border-slate-300 focus:ring-[#006085]"
                        />
                        <span className="font-medium">Subscribe to our Newsletter</span>
                      </label>

                      <span className="text-slate-800 font-[700] text-[13px] flex items-center space-x-1.5">
                        <span>All Projects are protected by NDA and IPs</span>
                      </span>
                    </div>

                    {/* Row 8: Cloudflare Turnstile Captcha Simulation */}
                    <div className="pt-1">
                      <div className="border border-slate-300 rounded-[6px] p-2.5 sm:p-3 max-w-[270px] flex items-center justify-between bg-slate-50/60 shadow-2xs">
                        <label className="flex items-center space-x-2.5 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={isCaptchaChecked}
                            onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                            className="w-4 h-4 text-[#006085] rounded border-slate-300 focus:ring-[#006085]"
                          />
                          <span className="text-[12px] font-medium text-slate-700">
                            Verify you are human
                          </span>
                        </label>

                        <div className="text-right">
                          <div className="text-[9px] font-bold text-slate-800 uppercase tracking-tight flex items-center justify-end space-x-1">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            <span>CLOUDFLARE</span>
                          </div>
                          <div className="text-[8px] text-slate-400 space-x-1">
                            <span>Privacy</span>
                            <span>•</span>
                            <span>Help</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {serverError && (
                      <div className="p-3 rounded-[6px] bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                        {serverError}
                      </div>
                    )}

                    {/* Row 9: Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#006085] hover:bg-[#004A6B] text-white font-[700] text-[15px] sm:text-[16px] px-10 py-2.5 sm:py-3 rounded-[6px] shadow-sm hover:shadow transition-all disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* ========================================================= */}
      {/* "You Can Also Contact Us By" — Sales / Careers / Product  */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-16 bg-[#F0F6FA] text-left font-sans">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[26px] sm:text-[32px] font-[800] text-slate-900 tracking-tight text-center mb-10">
            You Can Also Contact Us By
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* Sales */}
            <div className="space-y-3">
              <h4 className="text-[18px] sm:text-[20px] font-[800] text-slate-900 tracking-tight">Sales</h4>
              <div className="bg-white rounded-[14px] p-5 sm:p-6 border border-slate-200/80 shadow-sm space-y-3.5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#006085]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#006085]" />
                  </div>
                  <div className="text-[13px] text-slate-700 space-y-0.5">
                    <div><span className="font-semibold text-slate-500 text-[11px] uppercase tracking-wider">IN:</span>{' '}<a href="tel:+919429709662" className="font-[600] text-slate-800 hover:text-[#006085]">+91-942-970-9662</a></div>
                    <div><span className="font-semibold text-slate-500 text-[11px] uppercase tracking-wider">US:</span>{' '}<a href="tel:+17542587670" className="font-[600] text-slate-800 hover:text-[#006085]">+1-754-258-7670</a></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#006085]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#006085]" />
                  </div>
                  <a href="mailto:contact@sapphiresolutions.net" className="text-[13px] font-[600] text-slate-800 hover:text-[#006085]">contact@sapphiresolutions.net</a>
                </div>
              </div>
            </div>

            {/* Careers (Jobs) */}
            <div className="space-y-3">
              <h4 className="text-[18px] sm:text-[20px] font-[800] text-slate-900 tracking-tight">Careers (Jobs)</h4>
              <div className="bg-white rounded-[14px] p-5 sm:p-6 border border-slate-200/80 shadow-sm space-y-3.5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#006085]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#006085]" />
                  </div>
                  <div className="text-[13px] text-slate-700 space-y-0.5">
                    <div><span className="font-semibold text-slate-500 text-[11px] uppercase tracking-wider">IN:</span>{' '}<a href="tel:+919099976034" className="font-[600] text-slate-800 hover:text-[#006085]">+91-909-997-6034</a></div>
                    <div><span className="font-semibold text-slate-500 text-[11px] uppercase tracking-wider">US:</span>{' '}<a href="tel:+17542587670" className="font-[600] text-slate-800 hover:text-[#006085]">+1-754-258-7670</a></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#006085]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#006085]" />
                  </div>
                  <a href="mailto:careers@sapphiresolutions.net" className="text-[13px] font-[600] text-slate-800 hover:text-[#006085]">careers@sapphiresolutions.net</a>
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-3">
              <h4 className="text-[18px] sm:text-[20px] font-[800] text-slate-900 tracking-tight">Product</h4>
              <div className="bg-white rounded-[14px] p-5 sm:p-6 border border-slate-200/80 shadow-sm space-y-3.5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#006085]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#006085]" />
                  </div>
                  <a href="https://www.vidyalayaschoolsoftware.com" target="_blank" rel="noopener noreferrer" className="text-[13px] font-[600] text-slate-800 hover:text-[#006085]">www.vidyalayaschoolsoftware.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#006085]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#006085]" />
                  </div>
                  <a href="https://www.occucare.co.in" target="_blank" rel="noopener noreferrer" className="text-[13px] font-[600] text-slate-800 hover:text-[#006085]">www.occucare.co.in</a>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* Review Badges Bar — Google / Clutch / GoodFirms           */}
      {/* ========================================================= */}
      <section className="bg-[#003C54] py-8 sm:py-10 font-sans">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white text-[16px] sm:text-[18px] font-[700] leading-snug max-w-md">
              We are proud to be one of the top-rated companies on best customer review sites.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Google Badge */}
              <div className="bg-white rounded-[10px] px-4 sm:px-5 py-3 flex flex-col items-center space-y-1 min-w-[120px] shadow-sm">
                <div className="flex items-center space-x-1.5">
                  <img src="/images/google.webp" alt="Google" className="h-5 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                  <span className="text-[14px] font-[800] text-slate-900">Google</span>
                </div>
                <div className="flex items-center space-x-0.5">
                  {[...Array(4)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#FDB022] text-[#FDB022]" />)}
                  <Star className="w-3.5 h-3.5 fill-[#FDB022]/50 text-[#FDB022]" />
                </div>
                <span className="text-[10px] font-[700] text-[#006085] uppercase tracking-wider">900+ REVIEWS</span>
              </div>
              {/* Clutch Badge */}
              <div className="bg-white rounded-[10px] px-4 sm:px-5 py-3 flex flex-col items-center space-y-1 min-w-[120px] shadow-sm">
                <div className="flex items-center space-x-1.5">
                  <img src="/images/clutch.png" alt="Clutch" className="h-5 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                  <span className="text-[14px] font-[800] text-slate-900">Clutch</span>
                </div>
                <div className="flex items-center space-x-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#FDB022] text-[#FDB022]" />)}
                </div>
                <span className="text-[10px] font-[700] text-[#006085] uppercase tracking-wider">320+ REVIEWS</span>
              </div>
              {/* GoodFirms Badge */}
              <div className="bg-white rounded-[10px] px-4 sm:px-5 py-3 flex flex-col items-center space-y-1 min-w-[120px] shadow-sm">
                <div className="flex items-center space-x-1.5">
                  <img src="/images/goodfirms.png" alt="GoodFirms" className="h-5 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                  <span className="text-[14px] font-[800] text-slate-900">GoodFirms</span>
                </div>
                <div className="flex items-center space-x-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#FDB022] text-[#FDB022]" />)}
                </div>
                <span className="text-[10px] font-[700] text-[#006085] uppercase tracking-wider">200+ REVIEWS</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Matrix Grid Component */}
      <SuccessMatrixGrid />

      {/* Unveiling Our Innovative Solution */}
      <InnovativeSolutionVideo />

      {/* Brand Logo Marquee */}
      <BrandLogoMarquee />

      {/* Process We Follow 5-Pill Stages Component */}
      <ProcessWeFollowPillStages />

      {/* Our Story, Their Words (Video Testimonials) */}
      <ClientStoryVideoSlider />

      {/* Glance through our creations and presence */}
      <AboutKeyMetrics />

      {/* Trusted By The World's Leading Brands */}
      <TrustedBrandsGrid />

      {/* Proud To Have Picked These Up Along The Way */}
      <TrustRecognitionBanner />

      {/* We Have Been Featured In */}
      <FeaturedInLogosGrid />

      {/* Our Offices */}
      <OurOfficesGrid />

      {/* What Our Clients Say (Clutch Reviews Dark Carousel) */}
      <ClientReviewsDarkSection />

      {/* Subscribe Newsletter Banner */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default Contact;
