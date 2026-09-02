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
import ServicesPage from './admin/pages/ServicesPage';
import PortfolioPage from './admin/pages/PortfolioPage';
import JobsPage from './admin/pages/JobsPage';
import ApplicationsPage from './admin/pages/ApplicationsPage';
import InquiriesPage from './admin/pages/InquiriesPage';
import IndustriesPage from './admin/pages/IndustriesPage';
import TechnologiesPage from './admin/pages/TechnologiesPage';
import TestimonialsPage from './admin/pages/TestimonialsPage';
import SettingsPage from './admin/pages/SettingsPage';
import ApiPlaygroundPage from './admin/pages/ApiPlaygroundPage';
import AdminNotFoundPage from './admin/pages/NotFoundPage';

// Public Website Lazy-Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const CompanySubDetails = lazy(() => import('./pages/CompanySubDetails'));
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
                <Route path="/company/:slug" element={<CompanySubDetails />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetails />} />
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
                  PROTECTED ADMIN ROUTES (Isolated Dark Management Control Center)
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
                path="/admin/services"
                element={
                  <AdminRouteWrapper>
                    <ServicesPage />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/portfolio"
                element={
                  <AdminRouteWrapper>
                    <PortfolioPage />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/jobs"
                element={
                  <AdminRouteWrapper>
                    <JobsPage />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/applications"
                element={
                  <AdminRouteWrapper>
                    <ApplicationsPage />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/inquiries"
                element={
                  <AdminRouteWrapper>
                    <InquiriesPage />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/industries"
                element={
                  <AdminRouteWrapper>
                    <IndustriesPage />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/technologies"
                element={
                  <AdminRouteWrapper>
                    <TechnologiesPage />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/testimonials"
                element={
                  <AdminRouteWrapper>
                    <TestimonialsPage />
                  </AdminRouteWrapper>
                }
              />
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
