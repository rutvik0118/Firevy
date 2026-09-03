import React, { useState, useRef } from 'react';
import {
  Upload,
  X,
  Image as ImageIcon,
  Video,
  FileText,
  Check,
  Loader2,
  RefreshCw,
  Eye,
  Trash2
} from 'lucide-react';
import adminService from '../../services/adminService';
import { useToast } from '../../context/ToastContext';

export const MediaUploadInput = ({
  value,
  onChange,
  label = 'Media Asset',
  type = 'image', // 'image' | 'video' | 'pdf'
  helperText = ''
}) => {
  const { addToast } = useToast();
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    if (type === 'image' && !file.type.startsWith('image/')) {
      addToast('Please select a valid image file (JPG, PNG, WebP, SVG)', 'error');
      return;
    }
    if (type === 'video' && !file.type.startsWith('video/')) {
      addToast('Please select a valid video file (MP4, WebM)', 'error');
      return;
    }
    if (type === 'pdf' && !file.type.includes('pdf')) {
      addToast('Please select a valid PDF file', 'error');
      return;
    }

    setUploading(true);
    try {
      const res = await adminService.uploadMedia(file, type);
      const fileUrl = res?.data?.url || res?.data?.fileUrl || res?.url || (typeof res?.data === 'string' ? res.data : null);

      if (fileUrl) {
        onChange(fileUrl);
        addToast(`${file.name} uploaded successfully!`, 'success');
      } else {
        throw new Error('Server did not return a valid file URL');
      }
    } catch (err) {
      addToast(`Upload failed: ${err.message || 'Server error'}`, 'error');
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onChange('');
    addToast('Media removed', 'info');
  };

  const getAcceptTypes = () => {
    if (type === 'video') return 'video/mp4,video/webm';
    if (type === 'pdf') return 'application/pdf';
    return 'image/png,image/jpeg,image/webp,image/svg+xml,image/gif';
  };

  const getIcon = () => {
    if (type === 'video') return <Video size={16} />;
    if (type === 'pdf') return <FileText size={16} />;
    return <ImageIcon size={16} />;
  };

  return (
    <div className="form-group" style={{ marginBottom: '16px' }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <label className="form-label" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--text-primary, #0F172A)' }}>
            {getIcon()}
            <span>{label}</span>
          </label>
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={getAcceptTypes()}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* Upload Dropzone / Existing Asset Preview */}
      {!value ? (
        <div
          onClick={() => !uploading && fileInputRef.current?.click()}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            border: `2px dashed ${isHovered ? '#006B8F' : 'var(--border-color, #E2E8F0)'}`,
            borderRadius: '8px',
            padding: '20px 16px',
            textAlign: 'center',
            cursor: uploading ? 'wait' : 'pointer',
            backgroundColor: isHovered ? 'rgba(0, 107, 143, 0.04)' : 'var(--bg-secondary, #F8FAFC)',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {uploading ? (
            <>
              <Loader2 className="animate-spin" size={26} style={{ color: '#006B8F' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#006B8F' }}>Uploading {type}...</span>
            </>
          ) : (
            <>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0, 107, 143, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006B8F' }}>
                <Upload size={20} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary, #0F172A)' }}>
                  Click to Upload {type === 'image' ? 'Image' : type === 'video' ? 'Video' : 'PDF Document'}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted, #64748B)', marginTop: '2px' }}>
                  {type === 'image' && 'Supports PNG, JPG, WebP, SVG up to 10MB'}
                  {type === 'video' && 'Supports MP4, WebM up to 50MB'}
                  {type === 'pdf' && 'Supports PDF brochure document up to 20MB'}
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        /* Rich Preview Card with Replace / Remove / Preview */
        <div
          style={{
            border: '1px solid var(--border-color, #E2E8F0)',
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}
        >
          {/* Visual Thumbnail */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
            {type === 'image' && (
              <div style={{ width: '54px', height: '54px', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={value}
                  alt="Asset Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
            {type === 'video' && (
              <div style={{ width: '54px', height: '54px', borderRadius: '6px', backgroundColor: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#38BDF8' }}>
                <Video size={24} />
              </div>
            )}
            {type === 'pdf' && (
              <div style={{ width: '54px', height: '54px', borderRadius: '6px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#EF4444' }}>
                <FileText size={24} />
              </div>
            )}

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {value.split('/').pop() || 'Media Asset'}
              </div>
              <div style={{ fontSize: '11px', color: '#16A34A', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <Check size={12} /> Active Media Asset
              </div>
            </div>
          </div>

          {/* Action Buttons: Replace, View, Remove */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            {uploading ? (
              <Loader2 className="animate-spin" size={16} style={{ color: '#006B8F', margin: '0 8px' }} />
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="btn btn-xs btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', fontSize: '11px', fontWeight: 600 }}
                  title="Replace with another file"
                >
                  <RefreshCw size={12} /> Replace
                </button>

                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-xs btn-ghost"
                  style={{ padding: '6px', color: '#64748B' }}
                  title="Preview in new tab"
                >
                  <Eye size={14} />
                </a>

                <button
                  type="button"
                  onClick={handleRemove}
                  className="btn btn-xs btn-ghost"
                  style={{ padding: '6px', color: '#DC2626' }}
                  title="Remove media"
                >
                  <Trash2 size={14} />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {helperText && (
        <span className="form-help" style={{ marginTop: '4px', display: 'block', fontSize: '11px', color: 'var(--text-muted, #64748B)' }}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default MediaUploadInput;
