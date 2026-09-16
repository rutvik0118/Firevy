import React, { useState, useEffect, useMemo } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  Search,
  ExternalLink,
  CheckCircle2,
  XCircle,
  RefreshCw,
  LayoutGrid,
  List,
  AlertTriangle,
  Upload,
  Layers,
  FileText,
  Star,
  Check,
  X
} from 'lucide-react';
import DataTable from '../UI/DataTable';
import Badge from '../UI/Badge';
import Modal from '../UI/Modal';
import MediaUploadInput from '../UI/MediaUploadInput';
import { useToast } from '../../context/ToastContext';
import companyService from '../../services/companyService';
import { AdminFormGrid, AdminFormField, AdminMediaField } from '../UI/AdminEditLayout';

export const CompanyCrudManager = ({
  pageTitle,
  pageSubtitle,
  icon: IconComp = Layers,
  collectionType,
  apiEndpoint,
  publicRoute,
  itemTitle = 'Item',
  fields = [],
  columns = [],
  customFetch,
  customCreate,
  customUpdate,
  customDelete,
  customToggle,
  defaultSortField = 'order',
  renderCardContent
}) => {
  const { addToast } = useToast();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'active' | 'inactive'

  // Modal State
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [editingItem, setEditingItem] = useState(null);
  const [viewingItem, setViewingItem] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [saving, setSaving] = useState(false);

  // Initialize form data based on fields schema
  const getInitialFormData = (existing = null) => {
    const data = {};
    fields.forEach((field) => {
      if (existing && existing[field.name] !== undefined) {
        data[field.name] = existing[field.name];
      } else if (field.defaultValue !== undefined) {
        data[field.name] = field.defaultValue;
      } else if (field.type === 'number') {
        data[field.name] = 0;
      } else if (field.type === 'checkbox') {
        data[field.name] = true;
      } else if (field.type === 'tags' || field.type === 'gallery') {
        data[field.name] = [];
      } else if (field.type === 'object') {
        data[field.name] = {};
      } else {
        data[field.name] = '';
      }
    });

    if (existing) {
      data._id = existing._id;
      data.isActive = existing.isActive !== undefined ? existing.isActive : true;
      data.status = existing.status || 'published';
    } else {
      data.isActive = true;
      data.status = 'published';
      data.order = items.length + 1;
    }
    return data;
  };

  // Fetch Items from Backend API
  const fetchItems = async () => {
    setLoading(true);
    try {
      let res = null;
      if (customFetch) {
        res = await customFetch();
      } else if (collectionType) {
        res = await companyService.getItems(collectionType);
      }

      if (res && res.data) {
        setItems(res.data);
      }
    } catch (err) {
      console.error(`[Error fetching ${pageTitle}]`, err);
      addToast(`Could not load ${itemTitle.toLowerCase()}s from API`, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [collectionType]);

  // Open Create Modal
  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData(getInitialFormData());
    setFormErrors({});
    setIsFormModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setFormData(getInitialFormData(item));
    setFormErrors({});
    setIsFormModalOpen(true);
  };

  // Open View Modal
  const handleOpenView = (item) => {
    setViewingItem(item);
    setIsViewModalOpen(true);
  };

  // Open Delete Confirmation Modal
  const handleOpenDelete = (item) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  // Handle Form Input Changes
  const handleFieldChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value
    }));
    if (formErrors[fieldName]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      });
    }
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    fields.forEach((field) => {
      if (field.required) {
        const val = formData[field.name];
        if (val === undefined || val === null || val === '' || (Array.isArray(val) && val.length === 0)) {
          errors[field.name] = `${field.label || field.name} is required`;
        }
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Save / Submit Form (Create or Update)
  const handleSave = async (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) {
      addToast('Please fill all required fields', 'warning');
      return;
    }

    setSaving(true);
    try {
      if (editingItem) {
        // Update
        const id = editingItem._id || editingItem.id;
        let res = null;
        if (customUpdate) {
          res = await customUpdate(id, formData);
        } else if (collectionType) {
          res = await companyService.updateItem(collectionType, id, formData);
        }

        if (res && res.data) {
          setItems((prev) => prev.map((item) => ((item._id || item.id) === id ? res.data : item)));
          addToast(`${itemTitle} updated successfully!`, 'success');
          setIsFormModalOpen(false);
        }
      } else {
        // Create
        let res = null;
        if (customCreate) {
          res = await customCreate(formData);
        } else if (collectionType) {
          res = await companyService.createItem(collectionType, formData);
        }

        if (res && res.data) {
          setItems((prev) => [res.data, ...prev]);
          addToast(`New ${itemTitle.toLowerCase()} created successfully!`, 'success');
          setIsFormModalOpen(false);
        }
      }
    } catch (err) {
      console.error('[Save Error]', err);
      addToast(err.message || `Failed to save ${itemTitle.toLowerCase()}`, 'error');
    } finally {
      setSaving(false);
    }
  };

  // Confirm Delete Operation
  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;
    const id = itemToDelete._id || itemToDelete.id;
    try {
      if (customDelete) {
        await customDelete(id);
      } else if (collectionType) {
        await companyService.deleteItem(collectionType, id);
      }

      setItems((prev) => prev.filter((item) => (item._id || item.id) !== id));
      addToast(`${itemTitle} deleted successfully`, 'info');
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    } catch (err) {
      console.error('[Delete Error]', err);
      addToast(`Failed to delete ${itemTitle.toLowerCase()}`, 'error');
    }
  };

  // Toggle Item Active/Inactive Status
  const handleToggleStatus = async (item) => {
    const id = item._id || item.id;
    try {
      let res = null;
      if (customToggle) {
        res = await customToggle(id);
      } else if (collectionType) {
        res = await companyService.toggleItemStatus(collectionType, id);
      }

      const updatedActive = res?.data?.isActive !== undefined ? res.data.isActive : !item.isActive;
      setItems((prev) =>
        prev.map((i) => ((i._id || i.id) === id ? { ...i, isActive: updatedActive } : i))
      );
      addToast(
        `${itemTitle} is now ${updatedActive ? 'Active (Visible)' : 'Draft (Hidden)'}`,
        'info'
      );
    } catch (err) {
      console.error('[Toggle Error]', err);
      addToast(`Failed to update status for ${itemTitle.toLowerCase()}`, 'error');
    }
  };

  // Filtered and Searched Items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Status Filter
      if (statusFilter === 'active' && item.isActive === false) return false;
      if (statusFilter === 'inactive' && item.isActive !== false) return false;

      // Search Query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();

      return Object.values(item).some((val) => {
        if (typeof val === 'string') return val.toLowerCase().includes(q);
        if (typeof val === 'number') return val.toString().includes(q);
        if (Array.isArray(val)) return val.some((sub) => typeof sub === 'string' && sub.toLowerCase().includes(q));
        if (typeof val === 'object' && val !== null) {
          return Object.values(val).some((sub) => typeof sub === 'string' && sub.toLowerCase().includes(q));
        }
        return false;
      });
    });
  }, [items, statusFilter, searchQuery]);

  // Default Action Columns
  const tableColumns = useMemo(() => {
    const actionCol = {
      header: 'Actions',
      field: '_actions',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <button
            type="button"
            onClick={() => handleOpenView(row)}
            className="btn btn-ghost btn-icon-sm"
            title="View Details"
          >
            <Eye size={15} />
          </button>
          <button
            type="button"
            onClick={() => handleOpenEdit(row)}
            className="btn btn-ghost btn-icon-sm"
            title="Edit Item"
          >
            <Edit2 size={15} />
          </button>
          <button
            type="button"
            onClick={() => handleToggleStatus(row)}
            className="btn btn-ghost btn-icon-sm"
            title={row.isActive ? 'Set to Inactive' : 'Set to Active'}
            style={{ color: row.isActive ? 'var(--color-emerald-500)' : 'var(--text-muted)' }}
          >
            {row.isActive ? <CheckCircle2 size={15} /> : <XCircle size={15} />}
          </button>
          <button
            type="button"
            onClick={() => handleOpenDelete(row)}
            className="btn btn-ghost btn-icon-sm"
            title="Delete Item"
            style={{ color: 'var(--color-rose-500)' }}
          >
            <Trash2 size={15} />
          </button>
        </div>
      )
    };

    return [...columns, actionCol];
  }, [columns]);

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header Bar */}
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <IconComp size={24} />
            <span>{pageTitle}</span>
          </h1>
          <p>{pageSubtitle || `Manage, add, edit, and organize all ${itemTitle.toLowerCase()} records.`}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {publicRoute && (
            <a
              href={publicRoute}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
              title="Preview on Public Website"
            >
              <ExternalLink size={14} />
              <span>View Live Page</span>
            </a>
          )}

          <button
            type="button"
            onClick={fetchItems}
            className="btn btn-secondary btn-sm"
            title="Refresh Data from MongoDB"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>

          <button
            type="button"
            onClick={handleOpenCreate}
            className="btn btn-primary btn-sm"
          >
            <Plus size={15} />
            <span>Add {itemTitle}</span>
          </button>
        </div>
      </div>

      {/* Stats and Filter Ribbon */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '1.25rem',
          padding: '0.875rem 1.25rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
            Total: <strong style={{ color: 'var(--text-primary)' }}>{items.length}</strong>
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
            Active: <strong style={{ color: 'var(--color-emerald-500)' }}>{items.filter((i) => i.isActive !== false).length}</strong>
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
            Inactive: <strong style={{ color: 'var(--color-amber-500)' }}>{items.filter((i) => i.isActive === false).length}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="form-select"
            style={{ height: '34px', fontSize: '0.8125rem', minWidth: '120px' }}
          >
            <option value="all">All Status</option>
            <option value="active">Active Only</option>
            <option value="inactive">Draft / Inactive</option>
          </select>

          {/* View Mode Toggle */}
          <div style={{ display: 'flex', border: '1px solid var(--border-medium)', borderRadius: '6px', overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`btn btn-ghost btn-sm ${viewMode === 'table' ? 'active' : ''}`}
              style={{
                height: '32px',
                padding: '0 8px',
                background: viewMode === 'table' ? 'var(--primary-subtle)' : 'transparent',
                color: viewMode === 'table' ? 'var(--primary)' : 'var(--text-secondary)'
              }}
              title="Table View"
            >
              <List size={15} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`btn btn-ghost btn-sm ${viewMode === 'grid' ? 'active' : ''}`}
              style={{
                height: '32px',
                padding: '0 8px',
                background: viewMode === 'grid' ? 'var(--primary-subtle)' : 'transparent',
                color: viewMode === 'grid' ? 'var(--primary)' : 'var(--text-secondary)'
              }}
              title="Grid Cards View"
            >
              <LayoutGrid size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Table or Grid View */}
      {loading ? (
        <div style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
          <RefreshCw size={24} className="animate-spin" style={{ margin: '0 auto 0.75rem auto' }} />
          <p>Loading {itemTitle.toLowerCase()} records from database...</p>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="glass-card" style={{ padding: '3.5rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <IconComp size={48} style={{ margin: '0 auto 1rem auto', opacity: 0.4 }} />
          <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            No {itemTitle.toLowerCase()}s found
          </h3>
          <p style={{ maxWidth: '420px', margin: '0 auto 1.5rem auto', fontSize: '0.875rem' }}>
            {searchQuery || statusFilter !== 'all'
              ? 'Try changing your search query or filter options to see records.'
              : `You haven't added any ${itemTitle.toLowerCase()}s yet. Click below to create your first record.`}
          </p>
          <button type="button" onClick={handleOpenCreate} className="btn btn-primary btn-sm">
            <Plus size={15} />
            <span>Create First {itemTitle}</span>
          </button>
        </div>
      ) : viewMode === 'table' ? (
        <DataTable
          columns={tableColumns}
          data={filteredItems}
          searchKey={fields[0]?.name || 'title'}
          searchPlaceholder={`Search ${itemTitle.toLowerCase()}s...`}
        />
      ) : (
        <div>
          {/* Grid View */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.75rem'
            }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item._id || item.id || idx}
                className="glass-card glass-card-hover"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Status & Actions Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
                    <Badge variant={item.isActive !== false ? 'emerald' : 'slate'}>
                      {item.isActive !== false ? 'Active' : 'Draft'}
                    </Badge>

                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button
                        type="button"
                        onClick={() => handleOpenView(item)}
                        className="btn btn-ghost btn-icon-sm"
                        title="View Details"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(item)}
                        className="btn btn-ghost btn-icon-sm"
                        title="Edit Item"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenDelete(item)}
                        className="btn btn-ghost btn-icon-sm"
                        title="Delete Item"
                        style={{ color: 'var(--color-rose-500)' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Card Content Render */}
                  {renderCardContent ? (
                    renderCardContent(item)
                  ) : (
                    <div>
                      {item.image || item.thumbnail || item.avatar ? (
                        <div style={{ width: '100%', height: '160px', borderRadius: '8px', overflow: 'hidden', marginBottom: '0.875rem', background: 'var(--bg-tertiary)' }}>
                          <img
                            src={item.image || item.thumbnail || item.avatar}
                            alt={item.title || item.name || 'Preview'}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      ) : null}
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                        {item.title || item.name || item.clientName || 'Untitled'}
                      </h4>
                      {item.designation || item.organization || item.category ? (
                        <div style={{ fontSize: '0.78125rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                          {item.designation || item.organization || item.category} {item.company ? `· ${item.company}` : ''}
                        </div>
                      ) : null}
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {item.shortDescription || item.description || item.bio || item.review || item.content || ''}
                      </p>
                    </div>
                  )}
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', marginTop: '0.875rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Order: {item.order || 0}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(item)}
                    className="btn btn-ghost btn-sm"
                    style={{ fontSize: '0.75rem', height: '26px', padding: '0 8px' }}
                  >
                    {item.isActive !== false ? 'Deactivate' : 'Activate'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          ADD / EDIT MODAL
          ============================================================ */}
      <Modal
        isOpen={isFormModalOpen}
        onClose={() => !saving && setIsFormModalOpen(false)}
        title={`${editingItem ? 'Edit' : 'Add New'} ${itemTitle}`}
        maxWidth="720px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={() => setIsFormModalOpen(false)}
              className="btn btn-secondary btn-sm"
              disabled={saving}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="btn btn-primary btn-sm"
              disabled={saving}
            >
              {saving ? (
                <>
                  <RefreshCw size={14} className="animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <span>{editingItem ? 'Save Changes' : `Create ${itemTitle}`}</span>
              )}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AdminFormGrid columns={2} gap="14px">
            {fields.map((field) => {
              const isError = !!formErrors[field.name];
              const value = formData[field.name] !== undefined ? formData[field.name] : '';
              const isFullWidth = field.fullWidth || field.type === 'textarea' || field.type === 'rich' || field.type === 'image' || field.type === 'file' || field.type === 'tags';

              // Image / Thumbnail / Media Upload Input
              if (field.type === 'image' || field.type === 'file') {
                return (
                  <AdminMediaField
                    key={field.name}
                    label={field.label || field.name}
                    value={value}
                    onChange={(url) => handleFieldChange(field.name, url)}
                    required={field.required}
                    helperText={field.helpText || 'Upload or select media file'}
                    fullWidth
                  />
                );
              }

              // Textarea / Rich Text
              if (field.type === 'textarea' || field.type === 'rich') {
                return (
                  <AdminFormField
                    key={field.name}
                    label={field.label || field.name}
                    required={field.required}
                    helperText={field.helpText}
                    error={isError ? formErrors[field.name] : undefined}
                    fullWidth
                  >
                    <textarea
                      rows={field.rows || 3}
                      value={value}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      placeholder={field.placeholder || `Enter ${field.label?.toLowerCase()}...`}
                      className={`form-control ${isError ? 'input-error' : ''}`}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: isError ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                        fontSize: '13px',
                        color: '#0F172A',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'inherit'
                      }}
                    />
                  </AdminFormField>
                );
              }

              // Select Dropdown
              if (field.type === 'select') {
                return (
                  <AdminFormField
                    key={field.name}
                    label={field.label || field.name}
                    required={field.required}
                    helperText={field.helpText}
                    error={isError ? formErrors[field.name] : undefined}
                    fullWidth={field.fullWidth}
                  >
                    <select
                      value={value}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      className={`form-control ${isError ? 'input-error' : ''}`}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: isError ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                        fontSize: '13px',
                        color: '#0F172A',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      {(field.options || []).map((opt) => {
                        const optVal = typeof opt === 'string' ? opt : opt.value;
                        const optLabel = typeof opt === 'string' ? opt : opt.label;
                        return (
                          <option key={optVal} value={optVal}>
                            {optLabel}
                          </option>
                        );
                      })}
                    </select>
                  </AdminFormField>
                );
              }

              // Tags / Array of Strings
              if (field.type === 'tags') {
                const tagsArray = Array.isArray(value) ? value : (typeof value === 'string' ? value.split(',').map(s => s.trim()).filter(Boolean) : []);
                return (
                  <AdminFormField
                    key={field.name}
                    label={field.label || field.name}
                    required={field.required}
                    helperText={field.helpText || 'Separate items with commas'}
                    error={isError ? formErrors[field.name] : undefined}
                    fullWidth
                  >
                    <input
                      type="text"
                      value={Array.isArray(value) ? value.join(', ') : value}
                      onChange={(e) => handleFieldChange(field.name, e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                      placeholder="e.g. AI, React, Cloud"
                      className={`form-control ${isError ? 'input-error' : ''}`}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: isError ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                        fontSize: '13px',
                        color: '#0F172A',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                      {tagsArray.map((tag, tIdx) => (
                        <span key={tIdx} className="badge badge-cyan" style={{ fontSize: '0.6875rem' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </AdminFormField>
                );
              }

              // Checkbox / Switch
              if (field.type === 'checkbox') {
                return (
                  <div key={field.name} style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
                    <input
                      type="checkbox"
                      id={field.name}
                      checked={!!value}
                      onChange={(e) => handleFieldChange(field.name, e.target.checked)}
                      style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#006B8F' }}
                    />
                    <label htmlFor={field.name} style={{ fontSize: '13px', color: '#0F172A', cursor: 'pointer', fontWeight: 600 }}>
                      {field.label || field.name}
                    </label>
                  </div>
                );
              }

              // Default Text / Number / URL / Date input
              return (
                <AdminFormField
                  key={field.name}
                  label={field.label || field.name}
                  required={field.required}
                  helperText={field.helpText}
                  error={isError ? formErrors[field.name] : undefined}
                  fullWidth={field.fullWidth}
                >
                  <input
                    type={field.type || 'text'}
                    value={value}
                    onChange={(e) => handleFieldChange(field.name, field.type === 'number' ? Number(e.target.value) : e.target.value)}
                    placeholder={field.placeholder || `Enter ${field.label?.toLowerCase()}...`}
                    className={`form-control ${isError ? 'input-error' : ''}`}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: isError ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#0F172A',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </AdminFormField>
              );
            })}
          </AdminFormGrid>

          {/* Active Status Checkbox */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '10px', borderTop: '1px solid #E2E8F0' }}>
            <input
              type="checkbox"
              id="isActiveToggle"
              checked={formData.isActive !== false}
              onChange={(e) => handleFieldChange('isActive', e.target.checked)}
              style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#006B8F' }}
            />
            <label htmlFor="isActiveToggle" style={{ fontSize: '13px', color: '#0F172A', cursor: 'pointer', fontWeight: 600 }}>
              Active & Published on Public Website
            </label>
          </div>
        </form>
      </Modal>

      {/* ============================================================
          VIEW DETAILS MODAL
          ============================================================ */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title={`${itemTitle} Details Preview`}
        maxWidth="640px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={() => {
                setIsViewModalOpen(false);
                handleOpenEdit(viewingItem);
              }}
              className="btn btn-primary btn-sm"
            >
              <Edit2 size={14} />
              <span>Edit this {itemTitle}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsViewModalOpen(false)}
              className="btn btn-secondary btn-sm"
            >
              Close
            </button>
          </div>
        }
      >
        {viewingItem && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {viewingItem.image || viewingItem.thumbnail || viewingItem.avatar ? (
              <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', background: 'var(--bg-tertiary)' }}>
                <img
                  src={viewingItem.image || viewingItem.thumbnail || viewingItem.avatar}
                  alt={viewingItem.title || viewingItem.name || 'Preview'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ) : null}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {viewingItem.title || viewingItem.name || viewingItem.clientName}
              </h3>
              <Badge variant={viewingItem.isActive !== false ? 'emerald' : 'slate'}>
                {viewingItem.isActive !== false ? 'Active' : 'Draft'}
              </Badge>
            </div>

            {viewingItem.designation || viewingItem.organization || viewingItem.category ? (
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)' }}>
                {viewingItem.designation || viewingItem.organization || viewingItem.category} {viewingItem.company ? `· ${viewingItem.company}` : ''}
              </div>
            ) : null}

            {viewingItem.rating ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < viewingItem.rating ? 'var(--primary)' : 'none'}
                    color={i < viewingItem.rating ? 'var(--primary)' : 'var(--border-medium)'}
                  />
                ))}
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, marginLeft: '6px' }}>{viewingItem.rating} / 5.0</span>
              </div>
            ) : null}

            {viewingItem.shortDescription || viewingItem.bio || viewingItem.description || viewingItem.review ? (
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px' }}>
                {viewingItem.shortDescription || viewingItem.bio || viewingItem.description || viewingItem.review}
              </div>
            ) : null}

            {viewingItem.pdfUrl && (
              <div style={{ padding: '0.75rem 1rem', background: 'var(--primary-subtle)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600 }}>PDF Attachment ({viewingItem.fileSize || 'PDF'})</span>
                </div>
                <a href={viewingItem.pdfUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ height: '28px' }}>
                  <ExternalLink size={13} />
                  <span>Open PDF</span>
                </a>
              </div>
            )}

            {viewingItem.videoUrl && (
              <div style={{ padding: '0.75rem 1rem', background: 'var(--primary-subtle)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Video Stream / Embed URL</span>
                <a href={viewingItem.videoUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ height: '28px' }}>
                  <ExternalLink size={13} />
                  <span>Open Video</span>
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* ============================================================
          DELETE CONFIRMATION MODAL
          ============================================================ */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Deletion"
        maxWidth="440px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={() => setIsDeleteModalOpen(false)}
              className="btn btn-secondary btn-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmDelete}
              className="btn btn-danger btn-sm"
            >
              <Trash2 size={14} />
              <span>Delete Permanently</span>
            </button>
          </div>
        }
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626', shrink: 0 }}>
            <AlertTriangle size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
              Are you sure you want to delete this {itemTitle.toLowerCase()}?
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              "{itemToDelete?.title || itemToDelete?.name || itemToDelete?.clientName || 'This record'}" will be permanently removed from MongoDB. This action cannot be undone.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CompanyCrudManager;
