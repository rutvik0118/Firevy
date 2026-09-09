import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Home,
  Building2,
  Package,
  Layers,
  Users2,
  Cpu,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

const NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin/dashboard'
  },
  {
    id: 'home-page',
    label: 'Home Page',
    icon: Home,
    path: '/admin/home-page'
  },
  {
    id: 'company',
    label: 'Company',
    icon: Building2,
    isExpandable: true,
    subItems: [
      // Group 1: ABOUT US
      { label: 'ABOUT US', isHeader: true },
      { label: 'About firevy.co', path: '/admin/company/about-firevy' },
      { label: 'CEO Message', path: '/admin/company/ceo-message' },
      { label: 'Our Team', path: '/admin/company/our-team' },
      { label: 'Events & Activities', path: '/admin/company/events-activities' },
      { label: 'Brochure', path: '/admin/company/download-brochure' },
      { label: 'Why Choose Us', path: '/admin/company/why-choose-us' },
      { label: 'Great Place To Work', path: '/admin/company/great-place-to-work' },
      { label: 'Women Empowerment', path: '/admin/company/women-empowerment' },
      { label: 'Awards & Recognition', path: '/admin/company/awards-recognition' },
      { label: 'Insightful Videos', path: '/admin/company/insightful-videos' },
      { label: 'Blog', path: '/admin/company/blog' },
      { label: 'Careers (Jobs)', path: '/admin/company/careers' },
      { label: 'CSR', path: '/admin/company/csr' },
      { label: 'Podcast', path: '/admin/company/podcast' },

      // Group 2: MODELS
      { label: 'MODELS', isHeader: true },
      { label: 'Delivery Models', path: '/admin/company/delivery-models' },
      { label: 'Engagement Models', path: '/admin/company/engagement-models' },
      { label: 'Development Methodology', path: '/admin/company/development-methodology' },

      // Group 3: TESTIMONIAL
      { label: 'TESTIMONIAL', isHeader: true },
      { label: 'Client Testimonials', path: '/admin/company/client-testimonials' },
      { label: 'Video Testimonial', path: '/admin/company/video-testimonial' },
      { label: 'Clutch Testimonial', path: '/admin/company/clutch-testimonial' }
    ]
  },
  {
    id: 'product',
    label: 'Product',
    icon: Package,
    isExpandable: true,
    subItems: [
      { label: 'Vidyalaya School Software', path: '/admin/product/vidyalaya-school-management-software' },
      { label: 'Vidyalaya LMS Platform', path: '/admin/product/vidyalaya-learning-management-system' },
      { label: 'Occupational Health & Safety', path: '/admin/product/occupational-health-safety-software' },
      { label: 'Healthcare Solutions', path: '/admin/product/health-care-app-development' },
      { label: 'Education App Platform', path: '/admin/product/education-app-development' },
      { label: 'Uber-Like Mobility App', path: '/admin/product/uber-like-app-development' },
      { label: 'Spotify-Like Audio Streaming', path: '/admin/product/spotify-like-app-development' },
      { label: 'Zomato-Like Food Delivery', path: '/admin/product/zomato-like-app-development' },
      { label: 'Amazon-Like E-Commerce', path: '/admin/product/amazon-like-app-development' },
      { label: 'Visitor Management System', path: '/admin/product/visitor-management-system' },
      { label: 'Warehouse Management (WMS)', path: '/admin/product/warehouse-management-system' },
      { label: 'Clover POS App Solution', path: '/admin/product/clover-app-development' }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    icon: Layers,
    isExpandable: true,
    subItems: [
      { label: 'Services Overview', path: '/admin/services' },
      { label: 'Mobile App Development', path: '/admin/services/mobile-app-development' },
      { label: 'Back End Development', path: '/admin/services/back-end-development' },
      { label: 'AI & ML Development', path: '/admin/services/ai-ml-development' },
      { label: 'Front End Development', path: '/admin/services/front-end-development' },
      { label: 'Microsoft Development', path: '/admin/services/microsoft-development' },
      { label: 'Blockchain Development', path: '/admin/services/blockchain-development' },
      { label: 'Software Development Service', path: '/admin/services/software-development-service' },
      { label: 'iWatch App Development', path: '/admin/services/iwatch-app-development' },
      { label: 'Premium Services Grid', path: '/admin/home-page/premiumServices' }
    ]
  },
  {
    id: 'hireDevelopers',
    label: 'Hire Developers',
    icon: Users2,
    isExpandable: true,
    subItems: [
      { label: 'Dedicated Developers', path: '/admin/hire/dedicated-developers' },
      { label: 'Hire Mobile App Developers', path: '/admin/hire/hire-mobile-app-developers' },
      { label: 'Hire React & Next.js Devs', path: '/admin/hire/hire-react-nextjs-developers' },
      { label: 'Hire Node.js Back End Devs', path: '/admin/hire/hire-nodejs-developers' },
      { label: 'Hire Python & AI Devs', path: '/admin/hire/hire-python-developers' },
      { label: 'Hire C# & .NET Developers', path: '/admin/hire/hire-c-sharp-developers' },
      { label: 'Hire Full Stack JS Devs', path: '/admin/hire/hire-full-stack-developers' },
      { label: 'Hire Blockchain Engineers', path: '/admin/hire/hire-blockchain-engineers' },
      { label: 'Hire CMS & Shopify Devs', path: '/admin/hire/hire-ecommerce-developers' },
      { label: 'Hire DevOps & Cloud Engineers', path: '/admin/hire/hire-devops-engineers' }
    ]
  },
  {
    id: 'technology',
    label: 'Technology',
    icon: Cpu,
    isExpandable: true,
    subItems: [
      { label: 'Tech Stack Showcase', path: '/admin/home-page/techShowcase' },
      { label: 'Mobile Technologies', path: '/admin/technologies/mobile' },
      { label: 'Front End Frameworks', path: '/admin/technologies/frontend' },
      { label: 'Back End & APIs', path: '/admin/technologies/backend' },
      { label: 'Microsoft Ecosystem', path: '/admin/technologies/microsoft' },
      { label: 'Databases & In-Memory', path: '/admin/technologies/databases' },
      { label: 'AI, LLMs & Generative Tech', path: '/admin/technologies/ai-ml' },
      { label: 'Cloud Infrastructure & DevOps', path: '/admin/technologies/devops' }
    ]
  },
  {
    id: 'ourWork',
    label: 'Our Work',
    icon: Briefcase,
    isExpandable: true,
    subItems: [
      { label: 'Portfolio Showcase', path: '/admin/home-page/portfolioShowcase' },
      { label: 'Case Studies & Metrics', path: '/admin/portfolio' },
      { label: 'Success Matrix & ROI', path: '/admin/home-page/successMatrix' },
      { label: 'Brand Logos & Clients', path: '/admin/home-page/brandLogoGrid' },
      { label: 'Featured In & Media', path: '/admin/home-page/featuredInLogos' },
      { label: 'Client Reviews & Ratings', path: '/admin/testimonials' },
      { label: 'Video Testimonial Stories', path: '/admin/home-page/videoTestimonialsStory' }
    ]
  }
];

