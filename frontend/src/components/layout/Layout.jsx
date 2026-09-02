import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-slate-100 font-sans relative selection:bg-blue-600 selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-20 lg:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
