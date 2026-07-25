import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import clsx from 'clsx';

export default function Masthead() {
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      setCanScrollLeft(scrollLeft > 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [location.pathname]);

  // Auto-scroll to the active tab
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector('[data-active="true"]') as HTMLElement;
      if (activeElement) {
        // Scroll so the active element is at the left edge, but avoid the left gradient/button (48px wide)
        // Offset left relative to the container minus 48px to keep it visible past the button.
        const scrollPosition = activeElement.offsetLeft - scrollContainerRef.current.offsetLeft - 48;
        scrollContainerRef.current.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
      }
    }
  }, [location.pathname]);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 h-14 sm:h-16 px-6 sm:px-8 lg:px-10 border-b border-stone-200 dark:border-stone-800 flex flex-col justify-center bg-white dark:bg-stone-950 shrink-0 transition-colors">
      <div className="flex items-center justify-between h-full relative">
        
        {/* Mobile Nav */}
        <div className="flex lg:hidden w-full h-full relative items-center">
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 flex items-center justify-start w-12 bg-gradient-to-r from-white dark:from-stone-950 via-white dark:via-stone-950 to-transparent pointer-events-none z-10 transition-colors">
              <button 
                onClick={scrollLeft}
                className="w-6 h-6 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 pointer-events-auto bg-white dark:bg-stone-800 rounded shadow-sm border border-stone-200 dark:border-stone-700 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          )}
          <ul 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex-1 overflow-x-auto no-scrollbar flex space-x-6 h-full items-center relative pr-8 pl-8"
          >
            {siteData.nav.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} 
                  data-active={isActive}
                  className={clsx(
                  'h-full flex items-center shrink-0 transition-colors',
                  isActive
                    ? 'text-stone-900 dark:text-stone-100 border-b-2 border-stone-900 dark:border-stone-100 -mb-[2px]'
                    : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 border-b-2 border-transparent -mb-[2px]'
                )}>
                  <Link to={item.path} className="h-full flex items-center text-[14px] font-bold px-1 py-1">
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end w-12 bg-gradient-to-l from-white dark:from-stone-950 via-white dark:via-stone-950 to-transparent pointer-events-none z-10 transition-colors">
              <button 
                onClick={scrollRight}
                className="w-6 h-6 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 pointer-events-auto bg-white dark:bg-stone-800 rounded shadow-sm border border-stone-200 dark:border-stone-700 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        
        {/* Desktop nav */}
        <ul className="hidden lg:flex space-x-8 text-sm font-medium tracking-tight text-stone-600 dark:text-stone-400 h-full">
          {siteData.nav.map((item) => (
            <li key={item.path} className={clsx(
              'h-full flex items-center transition-colors',
              location.pathname === item.path
                ? 'text-stone-900 dark:text-stone-100 border-b-2 border-stone-900 dark:border-stone-100 -mb-[2px]'
                : 'hover:text-stone-900 dark:hover:text-stone-100 border-b-2 border-transparent -mb-[2px]'
            )}>
              <Link to={item.path} className="h-full flex items-center px-1">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop specific items */}
        <div className="hidden lg:block text-xs font-bold text-stone-400 dark:text-stone-500 tracking-widest uppercase transition-colors">
          Portfolio / {new Date().getFullYear()}
        </div>
      </div>
    </nav>
  );
}
