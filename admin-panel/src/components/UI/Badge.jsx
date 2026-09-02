import React from 'react';

const Badge = ({
  children,
  variant = 'cyan', // 'cyan', 'emerald', 'violet', 'amber', 'rose', 'slate'
  size = 'md', // 'sm', 'md'
  icon: Icon,
  className = '',
  style = {}
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'emerald':
      case 'success':
      case 'active':
        return 'badge-emerald';
      case 'violet':
      case 'purple':
        return 'badge-violet';
      case 'amber':
      case 'warning':
        return 'badge-amber';
      case 'rose':
      case 'danger':
      case 'error':
        return 'badge-rose';
      case 'slate':
      case 'neutral':
        return 'badge-slate';
      case 'cyan':
      case 'primary':
      default:
        return 'badge-cyan';
    }
  };

  return (
    <span
      className={`badge ${getVariantClass()} ${className}`}
      style={{
        fontSize: size === 'sm' ? '0.6875rem' : '0.75rem',
        padding: size === 'sm' ? '0.15rem 0.5rem' : '0.25rem 0.625rem',
        ...style
      }}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : 14} />}
      {children}
    </span>
  );
};

export default Badge;
