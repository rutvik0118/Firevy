import React from 'react';

export const Badge = ({ children, variant = 'blue', className = '' }) => {
  const variants = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    slate: 'bg-gray-800 text-gray-300 border-gray-700'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${variants[variant] || variants.blue} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
