import React, { useRef } from 'react';
import { Plus, Trash2, Upload, Image as ImageIcon, ExternalLink, Users, Award, BookOpen, Quote, Sparkles } from 'lucide-react';
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
 * OurTeamForm
 * 
 * Complete Page-Specific CMS Form for "Our Team & Leadership"
 * 100% matched with the live website layout and user specification.
 */
export const OurTeamForm = ({
  formData = {},
  onChange,
  subPageMeta,
  pageNumber = 1
}) => {
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

  const hero = formData.hero || {};
  const content = formData.content || {};

  // 1. Hero Defaults
  const heroTitle = hero.title || formData.title || content.heroTitle || 'Our Team';
  const heroSubtitle = hero.subtitle || formData.subtitle || content.heroSubtitle || 'Meet the team of innovative, driven and passionate individuals. We cultivate the diverse talents of our team and leverage their extraordinary perspectives and innovative ideas to make firevy.co the industry leader.';
  const heroButtonText = hero.ctaText || content.heroButtonText || 'Connect Now';
  const heroButtonLink = hero.ctaLink || content.heroButtonLink || '/contact';

  // 2. Management Team Defaults
  const mgmtHeading = content.managementHeading || 'Management Team';

  // CEO Card
  const ceo = content.ceo || {
    name: 'Mr. Kumaril Patel',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    messageHeading: 'CEO Message',
    paragraphs: [
      "Welcome to firevy.co— a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership is not just about steering the ship but about inspiring every hand on deck to innovate, dream, and achieve. Our success stems from a shared commitment to excellence, where each solution is crafted with purpose and passion. At firevy.co, we don't merely adapt to change; we define it. By blending cutting-edge technology with human ingenuity, we create software solutions that empower businesses and individuals alike. This is not just a company; it's a vision brought to life by a team that dares to dream bigger every day.",
      "Never stop believing in the power of technology that can change the world. One Revolutionary idea... One brilliant Invention can enlighten billions of the Human lives. Nothing is Impossible when you Dream it & believe it you can Do it. Together, let us embrace the challenges and opportunities. Thank you for trusting us to be your partner in progress. Together, we are not just building software —we are creating a legacy of innovation and impact."
    ]
  };

  const handleUpdateCeo = (field, val) => {
    updateContentField('ceo', { ...ceo, [field]: val });
  };

  const handleUpdateCeoParagraph = (pIdx, val) => {
    const updated = [...(ceo.paragraphs || [])];
    updated[pIdx] = val;
    handleUpdateCeo('paragraphs', updated);
  };

  // CTO Card
  const cto = content.cto || {
    name: 'Mr. Rajendra Patel',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    messageHeading: 'CTO Message',
    paragraphs: [
      "At firevy.co, technology is not just a means to an end—it's the essence of our identity and the foundation of our future. As the CTO, my mission is to push the boundaries of innovation, ensuring that every line of code we write and every solution we deliver drives meaningful impact. Our approach is simple yet profound: embrace challenges as opportunities and ideas as catalysts for change. By staying at the forefront of technological advancements and fostering a culture of continuous learning, we empower businesses to thrive in a dynamic digital landscape. Crafting success stories from startups to Fortune 500 stalwarts.",
      "Our dedication to user-centric design and cutting-edge solutions has garnered prestigious accolades. Innovation is a journey, and at firevy.co, we walk that path with purpose and passion, transforming visions into reality and possibilities into achievements. Thank you for trusting us as your technology partner. Together, we are building a smarter, more connected happy world."
    ]
  };

  const handleUpdateCto = (field, val) => {
    updateContentField('cto', { ...cto, [field]: val });
  };

  const handleUpdateCtoParagraph = (pIdx, val) => {
    const updated = [...(cto.paragraphs || [])];
    updated[pIdx] = val;
    handleUpdateCto('paragraphs', updated);
  };

  // Business Heads
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

  const businessHeads = Array.isArray(content.businessHeads) && content.businessHeads.length > 0
    ? content.businessHeads
    : defaultBusinessHeads;

  const handleUpdateBusinessHead = (idx, field, val) => {
    const updated = [...businessHeads];
    updated[idx] = { ...updated[idx], [field]: val };
    updateContentField('businessHeads', updated);
  };

  const handleAddBusinessHead = () => {
    const updated = [
      ...businessHeads,
      {
        name: 'New Business Leader',
        role: 'Business Head',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      }
    ];
    updateContentField('businessHeads', updated);
  };

  const handleDeleteBusinessHead = (idx) => {
    const updated = businessHeads.filter((_, i) => i !== idx);
    updateContentField('businessHeads', updated);
  };

  // 3. Leadership Team (15 Team Leads)
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

  const leadershipTeam = Array.isArray(content.leadershipTeam) && content.leadershipTeam.length > 0
    ? content.leadershipTeam
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
        name: 'New Lead Name',
        role: 'Tech Lead',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80'
      }
    ];
    updateContentField('leadershipTeam', updated);
  };

  const handleDeleteLeader = (idx) => {
    const updated = leadershipTeam.filter((_, i) => i !== idx);
    updateContentField('leadershipTeam', updated);
  };

  // 4. Teamwork Mosaic Banner
  const teamworkHeading = content.teamworkHeading || 'Teamwork Is The Only Way We Work';
  const teamworkButtonText = content.teamworkButtonText || 'Join Our Team';
  const teamworkButtonLink = content.teamworkButtonLink || '/careers';

  // 5. What Our Firevian Says (Employee Testimonial)
  const firevianSay = content.firevianSay || {
    heading: 'What Our Firevian Says',
    name: 'Vipul Patel',
    role: 'Team Lead',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    quote: "I am proud to be working for a company like firevy.co that values honesty and a fair attitude to all which has also contributed to a very valuable and delightful experience. The work culture and the integrity of the company's management are remarkable. In firevy.co, we get all the freedom to think out-of-the-box and take complete ownership of the work we do. Being a client-focused company, firevy.co makes us understand the clients' requirements easily so that the work can be coordinated effectively. There are always opportunities to learn and no limitations to scale new heights in this organization."
  };

  const handleUpdateFirevianSay = (field, val) => {
    updateContentField('firevianSay', { ...firevianSay, [field]: val });
  };

  // 6. Learning & Growth
  const learningGrowth = content.learningGrowth || {
    heading: 'Learning & Growth',
    paragraphs: [
      "Learning and growth go hand-in-hand fundamentally, and so is the story at firevy.co. We offer ample amounts of training to each individual and help them to improve their skills with subject matter specialists from the industry and within the company. We always believe in continuous learning culture so it gives opportunity to achieve better be it, Business interactions, Design Thinking or Technology.",
      "We want our team to grow and develop at firevy.co, meet your career goals and make the most of your potential, all while embracing your own exceptional talents.",
      "That's why we are committed to helping you drive your career in a dynamic environment. Across all levels of our organization, we are nurturing a culture of trust and dialogue. We offer tools to support this culture such as 360 feedback, online coaching and a mutual mentoring program."
    ],
    buttonText: 'Join Our Team',
    buttonLink: '/careers',
    images: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80'
    ]
  };

  const handleUpdateLearning = (field, val) => {
    updateContentField('learningGrowth', { ...learningGrowth, [field]: val });
  };

  const handleUpdateLearningParagraph = (idx, val) => {
    const updated = [...(learningGrowth.paragraphs || [])];
    updated[idx] = val;
    handleUpdateLearning('paragraphs', updated);
  };

  const handleUpdateLearningImage = (idx, val) => {
    const updated = [...(learningGrowth.images || [])];
    updated[idx] = val;
    handleUpdateLearning('images', updated);
  };

  // 7. Team @ firevy.co (2x2 Gallery)
  const lifeAtFirevy = content.lifeAtFirevy || {
    heading: 'Team @ firevy.co',
    description: 'At firevy.co, we have a friendly, inspiring and fun loving yet professional environment. We celebrate all the good moments in terms of our growth and accomplishments. Our closeness always makes us feel strengthened and energetic to improve our actions, to go stress-free, and to work untiringly as a team.',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    ]
  };

  const handleUpdateLife = (field, val) => {
    updateContentField('lifeAtFirevy', { ...lifeAtFirevy, [field]: val });
  };

  const handleUpdateLifeImage = (idx, val) => {
    const updated = [...(lifeAtFirevy.images || [])];
    updated[idx] = val;
    handleUpdateLife('images', updated);
  };

  // 8. Bottom Challenge CTA
  const cta = formData.cta || content.cta || {};
  const ctaTitle = cta.title || 'Ready To Take The Challenge?';
  const ctaSubtitle = cta.subtitle || 'Join our team of passionate and bright technologists. Work in a collaborative environment which will provide you ample growth opportunities and shape the leader in you.';
  const ctaButtonText = cta.buttonText || 'Join Our Team';
  const ctaButtonLink = cta.buttonLink || '/careers';

  // 9. SEO
  const seo = formData.seo || {};

  return (
    <div className="cms-form-stack" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Our Team & Leadership'}
        slug={subPageMeta?.slug || 'our-team'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/our-team'}
      />

      {/* 1. HERO SECTION & INTRODUCTION */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Team directory headline, introduction description, and connect button."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Hero Main Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Our Team"
              value={heroTitle}
              onChange={(e) => {
                const val = e.target.value;
                updateMultiple({
                  title: val,
                  hero: { title: val },
                  content: { heroTitle: val }
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
                placeholder="Button Label (e.g. Connect Now)"
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
                placeholder="Destination Link (e.g. /contact)"
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

          <AdminFormField label="Hero Introduction Narrative" fullWidth>
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
      </AdminFormSection>

      {/* 2. MANAGEMENT TEAM (CEO, CTO, & BUSINESS HEADS) */}
      <AdminFormSection
        title="2. Management Team"
        subtitle="Manage CEO Message Card, CTO Message Card, and Business Heads cards."
        badge="Executive Leadership"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <AdminFormField label="Section Title">
            <input
              type="text"
              className="form-control"
              value={mgmtHeading}
              onChange={(e) => updateContentField('managementHeading', e.target.value)}
              style={{ fontWeight: 800, maxWidth: '400px' }}
            />
          </AdminFormField>

          {/* CEO Card Sub-Editor */}
          <div style={{ padding: '18px 20px', backgroundColor: '#F0F7FA', borderRadius: '12px', border: '1px solid #BAE6FD' }}>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0369A1', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>CEO Message Card (Kumaril Patel)</span>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* CEO Photo with Upload */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '120px',
                    height: '140px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#E2E8F0',
                    border: '1px solid #CBD5E1',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    const input = document.getElementById('ceo-photo-upload');
                    if (input) input.click();
                  }}
                  title="Click to change CEO photo"
                >
                  <img
                    src={getMediaUrl(ceo.image)}
                    alt={ceo.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'; }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0,0,0,0.4)',
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
                    <Upload size={20} />
                  </div>
                </div>

                <input
                  id="ceo-photo-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    try {
                      const res = await adminService.uploadMedia(file, 'image');
                      const url = res?.data?.url || res?.data?.fileUrl || res?.url;
                      if (url) handleUpdateCeo('image', url);
                    } catch (err) {
                      console.error(err);
                    } finally {
                      e.target.value = '';
                    }
                  }}
                />

                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  style={{ fontSize: '11px', padding: '3px 10px' }}
                  onClick={() => document.getElementById('ceo-photo-upload')?.click()}
                >
                  Upload Photo
                </button>
              </div>

              {/* CEO Info & Text */}
              <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <AdminFormGrid columns={3} gap="10px">
                  <AdminFormField label="CEO Full Name">
                    <input
                      type="text"
                      className="form-control"
                      value={ceo.name}
                      onChange={(e) => handleUpdateCeo('name', e.target.value)}
                      style={{ fontWeight: 700 }}
                    />
                  </AdminFormField>
                  <AdminFormField label="CEO Role / Title">
                    <input
                      type="text"
                      className="form-control"
                      value={ceo.role}
                      onChange={(e) => handleUpdateCeo('role', e.target.value)}
                    />
                  </AdminFormField>
                  <AdminFormField label="LinkedIn URL">
                    <input
                      type="text"
                      className="form-control"
                      value={ceo.linkedin || ''}
                      onChange={(e) => handleUpdateCeo('linkedin', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>

                <AdminFormField label="Message Paragraphs" fullWidth>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {(ceo.paragraphs || []).map((p, pIdx) => (
                      <textarea
                        key={pIdx}
                        className="form-control"
                        rows={3}
                        value={p}
                        onChange={(e) => handleUpdateCeoParagraph(pIdx, e.target.value)}
                        placeholder={`Paragraph ${pIdx + 1}...`}
                      />
                    ))}
                  </div>
                </AdminFormField>
              </div>
            </div>
          </div>

          {/* CTO Card Sub-Editor */}
          <div style={{ padding: '18px 20px', backgroundColor: '#F0F7FA', borderRadius: '12px', border: '1px solid #BAE6FD' }}>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0369A1', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>CTO Message Card (Mr. Rajendra Patel)</span>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* CTO Photo with Upload */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '120px',
                    height: '140px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#E2E8F0',
                    border: '1px solid #CBD5E1',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    const input = document.getElementById('cto-photo-upload');
                    if (input) input.click();
                  }}
                  title="Click to change CTO photo"
                >
                  <img
                    src={getMediaUrl(cto.image)}
                    alt={cto.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'; }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0,0,0,0.4)',
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
                    <Upload size={20} />
                  </div>
                </div>

                <input
                  id="cto-photo-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    try {
                      const res = await adminService.uploadMedia(file, 'image');
                      const url = res?.data?.url || res?.data?.fileUrl || res?.url;
                      if (url) handleUpdateCto('image', url);
                    } catch (err) {
                      console.error(err);
                    } finally {
                      e.target.value = '';
                    }
                  }}
                />

                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  style={{ fontSize: '11px', padding: '3px 10px' }}
                  onClick={() => document.getElementById('cto-photo-upload')?.click()}
                >
                  Upload Photo
                </button>
              </div>

              {/* CTO Info & Text */}
              <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <AdminFormGrid columns={3} gap="10px">
                  <AdminFormField label="CTO Full Name">
                    <input
                      type="text"
                      className="form-control"
                      value={cto.name}
                      onChange={(e) => handleUpdateCto('name', e.target.value)}
                      style={{ fontWeight: 700 }}
                    />
                  </AdminFormField>
                  <AdminFormField label="CTO Role / Title">
                    <input
                      type="text"
                      className="form-control"
                      value={cto.role}
                      onChange={(e) => handleUpdateCto('role', e.target.value)}
                    />
                  </AdminFormField>
                  <AdminFormField label="LinkedIn URL">
                    <input
                      type="text"
                      className="form-control"
                      value={cto.linkedin || ''}
                      onChange={(e) => handleUpdateCto('linkedin', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>

                <AdminFormField label="Message Paragraphs" fullWidth>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {(cto.paragraphs || []).map((p, pIdx) => (
                      <textarea
                        key={pIdx}
                        className="form-control"
                        rows={3}
                        value={p}
                        onChange={(e) => handleUpdateCtoParagraph(pIdx, e.target.value)}
                        placeholder={`Paragraph ${pIdx + 1}...`}
                      />
                    ))}
                  </div>
                </AdminFormField>
              </div>
            </div>
          </div>

          {/* Business Heads Cards */}
          <div style={{ padding: '16px 18px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase' }}>
                Business Heads Cards ({businessHeads.length})
              </span>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={handleAddBusinessHead}
                style={{ fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <Plus size={13} />
                <span>Add Business Head</span>
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '14px' }}>
              {businessHeads.map((head, bIdx) => (
                <div
                  key={bIdx}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    padding: '12px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1'
                  }}
                >
                  {/* Photo with upload */}
                  <div
                    style={{
                      width: '60px',
                      height: '70px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#E2E8F0',
                      position: 'relative',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                    onClick={() => {
                      const input = document.getElementById(`head-upload-${bIdx}`);
                      if (input) input.click();
                    }}
                    title="Click to replace photo"
                  >
                    <img
                      src={getMediaUrl(head.image)}
                      alt={head.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'; }}
                    />
                    <input
                      id={`head-upload-${bIdx}`}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        try {
                          const res = await adminService.uploadMedia(file, 'image');
                          const url = res?.data?.url || res?.data?.fileUrl || res?.url;
                          if (url) handleUpdateBusinessHead(bIdx, 'image', url);
                        } catch (err) {
                          console.error(err);
                        } finally {
                          e.target.value = '';
                        }
                      }}
                    />
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Name (e.g. Nirav Patel)"
                      value={head.name}
                      onChange={(e) => handleUpdateBusinessHead(bIdx, 'name', e.target.value)}
                      style={{ fontWeight: 700 }}
                    />
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Role (e.g. Business Head - Product)"
                      value={head.role}
                      onChange={(e) => handleUpdateBusinessHead(bIdx, 'role', e.target.value)}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteBusinessHead(bIdx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* 3. LEADERSHIP TEAM (15 TEAM LEADS GRID) */}
      <AdminFormSection
        title="3. Leadership Team (15 Team Leads Grid)"
        subtitle="Manage the leadership roster cards with names, designations, and portraits."
        badge={`${leadershipTeam.length} Leads`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <AdminFormField label="Section Title">
              <input
                type="text"
                className="form-control"
                value={content.leadershipHeading || 'Leadership Team'}
                onChange={(e) => updateContentField('leadershipHeading', e.target.value)}
                style={{ fontWeight: 800, maxWidth: '300px' }}
              />
            </AdminFormField>

            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={handleAddLeader}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            >
              <Plus size={14} />
              <span>Add Team Lead</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  padding: '10px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                }}
              >
                {/* Photo with click to upload */}
                <div
                  style={{
                    width: '50px',
                    height: '58px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#E2E8F0',
                    position: 'relative',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                  onClick={() => {
                    const input = document.getElementById(`leader-upload-${idx}`);
                    if (input) input.click();
                  }}
                  title="Click to change photo"
                >
                  <img
                    src={getMediaUrl(member.image)}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80'; }}
                  />
                  <input
                    id={`leader-upload-${idx}`}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      try {
                        const res = await adminService.uploadMedia(file, 'image');
                        const url = res?.data?.url || res?.data?.fileUrl || res?.url;
                        if (url) handleUpdateLeader(idx, 'image', url);
                      } catch (err) {
                        console.error(err);
                      } finally {
                        e.target.value = '';
                      }
                    }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Full Name"
                    value={member.name}
                    onChange={(e) => handleUpdateLeader(idx, 'name', e.target.value)}
                    style={{ fontWeight: 700, fontSize: '12.5px' }}
                  />
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Role (e.g. QA Lead)"
                    value={member.role}
                    onChange={(e) => handleUpdateLeader(idx, 'role', e.target.value)}
                    style={{ fontSize: '11.5px', color: '#64748B' }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteLeader(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444', flexShrink: 0 }}
                  title="Delete Lead"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </AdminFormSection>

      {/* 4. TEAMWORK MOSAIC WALL */}
      <AdminFormSection
        title="4. Teamwork Mosaic Wall Banner"
        subtitle="Edge-to-edge duotone mosaic photo wall and recruitment callout."
        badge="Teamwork Wall"
      >
        <AdminFormGrid columns={3} gap="12px">
          <AdminFormField label="Banner Headline" fullWidth>
            <input
              type="text"
              className="form-control"
              value={teamworkHeading}
              onChange={(e) => updateContentField('teamworkHeading', e.target.value)}
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>
          <AdminFormField label="Button Text">
            <input
              type="text"
              className="form-control"
              value={teamworkButtonText}
              onChange={(e) => updateContentField('teamworkButtonText', e.target.value)}
            />
          </AdminFormField>
          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
              value={teamworkButtonLink}
              onChange={(e) => updateContentField('teamworkButtonLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 5. WHAT OUR FIREVIAN SAYS */}
      <AdminFormSection
        title="5. What Our Firevian Says (Employee Testimonial)"
        subtitle="Manage featured team member testimonial quote, avatar, name, and designation."
        badge="Employee Story"
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Avatar with upload */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#E2E8F0',
                border: '2px solid #006B8F',
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={() => document.getElementById('firevian-avatar-upload')?.click()}
              title="Click to change avatar"
            >
              <img
                src={getMediaUrl(firevianSay.image)}
                alt={firevianSay.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'; }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.4)',
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
                <Upload size={18} />
              </div>
            </div>

            <input
              id="firevian-avatar-upload"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                try {
                  const res = await adminService.uploadMedia(file, 'image');
                  const url = res?.data?.url || res?.data?.fileUrl || res?.url;
                  if (url) handleUpdateFirevianSay('image', url);
                } catch (err) {
                  console.error(err);
                } finally {
                  e.target.value = '';
                }
              }}
            />

            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              style={{ fontSize: '11px', padding: '2px 8px' }}
              onClick={() => document.getElementById('firevian-avatar-upload')?.click()}
            >
              Change Photo
            </button>
          </div>

          <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <AdminFormGrid columns={3} gap="10px">
              <AdminFormField label="Section Title">
                <input
                  type="text"
                  className="form-control"
                  value={firevianSay.heading || 'What Our Firevian Says'}
                  onChange={(e) => handleUpdateFirevianSay('heading', e.target.value)}
                  style={{ fontWeight: 700 }}
                />
              </AdminFormField>
              <AdminFormField label="Member Name">
                <input
                  type="text"
                  className="form-control"
                  value={firevianSay.name}
                  onChange={(e) => handleUpdateFirevianSay('name', e.target.value)}
                  style={{ fontWeight: 700 }}
                />
              </AdminFormField>
              <AdminFormField label="Member Role">
                <input
                  type="text"
                  className="form-control"
                  value={firevianSay.role}
                  onChange={(e) => handleUpdateFirevianSay('role', e.target.value)}
                />
              </AdminFormField>
            </AdminFormGrid>

            <AdminFormField label="Testimonial Quote Content" fullWidth>
              <textarea
                className="form-control"
                rows={4}
                value={firevianSay.quote}
                onChange={(e) => handleUpdateFirevianSay('quote', e.target.value)}
                style={{ lineHeight: 1.6 }}
              />
            </AdminFormField>
          </div>
        </div>
      </AdminFormSection>

      {/* 6. LEARNING & GROWTH */}
      <AdminFormSection
        title="6. Learning & Growth Section"
        subtitle="Manage narrative text and the 3 training and recognition photos."
        badge="Growth & Culture"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AdminFormGrid columns={3} gap="12px">
            <AdminFormField label="Section Heading">
              <input
                type="text"
                className="form-control"
                value={learningGrowth.heading || 'Learning & Growth'}
                onChange={(e) => handleUpdateLearning('heading', e.target.value)}
                style={{ fontWeight: 700 }}
              />
            </AdminFormField>
            <AdminFormField label="Button Label">
              <input
                type="text"
                className="form-control"
                value={learningGrowth.buttonText || 'Join Our Team'}
                onChange={(e) => handleUpdateLearning('buttonText', e.target.value)}
              />
            </AdminFormField>
            <AdminFormField label="Button Link">
              <input
                type="text"
                className="form-control"
                value={learningGrowth.buttonLink || '/careers'}
                onChange={(e) => handleUpdateLearning('buttonLink', e.target.value)}
              />
            </AdminFormField>
          </AdminFormGrid>

          <AdminFormField label="Narrative Paragraphs (3 Paragraphs)" fullWidth>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {(learningGrowth.paragraphs || []).map((p, pIdx) => (
                <textarea
                  key={pIdx}
                  className="form-control"
                  rows={3}
                  value={p}
                  onChange={(e) => handleUpdateLearningParagraph(pIdx, e.target.value)}
                  placeholder={`Paragraph ${pIdx + 1}...`}
                />
              ))}
            </div>
          </AdminFormField>

          {/* 3 Photos */}
          <div style={{ padding: '14px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '10px' }}>
              3 Section Collage Photos
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {(learningGrowth.images || []).map((imgUrl, imgIdx) => (
                <div key={imgIdx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div
                    style={{
                      height: '110px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#E2E8F0',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                    onClick={() => document.getElementById(`learning-img-${imgIdx}`)?.click()}
                    title="Click to upload"
                  >
                    <img
                      src={getMediaUrl(imgUrl)}
                      alt={`Learning ${imgIdx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80'; }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
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
                      <Upload size={16} />
                    </div>
                  </div>
                  <input
                    id={`learning-img-${imgIdx}`}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      try {
                        const res = await adminService.uploadMedia(file, 'image');
                        const url = res?.data?.url || res?.data?.fileUrl || res?.url;
                        if (url) handleUpdateLearningImage(imgIdx, url);
                      } catch (err) {
                        console.error(err);
                      } finally {
                        e.target.value = '';
                      }
                    }}
                  />
                  <span style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>
                    Photo #{imgIdx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* 7. TEAM @ FIREVY.CO (2X2 GALLERY) */}
      <AdminFormSection
        title="7. Team @ firevy.co (Photo Grid)"
        subtitle="Manage the heading, culture description, and 4 life-at-firevy gallery photos."
        badge="4 Photos"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <AdminFormField label="Section Title">
            <input
              type="text"
              className="form-control"
              value={lifeAtFirevy.heading || 'Team @ firevy.co'}
              onChange={(e) => handleUpdateLife('heading', e.target.value)}
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>

          <AdminFormField label="Section Description" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={lifeAtFirevy.description}
              onChange={(e) => handleUpdateLife('description', e.target.value)}
            />
          </AdminFormField>

          {/* 4 Gallery Photos */}
          <div style={{ padding: '14px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '10px' }}>
              4 Gallery Photos (2x2 Grid)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {(lifeAtFirevy.images || []).map((imgUrl, imgIdx) => (
                <div key={imgIdx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div
                    style={{
                      height: '110px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#E2E8F0',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                    onClick={() => document.getElementById(`life-img-${imgIdx}`)?.click()}
                    title="Click to upload"
                  >
                    <img
                      src={getMediaUrl(imgUrl)}
                      alt={`Gallery ${imgIdx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'; }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
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
                      <Upload size={16} />
                    </div>
                  </div>
                  <input
                    id={`life-img-${imgIdx}`}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      try {
                        const res = await adminService.uploadMedia(file, 'image');
                        const url = res?.data?.url || res?.data?.fileUrl || res?.url;
                        if (url) handleUpdateLifeImage(imgIdx, url);
                      } catch (err) {
                        console.error(err);
                      } finally {
                        e.target.value = '';
                      }
                    }}
                  />
                  <span style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>
                    Gallery Photo #{imgIdx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* 8. READY TO TAKE THE CHALLENGE (RECRUITMENT CTA BANNER) */}
      <AdminFormSection
        title="8. Recruitment CTA Banner"
        subtitle="The bottom blue 'Ready To Take The Challenge?' banner."
        badge="Bottom CTA"
      >
        <AdminFormGrid columns={2} gap="14px">
          <AdminFormField label="Banner Heading" fullWidth>
            <input
              type="text"
              className="form-control"
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

          <AdminFormField label="Banner Subtitle / Description" fullWidth>
            <textarea
              className="form-control"
              rows={2}
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

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
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

          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
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

      {/* 9. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default OurTeamForm;
