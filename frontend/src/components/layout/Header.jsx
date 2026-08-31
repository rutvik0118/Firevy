import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Company', hasMenu: 'company', path: '/about' },
    { name: 'Product', hasMenu: 'solutions', path: '/services' },
    { name: 'Services', hasMenu: 'services', path: '/services' },
    { name: 'Technology', hasMenu: 'technologies', path: '/technologies' },
    { name: 'Hire Developers', hasMenu: 'hire-developers', path: '/services/dedicated-developers' },
    { name: 'Our Work', hasMenu: 'company', path: '/portfolio' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement / Utility Bar - Hides on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:block bg-[#040A14]/95 border-b border-white/10 text-[12px] font-medium text-slate-300 backdrop-blur-md overflow-hidden"
          >
            <div className="w-full px-6 lg:px-10 py-2 flex items-center justify-between">
              {/* Sales Phone Numbers */}
              <div className="flex items-center space-x-6">
                <a href={`tel:${BRAND.contact.phoneUS}`} className="flex items-center space-x-1.5 hover:text-white transition-colors">
                  <span className="text-sm">🇺🇸</span>
                  <span className="text-slate-400">For Sales:</span>
                  <span className="font-semibold text-white">{BRAND.contact.phoneUS}</span>
                </a>
                <a href={`tel:${BRAND.contact.phoneIN}`} className="flex items-center space-x-1.5 hover:text-white transition-colors">
                  <span className="text-sm">🇮🇳</span>
                  <span className="text-slate-400">For Sales:</span>
                  <span className="font-semibold text-white">{BRAND.contact.phoneIN}</span>
                </a>
              </div>

              {/* Center / Right Links */}
              <div className="flex items-center space-x-6">
                <span className="flex items-center space-x-1.5 text-slate-300">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold text-white">firevy.co Software Solutions</span>
                </span>

                <a href={`mailto:${BRAND.contact.email}`} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-red-400" />
                  <span>{BRAND.contact.email}</span>
                </a>

                <Link to="/contact" className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Schedule a Meeting</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header Bar - Transparent initially, Solid White on Scroll */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl py-3 shadow-xl border-b border-slate-200/80 text-slate-900'
            : 'bg-transparent py-4 border-b border-white/10 text-white'
        }`}
      >
        <div className="w-full px-6 lg:px-10 flex items-center justify-between">
          {/* Brand Name Text (firevy.co) */}
          <Link to="/" className="flex items-center group shrink-0 mr-4">
            <span
              className={`text-2xl sm:text-3xl font-black tracking-wider font-sans group-hover:opacity-90 transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              firevy<span className={isScrolled ? 'text-blue-600' : 'text-cyan-400'}>.co</span>
            </span>
          </Link>

          {/* Desktop Nav & Action CTAs Grouped Right Beside Each Other */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {/* Desktop Navigation List */}
            <nav className="flex items-center space-x-5 xl:space-x-6" onMouseLeave={() => setActiveDropdown(null)}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || activeDropdown === link.hasMenu;
                const hasMenu = Boolean(link.hasMenu);

                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => hasMenu && setActiveDropdown(link.hasMenu)}
                  >
                    <Link
                      to={link.path}
                      className={`text-[15px] font-bold transition-colors flex items-center space-x-1.5 ${
                        isScrolled
                          ? isActive
                            ? 'text-blue-600'
                            : 'text-slate-700 hover:text-blue-600'
                          : isActive
                          ? 'text-cyan-400'
                          : 'text-white hover:text-cyan-400'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-[10px] text-current opacity-80 leading-none">▾</span>
                    </Link>

                    {/* Active Bottom Underline Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeHeaderTab"
                        className={`absolute -bottom-2 left-0 right-0 h-[3px] rounded-t-sm ${
                          isScrolled ? 'bg-blue-600' : 'bg-cyan-400'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action CTAs (Right beside Our Work) */}
            <div className="flex items-center space-x-3 shrink-0 ml-2">
              {/* Let's Talk AI Button */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white rounded-[6px] bg-gradient-to-r from-[#D81B60] via-[#8E24AA] to-[#7B1FA2] hover:opacity-95 shadow-md transition-all duration-300 hover:scale-102"
              >
                <Sparkles className="w-4 h-4 mr-2 text-amber-300 animate-pulse" />
                <span>Let's Talk AI</span>
              </Link>

              {/* Contact Us Button */}
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-[6px] transition-all duration-300 shadow-md ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600'
                    : 'bg-[#004A75] border-2 border-[#00A3E0] text-white hover:bg-[#005F96]'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-lg border focus:outline-none ${
              isScrolled
                ? 'text-slate-800 bg-slate-100 border-slate-300'
                : 'text-slate-200 bg-gray-800/80 border-gray-700'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Full-Width Mega Menu Dropdown */}
        <AnimatePresence>
          {activeDropdown && (
            <div onMouseLeave={() => setActiveDropdown(null)}>
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
            className={`lg:hidden border-b px-4 pt-4 pb-6 overflow-hidden ${
              isScrolled ? 'bg-white text-slate-900 border-slate-200' : 'bg-[#0B132B]/95 backdrop-blur-2xl text-white border-gray-800'
            }`}
          >
            <div className="flex flex-col space-y-2 text-left">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                    location.pathname === link.path
                      ? isScrolled
                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : isScrolled
                      ? 'text-slate-800 hover:bg-slate-100'
                      : 'text-slate-200 hover:bg-gray-800/60'
                  }`}
                >
                  {link.name} ▾
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-gray-200/20 flex flex-col space-y-3">
                <Link
                  to="/contact"
                  className="w-full text-center py-3 rounded-[6px] font-bold text-white bg-gradient-to-r from-[#D81B60] via-[#8E24AA] to-[#7B1FA2] shadow-md flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Let's Talk AI</span>
                </Link>

                <Link
                  to="/contact"
                  className="w-full text-center py-3 rounded-[6px] font-bold text-white bg-blue-600 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>

                <div className="text-center text-xs text-slate-400 pt-2 space-y-1">
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
