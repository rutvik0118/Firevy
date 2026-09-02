import React, { useState } from 'react';

// Clean Minimalist SVG Area Chart
export const AreaChart = ({
  data = [
    { label: 'Jan', value: 35 },
    { label: 'Feb', value: 58 },
    { label: 'Mar', value: 48 },
    { label: 'Apr', value: 72 },
    { label: 'May', value: 89 },
    { label: 'Jun', value: 110 },
    { label: 'Jul', value: 95 },
    { label: 'Aug', value: 130 },
  ],
  height = 230,
  color = '#ffffff',
  gradientId = 'whiteGrad'
}) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  if (!data || data.length === 0) return null;

  const width = 600;
  const paddingX = 40;
  const paddingY = 25;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;

  const values = data.map((d) => d.value);
  const minVal = Math.min(...values, 0);
  const maxVal = Math.max(...values) * 1.15 || 100;

  const getX = (index) => paddingX + (index / (data.length - 1)) * chartWidth;
  const getY = (value) => height - paddingY - ((value - minVal) / (maxVal - minVal)) * chartHeight;

  const points = data.map((d, i) => `${getX(i)},${getY(d.value)}`);
  const linePath = `M ${points.join(' L ')}`;
  const areaPath = `${linePath} L ${getX(data.length - 1)},${height - paddingY} L ${getX(0)},${height - paddingY} Z`;

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: '100%', height: 'auto', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Horizontal Grid lines */}
        {[0, 0.33, 0.66, 1].map((pct, i) => {
          const y = paddingY + chartHeight * pct;
          const gridVal = Math.round(maxVal - (maxVal - minVal) * pct);
          return (
            <g key={i}>
              <line
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                stroke="rgba(255, 255, 255, 0.07)"
                strokeDasharray="3 3"
              />
              <text
                x={paddingX - 10}
                y={y + 4}
                fill="#6b7280"
                fontSize="10"
                textAnchor="end"
                fontFamily="var(--font-mono)"
              >
                {gridVal}
              </text>
            </g>
          );
        })}

        {/* Filled Area */}
        <path d={areaPath} fill={`url(#${gradientId})`} />

        {/* Line Curve */}
        <path
          d={linePath}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interactive Points */}
        {data.map((d, i) => {
          const cx = getX(i);
          const cy = getY(d.value);
          const isHovered = hoveredPoint === i;
          return (
            <g
              key={i}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              {/* X Axis Labels */}
              <text
                x={cx}
                y={height - 6}
                fill="#9ca3af"
                fontSize="11"
                textAnchor="middle"
                fontFamily="var(--font-sans)"
              >
                {d.label}
              </text>

              {/* Point Circle */}
              <circle
                cx={cx}
                cy={cy}
                r={isHovered ? 5 : 3.5}
                fill="#111827"
                stroke="#ffffff"
                strokeWidth="2"
              />

              {/* Tooltip on Hover */}
              {isHovered && (
                <g>
                  <rect
                    x={cx - 30}
                    y={cy - 30}
                    width="60"
                    height="22"
                    rx="4"
                    fill="#1e293b"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                  <text
                    x={cx}
                    y={cy - 15}
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="700"
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                  >
                    {d.value} reqs
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Clean Donut Chart
export const DonutChart = ({
  data = [
    { label: 'AI & ML', value: 35, color: '#ffffff' },
    { label: 'Web & Cloud', value: 30, color: '#94a3b8' },
    { label: 'Mobile', value: 20, color: '#64748b' },
    { label: 'Design & QA', value: 15, color: '#475569' },
  ],
  size = 170,
  strokeWidth = 22
}) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercent = 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {data.map((item, idx) => {
            const percent = item.value / total;
            const strokeDasharray = `${circumference * percent} ${circumference * (1 - percent)}`;
            const strokeDashoffset = -circumference * accumulatedPercent;
            accumulatedPercent += percent;

            return (
              <circle
                key={idx}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                style={{
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                }}
              />
            );
          })}
        </svg>

        {/* Center Text */}
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
          <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
            {total}
          </span>
          <span style={{ fontSize: '0.6875rem', color: '#9ca3af', textTransform: 'uppercase', marginTop: '4px' }}>
            Total
          </span>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem 1rem', width: '100%' }}>
        {data.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: item.color,
                display: 'inline-block'
              }}
            />
            <span style={{ color: 'var(--text-secondary)', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {item.label}
            </span>
            <span style={{ fontWeight: 700, color: '#ffffff' }}>{Math.round((item.value / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Clean Horizontal Bar Chart
export const BarChart = ({
  data = [
    { label: 'Frontend Stack', value: 42, count: '4 Techs', color: '#ffffff' },
    { label: 'Backend Stack', value: 38, count: '4 Techs', color: '#cbd5e1' },
    { label: 'DevOps & Cloud', value: 55, count: '6 Techs', color: '#94a3b8' },
    { label: 'AI & Data', value: 30, count: '3 Techs', color: '#64748b' },
  ]
}) => {
  const maxVal = Math.max(...data.map((d) => d.value), 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      {data.map((item, idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item.label}</span>
            <span style={{ color: '#ffffff', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              {item.count || `${item.value}%`}
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '9999px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${(item.value / maxVal) * 100}%`,
                height: '100%',
                backgroundColor: item.color,
                borderRadius: '9999px',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
