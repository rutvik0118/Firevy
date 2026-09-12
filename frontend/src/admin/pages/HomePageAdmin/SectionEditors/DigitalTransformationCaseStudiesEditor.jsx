import React, { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
  GripVertical,
  Copy,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
  ExternalLink,
  Image as ImageIcon,
  Building,
  Check,
  ListOrdered
} from 'lucide-react';
import MediaUploadInput from '../../../components/UI/MediaUploadInput';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';
import { useToast } from '../../../context/ToastContext';

export const DigitalTransformationCaseStudiesEditor = ({ data, onChange }) => {
  const { addToast } = useToast();
  const caseStudies = Array.isArray(data?.caseStudies) ? data.caseStudies : [];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [draggedIndex, setDraggedIndex] = useState(null);

  // Keep selected index within bounds
  useEffect(() => {
    if (caseStudies.length > 0 && selectedIndex >= caseStudies.length) {
      setSelectedIndex(0);
    }
  }, [caseStudies.length, selectedIndex]);

  const currentItem = caseStudies[selectedIndex] || caseStudies[0] || null;

  // Helper to update top-level section fields
  const handleTopFieldChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  // Helper to update field in current active case study
  const handleUpdateCurrentCaseStudy = (field, value) => {
    if (!currentItem) return;
    const updatedList = [...caseStudies];
    updatedList[selectedIndex] = {
      ...updatedList[selectedIndex],
      [field]: value
    };

    // If updating bullets text, keep both bullets and points in sync
    if (field === 'bulletsText') {
      const parsedBullets = typeof value === 'string'
        ? value.split('\n').map((b) => b.trim()).filter(Boolean)
        : [];
      updatedList[selectedIndex].bullets = parsedBullets;
      updatedList[selectedIndex].points = parsedBullets;
    }

    onChange({
      ...data,
      caseStudies: updatedList
    });
  };

  // Add new case study
  const handleAddNewCaseStudy = () => {
    const newIdx = caseStudies.length + 1;
    const newItem = {
      id: `cs_${Date.now()}`,
      company: `New Enterprise Client 0${newIdx}`,
      bgColor: '#E6F4FA',
      logo: '',
      desc: 'Partnered with client to modernize core legacy systems and architect agile digital workflows.',
      bullets: [
        'Automated enterprise operations with real-time sync',
        '99.9% uptime SLA on distributed cloud infrastructure',
        'Intuitive modern dashboards designed for maximum productivity'
      ],
      points: [
        'Automated enterprise operations with real-time sync',
        '99.9% uptime SLA on distributed cloud infrastructure',
        'Intuitive modern dashboards designed for maximum productivity'
      ],
      caseStudyLink: '/portfolio',
      portfolioLink: '/portfolio',
      mainImg: '',
      isActive: true
    };

    const updated = [...caseStudies, newItem];
    onChange({
      ...data,
      caseStudies: updated
    });
    setSelectedIndex(updated.length - 1);
    addToast(`Case Study 0${newIdx} added!`, 'success');
  };

  // Duplicate current case study
  const handleDuplicate = (idx, e) => {
    if (e) e.stopPropagation();
    const source = caseStudies[idx];
    if (!source) return;

    const duplicated = {
      ...source,
      id: `cs_${Date.now()}`,
      company: `${source.company || 'Case Study'} (Copy)`
    };

    const updated = [...caseStudies];
    updated.splice(idx + 1, 0, duplicated);
    onChange({
      ...data,
      caseStudies: updated
    });
    setSelectedIndex(idx + 1);
    addToast('Case study duplicated!', 'success');
  };

  // Delete case study
  const handleDelete = (idx, e) => {
    if (e) e.stopPropagation();
    if (caseStudies.length <= 1) {
      addToast('At least one case study is required.', 'warning');
      return;
    }

    const companyName = caseStudies[idx]?.company || `Case Study ${idx + 1}`;
    if (window.confirm(`Are you sure you want to delete "${companyName}"?`)) {
      const updated = caseStudies.filter((_, i) => i !== idx);
      onChange({
        ...data,
        caseStudies: updated
      });
      setSelectedIndex((prev) => Math.max(0, Math.min(prev, updated.length - 1)));
      addToast(`"${companyName}" deleted`, 'info');
    }
  };

  // Drag & drop handlers
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      return;
    }

    const updated = [...caseStudies];
    const [moved] = updated.splice(draggedIndex, 1);
    updated.splice(targetIndex, 0, moved);

    onChange({
      ...data,
      caseStudies: updated
    });
    setSelectedIndex(targetIndex);
    setDraggedIndex(null);
    addToast('Case studies reordered!', 'success');
  };

  // Convert bullets array to multiline string for textarea
  const bulletsText = currentItem?.bulletsText !== undefined
    ? currentItem.bulletsText
    : Array.isArray(currentItem?.bullets)
    ? currentItem.bullets.join('\n')
    : Array.isArray(currentItem?.points)
    ? currentItem.points.join('\n')
    : typeof currentItem?.bullets === 'string'
    ? currentItem.bullets
    : '';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      
      {/* Section Header & Subtitle */}
      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Digital Transformation Case Studies'}
              onChange={(e) => handleTopFieldChange('title', e.target.value)}
              placeholder="Digital Transformation Case Studies"
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF'
              }}
            />
          </AdminFormField>

          <AdminFormField label="Section Description Paragraph" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data?.description || 'Discover how we partner with industry pioneers to deliver bespoke web, mobile, and cloud software engineering.'}
              onChange={(e) => handleTopFieldChange('description', e.target.value)}
              placeholder="Discover how we partner with industry pioneers..."
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF',
                fontFamily: 'inherit',
                lineHeight: 1.5
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* ========================================================
          TOP HORIZONTAL CASE STUDIES TABS SELECTOR
          ======================================================== */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '12px',
          padding: '14px 16px',
          boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '6px',
                backgroundColor: '#E0F2FE',
                color: '#006B8F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Building size={15} />
            </div>
            <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Enterprise Case Studies ({caseStudies.length})
            </h3>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>
              (Drag tab to reorder)
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddNewCaseStudy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              height: '32px',
              padding: '0 12px',
              borderRadius: '6px',
              backgroundColor: '#006B8F',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 107, 143, 0.25)',
              transition: 'all 0.15s ease'
            }}
          >
            <Plus size={14} /> Add Case Study
          </button>
        </div>

        {/* Case Studies Responsive Grid Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '10px'
          }}
        >
          {caseStudies.map((cs, idx) => {
            const isSelected = idx === selectedIndex;
            const isActive = cs.isActive !== false;

            return (
              <div
                key={cs.id || idx}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDrop={(e) => handleDrop(e, idx)}
                onClick={() => setSelectedIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  backgroundColor: isSelected ? '#F0F9FF' : '#F8FAFC',
                  border: isSelected ? '2px solid #006B8F' : '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  minWidth: 0,
                  boxShadow: isSelected ? '0 2px 6px rgba(0, 107, 143, 0.12)' : 'none'
                }}
              >
                <div style={{ color: '#94A3B8', cursor: 'grab', display: 'flex', alignItems: 'center' }} title="Drag to reorder">
                  <GripVertical size={14} />
                </div>

                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '5px',
                    backgroundColor: isSelected ? '#006B8F' : '#CBD5E1',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 800,
                    flexShrink: 0
                  }}
                >
                  0{idx + 1}
                </div>

                <div style={{ minWidth: 0, flex: 1, overflow: 'hidden' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: isSelected ? '#006B8F' : '#0F172A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {cs.company || `Case Study ${idx + 1}`}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {cs.bgColor || '#E6F4FA'}
                  </div>
                </div>

                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#16A34A' : '#94A3B8',
                    flexShrink: 0
                  }}
                  title={isActive ? 'Active' : 'Hidden'}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          SELECTED CASE STUDY EDIT FORM (FULL-WIDTH - 0 EXTRA SPACE)
          ======================================================== */}
      {currentItem && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Header Action Toolbar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '12px 18px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '7px',
                  backgroundColor: '#006B8F',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 800,
                  flexShrink: 0
                }}
              >
                0{selectedIndex + 1}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Editing Case Study: {currentItem.company || `Case Study 0${selectedIndex + 1}`}
                </div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>
                  Live preview and database synchronization on Save.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={(e) => handleDuplicate(selectedIndex, e)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  height: '36px',
                  padding: '0 14px',
                  borderRadius: '8px',
                  backgroundColor: '#F0F9FF',
                  border: '1px solid #BAE6FD',
                  color: '#0369A1',
                  fontSize: '12px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <Copy size={14} />
                <span>Duplicate</span>
              </button>

              <button
                type="button"
                onClick={() => handleUpdateCurrentCaseStudy('isActive', currentItem.isActive === false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  height: '36px',
                  padding: '0 14px',
                  borderRadius: '8px',
                  backgroundColor: currentItem.isActive !== false ? '#DCFCE7' : '#F1F5F9',
                  color: currentItem.isActive !== false ? '#15803D' : '#64748B',
                  border: '1px solid',
                  borderColor: currentItem.isActive !== false ? '#BBF7D0' : '#E2E8F0',
                  fontSize: '12px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {currentItem.isActive !== false ? <Eye size={14} /> : <EyeOff size={14} />}
                <span>{currentItem.isActive !== false ? 'Active in Showcase' : 'Hidden'}</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleDelete(selectedIndex, e)}
                disabled={caseStudies.length <= 1}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  height: '36px',
                  padding: '0 14px',
                  borderRadius: '8px',
                  backgroundColor: caseStudies.length <= 1 ? '#F1F5F9' : '#FEF2F2',
                  border: '1px solid',
                  borderColor: caseStudies.length <= 1 ? '#E2E8F0' : '#FEE2E2',
                  color: caseStudies.length <= 1 ? '#94A3B8' : '#DC2626',
                  fontSize: '12px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  cursor: caseStudies.length <= 1 ? 'not-allowed' : 'pointer',
                  opacity: caseStudies.length <= 1 ? 0.5 : 1,
                  transition: 'all 0.15s ease'
                }}
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </button>
            </div>
          </div>

          {/* Form Section 1: Client & Branding */}
          <AdminFormSection title="1. Client & Brand Information">
            <AdminFormGrid columns={2}>
              <AdminFormField label="Client / Company Name" required helperText="e.g. Larsen & Toubro, Morris Garages, Adani Group">
                <input
                  type="text"
                  className="form-control"
                  value={currentItem.company || ''}
                  onChange={(e) => handleUpdateCurrentCaseStudy('company', e.target.value)}
                  placeholder="e.g. Larsen & Toubro"
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                />
              </AdminFormField>

              <AdminFormField label="Card Tint Hex Color" helperText="e.g. #E6F4FA, #FFEAEA, #EDEDF6">
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input
                    type="color"
                    value={currentItem.bgColor || '#E6F4FA'}
                    onChange={(e) => handleUpdateCurrentCaseStudy('bgColor', e.target.value)}
                    style={{ width: '38px', height: '38px', padding: 0, border: '1px solid #CBD5E1', borderRadius: '6px', cursor: 'pointer', background: 'none' }}
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={currentItem.bgColor || '#E6F4FA'}
                    onChange={(e) => handleUpdateCurrentCaseStudy('bgColor', e.target.value)}
                    placeholder="#E6F4FA"
                    style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  />
                </div>
              </AdminFormField>

              <AdminFormField label="Brand / Company Logo" fullWidth helperText="Upload client vector or PNG logo">
                <MediaUploadInput
                  value={currentItem.logo || ''}
                  onChange={(val) => handleUpdateCurrentCaseStudy('logo', val)}
                  type="image"
                  placeholder="Select or upload brand logo image..."
                  storageDir="case_study_logos"
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* Form Section 2: Narrative & Description */}
          <AdminFormSection title="2. Case Study Narrative & Description">
            <AdminFormGrid columns={1}>
              <AdminFormField label="Case Study Overview Description" required helperText="Provide high-level client background and software engineering scope">
                <textarea
                  className="form-control"
                  rows={4}
                  value={currentItem.desc || ''}
                  onChange={(e) => handleUpdateCurrentCaseStudy('desc', e.target.value)}
                  placeholder="Enter detailed company background and delivered software solutions..."
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF', fontFamily: 'inherit', lineHeight: 1.5 }}
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* Form Section 3: Highlight Bullets & Metrics */}
          <AdminFormSection title="3. Key Results & Highlight Metrics (Bullets)">
            <AdminFormGrid columns={1}>
              <AdminFormField label="Key Results & Metrics (One bullet point per line)" helperText="Each line appears as a distinct bullet point with a chevron indicator on the live website">
                <textarea
                  className="form-control"
                  rows={5}
                  value={bulletsText}
                  onChange={(e) => handleUpdateCurrentCaseStudy('bulletsText', e.target.value)}
                  placeholder={'Automated safety audits and inspections\n24/7 access to safety training resources\nCustomizable dashboards and reporting tools\n99% compliance with health and safety regulations'}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF', fontFamily: 'inherit', lineHeight: 1.5 }}
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* Form Section 4: Visual Graphic Mockup */}
          <AdminFormSection title="4. Case Study Showcase Graphic / Device Mockup">
            <AdminFormGrid columns={1}>
              <AdminFormField label="Overview Graphic Mockup" helperText="Upload high-resolution case study showcase graphic (e.g. /images/case_study_images/Images/new/l&t.webp)">
                <MediaUploadInput
                  value={currentItem.mainImg || currentItem.mockup || ''}
                  onChange={(val) => handleUpdateCurrentCaseStudy('mainImg', val)}
                  type="image"
                  placeholder="Select or upload showcase graphic mockup..."
                  storageDir="case_study_mockups"
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* Form Section 5: Buttons & Links */}
          <AdminFormSection title="5. Call to Action Buttons & Navigation Links">
            <AdminFormGrid columns={2}>
              <AdminFormField label="Case Study Button Link" helperText="Target URL for Case Study CTA">
                <input
                  type="text"
                  className="form-control"
                  value={currentItem.caseStudyLink || '/portfolio'}
                  onChange={(e) => handleUpdateCurrentCaseStudy('caseStudyLink', e.target.value)}
                  placeholder="/portfolio"
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                />
              </AdminFormField>

              <AdminFormField label="Portfolio Button Link" helperText="Target URL for Portfolio Explore CTA">
                <input
                  type="text"
                  className="form-control"
                  value={currentItem.portfolioLink || '/portfolio'}
                  onChange={(e) => handleUpdateCurrentCaseStudy('portfolioLink', e.target.value)}
                  placeholder="/portfolio"
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

        </div>
      )}
    </div>
  );
};

export default DigitalTransformationCaseStudiesEditor;
