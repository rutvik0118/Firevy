import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const BrandLogoGridEditor = ({ data, onChange }) => {
  const brands = data?.brands || [];

  const handleBrandsChange = (newBrands) => {
    onChange({
      ...data,
      brands: newBrands
    });
  };

  const handleFieldChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const fields = [
    {
      name: 'name',
      label: 'Brand / Partner Name',
      type: 'text',
      placeholder: 'e.g. AMERICAN EXPRESS, TOYOTA, L\'ORÉAL, ADANI',
      required: true
    },
    {
      name: 'symbol',
      label: 'Icon / Emoji Symbol',
      type: 'text',
      placeholder: 'e.g. 💳, 🚗, ✨, 🏢, 🛡️'
    },
    {
      name: 'color',
      label: 'Color Class / Hex Code',
      type: 'text',
      placeholder: 'e.g. text-[#006B8F], text-red-600, #0F172A'
    },
    {
      name: 'font',
      label: 'Typography Font Styling Class',
      type: 'text',
      placeholder: 'e.g. font-black tracking-tighter text-sm sm:text-base'
    },
    {
      name: 'image',
      label: 'Brand Logo Image (SVG / PNG)',
      type: 'image',
      helperText: 'Upload high-resolution transparent PNG or SVG brand logo.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Header & Section Overview */}
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          World's Leading Brands (Logo Wall Grid)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Logos of Fortune 500 companies and enterprise clients displayed in the logo wall.
        </p>
      </div>

      {/* Section Titles & Descriptions */}
      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || "Trusted By The World’s Leading Brands"}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              style={{
                width: '100%',
                padding: '7px 10px',
                borderRadius: '5px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF'
              }}
            />
          </AdminFormField>

          <AdminFormField label="Section Description" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data?.description || 'We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.'}
              onChange={(e) => handleFieldChange('description', e.target.value)}
              style={{
                width: '100%',
                padding: '7px 10px',
                borderRadius: '5px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF',
                fontFamily: 'inherit'
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* Brand Partner Logos Item List */}
      <AdminFormSection title="Brand Partner Logos">
        <ItemListEditor
          items={brands}
          onChange={handleBrandsChange}
          itemTitle="Brand Partner"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'contain',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '4px',
                    border: '1px solid #E2E8F0',
                    padding: '2px'
                  }}
                />
              ) : item.symbol ? (
                <span style={{ fontSize: '16px' }}>{item.symbol}</span>
              ) : (
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    backgroundColor: '#E0F2FE',
                    color: '#006B8F',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 800
                  }}
                >
                  {item.name?.substring(0, 2)?.toUpperCase() || 'BD'}
                </div>
              )}
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                {item.name || 'Brand Name'}
              </span>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default BrandLogoGridEditor;
