import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  Image as ImageIcon,
  Star,
  Globe,
  Users,
  Award,
  Sparkles,
  Target,
  ArrowUp,
  ArrowDown,
  Video,
  Building2,
  ChevronDown,
  ChevronUp,
  Layers
} from 'lucide-react';
import MediaUploadInput, { getMediaUrl } from '../../UI/MediaUploadInput';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

// Default Benefits Data (Screenshot 3 Match)
export const DEFAULT_BENEFITS = [
  {
    id: 1,
    title: 'Sustainability',
    desc: 'For us, responsible entrepreneurship and scientific advancement go hand in hand. Because of this, a large portion of our magic is used to develop sustainable solutions.',
    iconName: 'Globe',
    iconImage: ''
  },
  {
    id: 2,
    title: 'Equal Opportunity Employer',
    desc: 'firevy.co promises not to discriminate against employees because of their race, color, religion, sex, national origin, age, disability, or genetic information.',
    iconName: 'Users',
    iconImage: ''
  },
  {
    id: 3,
    title: 'Are You Ready To Lead?',
    desc: 'Through our dedication to lifelong learning, we will support, encourage, and direct you to achieve your career goals.',
    iconName: 'Award',
    iconImage: ''
  }
];

// Default Workplace Gallery Images (Screenshot 0 Match)
export const DEFAULT_WORKPLACE_GALLERY = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
];

// Default Culture Pillars (Screenshot 0 Match)
export const DEFAULT_CULTURE_PILLARS = [
  {
    id: 1,
    title: 'Flexibility And Freedom',
    desc: 'We work hard to allow you the freedom to advance your career while maintaining a healthy work-life balance. You can reshape the job to fit your personality.',
    iconName: 'Sparkles',
    iconImage: ''
  },
  {
    id: 2,
    title: 'Innovation Everyday',
    desc: 'We have people, strategy, leadership, management, culture and tools & processes to make sure we innovate every day and keep on improving our services.',
    iconName: 'Globe',
    iconImage: ''
  },
  {
    id: 3,
    title: 'People First',
    desc: 'Meaningful employment, or a job in which one feels effective and has the potential to change the business, is one factor for hiring personnel. They ought to be moving forward, capable of expanding, growing, and advancing their career inside the organization.',
    iconName: 'Users',
    iconImage: ''
  },
  {
    id: 4,
    title: 'Making Impact',
    desc: 'We aim to give you a chance to advance your career and alter the course of history. Our work at firevy.co significantly impacts the world we live in.',
    iconName: 'Target',
    iconImage: ''
  }
];

// Default Clutch Reviews (Screenshot 0 Match)
export const DEFAULT_CLUTCH_REVIEWS = [
  {
    id: 1,
    name: 'Christine Ine',
    location: 'Rockville, Maryland',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    title: '"They are very professional, respectful, competent, and approachable."',
    quote: "The client was highly pleased with firevy.co's software development work. The team met all timeline goals and kept the cost within budget...",
    rating: '4.5',
    quality: '4.0',
    schedule: '4.5',
    cost: '5.0',
    willingToRefer: '5.0'
  },
  {
    id: 2,
    name: 'Derrick Surratt',
    location: 'Arkansas',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    title: '"firevy.co\'s team communicated effectively..."',
    quote: 'firevy.co successfully implemented all UX and design features on the app. The team has consistently delivered on schedule...',
    rating: '5.0',
    quality: '5.0',
    schedule: '5.0',
    cost: '5.0',
    willingToRefer: '5.0'
  },
  {
    id: 3,
    name: 'Hamidah Nalwoga',
    location: 'Massachusetts',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    title: "\"They're able to listen to customer requests and attend...\"",
    quote: "firevy.co's updates improved a product's UX per the end customer's requests. The team is personable, reaches their goals...",
    rating: '5.0',
    quality: '5.0',
    schedule: '5.0',
    cost: '5.0',
    willingToRefer: '5.0'
  },
  {
    id: 4,
    name: 'Michael Vance',
    location: 'Austin, Texas',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    title: '"The team exceeded our expectations in every single release."',
    quote: 'Communication was smooth across all timezones. They understood our complex requirements quickly and delivered high performance...',
    rating: '5.0',
    quality: '5.0',
    schedule: '5.0',
    cost: '4.8',
    willingToRefer: '5.0'
  }
];

