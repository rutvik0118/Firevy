import React, { useState, useMemo } from 'react';
import {
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Search,
  RefreshCw,
  Sparkles,
  Image as ImageIcon,
  Award,
  Globe,
  Star,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Briefcase,
  ShieldCheck,
  Target,
  Heart,
  BookOpen,
  CheckCircle2,
  Zap,
  Rocket,
  Shield,
  Clock,
  ThumbsUp,
  Layers,
  Lightbulb,
  Compass,
  Cpu,
  Check,
  ChevronDown,
  ChevronUp,
  Eye
} from 'lucide-react';
import MediaUploadInput from '../../UI/MediaUploadInput';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

// Available Lucide Icon Dictionary
const ICON_OPTIONS = [
  { label: 'Award (Ribbon / Prize)', value: 'Award', Icon: Award },
  { label: 'Globe (International / Web)', value: 'Globe', Icon: Globe },
  { label: 'Star (Rating / Excellence)', value: 'Star', Icon: Star },
  { label: 'Users (Team / Clients)', value: 'Users', Icon: Users },
  { label: 'Calendar (Experience / Time)', value: 'Calendar', Icon: Calendar },
  { label: 'FileText (BRD / Contract / Cost)', value: 'FileText', Icon: FileText },
  { label: 'Sparkles (Innovation / UI/UX)', value: 'Sparkles', Icon: Sparkles },
  { label: 'MessageSquare (Communication / Guidance)', value: 'MessageSquare', Icon: MessageSquare },
  { label: 'Briefcase (One Stop / Portfolio)', value: 'Briefcase', Icon: Briefcase },
  { label: 'ShieldCheck (Trust / Security)', value: 'ShieldCheck', Icon: ShieldCheck },
  { label: 'Target (Enterprise / Goals)', value: 'Target', Icon: Target },
  { label: 'Heart (Customer Retention / Care)', value: 'Heart', Icon: Heart },
  { label: 'BookOpen (Knowledge / Learning)', value: 'BookOpen', Icon: BookOpen },
  { label: 'CheckCircle2 (Agile / Quality)', value: 'CheckCircle2', Icon: CheckCircle2 },
  { label: 'Zap (Fast / Power)', value: 'Zap', Icon: Zap },
  { label: 'Rocket (Launch / Modern)', value: 'Rocket', Icon: Rocket },
  { label: 'Clock (24/7 / SLAs)', value: 'Clock', Icon: Clock },
  { label: 'ThumbsUp (Recommendations)', value: 'ThumbsUp', Icon: ThumbsUp },
  { label: 'Layers (Architecture / Fullstack)', value: 'Layers', Icon: Layers },
  { label: 'Lightbulb (Ideas / Vision)', value: 'Lightbulb', Icon: Lightbulb },
  { label: 'Compass (Strategy / Direction)', value: 'Compass', Icon: Compass },
  { label: 'Cpu (Tech / Engineering)', value: 'Cpu', Icon: Cpu }
];

const renderIconByName = (name) => {
  const match = ICON_OPTIONS.find((item) => item.value === name);
  if (match) {
    const Component = match.Icon;
    return <Component size={20} className="text-[#00668C]" />;
  }
  return <Award size={20} className="text-[#00668C]" />;
};

