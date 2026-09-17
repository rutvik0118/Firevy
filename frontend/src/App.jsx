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
                <Route path="/services/app-development-consulting" element={<ServiceDetails />} />
                <Route path="/app-development-consulting" element={<ServiceDetails />} />
                <Route path="/services/startup-consulting-services" element={<ServiceDetails />} />
                <Route path="/startup-consulting-services" element={<ServiceDetails />} />
                <Route path="/services/epicor-erp-consulting-services" element={<ServiceDetails />} />
                <Route path="/epicor-erp-consulting-services" element={<ServiceDetails />} />
                <Route path="/services/devops-consulting-service" element={<ServiceDetails />} />
                <Route path="/devops-consulting-service" element={<ServiceDetails />} />
                <Route path="/services/devops-consulting-services" element={<ServiceDetails />} />
                <Route path="/devops-consulting-services" element={<ServiceDetails />} />
                <Route path="/services/devops-consulting" element={<ServiceDetails />} />
                <Route path="/devops-consulting" element={<ServiceDetails />} />
                <Route path="/services/generative-ai-consulting-company" element={<ServiceDetails />} />
                <Route path="/generative-ai-consulting-company" element={<ServiceDetails />} />
                <Route path="/services/generative-ai-consulting" element={<ServiceDetails />} />
                <Route path="/generative-ai-consulting" element={<ServiceDetails />} />
                <Route path="/services/generative-ai-consulting-services" element={<ServiceDetails />} />
                <Route path="/generative-ai-consulting-services" element={<ServiceDetails />} />
                <Route path="/services/microservices-consulting-services" element={<ServiceDetails />} />
                <Route path="/microservices-consulting-services" element={<ServiceDetails />} />
                <Route path="/services/microservices-consulting" element={<ServiceDetails />} />
                <Route path="/microservices-consulting" element={<ServiceDetails />} />
                <Route path="/services/ai-consulting-services" element={<ServiceDetails />} />
                <Route path="/ai-consulting-services" element={<ServiceDetails />} />
                <Route path="/services/ai-consulting" element={<ServiceDetails />} />
                <Route path="/ai-consulting" element={<ServiceDetails />} />
                <Route path="/services/ui-ux-design" element={<ServiceDetails />} />
                <Route path="/ui-ux-design" element={<ServiceDetails />} />
                <Route path="/services/ui-ux-design-services" element={<ServiceDetails />} />
                <Route path="/ui-ux-design-services" element={<ServiceDetails />} />
                <Route path="/services/digital-marketing" element={<ServiceDetails />} />
                <Route path="/digital-marketing" element={<ServiceDetails />} />
                <Route path="/services/digital-marketing-services" element={<ServiceDetails />} />
                <Route path="/digital-marketing-services" element={<ServiceDetails />} />
                <Route path="/services/testing-qa" element={<ServiceDetails />} />
                <Route path="/testing-qa" element={<ServiceDetails />} />
                <Route path="/services/testing-and-qa" element={<ServiceDetails />} />
                <Route path="/testing-and-qa" element={<ServiceDetails />} />
                <Route path="/services/software-testing-qa" element={<ServiceDetails />} />
                <Route path="/software-testing-qa" element={<ServiceDetails />} />
                <Route path="/services/qa-testing" element={<ServiceDetails />} />
                <Route path="/qa-testing" element={<ServiceDetails />} />
                <Route path="/services/software-qa-testing" element={<ServiceDetails />} />
                <Route path="/software-qa-testing" element={<ServiceDetails />} />
                <Route path="/services/tech-consulting-services" element={<ServiceDetails />} />
                <Route path="/services/hire-bootstrap-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-bootstrap-developer" element={<ServiceDetails />} />
                <Route path="/hire-bootstrap-developers" element={<ServiceDetails />} />
                <Route path="/hire-bootstrap-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-codeigniter-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-codeigniter-developer" element={<ServiceDetails />} />
                <Route path="/hire-codeigniter-developers" element={<ServiceDetails />} />
                <Route path="/hire-codeigniter-developer" element={<ServiceDetails />} />
                <Route path="/services/codeigniter" element={<ServiceDetails />} />
                <Route path="/codeigniter" element={<ServiceDetails />} />
                <Route path="/services/hire-angular-js-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-angular-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-angular-developer" element={<ServiceDetails />} />
                <Route path="/hire-angular-js-developers" element={<ServiceDetails />} />
                <Route path="/hire-angular-developers" element={<ServiceDetails />} />
                <Route path="/hire-angular-developer" element={<ServiceDetails />} />
                <Route path="/angular-development" element={<ServiceDetails />} />
                <Route path="/services/hire-next-js-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-next-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-next-js-developer" element={<ServiceDetails />} />
                <Route path="/hire-next-js-developers" element={<ServiceDetails />} />
                <Route path="/hire-next-developers" element={<ServiceDetails />} />
                <Route path="/hire-next-js-developer" element={<ServiceDetails />} />
                <Route path="/next-js-development" element={<ServiceDetails />} />
                <Route path="/nextjs" element={<ServiceDetails />} />
                <Route path="/services/hire-react-js-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-react-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-react-developer" element={<ServiceDetails />} />
                <Route path="/hire-react-js-developers" element={<ServiceDetails />} />
                <Route path="/hire-react-developers" element={<ServiceDetails />} />
                <Route path="/hire-react-developer" element={<ServiceDetails />} />
                <Route path="/react-js-development" element={<ServiceDetails />} />
                <Route path="/reactjs" element={<ServiceDetails />} />
                <Route path="/services/hire-vue-storefront-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-vue-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-vue-js-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-vue-developer" element={<ServiceDetails />} />
                <Route path="/hire-vue-storefront-developers" element={<ServiceDetails />} />
                <Route path="/hire-vue-developers" element={<ServiceDetails />} />
                <Route path="/hire-vue-js-developers" element={<ServiceDetails />} />
                <Route path="/hire-vue-developer" element={<ServiceDetails />} />
                <Route path="/vue-development" element={<ServiceDetails />} />
                <Route path="/vuejs" element={<ServiceDetails />} />
                <Route path="/vue" element={<ServiceDetails />} />
                <Route path="/services/hire-ember-js-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-ember-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-ember-developer" element={<ServiceDetails />} />
                <Route path="/hire-ember-js-developers" element={<ServiceDetails />} />
                <Route path="/hire-ember-developers" element={<ServiceDetails />} />
                <Route path="/hire-ember-developer" element={<ServiceDetails />} />
                <Route path="/ember-js-development" element={<ServiceDetails />} />
                <Route path="/emberjs" element={<ServiceDetails />} />
                <Route path="/ember" element={<ServiceDetails />} />
                <Route path="/services/hire-alexa-skills-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-alexa-skills-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-alexa-developer" element={<ServiceDetails />} />
                <Route path="/hire-alexa-skills-developers" element={<ServiceDetails />} />
                <Route path="/hire-alexa-skills-developer" element={<ServiceDetails />} />
                <Route path="/hire-alexa-developer" element={<ServiceDetails />} />
                <Route path="/hire-alexa-skills" element={<ServiceDetails />} />
                <Route path="/hire-alexa" element={<ServiceDetails />} />
                <Route path="/services/hire-dedicated-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-dedicated-developer" element={<ServiceDetails />} />
                <Route path="/hire-dedicated-developers" element={<ServiceDetails />} />
                <Route path="/hire-dedicated-developer" element={<ServiceDetails />} />
                <Route path="/hire-dedicated" element={<ServiceDetails />} />
                <Route path="/services/hire-metaverse-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-metaverse-developer" element={<ServiceDetails />} />
                <Route path="/hire-metaverse-developers" element={<ServiceDetails />} />
                <Route path="/hire-metaverse-developer" element={<ServiceDetails />} />
                <Route path="/hire-metaverse" element={<ServiceDetails />} />
                <Route path="/metaverse-development" element={<ServiceDetails />} />
                <Route path="/services/hire-embedded-software-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-embedded-software-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-embedded-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-embedded-developer" element={<ServiceDetails />} />
                <Route path="/hire-embedded-software-developers" element={<ServiceDetails />} />
                <Route path="/hire-embedded-software-developer" element={<ServiceDetails />} />
                <Route path="/hire-embedded-developers" element={<ServiceDetails />} />
                <Route path="/hire-embedded-developer" element={<ServiceDetails />} />
                <Route path="/hire-embedded" element={<ServiceDetails />} />
                <Route path="/embedded-software-development" element={<ServiceDetails />} />
                <Route path="/services/hire-laravel-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-laravel-developer" element={<ServiceDetails />} />
                <Route path="/hire-laravel-developers" element={<ServiceDetails />} />
                <Route path="/hire-laravel-developer" element={<ServiceDetails />} />
                <Route path="/laravel-development" element={<ServiceDetails />} />
                <Route path="/laravel" element={<ServiceDetails />} />
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
                <Route path="/services/ionic" element={<ServiceDetails />} />
                <Route path="/services/ionic-app-development" element={<ServiceDetails />} />
                <Route path="/hire-ionic-developers" element={<ServiceDetails />} />
                <Route path="/hire-ionic-developer" element={<ServiceDetails />} />
                <Route path="/ionic" element={<ServiceDetails />} />
                <Route path="/ionic-app-development" element={<ServiceDetails />} />
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
                <Route path="/services/hire-blackberry-developers" element={<ServiceDetails />} />
                <Route path="/services/blackberry-app-development" element={<ServiceDetails />} />
                <Route path="/hire-blackberry-app-developers" element={<ServiceDetails />} />
                <Route path="/hire-blackberry-app-developer" element={<ServiceDetails />} />
                <Route path="/hire-blackberry-developers" element={<ServiceDetails />} />
                <Route path="/blackberry-app-development" element={<ServiceDetails />} />
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
                <Route path="/services/hire-data-scientist-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-data-scientist-developer" element={<ServiceDetails />} />
                <Route path="/services/hire-data-scientist" element={<ServiceDetails />} />
                <Route path="/hire-data-scientist-developers" element={<ServiceDetails />} />
                <Route path="/hire-data-scientist-developer" element={<ServiceDetails />} />
                <Route path="/hire-data-scientist" element={<ServiceDetails />} />
                <Route path="/services/personal-fitness-app" element={<ServiceDetails />} />
                <Route path="/personal-fitness-app" element={<ServiceDetails />} />
                <Route path="/services/used-car-app-development" element={<ServiceDetails />} />
                <Route path="/used-car-app-development" element={<ServiceDetails />} />
                <Route path="/services/enneagram-test-app" element={<ServiceDetails />} />
                <Route path="/enneagram-test-app" element={<ServiceDetails />} />
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
                <Route path="/services/hire-wordpress-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-wordpress-developer" element={<ServiceDetails />} />
                <Route path="/hire-wordpress-developers" element={<ServiceDetails />} />
                <Route path="/hire-wordpress-developer" element={<ServiceDetails />} />
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
                <Route path="/services/magento-development-services-in-usa" element={<ServiceDetails />} />
                <Route path="/services/magento-development-services" element={<ServiceDetails />} />
                <Route path="/services/magento-development" element={<ServiceDetails />} />
                <Route path="/services/hire-magento-developers" element={<ServiceDetails />} />
                <Route path="/magento" element={<ServiceDetails />} />
                <Route path="/magento-development-services-in-usa" element={<ServiceDetails />} />
                <Route path="/magento-development" element={<ServiceDetails />} />
                <Route path="/adobe-commerce" element={<ServiceDetails />} />
                <Route path="/hire-magento-developers" element={<ServiceDetails />} />
                <Route path="/services/shopify" element={<ServiceDetails />} />
                <Route path="/shopify" element={<ServiceDetails />} />
                <Route path="/shopify-development" element={<ServiceDetails />} />
                <Route path="/shopify-plus" element={<ServiceDetails />} />
                <Route path="/hire-shopify-developers" element={<ServiceDetails />} />
                <Route path="/services/woocommerce" element={<ServiceDetails />} />
                <Route path="/services/woocommerce-development" element={<ServiceDetails />} />
                <Route path="/services/hire-woocommerce-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-woocommerce-developer" element={<ServiceDetails />} />
                <Route path="/woocommerce" element={<ServiceDetails />} />
                <Route path="/woocommerce-development" element={<ServiceDetails />} />
                <Route path="/hire-woocommerce-developers" element={<ServiceDetails />} />
                <Route path="/hire-woocommerce-developer" element={<ServiceDetails />} />
                <Route path="/services/prestashop" element={<ServiceDetails />} />
                <Route path="/services/prestashop-development" element={<ServiceDetails />} />
                <Route path="/services/hire-prestashop-developers" element={<ServiceDetails />} />
                <Route path="/services/hire-prestashop-developer" element={<ServiceDetails />} />
                <Route path="/prestashop" element={<ServiceDetails />} />
                <Route path="/prestashop-development" element={<ServiceDetails />} />
                <Route path="/hire-prestashop-developers" element={<ServiceDetails />} />
                <Route path="/hire-prestashop-developer" element={<ServiceDetails />} />
                <Route path="/iwatch-app-development" element={<ServiceDetails />} />
                <Route path="/covid-tracker-app-development" element={<ServiceDetails />} />
                <Route path="/covid-tracking-app" element={<ServiceDetails />} />
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
