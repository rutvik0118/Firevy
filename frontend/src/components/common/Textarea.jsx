import React, { forwardRef } from 'react';

export const Textarea = forwardRef(({ label, error, helperText, rows = 4, className = '', ...props }, ref) => {
  return (
    <div className="w-full flex flex-col space-y-1.5 text-left">
      {label && (
        <label className="text-sm font-medium text-slate-300">
          {label} {props.required && <span className="text-red-400">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`w-full px-4 py-3 bg-brand-card/80 border text-gray-100 placeholder-slate-500 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-y ${
          error
            ? 'border-red-500/80 focus:ring-red-500'
            : 'border-gray-800 focus:border-blue-500 focus:ring-blue-500/30'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-400 font-medium">{error}</span>}
      {helperText && !error && <span className="text-xs text-slate-500">{helperText}</span>}
    </div>
  );
});

Textarea.displayName = 'Textarea';
export default Textarea;
