import React, { useState, useRef } from 'react';
import { Plus, Trash2, Upload, Linkedin, Users, Image as ImageIcon, Loader2, RotateCcw } from 'lucide-react';
import { adminService } from '../../../services/adminService';
import { getMediaUrl } from '../../../../utils/mediaUrl';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * Reusable Image Upload & Preview Component
 */
const ImageThumbnailPicker = ({
  label,
  value,
  onChange,
  id,
  width = '70px',
  height = '76px',
  shape = 'rounded',
  helperText
}) => {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await adminService.uploadMedia(file, 'image');
      const url = res?.data?.url || res?.data?.fileUrl || res?.url;
      if (url) onChange(url);
    } catch (err) {
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
          {label}
        </label>
      )}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {/* Preview Thumbnail */}
        <div
          style={{
            position: 'relative',
            width,
            height,
            borderRadius: shape === 'circle' ? '50%' : '10px',
            overflow: 'hidden',
            background: '#F1F5F9',
            border: '1px solid #CBD5E1',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={() => fileInputRef.current?.click()}
          title="Click to change or upload photo"
        >
          {value ? (
            <img
              src={getMediaUrl(value)}
              alt={label || 'Thumbnail'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80';
              }}
            />
          ) : (
            <div style={{ color: '#94A3B8', fontSize: '10px', textAlign: 'center' }}>
              <ImageIcon size={18} />
              <div>No Img</div>
            </div>
          )}

          {/* Hover Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: 'opacity 0.2s ease',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
          >
            {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
          </div>
        </div>

        {/* Input & Button */}
        <div style={{ flex: 1, display: 'flex', gap: '6px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="/images/... or https://..."
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            style={{ fontSize: '12px' }}
          />
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            style={{ padding: '0 10px', display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}
          >
            {uploading ? <Loader2 size={13} className="animate-spin" /> : <Upload size={13} />}
            <span style={{ fontSize: '11px' }}>{uploading ? 'Uploading...' : 'Upload'}</span>
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,.png,.jpg,.jpeg,.webp,.svg"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      {helperText && (
        <span style={{ fontSize: '10.5px', color: '#94A3B8' }}>{helperText}</span>
      )}
    </div>
  );
};

/**
 * OurTeamForm
 * 
 * Complete Page-Specific CMS Form for "Our Team & Leadership"
 * Covers all 8 sections identically matching the live website screenshot.
 */
