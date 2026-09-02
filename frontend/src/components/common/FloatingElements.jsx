import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import BRAND from '../../constants/brand';

export const FloatingElements = () => {
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

  const phoneUS = BRAND?.contact?.phoneUS || '+1 (800) 592-7410';
  const phoneRaw = phoneUS.replace(/[^0-9]/g, '');

  return (
    <>
      {/* Top-Right Sticky Call & WhatsApp Widgets */}
      <div className="fixed right-5 top-1/3 z-40 flex flex-col space-y-3">
        <a
          href={`tel:${phoneUS}`}
          title="Call Sales Support"
          className="w-12 h-12 rounded-full bg-[#006B8F] hover:bg-[#004A75] text-white shadow-2xl border-2 border-white flex items-center justify-center transition-all hover:scale-110 group"
        >
          <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </a>
        <a
          href={`https://wa.me/${phoneRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl border-2 border-white flex items-center justify-center transition-all hover:scale-110 group"
        >
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Bottom-Right Back to Top Smooth Scroll Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="fixed right-5 bottom-6 z-40 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-[#006B8F] text-white shadow-2xl border border-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default FloatingElements;
