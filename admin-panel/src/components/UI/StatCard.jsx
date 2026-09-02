import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const StatCard = ({
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
      className={`glass-card glass-card-hover stat-card ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
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
              fontWeight: 600,
              color: trendDirection === 'up' ? '#34d399' : trendDirection === 'down' ? '#f87171' : 'var(--text-muted)',
            }}
          >
            {trendDirection === 'up' && <ArrowUpRight size={13} />}
            {trendDirection === 'down' && <ArrowDownRight size={13} />}
            {trendDirection === 'neutral' && <Minus size={13} />}
            {trend}
          </span>
        )}
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default StatCard;
