import React from 'react';

const Badge = ({
  children,
  variant = 'slate',
  size = 'md',
  icon: Icon,
  className = '',
  style = {}
}) => {
  const variantClass = `badge-${variant}`;
  const sizeClass = size === 'sm' ? 'btn-sm' : '';

  return (
    <span
      className={`badge ${variantClass} ${sizeClass} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        ...style
      }}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : 14} />}
      {children}
    </span>
  );
};

export default Badge;
