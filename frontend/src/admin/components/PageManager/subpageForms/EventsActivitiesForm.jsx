import React, { useState, useRef } from 'react';
import { Plus, Trash2, Upload, Image as ImageIcon, Loader2, RotateCcw, Calendar, Eye, Sparkles, X } from 'lucide-react';
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
  width = '80px',
  height = '80px',
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block' }}>
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
            borderRadius: shape === 'circle' ? '50%' : '8px',
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
                e.target.src = '/images/events-hero.svg';
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

        {/* Input & Upload Button */}
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
 * InteractivePhotoCard
 * 
 * Rich in-grid dynamic photo card with direct upload, inline caption editing,
 * URL prompt, and delete button.
 */
const InteractivePhotoCard = ({ item, index, onUpdatePhoto, onDeletePhoto }) => {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await adminService.uploadMedia(file, 'image');
      const url = res?.data?.url || res?.data?.fileUrl || res?.url;
      if (url) onUpdatePhoto(index, 'img', url);
    } catch (err) {
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #E2E8F0',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        position: 'relative'
      }}
    >
      {/* Top Header overlay with #Index badge and Delete button */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          right: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <span
          style={{
            background: 'rgba(0,0,0,0.65)',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 800,
            padding: '2px 8px',
            borderRadius: '12px',
            backdropFilter: 'blur(4px)'
          }}
        >
          #{index + 1}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDeletePhoto(index);
          }}
          style={{
            pointerEvents: 'auto',
            background: 'rgba(239, 68, 68, 0.9)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
            transition: 'all 0.2s ease'
          }}
          title="Delete photo"
        >
          <Trash2 size={13} />
        </button>
      </div>

      {/* Image Container with Click / Hover Upload Overlay */}
      <div
        style={{
          position: 'relative',
          height: '170px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#F1F5F9',
          cursor: 'pointer'
        }}
        onClick={() => fileInputRef.current?.click()}
        title="Click photo to upload a new image from your device"
      >
        <img
          src={getMediaUrl(item.img)}
          alt={item.title || 'Event Photo'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Hover Upload Indicator */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.48)',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.2s ease',
            gap: '6px'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
        >
          {uploading ? (
            <>
              <Loader2 size={22} className="animate-spin" />
              <span style={{ fontSize: '11px', fontWeight: 700 }}>Uploading...</span>
            </>
          ) : (
            <>
              <Upload size={22} />
              <span style={{ fontSize: '11.5px', fontWeight: 800 }}>Click to Change Photo</span>
              <span style={{ fontSize: '10px', opacity: 0.85 }}>Supports PNG, JPG, WebP</span>
            </>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,.png,.jpg,.jpeg,.webp,.svg"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>

      {/* Editable Caption & Options */}
      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, backgroundColor: '#FFFFFF' }}>
        <div>
          <label style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
            Caption / Title:
          </label>
          <input
            type="text"
            className="form-control"
            value={item.title || ''}
            onChange={(e) => onUpdatePhoto(index, 'title', e.target.value)}
            placeholder="e.g. Office Tech Team at Work"
            style={{ fontSize: '12.5px', fontWeight: 600, color: '#0F172A' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
          <button
            type="button"
            className="btn btn-link p-0"
            onClick={(e) => {
              e.stopPropagation();
              setShowUrlInput(!showUrlInput);
            }}
            style={{ fontSize: '11px', color: '#0099CC', textDecoration: 'none', fontWeight: 700 }}
          >
            {showUrlInput ? '▼ Hide URL Input' : '▶ Edit Direct URL'}
          </button>

          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            style={{ fontSize: '11px', padding: '2px 8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <Upload size={12} />
            <span>Replace</span>
          </button>
        </div>

        {showUrlInput && (
          <div style={{ marginTop: '4px' }}>
            <input
              type="text"
              className="form-control"
              value={item.img || ''}
              onChange={(e) => onUpdatePhoto(index, 'img', e.target.value)}
              placeholder="Paste https://... or /images/..."
              style={{ fontSize: '11px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const defaultEventGalleryData = {
  '2026': [
    { id: 1, title: 'Office Tech Team at Work', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Team Meeting & Brainstorming', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Hands on Laptop Meeting', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Large Conference & Seminar Hall', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Office Lounge Presentation', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Balloons & Party Celebrations', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
    { id: 7, title: 'Smiling Colleague Portrait', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
    { id: 8, title: 'Decorated Celebration Banquet', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' },
    { id: 9, title: 'Team Outdoor Retreat by Water', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' },
    { id: 10, title: 'Community & Smiles Outreach', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80' }
  ],
  '2025': [
    { id: 1, title: 'Annual Tech Team Summit', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Excellence Award Ceremony', img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Sports & Cricket League Winners', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Office Cultural Fest', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Birthday & Milestone Celebration', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Leadership Felicitation & Recognition', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
    { id: 7, title: 'Cake Cutting & Team Party', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' },
    { id: 8, title: 'Executive Directors Gathering', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' }
  ],
  '2024': [
    { id: 1, title: 'Annual Outing & Resort Retreat', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Global AI Hackathon Champions', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Diwali & Festival Celebrations', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Team Appreciation Awards', img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80' }
  ],
  '2023': [
    { id: 1, title: 'Annual Gala & Foundation Day', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Tech Hackathon 2023 Showcase', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Client Appreciation & Meet', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Office Diwali Lights & Festivity', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Mountain Trekking & Team Camp', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Company Milestone Celebration', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' }
  ],
  '2022': [
    { id: 1, title: 'Grand Welcome Back & Reconnect', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Annual Sports League & Cricket', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Innovators & Coders Meetup', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Cultural Day & Traditional Attire', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Year End Holiday Celebration Dinner', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Team Lunch & Fun Games', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' }
  ],
  '2021': [
    { id: 1, title: 'Virtual & Hybrid Global Summit', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Project Milestone Delivery Party', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Independence Day Flag Hoisting', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Diwali Celebration & Team Gifts', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Team Bonding & Skill Workshop', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Annual Recognition Awards 2021', img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80' }
  ],
  '2020': [
    { id: 1, title: 'Annual Kickoff & Vision 2020', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Work From Anywhere Meetup', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Festival Celebrations & Treats', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'New Office Expansion Celebration', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' }
  ],
  '2019': [
    { id: 1, title: '5-Year Foundation Anniversary', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Goa Annual Company Trip & Beach Retreat', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Christmas & New Year Celebration', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Team Bowling & Gaming Night', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' }
  ],
  '2018': [
    { id: 1, title: 'Excellence in Tech Awards 2018', img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Summer Outdoor Picnic', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Diwali Lights & Music Fest', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Annual Developers Conference', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' }
  ],
  '2017': [
    { id: 1, title: 'Team Growth & New Wing Opening', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Outdoor Adventure Camp', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Festival of Colors Holi Party', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Annual Day Celebrations 2017', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' }
  ],
  '2016': [
    { id: 1, title: 'First Big Milestone Party', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Office Inauguration & Puja', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Hackathon & Pizza Night', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Year End Gala Dinner 2016', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' }
  ],
  '2015': [
    { id: 1, title: 'Company Founding Day & Journey Begins', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'First Team Gathering & Coffee', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Initial Product Launch Celebration', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Celebration with Early Believers', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80' }
  ]
};

const defaultYears = ['2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];

/**
 * EventsActivitiesForm
 * 
 * Complete Page-Specific CMS Form for "Events & Activities" (Events & Celebrations)
 * Identically matching the live website structure, year selector, and photo gallery.
 */
export const EventsActivitiesForm = ({
  formData,
  onChange,
  subPageMeta,
  pageNumber = 4
}) => {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [newYearInput, setNewYearInput] = useState('');

  // State update helpers
  const updateContentField = (field, value) => {
    onChange({
      ...formData,
      content: {
        ...(formData.content || {}),
        [field]: value
      }
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

  const updateRootField = (field, value) => {
    onChange({
      ...formData,
      [field]: value
    });
  };

  const rawContent = formData.content || {};

  // 1. Dynamic Years State
  const currentYears = (Array.isArray(rawContent.years) && rawContent.years.length > 0)
    ? rawContent.years
    : defaultYears;

  const effectiveSelectedYear = currentYears.includes(selectedYear)
    ? selectedYear
    : (currentYears[0] || '2026');

  // 2. Hero State
  const hero = {
    title: formData.hero?.title || rawContent.heroHeading || 'Events & Celebrations',
    subtitle: formData.hero?.subtitle || rawContent.heroSubtitle || 'At firevy.co, we believe that celebrating success is just as important as achieving it. From casual dress-down days and monthly celebrations enjoy the celebration.',
    ctaText: formData.hero?.ctaText || rawContent.heroButtonText || "Let's Talk",
    ctaLink: formData.hero?.ctaLink || rawContent.heroButtonLink || '/contact',
    image: formData.hero?.image ?? rawContent.heroImage ?? '/images/events-hero.svg'
  };

  // 3. Life @firevy.co State
  const lifeHeading = rawContent.lifeHeading || 'Life @firevy.co';
  const lifeDescription = rawContent.lifeDescription || 'At firevy.co, we constantly try new ways to make our work environment, enjoyable and inspiring. From company outings to birthdays, we just need a reason to celebrate. Have a glimpse at life and culture @firevy.co!';

  // 4. Event Gallery Data
  const eventGalleryData = (rawContent.eventGalleryData && typeof rawContent.eventGalleryData === 'object' && Object.keys(rawContent.eventGalleryData).length > 0)
    ? rawContent.eventGalleryData
    : defaultEventGalleryData;

  const currentYearPhotos = eventGalleryData[effectiveSelectedYear] || defaultEventGalleryData[effectiveSelectedYear] || [];

  // Year Handlers
  const handleAddYear = () => {
    const trimmed = newYearInput.trim();
    if (!trimmed) return;
    if (currentYears.includes(trimmed)) {
      alert(`Year "${trimmed}" already exists.`);
      return;
    }
    // Insert new year and sort descending
    const updatedYears = [trimmed, ...currentYears.filter(y => y !== trimmed)].sort((a, b) => {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
      return a.localeCompare(b);
    });

    const updatedGallery = {
      ...eventGalleryData,
      [trimmed]: eventGalleryData[trimmed] || []
    };

    updateContentField('years', updatedYears);
    updateContentField('eventGalleryData', updatedGallery);
    setSelectedYear(trimmed);
    setNewYearInput('');
  };

  const handleDeleteYear = (yrToDelete, e) => {
    e.stopPropagation();
    if (currentYears.length <= 1) {
      alert('At least one year tab must remain.');
      return;
    }
    if (!window.confirm(`Are you sure you want to delete year "${yrToDelete}" and its tab?`)) {
      return;
    }
    const updatedYears = currentYears.filter(y => y !== yrToDelete);
    updateContentField('years', updatedYears);
    if (effectiveSelectedYear === yrToDelete) {
      setSelectedYear(updatedYears[0]);
    }
  };

  const handleResetYears = () => {
    if (window.confirm('Reset year tabs and restore default years & photos?')) {
      updateContentField('years', defaultYears);
      updateContentField('eventGalleryData', defaultEventGalleryData);
      setSelectedYear('2026');
    }
  };

  // Update photo list for the current active year
  const updateYearPhotos = (newPhotos) => {
    const updatedGallery = {
      ...eventGalleryData,
      [effectiveSelectedYear]: newPhotos
    };
    updateContentField('eventGalleryData', updatedGallery);
  };

  const handleUpdatePhoto = (index, field, value) => {
    const updated = [...currentYearPhotos];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    updateYearPhotos(updated);
  };

  const handleAddPhoto = () => {
    const newId = Date.now();
    const newPhoto = {
      id: newId,
      title: `Event Celebration ${currentYearPhotos.length + 1}`,
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    };
    updateYearPhotos([...currentYearPhotos, newPhoto]);
  };

  const handleDeletePhoto = (index) => {
    const updated = currentYearPhotos.filter((_, i) => i !== index);
    updateYearPhotos(updated);
  };

  // 4. CTA State
  const cta = {
    title: formData.cta?.title || rawContent.cta?.title || 'Ready To Get Started?',
    subtitle: formData.cta?.subtitle || rawContent.cta?.subtitle || 'With 20+ years of domain expertise, 700+ successful projects, & 1500+ happy customers, we have carved a niche in the software development industry.',
    buttonText: formData.cta?.buttonText || rawContent.cta?.buttonText || 'Request A Free Quote',
    buttonLink: formData.cta?.buttonLink || rawContent.cta?.buttonLink || '/contact'
  };

  // 5. SEO State
  const seo = formData.seo || {};

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION (Title and Slug hidden per instruction) */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Events & Activities'}
        slug={subPageMeta?.slug || 'events-activities'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/events-activities'}
        hideFields={true}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION & INTRODUCTION                                            */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Headline, narrative description, action button, and 3D isometric hero illustration."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Hero Headline / Title" required>
            <input
              type="text"
              className="form-control"
              value={hero.title}
              onChange={(e) => {
                updateRootSection('hero', 'title', e.target.value);
                updateContentField('heroHeading', e.target.value);
              }}
              placeholder="e.g. Events & Celebrations"
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={hero.ctaText}
              onChange={(e) => {
                updateRootSection('hero', 'ctaText', e.target.value);
                updateContentField('heroButtonText', e.target.value);
              }}
              placeholder="e.g. Let's Talk"
            />
          </AdminFormField>

          <AdminFormField label="Hero Narrative Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={hero.subtitle}
              onChange={(e) => {
                updateRootSection('hero', 'subtitle', e.target.value);
                updateContentField('heroSubtitle', e.target.value);
              }}
              placeholder="At firevy.co, we believe that celebrating success is just as important as achieving it..."
            />
          </AdminFormField>

          <AdminFormField label="Button Target Link">
            <input
              type="text"
              className="form-control"
              value={hero.ctaLink}
              onChange={(e) => {
                updateRootSection('hero', 'ctaLink', e.target.value);
                updateContentField('heroButtonLink', e.target.value);
              }}
              placeholder="e.g. /contact"
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* Hero Side Graphic Card */}
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
                  ★ Hero Side Graphic (Isometric Laptop & Tech Blocks)
                </h4>
                <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#64748B' }}>
                  Right-side hero illustration next to the text. You can upload a new photo, paste a custom URL, or restore the default graphic.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  updateRootSection('hero', 'image', '/images/events-hero.svg');
                  updateContentField('heroImage', '/images/events-hero.svg');
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, padding: '4px 10px' }}
                title="Reset to default isometric graphic"
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
              helperText="Upload any PNG, JPG, SVG or WebP from your device, or paste an external link."
            />

            {hero.image && (
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '110px', height: '75px', background: '#F0F9FF', borderRadius: '6px', border: '1px solid #BAE6FD', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px' }}>
                  <img
                    src={getMediaUrl(hero.image)}
                    alt="Active Hero Preview"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/events-hero.svg';
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
      {/* 2. LIFE @FIREVY.CO & DYNAMIC LIVE GALLERY GRID                             */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="2. Life @firevy.co & Interactive Photo Gallery Grid"
        subtitle="Manage the gallery headline, description, year selector tabs, and photos directly in the live grid."
        badge="Live Gallery Editor"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Headline" required>
            <input
              type="text"
              className="form-control"
              value={lifeHeading}
              onChange={(e) => updateContentField('lifeHeading', e.target.value)}
              placeholder="e.g. Life @firevy.co"
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>

          <AdminFormField label="Section Description" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={lifeDescription}
              onChange={(e) => updateContentField('lifeDescription', e.target.value)}
              placeholder="At firevy.co, we constantly try new ways to make our work environment, enjoyable and inspiring..."
            />
          </AdminFormField>
        </AdminFormGrid>

        {/* Year Selector Tabs Bar */}
        <div
          style={{
            marginTop: '20px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px'
          }}
        >
          {/* Header with Title, Active Year indicator & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} color="#006B8F" />
              <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                Select Year Tab to View & Edit Photos
              </h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>
                Active Year: <strong style={{ color: '#0099CC' }}>{effectiveSelectedYear}</strong> ({currentYearPhotos.length} photos)
              </span>

              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={handleResetYears}
                title="Reset year tabs and default photos"
                style={{ fontSize: '11px', padding: '2px 8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <RotateCcw size={12} />
                <span>Reset All Years</span>
              </button>
            </div>
          </div>

          {/* Dynamic Year Adder Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px dashed #CBD5E1',
              borderRadius: '8px',
              padding: '8px 12px',
              marginBottom: '16px',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>
              + Add New Year:
            </span>
            <input
              type="text"
              placeholder="e.g. 2027"
              value={newYearInput}
              onChange={(e) => setNewYearInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddYear();
                }
              }}
              style={{
                width: '120px',
                padding: '4px 10px',
                fontSize: '12px',
                border: '1px solid #CBD5E1',
                borderRadius: '6px'
              }}
            />
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={handleAddYear}
              disabled={!newYearInput.trim()}
              style={{ padding: '4px 12px', fontSize: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <Plus size={13} />
              Add Year
            </button>
            <span style={{ fontSize: '11px', color: '#94A3B8', marginLeft: 'auto' }}>
              Tip: Click any year tab below to edit photos. Use &times; to delete a year tab.
            </span>
          </div>

          {/* Dynamic Year Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {currentYears.map((yr) => {
              const count = (eventGalleryData[yr] || defaultEventGalleryData[yr] || []).length;
              const isActive = effectiveSelectedYear === yr;
              return (
                <div
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: isActive ? 800 : 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive ? '2px solid #0099CC' : '1px solid #CBD5E1',
                    backgroundColor: isActive ? '#E0F2FE' : '#FFFFFF',
                    color: isActive ? '#0077A3' : '#334155',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: isActive ? '0 2px 8px rgba(0,153,204,0.2)' : 'none',
                    userSelect: 'none'
                  }}
                >
                  <span>{yr}</span>
                  <span
                    style={{
                      fontSize: '10.5px',
                      padding: '1px 6px',
                      borderRadius: '10px',
                      background: isActive ? '#0099CC' : '#E2E8F0',
                      color: isActive ? '#FFFFFF' : '#64748B'
                    }}
                  >
                    {count}
                  </span>

                  {/* Delete Year Button */}
                  <span
                    onClick={(e) => handleDeleteYear(yr, e)}
                    title={`Delete year ${yr}`}
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      lineHeight: 1,
                      marginLeft: '2px',
                      color: isActive ? '#0077A3' : '#94A3B8',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#EF4444';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = isActive ? '#0077A3' : '#94A3B8';
                    }}
                  >
                    &times;
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* DYNAMIC LIVE GALLERY GRID (DIRECT IN-GRID PHOTO & CAPTION EDITOR)   */}
        {/* =================================================================== */}
        <div
          style={{
            marginTop: '20px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Eye size={18} color="#0099CC" />
              <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                Live Interactive Gallery Grid ({effectiveSelectedYear})
              </h4>
              <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '12px', background: '#E0F2FE', color: '#0077A3' }}>
                {currentYearPhotos.length} Photos
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={handleAddPhoto}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, padding: '6px 12px' }}
              >
                <Plus size={14} />
                Add Photo to {effectiveSelectedYear}
              </button>

              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  if (defaultEventGalleryData[effectiveSelectedYear]) {
                    updateYearPhotos(defaultEventGalleryData[effectiveSelectedYear]);
                  }
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, padding: '6px 12px' }}
                title="Restore default photos for this year"
              >
                <RotateCcw size={13} />
                Reset {effectiveSelectedYear} Photos
              </button>
            </div>
          </div>

          <p style={{ fontSize: '12px', color: '#64748B', margin: '0 0 16px' }}>
            💡 <strong>Direct in-grid editing:</strong> Click on any photo to upload/change image, type the caption directly in the box below it, or click the red trash icon to remove.
          </p>

          {/* Interactive Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {currentYearPhotos.map((item, idx) => (
              <InteractivePhotoCard
                key={item.id || idx}
                item={item}
                index={idx}
                onUpdatePhoto={handleUpdatePhoto}
                onDeletePhoto={handleDeletePhoto}
              />
            ))}

            {/* Add Photo Tile */}
            <div
              onClick={handleAddPhoto}
              style={{
                border: '2px dashed #38BDF8',
                borderRadius: '12px',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: '#F0F9FF',
                color: '#0284C7',
                transition: 'all 0.2s ease',
                padding: '20px',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E0F2FE';
                e.currentTarget.style.borderColor = '#0099CC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F0F9FF';
                e.currentTarget.style.borderColor = '#38BDF8';
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#BAE6FD', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                <Plus size={22} color="#0369A1" />
              </div>
              <div style={{ fontSize: '13px', fontWeight: 800 }}>+ Add New Photo</div>
              <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>to {effectiveSelectedYear} Gallery</div>
            </div>
          </div>
        </div>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 3. READY TO GET STARTED? CTA BANNER                                       */}
      {/* ========================================================================= */}
      <AdminFormSection
        title="3. Ready To Get Started? CTA Banner"
        subtitle="Full-width call-to-action banner at the bottom of the page."
        badge="Bottom CTA"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth required>
            <input
              type="text"
              className="form-control"
              value={cta.title}
              onChange={(e) => {
                updateRootSection('cta', 'title', e.target.value);
                updateContentField('ctaTitle', e.target.value);
              }}
              placeholder="e.g. Ready To Get Started?"
              style={{ fontWeight: 700 }}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle}
              onChange={(e) => {
                updateRootSection('cta', 'subtitle', e.target.value);
                updateContentField('ctaSubtitle', e.target.value);
              }}
              placeholder="With 20+ years of domain expertise, 700+ successful projects..."
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText}
              onChange={(e) => {
                updateRootSection('cta', 'buttonText', e.target.value);
                updateContentField('ctaButtonText', e.target.value);
              }}
              placeholder="e.g. Request A Free Quote"
            />
          </AdminFormField>

          <AdminFormField label="Button Link Target">
            <input
              type="text"
              className="form-control"
              value={cta.buttonLink}
              onChange={(e) => {
                updateRootSection('cta', 'buttonLink', e.target.value);
                updateContentField('ctaButtonLink', e.target.value);
              }}
              placeholder="e.g. /contact"
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* ========================================================================= */}
      {/* 4. SEO & META SETTINGS                                                    */}
      {/* ========================================================================= */}
      <AdminSeoSection
        seoData={seo}
        onChange={(field, value) => updateRootSection('seo', field, value)}
      />
    </div>
  );
};

export default EventsActivitiesForm;
