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
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
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
                <Route path="/company/brochure" element={<CompanySubDetails />} />
                <Route path="/company/download-brochure" element={<CompanySubDetails />} />
                <Route path="/company/corporate-brochure" element={<CompanySubDetails />} />
                <Route path="/download-brochure" element={<CompanySubDetails />} />
                <Route path="/corporate-brochure" element={<CompanySubDetails />} />
                <Route path="/awards-and-recognition" element={<CompanySubDetails />} />
                <Route path="/awards-recognition" element={<CompanySubDetails />} />
                <Route path="/insightful-videos" element={<CompanySubDetails />} />
                <Route path="/blog" element={<CompanySubDetails />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetails />} />
                <Route path="/services/it-consulting-services" element={<ServiceDetails />} />
                <Route path="/it-consulting-services" element={<ServiceDetails />} />
                <Route path="/services/tech-consulting-services" element={<ServiceDetails />} />
                <Route path="/services/hire-bootstrap-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-bootstrap-developer" element={<ServiceDetails />} />
                <Route path="/hire-bootstrap-developers" element={<ServiceDetails />} />
                <Route path="/hire-bootstrap-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-kotlin-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-kotlin-developer" element={<ServiceDetails />} />
                <Route path="/hire-kotlin-developers" element={<ServiceDetails />} />
                <Route path="/hire-kotlin-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-android-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-android-developer" element={<ServiceDetails />} />
                <Route path="/hire-android-developers" element={<ServiceDetails />} />
                <Route path="/hire-android-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-ionic-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-ionic-developer" element={<ServiceDetails />} />
                <Route path="/hire-ionic-developers" element={<ServiceDetails />} />
                <Route path="/hire-ionic-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-flutter-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-flutter-developer" element={<ServiceDetails />} />
                <Route path="/hire-flutter-developers" element={<ServiceDetails />} />
                <Route path="/hire-flutter-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-ios-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-ios-developer" element={<ServiceDetails />} />
                <Route path="/hire-ios-developers" element={<ServiceDetails />} />
                <Route path="/hire-ios-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-swift-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-swift-developers" element={<ServiceDetails />} />
                <Route path="/hire-swift-developer" element={<ServiceDetails />} />
                <Route path="/hire-swift-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-mobile-app-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-mobile-app-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-mobile-developers" element={<ServiceDetails />} />
                <Route path="/hire-mobile-app-developers" element={<ServiceDetails />} />
                <Route path="/hire-mobile-app-developer" element={<ServiceDetails />} />
                <Route path="/hire-mobile-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-blackberry-app-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-blackberry-app-developer" element={<ServiceDetails />} />
                <Route path="/hire-blackberry-app-developers" element={<ServiceDetails />} />
                <Route path="/hire-blackberry-app-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-freelance-app-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-freelance-app-developer" element={<ServiceDetails />} />
                <Route path="/hire-freelance-app-developers" element={<ServiceDetails />} />
                <Route path="/hire-freelance-app-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-ai-application-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-ai-application-developer" element={<ServiceDetails />} />
                <Route path="/hire-ai-application-developers" element={<ServiceDetails />} />
                <Route path="/hire-ai-application-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-iphone-app-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-iphone-app-developer" element={<ServiceDetails />} />
                <Route path="/hire-iphone-app-developers" element={<ServiceDetails />} />
                <Route path="/hire-iphone-app-developer" element={<ServiceDetails />} />
                <Route path="/services/kotlin-app-development" element={<ServiceDetails />} />
                <Route path="/kotlin-app-development" element={<ServiceDetails />} />
                <Route path="/services/kotlin" element={<ServiceDetails />} />
                <Route path="/kotlin" element={<ServiceDetails />} />
                <Route path="/services/warehouse-management-system" element={<ServiceDetails />} />
                <Route path="/warehouse-management-system" element={<ServiceDetails />} />
                <Route path="/services/visitor-management-system" element={<ServiceDetails />} />
                <Route path="/visitor-management-system" element={<ServiceDetails />} />
                <Route path="/services/php" element={<ServiceDetails />} />
                <Route path="/php" element={<ServiceDetails />} />
                <Route path="/php-development" element={<ServiceDetails />} />
                <Route path="/hire-php-developers" element={<ServiceDetails />} />
                <Route path="/services/java" element={<ServiceDetails />} />
                <Route path="/java" element={<ServiceDetails />} />
                <Route path="/java-development" element={<ServiceDetails />} />
                <Route path="/hire-java-developers" element={<ServiceDetails />} />
                <Route path="/services/nodejs" element={<ServiceDetails />} />
                <Route path="/services/node-js" element={<ServiceDetails />} />
                <Route path="/nodejs" element={<ServiceDetails />} />
                <Route path="/node-js" element={<ServiceDetails />} />
                <Route path="/nodejs-development" element={<ServiceDetails />} />
                <Route path="/hire-nodejs-developers" element={<ServiceDetails />} />
                <Route path="/services/net" element={<ServiceDetails />} />
                <Route path="/net" element={<ServiceDetails />} />
                <Route path="/dotnet" element={<ServiceDetails />} />
                <Route path="/net-development" element={<ServiceDetails />} />
                <Route path="/hire-dotnet-developers" element={<ServiceDetails />} />
                <Route path="/services/wordpress" element={<ServiceDetails />} />
                <Route path="/wordpress" element={<ServiceDetails />} />
                <Route path="/wordpress-development" element={<ServiceDetails />} />
                <Route path="/hire-wordpress-developers" element={<ServiceDetails />} />
                <Route path="/services/drupal" element={<ServiceDetails />} />
                <Route path="/drupal" element={<ServiceDetails />} />
                <Route path="/drupal-development" element={<ServiceDetails />} />
                <Route path="/hire-drupal-developers" element={<ServiceDetails />} />
                <Route path="/services/umbraco" element={<ServiceDetails />} />
                <Route path="/umbraco" element={<ServiceDetails />} />
                <Route path="/umbraco-development" element={<ServiceDetails />} />
                <Route path="/hire-umbraco-developers" element={<ServiceDetails />} />
                <Route path="/services/sitecore" element={<ServiceDetails />} />
                <Route path="/sitecore" element={<ServiceDetails />} />
                <Route path="/sitecore-development" element={<ServiceDetails />} />
                <Route path="/hire-sitecore-developers" element={<ServiceDetails />} />
                <Route path="/services/sitefinity" element={<ServiceDetails />} />
                <Route path="/sitefinity" element={<ServiceDetails />} />
                <Route path="/sitefinity-development" element={<ServiceDetails />} />
                <Route path="/hire-sitefinity-developers" element={<ServiceDetails />} />
                <Route path="/services/magento" element={<ServiceDetails />} />
                <Route path="/magento" element={<ServiceDetails />} />
                <Route path="/magento-development" element={<ServiceDetails />} />
                <Route path="/adobe-commerce" element={<ServiceDetails />} />
                <Route path="/hire-magento-developers" element={<ServiceDetails />} />
                <Route path="/services/shopify" element={<ServiceDetails />} />
                <Route path="/shopify" element={<ServiceDetails />} />
                <Route path="/shopify-development" element={<ServiceDetails />} />
                <Route path="/shopify-plus" element={<ServiceDetails />} />
                <Route path="/hire-shopify-developers" element={<ServiceDetails />} />
                <Route path="/iwatch-app-development" element={<ServiceDetails />} />
                <Route path="/services/iwatch-app-development" element={<ServiceDetails />} />
                <Route path="/ipad-app-development-services" element={<ServiceDetails />} />
                <Route path="/services/ipad-app-development-services" element={<ServiceDetails />} />
                 <Route path="/kotlin-app-development" element={<ServiceDetails />} />
                <Route path="/services/kotlin-app-development" element={<ServiceDetails />} />
                <Route path="/hybrid-app-development" element={<ServiceDetails />} />
                <Route path="/services/hybrid-app-development" element={<ServiceDetails />} />
                <Route path="/hybrid-app" element={<ServiceDetails />} />
                <Route path="/services/hybrid-app" element={<ServiceDetails />} />
                <Route path="/generative-ai-development-company" element={<ServiceDetails />} />
                <Route path="/services/generative-ai-development-company" element={<ServiceDetails />} />
                <Route path="/generative-ai" element={<ServiceDetails />} />
                <Route path="/services/generative-ai" element={<ServiceDetails />} />
                <Route path="/hire-generative-ai-developers" element={<ServiceDetails />} />
                <Route path="/artificial-intelligence-development-company" element={<ServiceDetails />} />
                <Route path="/services/artificial-intelligence-development-company" element={<ServiceDetails />} />
                <Route path="/artificial-intelligence" element={<ServiceDetails />} />
                <Route path="/services/artificial-intelligence" element={<ServiceDetails />} />
                <Route path="/ai-ml" element={<ServiceDetails />} />
                <Route path="/services/ai-ml" element={<ServiceDetails />} />
                <Route path="/services/ai-ml-development" element={<ServiceDetails />} />
                <Route path="/ai-ml-development" element={<ServiceDetails />} />
                <Route path="/hire-ai-developers" element={<ServiceDetails />} />
                <Route path="/blockchain-development-company" element={<ServiceDetails />} />
                <Route path="/services/blockchain-development-company" element={<ServiceDetails />} />
                <Route path="/blockchain" element={<ServiceDetails />} />
                <Route path="/services/blockchain" element={<ServiceDetails />} />
                <Route path="/hire-blockchain-developers" element={<ServiceDetails />} />
                <Route path="/hire-blockchain-developer" element={<ServiceDetails />} />
                <Route path="/full-stack-development-services" element={<ServiceDetails />} />
                <Route path="/services/full-stack-development-services" element={<ServiceDetails />} />
                <Route path="/full-stack" element={<ServiceDetails />} />
                <Route path="/services/full-stack" element={<ServiceDetails />} />
                <Route path="/fullstack" element={<ServiceDetails />} />
                <Route path="/services/fullstack" element={<ServiceDetails />} />
                <Route path="/full-stack-development" element={<ServiceDetails />} />
                <Route path="/services/full-stack-development" element={<ServiceDetails />} />
                <Route path="/hire-full-stack-developers" element={<ServiceDetails />} />
                <Route path="/virtual-reality-app-development-company" element={<ServiceDetails />} />
                <Route path="/services/virtual-reality-app-development-company" element={<ServiceDetails />} />
                <Route path="/virtual-reality" element={<ServiceDetails />} />
                <Route path="/services/virtual-reality" element={<ServiceDetails />} />
                <Route path="/vr-ar" element={<ServiceDetails />} />
                <Route path="/services/vr-ar" element={<ServiceDetails />} />
                <Route path="/vr" element={<ServiceDetails />} />
                <Route path="/services/vr" element={<ServiceDetails />} />
                <Route path="/iot" element={<ServiceDetails />} />
                <Route path="/services/iot" element={<ServiceDetails />} />
                <Route path="/iot-app-development-services" element={<ServiceDetails />} />
                <Route path="/services/iot-app-development-services" element={<ServiceDetails />} />
                <Route path="/pwd" element={<ServiceDetails />} />
                <Route path="/services/pwd" element={<ServiceDetails />} />
                <Route path="/pwa" element={<ServiceDetails />} />
                <Route path="/services/pwa" element={<ServiceDetails />} />
                <Route path="/progressive-web-app-development" element={<ServiceDetails />} />
                <Route path="/services/progressive-web-app-development" element={<ServiceDetails />} />
                <Route path="/rpa" element={<ServiceDetails />} />
                <Route path="/services/rpa" element={<ServiceDetails />} />
                <Route path="/robotic-process-automation-services" element={<ServiceDetails />} />
                <Route path="/services/robotic-process-automation-services" element={<ServiceDetails />} />
                <Route path="/angular" element={<ServiceDetails />} />
                <Route path="/services/angular" element={<ServiceDetails />} />
                <Route path="/angular-development" element={<ServiceDetails />} />
                <Route path="/services/angular-development" element={<ServiceDetails />} />
                <Route path="/angular-development-company" element={<ServiceDetails />} />
                <Route path="/services/angular-development-company" element={<ServiceDetails />} />
                <Route path="/hire-angular-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-angular-developers" element={<ServiceDetails />} />
                <Route path="/react" element={<ServiceDetails />} />
                <Route path="/services/react" element={<ServiceDetails />} />
                <Route path="/reactjs" element={<ServiceDetails />} />
                <Route path="/services/reactjs" element={<ServiceDetails />} />
                <Route path="/react-development" element={<ServiceDetails />} />
                <Route path="/services/react-development" element={<ServiceDetails />} />
                <Route path="/react-js-development" element={<ServiceDetails />} />
                <Route path="/services/react-js-development" element={<ServiceDetails />} />
                <Route path="/react-development-company" element={<ServiceDetails />} />
                <Route path="/services/react-development-company" element={<ServiceDetails />} />
                <Route path="/hire-react-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-react-developers" element={<ServiceDetails />} />
                <Route path="/hire-reactjs-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-reactjs-developers" element={<ServiceDetails />} />
                <Route path="/vue" element={<ServiceDetails />} />
                <Route path="/services/vue" element={<ServiceDetails />} />
                <Route path="/vuejs" element={<ServiceDetails />} />
                <Route path="/services/vuejs" element={<ServiceDetails />} />
                <Route path="/vue-js" element={<ServiceDetails />} />
                <Route path="/services/vue-js" element={<ServiceDetails />} />
                <Route path="/vue-development" element={<ServiceDetails />} />
                <Route path="/services/vue-development" element={<ServiceDetails />} />
                <Route path="/vue-js-development" element={<ServiceDetails />} />
                <Route path="/services/vue-js-development" element={<ServiceDetails />} />
                <Route path="/vue-development-company" element={<ServiceDetails />} />
                <Route path="/services/vue-development-company" element={<ServiceDetails />} />
                <Route path="/hire-vue-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-vue-developers" element={<ServiceDetails />} />
                <Route path="/nuxt" element={<ServiceDetails />} />
                <Route path="/services/nuxt" element={<ServiceDetails />} />
                <Route path="/sharepoint" element={<ServiceDetails />} />
                <Route path="/services/sharepoint" element={<ServiceDetails />} />
                <Route path="/sharepoint-development" element={<ServiceDetails />} />
                <Route path="/services/sharepoint-development" element={<ServiceDetails />} />
                <Route path="/sharepoint-development-services" element={<ServiceDetails />} />
                <Route path="/services/sharepoint-development-services" element={<ServiceDetails />} />
                <Route path="/hire-sharepoint-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-sharepoint-developers" element={<ServiceDetails />} />
                <Route path="/powerapps" element={<ServiceDetails />} />
                <Route path="/services/powerapps" element={<ServiceDetails />} />
                <Route path="/power-apps" element={<ServiceDetails />} />
                <Route path="/services/power-apps" element={<ServiceDetails />} />
                <Route path="/powerapps-development" element={<ServiceDetails />} />
                <Route path="/services/powerapps-development" element={<ServiceDetails />} />
                <Route path="/power-apps-development" element={<ServiceDetails />} />
                <Route path="/services/power-apps-development" element={<ServiceDetails />} />
                <Route path="/powerapps-development-company" element={<ServiceDetails />} />
                <Route path="/services/powerapps-development-company" element={<ServiceDetails />} />
                <Route path="/hire-powerapps-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-powerapps-developers" element={<ServiceDetails />} />
                <Route path="/power-automate" element={<ServiceDetails />} />
                <Route path="/services/power-automate" element={<ServiceDetails />} />
                <Route path="/powerautomate" element={<ServiceDetails />} />
                <Route path="/services/powerautomate" element={<ServiceDetails />} />
                <Route path="/power-automate-services" element={<ServiceDetails />} />
                <Route path="/services/power-automate-services" element={<ServiceDetails />} />
                <Route path="/power-automate-development" element={<ServiceDetails />} />
                <Route path="/services/power-automate-development" element={<ServiceDetails />} />
                <Route path="/hire-power-automate-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-power-automate-developers" element={<ServiceDetails />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-study" element={<CaseStudies />} />
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
