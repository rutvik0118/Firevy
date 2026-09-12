import React from 'react';
import { Plus, Trash2, Upload, ExternalLink, Linkedin, Image as ImageIcon } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';
import { getMediaUrl } from '../../../../utils/mediaUrl';
import adminService from '../../../services/adminService';

/**
 * CeoMessageForm
 * 
 * 1:1 Match with the Live Website's CEO Message & Vision Page (/company/ceo-message):
 * 1. Hero & CEO Profile Card (Heading, Subtitle, Button, Photo with Upload, Name, Designation)
 * 2. Core Tenets & Leadership Quote Box (4 Tenets words, Quote, Author, Role, LinkedIn)
 * 3. Detailed CEO Letter & Sign-off (Dynamic Paragraphs repeater, Salutation, Name, Role, Company)
 * 4. Work Together CTA Banner (Heading, Subtitle, Button Label & Link)
 * 5. SEO & Metadata
 */
export const CeoMessageForm = ({
  formData = {},
  onChange,
  subPageMeta,
  pageNumber = 2
}) => {
  // Safe extraction with exact website defaults
  const hero = formData.hero || {};
  const content = formData.content || {};
  const cta = formData.cta || content.cta || {};
  const seo = formData.seo || {};

  // 1. Hero Defaults
  const heroHeading = hero.title || content.heroHeading || formData.title || 'Message From CEO';
  const heroSubtitle = hero.subtitle || content.heroSubtitle || formData.subtitle || "In this message, our CEO shares insights on our mission, vision, and commitment to innovation. We are excited to continue growing with you, and we hope you find inspiration in the path we're forging together.";
  const heroButtonText = hero.ctaText || content.heroButtonText || 'Work With Us';
  const heroButtonLink = hero.ctaLink || content.heroButtonLink || '/contact';

  // CEO Profile Defaults
  const ceoImage = formData.heroImage || hero.heroImage || content.ceoImage || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80';
  const ceoName = content.ceoName || 'Kumaril Patel';
  const ceoDesignation = content.ceoDesignation || '- CEO';

  // 2. Core Tenets Defaults
  const defaultTenets = ['Integrity', 'Excellence', 'Innovation', 'Leadership'];
  const tenets = Array.isArray(content.tenets) && content.tenets.length > 0 ? content.tenets : defaultTenets;

  // Quote Box Defaults
  const quoteText = content.quote || 'True leadership is not about holding power but igniting potential—in yourself, in your team, and in the world. Dream boldly, act fearlessly, and leave a legacy that inspires transformation.';
  const quoteAuthor = content.quoteAuthor || ceoName;
  const quoteAuthorRole = content.quoteAuthorRole || 'CEO';
  const quoteAuthorLinkedin = content.quoteAuthorLinkedin || 'https://linkedin.com';

  // 3. Message Paragraphs Defaults
  const defaultParagraphs = [
    'Welcome to firevy.co—a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership transcends the act of managing. It is about inspiring every individual within the organization to dream, innovate, and achieve greatness. Leadership is a responsibility to guide not just a company, but a movement—one driven by a relentless pursuit of excellence and a passion to redefine what is possible.',
    'At firevy.co, we are not mere participants in the ever-evolving tech landscape; we are architects of change. Our mission is to harness the transformative power of technology, crafting solutions that empower businesses, enrich lives, and shape the future. Every solution we build reflects a commitment to quality, creativity, and the unwavering belief that technology, when wielded wisely, can be a force for global progress.',
    'This company is more than a business—it is a beacon of possibility. Our team, fueled by curiosity and resilience, dares to envision a world where ideas are not limited by boundaries but ignited by boldness. Each challenge we face becomes an opportunity to grow, to innovate, and to lead. We don\'t just adapt to change; we are the change.',
    'I firmly believe that one revolutionary idea, one brilliant invention, has the potential to illuminate billions of lives. Technology has the power to bridge divides, solve pressing challenges, and transform societies. At firevy.co, we are not just creators of software—we are curators of dreams, building tools that unlock the infinite potential within every individual and organization we serve.',
    'Nothing is impossible when you dare to dream, believe in your vision, and act with unwavering conviction. Together, we will embrace challenges, seize opportunities, and continue to push the boundaries of what technology can achieve. This is our journey—a journey fueled by bold ideas, limitless ambition, and an unyielding commitment to excellence.',
    'Thank you for trusting us to be your partner in progress. Together, we are not just building software, mobile apps and websites; we are creating a legacy—a legacy of innovation, impact, and transformative power that will resonate for generations to come.'
  ];

  const paragraphs = Array.isArray(content.messageParagraphs) && content.messageParagraphs.length > 0
    ? content.messageParagraphs
    : defaultParagraphs;

  // Sign-off Defaults
  const signoffPrefix = content.signoffPrefix || "Yours Sincerely,";
  const signoffName = content.signoffName || ceoName;
  const signoffRole = content.signoffRole || 'CEO';
  const signoffCompany = content.signoffCompany || 'firevy.co';

  // 4. CTA Defaults
  const ctaTitle = cta.title || "Let's Work Together On Your Next Digital Project";
  const ctaSubtitle = cta.subtitle || 'Have a project with us? Reach out today to learn more about how Firevy.co can help you unlock business solutions and drive your business strategy.';
  const ctaButtonText = cta.buttonText || 'Request A Free Quote';
  const ctaButtonLink = cta.buttonLink || '/contact';

  // Helpers to update state atomically
  const updateContentField = (field, value) => {
    onChange({
      ...formData,
      content: {
        ...content,
        [field]: value
      }
    });
  };

  const updateHeroField = (field, value) => {
    onChange({
      ...formData,
      title: field === 'title' ? value : (formData.title || heroHeading),
      subtitle: field === 'subtitle' ? value : (formData.subtitle || heroSubtitle),
      ctaText: field === 'ctaText' ? value : (formData.ctaText || heroButtonText),
      ctaLink: field === 'ctaLink' ? value : (formData.ctaLink || heroButtonLink),
      heroImage: field === 'heroImage' ? value : (formData.heroImage || ceoImage),
      hero: {
        ...hero,
        [field]: value
      },
      content: {
        ...content,
        heroHeading: field === 'title' ? value : (content.heroHeading || heroHeading),
        heroSubtitle: field === 'subtitle' ? value : (content.heroSubtitle || heroSubtitle),
        heroButtonText: field === 'ctaText' ? value : (content.heroButtonText || heroButtonText),
        heroButtonLink: field === 'ctaLink' ? value : (content.heroButtonLink || heroButtonLink),
        ceoImage: field === 'heroImage' ? value : (content.ceoImage || ceoImage)
      }
    });
  };

  const updateCtaField = (field, value) => {
    const updatedCta = {
      ...cta,
      [field]: value
    };
    onChange({
      ...formData,
      cta: updatedCta,
      content: {
        ...content,
        cta: updatedCta
      }
    });
  };

  const handleUpdateTenet = (idx, value) => {
    const updated = [...tenets];
    updated[idx] = value;
    updateContentField('tenets', updated);
  };

  const handleUpdateParagraph = (idx, value) => {
    const updated = [...paragraphs];
    updated[idx] = value;
    updateContentField('messageParagraphs', updated);
  };

  const handleAddParagraph = () => {
    const updated = [...paragraphs, ''];
    updateContentField('messageParagraphs', updated);
  };

  const handleDeleteParagraph = (idx) => {
    const updated = paragraphs.filter((_, i) => i !== idx);
    updateContentField('messageParagraphs', updated);
  };

  const handleUploadCeoImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const res = await adminService.uploadMedia(file, 'image');
      const url = res?.data?.url || res?.data?.fileUrl || res?.url;
      if (url) {
        updateHeroField('heroImage', url);
      }
    } catch (err) {
      console.error('Failed to upload CEO image:', err);
    } finally {
      e.target.value = '';
    }
  };

  return (
    <div className="cms-form-stack" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      {/* TOP BAR (PAGE TITLE / STATUS) */}
      <AdminPageInfoSection
        title={subPageMeta?.title || 'CEO Message & Vision'}
        slug={subPageMeta?.slug || 'ceo-message'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => onChange({ ...formData, status: st })}
        publicRoute={subPageMeta?.publicRoute || '/company/ceo-message'}
        number={pageNumber}
        hideFields={true}
      />

      {/* 1. HERO SECTION & CEO PROFILE */}
      <AdminFormSection
        title="1. Hero Section & CEO Profile Card"
        subtitle="Configure the top introduction banner, button, and the official CEO portrait card with name badge."
        badge="Hero & Portrait"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Hero Main Heading *" required fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Message From CEO"
              value={heroHeading}
              onChange={(e) => updateHeroField('title', e.target.value)}
              style={{ fontWeight: 700, fontSize: '15px' }}
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle / Introductory Paragraph *" required fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter hero introduction copy..."
              value={heroSubtitle}
              onChange={(e) => updateHeroField('subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Primary Button Text">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Work With Us"
              value={heroButtonText}
              onChange={(e) => updateHeroField('ctaText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Primary Button Link">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={heroButtonLink}
              onChange={(e) => updateHeroField('ctaLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* CEO Portrait & Name Plate Card Settings */}
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            CEO Portrait Visual & Name Plate
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Live Image Preview Thumbnail with Upload Overlay */}
            <div
              style={{
                position: 'relative',
                width: '100px',
                height: '120px',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#96D6F5',
                border: '2px solid #CBD5E1',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              onClick={() => {
                const el = document.getElementById('ceo-portrait-file-input');
                if (el) el.click();
              }}
              title="Click to upload or replace CEO photo"
            >
              {ceoImage ? (
                <img
                  src={getMediaUrl(ceoImage)}
                  alt="CEO Portrait"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80';
                  }}
                />
              ) : (
                <div style={{ textAlign: 'center', color: '#64748B' }}>
                  <ImageIcon size={24} />
                  <div style={{ fontSize: '11px' }}>No Image</div>
                </div>
              )}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  opacity: 0,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <Upload size={20} />
              </div>
            </div>

            <input
              id="ceo-portrait-file-input"
              type="file"
              accept="image/*,.png,.jpg,.jpeg,.webp"
              style={{ display: 'none' }}
              onChange={handleUploadCeoImage}
            />

            {/* CEO Details Fields */}
            <div style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  CEO Portrait Image URL / Path
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="https://... or /images/..."
                    value={ceoImage}
                    onChange={(e) => updateHeroField('heroImage', e.target.value)}
                    style={{ fontSize: '12.5px' }}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => {
                      const el = document.getElementById('ceo-portrait-file-input');
                      if (el) el.click();
                    }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}
                  >
                    <Upload size={14} />
                    <span>Upload</span>
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                    CEO Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Kumaril Patel"
                    value={ceoName}
                    onChange={(e) => {
                      updateContentField('ceoName', e.target.value);
                    }}
                    style={{ fontWeight: 700 }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                    CEO Role / Designation Badge
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. - CEO"
                    value={ceoDesignation}
                    onChange={(e) => {
                      updateContentField('ceoDesignation', e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* 2. CORE TENETS & LEADERSHIP QUOTE BOX */}
      <AdminFormSection
        title="2. Core Tenets & Leadership Keynote Quote"
        subtitle="Manage the 4 bold typographic pillars on the left and the featured blue keynote quote card on the right."
        badge="Tenets & Quote"
      >
        <AdminFormGrid columns={2}>
          {/* Left Core Tenets */}
          <div style={{ padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#006B8F', marginBottom: '12px', textTransform: 'uppercase' }}>
              Left Core Tenets (4 Typography Pillars)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {tenets.map((tenet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '20px', fontSize: '12px', fontWeight: 700, color: '#64748B' }}>#{idx + 1}</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Tenet ${idx + 1} (e.g. Integrity)`}
                    value={tenet}
                    onChange={(e) => handleUpdateTenet(idx, e.target.value)}
                    style={{ fontWeight: 700, fontStyle: 'italic' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Quote Box */}
          <div style={{ padding: '16px', backgroundColor: '#F0F7FA', borderRadius: '8px', border: '1px solid #BAE6FD' }}>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0369A1', marginBottom: '12px', textTransform: 'uppercase' }}>
              Featured Keynote Quote Card
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#0369A1', display: 'block', marginBottom: '4px' }}>
                  Quote Statement *
                </label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Enter leadership quote..."
                  value={quoteText}
                  onChange={(e) => updateContentField('quote', e.target.value)}
                  style={{ color: '#0B3B60', fontWeight: 600, fontSize: '13.5px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '3px' }}>
                    Author Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Kumaril Patel"
                    value={quoteAuthor}
                    onChange={(e) => updateContentField('quoteAuthor', e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '3px' }}>
                    Author Title / Role
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. CEO"
                    value={quoteAuthorRole}
                    onChange={(e) => updateContentField('quoteAuthorRole', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '3px' }}>
                  LinkedIn Profile URL
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="https://linkedin.com/..."
                    value={quoteAuthorLinkedin}
                    onChange={(e) => updateContentField('quoteAuthorLinkedin', e.target.value)}
                  />
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#0077B5', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Linkedin size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. CEO DETAILED LETTER & SIGN-OFF */}
      <AdminFormSection
        title="3. CEO Detailed Letter & Sign-Off"
        subtitle="Manage the full body narrative paragraphs and the closing sign-off block."
        badge={`${paragraphs.length} Paragraphs`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
          {paragraphs.map((pText, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                padding: '12px 14px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#E0F2FE',
                  color: '#006B8F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 800,
                  flexShrink: 0,
                  marginTop: '6px'
                }}
              >
                {idx + 1}
              </div>
              <textarea
                className="form-control"
                rows={3}
                placeholder={`Paragraph ${idx + 1}...`}
                value={pText}
                onChange={(e) => handleUpdateParagraph(idx, e.target.value)}
                style={{ flex: 1, fontSize: '13.5px', lineHeight: 1.5 }}
              />
              <button
                type="button"
                onClick={() => handleDeleteParagraph(idx)}
                className="btn btn-ghost btn-icon-sm"
                style={{ color: '#EF4444', marginTop: '6px' }}
                title="Remove paragraph"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddParagraph}
            className="btn btn-secondary btn-sm"
            style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Plus size={14} />
            <span>Add Letter Paragraph</span>
          </button>
        </div>

        {/* Closing Sign-off Block */}
        <div style={{ padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', marginBottom: '12px', textTransform: 'uppercase' }}>
            Letter Sign-Off & Closing Block
          </div>
          <AdminFormGrid columns={4}>
            <AdminFormField label="Salutation / Prefix">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Yours Sincerely,"
                value={signoffPrefix}
                onChange={(e) => updateContentField('signoffPrefix', e.target.value)}
              />
            </AdminFormField>
            <AdminFormField label="Sign-off Full Name">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Kumaril Patel"
                value={signoffName}
                onChange={(e) => updateContentField('signoffName', e.target.value)}
                style={{ fontWeight: 700 }}
              />
            </AdminFormField>
            <AdminFormField label="Sign-off Role">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. CEO"
                value={signoffRole}
                onChange={(e) => updateContentField('signoffRole', e.target.value)}
              />
            </AdminFormField>
            <AdminFormField label="Sign-off Company Name">
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

      {/* 4. WORK TOGETHER CTA BANNER */}
      <AdminFormSection
        title="4. Work Together Call-To-Action Banner"
        subtitle="Manage the bottom blue callout banner that appears above the newsletter section."
        badge="Bottom CTA"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" required fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Let's Work Together On Your Next Digital Project"
              value={ctaTitle}
              onChange={(e) => updateCtaField('title', e.target.value)}
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle / Description" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              placeholder="Enter CTA description..."
              value={ctaSubtitle}
              onChange={(e) => updateCtaField('subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Request A Free Quote"
              value={ctaButtonText}
              onChange={(e) => updateCtaField('buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={ctaButtonLink}
              onChange={(e) => updateCtaField('buttonLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 5. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => onChange({ ...formData, seo: updated })} />
    </div>
  );
};

export default CeoMessageForm;
