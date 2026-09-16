import React from 'react';
import {
  Plus,
  Trash2,
  FileText,
  Download,
  Sparkles,
  Layers,
  Image as ImageIcon,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  Mail,
  ArrowRight
} from 'lucide-react';
import CompanyCrudManager from '../../CompanyAdmin/CompanyCrudManager';
import MediaUploadInput from '../../UI/MediaUploadInput';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * BrochureForm
 * 
 * Comprehensive CMS Form for "Corporate Brochure / Download Brochure"
 * Fully dynamic: Hero banner, 3D stacked brochure mockup cards, downloadable PDF asset,
 * form lead capture settings, multiple brochure decks CRUD, trusted brands, CTA, and SEO.
 */
export const BrochureForm = ({
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

  const updateRootField = (field, value) => {
    onChange({
      ...formData,
      [field]: value
    });
  };

  // Resolved Sections
  const hero = formData.hero || formData.content?.hero || {};
  const downloadableInfo = formData.content?.downloadableInfo || formData.downloadableInfo || {};
  const brochureForm = formData.content?.brochureForm || formData.brochureForm || {};
  const trustedBrands = formData.content?.trustedBrands || formData.trustedBrands || {};
  const featuredIn = formData.content?.featuredIn || formData.featuredIn || {};
  const ctaBanner = formData.content?.ctaBanner || formData.ctaBanner || formData.cta || {};
  const newsletter = formData.content?.newsletter || formData.newsletter || {};
  const seo = formData.seo || {};

  return (
    <div className="cms-form-stack" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Corporate Brochure'}
        slug={subPageMeta?.slug || 'download-brochure'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/download-brochure'}
      />

      {/* 1. HERO SECTION & ACTION */}
      <AdminFormSection
        title="1. Hero Section & Call To Action"
        subtitle="Hero headline, introductory narrative, CTA button, and custom hero illustration or graphic."
        icon={Sparkles}
        badge="Hero Banner"
        badgeVariant="sky"
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. CORPORATE OVERVIEW"
              value={hero.badge || 'CORPORATE OVERVIEW'}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Headline" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Let's create something big together!"
              value={hero.title || "Let's create something big together!"}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter hero introduction narrative..."
              value={
                hero.subtitle !== undefined
                  ? hero.subtitle
                  : 'firevy.co is a Leading software and app development company with offices worldwide. If you want to know more about our business.'
              }
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Connect Us"
              value={hero.ctaText || 'Connect Us'}
              onChange={(e) => {
                updateSection('hero', 'ctaText', e.target.value);
                updateRootField('ctaText', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="Button Link / Anchor Target">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact or #brochure-form"
              value={hero.ctaLink || '/contact'}
              onChange={(e) => {
                updateSection('hero', 'ctaLink', e.target.value);
                updateRootField('ctaLink', e.target.value);
              }}
            />
          </AdminFormField>

          {/* Hero Graphic / 3D Illustration */}
          <div style={{ gridColumn: '1 / -1' }}>
            <AdminFormField
              label="Hero Graphic / Illustration Image"
              optional
              helperText="Upload a custom hero graphic or 3D illustration. If left empty, the website will display the default modern 3D isometric SVG illustration."
            >
              <MediaUploadInput
                label="Upload Hero Visual Graphic"
                type="image"
                value={hero.heroImage || formData.heroImage || ''}
                onChange={(url) => {
                  updateSection('hero', 'heroImage', url);
                  updateRootField('heroImage', url);
                }}
                helperText="Supported: PNG, WebP, SVG, JPG. High resolution with transparent background recommended."
              />
            </AdminFormField>
          </div>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. "EASILY & QUICKLY DOWNLOADABLE INFORMATION" & 3D STACKED CARDS */}
      <AdminFormSection
        title="2. Easily & Quickly Downloadable Information Section"
        subtitle="Manage the overview narrative and the 3D fan-out stacked brochure preview mockup cards."
        icon={Layers}
        badge="Brochure Mockup"
        badgeVariant="emerald"
      >
        <AdminFormGrid columns={1} gap="16px">
          <AdminFormField label="Section Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Easily & Quickly Downloadable Information"
              value={downloadableInfo.heading || 'Easily & Quickly Downloadable Information'}
              onChange={(e) => updateContentField('downloadableInfo', 'heading', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Company Overview Narrative Paragraph" fullWidth>
            <textarea
              className="form-control"
              rows={6}
              style={{ lineHeight: 1.6, fontSize: '13.5px' }}
              placeholder="Enter comprehensive company narrative..."
              value={
                downloadableInfo.description !== undefined
                  ? downloadableInfo.description
                  : "As a global leader in the software development market, we have 2800+ satisfied clients in 30+ countries. Established in 2002, we are a leading Mobile App Development Company in the USA with ISO 27001:2013 certification. As a Multinational company, we provide software and website development services from our cutting-edge delivery centers in Ahmedabad, India. We have experience working with several Fortune 100 companies and popular brands like American Express, Bayer, Chevron, Almarai, Adani, L&T, Vedanta, Orient Cement, Dr Reddy, and LOREAL. Additionally, we take great pride in being Clutch and Google's top-rated mobile app development company. Whether you are looking for mobile app development services, website design, or software development, firevy.co is your right destination. firevy.co can deliver 1500+ projects and assists big clients like Adani and American Express skyrocket their business by delivering top-notch services."
              }
              onChange={(e) => updateContentField('downloadableInfo', 'description', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* 3D Stacked Brochure Mockup Cards Settings */}
        <div style={{ marginTop: '20px', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
          <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#0F172A', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            3D Stacked Brochure Mockup Cards (Front Cover & Accent Cards)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {/* Card 1: Back Card */}
            <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#005478', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Card 1 (Back Accent Card)
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <AdminFormField label="Card Title">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Services"
                    value={downloadableInfo.card1Title || 'Services'}
                    onChange={(e) => updateContentField('downloadableInfo', 'card1Title', e.target.value)}
                  />
                </AdminFormField>
                <AdminFormField label="Corner Icon / Letter Tag">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. S"
                    value={downloadableInfo.card1Tag || 'S'}
                    onChange={(e) => updateContentField('downloadableInfo', 'card1Tag', e.target.value)}
                  />
                </AdminFormField>
                <AdminFormField label="Background Color">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="#005478"
                    value={downloadableInfo.card1Bg || '#005478'}
                    onChange={(e) => updateContentField('downloadableInfo', 'card1Bg', e.target.value)}
                  />
                </AdminFormField>
              </div>
            </div>

            {/* Card 2: Middle Card */}
            <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Card 2 (Middle Accent Card)
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <AdminFormField label="Card Title">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Company Overview"
                    value={downloadableInfo.card2Title || 'Company Overview'}
                    onChange={(e) => updateContentField('downloadableInfo', 'card2Title', e.target.value)}
                  />
                </AdminFormField>
                <AdminFormField label="Subtitle / Tagline">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. achieve more and to be one of the best..."
                    value={downloadableInfo.card2Subtitle || 'achieve more and to be one of the best customer-centric'}
                    onChange={(e) => updateContentField('downloadableInfo', 'card2Subtitle', e.target.value)}
                  />
                </AdminFormField>
                <AdminFormField label="Background Color">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="#006B8F"
                    value={downloadableInfo.card2Bg || '#006B8F'}
                    onChange={(e) => updateContentField('downloadableInfo', 'card2Bg', e.target.value)}
                  />
                </AdminFormField>
              </div>
            </div>

            {/* Card 3: Front Main Card */}
            <div style={{ backgroundColor: '#F0F9FF', padding: '14px', borderRadius: '8px', border: '1px solid #BAE6FD', gridColumn: 'span 1' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Card 3 (Front Main Brochure Card with Image)
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <AdminFormField label="Brand Label">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="firevy"
                      value={downloadableInfo.card3Brand || 'firevy'}
                      onChange={(e) => updateContentField('downloadableInfo', 'card3Brand', e.target.value)}
                    />
                  </AdminFormField>
                  <AdminFormField label="Badge / ISO Tag">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ISO 27001:2013"
                      value={downloadableInfo.card3Tag || 'ISO 27001:2013'}
                      onChange={(e) => updateContentField('downloadableInfo', 'card3Tag', e.target.value)}
                    />
                  </AdminFormField>
                </div>

                {/* Brochure Front Cover Image Upload */}
                <AdminFormField
                  label="Brochure Cover Image"
                  helperText="Upload the cover image displayed inside the 3D white brochure card."
                >
                  <MediaUploadInput
                    label="Upload Front Brochure Cover Image"
                    type="image"
                    value={
                      downloadableInfo.card3Image ||
                      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
                    }
                    onChange={(url) => updateContentField('downloadableInfo', 'card3Image', url)}
                    helperText="Recommended: 600x380px or landscape image of company office/work."
                  />
                </AdminFormField>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <AdminFormField label="Brochure Title">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digital Brochure"
                      value={downloadableInfo.card3Title || 'Digital Brochure'}
                      onChange={(e) => updateContentField('downloadableInfo', 'card3Title', e.target.value)}
                    />
                  </AdminFormField>
                  <AdminFormField label="Website Link Text">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="www.firevy.co"
                      value={downloadableInfo.card3Website || 'www.firevy.co'}
                      onChange={(e) => updateContentField('downloadableInfo', 'card3Website', e.target.value)}
                    />
                  </AdminFormField>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* 3. "DOWNLOAD OUR BROCHURE" LEAD CAPTURE FORM & PDF DOCUMENT ASSET */}
      <AdminFormSection
        title="3. Download Brochure Lead Capture & PDF Document Asset"
        subtitle="Manage the brochure lead-capture form and attach the actual company PDF file for instant download."
        icon={Download}
        badge="PDF & Lead Capture"
        badgeVariant="cyan"
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Form Section Heading" fullWidth required>
            <input
              type="text"
              className="form-control"
              placeholder="Download Our Brochure To Take A Glimpse Of Our Offerings"
              value={brochureForm.title || 'Download Our Brochure To Take A Glimpse Of Our Offerings'}
              onChange={(e) => updateContentField('brochureForm', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Submit Button Label">
            <input
              type="text"
              className="form-control"
              placeholder="Download"
              value={brochureForm.buttonText || 'Download'}
              onChange={(e) => updateContentField('brochureForm', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Success Alert Message">
            <input
              type="text"
              className="form-control"
              placeholder="Thank you! Your firevy.co digital brochure download has started."
              value={
                brochureForm.successMessage ||
                'Thank you! Your firevy.co digital brochure download has started.'
              }
              onChange={(e) => updateContentField('brochureForm', 'successMessage', e.target.value)}
            />
          </AdminFormField>

          {/* Primary Brochure PDF Document File */}
          <div style={{ gridColumn: '1 / -1' }}>
            <AdminFormField
              label="Primary Company Brochure PDF Document"
              required
              helperText="Upload the official company brochure PDF file. When visitors submit the form, this document will automatically download or open."
            >
              <MediaUploadInput
                label="Upload Corporate Brochure PDF Document"
                type="pdf"
                value={
                  brochureForm.brochurePdf ||
                  formData.brochurePdf ||
                  formData.content?.brochurePdf ||
                  ''
                }
                onChange={(url) => {
                  updateContentField('brochureForm', 'brochurePdf', url);
                  updateContentField('brochureForm', 'pdfUrl', url);
                  updateRootField('brochurePdf', url);
                }}
                helperText="Upload a valid PDF file (e.g. firevy-corporate-brochure.pdf). Max recommended size: 25 MB."
              />
            </AdminFormField>
          </div>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 4. DOWNLOADABLE BROCHURE ASSETS & CATEGORY DECKS (CRUD) */}
      <AdminFormSection
        title="4. Additional Corporate Brochure Decks & Presentations"
        subtitle="Manage multiple downloadable corporate PDFs, category decks, and cover thumbnails in a structured table."
        icon={FileText}
        badge="Decks Directory"
        badgeVariant="slate"
      >
        <CompanyCrudManager
          pageTitle="Corporate Brochures & Decks"
          pageSubtitle="Upload and manage downloadable corporate PDFs, category decks, and cover thumbnails."
          collectionType="brochures"
          publicRoute="/company/download-brochure"
          itemTitle="Brochure"
        />
      </AdminFormSection>

      {/* 5. "TRUSTED BY THE WORLD'S LEADING BRANDS" */}
      <AdminFormSection
        title="5. Trusted By The World's Leading Brands"
        subtitle="Heading and narrative for the enterprise brand partnerships grid."
        icon={Building2}
        badge="Brand Trust"
        badgeVariant="indigo"
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Title" fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="Trusted By The World’s Leading Brands"
              value={trustedBrands.heading || 'Trusted By The World’s Leading Brands'}
              onChange={(e) => updateContentField('trustedBrands', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Section Subtitle & Narrative" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              placeholder="We are glad to be a digital technology and innovation partner..."
              value={
                trustedBrands.subtitle ||
                'We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.'
              }
              onChange={(e) => updateContentField('trustedBrands', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 6. "WE HAVE BEEN FEATURED IN" SECTION */}
      <AdminFormSection
        title="6. 'We Have Been Featured In' Media Publications"
        subtitle="Section headline and visibility for media feature badges (Microsoft, Inc., Forbes, Clutch, etc.)."
        icon={CheckCircle2}
        badge="Media Trust"
        badgeVariant="purple"
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="We Have Been Featured In"
              value={featuredIn.heading || 'We Have Been Featured In'}
              onChange={(e) => updateContentField('featuredIn', 'heading', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 7. "WANT TO BOOST YOUR BUSINESS?" CTA BANNER */}
      <AdminFormSection
        title="7. 'Want to boost your business?' CTA Banner"
        subtitle="Bottom high-conversion teal banner encouraging immediate consultation requests."
        icon={ArrowRight}
        badge="Conversion CTA"
        badgeVariant="emerald"
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="Want to boost your business?"
              value={ctaBanner.title || 'Want to boost your business?'}
              onChange={(e) => updateContentField('ctaBanner', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              placeholder="Would you like to know why choosing us is the best decision..."
              value={
                ctaBanner.subtitle ||
                'Would you like to know why choosing us is the best decision? Because we work with you to create something out of the box at a fraction of the cost.'
              }
              onChange={(e) => updateContentField('ctaBanner', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              placeholder="Request A Free Quote"
              value={ctaBanner.buttonText || 'Request A Free Quote'}
              onChange={(e) => updateContentField('ctaBanner', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
              placeholder="/contact"
              value={ctaBanner.buttonLink || '/contact'}
              onChange={(e) => updateContentField('ctaBanner', 'buttonLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 8. NEWSLETTER SUBSCRIBE BANNER */}
      <AdminFormSection
        title="8. Newsletter Subscription Banner"
        subtitle="Subscribe lead capture banner with email input and privacy reassurance."
        icon={Mail}
        badge="Newsletter"
        badgeVariant="sky"
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Banner Title" fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="Subscribe us and Get the latest updates and news"
              value={newsletter.title || 'Subscribe us and Get the latest updates and news'}
              onChange={(e) => updateContentField('newsletter', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Banner Subtitle" fullWidth optional>
            <input
              type="text"
              className="form-control"
              placeholder="Join 15,000+ technology leaders receiving our monthly insights."
              value={newsletter.subtitle || ''}
              onChange={(e) => updateContentField('newsletter', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 9. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default BrochureForm;
