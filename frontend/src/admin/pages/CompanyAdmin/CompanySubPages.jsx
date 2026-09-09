import React from 'react';
import {
  Users,
  Calendar,
  FileText,
  Award,
  Video,
  BookOpen,
  Mic,
  Quote,
  ShieldCheck,
  Globe,
  Heart,
  Briefcase,
  Star,
  Play,
  Layers,
  Code
} from 'lucide-react';
import CompanyCrudManager from '../../components/CompanyAdmin/CompanyCrudManager';
import CompanySectionEditor from '../../components/CompanyAdmin/CompanySectionEditor';
import CareersAdminPage from '../CareersAdminPage';
import Badge from '../../components/UI/Badge';

// ============================================================
// 1. ABOUT FIREVY.CO (Singleton CMS Editor)
// ============================================================
export const AboutFirevyAdminPage = () => (
  <CompanySectionEditor
    slug="about-firevy"
    title="About firevy.co"
    category="Company Profile"
    description="Manage About firevy.co profile, vision & mission statements, core values, and corporate milestones."
    publicRoute="/company/about-firevy"
    itemTitle="Core Value"
    itemFields={[
      { name: 'title', label: 'Value Title', type: 'text', required: true },
      { name: 'desc', label: 'Value Description', type: 'textarea', required: true },
      { name: 'icon', label: 'Icon Type / Color', type: 'text' }
    ]}
  />
);

// ============================================================
// 2. CEO MESSAGE (Singleton CMS Editor)
// ============================================================
export const CeoMessageAdminPage = () => (
  <CompanySectionEditor
    slug="ceo-message"
    title="CEO Message & Leadership Spotlight"
    category="Leadership Insight"
    description="Manage CEO message, leadership vision, quote highlights, and executive spotlight video."
    publicRoute="/company/ceo-message"
    hasItems={false}
  />
);

