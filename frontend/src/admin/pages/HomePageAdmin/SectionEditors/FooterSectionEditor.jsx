import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Share2,
  Award,
  ShieldCheck,
  Building,
  Plus,
  Trash2,
  ExternalLink
} from 'lucide-react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const FooterSectionEditor = ({ data, onChange }) => {
  const sales = data?.salesContact || {
    title: 'Contact For Sales',
    email: 'contact@firevy.co',
    phoneIndia: 'IN:+91-942-970-9662',
    phoneUS: 'US:+1-754-258-7670'
  };

  const career = data?.careerContact || {
    title: 'Contact for Career (Jobs)',
    email: 'careers@firevy.co',
    phone: '+91-909-997-6034'
  };

  const ratings = data?.ratings || {
    googleReviews: '900+ REVIEWS',
    clutchReviews: '320+ REVIEWS',
    goodFirmsReviews: '200+ REVIEWS'
  };

  const offices = Array.isArray(data?.offices) ? data.offices : [
    { id: 'in', country: 'India(HQ)', flag: '🇮🇳', address: 'C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, S.G. Highway, Ahmedabad - 380060, Gujarat, INDIA' },
    { id: 'us', country: 'USA', flag: '🇺🇸', address: '5004 NW 116th Ave Coral Springs, Florida, FL 33076' },
    { id: 'ca', country: 'Canada', flag: '🇨🇦', address: '111 Tarawood lane NE, unit#403 Calgary AB, T3J 0G8' },
    { id: 'au', country: 'Australia', flag: '🇦🇺', address: 'U 2B 305 Harborne Street, Glendalough 6016 WA' },
    { id: 'uk', country: 'UK', flag: '🇬🇧', address: '42 Audley Avenue, Gillingham, ME73AY United Kingdom' },
    { id: 'ae', country: 'UAE', flag: '🇦🇪', address: 'A-21, Building 21, Ghoroob, Mirdif Dubai, United Arab Emirates' }
  ];

  const socialLinks = data?.socialLinks || {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com'
  };

  // Field change helpers
  const handleSalesChange = (field, value) => {
    onChange({
      ...data,
      salesContact: {
        ...sales,
        [field]: value
      }
    });
  };

  const handleCareerChange = (field, value) => {
    onChange({
      ...data,
      careerContact: {
        ...career,
        [field]: value
      }
    });
  };

  const handleRatingsChange = (field, value) => {
    onChange({
      ...data,
      ratings: {
        ...ratings,
        [field]: value
      }
    });
  };

  const handleSocialChange = (platform, value) => {
    onChange({
      ...data,
      socialLinks: {
        ...socialLinks,
        [platform]: value
      }
    });
  };

  const handleOfficeChange = (index, field, value) => {
    const updated = [...offices];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    onChange({
      ...data,
      offices: updated
    });
  };

  const handleAddOffice = () => {
    const newOffice = {
      id: `office_${Date.now()}`,
      country: 'New Global Office',
      flag: '🌐',
      address: 'Enter office building suite, street, city, postal code, and country.'
    };
    onChange({
      ...data,
      offices: [...offices, newOffice]
    });
  };

  const handleDeleteOffice = (index) => {
    if (offices.length <= 1) return;
    const updated = offices.filter((_, i) => i !== index);
    onChange({
      ...data,
      offices: updated
    });
  };

  const handleDirectFieldChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      
      {/* Header Overview Banner */}
      <div style={{ paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
          Global Website Footer & Locations Management
        </h4>
        <p style={{ margin: '3px 0 0 0', fontSize: '12.5px', color: '#64748B' }}>
          Manage global office addresses, sales contact numbers, career emails, verified ratings, social channels, and copyright policies displayed in the public website footer.
        </p>
      </div>

      {/* 1. Contact For Sales Card */}
      <AdminFormSection title="1. Contact For Sales Card">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Sales Email Address" required helperText="e.g. contact@firevy.co">
            <input
              type="email"
              className="form-control"
              value={sales.email || ''}
              onChange={(e) => handleSalesChange('email', e.target.value)}
              placeholder="contact@firevy.co"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="Card Header Title" helperText="e.g. Contact For Sales">
            <input
              type="text"
              className="form-control"
              value={sales.title || 'Contact For Sales'}
              onChange={(e) => handleSalesChange('title', e.target.value)}
              placeholder="Contact For Sales"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="India Phone Number" helperText="e.g. IN:+91-942-970-9662">
            <input
              type="text"
              className="form-control"
              value={sales.phoneIndia || ''}
              onChange={(e) => handleSalesChange('phoneIndia', e.target.value)}
              placeholder="IN:+91-942-970-9662"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="USA / International Phone Number" helperText="e.g. US:+1-754-258-7670">
            <input
              type="text"
              className="form-control"
              value={sales.phoneUS || ''}
              onChange={(e) => handleSalesChange('phoneUS', e.target.value)}
              placeholder="US:+1-754-258-7670"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. Contact For Career (Jobs) Card */}
      <AdminFormSection title="2. Contact For Career (Jobs) Card">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Career Email Address" required helperText="e.g. careers@firevy.co">
            <input
              type="email"
              className="form-control"
              value={career.email || ''}
              onChange={(e) => handleCareerChange('email', e.target.value)}
              placeholder="careers@firevy.co"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="Career Helpline Phone Number" helperText="e.g. +91-909-997-6034">
            <input
              type="text"
              className="form-control"
              value={career.phone || ''}
              onChange={(e) => handleCareerChange('phone', e.target.value)}
              placeholder="+91-909-997-6034"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. Global Office Addresses Grid (6 Locations) */}
      <AdminFormSection title={`3. Global Offices (${offices.length})`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {offices.map((office, idx) => (
              <div
                key={office.id || idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '14px',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="text"
                      value={office.flag || ''}
                      onChange={(e) => handleOfficeChange(idx, 'flag', e.target.value)}
                      style={{ width: '32px', height: '28px', textAlign: 'center', fontSize: '16px', border: '1px solid #CBD5E1', borderRadius: '4px' }}
                      title="Flag emoji"
                    />
                    <input
                      type="text"
                      className="form-control"
                      value={office.country || ''}
                      onChange={(e) => handleOfficeChange(idx, 'country', e.target.value)}
                      placeholder="e.g. India(HQ)"
                      style={{ fontWeight: 700, fontSize: '13px', padding: '4px 8px', height: '30px', border: '1px solid #CBD5E1', borderRadius: '5px' }}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteOffice(idx)}
                    disabled={offices.length <= 1}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: offices.length <= 1 ? '#CBD5E1' : '#EF4444',
                      cursor: offices.length <= 1 ? 'not-allowed' : 'pointer',
                      padding: '4px'
                    }}
                    title="Delete office"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748B', marginBottom: '4px' }}>
                    Full Physical Address
                  </label>
                  <textarea
                    rows={3}
                    className="form-control"
                    value={office.address || ''}
                    onChange={(e) => handleOfficeChange(idx, 'address', e.target.value)}
                    placeholder="Enter street, building, city, state, country..."
                    style={{ width: '100%', padding: '6px 10px', fontSize: '12px', borderRadius: '6px', border: '1px solid #CBD5E1', lineHeight: 1.4, resize: 'vertical' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleAddOffice}
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '6px',
              backgroundColor: '#F0F9FF',
              border: '1px solid #BAE6FD',
              color: '#0369A1',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <Plus size={14} /> Add Another Global Office
          </button>
        </div>
      </AdminFormSection>

      {/* 4. Verified Client Rating Badges */}
      <AdminFormSection title="4. Verified Review Ratings Badges">
        <AdminFormGrid columns={3}>
          <AdminFormField label="Google Reviews Metric Text" helperText="e.g. 900+ REVIEWS">
            <input
              type="text"
              className="form-control"
              value={ratings.googleReviews || '900+ REVIEWS'}
              onChange={(e) => handleRatingsChange('googleReviews', e.target.value)}
              placeholder="900+ REVIEWS"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="Clutch Reviews Metric Text" helperText="e.g. 320+ REVIEWS">
            <input
              type="text"
              className="form-control"
              value={ratings.clutchReviews || '320+ REVIEWS'}
              onChange={(e) => handleRatingsChange('clutchReviews', e.target.value)}
              placeholder="320+ REVIEWS"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="GoodFirms Reviews Metric Text" helperText="e.g. 200+ REVIEWS">
            <input
              type="text"
              className="form-control"
              value={ratings.goodFirmsReviews || '200+ REVIEWS'}
              onChange={(e) => handleRatingsChange('goodFirmsReviews', e.target.value)}
              placeholder="200+ REVIEWS"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 5. Social Media URLs */}
      <AdminFormSection title="5. Official Social Media Channels">
        <AdminFormGrid columns={3}>
          <AdminFormField label="Facebook URL">
            <input
              type="url"
              className="form-control"
              value={socialLinks.facebook || ''}
              onChange={(e) => handleSocialChange('facebook', e.target.value)}
              placeholder="https://facebook.com/firevy"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="Twitter / X URL">
            <input
              type="url"
              className="form-control"
              value={socialLinks.twitter || ''}
              onChange={(e) => handleSocialChange('twitter', e.target.value)}
              placeholder="https://twitter.com/firevy"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="LinkedIn URL">
            <input
              type="url"
              className="form-control"
              value={socialLinks.linkedin || ''}
              onChange={(e) => handleSocialChange('linkedin', e.target.value)}
              placeholder="https://linkedin.com/company/firevy"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="Instagram URL">
            <input
              type="url"
              className="form-control"
              value={socialLinks.instagram || ''}
              onChange={(e) => handleSocialChange('instagram', e.target.value)}
              placeholder="https://instagram.com/firevy"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="YouTube URL">
            <input
              type="url"
              className="form-control"
              value={socialLinks.youtube || ''}
              onChange={(e) => handleSocialChange('youtube', e.target.value)}
              placeholder="https://youtube.com/@firevy"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 6. Legal & Copyright Bar */}
      <AdminFormSection title="6. Bottom Copyright & Policy Links">
        <AdminFormGrid columns={3}>
          <AdminFormField label="Copyright Notice Text" required>
            <input
              type="text"
              className="form-control"
              value={data?.copyrightText || '© 2026 firevy.co. All rights reserved.'}
              onChange={(e) => handleDirectFieldChange('copyrightText', e.target.value)}
              placeholder="© 2026 firevy.co. All rights reserved."
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="Privacy Policy URL Link">
            <input
              type="text"
              className="form-control"
              value={data?.privacyPolicyLink || '/privacy-policy'}
              onChange={(e) => handleDirectFieldChange('privacyPolicyLink', e.target.value)}
              placeholder="/privacy-policy"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>

          <AdminFormField label="Terms of Use URL Link">
            <input
              type="text"
              className="form-control"
              value={data?.termsOfUseLink || '/terms'}
              onChange={(e) => handleDirectFieldChange('termsOfUseLink', e.target.value)}
              placeholder="/terms"
              style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

    </div>
  );
};

export default FooterSectionEditor;
