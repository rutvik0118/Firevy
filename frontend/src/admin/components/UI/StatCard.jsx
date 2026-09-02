import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendDirection = 'up',
  subtitle,
  onClick
}) => {
  return (
    <div
      className={`stat-card ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="stat-card-header">
        <span className="stat-title">{title}</span>
        {Icon && (
          <div className="stat-icon-wrap">
            <Icon size={18} />
          </div>
        )}
      </div>

      <div className="stat-value">{value}</div>

      <div className="stat-subtext">
        {trend && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: 700,
              color: trendDirection === 'up' ? '#059669' : trendDirection === 'down' ? '#DC2626' : 'var(--text-muted)'
            }}
          >
            {trendDirection === 'up' && <ArrowUpRight size={14} />}
            {trendDirection === 'down' && <ArrowDownRight size={14} />}
            {trendDirection === 'neutral' && <Minus size={14} />}
            {trend}
          </span>
        )}
        {subtitle && <span>{subtitle}</span>}
      </div>
    </div>
  );
};

export default StatCard;