// ============================================================
// 3. OUR TEAM (Collection CRUD)
// ============================================================
export const OurTeamAdminPage = () => {
  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'e.g. Kumaril Patel' },
    { name: 'designation', label: 'Job Designation / Title', type: 'text', required: true, placeholder: 'e.g. CEO & Co-Founder' },
    { name: 'image', label: 'Profile Photo URL', type: 'image', required: true },
    { name: 'department', label: 'Department / Practice', type: 'text', placeholder: 'e.g. Executive Leadership, Mobile Engineering' },
    { name: 'bio', label: 'Biography / Description', type: 'textarea', placeholder: 'Brief professional background and experience...' },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 },
    { name: 'socialLinks', label: 'Social & Contact Details', type: 'object' }
  ];

  const columns = [
    {
      header: 'Team Member',
      field: 'name',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}
            alt={row.name}
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-medium)' }}
          />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.designation}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Department',
      field: 'department',
      sortable: true,
      render: (row) => <Badge variant="cyan">{row.department || 'General'}</Badge>
    },
    {
      header: 'Order',
      field: 'order',
      sortable: true
    },
    {
      header: 'Status',
      field: 'isActive',
      render: (row) => (
        <Badge variant={row.isActive !== false ? 'emerald' : 'slate'}>
          {row.isActive !== false ? 'Active' : 'Hidden'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Our Team & Leadership"
      pageSubtitle="Manage team member profiles, designations, photos, and leadership credentials."
      icon={Users}
      collectionType="team"
      publicRoute="/company/our-team"
      itemTitle="Team Member"
      fields={fields}
      columns={columns}
    />
  );
};

// ============================================================
// 4. EVENTS & ACTIVITIES (Collection CRUD)
// ============================================================
export const EventsActivitiesAdminPage = () => {
  const fields = [
    { name: 'title', label: 'Event Title', type: 'text', required: true, placeholder: 'e.g. Annual Global Tech Summit 2026' },
    { name: 'category', label: 'Category', type: 'text', placeholder: 'e.g. Engineering & Innovation, CSR' },
    { name: 'eventDate', label: 'Event Date', type: 'text', placeholder: 'e.g. February 15, 2026' },
    { name: 'image', label: 'Featured Cover Image', type: 'image', required: true },
    { name: 'shortDescription', label: 'Short Description', type: 'textarea', required: true },
    { name: 'content', label: 'Detailed Event Content', type: 'textarea' },
    { name: 'location', label: 'Event Location', type: 'text', placeholder: 'e.g. Headquarters / Virtual' },
    { name: 'gallery', label: 'Event Photo Gallery', type: 'tags', placeholder: 'Comma-separated image URLs' },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 }
  ];

  const columns = [
    {
      header: 'Event',
      field: 'title',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.image}
            alt={row.title}
            style={{ width: '48px', height: '36px', borderRadius: '6px', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.title}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.eventDate || 'Recent'} · {row.location}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Category',
      field: 'category',
      render: (row) => <Badge variant="cyan">{row.category || 'General'}</Badge>
    },
    {
      header: 'Status',
      field: 'isActive',
      render: (row) => (
        <Badge variant={row.isActive !== false ? 'emerald' : 'slate'}>
          {row.isActive !== false ? 'Active' : 'Draft'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Events & Activities"
      pageSubtitle="Manage company hackathons, tech summits, annual celebrations, and community drives."
      icon={Calendar}
      collectionType="events"
      publicRoute="/company/events-activities"
      itemTitle="Event"
      fields={fields}
      columns={columns}
    />
  );
};

// ============================================================
// 5. BROCHURE (Collection CRUD)
// ============================================================
export const BrochureAdminPage = () => {
  const fields = [
    { name: 'title', label: 'Brochure Title', type: 'text', required: true, placeholder: 'e.g. firevy.co Corporate Brochure 2026' },
    { name: 'thumbnail', label: 'Brochure Thumbnail Image', type: 'image' },
    { name: 'pdfUrl', label: 'PDF Document File / URL', type: 'file', required: true, helpText: 'Upload PDF file or paste public document link.' },
    { name: 'fileSize', label: 'File Size Indicator', type: 'text', placeholder: 'e.g. 4.8 MB' },
    { name: 'category', label: 'Category', type: 'text', placeholder: 'e.g. Corporate Overview, Solutions Guide' },
    { name: 'description', label: 'Description & Summary', type: 'textarea' },
    { name: 'downloadCount', label: 'Downloads Counter', type: 'number', defaultValue: 0 },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 }
  ];

  const columns = [
    {
      header: 'Brochure Document',
      field: 'title',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '6px', background: 'var(--primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', shrink: 0 }}>
            <FileText size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.title}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.fileSize || 'PDF'} · {row.downloadCount || 0} Downloads</div>
          </div>
        </div>
      )
    },
    {
      header: 'Category',
      field: 'category',
      render: (row) => <Badge variant="cyan">{row.category || 'Brochure'}</Badge>
    },
    {
      header: 'Status',
      field: 'isActive',
      render: (row) => (
        <Badge variant={row.isActive !== false ? 'emerald' : 'slate'}>
          {row.isActive !== false ? 'Active' : 'Draft'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Corporate Brochures & Downloads"
      pageSubtitle="Upload and manage downloadable corporate PDFs, solutions guides, and capabilities brochures."
      icon={FileText}
      collectionType="brochures"
      publicRoute="/company/download-brochure"
      itemTitle="Brochure"
      fields={fields}
      columns={columns}
    />
  );
};

// ============================================================
// 6. WHY CHOOSE US (Singleton CMS Editor)
// ============================================================
export const WhyChooseUsAdminPage = () => (
  <CompanySectionEditor
    slug="why-choose-us"
    title="Why Choose firevy.co"
    category="Value Proposition"
    description="Manage differentiator benefit cards, enterprise value propositions, and quality guarantees."
    publicRoute="/company/why-choose-us"
    itemTitle="Differentiator Card"
    itemFields={[
      { name: 'title', label: 'Benefit Title', type: 'text', required: true },
      { name: 'desc', label: 'Detailed Explanation', type: 'textarea', required: true },
      { name: 'icon', label: 'Icon Name', type: 'text' }
    ]}
  />
);

// ============================================================
// 7. GREAT PLACE TO WORK (Singleton CMS Editor)
// ============================================================
export const GreatPlaceToWorkAdminPage = () => (
  <CompanySectionEditor
    slug="great-place-to-work"
    title="Great Place To Work"
    category="Company Culture"
    description="Manage workplace culture highlights, perks, certified badges, and team photo galleries."
    publicRoute="/company/great-place-to-work"
    itemTitle="Culture Pillar"
    itemFields={[
      { name: 'title', label: 'Pillar Title', type: 'text', required: true },
      { name: 'desc', label: 'Description', type: 'textarea', required: true }
    ]}
  />
);

// ============================================================
// 8. WOMEN EMPOWERMENT (Singleton CMS Editor)
// ============================================================
export const WomenEmpowermentAdminPage = () => (
  <CompanySectionEditor
    slug="women-empowerment"
    title="Empowering Women in Tech"
    category="Diversity & Inclusion"
    description="Manage diversity initiatives, women engineering leadership spotlight, and workplace equality metrics."
    publicRoute="/company/women-empowerment"
    itemTitle="Initiative Program"
    itemFields={[
      { name: 'title', label: 'Program Name', type: 'text', required: true },
      { name: 'desc', label: 'Program Overview', type: 'textarea', required: true }
    ]}
  />
);

// ============================================================
// 9. AWARDS & RECOGNITION (Collection CRUD)
// ============================================================
export const AwardsRecognitionAdminPage = () => {
  const fields = [
    { name: 'title', label: 'Award Title', type: 'text', required: true, placeholder: 'e.g. Top Mobile App Developers 2026' },
    { name: 'organization', label: 'Awarding Organization / Portal', type: 'text', required: true, placeholder: 'e.g. Clutch, GoodFirms, The Manifest' },
    { name: 'year', label: 'Year Awarded', type: 'text', defaultValue: '2026' },
    { name: 'image', label: 'Award Badge Image / SVG', type: 'image', required: true },
    { name: 'category', label: 'Category', type: 'text', placeholder: 'e.g. Mobile App Development, Web Engineering' },
    { name: 'description', label: 'Award Synopsis / Citation', type: 'textarea' },
    { name: 'badgeUrl', label: 'Verification / Review Link', type: 'text', placeholder: 'https://clutch.co/profile/...' },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 }
  ];

  const columns = [
    {
      header: 'Award & Organization',
      field: 'title',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.image}
            alt={row.title}
            style={{ width: '40px', height: '40px', objectFit: 'contain', background: 'var(--bg-tertiary)', padding: '4px', borderRadius: '6px' }}
          />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.title}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.organization} · {row.year}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Category',
      field: 'category',
      render: (row) => <Badge variant="cyan">{row.category || 'General'}</Badge>
    },
    {
      header: 'Order',
      field: 'order',
      sortable: true
    },
    {
      header: 'Status',
      field: 'isActive',
      render: (row) => (
        <Badge variant={row.isActive !== false ? 'emerald' : 'slate'}>
          {row.isActive !== false ? 'Active' : 'Draft'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Awards & Recognition"
      pageSubtitle="Manage industry accolades, Clutch badges, GoodFirms recognitions, and ISO certifications."
      icon={Award}
      collectionType="awards"
      publicRoute="/company/awards-recognition"
      itemTitle="Award"
      fields={fields}
      columns={columns}
    />
  );
};

// ============================================================
// 10. INSIGHTFUL VIDEOS (Collection CRUD)
// ============================================================
export const InsightfulVideosAdminPage = () => {
  const fields = [
    { name: 'title', label: 'Video Title', type: 'text', required: true, placeholder: 'e.g. Revolutionizing Diet & Nutrition App Development with AI' },
    { name: 'thumbnail', label: 'Video Thumbnail Cover', type: 'image', required: true },
    { name: 'videoUrl', label: 'Video Embed URL or YouTube Link', type: 'text', required: true, placeholder: 'https://www.youtube.com/watch?v=...' },
    { name: 'industry', label: 'Industry Domain', type: 'text', placeholder: 'e.g. HealthCare, Technology, Utilities' },
    { name: 'duration', label: 'Video Duration', type: 'text', placeholder: 'e.g. 4:20 Min' },
    { name: 'tag', label: 'Tag / Badge', type: 'text', placeholder: 'e.g. HealthCare & AI' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 }
  ];

  const columns = [
    {
      header: 'Video Showcase',
      field: 'title',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ position: 'relative', width: '56px', height: '36px', borderRadius: '4px', overflow: 'hidden' }}>
            <img src={row.thumbnail} alt={row.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.title}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.industry} · {row.duration}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Industry',
      field: 'industry',
      render: (row) => <Badge variant="cyan">{row.industry || 'Technology'}</Badge>
    },
    {
      header: 'Status',
      field: 'isActive',
      render: (row) => (
        <Badge variant={row.isActive !== false ? 'emerald' : 'slate'}>
          {row.isActive !== false ? 'Active' : 'Draft'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Insightful Videos"
      pageSubtitle="Manage client story video showcases, tech walkthroughs, and solution spotlight players."
      icon={Video}
      collectionType="videos"
      publicRoute="/company/insightful-videos"
      itemTitle="Video"
      fields={fields}
      columns={columns}
    />
  );
};

// ============================================================
// 11. BLOG & ARTICLES (Collection CRUD)
// ============================================================
export const BlogAdminPage = () => {
  const fields = [
    { name: 'title', label: 'Article Title', type: 'text', required: true, placeholder: 'e.g. AI in Mobile App Development: Tools That Save Time and Money' },
    { name: 'slug', label: 'URL Slug', type: 'text', placeholder: 'auto-generated from title if blank' },
    { name: 'author', label: 'Author Name', type: 'text', defaultValue: 'Kumaril Patel', required: true },
    { name: 'category', label: 'Category', type: 'text', required: true, placeholder: 'e.g. Artificial Intelligence Development, Mobile Apps' },
    { name: 'featuredImage', label: 'Featured Image URL', type: 'image' },
    { name: 'shortDescription', label: 'Short Excerpt / Synopsis', type: 'textarea', required: true },
    { name: 'content', label: 'Full Article Rich Content', type: 'textarea', rows: 8 },
    { name: 'tags', label: 'Article Tags', type: 'tags', placeholder: 'AI, React Native, Flutter, Cloud' },
    { name: 'readTime', label: 'Read Time Estimate', type: 'text', defaultValue: '5 min read' },
    { name: 'publishDate', label: 'Publish Date', type: 'text', placeholder: 'e.g. March 6, 2026' },
    { name: 'isFeatured', label: 'Feature on Homepage & Blog Top Banner', type: 'checkbox' },
    { name: 'seoTitle', label: 'SEO Meta Title', type: 'text' },
    { name: 'seoDescription', label: 'SEO Meta Description', type: 'textarea', rows: 2 },
    { name: 'seoKeywords', label: 'SEO Meta Keywords', type: 'text' },
    { name: 'status', label: 'Publication Status', type: 'select', options: [{ value: 'published', label: 'Published' }, { value: 'draft', label: 'Draft' }] },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 }
  ];

  const columns = [
    {
      header: 'Article Title',
      field: 'title',
      sortable: true,
      render: (row) => (
        <div>
          <div style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            {row.title}
            {row.isFeatured && <Badge variant="amber">Featured</Badge>}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {row.author} · {row.publishDate || 'Recent'} · {row.readTime || '5 min'}
          </div>
        </div>
      )
    },
    {
      header: 'Category',
      field: 'category',
      sortable: true,
      render: (row) => <Badge variant="cyan">{row.category}</Badge>
    },
    {
      header: 'Status',
      field: 'status',
      render: (row) => (
        <Badge variant={row.status === 'published' ? 'emerald' : 'slate'}>
          {row.status === 'published' ? 'Published' : 'Draft'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Blog & Thought Leadership"
      pageSubtitle="Create, edit, and publish technical insights, software engineering guides, and AI trends."
      icon={BookOpen}
      collectionType="blogs"
      publicRoute="/company/blog"
      itemTitle="Blog Post"
      fields={fields}
      columns={columns}
    />
  );
};

// ============================================================
// 12. CAREERS (Jobs) — Reuses CareersAdminPage.jsx
// ============================================================
export const CareersCompanyAdminPage = () => <CareersAdminPage />;

// ============================================================
// 13. CSR — CORPORATE SOCIAL RESPONSIBILITY (Singleton CMS Editor)
// ============================================================
export const CsrAdminPage = () => (
  <CompanySectionEditor
    slug="csr"
    title="Corporate Social Responsibility (CSR)"
    category="Community & Impact"
    description="Manage संकल्प CSR philosophy, community outreach drives, donation impact stats, and photo highlights."
    publicRoute="/company/csr"
    itemTitle="CSR Initiative"
    itemFields={[
      { name: 'title', label: 'Initiative Title', type: 'text', required: true },
      { name: 'desc', label: 'Description', type: 'textarea', required: true },
      { name: 'img', label: 'Photo URL', type: 'image' }
    ]}
  />
);

// ============================================================
// 14. PODCAST (Collection CRUD)
// ============================================================
export const PodcastAdminPage = () => {
  const fields = [
    { name: 'title', label: 'Podcast Title', type: 'text', required: true, placeholder: 'e.g. Episode 01: The Future of Autonomous AI Squads' },
    { name: 'episodeNumber', label: 'Episode #', type: 'number', defaultValue: 1, required: true },
    { name: 'thumbnail', label: 'Podcast Cover Art', type: 'image', required: true },
    { name: 'audioUrl', label: 'Audio Stream URL (.mp3 / Spotify)', type: 'text' },
    { name: 'videoUrl', label: 'Video Stream URL (YouTube / Vimeo)', type: 'text' },
    { name: 'duration', label: 'Episode Duration', type: 'text', placeholder: 'e.g. 42:15 Min' },
    { name: 'host', label: 'Host & Guest Info', type: 'text', placeholder: 'e.g. Kumaril Patel & Tech Guests' },
    { name: 'description', label: 'Episode Synopsis', type: 'textarea' },
    { name: 'publishDate', label: 'Publish Date', type: 'text', placeholder: 'e.g. February 28, 2026' },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 }
  ];

  const columns = [
    {
      header: 'Episode',
      field: 'title',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.thumbnail}
            alt={row.title}
            style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Ep {row.episodeNumber}: {row.title}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.host || 'firevy.co'} · {row.duration}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Published',
      field: 'publishDate',
      render: (row) => <span style={{ fontSize: '0.8125rem' }}>{row.publishDate || 'Recent'}</span>
    },
    {
      header: 'Status',
      field: 'isActive',
      render: (row) => (
        <Badge variant={row.isActive !== false ? 'emerald' : 'slate'}>
          {row.isActive !== false ? 'Active' : 'Draft'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Tech Podcasts & Audio Streams"
      pageSubtitle="Manage episode releases, audio streams, host spotlights, and cover art."
      icon={Mic}
      collectionType="podcasts"
      publicRoute="/company/podcast"
      itemTitle="Podcast Episode"
      fields={fields}
      columns={columns}
    />
  );
};

// ============================================================
// 15. DELIVERY MODELS (Singleton CMS Editor)
// ============================================================
export const DeliveryModelsAdminPage = () => (
  <CompanySectionEditor
    slug="delivery-models"
    title="Delivery Models"
    category="Business Models"
    description="Manage global delivery frameworks: Offshore Development, Hybrid Delivery, and Dedicated Agile Pods."
    publicRoute="/company/delivery-models"
    itemTitle="Delivery Model"
    itemFields={[
      { name: 'title', label: 'Model Title', type: 'text', required: true },
      { name: 'shortDesc', label: 'Short Summary', type: 'textarea', required: true },
      { name: 'detailedContent', label: 'Detailed Content', type: 'textarea' },
      { name: 'icon', label: 'Icon Name', type: 'text' }
    ]}
  />
);

// ============================================================
// 16. ENGAGEMENT MODELS (Singleton CMS Editor)
// ============================================================
export const EngagementModelsAdminPage = () => (
  <CompanySectionEditor
    slug="engagement-models"
    title="Engagement Models"
    category="Business Models"
    description="Manage flexible pricing structures: Dedicated Developers, Time & Material, and Fixed Price Milestones."
    publicRoute="/company/engagement-models"
    itemTitle="Engagement Model"
    itemFields={[
      { name: 'title', label: 'Model Name', type: 'text', required: true },
      { name: 'shortDesc', label: 'Short Summary', type: 'textarea', required: true },
      { name: 'detailedContent', label: 'Detailed Description', type: 'textarea' },
      { name: 'pricing', label: 'Pricing Terms', type: 'text' },
      { name: 'icon', label: 'Icon Key', type: 'text' }
    ]}
  />
);

// ============================================================
// 17. DEVELOPMENT METHODOLOGY (Singleton CMS Editor)
// ============================================================
export const DevelopmentMethodologyAdminPage = () => (
  <CompanySectionEditor
    slug="development-methodology"
    title="Development Methodology & Process"
    category="Process & SDLC"
    description="Manage the 8-stage software development lifecycle: Agile/Scrum, DevOps CI/CD, QA gates, and cloud deployment."
    publicRoute="/company/development-methodology"
    itemTitle="SDLC Step"
    itemFields={[
      { name: 'step', label: 'Step Number', type: 'number', required: true },
      { name: 'title', label: 'Phase Title', type: 'text', required: true },
      { name: 'desc', label: 'Phase Description & Deliverables', type: 'textarea', required: true }
    ]}
  />
);

// ============================================================
// 18. CLIENT TESTIMONIALS (Collection CRUD)
// ============================================================
export const ClientTestimonialsAdminPage = () => {
  const fields = [
    { name: 'name', label: 'Client / Executive Name', type: 'text', required: true, placeholder: 'e.g. David Mitchell' },
    { name: 'company', label: 'Company / Organization', type: 'text', required: true, placeholder: 'e.g. FinTech Ventures' },
    { name: 'designation', label: 'Designation / Title', type: 'text', placeholder: 'e.g. Chief Information Officer' },
    { name: 'image', label: 'Profile Avatar Photo', type: 'image', required: true },
    { name: 'rating', label: 'Rating (1 to 5)', type: 'number', defaultValue: 5, required: true },
    { name: 'review', label: 'Testimonial Review', type: 'textarea', required: true, rows: 4 },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 }
  ];

  const columns = [
    {
      header: 'Client Executive',
      field: 'name',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.image}
            alt={row.name}
            style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.designation} · {row.company}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Rating',
      field: 'rating',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              fill={i < (row.rating || 5) ? 'var(--primary)' : 'none'}
              color={i < (row.rating || 5) ? 'var(--primary)' : 'var(--border-medium)'}
            />
          ))}
        </div>
      )
    },
    {
      header: 'Review',
      field: 'review',
      render: (row) => (
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          "{row.review}"
        </span>
      )
    },
    {
      header: 'Status',
      field: 'isActive',
      render: (row) => (
        <Badge variant={row.isActive !== false ? 'emerald' : 'slate'}>
          {row.isActive !== false ? 'Active' : 'Draft'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Client Reviews & Testimonials"
      pageSubtitle="Manage verified client feedback, executive testimonials, and satisfaction ratings."
      icon={Quote}
      collectionType="clutch-reviews" // or testimonials
      publicRoute="/company/client-testimonials"
      itemTitle="Testimonial"
      fields={fields}
      columns={columns}
    />
  );
};

// ============================================================
// 19. VIDEO TESTIMONIAL (Collection CRUD)
// ============================================================
export const VideoTestimonialAdminPage = () => {
  const fields = [
    { name: 'clientName', label: 'Client / Speaker Name', type: 'text', required: true, placeholder: 'e.g. David Mitchell' },
    { name: 'company', label: 'Company / Organization', type: 'text', required: true, placeholder: 'e.g. FinTech Global' },
    { name: 'designation', label: 'Designation / Title', type: 'text', placeholder: 'e.g. VP of Product Innovation' },
    { name: 'thumbnail', label: 'Video Thumbnail Cover', type: 'image', required: true },
    { name: 'videoUrl', label: 'Video URL or YouTube Embed', type: 'text', required: true, placeholder: 'https://www.youtube.com/watch?v=...' },
    { name: 'description', label: 'Review Synopsis / Description', type: 'textarea', rows: 3 },
    { name: 'rating', label: 'Rating (1 to 5)', type: 'number', defaultValue: 5 },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 }
  ];

  const columns = [
    {
      header: 'Client & Video',
      field: 'clientName',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ position: 'relative', width: '56px', height: '36px', borderRadius: '4px', overflow: 'hidden' }}>
            <img src={row.thumbnail} alt={row.clientName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.clientName}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.designation} · {row.company}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Company',
      field: 'company',
      render: (row) => <Badge variant="cyan">{row.company}</Badge>
    },
    {
      header: 'Status',
      field: 'isActive',
      render: (row) => (
        <Badge variant={row.isActive !== false ? 'emerald' : 'slate'}>
          {row.isActive !== false ? 'Active' : 'Draft'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Video Testimonial Stories"
      pageSubtitle="Manage client video review interviews, executive praise clips, and case story recordings."
      icon={Play}
      collectionType="video-testimonials"
      publicRoute="/company/video-testimonial"
      itemTitle="Video Testimonial"
      fields={fields}
      columns={columns}
    />
  );
};

// ============================================================
// 20. CLUTCH TESTIMONIAL (Collection CRUD)
// ============================================================
export const ClutchTestimonialAdminPage = () => {
  const fields = [
    { name: 'clientName', label: 'Client / Reviewer Name', type: 'text', required: true, placeholder: 'e.g. AMR ELATTAR' },
    { name: 'company', label: 'Client Company', type: 'text', required: true, placeholder: 'e.g. Enterprise Logistics Corp' },
    { name: 'designation', label: 'Designation / Role', type: 'text', placeholder: 'e.g. Director of Technology' },
    { name: 'location', label: 'Client Location', type: 'text', placeholder: 'e.g. Saudi Arabia, Australia, USA' },
    { name: 'avatar', label: 'Avatar Photo URL', type: 'image' },
    { name: 'rating', label: 'Clutch Star Rating', type: 'number', defaultValue: 5, required: true },
    { name: 'headline', label: 'Review Headline', type: 'text', placeholder: 'e.g. Technical support was extremely responsive...' },
    { name: 'review', label: 'Full Review Body', type: 'textarea', required: true, rows: 4 },
    { name: 'clutchUrl', label: 'Direct Clutch Review Link', type: 'text', placeholder: 'https://clutch.co/profile/firevy' },
    { name: 'scores', label: 'Quality, Schedule, Cost, Refer Scores', type: 'object' },
    { name: 'order', label: 'Display Order', type: 'number', defaultValue: 1 }
  ];

  const columns = [
    {
      header: 'Reviewer & Company',
      field: 'clientName',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'}
            alt={row.clientName}
            style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.clientName}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.company} · {row.location}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Rating',
      field: 'rating',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Star size={13} fill="var(--primary)" color="var(--primary)" />
          <span style={{ fontWeight: 700, fontSize: '0.8125rem' }}>{row.rating || 5.0} / 5.0</span>
        </div>
      )
    },
    {
      header: 'Status',
      field: 'isActive',
      render: (row) => (
        <Badge variant={row.isActive !== false ? 'emerald' : 'slate'}>
          {row.isActive !== false ? 'Active' : 'Draft'}
        </Badge>
      )
    }
  ];

  return (
    <CompanyCrudManager
      pageTitle="Clutch Testimonials & Ratings"
      pageSubtitle="Manage verified Clutch.co reviews, NPS score breakdowns, and client ratings."
      icon={Star}
      collectionType="clutch-reviews"
      publicRoute="/company/clutch-testimonial"
      itemTitle="Clutch Review"
      fields={fields}
      columns={columns}
    />
  );
};
