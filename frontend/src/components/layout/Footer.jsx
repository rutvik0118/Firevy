import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Github, Instagram, Dribbble } from 'lucide-react';
import BRAND from '../../constants/brand';
import Container from '../common/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Development Process', path: '/process' },
        { label: 'Our Work', path: '/portfolio' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', path: '/services/web-development' },
        { label: 'Mobile Apps', path: '/services/mobile-app-development' },
        { label: 'Software Engineering', path: '/services/software-development' },
        { label: 'AI & ML Solutions', path: '/services/ai-machine-learning' },
        { label: 'Cloud & DevOps', path: '/services/cloud-solutions' },
        { label: 'Dedicated Developers', path: '/services/dedicated-developers' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { label: 'Healthcare', path: '/industries' },
        { label: 'Finance & FinTech', path: '/industries' },
        { label: 'Real Estate', path: '/industries' },
        { label: 'E-commerce', path: '/industries' },
        { label: 'Logistics', path: '/industries' },
        { label: 'Travel & Hospitality', path: '/industries' }
      ]
    },
    {
      title: 'Technologies',
      links: [
        { label: 'React & Next.js', path: '/technologies' },
        { label: 'Node.js & Express', path: '/technologies' },
        { label: 'React Native & Flutter', path: '/technologies' },
        { label: 'MongoDB & PostgreSQL', path: '/technologies' },
        { label: 'AWS & Kubernetes', path: '/technologies' },
        { label: 'OpenAI & PyTorch', path: '/technologies' }
      ]
    }
  ];

  return (
    <footer className="bg-brand-dark border-t border-gray-800 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-glow-radial pointer-events-none opacity-40" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-gray-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl sm:text-3xl font-black tracking-wider text-white font-sans group-hover:opacity-90 transition-opacity">
                firevy<span className="text-blue-500">.co</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              {BRAND.tagline}. We partner with startups and enterprises to architect, design, and scale high-impact software solutions.
            </p>

            {/* Direct Contact */}
            <div className="flex flex-col space-y-2.5 text-xs text-slate-400 pt-2">
              <a href={`mailto:${BRAND.contact.email}`} className="flex items-center space-x-2.5 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{BRAND.contact.email}</span>
              </a>
              <a href={`tel:${BRAND.contact.phone}`} className="flex items-center space-x-2.5 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{BRAND.contact.phone}</span>
              </a>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BRAND.contact.address.street}, {BRAND.contact.address.city}, {BRAND.contact.address.state}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-3">
              <a href={BRAND.social.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-800/80 hover:bg-blue-600 text-slate-300 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-800/80 hover:bg-blue-400 text-slate-300 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={BRAND.social.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-slate-300 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-800/80 hover:bg-pink-600 text-slate-300 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={BRAND.social.dribbble} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-800/80 hover:bg-pink-500 text-slate-300 hover:text-white transition-all">
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          {footerColumns.map((col, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">{col.title}</h4>
              <ul className="flex flex-col space-y-2.5 text-xs">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      to={link.path}
                      className="hover:text-blue-400 transition-colors inline-flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-1.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <a href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
