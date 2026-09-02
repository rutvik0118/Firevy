import React, { useState } from 'react';

export const AreaChart = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const data = [
    { month: 'Jan', value: 45, label: '45 Inquiries' },
    { month: 'Feb', value: 68, label: '68 Inquiries' },
    { month: 'Mar', value: 92, label: '92 Inquiries' },
    { month: 'Apr', value: 80, label: '80 Inquiries' },
    { month: 'May', value: 120, label: '120 Inquiries' },
    { month: 'Jun', value: 154, label: '154 Inquiries' },
    { month: 'Jul', value: 190, label: '190 Inquiries' },
  ];

  const maxValue = 220;
  const width = 600;
  const height = 200;
  const paddingX = 40;
  const paddingY = 20;

  const points = data.map((d, index) => {
    const x = paddingX + (index * (width - 2 * paddingX)) / (data.length - 1);
    const y = height - paddingY - (d.value / maxValue) * (height - 2 * paddingY);
    return { ...d, x, y };
  });

  const pathD = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = points[i - 1];
    const cx1 = prev.x + (point.x - prev.x) / 2;
    const cy1 = prev.y;
    const cx2 = prev.x + (point.x - prev.x) / 2;
    const cy2 = point.y;
    return `${acc} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${point.x} ${point.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%', overflow: 'visible' }}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#006B8F" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#006B8F" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[0.25, 0.5, 0.75, 1].map((ratio) => {
          const y = height - paddingY - ratio * (height - 2 * paddingY);
          return (
            <line
              key={ratio}
              x1={paddingX}
              y1={y}
              x2={width - paddingX}
              y2={y}
              stroke="#E2E8F0"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Fill Area */}
        <path d={areaD} fill="url(#areaGradient)" />

        {/* Stroke Line */}
        <path d={pathD} fill="none" stroke="#006B8F" strokeWidth="2.5" strokeLinecap="round" />

        {/* Data points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={hoveredPoint === i ? 6 : 4}
              fill="#006B8F"
              stroke="#FFFFFF"
              strokeWidth="2"
              style={{ cursor: 'pointer', transition: 'all 0.15s ease' }}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
            {/* Month labels */}
            <text
              x={p.x}
              y={height - 2}
              textAnchor="middle"
              fill="#64748B"
              fontSize="11"
              fontFamily="var(--font-sans)"
              fontWeight="600"
            >
              {p.month}
            </text>
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredPoint !== null && (
        <div
          style={{
            position: 'absolute',
            top: points[hoveredPoint].y - 38,
            left: `${(points[hoveredPoint].x / width) * 100}%`,
            transform: 'translateX(-50%)',
            background: '#006B8F',
            color: '#FFFFFF',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 700,
            pointerEvents: 'none',
            boxShadow: '0 4px 12px rgba(0, 107, 143, 0.3)',
            whiteSpace: 'nowrap'
          }}
        >
          {points[hoveredPoint].label}
        </div>
      )}
    </div>
  );
};

export const DonutChart = () => {
  const [hoveredSlice, setHoveredSlice] = useState(null);

  const sectors = [
    { name: 'Fintech & Banking', count: 32, color: '#006B8F' },
    { name: 'Healthcare & Biotech', count: 24, color: '#0284C7' },
    { name: 'Logistics & Supply', count: 18, color: '#0D9488' },
    { name: 'SaaS & Web3', count: 26, color: '#64748B' }
  ];

  const total = sectors.reduce((acc, s) => acc + s.count, 0);
  let accumulatedAngle = 0;

  const size = 180;
  const radius = 65;
  const strokeWidth = 22;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', width: '100%', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: `${size}px`, height: `${size}px` }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {sectors.map((sector, index) => {
            const strokeDasharray = `${(sector.count / total) * circumference} ${circumference}`;
            const strokeDashoffset = -accumulatedAngle;
            accumulatedAngle += (sector.count / total) * circumference;

            return (
              <circle
                key={index}
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke={sector.color}
                strokeWidth={hoveredSlice === index ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="butt"
                style={{
                  cursor: 'pointer',
                  transition: 'stroke-width 0.2s ease',
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%'
                }}
                onMouseEnter={() => setHoveredSlice(index)}
                onMouseLeave={() => setHoveredSlice(null)}
              />
            );
          })}
        </svg>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            {hoveredSlice !== null ? `${sectors[hoveredSlice].count}%` : '100%'}
          </span>
          <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
            {hoveredSlice !== null ? sectors[hoveredSlice].name.split(' ')[0] : 'Coverage'}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {sectors.map((s, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: hoveredSlice === idx ? 'var(--primary)' : 'var(--text-secondary)',
              fontWeight: hoveredSlice === idx ? 700 : 500,
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredSlice(idx)}
            onMouseLeave={() => setHoveredSlice(null)}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: s.color }} />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BarChart = () => {
  const bars = [
    { label: 'React / Next.js', count: 48, percentage: 95 },
    { label: 'Node.js / Express', count: 42, percentage: 84 },
    { label: 'Python / AI Models', count: 36, percentage: 72 },
    { label: 'AWS & Kubernetes', count: 30, percentage: 60 },
    { label: 'MongoDB / PostgreSQL', count: 28, percentage: 56 }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
      {bars.map((bar, i) => (
        <div key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px' }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{bar.label}</span>
            <span style={{ color: 'var(--text-muted)' }}>{bar.count} Projects</span>
          </div>
          <div
            style={{
              height: '6px',
              backgroundColor: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div
              style={{
                width: `${bar.percentage}%`,
                height: '100%',
                backgroundColor: 'var(--primary)',
                borderRadius: 'var(--radius-full)'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default { AreaChart, DonutChart, BarChart };
