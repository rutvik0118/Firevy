import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans relative selection:bg-[#005F96] selection:text-white">
      <ScrollToTop />
      <Header />
      <main className={`flex-grow ${isHome ? 'pt-0' : 'pt-[115px]'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
