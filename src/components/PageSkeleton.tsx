import React from 'react';

export default function PageSkeleton() {
  return (
    <div className="animate-pulse space-y-8 w-full">
      <div className="space-y-4">
        <div className="h-8 bg-stone-200 dark:bg-stone-800 rounded-md w-1/3"></div>
        <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded-md w-2/3"></div>
      </div>
      
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <div className="h-5 bg-stone-200 dark:bg-stone-800 rounded-md w-1/4"></div>
            <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded-md w-full"></div>
            <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded-md w-full"></div>
            <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded-md w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
