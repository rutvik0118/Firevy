import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate, Link } from 'react-router-dom';
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
  LogOut,
  Search
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { HOME_PAGE_SECTIONS_LIST } from '../../constants/sectionMetadata';

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
    isExpandable: true,
    isHomeGroup: true,
    path: '/admin/home-page'
  },
  {
    id: 'company',
    label: 'Company',
    icon: Building2,
    isExpandable: true,
    subItems: [
      { label: 'About firevy.co', path: '/admin/company/about-firevy' },
      { label: 'CEO Message', path: '/admin/company/ceo-message' },
      { label: 'Our Team', path: '/admin/company/our-team' },
      { label: 'Why Choose Us', path: '/admin/company/why-choose-us' },
      { label: 'Events & Activities', path: '/admin/company/events-activities' },
      { label: 'Brochure Download', path: '/admin/company/download-brochure' },
      { label: 'Awards & Recognition', path: '/admin/company/awards-recognition' },
      { label: 'Great Place To Work', path: '/admin/company/great-place-to-work' },
      { label: 'Women Empowerment', path: '/admin/company/women-empowerment' },
      { label: 'Delivery Models', path: '/admin/company/delivery-models' },
      { label: 'Engagement Models', path: '/admin/company/engagement-models' },
      { label: 'Development Methodology', path: '/admin/company/development-methodology' },
      { label: 'Client Testimonials', path: '/admin/testimonials' },
      { label: 'Blog & Articles', path: '/admin/company/blog' },
      { label: 'Careers (Jobs)', path: '/admin/jobs' }
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

  const isCurrentHomeRoute = location.pathname.startsWith('/admin/home-page');
  const [expandedMenus, setExpandedMenus] = useState({
    'home-page': isCurrentHomeRoute,
    company: false,
    product: false,
    services: false,
    hireDevelopers: false,
    technology: false,
    ourWork: false
  });
  const [sectionFilter, setSectionFilter] = useState('');

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
    if (location.pathname.startsWith('/admin/home-page')) {
      setExpandedMenus((prev) => ({ ...prev, 'home-page': true }));
    }
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

  const filteredHomeSections = HOME_PAGE_SECTIONS_LIST.filter((sec) =>
    sec.title.toLowerCase().includes(sectionFilter.toLowerCase()) ||
    sec.category.toLowerCase().includes(sectionFilter.toLowerCase())
  );

  return (
    <aside
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}
      aria-label="Sidebar Navigation"
    >
      {/* Brand Header */}
      <div className="sidebar-header">
        <NavLink
          to="/admin/dashboard"
          className="brand-logo-wrap"
          onClick={onCloseMobile}
          title="firevy.co Admin Panel"
        >
          {!isCollapsed ? (
            <div className="brand-logo-text">
              <span className="brand-logo-name">firevy</span>
              <span className="brand-logo-domain">.co</span>
            </div>
          ) : (
            <div className="brand-logo-collapsed">
              <span className="brand-logo-name">f</span>
              <span className="brand-logo-domain">.co</span>
            </div>
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
          const isDirectActive = location.pathname === item.path;

          if (item.isExpandable) {
            const isGroupActive = item.isHomeGroup
              ? location.pathname.startsWith('/admin/home-page')
              : item.subItems?.some((sub) => location.pathname === sub.path);

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

                {/* Submenu for Home Page */}
                {!isCollapsed && isExpanded && item.isHomeGroup && (
                  <div className={`sidebar-submenu-container ${isGroupActive ? 'has-active' : ''}`}>
                    {/* Main Overview Link */}
                    <NavLink
                      to="/admin/home-page"
                      end
                      className={({ isActive }) =>
                        `sidebar-submenu-link ${isActive ? 'active' : ''}`
                      }
                      onClick={onCloseMobile}
                    >
                      <span>Overview (All 22)</span>
                    </NavLink>

                    {/* Search Filter for 22 Sections */}
                    <div className="sidebar-submenu-search-wrap">
                      <Search
                        size={12}
                        className="sidebar-submenu-search-icon"
                      />
                      <input
                        type="text"
                        placeholder="Find section..."
                        value={sectionFilter}
                        onChange={(e) => setSectionFilter(e.target.value)}
                        className="sidebar-submenu-search-input"
                      />
                    </div>

                    {/* Submenu Items List */}
                    <div className="sidebar-submenu-list">
                      {filteredHomeSections.map((sec) => {
                        const secPath = `/admin/home-page/${sec.key}`;
                        const isSecActive = location.pathname === secPath;

                        return (
                          <NavLink
                            key={sec.key}
                            to={secPath}
                            onClick={onCloseMobile}
                            className={`sidebar-submenu-link ${isSecActive ? 'active' : ''}`}
                            title={`${sec.title} (${sec.category})`}
                          >
                            <span>{sec.title}</span>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Submenu for 6 Website Sections (Company, Product, Services, Hire Developers, Technology, Our Work) */}
                {!isCollapsed && isExpanded && !item.isHomeGroup && item.subItems && (
                  <div className={`sidebar-submenu-container ${isGroupActive ? 'has-active' : ''}`}>
                    <div className="sidebar-submenu-list">
                      {item.subItems.map((sub, sIdx) => {
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
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
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

