import React, { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
  GripVertical,
  ChevronRight,
  Sliders,
  Sparkles,
  Layers,
  Video,
  Image as ImageIcon,
  Check,
  X,
  Copy,
  Eye,
  EyeOff,
  Type,
  MousePointerClick,
  Layout,
  ListOrdered,
  Settings,
  Film
} from 'lucide-react';
import MediaUploadInput, { getMediaUrl } from '../../../components/UI/MediaUploadInput';
import { useToast } from '../../../context/ToastContext';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const HeroEditor = ({ data, onChange }) => {
  const { addToast } = useToast();

  // Ensure slides array exists with fallback
  const rawSlides = [
    {
      tag: 'AI Innovation',
      titleLine1: 'Your Vision,',
      titleLine2: 'Our Technology',
      subTag: '(Limitless Possibilities)',
      bullets: [
        'Recognized as #1 Web Development Company in India and USA.',
        'Trusted by 20+ Fortune 500 Companies and a Clutch Leader.',
        "We've been Redefining Excellence for over Two Decades."
      ],
      primaryCtaText: "Let's Talk",
      primaryCtaLink: '/contact',
      secondaryCtaText: 'Get in Touch',
      secondaryCtaLink: '/contact',
      rightBoxTitle: 'Redefined Learning Experiences',
      rightBoxSub: 'With Intelligent AI Innovation',
      bgType: 'video',
      backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      backgroundImageUrl: '',
      isActive: true,
      autoRotate: true
    }
  ];

  const slides = (data?.slides && Array.isArray(data.slides) && data.slides.length > 0)
    ? data.slides
    : rawSlides;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [draggedIndex, setDraggedIndex] = useState(null);

  // Sync selected index if slides count shrinks
  useEffect(() => {
    if (slides.length > 0 && selectedIndex >= slides.length) {
      setSelectedIndex(0);
    }
  }, [slides.length, selectedIndex]);

  const currentSlide = slides[selectedIndex] || slides[0] || {};

  // Propagate changes up to parent Home Page state
  const notifyParent = (newSlides, extraFields = {}) => {
    onChange({
      ...data,
      slides: newSlides,
      ...extraFields
    });
  };

  // Update specific field on current slide
  const handleUpdateCurrentSlideField = (field, value) => {
    const updated = [...slides];
    updated[selectedIndex] = {
      ...updated[selectedIndex],
      [field]: value
    };
    notifyParent(updated);
  };

  // Toggle active/inactive status of current slide
  const handleToggleCurrentSlideStatus = () => {
    const currentVal = currentSlide.isActive !== false;
    handleUpdateCurrentSlideField('isActive', !currentVal);
    addToast(`Slide ${selectedIndex + 1} is now ${!currentVal ? 'Active' : 'Inactive'}`, 'info');
  };

  // Add new slide
  const handleAddNewSlide = () => {
    const newSlideNumber = slides.length + 1;
    const newSlide = {
      tag: `Innovation 0${newSlideNumber}`,
      titleLine1: 'Transforming Ideas,',
      titleLine2: 'Empowering Brands',
      subTag: '(Next-Gen Software)',
      bullets: [
        'High-velocity full-stack product development',
        'Mission-critical cloud infrastructure & DevOps',
        '24/7 dedicated support and SLA guarantees'
      ],
      primaryCtaText: "Let's Talk",
      primaryCtaLink: '/contact',
      secondaryCtaText: 'Get in Touch',
      secondaryCtaLink: '/contact',
      rightBoxTitle: 'Accelerate Digital Growth',
      rightBoxSub: 'With Scalable Enterprise Engineering',
      bgType: 'video',
      backgroundVideoUrl: data?.backgroundVideoUrl || '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
      backgroundImageUrl: '',
      isActive: true,
      autoRotate: true
    };

    const newSlides = [...slides, newSlide];
    notifyParent(newSlides);
    setSelectedIndex(newSlides.length - 1);
    addToast(`Slide 0${newSlideNumber} created!`, 'success');
  };

  // Duplicate current slide
  const handleDuplicateSlide = (idxToDuplicate, e) => {
    if (e) e.stopPropagation();
    const sourceSlide = slides[idxToDuplicate];
    const duplicated = {
      ...sourceSlide,
      tag: `${sourceSlide.tag || 'Slide'} (Copy)`
    };
    const newSlides = [...slides];
    newSlides.splice(idxToDuplicate + 1, 0, duplicated);
    notifyParent(newSlides);
    setSelectedIndex(idxToDuplicate + 1);
    addToast(`Slide duplicated successfully!`, 'success');
  };

  // Delete slide
  const handleDeleteSlide = (idxToDelete, e) => {
    if (e) e.stopPropagation();
    if (slides.length <= 1) {
      addToast('At least one hero slide is required.', 'warning');
      return;
    }

    const newSlides = slides.filter((_, i) => i !== idxToDelete);
    notifyParent(newSlides);
    if (selectedIndex >= newSlides.length) {
      setSelectedIndex(newSlides.length - 1);
    } else if (selectedIndex === idxToDelete && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
    addToast(`Slide 0${idxToDelete + 1} deleted.`, 'info');
  };

  // Drag and drop reordering
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
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const newSlides = [...slides];
    const [moved] = newSlides.splice(draggedIndex, 1);
    newSlides.splice(targetIndex, 0, moved);

    setDraggedIndex(null);
    setSelectedIndex(targetIndex);
    notifyParent(newSlides);
    addToast('Slide order updated!', 'success');
  };

  // Bullet point management
  const bullets = Array.isArray(currentSlide.bullets) ? currentSlide.bullets : [];

  const handleAddBullet = () => {
    const newBullets = [...bullets, ''];
    handleUpdateCurrentSlideField('bullets', newBullets);
  };

  const handleUpdateBullet = (bIdx, val) => {
    const newBullets = [...bullets];
    newBullets[bIdx] = val;
    handleUpdateCurrentSlideField('bullets', newBullets);
  };

  const handleDeleteBullet = (bIdx) => {
    const newBullets = bullets.filter((_, i) => i !== bIdx);
    handleUpdateCurrentSlideField('bullets', newBullets);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      
      {/* ========================================================
          TOP HORIZONTAL SLIDE SELECTOR TABS BAR
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
              <Layers size={15} />
            </div>
            <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Hero Slides ({slides.length})
            </h3>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>
              (Drag tab to reorder)
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddNewSlide}
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
            <Plus size={14} /> Add New Slide
          </button>
        </div>

        {/* Slide Tabs Grid Row - Clean responsive layout with zero horizontal overflow */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '10px'
          }}
        >
          {slides.map((slide, idx) => {
            const isSelected = idx === selectedIndex;
            const isActive = slide.isActive !== false;

            return (
              <div
                key={idx}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDrop={(e) => handleDrop(e, idx)}
                onClick={() => setSelectedIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 12px',
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
                    {slide.titleLine1 || 'Slide'} {slide.titleLine2 || ''}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {slide.tag || `Slide 0${idx + 1}`}
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
          SLIDE TOOLBAR & EDIT FORM (FULL WIDTH - ZERO EXTRA SPACE)
          ======================================================== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* Slide Header Toolbar */}
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
                borderRadius: '8px',
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
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: '#0F172A', whiteSpace: 'nowrap' }}>
                Editing Slide 0{selectedIndex + 1}
              </h3>
              <p style={{ margin: '1px 0 0 0', fontSize: '11.5px', color: '#64748B', whiteSpace: 'nowrap' }}>
                Changes update live in preview and sync on Save.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <button
              type="button"
              onClick={(e) => handleDuplicateSlide(selectedIndex, e)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '36px',
                padding: '0 14px',
                borderRadius: '8px',
                backgroundColor: '#E0F2FE',
                border: '1px solid #BAE6FD',
                color: '#0369A1',
                fontSize: '12px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              title="Duplicate this slide"
            >
              <Copy size={14} />
              <span>Duplicate Slide</span>
            </button>

            <button
              type="button"
              onClick={handleToggleCurrentSlideStatus}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '36px',
                padding: '0 14px',
                borderRadius: '8px',
                backgroundColor: currentSlide.isActive !== false ? '#DCFCE7' : '#F1F5F9',
                color: currentSlide.isActive !== false ? '#15803D' : '#64748B',
                border: '1px solid',
                borderColor: currentSlide.isActive !== false ? '#BBF7D0' : '#E2E8F0',
                fontSize: '12px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {currentSlide.isActive !== false ? <Eye size={14} /> : <EyeOff size={14} />}
              <span>{currentSlide.isActive !== false ? 'Active in Carousel' : 'Hidden'}</span>
            </button>

            <button
              type="button"
              onClick={(e) => handleDeleteSlide(selectedIndex, e)}
              disabled={slides.length <= 1}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '36px',
                padding: '0 14px',
                borderRadius: '8px',
                backgroundColor: slides.length <= 1 ? '#F1F5F9' : '#FEF2F2',
                border: '1px solid',
                borderColor: slides.length <= 1 ? '#E2E8F0' : '#FEE2E2',
                color: slides.length <= 1 ? '#94A3B8' : '#DC2626',
                fontSize: '12px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                cursor: slides.length <= 1 ? 'not-allowed' : 'pointer',
                opacity: slides.length <= 1 ? 0.5 : 1,
                transition: 'all 0.15s ease'
              }}
            >
              <Trash2 size={14} />
              <span>Delete Slide</span>
            </button>
          </div>
        </div>

        {/* 1. Slide Headings & Labels Card */}
        <AdminFormSection title="1. Slide Headings & Labels">
          <AdminFormGrid columns={2}>
            <AdminFormField label="Top Badge / Tag" required helperText="e.g. AI Innovation">
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.tag || ''}
                onChange={(e) => handleUpdateCurrentSlideField('tag', e.target.value)}
                placeholder="e.g. AI Innovation"
              />
            </AdminFormField>

            <AdminFormField label="Sub-heading Tag (Parentheses)" helperText="e.g. (Limitless Possibilities)">
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.subTag || ''}
                onChange={(e) => handleUpdateCurrentSlideField('subTag', e.target.value)}
                placeholder="e.g. (Limitless Possibilities)"
              />
            </AdminFormField>

            <AdminFormField label="Heading Line 1 (Blue Text)" required helperText="First phrase of main title">
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.titleLine1 || ''}
                onChange={(e) => handleUpdateCurrentSlideField('titleLine1', e.target.value)}
                placeholder="e.g. Your Vision,"
              />
            </AdminFormField>

            <AdminFormField label="Heading Line 2 (Pink Text)" required helperText="Second phrase of main title">
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.titleLine2 || ''}
                onChange={(e) => handleUpdateCurrentSlideField('titleLine2', e.target.value)}
                placeholder="e.g. Our Technology"
              />
            </AdminFormField>
          </AdminFormGrid>
        </AdminFormSection>

        {/* 2. Call To Action Buttons */}
        <AdminFormSection title="2. Call To Action (CTA) Buttons">
          <AdminFormGrid columns={2}>
            <AdminFormField label="Primary Button Text" required>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.primaryCtaText || ''}
                onChange={(e) => handleUpdateCurrentSlideField('primaryCtaText', e.target.value)}
                placeholder="e.g. Let's Talk"
              />
            </AdminFormField>

            <AdminFormField label="Primary Button Link" required>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.primaryCtaLink || ''}
                onChange={(e) => handleUpdateCurrentSlideField('primaryCtaLink', e.target.value)}
                placeholder="e.g. /contact"
              />
            </AdminFormField>

            <AdminFormField label="Secondary Button Text">
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.secondaryCtaText || ''}
                onChange={(e) => handleUpdateCurrentSlideField('secondaryCtaText', e.target.value)}
                placeholder="e.g. Get in Touch"
              />
            </AdminFormField>

            <AdminFormField label="Secondary Button Link">
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.secondaryCtaLink || ''}
                onChange={(e) => handleUpdateCurrentSlideField('secondaryCtaLink', e.target.value)}
                placeholder="e.g. /contact"
              />
            </AdminFormField>
          </AdminFormGrid>
        </AdminFormSection>

        {/* 3. Floating Info Card */}
        <AdminFormSection title="3. Right Floating Info Card">
          <AdminFormGrid columns={2}>
            <AdminFormField label="Card Title">
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.rightBoxTitle || ''}
                onChange={(e) => handleUpdateCurrentSlideField('rightBoxTitle', e.target.value)}
                placeholder="e.g. Redefined Learning Experiences"
              />
            </AdminFormField>

            <AdminFormField label="Card Sub-title">
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.rightBoxSub || ''}
                onChange={(e) => handleUpdateCurrentSlideField('rightBoxSub', e.target.value)}
                placeholder="e.g. With Intelligent AI Innovation"
              />
            </AdminFormField>
          </AdminFormGrid>
        </AdminFormSection>

        {/* 4. Media Assets & Background */}
        <AdminFormSection title="4. Background Media & Video">
          <AdminFormGrid columns={1}>
            <AdminFormField label="Background Video (MP4 / WebM)" helperText="Upload hero background video to display on main website">
              <MediaUploadInput
                label="Background Video (MP4 / WebM)"
                type="video"
                value={currentSlide.backgroundVideoUrl || ''}
                onChange={(val) => handleUpdateCurrentSlideField('backgroundVideoUrl', val)}
                helperText="Upload looping hero background video"
              />
            </AdminFormField>
          </AdminFormGrid>
        </AdminFormSection>

        {/* 5. Highlight Bullet Points */}
        <AdminFormSection
          title={`5. Highlight Bullet Points (${bullets.length})`}
          action={
            <button
              type="button"
              onClick={handleAddBullet}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: '#E0F2FE',
                color: '#006B8F',
                border: 'none',
                fontSize: '11.5px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Plus size={13} /> Add Bullet
            </button>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {bullets.map((bullet, bIdx) => (
              <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    fontSize: '11.5px',
                    color: '#006B8F',
                    fontWeight: 800,
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#F0F9FF',
                    border: '1px solid #BAE6FD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {bIdx + 1}
                </span>
                <input
                  type="text"
                  className="form-control"
                  value={bullet}
                  onChange={(e) => handleUpdateBullet(bIdx, e.target.value)}
                  placeholder={`Bullet point ${bIdx + 1}...`}
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '13px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                />
                <button
                  type="button"
                  onClick={() => handleDeleteBullet(bIdx)}
                  style={{ padding: '8px', backgroundColor: '#FEF2F2', border: '1px solid #FEE2E2', borderRadius: '6px', color: '#DC2626', cursor: 'pointer' }}
                  title="Delete bullet point"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </AdminFormSection>

        {/* 6. Settings */}
        <AdminFormSection title="6. Carousel Controls & Settings">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                borderRadius: '8px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                fontSize: '13px',
                cursor: 'pointer',
                color: '#0F172A',
                fontWeight: 600
              }}
            >
              <input
                type="checkbox"
                checked={currentSlide.isActive !== false}
                onChange={(e) => handleUpdateCurrentSlideField('isActive', e.target.checked)}
                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#006B8F' }}
              />
              <span>Active / Visible in Homepage Carousel</span>
            </label>

            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                borderRadius: '8px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                fontSize: '13px',
                cursor: 'pointer',
                color: '#0F172A',
                fontWeight: 600
              }}
            >
              <input
                type="checkbox"
                checked={currentSlide.autoRotate !== false}
                onChange={(e) => handleUpdateCurrentSlideField('autoRotate', e.target.checked)}
                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#006B8F' }}
              />
              <span>Auto-Rotation Enabled (Cycles automatically on timer)</span>
            </label>
          </div>
        </AdminFormSection>

      </div>
    </div>
  );
};

export default HeroEditor;
