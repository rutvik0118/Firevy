import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

export const AdminLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`admin-scope app-layout ${isSidebarCollapsed ? 'sidebar-collapsed-active' : ''}`}>
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      <div className="main-wrapper">
        <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
