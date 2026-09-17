import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { homePageService } from '../../services/homePageService';
import { initialHomePageData } from '../../constants/initialHomePageData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [footerConfig, setFooterConfig] = useState(initialHomePageData.sections.footerSection);

  useEffect(() => {
    let isMounted = true;
    const fetchFooterData = async () => {
      try {
        const res = await homePageService.getHomePageData();
        if (isMounted && res && res.sections && res.sections.footerSection) {
          setFooterConfig(res.sections.footerSection);
        }
      } catch {
        // graceful fallback to default initial state
      }
    };
    fetchFooterData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinksData = {
    company: {
      title: 'Company',
      links: [
        { name: 'About firevy.co', path: '/about' },
        { name: 'Our Team', path: '/company/our-team' },
        { name: 'Events & Activities', path: '/company/events-activities' },
        { name: 'Careers (Jobs)', path: '/careers' },
        { name: 'Contact-Us', path: '/contact' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Awards & Recognition', path: '/company/awards-recognition' },
        { name: 'Why Choose Us', path: '/company/why-choose-us' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'Software Development', path: '/services/custom-software-development' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Progressive Web App Development', path: '/services/web-development' },
        { name: 'IT Outsourcing Services', path: '/services' },
        { name: 'Blockchain Development', path: '/services' },
        { name: 'Full Stack Development Services', path: '/services/custom-software-development' },
        { name: 'Next Js Development', path: '/services/web-development' }
      ]
    },
    technology: {
      title: 'Technology',
      links: [
        { name: '.NET Development', path: '/technologies' },
        { name: 'PHP Development', path: '/technologies' },
        { name: 'Android Development', path: '/technologies' },
        { name: 'iOS Development', path: '/technologies' },
        { name: 'Flutter Development', path: '/technologies' },
        { name: 'Angular Development', path: '/services/angular' },
        { name: 'React Development', path: '/services/react' },
        { name: 'NodeJS Development', path: '/technologies' }
      ]
    },
    hireDevelopers: {
      title: 'Hire Developers',
      links: [
        { name: 'Hire Mobile App Developers', path: '/services/dedicated-developers' },
        { name: 'Hire Dedicated Developers', path: '/services/dedicated-developers' },
        { name: 'Hire Software Developers', path: '/services/dedicated-developers' },
        { name: 'Hire AI Developers', path: '/services/dedicated-developers' },
        { name: 'Hire Flutter App Developers', path: '/services/dedicated-developers' },
        { name: 'Hire Full Stack Developer', path: '/services/full-stack' },
        { name: 'Hire Android App Developers', path: '/services/android' },
        { name: 'Hire React Js Developers', path: '/services/hire-react-developers' }
      ]
    },
    aiServices: {
      title: 'AI Services',
      links: [
        { name: 'AI Development Service', path: '/services/ai-machine-learning' },
        { name: 'AI Copilot Development', path: '/services/ai-machine-learning' },
        { name: 'Ethical AI Development', path: '/services/ai-machine-learning' },
        { name: 'AI Prompt Engineering', path: '/services/ai-machine-learning' },
        { name: 'Adaptive AI Development', path: '/services/ai-machine-learning' },
        { name: 'Generative AI Development', path: '/services/ai-machine-learning' },
        { name: 'AI in Business Intelligence Development', path: '/services/ai-machine-learning' },
        { name: 'AI in Marketing', path: '/services/ai-machine-learning' }
      ]
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'Taxi Booking App', path: '/services/taxi-booking-app-development' },
        { name: 'Covid Tracker App', path: '/services/covid-tracker-app-development' },
        { name: 'E-Commerce App', path: '/services/ecommerce-mobile-app-development' },
        { name: 'Product Finder App', path: '/services/product-finder-app-development' },
        { name: 'Eyelash Booking App', path: '/services/eyelash-appointment-booking-app' },
        { name: 'Language Learning App', path: '/services/language-learning-app' },
        { name: 'Barber Shop Booking App', path: '/services/barber-app-development' },
        { name: 'On Demand App Development', path: '/services/on-demand-app-development' }
      ]
    }
  };

  return (
    <footer className="bg-white text-slate-900 pt-8 pb-0 relative overflow-hidden font-sans border-t border-slate-200/80 w-full">
      
      {/* TOP SECTION: 6-COLUMN LINKS & AWARDS (WHITE BACKGROUND) */}
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 mx-auto space-y-6">
        
        {/* 1. TOP 6-COLUMN FOOTER LINKS IN CLEAN WHITE BOX - FULL WIDTH */}
        <div className="w-full bg-white rounded-[24px] border border-slate-200/90 shadow-sm p-6 sm:p-8 xl:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-left">
            {Object.keys(footerLinksData).map((key) => {
              const col = footerLinksData[key];
              return (
                <div key={key} className="space-y-4">
                  <h4 className="text-[17px] sm:text-[18px] font-[800] text-[#006B8F] font-sans tracking-tight">
                    {col.title}
                  </h4>
                  <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] font-[400] text-slate-700 font-sans">
                    {col.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          to={link.path}
                          className="hover:text-[#006B8F] transition-colors flex items-start space-x-2 group"
                        >
                          <span className="text-[#006B8F] text-[12px] leading-none shrink-0 mt-0.5">•</span>
                          <span className="leading-snug">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. AWARDS & RECOGNITION BADGE BANNER — FULL WIDTH */}
        <div className="w-full bg-white rounded-[16px] sm:rounded-[20px] border border-slate-200/90 shadow-sm p-4 sm:p-5 lg:p-6 text-left">
          <h3 className="text-[17px] sm:text-[19px] font-[800] text-[#006B8F] tracking-tight mb-4 sm:mb-5 font-sans">
            Awards & Recognition
          </h3>
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-1 scrollbar-none">
            {[
              { name: 'GESIA IT Association', img: '/images/gesia.png' },
              { name: 'ISO 27001:2013 Certified Company', img: '/images/iso_footer.png' },
              { name: 'Gujarat Chamber of Commerce & Industry', img: '/images/gcci.png' },
              { name: 'GoodFirms Top Mobile App Development Company', img: '/images/awards/top_mobile_app_goodfirm.svg' },
              { name: 'GoodFirms Top Web Development Company', img: '/images/awards/top_web_dev_goodfirm.svg' },
              { name: 'SoftwareWorld Top Rated App Development Companies', img: '/images/software_world_footer.png' },
              { name: 'Clutch Top Company Development India', img: '/images/clutchfooter.png' },
              { name: 'The Manifest Most Reviewed Software Developers', img: '/images/awards/top_the_manifest_software_developers_2022_award.png' },
              { name: 'The Manifest Most Reviewed iPhone App Development Company', img: '/images/awards/top_the_manifest_iphone_app_development_company_2022_award.webp' },
              { name: 'The Manifest Most Reviewed E-Commerce Developers', img: '/images/awards/top_the_manifest_e-commerce_developers_2022_award.png' },
              { name: 'The Manifest Most Reviewed Blockchain Company', img: '/images/awards/top_the_manifest_blockchain_company_2022_award.png' },
              { name: 'The Manifest Most Reviewed App Development Company', img: '/images/awards/top_the_manifest_app_development_company_2022_award.webp' },
              { name: 'The Manifest Most Reviewed Design Company', img: '/images/awards/top_the_manifest_design_company_2022_award.png' },
              { name: 'The Manifest Most Reviewed Web Developers', img: '/images/awards/top_the_manifest_web_developers_2022_award.png' }
            ].map((badge, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center justify-center p-1 hover:scale-105 transition-transform duration-200"
                title={badge.name}
              >
                <img
                  src={badge.img}
                  alt={badge.name}
                  className="h-12 sm:h-14 md:h-16 lg:h-[70px] w-auto max-w-[80px] object-contain select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. MAIN LOWER SECTION WITH BACKGROUND COLOR (#edf5f9) - FULL WIDTH */}
      <div className="w-full bg-[#edf5f9] mt-8 pt-8 pb-4 border-t border-slate-200/80">
        <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-4 items-start text-left">
          
          {/* LEFT GROUP (Col 5 / 12) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* firevy.co Brand Logo */}
            <Link to="/" className="inline-block">
              <img
                src="/firevy_logo_dark.png"
                alt="firevy.co"
                className="h-10 sm:h-12 w-auto max-w-[220px] object-contain"
              />
            </Link>

            {/* Two Contact Cards Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Contact For Sales */}
              <div className="bg-white rounded-[16px] p-5 border border-slate-200/90 shadow-sm space-y-3 min-h-[145px] flex flex-col justify-between">
                <div className="text-[16px] font-[800] text-slate-900 font-sans">
                  {footerConfig?.salesContact?.title || 'Contact For Sales'}
                </div>
                <div className="space-y-2 text-[12.5px] text-slate-700 font-sans">
                  {(footerConfig?.salesContact?.email || 'contact@firevy.co') && (
                    <a
                      href={`mailto:${footerConfig?.salesContact?.email || 'contact@firevy.co'}`}
                      className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#0080B0] shrink-0" />
                      <span className="truncate font-[500]">
                        {footerConfig?.salesContact?.email || 'contact@firevy.co'}
                      </span>
                    </a>
                  )}
                  {(footerConfig?.salesContact?.phoneIndia || 'IN:+91-942-970-9662') && (
                    <a
                      href={`tel:${(footerConfig?.salesContact?.phoneIndia || '+91-942-970-9662').replace(/[^0-9+]/g, '')}`}
                      className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#0080B0] shrink-0" />
                      <span className="font-[600]">
                        {footerConfig?.salesContact?.phoneIndia || 'IN:+91-942-970-9662'}
                      </span>
                    </a>
                  )}
                  {(footerConfig?.salesContact?.phoneUS || 'US:+1-754-258-7670') && (
                    <a
                      href={`tel:${(footerConfig?.salesContact?.phoneUS || '+1-754-258-7670').replace(/[^0-9+]/g, '')}`}
                      className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#0080B0] shrink-0" />
                      <span className="font-[600]">
                        {footerConfig?.salesContact?.phoneUS || 'US:+1-754-258-7670'}
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Card 2: Contact for Career (Jobs) */}
              <div className="bg-white rounded-[16px] p-5 border border-slate-200/90 shadow-sm space-y-3 min-h-[145px] flex flex-col justify-between">
                <div className="text-[16px] font-[800] text-slate-900 font-sans">
                  {footerConfig?.careerContact?.title || 'Contact for Career (Jobs)'}
                </div>
                <div className="space-y-2 text-[12.5px] text-slate-700 font-sans">
                  {(footerConfig?.careerContact?.email || 'careers@firevy.co') && (
                    <a
                      href={`mailto:${footerConfig?.careerContact?.email || 'careers@firevy.co'}`}
                      className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#0080B0] shrink-0" />
                      <span className="truncate font-[500]">
                        {footerConfig?.careerContact?.email || 'careers@firevy.co'}
                      </span>
                    </a>
                  )}
                  {(footerConfig?.careerContact?.phone || '+91-909-997-6034') && (
                    <a
                      href={`tel:${(footerConfig?.careerContact?.phone || '+91-909-997-6034').replace(/[^0-9+]/g, '')}`}
                      className="flex items-center space-x-2 hover:text-[#006B8F] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#0080B0] shrink-0" />
                      <span className="font-[600]">
                        {footerConfig?.careerContact?.phone || '+91-909-997-6034'}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Three Rating Badges (Google, Clutch, GoodFirms) with Laurel Wreaths */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {/* Google */}
              <div className="bg-white rounded-[16px] px-2 py-2 sm:py-2.5 border border-slate-200/90 shadow-sm flex items-center justify-between space-x-1 sm:space-x-1.5 hover:shadow-md transition-shadow">
                <img src="/images/left-leaf.svg" alt="" className="h-9 sm:h-11 w-auto shrink-0 select-none opacity-85" />
                <div className="flex flex-col items-center justify-center text-center min-w-0 flex-1 px-0.5">
                  <img src="/images/google.webp" alt="Google" className="h-5 sm:h-6 w-auto object-contain mb-0.5" />
                  <span className="text-[9px] sm:text-[10px] font-[900] text-black font-sans tracking-tight leading-none whitespace-nowrap">
                    {footerConfig?.ratings?.googleReviews || '900+ REVIEWS'}
                  </span>
                </div>
                <img src="/images/right-leaf.svg" alt="" className="h-9 sm:h-11 w-auto shrink-0 select-none opacity-85" />
              </div>

              {/* Clutch */}
              <div className="bg-white rounded-[16px] px-2 py-2 sm:py-2.5 border border-slate-200/90 shadow-sm flex items-center justify-between space-x-1 sm:space-x-1.5 hover:shadow-md transition-shadow">
                <img src="/images/left-leaf.svg" alt="" className="h-9 sm:h-11 w-auto shrink-0 select-none opacity-85" />
                <div className="flex flex-col items-center justify-center text-center min-w-0 flex-1 px-0.5">
                  <img src="/images/clutch.webp" alt="Clutch" className="h-5 sm:h-6 w-auto object-contain mb-0.5" />
                  <span className="text-[9px] sm:text-[10px] font-[900] text-black font-sans tracking-tight leading-none whitespace-nowrap">
                    {footerConfig?.ratings?.clutchReviews || '320+ REVIEWS'}
                  </span>
                </div>
                <img src="/images/right-leaf.svg" alt="" className="h-9 sm:h-11 w-auto shrink-0 select-none opacity-85" />
              </div>

              {/* GoodFirms */}
              <div className="bg-white rounded-[16px] px-2 py-2 sm:py-2.5 border border-slate-200/90 shadow-sm flex items-center justify-between space-x-1 sm:space-x-1.5 hover:shadow-md transition-shadow">
                <img src="/images/left-leaf.svg" alt="" className="h-9 sm:h-11 w-auto shrink-0 select-none opacity-85" />
                <div className="flex flex-col items-center justify-center text-center min-w-0 flex-1 px-0.5">
                  <img src="/images/goodfirms.webp" alt="GoodFirms" className="h-5 sm:h-6 w-auto object-contain mb-0.5" />
                  <span className="text-[9px] sm:text-[10px] font-[900] text-black font-sans tracking-tight leading-none whitespace-nowrap">
                    {footerConfig?.ratings?.goodFirmsReviews || '200+ REVIEWS'}
                  </span>
                </div>
                <img src="/images/right-leaf.svg" alt="" className="h-9 sm:h-11 w-auto shrink-0 select-none opacity-85" />
              </div>
            </div>

            {/* Compliance Badges & Circular Social Icons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center space-x-2 text-[9px] font-[700]">
                <span className="px-2 py-0.5 bg-[#FFF176] text-slate-900 border border-amber-300 font-mono text-[8.5px] rounded-[3px]">W3C XHTML 1.0</span>
                <span className="px-2 py-0.5 bg-[#81C784] text-slate-900 border border-green-400 text-[8.5px] rounded-[3px]">DMCA PROTECTED</span>
                <span className="px-2 py-0.5 bg-[#90CAF9] text-slate-900 border border-blue-300 text-[8.5px] rounded-[3px]">COPYSCAPE</span>
                <span className="px-2 py-0.5 bg-[#FFF59D] text-slate-900 border border-amber-300 font-mono text-[8.5px] rounded-[3px]">W3C CSS</span>
              </div>

              <div className="flex items-center space-x-2">
                {[
                  { name: 'FB', href: footerConfig?.socialLinks?.facebook || 'https://facebook.com', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { name: 'X', href: footerConfig?.socialLinks?.twitter || 'https://twitter.com', path: 'M4 4l6.5 8.5L4 20h2l5.5-6.5L16 20h4l-7-9 6-7h-2l-5 6L8 4z' },
                  { name: 'IN', href: footerConfig?.socialLinks?.linkedin || 'https://linkedin.com', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                  { name: 'IG', href: footerConfig?.socialLinks?.instagram || 'https://instagram.com', path: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6z' },
                  { name: 'YT', href: footerConfig?.socialLinks?.youtube || 'https://youtube.com', path: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z' }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0080B0] hover:bg-[#006B8F] text-white flex items-center justify-center transition-colors shadow-xs"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" fill="none">
                      <path d={item.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT GROUP: 6 GLOBAL OFFICES GRID — TALL SPACIOUS CARDS (Col 7 / 12) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(footerConfig?.offices && footerConfig.offices.length > 0 ? footerConfig.offices : [
                { id: '1', country: 'India(HQ)', flag: '/images/india_office.svg', address: 'C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, S.G. Highway, Ahmedabad - 380060, Gujarat, INDIA' },
                { id: '2', country: 'USA', flag: '/images/usa_office.svg', address: '5004 NW 116th Ave Coral Springs, Florida, FL 33076' },
                { id: '3', country: 'Canada', flag: '/images/canada_office.svg', address: '111 Tarawood lane NE, unit#403 Calgary AB, T3J 0G8' },
                { id: '4', country: 'Australia', flag: '/images/aus_office.svg', address: 'U 2B 305 Harborne Street, Glendalough 6016 WA' },
                { id: '5', country: 'UK', flag: '/images/uk_office.svg', address: '42 Audley Avenue, Gillingham, ME73AY United Kingdom' },
                { id: '6', country: 'UAE', flag: '/images/uae_office.svg', address: 'A-21, Building 21, Ghoroob, Mirdif Dubai, United Arab Emirates' }
              ]).map((office, idx) => {
                const countryLower = (office.country || '').toLowerCase();
                
                const getFlag = () => {
                  if (office.flag && (office.flag.startsWith('/') || office.flag.startsWith('http') || office.flag.includes('.svg') || office.flag.includes('.png'))) {
                    return office.flag;
                  }
                  if (countryLower.includes('india') || idx === 0) return '/images/india_office.svg';
                  if (countryLower.includes('usa') || countryLower.includes('states') || idx === 1) return '/images/usa_office.svg';
                  if (countryLower.includes('canada') || idx === 2) return '/images/canada_office.svg';
                  if (countryLower.includes('aus') || idx === 3) return '/images/aus_office.svg';
                  if (countryLower.includes('uk') || countryLower.includes('kingdom') || idx === 4) return '/images/uk_office.svg';
                  if (countryLower.includes('uae') || countryLower.includes('emirates') || countryLower.includes('dubai') || idx === 5) return '/images/uae_office.svg';
                  return '/images/india_office.svg';
                };

                const getSketch = () => {
                  if (countryLower.includes('india') || idx === 0) return '/images/india_iamge.png';
                  if (countryLower.includes('usa') || countryLower.includes('states') || idx === 1) return '/images/usaimage.png';
                  if (countryLower.includes('canada') || idx === 2) return '/images/canadaimage.png';
                  if (countryLower.includes('aus') || idx === 3) return '/images/ausimage.png';
                  if (countryLower.includes('uk') || countryLower.includes('kingdom') || idx === 4) return '/images/ukimage.png';
                  if (countryLower.includes('uae') || countryLower.includes('emirates') || countryLower.includes('dubai') || idx === 5) return '/images/uae_image.png';
                  return '/images/india_iamge.png';
                };

                return (
                  <div
                    key={office.id || idx}
                    className="bg-white rounded-[18px] p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-[180px] sm:h-[190px] relative overflow-hidden group hover:border-[#006B8F]/40 transition-colors"
                  >
                    <div>
                      <div className="font-[800] text-slate-900 text-[15px] sm:text-[16px] mb-2 font-sans flex items-center space-x-2.5">
                        <img
                          src={getFlag()}
                          alt={office.country}
                          className="w-6 h-4.5 object-contain shrink-0 rounded-xs shadow-2xs"
                        />
                        <span>{office.country}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-[12.5px] font-[400] font-sans pr-14 line-clamp-4">
                        {office.address}
                      </p>
                    </div>
                    <div className="absolute right-2.5 bottom-1.5 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
                      <img
                        src={getSketch()}
                        alt=""
                        className="h-20 sm:h-22 w-auto object-contain max-w-[85px] sm:max-w-[100px]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* 4. SOLID BLUE COPYRIGHT BAR ACROSS FULL WIDTH */}
      <div className="bg-[#006B8F] text-white py-3.5 px-4 sm:px-8 xl:px-10 mt-0 w-full">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[13px] font-sans">
          <div>
            {footerConfig?.copyrightText || `© ${currentYear} firevy.co. All rights reserved.`}
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0 text-blue-100">
            <Link to={footerConfig?.privacyPolicyLink || "/privacy-policy"} className="hover:text-white transition-colors">
              {footerConfig?.privacyPolicyText || "Privacy Policy"}
            </Link>
            <span>|</span>
            <Link to={footerConfig?.termsOfUseLink || "/terms"} className="hover:text-white transition-colors">
              {footerConfig?.termsOfUseText || "Terms of Use"}
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#006B8F] hover:bg-[#005478] text-white shadow-xl transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
