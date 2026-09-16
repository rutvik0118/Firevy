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

  const phoneUS = BRAND?.contact?.phoneUS || '+1-754-258-7670';
  const phoneRaw = phoneUS.replace(/[^0-9]/g, '');

  return (
    <>
      {/* Right Margin Tab Contact Widgets (1:1 Sapphire Reference Match) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-2">
        <a
          href={`tel:${phoneUS}`}
          title="Call Sales Support"
          className="w-11 h-12 rounded-l-xl bg-[#006095] hover:bg-[#004A75] text-white shadow-xl flex items-center justify-center transition-all hover:w-13 group"
        >
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href={`https://wa.me/${phoneRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-11 h-12 rounded-l-xl bg-[#00A884] hover:bg-[#008F70] text-white shadow-xl flex items-center justify-center transition-all hover:w-13 group"
        >
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Bottom-Right Back to Top Smooth Scroll Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="fixed right-5 bottom-6 z-40 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-[#006095] text-white shadow-2xl border border-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default FloatingElements;