export const OurTeamForm = ({
  formData,
  onChange,
  subPageMeta,
  pageNumber = 3
}) => {
  // 1. Root & Content update helpers
  const updateContentField = (field, value) => {
    onChange({
      ...formData,
      content: {
        ...(formData.content || {}),
        [field]: value
      }
    });
  };

  const updateNestedContent = (section, field, value) => {
    onChange({
      ...formData,
      content: {
        ...(formData.content || {}),
        [section]: {
          ...((formData.content || {})[section] || {}),
          [field]: value
        }
      }
    });
  };

  const updateRootField = (field, value) => {
    onChange({
      ...formData,
      [field]: value
    });
  };

  const updateRootSection = (section, field, value) => {
    onChange({
      ...formData,
      [section]: {
        ...(formData[section] || {}),
        [field]: value
      }
    });
  };

  const rawContent = formData.content || {};

  // 1. Hero State
  const hero = {
    title: formData.hero?.title || rawContent.heroHeading || 'Our Team',
    subtitle: formData.hero?.subtitle || rawContent.heroSubtitle || 'Behind every success of Firevy is our team of 100+ passionate engineers, designers, and innovators building future-ready enterprise solutions across the globe.',
    ctaText: formData.hero?.ctaText || rawContent.heroButtonText || 'Connect Now',
    ctaLink: formData.hero?.ctaLink || rawContent.heroButtonLink || '/contact',
    image: formData.hero?.image ?? rawContent.heroImage ?? '/images/our-team-hero.svg'
  };

  // 2. Management Team State
  const managementHeading = rawContent.managementHeading || 'Management Team';

  const defaultCeo = {
    name: 'Kumaril Patel',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    messageHeading: 'CEO Message',
    paragraph1: "Welcome to firevy.co— a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership is not just about steering the ship but about inspiring every hand on deck to innovate, dream, and achieve. Our success stems from a shared commitment to excellence, where each solution is crafted with purpose and passion. At firevy.co, we don't merely adapt to change; we define it. By blending cutting-edge technology with human ingenuity, we create software solutions that empower businesses and individuals alike. This is not just a company; it's a vision brought to life by a team that dares to dream bigger every day.",
    paragraph2: "Never stop believing in the power of technology that can change the world. One Revolutionary idea... One brilliant Invention can enlighten billions of the Human lives. Nothing is Impossible when you Dream it & believe it you can Do it. Together, let us embrace the challenges and opportunities. Thank you for trusting us to be your partner in progress. Together, we are not just building software —we are creating a legacy of innovation and impact."
  };
  const ceo = { ...defaultCeo, ...(rawContent.ceo || {}) };

  const defaultCto = {
    name: 'Mr. Rajendra Patel',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    messageHeading: 'CTO Message',
    paragraph1: "At firevy.co, technology is not just a means to an end—it's the essence of our identity and the foundation of our future. As the CTO, my mission is to push the boundaries of innovation, ensuring that every line of code we write and every solution we deliver drives meaningful impact. Our approach is simple yet profound: embrace challenges as opportunities and ideas as catalysts for change. By staying at the forefront of technological advancements and fostering a culture of continuous learning, we empower businesses to thrive in a dynamic digital landscape. Crafting success stories from startups to Fortune 500 stalwarts.",
    paragraph2: "Our dedication to user-centric design and cutting-edge solutions has garnered prestigious accolades. Innovation is a journey, and at firevy.co, we walk that path with purpose and passion, transforming visions into reality and possibilities into achievements. Thank you for trusting us as your technology partner. Together, we are building a smarter, more connected happy world."
  };
  const cto = { ...defaultCto, ...(rawContent.cto || {}) };

  const defaultBusinessHeads = [
    {
      name: 'Nirav Patel',
      role: 'Business Head - Product',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Parth Patel',
      role: 'Business Head - Service',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    }
  ];
  const businessHeads = Array.isArray(rawContent.businessHeads) && rawContent.businessHeads.length > 0
    ? rawContent.businessHeads
    : defaultBusinessHeads;

  // 3. Leadership Team (15 Team Leads)
  const leadershipHeading = rawContent.leadershipHeading || 'Leadership Team';

  const defaultLeadershipTeam = [
    { name: 'Ankit Gokani', role: 'HR Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Ankit Morasiya', role: 'QA Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Ashish Dubey', role: 'MERN Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80' },
    { name: 'Galav Shukla', role: 'Sr. BDR - Service', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
    { name: 'Hitarth Joshi', role: 'Module Lead - Mobile', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80' },
    { name: 'Jaymin Prajapati', role: 'SEO Lead', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80' },
    { name: 'Mayur Trivedi', role: 'PHP Lead', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80' },
    { name: 'Mehul Gajjar', role: '.NET Lead', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
    { name: 'Mitesh Aroda', role: 'Vidyalaya Tech Support Lead', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80' },
    { name: 'Prashant Patel', role: 'UI/UX Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
    { name: 'Sahil Detroja', role: 'Web Development Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Satish Prajapati', role: '.NET Lead', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80' },
    { name: 'Shrenik Shah', role: 'Mobile Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
    { name: 'Umang Barot', role: 'Project Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80' },
    { name: 'Vipul Patel', role: '.NET Lead', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80' }
  ];
  const leadershipTeam = Array.isArray(rawContent.leadershipTeam) && rawContent.leadershipTeam.length > 0
    ? rawContent.leadershipTeam
    : defaultLeadershipTeam;

  const handleUpdateLeader = (idx, field, val) => {
    const updated = [...leadershipTeam];
    updated[idx] = { ...updated[idx], [field]: val };
    updateContentField('leadershipTeam', updated);
  };

  const handleAddLeader = () => {
    const updated = [
      ...leadershipTeam,
      {
        name: 'New Leader',
        role: 'Team Lead',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80'
      }
    ];
    updateContentField('leadershipTeam', updated);
  };

  const handleDeleteLeader = (idx) => {
    const updated = leadershipTeam.filter((_, i) => i !== idx);
    updateContentField('leadershipTeam', updated);
  };

  // 4. Teamwork Mosaic Banner
  const teamworkHeading = rawContent.teamworkHeading || 'Teamwork Is The Only Way We Work';
  const teamworkButtonText = rawContent.teamworkButtonText || 'Join Our Team';
  const teamworkButtonLink = rawContent.teamworkButtonLink || '/careers';
  const teamworkBannerImage = rawContent.teamworkBannerImage || '';

  // 5. Testimonial State
  const defaultFirevianSay = {
    name: 'Vipul Patel',
    role: 'Team Lead',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    quote: "I am proud to be working for a company like firevy.co that values honesty and a fair attitude to all which has also contributed to a very valuable and delightful experience. The work culture and the integrity of the company's management are remarkable. In firevy.co, we get all the freedom to think out-of-the-box and take complete ownership of the work we do. Being a client-focused company, firevy.co makes us understand the clients' requirements easily so that the work can be coordinated effectively. There are always opportunities to learn and no limitations to scale new heights in this organization."
  };
  const firevianSay = { ...defaultFirevianSay, ...(rawContent.firevianSay || {}) };
  const firevianSayHeading = rawContent.firevianSayHeading || 'What Our Firevian Says';

  // 6. Learning & Growth State
  const defaultLearningGrowth = {
    heading: 'Learning & Growth',
    p1: 'Learning and growth go hand-in-hand fundamentally, and so is the story at firevy.co. We offer ample amounts of training to each individual and help them to improve their skills with subject matter specialists from the industry and within the company. We always believe in continuous learning culture so it gives opportunity to achieve better be it, Business interactions, Design Thinking or Technology.',
    p2: 'We want our team to grow and develop at firevy.co, meet your career goals and make the most of your potential, all while embracing your own exceptional talents.',
    p3: "That's why we are committed to helping you drive your career in a dynamic environment. Across all levels of our organization, we are nurturing a culture of trust and dialogue. We offer tools to support this culture such as 360 feedback, online coaching and a mutual mentoring program.",
    buttonText: 'Join Our Team',
    buttonLink: '/careers',
    photo1: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
    photo2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
    photo3: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80'
  };
  const learningGrowth = { ...defaultLearningGrowth, ...(rawContent.learningGrowth || {}) };

  // 7. Team @ firevy.co (Culture Gallery)
  const defaultLifeAtFirevy = {
    heading: 'Team @ firevy.co',
    description: 'At firevy.co, we have a friendly, inspiring and fun loving yet professional environment. We celebrate all the good moments in terms of our growth and accomplishments. Our closeness always makes us feel strengthened and energetic to improve our actions, to go stress-free, and to work untiringly as a team.',
    photo1: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    photo2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    photo3: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    photo4: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  };
  const lifeAtFirevy = { ...defaultLifeAtFirevy, ...(rawContent.lifeAtFirevy || {}) };

  // 8. Ready To Take The Challenge CTA
  const defaultCta = {
    title: 'Ready To Take The Challenge?',
    subtitle: 'Join our team of passionate and bright technologists. Work in a collaborative environment which will provide you ample growth opportunities and shape the leader in you.',
    buttonText: 'Join Our Team',
    buttonLink: '/careers'
  };
  const cta = { ...defaultCta, ...(formData.cta || rawContent.cta || {}) };

  // 9. SEO State
  const seo = formData.seo || {};

  return (
    <div className="cms-form-stack" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      {/* PAGE INFORMATION (Header Bar only) */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Our Team & Leadership'}
        slug={subPageMeta?.slug || 'our-team'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/our-team'}
        hideFields={true}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION & INTRODUCTION                                            */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Team directory headline, subheading, action button, and hero meeting graphic."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              value={hero.title}
              onChange={(e) => {
                updateRootSection('hero', 'title', e.target.value);
                updateContentField('heroHeading', e.target.value);
              }}
              placeholder="e.g. Our Team"
            />
          </AdminFormField>

          <AdminFormField label="Button Text">
            <input
              type="text"
              className="form-control"
              value={hero.ctaText}
              onChange={(e) => {
                updateRootSection('hero', 'ctaText', e.target.value);
                updateContentField('heroButtonText', e.target.value);
              }}
              placeholder="e.g. Connect Now"
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={hero.subtitle}
              onChange={(e) => {
                updateRootSection('hero', 'subtitle', e.target.value);
                updateContentField('heroSubtitle', e.target.value);
              }}
              placeholder="Behind every success of Firevy is our team of 100+ passionate engineers..."
            />
          </AdminFormField>

          <AdminFormField label="Button Link Target">
            <input
              type="text"
              className="form-control"
              value={hero.ctaLink}
              onChange={(e) => {
                updateRootSection('hero', 'ctaLink', e.target.value);
                updateContentField('heroButtonLink', e.target.value);
              }}
              placeholder="e.g. /contact or /careers"
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* Hero Side Image / Meeting Illustration Card */}
        <div
          style={{
            marginTop: '18px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284C7' }}>
                <ImageIcon size={18} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                  ★ Hero Side Visual / Graphic (Team Meeting Illustration)
                </h4>
                <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#64748B' }}>
                  Right-side hero illustration next to the text. You can upload a new image, enter a custom URL, or restore the default illustration.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  updateRootSection('hero', 'image', '/images/our-team-hero.svg');
                  updateContentField('heroImage', '/images/our-team-hero.svg');
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, padding: '4px 10px' }}
                title="Reset to default team meeting illustration"
              >
                <RotateCcw size={13} />
                Default Illustration
              </button>
              {hero.image && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {
                    updateRootSection('hero', 'image', '');
                    updateContentField('heroImage', '');
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, padding: '4px 10px' }}
                  title="Remove image"
                >
                  <Trash2 size={13} />
                  Remove
                </button>
              )}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', alignItems: 'center' }}>
            <ImageThumbnailPicker
              label="Upload / Replace Hero Graphic"
              value={hero.image}
              onChange={(url) => {
                updateRootSection('hero', 'image', url);
                updateContentField('heroImage', url);
              }}
              width="140px"
              height="100px"
              shape="rect"
              helperText="Upload any PNG, JPG, SVG or WebP from your device, or paste a link."
            />

            {hero.image && (
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '100px', height: '70px', background: '#F0F9FF', borderRadius: '6px', border: '1px solid #BAE6FD', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px' }}>
                  <img
                    src={getMediaUrl(hero.image)}
                    alt="Active Hero Preview"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/our-team-hero.svg';
                    }}
                  />
                </div>
                <div>
                  <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '12px', background: '#E0F2FE', color: '#0369A1', fontSize: '11px', fontWeight: 700, marginBottom: '2px' }}>
                    Active Preview
                  </span>
                  <div style={{ fontSize: '11.5px', color: '#64748B', wordBreak: 'break-all' }}>
                    {hero.image}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 2. MANAGEMENT TEAM (CEO, CTO, & 2 BUSINESS HEADS)                         */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="2. Management Team (Executive Leaders)"
        subtitle="CEO Message Card, CTO Message Card, and Business Heads."
        badge="Executive Leadership"
      >
        {/* Section Heading */}
        <div style={{ marginBottom: '18px' }}>
          <AdminFormField label="Section Title">
            <input
              type="text"
              className="form-control"
              value={managementHeading}
              onChange={(e) => updateContentField('managementHeading', e.target.value)}
              placeholder="e.g. Management Team"
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>
        </div>

        {/* 2.1 CEO Message Card */}
        <div
          style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#006B8F', marginBottom: '12px', textTransform: 'uppercase' }}>
            ★ CEO Message Card (Kumaril Patel)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '14px' }}>
            <ImageThumbnailPicker
              label="CEO Portrait Photo"
              value={ceo.image}
              onChange={(url) => updateNestedContent('ceo', 'image', url)}
              width="80px"
              height="90px"
            />

            <div>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                CEO Full Name
              </label>
              <input
                type="text"
                className="form-control"
                value={ceo.name}
                onChange={(e) => updateNestedContent('ceo', 'name', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                Designation / Title
              </label>
              <input
                type="text"
                className="form-control"
                value={ceo.role}
                onChange={(e) => updateNestedContent('ceo', 'role', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                LinkedIn URL
              </label>
              <input
                type="text"
                className="form-control"
                value={ceo.linkedin}
                onChange={(e) => updateNestedContent('ceo', 'linkedin', e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <AdminFormField label="Quote / Message Heading">
              <input
                type="text"
                className="form-control"
                value={ceo.messageHeading}
                onChange={(e) => updateNestedContent('ceo', 'messageHeading', e.target.value)}
              />
            </AdminFormField>

            <AdminFormField label="CEO Message Paragraph 1">
              <textarea
                className="form-control"
                rows={3}
                value={ceo.paragraph1}
                onChange={(e) => updateNestedContent('ceo', 'paragraph1', e.target.value)}
              />
            </AdminFormField>

            <AdminFormField label="CEO Message Paragraph 2">
              <textarea
                className="form-control"
                rows={3}
                value={ceo.paragraph2}
                onChange={(e) => updateNestedContent('ceo', 'paragraph2', e.target.value)}
              />
            </AdminFormField>
          </div>
        </div>

        {/* 2.2 CTO Message Card */}
        <div
          style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#006B8F', marginBottom: '12px', textTransform: 'uppercase' }}>
            ★ CTO Message Card (Mr. Rajendra Patel)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '14px' }}>
            <ImageThumbnailPicker
              label="CTO Portrait Photo"
              value={cto.image}
              onChange={(url) => updateNestedContent('cto', 'image', url)}
              width="80px"
              height="90px"
            />

            <div>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                CTO Full Name
              </label>
              <input
                type="text"
                className="form-control"
                value={cto.name}
                onChange={(e) => updateNestedContent('cto', 'name', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                Designation / Title
              </label>
              <input
                type="text"
                className="form-control"
                value={cto.role}
                onChange={(e) => updateNestedContent('cto', 'role', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                LinkedIn URL
              </label>
              <input
                type="text"
                className="form-control"
                value={cto.linkedin}
                onChange={(e) => updateNestedContent('cto', 'linkedin', e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <AdminFormField label="Quote / Message Heading">
              <input
                type="text"
                className="form-control"
                value={cto.messageHeading}
                onChange={(e) => updateNestedContent('cto', 'messageHeading', e.target.value)}
              />
            </AdminFormField>

            <AdminFormField label="CTO Message Paragraph 1">
              <textarea
                className="form-control"
                rows={3}
                value={cto.paragraph1}
                onChange={(e) => updateNestedContent('cto', 'paragraph1', e.target.value)}
              />
            </AdminFormField>

            <AdminFormField label="CTO Message Paragraph 2">
              <textarea
                className="form-control"
                rows={3}
                value={cto.paragraph2}
                onChange={(e) => updateNestedContent('cto', 'paragraph2', e.target.value)}
              />
            </AdminFormField>
          </div>
        </div>

        {/* 2.3 2 Business Heads */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', marginBottom: '14px', textTransform: 'uppercase' }}>
            ★ 2 Business Heads Cards
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '18px' }}>
            {businessHeads.map((head, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: '10px',
                  padding: '14px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '12px', color: '#006B8F', marginBottom: '8px' }}>
                  Business Head #{idx + 1}
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <ImageThumbnailPicker
                    label="Portrait Photo"
                    value={head.image}
                    onChange={(url) => {
                      const updated = [...businessHeads];
                      updated[idx] = { ...updated[idx], image: url };
                      updateContentField('businessHeads', updated);
                    }}
                    width="70px"
                    height="76px"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '3px' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={head.name}
                      onChange={(e) => {
                        const updated = [...businessHeads];
                        updated[idx] = { ...updated[idx], name: e.target.value };
                        updateContentField('businessHeads', updated);
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '3px' }}>
                      Role / Designation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={head.role}
                      onChange={(e) => {
                        const updated = [...businessHeads];
                        updated[idx] = { ...updated[idx], role: e.target.value };
                        updateContentField('businessHeads', updated);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 3. LEADERSHIP TEAM (15 LEADS GRID)                                        */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="3. Leadership Team (15 Team Leads)"
        subtitle="Manage photo, full name, and lead title for all department leaders."
        badge={`${leadershipTeam.length} Leads`}
        actions={
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={handleAddLeader}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
          >
            <Plus size={14} />
            <span>Add Leadership Member</span>
          </button>
        }
      >
        <div style={{ marginBottom: '14px' }}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              value={leadershipHeading}
              onChange={(e) => updateContentField('leadershipHeading', e.target.value)}
              placeholder="e.g. Leadership Team"
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                padding: '12px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
              }}
            >
              {/* Photo preview with 1-click upload */}
              <div style={{ flexShrink: 0 }}>
                <ImageThumbnailPicker
                  value={member.image}
                  onChange={(url) => handleUpdateLeader(idx, 'image', url)}
                  width="60px"
                  height="66px"
                />
              </div>

              {/* Name & Role Inputs */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <input
                  type="text"
                  className="form-control"
                  value={member.name}
                  onChange={(e) => handleUpdateLeader(idx, 'name', e.target.value)}
                  placeholder="Leader Name"
                  style={{ fontWeight: 700, fontSize: '13px' }}
                />
                <input
                  type="text"
                  className="form-control"
                  value={member.role}
                  onChange={(e) => handleUpdateLeader(idx, 'role', e.target.value)}
                  placeholder="Role (e.g. QA Lead)"
                  style={{ fontSize: '12px', color: '#64748B' }}
                />
              </div>

              {/* Delete Button */}
              <button
                type="button"
                className="btn btn-ghost btn-icon-sm"
                onClick={() => handleDeleteLeader(idx)}
                style={{ color: '#EF4444', alignSelf: 'flex-start' }}
                title="Remove Leader"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 4. TEAMWORK MOSAIC BANNER                                                 */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="4. Teamwork Mosaic Banner"
        subtitle="Edge-to-edge duotone team composite photo banner (Full 24-column x 6-row wall)."
        badge="Teamwork Mosaic Wall"
      >
        <AdminFormGrid columns={3}>
          <AdminFormField label="Banner Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={teamworkHeading}
              onChange={(e) => updateContentField('teamworkHeading', e.target.value)}
              placeholder="e.g. Teamwork Is The Only Way We Work"
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={teamworkButtonText}
              onChange={(e) => updateContentField('teamworkButtonText', e.target.value)}
              placeholder="e.g. Join Our Team"
            />
          </AdminFormField>

          <AdminFormField label="Button Link Target">
            <input
              type="text"
              className="form-control"
              value={teamworkButtonLink}
              onChange={(e) => updateContentField('teamworkButtonLink', e.target.value)}
              placeholder="e.g. /careers"
            />
          </AdminFormField>

          <AdminFormField label="Custom Composite Banner Image (Optional)" fullWidth>
            <ImageThumbnailPicker
              label="Custom Composite Banner Graphic"
              value={teamworkBannerImage}
              onChange={(url) => updateContentField('teamworkBannerImage', url)}
              width="100px"
              height="60px"
              helperText="Leave empty to display the full 144-portrait interactive duotone wall grid automatically."
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* Live 144-Photo Mosaic Wall Preview (Exact Frontend Replica) */}
        <div style={{ marginTop: '20px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #CBD5E1' }}>
          <div style={{ padding: '10px 14px', backgroundColor: '#F1F5F9', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              ● Live Wall Preview (Exact Frontend Replica)
            </span>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>
              Full 24 Columns × 6 Rows (144 faces edge-to-edge)
            </span>
          </div>

          <div style={{ padding: '24px 16px', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              {teamworkHeading}
            </h3>

            {/* Edge-to-edge duotone grid */}
            <div style={{ width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#388BA8', borderRadius: '8px' }}>
              {teamworkBannerImage ? (
                <div style={{ position: 'relative', width: '100%', maxHeight: '280px', overflow: 'hidden' }}>
                  <img
                    src={getMediaUrl(teamworkBannerImage)}
                    alt={teamworkHeading}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(125%) brightness(95%)', opacity: 0.85, mixBlendMode: 'multiply' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(53, 130, 157, 0.2)', pointerEvents: 'none' }} />
                </div>
              ) : (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(24, minmax(0, 1fr))',
                    gap: '2px',
                    opacity: 0.95
                  }}
                >
                  {Array.from({ length: 144 }, (_, i) => [
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
                  ][i % 24]).map((src, i) => (
                    <div key={i} style={{ aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#2D7392' }}>
                      <img
                        src={src}
                        alt=""
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'grayscale(100%) contrast(125%) brightness(95%)',
                          opacity: 0.8,
                          mixBlendMode: 'multiply'
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(53, 130, 157, 0.2)', pointerEvents: 'none' }} />
            </div>

            <div style={{ marginTop: '16px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px 20px',
                  borderRadius: '4px',
                  backgroundColor: '#006085',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '13px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {teamworkButtonText || 'Join Our Team'}
              </span>
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 5. WHAT OUR FIREVIANS SAY (TESTIMONIAL)                                   */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="5. What Our Firevyians Say (Employee Testimonial)"
        subtitle="Spotlight team member quote, role, and avatar photo."
        badge="Employee Spotlight"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Title" fullWidth>
            <input
              type="text"
              className="form-control"
              value={firevianSayHeading}
              onChange={(e) => updateContentField('firevianSayHeading', e.target.value)}
              placeholder="e.g. What Our Firevian Says"
            />
          </AdminFormField>

          <ImageThumbnailPicker
            label="Member Avatar Photo"
            value={firevianSay.avatar}
            onChange={(url) => updateNestedContent('firevianSay', 'avatar', url)}
            shape="circle"
            width="70px"
            height="70px"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <AdminFormField label="Member Name">
              <input
                type="text"
                className="form-control"
                value={firevianSay.name}
                onChange={(e) => updateNestedContent('firevianSay', 'name', e.target.value)}
              />
            </AdminFormField>

            <AdminFormField label="Member Role / Title">
              <input
                type="text"
                className="form-control"
                value={firevianSay.role}
                onChange={(e) => updateNestedContent('firevianSay', 'role', e.target.value)}
              />
            </AdminFormField>
          </div>

          <AdminFormField label="Testimonial Quote Text" fullWidth>
            <textarea
              className="form-control"
              rows={4}
              value={firevianSay.quote}
              onChange={(e) => updateNestedContent('firevianSay', 'quote', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 6. LEARNING & GROWTH                                                      */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="6. Learning & Growth Section"
        subtitle="Training philosophy, 3 description paragraphs, and 3 office photos."
        badge="Culture & Learning"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              value={learningGrowth.heading}
              onChange={(e) => updateNestedContent('learningGrowth', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={learningGrowth.buttonText}
              onChange={(e) => updateNestedContent('learningGrowth', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Paragraph 1" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={learningGrowth.p1}
              onChange={(e) => updateNestedContent('learningGrowth', 'p1', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Paragraph 2" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={learningGrowth.p2}
              onChange={(e) => updateNestedContent('learningGrowth', 'p2', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Paragraph 3" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={learningGrowth.p3}
              onChange={(e) => updateNestedContent('learningGrowth', 'p3', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* 3 Photos Grid */}
        <div style={{ marginTop: '16px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '10px', textTransform: 'uppercase' }}>
            3 Mosaic Photos
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            <ImageThumbnailPicker
              label="Photo 1 (Main / Tall Left Photo)"
              value={learningGrowth.photo1}
              onChange={(url) => updateNestedContent('learningGrowth', 'photo1', url)}
              width="80px"
              height="85px"
            />
            <ImageThumbnailPicker
              label="Photo 2 (Top Right Photo)"
              value={learningGrowth.photo2}
              onChange={(url) => updateNestedContent('learningGrowth', 'photo2', url)}
              width="80px"
              height="85px"
            />
            <ImageThumbnailPicker
              label="Photo 3 (Bottom Right Photo)"
              value={learningGrowth.photo3}
              onChange={(url) => updateNestedContent('learningGrowth', 'photo3', url)}
              width="80px"
              height="85px"
            />
          </div>
        </div>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 7. TEAM @ FIREVY.CO (CULTURE GALLERY)                                     */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="7. Team @ firevy.co (Culture Gallery)"
        subtitle="Company culture narrative and 4 celebration / event photos."
        badge="Culture 2x2 Gallery"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Gallery Heading">
            <input
              type="text"
              className="form-control"
              value={lifeAtFirevy.heading}
              onChange={(e) => updateNestedContent('lifeAtFirevy', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Gallery Description / Culture Narrative" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={lifeAtFirevy.description}
              onChange={(e) => updateNestedContent('lifeAtFirevy', 'description', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* 4 Gallery Photos Grid */}
        <div style={{ marginTop: '16px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '10px', textTransform: 'uppercase' }}>
            4 Gallery Photos
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            <ImageThumbnailPicker
              label="Gallery Photo 1"
              value={lifeAtFirevy.photo1}
              onChange={(url) => updateNestedContent('lifeAtFirevy', 'photo1', url)}
              width="80px"
              height="80px"
            />
            <ImageThumbnailPicker
              label="Gallery Photo 2"
              value={lifeAtFirevy.photo2}
              onChange={(url) => updateNestedContent('lifeAtFirevy', 'photo2', url)}
              width="80px"
              height="80px"
            />
            <ImageThumbnailPicker
              label="Gallery Photo 3"
              value={lifeAtFirevy.photo3}
              onChange={(url) => updateNestedContent('lifeAtFirevy', 'photo3', url)}
              width="80px"
              height="80px"
            />
            <ImageThumbnailPicker
              label="Gallery Photo 4"
              value={lifeAtFirevy.photo4}
              onChange={(url) => updateNestedContent('lifeAtFirevy', 'photo4', url)}
              width="80px"
              height="80px"
            />
          </div>
        </div>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 8. READY TO TAKE THE CHALLENGE? CTA BANNER                                */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="8. Ready To Take The Challenge? CTA Banner"
        subtitle="Bottom recruitment callout banner."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title}
              onChange={(e) => {
                updateRootSection('cta', 'title', e.target.value);
                updateNestedContent('cta', 'title', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle}
              onChange={(e) => {
                updateRootSection('cta', 'subtitle', e.target.value);
                updateNestedContent('cta', 'subtitle', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText}
              onChange={(e) => {
                updateRootSection('cta', 'buttonText', e.target.value);
                updateNestedContent('cta', 'buttonText', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="Button Link Target">
            <input
              type="text"
              className="form-control"
              value={cta.buttonLink}
              onChange={(e) => {
                updateRootSection('cta', 'buttonLink', e.target.value);
                updateNestedContent('cta', 'buttonLink', e.target.value);
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 9. SEO & METADATA                                                         */}
      {/* ========================================================================= */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default OurTeamForm;
