import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  Search,
  Upload,
  Image as ImageIcon,
  Sparkles,
  BookOpen,
  Layers,
  CheckCircle2,
  RefreshCw,
  X,
  ChevronRight,
  Filter,
  Globe,
  Briefcase,
  FileText,
  Heart,
  ShieldCheck,
  Tag,
  Calendar,
  User,
  Clock,
  ExternalLink,
  MessageSquare,
  Send,
  Sliders,
  Check,
  LayoutGrid,
  List
} from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';
import Badge from '../../UI/Badge';
import Modal from '../../UI/Modal';
import { adminService } from '../../../services/adminService';
import companyService from '../../../services/companyService';
import { getMediaUrl } from '../../../../utils/mediaUrl';
import { useToast } from '../../../context/ToastContext';

// Gradient presets for blog thumbnails & cards
const GRADIENT_PRESETS = [
  { label: 'Deep Indigo / Navy', value: 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]' },
  { label: 'Sky Blue / Indigo', value: 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900' },
  { label: 'Emerald / Slate', value: 'bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900' },
  { label: 'Deep Purple / Slate', value: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900' },
  { label: 'Cyan / Deep Navy', value: 'bg-gradient-to-br from-cyan-600 via-blue-800 to-slate-950' },
  { label: 'Blue / Slate / Indigo', value: 'bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950' },
  { label: 'Sky / Indigo / Slate', value: 'bg-gradient-to-br from-sky-700 via-indigo-900 to-slate-900' },
  { label: 'Purple / Dark Slate', value: 'bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900' },
  { label: 'Teal / Cyan / Dark', value: 'bg-gradient-to-br from-teal-700 via-cyan-900 to-slate-950' }
];

const DEFAULT_CATEGORIES = [
  "Mobile App Development",
  "Software Development",
  "Web Development",
  "IT Companies",
  "Android Development",
  ".Net Development",
  "Hire Developers",
  "iOS Development",
  "Blockchain Development",
  "Artificial Intelligence Development"
];

/**
 * Image Thumbnail Picker with Local File Upload
 */
const ImageThumbnailPicker = ({ label, value, onChange, width = '80px', height = '80px', helperText }) => {
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block' }}>
          {label}
        </label>
      )}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <div
          style={{
            position: 'relative',
            width,
            height,
            borderRadius: '8px',
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
          title="Click to upload image"
        >
          {value ? (
            <img
              src={getMediaUrl(value)}
              alt={label || 'Thumbnail'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/homeinnovation/eleventh.webp';
              }}
            />
          ) : (
            <div style={{ color: '#94A3B8', fontSize: '10px', textAlign: 'center', padding: '4px' }}>
              <ImageIcon size={18} style={{ margin: '0 auto 2px' }} />
              <div>No Img</div>
            </div>
          )}

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
            {uploading ? <RefreshCw size={16} className="animate-spin" /> : <Upload size={16} />}
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', gap: '6px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Image URL or upload file..."
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            style={{ fontSize: '12px' }}
          />
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            style={{ padding: '0 12px', display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}
          >
            {uploading ? <RefreshCw size={13} className="animate-spin" /> : <Upload size={13} />}
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
      {helperText && <span style={{ fontSize: '11px', color: '#94A3B8' }}>{helperText}</span>}
    </div>
  );
};

/**
 * Reusable Spotlight / Insight Card Preview Component
 * Renders the exact visual card layout shown in the live spotlight design:
 * brandText ('firevy.co') + badge ('FEATURED ARTICLE' / 'INSIGHT')
 * topic tag ('</> AI TOOLS') + prominent title
 * subtext with sparkles icon ('✨ Next-Gen Engineering Insights')
 * category · date · readTime
 * excerpt paragraph + buttonText ('Read the full blog →')
 */
export const BlogSpotlightCardPreview = ({
  brandText = 'firevy.co',
  badge = 'FEATURED ARTICLE',
  tag = '</> AI TOOLS',
  title = 'AI in Mobile App Development: Tools That Save Time and Money',
  subtext = 'Next-Gen Engineering Insights',
  category = 'Artificial Intelligence Development',
  date = 'March 6, 2026',
  readTime = '6 min read',
  excerpt = 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development, companies can automate coding, testing, UI/UX design, and efficiency optimization.',
  buttonText = 'Read the full blog',
  image = '',
  gradientBg = 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]',
  maxWidth = '680px',
  compact = false
}) => {
  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 25px rgba(0,0,0,0.10)',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        maxWidth: maxWidth || '100%',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
    >
      {/* Top Banner with Gradient or Image */}
      <div
        className={gradientBg || 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]'}
        style={{
          minHeight: compact ? '180px' : '230px',
          padding: compact ? '16px' : '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {image && (
          <img
            src={getMediaUrl(image)}
            alt={title || 'Preview'}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.4
            }}
          />
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
          <span style={{ fontSize: compact ? '15px' : '18px', fontWeight: 900, color: '#67E8F9', letterSpacing: '-0.2px' }}>
            {brandText || 'firevy.co'}
          </span>
          <span
            style={{
              fontSize: compact ? '9px' : '10px',
              fontWeight: 800,
              backgroundColor: 'rgba(6, 182, 212, 0.2)',
              color: '#A5F3FC',
              padding: '3px 10px',
              borderRadius: '999px',
              border: '1px solid rgba(165, 243, 252, 0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {badge || 'FEATURED ARTICLE'}
          </span>
        </div>

        <div style={{ zIndex: 1, margin: compact ? '10px 0' : '14px 0' }}>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#22D3EE',
              color: '#0F172A',
              fontWeight: 900,
              fontSize: compact ? '10px' : '11px',
              padding: '2px 8px',
              borderRadius: '4px',
              marginBottom: '8px'
            }}
          >
            {tag || '</> TECH'}
          </span>
          <h3
            style={{
              fontSize: compact ? '16px' : '20px',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.3,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: compact ? 2 : 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {title || 'Untitled Article Title'}
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: compact ? '10.5px' : '11px', color: '#C7D2FE', zIndex: 1 }}>
          <Sparkles size={compact ? 12 : 14} style={{ color: '#22D3EE', flexShrink: 0 }} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {subtext || 'Next-Gen Engineering Insights'}
          </span>
        </div>
      </div>

      {/* Bottom White Meta & Narrative Body */}
      <div style={{ padding: compact ? '14px 16px' : '16px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ fontSize: compact ? '11px' : '12px', color: '#0099CC', fontWeight: 800, marginBottom: '6px' }}>
          {category || 'Artificial Intelligence Development'}
          {(date || readTime) && (
            <span style={{ color: '#64748B', fontWeight: 500, marginLeft: '6px' }}>
              · {date} {readTime ? `· ${readTime}` : ''}
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: compact ? '12.5px' : '13.5px',
            color: '#475569',
            lineHeight: 1.5,
            margin: '0 0 10px 0',
            display: '-webkit-box',
            WebkitLineClamp: compact ? 2 : 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {excerpt || 'Short description and overview will be shown here...'}
        </p>
        <span
          style={{
            color: '#0099CC',
            fontWeight: 700,
            fontSize: compact ? '12px' : '13px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          {buttonText || 'Read the full blog'} &rarr;
        </span>
      </div>
    </div>
  );
};

export const BlogsForm = ({
  formData = {},
  onChange,
  subPageMeta,
  pageNumber = 1
}) => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('hero'); // 'hero' | 'secondary' | 'posts' | 'sidebar' | 'cta' | 'seo'

  // Extract nested section data with sensible defaults
  const content = formData.content || {};
  const heroFeatured = content.heroFeatured || formData.heroFeatured || {
    brandText: 'firevy.co',
    badge: 'FEATURED ARTICLE',
    tag: '</> AI TOOLS',
    title: 'AI in Mobile App Development: Tools That Save Time and Money',
    subtext: 'Next-Gen Engineering Insights',
    category: 'Artificial Intelligence Development',
    author: 'Kumaril Patel',
    date: 'March 6, 2026',
    readTime: '6 min read',
    excerpt: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development, companies can automate coding, testing, UI/UX design, and efficiency optimization.',
    buttonText: 'Read the full blog',
    image: '',
    gradientBg: 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]'
  };

  const secondaryFeatured = content.secondaryFeatured || formData.secondaryFeatured || [
    {
      brandText: 'firevy.co',
      badge: 'FEATURED ARTICLE',
      tag: '</> STARTUP',
      title: "Trending Tech Startup Ideas for Entrepreneurs Looking to Scale Fast",
      subtext: "Fast-Growth Scale Strategy",
      category: "IT Companies",
      date: "November 6, 2025",
      readTime: "5 min read",
      excerpt: "Discover high-growth technology startup concepts and execution roadmaps designed to help modern founders move from validation to market leadership.",
      buttonText: "Read the full blog",
      bg: "bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900",
      image: "",
      link: ""
    },
    {
      brandText: 'firevy.co',
      badge: 'FEATURED ARTICLE',
      tag: '</> MOBILE',
      title: "Why Investing in Legacy Modernization Services is Critical for Business Success?",
      subtext: "Enterprise Architecture Evolution",
      category: "Mobile App Development",
      date: "November 4, 2025",
      readTime: "6 min read",
      excerpt: "Legacy modernization unlocks unprecedented operational agility, system security, and scalability for forward-thinking modern enterprises.",
      buttonText: "Read the full blog",
      bg: "bg-gradient-to-r from-sky-700 via-cyan-800 to-slate-900",
      image: "",
      link: ""
    },
    {
      brandText: 'firevy.co',
      badge: 'FEATURED ARTICLE',
      tag: '</> DESIGN',
      title: "Why Software Design Principles Matter for Successful IT Solutions?",
      subtext: "Clean Architecture Principles",
      category: "Software Development",
      date: "October 30, 2025",
      readTime: "6 min read",
      excerpt: "Adhering to proven software design patterns ensures long-term maintainability, defect reduction, and accelerated feature velocity.",
      buttonText: "Read the full blog",
      bg: "bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950",
      image: "",
      link: ""
    },
    {
      brandText: 'firevy.co',
      badge: 'FEATURED ARTICLE',
      tag: '</> WEB TECH',
      title: "How to Scale Your IT Business with White Label Web Development Solutions?",
      subtext: "Partner Growth Solutions",
      category: "Web Development",
      date: "October 31, 2025",
      readTime: "5 min read",
      excerpt: "Leverage dedicated white-label engineering capabilities to expand your service portfolio, increase client retention, and maximize margins.",
      buttonText: "Read the full blog",
      bg: "bg-gradient-to-r from-cyan-900 via-teal-900 to-slate-900",
      image: "",
      link: ""
    }
  ];

  const sidebar = content.sidebar || formData.sidebar || {
    getInTouchTitle: 'Get in Touch',
    buttonText: 'Talk to expert',
    topCategoryTitle: 'Top Category',
    categories: [
      { name: "Mobile App Development", count: 184 },
      { name: "Software Development", count: 134 },
      { name: "Web Development", count: 195 },
      { name: "IT Companies", count: 77 },
      { name: "Android Development", count: 64 },
      { name: ".Net Development", count: 19 },
      { name: "Hire Developers", count: 34 },
      { name: "iOS Development", count: 67 },
      { name: "Blockchain Development", count: 4 },
      { name: "Artificial Intelligence Development", count: 37 }
    ]
  };

  const ctaBanner = content.ctaBanner || formData.ctaBanner || {
    title: "Let's Work Together On Your Next Digital Project",
    subtitle: "Got a project in mind? We'd love to talk about how we can help you build high performance scalable products.",
    buttonText: "Request A Proposal",
    buttonLink: "/contact"
  };

  const newsletter = content.newsletter || formData.newsletter || {
    title: "Subscribe us and Get the latest updates and news",
    subtitle: "Stay updated with our latest insights, innovations, and engineering breakthroughs."
  };

  const seo = formData.seo || {};

  // Root updates helper
  const updateContentField = (key, value) => {
    onChange({
      ...formData,
      [key]: value,
      content: {
        ...formData.content,
        [key]: value
      }
    });
  };

  // -------------------------------------------------------------
  // BLOG POSTS DIRECTORY (Collection CRUD State)
  // -------------------------------------------------------------
  const [blogsList, setBlogsList] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogSearchQuery, setBlogSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'

  // Modals for CRUD
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [viewingPost, setViewingPost] = useState(null);
  const [postToDelete, setPostToDelete] = useState(null);
  const [savingPost, setSavingPost] = useState(false);

  // Form data for creating / editing single blog post
  const [postForm, setPostForm] = useState({
    title: '',
    slug: '',
    author: 'Kumaril Patel',
    category: 'Artificial Intelligence Development',
    brandText: 'firevy.co',
    badge: 'INSIGHT',
    tag: '</> TECH',
    subtext: 'Next-Gen Engineering Insights',
    buttonText: 'Read the full blog',
    featuredImage: '',
    gradientBg: 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900',
    shortDescription: '',
    content: '',
    tags: '',
    readTime: '5 min read',
    publishDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    isFeatured: false,
    status: 'published',
    order: 0,
    isActive: true
  });

  const fetchBlogs = async () => {
    setBlogsLoading(true);
    try {
      const res = await companyService.getItems('blogs');
      if (res && res.data) {
        setBlogsList(res.data);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setBlogsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogsList.filter((b) => {
      const matchesSearch =
        !blogSearchQuery.trim() ||
        b.title?.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
        b.shortDescription?.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
        b.author?.toLowerCase().includes(blogSearchQuery.toLowerCase());
      const matchesCat =
        selectedCategoryFilter === 'All' || b.category === selectedCategoryFilter;
      const matchesStatus =
        selectedStatusFilter === 'All' ||
        (selectedStatusFilter === 'Published' && b.status === 'published' && b.isActive !== false) ||
        (selectedStatusFilter === 'Draft' && (b.status === 'draft' || b.isActive === false));
      return matchesSearch && matchesCat && matchesStatus;
    });
  }, [blogsList, blogSearchQuery, selectedCategoryFilter, selectedStatusFilter]);

  // Open Add Post Modal
  const handleOpenAddPost = () => {
    setEditingPost(null);
    setPostForm({
      title: '',
      slug: '',
      author: 'Kumaril Patel',
      category: 'Artificial Intelligence Development',
      brandText: 'firevy.co',
      badge: 'INSIGHT',
      tag: '</> TECH',
      subtext: 'Next-Gen Engineering Insights',
      buttonText: 'Read the full blog',
      featuredImage: '',
      gradientBg: 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900',
      shortDescription: '',
      content: '',
      tags: '',
      readTime: '5 min read',
      publishDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      isFeatured: false,
      status: 'published',
      order: blogsList.length + 1,
      isActive: true
    });
    setIsFormModalOpen(true);
  };

  // Open Edit Post Modal
  const handleOpenEditPost = (post) => {
    setEditingPost(post);
    setPostForm({
      ...post,
      brandText: post.brandText || 'firevy.co',
      badge: post.badge || 'INSIGHT',
      tag: post.tag || (post.tags?.[0] ? `</> ${post.tags[0]}` : '</> TECH'),
      subtext: post.subtext || 'Next-Gen Engineering Insights',
      buttonText: post.buttonText || 'Read the full blog',
      shortDescription: post.shortDescription || post.excerpt || '',
      publishDate: post.publishDate || post.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      tags: Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags || '')
    });
    setIsFormModalOpen(true);
  };

  // Open View Modal
  const handleOpenViewPost = (post) => {
    setViewingPost(post);
    setIsViewModalOpen(true);
  };

  // Open Delete Modal
  const handleOpenDeletePost = (post) => {
    setPostToDelete(post);
    setIsDeleteModalOpen(true);
  };

  // Toggle active status
  const handleTogglePostStatus = async (post) => {
    try {
      const id = post._id || post.id;
      const res = await companyService.toggleItemStatus('blogs', id);
      if (res && res.data) {
        setBlogsList((prev) => prev.map((p) => ((p._id || p.id) === id ? res.data : p)));
        addToast(`Blog article status toggled successfully`, 'success');
      }
    } catch (err) {
      addToast(`Error: ${err.message}`, 'error');
    }
  };

  // Save (Create or Update) Blog Post
  const handleSavePost = async (e) => {
    if (e) e.preventDefault();
    if (!postForm.title || !postForm.shortDescription || !postForm.category) {
      addToast('Please fill all required fields (Title, Category, Excerpt)', 'warning');
      return;
    }

    setSavingPost(true);
    try {
      const payload = {
        ...postForm,
        tags: typeof postForm.tags === 'string'
          ? postForm.tags.split(',').map((t) => t.trim()).filter(Boolean)
          : postForm.tags
      };

      if (editingPost) {
        const id = editingPost._id || editingPost.id;
        const res = await companyService.updateItem('blogs', id, payload);
        if (res && res.data) {
          setBlogsList((prev) => prev.map((p) => ((p._id || p.id) === id ? res.data : p)));
          addToast('Blog article updated successfully!', 'success');
          setIsFormModalOpen(false);
        }
      } else {
        const res = await companyService.createItem('blogs', payload);
        if (res && res.data) {
          setBlogsList((prev) => [res.data, ...prev]);
          addToast('New blog article published successfully!', 'success');
          setIsFormModalOpen(false);
        }
      }
    } catch (err) {
      addToast(`Save failed: ${err.message}`, 'error');
    } finally {
      setSavingPost(false);
    }
  };

  // Confirm Delete
  const handleConfirmDeletePost = async () => {
    if (!postToDelete) return;
    try {
      const id = postToDelete._id || postToDelete.id;
      await companyService.deleteItem('blogs', id);
      setBlogsList((prev) => prev.filter((p) => (p._id || p.id) !== id));
      addToast('Blog article deleted', 'info');
      setIsDeleteModalOpen(false);
      setPostToDelete(null);
    } catch (err) {
      addToast(`Delete error: ${err.message}`, 'error');
    }
  };

  // Auto-sync category counts
  const handleSyncCategoryCounts = () => {
    const counts = {};
    blogsList.forEach((b) => {
      const cat = b.category || 'General';
      counts[cat] = (counts[cat] || 0) + 1;
    });

    const updatedCategories = (sidebar.categories || []).map((c) => ({
      ...c,
      count: counts[c.name] !== undefined ? counts[c.name] : c.count
    }));

    updateContentField('sidebar', {
      ...sidebar,
      categories: updatedCategories
    });
    addToast('Sidebar category counts synced with current blog posts!', 'success');
  };

  return (
    <div className="cms-form-stack" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Blog & Articles'}
        slug={subPageMeta?.slug || 'blog'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => onChange({ ...formData, status: st })}
        publicRoute={subPageMeta?.publicRoute || '/company/blog'}
      />

      {/* TABS NAVIGATION */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '2px solid #E2E8F0',
          paddingBottom: '2px',
          overflowX: 'auto'
        }}
      >
        {[
          { id: 'hero', label: '1. Featured Main Article', icon: Sparkles },
          { id: 'secondary', label: '2. Secondary 4 Cards', icon: LayoutGrid },
          { id: 'posts', label: `3. All Blog Posts (${blogsList.length})`, icon: BookOpen },
          { id: 'sidebar', label: '4. Sidebar (Get in Touch & Categories)', icon: Sliders },
          { id: 'cta', label: '5. Work Together CTA & Newsletter', icon: Send },
          { id: 'seo', label: '6. SEO & Metadata', icon: Globe }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '8px 8px 0 0',
                border: 'none',
                background: isActive ? '#0099CC' : 'transparent',
                color: isActive ? '#FFFFFF' : '#64748B',
                fontWeight: isActive ? 700 : 500,
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: HERO FEATURED MAIN ARTICLE */}
      {/* ========================================================================= */}
      {activeTab === 'hero' && (
        <AdminFormSection
          title="Hero Featured Main Article (Large Left Banner)"
          subtitle="Configure the primary spotlighted article displayed prominently at the top left of the blog page."
          badge="Main Featured Card"
        >
          {/* Live Preview Box */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '8px', letterSpacing: '0.5px' }}>
              LIVE PREVIEW (HERO SPOTLIGHT CARD)
            </div>
            <BlogSpotlightCardPreview
              brandText={heroFeatured.brandText || 'firevy.co'}
              badge={heroFeatured.badge || 'FEATURED ARTICLE'}
              tag={heroFeatured.tag || '</> AI TOOLS'}
              title={heroFeatured.title || 'AI in Mobile App Development: Tools That Save Time and Money'}
              subtext={heroFeatured.subtext || 'Next-Gen Engineering Insights'}
              category={heroFeatured.category || 'Artificial Intelligence Development'}
              date={heroFeatured.date || 'March 6, 2026'}
              readTime={heroFeatured.readTime || '6 min read'}
              excerpt={heroFeatured.excerpt || 'AI is converting the way businesses accelerate and launch apps...'}
              buttonText={heroFeatured.buttonText || 'Read the full blog'}
              image={heroFeatured.image || ''}
              gradientBg={heroFeatured.gradientBg || 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]'}
              maxWidth="680px"
              compact={false}
            />
          </div>

          <AdminFormGrid columns={2}>
            <AdminFormField label="Brand / Watermark Text" required>
              <input
                type="text"
                className="form-control"
                value={heroFeatured.brandText || 'firevy.co'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, brandText: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Badge Label (Top Right)">
              <input
                type="text"
                className="form-control"
                value={heroFeatured.badge || 'FEATURED ARTICLE'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, badge: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Topic / Pill Tag (e.g. </> AI TOOLS)">
              <input
                type="text"
                className="form-control"
                value={heroFeatured.tag || '</> AI TOOLS'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, tag: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Category Label">
              <select
                className="form-control"
                value={heroFeatured.category || 'Artificial Intelligence Development'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, category: e.target.value })
                }
              >
                {DEFAULT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </AdminFormField>

            <AdminFormField label="Main Spotlight Headline" required fullWidth>
              <input
                type="text"
                className="form-control"
                value={heroFeatured.title || ''}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, title: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Tagline / Footnote (with Sparkle Icon)">
              <input
                type="text"
                className="form-control"
                value={heroFeatured.subtext || 'Next-Gen Engineering Insights'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, subtext: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Author Name">
              <input
                type="text"
                className="form-control"
                value={heroFeatured.author || 'Kumaril Patel'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, author: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Published Date">
              <input
                type="text"
                className="form-control"
                value={heroFeatured.date || 'March 6, 2026'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, date: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Estimated Read Time">
              <input
                type="text"
                className="form-control"
                value={heroFeatured.readTime || '6 min read'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, readTime: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Detailed Narrative Summary / Excerpt" fullWidth required>
              <textarea
                className="form-control"
                rows={3}
                value={heroFeatured.excerpt || ''}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, excerpt: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Read Button Label">
              <input
                type="text"
                className="form-control"
                value={heroFeatured.buttonText || 'Read the full blog'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, buttonText: e.target.value })
                }
              />
            </AdminFormField>

            <AdminFormField label="Banner Card Gradient Theme">
              <select
                className="form-control"
                value={heroFeatured.gradientBg || 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]'}
                onChange={(e) =>
                  updateContentField('heroFeatured', { ...heroFeatured, gradientBg: e.target.value })
                }
              >
                {GRADIENT_PRESETS.map((g) => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
            </AdminFormField>

            <div style={{ gridColumn: 'span 2' }}>
              <ImageThumbnailPicker
                label="Custom Spotlight Background Image (Optional Upload)"
                value={heroFeatured.image || ''}
                onChange={(url) =>
                  updateContentField('heroFeatured', { ...heroFeatured, image: url })
                }
                helperText="Optional: Upload high-res JPG/PNG/WebP banner image, or leave empty to use the vibrant gradient theme."
              />
            </div>
          </AdminFormGrid>
        </AdminFormSection>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SECONDARY 4 FEATURED CARDS (2x2 Grid) */}
      {/* ========================================================================= */}
      {activeTab === 'secondary' && (
        <AdminFormSection
          title="Hero 4 Secondary Featured Cards (2x2 Grid)"
          subtitle="Configure the 4 trending / featured spotlight cards displayed to the right of the main hero banner on the blog page."
          badge="4 Secondary Cards"
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {secondaryFeatured.map((card, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '18px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 3px 12px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Badge variant="cyan">Secondary Card #{idx + 1}</Badge>
                  <span style={{ fontSize: '11px', color: '#94A3B8' }}>Hero 2x2 Grid</span>
                </div>

                {/* Live Card Preview */}
                <div>
                  <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#64748B', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Live Preview (Card #{idx + 1})
                  </div>
                  <BlogSpotlightCardPreview
                    brandText={card.brandText || 'firevy.co'}
                    badge={card.badge || 'FEATURED ARTICLE'}
                    tag={card.tag || '</> TECH'}
                    title={card.title || 'Untitled Card'}
                    subtext={card.subtext || 'Next-Gen Engineering Insights'}
                    category={card.category || 'General'}
                    date={card.date || 'Today'}
                    readTime={card.readTime || '5 min read'}
                    excerpt={card.excerpt || 'Article summary description...'}
                    buttonText={card.buttonText || 'Read the full blog'}
                    image={card.image || ''}
                    gradientBg={card.bg || 'bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900'}
                    compact={true}
                  />
                </div>

                {/* Form Fields for Card */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                      Brand Watermark Text
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={card.brandText || 'firevy.co'}
                      onChange={(e) => {
                        const updated = [...secondaryFeatured];
                        updated[idx] = { ...updated[idx], brandText: e.target.value };
                        updateContentField('secondaryFeatured', updated);
                      }}
                      style={{ fontSize: '12px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                      Badge Label (Top Right)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={card.badge || 'FEATURED ARTICLE'}
                      onChange={(e) => {
                        const updated = [...secondaryFeatured];
                        updated[idx] = { ...updated[idx], badge: e.target.value };
                        updateContentField('secondaryFeatured', updated);
                      }}
                      style={{ fontSize: '12px' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                      Topic Tag Pill (e.g. &lt;/&gt; STARTUP)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={card.tag || '</> TECH'}
                      onChange={(e) => {
                        const updated = [...secondaryFeatured];
                        updated[idx] = { ...updated[idx], tag: e.target.value };
                        updateContentField('secondaryFeatured', updated);
                      }}
                      style={{ fontSize: '12px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                      Tagline / Footnote (with Sparkle)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={card.subtext || 'Next-Gen Engineering Insights'}
                      onChange={(e) => {
                        const updated = [...secondaryFeatured];
                        updated[idx] = { ...updated[idx], subtext: e.target.value };
                        updateContentField('secondaryFeatured', updated);
                      }}
                      style={{ fontSize: '12px' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '11.5px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                    Card Title / Headline
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={card.title || ''}
                    onChange={(e) => {
                      const updated = [...secondaryFeatured];
                      updated[idx] = { ...updated[idx], title: e.target.value };
                      updateContentField('secondaryFeatured', updated);
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <label style={{ fontSize: '11.5px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                      Category
                    </label>
                    <select
                      className="form-control"
                      value={card.category || 'General'}
                      onChange={(e) => {
                        const updated = [...secondaryFeatured];
                        updated[idx] = { ...updated[idx], category: e.target.value };
                        updateContentField('secondaryFeatured', updated);
                      }}
                      style={{ fontSize: '12px' }}
                    >
                      {DEFAULT_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '11.5px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                      Date & Read Time
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={card.date || ''}
                      onChange={(e) => {
                        const updated = [...secondaryFeatured];
                        updated[idx] = { ...updated[idx], date: e.target.value };
                        updateContentField('secondaryFeatured', updated);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '11.5px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                    Short Summary / Excerpt
                  </label>
                  <textarea
                    className="form-control"
                    rows={2}
                    value={card.excerpt || ''}
                    onChange={(e) => {
                      const updated = [...secondaryFeatured];
                      updated[idx] = { ...updated[idx], excerpt: e.target.value };
                      updateContentField('secondaryFeatured', updated);
                    }}
                    style={{ fontSize: '12px' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <label style={{ fontSize: '11.5px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                      Read More Button Text
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={card.buttonText || 'Read the full blog'}
                      onChange={(e) => {
                        const updated = [...secondaryFeatured];
                        updated[idx] = { ...updated[idx], buttonText: e.target.value };
                        updateContentField('secondaryFeatured', updated);
                      }}
                      style={{ fontSize: '12px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '11.5px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                      Gradient Theme
                    </label>
                    <select
                      className="form-control"
                      value={card.bg || 'bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900'}
                      onChange={(e) => {
                        const updated = [...secondaryFeatured];
                        updated[idx] = { ...updated[idx], bg: e.target.value };
                        updateContentField('secondaryFeatured', updated);
                      }}
                      style={{ fontSize: '12px' }}
                    >
                      {GRADIENT_PRESETS.map((g) => (
                        <option key={g.value} value={g.value}>{g.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <ImageThumbnailPicker
                  label="Card Thumbnail Image (Optional Upload)"
                  value={card.image || ''}
                  onChange={(url) => {
                    const updated = [...secondaryFeatured];
                    updated[idx] = { ...updated[idx], image: url };
                    updateContentField('secondaryFeatured', updated);
                  }}
                  helperText="Upload custom card banner image or leave empty to use gradient."
                />
              </div>
            ))}
          </div>
        </AdminFormSection>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: ALL BLOG POSTS (COLLECTION CRUD) */}
      {/* ========================================================================= */}
      {activeTab === 'posts' && (
        <AdminFormSection
          title="All Blog Articles Directory (Full CMS Collection CRUD)"
          subtitle="Create, edit, search, toggle publish status, and manage all articles shown in the 'All Posts' feed."
          badge={`${blogsList.length} Total Articles`}
        >
          {/* Top Controls Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              marginBottom: '20px'
            }}
          >
            {/* Search Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '1', minWidth: '240px' }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                <input
                  type="text"
                  placeholder="Search articles by title, author, or excerpt..."
                  value={blogSearchQuery}
                  onChange={(e) => setBlogSearchQuery(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: '36px', height: '38px', fontSize: '13px' }}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div style={{ minWidth: '180px' }}>
              <select
                className="form-control"
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                style={{ height: '38px', fontSize: '12.5px' }}
              >
                <option value="All">All Categories</option>
                {DEFAULT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div style={{ minWidth: '130px' }}>
              <select
                className="form-control"
                value={selectedStatusFilter}
                onChange={(e) => setSelectedStatusFilter(e.target.value)}
                style={{ height: '38px', fontSize: '12.5px' }}
              >
                <option value="All">All Statuses</option>
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>

            {/* View Mode Switch */}
            <div style={{ display: 'flex', gap: '4px', background: '#FFFFFF', padding: '3px', borderRadius: '8px', border: '1px solid #CBD5E1' }}>
              <button
                type="button"
                className={`btn btn-sm ${viewMode === 'table' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setViewMode('table')}
                style={{ padding: '4px 10px' }}
                title="Table View"
              >
                <List size={14} />
              </button>
              <button
                type="button"
                className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setViewMode('grid')}
                style={{ padding: '4px 10px' }}
                title="Card Grid View"
              >
                <LayoutGrid size={14} />
              </button>
            </div>

            {/* Add New Article Button */}
            <button
              type="button"
              onClick={handleOpenAddPost}
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '38px',
                padding: '0 16px',
                fontWeight: 700,
                fontSize: '13px',
                backgroundColor: '#0099CC'
              }}
            >
              <Plus size={16} />
              <span>Add New Article</span>
            </button>
          </div>

          {/* Table / Grid Rendering */}
          {blogsLoading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
              <RefreshCw size={24} className="animate-spin" style={{ margin: '0 auto 8px', color: '#0099CC' }} />
              <div>Loading articles from database...</div>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '48px 20px',
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                border: '1px dashed #CBD5E1',
                color: '#64748B'
              }}
            >
              <BookOpen size={36} style={{ margin: '0 auto 12px', color: '#94A3B8' }} />
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1E293B', marginBottom: '4px' }}>
                No articles match your filter criteria
              </h4>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '16px' }}>
                Try adjusting your search terms or create a new blog article.
              </p>
              <button
                type="button"
                onClick={handleOpenAddPost}
                className="btn btn-primary btn-sm"
              >
                <Plus size={14} style={{ marginRight: '4px' }} />
                Create First Article
              </button>
            </div>
          ) : viewMode === 'table' ? (
            /* Table View */
            <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <table style={{ width: '100%', minWidth: '960px', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    <th style={{ padding: '12px 10px', width: '45px', textAlign: 'center' }}>#</th>
                    <th style={{ padding: '12px 10px', width: '80px', textAlign: 'center' }}>Visual</th>
                    <th style={{ padding: '12px 16px' }}>Article Details</th>
                    <th style={{ padding: '12px 16px', width: '180px' }}>Category</th>
                    <th style={{ padding: '12px 16px', width: '160px' }}>Author & Date</th>
                    <th style={{ padding: '12px 12px', width: '100px', textAlign: 'center' }}>Status</th>
                    <th style={{ padding: '12px 16px', width: '150px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((post, idx) => (
                    <tr
                      key={post._id || post.id || idx}
                      style={{
                        borderBottom: '1px solid #F1F5F9',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {/* # Index */}
                      <td style={{ padding: '14px 10px', color: '#94A3B8', fontWeight: 700, fontSize: '12px', textAlign: 'center', verticalAlign: 'middle' }}>
                        {idx + 1}
                      </td>

                      {/* Thumbnail / Visual */}
                      <td style={{ padding: '14px 10px', textAlign: 'center', verticalAlign: 'middle' }}>
                        <div
                          className={post.gradientBg || 'bg-gradient-to-br from-sky-600 to-indigo-900'}
                          style={{
                            width: '58px',
                            height: '42px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            border: '1px solid #CBD5E1',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                          }}
                        >
                          {post.featuredImage ? (
                            <img
                              src={getMediaUrl(post.featuredImage)}
                              alt={post.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          ) : (
                            <span style={{ fontSize: '9px', fontWeight: 900, opacity: 0.85, letterSpacing: '-0.2px' }}>firevy</span>
                          )}
                        </div>
                      </td>

                      {/* Title, Excerpt & URL Slug */}
                      <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                        <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '13.5px', marginBottom: '3px', lineHeight: 1.35 }}>
                          {post.title}
                        </div>
                        <div
                          style={{
                            color: '#64748B',
                            fontSize: '12px',
                            lineHeight: 1.4,
                            marginBottom: '6px',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {post.shortDescription || post.excerpt}
                        </div>
                        {post.slug && (
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              maxWidth: '320px',
                              fontSize: '11px',
                              color: '#0284C7',
                              backgroundColor: '#F0F9FF',
                              border: '1px solid #BAE6FD',
                              borderRadius: '4px',
                              padding: '2px 8px'
                            }}
                            title={`/company/blog/${post.slug}`}
                          >
                            <ExternalLink size={10} style={{ flexShrink: 0 }} />
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              /company/blog/{post.slug}
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Category */}
                      <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            backgroundColor: '#ECFEFF',
                            color: '#0891B2',
                            border: '1px solid #A5F3FC',
                            fontSize: '11.5px',
                            fontWeight: 700,
                            padding: '3px 10px',
                            borderRadius: '6px',
                            whiteSpace: 'nowrap',
                            maxWidth: '175px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                          title={post.category}
                        >
                          {post.category}
                        </span>
                      </td>

                      {/* Author & Date */}
                      <td style={{ padding: '14px 16px', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                          <User size={13} style={{ color: '#0099CC', flexShrink: 0 }} />
                          <span>{post.author || 'Kumaril Patel'}</span>
                        </div>
                        <div style={{ color: '#64748B', fontSize: '11.5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Calendar size={12} style={{ color: '#94A3B8', flexShrink: 0 }} />
                          <span>{post.publishDate || post.date || 'August 31, 2026'}</span>
                        </div>
                      </td>

                      {/* Status */}
                      <td style={{ padding: '14px 12px', verticalAlign: 'middle', textAlign: 'center', whiteSpace: 'nowrap' }}>
                        {post.isActive !== false && post.status === 'published' ? (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              backgroundColor: '#ECFDF5',
                              color: '#059669',
                              border: '1px solid #A7F3D0',
                              fontSize: '11.5px',
                              fontWeight: 700,
                              padding: '3px 10px',
                              borderRadius: '999px'
                            }}
                          >
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                            Live
                          </span>
                        ) : (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              backgroundColor: '#F1F5F9',
                              color: '#64748B',
                              border: '1px solid #CBD5E1',
                              fontSize: '11.5px',
                              fontWeight: 700,
                              padding: '3px 10px',
                              borderRadius: '999px'
                            }}
                          >
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#94A3B8' }} />
                            Draft
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '14px 16px', verticalAlign: 'middle', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                          <button
                            type="button"
                            onClick={() => handleOpenViewPost(post)}
                            title="Preview Article"
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '6px',
                              border: '1px solid #E2E8F0',
                              backgroundColor: '#FFFFFF',
                              color: '#0284C7',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#F0F9FF';
                              e.currentTarget.style.borderColor = '#7DD3FC';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#FFFFFF';
                              e.currentTarget.style.borderColor = '#E2E8F0';
                            }}
                          >
                            <Eye size={14} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleOpenEditPost(post)}
                            title="Edit Article"
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '6px',
                              border: '1px solid #E2E8F0',
                              backgroundColor: '#FFFFFF',
                              color: '#4F46E5',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#EEF2FF';
                              e.currentTarget.style.borderColor = '#A5B4FC';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#FFFFFF';
                              e.currentTarget.style.borderColor = '#E2E8F0';
                            }}
                          >
                            <Edit2 size={14} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleTogglePostStatus(post)}
                            title={post.isActive !== false ? 'Deactivate from live site' : 'Publish to live site'}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '6px',
                              border: '1px solid #E2E8F0',
                              backgroundColor: '#FFFFFF',
                              color: post.isActive !== false ? '#10B981' : '#94A3B8',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = post.isActive !== false ? '#ECFDF5' : '#F1F5F9';
                              e.currentTarget.style.borderColor = post.isActive !== false ? '#6EE7B7' : '#94A3B8';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#FFFFFF';
                              e.currentTarget.style.borderColor = '#E2E8F0';
                            }}
                          >
                            {post.isActive !== false ? <Check size={15} /> : <X size={15} />}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleOpenDeletePost(post)}
                            title="Delete Article"
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '6px',
                              border: '1px solid #E2E8F0',
                              backgroundColor: '#FFFFFF',
                              color: '#EF4444',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#FEF2F2';
                              e.currentTarget.style.borderColor = '#FCA5A5';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#FFFFFF';
                              e.currentTarget.style.borderColor = '#E2E8F0';
                            }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* Cards Grid View */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '22px' }}>
              {filteredBlogs.map((post, idx) => (
                <div
                  key={post._id || post.id || idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <BlogSpotlightCardPreview
                    brandText={post.brandText || 'firevy.co'}
                    badge={post.badge || 'INSIGHT'}
                    tag={post.tag || (post.tags?.[0] ? `</> ${post.tags[0]}` : '</> TECH')}
                    title={post.title || 'Untitled Post'}
                    subtext={post.subtext || 'Next-Gen Engineering Insights'}
                    category={post.category || 'General'}
                    date={post.publishDate || post.date || 'August 31, 2026'}
                    readTime={post.readTime || '5 min read'}
                    excerpt={post.shortDescription || post.excerpt || ''}
                    buttonText={post.buttonText || 'Read the full blog'}
                    image={post.featuredImage || ''}
                    gradientBg={post.gradientBg || 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900'}
                    compact={true}
                  />

                  <div
                    style={{
                      padding: '12px 16px',
                      borderTop: '1px solid #F1F5F9',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#FAFAFA'
                    }}
                  >
                    <Badge variant={post.isActive !== false && post.status === 'published' ? 'emerald' : 'slate'}>
                      {post.isActive !== false && post.status === 'published' ? 'Live on Site' : 'Draft'}
                    </Badge>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button type="button" onClick={() => handleOpenViewPost(post)} className="btn btn-ghost btn-icon-sm" title="Preview Article">
                        <Eye size={14} />
                      </button>
                      <button type="button" onClick={() => handleOpenEditPost(post)} className="btn btn-ghost btn-icon-sm" title="Edit Article">
                        <Edit2 size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTogglePostStatus(post)}
                        className="btn btn-ghost btn-icon-sm"
                        title={post.isActive !== false ? 'Deactivate from site' : 'Publish to live site'}
                      >
                        {post.isActive !== false ? <Check size={14} style={{ color: '#10B981' }} /> : <X size={14} style={{ color: '#94A3B8' }} />}
                      </button>
                      <button type="button" onClick={() => handleOpenDeletePost(post)} className="btn btn-ghost btn-icon-sm" style={{ color: '#EF4444' }} title="Delete Article">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </AdminFormSection>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SIDEBAR (GET IN TOUCH & TOP CATEGORIES) */}
      {/* ========================================================================= */}
      {activeTab === 'sidebar' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* 1. GET IN TOUCH BOX */}
          <AdminFormSection
            title="Right Sidebar: 'Get in Touch' Contact Box"
            subtitle="Configure the lead capture form widget displayed on the right sidebar of the blog page."
            badge="Lead Capture Widget"
          >
            <AdminFormGrid columns={2}>
              <AdminFormField label="Widget Box Heading" required>
                <input
                  type="text"
                  className="form-control"
                  value={sidebar.getInTouchTitle || 'Get in Touch'}
                  onChange={(e) =>
                    updateContentField('sidebar', { ...sidebar, getInTouchTitle: e.target.value })
                  }
                />
              </AdminFormField>

              <AdminFormField label="Submit Button Text" required>
                <input
                  type="text"
                  className="form-control"
                  value={sidebar.buttonText || 'Talk to expert'}
                  onChange={(e) =>
                    updateContentField('sidebar', { ...sidebar, buttonText: e.target.value })
                  }
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* 2. TOP CATEGORIES BOX */}
          <AdminFormSection
            title="Right Sidebar: 'Top Category' Navigation Box"
            subtitle="Manage categories and counts displayed in the sidebar. Click the sync button to automatically recalculate counts from your live blog posts!"
            badge="Sidebar Categories"
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
              <button
                type="button"
                onClick={handleSyncCategoryCounts}
                className="btn btn-sm btn-outline-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <RefreshCw size={13} />
                <span>Auto-Calculate Counts from Published Blogs</span>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {(sidebar.categories || []).map((cat, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', width: '24px' }}>
                    #{idx + 1}
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category Name"
                    value={cat.name || ''}
                    onChange={(e) => {
                      const updated = [...(sidebar.categories || [])];
                      updated[idx] = { ...updated[idx], name: e.target.value };
                      updateContentField('sidebar', { ...sidebar, categories: updated });
                    }}
                    style={{ flex: 1 }}
                  />
                  <div style={{ width: '120px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Count"
                      value={cat.count !== undefined ? cat.count : 0}
                      onChange={(e) => {
                        const updated = [...(sidebar.categories || [])];
                        updated[idx] = { ...updated[idx], count: parseInt(e.target.value, 10) || 0 };
                        updateContentField('sidebar', { ...sidebar, categories: updated });
                      }}
                    />
                    <span style={{ fontSize: '11px', color: '#64748B' }}>Blogs</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (sidebar.categories || []).filter((_, i) => i !== idx);
                      updateContentField('sidebar', { ...sidebar, categories: updated });
                    }}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                    title="Remove Category"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => {
                  const updated = [...(sidebar.categories || []), { name: 'New Category', count: 0 }];
                  updateContentField('sidebar', { ...sidebar, categories: updated });
                }}
                className="btn btn-outline-secondary btn-sm"
                style={{ alignSelf: 'flex-start', marginTop: '6px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Plus size={14} />
                <span>Add Category to Sidebar</span>
              </button>
            </div>
          </AdminFormSection>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: WORK TOGETHER CTA & NEWSLETTER */}
      {/* ========================================================================= */}
      {activeTab === 'cta' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* CTA Banner */}
          <AdminFormSection
            title="1. 'Work Together' Digital Project CTA Banner"
            subtitle="Sapphire Blue CTA banner displayed at the bottom of the blog page inviting clients to connect."
            badge="CTA Banner"
          >
            <AdminFormGrid columns={2}>
              <AdminFormField label="Banner Main Heading" required fullWidth>
                <input
                  type="text"
                  className="form-control"
                  value={ctaBanner.title || "Let's Work Together On Your Next Digital Project"}
                  onChange={(e) =>
                    updateContentField('ctaBanner', { ...ctaBanner, title: e.target.value })
                  }
                />
              </AdminFormField>

              <AdminFormField label="Banner Subtitle / Description" fullWidth>
                <textarea
                  className="form-control"
                  rows={2}
                  value={ctaBanner.subtitle || "Got a project in mind? We'd love to talk about how we can help you build high performance scalable products."}
                  onChange={(e) =>
                    updateContentField('ctaBanner', { ...ctaBanner, subtitle: e.target.value })
                  }
                />
              </AdminFormField>

              <AdminFormField label="Button Label" required>
                <input
                  type="text"
                  className="form-control"
                  value={ctaBanner.buttonText || 'Request A Proposal'}
                  onChange={(e) =>
                    updateContentField('ctaBanner', { ...ctaBanner, buttonText: e.target.value })
                  }
                />
              </AdminFormField>

              <AdminFormField label="Button Destination Link" required>
                <input
                  type="text"
                  className="form-control"
                  value={ctaBanner.buttonLink || '/contact'}
                  onChange={(e) =>
                    updateContentField('ctaBanner', { ...ctaBanner, buttonLink: e.target.value })
                  }
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          {/* Newsletter Banner */}
          <AdminFormSection
            title="2. Global Newsletter Subscription Banner"
            subtitle="Subscribe bar displayed directly above the website footer."
            badge="Newsletter Form"
          >
            <AdminFormGrid columns={2}>
              <AdminFormField label="Newsletter Heading" required fullWidth>
                <input
                  type="text"
                  className="form-control"
                  value={newsletter.title || "Subscribe us and Get the latest updates and news"}
                  onChange={(e) =>
                    updateContentField('newsletter', { ...newsletter, title: e.target.value })
                  }
                />
              </AdminFormField>

              <AdminFormField label="Newsletter Subtitle" fullWidth>
                <input
                  type="text"
                  className="form-control"
                  value={newsletter.subtitle || "Stay updated with our latest engineering insights, innovations, and breakthroughs."}
                  onChange={(e) =>
                    updateContentField('newsletter', { ...newsletter, subtitle: e.target.value })
                  }
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: SEO & METADATA */}
      {/* ========================================================================= */}
      {activeTab === 'seo' && (
        <AdminSeoSection
          data={seo}
          onChange={(updated) => onChange({ ...formData, seo: updated })}
        />
      )}

      {/* ========================================================================= */}
      {/* MODAL: ADD / EDIT BLOG ARTICLE */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title={editingPost ? 'Edit Blog Article' : 'Create New Blog Article'}
        maxWidth="860px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button
              type="button"
              onClick={() => setIsFormModalOpen(false)}
              className="btn btn-secondary btn-sm"
              disabled={savingPost}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSavePost}
              className="btn btn-primary btn-sm"
              disabled={savingPost}
              style={{ backgroundColor: '#0099CC' }}
            >
              {savingPost ? (
                <>
                  <RefreshCw size={14} className="animate-spin" style={{ marginRight: '6px' }} />
                  <span>Saving Article...</span>
                </>
              ) : (
                <span>{editingPost ? 'Update Article' : 'Publish Article'}</span>
              )}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSavePost} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Live Interactive Card Preview */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              LIVE PREVIEW (CARD SPOTLIGHT PREVIEW)
            </div>
            <BlogSpotlightCardPreview
              brandText={postForm.brandText || 'firevy.co'}
              badge={postForm.badge || 'INSIGHT'}
              tag={postForm.tag || '</> TECH'}
              title={postForm.title || 'AI in Mobile App Development: Tools That Save Time and Money'}
              subtext={postForm.subtext || 'Next-Gen Engineering Insights'}
              category={postForm.category || 'Artificial Intelligence Development'}
              date={postForm.publishDate || 'March 6, 2026'}
              readTime={postForm.readTime || '5 min read'}
              excerpt={postForm.shortDescription || 'Short description and overview will be shown here...'}
              buttonText={postForm.buttonText || 'Read the full blog'}
              image={postForm.featuredImage || ''}
              gradientBg={postForm.gradientBg || 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900'}
              maxWidth="100%"
              compact={false}
            />
          </div>

          <AdminFormGrid columns={2} gap="14px">
            <AdminFormField label="Brand / Watermark Text" required>
              <input
                type="text"
                className="form-control"
                value={postForm.brandText || 'firevy.co'}
                onChange={(e) => setPostForm({ ...postForm, brandText: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Badge Label (Top Right)">
              <input
                type="text"
                className="form-control"
                value={postForm.badge || 'INSIGHT'}
                onChange={(e) => setPostForm({ ...postForm, badge: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Topic / Pill Tag (e.g. </> AI TOOLS)">
              <input
                type="text"
                className="form-control"
                value={postForm.tag || '</> TECH'}
                onChange={(e) => setPostForm({ ...postForm, tag: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Tagline / Footnote (with Sparkle)">
              <input
                type="text"
                className="form-control"
                value={postForm.subtext || 'Next-Gen Engineering Insights'}
                onChange={(e) => setPostForm({ ...postForm, subtext: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Article Title" required fullWidth>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. AI in Mobile App Development..."
                value={postForm.title || ''}
                onChange={(e) => {
                  const title = e.target.value;
                  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                  setPostForm({
                    ...postForm,
                    title,
                    slug: editingPost ? postForm.slug : slug
                  });
                }}
              />
            </AdminFormField>

            <AdminFormField label="URL Slug" required>
              <input
                type="text"
                className="form-control"
                placeholder="ai-in-mobile-app-development"
                value={postForm.slug || ''}
                onChange={(e) => setPostForm({ ...postForm, slug: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Category" required>
              <select
                className="form-control"
                value={postForm.category || 'Artificial Intelligence Development'}
                onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
              >
                {DEFAULT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </AdminFormField>

            <AdminFormField label="Author Name">
              <input
                type="text"
                className="form-control"
                value={postForm.author || 'Kumaril Patel'}
                onChange={(e) => setPostForm({ ...postForm, author: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Publish Date">
              <input
                type="text"
                className="form-control"
                placeholder="August 31, 2026"
                value={postForm.publishDate || ''}
                onChange={(e) => setPostForm({ ...postForm, publishDate: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Estimated Read Time">
              <input
                type="text"
                className="form-control"
                placeholder="5 min read"
                value={postForm.readTime || '5 min read'}
                onChange={(e) => setPostForm({ ...postForm, readTime: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Read More Button Text">
              <input
                type="text"
                className="form-control"
                value={postForm.buttonText || 'Read the full blog'}
                onChange={(e) => setPostForm({ ...postForm, buttonText: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Card Gradient Theme" fullWidth>
              <select
                className="form-control"
                value={postForm.gradientBg || 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900'}
                onChange={(e) => setPostForm({ ...postForm, gradientBg: e.target.value })}
              >
                {GRADIENT_PRESETS.map((g) => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
            </AdminFormField>

            <div style={{ gridColumn: 'span 2' }}>
              <ImageThumbnailPicker
                label="Featured Thumbnail Image (Upload or Paste URL)"
                value={postForm.featuredImage || ''}
                onChange={(url) => setPostForm({ ...postForm, featuredImage: url })}
                helperText="Optional: Upload an image thumbnail. If empty, the chosen colorful card gradient theme is displayed."
              />
            </div>

            <AdminFormField label="Short Description / Excerpt (Shown on card)" required fullWidth>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Enter 2-3 sentence teaser summary..."
                value={postForm.shortDescription || ''}
                onChange={(e) => setPostForm({ ...postForm, shortDescription: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Full Article Body Content" fullWidth>
              <textarea
                className="form-control"
                rows={6}
                placeholder="Write the complete article content, headings, or markdown..."
                value={postForm.content || ''}
                onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Tags (Comma separated)" fullWidth>
              <input
                type="text"
                className="form-control"
                placeholder="AI, Mobile Apps, Flutter, Enterprise"
                value={postForm.tags || ''}
                onChange={(e) => setPostForm({ ...postForm, tags: e.target.value })}
              />
            </AdminFormField>

            <AdminFormField label="Display Order">
              <input
                type="number"
                className="form-control"
                value={postForm.order || 0}
                onChange={(e) => setPostForm({ ...postForm, order: parseInt(e.target.value, 10) || 0 })}
              />
            </AdminFormField>

            <AdminFormField label="Publish Status">
              <select
                className="form-control"
                value={postForm.status || 'published'}
                onChange={(e) => setPostForm({ ...postForm, status: e.target.value })}
              >
                <option value="published">Published (Live on Website)</option>
                <option value="draft">Draft (Saved in Admin only)</option>
              </select>
            </AdminFormField>
          </AdminFormGrid>
        </form>
      </Modal>

      {/* ========================================================================= */}
      {/* MODAL: VIEW ARTICLE PREVIEW */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title={viewingPost?.title || 'Article Preview'}
        maxWidth="720px"
      >
        {viewingPost && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <BlogSpotlightCardPreview
              brandText={viewingPost.brandText || 'firevy.co'}
              badge={viewingPost.badge || 'INSIGHT'}
              tag={viewingPost.tag || (viewingPost.tags?.[0] ? `</> ${viewingPost.tags[0]}` : '</> TECH')}
              title={viewingPost.title || ''}
              subtext={viewingPost.subtext || 'Next-Gen Engineering Insights'}
              category={viewingPost.category}
              date={viewingPost.publishDate || viewingPost.date}
              readTime={viewingPost.readTime}
              excerpt={viewingPost.shortDescription || viewingPost.excerpt}
              buttonText={viewingPost.buttonText || 'Read the full blog'}
              image={viewingPost.featuredImage}
              gradientBg={viewingPost.gradientBg}
              maxWidth="100%"
              compact={false}
            />

            {viewingPost.content && (
              <div style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                <h5 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Full Article Body:</h5>
                <div style={{ whiteSpace: 'pre-wrap' }}>{viewingPost.content}</div>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* ========================================================================= */}
      {/* MODAL: DELETE CONFIRMATION */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Delete Article"
        maxWidth="440px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button
              type="button"
              onClick={() => setIsDeleteModalOpen(false)}
              className="btn btn-secondary btn-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmDeletePost}
              className="btn btn-sm"
              style={{ backgroundColor: '#EF4444', color: '#FFFFFF' }}
            >
              Delete Article
            </button>
          </div>
        }
      >
        <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>
          Are you sure you want to permanently delete article:
          <br />
          <strong style={{ color: '#0F172A' }}>"{postToDelete?.title}"</strong>?
          <br />
          This action cannot be undone.
        </p>
      </Modal>
    </div>
  );
};

export default BlogsForm;
