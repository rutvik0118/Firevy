import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Button from './Button';

export const ErrorState = ({ title = 'Failed to load content', message = 'Something went wrong while fetching data. Please try again.', onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-brand-card/50 border border-red-500/20 rounded-2xl max-w-xl mx-auto my-8">
      <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
        <AlertTriangle className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 mb-6">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" icon={RefreshCw}>
          Retry Connection
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