/**
 * GreatPlaceToWorkForm
 * 
 * Complete Page-Specific CMS Form for "Great Place To Work"
 * Dynamic across ALL sections, text narratives, and images:
 * 1. Hero Graphic (3D Isometric SVG or custom uploaded image)
 * 2. "How We Did It?" Section (Corporate Building Image)
 * 3. Video Banner (Cover Image & Video URL)
 * 4. Benefits (3 Cards with icons & custom images)
 * 5. "Meet Our Heroes" (3 Photos Showcase)
 * 6. Workplace Gallery Carousel (Office Photos)
 * 7. Culture Section (Background Image & 4 Pillars)
 * 8. Client Reviews (Clutch cards with Client Avatars)
 * 9. Bottom CTA & Newsletter
 * 10. SEO Metadata
 */
export const GreatPlaceToWorkForm = ({
  formData,
  onChange,
  subPageMeta,
  pageNumber = 1
}) => {
  // Sync state helpers
  const updateSection = (section, field, value) => {
    onChange({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value
      },
      content: {
        ...formData.content,
        [section]: {
          ...formData.content?.[section],
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

  const updateContentField = (section, field, value) => {
    onChange({
      ...formData,
      content: {
        ...formData.content,
        [section]: {
          ...formData.content?.[section],
          [field]: value
        }
      }
    });
  };

  const hero = formData.hero || {};
  const content = formData.content || {};
  const cta = formData.cta || formData.content?.ctaBanner || {};
  const newsletter = formData.newsletter || formData.content?.newsletter || {};
  const seo = formData.seo || {};

  // 1. How We Did It Section Data
  const howWeDidIt = content.howWeDidIt || {
    heading: 'How We Did It?',
    description: 'It was the first time we tried to offer 360-degree IT services, so getting here took a lot of work. A few years ago, we worked hard for our first client before receiving our first lead. At that very moment, firevy.co chose to group its IT services under a single umbrella. We were fortunate to receive further leads over the following few months, and they were gracious enough to provide us with as much input as we could reasonably process. Additionally, several of our clients began requesting digital marketing solutions. We started a small team for digital marketing from there and have yet to look back. All due to our incredible partners, clients, and, of course, our extraordinarily bright personnel who put in a lot of effort for us.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  };

  // 2. Video Banner Section Data
  const videoBanner = content.videoBanner || {
    heading: 'What Makes firevy.co Great Place To Work',
    subtitle: 'What Makes firevy.co Great Place to work',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  };

  // 3. Benefits Cards Data
  const benefits = (Array.isArray(content.benefits) && content.benefits.length > 0)
    ? content.benefits
    : (Array.isArray(formData.items) && formData.items.length > 0)
      ? formData.items
      : DEFAULT_BENEFITS;

  const handleUpdateBenefit = (idx, field, val) => {
    const updated = [...benefits];
    updated[idx] = { ...updated[idx], [field]: val };
    onChange({
      ...formData,
      items: updated,
      cards: updated,
      content: {
        ...formData.content,
        benefits: updated
      }
    });
  };

  // 4. Heroes 3-Photos Showcase Data
  const heroes = content.heroes || {
    awardsHeading: 'Awards And Recognition',
    awardsSubtitle: 'The world is fueled by money. However, at our organization, rewards go beyond money. We provide a variety of attractive incentives to support you in working your magic.',
    heading: 'Meet Our Heroes',
    description: "We reward them because our team's strength grows enormously from our accomplishments. When an individual or team exemplifies your company's values, mission, or objectives, we have a culture that values and rewards their effort, successes, and contributions. Employees that take part in initiatives like these realize the significance and value of their work. Their ability to accomplish their jobs better is thereby significantly increased. At firevy.co, increasing employee productivity and recruiting and keeping top talent is done in a variety of ways, from work incentives to more freedom. We recognize the significance of feeling valued in order to succeed as a business owner or entrepreneur.",
    image1: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
    image2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    image3: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80'
  };

  // 5. Workplace Photo Gallery Data
  const gallery = (Array.isArray(formData.gallery) && formData.gallery.length > 0)
    ? formData.gallery
    : (Array.isArray(content.workplace?.gallery) && content.workplace.gallery.length > 0)
      ? content.workplace.gallery
      : DEFAULT_WORKPLACE_GALLERY;

  const handleUpdateGalleryImage = (idx, val) => {
    const updated = [...gallery];
    updated[idx] = val;
    onChange({
      ...formData,
      gallery: updated,
      content: {
        ...formData.content,
        workplace: {
          ...formData.content?.workplace,
          gallery: updated
        }
      }
    });
  };

  const handleAddGalleryImage = () => {
    const updated = [...gallery, 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'];
    onChange({
      ...formData,
      gallery: updated,
      content: {
        ...formData.content,
        workplace: {
          ...formData.content?.workplace,
          gallery: updated
        }
      }
    });
  };

  const handleDeleteGalleryImage = (idx) => {
    const updated = gallery.filter((_, i) => i !== idx);
    onChange({
      ...formData,
      gallery: updated,
      content: {
        ...formData.content,
        workplace: {
          ...formData.content?.workplace,
          gallery: updated
        }
      }
    });
  };

  // 6. Culture Pillars Data
  const culture = content.culture || {
    heading: 'firevy.co Culture',
    subtitle: 'We embrace a culture that fosters an environment where workers are happy and produce better work...',
    backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    pillars: DEFAULT_CULTURE_PILLARS
  };
  const culturePillars = Array.isArray(culture.pillars) ? culture.pillars : DEFAULT_CULTURE_PILLARS;

  const handleUpdateCulturePillar = (idx, field, val) => {
    const updatedPillars = [...culturePillars];
    updatedPillars[idx] = { ...updatedPillars[idx], [field]: val };
    updateContentField('culture', 'pillars', updatedPillars);
  };

  // 7. Clutch Reviews Data
  const clutchReviews = Array.isArray(content.clutchReviews?.reviews) ? content.clutchReviews.reviews : DEFAULT_CLUTCH_REVIEWS;

  const handleUpdateClutchReview = (idx, field, val) => {
    const updated = [...clutchReviews];
    updated[idx] = { ...updated[idx], [field]: val };
    onChange({
      ...formData,
      content: {
        ...formData.content,
        clutchReviews: {
          ...formData.content?.clutchReviews,
          reviews: updated
        }
      }
    });
  };

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Great Place To Work'}
        slug={subPageMeta?.slug || 'great-place-to-work'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/great-place-to-work'}
      />

      {/* 1. HERO SECTION & GRAPHIC */}
      <AdminFormSection
        title="1. Hero Section & Collaboration Graphic"
        subtitle="Workplace culture headline, subtitle, CTA button, and 3D isometric platform graphic."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. COMPANY CULTURE"
              value={hero.badge || formData.badge || 'COMPANY CULTURE'}
              onChange={(e) => {
                updateSection('hero', 'badge', e.target.value);
                updateRootField('badge', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Great Place To Work"
              value={hero.title || formData.title || 'What Makes firevy.co An Exciting Place To Work?'}
              onChange={(e) => {
                updateSection('hero', 'title', e.target.value);
                updateRootField('title', e.target.value);
              }}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth required>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter culture intro..."
              value={
                hero.subtitle ||
                formData.subtitle ||
                'Working with firevy.co is much more than doing a set of tasks daily. You can think, innovate, and tell us your ideas to improve this organization! You have exciting new opportunities to follow your curiosity wherever it takes you and pursue a career with our company.'
              }
              onChange={(e) => {
                updateSection('hero', 'subtitle', e.target.value);
                updateRootField('subtitle', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Label">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Discuss Your Project"
              value={hero.ctaText || formData.ctaText || 'Discuss Your Project'}
              onChange={(e) => {
                updateSection('hero', 'ctaText', e.target.value);
                updateRootField('ctaText', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Link">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={hero.ctaLink || formData.ctaLink || '/contact'}
              onChange={(e) => {
                updateSection('hero', 'ctaLink', e.target.value);
                updateRootField('ctaLink', e.target.value);
              }}
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* Hero Graphic / Image Upload & Live Visual Preview */}
        <div style={{ marginTop: '20px', padding: '16px', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
          <div style={{ marginBottom: '8px', fontSize: '13px', fontWeight: 700, color: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ImageIcon size={18} className="text-[#00668C]" />
              <span>Hero Graphic / 3D Isometric Illustration</span>
              <span style={{ fontSize: '11px', background: '#E0F2FE', color: '#0369A1', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
                Live Website Graphic
              </span>
            </div>
            {(formData.heroImage || hero.heroImage) && (formData.heroImage || hero.heroImage) !== '/images/great-place-hero.svg' && (
              <button
                type="button"
                onClick={() => {
                  updateRootField('heroImage', '/images/great-place-hero.svg');
                  updateSection('hero', 'heroImage', '/images/great-place-hero.svg');
                }}
                style={{
                  fontSize: '11.5px',
                  color: '#00668C',
                  background: 'none',
                  border: 'none',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Reset to Default 3D Platform
              </button>
            )}
          </div>
          <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '14px' }}>
            Official 3D isometric platform graphic with collaboration zones, speech ribbon, and team figures matching the website screenshot. You can upload a custom graphic or restore the default anytime.
          </p>

          {/* Prominent Visual Banner & Graphic Preview Card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 280px',
              gap: '20px',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '1px solid #CBD5E1',
              borderRadius: '10px',
              padding: '16px',
              marginBottom: '16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#00668C', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                {hero.badge || formData.badge || 'COMPANY CULTURE'}
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0', lineHeight: 1.25 }}>
                {hero.title || formData.title || 'What Makes firevy.co An Inspiring, Fun, and Rewarding Workplace?'}
              </h4>
              <p style={{ fontSize: '12px', color: '#64748B', margin: '0 0 12px 0', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {hero.subtitle || formData.subtitle || 'What Makes firevy.co An Inspiring, Fun, and Rewarding Workplace?'}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', background: '#00668C', color: '#FFF', borderRadius: '6px', fontSize: '12px', fontWeight: 700 }}>
                <span>{hero.ctaText || formData.ctaText || 'Discuss Your Project'}</span>
                <span>→</span>
              </div>
            </div>

            {/* 3D Graphic Preview Box */}
            <div
              style={{
                width: '100%',
                height: '160px',
                background: '#F0F7FF',
                borderRadius: '8px',
                border: '1px solid #BFDBFE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                src={getMediaUrl(formData.heroImage || hero.heroImage || '/images/great-place-hero.svg')}
                alt="Hero Graphic Preview"
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px' }}
                onError={(e) => {
                  e.target.src = '/images/great-place-hero.svg';
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '6px',
                  right: '6px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  color: '#FFFFFF',
                  fontSize: '9.5px',
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backdropFilter: 'blur(4px)'
                }}
              >
                Hero Graphic Preview
              </span>
            </div>
          </div>

          <MediaUploadInput
            label="Upload / Replace Hero Graphic Asset"
            value={formData.heroImage || hero.heroImage || '/images/great-place-hero.svg'}
            onChange={(url) => {
              updateRootField('heroImage', url);
              updateSection('hero', 'heroImage', url);
            }}
            folder="company/great-place-to-work"
            placeholder="Choose or upload Hero Graphic..."
          />
        </div>
      </AdminFormSection>

      {/* 2. "HOW WE DID IT?" SECTION */}
      <AdminFormSection
        title='2. "How We Did It?" Narrative & Building Image'
        subtitle="Story of how the company expanded 360° IT services with building photo."
        badge="Story & Image"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Section Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. How We Did It?"
              value={howWeDidIt.heading || 'How We Did It?'}
              onChange={(e) => updateContentField('howWeDidIt', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Story Description" fullWidth required>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Enter narrative..."
              value={howWeDidIt.description || ''}
              onChange={(e) => updateContentField('howWeDidIt', 'description', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', padding: '16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ marginBottom: '8px', fontSize: '13px', fontWeight: 600, color: '#1E293B', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Building2 size={16} className="text-[#00668C]" />
            <span>Corporate Building / Architecture Photo</span>
          </div>
          <MediaUploadInput
            value={howWeDidIt.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'}
            onChange={(url) => updateContentField('howWeDidIt', 'image', url)}
            folder="company/great-place-to-work"
            placeholder="Upload Building Photo..."
          />
        </div>
      </AdminFormSection>

      {/* 3. VIDEO BANNER SECTION */}
      <AdminFormSection
        title='3. "What Makes firevy.co Great Place To Work" Video Banner'
        subtitle="Cyan bordered video player section with cover thumbnail and play button."
        badge="Video Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Video Section Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. What Makes firevy.co Great Place To Work"
              value={videoBanner.heading || 'What Makes firevy.co Great Place To Work'}
              onChange={(e) => updateContentField('videoBanner', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Video Section Subtitle">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. What Makes firevy.co Great Place to work"
              value={videoBanner.subtitle || 'What Makes firevy.co Great Place to work'}
              onChange={(e) => updateContentField('videoBanner', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Video URL (YouTube / MP4)" fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. https://www.youtube.com/watch?v=..."
              value={videoBanner.videoUrl || ''}
              onChange={(e) => updateContentField('videoBanner', 'videoUrl', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', padding: '16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ marginBottom: '8px', fontSize: '13px', fontWeight: 600, color: '#1E293B', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Video size={16} className="text-[#00668C]" />
            <span>Video Player Cover Image (Collaboration Photo)</span>
          </div>
          <MediaUploadInput
            value={videoBanner.coverImage || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'}
            onChange={(url) => updateContentField('videoBanner', 'coverImage', url)}
            folder="company/great-place-to-work"
            placeholder="Upload Video Cover Photo..."
          />
        </div>
      </AdminFormSection>

      {/* 4. BENEFITS (3 CARDS) */}
      <AdminFormSection
        title="4. Benefits Cards"
        subtitle="3 core employee benefit cards with icons and custom image uploads."
        badge={`${benefits.length} Cards`}
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Benefits Section Title">
            <input
              type="text"
              className="form-control"
              value={content.benefitsHeading || 'Benefits'}
              onChange={(e) => onChange({
                ...formData,
                content: { ...formData.content, benefitsHeading: e.target.value }
              })}
            />
          </AdminFormField>

          <AdminFormField label="Benefits Subtitle">
            <input
              type="text"
              className="form-control"
              value={content.benefitsSubtitle || 'To grow and consistently improve our work, we promote transparency, conversation, and employee feedback in a demanding and exciting learning environment.'}
              onChange={(e) => onChange({
                ...formData,
                content: { ...formData.content, benefitsSubtitle: e.target.value }
              })}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {benefits.map((bn, idx) => (
            <div
              key={bn.id || idx}
              style={{
                padding: '16px',
                background: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#006B8F', textTransform: 'uppercase', marginBottom: '8px' }}>
                BENEFIT CARD #{idx + 1}
              </div>
              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="Card Title" required>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Sustainability"
                    value={bn.title || ''}
                    onChange={(e) => handleUpdateBenefit(idx, 'title', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Icon Name">
                  <select
                    className="form-control"
                    value={bn.iconName || 'Globe'}
                    onChange={(e) => handleUpdateBenefit(idx, 'iconName', e.target.value)}
                  >
                    <option value="Globe">Globe (Sustainability)</option>
                    <option value="Users">Users (Equal Opportunity)</option>
                    <option value="Award">Award (Ready To Lead)</option>
                    <option value="Sparkles">Sparkles (Innovation)</option>
                    <option value="Heart">Heart (Wellness)</option>
                  </select>
                </AdminFormField>

                <AdminFormField label="Card Description" fullWidth required>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Enter description..."
                    value={bn.desc || ''}
                    onChange={(e) => handleUpdateBenefit(idx, 'desc', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>

              {/* Custom Image / Icon Upload */}
              <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px dashed #E2E8F0' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
                  Custom Icon / Image Override (Optional)
                </div>
                <MediaUploadInput
                  value={bn.iconImage || bn.image || ''}
                  onChange={(url) => {
                    handleUpdateBenefit(idx, 'iconImage', url);
                    handleUpdateBenefit(idx, 'image', url);
                  }}
                  folder="company/great-place-to-work/benefits"
                  placeholder="Upload custom icon/image..."
                />
              </div>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 5. MEET OUR HEROES (3 PHOTOS SHOWCASE) */}
      <AdminFormSection
        title='5. "Awards And Recognition" & "Meet Our Heroes" (3 Showcase Photos)'
        subtitle="Header statements and 3 employee recognition photos (1 large left, 2 stacked right)."
        badge="Heroes Showcase (3 Photos)"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Awards Section Title">
            <input
              type="text"
              className="form-control"
              value={heroes.awardsHeading || 'Awards And Recognition'}
              onChange={(e) => updateContentField('heroes', 'awardsHeading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Awards Subtitle">
            <input
              type="text"
              className="form-control"
              value={heroes.awardsSubtitle || 'The world is fueled by money. However, at our organization, rewards go beyond money. We provide a variety of attractive incentives to support you in working your magic.'}
              onChange={(e) => updateContentField('heroes', 'awardsSubtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Heroes Subheading">
            <input
              type="text"
              className="form-control"
              value={heroes.heading || 'Meet Our Heroes'}
              onChange={(e) => updateContentField('heroes', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Heroes Narrative Description" fullWidth>
            <textarea
              className="form-control"
              rows={4}
              value={heroes.description || ''}
              onChange={(e) => updateContentField('heroes', 'description', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* 3 Showcase Photos */}
        <div style={{ marginTop: '20px', padding: '16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#1E293B', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ImageIcon size={16} className="text-[#00668C]" />
            <span>Showcase Photos (3 Images)</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
                Photo 1 (Large Left Photo - e.g. Award Ceremony)
              </label>
              <MediaUploadInput
                value={heroes.image1 || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80'}
                onChange={(url) => updateContentField('heroes', 'image1', url)}
                folder="company/great-place-to-work/heroes"
                placeholder="Upload Image 1..."
              />
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
                Photo 2 (Top Right Stacked Photo - e.g. Employee Recognition)
              </label>
              <MediaUploadInput
                value={heroes.image2 || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'}
                onChange={(url) => updateContentField('heroes', 'image2', url)}
                folder="company/great-place-to-work/heroes"
                placeholder="Upload Image 2..."
              />
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
                Photo 3 (Bottom Right Stacked Photo - e.g. Team Celebration)
              </label>
              <MediaUploadInput
                value={heroes.image3 || 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80'}
                onChange={(url) => updateContentField('heroes', 'image3', url)}
                folder="company/great-place-to-work/heroes"
                placeholder="Upload Image 3..."
              />
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* 6. WORKPLACE PHOTO GALLERY CAROUSEL */}
      <AdminFormSection
        title='6. "While There’s Still A Lot To Explore In Our Workplace" Photo Carousel'
        subtitle="Manage the scrollable horizontal photo carousel of office bays, conference rooms, and workspaces."
        badge={`${gallery.length} Photos`}
        action={
          <button type="button" onClick={handleAddGalleryImage} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Workplace Photo</span>
          </button>
        }
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Title">
            <input
              type="text"
              className="form-control"
              value={content.workplace?.heading || "While There's Still A Lot To Explore In Our Workplace"}
              onChange={(e) => updateContentField('workplace', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Section Subtitle">
            <input
              type="text"
              className="form-control"
              value={content.workplace?.subtitle || 'From dedicated cabins to conference rooms, we have been trying to find ways to provide our team with the resources they need to stay happy at work.'}
              onChange={(e) => updateContentField('workplace', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {gallery.map((imgUrl, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                background: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}
            >
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#006B8F', minWidth: '60px' }}>
                PHOTO #{idx + 1}
              </span>
              <div style={{ flex: 1 }}>
                <MediaUploadInput
                  value={imgUrl}
                  onChange={(val) => handleUpdateGalleryImage(idx, val)}
                  folder="company/great-place-to-work/workplace"
                  placeholder="Upload Workplace Photo..."
                />
              </div>
              <button
                type="button"
                onClick={() => handleDeleteGalleryImage(idx)}
                className="btn btn-ghost btn-icon-sm"
                style={{ color: '#EF4444' }}
                title="Delete Photo"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 7. CULTURE SECTION & 4 PILLARS */}
      <AdminFormSection
        title='7. "firevy.co Culture" Section (Background Image & 4 Pillars)'
        subtitle="Manage the culture backdrop image and the 4 key culture pillars."
        badge="Culture & 4 Pillars"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Culture Section Title">
            <input
              type="text"
              className="form-control"
              value={culture.heading || 'firevy.co Culture'}
              onChange={(e) => updateContentField('culture', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Culture Section Subtitle">
            <input
              type="text"
              className="form-control"
              value={culture.subtitle || 'We embrace a culture that fosters an environment where workers are happy and produce better work...'}
              onChange={(e) => updateContentField('culture', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* Culture Background Image */}
        <div style={{ marginTop: '16px', padding: '16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#1E293B', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ImageIcon size={16} className="text-[#00668C]" />
            <span>Culture Section Background Image</span>
          </div>
          <MediaUploadInput
            value={culture.backgroundImage || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80'}
            onChange={(url) => updateContentField('culture', 'backgroundImage', url)}
            folder="company/great-place-to-work/culture"
            placeholder="Upload Culture Background Image..."
          />
        </div>

        {/* 4 Pillars List */}
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>
            Culture Pillars (4 Items):
          </div>
          {culturePillars.map((pillar, idx) => (
            <div
              key={pillar.id || idx}
              style={{
                padding: '14px',
                background: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#006B8F', marginBottom: '8px' }}>
                PILLAR #{idx + 1}
              </div>
              <AdminFormGrid columns={2} gap="10px">
                <AdminFormField label="Title">
                  <input
                    type="text"
                    className="form-control"
                    value={pillar.title || ''}
                    onChange={(e) => handleUpdateCulturePillar(idx, 'title', e.target.value)}
                  />
                </AdminFormField>
                <AdminFormField label="Icon">
                  <select
                    className="form-control"
                    value={pillar.iconName || 'Sparkles'}
                    onChange={(e) => handleUpdateCulturePillar(idx, 'iconName', e.target.value)}
                  >
                    <option value="Sparkles">Sparkles (Flexibility)</option>
                    <option value="Globe">Globe (Innovation)</option>
                    <option value="Users">Users (People First)</option>
                    <option value="Target">Target (Making Impact)</option>
                  </select>
                </AdminFormField>
                <AdminFormField label="Description" fullWidth>
                  <textarea
                    className="form-control"
                    rows={2}
                    value={pillar.desc || ''}
                    onChange={(e) => handleUpdateCulturePillar(idx, 'desc', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 8. CLIENT REVIEWS (CLUTCH CAROUSEL) */}
      <AdminFormSection
        title='8. "What Our Clients Say" Reviews Carousel'
        subtitle="Manage client review cards with client avatar photos, ratings, and quotes."
        badge={`${clutchReviews.length} Reviews`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {clutchReviews.map((rev, idx) => (
            <div
              key={rev.id || idx}
              style={{
                padding: '16px',
                background: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#006B8F', marginBottom: '8px' }}>
                REVIEW #{idx + 1} - {rev.name}
              </div>
              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="Client Name">
                  <input
                    type="text"
                    className="form-control"
                    value={rev.name || ''}
                    onChange={(e) => handleUpdateClutchReview(idx, 'name', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Client Location">
                  <input
                    type="text"
                    className="form-control"
                    value={rev.location || ''}
                    onChange={(e) => handleUpdateClutchReview(idx, 'location', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Rating (e.g. 5.0)">
                  <input
                    type="text"
                    className="form-control"
                    value={rev.rating || '5.0'}
                    onChange={(e) => handleUpdateClutchReview(idx, 'rating', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Review Headline Quote">
                  <input
                    type="text"
                    className="form-control"
                    value={rev.title || ''}
                    onChange={(e) => handleUpdateClutchReview(idx, 'title', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Full Review Quote Body" fullWidth>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={rev.quote || ''}
                    onChange={(e) => handleUpdateClutchReview(idx, 'quote', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>

              {/* Client Avatar Image Upload */}
              <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px dashed #E2E8F0' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
                  Client Avatar Photo
                </div>
                <MediaUploadInput
                  value={rev.avatar || ''}
                  onChange={(url) => handleUpdateClutchReview(idx, 'avatar', url)}
                  folder="company/great-place-to-work/clients"
                  placeholder="Upload Client Avatar Image..."
                />
              </div>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 9. BOTTOM CTA BANNER & NEWSLETTER */}
      <AdminFormSection
        title="9. Bottom CTA Banner & Newsletter"
        subtitle="Final CTA banner and newsletter subscription headline."
        badge="CTA & Newsletter"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading">
            <input
              type="text"
              className="form-control"
              value={cta.title || "Let's work together to make something big happen"}
              onChange={(e) => {
                updateSection('cta', 'title', e.target.value);
                updateContentField('ctaBanner', 'title', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Text">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'CONNECT WITH US'}
              onChange={(e) => {
                updateSection('cta', 'buttonText', e.target.value);
                updateContentField('ctaBanner', 'buttonText', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'We provide custom software development and technology solutions tailored to your brand goals.'}
              onChange={(e) => {
                updateSection('cta', 'subtitle', e.target.value);
                updateContentField('ctaBanner', 'subtitle', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Link">
            <input
              type="text"
              className="form-control"
              value={cta.buttonLink || '/contact'}
              onChange={(e) => {
                updateSection('cta', 'buttonLink', e.target.value);
                updateContentField('ctaBanner', 'buttonLink', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="Newsletter Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={newsletter.title || 'Subscribe us and Get the latest updates and news'}
              onChange={(e) => {
                updateSection('newsletter', 'title', e.target.value);
                updateContentField('newsletter', 'title', e.target.value);
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 10. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default GreatPlaceToWorkForm;
