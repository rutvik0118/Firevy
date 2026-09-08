import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Mail, Calendar, Briefcase, MessageSquare } from 'lucide-react';
import BRAND from '../../constants/brand';
import MegaMenu from './MegaMenu';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMenuHover = (menuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuType);
  };

  const handleMenuLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250); // 250ms smooth grace period
  };

  const navLinks = [
    { name: 'Company', hasMenu: 'company', path: '/about' },
    { name: 'Product', hasMenu: 'solutions', path: '/services' },
    { name: 'Services', hasMenu: 'services', path: '/services' },
    { name: 'Hire Developers', hasMenu: 'hire-developers', path: '/services/dedicated-developers' },
    { name: 'Technology', hasMenu: 'technologies', path: '/technologies' },
    { name: 'Our Work', hasMenu: 'our-work', path: '/portfolio' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Announcement / Utility Bar - Hides on homepage top or on scroll */}
      <AnimatePresence>
        {!isScrolled && location.pathname !== '/' && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.08, ease: 'easeOut' }}
            className="hidden lg:block bg-[#F4F7F9] border-b border-slate-200/90 text-[12px] font-sans text-slate-700 overflow-hidden"
          >
            <div className="w-full px-6 lg:px-10 py-1.5 flex items-center justify-between">
              {/* Sales Phone Numbers */}
              <div className="flex items-center space-x-6">
                <a href={`tel:${BRAND.contact.phoneUS}`} className="flex items-center space-x-1.5 hover:text-[#005F96] transition-colors">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">US</span>
                  <span className="text-slate-500">For Sales:</span>
                  <span className="font-bold text-slate-800">{BRAND.contact.phoneUS}</span>
                </a>
                <a href={`tel:${BRAND.contact.phoneIN}`} className="flex items-center space-x-1.5 hover:text-[#005F96] transition-colors">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">IN</span>
                  <span className="text-slate-500">For Sales:</span>
                  <span className="font-bold text-slate-800">{BRAND.contact.phoneIN}</span>
                </a>
              </div>

              {/* Center / Right Links */}
              <div className="flex items-center space-x-6">
                <span className="flex items-center space-x-1.5 text-slate-700 font-semibold">
                  <Briefcase className="w-3.5 h-3.5 text-[#005F96]" />
                  <span>Firevy Enterprise IT Solutions</span>
                </span>

                <a href={`mailto:${BRAND.contact.email}`} className="flex items-center space-x-1.5 text-slate-700 hover:text-[#005F96] transition-colors font-medium">
                  <Mail className="w-3.5 h-3.5 text-red-500" />
                  <span>{BRAND.contact.email}</span>
                </a>

                <Link to="/contact" className="flex items-center space-x-1.5 text-[#005F96] hover:text-[#004A75] font-bold transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-[#005F96]" />
                  <span>Schedule a Meeting</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header Bar - Spacious 82px Height Matching Reference Site */}
      <div className={`relative transition-all duration-300 h-[82px] flex items-center ${
        location.pathname === '/' && !isScrolled
          ? 'bg-[#031120]/80 backdrop-blur-md border-b border-white/10 text-white shadow-lg'
          : 'bg-white border-b border-slate-200 text-slate-900 shadow-sm'
      }`}>
        <div className="w-full px-6 lg:px-10 flex items-center justify-between h-full">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group shrink-0 mr-6">
            {location.pathname === '/' && !isScrolled ? (
              <img
                src="/images/sapphire_logo_white.svg"
                alt="Sapphire Software Solutions"
                className="h-9 w-auto object-contain"
              />
            ) : (
              <span className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-wider font-sans text-slate-900 group-hover:opacity-90 transition-colors">
                firevy<span className="text-[#005F96]">.co</span>
              </span>
            )}
          </Link>

          {/* Desktop Nav & Action CTAs */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8 h-full">
            <nav className="flex items-center space-x-5 xl:space-x-7 h-full relative" onMouseLeave={handleMenuLeave}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || activeDropdown === link.hasMenu;
                const hasMenu = Boolean(link.hasMenu);
                const isDarkHeader = location.pathname === '/' && !isScrolled;

                return (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center px-1"
                    onMouseEnter={() => hasMenu && handleMenuHover(link.hasMenu)}
                  >
                    <Link
                      to={link.path}
                      className={`text-sm xl:text-[15.5px] font-semibold transition-colors flex items-center space-x-1 ${
                        isDarkHeader
                          ? (isActive ? 'text-cyan-300 font-bold' : 'text-white/90 hover:text-cyan-300')
                          : (isActive ? 'text-[#005F96] font-bold' : 'text-[#2D3748] hover:text-[#005F96]')
                      }`}
                    >
                      <span>{link.name}</span>
                      {hasMenu && (
                        <span className={`text-[11px] leading-none ml-0.5 ${isDarkHeader ? 'text-white/60' : 'text-slate-400'}`}>
                          ▾
                        </span>
                      )}
                    </Link>

                    {isActive && (
                      <motion.div
                        layoutId="activeHeaderTab"
                        className={`absolute bottom-0 left-0 right-0 h-[3px] ${isDarkHeader ? 'bg-cyan-400' : 'bg-[#005F96]'}`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Actions: Gradient Magenta-Purple Button ("Let's Talk AI") + Deep Blue Button ("Contact Us") */}
            <div className="flex items-center space-x-3 shrink-0 ml-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 text-xs xl:text-sm font-bold text-white rounded-[6px] bg-gradient-to-r from-[#D81B60] via-[#8E24AA] to-[#7B1FA2] hover:opacity-95 shadow-md transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 mr-1.5 text-amber-300 animate-pulse" />
                <span>Let's Talk AI</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-xs xl:text-sm font-bold text-white rounded-[6px] bg-[#006B8F] hover:bg-[#005478] transition-all duration-300 shadow-md hover:scale-105"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg border text-slate-800 bg-slate-100 border-slate-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Full-Width Mega Menu Dropdown - Positions Flush 0px Below Header Bar */}
        <AnimatePresence>
          {activeDropdown && (
            <div
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMenuLeave}
            >
              <MegaMenu type={activeDropdown} onClose={() => setActiveDropdown(null)} />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-200 px-4 pt-4 pb-6 overflow-hidden max-h-[85vh] overflow-y-auto bg-white text-slate-900 shadow-xl"
          >
            <div className="flex flex-col space-y-2 text-left">
              {navLinks.map((link) => {
                const isExpanded = mobileExpandedMenu === link.hasMenu;
                const subItems = link.hasMenu ? mobileSubMenus[link.hasMenu] : [];

                return (
                  <div key={link.name} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex-1 px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                          location.pathname === link.path
                            ? 'bg-blue-50 text-[#005F96]'
                            : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        {link.name}
                      </Link>

                      {subItems && subItems.length > 0 && (
                        <button
                          onClick={() => toggleMobileAccordion(link.hasMenu)}
                          className="p-3 rounded-xl transition-colors text-slate-600 hover:bg-slate-100"
                          aria-label={`Toggle ${link.name} submenu`}
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#005F96]' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Submenu Drawer Content */}
                    <AnimatePresence>
                      {isExpanded && subItems && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-6 pr-2 py-1 space-y-1 my-1 border-l-2 border-[#005F96] ml-4"
                        >
                          {subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#005F96] rounded-lg transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col space-y-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-[6px] font-bold text-white bg-gradient-to-r from-[#D81B60] via-[#8E24AA] to-[#7B1FA2] shadow-md flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Let's Talk AI</span>
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-[6px] font-bold text-white bg-[#005F96] hover:bg-[#004A75] flex items-center justify-center space-x-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>

                <div className="text-center text-xs text-slate-500 pt-2 space-y-1">
                  <div>🇺🇸 Sales: {BRAND.contact.phoneUS}</div>
                  <div>🇮🇳 Sales: {BRAND.contact.phoneIN}</div>
                  <div>✉️ {BRAND.contact.email}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
