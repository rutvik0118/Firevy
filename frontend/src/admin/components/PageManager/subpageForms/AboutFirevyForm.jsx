import React from 'react';
import { Plus, Trash2, Building2, Eye, Shield, Users, Briefcase, Heart, Award, Star, Globe, Sparkles, RotateCcw, Image as ImageIcon } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';
import { getMediaUrl } from '../../../../utils/mediaUrl';

/**
 * AboutFirevyForm
 * 
 * 100% Dynamic Page-Specific CMS Form for "About firevy.co"
 * Matches the complete layout shown in the Sapphire reference design.
 */
export const AboutFirevyForm = ({
  formData,
  onChange,
  subPageMeta,
  pageNumber = 1
}) => {
  // Safe helper to update top-level fields
  const updateRootField = (field, value) => {
    onChange({
      ...formData,
      [field]: value
    });
  };

  // Safe helper to update nested object sections
  const updateSection = (section, field, value) => {
    onChange({
      ...formData,
      [section]: {
        ...(formData[section] || {}),
        [field]: value
      }
    });
  };

  // Safe helper to update nested section inside content
  const updateContentSection = (sectionKey, field, value) => {
    const existingSection = formData[sectionKey] || formData.content?.[sectionKey] || {};
    const updated = {
      ...existingSection,
      [field]: value
    };
    onChange({
      ...formData,
      [sectionKey]: updated,
      content: {
        ...(formData.content || {}),
        [sectionKey]: updated
      }
    });
  };

  // Helper to atomically update both formData.heroImage and formData.hero.heroImage
  const updateHeroImage = (val) => {
    onChange({
      ...formData,
      heroImage: val,
      hero: {
        ...(formData.hero || {}),
        heroImage: val
      }
    });
  };

  // 1. Hero Banner State
  const hero = formData.hero || {};
  const currentHeroImage = formData.heroImage !== undefined 
    ? formData.heroImage 
    : (hero.heroImage !== undefined ? hero.heroImage : '/images/about-hero-laptop.svg');

  // 2. About firevy.co (Building & Narrative) State
  const aboutCompany = formData.aboutCompany || formData.content?.aboutCompany || {
    heading: formData.overview?.title || 'About firevy.co',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    description: formData.overview?.text || '',
    buttonText: 'Get In Touch',
    buttonLink: '/contact'
  };

  // 3. Vision & Mission State
  const missionVision = formData.missionVision || formData.content?.missionVision || {
    heading: 'We Create, We Enhance, We Deliver',
    subheading: "More Than Expected – That's firevy.co",
    visionTitle: 'Our Vision',
    visionText: "It's our goal to empower our customers to achieve more and to be one of the best customer-centric company.",
    missionTitle: 'Our Mission',
    missionText: 'To provide our customers with the precise services and solutions the lowest possible cost.'
  };

  // 4. Metrics Section (8 Cards) State
  const metricsSection = formData.metricsSection || formData.content?.metricsSection || {
    title: 'ABOUT US',
    description: 'Glance through our creations and presence across industries and borders',
    cards: Array.isArray(formData.stats) && formData.stats.length > 0
      ? formData.stats
      : [
          { metric: '23+', label: 'Years of Experience', image: '/images/first.webp' },
          { metric: '1600+', label: 'Schools Digitalized Globally', image: '/images/homeinnovation/second.webp' },
          { metric: '750+', label: 'Software & Mobile Apps Developed', image: '/images/third.webp' },
          { metric: '100+', label: 'Countries Served Worldwide', image: '/images/fourth.webp' },
          { metric: '2800+', label: 'Satisfied Enterprise Clients', image: '/images/fifth.webp' },
          { metric: '95%', label: 'Client Retention Rate', image: '/images/sixth.webp' },
          { metric: '200+', label: 'Skilled IT Professionals', image: '/images/awards/hdimages/client_seven.webp' },
          { metric: '1500+', label: 'Completed Digital Projects', image: '/images/awards/hdimages/clienttestimonial3.webp' }
        ]
  };

  // 5. Core Values State
  const coreValues = formData.coreValues || formData.content?.coreValues || {
    heading: 'Our Core Values',
    subheading: 'Our values are the guiding ethics upon which we have founded and how we strive to conduct our business on a day-to-day basis.',
    values: Array.isArray(formData.items) && formData.items.length > 0
      ? formData.items
      : [
          { id: 1, title: 'Transparency & Integrity', desc: 'To be ethical, sincere and open in all our transactions, Trust is at the core of this responsibility.', icon: 'ShieldCheck' },
          { id: 2, title: 'Professional Excellence', desc: 'We strive to contribute our best to our customers while evoking others to do the same.', icon: 'Star' },
          { id: 3, title: 'Customer Centricity', desc: 'We closely work with our customer to deliver better solutions with added values.', icon: 'Heart' },
          { id: 4, title: 'Quality & Cost Effectiveness', desc: 'We set standards in our business and transactions, and be a model for the industry.', icon: 'Award' },
          { id: 5, title: 'Global Exposure', desc: 'Enabling enterprises worldwide with scalable, compliant digital engineering.', icon: 'Globe' },
          { id: 6, title: 'We Accelerate Hiring', desc: 'Dedicated engineering teams and agile talent to fast-track your roadmap.', icon: 'Users' }
        ]
  };

  // 6. Our Culture State
  const culture = formData.culture || formData.content?.culture || {
    heading: 'Our Culture',
    paragraphs: [
      'At firevy.co, we have nurtured a culture that inspires innovation and creativity. We believe that success of our company is directly relational to the success of each and every employee. We strive to create a young, fun-loving, open yet professional and hardworking environment.',
      'We empower our team members to move forward professionally by taking ownership and learning from every project they work on. Coming to work and building amazing digital solutions should be fun.'
    ],
    buttonText: 'Explore Careers (Jobs)',
    buttonLink: '/careers',
    images: Array.isArray(formData.gallery) && formData.gallery.length >= 4
      ? formData.gallery.slice(0, 4)
      : [
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
        ]
  };

  // 7. Leadership State
  const leadership = formData.leadership || formData.content?.leadership || {
    heading: 'Our Leadership',
    subheading: 'The outlook, passion and experience of our leaders guides firevy.co.',
    leaders: [
      {
        name: 'Mr. Kumaril Patel',
        designation: 'CEO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        linkedin: 'https://linkedin.com'
      },
      {
        name: 'Mr. Rajendra Patel',
        designation: 'CTO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        linkedin: 'https://linkedin.com'
      }
    ]
  };

  // 8. World Class Products State
  const products = formData.products || formData.content?.products || {
    heading: 'Our World Class Products',
    subheading: 'Our proven excellence for product development',
    items: [
      {
        name: 'Vidyalaya',
        tagline: 'Digitizing Schools',
        description: 'Efficient & Innovative School ERP known for its unmatched service since 22+ years. We digitalized 1600+ Schools globally.',
        link: '/products'
      },
      {
        name: 'OccuCare',
        tagline: 'a healthier, more productive workforce',
        description: 'OccuCare empower organizations to protect, maintain and promote the well-being of workers.',
        link: '/products'
      }
    ]
  };

  // 9. Trusted Brands State
  const trustedBrands = formData.trustedBrands || formData.content?.trustedBrands || {
    heading: 'Trusted By The World’s Leading Brands',
    subheading: 'We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.'
  };

  // 10. Reviews State
  const reviewsSection = formData.reviewsSection || formData.content?.reviewsSection || {
    title: 'What Our Clients Say'
  };

  // 11. Insights State
  const insights = formData.insights || formData.content?.insights || {
    heading: 'Insights',
    subheading: 'Based on boundless enthusiasm and challenging spirit, firevy.co is committed to deliver excellence.',
    items: [
      { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', caption: 'Corporate Headquarters' },
      { image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', caption: 'Occucon Event' },
      { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Exhibition Booth' },
      { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', caption: 'Our Team Banquet' },
      { image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', caption: 'Tech Showcase' }
    ]
  };

  // 12. CSR State
  const csr = formData.csr || formData.content?.csr || {
    heading: 'Corporate Social Responsibility',
    subheading: 'Business is an opportunity to help humanity',
    quote: 'Our CSR Programs Accelerate Human Empowerment Among Underserved People And Their Communities Via Three Pillars: Education, Society And Conservation.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80'
  };

  // 13. Panoramic Team Banner State
  const teamBanner = formData.teamBanner || formData.content?.teamBanner || {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80'
  };

  // 14. CTA Banner State
  const cta = formData.cta || {
    title: "Let's Work Together on Your Next Digital Project",
    subtitle: 'We provide custom software development and technology solutions tailored to your brand goals.',
    buttonText: 'Get In Touch',
    buttonLink: '/contact'
  };

  // 15. SEO State
  const seo = formData.seo || {};

  // Handlers for Metrics Cards Repeater
  const handleUpdateMetric = (idx, field, val) => {
    const cards = [...(metricsSection.cards || [])];
    cards[idx] = { ...cards[idx], [field]: val };
    const updated = { ...metricsSection, cards };
    updateContentSection('metricsSection', 'cards', cards);
    updateRootField('stats', cards.map(c => ({ label: c.label, value: c.metric || c.value })));
  };

  const handleAddMetric = () => {
    const cards = [...(metricsSection.cards || []), { metric: '100+', label: 'New Milestone', image: '/images/first.webp' }];
    updateContentSection('metricsSection', 'cards', cards);
    updateRootField('stats', cards.map(c => ({ label: c.label, value: c.metric || c.value })));
  };

  const handleDeleteMetric = (idx) => {
    const cards = metricsSection.cards.filter((_, i) => i !== idx);
    updateContentSection('metricsSection', 'cards', cards);
    updateRootField('stats', cards.map(c => ({ label: c.label, value: c.metric || c.value })));
  };

  // Handlers for Core Values Repeater
  const handleUpdateValue = (idx, field, val) => {
    const values = [...(coreValues.values || [])];
    values[idx] = { ...values[idx], [field]: val };
    updateContentSection('coreValues', 'values', values);
    updateRootField('items', values);
  };

  const handleAddValue = () => {
    const values = [...(coreValues.values || []), { id: Date.now(), title: 'New Core Value', desc: 'Value description narrative...', icon: 'ShieldCheck' }];
    updateContentSection('coreValues', 'values', values);
    updateRootField('items', values);
  };

  const handleDeleteValue = (idx) => {
    const values = coreValues.values.filter((_, i) => i !== idx);
    updateContentSection('coreValues', 'values', values);
    updateRootField('items', values);
  };

  // Handlers for Culture Gallery Images
  const handleUpdateCultureImage = (idx, val) => {
    const images = [...(culture.images || [])];
    images[idx] = val;
    updateContentSection('culture', 'images', images);
    updateRootField('gallery', images);
  };

  // Handlers for Leadership
  const handleUpdateLeader = (idx, field, val) => {
    const leaders = [...(leadership.leaders || [])];
    leaders[idx] = { ...leaders[idx], [field]: val };
    updateContentSection('leadership', 'leaders', leaders);
  };

  const handleAddLeader = () => {
    const leaders = [...(leadership.leaders || []), { name: 'Executive Leader', designation: 'Co-Founder & Director', image: '', linkedin: 'https://linkedin.com' }];
    updateContentSection('leadership', 'leaders', leaders);
  };

  const handleDeleteLeader = (idx) => {
    const leaders = leadership.leaders.filter((_, i) => i !== idx);
    updateContentSection('leadership', 'leaders', leaders);
  };

  // Handlers for Products
  const handleUpdateProduct = (idx, field, val) => {
    const items = [...(products.items || [])];
    items[idx] = { ...items[idx], [field]: val };
    updateContentSection('products', 'items', items);
  };

  const handleAddProduct = () => {
    const items = [...(products.items || []), { name: 'New Product', tagline: 'Enterprise Solution', description: 'Brief description of features and impact...', link: '/products' }];
    updateContentSection('products', 'items', items);
  };

  const handleDeleteProduct = (idx) => {
    const items = products.items.filter((_, i) => i !== idx);
    updateContentSection('products', 'items', items);
  };

  // Handlers for Insights
  const handleUpdateInsight = (idx, field, val) => {
    const items = [...(insights.items || [])];
    items[idx] = { ...items[idx], [field]: val };
    updateContentSection('insights', 'items', items);
  };

  return (
    <div className="cms-form-stack" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. PAGE INFORMATION */}
      <AdminPageInfoSection
        title={hero.title || subPageMeta?.title || 'About firevy.co'}
        slug={subPageMeta?.slug || 'about-firevy'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/about-firevy'}
        number={pageNumber}
        isTitleEditable={true}
        onTitleChange={(val) => updateSection('hero', 'title', val)}
      />

      {/* 2. SECTION 1: HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Main Headline"
        subtitle="Primary page heading, narrative intro, CTA buttons, and top hero graphic."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. COMPANY PROFILE"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Page Headline / Title" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. About firevy.co"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Narrative Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter narrative introduction..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Label" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Connect Now"
              value={hero.ctaText || 'Connect Now'}
              onChange={(e) => updateSection('hero', 'ctaText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Target Link" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={hero.ctaLink || '/contact'}
              onChange={(e) => updateSection('hero', 'ctaLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                <ImageIcon size={18} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>
                  Hero Side Visual / Graphic (3D Laptop & Floating Badges)
                </h4>
                <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#64748b' }}>
                  Right-side hero illustration. You can upload/replace with a new file, paste a custom URL, or restore the default laptop graphic.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => updateHeroImage('/images/about-hero-laptop.svg')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '5px' }}
                title="Reset to default 3D laptop graphic"
              >
                <RotateCcw size={13} />
                Default Laptop Graphic
              </button>
              {currentHeroImage && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => updateHeroImage('')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '5px' }}
                  title="Remove graphic"
                >
                  <Trash2 size={13} />
                  Remove
                </button>
              )}
            </div>
          </div>

          <AdminMediaField
            label="Upload or Replace Graphic Asset"
            value={currentHeroImage}
            onChange={(val) => updateHeroImage(val)}
            folder="company/about"
            placeholder="/images/about-hero-laptop.svg"
            helperText="Click 'Replace' to upload a new JPG, PNG, WebP or SVG from your device, or click trash to remove."
          />

          <div style={{ marginTop: '12px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '10px 12px' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
              Direct Asset URL / File Path:
            </label>
            <input
              type="text"
              className="form-control"
              value={currentHeroImage || ''}
              onChange={(e) => updateHeroImage(e.target.value)}
              placeholder="e.g. /images/about-hero-laptop.svg or /uploads/images/... or https://..."
              style={{ fontSize: '12.5px' }}
            />
            <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginTop: '3px' }}>
              You can also type or paste any local path or external image URL here directly.
            </span>
          </div>

          {currentHeroImage && (
            <div style={{ marginTop: '14px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '130px', height: '90px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px', flexShrink: 0 }}>
                <img
                  src={getMediaUrl(currentHeroImage)}
                  alt="Hero Graphic Preview"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/about-hero-laptop.svg';
                  }}
                />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '12px', background: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 700, marginBottom: '4px' }}>
                  Active Preview
                </span>
                <p style={{ margin: 0, fontSize: '12px', fontWeight: 600, color: '#1e293b' }}>
                  Current Graphic Displaying on Live Page
                </p>
                <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#64748b', wordBreak: 'break-all' }}>
                  {currentHeroImage}
                </p>
              </div>
            </div>
          )}
        </div>
      </AdminFormSection>

      {/* 3. SECTION 2: ABOUT FIREVY.CO (BUILDING & NARRATIVE) */}
      <AdminFormSection
        title="2. Company Overview & Building Showcase"
        subtitle="Corporate headquarters photo, detailed background story, and contact action button."
        badge="Company Profile"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. About firevy.co"
              value={aboutCompany.heading || ''}
              onChange={(e) => {
                updateContentSection('aboutCompany', 'heading', e.target.value);
                updateSection('overview', 'title', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="Button Text">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Get In Touch"
              value={aboutCompany.buttonText || 'Get In Touch'}
              onChange={(e) => updateContentSection('aboutCompany', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Target Link">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={aboutCompany.buttonLink || '/contact'}
              onChange={(e) => updateContentSection('aboutCompany', 'buttonLink', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Detailed Corporate Narrative Body" fullWidth required>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Write detailed corporate background, company history, and expertise..."
              value={aboutCompany.description || ''}
              onChange={(e) => {
                updateContentSection('aboutCompany', 'description', e.target.value);
                updateSection('overview', 'text', e.target.value);
              }}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '14px' }}>
          <AdminMediaField
            label="Corporate Building / Office Photo"
            value={aboutCompany.image || ''}
            onChange={(val) => updateContentSection('aboutCompany', 'image', val)}
            folder="company/about"
            placeholder="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab..."
            helperText="High-res corporate office building image displayed on the left side of the overview."
          />
        </div>
      </AdminFormSection>

      {/* 4. SECTION 3: WE CREATE, WE ENHANCE, WE DELIVER (VISION & MISSION) */}
      <AdminFormSection
        title="3. We Create, We Enhance, We Deliver (Vision & Mission)"
        subtitle="Guiding philosophy, Our Vision card, and Our Mission card."
        badge="Vision & Mission"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Section Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. We Create, We Enhance, We Deliver"
              value={missionVision.heading || ''}
              onChange={(e) => updateContentSection('missionVision', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Section Subheading / Tagline" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. More Than Expected – That's firevy.co"
              value={missionVision.subheading || ''}
              onChange={(e) => updateContentSection('missionVision', 'subheading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Vision Card Title">
            <input
              type="text"
              className="form-control"
              value={missionVision.visionTitle || 'Our Vision'}
              onChange={(e) => updateContentSection('missionVision', 'visionTitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Mission Card Title">
            <input
              type="text"
              className="form-control"
              value={missionVision.missionTitle || 'Our Mission'}
              onChange={(e) => updateContentSection('missionVision', 'missionTitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Vision Statement Narrative">
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter strategic vision statement..."
              value={missionVision.visionText || ''}
              onChange={(e) => updateContentSection('missionVision', 'visionText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Mission Statement Narrative">
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter corporate mission statement..."
              value={missionVision.missionText || ''}
              onChange={(e) => updateContentSection('missionVision', 'missionText', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 5. SECTION 4: ABOUT US (8 KEY METRICS CARDS) */}
      <AdminFormSection
        title="4. ABOUT US (Key Metrics & Global Presence Grid)"
        subtitle="Dark blue section featuring 8 milestone and presence metric cards with animated numbers."
        badge={`${metricsSection.cards?.length || 0} Metric Cards`}
        action={
          <button type="button" onClick={handleAddMetric} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Metric Card</span>
          </button>
        }
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              value={metricsSection.title || 'ABOUT US'}
              onChange={(e) => updateContentSection('metricsSection', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Section Subtitle">
            <input
              type="text"
              className="form-control"
              value={metricsSection.description || ''}
              onChange={(e) => updateContentSection('metricsSection', 'description', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(metricsSection.cards || []).map((card, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                padding: '12px 14px',
                background: '#F8FAFC',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ width: '130px', flexShrink: 0 }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 23+"
                  value={card.metric || card.value || ''}
                  onChange={(e) => handleUpdateMetric(idx, 'metric', e.target.value)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Years of Experience"
                  value={card.label || ''}
                  onChange={(e) => handleUpdateMetric(idx, 'label', e.target.value)}
                />
              </div>
              <div style={{ width: '200px', flexShrink: 0 }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Icon/Image: /images/1.svg"
                  value={card.image || ''}
                  onChange={(e) => handleUpdateMetric(idx, 'image', e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={() => handleDeleteMetric(idx)}
                className="btn btn-ghost btn-icon-sm"
                style={{ color: '#EF4444', flexShrink: 0 }}
                title="Delete Metric"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 6. SECTION 5: OUR CORE VALUES */}
      <AdminFormSection
        title="5. OUR CORE VALUES (6 Value Cards)"
        subtitle="Manage cultural ethics and guiding core values cards."
        badge={`${coreValues.values?.length || 0} Values`}
        action={
          <button type="button" onClick={handleAddValue} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Core Value</span>
          </button>
        }
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              value={coreValues.heading || 'Our Core Values'}
              onChange={(e) => updateContentSection('coreValues', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Section Subtitle">
            <input
              type="text"
              className="form-control"
              value={coreValues.subheading || ''}
              onChange={(e) => updateContentSection('coreValues', 'subheading', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {(coreValues.values || []).map((val, idx) => (
            <div
              key={val.id || idx}
              style={{
                padding: '14px 16px',
                background: '#F8FAFC',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                  CORE VALUE #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteValue(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444' }}
                  title="Delete Value"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="Value Title">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Transparency & Integrity"
                    value={val.title || ''}
                    onChange={(e) => handleUpdateValue(idx, 'title', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Icon Key" optional>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. ShieldCheck, Star, Heart, Award, Globe, Users"
                    value={val.icon || ''}
                    onChange={(e) => handleUpdateValue(idx, 'icon', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Description Narrative" fullWidth>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Describe what this value represents..."
                    value={val.desc || val.description || ''}
                    onChange={(e) => handleUpdateValue(idx, 'desc', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 7. SECTION 6: OUR CULTURE & WORKPLACE GALLERY */}
      <AdminFormSection
        title="6. Our Culture & 4 Workplace Photos"
        subtitle="Workplace culture narrative, Explore Careers button, and 4 photo grid."
        badge="Culture & Photos"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              value={culture.heading || 'Our Culture'}
              onChange={(e) => updateContentSection('culture', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Careers Button Label">
            <input
              type="text"
              className="form-control"
              value={culture.buttonText || 'Explore Careers (Jobs)'}
              onChange={(e) => updateContentSection('culture', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Careers Button Link">
            <input
              type="text"
              className="form-control"
              value={culture.buttonLink || '/careers'}
              onChange={(e) => updateContentSection('culture', 'buttonLink', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Culture Narrative - Paragraph 1" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={culture.paragraphs?.[0] || ''}
              onChange={(e) => {
                const paragraphs = [...(culture.paragraphs || ['', ''])];
                paragraphs[0] = e.target.value;
                updateContentSection('culture', 'paragraphs', paragraphs);
              }}
            />
          </AdminFormField>

          <AdminFormField label="Culture Narrative - Paragraph 2" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={culture.paragraphs?.[1] || ''}
              onChange={(e) => {
                const paragraphs = [...(culture.paragraphs || ['', ''])];
                paragraphs[1] = e.target.value;
                updateContentSection('culture', 'paragraphs', paragraphs);
              }}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
            Workplace 4-Photo Grid (Image Upload & Preview)
          </h4>
          <AdminFormGrid columns={2} gap="16px">
            <AdminMediaField
              label="Photo 1 (Top Left)"
              value={culture.images?.[0] || ''}
              onChange={(val) => handleUpdateCultureImage(0, val)}
              folder="company/culture"
              placeholder="https://images.unsplash.com/photo-1522071820081-009f0129c71c..."
            />
            <AdminMediaField
              label="Photo 2 (Top Right)"
              value={culture.images?.[1] || ''}
              onChange={(val) => handleUpdateCultureImage(1, val)}
              folder="company/culture"
              placeholder="https://images.unsplash.com/photo-1531482615713-2afd69097998..."
            />
            <AdminMediaField
              label="Photo 3 (Bottom Left)"
              value={culture.images?.[2] || ''}
              onChange={(val) => handleUpdateCultureImage(2, val)}
              folder="company/culture"
              placeholder="https://images.unsplash.com/photo-1511578314322-379afb476865..."
            />
            <AdminMediaField
              label="Photo 4 (Bottom Right)"
              value={culture.images?.[3] || ''}
              onChange={(val) => handleUpdateCultureImage(3, val)}
              folder="company/culture"
              placeholder="https://images.unsplash.com/photo-1556761175-5973dc0f32e7..."
            />
          </AdminFormGrid>
        </div>
      </AdminFormSection>

      {/* 8. SECTION 7: OUR LEADERSHIP */}
      <AdminFormSection
        title="7. Our Leadership Spotlight"
        subtitle="Executive leadership profiles with portrait photos, job titles, and LinkedIn profile links."
        badge={`${leadership.leaders?.length || 0} Leaders`}
        action={
          <button type="button" onClick={handleAddLeader} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Leader</span>
          </button>
        }
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              value={leadership.heading || 'Our Leadership'}
              onChange={(e) => updateContentSection('leadership', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Section Subtitle">
            <input
              type="text"
              className="form-control"
              value={leadership.subheading || ''}
              onChange={(e) => updateContentSection('leadership', 'subheading', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {(leadership.leaders || []).map((leader, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px',
                background: '#F8FAFC',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                  LEADER #{idx + 1}: {leader.name || 'Untitled Leader'}
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteLeader(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444' }}
                  title="Delete Leader"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="Leader Full Name">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Mr. Kumaril Patel"
                    value={leader.name || ''}
                    onChange={(e) => handleUpdateLeader(idx, 'name', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Designation / Title">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. CEO & Co-Founder"
                    value={leader.designation || ''}
                    onChange={(e) => handleUpdateLeader(idx, 'designation', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="LinkedIn Profile URL" fullWidth>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. https://linkedin.com/in/..."
                    value={leader.linkedin || ''}
                    onChange={(e) => handleUpdateLeader(idx, 'linkedin', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>

              <div style={{ marginTop: '12px' }}>
                <AdminMediaField
                  label="Portrait Photo URL / Upload"
                  value={leader.image || ''}
                  onChange={(val) => handleUpdateLeader(idx, 'image', val)}
                  folder="company/team"
                  placeholder="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d..."
                  helperText="Professional portrait headshot photo."
                />
              </div>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 9. SECTION 8: OUR WORLD CLASS PRODUCTS */}
      <AdminFormSection
        title="8. Our World Class Products"
        subtitle="Showcase flagship product solutions such as Vidyalaya and OccuCare."
        badge={`${products.items?.length || 0} Products`}
        action={
          <button type="button" onClick={handleAddProduct} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Product</span>
          </button>
        }
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              value={products.heading || 'Our World Class Products'}
              onChange={(e) => updateContentSection('products', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Section Subtitle">
            <input
              type="text"
              className="form-control"
              value={products.subheading || ''}
              onChange={(e) => updateContentSection('products', 'subheading', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {(products.items || []).map((prod, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px',
                background: '#F8FAFC',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                  PRODUCT #{idx + 1}: {prod.name || 'Untitled Product'}
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444' }}
                  title="Delete Product"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="Product Brand Name">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Vidyalaya"
                    value={prod.name || ''}
                    onChange={(e) => handleUpdateProduct(idx, 'name', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Product Tagline / Slogan">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Digitizing Schools"
                    value={prod.tagline || ''}
                    onChange={(e) => handleUpdateProduct(idx, 'tagline', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Target Link">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. /products"
                    value={prod.link || '/products'}
                    onChange={(e) => handleUpdateProduct(idx, 'link', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Product Description Narrative" fullWidth>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Describe product capabilities..."
                    value={prod.description || ''}
                    onChange={(e) => handleUpdateProduct(idx, 'description', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 10. SECTION 9: TRUSTED BRANDS & SECTION 10: REVIEWS HEADINGS */}
      <AdminFormSection
        title="9. Trusted Brands & Client Reviews Titles"
        subtitle="Headings for the World Leading Brands grid and What Our Clients Say carousel."
        badge="Brands & Reviews"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Trusted Brands Heading">
            <input
              type="text"
              className="form-control"
              value={trustedBrands.heading || 'Trusted By The World’s Leading Brands'}
              onChange={(e) => updateContentSection('trustedBrands', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Reviews Section Heading">
            <input
              type="text"
              className="form-control"
              value={reviewsSection.title || 'What Our Clients Say'}
              onChange={(e) => updateContentSection('reviewsSection', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Trusted Brands Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={trustedBrands.subheading || ''}
              onChange={(e) => updateContentSection('trustedBrands', 'subheading', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 11. SECTION 11: INSIGHTS (5 PHOTO STORIES) */}
      <AdminFormSection
        title="10. Insights Photo Stories (5 Event & Showcase Highlights)"
        subtitle="5 event, booth, and showcase photos with badges/captions."
        badge="Insights"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              value={insights.heading || 'Insights'}
              onChange={(e) => updateContentSection('insights', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Section Subtitle">
            <input
              type="text"
              className="form-control"
              value={insights.subheading || ''}
              onChange={(e) => updateContentSection('insights', 'subheading', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {(insights.items || []).map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px 14px',
                background: '#F8FAFC',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                  INSIGHT #{idx + 1}
                </span>
                <input
                  type="text"
                  className="form-control"
                  style={{ flex: 1 }}
                  placeholder="Optional badge / caption: e.g. Occucon Event"
                  value={item.caption || ''}
                  onChange={(e) => handleUpdateInsight(idx, 'caption', e.target.value)}
                />
              </div>
              <AdminMediaField
                label={`Insight Photo #${idx + 1}`}
                value={item.image || ''}
                onChange={(val) => handleUpdateInsight(idx, 'image', val)}
                folder="company/insights"
                placeholder="https://images.unsplash.com/..."
              />
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 12. SECTION 12: CORPORATE SOCIAL RESPONSIBILITY (CSR) */}
      <AdminFormSection
        title="11. Corporate Social Responsibility (CSR)"
        subtitle="CSR heading, subtitle, human empowerment quote, and community photo."
        badge="CSR"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CSR Heading">
            <input
              type="text"
              className="form-control"
              value={csr.heading || 'Corporate Social Responsibility'}
              onChange={(e) => updateContentSection('csr', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CSR Subheading">
            <input
              type="text"
              className="form-control"
              value={csr.subheading || 'Business is an opportunity to help humanity'}
              onChange={(e) => updateContentSection('csr', 'subheading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CSR Pillars / Quote Highlight" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="e.g. Our CSR Programs Accelerate Human Empowerment..."
              value={csr.quote || ''}
              onChange={(e) => updateContentSection('csr', 'quote', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '14px' }}>
          <AdminMediaField
            label="CSR Community Photo"
            value={csr.image || ''}
            onChange={(val) => updateContentSection('csr', 'image', val)}
            folder="company/csr"
            placeholder="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c..."
            helperText="Photo showing community empowerment, education, or social initiatives."
          />
        </div>
      </AdminFormSection>

      {/* 13. SECTION 13: FULL PANORAMIC WHOLE TEAM PHOTO BANNER */}
      <AdminFormSection
        title="12. Panoramic Whole Team Photo Banner"
        subtitle="Wide panorama photo of the company team shown across the full container width."
        badge="Team Banner"
      >
        <AdminMediaField
          label="Panoramic Team Photo Banner"
          value={teamBanner.image || ''}
          onChange={(val) => updateContentSection('teamBanner', 'image', val)}
          folder="company/team"
          placeholder="https://images.unsplash.com/photo-1522071820081-009f0129c71c..."
          helperText="Wide aspect-ratio panoramic image showing all team members."
        />
      </AdminFormSection>

      {/* 14. SECTION 14: PARTNER WITH US CTA BANNER */}
      <AdminFormSection
        title="13. Partner With Us CTA Banner"
        subtitle="Final call-to-action banner before the footer."
        badge="Bottom CTA"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Let's Work Together on Your Next Digital Project"
              value={cta.title || ''}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              placeholder="Enter supporting narrative..."
              value={cta.subtitle || ''}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Text">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Get In Touch"
              value={cta.buttonText || ''}
              onChange={(e) => updateSection('cta', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={cta.buttonLink || ''}
              onChange={(e) => updateSection('cta', 'buttonLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 15. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default AboutFirevyForm;
