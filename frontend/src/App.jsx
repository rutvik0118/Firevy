import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';

// Admin Context & Styles
import { AuthProvider } from './admin/context/AuthContext';
import { ToastProvider } from './admin/context/ToastContext';
import './admin/styles/admin.css';

// Admin Route Guards & Layout
import AdminProtectedRoute from './admin/routes/AdminProtectedRoute';
import AdminLayout from './admin/routes/AdminLayout';

// Admin Pages
import LoginPage from './admin/pages/LoginPage';
import Dashboard from './admin/pages/Dashboard';
import HomePageManager from './admin/pages/HomePageAdmin/HomePageManager';
import SectionEditorPage from './admin/pages/HomePageAdmin/SectionEditorPage';
import ServicesPage from './admin/pages/ServicesPage';
import PortfolioPage from './admin/pages/PortfolioPage';
import JobsPage from './admin/pages/JobsPage';
import CareersAdminPage from './admin/pages/CareersAdminPage';
import ApplicationsPage from './admin/pages/ApplicationsPage';
import InquiriesPage from './admin/pages/InquiriesPage';
import IndustriesPage from './admin/pages/IndustriesPage';
import TechnologiesPage from './admin/pages/TechnologiesPage';
import TestimonialsPage from './admin/pages/TestimonialsPage';
import SettingsPage from './admin/pages/SettingsPage';
import ApiPlaygroundPage from './admin/pages/ApiPlaygroundPage';
import AdminNotFoundPage from './admin/pages/NotFoundPage';

// Module Master-Detail Management Pages
import CompanyMasterPage from './admin/pages/CompanyAdmin/CompanyMasterPage';
import ProductMasterPage from './admin/pages/ProductAdmin/ProductMasterPage';
import ServicesMasterPage from './admin/pages/ServicesAdmin/ServicesMasterPage';
import HireMasterPage from './admin/pages/HireAdmin/HireMasterPage';
import TechnologiesMasterPage from './admin/pages/TechnologiesAdmin/TechnologiesMasterPage';
import OurWorkMasterPage from './admin/pages/OurWorkAdmin/OurWorkMasterPage';