// Default 51 Cards baseline
export const DEFAULT_51_WHY_CHOOSE_CARDS = [
  { id: 1, title: 'Fortune 100 clientele', desc: 'Effective solutions with delivering satisfactory outcomes has enabled us to add fortune 100-1000 clients to list.', iconName: 'Award', iconImage: '' },
  { id: 2, title: 'ISO Certified 27001', desc: 'We are an ISO certified company, hence you can expect genuinity with no frauds or misery.', iconName: 'Globe', iconImage: '' },
  { id: 3, title: '1500+ Success Stories', desc: 'Covered 1500+ satisfied clients for the product (education domain) across the globe.', iconName: 'Star', iconImage: '' },
  { id: 4, title: 'Clients Presence', desc: "Clients in more than 25 countries across the globe are advocates of firevy.co's deliverability, quality, and production.", iconName: 'Users', iconImage: '' },
  { id: 5, title: 'Since', desc: '2002! Yes, having presence in market from more than 20 years and still counting. Choosing us benefits you to get your product deployed under expert technicians as per your expectations.', iconName: 'Calendar', iconImage: '' },
  { id: 6, title: 'Awards & Achievements', desc: 'firevy.co is an award winning and well known name in education domain with amazing ranking on google (SEO) and holding more than 15+ awards for the product.', iconName: 'Award', iconImage: '' },
  { id: 7, title: 'No Hidden Costs', desc: 'Pay for what service you get and nothing else. firevy.co has a strict policy of avoiding any additional charges and taking payments once the work is completely done (in freelancing portals).', iconName: 'FileText', iconImage: '' },
  { id: 8, title: 'Recommendations', desc: '127+ verified reviews on clutch platform, top-rated profile on Upwork (100% client retention and satisfaction noted), amongst top 1% players on freelancer portal (Preferred freelancer badge), and some other recommendation on Good firms, cafeteria , and other review platforms.', iconName: 'Sparkles', iconImage: '' },
  { id: 9, title: 'Free Guidance', desc: 'New to web development or app development? please feel free for any guidance or consultation, firevy.co provides it completely free of charge and keeps no charge for guiding or communicating with new clients in the market.', iconName: 'MessageSquare', iconImage: '' },
  { id: 10, title: 'One Stop Shop', desc: 'Tired of finding & paying for individuals with different skills? firevy.co comes up with a one roof solution, enabling you to get everything from designs to QA and support at a single stop. Allow firevy.co to minimize your efforts.', iconName: 'Briefcase', iconImage: '' },
  { id: 11, title: 'Trust', desc: 'Hire firevy.co and get secured. Handover all your worries and concerns to a 23+ years + 270001 ISO-Certified firm and get rid of any frauds or worries. Not only this, Our reputation is our shadow, hence we cannot at all afford ruining our reputation because of any fraud or misbehaves.', iconName: 'ShieldCheck', iconImage: '' },
  { id: 12, title: 'Enterprise Solutions', desc: 'Enterprise solutions quality guaranteed; covered clients with employee strength more than 500000, and their branches spread in more than 300 locations.', iconName: 'Target', iconImage: '' },
  { id: 13, title: 'Customer Retention', desc: "Adani group has been part of firevy.co's client library since 2012.", iconName: 'Heart', iconImage: '' },
  { id: 14, title: 'Proud To Have', desc: '2 decades of experience in education domain and 10+ of experience in Healthcare domain.', iconName: 'Award', iconImage: '' },
  { id: 15, title: 'Diversified Portfolio', desc: 'We provide diversified services in domain industries like: Cement, power, refinery, logistics, engineering, Finance, Automotive, steel, energy, chemicals.', iconName: 'BookOpen', iconImage: '' },
  { id: 16, title: 'Dedicated', desc: 'Facing issues of unavailability from freelancers? firevy.co comes with full time availability with multiple options of developers incase the one gets unavailable.', iconName: 'Users', iconImage: '' },
  { id: 17, title: 'Cost And ROI', desc: 'firevy.co takes care of your budget and helps you to workout even in low budgets, the idea of going for a MVP comes into picture under such scenarios and we proceed with helping you with a model that helps you to generate ROI first.', iconName: 'FileText', iconImage: '' },
  { id: 18, title: 'Boutique Agency', desc: 'Services that firevy.co provides from a single roof includes: Web Development, Mobile App Development, Cloud & DevOps, Product Development, Software Testing & QA, Digital Marketing, Software Maintenance & Support.', iconName: 'Briefcase', iconImage: '' },
  { id: 19, title: 'Domain Expertise', desc: 'firevy.co comes up with attitude of learning though it has been providing its services from last 2 decades. With time we have evolved to latest technologies and languages like flutter, react-native, ML, react JS, Node JS, etc. Making it easy for you to find all under a single roof.', iconName: 'Globe', iconImage: '' },
  { id: 20, title: 'Secured & Safe', desc: 'firevy.co is bound to keep all your data private by signing NDAs We understand sensitivity of project information, and insured to work on high-security/high-safety systems. In this way we will implement essential steps to protect proprietary and personal data.', iconName: 'ShieldCheck', iconImage: '' },
  { id: 21, title: 'Easy Handover', desc: "Honest enough to say 'Sorry, not good fit for you'. Need to switch your preference? please don't hesitate at all. firevy.co provides the complete KT (Knowledge Transfer) to next party keep you updated of everything with an easy exit process.", iconName: 'CheckCircle2', iconImage: '' },
  { id: 22, title: 'Enterprise Apps', desc: 'firevy.co is not only focused on on-demand services apps development. But, also have an expert eye on providing enterprise apps and solution like ERP development, CRM development, CRMS, SaaS product development, and Sharepoint/Ninetex solutions too.', iconName: 'Target', iconImage: '' },
  { id: 23, title: 'Problem Solving', desc: 'firevy.co believes in client satisfaction, hence enables you to work or communicate with techie who would not only provide problem solving approaches, but will also help to make a road map and fulfill your requirement in best possible manner.', iconName: 'Sparkles', iconImage: '' },
  { id: 24, title: 'Strategy Development', desc: "As we follow agile methodology you'll find precise and accurate development strategies, but it is not limited to development strategies, we also focus on after development and client retention strategy which has helped us alot to maintain 100% client retention in past.", iconName: 'CheckCircle2', iconImage: '' },
  { id: 25, title: 'Flexible Availability', desc: '40 hours/week, 8 hours/day. -Available on weekends as well (in case of urgent deliveries) would need to be informed before a day. -Would be working dedicatedly on your projects, reporting to you daily with updates and progress.', iconName: 'Users', iconImage: '' },
  { id: 26, title: 'Cost Optimization', desc: "Choosing firevy.co might be beneficial for you has you can hire a team at a cost of single individual. firevy.co's hourly rate are having wide ranges depending upon what developers you choose. Making you comfortable to choose developers according to the complexity of your task.", iconName: 'FileText', iconImage: '' },
  { id: 27, title: 'Focused On UI/UX', desc: 'User experience is quite important and firevy.co pressures it more. We offer clients to go with an initial milestone of designs only. Finalizing it first, and then proceeding it with the final development after complete satisfaction of your on the designs.', iconName: 'Sparkles', iconImage: '' },
  { id: 28, title: 'Timely Delivery', desc: 'A proven track record of on-time delivery. We decide the deadline of the applications in the initial negotiation phases. Setting the timeframe by considering the time to be taken for debugging and training - Enabling you a get a complete road view of your project before you award.', iconName: 'Calendar', iconImage: '' },
  { id: 29, title: 'Digitization', desc: 'Expanding and working on providing modern tech solutions that can involved with help of Artificial intelligence, Machine learning, Virtual reality, and IoT as well - helping us to transform digitally and be a keen competition in the market.', iconName: 'Globe', iconImage: '' },
  { id: 30, title: 'Cloud Computing', desc: 'World is switching to cloud! Everyone is getting rid of online servers and offline storage stuff. firevy.co comes up with an updated support in cloud technologies as well like AWS, Docker, Jenkins, Oracle, DevOps, and many more.', iconName: 'Target', iconImage: '' },
  { id: 31, title: 'Testing Prototypes', desc: 'We know and understand the importance of testing, hence the testing does not come at the end of the project, but we offer you multiple testing levels like unit testing, prototype testing, UI/UX testing, and deployment testing.', iconName: 'ShieldCheck', iconImage: '' },
  { id: 32, title: 'English Proficiency', desc: 'No miscommunication or language barrier. firevy.co comes up with the best and energetic team completely trained and quoted with proficiency in English from Sales to support. Giving you a very homely feel via easy means of communication.', iconName: 'MessageSquare', iconImage: '' },
  { id: 33, title: 'The BRD Policy', desc: "firevy.co comes up with a policy, where everything would be freezed and pre-written in a BRD (Business requirement document) Work starts only after client's approval on the BRD. Let's avoid the possible communication gaps and any possible future disputes.", iconName: 'FileText', iconImage: '' },
  { id: 34, title: 'Initial Design Milestone', desc: 'Facing trust issues? Worried about your project budgets? Start with firevy.co at just a short milestone for the rough wireframes and mockups! Essure the quality and decide, wanna proceed with us or not. Release the milestone only if satisfied by the work. No need to pay big amounts in name of advance.', iconName: 'CheckCircle2', iconImage: '' },
  { id: 35, title: 'On-Demand POCs', desc: 'Looking for someone who can provide you quickest solution for a on-demand service app (MVPs)? firevy.co is a perfect place to help you with such POCs at cost efficient rates + quickest delivery through white labeling.', iconName: 'Briefcase', iconImage: '' },
  { id: 36, title: 'Always In Touch', desc: "Weather it's clients, partners, people, or prospects, firevy.co believes in staying touch with everyone and look forward for a better and strong relationship.", iconName: 'Heart', iconImage: '' },
  { id: 37, title: 'Innovation', desc: 'Innovation is birth of new Invention . firevy.co comes up with innovative techniques making your projects/products more precise and up to date with adding modern touches.', iconName: 'Sparkles', iconImage: '' },
  { id: 38, title: 'Support Help', desc: 'We do not believe in keeping relations with clients till development only. We believe in maintaining long term and positive relations with clients by providing them the support and maintenance module as well.', iconName: 'ShieldCheck', iconImage: '' },
  { id: 39, title: 'Flexibility', desc: 'firevy.co also offers to work in different timezone , hence making you comfortable by offering our flexibility.', iconName: 'Globe', iconImage: '' },
  { id: 40, title: 'Support & Maintenance', desc: 'We commit (in writing) to provide software configuration, software orientation, software customization, software maintenance and software backup services', iconName: 'Briefcase', iconImage: '' },
  { id: 41, title: 'Application Ownership', desc: "We are a white-label service provider where we commit our clients to provide all Graphics, Source code, and related content as it's their property. They can utilize it even when they plan to scale or need some upgrades etc.", iconName: 'FileText', iconImage: '' },
  { id: 42, title: 'Clear Communication', desc: "Our team does not believe in siting in a room and keeps on coding endlessly. Every developer is confident enough in his/her speech, suggestions and solutions. They are not only limited to answer to your query, but also you'll find a problem solving approach.", iconName: 'MessageSquare', iconImage: '' },
  { id: 43, title: 'Enthusiasm & Passion', desc: "Good interpersonal relationship between business partners directly influences the success of both parties. So when a vendor shows genuine care about the client's success, it's a game-changer.", iconName: 'Users', iconImage: '' },
  { id: 44, title: 'Training Acceptance', desc: "Always a yes from firevy.co side regarding any challenges that come as an hurdle in the development and other phases. Giving you a complete easy to work with environment where every detailed study would be done by firevy.co team. It's an honor to learn new things daily.", iconName: 'CheckCircle2', iconImage: '' },
  { id: 45, title: 'Platform Selection', desc: 'firevy.co helps you to understand the importance of using a particular technology stack with its pros and cons. Letting you to leave all your worries to us and just provide you end results as per your expectations.', iconName: 'Target', iconImage: '' },
  { id: 46, title: 'Quality Assurance', desc: 'QA personnel often perform software testing as soon as developers produce executable code, rather than waiting for the application to be completely coded.', iconName: 'ShieldCheck', iconImage: '' },
  { id: 47, title: 'Evolving Ideas', desc: "It's not always limited to scope or a BRD, No scope document can bound a limit for evolution of new phases in the app. firevy.co helps you to add +1 to your visions, keeping and developing things in a realistic manner.", iconName: 'Sparkles', iconImage: '' },
  { id: 48, title: 'Thought Process', desc: "Your project is our Responsibility; we do it with integrity; and deliver it with honesty - thought process followed by firevy.co since it's existence in the market.", iconName: 'Award', iconImage: '' },
  { id: 49, title: 'Flexible Models', desc: 'We offer clients 3 different models as per their comfort. They can hire developers hourly, dedicatedly, and fixed costs models', iconName: 'Users', iconImage: '' },
  { id: 50, title: 'Result Oriented', desc: 'firevy.co works behind your vision, and makes your vision as its mission and thrive hard to get the results as expected by you.', iconName: 'Target', iconImage: '' },
  { id: 51, title: 'Agility', desc: 'No need to worry of any miscommunication or communication gaps as your project is safe - divided in phases, allocated in sprints, and acknowledged to you via daily reports.', iconName: 'CheckCircle2', iconImage: '' }
];

