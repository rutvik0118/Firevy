import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection } from '../../../components/UI/AdminEditLayout';

export const TrustMarqueeEditor = ({ data, onChange }) => {
  const logos = data?.logos || [];

  const handleLogosChange = (newLogos) => {
    onChange({
      ...data,
      logos: newLogos
    });
  };

  const fields = [
    {
      name: 'name',
      label: 'Brand / Partner Name',
      type: 'text',
      placeholder: 'e.g. TOYOTA, Almarai, ORIENT CEMENT, AMERICAN EXPRESS',
      required: true
    },
    {
      name: 'symbol',
      label: 'Icon / Emoji Symbol',
      type: 'text',
      placeholder: 'e.g. 🚗, 🌾, 💳, 🏢, 🛡️, ⚙️, ✨'
    },
    {
      name: 'color',
      label: 'Text / Highlight Color',
      type: 'text',
      placeholder: 'e.g. text-red-600, text-blue-700, text-[#006B8F], #0F172A'
    },
    {
      name: 'image',
      label: 'Brand Logo Image (SVG / PNG)',
      type: 'image',
      helperText: 'Upload transparent brand logo vector or PNG.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Trust Marquee Brand Carousel
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Auto-scrolling brand logo marquee between Hero Banner and About Us section.
        </p>
      </div>

      <AdminFormSection title="Marquee Brand Logos">
        <ItemListEditor
          items={logos}
          onChange={handleLogosChange}
          itemTitle="Brand Logo"
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
                  {item.name?.substring(0, 2)?.toUpperCase() || 'LG'}
                </div>
              )}
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                {item.name || 'Brand Logo'}
              </span>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default TrustMarqueeEditor;
