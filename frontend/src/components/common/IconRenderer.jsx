import React from 'react';
import * as Icons from 'lucide-react';

export const IconRenderer = ({ name, className = 'w-6 h-6', defaultIcon = 'Code2' }) => {
  const IconComponent = Icons[name] || Icons[defaultIcon] || Icons.Code2;
  return <IconComponent className={className} />;
};

export default IconRenderer;
