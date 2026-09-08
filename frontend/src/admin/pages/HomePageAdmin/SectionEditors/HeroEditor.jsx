import React, { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
  GripVertical,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Video,
  Image as ImageIcon,
  CheckCircle2,
  Sliders,
  Sparkles,
  Layers,
  Check,
  X
} from 'lucide-react';
import MediaUploadInput from '../../../components/UI/MediaUploadInput';
import { useToast } from '../../../context/ToastContext';

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

  // Collapsible Accordion States (collapsed initially to fit viewport naturally)
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isBulletsOpen, setIsBulletsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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
            borderRadius: '8px',
            padding: '12px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>
                Slides ({slides.length})
              </h3>
              <p style={{ margin: '1px 0 0 0', fontSize: '11px', color: '#64748B' }}>
                Drag to reorder carousel slides
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddNewSlide}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 8px',
                borderRadius: '5px',
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
                    borderRadius: '6px',
                    backgroundColor: isSelected ? '#F0F9FF' : '#F8FAFC',
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
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {slide.titleLine1 || 'Slide'} {slide.titleLine2 || ''}
                      </div>
                      <div style={{ fontSize: '10px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {slide.tag || `Slide 0${idx + 1}`}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                    <span
                      style={{
                        fontSize: '9px',
                        fontWeight: 700,
                        padding: '1px 5px',
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
            RIGHT COLUMN: EDIT SLIDE FORM
            ======================================================== */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          {/* Header with Status & Delete */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '10px',
              borderBottom: '1px solid #E2E8F0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                  padding: '2px 8px',
                  borderRadius: '12px',
                  backgroundColor: currentSlide.isActive !== false ? '#DCFCE7' : '#F1F5F9',
                  color: currentSlide.isActive !== false ? '#15803D' : '#64748B',
                  border: '1px solid',
                  borderColor: currentSlide.isActive !== false ? '#BBF7D0' : '#E2E8F0',
                  fontSize: '10px',
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
                gap: '4px',
                padding: '4px 8px',
                borderRadius: '5px',
                backgroundColor: '#FEF2F2',
                border: '1px solid #FEE2E2',
                color: '#DC2626',
                fontSize: '11px',
                fontWeight: 600,
                cursor: slides.length <= 1 ? 'not-allowed' : 'pointer',
                opacity: slides.length <= 1 ? 0.5 : 1
              }}
            >
              <Trash2 size={12} /> Delete Slide
            </button>
          </div>

          {/* Form Fields: Structured 2-Column Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Top Badge / Tag <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.tag || ''}
                onChange={(e) => handleUpdateCurrentSlideField('tag', e.target.value)}
                placeholder="e.g. AI Innovation"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Sub-heading (in parentheses)
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.subTag || ''}
                onChange={(e) => handleUpdateCurrentSlideField('subTag', e.target.value)}
                placeholder="e.g. (Limitless Possibilities)"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Heading Line 1 <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.titleLine1 || ''}
                onChange={(e) => handleUpdateCurrentSlideField('titleLine1', e.target.value)}
                placeholder="e.g. Your Vision,"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Heading Line 2 <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.titleLine2 || ''}
                onChange={(e) => handleUpdateCurrentSlideField('titleLine2', e.target.value)}
                placeholder="e.g. Our Technology"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Primary Button Text <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.primaryCtaText || ''}
                onChange={(e) => handleUpdateCurrentSlideField('primaryCtaText', e.target.value)}
                placeholder="e.g. Let's Talk"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Primary Button Link <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.primaryCtaLink || ''}
                onChange={(e) => handleUpdateCurrentSlideField('primaryCtaLink', e.target.value)}
                placeholder="e.g. /contact"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Secondary Button Text
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.secondaryCtaText || ''}
                onChange={(e) => handleUpdateCurrentSlideField('secondaryCtaText', e.target.value)}
                placeholder="e.g. Get in Touch"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Secondary Button Link
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.secondaryCtaLink || ''}
                onChange={(e) => handleUpdateCurrentSlideField('secondaryCtaLink', e.target.value)}
                placeholder="e.g. /contact"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Right Box Title
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.rightBoxTitle || ''}
                onChange={(e) => handleUpdateCurrentSlideField('rightBoxTitle', e.target.value)}
                placeholder="e.g. Redefined Learning Experiences"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                Right Box Sub-title
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                value={currentSlide.rightBoxSub || ''}
                onChange={(e) => handleUpdateCurrentSlideField('rightBoxSub', e.target.value)}
                placeholder="e.g. With Intelligent AI Innovation"
              />
            </div>
          </div>

          {/* Accordion 1: Background Media */}
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '6px', overflow: 'hidden' }}>
            <div
              onClick={() => setIsMediaOpen(!isMediaOpen)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', backgroundColor: '#F8FAFC', cursor: 'pointer', userSelect: 'none' }}
            >
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>Background Media</span>
              {isMediaOpen ? <ChevronUp size={14} color="#64748B" /> : <ChevronDown size={14} color="#64748B" />}
            </div>
            {isMediaOpen && (
              <div style={{ padding: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', backgroundColor: '#FFFFFF' }}>
                <MediaUploadInput
                  label="Background Video (MP4)"
                  type="video"
                  value={currentSlide.backgroundVideoUrl || ''}
                  onChange={(val) => handleUpdateCurrentSlideField('backgroundVideoUrl', val)}
                  helperText="Upload looping hero background video"
                />
                <MediaUploadInput
                  label="Fallback Background Image"
                  type="image"
                  value={currentSlide.backgroundImageUrl || ''}
                  onChange={(val) => handleUpdateCurrentSlideField('backgroundImageUrl', val)}
                  helperText="Upload poster / background image"
                />
              </div>
            )}
          </div>

          {/* Accordion 2: Bullet Points */}
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '6px', overflow: 'hidden' }}>
            <div
              onClick={() => setIsBulletsOpen(!isBulletsOpen)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', backgroundColor: '#F8FAFC', cursor: 'pointer', userSelect: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>Highlight Bullet Points ({bullets.length})</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handleAddBullet(); }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '2px 6px', borderRadius: '4px', backgroundColor: '#E0F2FE', color: '#006B8F', border: 'none', fontSize: '10px', fontWeight: 700, cursor: 'pointer' }}
                >
                  <Plus size={11} /> Add Bullet
                </button>
                {isBulletsOpen ? <ChevronUp size={14} color="#64748B" /> : <ChevronDown size={14} color="#64748B" />}
              </div>
            </div>
            {isBulletsOpen && (
              <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#FFFFFF' }}>
                {bullets.map((bullet, bIdx) => (
                  <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 700, width: '16px' }}>{bIdx + 1}.</span>
                    <input
                      type="text"
                      className="form-control"
                      value={bullet}
                      onChange={(e) => handleUpdateBullet(bIdx, e.target.value)}
                      placeholder={`Bullet point ${bIdx + 1}...`}
                      style={{ flex: 1, padding: '6px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteBullet(bIdx)}
                      style={{ padding: '4px', backgroundColor: '#FEF2F2', border: '1px solid #FEE2E2', borderRadius: '4px', color: '#DC2626', cursor: 'pointer' }}
                      title="Delete bullet point"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Accordion 3: Settings */}
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '6px', overflow: 'hidden' }}>
            <div
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', backgroundColor: '#F8FAFC', cursor: 'pointer', userSelect: 'none' }}
            >
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>Slide Settings</span>
              {isSettingsOpen ? <ChevronUp size={14} color="#64748B" /> : <ChevronDown size={14} color="#64748B" />}
            </div>
            {isSettingsOpen && (
              <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#FFFFFF' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', cursor: 'pointer', color: '#0F172A', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={currentSlide.isActive !== false}
                    onChange={(e) => handleUpdateCurrentSlideField('isActive', e.target.checked)}
                    style={{ width: '15px', height: '15px', cursor: 'pointer', accentColor: '#006B8F' }}
                  />
                  <span>Active / Visible in Homepage Carousel</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', cursor: 'pointer', color: '#0F172A', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={currentSlide.autoRotate !== false}
                    onChange={(e) => handleUpdateCurrentSlideField('autoRotate', e.target.checked)}
                    style={{ width: '15px', height: '15px', cursor: 'pointer', accentColor: '#006B8F' }}
                  />
                  <span>Auto-Rotation Enabled (Cycles automatically on timer)</span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;
