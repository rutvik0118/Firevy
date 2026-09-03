import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans relative selection:bg-[#005F96] selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-[111px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
