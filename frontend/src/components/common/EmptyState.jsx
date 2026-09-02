import React from 'react';
import { Inbox } from 'lucide-react';

export const EmptyState = ({ title = 'No items found', message = 'There are no items matching your criteria at this time.' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-brand-card/30 border border-gray-800 rounded-2xl max-w-lg mx-auto my-8">
      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-slate-400 mb-4">
        <Inbox className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-gray-200 mb-1">{title}</h3>
      <p className="text-sm text-slate-400">{message}</p>
    </div>
  );
};

export default EmptyState;
