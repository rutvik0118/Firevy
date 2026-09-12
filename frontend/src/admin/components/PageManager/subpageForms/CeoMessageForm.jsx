import React, { useRef } from 'react';
import { Plus, Trash2, Quote, Upload, Image as ImageIcon, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';
import adminService from '../../../services/adminService';
import { getMediaUrl } from '../../../../utils/mediaUrl';

/**
 * CeoMessageForm
 * 
 * Complete Page-Specific CMS Form for "CEO Message & Vision"
 * 100% matched with the live website layout and user specification.
 */
export const CeoMessageForm = ({
  formData = {},
  onChange,
  subPageMeta,
  pageNumber = 1
}) => {
  const fileInputRef = useRef(null);

  // Helper to update root and nested content fields cleanly
  const updateMultiple = (updates) => {
    onChange({
      ...formData,
      ...updates,
      content: {
        ...(formData.content || {}),
        ...(updates.content || {})
      },
      hero: {
        ...(formData.hero || {}),
        ...(updates.hero || {})
      },
      cta: {
        ...(formData.cta || {}),
        ...(updates.cta || {})
      }
    });
  };

  const updateRootField = (field, value) => {
    onChange({
      ...formData,
      [field]: value
    });
  };

  const updateContentField = (field, value) => {
    onChange({
      ...formData,
      content: {
        ...(formData.content || {}),
        [field]: value
      }
    });
  };

  const updateSection = (section, field, value) => {
    onChange({
      ...formData,
      [section]: {
        ...(formData[section] || {}),
        [field]: value
      }
    });
  };

  // 1. Hero & CEO Profile Defaults
  const hero = formData.hero || {};
  const content = formData.content || {};
  const heroTitle = hero.title || formData.title || content.heroHeading || 'Message From CEO';
  const heroSubtitle = hero.subtitle || formData.subtitle || content.heroSubtitle || "In this message, our CEO shares insights on our mission, vision, and commitment to innovation. We are excited to continue growing with you, and we hope you find inspiration in the path we're forging together.";
  const heroButtonText = hero.ctaText || content.heroButtonText || 'Work With Us';
  const heroButtonLink = hero.ctaLink || content.heroButtonLink || '/contact';

  const ceoPhoto = formData.heroImage || hero.heroImage || content.ceoImage || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80';
  const ceoName = content.ceoName || 'Kumaril Patel';
  const ceoDesignation = content.ceoDesignation || '- CEO';

  // 2. Core Tenets (4 Words)
  const defaultTenets = ['Integrity', 'Excellence', 'Innovation', 'Leadership'];
  const tenets = Array.isArray(content.tenets) && content.tenets.length === 4
    ? content.tenets
    : defaultTenets;

  const handleUpdateTenet = (idx, val) => {
    const updated = [...tenets];
    updated[idx] = val;
    updateContentField('tenets', updated);
  };

  // 3. Leadership Quote Box
  const quote = content.quote || 'True leadership is not about holding power but igniting potential—in yourself, in your team, and in the world. Dream boldly, act fearlessly, and leave a legacy that inspires transformation.';
  const quoteAuthor = content.quoteAuthor || ceoName;
  const quoteAuthorRole = content.quoteAuthorRole || 'CEO';
  const quoteAuthorLinkedin = content.quoteAuthorLinkedin || 'https://linkedin.com';

  // 4. Detailed Message Paragraphs
  const defaultParagraphs = [
    "Welcome to firevy.co—a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership transcends the act of managing. It is about inspiring every individual within the organization to dream, innovate, and achieve greatness. Leadership is a responsibility to guide not just a company, but a movement—one driven by a relentless pursuit of excellence and a passion to redefine what is possible.",
    "At firevy.co, we are not mere participants in the ever-evolving tech landscape; we are architects of change. Our mission is to harness the transformative power of technology, crafting solutions that empower businesses, enrich lives, and shape the future. Every solution we build reflects a commitment to quality, creativity, and the unwavering belief that technology, when wielded wisely, can be a force for global progress.",
    "This company is more than a business—it is a beacon of possibility. Our team, fueled by curiosity and resilience, dares to envision a world where ideas are not limited by boundaries but ignited by boldness. Each challenge we face becomes an opportunity to grow, to innovate, and to lead. We don't just adapt to change; we are the change.",
    "I firmly believe that one revolutionary idea, one brilliant invention, has the potential to illuminate billions of lives. Technology has the power to bridge divides, solve pressing challenges, and transform societies. At firevy.co, we are not just creators of software—we are curators of dreams, building tools that unlock the infinite potential within every individual and organization we serve.",
    "Nothing is impossible when you dare to dream, believe in your vision, and act with unwavering conviction. Together, we will embrace challenges, seize opportunities, and continue to push the boundaries of what technology can achieve. This is our journey—a journey fueled by bold ideas, limitless ambition, and an unyielding commitment to excellence.",
    "Thank you for trusting us to be your partner in progress. Together, we are not just building software, mobile apps and websites; we are creating a legacy—a legacy of innovation, impact, and transformative power that will resonate for generations to come."
  ];

  const paragraphs = (Array.isArray(content.messageParagraphs) && content.messageParagraphs.length > 0)
    ? content.messageParagraphs
    : defaultParagraphs;

  const handleAddParagraph = () => {
    const updated = [...paragraphs, ''];
    updateContentField('messageParagraphs', updated);
  };

  const handleUpdateParagraph = (idx, val) => {
    const updated = [...paragraphs];
    updated[idx] = val;
    updateContentField('messageParagraphs', updated);
  };

  const handleDeleteParagraph = (idx) => {
    const updated = paragraphs.filter((_, i) => i !== idx);
    updateContentField('messageParagraphs', updated);
  };

  // 5. Sign-off Block
  const signoffPrefix = content.signoffPrefix || "Yours Sincerely,";
  const signoffName = content.signoffName || ceoName;
  const signoffRole = content.signoffRole || "CEO";
  const signoffCompany = content.signoffCompany || "firevy.co";

  // 6. CTA Banner
  const cta = formData.cta || content.cta || {};
  const ctaTitle = cta.title || "Let's Work Together On Your Next Digital Project";
  const ctaSubtitle = cta.subtitle || "Have a project with us? Reach out today to learn more about how Firevy.co can help you unlock business solutions and drive your business strategy.";
  const ctaButtonText = cta.buttonText || "Request A Free Quote";
  const ctaButtonLink = cta.buttonLink || "/contact";

  // 7. SEO
  const seo = formData.seo || {};

  // Image Upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const res = await adminService.uploadMedia(file, 'image');
      const url = res?.data?.url || res?.data?.fileUrl || res?.url;
      if (url) {
        updateMultiple({
          heroImage: url,
          hero: { heroImage: url },
          content: { ceoImage: url }
        });
      }
    } catch (err) {
      console.error('Failed to upload CEO portrait:', err);
    } finally {
      e.target.value = '';
    }
  };

  return (
    <div className="cms-form-stack" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 1. PAGE INFORMATION HEADER (Cleaned, without locked Title/Slug inputs) */}
      <AdminPageInfoSection
        title={subPageMeta?.title || 'CEO Message & Vision'}
        slug={subPageMeta?.slug || 'ceo-message'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/ceo-message'}
        number={pageNumber}
      />

      {/* 2. SECTION 1: HERO SECTION & CEO INTRODUCTION */}
      <AdminFormSection
        title="1. Hero Section & CEO Introduction"
        subtitle="Main headline, narrative introduction, primary action button, and CEO portrait card."
        badge="Hero & Profile"
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Hero Main Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Message From CEO"
              value={heroTitle}
              onChange={(e) => {
                const val = e.target.value;
                updateMultiple({
                  title: val,
                  hero: { title: val },
                  content: { heroHeading: val }
                });
              }}
              style={{ fontWeight: 700 }}
              required
            />
          </AdminFormField>

          <AdminFormField label="Button Text & Link">
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Button Text (e.g. Work With Us)"
                value={heroButtonText}
                onChange={(e) => {
                  const val = e.target.value;
                  updateMultiple({
                    hero: { ctaText: val },
                    content: { heroButtonText: val }
                  });
                }}
                style={{ flex: '1 1 50%' }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Link (e.g. /contact)"
                value={heroButtonLink}
                onChange={(e) => {
                  const val = e.target.value;
                  updateMultiple({
                    hero: { ctaLink: val },
                    content: { heroButtonLink: val }
                  });
                }}
                style={{ flex: '1 1 50%' }}
              />
            </div>
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction Copy" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter hero introduction copy..."
              value={heroSubtitle}
              onChange={(e) => {
                const val = e.target.value;
                updateMultiple({
                  subtitle: val,
                  hero: { subtitle: val },
                  content: { heroSubtitle: val }
                });
              }}
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* CEO Portrait Card Visual Editor */}
        <div
          style={{
            marginTop: '20px',
            padding: '18px 20px',
            backgroundColor: '#F8FAFC',
            borderRadius: '12px',
            border: '1px solid #E2E8F0'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#006B8F' }} />
            <span>Right-Side CEO Portrait Card Details</span>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* CEO Photo Thumbnail Preview with Upload Action */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <div
                style={{
                  width: '120px',
                  height: '140px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#E2E8F0',
                  border: '2px solid #CBD5E1',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
                }}
                onClick={() => fileInputRef.current?.click()}
                title="Click to change CEO photo"
              >
                {ceoPhoto ? (
                  <img
                    src={getMediaUrl(ceoPhoto)}
                    alt={ceoName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80';
                    }}
                  />
                ) : (
                  <ImageIcon size={32} color="#94A3B8" />
                )}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                    color: '#FFF'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <Upload size={22} />
                </div>
              </div>

              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                style={{ fontSize: '11px', padding: '4px 12px', display: 'flex', alignItems: 'center', gap: '4px' }}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={12} />
                <span>Upload Photo</span>
              </button>

              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
            </div>

            {/* CEO Profile Fields */}
            <div style={{ flex: 1, minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="CEO Full Name" required>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Kumaril Patel"
                    value={ceoName}
                    onChange={(e) => updateContentField('ceoName', e.target.value)}
                    style={{ fontWeight: 700 }}
                  />
                </AdminFormField>

                <AdminFormField label="Role / Badge on Plate" required>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. - CEO"
                    value={ceoDesignation}
                    onChange={(e) => updateContentField('ceoDesignation', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>

              <AdminFormField label="CEO Portrait Image URL / Path">
                <input
                  type="text"
                  className="form-control"
                  placeholder="https://... or /images/..."
                  value={ceoPhoto}
                  onChange={(e) => {
                    const val = e.target.value;
                    updateMultiple({
                      heroImage: val,
                      hero: { heroImage: val },
                      content: { ceoImage: val }
                    });
                  }}
                  style={{ fontSize: '12px', fontFamily: 'monospace' }}
                />
              </AdminFormField>
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* 3. SECTION 2: CORE TENETS & LEADERSHIP KEYNOTE QUOTE */}
      <AdminFormSection
        title="2. Core Tenets & Leadership Keynote Quote"
        subtitle="Left-side typography pillar words and right-side light blue leadership quote box."
        badge="Tenets & Quote"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Left Core Tenets (4 Words) */}
          <div style={{ padding: '16px 18px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.04em' }}>
              4 Left-Side Core Tenets (Italic Bold Typography Words)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              {tenets.map((word, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: idx % 2 === 0 ? '#006B8F' : '#1E293B' }}>
                    Pillar Word #{idx + 1}
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={word}
                    onChange={(e) => handleUpdateTenet(idx, e.target.value)}
                    style={{ fontWeight: 800, fontStyle: 'italic' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Quote Box */}
          <div style={{ padding: '18px 20px', backgroundColor: '#F0F7FA', borderRadius: '12px', border: '1px solid #BAE6FD' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#0369A1' }}>
              <Quote size={20} />
              <span style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Right-Side Quote Card Box
              </span>
            </div>

            <AdminFormField label="Keynote Quote Text" fullWidth required>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Enter executive quote..."
                value={quote}
                onChange={(e) => updateContentField('quote', e.target.value)}
                style={{ fontWeight: 600, color: '#0B3B60', fontSize: '14px' }}
              />
            </AdminFormField>

            <div style={{ marginTop: '12px' }}>
              <AdminFormGrid columns={3} gap="12px">
                <AdminFormField label="Quote Author Name">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Kumaril Patel"
                    value={quoteAuthor}
                    onChange={(e) => updateContentField('quoteAuthor', e.target.value)}
                    style={{ fontWeight: 700, color: '#006B8F' }}
                  />
                </AdminFormField>

                <AdminFormField label="Author Designation">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. CEO"
                    value={quoteAuthorRole}
                    onChange={(e) => updateContentField('quoteAuthorRole', e.target.value)}
                    style={{ fontWeight: 700 }}
                  />
                </AdminFormField>

                <AdminFormField label="LinkedIn Profile URL">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. https://linkedin.com/..."
                    value={quoteAuthorLinkedin}
                    onChange={(e) => updateContentField('quoteAuthorLinkedin', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* 4. SECTION 3: CEO DETAILED LETTER & SIGN-OFF */}
      <AdminFormSection
        title="3. CEO Detailed Message Letter & Sign-Off"
        subtitle="Manage the full body text paragraphs of the CEO letter and the bottom sign-off signature block."
        badge={`${paragraphs.length} Paragraphs`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {paragraphs.map((pText, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                padding: '14px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#E0F2FE',
                  color: '#006B8F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 800,
                  flexShrink: 0,
                  marginTop: '4px'
                }}
              >
                {idx + 1}
              </div>

              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', marginBottom: '4px', display: 'block' }}>
                  PARAGRAPH {idx + 1}
                </label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder={`Write letter paragraph ${idx + 1}...`}
                  value={pText}
                  onChange={(e) => handleUpdateParagraph(idx, e.target.value)}
                  style={{ lineHeight: 1.6, fontSize: '13.5px' }}
                />
              </div>

              <button
                type="button"
                onClick={() => handleDeleteParagraph(idx)}
                className="btn btn-ghost btn-icon-sm"
                style={{ color: '#EF4444', marginTop: '22px', flexShrink: 0 }}
                title="Delete this paragraph"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddParagraph}
            className="btn btn-outline-secondary btn-sm"
            style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 16px', fontWeight: 700 }}
          >
            <Plus size={14} />
            <span>Add Letter Paragraph</span>
          </button>
        </div>

        {/* Sign-off Signature Block Editor */}
        <div
          style={{
            marginTop: '20px',
            padding: '16px 20px',
            backgroundColor: '#F8FAFC',
            borderRadius: '10px',
            border: '1px solid #E2E8F0'
          }}
        >
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.04em' }}>
            Bottom Sign-Off Signature Block
          </div>
          <AdminFormGrid columns={4} gap="12px">
            <AdminFormField label="Prefix Greeting">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Yours Sincerely,"
                value={signoffPrefix}
                onChange={(e) => updateContentField('signoffPrefix', e.target.value)}
              />
            </AdminFormField>

            <AdminFormField label="Sign-Off Name">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Kumaril Patel"
                value={signoffName}
                onChange={(e) => updateContentField('signoffName', e.target.value)}
                style={{ fontWeight: 800 }}
              />
            </AdminFormField>

            <AdminFormField label="Designation">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. CEO"
                value={signoffRole}
                onChange={(e) => updateContentField('signoffRole', e.target.value)}
                style={{ fontWeight: 700 }}
              />
            </AdminFormField>

            <AdminFormField label="Company Name">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. firevy.co"
                value={signoffCompany}
                onChange={(e) => updateContentField('signoffCompany', e.target.value)}
              />
            </AdminFormField>
          </AdminFormGrid>
        </div>
      </AdminFormSection>

      {/* 5. SECTION 4: BOTTOM CTA BANNER ("LET'S WORK TOGETHER") */}
      <AdminFormSection
        title="4. Bottom Call-To-Action Banner"
        subtitle="The dark-blue 'Let's Work Together On Your Next Digital Project' callout section."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2} gap="14px">
          <AdminFormField label="CTA Banner Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Let's Work Together On Your Next Digital Project"
              value={ctaTitle}
              onChange={(e) => {
                const val = e.target.value;
                updateMultiple({
                  cta: { ...cta, title: val },
                  content: { cta: { ...cta, title: val } }
                });
              }}
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Banner Subtitle / Description" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              placeholder="Enter CTA description copy..."
              value={ctaSubtitle}
              onChange={(e) => {
                const val = e.target.value;
                updateMultiple({
                  cta: { ...cta, subtitle: val },
                  content: { cta: { ...cta, subtitle: val } }
                });
              }}
            />
          </AdminFormField>

          <AdminFormField label="Button Text">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Request A Free Quote"
              value={ctaButtonText}
              onChange={(e) => {
                const val = e.target.value;
                updateMultiple({
                  cta: { ...cta, buttonText: val },
                  content: { cta: { ...cta, buttonText: val } }
                });
              }}
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>

          <AdminFormField label="Button Destination Link">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={ctaButtonLink}
              onChange={(e) => {
                const val = e.target.value;
                updateMultiple({
                  cta: { ...cta, buttonLink: val },
                  content: { cta: { ...cta, buttonLink: val } }
                });
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 6. SECTION 5: SEO & SEARCH METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default CeoMessageForm;