export const Sidebar = ({ isCollapsed, onToggleCollapse, isMobileOpen, onCloseMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { addToast } = useToast();

  const [expandedMenus, setExpandedMenus] = useState({
    company: false,
    product: false,
    services: false,
    hireDevelopers: false,
    technology: false,
    ourWork: false
  });

  // Auto-expand relevant submenu if navigating
  useEffect(() => {
    NAV_ITEMS.forEach((item) => {
      if (item.isExpandable && item.subItems) {
        const hasActiveChild = item.subItems.some((sub) => location.pathname === sub.path);
        if (hasActiveChild) {
          setExpandedMenus((prev) => ({ ...prev, [item.id]: true }));
        }
      }
    });
  }, [location.pathname]);

  const toggleMenu = (menuId) => {
    if (isCollapsed) {
      onToggleCollapse();
      setExpandedMenus((prev) => ({ ...prev, [menuId]: true }));
    } else {
      setExpandedMenus((prev) => ({
        ...prev,
        [menuId]: !prev[menuId]
      }));
    }
  };

  const handleLogout = () => {
    logout();
    addToast('Signed out of Admin Panel', 'info');
    navigate('/admin', { replace: true });
  };

  return (
    <aside
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}
      aria-label="Sidebar Navigation"
    >
      {/* Brand Header */}
      <div className="sidebar-header">
        <NavLink
          to="/admin/dashboard"
          className="brand-logo-wrap flex items-center"
          onClick={onCloseMobile}
          title="firevy.co Admin Panel"
        >
          {!isCollapsed ? (
            <img
              src="/firevy_logo_dark.png"
              alt="firevy.co"
              style={{
                height: '32px',
                width: 'auto',
                maxWidth: '145px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          ) : (
            <img
              src="/favicon.png"
              alt="firevy"
              style={{
                height: '28px',
                width: '28px',
                borderRadius: '6px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          )}
        </NavLink>

        <button
          onClick={onToggleCollapse}
          className="btn btn-ghost btn-icon-sm sidebar-collapse-btn"
          style={{ display: isMobileOpen ? 'none' : 'flex' }}
          title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Nav List */}
      <div className="sidebar-nav-container">
        <div className="nav-section-title">Navigation</div>

        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isExpanded = !!expandedMenus[item.id];
          const isDirectActive =
            item.id === 'home-page'
              ? location.pathname.startsWith('/admin/home-page')
              : location.pathname === item.path;

          if (item.isExpandable) {
            const isGroupActive = item.subItems?.some((sub) => location.pathname === sub.path);

            return (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  className={`nav-item ${isGroupActive ? 'has-active' : ''} ${isExpanded ? 'expanded' : ''}`}
                  title={isCollapsed ? item.label : undefined}
                  onClick={() => toggleMenu(item.id)}
                >
                  <div className="nav-item-content">
                    <div className="nav-item-icon">
                      <Icon size={18} />
                    </div>
                    {!isCollapsed && <span className="nav-item-text">{item.label}</span>}
                  </div>

                  {!isCollapsed && (
                    <span className="nav-item-arrow">
                      <ChevronDown size={14} />
                    </span>
                  )}
                </div>

                {/* Submenu for 6 Website Sections (Company, Product, Services, Hire Developers, Technology, Our Work) */}
                {!isCollapsed && isExpanded && item.subItems && (
                  <div className={`sidebar-submenu-container ${isGroupActive ? 'has-active' : ''}`}>
                    <div className="sidebar-submenu-list">
                      {item.subItems.map((sub, sIdx) => {
                        if (sub.isHeader) {
                          return (
                            <div
                              key={sIdx}
                              style={{
                                fontSize: '0.6875rem',
                                fontWeight: 700,
                                color: '#94A3B8',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                padding: sIdx === 0 ? '2px 8px 2px' : '8px 8px 2px',
                                userSelect: 'none'
                              }}
                            >
                              {sub.label}
                            </div>
                          );
                        }

                        const isSubActive = location.pathname === sub.path;

                        return (
                          <NavLink
                            key={sIdx}
                            to={sub.path}
                            onClick={onCloseMobile}
                            className={`sidebar-submenu-link ${isSubActive ? 'active' : ''}`}
                            title={sub.label}
                          >
                            <span>{sub.label}</span>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`nav-item ${isDirectActive ? 'active' : ''}`}
              onClick={onCloseMobile}
              title={isCollapsed ? item.label : undefined}
            >
              <div className="nav-item-content">
                <div className="nav-item-icon">
                  <Icon size={18} />
                </div>
                {!isCollapsed && <span className="nav-item-text">{item.label}</span>}
              </div>
            </NavLink>
          );
        })}
      </div>

      {/* Sidebar Footer / User Profile */}
      <div className="sidebar-footer">
        {!isCollapsed && user && (
          <div className="admin-user-card">
            <div className="admin-avatar">{user.avatar || 'AD'}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.name}
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.role}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-ghost btn-icon-sm"
              style={{ color: 'var(--text-muted)' }}
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

