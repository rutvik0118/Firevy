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
  X
} from 'lucide-react';
import MediaUploadInput from '../../../components/UI/MediaUploadInput';
import { useToast } from '../../../context/ToastContext';
import { AdminFormSection, AdminFormGrid, AdminFormField, AdminMediaField } from '../../../components/UI/AdminEditLayout';

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

  // Delete slide
  const handleDeleteSlide = (idxToDelete, e) => {
    if (e) e.stopPropagation();
    if (slides.length <= 1) {
      addToast('At least one hero slide is required.', 'warning');
      return;
    }

    if (window.confirm(`Are you sure you want to delete Slide 0${idxToDelete + 1}?`)) {
      const newSlides = slides.filter((_, i) => i !== idxToDelete);
      notifyParent(newSlides);
      if (selectedIndex >= newSlides.length) {
        setSelectedIndex(newSlides.length - 1);
      } else if (selectedIndex === idxToDelete && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
      addToast(`Slide 0${idxToDelete + 1} deleted.`, 'info');
    }
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontFamily: "'Poppins', sans-serif" }}>
      {/* 2-Column Side-by-Side Professional Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '16px',
          alignItems: 'start'
        }}
      >
        {/* ========================================================
            LEFT COLUMN: SLIDES LIST
            ======================================================== */}
        <div
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #F1F5F9' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Slides ({slides.length})
              </h3>
              <p style={{ margin: '1px 0 0 0', fontSize: '11px', color: '#64748B' }}>
                Drag to reorder slides
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddNewSlide}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '5px 10px',
                borderRadius: '6px',
                backgroundColor: '#006B8F',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Plus size={13} /> Add Slide
            </button>
          </div>

          {/* Slide Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? '#F0F9FF' : '#FFFFFF',
                    border: isSelected ? '1.5px solid #006B8F' : '1px solid #E2E8F0',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0, paddingRight: '6px' }}>
                    <div style={{ color: '#94A3B8', cursor: 'grab', display: 'flex', alignItems: 'center' }}>
                      <GripVertical size={14} />
                    </div>

                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '4px',
                        backgroundColor: isSelected ? '#006B8F' : '#E2E8F0',
                        color: isSelected ? '#FFFFFF' : '#475569',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        fontWeight: 800,
                        flexShrink: 0
                      }}
                    >
                      0{idx + 1}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '11.5px', fontWeight: 700, color: isSelected ? '#006B8F' : '#0F172A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {slide.titleLine1 || 'Slide'} {slide.titleLine2 || ''}
                      </div>
                      <div style={{ fontSize: '10.5px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {slide.tag || `Slide 0${idx + 1}`}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                    <span
                      style={{
                        fontSize: '9.5px',
                        fontWeight: 700,
                        padding: '2px 6px',
                        borderRadius: '10px',
                        backgroundColor: isActive ? '#DCFCE7' : '#F1F5F9',
                        color: isActive ? '#15803D' : '#64748B'
                      }}
                    >
                      {isActive ? 'Active' : 'Hidden'}
                    </span>
                    <ChevronRight size={14} style={{ color: isSelected ? '#006B8F' : '#94A3B8' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: EDIT SLIDE FORM IN STRUCTURED CARDS
            ======================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Header with Status & Delete */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                Edit Slide (Slide 0{selectedIndex + 1})
              </h3>
              <button
                type="button"
                onClick={handleToggleCurrentSlideStatus}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  backgroundColor: currentSlide.isActive !== false ? '#DCFCE7' : '#F1F5F9',
                  color: currentSlide.isActive !== false ? '#15803D' : '#64748B',
                  border: '1px solid',
                  borderColor: currentSlide.isActive !== false ? '#BBF7D0' : '#E2E8F0',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: currentSlide.isActive !== false ? '#16A34A' : '#94A3B8'
                  }}
                />
                {currentSlide.isActive !== false ? 'Active' : 'Inactive'}
              </button>
            </div>

            <button
              type="button"
              onClick={(e) => handleDeleteSlide(selectedIndex, e)}
              disabled={slides.length <= 1}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 10px',
                borderRadius: '6px',
                backgroundColor: '#FEF2F2',
                border: '1px solid #FEE2E2',
                color: '#DC2626',
                fontSize: '11.5px',
                fontWeight: 600,
                cursor: slides.length <= 1 ? 'not-allowed' : 'pointer',
                opacity: slides.length <= 1 ? 0.5 : 1
              }}
            >
              <Trash2 size={13} /> Delete Slide
            </button>
          </div>

          {/* 1. Slide Headings & Labels Card */}
          <AdminFormSection title="Slide Headings & Labels">
            <AdminFormGrid columns={2}>
              <AdminFormField label="Top Badge / Tag" required>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.tag || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('tag', e.target.value)}
                  placeholder="e.g. AI Innovation"
                />
              </AdminFormField>

              <AdminFormField label="Sub-heading Tag (Parentheses)">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.subTag || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('subTag', e.target.value)}
                  placeholder="e.g. (Limitless Possibilities)"
                />
              </AdminFormField>

              <AdminFormField label="Heading Line 1" required>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.titleLine1 || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('titleLine1', e.target.value)}
                  placeholder="e.g. Your Vision,"
                />
              </AdminFormField>

              <AdminFormField label="Heading Line 2" required>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.titleLine2 || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('titleLine2', e.target.value)}
                  placeholder="e.g. Our Technology"
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* 2. Call To Action Buttons */}
          <AdminFormSection title="Call To Action Buttons">
            <AdminFormGrid columns={2}>
              <AdminFormField label="Primary Button Text" required>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.primaryCtaText || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('primaryCtaText', e.target.value)}
                  placeholder="e.g. Let's Talk"
                />
              </AdminFormField>

              <AdminFormField label="Primary Button Link" required>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.primaryCtaLink || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('primaryCtaLink', e.target.value)}
                  placeholder="e.g. /contact"
                />
              </AdminFormField>

              <AdminFormField label="Secondary Button Text">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.secondaryCtaText || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('secondaryCtaText', e.target.value)}
                  placeholder="e.g. Get in Touch"
                />
              </AdminFormField>

              <AdminFormField label="Secondary Button Link">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.secondaryCtaLink || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('secondaryCtaLink', e.target.value)}
                  placeholder="e.g. /contact"
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* 3. Floating Info Card */}
          <AdminFormSection title="Right Floating Info Card">
            <AdminFormGrid columns={2}>
              <AdminFormField label="Card Title">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.rightBoxTitle || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('rightBoxTitle', e.target.value)}
                  placeholder="e.g. Redefined Learning Experiences"
                />
              </AdminFormField>

              <AdminFormField label="Card Sub-title">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  value={currentSlide.rightBoxSub || ''}
                  onChange={(e) => handleUpdateCurrentSlideField('rightBoxSub', e.target.value)}
                  placeholder="e.g. With Intelligent AI Innovation"
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* 4. Media Assets & Background */}
          <AdminFormSection title="Background Media & Video">
            <AdminFormGrid columns={2}>
              <AdminFormField label="Background Video (MP4)" helperText="Upload looping hero background video">
                <MediaUploadInput
                  label="Background Video (MP4)"
                  type="video"
                  value={currentSlide.backgroundVideoUrl || ''}
                  onChange={(val) => handleUpdateCurrentSlideField('backgroundVideoUrl', val)}
                  helperText="Upload looping hero background video"
                />
              </AdminFormField>

              <AdminFormField label="Fallback Background Image" helperText="Upload poster or background image">
                <MediaUploadInput
                  label="Fallback Background Image"
                  type="image"
                  value={currentSlide.backgroundImageUrl || ''}
                  onChange={(val) => handleUpdateCurrentSlideField('backgroundImageUrl', val)}
                  helperText="Upload poster / background image"
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* 5. Highlight Bullet Points */}
          <AdminFormSection
            title={`Highlight Bullet Points (${bullets.length})`}
            action={
              <button
                type="button"
                onClick={handleAddBullet}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '5px', backgroundColor: '#E0F2FE', color: '#006B8F', border: 'none', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}
              >
                <Plus size={12} /> Add Bullet
              </button>
            }
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {bullets.map((bullet, bIdx) => (
                <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 700, width: '18px' }}>{bIdx + 1}.</span>
                  <input
                    type="text"
                    className="form-control"
                    value={bullet}
                    onChange={(e) => handleUpdateBullet(bIdx, e.target.value)}
                    placeholder={`Bullet point ${bIdx + 1}...`}
                    style={{ flex: 1, padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12.5px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteBullet(bIdx)}
                    style={{ padding: '6px', backgroundColor: '#FEF2F2', border: '1px solid #FEE2E2', borderRadius: '5px', color: '#DC2626', cursor: 'pointer' }}
                    title="Delete bullet point"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </AdminFormSection>

          {/* 6. Settings */}
          <AdminFormSection title="Slide Settings">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', cursor: 'pointer', color: '#0F172A', fontWeight: 600 }}>
                <input
                  type="checkbox"
                  checked={currentSlide.isActive !== false}
                  onChange={(e) => handleUpdateCurrentSlideField('isActive', e.target.checked)}
                  style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#006B8F' }}
                />
                <span>Active / Visible in Homepage Carousel</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', cursor: 'pointer', color: '#0F172A', fontWeight: 600 }}>
                <input
                  type="checkbox"
                  checked={currentSlide.autoRotate !== false}
                  onChange={(e) => handleUpdateCurrentSlideField('autoRotate', e.target.checked)}
                  style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#006B8F' }}
                />
                <span>Auto-Rotation Enabled (Cycles automatically on timer)</span>
              </label>
            </div>
          </AdminFormSection>
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;

