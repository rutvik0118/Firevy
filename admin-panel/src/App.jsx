jsx
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import {
  AuthProvider,
  useAuth
} from './context/AuthContext';

import { ToastProvider } from './context/ToastContext';

import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Dashboard from './pages/Dashboard';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import JobsPage from './pages/JobsPage';
import ApplicationsPage from './pages/ApplicationsPage';
import InquiriesPage from './pages/InquiriesPage';
import IndustriesPage from './pages/IndustriesPage';
import TechnologiesPage from './pages/TechnologiesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import SettingsPage from './pages/SettingsPage';
import ApiPlaygroundPage from './pages/ApiPlaygroundPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/admin"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

const AdminLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] =
    useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  return (
    <div
      className={`app-layout ${isSidebarCollapsed
        ? 'sidebar-collapsed-active'
        : ''
        }`}
    >
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() =>
          setIsSidebarCollapsed(
            !isSidebarCollapsed
          )
        }
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() =>
          setIsMobileMenuOpen(false)
        }
      />

      <div className="main-wrapper">
        <Header
          onOpenMobileMenu={() =>
            setIsMobileMenuOpen(true)
          }
        />

        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/admin"
        element={<LoginPage />}
      />

      <Route
        path="/"
        element={
          <Navigate
            to="/admin"
            replace
          />
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/services"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ServicesPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/portfolio"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <PortfolioPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/jobs"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <JobsPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/applications"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ApplicationsPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/inquiries"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <InquiriesPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/industries"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <IndustriesPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/technologies"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <TechnologiesPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/testimonials"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <TestimonialsPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <SettingsPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/api-playground"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ApiPlaygroundPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={
          isAuthenticated ? (
            <AdminLayout>
              <NotFoundPage />
            </AdminLayout>
          ) : (
            <Navigate
              to="/admin"
              replace
            />
          )
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </AuthProvider>
    </Router>
  );
}