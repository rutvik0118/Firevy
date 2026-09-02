import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, Star, ShieldCheck, CheckCircle2, ArrowUp, Facebook, Twitter, Linkedin, Instagram, Youtube, Landmark, Building2, Globe2 } from 'lucide-react';
import BRAND from '../../constants/brand';
import Container from '../common/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const awardBadges = [
    { name: 'GESIA Certified Member', symbol: '🏅' },
    { name: 'ISO 27001:2013 Security Certified', symbol: '🔒' },
    { name: 'Gujarat Chamber of Commerce', symbol: '🏛️' },
    { name: 'ITFirms Top Rated 2026', symbol: '⭐' },
    { name: 'SoftwareWorld Top Developer', symbol: '🏆' },
    { name: 'Clutch Top Global Company', symbol: '🎖️' },
    { name: 'Top iPhone App Dev', symbol: '📱' },
    { name: 'Top E-Commerce Engineers', symbol: '🛒' },
    { name: 'Blockchain Innovation Seal', symbol: '⛓️' }
  ];

  const globalOffices = [
    {
      country: '🇮🇳 India (HQ)',
      address: 'C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, S.G. Highway, Ahmedabad - 380060, Gujarat, INDIA.',
      landmark: 'Statue of Unity / India HQ',
      icon: Landmark
    },
    {
      country: '🇺🇸 USA',
      address: '5004 NW 116th Ave Coral Springs, Florida, FL 33076, United States.',
      landmark: 'Florida Tech Center',
      icon: Building2
    },
    {
      country: '🇨🇦 Canada',
      address: '111 Tarawood lane NE, unit#403 Calgary AB, T3J 0G8, Canada.',
      landmark: 'Calgary Innovation Hub',
      icon: Globe2
    },
    {
      country: '🇦🇺 Australia',
      address: 'U 2B 305 Harborne Street, Glendalough 6016 WA, Australia.',
      landmark: 'Perth Tech Suite',
      icon: Building2
    },
    {
      country: '🇬🇧 UK',
      address: '42 Audley Avenue, Gillingham, ME73AY, United Kingdom.',
      landmark: 'London Metro Region',
      icon: Landmark
    },
    {
      country: '🇦🇪 UAE',
      address: 'A-21, Building 21, Ghoroob, Mirdif Dubai, United Arab Emirates.',
      landmark: 'Dubai International Center',
      icon: Globe2
    }
  ];

  return (
    <footer className="bg-[#EBF4F8] text-slate-900 pt-16 pb-0 relative overflow-hidden border-t border-slate-200 font-sans">
      <Container>
        {/* 1. "Awards & Recognition" Top Bar */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#006B8F] tracking-tight">
              Awards & Recognition
            </h3>
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest hidden sm:inline">
              GLOBAL CERTIFICATIONS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {awardBadges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center hover:border-[#006B8F] hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">{badge.symbol}</span>
                <span className="text-[10px] font-bold text-slate-700 leading-tight font-sans">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Main Footer Grid Layout (Two Main Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 items-start text-left">
          {/* Left Column (Contact & Reviews Group) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Top Left Row: 2 Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Contact For Sales */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs font-mono font-extrabold text-[#006B8F] uppercase tracking-wider mb-2">
                  Contact For Sales
                </div>
                <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <a href={`mailto:${BRAND.contact.email}`} className="flex items-center space-x-1.5 hover:text-[#006B8F] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#006B8F] shrink-0" />
                    <span className="truncate">{BRAND.contact.email}</span>
                  </a>
                  <a href={`tel:${BRAND.contact.phoneIN}`} className="flex items-center space-x-1.5 hover:text-[#006B8F] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#006B8F] shrink-0" />
                    <span>IN: {BRAND.contact.phoneIN}</span>
                  </a>
                  <a href={`tel:${BRAND.contact.phoneUS}`} className="flex items-center space-x-1.5 hover:text-[#006B8F] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#006B8F] shrink-0" />
                    <span>US: {BRAND.contact.phoneUS}</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Contact for Career */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs font-mono font-extrabold text-[#006B8F] uppercase tracking-wider mb-2">
                  Contact for Career (Jobs)
                </div>
                <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <a href="mailto:careers@firevy.co" className="flex items-center space-x-1.5 hover:text-[#006B8F] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#006B8F] shrink-0" />
                    <span className="truncate">careers@firevy.co</span>
                  </a>
                  <a href="tel:+919099976034" className="flex items-center space-x-1.5 hover:text-[#006B8F] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#006B8F] shrink-0" />
                    <span>+91-909-997-6034</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Left Row: 3 Rating & Review Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm text-center">
                <div className="text-sm font-black text-amber-500 flex items-center justify-center space-x-0.5 mb-0.5">
                  <span>5.0</span>
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="text-[10px] font-black text-slate-800 font-sans">Google Review</div>
                <div className="text-[9px] font-extrabold text-emerald-600 font-mono mt-0.5">900+ REVIEWS</div>
              </div>

              <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm text-center">
                <div className="text-sm font-black text-amber-500 flex items-center justify-center space-x-0.5 mb-0.5">
                  <span>5.0</span>
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="text-[10px] font-black text-slate-800 font-sans">Clutch Review</div>
                <div className="text-[9px] font-extrabold text-emerald-600 font-mono mt-0.5">320+ REVIEWS</div>
              </div>

              <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm text-center">
                <div className="text-sm font-black text-amber-500 flex items-center justify-center space-x-0.5 mb-0.5">
                  <span>5.0</span>
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="text-[10px] font-black text-slate-800 font-sans">GoodFirms</div>
                <div className="text-[9px] font-extrabold text-emerald-600 font-mono mt-0.5">200+ REVIEWS</div>
              </div>
            </div>

            {/* Bottom Left Row: Compliance Badges & Social Icons */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono font-bold text-slate-600">
                <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">W3C XHTML</span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">DMCA Protected</span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">Copyscape Protected</span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">W3C CSS</span>
              </div>

              {/* Circular Social Buttons */}
              <div className="flex items-center space-x-3">
                <a href={BRAND.social.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#006B8F] hover:bg-[#004A75] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#006B8F] hover:bg-[#004A75] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={BRAND.social.github} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#006B8F] hover:bg-[#004A75] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#006B8F] hover:bg-[#004A75] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#006B8F] hover:bg-[#004A75] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Global Offices Grid - 6 Rounded White Cards) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-mono">
                GLOBAL ENGINEERING OFFICES
              </h4>
              <span className="text-xs text-slate-500 font-medium">6 Locations Worldwide</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {globalOffices.map((office, idx) => {
                const IconComponent = office.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#006B8F] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-black text-slate-900 font-sans">{office.country}</span>
                        <IconComponent className="w-4 h-4 text-[#006B8F] group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                        {office.address}
                      </p>
                    </div>
                    <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>{office.landmark}</span>
                      <MapPin className="w-3 h-3 text-[#006B8F]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* 3. Bottom Copyright Bar */}
      <div className="bg-[#006B8F] text-white py-4 px-6 relative z-10 font-sans">
        <Container className="flex flex-col sm:flex-row items-center justify-between text-xs space-y-3 sm:space-y-0">
          <div>
            © {currentYear} firevy.co. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-cyan-200 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-cyan-200 transition-colors">Terms of Use</Link>
            <span>|</span>
            <a href="/sitemap.xml" className="hover:text-cyan-200 transition-colors">Sitemap</a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