/**
 * WhyChooseUsForm
 * 
 * Comprehensive Page-Specific CMS Form for "Why Choose Us"
 * Fully dynamic: Hero content + custom graphic upload, Section title/subtitle,
 * 51 feature cards with Lucide icons & custom image upload, CTA banner, Newsletter, and SEO.
 */
export const WhyChooseUsForm = ({
  formData,
  onChange,
  subPageMeta,
  pageNumber = 1
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCardId, setExpandedCardId] = useState(null);

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

  const updateContentField = (field, value) => {
    onChange({
      ...formData,
      content: {
        ...formData.content,
        [field]: value
      }
    });
  };

  // Extract sections from form data
  const hero = formData.hero || {};
  const content = formData.content || {};
  const cta = formData.cta || formData.content?.ctaBanner || {};
  const newsletter = formData.newsletter || formData.content?.newsletter || {};
  const seo = formData.seo || {};

  // Cards array (defaults to 51 cards if empty or legacy 6 cards)
  const cards = useMemo(() => {
    if (Array.isArray(formData.items) && formData.items.length > 6) {
      return formData.items;
    }
    if (Array.isArray(formData.cards) && formData.cards.length > 6) {
      return formData.cards;
    }
    if (Array.isArray(formData.content?.whyChooseUsCards) && formData.content.whyChooseUsCards.length > 6) {
      return formData.content.whyChooseUsCards;
    }
    return DEFAULT_51_WHY_CHOOSE_CARDS;
  }, [formData.items, formData.cards, formData.content]);

  // Sync cards update to all relevant fields
  const syncCards = (updatedCards) => {
    onChange({
      ...formData,
      items: updatedCards,
      cards: updatedCards,
      content: {
        ...formData.content,
        whyChooseUsCards: updatedCards
      }
    });
  };

  // Card actions
  const handleAddCard = () => {
    const newId = cards.length > 0 ? Math.max(...cards.map((c) => c.id || 0)) + 1 : 1;
    const newCard = {
      id: newId,
      title: `Reason #${newId}: Enterprise Reliability`,
      desc: 'Provide details about this competitive differentiator...',
      iconName: 'Award',
      iconImage: ''
    };
    const updated = [newCard, ...cards];
    syncCards(updated);
    setExpandedCardId(newId);
  };

  const handleUpdateCard = (idx, field, val) => {
    const updated = [...cards];
    updated[idx] = { ...updated[idx], [field]: val };
    syncCards(updated);
  };

  const handleDeleteCard = (idx) => {
    const cardTitle = cards[idx]?.title || `Card #${idx + 1}`;
    if (window.confirm(`Are you sure you want to delete "${cardTitle}"?`)) {
      const updated = cards.filter((_, i) => i !== idx);
      syncCards(updated);
    }
  };

  const handleMoveCard = (idx, direction) => {
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= cards.length) return;
    const updated = [...cards];
    const temp = updated[idx];
    updated[idx] = updated[targetIdx];
    updated[targetIdx] = temp;
    syncCards(updated);
  };

  const handleResetToDefault51 = () => {
    if (window.confirm('Reset all cards to the original 51 baseline cards? Any unsaved edits will be replaced with defaults.')) {
      syncCards(DEFAULT_51_WHY_CHOOSE_CARDS);
    }
  };

  // Filtered cards by search query
  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) return cards;
    const q = searchQuery.toLowerCase();
    return cards.filter((c, idx) => {
      const titleMatch = (c.title || '').toLowerCase().includes(q);
      const descMatch = (c.desc || '').toLowerCase().includes(q);
      const numMatch = String(idx + 1) === q.trim() || String(c.id) === q.trim();
      return titleMatch || descMatch || numMatch;
    });
  }, [cards, searchQuery]);

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Why Choose firevy.co'}
        slug={subPageMeta?.slug || 'why-choose-us'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/why-choose-us'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Value Statement"
        subtitle="Headline, introductory subtitle, CTA action button, and hero graphic."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. VALUE PROPOSITION"
              value={hero.badge || formData.badge || 'VALUE PROPOSITION'}
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
              placeholder="e.g. Why Choose firevy.co"
              value={hero.title || formData.title || 'Why Choose firevy.co'}
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
              placeholder="Enter value proposition introduction..."
              value={
                hero.subtitle ||
                formData.subtitle ||
                'We understand the seriousness of your project, and here are the few reasons that why should you join the firevy.co club and get added to the list of 1500+ clients who have been trusting us since 2 decades.'
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
              placeholder="e.g. Connect Us"
              value={hero.ctaText || formData.ctaText || 'Connect Us'}
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

        {/* Hero Graphic / Image Upload */}
        <div style={{ marginTop: '20px', padding: '16px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <div style={{ marginBottom: '8px', fontSize: '13px', fontWeight: 600, color: '#1E293B', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ImageIcon size={16} className="text-[#00668C]" />
            <span>Hero Graphic / Illustration Image</span>
          </div>
          <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '12px' }}>
            Upload a custom 3D isometric graphic, vector SVG, or photo to replace the default isometric laptop illustration on the right side of the hero section.
          </p>
          <MediaUploadInput
            value={formData.heroImage || hero.heroImage || '/images/why-choose-hero.svg'}
            onChange={(url) => {
              updateRootField('heroImage', url);
              updateSection('hero', 'heroImage', url);
            }}
            folder="company/why-choose-us"
            placeholder="Choose or upload Hero Graphic / Illustration..."
          />
        </div>
      </AdminFormSection>

      {/* 2. "WHY FIREVY.CO?" SECTION HEADER */}
      <AdminFormSection
        title='2. "Why firevy.co?" Grid Header'
        subtitle='Main section title and subtitle displayed directly above the 51 feature cards.'
        badge="Section Header"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Title" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Why firevy.co?"
              value={content.sectionHeading || content.heading || 'Why firevy.co?'}
              onChange={(e) => {
                updateContentField('sectionHeading', e.target.value);
                updateContentField('heading', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="Section Subtitle" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Reasons why our clients keep coming back to us"
              value={content.sectionSubtitle || content.subtitle || 'Reasons why our clients keep coming back to us'}
              onChange={(e) => {
                updateContentField('sectionSubtitle', e.target.value);
                updateContentField('subtitle', e.target.value);
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. 51 FEATURE CARDS (FULL CMS MANAGEMENT) */}
      <AdminFormSection
        title="3. Feature & Value Cards (All 51 Reasons)"
        subtitle="Manage all 51 reasons why clients choose us. Customize titles, descriptions, icons, or upload custom card images."
        badge={`${cards.length} Cards Total`}
        action={
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleResetToDefault51}
              className="btn btn-secondary btn-sm"
              title="Reset all cards to original 51 baseline"
            >
              <RefreshCw size={13} />
              <span>Reset 51 Baseline</span>
            </button>
            <button
              type="button"
              onClick={handleAddCard}
              className="btn btn-primary btn-sm"
            >
              <Plus size={14} />
              <span>Add New Reason</span>
            </button>
          </div>
        }
      >
        {/* Search & Stats Bar */}
        <div style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '260px', maxWidth: '450px' }}>
            <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input
              type="text"
              className="form-control"
              style={{ paddingLeft: '34px', fontSize: '13px' }}
              placeholder="Search by title, number, or keyword (e.g. ISO, BRD, Adani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>
            Showing {filteredCards.length} of {cards.length} cards
          </div>
        </div>

        {/* Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredCards.length === 0 ? (
            <div style={{ padding: '36px', textAlign: 'center', color: '#94A3B8', fontSize: '13px', background: '#F8FAFC', borderRadius: '8px' }}>
              No cards found matching "{searchQuery}". Try a different keyword or click "Reset 51 Baseline".
            </div>
          ) : (
            filteredCards.map((card, filteredIdx) => {
              const actualIdx = cards.findIndex((c) => c.id === card.id || c === card);
              const isExpanded = expandedCardId === (card.id || actualIdx);

              return (
                <div
                  key={card.id || actualIdx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    overflow: 'hidden',
                    transition: 'all 0.2s'
                  }}
                >
                  {/* Card Header Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      background: isExpanded ? '#F8FAFC' : '#FFFFFF',
                      borderBottom: isExpanded ? '1px solid #E2E8F0' : 'none',
                      cursor: 'pointer'
                    }}
                    onClick={() => setExpandedCardId(isExpanded ? null : (card.id || actualIdx))}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#00668C',
                          background: '#E6F2F7',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        #{actualIdx + 1}
                      </span>

                      {/* Icon preview or custom image preview */}
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          background: '#F1F5F9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          overflow: 'hidden'
                        }}
                      >
                        {card.iconImage ? (
                          <img
                            src={card.iconImage}
                            alt="icon"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          />
                        ) : (
                          renderIconByName(card.iconName)
                        )}
                      </div>

                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {card.title || 'Untitled Reason'}
                        </div>
                        <div style={{ fontSize: '12px', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {card.desc || 'No description provided'}
                        </div>
                      </div>
                    </div>

                    {/* Action Controls */}
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '12px' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={() => handleMoveCard(actualIdx, 'up')}
                        disabled={actualIdx === 0}
                        className="btn btn-ghost btn-icon-sm"
                        title="Move Up"
                        style={{ opacity: actualIdx === 0 ? 0.3 : 1 }}
                      >
                        <ArrowUp size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveCard(actualIdx, 'down')}
                        disabled={actualIdx === cards.length - 1}
                        className="btn btn-ghost btn-icon-sm"
                        title="Move Down"
                        style={{ opacity: actualIdx === cards.length - 1 ? 0.3 : 1 }}
                      >
                        <ArrowDown size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteCard(actualIdx)}
                        className="btn btn-ghost btn-icon-sm"
                        style={{ color: '#EF4444' }}
                        title="Delete Card"
                      >
                        <Trash2 size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setExpandedCardId(isExpanded ? null : (card.id || actualIdx))}
                        className="btn btn-ghost btn-icon-sm"
                        style={{ color: '#64748B' }}
                      >
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Card Edit Form */}
                  {isExpanded && (
                    <div style={{ padding: '16px', background: '#FFFFFF' }}>
                      <AdminFormGrid columns={2} gap="14px">
                        <AdminFormField label="Card Title" required>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Fortune 100 clientele"
                            value={card.title || ''}
                            onChange={(e) => handleUpdateCard(actualIdx, 'title', e.target.value)}
                          />
                        </AdminFormField>

                        <AdminFormField label="Icon (Select from Lucide Icons)">
                          <select
                            className="form-control"
                            value={card.iconName || 'Award'}
                            onChange={(e) => handleUpdateCard(actualIdx, 'iconName', e.target.value)}
                          >
                            {ICON_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </AdminFormField>

                        <AdminFormField label="Card Description / Narrative" fullWidth required>
                          <textarea
                            className="form-control"
                            rows={3}
                            placeholder="Explain this reason / value guarantee..."
                            value={card.desc || ''}
                            onChange={(e) => handleUpdateCard(actualIdx, 'desc', e.target.value)}
                          />
                        </AdminFormField>
                      </AdminFormGrid>

                      {/* Custom Icon/Card Image Upload */}
                      <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px dashed #E2E8F0' }}>
                        <div style={{ marginBottom: '6px', fontSize: '12px', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <ImageIcon size={14} className="text-[#00668C]" />
                          <span>Custom Icon or Card Image (Optional override)</span>
                        </div>
                        <p style={{ fontSize: '11px', color: '#64748B', marginBottom: '8px' }}>
                          Upload a custom SVG, PNG icon, or brand graphic for this card. If uploaded, this custom image will render instead of the Lucide icon.
                        </p>
                        <MediaUploadInput
                          value={card.iconImage || card.image || ''}
                          onChange={(url) => {
                            handleUpdateCard(actualIdx, 'iconImage', url);
                            handleUpdateCard(actualIdx, 'image', url);
                          }}
                          folder="company/why-choose-us/cards"
                          placeholder="Upload custom icon or image for this card..."
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </AdminFormSection>

      {/* 4. READY TO GET STARTED CTA BANNER */}
      <AdminFormSection
        title='4. "Ready To Get Started?" CTA Banner'
        subtitle="Call-to-action banner at the bottom of the page encouraging visitors to start a conversation."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Ready To Get Started?"
              value={cta.title || 'Ready To Get Started?'}
              onChange={(e) => {
                updateSection('cta', 'title', e.target.value);
                updateContentField('ctaBanner', { ...cta, title: e.target.value });
              }}
            />
          </AdminFormField>

          <AdminFormField label="Button Text">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. TALK TO TECH EXPERT"
              value={cta.buttonText || 'TALK TO TECH EXPERT'}
              onChange={(e) => {
                updateSection('cta', 'buttonText', e.target.value);
                updateContentField('ctaBanner', { ...cta, buttonText: e.target.value });
              }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              placeholder="Learn how firevy.co can help you build better relationships with your customers..."
              value={cta.subtitle || 'Learn how firevy.co can help you build better relationships with your customers. Start a conversation today.'}
              onChange={(e) => {
                updateSection('cta', 'subtitle', e.target.value);
                updateContentField('ctaBanner', { ...cta, subtitle: e.target.value });
              }}
            />
          </AdminFormField>

          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={cta.buttonLink || '/contact'}
              onChange={(e) => {
                updateSection('cta', 'buttonLink', e.target.value);
                updateContentField('ctaBanner', { ...cta, buttonLink: e.target.value });
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 5. NEWSLETTER SUBSCRIPTION BANNER */}
      <AdminFormSection
        title="5. Newsletter Subscription Banner"
        subtitle="Subscription title encouraging visitors to stay updated with latest company news."
        badge="Newsletter"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Newsletter Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Subscribe us and Get the latest updates and news"
              value={newsletter.title || 'Subscribe us and Get the latest updates and news'}
              onChange={(e) => {
                updateSection('newsletter', 'title', e.target.value);
                updateContentField('newsletter', { ...newsletter, title: e.target.value });
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 6. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default WhyChooseUsForm;
