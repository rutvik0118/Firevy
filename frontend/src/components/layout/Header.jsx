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
    { name: 'Technology', hasMenu: 'technologies', path: '/technologies' },
    { name: 'Hire Developers', hasMenu: 'hire-developers', path: '/services/dedicated-developers' },
    { name: 'Our Work', hasMenu: 'our-work', path: '/portfolio' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Announcement / Utility Bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            className={`hidden lg:block border-b text-[12px] font-sans overflow-hidden transition-colors duration-300 ${
              location.pathname === '/'
                ? 'bg-[#011422] border-[#072439] text-slate-300'
                : 'bg-[#F4F7F9] border-slate-200 text-slate-700'
            }`}
          >
            <div className="w-full px-6 lg:px-10 py-1.5 flex items-center justify-between">
              {/* Sales Phone Numbers */}
              <div className="flex items-center space-x-6">
                <a href="tel:+17542587670" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                  <span className="text-[13px]">🇺🇸</span>
                  <span className={location.pathname === '/' ? 'text-slate-400' : 'text-slate-500'}>For Sales:</span>
                  <span className="font-semibold text-white">+1-754-258-7670</span>
                </a>
                <a href="tel:+919429709662" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                  <span className="text-[13px]">🇮🇳</span>
                  <span className={location.pathname === '/' ? 'text-slate-400' : 'text-slate-500'}>For Sales:</span>
                  <span className="font-semibold text-white">+91-942-970-9662</span>
                </a>
              </div>

              {/* Center / Right Links */}
              <div className="flex items-center space-x-6">
                <span className="flex items-center space-x-1.5 font-medium text-slate-200">
                  <span className="text-cyan-400 font-bold text-xs">❖</span>
                  <span>Sapphire Software Solutions</span>
                </span>

                <a href="mailto:contact@sapphiresolutions.net" className="flex items-center space-x-1.5 text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                  <Mail className="w-3.5 h-3.5 text-red-400" />
                  <span>contact@sapphiresolutions.net</span>
                </a>

                <Link to="/contact" className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Schedule a Meeting</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header Bar */}
      <div className={`relative transition-all duration-300 h-[76px] flex items-center ${
        isScrolled
          ? 'bg-white border-b border-slate-200 text-slate-900 shadow-md'
          : 'bg-[#011422]/95 backdrop-blur-md border-b border-[#072439] text-white shadow-md'
      }`}>
        <div className="w-full px-6 lg:px-10 flex items-center justify-between h-full">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group shrink-0 mr-6">
            <img
              src={isScrolled ? "/firevy_logo_dark.png" : "/firevy_logo_white.png"}
              alt="firevy.co"
              className="h-[34px] sm:h-[38px] w-auto max-w-[180px] object-contain transition-all duration-200"
            />
          </Link>

          {/* Desktop Nav & Action CTAs */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8 h-full">
            <nav className="flex items-center space-x-5 xl:space-x-7 h-full relative" onMouseLeave={handleMenuLeave}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || activeDropdown === link.hasMenu;
                const hasMenu = Boolean(link.hasMenu);
                const isDarkHeader = !isScrolled;

                return (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center px-1"
                    onMouseEnter={() => hasMenu && handleMenuHover(link.hasMenu)}
                  >
                    <Link
                      to={link.path}
                      className={`text-sm xl:text-[15px] font-semibold transition-colors flex items-center space-x-1 ${
                        isDarkHeader
                          ? (isActive ? 'text-cyan-300 font-bold' : 'text-white/90 hover:text-cyan-300')
                          : (isActive ? 'text-[#005F96] font-bold' : 'text-[#2D3748] hover:text-[#005F96]')
                      }`}
                    >
                      <span>{link.name}</span>
                      {hasMenu && (
                        <span className={`text-[11px] leading-none ml-0.5 ${isDarkHeader ? 'text-white/60' : 'text-slate-500'}`}>
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
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs xl:text-[13.5px] font-bold text-white rounded-[4px] bg-gradient-to-r from-[#D81B60] via-[#A855F7] to-[#8E24AA] hover:opacity-95 shadow-md transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-300 animate-pulse" />
                <span>Let's Talk AI</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs xl:text-[13.5px] font-bold text-white rounded-[4px] bg-[#006B8F] hover:bg-[#005478] transition-all duration-300 shadow-md hover:scale-105"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-lg border focus:outline-none transition-colors ${
              isScrolled
                ? 'text-slate-800 bg-slate-100 border-slate-300'
                : 'text-white bg-white/10 border-white/20'
            }`}
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
