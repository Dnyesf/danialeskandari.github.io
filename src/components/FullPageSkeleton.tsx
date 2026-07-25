import React from 'react';

export default function FullPageSkeleton() {
  return (
    <div className="h-screen bg-stone-50 dark:bg-stone-950 flex flex-col lg:flex-row overflow-hidden">
      {/* Sidebar Skeleton */}
      <aside className="hidden lg:flex w-[321px] h-full border-r border-stone-200 dark:border-stone-800 p-8 flex-col animate-pulse bg-stone-100 dark:bg-stone-900 relative">
        {/* Theme button skeleton */}
        <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800 absolute top-4 left-4" />
        
        {/* Avatar skeleton */}
        <div className="w-32 h-32 rounded-lg bg-stone-200 dark:bg-stone-800 mx-auto mt-8 mb-6" />
        
        {/* Name and title skeleton */}
        <div className="space-y-3 mb-8 flex flex-col items-center">
          <div className="h-6 w-3/4 bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-4 w-1/2 bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-4 w-2/3 bg-stone-200 dark:bg-stone-800 rounded" />
        </div>
        
        {/* Contact info skeleton */}
        <div className="space-y-4 mb-8 w-full">
          <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-4 w-5/6 bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-4 w-4/5 bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded" />
        </div>
        
        {/* Social buttons skeleton */}
        <div className="flex justify-center space-x-4 mt-auto mb-4">
          <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800" />
          <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800" />
          <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800" />
        </div>
        
        {/* Download CV button skeleton */}
        <div className="w-full h-10 bg-stone-200 dark:bg-stone-800 rounded-md" />
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-1 flex flex-col overflow-hidden animate-pulse">
        {/* Mobile Header Skeleton */}
        <div className="lg:hidden w-full h-16 border-b border-stone-200 dark:border-stone-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800" />
            <div className="h-5 w-32 bg-stone-200 dark:bg-stone-800 rounded" />
          </div>
          <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800" />
        </div>

        {/* Masthead Skeleton */}
        <div className="w-full h-14 border-b border-stone-200 dark:border-stone-800 px-6 sm:px-8 lg:px-12 items-center justify-between hidden lg:flex">
          <div className="flex space-x-8 h-full items-center">
            <div className="h-4 w-16 bg-stone-200 dark:bg-stone-800 rounded" />
            <div className="h-4 w-20 bg-stone-200 dark:bg-stone-800 rounded" />
            <div className="h-4 w-16 bg-stone-200 dark:bg-stone-800 rounded" />
            <div className="h-4 w-24 bg-stone-200 dark:bg-stone-800 rounded" />
          </div>
          <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800" />
        </div>

        {/* Content Area Skeleton */}
        <div className="p-4 sm:p-8 lg:p-12 w-full max-w-4xl mx-auto flex-1">
          <div className="space-y-8 w-full">
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
        </div>

        {/* Footer Skeleton */}
        <footer className="mt-auto border-t border-stone-200 dark:border-stone-800 py-6 lg:py-8">
          <div className="px-6 sm:px-8 lg:px-12 flex justify-center lg:justify-start">
            <div className="h-4 w-64 bg-stone-200 dark:bg-stone-800 rounded" />
          </div>
        </footer>
      </main>
    </div>
  );
}
