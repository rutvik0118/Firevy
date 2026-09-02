import React from 'react';

export const LoadingSpinner = ({ message = 'Loading...', fullPage = false }) => {
  const spinnerContent = (
    <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin"></div>
        <div className="absolute inset-1 rounded-full border-4 border-purple-500/20 border-b-purple-500 animate-spin animation-delay-150"></div>
      </div>
      {message && <p className="text-sm font-medium text-slate-400 animate-pulse">{message}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-brand-dark">
        {spinnerContent}
      </div>
    );
  }

  return spinnerContent;
};

export default LoadingSpinner;