// Public Website Lazy-Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const CompanySubDetails = lazy(() => import('./pages/CompanySubDetails'));
const Podcast = lazy(() => import('./pages/Podcast'));
const DeliveryModels = lazy(() => import('./pages/DeliveryModels'));
const EngagementModels = lazy(() => import('./pages/EngagementModels'));
const DevelopmentMethodology = lazy(() => import('./pages/DevelopmentMethodology'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const ClutchTestimonial = lazy(() => import('./pages/ClutchTestimonial'));
const VideoTestimonial = lazy(() => import('./pages/VideoTestimonial'));
const InsightfulVideos = lazy(() => import('./pages/InsightfulVideos'));
const Technologies = lazy(() => import('./pages/Technologies'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const PortfolioDetails = lazy(() => import('./pages/PortfolioDetails'));
const Industries = lazy(() => import('./pages/Industries'));
const Process = lazy(() => import('./pages/Process'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Public Layout Wrapper Component
const PublicLayoutWrapper = () => (
  <Layout>
    <Suspense fallback={<LoadingSpinner fullPage message="Loading page..." />}>
      <Outlet />
    </Suspense>
  </Layout>
);

// Admin Protected Route Wrapper Component
const AdminRouteWrapper = ({ children }) => (
  <AdminProtectedRoute>
    <AdminLayout>{children}</AdminLayout>
  </AdminProtectedRoute>
);

export function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ToastProvider>
          <Router>
            <Routes>
              {/* ============================================================
                  PUBLIC WEBSITE ROUTES (Preserves Main Site UI & Header/Footer)
                  ============================================================ */}
              <Route element={<PublicLayoutWrapper />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/company/podcast" element={<Podcast />} />
                <Route path="/podcasts" element={<Podcast />} />
                <Route path="/company/delivery-models" element={<DeliveryModels />} />
                <Route path="/company/delivery-model" element={<DeliveryModels />} />
                <Route path="/delivery-models" element={<DeliveryModels />} />
                <Route path="/company/engagement-models" element={<EngagementModels />} />
                <Route path="/company/engagement-model" element={<EngagementModels />} />
                <Route path="/engagement-models" element={<EngagementModels />} />
                <Route path="/company/development-methodology" element={<DevelopmentMethodology />} />
                <Route path="/company/development-methodologies" element={<DevelopmentMethodology />} />
                <Route path="/development-methodology" element={<DevelopmentMethodology />} />
                <Route path="/development-methodologies" element={<DevelopmentMethodology />} />
                <Route path="/company/client-testimonials" element={<Testimonials />} />
                <Route path="/company/testimonials" element={<Testimonials />} />
                <Route path="/client-testimonials" element={<Testimonials />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/company/clutch-testimonial" element={<ClutchTestimonial />} />
                <Route path="/company/clutch-testimonials" element={<ClutchTestimonial />} />
                <Route path="/clutch-testimonial" element={<ClutchTestimonial />} />
                <Route path="/clutch-testimonials" element={<ClutchTestimonial />} />
                <Route path="/company/video-testimonial" element={<VideoTestimonial />} />
                <Route path="/company/video-testimonials" element={<VideoTestimonial />} />
                <Route path="/video-testimonial" element={<VideoTestimonial />} />
                <Route path="/video-testimonials" element={<VideoTestimonial />} />
                <Route path="/company/insightful-videos" element={<InsightfulVideos />} />
                <Route path="/company/insightful-video" element={<InsightfulVideos />} />
                <Route path="/insightful-videos" element={<InsightfulVideos />} />
                <Route path="/insightful-video" element={<InsightfulVideos />} />
                <Route path="/company/:slug" element={<CompanySubDetails />} />
                <Route path="/awards-and-recognition" element={<CompanySubDetails />} />
                <Route path="/awards-recognition" element={<CompanySubDetails />} />
                <Route path="/insightful-videos" element={<CompanySubDetails />} />
                <Route path="/blog" element={<CompanySubDetails />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetails />} />
                <Route path="/iwatch-app-development" element={<ServiceDetails />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/process" element={<Process />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
              </Route>

              {/* ============================================================
                  ADMIN AUTHENTICATION (Login Page at /admin)
                  ============================================================ */}
              <Route path="/admin" element={<LoginPage />} />

              {/* ============================================================
                  PROTECTED ADMIN ROUTES (Teal / White Management Control Center)
                  ============================================================ */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRouteWrapper>
                    <Dashboard />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/home-page"
                element={
                  <AdminRouteWrapper>
                    <HomePageManager />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/home-page/:sectionKey"
                element={
                  <AdminRouteWrapper>
                    <SectionEditorPage />
                  </AdminRouteWrapper>
                }
              />
              {/* ============================================================
                  COMPANY MASTER-DETAIL MANAGEMENT (20 Sub-Pages)
                  ============================================================ */}
              <Route path="/admin/company" element={<AdminRouteWrapper><CompanyMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/company/:subPage" element={<AdminRouteWrapper><CompanyMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/company/:subPage/:sectionKey" element={<AdminRouteWrapper><CompanyMasterPage /></AdminRouteWrapper>} />

              {/* ============================================================
                  PRODUCT SOLUTIONS MASTER-DETAIL MANAGEMENT (12 Products)
                  ============================================================ */}
              <Route path="/admin/product" element={<AdminRouteWrapper><ProductMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/product/:slug" element={<AdminRouteWrapper><ProductMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/product/:slug/:sectionKey" element={<AdminRouteWrapper><ProductMasterPage /></AdminRouteWrapper>} />

              {/* ============================================================
                  SERVICES MASTER-DETAIL MANAGEMENT (10 Services)
                  ============================================================ */}
              <Route path="/admin/services" element={<AdminRouteWrapper><ServicesMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/services/:slug" element={<AdminRouteWrapper><ServicesMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/services/:slug/:sectionKey" element={<AdminRouteWrapper><ServicesMasterPage /></AdminRouteWrapper>} />

              {/* ============================================================
                  HIRE DEVELOPERS MASTER-DETAIL MANAGEMENT (10 Tiers)
                  ============================================================ */}
              <Route path="/admin/hire" element={<AdminRouteWrapper><HireMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/hire/:slug" element={<AdminRouteWrapper><HireMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/hire/:slug/:sectionKey" element={<AdminRouteWrapper><HireMasterPage /></AdminRouteWrapper>} />

              {/* ============================================================
                  TECHNOLOGY STACK MASTER-DETAIL MANAGEMENT (8 Categories)
                  ============================================================ */}
              <Route path="/admin/technologies" element={<AdminRouteWrapper><TechnologiesMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/technologies/:slug" element={<AdminRouteWrapper><TechnologiesMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/technologies/:slug/:sectionKey" element={<AdminRouteWrapper><TechnologiesMasterPage /></AdminRouteWrapper>} />

              {/* ============================================================
                  OUR WORK & PORTFOLIO MASTER-DETAIL MANAGEMENT (7 Sections)
                  ============================================================ */}
              <Route path="/admin/our-work" element={<AdminRouteWrapper><OurWorkMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/our-work/:slug" element={<AdminRouteWrapper><OurWorkMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/our-work/:slug/:sectionKey" element={<AdminRouteWrapper><OurWorkMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/portfolio" element={<AdminRouteWrapper><OurWorkMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/portfolio/:slug" element={<AdminRouteWrapper><OurWorkMasterPage /></AdminRouteWrapper>} />
              <Route path="/admin/portfolio/:slug/:sectionKey" element={<AdminRouteWrapper><OurWorkMasterPage /></AdminRouteWrapper>} />

              {/* ============================================================
                  OTHER ADMIN MANAGEMENT PAGES (Standalone CRUD & Settings)
                  ============================================================ */}
              <Route path="/admin/jobs" element={<AdminRouteWrapper><CareersAdminPage /></AdminRouteWrapper>} />
              <Route path="/admin/applications" element={<AdminRouteWrapper><ApplicationsPage /></AdminRouteWrapper>} />
              <Route path="/admin/inquiries" element={<AdminRouteWrapper><InquiriesPage /></AdminRouteWrapper>} />
              <Route path="/admin/industries" element={<AdminRouteWrapper><IndustriesPage /></AdminRouteWrapper>} />
              <Route path="/admin/testimonials" element={<AdminRouteWrapper><TestimonialsPage /></AdminRouteWrapper>} />
              <Route
                path="/admin/settings"
                element={
                  <AdminRouteWrapper>
                    <SettingsPage />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/api-playground"
                element={
                  <AdminRouteWrapper>
                    <ApiPlaygroundPage />
                  </AdminRouteWrapper>
                }
              />

              {/* Admin 404 handler */}
              <Route
                path="/admin/*"
                element={
                  <AdminRouteWrapper>
                    <AdminNotFoundPage />
                  </AdminRouteWrapper>
                }
              />

              {/* Public 404 handler for unknown public paths */}
              <Route
                path="*"
                element={
                  <PublicLayoutWrapper>
                    <NotFound />
                  </PublicLayoutWrapper>
                }
              />
            </Routes>
          </Router>
        </ToastProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
