import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import { Home, ArrowLeft, ArrowRight, LifeBuoy } from 'lucide-react';
import BRAND from '../constants/brand';

export const NotFound = () => {
  return (
    <div className="bg-white min-h-[80vh] flex items-center justify-center py-32 text-slate-900 font-sans">
      <SEO title={`404 - Page Not Found | ${BRAND.name}`} description="The page you are looking for does not exist." />
      <Container className="max-w-xl text-center space-y-6">
        <div className="text-8xl font-[900] text-[#006B8F] font-sans tracking-tight">404</div>
        <h1 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 leading-tight">
          Page Not Found
        </h1>
        <p className="text-[16px] text-slate-600 font-[400] max-w-md mx-auto leading-relaxed">
          The page or digital resource you requested may have been relocated, renamed, or is temporarily unavailable.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-7 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14px] transition-all shadow-md"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 rounded-[6px] bg-slate-100 hover:bg-slate-200 text-slate-800 font-[700] text-[14px] transition-all"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
